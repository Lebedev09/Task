document.getElementById('leadForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(this);
    const data = Object.fromEntries(formData.entries());

    fetch('../src/addLead.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(result => {
        if (result.status) {
            alert('Lead added successfully! ID: ' + result.id);
        } else {
            alert('Error: ' + result.error);
        }
    });
});
