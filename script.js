
// elements
const coin = document.querySelector('.coin');
const flipButton = document.getElementById('flipButton');
const result = document.querySelector('.result');

// functions
const randomCoin = () => {
    const random = Math.random();
    const img = coin.querySelector('img');
    if (random < 0.5) {
        img.src = 'img/heads.svg';
        result.textContent = 'heads';
    } else {
        img.src = 'img/tails.svg';
        result.textContent = 'tails';
    }
    coin.classList.remove('flipping');
    console.log("randomCoin = " + result.textContent);
}

const resetResult = () => {
    console.log("resetResult");
    if (result.textContent !== '---') {
        result.textContent = '---';
    }
}

const flipAnimation = () => {
    coin.classList.add('flipping');
    console.log(coin.classList);
}

const flipCoin = () => {
    resetResult();
    flipAnimation();
    setTimeout(() => {
        randomCoin();
        console.log(coin.classList);
    }, 1000);
}

// events
flipButton.addEventListener('click', flipCoin);
coin.addEventListener('click', flipCoin);

