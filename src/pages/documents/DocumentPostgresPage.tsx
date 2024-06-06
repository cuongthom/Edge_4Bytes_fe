import DemoCodeRedis from '../../components/redisInfor/DemoCodeRedis'
import { IoSaveOutline } from 'react-icons/io5'

function DocumentPostgresPage() {
    return (
        <>
            <div className='bg-gray'>
                <div className='container' >
                    <h1>REST API POSTGRES</h1>
                </div>
            </div >
            <div className="container">
                <p>REST API enables you to access your SyncSphere database using REST.</p>
                <h2 style={{ padding: '20px 0px' }}>Get Started</h2>
                <p>If you do not have a database already,<b className="c-pointer"> follow these steps</b> to create one.</p>
                <p style={{ padding: '10px 0px' }}>In the database details section of the <b className="c-pointer">SyncSphere Console</b> , click the REST API button. Copy the REST URL and the authentication token. Send an HTTP GET request to the provided URL by adding an  <b className="c-pointer">Authorization:Bearer $TOKEN header.</b></p>
                <div style={{ borderRadius: '10px', padding: '10px 20px', background: '#f3f6f4', margin: '20px 0px' }}>
                    <p style={{ color: '#10b981', textShadow: '0 0 0.25px currentcolor', textDecoration: 'underline' }}>URL</p>
                    <div style={{ padding: '10px 0px' }}>
                        <DemoCodeRedis index={'1'} title={"--url"} content={`"/api-v1/redis/__SUBSCRIPTIONID__ \"`} />
                        <DemoCodeRedis index={'2'} title={"--header"} content={`"Authorization: Bearer eyJhbGciOiJIUzI1NiJ9.eyJpZCI6IjY1ZD...${<IoSaveOutline />}"`} />
                        <DemoCodeRedis index={'3'} title={"--header"} content={`"Content-Type: application/json \"`} />
                        <DemoCodeRedis index={'4'} title={"--data"} content={`"command": ["GET", "foo"]`} />
                    </div>

                </div>
                <div>
                    <h2 style={{ padding: '20px 0px' }}>API Semantics</h2>
                    <p style={{ padding: '10px 0px' }}>SyncSphere REST API follows the same convention with <b>Redis Protocol.</b> Give the command name and parameters in the same order as Redis protocol by separating them with a /.</p>
                    <div style={{ borderRadius: '10px', padding: '10px 20px', background: '#f3f6f4', margin: '20px 0px' }}>
                        <p style={{ color: '#10b981', textShadow: '0 0 0.25px currentcolor', textDecoration: 'underline' }}>URL</p>
                        <div style={{ padding: '10px 0px' }}>
                            <DemoCodeRedis index={'1'} title={"--url"} content={`"/api-v1/redis/__SUBSCRIPTIONID__ \"`} />
                            <DemoCodeRedis index={'2'} title={"--header"} content={`"Authorization: Bearer eyJhbGciOiJIUzI1NiJ9.eyJpZCI6IjY1ZD...${<IoSaveOutline />}"`} />
                            <DemoCodeRedis index={'3'} title={"--header"} content={`"Content-Type: application/json \"`} />
                            <DemoCodeRedis index={'4'} title={"--data"} content={`"command": ["GET", "foo"]`} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DocumentPostgresPage