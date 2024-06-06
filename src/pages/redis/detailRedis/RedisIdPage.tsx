import { useParams, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import upstashService from "../../../services/upstashService";
import "swagger-ui-react/swagger-ui.css";
import { ACCESS_TOKEN_KEY } from "../../../constants";
import toast from "react-hot-toast";
import TItlePageId from "../../../components/titlePageId/TItlePageId";
import DetailRedis from "../../../components/detailRedisPage/DetailRedis";
import UsageRedis from "../../../components/detailRedisPage/UsageRedis";
import DataBrowser from "../../../components/detailRedisPage/DataBrowser";
import TabRedisDetail from "../../../components/tab/TabRedisDetail";

function RedisIdPage() {
  const { id } = useParams();
  let [searchParams, setSearchParams] = useSearchParams();
  const tabParams: any = searchParams.get("tab") || "Details";
  const [showAccessToken, setShowAccessToken] = useState(false);
  const [loading, setLoading] = useState(false);
  const [jwtSubscription, setSubscription] = useState<string>("");
  const accessToken = localStorage.getItem(ACCESS_TOKEN_KEY);
  const [dataSubscription, setDataSubscription] = useState<Record<string, any>>(
    {}
  );

  const getSubscriptionJwt = async () => {
    if (!id) return;
    if (!accessToken) return;
    try {
      setLoading(true);
      const res = await upstashService.get_subscription_jwt(id, accessToken);
      setSubscription(res?.data?.accessToken);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const showToken = () => {
    setShowAccessToken(!showAccessToken);
  };

  const copyAccessToken = () => {
    if (!showAccessToken) {
      toast.error("Cannot be copied");
      return;
    }
    navigator.clipboard.writeText(jwtSubscription || "*********");
    toast("Access token đã được sao chép!");
  };

  const copySubscription = () => {
    if (!id) {
      toast.error("Cannot be copied");
      return;
    }
    navigator.clipboard.writeText(id || "*********");
    toast("Subscription id đã được sao chép!");
  };

  const getSubscriptionId = async () => {
    if (!id) return;
    if (!accessToken) return;
    try {
      setLoading(true);
      const res = await upstashService.getSubscriptionById(id, accessToken);
      setDataSubscription(res.data);
    } catch (err: any) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const unSubscriptionById = async (id: string) => {
    if (!id) return;
    if (!accessToken) return;
    try {
      setLoading(true);
      await upstashService.unSubscriptionById(id, accessToken);
      toast.success("Discontinue redis success");
    } catch (err: any) {
      console.log(err);
      toast.error(err?.response?.data?.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!id) return;
    getSubscriptionId();
    getSubscriptionJwt();
  }, [id]);

  return (
    <>
      <TItlePageId
        copySubscription={copySubscription}
        idSubscription={id}
        showToken={showToken}
        dataSubscription={dataSubscription}
        showAccessToken={showAccessToken}
        copyAccessToken={copyAccessToken}
        jwtSubscription={jwtSubscription}
      />
      <div className="container ">
        <div
          className="tab-account flex wrap-account"
          style={{ padding: "20px 0px" }}
        >
          <TabRedisDetail
            tabParams={tabParams}
            setSearchParams={setSearchParams}
            title={"Details"}
            title2={"Details"}
          />
          <TabRedisDetail
            tabParams={tabParams}
            setSearchParams={setSearchParams}
            title={"Usage"}
            title2={"Usage"}
          />
          <TabRedisDetail
            tabParams={tabParams}
            setSearchParams={setSearchParams}
            title={"DataBrowser"}
            title2={" Data Browser"}
          />
        </div>
        {tabParams === "Details" && (
          <DetailRedis
            dataSubscription={dataSubscription}
            accessToken={accessToken}
            loading={loading}
            unSubscriptionById={unSubscriptionById}
          />
        )}
        {tabParams === "Usage" && <UsageRedis />}
        {tabParams === "DataBrowser" && <DataBrowser />}
      </div>
    </>
  );
}

export default RedisIdPage;
