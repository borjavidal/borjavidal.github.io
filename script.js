document.getElementById('copyButton').addEventListener('click', function() {
    const email = 'bvidalar@gmail.com';
    navigator.clipboard.writeText(email).then(() => {
        alert('Email copied to clipboard');
    });
});
