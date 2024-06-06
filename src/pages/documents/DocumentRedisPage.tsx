import DemoCodeRedis from "../../components/redisInfor/DemoCodeRedis"
import InstructionsApi from "../../components/examplesApi/InstructionsApi"
import HttpCode from "../../components/redisInfor/HttpCode"


function DocumentRedisPage() {
  return (
    <>

      <div className='bg-gray'>
        <div className='container' >
          <h1>REST API REDIS</h1>
        </div>
      </div >
      <div className="container">
        <p>REST API enables you to access your  database using REST.</p>
        <h2 style={{ padding: '20px 0px' }}>Get Started</h2>
        <p>If you do not have a database already,<b className="c-pointer"> follow these steps</b> to create one.</p>
        <p style={{ padding: '10px 0px' }}>In the database details section of the <b className="c-pointer"> Console</b> , click the REST API button. Copy the REST URL and the authentication token. Send an HTTP GET request to the provided URL by adding an  <b className="c-pointer">Authorization:Bearer $TOKEN header.</b></p>
        <div style={{ borderRadius: '10px', padding: '10px 20px', background: '#f3f6f4', margin: '20px 0px' }}>
          <p style={{ color: '#10b981', textShadow: '0 0 0.25px currentcolor', textDecoration: 'underline' }}>URL</p>
          <div style={{ padding: '10px 0px' }}>
            <DemoCodeRedis index={'1'} title={"--url"} content={`"/api-v1/redis/{SUBSCRIPTIONID} \"`} />
            <DemoCodeRedis index={'2'} title={"--header"} content={`"Authorization: Bearer eyJhbGciOiJIUzI1NiJ9.eyJpZCI6IjY1ZD..."`} />
            <DemoCodeRedis index={'3'} title={"--header"} content={`"Content-Type: application/json \"`} />
            <DemoCodeRedis index={'4'} title={"--data"} content={`"command": ["SET", "foo","bar"]`} />
          </div>

        </div>
        <p>Here are some examples:</p>
        <InstructionsApi title1={'SET foo bar'} title2={'REST_URL/set/foo/bar'} />
        <InstructionsApi title1={'SET foo bar EX 100'} title2={'REST_URL/set/foo/bar/EX/100'} />
        <InstructionsApi title1={'GET foo'} title2={'REST_URL/get/foo'} />
        <InstructionsApi title1={'MGET foo1 foo2 foo3'} title2={'REST_URL/mget/foo1/foo2/foo3'} />
        <InstructionsApi title1={'HGET employee:23381 salary'} title2={'REST_URL/hget/employee:23381/salary'} />
        <InstructionsApi title1={'ZADD teams 100 team-x 90 team-y'} title2={'REST_URL/zadd/teams/100/team-x/90/team-y'} />
        <div>
          <h2 style={{ padding: '20px 0px' }}>Pipelining</h2>
          <p style={{ padding: '10px 0px' }}> REST API provides support for command <b>pipelining</b>, allowing you to send multiple commands as a batch instead of sending them individually and waiting for responses. With the pipeline API, you can include several commands in a single HTTP request, and the response will be a JSON array. Each item in the response array corresponds to the result of a command in the same order as they were included in the pipeline.</p>
          <p>API endpoint for command <b>pipelining</b> is <b>/pipelining</b>. <b>Pipelining</b> commands should be send as a two dimensional JSON array in the request body, each row containing name of the command and its arguments.</p>
          <div style={{ borderRadius: '10px', padding: '10px 20px', background: '#f3f6f4', margin: '20px 0px' }}>
            <p style={{ color: '#10b981', textShadow: '0 0 0.25px currentcolor', textDecoration: 'underline' }}>URL</p>
            <div style={{ padding: '10px 0px' }}>
              <DemoCodeRedis index={'1'} title={"--url"} content={`"/api-v1/redis/pipeline/{SUBSCRIPTIONID}"`} />
              <DemoCodeRedis index={'2'} title={"--header"} content={`"Authorization: Bearer eyJhbGciOiJIUzI1NiJ9.eyJpZCI6IjY1ZD..."`} />
              <DemoCodeRedis index={'3'} title={"--header"} content={`"Content-Type: application/json \"`} />
              <DemoCodeRedis index={'4'} title={"--data"} content={`"command": [ `} />
              <div style={{ padding: '0px 20px' }}>
                <DemoCodeRedis content={` ["set", "key1", "valuex"]`} />

              </div>

              <DemoCodeRedis content={` ]`} />
            </div>
          </div>
        </div>
        <div>
          <h2 style={{ padding: '20px 0px' }}>Transactions</h2>
          <p style={{ padding: '10px 0px' }}> REST API supports transactions to execute multiple commands atomically. With transactions API, several commands are sent using a single HTTP request, and a single JSON array response is returned. Each item in the response array corresponds to the command in the same order within the transaction.</p>
          <p>API endpoint for transaction is <b>/multi-exec.</b> Transaction commands should be send as a two dimensional JSON array in the request body, each row containing name of the command and its arguments.</p>
          <div style={{ borderRadius: '10px', padding: '10px 20px', background: '#f3f6f4', margin: '20px 0px' }}>
            <p style={{ color: '#10b981', textShadow: '0 0 0.25px currentcolor', textDecoration: 'underline' }}>URL</p>
            <div style={{ padding: '10px 0px' }}>
              <DemoCodeRedis index={'1'} title={"--url"} content={`"/api-v1/redis/multi-exec/{SUBSCRIPTIONID}"`} />
              <DemoCodeRedis index={'2'} title={"--header"} content={`"Authorization: Bearer eyJhbGciOiJIUzI1NiJ9.eyJpZCI6IjY1ZD..."`} />
              <DemoCodeRedis index={'3'} title={"--header"} content={`"Content-Type: application/json \"`} />
              <DemoCodeRedis index={'4'} title={"--data"} content={`"command": [ `} />
              <div style={{ padding: '0px 20px' }}>
                <DemoCodeRedis content={` ["set", "key1", "valuex"]`} />
              </div>
              <DemoCodeRedis content={` ]`} />
            </div>
          </div>
        </div>
        <div>
          <h2 style={{ padding: '20px 0px' }}>HTTP Codes</h2>
          <HttpCode title1={'200 OK :'} title2={'When request is accepted and successfully executed.'} />
          <HttpCode title1={'400 Bad Request :'} title2={'When there’s a syntax error, an invalid/unsupported command is sent or command execution fails.'} />
          <HttpCode title1={'401 Unauthorized :'} title2={'When authentication fails; auth token is missing or invalid.'} />
          <HttpCode title1={'405 Method Not Allowed :'} title2={'When an unsupported HTTP method is used. Only HEAD, GET, POST and PUT methods are allowed.'} />
        </div>
      </div>
    </>
  )
}

export default DocumentRedisPage