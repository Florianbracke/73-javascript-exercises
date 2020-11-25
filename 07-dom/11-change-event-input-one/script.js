function myFunction() {
    var x = document.getElementById("pass-one");
    var y = x.value.length;
    document.getElementById("counter").innerHTML= y + "/10";
    if (y == 10){
        alert("Stop Right There, Criminal Scum");
    }
  }