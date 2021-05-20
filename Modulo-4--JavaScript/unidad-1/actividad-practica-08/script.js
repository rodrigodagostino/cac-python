// 1. Escribe un programa de una sola línea que haga que aparezca en la pantalla un alert que diga “Hello World”.
alert( '¡Hola, mundo!' )

// 2. Escribe un programa de una sola línea que escriba en la pantalla un texto que diga “Hello World” (document.write).
document.write( '<h1>¡Hola, mundo!</h1>' )

// 3. Escribe un programa de una sola línea que escriba en la pantalla el resultado de sumar 3 + 5.
document.write( `<p>El resultado de la suma entre 3 y 5 es ${ 3 + 5 }</p>` )

// 4. Escribe un programa de dos líneas que pida el nombre del usuario con un prompt y escriba un texto que diga “Hola nombreUsuario”.
const e4_prompt = prompt( '¿Cuál es su nombre? :)' )
if ( e4_prompt !== null && e4_prompt.trim() !== '' ) {
	document.write( `¡Bienvenido, ${ e4_prompt }!` )
}

// 5. Escribe un programa de tres líneas que pida un número, pida otro número y escriba el resultado de sumar estos dos números.
const e5_promptOne = prompt( '¡Vamos a sumar dos números!\r\nDanos el primer número:' )
const e5_promptTwo = prompt( 'Ahora danos el segundo:' )
if ( e5_promptOne !== null && e5_promptOne.trim() !== '' && e5_promptTwo !== null && e5_promptTwo.trim() !== '' ) {
	document.write(
		`<p>El resultado de la suma entre ${ e5_promptOne } y ${ e5_promptTwo } es ${
			parseFloat( e5_promptOne ) + parseFloat( e5_promptTwo )
		}</p>`
	)
}

// 6. Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.
const e6_promptOne = prompt( '¡Vamos a comparar dos números para saber cual es el mayor!\r\nDanos el primer número:' )
const e6_promptTwo = prompt( 'Y ahora, el segundo número:' )
if ( e6_promptOne !== null && e6_promptOne.trim() !== '' && e6_promptTwo !== null && e6_promptTwo.trim() !== '' ) {
	if ( e6_promptOne !== e6_promptTwo ) {
		document.write(
			`<p>Entre ${ e6_promptOne } y ${ e6_promptTwo }, ${
				e6_promptOne > e6_promptTwo ? e6_promptOne : e6_promptTwo
			} es el mayor.</p>`
		)
	} else {
		document.write(
			`<p>${ e6_promptOne } y ${ e6_promptTwo } son iguales, ninguno de los valores es mayor que el otro.</p>`
		)
	}
}

// 7. Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.
const e7_promptOne = prompt( '¡Vamos a comparar tres números!\r\nDanos el primer número:' )
const e7_promptTwo = prompt( 'Ahora danos el segundo número:' )
const e7_promptThree = prompt( 'Y ahora, el tercer número:' )
if (
	e7_promptOne !== null &&
	e7_promptOne.trim() !== '' &&
	e7_promptTwo !== null &&
	e7_promptTwo.trim() !== '' &&
	e7_promptThree !== null &&
	e7_promptThree.trim() !== ''
) {
	if (
		e7_promptOne !== e7_promptTwo &&
		e7_promptTwo !== e7_promptThree &&
		e7_promptThree !== e7_promptOne
	) {
		document.write(
			`<p>Entre ${ e7_promptOne }, ${ e7_promptTwo } y ${ e7_promptThree }, ${ Math.max(
				e7_promptOne,
				e7_promptTwo,
				e7_promptThree
			) } es el mayor.</p>`
		)
	} else {
		document.write(
			`<p>${ e7_promptOne }, ${ e7_promptTwo } y ${ e7_promptThree } son iguales, ninguno de los valores es mayor que el otro.</p>`
		)
	}
}

