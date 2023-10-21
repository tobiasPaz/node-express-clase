const Usuario = require("../models/usuario");

async function verUsuarios(req, res) {
  const usuarios = await Usuario.find();
  let usuariosHtml = ``;
  for (const usuario of usuarios) {
    usuariosHtml += `${usuario}`;
  }
  res.json(usuarios);
}

async function crearUsuario(req, res) {
  const { nombre, email, password } = req.body;
  const usuario = new Usuario({
    nombre,
    email,
    password,
  });
  await usuario.save();
  res.json("usuario creado");
}

async function eliminarUsuario(req, res) {
  const { id } = req.params;
  await Usuario.findByIdAndDelete(id);
  res.json("usuario eliminado");
}

module.exports = {
  verUsuarios,
  crearUsuario,
  eliminarUsuario,
};
