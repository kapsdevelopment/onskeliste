document.addEventListener('DOMContentLoaded', () => {
    // Fetch the wishlist.json file
    fetch('wishlist.json')
        .then(response => response.json())
        .then(data => {
            const wishlist = document.getElementById('wishlist');
            data.forEach(item => {
                const li = document.createElement('li');
                const a = document.createElement('a');
                a.href = item.url;
                a.textContent = item.name;
                a.target = '_blank'; // Opens the link in a new tab
                li.appendChild(a);
                wishlist.appendChild(li);
            });
        })
        .catch(error => console.error('Error loading wishlist:', error));
});
