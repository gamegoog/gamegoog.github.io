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
        const totalBetAmount = betAmount * slotContainers.length;
        
        if (money < totalBetAmount) {
            resultDisplay.textContent = "Not enough money to bet!";
            return;
        }

        money -= totalBetAmount; // Deduct the total bet amount from the player's money
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
    const uniqueResults = new Set(results);
    const matchingCount = results.filter(result => result === results[0]).length;

    // Calculate winnings based on matching count
    const winnings = betAmount * matchingCount;

    if (matchingCount === 3) {
        resultDisplay.textContent = "You won!";
        money += winnings;
    } else {
        resultDisplay.textContent = "You lost!";
    }
    moneyDisplay.textContent = money;
    localStorage.setItem('money', money);
}

});
