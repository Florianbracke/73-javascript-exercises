

//window represents browser window
//lib is a library
//the get syntax binds an object property to a function that will be called when that property is looked up.
// The $.post() method loads data from the server using a HTTP POST request.

(() => {
document.getElementById("run").addEventListener("click", function(){});

window.lib.getPosts(function(error,articles) {
console.log(error, articles)})
})();