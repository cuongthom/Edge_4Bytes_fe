import PropTypes, { InferProps } from "prop-types";
import { Link } from "react-router-dom";
function AccountTitle({ titleAccount }: InferProps<typeof AccountTitle.propTypes>) {
    return (
        <>
            <div className="bg-gray" >
                <div className='container '>
                    <h1 className="wrap-account" style={{ fontSize: '38px' }}>{titleAccount}</h1>
                </div>
            </div>
            <div className='container ' tabIndex={0}>
                <div className='tab-account flex wrap-account' >
                    <Link to={'/account/teams'}>
                        <p >Teams</p>
                    </Link>
                    <Link to={'/account/billing'}>
                        <p>Billing</p>
                    </Link>
                    <Link to={'/account/cost-explorer'}>
                        <p>Cost Explorer</p>
                    </Link>
                    <Link to={'/account/audit-logs'}>
                        <p>Audit Logs</p>
                    </Link>
                    <Link to={'/account/history'}>
                        <p>History</p>
                    </Link>
                </div>
            </div>
        </>
    )
}
AccountTitle.propTypes = {
    titleAccount: PropTypes.string.isRequired,
}
export default AccountTitle