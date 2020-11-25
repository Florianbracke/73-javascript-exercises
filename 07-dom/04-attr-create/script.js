
(function() {

                        //get value 
const link =document.querySelector('#source').getAttribute('data-image');
                        //create img tag
const image = document.createElement("img");
                        // fill in src of img
 image.src = link;
                        // postition img in DOM 
  document.getElementById("target").appendChild(image);
})();
