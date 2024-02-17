
function continueGame() {
    const alphabet = getARandomAlphabet();

    const currentAlphabetElement = document.getElementById('current-alphabet');

    currentAlphabetElement.innerText = alphabet;
    setBackgroundColorById(alphabet);

}

function handleKeyboardKeyUpEvent(e) {
    const playerPressed = e.key;
    const currentAlphabetElement = document.getElementById('current-alphabet');

    const tergetAlphabetElement = currentAlphabetElement.innerText;
    const expectedAlphabet = tergetAlphabetElement.toLowerCase();
    console.log(playerPressed, expectedAlphabet);

    if (playerPressed === expectedAlphabet) {
        console.log('You got point');

        const currentScoreElement = document.getElementById('current-score');
        const currentScoreText = currentScoreElement.innerText;
        const currentScore = parseInt(currentScoreText);

        const newScore = currentScore + 1;
        currentScoreElement.innerText = newScore;

        removeBackgroundColorById(expectedAlphabet);
        continueGame();
    }
    else {
        console.log('You are loser');
        const currentLifeElement = document.getElementById('current-life');
        const currentLifeText = currentLifeElement.innerText;
        const currentLife = parseInt(currentLifeText);

        const newLife = currentLife - 1;
        
        currentLifeElement.innerText = newLife;
    }
}

document.addEventListener('keyup', handleKeyboardKeyUpEvent);


function play() {
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame();

}





