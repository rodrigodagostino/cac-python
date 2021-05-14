// 1. Escribe un programa de una sola línea que haga que aparezca en la pantalla un alert que diga “Hello World”.
alert( '¡Hola, mundo!' )

// 2. Escribe un programa de una sola línea que escriba en la pantalla un texto que diga “Hello World” (document.write).
document.write( '<h1>¡Hola, mundo!</h1>' )

// 3. Escribe un programa de una sola línea que escriba en la pantalla el resultado de sumar 3 + 5.
document.write( `<p>El resultado de la suma entre 3 y 5 es ${ 3 + 5 }</p>` )

// 4. Escribe un programa de dos líneas que pida el nombre del usuario con un prompt y escriba un texto que diga “Hola nombreUsuario”.
const fourPrompt = prompt( '¿Cuál es su nombre? :)' )
if ( fourPrompt !== null && fourPrompt.trim() !== '' ) {
	document.write( `¡Bienvenido, ${ fourPrompt }!` )
}

// 5. Escribe un programa de tres líneas que pida un número, pida otro número y escriba el resultado de sumar estos dos números.
const fivePromptOne = prompt( '¡Vamos a sumar dos números!\r\nDanos el primer número:' )
const fivePromptTwo = prompt( 'Ahora danos el segundo:' )
if ( fivePromptOne !== null && fivePromptOne.trim() !== '' && fivePromptTwo !== null && fivePromptTwo.trim() !== '' ) {
	document.write(
		`<p>El resultado de la suma entre ${ fivePromptOne } y ${ fivePromptTwo } es ${
			parseFloat( fivePromptOne ) + parseFloat( fivePromptTwo )
		}</p>`
	)
}

// 6. Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.
const sixPromptOne = prompt( '¡Vamos a comparar dos números para saber cual es el mayor!\r\nDanos el primer número:' )
const sixPromptTwo = prompt( 'Y ahora, el segundo número:' )
if ( sixPromptOne !== null && sixPromptOne.trim() !== '' && sixPromptTwo !== null && sixPromptTwo.trim() !== '' ) {
	if ( sixPromptOne !== sixPromptTwo ) {
		document.write(
			`<p>Entre ${ sixPromptOne } y ${ sixPromptTwo }, ${
				sixPromptOne > sixPromptTwo ? sixPromptOne : sixPromptTwo
			} es el mayor.</p>`
		)
	} else {
		document.write(
			`<p>${ sixPromptOne } y ${ sixPromptTwo } son iguales, ninguno de los valores es mayor que el otro.</p>`
		)
	}
}

// 7. Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.
const sevenPromptOne = prompt( '¡Vamos a comparar tres números!\r\nDanos el primer número:' )
const sevenPromptTwo = prompt( 'Ahora danos el segundo número:' )
const sevenPromptThree = prompt( 'Y ahora, el tercer número:' )
if (
	sevenPromptOne !== null &&
	sevenPromptOne.trim() !== '' &&
	sevenPromptTwo !== null &&
	sevenPromptTwo.trim() !== '' &&
	sevenPromptThree !== null &&
	sevenPromptThree.trim() !== ''
) {
	if (
		sevenPromptOne !== sevenPromptTwo &&
		sevenPromptTwo !== sevenPromptThree &&
		sevenPromptThree !== sevenPromptOne
	) {
		document.write(
			`<p>Entre ${ sevenPromptOne }, ${ sevenPromptTwo } y ${ sevenPromptThree }, ${ Math.max(
				sevenPromptOne,
				sevenPromptTwo,
				sevenPromptThree
			) } es el mayor.</p>`
		)
	} else {
		document.write(
			`<p>${ sevenPromptOne }, ${ sevenPromptTwo } y ${ sevenPromptThree } son iguales, ninguno de los valores es mayor que el otro.</p>`
		)
	}
}

// 8. Escribe un programa que pida un número y diga si es divisible por 2.
const eightPrompt = prompt( 'Danos un número para evaluar su divisibilidad por 2:' )
if ( eightPrompt !== null && eightPrompt.trim() !== '' ) {
	document.write( `<p>${ eightPrompt } ${ eightPrompt % 2 === 0 ? 'es' : 'no es' } enteramente divisible por 2.</p>` )
}

