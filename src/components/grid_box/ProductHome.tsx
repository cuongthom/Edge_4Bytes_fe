import { Col, Row } from 'antd'
import { TiTick } from 'react-icons/ti'
import PropTypes, { InferProps } from "prop-types";
import { Link } from 'react-router-dom';
function ProductHome({ title1, title2, title3, title4, icon, hrefLink }: InferProps<typeof ProductHome.propTypes>) {
    return (
        <Col xs={24} sm={24} lg={12} xl={12} className="gutter-row" span={12} >
            <div style={{ background: '#161717', padding: '40px', borderRadius: '20px' }}>
                {icon}
                <p style={{ padding: '20px 0px', fontSize: '28px', fontWeight: '700' }}>{title1}</p>
                <div>
                    <div className="flex align-center" style={{ fontSize: '20px' }}>
                        <TiTick style={{ color: 'white' }} />
                        <p style={{ padding: '0px 10px', color: '#696c6c' }}>{title2}</p>
                    </div>
                    <div className="flex align-center" style={{ fontSize: '20px' }}>
                        <TiTick style={{ color: 'white' }} />
                        <p style={{ padding: '0px 10px', color: '#696c6c' }}> {title3}</p>
                    </div>
                    <div className="flex align-center" style={{ fontSize: '20px' }}>
                        <TiTick style={{ color: 'white' }} />
                        <p style={{ padding: '0px 10px', color: '#696c6c' }}>{title4}</p>
                    </div>
                </div>
                <Row gutter={[{ xs: 8, sm: 16, md: 24, lg: 32 }, { xs: 8, sm: 16, md: 24, lg: 32 }]} style={{ paddingTop: '40px' }}>
                    <Col xs={24} sm={24} lg={12} xl={12} className="gutter-row" span={12}>
                        <Link to={`${hrefLink}`}>
                            <p className="c-pointer" style={{ padding: '10px 20px', textAlign: 'center', fontSize: '18px', background: 'white', color: 'black', borderRadius: '20px' }}>Read the docs</p>
                        </Link>
                    </Col>

                    <Col xs={24} sm={24} lg={12} xl={12} className="gutter-row" span={12}>
                        <p className="c-pointer" style={{ fontSize: '18px', color: 'white', padding: '10px 20px', textAlign: 'center', borderRadius: '20px', background: '#212022' }}>View examples</p>
                    </Col>
                </Row>
            </div>
        </Col>
    )
}
ProductHome.propTypes = {
    title1: PropTypes.string.isRequired,
    title2: PropTypes.string.isRequired,
    title3: PropTypes.string.isRequired,
    title4: PropTypes.string.isRequired,
    icon: PropTypes.any,
    hrefLink: PropTypes.string
}
export default ProductHome