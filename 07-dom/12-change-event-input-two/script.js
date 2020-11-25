function myFunction() {
    var x = document.getElementById("pass-one");
    var y = x.value.length;
    
    if (y == 8){
        document.getElementById("validity").innerHTML= "OK";
    }
  }