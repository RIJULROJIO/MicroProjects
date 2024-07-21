function generatePassword() {
    const length = 12;
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=";
    let password = "";
    for (let i = 0; i < length; i++) {
        let randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }
    document.getElementById("password").value = password;
}

function copyPassword() {
    const password = document.getElementById("password").value;
    navigator.clipboard.writeText(password).then(() => {
        alert("Password copied to clipboard: " + password);
    }).catch(err => {
        alert('Failed to copy password: ', err);
    });
}
