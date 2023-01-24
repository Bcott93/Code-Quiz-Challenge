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


let currentQuestion = 0  // Setting question to 0 for use in the a loop later on
let clearPrev = document.getElementById("choices") // Sets variable to enable clearing of previous questions

let score = 0 // Setting score
let scoreDisplay = document.getElementById("final-score") // Display score
// let highscoreSubmit = document.getElementById("submit") // Sets a variable to save scores to the localstorage
// let userHighscore = [] // Sets a variable to an array. Ready for their initials and score

let initials = document.getElementById("initials.value") // Access to where the user enters their initials. 

let startScreen = document.getElementById("start-screen") // Access to the start screen in HTML
let endScreen = document.getElementById("end-screen") // Access to the end screen in HTML
let questionScreen = document.getElementById("questions") // // Access to the question screen in HTML
let questionTitle = document.getElementById("question-title") // Set the questions to the title

let timerInterval  // Setting variable for timer
let secondsRemaining = questions.length*15 // Sets timer for 15 seconds per question. Allowing for additional questions in the future
time.textContent = secondsRemaining // Displays the timer

// start quiz
function startQuiz() {
    showQuestion()
    startTimer()
    displayQuestions()
}

// Hides start screen and opens question screen
function displayQuestions() {
    startScreen.classList.add("hide")
    questionScreen.classList.remove("hide")
}


// Goes into the questions array, navigates to the current question and finds the data for the loop 
function showQuestion() {
    let question = questions[currentQuestion].question
    let answer = questions[currentQuestion].answers
    
    //sets the title of the page to the current question
    questionTitle.textContent = question
    
    //sets the choices div to an empty string. Removing previous questions.
    clearPrev.innerHTML = ""
    
    // Enables the answer buttons on the DOM
    let choices = document.getElementById("choices")

    for (let letter in answer) {
    // Creating the buttons
    let button = document.createElement("answer-button")
    // Adding CSS to the JS
    button.classList.add("answer-button")
    // Assigning the answer to the button
    button.value = letter
    // Assigning the relevant text for the user
    button.innerHTML = letter + ": " + answer[letter]
    // adding the buttons to the choices tag in HTML
    choices.appendChild(button)
    // Triggers the check answer function when clicked
    button.addEventListener("click", checkAnswer)
    }
}


function checkAnswer(event) {
    // once a button is clicked, it checks its value and sets that to the userAnswer variable
    let userAnswer = event.target.value
    // Checks what the correct answer to the relevant question is
    let correctAnswer = questions[currentQuestion].correctAnswer
    // Checks if the user was correct. If so, adds 10 score and 10 seconds. If not, they lose 10 seconds and 10 score. 
    if (userAnswer === correctAnswer) {
        score = score +10
        secondsRemaining = secondsRemaining + 10
    } else {
        secondsRemaining = secondsRemaining - 10
        score = score - 10
    }
    // Checks if there is another question and then shows it, if there isn't, it ends quiz. 
    if (currentQuestion === questions.length - 1) {
        endQuiz()
    } else {
        currentQuestion++
        showQuestion()
    }
}

// Reduces the timer by 1 each second. Once the timer equals 0, the quiz ends. 
function startTimer() {
    timer = setInterval(function() {
       secondsRemaining--
       time.textContent = secondsRemaining

       if(secondsRemaining === 0) {
        clearInterval(timer)
        endQuiz()
       }
      }, 1000)

}

function endQuiz() {
    // Hides the question screen
    questionScreen.classList.add("hide")
    // Shows the end screen
    endScreen.classList.remove("hide")
    // Displays the users score
    scoreDisplay.textContent = score
    // Ends the timer
    clearInterval(timer)
}

// if (!initials) {
//     alert("Enter your initials to be immortalised as a HIGHSCORER on our Code Quiz Challenge!")
    
// } else {
//     let savedHighscores = JSON.parse(window.localStorage.getItem("savedHighscores")) || []
// }

// userHighscore = {
//     initials: initials,
//     score: scoreDisplay
//     }

// savedHighscores.push(userHighscore)

// window.localStorage.setItem("savedHighscores", JSON.stringify(userHighscore))

// window.location.href = "highscores.html"

// function submitEnter(event) {
//     if (event.key === "Enter") {
//       saveScore();
//     }
//   }

// Runs the quiz once the start button has been selected
start.addEventListener("click", startQuiz)



// function highscore(userinput) {
//     userinput = document.getElementById
//     userHighScore = ["userInput ", score]

    
// }































    







    







