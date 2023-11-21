

function greetUser() {
    let userName = prompt("Please enter your name:");
    if (userName !== null && userName !== "") {
      alert(`Hello, ${userName}! Welcome to our website!`);
    } else {
      alert("Hello there! Welcome to our website!");
    }
}

function toggleDarkMode() {
    const body = document.body;
     body.classList.toggle("dark-mode");
}

  
window.onload = function () {
  greetUser();
};


