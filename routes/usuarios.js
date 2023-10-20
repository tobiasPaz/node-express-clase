const routerUsuarios = require("express").Router();
const { verUsuarios, crearUsuario } = require("../controllers/usuarios.js");

routerUsuarios.get("/", verUsuarios);
routerUsuarios.post("/", crearUsuario);

module.exports = routerUsuarios;
