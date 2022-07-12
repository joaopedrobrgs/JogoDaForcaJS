const data = [
    word001 = {
        name: "IRLANDA",
        category: "LUGARES"
    },
    word002 = {
        name: "EQUADOR",
        category: "LUGARES"
    },
    word003 = {
        name: "CHILE",
        category: "LUGARES"
    },
    word004 = {
        name: "INDONESIA",
        category: "LUGARES"
    },
    word005 = {
        name: "MALDIVAS",
        category: "LUGARES"
    },
    word006 = {
        name: "INGLATERRA",
        category: "LUGARES"
    },
    word007 = {
        name: "GROELANDIA",
        category: "LUGARES"
    },
    word008 = {
        name: "UZBEQUISTAO",
        category: "LUGARES"
    },
    word009 = {
        name: "INDONESIA",
        category: "LUGARES"
    },
    word010 = {
        name: "CREGUENHEM",
        category: "LUGARES"
    },
    word011 = {
        name: "BICICLETA",
        category: "TRANSPORTE"
    },
    word012 = {
        name: "LANCHA",
        category: "TRANSPORTE"
    },
    word013 = {
        name: "NAVIO",
        category: "TRANSPORTE"
    },
    word014 = {
        name: "TELEFERICO",
        category: "TRANSPORTE"
    },
    word015 = {
        name: "MOTOCICLETA",
        category: "TRANSPORTE"
    },
    word016 = {
        name: "BARCO",
        category: "TRANSPORTE"
    },
    word017 = {
        name: "AERONAVE",
        category: "TRANSPORTE"
    },
    word018 = {
        name: "TREM",
        category: "TRANSPORTE"
    },
    word019 = {
        name: "CAIAQUE",
        category: "TRANSPORTE"
    },
    word020 = {
        name: "FUNICULAR",
        category: "TRANSPORTE"
    },
    word021 = {
        name: "XICARA",
        category: "OBJETOS"
    },
    word022 = {
        name: "MOEDA",
        category: "OBJETOS"
    },
    word023 = {
        name: "ESPARADRAPO",
        category: "OBJETOS"
    },
    word024 = {
        name: "SINO",
        category: "OBJETOS"
    },
    word025 = {
        name: "CHUVEIRO",
        category: "OBJETOS"
    },
    word026 = {
        name: "TAMBORETE",
        category: "OBJETOS"
    },
    word027 = {
        name: "LAMPADA",
        category: "OBJETOS"
    },
    word028 = {
        name: "BOCAL",
        category: "OBJETOS"
    },
    word029 = {
        name: "CORTINA",
        category: "OBJETOS"
    },
    word030 = {
        name: "LAPIS",
        category: "OBJETOS"
    },
    word031 = {
        name: "MELANCIA",
        category: "ALIMENTOS"
    },
    word032 = {
        name: "AMENDOIM",
        category: "ALIMENTOS"
    },
    word033 = {
        name: "ESFIRRA",
        category: "ALIMENTOS"
    },
    word034 = {
        name: "GOROROBA",
        category: "ALIMENTOS"
    },
    word035 = {
        name: "JANTAR",
        category: "ALIMENTOS"
    },
    word036 = {
        name: "SABOROSO",
        category: "ALIMENTOS"
    },
    word037 = {
        name: "DESJEJUM",
        category: "ALIMENTOS"
    },
    word038 = {
        name: "MASTIGAR",
        category: "ALIMENTOS"
    },
    word039 = {
        name: "ENGOLIR",
        category: "ALIMENTOS"
    },
    word040 = {
        name: "DOCERIA",
        category: "ALIMENTOS"
    },
    word040 = {
        name: "DRAGAO",
        category: "ANIMAIS"
    },
    word041 = {
        name: "GALINHA",
        category: "ANIMAIS"
    },
    word042 = {
        name: "PAVAO",
        category: "ANIMAIS"
    },
    word043 = {
        name: "CAMELO",
        category: "ANIMAIS"
    },
    word044 = {
        name: "PERU",
        category: "ANIMAIS"
    },
    word045 = {
        name: "ZEBRA",
        category: "ANIMAIS"
    },
    word046 = {
        name: "DROMEDARIO",
        category: "ANIMAIS"
    },
    word047 = {
        name: "CALANGO",
        category: "ANIMAIS"
    },
    word048 = {
        name: "SAGUI",
        category: "ANIMAIS"
    },
    word049 = {
        name: "LAGARTIXA",
        category: "ANIMAIS"
    },
    word050 = {
        name: "HIPOPOTAMO",
        category: "ANIMAIS"
    }
];

