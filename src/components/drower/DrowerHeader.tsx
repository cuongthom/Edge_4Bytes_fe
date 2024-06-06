import { Drawer } from 'antd'
import { useNavigate } from 'react-router-dom'


function DrowerHeader({ onClose, open }: any) {
    const navigate = useNavigate()
    const getLinkRedis = () => {
        navigate('/redis')
        onClose()
    }
    const getLinkPostgres = () => {
        navigate('/postgres')
        onClose()
    }
    const getLinkDocuments = () => {
        navigate('/documents')
        onClose()
    }
    return (
        <Drawer onClose={onClose} open={open}>
            <p style={{ padding: '10px 0px ', fontSize: '22px', fontWeight: '500' }} onClick={getLinkRedis}>Redis</p>
            <p style={{ padding: '10px 0px ', fontSize: '22px', fontWeight: '500' }} onClick={getLinkPostgres}>Postgres</p>
            <p style={{ padding: '10px 0px ', fontSize: '22px', fontWeight: '500' }} onClick={getLinkDocuments}>Documents</p>
        </Drawer>
    )
}

export default DrowerHeader