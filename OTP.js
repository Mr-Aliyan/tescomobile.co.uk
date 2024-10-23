// OTP.js
document.addEventListener("DOMContentLoaded", function () {
    // Get the form element
    const otpForm = document.getElementById('otp-form');

    // Handle form submission
    otpForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent default form submission

        // Simulate OTP verification process (this is where you would handle real OTP logic)
        const otpInput = document.querySelector('.otp-input').value;

        // Simulate checking OTP (for now we'll assume any input is correct)
        if (otpInput) {
            // Redirect to the next page on successful OTP verification
            window.location.href = "nextpage.html"; // Redirects to your next page
        } else {
            // Show an error message if OTP is invalid (for demonstration)
            alert('Please enter a valid OTP');
        }
    });
});
