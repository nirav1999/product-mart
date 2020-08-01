
const app = require('./config/express');
const config = require('./config/config');
 
//mongodb
require('./config/mongoose');

//listen to the port
app.listen(config.port,()=>{console.log(`server is running from port ${config.port} (${config.env})`);
 });