import { Col } from "antd";
import PropTypes, { InferProps } from "prop-types";
import { Link } from "react-router-dom";

function CreateHome({
  title1,
  title2,
  title3,
  hrefLink,
}: InferProps<typeof CreateHome.propTypes>) {
  return (
    <Col xs={24} lg={24} xl={12} className="gutter-row c-pointer" span={12}>
      <div
        className="app-wrap-grid"
        style={{ borderRadius: "20px 5px 5px 20px" }}
      >
        <p style={{ fontSize: "28px", fontWeight: "600" }}>{title1}</p>
        <p style={{ fontSize: "16px", color: "#909494", padding: "15px 0px" }}>
          {title2}
        </p>
        <Link to={`${hrefLink}`}>
          <button className="c-pointer">{title3}</button>
        </Link>
      </div>
    </Col>
  );
}
CreateHome.propTypes = {
  title1: PropTypes.string.isRequired,
  title2: PropTypes.string.isRequired,
  title3: PropTypes.string.isRequired,
  hrefLink: PropTypes.string,
};
export default CreateHome;
