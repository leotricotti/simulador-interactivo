//Saldo inicial
let saldo = 100000;

operar();

//Función menu inicio  
function operar(){
    let seleccion = prompt("Seleccione la operación deseada: \n1)Consulta de saldo   \n2) Depositos \n3) Extracciones \n4) Salir");
}

//Funcion para consultar el saldo
function consultar(){
    return alert("Su saldo es: $ " + saldo);
}

//Funcion para realizar depositos
function depositar(){
    let deposito = parseInt(prompt("Ingrese el monto que desea depositar: "));
    saldo = saldo + deposito;
    return alert("Operación realizada con exito. \nSu saldo es: $ " + saldo);
}

//Funcion para realizar extracciones
function extraer(){
    let extraccion = parseInt(prompt("Ingrese el monto que desea extraer: "));
    saldo = saldo - extraccion;
    return alert("Operación realizada con exito. \nSu saldo es: $ " + saldo);
}

//Funcion para salir del sistema
function salir(){
    return alert("Gracias por utilizar nuestros servicios.")
}

//Programa principal
while(seleccion != "4"){
    switch(seleccion){
        case "1":
            consultar();
        
        case "2":
            depositar();
        
        case "3":
            extraer();
        
        default:
            alert("Opcion invalida. Vuelva a intentarlo.");
            operar();
        }
    operar();
}

salir();