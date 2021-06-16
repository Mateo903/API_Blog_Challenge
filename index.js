const express = require('express');
const app = express();
const port = process.env.PORT || 3000

require("./db")

app.use(express.urlencoded());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hola Mundo")
});


app.listen(port, () => {
  console.log("sevidor en el puerto ", port)
});