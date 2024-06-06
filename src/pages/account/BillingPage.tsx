
import CreateUpstash from '../../components/createUpstash/CreateUpstash'
import AccountTitle from '../../components/account/AccountTitle'


function BillingPage() {
    return (
        <div>
            <AccountTitle titleAccount={"Payment"} />
            <div className='container'>
                <CreateUpstash title={"Create database"} detailLink={'/pricing/vector?type=redis'}/>
                {/* <TableReusable title1={"Date"} title2={"Cost"} title3={"Status"} title4={"Status"} title5={"IP"} /> */}
            </div>
        </div>
    )
}

export default BillingPage