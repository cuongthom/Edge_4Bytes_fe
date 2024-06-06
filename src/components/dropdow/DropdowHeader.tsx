import { Dropdown, Space } from 'antd'
import PropTypes, { InferProps } from "prop-types";


function DropdowHeader({ items, title }: InferProps<typeof DropdowHeader.propTypes>) {
    return (
        <Dropdown menu={{ items }} trigger={['click']} >
            <a className='c-pointer' onClick={(e) => e.preventDefault()} >
                <Space>
                    {title}

                </Space>
            </a>
        </Dropdown>
    )
}
DropdowHeader.propTypes = {
    items: PropTypes.array.isRequired,
    title: PropTypes.any.isRequired,
}
export default DropdowHeader