/*const nombre= 'Mauro';
const miTemplate = `Mi nombre es ${nombre}`;
console.log(miTemplate);*/
/*const miTemplate = `2 * 3 es ${ 2 * 3 }`;*/
/*console.log(miTemplate);
function suma(var1, var2) {
    return var1 + var2
    }
    const temp = `El resultado es ${suma(2,2)}`;
    console.log(temp);*/

/* const template = `<h1>Hola Mundo!</h1>`;
 //Agregá la propiedad id=’body’ a tu elemento body en HTML
 const body = document.getElementById("body");
 body.innerText = template;
 body.innerHTML = template;*/
<script>
var p = document.createElement("P")

var texT = document.createTextNode("Buenos Dias");

p.appendChild(texT);

var diV = document.querySelector("div").appendChild(p);

document.body.appendChild(diV)

</script> 