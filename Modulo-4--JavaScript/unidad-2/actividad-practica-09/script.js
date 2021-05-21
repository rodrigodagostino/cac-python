// Tema: Funciones

// 1. Realizar una función, a la que se le pase como parámetro un número N,
// y muestre por consola N veces, el siguiente mensaje: “Bienvenidos al
// curso Full Stack”.
const greet = number => {
	if ( isNaN( number ) ) {
		console.log( 'El valor ingresado no es un número.' )
		return
	}
	for ( let i = 0; i < number; i++ ) {
		console.log( '¡Bienvenidos al curso de fullstack!' )
	}
}

// 2. Diseñar una función que tenga como parámetros dos números, y que
// calcule el mayor.
const calcGreater = ( num1, num2 ) => {
	if ( num1 > num2 ) {
		return num1
	} 
	return num2
}

// 3. Crear una función que se llame promedio3, que reciba como
// parámetro tres valores y devuelva el promedio de los mismos.
// Esta solución puede recibir cualquier cantidad de parámetros para calcular su promedio.
const calcAverage = ( ...numbers ) => {
	const addition = numbers.reduce( ( accu, curr ) => accu + curr )
	const average = addition / numbers.length
	return average
}

// 4. Crear una función que lea notas hasta que ingrese -1 y devuelve el
// promedio de las notas leídas (aunque no se suele leer valores en una
// función).

// 5. Una función que se llame siguiente, que reciba como
// parámetro un valor entero, y devuelva el siguiente del número
// ingresado como parámetro.
const calcNext = num => ++num

// 6. Una función que se llame doble, que reciba como parámetro un valor, y
// devuelva el doble del número ingresado como parámetro.
const calcDouble = num => num * 2

// 7. Una función que se llame cuadrado, que reciba como parámetro un
// valor, y devuelva el valor del numero ingresado como parámetro
// elevado al cuadrado.
const calcSquared = num => num * num

// 8. Una función que se denomine imprimirElDobleDelSiguiente que dado
// un número por parámetro, imprima cual es el valor siguiente al el doble.
// Usando las funciones definidas en los puntos 5) , 6) : siguiente, el
// doble.
const calcDoubleNext = num => calcNext( calcDouble( num ) )

// 9. Una función que se denomine
// imprimirElDobleDelSiguienteAlCuadrado que dado un número por
// parámetro, imprima cual es el valor siguiente al el doble. Usando las
// funciones definidas en los puntos 5) , 6) y 7) : siguiente, el doble y el
// cuadrado
const calcNextDoubleAndSquared = num => {
	return {
		next: calcNext( num ),
		double: calcDouble( num ),
		squared: calcSquared( num ),
	}
}

// 10. Una función que dado la longitud de un lado de un cuadrado devuelva
// el perímetro.
const calcSquarePerimeter = side => side * 4

// 11. Una función que dado la longitud de un lado de un cuadrado devuelva
// el área.
const calcSquareArea = side => side * side

// 12. Una función que dado el radio de un círculo devuelva la circunferencia
// (perímetro del círculo).
const calcCircleCircumference = radius => Math.PI * radius * 2

// 13. Una función que dado el radio de un círculo devuelva el área del
// círculo.
const calcCircleArea = radius => Math.PI * radius * radius

// 14.Una función que dado un número de mes y me devuelva la cantidad de
// días de ese mes (suponiendo que no es un año bisiesto).
const getDaysInMonth = month => {
	const currentYear = new Date().getFullYear()
	return new Date( currentYear, month, 0 ).getDate()
}

// 15. Una función que reciba como parámetro un año y diga si ese año es
// bisiesto.
const isLeapYear = year => new Date( year, 2, 0 ).getDate() === 29

// 16. Una función que reciba el día, mes y año y me devuelva la cantidad de
// días de ese mes.
const getDaysInFullDate = ( year, month ) => new Date( year, month, 0 ).getDate()

// 17. Una función que reciba día, mes y año y devuelva el día anterior
const getPreviousDayOfMonth = ( year, month, date ) => new Date( year, month, date - 1 ).getDate()

// 18. Una función que se llame ultimoDiaDelMes que reciba día, mes y año y
// devuelva el último día del mes.
const getLastDayOfMonth = ( year, month ) => new Date( year, month, 0 ).getDate()

