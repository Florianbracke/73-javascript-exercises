/* becode/javascript
 *
 * /01-base/03-prompt-if/script.js - 1.3: promp & if
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
var cake = confirm( "do you want some cake?");
if (cake == true){
  alert("I was only being polite, you know...");
}
else {
  alert("Are you sure?")
}
console.log(cake);
})();