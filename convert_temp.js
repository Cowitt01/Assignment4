/*
Cory Witt
script.js
INFO 1579
Shaw
06/23/2025
*/
 
"Use Strict";

/*********************
*  helper functions  *
**********************/
const $ = selector => document.querySelector(selector);
const calculateCelsius = temp => (temp-32) * 5/9;
const calculateFahrenheit = temp => temp * 9/5 + 32;
const calculateMeters = meters => meters / 3.2808;
const calculateFeet = feet => meters * 3.2808;

const toggleDisplay = (label1Text, label2Text) => {
    document.getElementById("label_1").textContent = label1Text;
    document.getElementById("label_2").textContent = label2Text;
    
    document.getElementById('value_computed').textContent = "";


    // select text in degrees textbox

    
}

/****************************
*  event handler functions  *
*****************************/
const performConversion = () => { 
   
      let conversionType = "";

   const selectedConversionRadio = $('input[name="conversion_type"]:checked')

   if (selectedConversionRadio.id = "to_celsius") {
      conversionType = "celsius"
   }else if (selectedConversionRadio.id = "to_fahrenheit")  {
      conversionType = "fahrenheit"    
   }else if (selectedConversionRadio.id = "to_meters")  {
      conversionType = "meters"
   }else if (selectedConversionRadio.id = "to_feet")  {
      conversionType = "feet"
   }

   const inputValue = parseFloat($("#value_entered").value);
   
   if (isNaN(inputValue)) {
       $("#message").textContent = "This is plain text content.";
       $("#value_entered").textContent = "";

   }else{
       $("#message").textContent = "";

       if (conversionType = "celcius") {
          $('#value_computed').value = (calculateCelsius(inputValue)).toFixed(2);     
       }else if (conversionType = "fahrenheit") {
          $('#value_computed').value = (calculateFahrenheit(inputValue)).toFixed(2);  
       }else if (conversionType = "meters") {
          $('#value_computed').value = (calculateMeters(inputValue)).toFixed(2); 
       }else if (conversionType ="feet") {
          $('#value_computed').value = (calculateFeet(inputValue)).toFixed(2);
       }
   }
}

const toggleToCelsius = () => toggleDisplay("Enter F degrees:", "Degrees Celsius:");
const toggleToFahrenheit = () => toggleDisplay("Enter C degrees:", "Degrees Fahrenheit:");

const toggleToMeters = () => toggleDisplay("Enter feet:", "Meters:");
const toggleToFeet = () => toggleDisplay("Enter meters:", "Feet:");

document.addEventListener("DOMContentLoaded", () => {
	// add event handlers
	$("#convert").addEventListener("click", performConversion);
    $("#to_celsius").addEventListener("click", toggleToCelsius);
    $("#to_fahrenheit").addEventListener("click", toggleToFahrenheit);
	$("#to_meters").addEventListener("click", toggleToMeters);
    $("#to_feet").addEventListener("click", toggleToFeet);

	// move focus
	$("#value_entered").focus();
});
