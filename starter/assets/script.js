// Quiz questions, set up as objects within an array. Allowing for easy access. 
const questions = [
    {
        question: "What code is most likely used to allow you to interact with this quiz?",
        answers: {
            a: "HTML",
            b: "JavaScript",
            c: "CSS"
        },

        correctAnswer: "b"
    },
    {
        question: "Learning to code is most similar to...",
        answers: {
            a: "Learning a language",
            b: "Drinking a coffee",
            c: "Parellel parking"
        },
        correctAnswer: "a"
    },
    {
        question: "What would is the correct syntax for a for loop?",
        answers: {
            a: "let i = 0; i < arr.length; i++",
            b: "const i = 0; i++, i > arr.length; i++",
            c: "var i = 0; i > arr.length; i++"
        }
        correctAnswer: "a"
    },
    {   
        question: "What is the correct definition of Const?",
        answers: {
            a: "Always showing up for work on time",
            b: "A variable that can be amended as you continue through the document",
            c: "A variable which is unchangeable"
        }
        correctAnswer: "c"
    },
    {
        question: "What are these characters called '{}'?",
        answers: {
            a: "Doorways",
            b: "Curley Braces",
            c: "Apostrophe"
        },
        correctAnswer: "b"
    }]

// Selects time 
let time = document.querySelector("#time")
// Selects start
let start = document.querySelector("#start")
// Sets the start of the timer
let secondsRemaining = 60
// Shows the remaining time
time.textContent = secondsRemaining
// Setting question to 0 for use in the forloop later on
let currentQuestion = 0 
// Setting score
let score = 0

// start quiz
document.getElementById("start").addEventListener("click", startQuiz)

function starttimer() {
    setInterval(function() {
        time--;
       time.textContent = secondsRemaining
    })

}

function startQuiz() {
    document.getElementById("start").style.display = "none";
    showQuestion();
    startTimer();
}

function showQuestion






    







    



const answers = ["Answer 1", "Answer 2", "Answer 3", "Answer 4", "Answer 5"]



