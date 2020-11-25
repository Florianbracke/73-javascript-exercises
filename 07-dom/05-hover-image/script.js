


(function() {

// get right sources to copy paste
    const source    = document.querySelector("img").getAttribute("src");
    const dataHover = document.querySelector("img").getAttribute("data-hover");
   
    //add eventlistener
   document.querySelector("img").addEventListener("mouseover", one);
   document.querySelector("img").addEventListener("mouseout", two);
       
   //make function change src
   function one() {
   document.querySelector("img").src = dataHover;}

   //make function change src
   function two() {
   document.querySelector("img").src = source;}
})();