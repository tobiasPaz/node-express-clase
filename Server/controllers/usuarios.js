const Usuario = require("../models/usuario");

async function verUsuarios(req, res) {
  const usuarios = await Usuario.find();
  let usuariosHtml = ``;
  for (const usuario of usuarios) {
    usuariosHtml += `${usuario}`;
  }
  res.json(usuarios);
}

async function verUsuario(req, res) {
  const { id } = req.params;
  const usuario = await Usuario.findById(id);
  let usuarioHtml = `${usuario}`;
  res.json(usuario);
}

async function crearUsuario(req, res) {
  const { nombre, apellido, edad, genero, email, password } = req.body;
  const usuario = new Usuario({
    nombre,
    apellido,
    edad,
    genero,
    email,
    password,
  });
  await usuario.save();
  res.json("usuario creado");
}

async function modificarUsuario(req, res) {
  const { id } = req.params;
  const { nombre, apellido, edad, genero, email, password } = req.body;
  let usuario = await Usuario.findByIdAndUpdate(id, {
    nombre,
    apellido,
    edad,
    genero,
    email,
    password,
  });
  usuario = await usuario.save();
}

async function eliminarUsuario(req, res) {
  const { id } = req.params;
  await Usuario.findByIdAndDelete(id);
  res.json("usuario eliminado");
}

module.exports = {
  verUsuarios,
  verUsuario,
  crearUsuario,
  modificarUsuario,
  eliminarUsuario,
};
