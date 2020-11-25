/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *function randomNumber() {
let randomnumber = " ";
 for (let i = 0; i < 10; i++) { 
   randomnumber = console.log(Math.round(Math.random() * 100)) ;
 }
   
  
}
*/
(function random() {

 
document.getElementById("run").addEventListener("click", function random(){

        let numberArray= [];
        let randomNumber = " "
        for (i = 1; i < 11; i++) 
    {
        let randomNumber = Math.floor(Math.random() * 100);
        numberArray.push(randomNumber);
        document.getElementById(`n-${i}`).innerHTML = randomNumber; //template literals ${expression} 
        console.log(randomNumber);

    }
  
    /*   min   */
    document.getElementById("min").innerHTML = Math.min(...numberArray); 

     /*   max  */
    document.getElementById("max").innerHTML = Math.max(...numberArray); 
    
     /*   sum  */
     document.getElementById("sum").innerHTML = sum = numberArray.reduce((a, b) => a + b, 0); 
     
     /* average*/
     document.getElementById("average").innerHTML = Math.round(sum / 11);



     
})})();