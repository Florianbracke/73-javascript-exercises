/* becode/javascript
 *
 * /04-dates/02-title-by-hour-two/script.js - 4.2: texte en fonction de l'heure (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    var h = new Date().getHours(); 
    var m = new Date().getMinutes();
    console.log(new Date().getHours());
    console.log(new Date().getMinutes()); 
     
    if (h > 17 && m > 30) {
        Timelygreeting = "Good evening";}
    if (h > 18) {
        Timelygreeting = "Good evening";}
    if (h > 17 && m < 30) {
         Timelygreeting = "Good day";}
    else {
        Timelygreeting = "Good day";}

    document.getElementById("target").innerHTML = Timelygreeting;
 

})();