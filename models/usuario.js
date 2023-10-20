const mongoose = require("mongoose");
const schema = mongoose.Schema;

const usuarioSchema = new schema({
  nombre: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: Number, required: true },
});

const usuario = mongoose.model("usuario", usuarioSchema);

module.exports = usuario;
