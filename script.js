const money = document.getElementById("money"); 
let tip = null; 
const people = document.getElementById("people"); 
const tipButtons = document.getElementsByClassName("btn"); 
const outputTip = document.getElementById("output_tip"); 
const outputTotal = document.getElementById("output_total"); 

Array.from(tipButtons).forEach((e) => e.addEventListener("click", function(){
    tip = e.textContent.split('%')[0];
    // console.log(tip); 
}));

people.addEventListener("input", renderOutput); 



function renderOutput(){
    // console.log(money.value); 
    // console.log(tip); 
    // console.log(people.value); 
    let value1 = (money.value * tip/100) / people.value;
    let value2 = (money.value / people.value) + value1; 
    outputTip.textContent = value1;
    outputTotal.textContent = value2; 
}