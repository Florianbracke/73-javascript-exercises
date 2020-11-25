/* becode/javascript
 *
 * /06-dom/06-mini-carousel/script.js - 6.6: mini carousel
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    var gallery= [
        "woman.png",
        "man.png",
        "woman.png",
        "man.png",
        "woman.png",
        "man.png",
        "woman.png",
        "man.png",

    ];
    document.getElementById("next").addEventListener("click", Next);
    let index = 0;


    function Next() {
console.log(index)
        if (index < gallery.length - 1) {
            index ++;
        } else if (index == gallery.length - 1) {
            index = 0;
        };
        
    document.querySelector("img").src = gallery[index];

    };


    // your code here
})();