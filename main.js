const ordenador1 = {
    marca: "HP",
    procesador: "i7",
    ram: "16Gb",
    hd: "1Tb",
    precio: 1500,
    extras: ["cámara HD", "microfono stereo", "disco de acceso rápido"],
    maletin: true
};

// 1- Escribe una frase que diga "mi ordenador es un HP, con procesador i7 y 16Gb de RAM"
console.log("Mi ordenador es un " + ordenador1.marca + ", con procesador " + ordenador1.procesador + " y " + ordenador1.ram + " de RAM.")

// - Recorre todos los valores con un bucle for in
for (const propiedad in ordenador1){
    console.log(ordenador1[propiedad]);
}

// - Muestra el tercer extra del ordenador
console.log(ordenador1.extras[2]);



const galletas = {
    marca: "Artiach",
    nombre: "Chiquilin",
    descripción: "galletas de mantequilla",
    precio: 2.75,
    hayExistencias: true
};

// Sobre este objeto:
// - Añadir una característica: oferta (Boolean)  -C-
galletas.integrales = true;
console.log(galletas);
console.log(galletas.integrales);

// - Modificar una característica: descripción  -U-
galletas.hayExistencias = false;
console.log(galletas);
console.log(galletas.hayExistencias);

// - Borrar una característica  -D-
// - Mostrar el objeto antes y después  -R-

console.log(galletas);
delete galletas.hayExistencias;
console.log(galletas);

// - Probar a mostrar solo valores (values) y solo propiedades (keys)
for (const propiedad in ordenador1){
    console.log("propiedad:" + propiedad);
};
for (const propiedad in ordenador1){
    console.log("valor:" + ordenador1[propiedad]);
};

// 3- Crear objetos que sean coches con sus características: marca, modelo, potencia, precio, etc
const coche = {
    marca: "Citroen",
    modelo: "C4-X",
    descripción: "115Kw",
    precio: 32050,
    hayExistencias: true
};

// - Con esos objetos, crear un array de objetos (concesionario)

const coche1 = {
    marca: "Citroen",
    modelo: "C4-X",
    descripcion: "115Kw",
    precio: 32050,
    hayExistencias: true
};
const coche2 = {
    marca: "Toyota",
    modelo: "Corolla",
    descripcion: "Híbrido",
    precio: 28000,
    hayExistencias: true
};
const coche3 = {
    marca: "Ford",
    modelo: "Focus",
    descripcion: "Gasolina",
    precio: 25000,
    hayExistencias: false
};
const coche4 = {
    marca: "BMW",
    modelo: "X5",
    descripcion: "350Hp",
    precio: 60000,
    hayExistencias: true
};
const coche5 = {
    marca: "Audi",
    modelo: "A4",
    descripcion: "Diesel",
    precio: 35000,
    hayExistencias: true
};
const coche6 = {
    marca: "Mercedes-Benz",
    modelo: "C-Class",
    descripcion: "220d",
    precio: 42000,
    hayExistencias: false
};
const concesionario = {
    coche1,
    coche2,
    coche3,
    coche4,
    coche5,
    coche6
};
// - Con ese array de objetos, mostrar por ejemplo, todos los modelos. (opción preguntar al usuario

// qué quiere mostrar: marca, modelo, potencia, precio )
function askUser(){
    let input = prompt("¿Qué quieres mostrar? (Escribe: marca/modelo/descripcion/precio/hayExistencias");
    if (input == ("marca" || "modelo" || "descripcion" || "precio" || "hayExistencias")){
        for (const coche in concesionario){
            console.log( concesionario[coche][input]);
        }
    } else {
        window.alert("No tenemos esa información sobre nuestros vehículos.");
    }
}


// Haz todas las pruebas que desees en estos tres labs!