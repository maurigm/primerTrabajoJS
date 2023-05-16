    // Desarrollo de ejercicios

    // Ejercicio 1:
    // Escribe un programa de una sola línea que haga que aparezca en la pantalla un alert que diga “un mensaje”.

    // alert("un mensaje");





    // Ejercicio 2:
    // Escribe un programa de una sola línea que escriba en la pantalla un texto que diga «Hello World» (document.write).

    // document.write("Hello World");





    // Ejercicio 3:
    // Escribe un programa de una sola línea que escriba en la pantalla el resultado de sumar 3 + 5.

    // document.write(3+5);






    // Ejercicio 4:
    // Escribe un programa de dos líneas que pida el nombre del usuario con un prompt y escriba un texto que diga «Hola nombreUsuario»

    // let nombreUsuario = prompt("Cual es el nombre del usuario?");
    // document.write(`Hola ${nombreUsuario}`);




    // Ejercicio 5:
    // Escribe un programa de tres líneas que pida un número, pida otro número y escriba el resultado de sumar estos dos números.

    // let numero1 = parseInt(prompt("Ingrese un numero")); 
    // let numero2 = parseInt(prompt("Ingrese otro numero"));
    // document.write(`La suma de los numeros ingresados es:  ${numero1 + numero2}`);






    // Ejercicio 6:
    // Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.

    // let numero1 = parseInt(prompt("Ingrese un numero")); 
    // let numero2 = parseInt(prompt("Ingrese otro numero"));
    
    // if (numero1 > numero2) {
    //     document.write(`el numero ${numero1} es el mayor de los numeros ingresados `)
    //  } else {
    //     document.write(`el numero ${numero2} es el mayor de los numeros ingresados`)
    //  }

    //           otra forma de resolverlo
    //(numero1 > numero2) ? document.write(`el numero ${numero1} es el mayor de los numeros ingresados `) : document.write(`el numero ${numero2} es el mayor de los numeros ingresados`)






    // Ejercicio 7:
    //Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.

    // let numero1 = parseInt(prompt("Ingrese un numero")); 
    // let numero2 = parseInt(prompt("Ingrese otro numero"));
    // let numero3 = parseInt(prompt("Ingrese otro numero"));

    // if (numero1 > numero2) {
    //     if (numero1 > numero3) {
    //         document.write(`el numero ${numero1} es el mayor de los numeros ingresados `);
    //      } else {
    //         document.write(`el numero ${numero3} es el mayor de los numeros ingresados `);
    //      }
    //  } else {
    //     if (numero2 > numero3) {
    //         document.write(`el numero ${numero2} es el mayor de los numeros ingresados `);
    //      } else {
    //         document.write(`el numero ${numero3} es el mayor de los numeros ingresados `);
    //      }
    //  }







    // Ejercicio 8:
    // Escribe un programa que pida un número y diga si es divisible por 2

    
    
    // let numero1 = parseInt(prompt("Ingrese un numero")); 

    // if (numero1 % 2 == 0) {
    //     document.write(`el numero ${numero1} es divisible en 2 `);
    // } else {
    //     document.write(`el numero ${numero1} no es divisible en 2 `);
    // }





    // Ejercicio 9:
    //Escribe un programa que pida una frase y escriba las vocales que aparecen

    // let frase = prompt("Ingrese una frase").toLowerCase();
    // let largo = frase.length;
    // let vocales = "";
    // let caracter;
    // let i = 0;

    // while (i < largo) {
        
    //     caracter = frase.substring(i, i+1);

    //      if (caracter == "a" || caracter == "e" || caracter == "i" || caracter == "o" || caracter == "u") {
    //          vocales = vocales + caracter; 
    //      }
        
    //     i = i+1;
        
    // }
    
    // document.write(vocales);






    // Ejercicio 10:
    // Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro)

    // let numero1 = parseInt(prompt("Ingrese un numero"));
    
    // if (numero1 % 2 == 0) {
    //     document.write(`el numero ${numero1} es divisible en 2 `);
    // } else if (numero1 % 3 == 0){
    //     document.write(`el numero ${numero1} es divisible en 3 `);
    // } else if (numero1 % 5 == 0){
    //     document.write(`el numero ${numero1} es divisible en 5 `);
    // } else if (numero1 % 7 == 0){
    //     document.write(`el numero ${numero1} es divisible en 7 `);
    // } else {
    //     document.write(`el numero ${numero1} es no se puede dividir en 2, ni en 3, 5 o 7 `);
    // }






    // Ejercicio 11:
    //Añadir al ejercicio anterior que nos diga por cuál de los cuatro es divisible (hay que decir todos por los que es divisible)
    
    // let numero1 = parseInt(prompt("Ingrese un numero"));

    // if (numero1 % 2 == 0) {
    //     document.write(`el numero ${numero1} es divisible en 2 `);
    // }

    // if (numero1 % 3 == 0){
    //     document.write(`el numero ${numero1} es divisible en 3 `);
    // }

    // if (numero1 % 5 == 0){
    //     document.write(`el numero ${numero1} es divisible en 5 `);
    // }

    // if (numero1 % 7 == 0){
    //     document.write(`el numero ${numero1} es divisible en 7 `);
    // }

    // if (numero1 % 2 != 0 & numero1 % 3 != 0 & numero1 % 5 != 0 & numero1 % 7 != 0) {
    //     document.write(`el numero ${numero1} es no se puede dividir en 2, ni en 3, 5 o 7 `);
    // }