const buttons = document.querySelectorAll(".answer");

console.log("found buttons:", buttons.length);

let score = 0;
let answered = false;
let answered02 = false;
let answered03 = false;
const scoreDisplay = document.getElementById("score");
const scoreBox = document.getElementById("score-box");
const feedback = document.getElementById("feedback");
const explanation01 = document.getElementById("explanation-01");
const explanation02 = document.getElementById("explanation-02");
const explanation03 = document.getElementById("explanation-03");
const nextLevelButton = document.getElementById("next-level");
const level01 = document.getElementById("level-01");
const level02 = document.getElementById("level-02");
const buttons02 = document.querySelectorAll(".answer-02");
const feedback02 = document.getElementById("feedback-02");
const finishButton = document.getElementById("finish-level");
const completed = document.getElementById("completed");
const finalScore = document.getElementById("final-score");
const level03 = document.getElementById("level-03");
const buttons03 = document.querySelectorAll(".answer-03");
const feedback03 = document.getElementById("feedback-03");
const completeButton = document.getElementById("complete-challenge");
const progressFill = document.getElementById("progress-fill");
const restartButton = document.getElementById("restart-button");

// LEVEL 01 - SUBNETTING

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
        explanation01.hidden = false;
    });
});

nextLevelButton.addEventListener("click", function(){
    level01.hidden = true;
    level02.hidden = false;
    progressFill.style.width = "66.66%";
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
        explanation02.hidden = false;
    });
});

    // LEVEL 03 - VLSM

buttons03.forEach(function(button){
    button.addEventListener("click", function(){ 
        if (answered03) {
            return;
        }
            answered03 = true;

        const answer = button.textContent.trim();

        if (answer === "192.168.10.128/26") {
            feedback03.textContent = "correct answer";
            feedback03.style.color = "green";
            score +=10;
        } else {
            feedback03.textContent = "wrong answer";
            feedback03.style.color = "red";
            score -=5;
        }

        scoreDisplay.textContent = score;
        feedback03.hidden = false;
        completeButton.hidden = false;
        explanation03.hidden = false;
    });
});
    finishButton.addEventListener("click", function() {
        level02.hidden = true;
        level03.hidden = false;
        progressFill.style.width = "100%";
    });

completeButton.addEventListener("click", function() {
        level03.hidden = true;
        completed.hidden = false;
        finalScore.textContent = score;
        scoreBox.hidden = true;

});

restartButton.addEventListener("click", function() {
    completed.hidden = true;
    level01.hidden = false;

    score = 0;
    answered = false;
    answered02 = false;
    answered03 = false;
    progressFill.style.width = "33.33%";
    scoreDisplay.textContent = 0;
    scoreBox.hidden = true;

    feedback.hidden = true;
    feedback02.hidden = true;
    feedback03.hidden = true;

    explanation01.hidden = true;
    explanation02.hidden = true;

    nextLevelButton.hidden = true;
    finishButton.hidden = true;
    completeButton.hidden = true;

    level02.hidden = true;
    level03.hidden = true;
});