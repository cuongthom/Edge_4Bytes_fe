import PropTypes, { InferProps } from "prop-types";

function DemoCodeRedis({ title, content, index }: InferProps<typeof DemoCodeRedis.propTypes>) {
    return (
        <div className='flex' >
            <p className='color-gray'>{index}</p>
            <p style={{ padding: '0px 20px' }}>{title} </p>
            <p style={{ color: '#059669', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis', width: '70%' }}>{content} ​</p>
        </div>
    )
}
DemoCodeRedis.propTypes = {
    title: PropTypes.string,
    content: PropTypes.any.isRequired,
    index: PropTypes.string,
}
export default DemoCodeRedis