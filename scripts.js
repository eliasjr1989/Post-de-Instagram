document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('menuBtn');
    const menuContent = document.getElementById('menuContent');

    menuBtn.addEventListener('click', (event) => {
        event.stopPropagation();
        if (menuContent.style.display === 'block') {
            menuContent.style.display = 'none';
        } else {
            menuContent.style.display = 'block';
        }
    });

    window.addEventListener('click', (event) => {
        if (!menuBtn.contains(event.target) && !menuContent.contains(event.target)) {
            menuContent.style.display = 'none';
        }
    });
});