function searchProducts() {
    // Get the search input value
    var searchQuery = document.getElementById('searchInput').value.toLowerCase();

    // Get all product items (you need to add the appropriate class to your product items)
    var productItems = document.querySelectorAll('.flex-item');

    // Loop through each product item
    productItems.forEach(function (item) {
        // Get the product name from the text-overlay element
        var productName = item.querySelector('.text-overlay').textContent.toLowerCase();

        // Check if the search query matches the product name
        if (productName.includes(searchQuery)) {
            // If it matches, show the product item
            item.style.display = 'block';
        } else {
            // If it doesn't match, hide the product item
            item.style.display = 'none';
        }
    });
}