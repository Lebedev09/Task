document.getElementById('filterForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(this);
    const data = {
        date_from: new Date(formData.get('dateFrom')).toISOString(),
        date_to: new Date(formData.get('dateTo')).toISOString(),
        page: 0,
        limit: 100
    };

    fetch('../src/getStatuses.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(result => {
        console.log(result);
        if (result.status) {
            const tbody = document.getElementById('statusesTable').querySelector('tbody');
            tbody.innerHTML = ''; // Clear existing rows
            result.data.forEach(lead => {
                const row = document.createElement('tr');
                row.innerHTML = `<td>${lead.id}</td><td>${lead.email}</td><td>${lead.status}</td><td>${lead.ftd}</td>`;
                tbody.appendChild(row);
            });
        } else {
            alert('Error: ' + result.error);
        }
    })
    .catch(error => {
        console.error('Error:', error); 
        alert('Failed to fetch statuses. Please try again later.');
    });
});
