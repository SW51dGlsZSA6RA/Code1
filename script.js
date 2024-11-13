const correctHash = "==ANxcTN";
const obfuscatedMessage = "VjRYMmdnTzlvY2d4ZjJBbitGOTNoZFJvTG4vNHUwQUhZeWJmbVQwdHBubz0=";

function codeHash(input) {
    return btoa(input).split('').reverse().join('');
}

function revealMessage() {
    const decodedMessage = atob(obfuscatedMessage);
    return decodedMessage;
}

function tryCode() {
    const codeInput = document.getElementById("codeInput").value;
    const messageElement = document.getElementById("message");

    const now = new Date().getTime();
    const cooldownEnd = localStorage.getItem("cooldownEnd");

    if (cooldownEnd && now < cooldownEnd) {
        const remainingMinutes = Math.ceil((cooldownEnd - now) / 60000);
        messageElement.textContent = `Wait ${remainingMinutes} minutes before trying again.`;
        return;
    }

    if (codeHash(codeInput) === correctHash) {
        setTimeout(() => {
            document.getElementById("container").innerHTML = `<p>${revealMessage()}</p>`;
        }, 500);
    } else {
        messageElement.textContent = "Incorrect code. Please try again in 15 minutes.";
        localStorage.setItem("cooldownEnd", now + 15 * 60000); 
    }
}

//Why are you in here?
