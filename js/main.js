//Saldo inicial
let saldo = 100000;

//Función menu inicio  
function operar(){
    let seleccion = prompt("Seleccione la operación deseada: \n1) Depositos \n2) Extracciones \n3) Consulta de saldo \n4) Salir");
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

//Funcion para consultar el saldo
function consultar(){
    return alert("Su saldo es: $ " + saldo);
}


