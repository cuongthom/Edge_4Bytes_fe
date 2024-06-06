import { Modal } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import toast from "react-hot-toast";
import upstashService from "../../services/upstashService";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import { typeName } from "../../constants";
import { Field } from "../../constants/interface";

function ModalAddTable({
  getTableName,
  loading,
  isModalOpen,
  handleCancel,
  jwtSubscription,
  setLoading,
}: any) {
  const [fields, setFields] = useState<Field[]>([{ name: "" }]);
  const [tableName, setTableName] = useState<string>("");
  const [columnNameClicks, setColumnNameClicks] = useState<string[]>([""]);
  const handleAddField = () => {
    setFields([...fields, { name: "" }]);
    setColumnNameClicks([...columnNameClicks, ""]); // Thêm một giá trị mới cho mỗi trường type
  };

  const handleChangeInput = (
    index: number,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { value } = event.target;
    const newFields = [...fields];
    newFields[index] = { ...newFields[index], name: value };
    setFields(newFields);
  };

  const handleChangeType = (index: number, value: string) => {
    const newColumnNameClicks = [...columnNameClicks]; // Tạo một bản sao của mảng columnNameClicks
    newColumnNameClicks[index] = value; // Cập nhật giá trị cho trường type tại index
    setColumnNameClicks(newColumnNameClicks);
  };

  const handleRemoveField = (index: number) => {
    const newFields = [...fields];
    newFields.splice(index, 1);
    const newColumnNameClicks = [...columnNameClicks];
    newColumnNameClicks.splice(index, 1); // Xóa giá trị tương ứng trong mảng columnNameClicks
    setFields(newFields);
    setColumnNameClicks(newColumnNameClicks);
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
      })), // Tạo một mảng mới gồm các đối tượng có 'name' từ fields và 'type' từ columnNameClicks tương ứng
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
      handleCancel();

      setFields([{ name: "" }]);
      setColumnNameClicks([""]);
      setTableName("");
    } catch (err: any) {
      console.log(err);
      toast.error(`Create table ${tableName} failure!`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal
      title={<p className="text-18">Create a new table</p>}
      open={isModalOpen}
      onCancel={handleCancel}
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
            {fields.map((field, index) => (
              <div key={index} className="flex align-center c-pointer">
                <div
                  className="ip-create-table "
                  style={{ margin: "10px 0px" }}
                >
                  <input
                    className="input-search"
                    style={{ verticalAlign: "4px", padding: "0px 10px" }}
                    type="text"
                    placeholder="Column Name"
                    value={field.name}
                    onChange={(e) => handleChangeInput(index, e)}
                  />
                </div>
                <div
                  className="ip-create-table "
                  style={{ margin: "10px 10px" }}
                >
                  <Dropdown
                    menu={{
                      items: typeName.map((item) => ({
                        label: (
                          <div
                            className="flex align-center "
                            onClick={() => handleChangeType(index, item.type)}
                          >
                            <a>{item.type} </a>
                            <p
                              style={{
                                padding: "0px 10px",
                                fontSize: "12px",
                              }}
                            >
                              {item.title}
                            </p>
                          </div>
                        ),
                        key: item.key.toString(),
                      })),
                    }}
                    trigger={["click"]}
                    overlayClassName="dropdown-menu"
                  >
                    <a
                      className=""
                      onClick={(e) => e.preventDefault()}
                      style={{ padding: "0px 10px", margin: "0 auto" }}
                    >
                      <Space className="align-center ">
                        {!!columnNameClicks[index] ? (
                          <input
                            className="input-search "
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
                          <p>---</p>
                        )}
                        <DownOutlined style={{ fontSize: 14 }} />
                      </Space>
                    </a>
                  </Dropdown>
                </div>
                <p onClick={() => handleRemoveField(index)}>
                  <FaTimes />
                </p>
              </div>
            ))}
            <p
              className="add-field-hover c-pointer"
              style={{ textAlign: "center" }}
              onClick={handleAddField}
            >
              Add column
            </p>
            <div style={{ textAlign: "end" }}>
              <button type="submit" className="bt-create-table">
                {loading ? (
                  <Spin
                    indicator={
                      <LoadingOutlined
                        className="color-white"
                        style={{ fontSize: 24 }}
                        spin={true}
                        aria-hidden={true}
                      />
                    }
                  />
                ) : (
                  "Save Table"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </Modal>
  );
}

export default ModalAddTable;
