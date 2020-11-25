/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.
 // to get the value of an input: document.getElementById("element-id").value

 function plus(a, b) {
    return (a + b);
}

function minus(a, b) {
    return (a - b);
}

function multiply(a, b) {
    return (a * b);
}

function divide(a, b) {
    return (a / b);
}

function calc() {
    var x = parseFloat( document.getElementById("oper1").value );
    var y = document.getElementById("operx").value;
    var z = parseFloat( document.getElementById("oper2").value );


    switch (y) {
        case '0':
            w = plus(x, z);
            break;

        case '1':
            w = minus(x, z);
            break;

        case '2':
            w = multiply(x, z);
            break;

        case '3':
            w = divide(x, z);
            break;

        default:
            w = "Don't really know..";
    }

    document.getElementById("resul").value = w;
}
