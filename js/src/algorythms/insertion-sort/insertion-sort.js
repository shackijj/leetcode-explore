function genRandomArray(n) {
	var arr = [];
	for (var i = 0; i < n; i++) {
		arr[i] = Math.round(10 * Math.random());
	}
	return arr;
}

// This implements the swap function
function swap(array, index1, index2) {
	var x = array[index2];
	array[index2] = array[index1];
	array[index1] = x;
	return array;
}

// This implements the shift function
function shift(array, index1, index2) {
	if (index1 < index2) {
		return array;
	}
	var x = array[index1];
	for (var i = index1; i >= index2 + 1; i--) {
		array[i] = array[i - 1];
	}
	array[index2] = x;
	return array;
}

function insertionSort(array) {
    if (array.length === 1) {
        return array;
    }
    for (var i = 1; i <= array.length - 1; i++) {
        for (var j = i; j >= 1; j--) {
            if (array[j] < array[j - 1]) {
                swap(array, j, j - 1);
            } else {
                break;
            }
        }
    }
    return array;
}

module.exports = {
	genRandomArray: genRandomArray,
	swap: swap,
	shift: shift,
	insertionSort: insertionSort
}