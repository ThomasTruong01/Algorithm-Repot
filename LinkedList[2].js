var theLine = ['Tad', 'Sam', 'Rudy'];

function listContains(myArr, name) {
	return myArr.indexOf(name);
}

function listLength(myArr) {
	return myArr.length;
}

function listDisplay(myArr) {
	console.log(myArr);
}

console.log(listContains(theLine, 'Rudy'));

console.log(listLength(theLine));

listDisplay(theLine);
