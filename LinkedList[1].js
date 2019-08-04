var theLine = ['Tad', 'Sam'];
function addFront(name) {
	theLine.unshift(name);
	return theLine;
}
function removeFront() {
	theLine.shift();
	return theLine;
}

function front() {
	return theLine.shift();
}

console.log('Line:', theLine);
console.log('Add Front', addFront('Rudy'));
console.log('Remove Front', removeFront());
console.log('Front', front());
