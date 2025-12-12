const btnEl=document.getElementById("btn")
const bmiInputEl = document.getElementById("bmi-result")
const weightcond=document.getElementById("weight-condition")
function calculateBMI(){
     const heightvalue=document.getElementById("height").value /100
     const weightvalue=document.getElementById("Weight").value
     if (heightvalue <= 0 || weightvalue <= 0) {
         alert("Please enter valid height and weight values.");
         return;
     }
     const bmivalue = weightvalue /(heightvalue*heightvalue)
     const roundedBMI = bmivalue.toFixed(2);
     bmiInputEl.style.animation = 'none';
     bmiInputEl.offsetHeight;
     bmiInputEl.style.animation = 'pulse 1s ease';
     bmiInputEl.value = roundedBMI;
     weightcond.style.opacity = '0';
     weightcond.style.transform = 'translateY(10px)';
     
     if(bmivalue<18.5){
        weightcond.innerText=" Under Weight"
        weightcond.style.color = "#3498db";
     }else if(bmivalue>=18.5 && bmivalue<=24.9){
        weightcond.innerText=" Normal Weight"
        weightcond.style.color = "#2ecc71";
     }else if(bmivalue>=25 && bmivalue<=29.9){
        weightcond.innerText=" Overweight"
        weightcond.style.color = "#f39c12";
     }else if(bmivalue>=30){
        weightcond.innerText=" Obesity"
        weightcond.style.color = "#e74c3c";
     }
     setTimeout(() => {
         weightcond.style.opacity = '1';
         weightcond.style.transform = 'translateY(0)';
         weightcond.style.transition = 'all 0.5s ease';
     }, 100);
     btnEl.style.transform = 'scale(0.95)';
     setTimeout(() => {
         btnEl.style.transform = 'scale(1)';
     }, 150);
}
document.getElementById("height").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        calculateBMI();
    }
});
document.getElementById("Weight").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        calculateBMI();
    }
});
const inputs = document.querySelectorAll('.input');
inputs.forEach(input => {
    input.addEventListener('input', function() {
        if (this.value < 0) {
            this.style.borderColor = '#e74c3c';
            this.style.boxShadow = '0 0 10px rgba(231, 76, 60, 0.3)';
        } else {
            this.style.borderColor = 'rgba(255,255,255,0.4)';
            this.style.boxShadow = 'none';
        }
    });
});
btnEl.addEventListener("click",calculateBMI)
window.addEventListener('load', function() {
    document.querySelector('.container').style.opacity = '0';
    document.querySelector('.container').style.transform = 'translateY(20px)';
    setTimeout(() => {
        document.querySelector('.container').style.transition = 'all 0.8s ease';
        document.querySelector('.container').style.opacity = '1';
        document.querySelector('.container').style.transform = 'translateY(0)';
    }, 100);
});