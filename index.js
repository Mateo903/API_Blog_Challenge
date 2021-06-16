const express = require('express');
const app = express();
const port = process.env.PORT || 3000
const apiRouter = require('./routes/api')

require("./db")

app.use(express.urlencoded());
app.use(express.json());

app.use("/api", apiRouter);


app.listen(port, () => {
  console.log("sevidor en el puerto ", port)
});