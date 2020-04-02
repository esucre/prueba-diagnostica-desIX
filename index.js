'use strict'

/*************Declaracion de Variables****************/
 const rl = require('readline-sync');
 let cadena;
 let identificador;
 let validacionCadena;


/*************Funciones****************/
//Funcion mostrar resultados de la conversion
function mostrarResultadosCodificacion(cadena, resultado, formato){
    let resultadoCadena = `Cadena ingresada \t\t\t Cadena Encodeada al formato: ${formato}\n\
        ${cadena} \t\t\t ${resultado}`
    return resultadoCadena;
}

//Funcion validar cadena
function validarCadenaIngresada(cadena){
    if(cadena.length >= 1 && cadena.length<=10){       
       return true;
    }else{
       return false;
    }    
}

//Funcion validar identificador
function validarIdentificadorIngresado(identificador){
    if(identificador >= 0 && identificador <= 3){       
       return true;
    }else{
       return false;
    }    
}

//Funcion convertir cadena a encoding base64
function encodingBase64(cadena){
    let buff = new Buffer.from(cadena);
    let Base64 = buff.toString('base64');
    return Base64;
}

//Funcion convertir cadena a encoding Binario
function encodingBinary(cadena) {
    return (
      Array
        .from(cadena)
        .reduce((acumulador, nextChar) => acumulador.concat(nextChar.charCodeAt().toString(2)), [])
        .map(bin => '0' + bin )
        .join(' ')
    );
}

//Funcion convertir cadena a encoding Binario
function encodingHex(cadena) {
    return (
      Array
        .from(cadena)
        .reduce((acumulador, nextChar) => acumulador.concat(nextChar.charCodeAt().toString(16)), [])
        .join('')
    );
}


//Instrucciones al usuario
 console.log
 (` Encoder de cadenas de texto, a continuacion los formatos soportados y su idetificador\n\
   - 0: Se ejecutará un encoding de tipo BASE64.\n\
   - 1: Se ejecutará un encoding de tipo ROT13.\n\
   - 2: Se ejecutará un encoding de tipo HEX.\n\
   - 3: Se ejecutará un encoding de tipo BINARIO.`);



//Se obtiene y se valida la cadena ingresada por el usuario
do{
    cadena = rl.question('Cadena a encodear: ');
        if(!validarCadenaIngresada(cadena)){
            console.log('La longitud de la cadena debe ser mayor a 1 caracter y menor que 10 caracteres');
        }            
}while(!validarCadenaIngresada(cadena));
 

//Se obtiene y se valida el identificador ingresado por el usuario
do{
    identificador = parseInt(rl.question('Ingresa el identificador para realizar el encode: '));
    if(!validarIdentificadorIngresado(identificador))
        console.log('Debe elegir una de las opciones descritas anteriormente');
}while(!validarIdentificadorIngresado(identificador));
 

 //Switch que controla que funcion se ejecutara segun el identificador ingresado por el usuario
switch(identificador){
    //Identificador 0: Convertir la cadena a Base64
    case 0:
        let cadenaBase64 = encodingBase64(cadena);
        console.log(mostrarResultadosCodificacion(cadena,cadenaBase64,'Base64'));
    break;

    //Identificador 0: Convertir la cadena a ROT13
    case 1:
    break;

    //Identificador 0: Convertir la cadena a HEX
    case 2:
        let cadenaHex = encodingHex(cadena);
        console.log(mostrarResultadosCodificacion(cadena,cadenaHex,'Hex'));
    break;

    //Identificador 0: Convertir la cadena a Binary
    case 3:
        let cadenaBinary = encodingBinary(cadena);
        console.log(mostrarResultadosCodificacion(cadena,cadenaBinary,'Binario'));
    break;
}

