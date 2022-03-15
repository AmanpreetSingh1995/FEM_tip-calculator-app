const money = document.getElementById("money"); 
let tip = null; 
const people = document.getElementById("people"); 
const tipButtons = document.querySelectorAll(".card_tip > button"); 
const outputTip = document.getElementById("output_tip"); 
const outputTotal = document.getElementById("output_total"); 
const customTip = document.getElementById('tip-input');

Array.from(tipButtons).forEach((e) => e.addEventListener("click", function(){
    tip = e.textContent.split('%')[0];
    renderOutput(); 
}));

customTip.addEventListener("input", () => {
    tip = customTip.value; 
    renderOutput();
})

people.addEventListener("input", renderOutput); 

function renderOutput(){
    if (money.value.length > 0 && tip !== null && people.value.length > 0){
        console.log(tip); 
        let value1 = (money.value * tip/100) / people.value;
        let value2 = (money.value / people.value) + value1; 
        outputTip.textContent = value1;
        outputTotal.textContent = value2; 
    }
}