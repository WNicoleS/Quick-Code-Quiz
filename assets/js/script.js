
var timeEl = document.querySelector(".timer");
var timeLeft = 74;

function timer() {
    var timerInterval = setInterval(function() {
        timeLeft--;
        timeEl.textContent = "Time: " + timeLeft;

        if (timeLeft === 0) {
            clearInterval(timerInterval);
            Q1.setAttribute("style", "display: none");
            Q2.setAttribute("style", "display: none");
            Q3.setAttribute("style", "display:none");
            Q4.setAttribute("style", "display: none");
            Q5.setAttribute("style", "display: none");
            allDone.setAttribute("style", "display: block");
        }


        var Q1 = document.querySelector("#Q1");
        var Q2 = document.querySelector("#Q2");
        var Q3 = document.querySelector("#Q3");
        var Q4 = document.querySelector("#Q4");
        var Q5 = document.querySelector("#Q5");

        var correct = document.getElementById("correct");
        var wrong = document.getElementById("wrong");

        var Q1Alerts = document.getElementById("Q1Alerts");
        var Q1Strings = document.getElementById("Q1Strings");
        var Q1Booleans = document.getElementById("Q1Booleans");
        var Q1Numbers = document.getElementById("Q1Numbers");

        var Q2Quotes = document.getElementById("Q2Quotes");
        var Q2Curly = document.getElementById("Q2Curly");
        var Q2Parent = document.getElementById("Q2Parent");
        var Q2Square = document.getElementById("Q2Square");

        var Q3Numbers = document.getElementById("Q3Numbers");
        var Q3Other = document.getElementById("Q3Other");
        var Q3Booleans = document.getElementById("Q3Booleans");
        var Q3All = document.getElementById("Q3All");

        var Q4Commas = document.getElementById("Q4Commas");
        var Q4Curly = document.getElementById("Q4Curly");
        var Q4Quotes = document.getElementById("Q4Quotes");
        var Q4Parent = document.getElementById("Q4Parent");

        var Q5JavaScript = document.getElementById("Q5JavaScript");
        var Q5Term = document.getElementById("Q5Term");
        var Q5For = document.getElementById("Q5For");
        var Q5Console = document.getElementById("Q5Console");


        Q1Alerts.addEventListener("click", function() {

            if (Q1Alerts !== false) {
                Q1.setAttribute("style", "display:none");
                Q2.setAttribute("style", "display: flex");
                correct.setAttribute("style", "display: flex");
            }
        });
        Q1Strings.addEventListener("click", function() {

            if (Q1Alerts !== true) {
                Q1.setAttribute("style", "display:none");
                Q2.setAttribute("style", "display: flex");
                wrong.setAttribute("style", "display: flex");
               
            }
        });
        Q1Booleans.addEventListener("click", function() {

            if (Q1Alerts !== true) {
                Q1.setAttribute("style", "display:none");
                Q2.setAttribute("style", "display: flex");
                wrong.setAttribute("style", "display: flex");
                
            }
        });
        Q1Numbers.addEventListener("click", function() {

            if (Q1Alerts !== true) {
                Q1.setAttribute("style", "display:none");
                Q2.setAttribute("style", "display: flex");
                wrong.setAttribute("style", "display: flex");
                
            }
        });


        Q2Quotes.addEventListener("click", function() {

            if (Q2Parent !== true) {
                Q2.setAttribute("style", "display:none");
                Q3.setAttribute("style", "display:flex"); 
                correct.setAttribute("style", "display: none");
                wrong.setAttribute("style", "display: flex");
                
            }
        });
        Q2Curly.addEventListener("click", function() {

            if (Q2Parent !== true) {
                Q2.setAttribute("style", "display:none");
                Q3.setAttribute("style", "display:flex");
                correct.setAttribute("style", "display: none");
                wrong.setAttribute("style", "display: flex");
                
            }
        });
        Q2Parent.addEventListener("click", function() {

            if (Q2Parent !== false) {
                Q2.setAttribute("style", "display:none");
                Q3.setAttribute("style", "display:flex");
                wrong.setAttribute("style", "display: none");  
                correct.setAttribute("style", "display: flex");
            }
        });
        Q2Square.addEventListener("click", function() {

            if (Q2Parent !== true) {
                Q2.setAttribute("style", "display:none");
                Q3.setAttribute("style", "display:flex");
                correct.setAttribute("style", "display: none");
                wrong.setAttribute("style", "display: flex");
                
            }
        });


        Q3Numbers.addEventListener("click", function() {

            if (Q3All !== true) {
                Q3.setAttribute("style", "display:none");
                Q4.setAttribute("style", "display:flex"); 
                correct.setAttribute("style", "display: none");
                wrong.setAttribute("style", "display: flex");   
                
            }
        });
        Q3Other.addEventListener("click", function() {

            if (Q3All !== true) {
                Q3.setAttribute("style", "display:none");
                Q4.setAttribute("style", "display:flex"); 
                correct.setAttribute("style", "display: none");
                wrong.setAttribute("style", "display: flex");  
                
            }
        });
        Q3Booleans.addEventListener("click", function() {

            if (Q3All !== true) {
                Q3.setAttribute("style", "display:none");
                Q4.setAttribute("style", "display:flex"); 
                correct.setAttribute("style", "display: none");
                wrong.setAttribute("style", "display: flex");
                
            }
        });
        Q3All.addEventListener("click", function() {

            if (Q3All !== false) {
                Q3.setAttribute("style", "display:none");
                Q4.setAttribute("style", "display:flex");  
                wrong.setAttribute("style", "display: none"); 
                correct.setAttribute("style", "display: flex");
            }
        });


        Q4Commas.addEventListener("click", function() {

            if (Q4Quotes !== true) {
                Q4.setAttribute("style", "display:none");
                Q5.setAttribute("style", "display:flex"); 
                correct.setAttribute("style", "display: none");
                wrong.setAttribute("style", "display: flex");   
                
            }
        });
        Q4Curly.addEventListener("click", function() {

            if (Q4Quotes !== true) {
                Q4.setAttribute("style", "display:none");
                Q5.setAttribute("style", "display:flex");
                correct.setAttribute("style", "display: none");
                wrong.setAttribute("style", "display: flex"); 
                   
            }
        });
        Q4Quotes.addEventListener("click", function() {

            if (Q4Quotes !== false) {
                Q4.setAttribute("style", "display:none");
                Q5.setAttribute("style", "display:flex");  
                wrong.setAttribute("style", "display: none"); 
                correct.setAttribute("style", "display: flex");
            }
        });
        Q4Parent.addEventListener("click", function() {

            if (Q4Quotes !== true) {
                Q4.setAttribute("style", "display:none");
                Q5.setAttribute("style", "display:flex");  
                correct.setAttribute("style", "display: none");
                wrong.setAttribute("style", "display: flex");  
            }
        });


        Q5JavaScript.addEventListener("click", function() {

            if (Q5Term !== true) {
                Q5.setAttribute("style", "display:none");
                timeEl.setAttribute("style", "display: none");
                allDone.setAttribute("style", "display: block");
                wrong.setAttribute("style", "display: flex");
                clearInterval(timerInterval);
            }
        });
        Q5Term.addEventListener("click", function() {

            if (Q5Term !== false) {
                Q5.setAttribute("style", "display:none");
                timeEl.setAttribute("style", "display: none");
                allDone.setAttribute("style", "display: block"); 
                wrong.setAttribute("style", "display: none");  
                correct.setAttribute("style", "display: flex");
                clearInterval(timerInterval);
            }
        });
        Q5For.addEventListener("click", function() {

            if (Q5Term !== true) {
                Q5.setAttribute("style", "display:none");
                timeEl.setAttribute("style", "display: none");
                allDone.setAttribute("style", "display: block"); 
                correct.setAttribute("style", "display: none");
                wrong.setAttribute("style", "display: flex"); 
                clearInterval(timerInterval);
            }
        });
        Q5Console.addEventListener("click", function() {

            if (Q5Term !== true) {
                Q5.setAttribute("style", "display:none");
                timeEl.setAttribute("style", "display: none");
                allDone.setAttribute("style", "display: block");
                correct.setAttribute("style", "display: none"); 
                wrong.setAttribute("style", "display: flex");
                clearInterval(timerInterval);
            }
        });
        
    }, 1000);
}
timer();

var allDone = document.querySelector(".all-done");
var scorePage = document.querySelector(".score-page");

var userScore = document.querySelector("#user-score");
var points = document.querySelector("#points");

var input = document.querySelector("#input");
var submitBtn = document.querySelector("#submit-btn");

var highscore = document.querySelector("#highscore");

userScore.textContent = timeLeft;
points.textContent = timeLeft;


submitBtn.addEventListener("click", function() {

    var inputEl = document.querySelector("#input").value;

    if (inputEl !== "") {

        highscore.textContent = inputEl;
        correct.setAttribute("style", "display: none"); 
        wrong.setAttribute("style", "display: none");
        allDone.setAttribute("style", "display: none");
        scorePage.setAttribute("style", "display: block");
    }
});

var clearBtn = document.querySelector("#clear-btn");
var newScore = document.querySelector("newScore");
