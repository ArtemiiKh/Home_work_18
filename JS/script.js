function mainFunction (callback) {
	const num = +prompt("Введите Ваше число");
	const deg = +prompt("Введите степень числа");

	return exponentiation(num, deg);
}

function exponentiation (num, deg) {

	const degResult = Math.pow(num, deg);
	alert(degResult);
	return degResult;
}

console.log(mainFunction(exponentiation));