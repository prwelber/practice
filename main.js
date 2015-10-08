console.log('main.js linked')

//reverse a string


var someString = "the quick brown fox jumped over";

var stringReverse = function stringReverse(string){
	var reversedString = "";
	for(i = string.length - 1; i >= 0; i--){
		reversedString += string[i];
	}
		return reversedString;
}


//reverse words in a string but not letters
var string = "the quick brown fox jumped over";

var reverseWords = function reverseWords(string){
	var newString = string.split(" ").reverse().join(" ");

	return newString;
}



//find two biggest nums in an array

var myArray = [10, 12, 275, 13, 1, 4, 55, 22, 33, 44, 77, 23, 90, 250, 5, 61, 99, 12];

var findTwoBiggest = function findTwoBiggest(array){
	var biggest = 0;
	var secondBiggest = 0;

	for(var i = 0; i < array.length; i++){
		if (array[i] > biggest){
			secondBiggest = biggest;
			biggest = array[i];
		} else if (array[i] < biggest && array[i] > secondBiggest){
			secondBiggest = array[i];
		}
	}
	console.log("biggest:", biggest + " and " + "secondBiggest:", secondBiggest)
}



var threeBiggest = function threeBiggest(array){
	var biggest = 0;
	var secondBiggest = 0;
	var thirdBiggest = 0;

	for(var i = 0; i < array.length; i++){
		if (array[i] > biggest){
			thirdBiggest = secondBiggest;
			secondBiggest = biggest;
			biggest = array[i];
		} else if (array[i] < biggest && array[i] > secondBiggest){
			secondBiggest = array[i];
		} else if (array[i] < biggest && array[i] > thirdBiggest){
			thirdBiggest = array[i];
		}
	}
	console.log(biggest + " " + secondBiggest + " " + thirdBiggest);
}



//create function that tells if you all letters in a string are unique


var testString = "hello there"

var uniqueLetters = function uniqueLetters(string){
	var otherString = "";
	
	for (var i = 0; i < string.length; i++){
		if (otherString.includes(string[i]) === false){
			otherString += string[i];
		}
	}

	if (otherString == string){
		return true;
	} else {
		return false;
	}
}

// var isUnique = function isUnique(string){
// 	uniqueString = "";
// 	for (i = 0; i < string.length; i++){
// 	var stringed = string.split("")
// 	if (uniqueString.includes(string[i]) === false){
// 		uniqueString += string[i];
// 	}
//   }

//   if (string === uniqueString){
//   	return true
//   } else {
//   	return false
//   }

// }


//1. check Prime///////Question: How would you verify a prime number?/////a prime number is only divisible by itself and 1.

var isPrime = function isPrime(num){

	if (num <= 2){
		return true
	}

	for(var i = 2; i < num; i++){
		if (num % i === 0) {
			return false
		}
	}
	return true;
}

// 2. Prime Factors

var primeFactors = function primeFactors(num) {
	var factors = [];
	divisor = 2;

	for(var i = 2; i < num; i++){
		if (num % divisor === 0){
			factors.push(divisor);
			divisor++
		} else {
			divisor++
		}
	}
	return factors;
}


// 3. Fib Sequence
// ex. 0 1 1 2 3 5 8 13 21 34 55 89 144 233 377
//how do you get nth number?

var fibo = function fibo(num){
	var fib = [0,1];

	if (num <= 2) return 1;

	for(var i = 2; i <= num; i++){
		fib[i] = fib[i-1]+fib[i-2];
	}

	return fib[num]
}


// 4. find greatest common divisor
//ex (21, 14) == 7

var greatestDivisor = function greatestDivisor(num1, num2){
	
	var greatest;
	if (num1 < num2) {
		greatest = num2
	} else {
		greatest = num1
	};

	var divisor = 2;
	var greatestDiv = 1;
	for (var i = 0; i < greatest; i++){
		if (num1 % divisor === 0 && num2 % divisor === 0){
			greatestDiv = divisor;
			divisor++
		} else {
			divisor++
		}
	}
	return greatestDiv;
}


// 5. remove duplicate numbs from array

var arr = [1,1,1,3,4,5,6,78,6,3,2,9,6,32,2,3,3,3,4,5,6,7,8];

var noDuplicates = function noDuplicates(array){
	var newArr = [];
	var existsObj = {};
	var elm;

	for(var i = 0; i < array.length; i++){
		elm = array[i];
		if (!existsObj[elm]){
			newArr.push(elm);
			existsObj[elm] = true;
		}
	}
	console.log(existsObj)
	return newArr.sort(function(a,b){
		return a-b;
	});
}


// 6. merge two sorted arrays

var arr1 = [1,3,5,7,9];
var arr2 = [2,4,6,8,10];

var mergeArrays = function mergeArrays(left, right){
	merged = [];
	leftElement = left[0];
	rightElement = right[0];
	i = 1;
	j = 1;

	while	(leftElement || rightElement){
		if (leftElement < rightElement || (leftElement && !rightElement)){
			merged.push(leftElement);
			leftElement = left[i++];
		} else {
			merged.push(rightElement);
			rightElement = right[j++];
		}
	}

	return merged;
}


// check for palindrome

var palin = "madam";
var notPalin = "copycat";

var isPalindrome = function isPalindrome(string){
	stringReversed = string.split('').reverse().join('').toLowerCase()
	if (string.toLowerCase() === stringReversed){
		return true;
	} else {
		return false;
	}
}






//reverse string in place
//keep the words in their position but reverse the letters in them
var reverseInPlace = function reverseInPlace(string){
	return string.split(' ').reverse().join(' ').split('').reverse().join('');
}


















