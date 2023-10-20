const Usuario = require("../models/usuario");

async function verUsuarios(req, res) {
  const usuarios = await Usuario.find();
  let usuariosHtml = ``;
  for (const usuario of usuarios) {
    usuariosHtml += `
      <tr>
        <td>${usuario.nombre}</td>
        <td>${usuario.email}</td>
        <td>${usuario.password}</td>
      </tr>
    `;
  }
  res.send(usuariosHtml);
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

module.exports = {
  verUsuarios,
  crearUsuario,
};
