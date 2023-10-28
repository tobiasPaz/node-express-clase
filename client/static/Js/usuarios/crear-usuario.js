const inputNombre = document.querySelector("#name-usuario");
const inputApellido = document.querySelector("#last-name-usuario");
const inputGenero = document.querySelector("#gender-usuario");
const inputEdad = document.querySelector("#age-usuario");
const inputEmail = document.querySelector("#email-usuario");
const inputPassword = document.querySelector("#password-usuario");
const recibir = document.querySelector("#enviar");

recibir.addEventListener("click", async (event) => {
  event.preventDefault();
  const Nombre = inputNombre.value;
  const Apellido = inputApellido.value;
  const Genero = inputGenero.value;
  const Edad = inputEdad.value;
  const Email = inputEmail.value;
  const Password = inputPassword.value;

  let Persona = {
    nombre: Nombre,
    apellido: Apellido,
    genero: Genero,
    edad: Edad,
    email: Email,
    password: Password,
  };
  console.log(Persona);
  await fetch("http://localhost:3000/usuarios", {
    method: "POST",
    body: JSON.stringify(Persona),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then(() => {
      console.log(`fue exitosamente enviados`);
    })
    .then(() => {
      inputNombre.value = "";
      inputApellido.value = "";
      inputGenero.value = "";
      inputEdad.value = "";
      inputEmail.value = "";
      inputPassword.value = "";
    })
    .then(() => {
      window.location.replace("../../views/usuarios/ver-usuarios.html");
    });
});
