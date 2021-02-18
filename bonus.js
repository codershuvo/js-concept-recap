var marks = [89, 97, 89, 68, 94, 89, 79];
for (var i = 0; i < marks.length; i++) {
    var element = marks[i]; 
    // console.log(element); 
}


function add (number1, number2) {
    var total = number1 + number2; 
    return total; 
}

var result1 = add(56, 89); 
// console.log(result1); 

// console.log('not adding this time'); 
// console.log('not eating right now')

var result2 = add(144, 564); 
// console.log(result2); 


function largestNumber (numbers) {
    var larger = numbers[0]; 
    for (var i = 0; i < numbers.length; i++) {
        var element = numbers[i]; 
        if (element > larger) {
            larger = element; 
        }
    }
    return larger; 
}

var number1 = [65, 45, 23, 89, 91, 67, 61]; 
var output = largestNumber(number1); 
console.log('output', output); 