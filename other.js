console.log('other linked');


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
	// if(number <=2){return true}
	number <= 2 ? true : false

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
	var largestDivisor;

	for (var i = 0; i < bigger; i++){
		if(num1 % i === 0 && num2 % i === 0){
			largestDivisor = i;
			divisor++;
		} else {
			divisor++;
		}
	}
	return largestDivisor;

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
  b = b - a;
  console.log("b:", b)
  a = a + b;
  console.log("a:", a)
  b = a - b;

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


//BUBBLE SORT O(n^2)
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


//PRIME FACTORS OF A NUM
var primeFactors = function primeFactors(num){
  var factors = [], 
      divisor = 2;
  
  while(num > 2){
    if(num % divisor == 0){
       factors.push(divisor);
       num = num / divisor;
    }
    else{
      divisor++;
    }  
  }
  return factors;
}



//factorial

var factorial = function factorial(num){
	var number = 1;
	for (var i = 1; i <= num; i++){
		number = i * number;
	}
	return number;
}


//longest word in string
var string = "the quickest brown fox jumps over the lazy dog";
var longestWord = function longestWord(string){
	var arr = string.split(' ');
	var longWord = 'a';

	for(var i = 0; i < arr.length; i++){
		if (arr[i].length > longWord.length){
			longWord = arr[i];
		}
	}
	return longWord;
}


//simple adding of all numbers up to a number given
var adding = function adding(num){

	var total = 0;
	for (var i = 0; i <= num; i++){
		total += i;
	}

	return total;
}


//letter capitalize
var letterCap = function letterCap(string){
	var string = string.split(' ')
	for (var i = 0; i < string.length; i++){
		string[i] = string[i].substr(0,1).toUpperCase() + string[i].substr(1,string[i].length - 1);
	}
	return string.join(' ')
}


//is array arithmetic or geometric
arrayOne = [2,4,6,8,10,12,14,16];
arrayTwo = [2,6,18,54,162,486];

var whatIsIt = function whatIsIt(array){
	var diff = array[1] - array[0];
	var div = array[1] / array[0];

	for(var i = 1; i < array.length; i++){
		if (array[i + 1] - array[i] === diff){
			return "the array is arithmetic"
		} else if (array[i + 1] / array[i] === div){
			return "the array is geometric"
		}
	}
}


//count vowels in a string

var vowelString = "rachel and cooper and sometimes nelly"

var countVowels = function countVowels(string){
  var counter = 0;
  for (var i = 0; i < string.length; i++){
    if (string[i] == "a" || string[i] == "e" || string[i] == "i" || string[i] == "o" || string[i] == "u"){
      counter++;
    }
  }
  return counter;
}


//find all prime numbs between 1 and input
//requires three functions
//one for prime, one for printing prime, one for looping through print func

var primeNumber = function primeNumber(num){
	for (var i = 2; i < num; i++){
		if(num % i === 0 ){
			return 'not prime';
		} 
	}
	return 'prime';
}

var printPrime = function printPrime(num){
	if (primeNumber(num) === 'not prime'){
		console.log(num + ' is not prime');
	} else {
		console.log(num + ' is prime');
	}
}

var printAllPrimes = function printAllPrimes(range){
	for (var i = 1; i <= range; i++){
		printPrime(i);
	}
}


//stock picker
stocksArray = [300,90,10,75,50,20,250,30,45]

