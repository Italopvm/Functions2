//~~~~~~~~~~********** Exercise 1. getName ***************~~~~~~~~~~~~~~~~~~~~~

function getName (object){

	return object.name
}
console.log(getName({name:'Italo', age: 25 }))

//~~~~~~~~~~********** Exercise 2. totalLetters ***************~~~~~~~~~~~~~~~~~~~~~

function totalLetters(array){
	var holderArr = [];

	for(var i =0; i < array.length; i++){
		var word = array[i];
		holderArr.push(word.length);
	}
	
	var length1 = holderArr[0];
	var length2 = holderArr[1];
	var length3 = holderArr[2];
	
	var allLengths = (length1 + length2 + length3);

	return allLengths;

}

console.log(totalLetters(['javascript', 'is', 'awesome']))

//~~~~~~~~~~********** Exercise 3. keyValue ***************~~~~~~~~~~~~~~~~~~~~~


function keyValue(param1, param2){
	var userInput = {};

	userInput[param1] = param2; 

	return userInput;
}

console.log( keyValue('city', 'denver'))


//~~~~~~~~~~********** Exercise 4. negativeIndex ***************~~~~~~~~~~~~~~~~~~~~~


function negativeIndex(array, num){

	var unicorn  =	array.num;
	return unicorn;
}

console.log(negativeIndex(['jerry', 'sarah', 'sally'], -2));

//~~~~~~~~~~********** Exercise 5. removeM ***************~~~~~~~~~~~~~~~~~~~~~

function removeM(string){

	return string.split('m').join('');
}

console.log(removeM('memory'));




//~~~~~~~~~~********** Exercise 6. printObject ***************~~~~~~~~~~~~~~~~~~~~~

function printObject(object){
     for(var key in object) {
     	console.log(key+' is ' + object[key]);
     }
    }
printObject({a:10, b: 20});

// Object = {key: 'value'};
// // Object['key'] = value;

//~~~~~~~~~~********** Exercise 7. vowels ***************~~~~~~~~~~~~~~~~~~~~~

function vowels(str){

var vowelpush=[];

for(var i = 0; i < str.length; i++){
 	if(str[i]==='a' || str[i]==='e' || str[i]==='i' || str[i]==='o' ||
 	 str[i]==='u'){
 		vowelpush.push(str[i]);
 	}
 }		
 return vowelpush;

 }
 console.log(vowels('where are the vowels'));

//~~~~~~~~~~********** Exercise 8. Twins ***************~~~~~~~~~~~~~~~~~~~~~

function twins(array){
	for(var i = 0; i < array.length; i+=2){ // i += 2 looping over array by 2's or pairs

		var compVal2 = (i + 1);
		var myBoolean = false;
		if(array[i] == array[compVal2]){
			myBoolean = true;
		}
		else{
			myBoolean = false;
		}

			return myBoolean;
		
	}

}
console.log(twins('a', 'a', 'b', 'b', 'c', 'c'));




































