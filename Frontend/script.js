function formValidation() {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phoneNumber = document.getElementById('phoneNumber').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;

    hideErrorMessage();

    // Check if empty
    if (name === '') {
        showErrorMessage("Name cannot be empty", "name-error")
    } else if (email === '') {
        showErrorMessage("Email cannot be empty", "email-error")
    } else if (!emailValidation(email)) {
        showErrorMessage("Invalid email format", "email-error")
    } else if (phoneNumber === '') {
        showErrorMessage("Phone Number cannot be empty", "number-error")
    } else if (!phoneNumberValidation(phoneNumber)) {
        showErrorMessage("Invalid phone number format", "number-error")
    } else if (password === '') {
        showErrorMessage("Password cannot be empty", "password-error")
    } else if (confirmPassword === '') {
        showErrorMessage("Confirmation Password cannot be empty", "confirm-password-error")
    } else if (confirmPassword !== password) {
        showErrorMessage("Password do not match", "confirm-password-error")
    } else {
        submitForm({name, email, phoneNumber, password, confirmPassword})
    }
    
}

function showErrorMessage(message, id) {
    const errorMessage = document.getElementById(id);
    errorMessage.textContent = message;
    errorMessage.style.display = 'flex'
};

function hideErrorMessage() {
    const errorMessages = document.querySelectorAll('[id$="-error"]')
    errorMessages.forEach(function (errorMessage) {
        errorMessage.style.display = 'none';
    });
};

function emailValidation(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email)
}

function phoneNumberValidation(number) {
    var phoneRegex = /^\d+$/;
    return phoneRegex.test(number)
    
};

function notificationSuccess(message) {
    const successMessage = document.getElementById("notif-success");
    successMessage.textContent = message;
    successMessage.style.display = 'flex'

    setTimeout(function () {
        successMessage.style.display = 'none'
      }, 5000);
};

function notificationFailed(message) {
    const errorMessage = document.getElementById("notif-error");
    errorMessage.textContent = message;
    errorMessage.style.display = 'flex'

    setTimeout(function () {
        errorMessage.style.display = 'none'
      }, 5000);
};


function submitForm(data) {
    fetch("http://localhost:5000/users", {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        if (data.status === "success") {
            console.log("Success", data)
            notificationSuccess(data.message)
        } else {
            console.log("Error", data)
            notificationFailed(data.message)
        }
    })
    .catch((error) => {
        console.log("Error", error)
    });
};