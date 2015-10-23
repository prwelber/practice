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
	console.log(fib)
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
}





























