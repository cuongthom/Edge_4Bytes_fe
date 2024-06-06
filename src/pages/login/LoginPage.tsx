import "./Login.css";
import { LoadingOutlined } from "@ant-design/icons";
import { Button, Flex, Col, Row } from "antd";
import { ACCESS_TOKEN_KEY, GITHUB_CLIENT_ID } from "../../constants";
import { IoLogoGithub } from "react-icons/io5";
import { useState } from "react";
import toast from "react-hot-toast";
import { Spin } from "antd";
import upstashService from "../../services/upstashService";
import { GoogleLogin } from "@react-oauth/google";
import Logo from "../../../public/image/logo2.png";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [formPosition, setFormPosition] = useState(1);
  const [loading, setLoading] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMoveForm = (direction: number) => {
    let newPosition = formPosition + direction;
    if (newPosition < 0) {
      newPosition = 0;
    } else if (newPosition > 2) {
      newPosition = 2;
    }
    setFormPosition(newPosition);
  };

  const loginUser = async (e: any) => {
    e.preventDefault();
    const param = {
      email: email,
      password: password,
    };
    try {
      setLoading(true);
      const res = await upstashService.login(param);
      localStorage.setItem(ACCESS_TOKEN_KEY, res?.data?.accessToken);
      window.location.href = "/redis";
    } catch (err: any) {
      console.log(err);
      toast.error(err?.response?.data.message);
    } finally {
      setLoading(false);
    }
  };

  const loginByGoogle = async (response: any) => {
    if (!response.credential) return;
    const body = {
      token: response?.credential,
    };
    try {
      setLoading(true);
      const res = await upstashService.loginGG(body);
      localStorage.setItem(ACCESS_TOKEN_KEY, res?.data?.accessToken);
      window.location.href = "/redis";
    } catch (err: any) {
      console.log(err);
      toast.error("Login Failed");
    } finally {
      setLoading(false);
    }
  };
  const registerUser = async (e: any) => {
    e.preventDefault();
    const param = {
      email: email,
      password: password,
    };
    try {
      setLoading(true);
      await upstashService.register(param);
      toast.success("register success");
      handleMoveForm(-1);
    } catch (err: any) {
      console.log(err);
      toast.error(err?.response?.data.message);
    } finally {
      setLoading(false);
    }
  };

  const loginWithGithub = () => {
    window.location.assign(
      `https://github.com/login/oauth/authorize?client_id=${GITHUB_CLIENT_ID}`
    );
  };

  return (
    <div id="sign-log">
      <div className="Sign">
        <div className="hidden-left">
          <span>
            Fast
            <br />
            Any
            <br />
            Where
          </span>
        </div>
        {/* Forgot Password */}
        <div className="hidden-right">
          <div style={{ width: "430px", overflow: "hidden" }}>
            <div
              className="flex"
              style={{
                width: "1290px",
                transform: `translateX(-${430 * formPosition}px)`,
                transition: "transform 0.3s ease",
              }}
            >
              <div className="fom-log">
                <div style={{ width: "340px", marginLeft: "10px" }}>
                  <div className="a">
                    <img src={Logo} height={"45px"} alt="logo" />
                  </div>
                  <h1>Forgot Password</h1>
                  <div
                    style={{
                      textAlign: "center",
                      marginBottom: "1rem",
                      fontSize: "14px",
                    }}
                  >
                    Please enter your email address. We will send you an email
                    to reset your password.
                  </div>
                  <form className="form-log">
                    <div>
                      <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                        title="Please enter a valid email address"
                        required
                      />
                    </div>
                    <Flex style={{ width: "100%" }}>
                      <Button
                        className="button_login"
                        style={{
                          margin: 0,
                          height: "40px",
                          backgroundColor: "#10b981",
                        }}
                        type="primary"
                      >
                        {loading ? (
                          <Spin
                            indicator={
                              <LoadingOutlined
                                className="color-white"
                                style={{
                                  fontSize: 24,
                                }}
                                spin={true}
                                aria-hidden={true}
                              />
                            }
                          />
                        ) : (
                          "Send Email"
                        )}
                      </Button>
                    </Flex>
                    <Row className="j-spaceBetween">
                      <Col span={12}>
                        <span onClick={() => handleMoveForm(1)}>
                          Back to Log In
                        </span>
                      </Col>
                    </Row>
                  </form>
                </div>
                <div className="introduce">
                  <p>
                    By clicking Log In, you agree to our{" "}
                    <a href="#">Terms of Service</a> and{" "}
                    <a href="#">Privacy Policy</a>.
                  </p>
                </div>

                {/* Log in to Upstash */}
              </div>
              <div className="fom-log">
                <div style={{ width: "340px" }}>
                  <div className="a">
                    <img src={Logo} height={"45px"} alt="logo" />
                  </div>
                  <h1>Log in to SyncSphere</h1>
                  <div className="" style={{ textAlign: "center" }}>
                    <button
                      disabled={loading}
                      onClick={loginWithGithub}
                      className="github-btn button-login"
                      type="button"
                      style={{ margin: "0px 50px" }}
                    >
                      <IoLogoGithub />
                    </button>
                  </div>
                  <div style={{ margin: " 20px" }}>
                    <GoogleLogin
                      width={300}
                      type="standard"
                      shape="square"
                      onSuccess={loginByGoogle}
                      onError={() => {
                        toast.error("Login Failed");
                      }}
                    />
                  </div>
                  <div className="horizontal-bar"></div>
                  <form onSubmit={loginUser} className="form-log">
                    <div>
                      <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                        title="Please enter a valid email address"
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                    <div style={{ position: "relative" }}>
                      <input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        placeholder="Password"
                        required
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <span
                        className="toggle-password"
                        onClick={handleTogglePassword}
                      >
                        {showPassword ? (
                          <i
                            style={{ fontSize: "15px" }}
                            className="fa-regular fa-eye-slash"
                          ></i>
                        ) : (
                          <i
                            style={{ fontSize: "15px" }}
                            className="fa-regular fa-eye"
                          ></i>
                        )}
                      </span>
                    </div>
                    <Flex style={{ width: "100%" }}>
                      <button
                        className="button_login color-white"
                        disabled={loading}
                        style={{
                          margin: 0,
                          height: "40px",
                          backgroundColor: "#10b981",
                        }}
                      >
                        {loading ? (
                          <Spin
                            indicator={
                              <LoadingOutlined
                                className="color-white"
                                style={{
                                  fontSize: 24,
                                }}
                                spin={true}
                                aria-hidden={true}
                              />
                            }
                          />
                        ) : (
                          "Log In"
                        )}
                      </button>
                    </Flex>
                    <Row className="j-spaceBetween">
                      <Col span={12}>
                        <span onClick={() => handleMoveForm(-1)}>
                          Forgot your password?
                        </span>
                      </Col>
                      <Col span={12}>
                        <span onClick={() => handleMoveForm(2)}>
                          Create an account
                        </span>
                      </Col>
                    </Row>
                  </form>
                </div>
                <div className="introduce">
                  <p>
                    By clicking Log In, you agree to our{" "}
                    <a href="#">Terms of Service</a> and{" "}
                    <a href="#">Privacy Policy</a>.
                  </p>
                </div>
              </div>
              {/* Sign up to Upstash */}
              <div className="fom-log">
                <div style={{ height: "500px", width: "372px" }}>
                  <div className="a">
                    <img src={Logo} height={"45px"} alt="logo" />
                  </div>

                  <div style={{ width: "340px", marginLeft: "10px" }}>
                    <h1>Sign up to SyncSphere</h1>
                    <div className="" style={{ textAlign: "center" }}>
                      <button
                        disabled={loading}
                        onClick={loginWithGithub}
                        className="github-btn button-login"
                        type="button"
                        style={{ margin: "0px 50px" }}
                      >
                        <IoLogoGithub />
                      </button>
                    </div>
                    <div style={{ margin: " 20px" }}>
                      <GoogleLogin
                        width={300}
                        type="standard"
                        shape="square"
                        onSuccess={loginByGoogle}
                        onError={() => {
                          toast.error("Login Failed");
                        }}
                      />
                    </div>
                    <div className="horizontal-bar"></div>
                    <form onSubmit={registerUser} className="form-log">
                      <div>
                        <input
                          onChange={(e) => setEmail(e.target.value)}
                          type="email"
                          name="email"
                          placeholder="Email"
                          pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                          title="Please enter a valid email address"
                          required
                        />
                      </div>
                      <div style={{ position: "relative" }}>
                        <input
                          onChange={(e) => setPassword(e.target.value)}
                          type={showPassword ? "text" : "password"}
                          name="password"
                          placeholder="Password"
                          required
                        />
                        <span
                          className="toggle-password"
                          onClick={handleTogglePassword}
                        >
                          {showPassword ? (
                            <i
                              style={{ fontSize: "15px" }}
                              className="fa-regular fa-eye-slash"
                            ></i>
                          ) : (
                            <i
                              style={{ fontSize: "15px" }}
                              className="fa-regular fa-eye"
                            ></i>
                          )}
                        </span>
                      </div>
                      <Flex style={{ width: "100%" }}>
                        <button
                          className="button_login text-white"
                          style={{
                            margin: 0,
                            height: "40px",
                            backgroundColor: "#10b981",
                          }}
                        >
                          {loading ? (
                            <Spin
                              indicator={
                                <LoadingOutlined
                                  className="color-white"
                                  style={{
                                    fontSize: 24,
                                  }}
                                  spin={true}
                                  aria-hidden={true}
                                />
                              }
                            />
                          ) : (
                            "Sign Up"
                          )}
                        </button>
                      </Flex>
                    </form>
                    <Row
                      className="j-spaceBetween"
                      style={{ padding: "20px 0px" }}
                    >
                      <Col span={12}>
                        <span onClick={() => handleMoveForm(-1)}>
                          I already have an account
                        </span>
                      </Col>
                    </Row>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
