console.log('other linked')

//REVERSE A STRING

var stringReverse = function stringReverse(string){
	newStr = '';

	for(var i = string.length -1; i >= 0; i--){
		newStr += string[i];
	}
	return newStr;
}

//IS PRIME?

var isPrime = function isPrime(number){
	if(number <=2){return true}

	for(var i = 2; i < number; i++){
		if(number % i === 0){
			return "not prime"
		}
	}
	return "is prime"
}

//FIB

var fibo = function fibo(fibNum){
	var fib = [0,1];

	for(var i = 2; i <= fibNum; i++){
		fib[i] = fib[i-1] + fib[i-2];
	}
	return fib[fibNum]
}


//GREATEST COMMON DIVISOR OF TWO NUMBERS

var greatestDivisor = function greatestDivisor(num1, num2){
	var divisor;
	var bigger = Math.max(num1, num2);


	for (var i = 0; i < bigger; i++){
		if(num1 % i === 0 && num2 % i === 0){
			divisor = i;
		}
	}
	return divisor;
}

//REMOVE DUPLICATES FROM ARRAY

var removeDupes = function removeDupes(array){
	newArray = [];
	emptyObj = {};

	for(i = 0; i < array.length; i++){
		var elm = array[i];
		if(!emptyObj[elm]){
			newArray.push(elm);
			emptyObj[elm] = true;
		}
	}
	return newArray;
}


//MERGE AND SORT TWO ARRAYS

var merge = function merge(left, right){
	merged = [];
	leftElm = left[0];
	rightElm = right[0];
	i = 1;
	j = 1;

	while(leftElm || rightElm){
		if(leftElm < rightElm || (leftElm && !rightElm)){
			merged.push(leftElm);
			leftElm = left[i++];
		} else {
			merged.push(rightElm);
			rightElm = right[j++];
		}

	}
	return merged.sort(function(a,b){
		return a-b
	});
}


//SWAP NUM WITHOUT TEMP VAR
function swapNumb(a, b){
  console.log('before swap: ','a: ', a, 'b: ', b);
  b = b -a;
  console.log("b:", b)
  a = a+ b;
  console.log("a:", a)
  b = a-b;
  console.log('after swap: ','a: ', a, 'b: ', b);  
}

//REVERSE WORDS IN A SENTENCE
var reverseWords = function reverseWords(string){
	string = string.split(' ').reverse().join(' ')
	return string;
}

//REVERSE WORDS IN PLACE

var reverseWordsInPlace = function reverseWordsInPlace(string){
	string = string.split(' ').reverse().join(' ').split('').reverse().join('')
	return string;
}


//FIND TWO BIGGEST NUMBERS

var twoBiggest = function twoBiggest(array){
	var biggest = 0;
	var secondBiggest = 0;

	for(i = 0; i < array.length; i++){
		if(array[i] > biggest){
			secondBiggest = biggest;
			biggest = array[i];
		} else if (array[i] < biggest && array[i] > secondBiggest){
			secondBiggest = array[i];
		}
	}
	return {'biggest': biggest, 'secondBiggest': secondBiggest}
}



//UNIQUE LETTERS IN A STRING?

var uniqueLetters = function uniqueLetters(string){
	var stringToCheck = '';
	for(var i = 0; i < string.length; i++){
		if(stringToCheck.includes(string[i]) == false){
			stringToCheck += string[i];
		}
	}
	return stringToCheck == string;
}


//BUBBLE SORT
var bubble = function bubble(array){

	for (var i = 0; i < array.length; i++){
		for (var j = 0; j < array.length; j++){
			if (array[j] > array[j+1]){
				var temp = array[j];
				array[j] = array[j+1];
				array[j+1] = temp;
			}
		}
	}
	return array;
}





































