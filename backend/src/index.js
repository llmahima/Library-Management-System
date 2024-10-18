const express = require("express")
const app = express();
const bodyParser = require("body-parser")
const cors = require('cors')

app.use(cors());
app.use(bodyParser.json()); // To parse JSON bodies
app.use(bodyParser.urlencoded({ extended: true }));
const apiroute = require("./routes/index");


const setupAndStartServer = () => {

  app.use("/api" , apiroute);
  app.listen(3000 , () => {
    console.log("Server started in PORT 3000");

  })
}

setupAndStartServer();