const adviceId = document.getElementById("adviceId");
const advice = document.getElementById("advice");

function newQuote() { 
    fetch("https://api.adviceslip.com/advice")
        .then(response => response.json())
        .then(data => {
            adviceId.textContent = `${data.slip.id}`;
            advice.textContent = `"${data.slip.advice}"`;
        });
    };
    
window.onload = () => {
    newQuote();
    };