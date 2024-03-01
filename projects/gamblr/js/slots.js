document.addEventListener('DOMContentLoaded', () => {
    const textures = ['cherry', 'lemon', 'orange', 'plum', 'bell', 'bar', 'bar', 'bar', 'bar']; // Adjust probabilities
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

    const uniqueTextures = new Set(result);
    let winMultiplier = 1; // Default multiplier for non-winning spins
    if (uniqueTextures.size === 1) {
        if (result[0] === 'bar') {
            winMultiplier = 2; // Double the bet amount if all slots show 'bar'
        } else {
            winMultiplier = 3; // Triple the bet amount for any other winning combination
        }
    } else if (uniqueTextures.size === 2 && uniqueTextures.has('cherry')) {
        winMultiplier = 1.5; // Increase money by 1.5 times the bet amount for two 'cherry' slots
    }

    let totalWinnings = betAmount * winMultiplier;
    if (uniqueTextures.size > 1) {
        totalWinnings += betAmount; // Add one more to the bet amount if there's more than one winning texture
    }

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
