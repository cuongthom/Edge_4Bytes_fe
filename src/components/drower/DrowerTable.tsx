import { Drawer } from "antd";
import CreateDatabaseTable from "../table/CreateDatabaseTable";
function DrowerTable({
  tableNameFirst,
  tableName,
  setTableNameFirst,
  columnTable,
  setIsModalAddColumn,
  open,
  onClose,
}: any) {
  return (
    <>
      <Drawer onClose={onClose} open={open} style={{ width: "100%" }}>
        <CreateDatabaseTable
          tableNameFirst={tableNameFirst}
          tableName={tableName}
          setTableNameFirst={setTableNameFirst}
          columnTable={columnTable}
          setIsModalAddColumn={setIsModalAddColumn}
        />
      </Drawer>
    </>
  );
}

export default DrowerTable;
