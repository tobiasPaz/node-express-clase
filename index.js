const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();
const routerUsuarios = require("./routes/usuarios.js");
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.connect("mongodb://127.0.0.1:27017/usuarios", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", () => {
  console.log(error);
});
db.once("open", () => {
  console.log("conectado a mongo db");
});

app.get("/", (req, res) => {
  res.send("chau!");
});

app.use("/usuarios", routerUsuarios);

app.listen(port, () => {
  console.log(`el servidor esta corriendo en http://localhost:${port}`);
});