var gamepad = document.getElementById('gamepad');
var playAgainButton = document.getElementById('playAgainButton');

gamepad.addEventListener('click', playAgain);
playAgainButton.addEventListener('click', playAgain);

function playAgain() {

    document.location.reload(true)

}

var index;
var wordChosen;
var categoryWrite = document.getElementById('category');
var wordLettersContainer = document.getElementById('wordLettersContainer')
var wordLettersArray = [];
var letterClicked;
var allLettersClicked = [];
var checkAnswer = false;

var forca = document.getElementById('forca');
var keyboardLetters = document.querySelectorAll('.keyboardLetters');
var wrongAnswers = document.getElementById('wrongAnswers');

var gameOverScreen = document.getElementById('gameOverScreen');
var gameOverMessage = document.getElementById('gameOverMessage');

iniciateGame();

function iniciateGame() {

    var forcaIndex = 6;

    index = Math.floor(Math.random() * data.length);

    wordChosen = data[index];

    categoryWrite.innerHTML = wordChosen.category;

    for (let wordLetter of wordChosen.name) {

        wordLettersArray.push(wordLetter);

        let wordLettersWrite = document.createElement('div');
        wordLettersWrite.classList.add('wordLettersWrite');
        wordLettersWrite.id = wordLetter;
        wordLettersContainer.appendChild(wordLettersWrite);

        wordLettersWrite.innerHTML = wordLetter;
        wordLettersWrite.style.fontSize = '0px';

        playerAttempt(wordLettersWrite, forcaIndex);

    }

}

function playerAttempt(wordLettersWrite, forcaIndex) {

    for (let letter of keyboardLetters) {
        letter.addEventListener('click', keyboardFunction);

        function keyboardFunction(event) {
            letterClicked = event.target.innerHTML;

            if (letterClicked == wordLettersWrite.id) {
                allLettersClicked.push(letterClicked);
                letter.style.backgroundColor = 'green';
                wordLettersWrite.style.fontSize = '20px';
                checkAnswer = true;
            }

            setTimeout(function () {
                if (letterClicked !== wordLettersWrite.id && checkAnswer !== true) {
                    letter.style.backgroundColor = 'red';
                    forcaIndex--;
                }
            }, 50);

            setTimeout(function () {
                wrongAnswers.innerHTML = forcaIndex;
                refreshForca(forca, forcaIndex);
                letter.removeEventListener('click', keyboardFunction);
                checkAnswer = false;
                checkGameOver(forcaIndex);
            }, 100);
        }
    }
}

function refreshForca(forca, forcaIndex) {

    if (forcaIndex == 5) {
        forca.src = './images/forca1.png'
    } else if (forcaIndex == 4) {
        forca.src = './images/forca2.png'
    } else if (forcaIndex == 3) {
        forca.src = './images/forca3.png'
    } else if (forcaIndex == 2) {
        forca.src = './images/forca4.png'
    } else if (forcaIndex == 1) {
        forca.src = './images/forca5.png'
    } else if (forcaIndex == 0) {
        forca.src = './images/forca6.png'
    }

}

function checkGameOver(forcaIndex) {

    if (allLettersClicked.length == wordLettersArray.length) {
        setTimeout(function () {
            gameOverScreen.style.display = 'flex';
            gameOverMessage.innerHTML = 'Parabéns, você concluiu o jogo!'
        }, 150);
    };

    if (forcaIndex == 0) {
        setTimeout(function () {
            gameOverScreen.style.display = 'flex';
            gameOverMessage.innerHTML = 'Que pena, não foi dessa vez!'
        }, 150);
    };
}




