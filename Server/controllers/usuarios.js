const Usuario = require("../models/usuario");

function catchAsync(fn) {
  return (req, res, next) => {
    fn(req, res, next).catch((err) => next(err));
  };
}

const verUsuarios = catchAsync(async (req, res) => {
  const usuarios = await Usuario.find();
  let usuariosHtml = ``;
  for (const usuario of usuarios) {
    usuariosHtml += `${usuario}`;
  }
  res.json(usuarios);
});

const verUsuario = catchAsync(async (req, res) => {
  const { id } = req.params;
  const usuario = await Usuario.findById(id);
  let usuarioHtml = `${usuario}`;
  res.json(usuario);
});

const crearUsuario = catchAsync(async (req, res) => {
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
});

const modificarUsuario = catchAsync(async (req, res) => {
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
});

const eliminarUsuario = catchAsync(async (req, res) => {
  const { id } = req.params;
  await Usuario.findByIdAndDelete(id);
  res.json("usuario eliminado");
});

module.exports = {
  verUsuarios,
  verUsuario,
  crearUsuario,
  modificarUsuario,
  eliminarUsuario,
};
