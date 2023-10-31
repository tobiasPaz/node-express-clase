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

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  res.header("Allow", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

app.get("/", (req, res) => {
  res.send("chau!");
});

app.use("/usuarios", routerUsuarios);

app.use("*", (req, res) => {
  res.status(404).json({
    ok: false,
    descripcion: `ruta no encontrada`,
  });
});

app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send("Error interno del servidor");
});

app.listen(port, () => {
  console.log(`el servidor esta corriendo en http://localhost:${port}`);
});