// 9. Escribe un programa que pida una frase y escriba cuantas veces aparece la letra “A”.
const ninePrompt = prompt( 'Danos una frase para averiguar cuántas veces aparece la letra “A” en ella:' )
if ( ninePrompt !== null && ninePrompt.trim() !== '' ) {
	const ninePromptSplit = ninePrompt.toLowerCase().split( '' )
	let nineCounter = 0
	for ( let i = 0; i < ninePromptSplit.length; i++ ) {
		if ( ninePromptSplit[ i ] === 'a' ) {
			nineCounter++
		}
	}
	document.write( `
		<p>La letra “A” aparece <strong>${ nineCounter } veces</strong> en la frase <em>“${ ninePrompt }”</em>.</p>
	` )
}

// Escribe un programa que pida una frase y escriba las vocales que aparecen.
const tenPrompt = prompt( 'Danos una frase para averiguar qué vocales contiene:' )
if ( tenPrompt !== null && tenPrompt.trim() !== '' ) {
	const tenPromptSplit = tenPrompt.toLowerCase().split( '' )
	const tenStoredValues = []
	const tenIterable = [ 'a', 'e', 'i', 'o', 'u' ]
	for ( let i = 0; i < tenPromptSplit.length; i++ ) {
		for ( let j = 0; j < tenIterable.length; j++ ) {
			if ( tenPromptSplit[ i ] === tenIterable[ j ] && tenStoredValues.indexOf( tenIterable[ j ] ) === -1 ) {
				tenStoredValues.push( tenIterable[ j ] )
			}
		}
	}
	document.write( `
		<p>Las vocales <strong>${ tenStoredValues
		.sort()
		.join( '</strong>, <strong>' ) }</strong> aparecen en la frase <em>“${ tenPrompt }”</em>.</p>
	` )
}

// 11. Escribe un programa que pida una frase y escriba cuántas de las letras que tiene son vocales.
const elevenPrompt = prompt( 'Danos una frase para averiguar cuántas vocales contiene:' )
if ( elevenPrompt !== null && elevenPrompt.trim() !== '' ) {
	const elevenPromptSplit = elevenPrompt.toLowerCase().split( '' )
	let elevenCounter = 0
	const vowels = [ 'a', 'e', 'i', 'o', 'u' ]
	for ( let i = 0; i < elevenPromptSplit.length; i++ ) {
		for ( let j = 0; j < vowels.length; j++ ) {
			if ( elevenPromptSplit[ i ] === vowels[ j ] ) {
				elevenCounter++
			}
		}
	}
	document.write( `
		<p>De un total de ${ elevenPromptSplit.length } caracteres, <strong>${ elevenCounter }</strong> de ellos son vocales en la frase <em>“${ elevenPrompt }”</em>.</p>
	` )
}

// 12. Escribe un programa que pida una frase y escriba cuántas veces aparecen cada una de las vocales.
const twelvePrompt = prompt( 'Danos una frase para averiguar qué y cuántas vocales contiene:' )
if ( twelvePrompt !== null && twelvePrompt.trim() !== '' ) {
	const twelvePromptSplit = twelvePrompt.toLowerCase().split( '' )
	const twelveStoredValues = { a: 0, e: 0, i: 0, o: 0, u: 0 }
	const twelveStoredValuesKeys = Object.keys( twelveStoredValues )
	for ( let i = 0; i < twelvePromptSplit.length; i++ ) {
		for ( let j = 0; j < twelveStoredValuesKeys.length; j++ ) {
			if ( twelvePromptSplit[ i ] === twelveStoredValuesKeys[ j ] ) {
				twelveStoredValues[ twelveStoredValuesKeys[ j ] ] = +twelveStoredValues[ twelveStoredValuesKeys[ j ] ] + 1
			}
		}
	}
	document.write( `
		<p>La frase <em>“${ twelvePrompt }”</em> está compuesta por las siguientes vocales:
			${ twelveStoredValues.a > 0 ? `A: ${ twelveStoredValues.a } - ` : '' }
			${ twelveStoredValues.e > 0 ? `E: ${ twelveStoredValues.e } - ` : '' }
			${ twelveStoredValues.i > 0 ? `I: ${ twelveStoredValues.i } - ` : '' }
			${ twelveStoredValues.o > 0 ? `O: ${ twelveStoredValues.o } - ` : '' }
			${ twelveStoredValues.u > 0 ? `U: ${ twelveStoredValues.u }.` : '' }
		</p>
	` )
}

