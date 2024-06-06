import { Link } from "react-router-dom";
import { Row } from "antd";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import ProductHome from "../../components/grid_box/ProductHome";
import FooterHome from "../../components/footer/FooterHome";
import Parameter from "../../components/paramter/Parameter";
import CreateHome from "../../components/grid_box/CreateHome";
import Logo from "../../../public/image/logo2.png";
import { IoMenuSharp } from "react-icons/io5";
import { useState } from "react";
import DrowerHeader from "../../components/drower/DrowerHeader";

function HomePage() {
  const [open, setOpen] = useState(false);
  const onClose = () => {
    setOpen(false);
  };
  const codeString = `import { Redis } from '@SyncSphere/redis'

  const redis = new Redis({
    url: '/api-v1/redis/pipeline/{SUBSCRIPTIONID}',
    header: 'Authorization: Bearer eyJhbGciOiJIUzI1NiJ9.eyJpZCI6IjY1ZD...',
    header: 'Content-Type: application/json',
    data: "command": [ 
        ["set", "key1", "valuex"] 
    ] 
  })
     
  `;

  return (
    <div style={{ background: "#09090b" }}>
      <div className="">
        <div className="flex j-spaceBetween align-center container-app-header header-app-bg">
          <div
            className="d-none text-white"
            style={{ fontSize: "40px" }}
            onClick={() => setOpen(true)}
          >
            <IoMenuSharp />
          </div>
          <div className="flex align-center c-pointer">
            <img src={Logo} width={30} />
            <p
              className="d-block text-white text-18"
              style={{
                padding: "0px 10px",
                fontWeight: "600",
              }}
            >
              SyncSphere
            </p>
          </div>
          <div className="d-block">
            <div className="flex app-header-title c-pointer ">
              <Link to={"/redis"}>
                <p>Redis</p>
              </Link>
              <Link to={"/postgres"}>
                <p>Postgres</p>
              </Link>
              <Link to={"/documents"}>
                <p>Documents</p>
              </Link>
            </div>
          </div>

          <div>
            <Link to={"/redis"}>
              <div className=" btn-header" tabIndex={0}>
                <p>Console</p>
              </div>
            </Link>
          </div>
        </div>
        <div
          className="container-app-header text-center"
          style={{ padding: "50px 0px" }}
        >
          <h1 className="app-h1" style={{ marginTop: "50px" }}>
            <span>Serverless</span>
            <span>Data Platform</span>
          </h1>
        </div>

        <Row
          gutter={[
            { xs: 8, sm: 16, md: 16, lg: 16 },
            { xs: 8, sm: 16, md: 16, lg: 16 },
          ]}
          className="app-wrap-grid-row"
        >
          <CreateHome
            hrefLink={"/pricing/vector?type=redis"}
            title1={"Redis"}
            title2={"Serverless database wish Redis Api"}
            title3={"Create Database"}
          />
          <CreateHome
            hrefLink={"/pricing/vector?type=postgres"}
            title1={"Postgres"}
            title2={"Serverless database wish Postgres Api"}
            title3={"Create Database"}
          />
        </Row>
        <div style={{ textAlign: "center" }}>
          <h5
            style={{
              pointerEvents: "none",
              fontFamily: "font-display",
              fontSize: "13vw",
              fontWeight: "bold",
              lineHeight: 1,
              WebkitBackgroundClip: "text",
              color: "#0f1413",
            }}
          >
            Fast Anywhere
          </h5>
          <div style={{ position: "relative" }}>
            <img
              className="app-wrap-image"
              src="https://upstash.com/globe.png"
            />
            <div className="flex parameter-app">
              <Parameter title1={"15B"} title2={"REDIS COMMANDS / WEEK"} />
              <Parameter title1={"7.1B"} title2={"KAFKA MESSAGES / WEEK"} />
              <Parameter title1={"99.99%"} title2={"UPTIME"} />
            </div>
          </div>
        </div>
        <div className="container-app-header">
          <div
            className="text-center text-white"
            style={{padding: "50px 0px" }}
          >
            <h2 style={{ fontSize: "3.75rem" }}>Serverless & Edge</h2>
            <p style={{ fontSize: "1.7rem", color: "#696c6c" }}>
              The platform tailored for the serverless revolution
            </p>
          </div>

          <div className="app-http-restApi-home">
            <div className="">
              <h2 className="text-white" style={{  fontSize: "1.5rem" }}>
                HTTP/REST API
              </h2>
              <p
                style={{
                  fontSize: "15px",
                  padding: "20px 0px",
                  color: "#696c6c",
                }}
              >
                HTTP-based APIs enable access from serverless and edge functions
                in addition to supporting standard clients via the Redis/Kafka
                protocol.
              </p>
            </div>
            <SyntaxHighlighter
              language="typescript"
              style={vscDarkPlus}
              customStyle={{ fontSize: "18px", borderRadius: "20px" }}
            >
              {codeString}
            </SyntaxHighlighter>
          </div>
        </div>
        <div className="container-app-header">
          <div
            className="text-center text-white"
            style={{ padding: "50px 0px" }}
          >
            <h2 style={{ fontSize: "3.75rem" }}>Products</h2>
            <p style={{ fontSize: "1.7rem", color: "#696c6c" }}>
              True serverless data platform
            </p>
          </div>
          <Row
            gutter={[
              { xs: 8, sm: 16, md: 24, lg: 32 },
              { xs: 8, sm: 16, md: 24, lg: 32 },
            ]}
          >
            <ProductHome
              hrefLink={"/documents/redis"}
              title1={"Serverless KV with Redis API"}
              title2={"Durable and fast with multi tier storage."}
              title3={"Fast anywhere with global replication."}
              title4={"Designed for Edge/Serverless with REST API."}
              icon={
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-label="Upstash Redis"
                  className="mb-4"
                >
                  <g clipPath="url(#logo-redis)">
                    <path
                      d="M24.8889 0H7.11111C3.18375 0 0 3.18375 0 7.11111V24.8889C0 28.8162 3.18375 32 7.11111 32H24.8889C28.8162 32 32 28.8162 32 24.8889V7.11111C32 3.18375 28.8162 0 24.8889 0Z"
                      fill="#dc2626"
                    ></path>
                    <path
                      d="M22.0534 4.83202C22.3838 4.18748 23.3051 4.18748 23.6355 4.83203L27.6032 12.5723C27.9064 13.1638 27.4768 13.8667 26.8122 13.8667H18.8767C18.2121 13.8667 17.7825 13.1638 18.0857 12.5723L22.0534 4.83202Z"
                      fill="#fee2e2"
                    ></path>
                    <path
                      d="M9.2 14.0444C11.8755 14.0444 14.0444 11.8755 14.0444 9.2C14.0444 6.52449 11.8755 4.35556 9.2 4.35556C6.52448 4.35556 4.35555 6.52449 4.35555 9.2C4.35555 11.8755 6.52448 14.0444 9.2 14.0444Z"
                      fill="#fee2e2"
                    ></path>
                    <path
                      d="M12.1778 18.3111H6.13334C5.34786 18.3111 4.71111 18.9479 4.71111 19.7333V25.8667C4.71111 26.6521 5.34786 27.2889 6.13334 27.2889H12.1778C12.9633 27.2889 13.6 26.6521 13.6 25.8667V19.7333C13.6 18.9479 12.9633 18.3111 12.1778 18.3111Z"
                      fill="#fee2e2"
                    ></path>
                    <path
                      d="M22.089 18.1772C22.535 17.8364 23.1539 17.8364 23.5999 18.1772L27.1324 20.8757C27.5468 21.1924 27.7199 21.7338 27.566 22.232L26.1919 26.6785C26.0308 27.2 25.5487 27.5556 25.0029 27.5556H20.686C20.1402 27.5556 19.6581 27.2 19.497 26.6785L18.1229 22.232C17.969 21.7338 18.142 21.1924 18.5564 20.8757L22.089 18.1772Z"
                      fill="#fee2e2"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="logo-redis">
                      <rect width="32" height="32" fill="white"></rect>
                    </clipPath>
                  </defs>
                </svg>
              }
            />
            <ProductHome
              hrefLink={"/documents"}
              title1={"Serverless KV with Postgres API"}
              title2={"Durable and fast with multi tier storage."}
              title3={"Fast anywhere with global replication."}
              title4={"Designed for Edge/Serverless with REST API."}
              icon={
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-label="Upstash Kafka"
                  className="mb-4"
                >
                  <g clipPath="url(#logo-kafka)">
                    <path
                      d="M24.8889 0H7.11111C3.18375 0 0 3.18375 0 7.11111V24.8889C0 28.8162 3.18375 32 7.11111 32H24.8889C28.8162 32 32 28.8162 32 24.8889V7.11111C32 3.18375 28.8162 0 24.8889 0Z"
                      fill="#2563eb"
                    ></path>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M10.1333 14.3546C10.1333 14.0164 10.374 13.7305 10.6943 13.6223C12.5388 12.9993 13.8667 11.2547 13.8667 9.2C13.8667 6.62267 11.7773 4.53333 9.2 4.53333C6.62267 4.53333 4.53333 6.62267 4.53333 9.2C4.53333 11.2268 5.82536 12.9517 7.63069 13.5963C7.94429 13.7082 8.17778 13.9911 8.17778 14.3241V17.6759C8.17778 18.0089 7.94429 18.2918 7.6307 18.4037C5.82536 19.0483 4.53333 20.7732 4.53333 22.8C4.53333 25.3773 6.62267 27.4667 9.2 27.4667C11.2268 27.4667 12.9517 26.1747 13.5963 24.3693C13.7082 24.0557 13.9911 23.8222 14.3241 23.8222H17.6759C18.0089 23.8222 18.2918 24.0557 18.4037 24.3693C19.0483 26.1747 20.7732 27.4667 22.8 27.4667C25.3773 27.4667 27.4667 25.3773 27.4667 22.8C27.4667 20.2227 25.3773 18.1333 22.8 18.1333C20.7453 18.1333 19.0007 19.4612 18.3777 21.3057C18.2695 21.626 17.9836 21.8667 17.6454 21.8667H14.3546C14.0164 21.8667 13.7306 21.6261 13.6223 21.3058C13.5585 21.1169 13.483 20.9335 13.3965 20.7564C13.2492 20.4542 13.2824 20.0847 13.5201 19.8469L19.8469 13.5201C20.0847 13.2824 20.4542 13.2492 20.7564 13.3965C21.3736 13.6977 22.067 13.8667 22.8 13.8667C25.3773 13.8667 27.4667 11.7773 27.4667 9.2C27.4667 6.62267 25.3773 4.53333 22.8 4.53333C20.2227 4.53333 18.1333 6.62267 18.1333 9.2C18.1333 9.92587 18.299 10.6131 18.5948 11.2258C18.7404 11.5274 18.7064 11.8951 18.4696 12.1319L12.1319 18.4696C11.8951 18.7064 11.5274 18.7404 11.2258 18.5948C11.0542 18.5119 10.8767 18.4393 10.6942 18.3777C10.3739 18.2694 10.1333 17.9836 10.1333 17.6454V14.3546Z"
                      fill="#dbeafe"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="logo-kafka">
                      <rect width="32" height="32" fill="white"></rect>
                    </clipPath>
                  </defs>
                </svg>
              }
            />
          </Row>
        </div>
      </div>
      <FooterHome />
      <DrowerHeader onClose={onClose} open={open} />
    </div>
  );
}

export default HomePage;
