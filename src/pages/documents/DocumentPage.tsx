import { Link } from 'react-router-dom'
import dataBaseRedis from "../../../public/image/createDatabaseRediss.png";
import payment from "../../../public/image/payment.png"
import { IoArrowBackOutline } from 'react-icons/io5';
function DocumentPage() {
    return (
        <>
            <div className='bg-gray'>
                <div className='container' >
                    <h1>Getting Started</h1>
                </div>
            </div >
            <div className="container">
                <p>Create a Redis and Postgres compatible database in seconds</p>
                <h2 style={{ padding: '20px 0px' }}>Create a Database</h2>
                <p>Once you logged in, you can create a database by <Link to={'/redis'}><b>redis page</b></Link>  and <Link to={'/postgres'}><b>postgres page</b></Link> .</p>
                <img src={dataBaseRedis} width={300} style={{ borderRadius: '20px', margin: '20px 0px' }} />
                <p>Once you click on Buy Now button, you should see your cluster up and running as below:</p>
                <img src={payment} width={300} style={{ border: '1px solid #f4f4f5', borderRadius: '20px', margin: '20px 0px' }} />
                <div className='flex j-spaceBetween'>
{/*              
                    <Link to={'/documents/postgres'}>
                        <div className='flex align-center c-pointer text-hover-green'>
                            <b style={{ padding: '0px 10px' }}>Document Postgres</b>
                            <IoArrowForwardOutline />
                        </div>
                    </Link> */}
                    <Link to={'/documents/redis'}>
                        <div className='flex align-center c-pointer text-hover-green'>
                            <IoArrowBackOutline />
                            <b style={{ padding: '0px 10px' }}>Document Redis</b>
                        </div>
                    </Link>

                </div>
            </div>
        </>
    )
}

export default DocumentPage