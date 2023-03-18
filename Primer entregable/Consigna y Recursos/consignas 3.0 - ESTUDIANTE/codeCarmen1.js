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

      let anioactual=new Date().getFullYear();
      datosPersona.nombre=prompt("Ingresa tu nombre: ");
      datosPersona.edad=anioactual- prompt("Ingresa tu año de nacimiento: ");
      datosPersona.ciudad=prompt("Ingresa la cuidad en donde vives: ");
      let likejs=confirm("Te interesa Javascript?");
      if (likejs==true)
          {datosPersona.interesPorJs="si"}
      else
          {datosPersona.interesPorJs="no"} 
}


function renderizarDatosUsuario() {
  /* ------------------- NO TOCAR NI ELIMINAR ESTA FUNCION. ------------------- */
  obtenerDatosDelUsuario();
  /* --------------- PUNTO 2: Escribe tu codigo a partir de aqui --------------- */

  document.querySelector('.card-header #nombre').innerText+=datosPersona.nombre;
  document.querySelector('.card-header #edad').innerText+=datosPersona.edad;
  document.querySelector('.card-header #ciudad').innerText+=datosPersona.ciudad;
  document.querySelector('.card-header #javascript').innerText+=datosPersona.interesPorJs;

}


function recorrerListadoYRenderizarTarjetas() {
  /* ------------------ PUNTO 3: Escribe tu codigo desde aqui ------------------ */
  const fila=document.querySelector("#fila");

  listado.forEach(materia=>{

      const caja=document.createElement("article")
      const imagen=document.createElement("img");
      const lenguajes=document.createElement("p");
      const bimestre=document.createElement("p");

      lenguajes.innerText=materia.lenguajes;
      bimestre.innerText=materia.bimestre;
      imagen.setAttribute("src",materia.imgUrl);
      imagen.setAttribute("alt","materia");
      
      caja.appendChild(imagen);
      caja.appendChild(lenguajes);
      caja.appendChild(bimestre);
      caja.classList.add("caja");
      fila.appendChild(caja);   

  }
  
  )


}

function alternarColorTema() {


  /* --------------------- PUNTO 4: Escribe tu codigo aqui --------------------- */
  const sitio=document.querySelector("#sitio");
  sitio.classList.toggle("dark");

  


}

/* --------------------- PUNTO 5: Escribe tu codigo aqui --------------------- */

document.addEventListener("keydown",function (event){
    if(event.key=="F"||event.key=="f"){
      let sobremi=document.getElementById("#sobre-mi");
      
      sobremi.classList.remove("#sobre-mi");
    }

})


renderizarDatosUsuario();
recorrerListadoYRenderizarTarjetas()

