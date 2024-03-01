document.addEventListener('DOMContentLoaded', function() {
    let money = parseInt(localStorage.getItem('money')) || 0;

    const moneyDisplay = document.getElementById('moneyAmount');
    const workButton = document.getElementById('workButton');

    moneyDisplay.textContent = money;

    workButton.addEventListener('click', work);

    function work() {
        money = parseInt(localStorage.getItem('money')) + 0.7; // Add 1 to the value stored in localStorage
        moneyDisplay.textContent = money;
        localStorage.setItem('money', money);
    }
});
