import InformationRedis from '../redisInfor/InformationRedis'
import { IoIosCopy } from 'react-icons/io'
import { BsThreeDots } from 'react-icons/bs'
import { endDateMonth, truncateAccessToken } from '../../utils';
import { FaRegCalendarTimes } from 'react-icons/fa';

function TItlePageId({jwtSubscription, copySubscription, idSubscription, showToken, dataSubscription, showAccessToken, copyAccessToken }: any) {
    return (
        <div className='bg-gray p-responsive' >
            <div className='container'>
                <div className="flex align-center">
                    <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" role="icon"><g clipPath="url(#product_redis)">
                        <path d="M24.889 0H7.11A7.111 7.111 0 0 0 0 7.111V24.89A7.111 7.111 0 0 0 7.111 32H24.89A7.111 7.111 0 0 0 32 24.889V7.11A7.111 7.111 0 0 0 24.889 0Z" fill="#DC2626"></path><path d="M22.053 4.832a.889.889 0 0 1 1.582 0l3.968 7.74a.889.889 0 0 1-.79 1.295h-7.936a.889.889 0 0 1-.791-1.295l3.967-7.74ZM9.2 14.044a4.844 4.844 0 1 0 0-9.689 4.844 4.844 0 0 0 0 9.69ZM12.178 18.311H6.133c-.785 0-1.422.637-1.422 1.422v6.134c0 .785.637 1.422 1.422 1.422h6.045c.785 0 1.422-.637 1.422-1.422v-6.134c0-.785-.637-1.422-1.422-1.422ZM22.089 18.177a1.244 1.244 0 0 1 1.51 0l3.533 2.699c.415.316.588.858.434 1.356l-1.374 4.447a1.244 1.244 0 0 1-1.19.877h-4.316a1.244 1.244 0 0 1-1.189-.878l-1.374-4.446c-.154-.498.019-1.04.433-1.356l3.533-2.699Z" fill="#FEF2F2"></path></g><defs><clipPath id="product_redis"><path fill="#fff" d="M0 0h32v32H0z">
                        </path></clipPath></defs>
                    </svg>
                    <b style={{ padding: '0px 10px', fontSize: '25px' }}>{dataSubscription?.plan?.name}</b>
                    <BsThreeDots className='c-pointer' style={{ color: '#b6b6ba' }} />

                </div>
                <div className='flex' style={{ padding: '10px 0px' }}>
                    <InformationRedis title={`${dataSubscription?.plan?.price}$`} icon={<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-400"><path d="M5 7.2a2.2 2.2 0 0 1 2.2 -2.2h1a2.2 2.2 0 0 0 1.55 -.64l.7 -.7a2.2 2.2 0 0 1 3.12 0l.7 .7c.412 .41 .97 .64 1.55 .64h1a2.2 2.2 0 0 1 2.2 2.2v1c0 .58 .23 1.138 .64 1.55l.7 .7a2.2 2.2 0 0 1 0 3.12l-.7 .7a2.2 2.2 0 0 0 -.64 1.55v1a2.2 2.2 0 0 1 -2.2 2.2h-1a2.2 2.2 0 0 0 -1.55 .64l-.7 .7a2.2 2.2 0 0 1 -3.12 0l-.7 -.7a2.2 2.2 0 0 0 -1.55 -.64h-1a2.2 2.2 0 0 1 -2.2 -2.2v-1a2.2 2.2 0 0 0 -.64 -1.55l-.7 -.7a2.2 2.2 0 0 1 0 -3.12l.7 -.7a2.2 2.2 0 0 0 .64 -1.55v-1"></path><path d="M9 12l2 2l4 -4"></path></svg>} />
                    <InformationRedis style={'m-l-r-20'} title={'AWS'} icon={<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-400"><path d="M6.657 18c-2.572 0 -4.657 -2.007 -4.657 -4.483c0 -2.475 2.085 -4.482 4.657 -4.482c.393 -1.762 1.794 -3.2 3.675 -3.773c1.88 -.572 3.956 -.193 5.444 1c1.488 1.19 2.162 3.007 1.77 4.769h.99c1.913 0 3.464 1.56 3.464 3.486c0 1.927 -1.551 3.487 -3.465 3.487h-11.878"></path></svg>} />
                    <InformationRedis title={endDateMonth(dataSubscription?.subscription?.endDate || "")} icon={<FaRegCalendarTimes />} />
                </div>
              
                        <div className='flex align-center'>
                            <p style={{ fontWeight: '500' }}>Access Token : </p>
                            <p style={{ padding: '0px 20px' }}>{showAccessToken ? truncateAccessToken(jwtSubscription || "********") : "*************"}</p>
                            <IoIosCopy className='c-pointer' onClick={copyAccessToken} />
                            <button style={{ padding: '5px 10px', margin: '0px 10px', borderRadius: '10px' }} onClick={showToken}>Show</button>
                        </div>
                        <div className='flex align-center'>
                            <p style={{ fontWeight: '500' }}>Subscription Id : </p>
                            <p style={{ padding: '0px 20px' }}>{idSubscription}</p>
                            <IoIosCopy className='c-pointer' onClick={copySubscription} />
                        </div>
                 
                  
             


                
            </div>
        </div>
    )
}

export default TItlePageId