var stockPicker = function stockPicker(array){
	var minPrice  = Infinity;
	var maxProfit = 0;
	var sellNum;

	for(var i = 0; i < array.length; i++){
		if( array[i] < minPrice ){
			minPrice = array[i];
		}
		if((array[i] - minPrice) > maxProfit){
			maxProfit = (array[i] - minPrice);
			sellNum = array[i];
		}
	}
	// console.log(maxProfit +" and "+ minPrice)
	console.log('buy at', minPrice + ' and sell at', sellNum);



var array1 = [1,2,3,4,5,6,7,8,9,10,11,3,15,16,19];
var array2 = [1,3,5,6,9,17,18,20,14,12];

//we want to end with 1 array of unique nums from array1, 1 array of unique
//nums from array2 and a third array made up of the numbers the arrays have
//in common
var separate = function separate(arrayOne, arrayTwo){

	var arr1 = [];
	var arr2 = [];
	var arr3 = [];

	totalArray = array1.concat(array2);

	//remove duplicates from total array
	obj = {};
	otherArray = [];
	for(var i = 0; i < totalArray.length; i++){
		elm = totalArray[i];
		index = totalArray.indexOf(i);
		if(!obj[elm]){
			otherArray.push(elm);
			obj[elm] = index;
		} else {
			arr3.push(elm);
		}
	}
	console.log("this contains overlapping numbers:",arr3);

	//idea here is to take indexOf element in arr3 and remove that from array1 using splice which takes
	//where to delete and how many to delete as arguments
	for(var i = 0; i < array1.length; i++){
		for(var j = 0; j < arr3.length; j++){
			if(array1.indexOf(arr3[j]) >= 0){
				array1.splice(array1.indexOf(arr3[j]),1);
			}
		}
	}
	console.log("this is array1 stripped of nums in arr3:",array1);

	//save as above nested loop but for array2
	for(var i = 0; i < array2.length; i++){
		for(var j = 0; j < arr3.length; j++){
			if(array2.indexOf(arr3[j]) >= 0){
				array2.splice(array2.indexOf(arr3[j]),1);
			}
		}
	}
	console.log("this is array2 stripped of nums in arr3:", array2)
}





///Given an array of (time, stock price) pairs, find the maximum profit you can make by buying once and 
//selling once in temporal order (the list is already sorted by time)


stockPrices = [50,24,55,80,125,5,10,1,70];

var stockPicker = function stockPicker(array){

	var minPrice = Infinity;
	var maxProfit = 0;

	for(var i = 0; i < array.length; i++){
		if (array[i] < minPrice){
			minPrice = array[i];
		}
		if (maxProfit < (array[i] - minPrice)){
			maxProfit = array[i] - minPrice;
			console.log(array[i] + " and " + minPrice);
		}

	}
	return maxProfit;
}


//get largest product from three numbers
integers = [-5, 6, -100, 15, 80, 25, -40, 35];

var productOfThree = function productOfThree(array){
	var largest = 0;
	var secondLargest = 0;
	var thirdLargest = 0;
	var smallest = Infinity;
	var secondSmallest = Infinity;

	for (var i = 0; i < array.length; i++){
		if (array[i] > largest){
			secondLargest = largest;
			largest = array[i];
		} else if (array[i] < largest && array[i] > secondLargest){
			thirdLargest = secondLargest;
			secondLargest = array[i];
		} else if (array[i] < largest && array[i] < secondLargest && array[i] > thirdLargest){
			thirdLargest = array[i];
		}

		if (array[i] < smallest){
			smallest = array[i];
		} else if (array[i] > smallest && array[i] < secondSmallest){
			secondSmallest = array[i];
		}
	}
	console.log(largest, secondLargest, thirdLargest, smallest, secondSmallest )
	if ((smallest * secondSmallest) > (secondLargest * thirdLargest) ){
		return (smallest * secondSmallest) * largest;
	} else {
		return largest * secondLargest * thirdLargest;
	}

}

//find greatest possible difference between numbers in a set of unique nums

randomNums = [1,35,56,23,24,85,69,34,5,2,8,9,3,6,8,2,4,5,6,7,8,55,22,44,9];

var findGreatestDifference = function findGreatestDifference(array){
	sortedArray = randomNums.sort(function(a,b){return a-b});
	return sortedArray[sortedArray.length - 1] - sortedArray[0];
}




//find the mode in a list of numbers (the num that appears the most times)

someNums = [1,35,2,2,2,2,3,4,5,6,7,8,9,2,2,256,23,24,85,69,34,5,2,8,9,3,6,8,2,4,5,6,7,8,55,22,44,9];

var findMode = function findMode(array){
	var modeObj = {};

	for(var i = 0; i < array.length; i++){
		if(!modeObj[array[i]]){
			modeObj[array[i]] = 1;
		} else {
			modeObj[array[i]] += 1;
		}
	}

	number = 0;
	timesRepeated = 0;
	for (var val in modeObj){
		if(modeObj[val] > timesRepeated){
			timesRepeated = modeObj[val];
			number = val;
		}
	}
	console.log("the number", number + " was repeated", timesRepeated + " times");

	return number;
}



//find the biggest number from adding two numbers in an array without sorting

var addToBiggest = function addToBiggest(array){

}


//compare nums from two files one by one
arrayToCompare1 = [1,4,6,7,9,13,15];
arrayToCompare2 = [2,3,5,8,10,11,12,14];

var compareNumbers = function compareNumbers(arrayOne, arrayTwo){
	
}


//merge two arrays
function compoundArray(a, b){

	var newArray = [];
	var lengthier;
	if (a.length >= b.length){
		var lengthier = a.length
	} else {
		var lengthier = b.length;
	}

	for (var i = 0; i < lengthier; i++){
		if (a.length > i){
			newArray.push(a[i])
		}
		if (b.length > i){
		newArray.push(b[i]);
		}
	}
	console.log("non-sorted:", newArray)
	console.log("sorted:", newArray.sort(function(a,b){return a-b}))
}


//morse code translator
// Build a function, `morse_encode(str)` that takes in a string (no
// numbers or punctuation) and outputs the morse code for it. See
// http://en.wikipedia.org/wiki/Morse_code. Put two spaces between
// words and one space between letters.

//this code enters the first loop looking for any spaces in the string, if none
// are found, it enters the second 'for in' loop and replaces letters with code from
// the morseObject that was created by hand
// this is O n(squared) time...not great
var morseEncoder = function morseEncoder(string){

	var morseObject = {
		a: ".-",
		b: "-...",
		c: "-.-.",
		d: "-..",
		e: ".",
		f: "..-.",
		g: "--.",
		h: "....",
		i: "..",
		j: ".---",
		k: "-.-",
		l: ".-..",
		m: "--",
		n: "-.",
		o: "---",
		p: ".--."
	}

	var brokenDownString = string.split('');
	morseArray = [];

	for ( var i = 0; i < string.length; i++){
		if (brokenDownString[i] === " "){
			morseArray.push(" ")
		}
		for (key in morseObject){
			if (brokenDownString[i] === key){
				morseArray.push(morseObject[key])
			} 
		}
	}


	console.log(morseArray.join(' '));
}





