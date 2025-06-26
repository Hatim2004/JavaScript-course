console.log(Number.MIN_VALUE);
console.log(Number.MAX_SAFE_INTEGER)
console.log(Number.MIN_SAFE_INTEGER)

console.log(Number.isInteger(1.2))
console.log(Number.isNaN("hi"-2))
 
console.log(Math.pow(2,2));
console.log(Math.PI);


function calculate(){
    let input = Number(document.getElementById("input").value);
    let output = document.getElementById("output");
    output.innerHTML = input * 0.025 + " ريال";
}