// 13. Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 ó 7
// (sólo hay que comprobar si lo es por uno de los cuatro).
const thirteenPrompt = prompt( 'Danos un número para comprobar si es divisible por 2, 3, 5 y/o 7:' )
if ( thirteenPrompt !== null && thirteenPrompt.trim() !== '' ) {
	if ( thirteenPrompt % 2 === 0 || thirteenPrompt % 3 === 0 || thirteenPrompt % 5 === 0 || thirteenPrompt % 7 === 0 ) {
		document.write( `<p>${ thirteenPrompt } es divisible por 2, 3, 5 ó 7.</p>` )
	} else {
		document.write( `<p>${ thirteenPrompt } no es divisible por 2, 3, 5 ó 7.</p>` )
	}
}

// 14. Añadir al ejercicio anterior que nos diga por cual de los cuatro es divisible
// (hay que decir todos por los que es divisible).
const fourteenPrompt = prompt( 'Danos un número para comprobar si es divisible por 2, 3, 5 y/o 7:' )
if ( fourteenPrompt !== null && fourteenPrompt.trim() !== '' ) {
	if ( fourteenPrompt % 2 === 0 || fourteenPrompt % 3 === 0 || fourteenPrompt % 5 === 0 || fourteenPrompt % 7 === 0 ) {
		const fourteenStoredValues = []
		fourteenPrompt % 2 === 0 ? fourteenStoredValues.push( 2 ) : null
		fourteenPrompt % 3 === 0 ? fourteenStoredValues.push( 3 ) : null
		fourteenPrompt % 5 === 0 ? fourteenStoredValues.push( 5 ) : null
		fourteenPrompt % 7 === 0 ? fourteenStoredValues.push( 7 ) : null
		// Assign an extra character to the last item in the array if the length is greater than 1.
		if ( fourteenStoredValues.length > 1 ) {
			fourteenStoredValues[ fourteenStoredValues.length - 1 ] = `y ${ fourteenStoredValues[ fourteenStoredValues.length - 1 ] }`
		}
		document.write( `<p>${ fourteenPrompt } es divisible por: ${ fourteenStoredValues.join( ', ' ) }.</p>` )
	} else {
		document.write( `${ fourteenPrompt } no es divisible por 2, 3, 5 ó 7` )
	}
}

// 15. Escribir un programa que escriba en pantalla los divisores de un número dado.
const fifteenPrompt = prompt( 'Danos un número para comprobar sus divisores:' )
if ( fifteenPrompt !== null && fifteenPrompt.trim() !== '' ) {
	const fifteenStoredValues = []
	for ( let i = fifteenPrompt; i > 0; i-- ) {
		if ( fifteenPrompt % i === 0 ) {
			fifteenStoredValues.push( i )
		}
	}
	// Assign an extra character to the last item in the array if the length is greater than 1.
	if ( fifteenStoredValues.length > 1 ) {
		fifteenStoredValues[ fifteenStoredValues.length - 1 ] = `y ${ fifteenStoredValues[ fifteenStoredValues.length - 1 ] }`
	}
	document.write( `Los divisores de ${ fifteenPrompt } son: ${ fifteenStoredValues.join( ', ' ) }.` )
}

// 16. Escribir un programa que escriba en pantalla los divisores comunes de dos números dados.
const sixteenPromptOne = prompt( '¡Vamos a comprobar los divisores comunes de dos números!\r\nDanos el primer número:' )
const sixteenPromptTwo = prompt( 'Y ahora, el segundo número:' )
if ( sixteenPromptTwo !== null && sixteenPromptTwo !== null ) {
	const sixteenStoredValues = []
	const sixteenCounter = sixteenPromptOne > sixteenPromptTwo ? sixteenPromptOne : sixteenPromptTwo
	for ( let i = sixteenCounter; i > 0; i-- ) {
		if ( sixteenPromptOne % i === 0 && sixteenPromptTwo % i === 0 ) {
			sixteenStoredValues.push( i )
		}
	}
	// Assign an extra character to the last item in the array if the length is greater than 1.
	if ( sixteenStoredValues.length > 1 ) {
		sixteenStoredValues[ sixteenStoredValues.length - 1 ] = `y ${ sixteenStoredValues[ sixteenStoredValues.length - 1 ] }`
	}
	document.write( `Los divisores comunes de ${ sixteenPromptOne } y ${ sixteenPromptTwo } son: ${ sixteenStoredValues.join( ', ' ) }.` )
}

