/* becode/javascript
 *
 * /06-objects/01-generate-object/script.js - 6.1: générer un object
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.
function Person(name, attitude, age, wine) {
    this.name = name;
    this.attitude = attitude;
    this.age = age;
    this.wine = wine;
}

let person01 = new Person("Flof", "cool", 25, "red");
console.log(person01)