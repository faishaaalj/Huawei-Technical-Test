function displayData() {

    const accessToken = localStorage.getItem("accessToken")
    const userData =  JSON.parse(sessionStorage.getItem("user"));

    if (!accessToken) {
        window.location.href = '../login/login.html';
    } else {
        if (userData) {
            const idContent = document.getElementById("id");
            idContent.textContent = userData.userId;

            const nameContent = document.getElementById("name");
            nameContent.textContent = userData.name;
            
            const fullNameContent = document.getElementById("full-name");
            fullNameContent.textContent = userData.name;

            const phoneNumberContent = document.getElementById("phoneNumber");
            phoneNumberContent.textContent = userData.phoneNumber;

            const emailContent = document.getElementById("email");
            emailContent.textContent = userData.email;
        }
    }

    

    
}

displayData();

function logout() {
    localStorage.clear();
    sessionStorage.clear();
    displayData()
}

// const user =  sessionStorage.getItem("user");
// userData = JSON.parse(user)
// console.log(userData)