// 8. Escribe un programa que pida un número y diga si es divisible por 2.
const e8_prompt = prompt( 'Danos un número para evaluar su divisibilidad por 2:' )
if ( e8_prompt !== null && e8_prompt.trim() !== '' ) {
	document.write( `<p>${ e8_prompt } ${ e8_prompt % 2 === 0 ? 'es' : 'no es' } enteramente divisible por 2.</p>` )
}

// 9. Escribe un programa que pida una frase y escriba cuantas veces aparece la letra “A”.
const e9_prompt = prompt( 'Danos una frase para averiguar cuántas veces aparece la letra “A” en ella:' )
if ( e9_prompt !== null && e9_prompt.trim() !== '' ) {
	const e9_promptFiltered = e9_prompt.toLowerCase()
	let e9Counter = 0
	for ( let i = 0; i < e9_promptFiltered.length; i++ ) {
		if ( e9_promptFiltered[ i ] === 'a' ) {
			e9Counter++
		}
	}
	document.write( `
		<p>La letra “A” aparece <strong>${ e9Counter } veces</strong> en la frase <em>“${ e9_prompt }”</em>.</p>
	` )
}

// 10. Escribe un programa que pida una frase y escriba las vocales que aparecen.
const e10_prompt = prompt( 'Danos una frase para averiguar qué vocales contiene:' )
if ( e10_prompt !== null && e10_prompt.trim() !== '' ) {
	const e10_promptFiltered = e10_prompt.toLowerCase()
	const e10_storedValues = []
	const e10_iterable = [ 'a', 'e', 'i', 'o', 'u' ]
	for ( let i = 0; i < e10_promptFiltered.length; i++ ) {
		for ( let j = 0; j < e10_iterable.length; j++ ) {
			if ( e10_promptFiltered[ i ] === e10_iterable[ j ] && e10_storedValues.indexOf( e10_iterable[ j ] ) === -1 ) {
				e10_storedValues.push( e10_iterable[ j ] )
			}
		}
	}
	document.write( `
		<p>Las vocales <strong>${ e10_storedValues
		.sort()
		.join( '</strong>, <strong>' ) }</strong> aparecen en la frase <em>“${ e10_prompt }”</em>.</p>
	` )
}

// 11. Escribe un programa que pida una frase y escriba cuántas de las letras que tiene son vocales.
const e11_prompt = prompt( 'Danos una frase para averiguar cuántas vocales contiene:' )
if ( e11_prompt !== null && e11_prompt.trim() !== '' ) {
	const e11_promptFiltered = e11_prompt.toLowerCase()
	let e11Counter = 0
	const vowels = [ 'a', 'e', 'i', 'o', 'u' ]
	for ( let i = 0; i < e11_promptFiltered.length; i++ ) {
		for ( let j = 0; j < vowels.length; j++ ) {
			if ( e11_promptFiltered[ i ] === vowels[ j ] ) {
				e11Counter++
			}
		}
	}
	document.write( `
		<p>De un total de ${ e11_promptFiltered.length } caracteres, <strong>${ e11Counter }</strong> de ellos son vocales en la frase <em>“${ e11_prompt }”</em>.</p>
	` )
}

