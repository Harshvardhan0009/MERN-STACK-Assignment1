// Select the h1 element using id
const heading = document.getElementById("heading");

// Add text dynamically on page load
heading.innerText = "Welcome to JavaScript DOM Manipulation";

// Change text color
heading.style.color = "white";

// Change background color
heading.style.backgroundColor = "blue";

// Align text to center
heading.style.textAlign = "center";

// Add CSS class using classList
heading.classList.add("main-heading");