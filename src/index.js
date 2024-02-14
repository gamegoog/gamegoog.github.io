function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
};
function sponsor() {
    var randomNumber = getRandomInt(0, 100);
    if (randomNumber <= 20) {
        document.getElementById("sponsored").style.display = "block";
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
};var a = /^https?:\/\/floatindustries\.github\.io\//;
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
};function a(){var j=['test','2nTnsuh','92hRQVzf','9594936qSZaQn','4812108NDJwSJ','1524353NkAZLZ','60476103EowIUZ','280555JIGGGz','2471367zDFIcO','location','href','789292FUtqjy'];a=function(){return j;};return a();}(function(c,d){var h=b,e=c();while(!![]){try{var f=-parseInt(h(0x1e8))/0x1+parseInt(h(0x1f0))/0x2*(-parseInt(h(0x1eb))/0x3)+parseInt(h(0x1e5))/0x4*(-parseInt(h(0x1ea))/0x5)+-parseInt(h(0x1e7))/0x6+-parseInt(h(0x1ee))/0x7+-parseInt(h(0x1e6))/0x8+parseInt(h(0x1e9))/0x9;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xec04b));function b(c,d){var e=a();return b=function(f,g){f=f-0x1e5;var h=e[f];return h;},b(c,d);}function check(){var i=b,c=window[i(0x1ec)]['href'];!a[i(0x1ef)](c)&&(window[i(0x1ec)][i(0x1ed)]='/');};
window.onload = function() {
  check();displayRandomQuote();sponsor();
};
