/**
 * Toggles the visibility of the recipe details section on the dish cards.
 * @param {string} id - The HTML ID of the recipe details container.
 */
function toggleRecipe(id) {
    const recipe = document.getElementById(id);
    
    // Toggle between block and none
    if (recipe.style.display === "none" || recipe.style.display === "") {
        recipe.style.display = "block";
    } else {
        recipe.style.display = "none";
    }
}

/**
 * Reveals the hidden iframe containing the pronunciation video.
 * @param {string} id - The HTML ID of the video container.
 */
function playPronunciation(id) {
    const videoContainer = document.getElementById(id);
    videoContainer.style.display = "block";
}

/**
 * Evaluates the user's answer in the interactive food quiz.
 */
function checkAnswer() {
    const answerDropdown = document.getElementById("answer");
    const resultText = document.getElementById("result");
    
    // Get the selected value
    const selectedAnswer = answerDropdown.value;

    // Reset styles before checking
    resultText.style.color = "#333";

    if (selectedAnswer === "tteokbokki") {
        resultText.style.color = "green";
        resultText.textContent = "Correct! Tteokbokki is famously known for its spicy and sweet gochujang sauce.";
    } else if (selectedAnswer === "jjajangmyeon") {
        resultText.style.color = "red";
        resultText.textContent = "Not quite! Jjajangmyeon is savory and slightly sweet, but not traditionally spicy. Try again!";
    } else {
        resultText.textContent = "Please select a dish from the dropdown before submitting.";
    }
}