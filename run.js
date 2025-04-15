function handleOddEven(array) {
    let lastElement = array.pop();
	if (lastElement % 2 === 0 ) {
		return array.unshift(lastElement)
	} else {
		return array.push(lastElement*2)
	}
}

const array1 = [15,6,8,19];
console.log(handleOddEven(array1));
console.log(array1); 