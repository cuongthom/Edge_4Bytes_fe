import { useQuery } from '@tanstack/react-query'
import AccountTitle from '../../components/account/AccountTitle'
import CreateUpstash from '../../components/createUpstash/CreateUpstash'
import upstashService from '../../services/upstashService'
import { endDateMonth } from '../../utils'
import { ACCESS_TOKEN_KEY } from '../../constants'

function HistoryPage() {
    const access_token = localStorage.getItem(ACCESS_TOKEN_KEY);
    const { data: dataHistory } = useQuery({
        queryKey: ['data-dataHistory'],
        queryFn: async () => {
            if(!access_token) return
            const res = await upstashService.paymentHistory(access_token)
            return res.data
        }
    })

    return (
        <>
            <AccountTitle titleAccount={"Account"} />
            <div className='container'>
                {
                    !!dataHistory
                        ?
                        dataHistory?.map((item: any, index: any) => (
                            <div key={index}>
                                <div className='plan-border align-center' >
                                    <div className="flex align-center" >
                                        <svg width="30" height="30" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" role="icon"><g clipPath="url(#product_vector)"><path d="M24.889 0H7.11A7.111 7.111 0 0 0 0 7.111V24.89A7.111 7.111 0 0 0 7.111 32H24.89A7.111 7.111 0 0 0 32 24.889V7.11A7.111 7.111 0 0 0 24.889 0Z" fill="#EA580C"></path><path d="M16 4.444H7.378a2.933 2.933 0 1 0 0 5.867H16a2.933 2.933 0 0 0 0-5.867ZM27.556 7.378a2.933 2.933 0 1 0-5.867 0 2.933 2.933 0 0 0 5.867 0ZM10.311 16a2.933 2.933 0 1 0-5.867 0 2.933 2.933 0 0 0 5.867 0ZM24.622 13.067H16a2.933 2.933 0 1 0 0 5.866h8.622a2.933 2.933 0 0 0 0-5.866ZM15.556 22H6.933a2.933 2.933 0 1 0 0 5.867h8.623a2.933 2.933 0 0 0 0-5.867ZM27.556 24.622a2.933 2.933 0 1 0-5.867 0 2.933 2.933 0 0 0 5.867 0Z" fill="#FFF7ED"></path></g><defs><clipPath id="product_vector"><path fill="#fff" d="M0 0h32v32H0z"></path></clipPath>
                                        </defs></svg>
                                        <div style={{ padding: '0px 10px' }}>
                                            <p style={{ fontSize: '12px' }}>Email</p>
                                            <p style={{ fontWeight: '600' }}>{item?.email}</p>
                                        </div>
                                    </div>
                                    <div>
                                        <p style={{ fontSize: '12px' }}>Price</p>
                                        <p style={{ fontWeight: '600' }}>{item?.amountTotal}$</p>
                                    </div>
                                    <div>
                                        <p style={{ fontSize: '12px' }}>Type</p>
                                        <p style={{ fontWeight: '600' }}>{item?.type}</p>
                                    </div>
                                    <div>
                                        <p style={{ fontSize: '12px' }}>StartDate</p>
                                        <p style={{ fontWeight: '600' }}>{endDateMonth(item?.createdAt)}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                        :
                        <CreateUpstash title={"Create Redis"} detailLink={'/pricing/vector?type=redis'} />
                }
            </div>
        </>
    )
}

export default HistoryPage