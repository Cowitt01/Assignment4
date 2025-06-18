

//DO NOT MODIFY LINES 8-10

/*********************
*  helper functions  *
**********************/
const $ = selector => document.querySelector(selector);
const calculateCelsius = temp => (temp-32) * 5/9;
const calculateFahrenheit = temp => temp * 9/5 + 32;
//ADD YOUR CODE BELOW 

const toggleDisplay = (label1Text, label2Text) => {
    // update labels and clear disabled textbox


    // select text in degrees textbox

    
}

/****************************
*  event handler functions  *
*****************************/
const performConversion = () => {   

};

const toggleToCelsius = () => toggleDisplay("Enter F degrees:", "Degrees Celsius:");
const toggleToFahrenheit = () => toggleDisplay("Enter C degrees:", "Degrees Fahrenheit:");

document.addEventListener("DOMContentLoaded", () => {
	// add event handlers
	$("#convert").addEventListener("click", performConversion);
    $("#to_celsius").addEventListener("click", toggleToCelsius);
    $("#to_fahrenheit").addEventListener("click", toggleToFahrenheit);
	
	// move focus
	$("#value_entered").focus();
});



