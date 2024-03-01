document.addEventListener('DOMContentLoaded', () => {
    const textures = ['cherry', 'lemon', 'orange', 'plum', 'bell', 'bar', 'bar']; // Adjust probabilities
    const moneyDisplay = document.getElementById('money');
    const betInput = document.getElementById('bet');
    const slotImages = [
        document.getElementById('slot1'),
        document.getElementById('slot2'),
        document.getElementById('slot3')
    ];
    let money = parseInt(localStorage.getItem('money')) || 100; // Load existing money or set default to 100

    updateMoney();

    function updateMoney() {
        moneyDisplay.textContent = money;
    }

    function getRandomTexture() {
        return textures[Math.floor(Math.random() * textures.length)];
    }

function spin() {
    const betAmount = parseInt(betInput.value);
    if (isNaN(betAmount) || betAmount <= 0 || betAmount > money) {
        alert('Please enter a valid bet amount!');
        return;
    }

    let result = [];
    for (let i = 0; i < slotImages.length; i++) {
        result.push(getRandomTexture());
        slotImages[i].src = `textures/${result[i]}.png`;
    }

    const counts = {};
    result.forEach(texture => {
        counts[texture] = (counts[texture] || 0) + 1;
    });

    let totalWinnings = 0;
    Object.entries(counts).forEach(([texture, count]) => {
        if (texture === 'bar') {
            totalWinnings += count * betAmount * 1.5; // 1.5x multiplier for each 'bar'
        } else if (texture === 'cherry') {
            totalWinnings += count * betAmount * 1.25; // 1.25x multiplier for each 'cherry'
        }
    });

    if (totalWinnings > betAmount) {
        money += totalWinnings - betAmount; // Add the net winnings to the money balance
    } else {
        money -= betAmount; // Deduct the bet amount if there is no winning combination
    }

    updateMoney();
    localStorage.setItem('money', money);
}




    window.spin = spin; // Expose spin function to global scope
});
