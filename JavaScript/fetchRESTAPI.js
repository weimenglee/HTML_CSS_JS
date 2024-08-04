
document.getElementById('fetch-data').addEventListener('click', () => {
    // API endpoint
    const apiUrl = 'https://jsonplaceholder.typicode.com/posts'; // Example API endpoint

    // Fetch data from API
    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json(); // Parse JSON data
        })
        .then(data => {
            // Display data
            const dataContainer = document.getElementById('data-container');
            dataContainer.innerHTML = ''; // Clear previous data

            // Create a list to display fetched data
            const ul = document.createElement('ul');
            data.forEach(item => {
                const li = document.createElement('li');
                li.textContent = `${item.id}: ${item.title}: ${item.body}`;
                ul.appendChild(li);
            });

            dataContainer.appendChild(ul);
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
            document.getElementById('data-container').textContent = 'Failed to fetch data.';
        });
});
