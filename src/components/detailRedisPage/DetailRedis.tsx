import { Col, Row } from "antd";
import GridBox from "../grid_box/GridBox";
import TitleRedisInsight from "../titlePageId/TitleRedisInsight";
import SwaggerUI from "swagger-ui-react";
import DemoCodeRedis from "../redisInfor/DemoCodeRedis";
import { IoArrowForwardOutline, IoSaveOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import TitleSubscriptionRedis from "../titlePageId/TitleSubscriptionRedis";
import ButtonRedis from "../button/ButtonRedis";

function DetailRedis({
  dataSubscription,
  accessToken,
  loading,
  unSubscriptionById,
}: any) {
  return (
    <>
      <div
        className="bg-gray "
        style={{ borderRadius: "15px", marginTop: "20px" }}
      >
        <Row
          gutter={[
            { xs: 8, sm: 16, md: 24, lg: 32 },
            { xs: 8, sm: 16, md: 24, lg: 32 },
          ]}
          style={{ padding: "20px" }}
        >
          <GridBox
            title={"DailyCommandsUsed"}
            price={dataSubscription?.subscription?.dailyCommandsUsed}
            spanRow={6}
            xl={6}
            lg={12}
            xs={24}
          />
          <GridBox
            title={"TotalCommandsUsed"}
            price={dataSubscription?.subscription?.totalCommandsUsed}
            spanRow={6}
            xl={6}
            lg={12}
            xs={24}
          />
          <GridBox
            title={"STORAGE"}
            price={"0 B"}
            spanRow={6}
            xl={6}
            lg={12}
            xs={24}
          />
          <GridBox
            title={"COST"}
            price={dataSubscription?.plan?.price + "$"}
            spanRow={6}
            xl={6}
            lg={12}
            xs={24}
          />
        </Row>
      </div>
      <div
        className="flex j-spaceBetween wrap-border-gray wrap-border-redis"
        style={{ padding: "20px 30px" }}
      >
        <TitleRedisInsight
          title={"redis insight"}
          title1={"us1-legal-cheetah-41140.upstash.io"}
        />
        <TitleRedisInsight title={"Password"} title1={"•••••••••"} />
        <TitleRedisInsight title={"Port"} title1={"41140"} />
        <TitleRedisInsight title={"TLS/SSL"} title1={"Disabled"} />
      </div>
      <div>
        <SwaggerUI url="https://edge-be.vinhomes.co.uk/get-redis-swagger-json" />
        <div className="m-t-b wrap-redis-id">
          <p className="font-500" style={{ fontSize: "20px"}}>REST API</p>
          <p style={{ fontSize: "13px", color: "gray" }}>
            REST API enables you to access your Upstash database using REST
          </p>
          <div
            style={{
              borderRadius: "10px",
              padding: "10px 20px",
              background: "#f3f6f4",
              margin: "20px 0px",
            }}
          >
            <p
              style={{
                color: "#10b981",
                textShadow: "0 0 0.25px currentcolor",
                textDecoration: "underline",
              }}
            >
              URL
            </p>
            <div style={{ padding: "10px 0px" }}>
              <DemoCodeRedis
                index={"1"}
                title={"--url"}
                content={`"https://edge-be.vinhomes.co.uk/api-v1/redis/__SUBSCRIPTIONID__ \"`}
              />
              <DemoCodeRedis
                index={"2"}
                title={"--header"}
                content={`"Authorization: Bearer ${accessToken}${(
                  <IoSaveOutline />
                )}"`}
              />
              <DemoCodeRedis
                index={"3"}
                title={"--header"}
                content={`"Content-Type: application/json \"`}
              />
              <DemoCodeRedis
                index={"4"}
                title={"--data"}
                content={`"command": ["SET", "foo","bar"]`}
              />
            </div>
          </div>
          <Link to={"/documents/redis"}>
            <div
              className="align-center flex c-pointer text-hover-green"
              style={{ width: "30%" }}
            >
              <p className=" ">Read more documents </p>
              <IoArrowForwardOutline style={{ margin: "0px 10px" }} />
            </div>
          </Link>
        </div>
      </div>
      <div
        className="wrap-border-gray wrap-border-redis"
        style={{ padding: "20px 30px" }}
      >
        <div style={{ paddingBottom: "20px" }}>
          <p style={{ fontSize: "22px", fontWeight: "600" }}>Subscription</p>
          <p>Check Pro/Enterprise Plans to learn more.</p>
        </div>
        <Row>
          <Col className="" span={8}>
            <div style={{ padding: "30px 0px" }}></div>
            <TitleSubscriptionRedis title={"Max Commands per Second"} />
            <TitleSubscriptionRedis title={"Max Request Size"} />
            <TitleSubscriptionRedis title={"Max Record Size"} />
            <TitleSubscriptionRedis title={"Max Data Size"} />
            <TitleSubscriptionRedis title={"Max Concurrent Connections"} />
            <TitleSubscriptionRedis title={"Monthly Bandwidth Limit"} />
            <TitleSubscriptionRedis title={"Price (per month)"} />
            <TitleSubscriptionRedis />
          </Col>
          <Col className="" span={8} style={{ background: "#eff6ff" }}>
            <div style={{ padding: "9.6px 10px" }}>
              <p style={{ fontWeight: "600" }}>Free</p>
              <p
                className="text-white"
                style={{
                  background: "#3b82f6",
                  padding: "3px 5px",
                  fontSize: "12px",
                  width: "80px",
                  borderRadius: "10px",
                }}
              >
                Current Plan
              </p>
            </div>
            <TitleSubscriptionRedis title={"1,000"} />
            <TitleSubscriptionRedis title={"1MB"} />
            <TitleSubscriptionRedis title={"100MB"} />
            <TitleSubscriptionRedis title={"256MB"} />
            <TitleSubscriptionRedis title={"100"} />
            <TitleSubscriptionRedis title={"50GB"} />
            <TitleSubscriptionRedis title={"Free"} />
            <TitleSubscriptionRedis />
          </Col>
          <Col className="" span={8}>
            <div style={{ padding: "20.8px 10px" }}>
              <p style={{ fontWeight: "600" }}>Pay as You Go</p>
            </div>
            <TitleSubscriptionRedis title={"1,000"} />
            <TitleSubscriptionRedis title={"1MB"} />
            <TitleSubscriptionRedis title={"100MB"} />
            <TitleSubscriptionRedis title={"10GB"} />
            <TitleSubscriptionRedis title={"1,000"} />
            <TitleSubscriptionRedis title={"200GB"} />
            <TitleSubscriptionRedis title={"$0.5 (per 100K commands)"} />
            <TitleSubscriptionRedis />
            <Link to={"/pricing/vector?type=redis"}>
              <button
                className="text-white"
                style={{
                  padding: "10px",
                  background: "#10b981",
                  borderRadius: "10px",
                  border: "none",
                  margin: "0px 10px",
                }}
              >
                Buy Now
              </button>
            </Link>
          </Col>
        </Row>
      </div>

      {/* <ButtonRedis
        loading={loading}
        colorBg={"#fff7ed"}
        colorBt={"#f97316"}
        title1={"Reset Password"}
        title2={
          "This operation will generate a new random password for the Redis database."
        }
        title3={"Reset"}
      />
      <ButtonRedis
        loading={loading}
        colorBg={"#fff7ed"}
        colorBt={"#f97316"}
        title1={"Transfer Database"}
        title2={" Move your Database to a different team with zero downtime."}
        title3={"Transfer"}
      /> */}
      <ButtonRedis
        loading={loading}
        unSubscriptionById={unSubscriptionById}
        dataSubscription={dataSubscription}
        colorBg={"#fef2f2"}
        colorBt={"red"}
        title1={"Discontinue this redis"}
        title2={" Are you sure you want to stop using it for next month?"}
        title3={"Discontinue"}
      />
    </>
  );
}

export default DetailRedis;
