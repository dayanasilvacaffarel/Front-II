/* --------------------------- NO TOCAR DESDE ACÁ --------------------------- */
let datosPersona = {
  nombre: "",
  edad: 0,
  ciudad: "",
  interesPorJs: "",
};

const listado = [{
  imgUrl: "https://huguidugui.files.wordpress.com/2015/03/html1.png",
  lenguajes: "HTML y CSS",
  bimestre: "1er bimestre",
},
{
  imgUrl: "https://jherax.files.wordpress.com/2018/08/javascript_logo.png",
  lenguajes: "Javascript",
  bimestre: "2do bimestre",
},
{
  imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png",
  lenguajes: "React JS",
  bimestre: "3er bimestre",
},
];

const profileBtn = document.querySelector("#completar-perfil");
const materiasBtn = document.querySelector("#obtener-materias");
const verMasBtn = document.querySelector("#ver-mas");
const cambiarTema = document.querySelector('#cambiar-tema');

profileBtn.addEventListener("click", renderizarDatosUsuario);
materiasBtn.addEventListener("click", recorrerListadoYRenderizarTarjetas);
cambiarTema.addEventListener("click", alternarColorTema);
/* --------------------------- NO TOCAR HASTA ACÁ --------------------------- */

function obtenerDatosDelUsuario() {
  /* --------------- PUNTO 1: Escribe tu codigo a partir de aqui --------------- */

  let anioActual = new Date().getFullYear();
  datosPersona.nombre = prompt("Ingrese su nombre");
  datosPersona.edad = anioActual - parseInt(prompt("Ingrese su año de nacimiento"));
  datosPersona.ciudad = prompt("Ingrese su ciudad");
  let interesadoEnJavascript = confirm("¿Tiene interés en JavaScript?")
  if (interesadoEnJavascript == true) { datosPersona.interesPorJs = "Si" }
  else { datosPersona.interesPorJs = "No" }
}

function renderizarDatosUsuario() {
  /* ------------------- NO TOCAR NI ELIMINAR ESTA FUNCION. ------------------- */
  obtenerDatosDelUsuario();
  /* --------------- PUNTO 2: Escribe tu codigo a partir de aqui --------------- */

  document.querySelector('.card-header #nombre').innerText += datosPersona.nombre;
  document.querySelector('.card-header #edad').innerText += datosPersona.edad;
  document.querySelector('.card-header #ciudad').innerText += datosPersona.ciudad;
  document.querySelector('.card-header #javascript').innerText += datosPersona.interesPorJs;
}
renderizarDatosUsuario();

function recorrerListadoYRenderizarTarjetas() {
  /* ------------------ PUNTO 3: Escribe tu codigo desde aqui ------------------ */

  const ficha = document.querySelector("#fila");
  ficha.innerHTML = "";
  listado.forEach((materia) => {
    ficha.innerHTML += `
  <div class="caja">
    <img src="${materia.imgUrl}" alt="${materia.lenguajes}">
    <p class = "lenguajes"> ${materia.lenguajes}</p>
    <p class = "bimestre"> ${materia.bimestre}</p>
  </div>
  `
  });
}

function alternarColorTema() {
  /* --------------------- PUNTO 4: Escribe tu codigo aqui --------------------- */

  const cambiarTema = document.querySelector("#sitio #cambiar-tema");
  sitio.classList.toggle("dark");
}

/* --------------------- PUNTO 5: Escribe tu codigo aqui --------------------- */
document.addEventListener("keydown", function (e) {
  if (e.key === "F" || e.key === "f") {
    let sobreMi = document.getElementById("sobre-mi")
    sobreMi.classList.remove("oculto")
  }
});