// 12. Escribe un programa que pida una frase y escriba cuántas veces aparecen cada una de las vocales.
const e12A_prompt = prompt( 'Danos una frase para averiguar qué y cuántas vocales contiene:' )
if ( e12A_prompt !== null && e12A_prompt.trim() !== '' ) {
	const e12A_promptFiltered = e12A_prompt.toLowerCase()
	const e12A_storedValues = { a: 0, e: 0, i: 0, o: 0, u: 0 }
	const e12A_storedValuesKeys = Object.keys( e12A_storedValues )
	for ( let i = 0; i < e12A_promptFiltered.length; i++ ) {
		for ( let j = 0; j < e12A_storedValuesKeys.length; j++ ) {
			if ( e12A_promptFiltered[ i ] === e12A_storedValuesKeys[ j ] ) {
				e12A_storedValues[ e12A_storedValuesKeys[ j ] ] = +e12A_storedValues[ e12A_storedValuesKeys[ j ] ] + 1
			}
		}
	}
	document.write( `
		<p>La frase <em>“${ e12A_prompt }”</em> está compuesta por las siguientes vocales:
			${ e12A_storedValues.a > 0 ? `A: ${ e12A_storedValues.a } - ` : '' }
			${ e12A_storedValues.e > 0 ? `E: ${ e12A_storedValues.e } - ` : '' }
			${ e12A_storedValues.i > 0 ? `I: ${ e12A_storedValues.i } - ` : '' }
			${ e12A_storedValues.o > 0 ? `O: ${ e12A_storedValues.o } - ` : '' }
			${ e12A_storedValues.u > 0 ? `U: ${ e12A_storedValues.u }.` : '' }
		</p>
	` )
}

const e12B_prompt = prompt( 'Danos una frase para averiguar qué y cuántas vocales contiene:' )
if ( e12B_prompt !== null && e12B_prompt.trim() !== '' ) {
	const e12B_promptFiltered = e12B_prompt.toLowerCase()
	const e12B_storedValues = { a: 0, e: 0, i: 0, o: 0, u: 0 }

	for ( const character of e12B_promptFiltered ) {
		for ( const vowel in e12B_storedValues ) {
			if ( character === vowel ) {
				e12B_storedValues[ vowel ]++
			}
		}
	}

	document.write( `
		<p>La frase <em>“${ e12B_prompt }”</em> está compuesta por las siguientes vocales:
			${ e12B_storedValues.a > 0 ? `A: ${ e12B_storedValues.a } - ` : '' }
			${ e12B_storedValues.e > 0 ? `E: ${ e12B_storedValues.e } - ` : '' }
			${ e12B_storedValues.i > 0 ? `I: ${ e12B_storedValues.i } - ` : '' }
			${ e12B_storedValues.o > 0 ? `O: ${ e12B_storedValues.o } - ` : '' }
			${ e12B_storedValues.u > 0 ? `U: ${ e12B_storedValues.u }.` : '' }
		</p>
	` )
}

// 13. Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 ó 7
// (sólo hay que comprobar si lo es por uno de los cuatro).
const e13_prompt = prompt( 'Danos un número para comprobar si es divisible por 2, 3, 5 y/o 7:' )
if ( e13_prompt !== null && e13_prompt.trim() !== '' ) {
	if ( e13_prompt % 2 === 0 || e13_prompt % 3 === 0 || e13_prompt % 5 === 0 || e13_prompt % 7 === 0 ) {
		document.write( `<p>${ e13_prompt } es divisible por 2, 3, 5 ó 7.</p>` )
	} else {
		document.write( `<p>${ e13_prompt } no es divisible por 2, 3, 5 ó 7.</p>` )
	}
}

// 14. Añadir al ejercicio anterior que nos diga por cual de los cuatro es divisible
// (hay que decir todos por los que es divisible).
const e14_prompt = prompt( 'Danos un número para comprobar si es divisible por 2, 3, 5 y/o 7:' )
if ( e14_prompt !== null && e14_prompt.trim() !== '' ) {
	if ( e14_prompt % 2 === 0 || e14_prompt % 3 === 0 || e14_prompt % 5 === 0 || e14_prompt % 7 === 0 ) {
		const e14_storedValues = []
		e14_prompt % 2 === 0 ? e14_storedValues.push( 2 ) : null
		e14_prompt % 3 === 0 ? e14_storedValues.push( 3 ) : null
		e14_prompt % 5 === 0 ? e14_storedValues.push( 5 ) : null
		e14_prompt % 7 === 0 ? e14_storedValues.push( 7 ) : null
		// Assign an extra character to the last item in the array if the length is greater than 1.
		if ( e14_storedValues.length > 1 ) {
			e14_storedValues[ e14_storedValues.length - 1 ] = `y ${ e14_storedValues[ e14_storedValues.length - 1 ] }`
		}
		document.write( `<p>${ e14_prompt } es divisible por: ${ e14_storedValues.join( ', ' ) }.</p>` )
	} else {
		document.write( `<p>${ e14_prompt } no es divisible por 2, 3, 5 ó 7.</p>` )
	}
}

