const mongoose = require("mongoose");
const schema = mongoose.Schema;

const usuarioSchema = new schema({
  dni: { type: Number, required: true },
  nombre: { type: String, required: true },
  apellido: { type: String, required: true },
  edad: { type: Number, required: true },
  fechaNacimiento: { type: Date, required: true },
  genero: { type: String, required: true },
  direccion: { type: String, required: true },
  telefono: { type: Number, required: true },
  email: { type: String, required: true },
  password: { type: Number, required: true },
});

const usuario = mongoose.model("usuario", usuarioSchema);

module.exports = usuario;
