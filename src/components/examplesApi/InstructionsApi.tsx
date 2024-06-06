import PropTypes, { InferProps } from "prop-types";
import { IoArrowForwardOutline } from 'react-icons/io5'

function InstructionsApi({ title1, title2 }: InferProps<typeof InstructionsApi.propTypes>) {
    return (
        <div className="flex align-center" style={{ padding: '10px 0px' }}>
            <p>-</p>
            <b style={{ padding: '0px 10px' }}>{title1}</b>
            <IoArrowForwardOutline />
            <b style={{ padding: '0px 10px' }}>{title2}</b>
        </div>
    )
}
InstructionsApi.propTypes = {
    title1: PropTypes.string.isRequired,
    title2: PropTypes.string.isRequired,
}
export default InstructionsApi