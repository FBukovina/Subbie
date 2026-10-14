const buttons = document.querySelectorAll(".answer");

console.log("found buttons:", buttons.length);

let score = 0;
let answered = false;
let answered02 = false;
const scoreDisplay = document.getElementById("score");
const scoreBox = document.getElementById("score-box");
const feedback = document.getElementById("feedback");
const nextLevelButton = document.getElementById("next-level");
const level01 = document.getElementById("level-01");
const level02 = document.getElementById("level-02");
const buttons02 = document.querySelectorAll(".answer-02");
const feedback02 = document.getElementById("feedback-02");
const finishButton = document.getElementById("finish-level");
const completed = document.getElementById("completed");
const finalScore = document.getElementById("final-score");

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

        if (answered02) {
            return;
        }
            answered02 = true;

        const answer = button.textContent.trim();

        if (answer === "192.168.1.64") {
            feedback02.textContent = "correct answer";
            feedback02.style.color = "green";
            score +=10;
        } else {
            feedback02.textContent = "wrong answer";
            feedback02.style.color = "red";
            score -=5;
        }

        scoreDisplay.textContent = score;
        feedback02.hidden = false;
        finishButton.hidden = false;
    });

    finishButton.addEventListener("click", function() {
        level02.hidden = true;
        completed.hidden = false;
        finalScore.textContent = score;
        scoreBox.hidden = false;
    });
});

//pak level 3 yayyyy