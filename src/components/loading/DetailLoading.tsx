import { Spin } from "antd";


function DetailLoading() {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        color: "#10b981",
      }}
    >
      <Spin size="large" style={{ color: "#10b981" }} />
    </div>
  );
}

export default DetailLoading;
