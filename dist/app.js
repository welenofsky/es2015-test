"use strict";

function printName() {
	var name = arguments.length <= 0 || arguments[0] === undefined ? "Justin" : arguments[0];

	console.log(name);
}
printName();
printName("Paco");