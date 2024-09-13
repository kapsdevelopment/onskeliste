// Wait for DOM to load
document.addEventListener('DOMContentLoaded', () => {
    const wishlistForm = document.getElementById('wishlist-form');
    const wishlist = document.getElementById('wishlist');

    // Function to add a new item
    wishlistForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get the input values
        const itemName = document.getElementById('item-name').value;
        const itemUrl = document.getElementById('item-url').value;

        // Create new list item
        const li = document.createElement('li');

        if (itemUrl) {
            const a = document.createElement('a');
            a.href = itemUrl;
            a.textContent = itemName;
            a.target = '_blank'; // Opens the link in a new tab
            li.appendChild(a);
        } else {
            li.textContent = itemName;
        }

        // Append the new item to the wishlist
        wishlist.appendChild(li);

        // Clear the form
        wishlistForm.reset();
    });
});
