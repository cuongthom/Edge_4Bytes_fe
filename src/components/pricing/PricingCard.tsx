import { Col } from 'antd'


function PricingCard({ loading, classWrap, data, paymentPlan, setQuanityProduct, quanityProduct }: any) {


    return (
        <Col xs={24} lg={12} xl={8} className="gutter-row" span={8} >
            <div className={classWrap}>
                <h3 className='text-white' style={{ fontSize: '25px' }}>{data?.name}</h3>
                <p style={{ fontSize: '28px', fontWeight: '700' }}>${data.price}</p>
                <hr className='hr-pricing' />
                <div style={{ padding: '20px 0px' }}>
                    <p style={{ fontSize: '18px', color: '#d0d0d1' }}>{data?.interval}</p>
                    <p style={{ fontWeight: '600', fontSize: '18px' }}>1</p>
                </div>
                <div style={{ padding: '20px 0px' }}>
                    <p style={{ fontSize: '18px', color: '#d0d0d1' }}>Type</p>
                    <p style={{ fontWeight: '600', fontSize: '18px' }}>{data?.type}</p>
                </div>
                <div style={{ padding: '20px 0px' }}>
                    <p style={{ fontSize: '18px', color: '#d0d0d1' }}>Description</p>
                    <p style={{ fontWeight: '600', fontSize: '18px' }}>{data?.description}</p>
                </div>
                <div className="quantity-control" data-quantity="">
                    <button disabled={quanityProduct === 1 || quanityProduct <= 1} onClick={() => setQuanityProduct(quanityProduct - 1)} className="quantity-btn text-white" data-quantity-minus="">
                        -
                    </button>
                    <input type="number" className="quantity-input" data-quantity-target="" value={quanityProduct} step="0.1" min="1" max="" name="quantity" />
                    <button onClick={() => setQuanityProduct(quanityProduct + 1)} className="quantity-btn text-white" data-quantity-plus="">
                        +
                    </button>
                </div>
                <button disabled={loading} onClick={() => paymentPlan(data?.planId)}>BUY NOW</button>
            </div>
        </Col>

    )
}

export default PricingCard