//remove dupes from array

var removeDuplicates = function removeDuplicates(array){
	var emptyObj = {};
	var otherArray = [];

	for ( var i = 0; i < array.length; i++){
		if (otherArray.indexOf(array[i]) < 0 ){
			otherArray.push(array[i])
		}
	}
	console.log(otherArray);
}

removeDuplicates([1,2,3,4,5,1,2,3,5,5,5,6,0,1,2,3,4,5,6,7,8,9,10])

arr = [1,2,3,4]
console.log(arr.indexOf(1))