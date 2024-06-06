import { Row } from "antd";
import GridBox from "../grid_box/GridBox";
import { IoArrowForwardOutline } from "react-icons/io5";

function UsageRedis() {
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
            title={"COMMANDS"}
            price={"7/ 10k per day"}
            spanRow={6}
            xl={6}
            lg={12}
            xs={24}
          />
          <GridBox
            title={"BANDWIDTH"}
            price={"188 B/ 50 GB"}
            spanRow={6}
            xl={6}
            lg={12}
            xs={24}
          />
          <GridBox
            title={"STORAGE"}
            price={"0 B / 256 MB"}
            spanRow={6}
            xl={6}
            lg={12}
            xs={24}
          />
          <GridBox
            title={"COST"}
            price={"$0.00"}
            spanRow={6}
            xl={6}
            lg={12}
            xs={24}
          />
        </Row>
      </div>
      <div
        className="wrap-border-gray wrap-border-redis "
        style={{ padding: "25px" }}
      >
        <div>
          <p className="text-18 font-500">Daily Commands(UTC+0)</p>
          <p>Last 5 days</p>
        </div>
        <div
          className="flex align-center"
          style={{ marginTop: "100px", padding: "0px 20px" }}
        >
          <div className="">
            <p
              className="font-500 text-center"
              style={{
                fontSize: "20px",
                padding: "20px 0px",
              }}
            >
              0
            </p>
            <p style={{ fontSize: "14px" }}>Friday</p>
          </div>
          <IoArrowForwardOutline
            style={{ fontSize: "20px", margin: "0px 70px" }}
          />
          <div className="">
            <p
              className="font-500 text-center"
              style={{
                fontSize: "20px",
                padding: "20px 0px",
              }}
            >
              0
            </p>
            <p style={{ fontSize: "14px" }}>Friday</p>
          </div>
          <IoArrowForwardOutline
            style={{ fontSize: "20px", margin: "0px 70px" }}
          />
          <div className="">
            <p
              className="font-500 text-center"
              style={{
                fontSize: "20px",
                padding: "20px 0px",
              }}
            >
              0
            </p>
            <p style={{ fontSize: "14px" }}>Friday</p>
          </div>
          <IoArrowForwardOutline
            style={{ fontSize: "20px", margin: "0px 70px" }}
          />
          <div className="">
            <p
              className="font-500 text-center"
              style={{
                fontSize: "20px",

                padding: "20px 0px",
              }}
            >
              0
            </p>
            <p style={{ fontSize: "14px" }}>Friday</p>
          </div>
          <IoArrowForwardOutline
            style={{ fontSize: "20px", margin: "0px 70px" }}
          />
          <div>
            <p
              className="font-500 text-center"
              style={{
                background: "green",
                fontSize: "20px",
                padding: "40px ",
              }}
            ></p>
            <p style={{ fontSize: "14px" }}>Friday</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default UsageRedis;
