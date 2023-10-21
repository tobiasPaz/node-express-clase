const mongoose = require("mongoose");
const schema = mongoose.Schema;

const usuarioSchema = new schema({
  _id: schema.Types.ObjectId,
  nombre: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: Number, required: true },
});

const usuario = mongoose.model("usuario", usuarioSchema);

module.exports = usuario;
