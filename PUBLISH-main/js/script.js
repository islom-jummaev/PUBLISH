function sendTelegram() {
    const name = document.getElementById('nameInput').value;
    const phoneNumber = document.getElementById('messageInput').value;

    // Replace 'YOUR_BOT_TOKEN' and 'YOUR_CHANNEL_ID' with your actual bot token and channel ID
    const botToken = '6701728792:AAGn6p8yiGTEhkBJSzcv6cpE4EWu8P1YhLo';
    const channelId = '-1002138664545';

    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;
    const message = `Ismingiz : ${name}\nTelefon raqam: ${phoneNumber}`;

    const params = {
        chat_id: channelId,
        text: message,
    };

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(params),
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);

        // Show success alert
        showCustomAlert("Tez orada siz bilan bog'lanishadi!");
    })
    .catch(error => {
        console.error('Error:', error);

        // Show error alert
        showCustomAlert('Failed to send message. Please try again.', 'red');
    });

    return false; // Prevent form submission
}

function showCustomAlert(message, color = '#4CAF50') {
    const alertElement = document.getElementById('customAlert');
    alertElement.style.backgroundColor = color;
    alertElement.textContent = message;
    alertElement.style.display = 'block';

    // Hide the alert after 3 seconds (adjust as needed)
    setTimeout(() => {
        alertElement.style.display = 'none';
    }, 3000);
}

// Get the modal
const modal = document.getElementById('myModal');

// Get the <span> element that closes the modal
const closeBtn = document.getElementsByClassName('close')[0];

// When the user clicks the button, open the modal
// Assuming you have a button that triggers the modal with an ID "myBtn"
document.getElementById('myBtn').onclick = function () {
    modal.style.display = 'block';
};

// When the user clicks on <span> (x), close the modal
closeBtn.onclick = function () {
    modal.style.display = 'none';
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
};