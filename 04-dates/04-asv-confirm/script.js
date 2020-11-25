/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

function myNameFunction() {
    var name = prompt("please enter your name");
    if (name != null) {
        document.getElementById("p-name").innerHTML =
            "<b> hello " + name + ", welcome to this page! </b>";
    }
}

function myAgeFunction() {
    var age = prompt("please enter your name");
    if (age != null) {
        document.getElementById("p-age").innerHTML =
            "<b> You are " + age + "years old and that is old enough to join this Minecraft server! </b>";
    }
    if ( age < 18) {
        document.getElementById("p-age").innerHTML =
            "<b> You are " + age + "years old and that not old enough to join this Minecraft server! Get lost, Punk! </b>";
    }
}

function myTownFunction() {
    var town = prompt("please enter your name");
    if (town != null) {
        document.getElementById("p-town").innerHTML =
            "<b> Wow i should visit " + town + ", if you are there! </b>";}
    if (town === "Ghent") {
        document.getElementById("p-town").innerHTML =
            "<b> Hey that's sooo cool, I am from Gent aswell!!";
    }
    
}


function Renewinfo() {
    if 
(document.getElementById("p-town").innerHTML != null && 
document.getElementById("p-name").innerHTML != null &&
document.getElementById("p-age").innerHTML != null)  {
 console.log("ma mann")

}
}

//var b = setInterval(Renewinfo,3000)
