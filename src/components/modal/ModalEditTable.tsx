import { Modal, Space } from "antd";
import { useState } from "react";
import toast from "react-hot-toast";
import { Field } from "../../constants/interface";
import upstashService from "../../services/upstashService";
import { FaTimes } from "react-icons/fa";
import { DownOutlined } from "@ant-design/icons";

function ModalEditTable({
  getColumnByTable,
  columnTable,
  tableNameFirst,
  getTableName,
  openModalTable,
  onClose,
  jwtSubscription,
  setLoading,
}: any) {
  const [fields, setFields] = useState<Field[]>([{ name: "" }]);
  const [tableName, setTableName] = useState<string>("");
  const [columnNameClicks] = useState<string[]>([""]);

  const handleChangeInput = (
    index: number,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { value } = event.target;
    const newFields = [...fields];
    newFields[index] = { ...newFields[index], name: value };
    setFields(newFields);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!tableName) {
      toast.error("Please add table name!");
      return;
    }
    const body = {
      tableName: tableName,
      columns: fields.map((field, index) => ({
        name: field.name,
        type: columnNameClicks[index],
      })),
    };
    const isEmptyColumn = (column: any) => {
      return !column.name || !column.type;
    };
    const hasEmptyColumn = body.columns.some(isEmptyColumn);
    if (hasEmptyColumn) {
      toast.error("Ensure that all your columns are named");
      return;
    }
    try {
      setLoading(true);
      await upstashService.createTable(jwtSubscription, body);
      toast.success(`Create table ${tableName} success!`);
      getTableName();
      onClose();
    } catch (err: any) {
      console.log(err);
      toast.error(`Create table ${tableName} failure!`);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteColumn = async (columnName: string) => {
    try {
      setLoading(true);
      await upstashService.deleteColumn(
        tableNameFirst,
        columnName,
        jwtSubscription
      );
      toast.success(`Delete column ${columnName} successfully!`);
      getColumnByTable();
    } catch (err: any) {
      console.log(err);
      toast.error(`Delete column ${columnName} failure!`);
    } finally {
      setLoading(false);
    }
  };
  return (
    <Modal
      title={<p className="text-18">{`Delete Column ${tableNameFirst}`}</p>}
      open={openModalTable}
      onCancel={onClose}
      footer={null}
    >
      <div>
        <div className="search-box" style={{ margin: "10px 0px" }}>
          <input
            onChange={(e) => setTableName(e.target.value)}
            className="input-search"
            style={{ verticalAlign: "4px", padding: "0px 10px" }}
            type="text"
            name="focus"
            value={tableNameFirst}
            placeholder="Table Name"
            required
          />
        </div>
        <hr className="vertical-hr" />
        <h3>Columns</h3>
        <div>
          <form onSubmit={handleSubmit} style={{ padding: "20px 0px" }}>
            <div className="flex">
              <p style={{ width: "45%", padding: "0px 10px" }}>Name</p>
              <p style={{ width: "40%" }}>Type</p>
            </div>
            {columnTable?.columns?.map((item: any, index: any) => (
              <div key={index} className="flex align-center c-pointer">
                <div className="ip-create-table" style={{ margin: "10px 0px" }}>
                  <input
                    className="input-search"
                    style={{ verticalAlign: "4px", padding: "0px 10px" }}
                    type="text"
                    placeholder="Column Name"
                    value={item?.column_name}
                    onChange={(e) => handleChangeInput(index, e)}
                  />
                </div>
                <div
                  className="ip-create-table"
                  style={{ margin: "10px 10px" }}
                >
                  <a
                    className=""
                    onClick={(e) => e.preventDefault()}
                    style={{ padding: "0px 10px", margin: "0 auto" }}
                  >
                    <Space className="align-center">
                      {!!columnNameClicks[index] ? (
                        <input
                          className="input-search"
                          style={{
                            verticalAlign: "4px",
                            padding: "0px 10px",
                          }}
                          type="text"
                          placeholder="Type"
                          value={columnNameClicks[index]}
                          onChange={(e) => handleChangeInput(index, e)}
                        />
                      ) : (
                        <p>{item?.data_type}</p>
                      )}
                      <DownOutlined style={{ fontSize: 14 }} />
                    </Space>
                  </a>
                </div>
                <p onClick={() => handleDeleteColumn(item?.column_name)}>
                  <FaTimes />
                </p>
              </div>
            ))}
          </form>
        </div>
      </div>
    </Modal>
  );
}

export default ModalEditTable;
