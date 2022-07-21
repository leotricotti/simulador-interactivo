//Saldo inicial
let saldo = 100000;

//Menu inicio
let seleccion = prompt("Seleccione la operación deseada: \n1) Consulta de saldo  \n2) Depósitos \n3) Extracciones \n4) Salir");

//Función para consultar el saldo
function consultar(){
    return alert("Su saldo es: $ " + saldo);
}

//Función para realizar depositos
function depositar(){
    let deposito = parseInt(prompt("Ingrese el monto que desea depósitar: "));
    saldo = saldo + deposito;
    return alert("Operación realizada con exíto. \nSu saldo es: $ " + saldo);
}

//Función para realizar extracciones
function extraer(){
    let extraccion = parseInt(prompt("Ingrese el monto que desea extraer: "));
    saldo = saldo - extraccion;
    return alert("Operación realizada con exíto. \nSu saldo es: $ " + saldo);
}

//Función para salir del sistema
function salir(){
    return alert("Gracias por utilizar nuestros servicios.")
}

//Programa principal
while(seleccion != "4"){
    switch(seleccion){
        case "1":
            consultar();
            break;
        
        case "2":
            depositar();
            break;
        
        case "3":
            extraer();
            break;
        
        default:
            alert("Opcion invalida. Vuelva a intentarlo.");
            break    
        }
    seleccion = prompt("Seleccione la operación deseada: \n1)Consulta de saldo  \n2) Depositos \n3) Extracciones \n4) Salir");
}

salir();