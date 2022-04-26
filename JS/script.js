function mainFunction (callback) {
	const num = +prompt("Введите Ваше число");
	const deg = +prompt("Введите степень числа");

	return exponentiation(num, deg);
	// return multiplay(num, deg);
	// return division(num, deg);
	// return modulo(num, deg);
}

function exponentiation (num, deg) {

	const degResult = Math.pow(num, deg);
	alert(degResult);
	return degResult;
}

// function multiplay (num, deg) {

// 	const numInDeg = num * deg;
// 	alert(numInDeg);
// 	return numInDeg;
// }

// function division (num, deg) {

// 	const numInDeg = (num / deg).toFixed(2);
// 	alert(numInDeg);
// 	return numInDeg;
// }

// function modulo (num, deg) {

// 	const numInDeg = num % deg;
// 	alert(numInDeg);
// 	return numInDeg;
// }

console.log(mainFunction(exponentiation));
// console.log(mainFunction(multiplay));
// console.log(mainFunction(division));
// console.log(mainFunction(modulo));
