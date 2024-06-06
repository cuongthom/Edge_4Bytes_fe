import CreateUpstash from '../../components/createUpstash/CreateUpstash'
import AccountTitle from '../../components/account/AccountTitle'

function TeamsPage() {
    return (
        <>
            <AccountTitle titleAccount={"Account"} />
            <div className='container'>

                <CreateUpstash title={"Create Database"} detailLink={'/pricing/vector?type=redis'}/>
            </div>
        </>
    )
}

export default TeamsPage