let numSpan = document.getElementById('num');
let adviceText = document.querySelector('.my-advice');
let diceBtn = document.querySelector('.dice');

async function getAdvice() {
   let response = await fetch('https://api.adviceslip.com/advice');
   let data = await response.json();
   numSpan.textContent = data.slip.id;
   adviceText.textContent = data.slip.advice;
}

diceBtn.addEventListener('click',function(){
    getAdvice();
});