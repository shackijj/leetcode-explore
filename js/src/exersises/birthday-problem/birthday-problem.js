function genDay() {
	//first generate a month
	var month = 1 + Math.round(11 * Math.random());

	if (((month % 2 == 1) && (month <= 7)) || ((month % 2 == 0) && (month >= 8))) {
		var day = 1 + Math.round(30 * Math.random());
	} else if (month == 2) {
		var day = 1 + Math.round(27 * Math.random());
	} else {
		var day = 1 + Math.round(29 * Math.random());
	}
	return [day, month];
}

function genBirthdays(n) {
	var birthdays = [];
	var nst = n.toString();
	for (var i = 0; i < n; i++) {
		var str = i.toString();
		var lim = nst.length - str.length;
		for (var j = 1; j <= lim; j++) {
			str = "0" + str;
		}
		birthdays[2 * i] = str;
		birthdays[1 + (2 * i)] = genDay();
	}
	return birthdays;
}

// search for unique birthdays in the array
function find(birthdays) {
    const months = new Array(12);
    for (var i = 0; i <= months.length - 1; i++) {
        months[i] = new Array(31);
    }

    for (var i = 0; i <= birthdays.length - 1; i += 2) {
        var id = birthdays[i];
        var date = [birthdays[i + 1][0] - 1, birthdays[i + 1][1] - 1];

        if (months[date[1]] && months[date[1]][date[0]]) {
            months[date[1]][date[0]].push(id);
        } else {
            months[date[1]][date[0]] = [id];
        }
    }

    var result = [];

    for (var m = 0; m <= 11; m++) {
        for (var d = 0; d <= 30; d++) {
            if (months[m] && months[m][d] && months[m][d].length == 1) {
                result.push(months[m][d][0])
            }
        }
    }

    return result
}

///////////////////////////////////////////

function swap(array, index1, index2) {
	var x1 = array[index2];
	var x2 = array[index2 - 1];
	array[index2] = array[index1];
	array[index1] = x1;
	array[index2 - 1] = array[index1 - 1];
	array[index1 - 1] = x2;
	return array;
}

function bubbleSort(array) {
	var n = array.length;
	for (var i = 0; i <= n - 2; i++) {
		var count = 0;
		for (var j = 1; j <= n - 3; j = j + 2) {
			if (array[j + 2][1] < array[j][1]) {
				swap(array, j, j + 2);
				count++;
			}
		}
		if (count == 0) {
			break;
		}
	}
	return array;
}

function bubbleSortDays(array) {
	var n = array.length;
	for (var i = 0; i <= n - 2; i++) {
		var count = 0;
		for (var j = 1; j <= n - 3; j = j + 2) {
			if ((array[j + 2][1] == array[j][1]) && (array[j + 2][0] < array[j][0])) {
				swap(array, j, j + 2);
				count++;
			}
		}
		if (count == 0) {
			break;
		}
	}
	return array;
}

// sort then search for unique birthdays
function findSorted(birthdays) {
    bubbleSort(birthdays)
    bubbleSortDays(birthdays);
    
    var result = [];
    for (var i = 1; i <= birthdays.length - 1; i = i + 2) {
        if (
            i === 1 &&
            (birthdays[i + 2][1] !== birthdays[i][1] || birthdays[i + 2][0] !== birthdays[i][0])) {
            result.push(birthdays[i - 1])
        } else if (
            i > 1 && i !== birthdays.length - 1 &&
            (
                birthdays[i + 2][1] !== birthdays[i][1] ||
                birthdays[i + 2][0] !== birthdays[i][0]
            ) &&
            (
                birthdays[i - 2][1] !== birthdays[i][1] ||
                birthdays[i - 2][0] !== birthdays[i][0]
            )
        ) {
            result.push(birthdays[i - 1])
        } else if (
            i == birthdays.length - 1 &&
            (birthdays[i - 2][1] !== birthdays[i][1] ||
            birthdays[i - 2][0] !== birthdays[i][0])) {
            result.push(birthdays[i - 1])
        }
    }

    return result;
}

///////////////////////////////////////////

var birthdays = genBirthdays(1589);
console.log(find(birthdays));
console.log(findSorted(birthdays));


// Do not modify the code below this point--------------------------------
module.exports = {
	genDay: genDay,
	genBirthdays: genBirthdays,
	find: find,
	swap: swap,
	bubbleSort: bubbleSort,
	bubbleSortDays: bubbleSortDays,
	findSorted: findSorted

}