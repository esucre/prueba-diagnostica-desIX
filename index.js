'use strict'
//@author Emilio Sucre
/*************Declaracion de Variables****************/
 const rl = require('readline-sync');
 let cadena;
 let identificador;
 let instrucciones


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

//Funcion convertir cade a encoding ROT13
function encodingROT13(cadena){
    let rot13 = cadena.replace(/[a-zA-Z]/g,function(c){return String.fromCharCode((c<="Z"?90:122)>=(c=c.charCodeAt(0)+13)?c:c-26);});
    return rot13.toString();
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

//Funcion convertir cadena a encoding Hex
function encodingHex(cadena) {
    return (
      Array
        .from(cadena)
        .reduce((acumulador, nextChar) => acumulador.concat(nextChar.charCodeAt().toString(16)), [])
        .join('')
    );
}


//Instrucciones al usuario
 instrucciones =
 ` Encoder de cadenas de texto, a continuacion los formatos soportados y su idetificador\n\
   - 0: Se ejecutará un encoding de tipo BASE64.\n\
   - 1: Se ejecutará un encoding de tipo ROT13.\n\
   - 2: Se ejecutará un encoding de tipo HEX.\n\
   - 3: Se ejecutará un encoding de tipo BINARIO.`;
console.log(instrucciones);
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
    if(!validarIdentificadorIngresado(identificador)){
    console.log(instrucciones);
        console.log('Debe elegir una de las opciones descritas anteriormente');
    }
}while(!validarIdentificadorIngresado(identificador));
 

 //Switch que controla que funcion se ejecutara segun el identificador ingresado por el usuario
switch(identificador){
    //Identificador 0: Convertir la cadena a Base64
    case 0:
        let cadenaBase64 = encodingBase64(cadena);
        console.log(mostrarResultadosCodificacion(cadena,cadenaBase64,'Base64'));
    break;

    //Identificador 1: Convertir la cadena a ROT13
    case 1:
    let cadenaROT13 = encodingROT13(cadena);
        console.log(mostrarResultadosCodificacion(cadena,cadenaROT13,'ROT13'));
    break;

    //Identificador 2: Convertir la cadena a HEX
    case 2:
        let cadenaHex = encodingHex(cadena);
        console.log(mostrarResultadosCodificacion(cadena,cadenaHex,'Hex'));
    break;

    //Identificador 3: Convertir la cadena a Binary
    case 3:
        let cadenaBinary = encodingBinary(cadena);
        console.log(mostrarResultadosCodificacion(cadena,cadenaBinary,'Binario'));
    break;
}

