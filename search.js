document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('search-form').addEventListener('submit', function(event) {
        event.preventDefault();
        let query = document.getElementById('search-input').value.toLowerCase();
        let items = document.querySelectorAll('.searchable-item');

        items.forEach(function(item) {
            item.innerHTML = item.textContent; // Remove highlights anteriores
            if (query) {
                let regex = new RegExp(`(${query})`, 'gi');
                item.innerHTML = item.textContent.replace(regex, '<span class="highlight">$1</span>');
            }
        });
    });
});
