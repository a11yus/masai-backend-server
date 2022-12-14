const jsonServer = require("json-server");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 1947;
require('dotenv').config()
const server = jsonServer.create();
const router = jsonServer.router('data.json');
server.use(middlewares);
server.use(router);
server.listen(port, console.log(`listning on ${port}`));