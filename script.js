// Actividad 1: Patrón de Asteriscos

function actividad1() {
    for(let i = 1; i <= 5; i++) {
        let linea = "";
        for(let j = 1; j <= i; j++) {
            linea += "*";
        }
        console.log(linea);
    }
}
/*
Usé dos bucles anidados para construir un patrón de asteriscos donde cada línea 
tiene un asterisco más que la anterior
*/

//////////////////////////////////////////////////////////////////

// Actividad 2: FrontEnd/BackEnd
function actividad2() {
    for(let i = 1; i <= 100; i++) {
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
/* 
Recorrí los números del 1 al 99 y usé módulo para ver si eran divisibles entre 4 o 7 
y según eso imprimí FrontEnd BackEnd o FullStack
*/
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

/*
Pedí un número y con un bucle for multipliqué todos los enteros desde 1
 hasta ese número para calcular su factorial
*/
//////////////////////////////////////////////////////////////////


// Actividad 4: Múltiplos de 8
function actividad4() {
    let num1 = parseInt(prompt("Pon el primer numero:"));
    let num2 = parseInt(prompt("Pon el segundo numero:"));
    
    console.log("Multiplos de 8 entre " + num1 + " y " + num2 + "  = ");
    
    let inicio;
    let fin;
    if (num1 < num2) {
        inicio = num1;
        fin = num2;
    } else {
        inicio = num2;
        fin = num1;
    }
    
    for(let i = inicio; i <= fin; i++) {
        if(i % 8 === 0) {
            console.log(i);
        }
    }
}

/*
Pedí dos números y con un bucle recorrí el rango entre ellos mostrando solo 
los que eran divisibles entre 8 usando el operador módulo
*/
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
/*
Asumí que el número era primo y con un while probé dividirlo entre todos los números desde 2 hasta uno menos que él si alguna división
 daba residuo cero lo marqué como no primo
*/
//////////////////////////////////////////////////////////////////

// Actividad 6: Adivinar Número
function actividad6() {
    let numero_aleatorio = Math.floor(Math.random() * 10) + 1;
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
/*
Definí un número secreto y usé un while para seguir pidiendo intentos 
hasta que el usuario lo adivinara
*/
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
/*
Descompuse un número de tres cifras en sus dígitos usando división entera y módulo elevé cada dígito al cubo los sumé y comparé 
el resultado con el número original
*/
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
/*
Recorrí cada carácter del texto con un while y cada vez que encontraba una vocal ya fuera mayúscula
 o minúscula aumentaba un contador
*/
//////////////////////////////////////////////////////////////////

// Actividad 9: Valor de PI
function actividad9() {
    let pi = 3.1416;
    console.log("El valor de pi con 4 decimales es el siguiente  " + pi);
}
/*
Imprimí directamente el valor de pi con cuatro decimales sin hacer ningún cálculo ,
 también en JS se puede hacer ya que existe una funcion Math que te devuelve
  el PI(esto lo descubri pero ya que no lo pedido en el ejercicio especifico
 lo deje así pero se que también se puede de esa otra forma)
*/
//////////////////////////////////////////////////////////////////

// Actividad 10: Reemplazar Palabra
function actividad10() {
    let frase = prompt("esscribeme una frase:");
    let quitarpalabra = prompt("plabra la cual vamos a querer cambiar:");
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
/*
Separé la frase en palabras con split recorrí el arreglo y
 reemplacé la palabra indicada
 por la nueva luego uní todo de nuevo con espacios
*/
