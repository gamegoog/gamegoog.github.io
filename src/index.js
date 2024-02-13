const firebaseConfig = {
  apiKey: "AIzaSyCVHc8D3fp91tz1vTr5VMQhttpcaKy3JFY",
  authDomain: "userapi-f77ee.firebaseapp.com",
  projectId: "userapi-f77ee",
  storageBucket: "userapi-f77ee.appspot.com",
  messagingSenderId: "311858865906",
  appId: "1:311858865906:web:d7fb22ed7440112de8d26b",
  measurementId: "G-Y5K25NKXBL"
};
function updateUsersDisplay(numUsers) {
  document.getElementById("userCount").textContent = numUsers;
}
function randomGame() {
    const games = document.querySelectorAll('.game');
    const randomIndex = Math.floor(Math.random() * games.length);
    const randomGameUrl = games[randomIndex].querySelector('a').getAttribute('href');
    window.location.href = randomGameUrl;
}
function filterGames(searchTerm) {
    const games = document.querySelectorAll('.game');
    games.forEach(game => {
        const title = game.querySelector('h3').textContent.toLowerCase();
        const match = title.includes(searchTerm.toLowerCase());
        game.style.display = match ? 'block' : 'none';
    });
}
function check() {
    var currentURL = window.location.href;
    var pattern = /^https?:\/\/floatindustries\.github\.io\//;
    if (!pattern.test(currentURL)) {
        window.location.href = "/";
    }
}
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
}
check();
userCountRef.on('value', (snapshot) => {
  const userCount = snapshot.val();
  updateUsersDisplay(userCount);
});
