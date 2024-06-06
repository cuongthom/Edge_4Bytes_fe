import AccountTitle from "../../components/account/AccountTitle";


function AuditLogsPage() {
  return (
    <>
      <AccountTitle titleAccount={"Account"} />
      <div className="container">
        <div style={{ padding: "20px 0px" }}>
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
        {/* <TableReusable
          title1={"Date"}
          title2={"Source"}
          title3={"Action"}
          title4={"Entity"}
          title5={"Entity"}
        /> */}
      </div>
    </>
  );
}

export default AuditLogsPage;
