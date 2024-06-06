import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

function ButtonRedis({loading,unSubscriptionById,dataSubscription,colorBg,colorBt,title1,title2,title3} : any) {
  return (
    <div
      className="m-t-b wrap-redis-id flex j-spaceBetween"
      style={{ background: colorBg }}
    >
      <div>
        <p className="text-18 font-500" >
          {title1}
        </p>
        <p style={{ fontSize: "14px" }}>
         {title2}
        </p>
      </div>
      <button
        disabled={loading}
        onClick={() =>
          unSubscriptionById(dataSubscription?.subscription?._id)
        }
        className="button-app"
        style={{ background: colorBt, borderRadius: "10px" }}
      >
        {loading ? (
          <Spin
            indicator={
              <LoadingOutlined
                style={{ fontSize: 24 }}
                spin={true}
                aria-hidden={true}
              />
            }
          />
        ) : 
          title3
        }
      </button>
    </div>
  );
}

export default ButtonRedis;
