document.getElementById('update-button').addEventListener('click', async () => {
    const id = document.getElementById('update-id').value;
    const title = document.getElementById('update-title').value;
    const body = document.getElementById('update-body').value;

    if (!id || !title || !body) {
        alert('Please fill in all fields');
        return;
    }

    const apiUrl = `https://jsonplaceholder.typicode.com/posts/${id}`;

    try {
        const response = await fetch(apiUrl, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: title,
                body: body,
                userId: 1 // Required by JSONPlaceholder API
            })
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        document.getElementById('response-container').innerHTML = `<p>Post Updated: ${JSON.stringify(data)}</p>`;
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
        document.getElementById('response-container').textContent = 'Failed to update post.';
    }
});

document.getElementById('delete-button').addEventListener('click', async () => {
    const id = document.getElementById('delete-id').value;

    if (!id) {
        alert('Please enter a Post ID');
        return;
    }

    const apiUrl = `https://jsonplaceholder.typicode.com/posts/${id}`;

    try {
        const response = await fetch(apiUrl, {
            method: 'DELETE'
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        document.getElementById('response-container').innerHTML = `<p>Post with ID ${id} deleted.</p>`;
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
        document.getElementById('response-container').textContent = 'Failed to delete post.';
    }
});
