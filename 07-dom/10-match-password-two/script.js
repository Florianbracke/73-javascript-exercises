


function myFunction() {
    
    let passwordOne = document.getElementById("pass-one");
    let passwordTwo = document.getElementById("pass-two");

   

    if (passwordOne.value == passwordTwo.value){
        var elem1 = document.querySelector('#pass-one');
        elem1.style.color = 'white';
        elem1.style.backgroundColor = 'green';
        var elem2 = document.querySelector('#pass-two');
        elem2.style.color = 'white';
        elem2.style.backgroundColor = 'green';
    } else {
        var elem1 = document.querySelector('#pass-one');
        elem1.style.color = 'black'; elem1.style.backgroundColor = 'red';
        var elem2 = document.querySelector('#pass-two');
        
        elem2.style.color = 'black'; elem2.style.backgroundColor = 'red';
        var passwordTwo = document.elem2;
        passwordTwo.classList.add("error");
}
    
}
