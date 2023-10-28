const cuerpo_tabla = document.querySelector("#cuerpo-tabla");
const btn_crear = document.querySelector("#btn-crear");
let btn_eliminar = [];
let btn_inf = [];

async function cargar_tabla() {
  await fetch("http://localhost:3000/usuarios")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      for (let i = 0; i < data.length; i++) {
        cuerpo_tabla.innerHTML += `<tr>
          <th scope="row">${i + 1}</th>
          <td>${data[i].nombre}</td>
          <td>${data[i].apellido}</td>
          <td>${data[i].email}</td>
          <td><button class="btn-eliminar btn btn-light" value="${
            data[i]._id
          }">Eliminar</button></td>
          <td><button class="btn-inf btn btn-light" value="${
            data[i]._id
          }">Inf</button></td>
          </tr>`;
      }
    });

  btn_eliminar = document.querySelectorAll(".btn-eliminar");
  btn_inf = document.querySelectorAll(".btn-inf");

  for (let i = 0; i < btn_eliminar.length; i++) {
    btn_eliminar[i].addEventListener("click", async (event) => {
      await fetch(`http://localhost:3000/usuarios/${btn_eliminar[i].value}`, {
        method: "DELETE",
      });
      location.reload();
    });
  }

  for (let i = 0; i < btn_inf.length; i++) {
    btn_inf[i].addEventListener("click", async (event) => {
      localStorage.setItem("idUsuario", btn_inf[i].value);
      window.location.href = "../../views/usuarios/ver-usuario.html";
    });
  }
}

btn_crear.addEventListener("click", async (event) => {
  window.location.href = "../../views/usuarios/crear-usuario.html";
});

cargar_tabla();
