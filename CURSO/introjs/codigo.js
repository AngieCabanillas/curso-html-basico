//declarar variables con var, let
//undefined -> variable declarada pero no inicializada
//null -> variable vacía o nula
//nan -> "not a number" 
//el decremento-- e incremento++ tienen que asignarse primero a una variable antes de mostrarse

//NO se colocan comillas dentro de comillas, ni backtips dentro de backtips
//camelCase -> variablePrimera

//let nombre = prompt("¿Quien eres?") ;
//alert(nombre);
//document.write(res)
//CONCATENAR
//1. concat -> concatena string, al menos una variable debe ser string
//n1.concat(n2)
//num1 = 3;
//num2 = 4;
//2. frase = "" + num1 + num2; //para convertir todo a cadena y se muestre 34, no la suma
//frase = num1.concat(num2);
//document.write(frase);
//3. backticks ctrl+alt+corchetecerrado -> concatena texto""" con una variable que sea TEXTO

//OPERADORES
//== iguales en valor de la variable
//=== iguales en valor de la variable y en tipo de variable
//let nomb = "Angie";
//frase1 =`Soy ${nomb} y tengo sueño`;
//document.write(frase1);

//ATL+SHIFT + ARRIBA O ABAJO -> DESPLAZARME
//SHIFT + ALT + -> <- SELECCIONAR PALABRA

//ARRAYS
//let frutas = ["manzana", "naranja", "fresa"];

//ARRAYS ASOCIATIVOS
/*let  pc = {
    nombre: "pc1",
    marca: "lenovo",
    ram: "16GB",
}
let frase = pc["nombre"];
document.write(frase);*/

//CONTINUE - > hace que se salte ese elemento
//for (let i = 0; i <= 5; i++) {
//    if(i == 3){
//        continue;
//    }
//    document.write(i + "<br>");
//}

//FOR IN -> muestra indices del array Y FOR OF -> muestra el valor de los componentes del array
/*let animales = ["perro", "gato", "pulpo"];
for(animal in animales){
    document.write(animal + "<br>");
}
for(animal of animales){
    document.write(animal + "<br>");
}*/

//FUNCIONES 1. 
function saludar(){
    resp = prompt("que haces");
    if(resp == "bien"){
        alert("bien por ti");
    } else{
        alert("mal por ti");
    }
}
//FUNCIONES 2.
const saludar = function(nombre){
    
}
//FUNCIONES FLECHA
const saludar = (nombre)=>{

}

