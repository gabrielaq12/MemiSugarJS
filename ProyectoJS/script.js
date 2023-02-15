//Tienda
class Producto {
    constructor (sabor, precio){
        this.sabor = sabor;
        this.precio = precio;
    }
}

class Venta {
    constructor ( producto, cantidad, total){
        this.producto = producto;
        this.cantidad = cantidad;
        this.total = total;
    }
}

alert(" Bienvenido a SURGAR MEMIS el camino a tu paladar!");

let nombre = prompt("Indique su nombre");
let apellido = prompt("Indique su apellido");

alert("Hola " + nombre + " " + apellido);

const ventas = [];

const frutilla = new Producto ("frutilla", 500);
const limon = new Producto ("limon", 550);
const frutosr = new Producto ("frutos rojos", 480 );
const productosDisponibles = [frutilla, limon, frutosr];
let seguir = true;

while(seguir){

    let productoVenta;

    //validacion de sabores
    for(let i=0; i<10; i++){
        let cupcake = prompt(" indica que cupcake deseas llevar tenemos disponibles frutilla, limon, frutos rojos");
        if(cupcake == frutilla.sabor || cupcake == limon.sabor || cupcake == frutosr.sabor){
            alert("Gracias por su seleccion");
            productoVenta = productosDisponibles.find(function(item){
                return item.sabor == cupcake;
            });
            break;
        }
        else{
            alert("porfavor indique un sabor valido");
        }
    }

    alert("el precio por el cupcake de " + productoVenta.sabor + "  es: " + productoVenta.precio + "$" );

    let cantidad = parseInt( prompt("indique la cantidad de cupcakes que desea ordenar"));

    let existe = ventas.findIndex(function(item){
        return item.producto == productoVenta;
    });
    console.log(existe);
    if(existe == -1){
        let venta = new Venta (productoVenta, cantidad, cantidad * productoVenta.precio );
        ventas.push(venta);
    } else {
        ventas[existe].cantidad += cantidad;
        ventas[existe].total += cantidad * productoVenta.precio;
    }
    seguir = confirm("Desea agregar otro producto");

}

let totalAPagar = 0;

ventas.forEach(element => {
    alert("produto: " + element.producto.sabor + " " +element.cantidad + " " + element.total)
    totalAPagar += element.total
});

alert("total a pagar: " + totalAPagar);

alert("Gracias por comprar en MEMI SUGAR!");