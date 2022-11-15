const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("data.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

server.listen(8080, () => {
  console.log(`JSON Server is running on port http://localhost:8080 🔥`);
});
