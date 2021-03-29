let frases= ["línea 1 de la cadena de caracteres","línea 2 de la cadena de caracteres","línea 3 de la cadena de caracteres","línea 4 de la cadena de caracteres","línea 5 de la cadena de caracteres","línea 6 de la cadena de caracteres","línea 7 de la cadena de caracteres","línea 8 de la cadena de caracteres","línea 9 de la cadena de caracteres","línea 10 de la cadena de caracteres"];


let miBoton = document.getElementById("button");
miBoton.addEventListener("click", function() {
    let random = generate(); //se declara una variable y se le asigna el resultaldo de generate
    cargarFrase(frases[random]); //llamamos a la funcion cargar frase y le pasamos como parametro una frase random 
                                 // que obtenemos con el numero random y el array. 
});

const cargarFrase = (frase) => { // la funcion cargar frase, recibe una sola frase como parametro
    document.getElementById("container").innerHTML = frase; // usamos la frase recibida y la metemos dentro de container
    // saque el += porque no hay que concatenar porque solo pide una frase a la vez.
};

const generate = () => { 
    let num =  Math.floor(Math.random()*10);
    return num; //  return ... todas las funciones pueden retornar un valor o una expresion pero solo una. Una funcion puede retornar
                // cualquier tipo de variable, array/booleano/numerico/string o un objeto javascript.
                // las funciones que no devuelven nada, se las llama VOID(vacio).
};


// => fat arrow.