// Tema: String y Array

// 19. Ejercicio 1: cree un array con todas las edades de los estudiantes de su
// clase. Itere el array utilizando un bucle while y luego imprima todas las
// edades en la consola.
const studentsAges = [ 26, 32, 45, 42, 38, 21, 16, 68, 39, 28 ]
let e19_i = 0
while ( e19_i < studentsAges.length ) {
	console.log( studentsAges[ e19_i ] )
	e19_i++
}

// 20. Ejercicio 2: Al ejercicio 1 agregue un condicional dentro del ciclo while
// para imprimir solo números pares. Cambie el ciclo para usar un ciclo
// "for" en lugar de un ciclo "while".
// Para los siguientes ejercicios, no puede ordenar su array. ¡Asegúrese
// de que su solución funcione para cualquier array que se pase!
for ( const age of studentsAges ) {
	if ( age % 2 == 0 ) {
		console.log( age )
	}
}

// 21. Ejercicio 3: escriba una función que reciba un array como parámetro e
// imprima el número más bajo de la array en la consola.
const findSmallestNumber = numsArray => console.log( Math.min( ...numsArray ) )

// 22. Ejercicio 4: escriba una función que reciba un array como parámetro e
// imprima el número más grande de la array en la consola.
const findGreatestNumber = numsArray => console.log( Math.max( ...numsArray ) )

// 23. Ejercicio 5: Escriba una función que reciba dos parámetros, un array y
// un índice. La función imprimirá el valor del elemento en la posición
// dada (basado en uno) en la consola. Por ejemplo, dada la siguiente
// array e índice, la función imprimirá '6'.
// var array =
// [3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100];
// var index = 1;
const getValueThroughIndex = ( numsArray, index ) => numsArray[ index ]

// 24. Ejercicio 6: Escriba una función que reciba una array y solo imprima los
// valores que se repiten. Por ejemplo, dada la siguiente array e índice, la
// función imprimirá '6,23,33,100'.
// var array =
// [3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100];
const getRepeated = numsArray => {
	const duplicates = []
	const sortedNumbers = numsArray.sort()
	for ( let i = 1; i < sortedNumbers.length; i++ ) {
		if ( sortedNumbers[ i ] === sortedNumbers[ i - 1 ] ) {
			duplicates.push( sortedNumbers[ i ] )
		}
	}
	return duplicates
}

// 25. Ejercicio 7: escriba una función de JavaScript simple para unir todos los
// elementos de la siguiente array en una cadena.
// myColor = ["Red", "Green", "White", "Black"];
// Debería ver lo siguiente en su consola: "Rojo", "Verde", "Blanco",
// "Negro"
const joinArray = array => `"${ array.join( '", "' ) }"`

// 26. Ejercicio 8: escriba una función de JavaScript que invierta un número.
// Por ejemplo, si x = 32443, la salida debería ser 34423.
const reverseString = num => num.toString().split( '' ).reverse().join( '' )

// 27. Ejercicio 9: escriba una función de JavaScript que devuelva una cadena
// en orden alfabético. Por ejemplo, si x = 'webmaster', la salida debería
// ser 'abeemrstw'. La puntuación y los números no se pasan en la
// cadena.
const sortString = str => str.split( '' ).sort().join( '' )

// 28. Ejercicio 10: escriba una función de JavaScript que convierta la primera
// letra de cada palabra a mayúsculas. Por ejemplo, si x = "prince of
// persia", la salida debería ser "Prince Of Persia".
const capitalize = str => {
	const splitString = str.split( ' ' )
	splitString.forEach( ( word, i ) => {
		splitString[ i ] = word.charAt( 0 ).toUpperCase() + word.slice( 1 )
	} )
	const joinedString = splitString.join( ' ' )
	return joinedString
}

// 29. Ejercicio 11: escriba una función de JavaScript que busque la palabra
// más larga de una frase. Por ejemplo, si x = "Tutorial de desarrollo web",
// el resultado debería ser "Desarrollo".
const getLongestWord = str => {
	const splitString = str.split( ' ' )
	const longestString = splitString.reduce( ( a, b ) => a.length > b.length ? a : b )
	return longestString
}
