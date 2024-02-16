function sponsor() {
    var percent = 80        // Percent chance of deleting content
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
function updateUsersDisplay(numUsers) {
  document.getElementById("userCount").textContent = "|      Users: ". numUsers;
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
    "Some games may not work.",
    "There's a fullscreen button in the top left on all games!",
    "R.I.P 3kh0! -2024, yes I did make this website.",
    "R.I.P 3kh0! -2024, killed by some middle schooler.",
    "Proud sponsor of https://cornhub.website!",
    "Link to some private stuff... Don't look! https://floatindustries.github.io/images/image1.png",
    "chicken sandwich",
    "Jacob Mitchell is a monkey 🤞",
    "Uncaught ReferenceError: getRandomInt is not defined"
];
function displayRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById('quote').textContent = quotes[randomIndex];
};
window.onload = function() {
  check();displayRandomQuote();sponsor();
};
