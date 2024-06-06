function DataBrowser() {
  return (
    <div
      className="flex"
      style={{ background: "#f5f5f5", borderRadius: "10px" }}
    >
      <div style={{ width: "25%", margin: "10px" }}>
        <div className="flex align-center ">
          <div className="search-box" style={{ margin: "10px 0px" }}>
            <input
              className="input-search"
              style={{ verticalAlign: "4px", padding: "0px 10px" }}
              type="text"
              name="focus"
              placeholder="Table Name"
              required
            />
          </div>
          <button
            className="c-pointer button-app"
            style={{
              width: "50px",
              borderRadius: "10px",
              padding: "0px 0px",
              height: "40px",
            }}
          >
            +
          </button>
        </div>
        <div></div>
      </div>
      <div
        className="flex"
        style={{
          background: "white",
          height: "100vh",
          width: "75%",
          margin: "10px",
          borderRadius: "10px",
          textAlign: "center",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div>
          <svg
            width="47"
            height="36"
            viewBox="0 0 47 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M46.5 13.26L36.354 1.758C35.867 0.974 35.156 0.5 34.407 0.5H12.593C11.844 0.5 11.133 0.974 10.646 1.757L0.5 13.261V22.5H46.5V13.26Z"
              stroke="#D9D9D9"
            ></path>
            <path
              d="M33.113 16.431C33.113 14.826 34.107 13.501 35.34 13.5H46.5V31.637C46.5 33.76 45.18 35.5 43.55 35.5H3.45C1.82 35.5 0.5 33.759 0.5 31.637V13.5H11.66C12.893 13.5 13.887 14.823 13.887 16.428V16.45C13.887 18.055 14.892 19.351 16.124 19.351H30.876C32.108 19.351 33.113 18.043 33.113 16.438V16.431Z"
              fill="#FAFAFA"
              stroke="#D9D9D9"
            ></path>
          </svg>
          <p>Select a record from the list</p>
        </div>
      </div>
    </div>
  );
}

export default DataBrowser;
