const buttons = document.querySelectorAll(".answer");

console.log("found buttons:", buttons.length);

let score = 0;
let answered = false;
const scoreDisplay = document.getElementById("score");
const scoreBox = document.getElementById("score-box");
const feedback = document.getElementById("feedback");
const nextLevelButton = document.getElementById("next-level");



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
    alert("welcome to level 02!");
});