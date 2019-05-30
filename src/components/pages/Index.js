import React from 'react';

function Index() {
    return (
      <div >
        <h1>Mysql closes the connection, it takes about 2000ms for it to reconnect, Please wait </h1>
        <h1>It doesnt always work, because heroku crashes when mysql closes the connection.</h1>
        <h1>For it to work it needs to be manually restarted</h1>
        

      </div>
    )
}

export default Index;
