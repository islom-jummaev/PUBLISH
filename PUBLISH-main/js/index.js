document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('tg');
    const successMessage = document.getElementById('success');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const formData = new FormData(form);
        const jsonObject = {};

        formData.forEach((value, key) => {
            jsonObject[key] = value;
        });

        const telegramBotToken = '6905960403:AAGCrctVTxc5sBB1KvJSeX6OySI7UtmIm0k';
        const telegramChatId = '-1002138664545';
        const telegramApiUrl = `https://api.telegram.org/bot${telegramBotToken}/sendMessage`;

        const messageText = `Yangi xabar!\n\nIsm: ${jsonObject.firstName}\nPochta: ${jsonObject.Pochta}\nTelefon: ${jsonObject.phone}\nIsh turi: ${jsonObject.element}\nYozuv tili: ${jsonObject.element2}\nSahifalar: ${jsonObject.pageCount}\nTopshirish muddati: ${jsonObject.myDate}\nIsh mavzusi: ${jsonObject.address}`;

        fetch(telegramApiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                chat_id: telegramChatId,
                text: messageText,
            }),
        })
        .then(response => response.json())
        .then(data => {
            if (data.ok) {
                successMessage.textContent = 'Xabar yuborildi!';
                successMessage.style.display = 'block';
                form.reset();
            } else {
                successMessage.textContent = 'Xabar yuborilmadi';
                successMessage.style.display = 'block';
            }
        })
        .catch(error => console.error(error));
    });
});
