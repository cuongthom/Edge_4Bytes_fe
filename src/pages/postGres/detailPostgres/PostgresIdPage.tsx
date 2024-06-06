import { useEffect, useState } from "react";
import upstashService from "../../../services/upstashService";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";
import TItlePageId from "../../../components/titlePageId/TItlePageId";
import TablesName from "../../../components/table/TablesName";
import ModalAddColumn from "../../../components/modal/ModalAddColumn";
import DrowerTable from "../../../components/drower/DrowerTable";
import ModalAddTable from "../../../components/modal/ModalAddTable";
import SwaggerUI from "swagger-ui-react";
import { ACCESS_TOKEN_KEY } from "../../../constants";

function PostgresIdPage() {
  const access_token = localStorage.getItem(ACCESS_TOKEN_KEY);
  const { id } = useParams();
  const [open, setOpen] = useState(false);
  const [dataSubscription, setDataSubscription] = useState<Record<string, any>>(
    {}
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalAddColumn, setIsModalAddColumn] = useState(false);
  const [columnTable, setColumnTable] = useState();
  const [tableNameFirst, setTableNameFirst] = useState<string>("");
  const [tableName, setTableName] = useState<any>("");
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState<string>();
  const [type, setType] = useState<string>();
  const [jwtSubscription, setSubscription] = useState<string>("");
  const [showAccessToken, setShowAccessToken] = useState(false);

  const getSubscriptionJwt = async () => {
    if (!id) return;
    if (!access_token) return;
    try {
      setLoading(true);
      const res = await upstashService.get_subscription_jwt(id, access_token);
      setSubscription(res?.data?.accessToken);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };
  const getTableNameSubscription = async () => {
    if (!jwtSubscription) return;
    try {
      setLoading(true);
      const res = await upstashService.getTableName(jwtSubscription);
      setTableName(res.data);
      setTableNameFirst(res?.data?.tables[0].table_name);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
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
    if (!access_token) return;
    try {
      setLoading(true);
      const res = await upstashService.getSubscriptionById(id, access_token);
      setDataSubscription(res.data);
    } catch (err: any) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const createColumnTable = async () => {
    if (!id) return;
    if (!name) {
      toast.error("Please enter column name!");
      return;
    }
    if (!type) {
      toast.error("Ensure that all your columns are named");
      return;
    }
    const body = {
      columns: [
        {
          name: name,
          type: type,
        },
      ],
    };

    try {
      setLoading(true);
      await upstashService.createColumnTable(
        jwtSubscription,
        tableNameFirst,
        body
      );
      toast.success(`successfully created column "${name}"`);
      handleCancelAddColumn();
      getColumnByTable();
      setName("");
      setType("");
    } catch (err: any) {
      console.log(err);
      toast.error(err?.response?.data?.message);
    } finally {
      setLoading(false);
    }
  };
  const getColumnByTable = async () => {
    if (!jwtSubscription) return;
    if (!id) return;
    try {
      setLoading(true);
      const res = await upstashService.getColumnByTableName(
        tableNameFirst,
        jwtSubscription
      );
      setColumnTable(res.data);
    } catch (err: any) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleCancelAddColumn = () => {
    setIsModalAddColumn(false);
  };

  const onClose = () => {
    setOpen(false);
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

  useEffect(() => {
    if (!id) return;
    getSubscriptionId();
    getSubscriptionJwt();
  }, [id]);
  useEffect(() => {
    if (!tableNameFirst) return;
    getColumnByTable();
  }, [tableNameFirst]);
  useEffect(() => {
    getTableNameSubscription();
  }, [id, jwtSubscription]);
  return (
    <>
      <TItlePageId
        idSubscription={id}
        dataSubscription={dataSubscription}
        copySubscription={copySubscription}
        jwtSubscription={jwtSubscription}
        showToken={showToken}
        copyAccessToken={copyAccessToken}
        showAccessToken={showAccessToken}
      />

      <div className="container">
        <div
          className="flex j-spaceBetween align-center"
          style={{ margin: "20px 0px" }}
        >
          <p className="font-500" style={{ fontSize: "20px" }}>
            Database Tables
          </p>
          <p
            onClick={() => setIsModalOpen(true)}
            className="c-pointer button-app"
            style={{ padding: "10px", width: "150px", borderRadius: "10px" }}
          >
            + New table
          </p>
        </div>

        <TablesName
          getTableNameSubscription={getTableNameSubscription}
          getColumnByTable={getColumnByTable}
          tableNameFirst={tableNameFirst}
          loading={loading}
          setLoading={setLoading}
          jwtSubscription={jwtSubscription}
          setTableNameFirst={setTableNameFirst}
          setOpen={setOpen}
          tableName={tableName}
          columnTable={columnTable}
        />
        <SwaggerUI url="https://postgrest-1709689859942.vinhomes.co.uk/" />
      </div>
      <DrowerTable
        tableNameFirst={tableNameFirst}
        tableName={tableName}
        setTableNameFirst={setTableNameFirst}
        columnTable={columnTable}
        setIsModalAddColumn={setIsModalAddColumn}
        open={open}
        onClose={onClose}
      />
      <ModalAddTable
        getTableName={getTableNameSubscription}
        jwtSubscription={jwtSubscription}
        loading={loading}
        isModalOpen={isModalOpen}
        handleCancel={handleCancel}
        setLoading={setLoading}
      />
      <ModalAddColumn
        loading={loading}
        createColumnTable={createColumnTable}
        type={type}
        setName={setName}
        setType={setType}
        handleCancelAddColumn={handleCancelAddColumn}
        isModalAddColumn={isModalAddColumn}
      />
    </>
  );
}

export default PostgresIdPage;
