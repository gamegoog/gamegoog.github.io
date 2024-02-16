function sponsor() {
    var percent = 17        // Percent chance of deleting content
    var randomNumber = Math.floor(Math.random() * 100);
    if (randomNumber <= percent) {
        var sponsoredDiv = document.querySelector(".sponsored");
        if (sponsoredDiv) {
            sponsoredDiv.remove();
            console.log("Sponsored content removed");
        } else {
            console.log("Sponsored content not found");
        }
    } else {
        console.log("Sponsorship quota not met, sponsor not deleted.");
    }
};
function randomGame() {
    const games = document.querySelectorAll('.game');
    const randomIndex = Math.floor(Math.random() * games.length);
    const randomGameUrl = games[randomIndex].querySelector('a').getAttribute('href');
    window.location.href = randomGameUrl;
};var a = /^https?:\/\/gloabe\.github\.io\//;
function filterGames(searchTerm) {
    const games = document.querySelectorAll('.game');
    games.forEach(game => {
        const title = game.querySelector('h3').textContent.toLowerCase();
        const match = title.includes(searchTerm.toLowerCase());
        game.style.display = match ? 'block' : 'none';
    });
};
//function check() {
//    var currentURL = window.location.href;
//    if (!a.test(currentURL)) {
//        window.location.href = "/404.html";
//    }
//};
const quotes = [
    "Beta branch, what's that? 😺",
    "Jacob Mitchell is a monkey 🤞",
    "This you Mr. Iorio? 5416 Hutchinson St 💀"

];
function displayRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById('quote').textContent = quotes[randomIndex];
};

document.addEventListener("DOMContentLoaded", function() {
// check();
});

