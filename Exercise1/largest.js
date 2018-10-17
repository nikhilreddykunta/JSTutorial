// Get process.stdin as the standard input object.
var standard_input = process.stdin;

// Set input character encoding.
standard_input.setEncoding('utf-8');

// Prompt user to input data in console.
console.log("Please enter any valid 5 numbers.");

var i=0;
var numbers = [];

// When user input data and click enter key.
standard_input.on('data', function (data) {
	
    // User input exit.
    if(i >= 5){
        // Program exit.
        var largest = -99999;
        for (var j = numbers.length - 1; j >= 0; j--) {
        	if (largest < numbers[j]) {
        		largest = numbers[j];
        	}
        }
        console.log("Largest of 5 numbers is : "+ largest);
        process.exit();
    }else
    {
        // store user input in array.
        numbers[i] = data;
        i++;
    }
});