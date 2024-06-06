

function CreateDatabaseTable({
  tableNameFirst,
  tableName,
  setTableNameFirst,
  columnTable,
  setIsModalAddColumn,
}: any) {
  return (
    <div
      className=" scrollable-table App flex"
      style={{ paddingTop: "30px", borderRadius: "20px" }}
    >
      <div
        style={{
          width: "15%",
          border: "1px solid #e3e5e3",
          textAlign: "center",
          borderRadius: "10px 0px 0px 10px",
        }}
      >
        <h3 style={{ padding: "25px 0px" }}>Table Name</h3>
        <div style={{ padding: "10px 0px" }}>
          {tableName?.tables.map((item: any) => (
            <p
              className={
                tableNameFirst === item?.table_name
                  ? "app-table-createDatabase-bg app-table-createDatabase"
                  : "app-table-createDatabase"
              }
              onClick={() => setTableNameFirst(item?.table_name)}
              tabIndex={0}
            >
              {item?.table_name}
            </p>
          ))}
        </div>
      </div>
      <div
        className="scrollable-table"
        style={{ borderRadius: "0px 10px 10px 0px" }}
      >
        <table>
          <thead>
            <tr>
              {columnTable?.columns?.map((item: any) => (
                <th>
                  <p className="text-18" >{item?.column_name}</p>
                  <p style={{ fontSize: "10px" }}>{`( ${item?.data_type} )`}</p>
                </th>
              ))}
              <th
                className="c-pointer app-table-header"
                onClick={() => setIsModalAddColumn(true)}
              >
                +
              </th>
              {/* Thêm thêm các tiêu đề cột ở đây nếu cần */}
            </tr>
          </thead>
          <tbody>
            <tr>
              {/* <td>cuong</td>
                            <td>name</td>
                            <td>lop</td>

              Thêm thêm ô dữ liệu ở đây nếu cần */}
            
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CreateDatabaseTable;
