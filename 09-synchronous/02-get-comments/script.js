// (() => {
//     document.getElementById("run").addEventListener("click", function(){
//         window.lib.getPosts(function(error,articles) {
//             window.lib.getComments(articles,function (){
//             console.log(articles-id)
//             } )
//         } )
//     } )
// })();


(() => {
    document.getElementById("run").addEventListener("click", function(){
        window.lib.getPosts(function(error,articles) {
            console.log(error, articles)
            })
            indow.lib.getComments(post-id, (error, comments), function (){
            console.log("test")
        })
    })
})();

  