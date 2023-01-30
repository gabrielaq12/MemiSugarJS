//Tienda

alert(" Binebenido a SURGAR MEMIS el camino a tu paladar!");

let nombre = prompt("Indique su nombre");
let apellido = prompt("Indique su apellido");

console.log("Hola " + nombre + " " + apellido);

alert("Hola " + nombre + " " + apellido);

let cupcake = prompt(" indica que cupcake deseas llevar tenemos disponibles frutilla, limon, frutos rojos");

const sabor1 = "frutilla";
const sabor2 = "limon";
const sabor3 = "frutos rojos";

//validacion de sabores
for(let i=0; i<10; i++){
    if(cupcake == sabor1 || cupcake == sabor2 || cupcake == sabor3){
        alert("Gracias por su seleccion");
        break;
    }
    else{
        alert("porfavor indique un sabor valido");
        cupcake = prompt(" indica que cupcake deseas llevar tenemos disponibles frutilla, limon, frutos rojos");
    }
}
const precio1 = 500;
const precio2 = 550;
const precio3 = 480;

switch(cupcake){
    case sabor1:
        alert("el precio por el cupcake de " + cupcake + "  es: " + precio1 + "$" );
        break;
    case sabor2:
        alert("el precio por el cupcake de " + cupcake + "  es: " + precio2 + "$" );
        break;
    case sabor3:
        alert("el precio por el cupcake de " + cupcake + "  es: " + precio3 + "$" );
        break;

}

let cantidad = prompt("indique la cantidad de cupcakes que desea ordenar");

let TotalaPagar = 0;

switch(cupcake){
    case sabor1:
        TotalaPagar = cantidad * precio1;
        alert("Su total a pagar es de " + TotalaPagar + "$");
    break;
    case sabor1:
        TotalaPagar = cantidad * precio2;
        alert("Su total a pagar es de " + TotalaPagar + "$");
    break;
    case sabor1:
        TotalaPagar = cantidad * precio3;
        alert("Su total a pagar es de " + TotalaPagar + "$");
    break;

}

alert("Gracias por comprar en MEMI SUGAR!");



