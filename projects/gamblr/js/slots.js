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
        if (uniqueTextures.size === 1) {
            if (result[0] === 'bar') {
                money -= betAmount * 2;
            } else {
                money += betAmount * 2;
            }
        } else if (uniqueTextures.size === 2 && uniqueTextures.has('cherry')) {
            money += betAmount * 1.5;
        } else {
            money -= betAmount;
        }
    
        updateMoney();
        localStorage.setItem('money', money);
    }


    window.spin = spin; // Expose spin function to global scope
});
