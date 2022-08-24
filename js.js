class Jugadores{
    constructor(nombre,apellido,dni,puesto,altura,peso){
        this.nombre= nombre;
        this.apellido=apellido;
        this.dni=dni;
        this.puesto=puesto;
        this.altura=altura;
        this.peso=peso;
        this.minutos_acumulados=0;
    }
}

let plantel = [];

let nuevo_registro = new Jugadores("ignacio", "lerena", 38054175, 4, 187, 115);
plantel.push(nuevo_registro);

console.log(plantel);


let bienvenido = parseInt(prompt("Bienvenido, ingrese su dni"));



if (plantel.includes(bienvenido)){
    console.log("Bienvenido", plantel.nombre);
} else {
    console.log("Debe registrarse como nuevo jugador");
    let nombre = prompt("Ingrese su nombre");
    let apellido = prompt("Ingrese su apellido");
    let dni = prompt("Ingrese su DNI");
    let puesto = parseInt(prompt("Ingrese su puesto (numero)"));
    let altura = parseInt(prompt("Ingrese su altura en cm"));
    let peso = parseInt(prompt("Ingrese su peso"));

    let nuevo_registro = new Jugadores(nombre, apellido, dni, puesto, altura, peso);
    plantel.push(nuevo_registro);

}

console.log(plantel);

let ultimo_partido = prompt("¿Jugaste el sabado? si o no");
    if (ultimo_partido == "si"){
    let minutos_ultimo_partido = parseInt(prompt("¿Cuantos Minutos jugaste el ultimo partido?"));
} else {
    let lesion = prompt("¿Estuviste lesionado?");
    let proximo_partido = prompt("¿Estas en condiciones de jugar el siguiente partido?");
    if (proximo_partido == "si"){
        console.log("Te esperamos en practica!");
    } else {
        console.log("Continua con tu recuperación!");
    }
}

console.log(plantel);