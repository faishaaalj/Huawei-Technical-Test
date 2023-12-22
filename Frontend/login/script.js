function formValidation() {
    event.preventDefault();
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    hideErrorMessage();

    // Check if empty
    if (email === '') {
        showErrorMessage("Email cannot be empty", "email-error")
    } else if (!emailValidation(email)) {
        showErrorMessage("Invalid email format", "email-error")
    } else if (password === '') {
        showErrorMessage("Password cannot be empty", "password-error")
    } else {
        submitForm({email, password})
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

function notificationFailed(message) {
    const errorMessage = document.getElementById("notif-error");
    errorMessage.textContent = message;
    errorMessage.style.display = 'flex'

    setTimeout(function () {
        errorMessage.style.display = 'none'
      }, 5000);
};

function setStorageItem(data) {
    console.log(data.user)
    localStorage.setItem("accessToken", data.accessToken);
    localStorage.setItem("user", data.user);
}

function emailValidation(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email)
}

function submitForm(data) {
    fetch("http://localhost:5000/login", {
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
            setStorageItem(data)
            window.location.href = '../main/main.html';
        } else {
            console.log("Error", data)
            notificationFailed(data.message)
        }
    })
    .catch((error) => {
        console.log("Error", error)
    });
};