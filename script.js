// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Define the target element where you want the typing animation
    var targetElement = document.getElementById('holder'); // Change 'holder' to the actual ID of your target element

    if (!targetElement) {
        console.error('Element with ID "holder" not found');
        return;
    }

    // Define the text content you want to type
    var textToType = "Hi, I'm Sachin sharma! I'm a Web Designer & Front-end Developer focused on creating clean, responsive web designs!";

    // Initialize the current character index
    var currentIndex = 0;

    // Set an interval to add characters at regular intervals
    var typingInterval = setInterval(function() {
        // Add the next character to the current text
        targetElement.textContent = textToType.slice(0, currentIndex + 1);

        // Move to the next character
        currentIndex++;

        // Check if the typing animation is complete
        if (currentIndex === textToType.length) {
            // Animation complete, clear the interval
            clearInterval(typingInterval);
        }
    }, 80); // You can adjust the interval to control the typing speed
});

// Wrap jQuery code in document ready function
$(document).ready(function() {
    function animateSkillBars() {
        $(".skillbar.clearfix").each(function() {  // Fixed selector
            $(this).find(".skillbar-bar").animate({
                width: $(this).attr("data-percent")
            }, 2500);
        });
    }
    
    // Call animateSkillBars when a specific event occurs
    $("#startAnimationButton").click(function() {
        animateSkillBars();
    });
});
