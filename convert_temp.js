/*
Cory Witt
script.js
INFO 1579
Shaw
06/23/2025
*/
 
"use strict";

//This program will convert fahrenheit to celcius, celcius to farenheit, feet to meters, or meters
//to feet based on the option selected by the end user.

/****************************************************
*               helper functions                    *
*****************************************************/
const $ = selector => document.querySelector(selector);      
const calculateCelsius = temp => (temp-32) * 5/9;             //celcius to farenheit calculation
const calculateFahrenheit = temp => temp * 9/5 + 32;          //farenheit to celcius calcuation
const calculateMeters = meters => meters / 3.2808;            //feet to meters calcuations
const calculateFeet = feet => feet * 3.2808;                  //meters to feet calcuation

const toggleDisplay = (label1Text, label2Text) => {           //Toggles the values for label 1 and label 2
    document.getElementById("label_1").textContent = label1Text;
    document.getElementById("label_2").textContent = label2Text;
    $("#value_computed").value= "";
    $("#value_entered").value= "";
    $("#value_entered").focus();
 
}

/****************************
*  event handler functions  *
*****************************/
const performConversion = () => {   /* This function will check with conversion type the end user
                                       selected, check to make sure that the value entered by the 
                                       end user is numeric, and then perform the appropriate calcuation*/
   
 const selectedRadio = $('input[name="conversion_type"]:checked').id;
 console.log("Selected radio button is  " + selectedRadio);

 let conversionType = "";

 if (selectedRadio == "to_celsius") {      
      conversionType = "celsius";                             //if "to celcius" conversion type is checked
   }else if (selectedRadio == "to_fahrenheit")  {
      conversionType = "fahrenheit";                          //if "to farenheit" conversion type is checked
   }else if (selectedRadio == "to_meters")  {
      conversionType = "meters";                              //if "to meters" conversion type is checked
   }else if (selectedRadio == "to_feet")  {
      conversionType = "feet" ;                               //if "to feet" conversion type is checked
}
 
const inputValue = parseFloat($("#value_entered").value);
console.log("Text input value is  " + inputValue);
   
if (isNaN(inputValue)) {        //If input value is not numeric, display error message to user.
     $("#message").textContent = "You must enter a valid number for " + conversionType + " conversions." ;
     $("#value_entered").value= "";
     $("#value_entered").focus();

}else{
      $("#message").textContent = "";   //input value is numeric, perform appropriate calculation routine

      if (conversionType == "celsius") {
          $('#value_computed').value = (calculateCelsius(inputValue)).toFixed(2);     //Call the calculateCelsius function
          console.log("Calculated Celcius value " +  $('#value_computed').value);
         }else if (conversionType == "fahrenheit") {
                  $('#value_computed').value = (calculateFahrenheit(inputValue)).toFixed(2);  //Call the calculateFarenheit function
                   console.log("Calculated Farenheit value " +  $('#value_computed').value);
         }else if (conversionType == "meters") {
                  $('#value_computed').value = (calculateMeters(inputValue)).toFixed(2);      //Call the calculate Meters function
                  console.log("Calculated Meters value " +  $('#value_computed').value);
         }else if (conversionType == "feet") {
                  $('#value_computed').value = (calculateFeet(inputValue)).toFixed(2);        //Call the calculate Feet function  
                  console.log("Calculated Feet value " +  $('#value_computed').value);
         }
   }
    $("#value_entered").focus();
    $("#value_entered").select();
}

const toggleToCelsius = () => toggleDisplay("Enter F degrees:", "Degrees Celsius:");         //label change for celcius conversion
const toggleToFahrenheit = () => toggleDisplay("Enter C degrees:", "Degrees Fahrenheit:");   //label change for farenheit conversion

const toggleToMeters = () => toggleDisplay("Enter feet:", "Meters:");                        //label change for feet conversion
const toggleToFeet = () => toggleDisplay("Enter meters:", "Feet:");                          //label changefor meters conversion

/****************************************************
*              Event listeners                      *
*****************************************************/
document.addEventListener("DOMContentLoaded", () => {
	$("#convert").addEventListener("click", performConversion);
   $("#to_celsius").addEventListener("click", toggleToCelsius);
   $("#to_fahrenheit").addEventListener("click", toggleToFahrenheit);
	$("#to_meters").addEventListener("click", toggleToMeters);
   $("#to_feet").addEventListener("click", toggleToFeet);

	// move focus to the value entered text box.
	$("#value_entered").focus();
});
