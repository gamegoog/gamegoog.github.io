document.addEventListener('DOMContentLoaded', function() {
    let money = localStorage.getItem('money') || 100;

    const moneyDisplay = document.getElementById('moneyAmount');
    const workButton = document.getElementById('workButton');

    moneyDisplay.textContent = money;

    workButton.addEventListener('click', work);

    function work() {
        money = parseInt(money) + 1; // Earn $1 for each click
        moneyDisplay.textContent = money;
        localStorage.setItem('money', money);
    }
});
