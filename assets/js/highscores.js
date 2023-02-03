// Set a variable with the data from Localstorage, and put it in an array
let scores = JSON.parse(window.localStorage.getItem('high-scores')) || []

// Links the variable to the HTML
let clearBtn = document.getElementById('clear')
// Adds an event when you click the button
clearBtn.addEventListener("click", function() {
      // Removes the data from the HTML page
      highscores.remove()
      // Removes the data from the local storage
      localStorage.clear()
})
  // Sort highscores by score property in descending order
  scores.sort(function (m, n) {
    return n.score - m.score
  });
  // Loop the scores array and create a listed item for each. 
  for (let i = 0; i < scores.length; i++) {
    // Create li tag for each high score and adds it to the intials.
    let li = document.createElement('li')
    li.textContent = scores[i].initials + ' : ' + scores[i].score

    // Displays the contents on the page
    let ol = document.getElementById('highscores')
    ol.appendChild(li)
   
  }