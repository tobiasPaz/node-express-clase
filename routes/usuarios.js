const routerUsuarios = require("express").Router();
const {
  verUsuarios,
  crearUsuario,
  eliminarUsuario,
} = require("../controllers/usuarios.js");

routerUsuarios.get("/", verUsuarios);
routerUsuarios.post("/", crearUsuario);
routerUsuarios.delete("/:id", eliminarUsuario);

module.exports = routerUsuarios;
