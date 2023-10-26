const inputNombre = document.querySelector("#nombre");
const inputApellido = document.querySelector("#apellido");
const inputGenero = document.querySelector("#genero");
const inputEdad = document.querySelector("#edad");
const inputEmail = document.querySelector("#email");
const inputPassword = document.querySelector("#password");
const recibir = document.querySelector("#enviar");

recibir.addEventListener("click", async (event) => {
  event.preventDefault();
  const Nombre = inputNombre.value;
  const Apellido = inputApellido.value;
  const Edad = inputEdad.value;
  const Genero = inputGenero.value;
  const Email = inputEmail.value;
  const Password = inputPassword.value;

  let Persona = {
    nombre: Nombre,
    apellido: Apellido,
    edad: Edad,
    genero: Genero,
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
  }).then(() => {
    console.log(`fue exitosamente enviados`);
  });
});
