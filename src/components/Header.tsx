import { RiExpandUpDownLine } from "react-icons/ri";
import { Dropdown, MenuProps, Space } from "antd";
import { Link } from "react-router-dom";
import DropdowHeader from "./dropdow/DropdowHeader";
import { RxAvatar } from "react-icons/rx";
import { FiPlus } from "react-icons/fi";
import { ACCESS_TOKEN_KEY } from "../constants";
import { useUserState } from "../states/user";
import { useEffect, useState } from "react";
import Logo from "../../public/image/logo2.png";
import { IoMenuSharp } from "react-icons/io5";
import DrowerHeader from "./drower/DrowerHeader";

function Header() {
  const [open, setOpen] = useState(false);
  const [focusItem, setFocusItem] = useState("");
  const { user } = useUserState();

  const onClose = () => {
    setOpen(false);
  };
  const logOutUser = () => {
    localStorage.removeItem(ACCESS_TOKEN_KEY);
    setTimeout(() => {
      window.location.href = "/login";
    }, 1000);
  };
  const items: MenuProps["items"] = [
    {
      label: (
        <div className="flex align-center c-pointer">
          <RxAvatar style={{ fontSize: "20px" }} />
          <p style={{ padding: "0px 10px" }}>Personnal</p>
        </div>
      ),
      key: "0",
    },
    {
      label: (
        <div className="flex align-center">
          <FiPlus style={{ fontSize: "20px" }} />
          <p style={{ padding: "0px 10px" }}>Create team</p>
        </div>
      ),
      key: "1",
    },
  ];
  const itemUser: MenuProps["items"] = [
    {
      label: <b style={{ fontSize: "16px" }}>{user?.email}</b>,
      key: "0",
    },
    {
      type: "divider",
    },
    {
      label: (
        <Link to={"/account/teams"}>
          <p>Account</p>
        </Link>
      ),
      key: "1",
    },
    {
      type: "divider",
    },
    {
      label: <p onClick={logOutUser}>Log out</p>,
      key: "2",
    },
  ];
  useEffect(() => {
    const currentPath = window.location.pathname;
    const cleanPath = currentPath.substring(1);
    setFocusItem(cleanPath);
  }, []);
  return (
    <div className="align-center" style={{ background: "black" }}>
      <div className="container flex j-spaceBetween align-center">
        <div
          className="d-none text-white"
          style={{ fontSize: "40px" }}
          onClick={() => setOpen(true)}
        >
          <IoMenuSharp />
        </div>
        <div className="flex align-center">
          <Link
            to={"/"}
            style={{ padding: "0px 10px" }}
            className="align-center"
          >
            <img src={Logo} width={30} className="c-pointer" />
          </Link>
          <Dropdown
            menu={{
              items,
            }}
            trigger={["click"]}
            className="d-block"
          >
            <p
              className="flex align-center text-white c-pointer"
              onClick={(e) => e.preventDefault()}
              style={{
                background: "#27272a",
                padding: "5px 10px",
                borderRadius: "10px",
              }}
            >
              <Space className="align-center">
                Personal
                <RiExpandUpDownLine style={{ marginTop: "5px" }} />
              </Space>
            </p>
          </Dropdown>
        </div>
        <div className="wrap-btn-header d-block">
          <Link to={"/redis"}>
            <div
              className={
                focusItem === "redis" ? "btn-header-focus btn-header" : "btn-header"
              }
              tabIndex={0}
              onClick={() => setFocusItem("")}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                role="icon"
              >
                <g clipPath="url(#product_redis)">
                  <path
                    d="M24.889 0H7.11A7.111 7.111 0 0 0 0 7.111V24.89A7.111 7.111 0 0 0 7.111 32H24.89A7.111 7.111 0 0 0 32 24.889V7.11A7.111 7.111 0 0 0 24.889 0Z"
                    fill="#DC2626"
                  ></path>
                  <path
                    d="M22.053 4.832a.889.889 0 0 1 1.582 0l3.968 7.74a.889.889 0 0 1-.79 1.295h-7.936a.889.889 0 0 1-.791-1.295l3.967-7.74ZM9.2 14.044a4.844 4.844 0 1 0 0-9.689 4.844 4.844 0 0 0 0 9.69ZM12.178 18.311H6.133c-.785 0-1.422.637-1.422 1.422v6.134c0 .785.637 1.422 1.422 1.422h6.045c.785 0 1.422-.637 1.422-1.422v-6.134c0-.785-.637-1.422-1.422-1.422ZM22.089 18.177a1.244 1.244 0 0 1 1.51 0l3.533 2.699c.415.316.588.858.434 1.356l-1.374 4.447a1.244 1.244 0 0 1-1.19.877h-4.316a1.244 1.244 0 0 1-1.189-.878l-1.374-4.446c-.154-.498.019-1.04.433-1.356l3.533-2.699Z"
                    fill="#FEF2F2"
                  ></path>
                </g>
                <defs>
                  <clipPath id="product_redis">
                    <path fill="#fff" d="M0 0h32v32H0z"></path>
                  </clipPath>
                </defs>
              </svg>
              <p>Redis</p>
            </div>
          </Link>
          <Link to={"/postgres"}>
            <div
              className={
                focusItem === "postgres"
                  ? "btn-header-focus btn-header"
                  : "btn-header"
              }
              tabIndex={0}
              onClick={() => setFocusItem("postgres")}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                role="icon"
              >
                <g clipPath="url(#product_kafka)">
                  <path
                    d="M24.889 0H7.11A7.111 7.111 0 0 0 0 7.111V24.89A7.111 7.111 0 0 0 7.111 32H24.89A7.111 7.111 0 0 0 32 24.889V7.11A7.111 7.111 0 0 0 24.889 0Z"
                    fill="#2563EB"
                  ></path>
                  <path
                    fillRule="evenodd"
                    d="M10.133 14.355c0-.339.241-.625.561-.733A4.669 4.669 0 0 0 9.2 4.533a4.667 4.667 0 0 0-1.57 9.063c.314.112.548.395.548.728v3.352c0 .333-.234.616-.547.728a4.669 4.669 0 0 0 1.57 9.063 4.669 4.669 0 0 0 4.395-3.098c.112-.313.395-.547.728-.547h3.352c.333 0 .616.234.728.547a4.669 4.669 0 0 0 9.063-1.569 4.667 4.667 0 0 0-9.09-1.494c-.107.32-.393.56-.732.56h-3.29c-.338 0-.624-.24-.733-.56a4.629 4.629 0 0 0-.225-.55c-.148-.302-.114-.671.123-.91l6.327-6.326c.238-.238.607-.27.91-.123a4.667 4.667 0 1 0-2.162-2.17c.146.3.111.668-.125.905l-6.338 6.338c-.237.236-.604.27-.906.125a4.632 4.632 0 0 0-.532-.217c-.32-.109-.56-.394-.56-.733v-3.29Z"
                    fill="#EFF6FF"
                  ></path>
                </g>
                <defs>
                  <clipPath id="product_kafka">
                    <path fill="#fff" d="M0 0h32v32H0z"></path>
                  </clipPath>
                </defs>
              </svg>
              <p>Postgres</p>
            </div>
          </Link>
          <Link to={"/documents"}>
            <div
              className={
                focusItem === "documents"
                  ? "btn-header-focus btn-header"
                  : "btn-header"
              }
              tabIndex={0}
              onClick={() => setFocusItem("documents")}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                role="icon"
              >
                <g clipPath="url(#product_qstash)">
                  <path
                    d="M24.889 0H7.11A7.111 7.111 0 0 0 0 7.111V24.89A7.111 7.111 0 0 0 7.111 32H24.89A7.111 7.111 0 0 0 32 24.889V7.11A7.111 7.111 0 0 0 24.889 0Z"
                    fill="#9333EA"
                  ></path>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M14.4 5.067a1.511 1.511 0 1 1 3.022 0v7.377l5.243-5.242a1.511 1.511 0 0 1 2.137 2.137l-5.24 5.239h7.371a1.511 1.511 0 1 1 0 3.022H19.49l5.312 5.312a1.422 1.422 0 0 1-2.011 2.01l-5.368-5.367v7.467a1.511 1.511 0 1 1-3.022 0v-7.281l-5.123 5.123a1.511 1.511 0 1 1-2.137-2.137l5.127-5.127h-7.29a1.511 1.511 0 1 1 0-3.022h7.467L7.14 9.272A1.422 1.422 0 0 1 9.15 7.261l5.25 5.25V5.067Z"
                    fill="#FAF5FF"
                  ></path>
                </g>
                <defs>
                  <clipPath id="a">
                    <path fill="#product_qstash" d="M0 0h32v32H0z"></path>
                  </clipPath>
                </defs>
              </svg>
              <p>Document</p>
            </div>
          </Link>
        </div>
        <div className="align-center" style={{ fontSize: "30px" }}>
          <DropdowHeader
            items={itemUser}
            title={<RxAvatar style={{ color: "white", fontSize: "35px" }} />}
          />
        </div>
      </div>
      <DrowerHeader onClose={onClose} open={open} />
    </div>
  );
}

export default Header;
