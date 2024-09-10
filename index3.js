
// Function to update the phone number with the selected country code
function updatePhoneNumber() {
    const countrySelect = document.getElementById('country-code');
    const phoneInput = document.getElementById('phone-number');
    const selectedCode = countrySelect.value;

    if (selectedCode) {
        phoneInput.value = selectedCode + ' ';
        phoneInput.focus();
    }
}

// Validate the form fields
function validateForm() {
    let valid = true;

    const name = document.getElementById('name');
    const countryCode = document.getElementById('country-code');
    const phoneNumber = document.getElementById('phone-number');
    const email = document.getElementById('email');
    const people = document.getElementById('people');
    const date = document.getElementById('date');
    const hours = document.getElementById('hours');
    const minutes = document.getElementById('minutes');
    const ampm = document.getElementById('ampm');

    const nameError = document.getElementById('name-error');
    const countryCodeError = document.getElementById('country-code-error');
    const phoneError = document.getElementById('phone-error');
    const emailError = document.getElementById('email-error');
    const peopleError = document.getElementById('people-error');
    const dateError = document.getElementById('date-error');
    const timeError = document.getElementById('time-error');

    // Name Validation
    if (name.value.trim() === "") {
        name.classList.add('error');
        nameError.style.display = 'block';
        valid = false;
    } else {
        name.classList.remove('error');
        nameError.style.display = 'none';
    }

    // Country Code Validation
    if (countryCode.value.trim() === "") {
        countryCode.classList.add('error');
        countryCodeError.style.display = 'block';
        valid = false;
    } else {
        countryCode.classList.remove('error');
        countryCodeError.style.display = 'none';
    }

    // Phone Number Validation
    const phonePattern = /^\+\d{1,3}\s?\d{4,14}$/;
    if (!phonePattern.test(phoneNumber.value.trim())) {
        phoneNumber.classList.add('error');
        phoneError.style.display = 'block';
        valid = false;
    } else {
        phoneNumber.classList.remove('error');
        phoneError.style.display = 'none';
    }

    // Email Validation
    const emailPattern = /\S+@\S+\.\S+/;
    if (!emailPattern.test(email.value.trim())) {
        email.classList.add('error');
        emailError.style.display = 'block';
        valid = false;
    } else {
        email.classList.remove('error');
        emailError.style.display = 'none';
    }

    // Number of People Validation
    if (people.value.trim() === "" || parseInt(people.value) < 1) {
        people.classList.add('error');
        peopleError.style.display = 'block';
        valid = false;
    } else {
        people.classList.remove('error');
        peopleError.style.display = 'none';
    }

    // Booking Date Validation
    if (date.value.trim() === "") {
        date.classList.add('error');
        dateError.style.display = 'block';
        valid = false;
    } else {
        date.classList.remove('error');
        dateError.style.display = 'none';
    }

    // Time Validation
    if (hours.value.trim() === "" || minutes.value.trim() === "" || ampm.value.trim() === "") {
        hours.classList.add('error');
        minutes.classList.add('error');
        ampm.classList.add('error');
        timeError.style.display = 'block';
        valid = false;
    } else {
        const selectedHour = parseInt(hours.value);
        const selectedAMPM = ampm.value;

        if ((selectedAMPM === 'AM' && (selectedHour < 9 || selectedHour > 11)) ||
            (selectedAMPM === 'PM' && (selectedHour < 1 || selectedHour > 10))) {
            hours.classList.add('error');
            ampm.classList.add('error');
            timeError.textContent = 'Please select a valid time for AM/PM.';
            timeError.style.display = 'block';
            valid = false;
        } else {
            hours.classList.remove('error');
            ampm.classList.remove('error');
            timeError.style.display = 'none';
        }
    }

    return valid;
}

// Handle form submission
function submitForm(event) {
    event.preventDefault();

    if (validateForm()) {
        // Display success message
        const responseMessage = document.getElementById('response-message');
        responseMessage.textContent = 'Thank you for booking with us! Your reservation has been confirmed.';
        responseMessage.style.color = 'green';
        responseMessage.style.display = 'block';

        // Clear the form and hide the message after 3 seconds
        setTimeout(() => {
            responseMessage.style.display = 'none';
            document.getElementById('booking-form').reset();
        }, 3000);
    } else {
        // Display error message
        const responseMessage = document.getElementById('response-message');
        responseMessage.textContent = 'Please correct the errors in the form.';
        responseMessage.style.color = 'red';
        responseMessage.style.display = 'block';
    }
}

// Handle focus events to remove error styles
document.querySelectorAll('.time-input').forEach(input => {
    input.addEventListener('focus', () => {
        input.classList.remove('error');
        document.getElementById('time-error').style.display = 'none';
    });
});

document.getElementById('booking-form').addEventListener('submit', submitForm);

// Handle focus and blur events
function handleFocus(event) {
    event.target.classList.add('glow');
}

function handleBlur(event) {
    if (event.target.value.trim() !== "" && validateInput(event.target)) {
        event.target.classList.remove('glow');
    }
}

// Handle input events
function handleInput(event) {
    if (validateInput(event.target)) {
        event.target.classList.remove('glow');
    } else {
        event.target.classList.add('glow');
    }
}

// Validate individual input fields
function validateInput(input) {
    switch (input.id) {
        case 'name':
            return input.value.trim() !== "";
        case 'country-code':
            return input.value.trim() !== "";
        case 'phone-number':
            return /^\+\d{1,3}\s?\d{4,14}$/.test(input.value);
        case 'email':
            return /\S+@\S+\.\S+/.test(input.value);
        case 'people':
            return input.value.trim() !== "" && parseInt(input.value) > 0;
        case 'date':
            return input.value.trim() !== "";
        case 'hours':
        case 'minutes':
        case 'ampm':
            return input.value.trim() !== "";
        default:
            return true;
    }
}

// Event listeners
document.getElementById('country-code').addEventListener('change', updatePhoneNumber);

const inputs = document.querySelectorAll('#booking-form input');
inputs.forEach(input => {
    input.addEventListener('focus', handleFocus);
    input.addEventListener('blur', handleBlur);
    input.addEventListener('input', handleInput);
});

// Toggle Menu Functions
function toggleMenu() {
    document.querySelector('.menu-bar-content').classList.toggle('active');
    document.querySelector('.hamburger-menu').classList.toggle('active');
}

function closeMenu() {
    document.querySelector('.menu-bar-content').classList.remove('active');
    document.querySelector('.hamburger-menu').classList.remove('active');
}