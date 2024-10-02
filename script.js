document.getElementById('hideButton').addEventListener('click', function() {
    const portfolioText = document.getElementById('portfolioText');
    if (portfolioText.style.display === 'none') {
        portfolioText.style.display = 'block';
    } else {
        portfolioText.style.display = 'none';
    }
});
