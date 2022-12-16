//Dado el siguiente Array, vamos a crear una función que utilice un algoritmo de ordenado Burbuja
//Con este algoritmo lo que pretendemos es ordenar nuestro Array de menor a mayor empezando a comparar desde la última posición de nuestro arreglo

//Este es nuestro Array

const array = [5,2,4,10,1,3,9,8,7,6];

//Ahora vamos a crear una función que va a recibir como parámetro un Array

function ordenar(array){

    let aux; //vamos a crear una variable que nos sirva para almacenar valores

    array.forEach(el => { //Este forEach va a recorrer el Array posición a posición, empezando desde el primer elemento

        for(let i=array.length; i>=0;i--){ //Este segundo For es el que va a ordenar los elementos
            //Lo empezamos de atrás hacia delante para que en la posición uno se nos quede el menor y así sucesivamente

            if (array[i]<array[i-1]){ //Dentro del segundo for preguntamos si el valor que se está recorriendo es menor que el que hay una posición antes que él
                //Si es así, entonces entra dentro

                aux = array[i]; //Guardamos el valor actual en nuestra variable auxiliar
                array[i]=array[i-1]; //Ahora cambiamos la posición del elemento. Empujamos el valor en la posición anterior hacia la posición del elemento actual. 
                array[i-1]=aux; //La posición anterior ahora vale el valor almecenado en nuestra variable auxiliar 
            }
        }
    })
}

ordenar(array); //llamamos a la función y le pasamos nuestro array

console.log(array); //imprimimos nuestro array ya ordenado en consola