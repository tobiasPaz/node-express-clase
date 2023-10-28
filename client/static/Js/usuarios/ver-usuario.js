const btn_editar = document.querySelector("#btn-editar");
const modalEditar = document.querySelector("#modal-editar");
const btn_cancelar_editar = document.querySelector("#btn-cancelar-editar");
const btn_guardar_editar = document.querySelector("#btn-ok-editar");
const filtro = document.querySelector("#filtro");

const seccionEditar = document.querySelector("#editar-datos");
const editarNombre = document.querySelector("#nombre-usuario");
const editarApellido = document.querySelector("#apellido-usuario");
const editarGenero = document.querySelector("#genero-usuario");
const editarEdad = document.querySelector("#edad-usuario");
const editarEmail = document.querySelector("#email-usuario");
const editarPassword = document.querySelector("#password-usuario");

const seccionDatos = document.querySelector("#datos-usuario");
const IdUsuario = localStorage.getItem("idUsuario");
const titulo = document.querySelector("#titulo-usuario");

titulo.textContent = `Usuario ${IdUsuario}`;

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
        <h2>Nombre: ${data.nombre}</h2>
        <h2>Apellido: ${data.apellido}</h2>
        <h2>Genero: ${data.genero}</h2>
        <h2>Edad: ${data.edad}</h2>
        <h2>Email: ${data.email}</h2>
        <h2>Password: ${data.password}</h2>
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
        genero: editarGenero.value,
        edad: editarEdad.value,
        email: editarEmail.value,
        password: editarPassword.value,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }).then(() => {
      console.log(`fue exitosamente enviados`);
      location.reload();
    });
  });
  modalEditar.classList.add("display-0");
  filtro.classList.remove("oscurecer");
}

funcionModal();
agarrarDatos();