// 17. Escribir un programa que nos diga si un número dado es primo
// (no es divisible por ninguno otro número que no sea él mismo o la unidad).
const seventeenPrompt = parseInt( prompt( 'Danos un número positivo para comprobar si es primo:' ) )
if ( seventeenPrompt !== null ) {
	let seventeenIsPrime = true
	if ( seventeenPrompt === 1 ) {
		document.write( '1 no es un número primo.' )
	} else if ( seventeenPrompt > 1 ) {
		for ( let i = 2; i < seventeenPrompt; i++ ) {
			if ( seventeenPrompt % i === 0 ) {
				seventeenIsPrime = false
				break
			}
		}
		if ( seventeenIsPrime ) {
			document.write( `<strong>${ seventeenPrompt }</strong> es un número primo.` )
		} else {
			document.write( `<strong>${ seventeenPrompt }</strong> no es un número primo.` )
		}
	}
}

// 18. Pide la edad y si es mayor de 18 años indica que ya puede conducir.
const eighteenPrompt = prompt( '¿Qué edad tenés?' )
if ( eighteenPrompt !== null ) {
	if ( eighteenPrompt >= 18 ) {
		document.write( `Tu edad es <strong>${ eighteenPrompt } años</strong>, ya puedes conducir.` )
	} else {
		document.write( `Tu edad es <strong>${ eighteenPrompt } años</strong>, aún no puedes conducir.` )
	}
}

// 19. Pide una nota (número). Muestra la calificación según la nota:
// - 0-3: Muy deficiente
// - 3-5: Insuficiente
// - 5-6: Suficiente
// - 6-7: Bien
// - 7-9: Notable
// - 9-10: Sobresaliente
const nineteenPrompt = prompt( '¿Que nota obtuviste?' )
if ( nineteenPrompt !== null && nineteenPrompt.trim() !== '' ) {
	if ( nineteenPrompt >= 0 && nineteenPrompt <= 3 ) {
		document.write(
			`Obtuviste una nota de ${ nineteenPrompt }, a la cual le corresponde una calificación de “Muy deficiente”.`
		)
	} else if ( nineteenPrompt >= 3 && nineteenPrompt <= 5 ) {
		document.write(
			`Obtuviste una nota de ${ nineteenPrompt }, a la cual le corresponde una calificación de “Insuficiente”.`
		)
	} else if ( nineteenPrompt >= 5 && nineteenPrompt <= 6 ) {
		document.write(
			`Obtuviste una nota de ${ nineteenPrompt }, a la cual le corresponde una calificación de “Suficiente”.`
		)
	} else if ( nineteenPrompt >= 6 && nineteenPrompt <= 7 ) {
		document.write( `Obtuviste una nota de ${ nineteenPrompt }, a la cual le corresponde una calificación de “Bien”.` )
	} else if ( nineteenPrompt >= 7 && nineteenPrompt <= 9 ) {
		document.write(
			`Obtuviste una nota de ${ nineteenPrompt }, a la cual le corresponde una calificación de “Notable”.`
		)
	} else if ( nineteenPrompt >= 9 && nineteenPrompt <= 10 ) {
		document.write(
			`Obtuviste una nota de ${ nineteenPrompt }, a la cual le corresponde una calificación de “Sobresaliente”.`
		)
	} else {
		document.write( `Obtuviste una nota de ${ nineteenPrompt }, la cual no es válida.` )
	}
}

// 20. Realiza un script que pida cadenas de texto hasta que se pulse “cancelar”.
// Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión.
const twentyStoredValues = []
const twentyFunction = () => {
	const twentyPrompt = prompt(
		'Danos una frase y presioná “Aceptar” para formar una cadena.\r\nSi presionás “Cancelar”, se finalizará el proceso.'
	)
	if ( twentyPrompt === null ) {
		document.write( `<p>Estas son las cadenas de texto acumuladas: ${ twentyStoredValues.join( '-' ) }</p>` )
		return
	}
	twentyStoredValues.push( twentyPrompt )
	twentyFunction()
}
twentyFunction()

// 21. Realiza un script que pida números hasta que se pulse “cancelar”.
// Si no es un número deberá indicarse con un «alert» y seguir pidiendo.
// Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.
const twentyoneStoredValues = []
const twentyoneFunction = () => {
	const twentyonePrompt = prompt(
		'Danos un número y presioná “Aceptar” para formar un cadena.\r\nSi presionás “Cancelar”, se finalizará el proceso.'
	)
	if ( twentyonePrompt === null ) {
		document.write( `<p>Estos son los números acumulados: ${ twentyoneStoredValues.join( ', ' ) }.</p>` )
		return
	}

	if ( isNaN( +twentyonePrompt ) ) {
		alert( 'Recordá que sólo podés ingresar números.' )
	} else if ( twentyonePrompt.trim() !== '' ) {
		twentyoneStoredValues.push( twentyonePrompt )
	}

	twentyoneFunction()
}
twentyoneFunction()

