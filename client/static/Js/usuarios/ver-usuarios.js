const cuerpo_tabla = document.querySelector("#cuerpo-tabla");
let btn_eliminar = [];

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
          <td>${data[i].edad}</td>
          <td>${data[i].genero}</td>
          <td>${data[i].email}</td>
          <td>${data[i].password}</td>
          <td><button class="btn-eliminar btn btn-light" value="${
            data[i]._id
          }">Eliminar</button></td>
          </tr>`;
      }
    });

  btn_eliminar = document.querySelectorAll(".btn-eliminar");
  console.log(btn_eliminar);

  for (let i = 0; i < btn_eliminar.length; i++) {
    btn_eliminar[i].addEventListener("click", async (event) => {
      await fetch(`http://localhost:3000/usuarios/${btn_eliminar[i].value}`, {
        method: "DELETE",
      });
      location.reload();
    });
  }
}

cargar_tabla();
