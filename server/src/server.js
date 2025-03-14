const express = require("express");
const app = express();

app.get("/", (req, res) => {
   res.send("Welcome the the server")
})

app.get("/products", (req, res) => {
   res.send("Products are retured");
})



app.listen(3001, () => {
   console.log(`Server is running at http://localhost:3001`);
});