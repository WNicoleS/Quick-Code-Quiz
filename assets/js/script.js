
var timeEl = document.querySelector(".timer");
var timeLeft = 74;

function timer() {
    var timerInterval = setInterval(function() {
        timeLeft--;
        timeEl.textContent = "Time: " + timeLeft;


        var userScore = document.querySelector("#user-score");
        var points = document.querySelector("#points");

        userScore.textContent = timeLeft;
        points.textContent = timeLeft;


        var Q1 = document.querySelector("#Q1");
        var Q2 = document.querySelector("#Q2");
        var Q3 = document.querySelector("#Q3");
        var Q4 = document.querySelector("#Q4");
        var Q5 = document.querySelector("#Q5");

        var correct = document.getElementById("correct");
        var wrong = document.getElementById("wrong");

        var Q1Strings = document.getElementById("Q1Strings");
        var Q1Booleans = document.getElementById("Q1Booleans");
        var Q1Alerts = document.getElementById("Q1Alerts");
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


        if (timeLeft === 0) {
            clearInterval(timerInterval);
            Q1.setAttribute("style", "display: none");
            Q2.setAttribute("style", "display: none");
            Q3.setAttribute("style", "display:none");
            Q4.setAttribute("style", "display: none");
            Q5.setAttribute("style", "display: none");
            allDone.setAttribute("style", "display: block");
        }


        Q1Strings.addEventListener("click", function() {

            if (Q1Alerts !== true) {
                Q1.setAttribute("style", "display:none");
                Q2.setAttribute("style", "display: flex");
                wrong.setAttribute("style", "display: flex");
                timeLeft --- 20;
            }
        });
        Q1Booleans.addEventListener("click", function() {

            if (Q1Alerts !== true) {
                Q1.setAttribute("style", "display:none");
                Q2.setAttribute("style", "display: flex");
                wrong.setAttribute("style", "display: flex");
                timeLeft --- 20;
            }
        });
        Q1Alerts.addEventListener("click", function() {

            if (Q1Alerts !== false) {
                Q1.setAttribute("style", "display:none");
                Q2.setAttribute("style", "display: flex");
                correct.setAttribute("style", "display: flex");
            }
        });
        Q1Numbers.addEventListener("click", function() {

            if (Q1Alerts !== true) {
                Q1.setAttribute("style", "display:none");
                Q2.setAttribute("style", "display: flex");
                wrong.setAttribute("style", "display: flex");
                timeLeft --- 20;
            }
        });


        Q2Quotes.addEventListener("click", function() {

            if (Q2Parent !== true) {
                Q2.setAttribute("style", "display:none");
                Q3.setAttribute("style", "display:flex"); 
                correct.setAttribute("style", "display: none");
                wrong.setAttribute("style", "display: flex");
                timeLeft --- 20;
            }
        });
        Q2Curly.addEventListener("click", function() {

            if (Q2Parent !== true) {
                Q2.setAttribute("style", "display:none");
                Q3.setAttribute("style", "display:flex");
                correct.setAttribute("style", "display: none");
                wrong.setAttribute("style", "display: flex");
                timeLeft --- 20;
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
                timeLeft --- 20;
            }
        });


        Q3Numbers.addEventListener("click", function() {

            if (Q3All !== true) {
                Q3.setAttribute("style", "display:none");
                Q4.setAttribute("style", "display:flex"); 
                correct.setAttribute("style", "display: none");
                wrong.setAttribute("style", "display: flex");   
                timeLeft --- 20;
            }
        });
        Q3Other.addEventListener("click", function() {

            if (Q3All !== true) {
                Q3.setAttribute("style", "display:none");
                Q4.setAttribute("style", "display:flex"); 
                correct.setAttribute("style", "display: none");
                wrong.setAttribute("style", "display: flex");  
                timeLeft --- 20;
            }
        });
        Q3Booleans.addEventListener("click", function() {

            if (Q3All !== true) {
                Q3.setAttribute("style", "display:none");
                Q4.setAttribute("style", "display:flex"); 
                correct.setAttribute("style", "display: none");
                wrong.setAttribute("style", "display: flex");
                timeLeft --- 20;
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
                timeLeft --- 20;
            }
        });
        Q4Curly.addEventListener("click", function() {

            if (Q4Quotes !== true) {
                Q4.setAttribute("style", "display:none");
                Q5.setAttribute("style", "display:flex");
                correct.setAttribute("style", "display: none");
                wrong.setAttribute("style", "display: flex"); 
                timeLeft --- 20;
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
                timeLeft --- 20;
            }
        });


        Q5JavaScript.addEventListener("click", function() {

            if (Q5Term !== true) {
                Q5.setAttribute("style", "display:none");
                timeEl.setAttribute("style", "display: none");
                allDone.setAttribute("style", "display: block");
                wrong.setAttribute("style", "display: flex");
                clearInterval(timerInterval);
                timeLeft --- 20;
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
                timeLeft --- 20;
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
                timeLeft --- 20;
            }

        });
    }, 1000);
}
timer();

var allDone = document.querySelector(".all-done");
var scorePage = document.querySelector(".score-page");

var input = document.querySelector("#input");
var submitBtn = document.querySelector("#submit-btn");
var clearBtn = document.querySelector("#clear-btn");
var highscore = document.querySelector("#highscore");

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

clearBtn.addEventListener("click", function() {

    var newScore = document.getElementById("newScore");
    newScore.remove();
});
