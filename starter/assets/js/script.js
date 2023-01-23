// Quiz questions, set up as objects within an array. Allowing for easy access. 
const questions = [
    {
        question: "What code has most likely been used to allow you to interact with this quiz?",
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
        },
        correctAnswer: "a"
    },
    {   
        question: "What is the correct definition of Const?",
        answers: {
            a: "Always showing up for work on time",
            b: "A variable that can be amended as you continue through the document",
            c: "A variable which is unchangeable"
        },
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


let time = document.querySelector("#time") // Timer display 
let start = document.querySelector("#start") // Start Button
let secondsRemaining = 60 // Sets the start of the timer
time.textContent = secondsRemaining // Shows the remaining time
let currentQuestion = 0  // Setting question to 0 for use in the a loop later on
let score = 0 // Setting score
let startScreen = document.getElementById("start-screen")
let questionDiv = document.getElementById("questions"); // Question Div
let questionTitle = document.getElementById("question-title"); // Set the questions to the title
let clearPrev = document.getElementById("choices") // Removes previous choices from the quiz

// start quiz
document.getElementById("start").addEventListener("click", startQuiz)

function startQuiz() {
    showQuestion()
    startTimer()
    displayQuestions()
}


function displayQuestions() {
    startScreen.classList.add("hide")
    questionDiv.classList.remove("hide")
}


// Goes into the questions array and navigates to the current question and finds the data for the loop 
function showQuestion() {
    let question = questions[currentQuestion].question
    let answer = questions[currentQuestion].answers
    questionTitle.textContent = question
    clearPrev.innerHTML = ""
    
    // Enables the answer buttons on the DOM
    let choices = document.getElementById("choices")

    for (let letter in answer) {
    // Creating the buttons
    let button = document.createElement("answer-button")
    // Adding CSS to the JS
    button.classList.add("answer-button")
    // Labeling each button
    button.value = letter
    // Giving the buttons text
    button.innerHTML = letter + ": " + answer[letter]
    // adding the buttons to the choices tag in HTML
    choices.appendChild(button)
    // Triggers the check answer function when clicked
    button.addEventListener("click", checkAnswer)
    }
}

function checkAnswer(event) {
    let userAnswer = event.target.value
    let correctAnswer = questions[currentQuestion].correctAnswer

    if (userAnswer === correctAnswer) {
        score ++
    } else {
        secondsRemaining = secondsRemaining - 10
    }

    if (currentQuestion === questions.length - 1) {
        endQuiz()
    } else {
        currentQuestion++
        showQuestion()
    }
}

// ADD A COMMENT
function startTimer() {
    setInterval(function() {
       secondsRemaining--
       time.textContent = secondsRemaining

       if(secondsRemaining === 0) {
        clearInterval(time)
        endQuiz()
       }
      }, 1000)

}

// endQuiz function removes actions from an element
function endQuiz() {
    clearInterval(time)
}

































// let buttonClick = document.getElementsByClassName("button")

//     for (let i = 0; i < buttonClick.length; i++) {
//         buttonClick[i].addEventListener("click", checkAnswer)
//     }
// }







    







    







