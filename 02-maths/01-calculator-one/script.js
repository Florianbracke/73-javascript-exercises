function calc() {  //  <-- functie staat gelinkt aan button 

 // de value van de ingevulde getallen selecteren 
    var a = parseInt(document.querySelector("#value1").value);
    var b = parseInt(document.querySelector("#value2").value);

// de value van de ingevulde getallen selecteren  
    var op = document.querySelector("#operator").value; 
    

// the calculator met gelesecteerde values
    var calculate;
    if (op == "add") {
        calculate = a + b; 
    }
    else if (op == "min") {
        calculate = a - b;
    }
    else if (op == "div") {
        calculate = a / b;
    }
    else if (op == "mul") {
        calculate = a *  b;
    }

// het resulaat in html plaatsen en uitrekenen

document.querySelector("#result").innerHTML = calculate;
}