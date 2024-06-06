import { Dropdown, Modal, Space, Spin } from "antd";
import { typeName } from "../../constants";
import { DownOutlined } from "@ant-design/icons";
import { LoadingOutlined } from "@ant-design/icons";

function ModalAddColumn({
  loading,
  createColumnTable,
  isModalAddColumn,
  handleCancelAddColumn,
  setName,
  setType,
  type,
}: any) {
  return (
    <Modal
      title={<p className="text-18">Create a new column</p>}
      open={isModalAddColumn}
      onCancel={handleCancelAddColumn}
      footer={null}
    >
      <div className="flex align-center c-pointer">
        <div className="ip-create-table " style={{ margin: "10px 0px" }}>
          <input
            className="input-search"
            style={{ verticalAlign: "4px", padding: "0px 10px" }}
            type="text"
            placeholder="Column Name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="ip-create-table " style={{ margin: "10px 10px" }}>
          <Dropdown
            menu={{
              items: typeName.map((item) => ({
                label: (
                  <div
                    className="flex align-center"
                    onClick={() => setType(item.type)}
                  >
                    <a>{item.type} </a>
                    <p style={{ padding: "0px 10px", fontSize: "12px" }}>
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
              <Space className="align-center">
                {!!type ? (
                  <input
                    className="input-search"
                    style={{ verticalAlign: "4px", padding: "0px 10px" }}
                    type="text"
                    placeholder="Type"
                    value={type}
                  />
                ) : (
                  <p>---</p>
                )}
                <DownOutlined style={{ fontSize: 14 }} />
              </Space>
            </a>
          </Dropdown>
        </div>
      </div>
      <div style={{ textAlign: "end" }}>
        <button
          type="submit"
          className="bt-create-table"
          onClick={createColumnTable}
        >
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
            "Save"
          )}
        </button>
      </div>
    </Modal>
  );
}

export default ModalAddColumn;
