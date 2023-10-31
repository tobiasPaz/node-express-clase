const btn_volver = document.querySelector("#btn-volver");
const btn_editar = document.querySelector("#btn-editar");

const modalEditar = document.querySelector("#modal-editar");
const btn_cancelar_editar = document.querySelector("#btn-cancelar-editar");
const btn_guardar_editar = document.querySelector("#btn-ok-editar");
const filtro = document.querySelector("#filtro");

const seccionEditar = document.querySelector("#editar-datos");
const editarNombre = document.querySelector("#nombre-usuario");
const editarApellido = document.querySelector("#apellido-usuario");
const editarEdad = document.querySelector("#edad-usuario");
const editarGenero = document.querySelector("#genero-usuario");
const editarEmail = document.querySelector("#email-usuario");
const editarPassword = document.querySelector("#password-usuario");

const seccionDatos = document.querySelector("#datos-usuario");
const IdUsuario = localStorage.getItem("idUsuario");
const titulo = document.querySelector("#titulo-usuario");

titulo.textContent = `Usuario: ${IdUsuario}`;

async function agarrarDatos() {
  await fetch(`http://localhost:3000/usuarios/${IdUsuario}`)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      editarNombre.value = data.nombre;
      editarApellido.value = data.apellido;
      editarGenero.value = data.genero;
      editarEdad.value = data.edad;
      editarEmail.value = data.email;
      editarPassword.value = data.password;

      seccionDatos.innerHTML = `
      <tr>
        <th scope="row">Nombre</th>
        <td>${data.nombre}</td>
      </tr>
      <tr>
        <th scope="row">Apellido</th>
        <td>${data.apellido}</td>
      </tr>
      <tr>
        <th scope="row">Edad</th>
        <td>${data.edad}</td>
      </tr>
      <tr>
        <th scope="row">Genero</th>
        <td>${data.genero}</td>
      </tr>
      <tr>
        <th scope="row">Email</th>
        <td>${data.email}</td>
      </tr>
      <tr>
        <th scope="row">Password</th>
        <td>${data.password}</td>
      </tr>
        `;
    });
}

function funcionModal() {
  btn_editar.addEventListener("click", () => {
    modalEditar.classList.remove("display-0");
    filtro.classList.add("oscurecer");
  });

  btn_cancelar_editar.addEventListener("click", () => {
    modalEditar.classList.add("display-0");
    filtro.classList.remove("oscurecer");
  });

  btn_guardar_editar.addEventListener("click", () => {
    fetch(`http://localhost:3000/usuarios/${IdUsuario}`, {
      method: "PUT",
      body: JSON.stringify({
        nombre: editarNombre.value,
        apellido: editarApellido.value,
        edad: editarEdad.value,
        genero: editarGenero.value,
        email: editarEmail.value,
        password: editarPassword.value,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    modalEditar.classList.add("display-0");
    filtro.classList.remove("oscurecer");
    location.reload();
  });
}

function volver() {
  window.location.replace("../../views/usuarios/ver-usuarios.html");
}

btn_volver.addEventListener("click", volver);

funcionModal();
agarrarDatos();
