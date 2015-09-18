function bubbleSort(array, timesSorted) {
    timesSorted = timesSorted || 0;
    if (array.length <= 1) {
        return array;
    }
    var sorted = true;
    for(var i = 0; i < array.length - 1 - timesSorted; i++) {
        var num0 = array[i];
        var num1 = array[i+1];
        if(num0>num1) {
            array[i] = num1;
            array[i+1] = num0;
            sorted = false;
        }
    }
    if (sorted) return array;
    else return bubbleSort(array, timesSorted++);
}

function merge(array1, array2, result) {
	result = result || [];
	if (!array1.length && !array2.length) {
		return result;
	} else if (!array1.length) {
		result =  result.concat(array2);
		return result;
	} else if (!array2.length) {
		result = result.concat(array1);
		return result;
	} else {
		if(array1[0] < array2[0]) {
			result.push(array1.shift());
		} else {
			result.push(array2.shift());
		}
	}
	return merge(array1, array2, result);
}

function split(wholeArray) {
	var indexToSplit = wholeArray.length/2;
	var left = [];
	var right = [];
	for(var i = 0; i < wholeArray.length; i++) {
		if (i < indexToSplit) {
			left.push(wholeArray[i]);
		} else {
			right.push(wholeArray[i]);
		}
	}
	return [left, right];
}

function mergeSort(array) {
	if (array.length <= 1) {
		return array;
	}

	var leftAndRight = split(array);

	var left = mergeSort(leftAndRight[0]);
	var right = mergeSort(leftAndRight[1]);

	return merge(left, right);
}

for(var i=8; i <= 13; i++) {
    var num_items = Math.pow(2,i);
    var native_test_array = [];
    var b_test_array = [];
    var m_test_array = []
    for(var j=0; j < num_items; j++) {
        var rand = Math.floor(Math.random() * num_items);
        native_test_array.push(rand);
        b_test_array.push(rand);
        m_test_array.push(rand);
    }

    console.time(num_items + " native");
    native_test_array.sort(function(a,b){ return a-b; });
    console.timeEnd(num_items + " native");

    console.time(num_items + " bubble");
    bubbleSort(b_test_array);
    console.timeEnd(num_items + " bubble");

    console.time(num_items + " merge");
    mergeSort(m_test_array);
    console.timeEnd(num_items + " merge");  
}