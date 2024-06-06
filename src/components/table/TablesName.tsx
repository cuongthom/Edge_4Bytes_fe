import { BsThreeDots } from "react-icons/bs";
import { Dropdown, Menu, Space } from "antd";
import { useState } from "react";
import ModalEditTable from "../modal/ModalEditTable";
import toast from "react-hot-toast";
import upstashService from "../../services/upstashService";

function TablesName({
  getTableNameSubscription,
  getColumnByTable,
  tableNameFirst,
  columnTable,
  setTableNameFirst,
  tableName,
  setOpen,
  jwtSubscription,
  setLoading,
}: any) {
  const [openModalTable, setOpenModalTable] = useState(false);

  const onClose = () => {
    setOpenModalTable(false);
  };
  const setTableName = (tableName: string) => {
    setOpen(true);
    setTableNameFirst(tableName);
  };
  const handleMenuClick = (e: any) => {
    const { key } = e;
    if (key === "view") {
      const selectedTableName =
        e.domEvent.currentTarget.getAttribute("data-table-name");
      setTableName(selectedTableName);
    }
  };

  const deleteTable = async (nameTable: any) => {
    if (!nameTable) return;
    try {
      setLoading(true);
      await upstashService.deleteTable(nameTable, jwtSubscription);
      toast.success(`Delete ${nameTable} successfully`);
      getTableNameSubscription();
    } catch (err: any) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const openAnhDeleteColumn = (tableName: string) => {
    if (!tableName) return;
    setOpenModalTable(true);
    setTableNameFirst(tableName);
  };
  return (
    <div className="scrollable-table" style={{ borderRadius: "10px" }}>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Rows (Estimated)</th>
            <th>Size (Estimated) </th>

            <th> </th>
            {/* Thêm thêm các tiêu đề cột ở đây nếu cần */}
          </tr>
        </thead>
        <tbody>
          {tableName?.tables?.map((table: any) => (
            <tr key={table?.table_name}>
              <td>{table?.table_name}</td>
              <td>No description</td>
              <td>0</td>
              <td>8192 bytes</td>

              <td className="c-pointer" style={{ textAlign: "center" }}>
                <Dropdown
                  overlay={
                    <Menu onClick={handleMenuClick}>
                      <Menu.Item key="view" data-table-name={table?.table_name}>
                        View table
                      </Menu.Item>
                      <Menu.Item
                        key="edit"
                        onClick={() => openAnhDeleteColumn(table?.table_name)}
                      >
                        Delete column
                      </Menu.Item>
                      <Menu.Item
                        key="delete"
                        onClick={() => deleteTable(table?.table_name)}
                      >
                        Delete table
                      </Menu.Item>
                    </Menu>
                  }
                  trigger={["click"]}
                >
                  <a
                    className="ant-dropdown-link"
                    onClick={(e) => e.preventDefault()}
                  >
                    <Space>
                      <BsThreeDots />
                    </Space>
                  </a>
                </Dropdown>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {tableName?.tables?.length === 0 && (
        <div style={{ padding: "10px 10px", border: "1px solid #d8d8d8" }}>
          <p>No tables created yet</p>
          <p> There are no tables found in the schema </p>
        </div>
      )}
      <ModalEditTable
        getColumnByTable={getColumnByTable}
        columnTable={columnTable}
        openModalTable={openModalTable}
        onClose={onClose}
        tableNameFirst={tableNameFirst}
        jwtSubscription={jwtSubscription}
        setLoading={setLoading}
      />
    </div>
  );
}

export default TablesName;
