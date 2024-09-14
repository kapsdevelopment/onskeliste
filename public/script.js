document.addEventListener('DOMContentLoaded', () => {
    const wishlistForm = document.getElementById('wishlist-form');
    const wishlist = document.getElementById('wishlist');

    // Fetch and display the wishlist items on page load
    fetch('/api/wishlist')
        .then(response => response.json())
        .then(data => {
            data.forEach(item => addItemToList(item.name, item.url));
        })
        .catch(err => console.error('Error fetching wishlist:', err));

    // Function to add a new item
    wishlistForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const itemName = document.getElementById('item-name').value;
        const itemUrl = document.getElementById('item-url').value;

        const newItem = { name: itemName, url: itemUrl };

        // Send the new item to the server
        fetch('/api/wishlist', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newItem)
        })
        .then(response => response.json())
        .then(data => {
            // Add the new item to the list on the page
            addItemToList(data.name, data.url);
        })
        .catch(err => console.error('Error adding item:', err));

        // Clear the form
        wishlistForm.reset();
    });

    // Function to add item to the list on the page
    function addItemToList(name, url) {
        const li = document.createElement('li');

        if (url) {
            const a = document.createElement('a');
            a.href = url;
            a.textContent = name;
            a.target = '_blank';
            li.appendChild(a);
        } else {
            li.textContent = name;
        }

        wishlist.appendChild(li);
    }
});
