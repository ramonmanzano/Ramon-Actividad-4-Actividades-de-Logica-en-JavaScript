// Actividad 1: Patrón de Asteriscos

function actividad1() {
    for(let i = 1; i < 10; i++) {
        let linea = "";
        for(let j = 1; j < i; j++) {
            linea += "*";
        }
        console.log(linea);
    }
}

//////////////////////////////////////////////////////////////////

// Actividad 2: FrontEnd/BackEnd
function actividad2() {
    for(let i = 1; i < 100; i++) {
        if(i % 4 === 0 && i % 7 === 0) {
            console.log("FullStack");
        } else if(i % 4 === 0) {
            console.log("FrontEnd");
        } else if(i % 7 === 0) {
            console.log("BackEnd");
        } else {
            console.log(i);
        }
    }
}

//////////////////////////////////////////////////////////////////


// Actividad 3: Factorial
function actividad3() {
    let num = parseInt(prompt("Pon el numero para calcular factorial:"));
    let resultadodelfactorial = 1;
    for(let i = 1; i <= num; i++) {
        resultadodelfactorial = resultadodelfactorial * i;
    }
    console.log("El factorial de " + num + " es: " + resultadodelfactorial);
}

//////////////////////////////////////////////////////////////////


// Actividad 4: Múltiplos de 8
function actividad4() {
    let num1 = parseInt(prompt("Pon el primer numero:"));
    let num2 = parseInt(prompt("Pon el segundo numero:"));
    console.log("Múltiplos de 8 entre " + num1 + " y " + num2 + ":");
    for(let i = num1; i <= num2; i++) {
        if(i % 8 === 0) {
            console.log(i);
        }
    }
}

//////////////////////////////////////////////////////////////////


// Actividad 5: Número Primo
function actividad5() {
    let numero = parseInt(prompt("Ingresa un número:"));
    let primo = numero > 1;
    let i = 2;
    while (i < numero && primo) {
        if (numero % i === 0) {
            primo = false;
        }
        i = i + 1;
    }
    if (primo) {
        console.log(numero + " es primo");
    } else {
        console.log(numero + " no es primo");
    }
}

//////////////////////////////////////////////////////////////////

// Actividad 6: Adivinar Número
function actividad6() {
    let numero_aleatorio = 5;
    console.log("numero secreto entre 1 y 10");
    let numeroadivinado = false;
    while (numeroadivinado === false) {
        let intento = parseInt(prompt("que nunmero crees que es?"));
        if (intento === numero_aleatorio) {
            console.log("avivinaste el número " + numero_aleatorio);
            numeroadivinado = true;
        } else {
            console.log("fallaste");
        }
    }

}

//////////////////////////////////////////////////////////////////

// Actividad 7: Número Armstrong
function actividad7() {
    let numero = parseInt(prompt("dime un numero de tres cifras  :  "));
    let original = numero;
    let a = parseInt(numero / 100);
    numero = numero % 100;
    let b = parseInt(numero / 10);
    let c = numero % 10;
    let cubo1 = a * a * a;
    let cubo2 = b * b * b;
    let cubo3 = c * c * c;
    let suma = cubo1 + cubo2 + cubo3;
    if (suma == original) {
        console.log(original + " sis es ");
    } else {
        console.log(original + " no es");
    }
}

//////////////////////////////////////////////////////////////////

// Actividad 8: Contar Vocales
function actividad8() {
    let texto = prompt("pon una palabra o lo que prefieras : ");
    let contador = 0;
    let i = 0;
    while (i < texto.length) {
        let letra = texto[i];
        if (letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u' ||
            letra === 'A' || letra === 'E' || letra === 'I' || letra === 'O' || letra === 'U') {
            contador = contador + 1;
        }
        i = i + 1;
    }
    console.log("contiene el texto que me pasaste " + contador + " vocales");
}

//////////////////////////////////////////////////////////////////

// Actividad 9: Valor de PI
function actividad9() {
    let pi = 3.1416;
    console.log("El valor de pi con 4 decimales es el siguiente  " + pi);
}

//////////////////////////////////////////////////////////////////

// Actividad 10: Reemplazar Palabra
function actividad10() {
    let frase = prompt("esscribeme una frase:");
    let quitarcalabra = prompt("plabra la cual vamos a querer cambiar:");
    let palabraPoner = prompt("cambiar:");
    let palabras = frase.split(' ');
    let nuevafrase = "";
    for (let i = 0; i < palabras.length; i++) {
        if (palabras[i] == quitarpalabra) {
            nuevafrase = nuevafrase + palabraPoner + " ";
        } else {
            nuevafrase = nuevafrase + palabras[i] + " ";
        }
    }
    console.log("la frase con el resultado es: " + nuevafrase);
}