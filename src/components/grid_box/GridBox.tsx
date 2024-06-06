import { Col } from 'antd'
import PropTypes, { InferProps } from "prop-types";

function GridBox({ title, price, spanRow, xs, lg, xl }: InferProps<typeof GridBox.propTypes>) {
    return (
        <Col xs={xs} lg={lg} xl={xl} className="gutter-row" span={spanRow} style={{ borderRadius: '10px' }}>
            <div style={{ background: 'white', padding: '15px', borderRadius: '10px' }}>
                <p style={{ color: '#b7b7be' }}>{title}</p>
                <b style={{ fontSize: '18px' }}>{price}</b>
            </div>
        </Col>
    )
}
GridBox.propTypes = {
    title: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    spanRow: PropTypes.number.isRequired,
    xs: PropTypes.number.isRequired,
    lg: PropTypes.number.isRequired,
    xl: PropTypes.number.isRequired,
}
export default GridBox