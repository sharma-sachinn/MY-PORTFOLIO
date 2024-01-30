// Wrap your code in a function to avoid polluting the global namespace
(function() {
    // Define the target element where you want the typing animation
    var targetElement = document.getElementById('holder'); // Change 'holder' to the actual ID of your target element

    // Define the text content you want to type
    var textToType = "Hi, I'm Sachin sharma! I'm a Web Designer & Front-end Developer focused on creating clean, responsive web designs!";

    // Initialize the current character index
    var currentIndex = 0;

    // Set an interval to add characters at regular intervals
    var typingInterval = setInterval(function() {
        // Get the current text content of the element
        var currentText = targetElement.textContent;

        // Add the next character to the current text
        currentText += textToType[currentIndex];

        // Update the text content of the element
        targetElement.textContent = currentText;

        // Move to the next character
        currentIndex++;

        // Check if the typing animation is complete
        if (currentIndex === textToType.length) {
            // Animation complete, clear the interval
            clearInterval(typingInterval);
        }
    }, 80); // You can adjust the interval to control the typing speed
})();
function animateSkillBars() {
    $(".skillbar clearfix").each(function() {
      $(this).find(".skillbar-bar").animate({
        width: $(this).attr("data-percent")
      }, 2500);
    });
  }
  
  // Call animateSkillBars when a specific event occurs, e.g., clicking a button
  $("#startAnimationButton").click(function() {
    animateSkillBars();
  });
  
