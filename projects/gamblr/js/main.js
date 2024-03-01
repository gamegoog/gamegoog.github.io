document.addEventListener('DOMContentLoaded', function() {
    const slotTextures = ['cherry', 'lemon', 'orange', 'plum', 'bell', 'bar'];
    let money = localStorage.getItem('money') || 100;
    let betAmount = 1;

    const spinButton = document.getElementById('spinButton');
    const moneyDisplay = document.getElementById('moneyAmount');
    const resultDisplay = document.getElementById('result');
    const slotContainers = document.querySelectorAll('#slot-container div');

    moneyDisplay.textContent = money;

    spinButton.addEventListener('click', spinSlots);

    function spinSlots() {
        if (money < betAmount) {
            resultDisplay.textContent = "Not enough money to bet!";
            return;
        }

        money -= betAmount; // Deduct the bet amount from the player's money
        moneyDisplay.textContent = money;

        resultDisplay.textContent = "";

        const results = [];
        for (let i = 0; i < 3; i++) {
            const randomIndex = Math.floor(Math.random() * slotTextures.length);
            const texture = slotTextures[randomIndex];
            results.push(texture);
        }

        updateSlots(results);
        checkWin(results);
        localStorage.setItem('money', money);
    }

    function updateSlots(results) {
        slotContainers.forEach((slot, index) => {
            slot.style.backgroundImage = `url(/projects/gamblr/textures/${results[index]}.png)`;
        });
    }

    function checkWin(results) {
        // Simulate 50/50 chance of winning
        const randomChance = Math.random();
        if (randomChance < 0.5) {
            resultDisplay.textContent = "You won!";
            money += betAmount * 2; // Double the bet amount as winnings
        } else {
            resultDisplay.textContent = "You lost!";
        }
        moneyDisplay.textContent = money;
        localStorage.setItem('money', money);
    }
});
