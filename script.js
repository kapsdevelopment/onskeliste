document.addEventListener('DOMContentLoaded', () => {
    // Fetch the wishlist.json file
    fetch('wishlist.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            const wishlist = document.getElementById('wishlist');
            data.forEach(item => {
                const li = document.createElement('li');
                const a = document.createElement('a');
                const img = document.createElement('img');

                // Set up the image
                img.src = item.image;
                img.alt = item.name;
                img.style.width = '50px'; // Set the image width
                img.style.height = 'auto'; // Maintain aspect ratio

                // Set up the link
                a.href = item.url;
                a.textContent = item.name;
                a.target = '_blank'; // Opens the link in a new tab

                // Append the image and the link to the list item
                li.appendChild(img);
                li.appendChild(a);

                // Append the list item to the wishlist
                wishlist.appendChild(li);
            });
        })
        .catch(error => console.error('Error loading wishlist:', error));
});