// 15. Escribir un programa que escriba en pantalla los divisores de un número dado.
const e15_prompt = prompt( 'Danos un número para comprobar sus divisores:' )
if ( e15_prompt !== null && e15_prompt.trim() !== '' ) {
	const e15_storedValues = []
	for ( let i = e15_prompt; i > 0; i-- ) {
		if ( e15_prompt % i === 0 ) {
			e15_storedValues.push( i )
		}
	}
	// Assign an extra character to the last item in the array if the length is greater than 1.
	if ( e15_storedValues.length > 1 ) {
		e15_storedValues[ e15_storedValues.length - 1 ] = `y ${ e15_storedValues[ e15_storedValues.length - 1 ] }`
	}
	document.write( `<p>Los divisores de ${ e15_prompt } son: ${ e15_storedValues.join( ', ' ) }</p>.` )
}

// 16. Escribir un programa que escriba en pantalla los divisores comunes de dos números dados.
const e16_promptOne = prompt( '¡Vamos a comprobar los divisores comunes de dos números!\r\nDanos el primer número:' )
const e16_promptTwo = prompt( 'Y ahora, el segundo número:' )
if ( e16_promptTwo !== null && e16_promptTwo !== null ) {
	const e16_storedValues = []
	const e16_counter = e16_promptOne > e16_promptTwo ? e16_promptOne : e16_promptTwo
	for ( let i = e16_counter; i > 0; i-- ) {
		if ( e16_promptOne % i === 0 && e16_promptTwo % i === 0 ) {
			e16_storedValues.push( i )
		}
	}
	// Assign an extra character to the last item in the array if the length is greater than 1.
	if ( e16_storedValues.length > 1 ) {
		e16_storedValues[ e16_storedValues.length - 1 ] = `y ${ e16_storedValues[ e16_storedValues.length - 1 ] }`
	}
	document.write( `<p>Los divisores comunes de ${ e16_promptOne } y ${ e16_promptTwo } son: ${ e16_storedValues.join( ', ' ) }</p>.` )
}

// 17. Escribir un programa que nos diga si un número dado es primo
// (no es divisible por ninguno otro número que no sea él mismo o la unidad).
const e17_prompt = parseInt( prompt( 'Danos un número positivo para comprobar si es primo:' ) )
if ( e17_prompt !== null ) {
	let e17_isPrime = true
	if ( e17_prompt === 1 ) {
		document.write( '1 no es un número primo.' )
	} else if ( e17_prompt > 1 ) {
		for ( let i = 2; i < e17_prompt; i++ ) {
			if ( e17_prompt % i === 0 ) {
				e17_isPrime = false
				break
			}
		}
		if ( e17_isPrime ) {
			document.write( `<p><strong>${ e17_prompt }</strong> es un número primo.</p>` )
		} else {
			document.write( `<p><strong>${ e17_prompt }</strong> no es un número primo.</p>` )
		}
	}
}

// 18. Pide la edad y si es mayor de 18 años indica que ya puede conducir.
const e18_prompt = prompt( '¿Qué edad tenés?' )
if ( e18_prompt !== null ) {
	if ( e18_prompt >= 18 ) {
		document.write( `<p>Tu edad es <strong>${ e18_prompt } años</strong>, ya puedes conducir.</p>` )
	} else {
		document.write( `<p>Tu edad es <strong>${ e18_prompt } años</strong>, aún no puedes conducir.</p>` )
	}
}

