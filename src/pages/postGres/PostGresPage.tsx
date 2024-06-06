import { Row } from "antd";
import GridBox from "../../components/grid_box/GridBox";
import { Link, useNavigate } from "react-router-dom";
import CreateUpstash from "../../components/createUpstash/CreateUpstash";
import upstashService from "../../services/upstashService";
import { endDateMonth } from "../../utils";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { ACCESS_TOKEN_KEY } from "../../constants";

function PostGresPage() {
  const access_token = localStorage.getItem(ACCESS_TOKEN_KEY);
  const [dataSubscription, setDataSubscription] = useState<any>([]);
  const navigate = useNavigate();
  useQuery({
    queryKey: ["data_subscription"],
    queryFn: async () => {
      if(!access_token) return
      const res = await upstashService.createSubscription(access_token);
      getDataSubscription(res.data);
    },
  });
  const getDataSubscription = async (data: any) => {
    const filterData = data?.filter(
      (dataItem: any) => dataItem?.subscription?.type === "POSTGRES"
    );
    setDataSubscription(filterData);
  };

  // useEffect(() => {
  //   getDataSubscription();
  // }, []);
  return (
    <>
      <div className="bg-gray">
        <div className="container">
          <div style={{ padding: "20px 0px" }}>
            <div style={{ paddingBottom: "20px" }}>
              <p style={{ margin: 0, fontWeight: "600" }}>
                Usage For Current Billing
              </p>
            </div>
            <Row
              gutter={[
                { xs: 8, sm: 16, md: 24, lg: 32 },
                { xs: 8, sm: 16, md: 24, lg: 32 },
              ]}
            >
              <GridBox
                title={"MESSAGES"}
                price={"0"}
                spanRow={8}
                xl={8}
                lg={12}
                xs={24}
              />
              <GridBox
                title={"MESSAGES"}
                price={"0"}
                spanRow={8}
                xl={8}
                lg={12}
                xs={24}
              />
              <GridBox
                title={"MESSAGES"}
                price={"0"}
                spanRow={8}
                xl={8}
                lg={12}
                xs={24}
              />
            </Row>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="flex j-spaceBetween" style={{ padding: "20px 0px" }}>
          <div className="d-block">
            <link
              rel="stylesheet"
              href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,200,0,0"
            />
            <form className="search-box">
              <button
                style={{
                  background: "none",
                  border: "none",
                  padding: "5px",
                  width: "50px",
                }}
              >
                <span
                  style={{ verticalAlign: "-10px", color: "#9B9B9B" }}
                  className="material-symbols-outlined"
                >
                  search
                </span>
              </button>
              <input
                className="input-search"
                style={{ verticalAlign: "4px", padding: "0px 10px" }}
                type="text"
                name="focus"
                placeholder="Search..."
              />
            </form>
          </div>
          <div>
            <Link to={"/pricing/vector?type=postgres"}>
              <button className="button-app" style={{ borderRadius: "10px" }}>
                Create Postgres
              </button>
            </Link>
          </div>
        </div>
        {dataSubscription
          ?.filter(
            (dataItem: any) => dataItem?.subscription?.type === "POSTGRES"
          )
          .map((item: any, index: any) => (
            <div
              onClick={() => navigate(`/postgres/${item?.subscription?._id}`)}
              key={index}
            >
              <div className="plan-border align-center">
                <div className="flex align-center">
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    role="icon"
                  >
                    <g clipPath="url(#product_vector)">
                      <path
                        d="M24.889 0H7.11A7.111 7.111 0 0 0 0 7.111V24.89A7.111 7.111 0 0 0 7.111 32H24.89A7.111 7.111 0 0 0 32 24.889V7.11A7.111 7.111 0 0 0 24.889 0Z"
                        fill="#EA580C"
                      ></path>
                      <path
                        d="M16 4.444H7.378a2.933 2.933 0 1 0 0 5.867H16a2.933 2.933 0 0 0 0-5.867ZM27.556 7.378a2.933 2.933 0 1 0-5.867 0 2.933 2.933 0 0 0 5.867 0ZM10.311 16a2.933 2.933 0 1 0-5.867 0 2.933 2.933 0 0 0 5.867 0ZM24.622 13.067H16a2.933 2.933 0 1 0 0 5.866h8.622a2.933 2.933 0 0 0 0-5.866ZM15.556 22H6.933a2.933 2.933 0 1 0 0 5.867h8.623a2.933 2.933 0 0 0 0-5.867ZM27.556 24.622a2.933 2.933 0 1 0-5.867 0 2.933 2.933 0 0 0 5.867 0Z"
                        fill="#FFF7ED"
                      ></path>
                    </g>
                    <defs>
                      <clipPath id="product_vector">
                        <path fill="#fff" d="M0 0h32v32H0z"></path>
                      </clipPath>
                    </defs>
                  </svg>
                  <div style={{ padding: "0px 10px" }}>
                    <p style={{ fontSize: "12px" }}>Name</p>
                    <p style={{ fontWeight: "600" }}>{item?.plan?.name}</p>
                  </div>
                </div>
                <div>
                  <p style={{ fontSize: "12px" }}>Price</p>
                  <p style={{ fontWeight: "600" }}>{item?.plan?.price}$</p>
                </div>
                <div>
                  <p style={{ fontSize: "12px" }}>Type</p>
                  <p style={{ fontWeight: "600" }}>
                    {item?.subscription?.type}
                  </p>
                </div>
                <div>
                  <p style={{ fontSize: "12px" }}>EndDate</p>
                  <p style={{ fontWeight: "600" }}>
                    {endDateMonth(item?.subscription?.endDate)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        {dataSubscription?.length === 0 && <CreateUpstash />}
      </div>
    </>
  );
}

export default PostGresPage;
