import PropTypes, { InferProps } from "prop-types";

function Parameter({ title1, title2 }: InferProps<typeof Parameter.propTypes>) {
    return (
        <div className="app-parameter" style={{ padding: '0px 20px' }}>
            <h3>{title1}</h3>
            <p style={{ color: '#4c6a5d' }}>{title2}</p>
        </div>
    )
}
Parameter.propTypes = {
    title1: PropTypes.string.isRequired,
    title2: PropTypes.string.isRequired,
}
export default Parameter