// 19. Pide una nota (número). Muestra la calificación según la nota:
// - 0-3: Muy deficiente
// - 3-5: Insuficiente
// - 5-6: Suficiente
// - 6-7: Bien
// - 7-9: Notable
// - 9-10: Sobresaliente
const e19_prompt = prompt( '¿Que nota obtuviste?' )
if ( e19_prompt !== null && e19_prompt.trim() !== '' ) {
	if ( e19_prompt >= 0 && e19_prompt <= 10 ) {
		if ( e19_prompt <= 3 ) {
			document.write(
				`<p>Obtuviste una nota de ${ e19_prompt }, a la cual le corresponde una calificación de “Muy deficiente”.</p>`
			)
		} else if ( e19_prompt <= 5 ) {
			document.write(
				`<p>Obtuviste una nota de ${ e19_prompt }, a la cual le corresponde una calificación de “Insuficiente”.</p>`
			)
		} else if ( e19_prompt <= 6 ) {
			document.write(
				`<p>Obtuviste una nota de ${ e19_prompt }, a la cual le corresponde una calificación de “Suficiente”.</p>`
			)
		} else if ( e19_prompt <= 7 ) {
			document.write( `Obtuviste una nota de ${ e19_prompt }, a la cual le corresponde una calificación de “Bien”.</p>` )
		} else if ( e19_prompt <= 9 ) {
			document.write(
				`<p>Obtuviste una nota de ${ e19_prompt }, a la cual le corresponde una calificación de “Notable”.</p>`
			)
		} else {
			document.write(
				`<p>Obtuviste una nota de ${ e19_prompt }, a la cual le corresponde una calificación de “Sobresaliente”.</p>`
			)
		}
	} else {
		document.write( `Obtuviste una nota de ${ e19_prompt }, la cual no es válida.` )
	}
}

// 20. Realiza un script que pida cadenas de texto hasta que se pulse “cancelar”.
// Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión.
const e20_storedValues = []
const e20_function = () => {
	const e20_prompt = prompt(
		'Danos una frase y presioná “Aceptar” para formar una cadena.\r\nSi presionás “Cancelar”, se finalizará el proceso.'
	)
	if ( e20_prompt === null ) {
		document.write( `<p>Estas son las cadenas de texto acumuladas: ${ e20_storedValues.join( '-' ) }</p>` )
		return
	}
	e20_storedValues.push( e20_prompt )
	e20_function()
}
e20_function()

// 21. Realiza un script que pida números hasta que se pulse “cancelar”.
// Si no es un número deberá indicarse con un «alert» y seguir pidiendo.
// Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.
const e21_storedValues = []
const e21_function = () => {
	const e21_prompt = prompt(
		'Danos un número y presioná “Aceptar” para formar un cadena.\r\nSi presionás “Cancelar”, se finalizará el proceso.'
	)
	if ( e21_prompt === null ) {
		document.write( `<p>Estos son los números acumulados: ${ e21_storedValues.join( ', ' ) }.</p>` )
		return
	}

	if ( isNaN( +e21_prompt ) ) {
		alert( 'Recordá que sólo podés ingresar números.' )
	} else if ( e21_prompt.trim() !== '' ) {
		e21_storedValues.push( e21_prompt )
	}

	e21_function()
}
e21_function()

