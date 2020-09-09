// our encoded message
var encoded = ["w","r","e","r","s","h","i","w","r","e","r","w","r","s","h"];

// r is most common (appears 5 times); w appears (3 times); e, s, h appear twice; i appears once
// this is an array of the appears: what appears more commonly is to the left
var letters = ["r", "w", "e", "s", "h", "i"];

// this makes an array of all permutations
function permutations(letters) {
	var n = letters.length;
	if (n <= 1) {
		return [letters];
	}
	var s = [];
	for (var i = 0; i < n; i++) {
		var v = [];

		if (i == 0) {
			v = letters.slice(1, n);
		} else if (i == n) {
			v = letters.slice(0, n-1);
		} else {
			for (var k = 0; k < i; k++) {
				v[k] = letters[k];
			}
			for (k = i + 1; k < n; k++) {
				v[k - 1] = letters[k];
			}
		}

		var w = permutations(v);
		var p = [];
		p[0] = letters[i];
		for (var j = 0; j < w.length; j++) {
			for (var k = 1; k < n; k++) {
				p[k] = w[j][k - 1];
			}
			s.push(p.slice());
 		}
	}
	return s;
}

// this assigns a number to each letter: the more common the letter, the higher the value of the number
function frequencyOrder(letter) {
	var frequency = ["e", "i", "s", "h", "r", "w"];
	for (var i = 0; i < 6; i++) {
		if (frequency[i] == letter) {
			return 6 - i;
		}
	}
}

function leftIsLess(left, right) {
    for (let i = 0; i < left.length; i++) {
        var l = frequencyOrder(left[i]);
        var r = frequencyOrder(right[i]);
        if (l < r) {
            return true;
        } else if (l > r) {
            return false;
        } else {
            // continue
        }
    }

    return false;
}

//merges two sorted arrays to produce a third sorted array
function merge(array1, array2) {
    var result = [];
    let a1 = 0;
    let a2 = 0;
    
    while(a1 < array1.length && a2 < array2.length) {
        if (leftIsLess(array1[a1], array2[a2])) {
            result.push(array2[a2]);
            a2++;
        } else {
            result.push(array1[a1]);
            a1++;
        }
    }

    for(;a1 < array1.length; a1++) {
        result.push(array1[a1]);
    }

    for(;a2 < array2.length; a2++) {
        result.push(array2[a2]);
    }
    return result;
}

//recursively does merge sort
function mergeSort(array) {
    if (array.length === 1) {
        return array;
    }

    var mid = Math.floor(array.length / 2);

    var left = array.slice(0, mid);
    var right = array.slice(mid, array.length);
    return merge(mergeSort(left), mergeSort(right));
}


//Do not alter anything below this----------------------------------
module.exports = {
	permutations : permutations,
	frequencyOrder : frequencyOrder,
	merge : merge,
	mergeSort : mergeSort
}