// 22. Realizar una página con un script que calcule el valor de la letra de un número de DNI.
// El algoritmo para calcular la letra del dni es el siguiente:
// - El número debe ser entre 0 y 99999999
// - Debemos calcular el resto de la división entera entre el número y el número 23.
// - Según el resultado, de 0 a 22, le corresponderá una letra de las siguientes:
//   (T, R, W, A, G, M, Y, F, P, D, X, B, N, J, Z, S, Q, V, H, L, C, K, E)
// - Si lo introducido no es un número deberá indicarse con un alert y volver a preguntar.
// - Deberá de repetirse el proceso hasta que el usuario pulse «cancelar».
const twentytwoStoredValues = []
const twentytwoLettersArray = [ 'T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E' ]
const twentytwoFunction = () => {
	const twentytwoPrompt = prompt(
		'Danos un número de DNI (sin puntos) y presioná “Aceptar” para codificarlo.\r\nSi presionás “Cancelar”, se finalizará el proceso'
	)
	if ( twentytwoPrompt === null ) {
		if ( ! twentytwoStoredValues.length ) {
			return
		}
		document.write( `<p>Este es el resultado de la codificación de los números ingresados: ${ twentytwoStoredValues.join( '-' ) }.</p>` )
		return
	}
	if ( isNaN( +twentytwoPrompt ) ) {
		alert( 'Recordá que sólo podés ingresar números.' )
	} else if ( twentytwoPrompt < 0 || twentytwoPrompt > 99999999 ) {
		alert( 'Sólo podés ingresar un valor entre 0 y 99.999.999.' )
	} else if ( twentytwoPrompt.trim() !== '' ) {
		const remainder = Math.round( twentytwoPrompt % 23 )
		twentytwoStoredValues.push( twentytwoLettersArray[ remainder ] )
	}

	twentytwoFunction()
}

twentytwoFunction()

// 23. Realiza un script que escriba una pirámide del 1 al 30 de la siguiente forma:
// 1
// 22
// 333
// 4444
// 55555
// 666666
// ...
// document.write( '<p>' )
const twentythreePrintRow = ( number, counter = number ) => {
	// Base case.
	if ( counter <= 0 ) {
		return
	}
	document.write( `${ number } ` )
	// Recursive case.
	twentythreePrintRow( number, counter - 1 )
}

const twentythreePrintPyramid = number => {
	// Base case.
	if ( number <= 0 ) {
		document.write( 'El número elegido para crear la pirámide debe ser superior a cero.' )
		return
	}
	document.write( '<span>' )
	twentythreePrintRow( number )
	document.write( '</span><br>' )
	// Recursive case.
	if ( number < 30 ) {
		twentythreePrintPyramid( number + 1 )
	}
}

twentythreePrintPyramid( 1 )

document.write( '</p>' )

// 24. Haz un script que escriba una pirámide inversa de los números del 1 al número
// que indique el usuario de la siguiente forma: (suponiendo que indica 6).
// 666666
// 55555
// 4444
// 333
// 22
// 1
const twentyfourPrompt = prompt( 'Danos un número para generar una pirámide invertida a través de él:' )
if ( twentyfourPrompt !== null ) {
	document.write( '<p>' )

	const twentyfourPrintRow = ( number, counter = number ) => {
		// Base case.
		if ( counter <= 0 ) {
			return
		}
		document.write( `${ number } ` )
		// Recursive case.
		twentyfourPrintRow( number, counter - 1 )
	}

	const twentyfourPrintPyramid = number => {
		if ( twentyfourPrompt <= 0 ) {
			document.write( 'El número elegido para crear la pirámide debe ser superior a cero.' )
		}
		// Base case.
		if ( number <= 0 ) {
			return
		}
		document.write( '<span>' )
		twentyfourPrintRow( number )
		document.write( '</span><br>' )
		// Recursive case.
		twentyfourPrintPyramid( number - 1 )
	}

	twentyfourPrintPyramid( twentyfourPrompt )

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
const twentyfiveFunction = () => {
	document.write( '<p>' )
	for ( let i = 1; i <= 500; i++ ) {
		let twentyfiveOutput = i
		i % 4 === 0 ? twentyfiveOutput += ' (múltiplo de 4)' : null
		i % 9 === 0 ? twentyfiveOutput += ' (múltiplo de 9)' : null
		document.write( `<span>${ twentyfiveOutput }</span><br>` )
		i % 5 === 0 ? document.write( '<span>————————————————————</span><br>' ) : null
	}
	document.write( '</p>' )
}

twentyfiveFunction()