// 22. Realizar una página con un script que calcule el valor de la letra de un número de DNI.
// El algoritmo para calcular la letra del dni es el siguiente:
// - El número debe ser entre 0 y 99999999
// - Debemos calcular el resto de la división entera entre el número y el número 23.
// - Según el resultado, de 0 a 22, le corresponderá una letra de las siguientes:
//   (T, R, W, A, G, M, Y, F, P, D, X, B, N, J, Z, S, Q, V, H, L, C, K, E)
// - Si lo introducido no es un número deberá indicarse con un alert y volver a preguntar.
// - Deberá de repetirse el proceso hasta que el usuario pulse «cancelar».
const e22_storedValues = []
const e22LettersArray = [ 'T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E' ]
const e22_function = () => {
	const e22_prompt = prompt(
		'Danos un número de DNI (sin puntos) y presioná “Aceptar” para codificarlo.\r\nSi presionás “Cancelar”, se finalizará el proceso'
	)
	if ( e22_prompt === null ) {
		if ( ! e22_storedValues.length ) {
			return
		}
		document.write( `<p>Este es el resultado de la codificación de los números ingresados: ${ e22_storedValues.join( '-' ) }.</p>` )
		return
	}
	if ( isNaN( +e22_prompt ) ) {
		alert( 'Recordá que sólo podés ingresar números.' )
	} else if ( e22_prompt < 0 || e22_prompt > 99999999 ) {
		alert( 'Sólo podés ingresar un valor entre 0 y 99.999.999.' )
	} else if ( e22_prompt.trim() !== '' ) {
		const remainder = Math.round( e22_prompt % 23 )
		e22_storedValues.push( e22LettersArray[ remainder ] )
	}

	e22_function()
}

e22_function()

// 23. Realiza un script que escriba una pirámide del 1 al 30 de la siguiente forma:
// 1
// 22
// 333
// 4444
// 55555
// 666666
// ...
// document.write( '<p>' )
const e23_printRow = ( number, counter = number ) => {
	// Base case.
	if ( counter <= 0 ) {
		return
	}
	document.write( `${ number } ` )
	// Recursive case.
	e23_printRow( number, counter - 1 )
}

const e23_printPyramid = number => {
	// Base case.
	if ( number <= 0 ) {
		document.write( 'El número elegido para crear la pirámide debe ser superior a cero.' )
		return
	}
	document.write( '<span>' )
	e23_printRow( number )
	document.write( '</span><br>' )
	// Recursive case.
	if ( number < 30 ) {
		e23_printPyramid( number + 1 )
	}
}

e23_printPyramid( 1 )

document.write( '</p>' )

// 24. Haz un script que escriba una pirámide inversa de los números del 1 al número
// que indique el usuario de la siguiente forma: (suponiendo que indica 6).
// 666666
// 55555
// 4444
// 333
// 22
// 1
const e24_prompt = prompt( 'Danos un número para generar una pirámide invertida a través de él:' )
if ( e24_prompt !== null ) {
	document.write( '<p>' )

	const e24_printRow = ( number, counter = number ) => {
		// Base case.
		if ( counter <= 0 ) {
			return
		}
		document.write( `${ number } ` )
		// Recursive case.
		e24_printRow( number, counter - 1 )
	}

	const e24_printPyramid = number => {
		if ( e24_prompt <= 0 ) {
			document.write( 'El número elegido para crear la pirámide debe ser superior a cero.' )
		}
		// Base case.
		if ( number <= 0 ) {
			return
		}
		document.write( '<span>' )
		e24_printRow( number )
		document.write( '</span><br>' )
		// Recursive case.
		e24_printPyramid( number - 1 )
	}

	e24_printPyramid( e24_prompt )

	document.write( '</p>' )
}

// 25. Un script que escriba los números del 1 al 500, que indique cuáles son múltiplos
// de 4 y de 9 y que cada 5 líneas muestre una línea horizontal. Por ejemplo:
// 1
// 2
// 3
// 4 (Múltiplo de 4)
// 5
// ————————————————————
// 6
// 7
// 8 (Múltiplo de 4)
// 9 (Múltiplo de 9)
// 10
const e25_function = () => {
	document.write( '<p>' )
	for ( let i = 1; i <= 500; i++ ) {
		let e25_output = i
		i % 4 === 0 ? e25_output += ' (múltiplo de 4)' : null
		i % 9 === 0 ? e25_output += ' (múltiplo de 9)' : null
		document.write( `<span>${ e25_output }</span><br>` )
		i % 5 === 0 ? document.write( '<span>————————————————————</span><br>' ) : null
	}
	document.write( '</p>' )
}

e25_function()
