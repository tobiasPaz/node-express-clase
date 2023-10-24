const routerUsuarios = require("express").Router();
const {
  verUsuarios,
  verUsuario,
  crearUsuario,
  modificarUsuario,
  eliminarUsuario,
} = require("../controllers/usuarios.js");

routerUsuarios.get("/", verUsuarios);
routerUsuarios.get("/:id", verUsuario);
routerUsuarios.post("/", crearUsuario);
routerUsuarios.put("/:id", modificarUsuario);
routerUsuarios.delete("/:id", eliminarUsuario);

module.exports = routerUsuarios;
