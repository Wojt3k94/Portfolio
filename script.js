// document.getElementById('hideButton').addEventListener('click', function() {
//     const portfolioText = document.getElementById('portfolioText');
//     if (portfolioText.style.display === 'none') {
//         portfolioText.style.display = 'block';
//     } else {
//         portfolioText.style.display = 'none';
//     }
// });

function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}
