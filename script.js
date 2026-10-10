const buttons = document.querySelectorAll(".answer");

console.log("found buttons:", buttons.length);

let score = 0;
let answered = false;
const scoreDisplay = document.getElementById("score");
const scoreBox = document.getElementById("score-box");
const feedback = document.getElementById("feedback");
const nextLevelButton = document.getElementById("next-level");
const level01 = document.getElementById("level-01");
const level02 = document.getElementById("level-02");
const buttons02 = document.querySelectorAll(".answer-02");
const feedback02 = document.getElementById("feedback-02");


buttons.forEach(function(button) {
    button.addEventListener("click", function() {
        if (answered) {
            return;
    }
    answered = true;

        const answer = Number(button.textContent);
        
      
        if (answer === 62) {
            feedback.textContent = "correct answer";
            feedback.style.color = "green";
            score +=10;
        } else {
            feedback.textContent = "wrong answer";
            feedback.style.color = "red";
            score -=5;
        }

        scoreDisplay.textContent = score;
        scoreBox.hidden = false;
        feedback.hidden = false;
        nextLevelButton.hidden = false;
    });
});

nextLevelButton.addEventListener("click", function(){
    level01.hidden = true;
    level02.hidden = false;
});

//LEVEL 02 - NETWORK ADDRESS

buttons02.forEach(function(button){
    button.addEventListener("click", function() {
        const answer = button.textContent.trim();

        if (answer === "192.168.1.64") {
            feedback.textContent = "correct answer";
            feedback.style.color = "green";
            score +=10;
        } else {
            feedback02.textContent = "wrong answer";
            feedback02.style.color = "red";
            score -=5;
        }

        scoreDisplay.textContent = score;
        feedback02.hidden = false;
    });
});

//udělat anticheat, atd...