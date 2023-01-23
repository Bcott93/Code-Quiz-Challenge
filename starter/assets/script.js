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
// Setting question to 0 for use in the a loop later on
let currentQuestion = 0 
// Setting score
let score = 0

// start quiz
document.getElementById("start").addEventListener("click", startQuiz)

function startQuiz() {
    document.getElementById("start").style.display = "none";
    showQuestion();
    startTimer();
}

// Goes into the questions array and navigates to the current question and finds the data for the loop 
function showQuestion() {
    let question = questions[currentQuestion].question
    let answer = questions[currentQuestion].answers
// check what this does
    document.getElementById("question").innerHTML = question
}





// Enables the answer buttons on the DOM
let choices = document.getElementById("choices")

for (let letter in answers) {
    // Creating the buttons
    let button = document.createElement("button")
    // Adding CSS to the JS
    button.classList.add("button")
    // Labeling each button
    button.value = letter
    // Giving the 
    button.innerHTML = letter + ": " + answers[letter]
    // adding the buttons to the choices tag in HTML
    choices.appendChild(button)
}

function checkAnswer(event) {
    let userAnswer = event.target.value
    let correctAnswer = questions[currentQuestion].correctAnswer

    if (userAnswer === correctAnswer) {
        score ++
    } else {
        timer = timer - 10
    }

    currentQuestion++

    if (currentQuestion === questions.length) {
        endQuiz()
    } else {
        showQuestion()
    }
}

// ADD A COMMENT
function starttimer() {
    setInterval(function() {
       time--
       time.textContent = secondsRemaining

       if(time === 0) {
        endQuiz();
       }
      }, 1000)

}

// endQuiz function removes actions from an element
function endQuiz() {
    clear
}

































// let buttonClick = document.getElementsByClassName("button")

//     for (let i = 0; i < buttonClick.length; i++) {
//         buttonClick[i].addEventListener("click", checkAnswer)
//     }
// }







    







    







