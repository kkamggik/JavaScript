const RANDOM_QUOTE_API = 'https://api.quotable.io/random';
const quoteDisplayElement = document.getElementById('quoteDisplay');
const quoteInputElement = document.getElementById('quoteInput');
const timerElement = document.getElementById('timer')

quoteInputElement.addEventListener('input', () => {
    const arrayQuote = quoteDisplayElement.querySelectorAll('span')
    const arrayValue = quoteInputElement.value.split('')
    let correct = true;
    arrayQuote.forEach((characterSpan, index) => {
        const character = arrayValue[index];
        if (character == null) {
            correct = false
            characterSpan.classList.remove('correct')
            characterSpan.classList.remove('incorrect')
        }
        else if (character === characterSpan.innerText) {
            characterSpan.classList.add('correct')
            characterSpan.classList.remove('incorrect')
        } else {
            correct = false
            characterSpan.classList.add('incorrect')
            characterSpan.classList.remove('correct')
        }
    })
    if (correct) getNextQuote();
})

function getRandomQuote() {
    return fetch(RANDOM_QUOTE_API)
        .then(response => response.json())
        .then(data => data.content)
}

async function getNextQuote() {
    const quote = await getRandomQuote();
    quoteDisplayElement.innerText = '';
    quote.split('').forEach(c => {
        const characterSpan = document.createElement('span')
        characterSpan.innerText = c
        quoteDisplayElement.appendChild(characterSpan)
    })
    quoteInputElement.value = null;
    startTimer();
}
let startTime
function startTimer() {
    timerElement.innerText = 0; 
    startTime = new Date();
    setInterval(() => {
        timer.innerText = getTimerTime();
    },1000)
}
function getTimerTime() {
    return Math.floor((new Date() - startTime) / 1000)
}

getNextQuote();