const saveButton = document.getElementById("savebutton");
const condition = document.getElementById("condition");
const playerone = document.getElementById("playerone");
const playertwo = document.getElementById("playertwo");
const numberButtons = document.querySelectorAll(".buttons");
const result = document.querySelector(".result");
const result1 = document.querySelector(".result1");
const playerOneArray = [];
const playerTwoArray = [];
const playeronetext = document.getElementById("playeronetext");
const playertwotext = document.getElementById("playertwotext");
const checkedNumber = document.querySelector(".checkedNumber");
const restartButton = document.getElementById("restartbutton");

const disableAll = () => {
    numberButtons.forEach((nb) => {
        nb.setAttribute("disabled", true);
    })
}
const enableAll = () => {
    numberButtons.forEach((nb) => {
        nb.removeAttribute("disabled");
    })
}

disableAll();

saveButton.addEventListener("click", () => {
    if ((playerone.value < 1 || playerone.value > 15) || (playertwo.value < 1 || playertwo.value > 15)) {
        condition.style.color = "red"
    }
    else {
        playerone.setAttribute("disabled", true);
        playertwo.setAttribute("disabled", true);
        condition.style.color = "#646464";
        saveButton.setAttribute("disabled", true);
        enableAll();
        playeronetext.classList.add('active');
    }
});

const restartGame = () => {
    disableAll();
    playerone.removeAttribute("disabled");
    playertwo.removeAttribute("disabled");
    playerOneArray.length = 0;
    playerTwoArray.length = 0;
    playerone.value = "";
    playertwo.value = "";
    result.innerHTML = "";
    result1.innerHTML = "";
    saveButton.removeAttribute("disabled");
    playeronetext.classList.remove('active');
    playertwotext.classList.remove('active');
    result1.style.fontSize="20px";
    result.style.fontSize="20px";
}


const disableButtonIncludeInArray = (userArray, btn) => {
    if (userArray.includes(btn.value)) {
        btn.setAttribute("disabled", true);
        
    }
}


const disableArrayButton = (playerArray) => {
    numberButtons.forEach((btn) => {
        if (playerArray.length > 0) {
            for (let i = 0; i < playerArray.length; i++) {
                if (playerArray.includes(btn.value)) {
                    btn.setAttribute("disabled", true);
                }
            }
        }
    })
}

numberButtons.forEach((b) => {
    b.addEventListener("click", () => {

        if (playertwotext.classList.contains('active')) {
            
            if (playerone.value === b.value) {
                result1.style.fontSize="50px";
                result1.innerHTML = "Player 1 wins! Player 2 loses";
                disableAll();
            } else {
                playerTwoArray.push(b.value);
                result1.innerHTML = `Player 2 numbers : ${playerTwoArray}`;
                playeronetext.classList.add('active');
                playertwotext.classList.remove('active');
                enableAll();
                disableArrayButton(playerOneArray);
            }
        } else if (playeronetext.classList.contains('active')) {
            
            if (playertwo.value === b.value) {
                result.style.fontSize="50px";
                result.innerHTML = "Player 2 wins! Player 1 loses";
                disableAll();
            } else {
                playerOneArray.push(b.value);
                result.innerHTML = `Player 1 numbers : ${playerOneArray}`;
                playeronetext.classList.remove('active');
                playertwotext.classList.add('active');
                enableAll();
                disableArrayButton(playerTwoArray);
            }
        }
    })
});

restartButton.addEventListener("click", () => {
    restartGame();
});



