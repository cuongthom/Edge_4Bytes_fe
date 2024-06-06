import GridBox from "../../components/grid_box/GridBox";
import { Row } from "antd";
import AccountTitle from "../../components/account/AccountTitle";


function CostExplorer() {
  return (
    <>
      <AccountTitle titleAccount={"Account"} />
      <div className="container">
        <div className="bg-gray" style={{ borderRadius: "15px" }}>
          <Row
            gutter={[
              { xs: 8, sm: 16, md: 24, lg: 32 },
              { xs: 8, sm: 16, md: 24, lg: 32 },
            ]}
            style={{ padding: "20px" }}
          >
            <GridBox
              title={"COUNT"}
              price={"0"}
              spanRow={6}
              xl={6}
              lg={12}
              xs={24}
            />
            <GridBox
              title={"REQUESTS"}
              price={"0"}
              spanRow={6}
              xl={6}
              lg={12}
              xs={24}
            />
            <GridBox
              title={"BANDWIDTH"}
              price={"0B"}
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
        <div>
          {/* <TableReusable title1={"Database name"} title2={"Commands"} title3={"Storage"} title4={"Cost"} title5={"IP"} /> */}
        </div>
      </div>
    </>
  );
}

export default CostExplorer;
