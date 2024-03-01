document.addEventListener('DOMContentLoaded', () => {
    const textures = ['cherry', 'lemon', 'orange', 'plum', 'bell', 'bar', 'bar', 'bar', 'bar', 'bar']; // Adjust probabilities
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
        moneyDisplay.textContent = '$' + money;
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

        if (result[0] === result[1] && result[1] === result[2]) {
            if (result[0] === 'bar') {
                money += betAmount * 5; // Increase payout for three 'bar' textures
            } else {
                money += betAmount * 2; // Normal payout for other textures
            }
        } else if (result.includes('cherry') && result.filter(texture => texture === 'cherry').length === 2) {
            money += betAmount * 1.5; // Payout for two 'cherry' textures
        } else {
            money -= betAmount; // Loss if no winning combination
        }

        updateMoney();
        localStorage.setItem('money', money);
    }

    window.spin = spin; // Expose spin function to global scope
});
