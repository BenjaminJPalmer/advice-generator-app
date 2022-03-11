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

function handleFirstTab(e) {
    if (e.keyCode === 9) { // the "I am a keyboard user" key
        document.body.classList.add('user-is-tabbing');
        window.removeEventListener('keydown', handleFirstTab);
    }
}

window.addEventListener('keydown', handleFirstTab);

window.onload = () => {
    newQuote();
    };