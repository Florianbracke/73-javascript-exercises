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
            articles.forEach((post) => {
                window.lib.getComments(post.id, function(error, comments) {
                    console.log(error, comments);
                });
                
            })
            })
            
        })
    })
();

  