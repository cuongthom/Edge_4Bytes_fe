import PropTypes, { InferProps } from "prop-types";
function HttpCode({ title1, title2 }: InferProps<typeof HttpCode.propTypes>) {
    return (
        <div className="flex" style={{ padding: '10px 0px' }}>
            <p>-</p>
            <div style={{ width: '30%' }}>

                <b style={{ padding: '0px 20px' }}>{title1}</b>
            </div>
            <p style={{ width: '70%' }}>{title2}When request is accepted and successfully executed.</p>
        </div>
    )
}
HttpCode.propTypes = {
    title1: PropTypes.string.isRequired,
    title2: PropTypes.string.isRequired,
    
}
export default HttpCode