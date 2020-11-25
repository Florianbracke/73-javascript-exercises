/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018 
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.
function myFunction() {

    var day = document.getElementById("dob-day").value;
    

    var month = document.getElementById("dob-month").value;
   

    var year = document.getElementById("dob-year").value;
    

    console.log(day);
    console.log(month);
    console.log(year);

    var date = day + month + year;
    console.log(day + " " + month + " " + year);

    alert(" Your soul saw it's first light on: " + day + " " + month + " " + year);
};
//document.getElementById("run").addEventListener("click", function()  
