function displayData() {

    const user =  sessionStorage.getItem("user");
    userData = JSON.parse(user)

    const idContent = document.getElementById("id");
    idContent.textContent = `${userData.userId}`;

    const nameContent = document.getElementById("name");
    nameContent.textContent = `${userData.name}`;

    const phoneNumberContent = document.getElementById("phoneNumber");
    phoneNumberContent.textContent = `${userData.phoneNumber}`;

    const emailContent = document.getElementById("email");
    emailContent.textContent = `${userData.email}`;

    
}

displayData();
console.log("AAAA")