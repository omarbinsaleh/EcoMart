const app = require("./app");
const { serverPort } = require("./secrets");

app.listen(serverPort, () => {
   console.log(`Server is running at http://localhost:${serverPort}`);
});