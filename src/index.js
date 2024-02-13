function check() {
    var currentURL = window.location.href;
    var pattern = /^https?:\/\/floatindustries\.github\.io\//;
    if (!pattern.test(currentURL)) {
        window.location.href = "/";
    }
};
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
function sponsor() {
    var randomNumber = getRandomInt(0, 100);
    if (randomNumber <= 20) {
        document.getElementById("sponsored").style.display = "block";
    }
}
function updateUsersDisplay(numUsers) {
  document.getElementById("userCount").textContent = "|      Users: ". numUsers;
};
function randomGame() {
    const games = document.querySelectorAll('.game');
    const randomIndex = Math.floor(Math.random() * games.length);
    const randomGameUrl = games[randomIndex].querySelector('a').getAttribute('href');
    window.location.href = randomGameUrl;
};
function filterGames(searchTerm) {
    const games = document.querySelectorAll('.game');
    games.forEach(game => {
        const title = game.querySelector('h3').textContent.toLowerCase();
        const match = title.includes(searchTerm.toLowerCase());
        game.style.display = match ? 'block' : 'none';
    });
};
const quotes = [
    "Some games may not work.",
    "There's a fullscreen button in the top left on all games!",
    "R.I.P 3kh0! -2024, yes I did make this website.",
    "R.I.P 3kh0! -2024, killed by some middle schooler.",
    "Proud sponsor of https://cornhub.website!",
    "Link to some private stuff... Don't look! https://floatindustries.github.io/images/image1.png",
    "chicken sandwich"
];
function displayRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById('quote').textContent = quotes[randomIndex];
};
window.onload = function() {
  check();displayRandomQuote();sponsor();
};
