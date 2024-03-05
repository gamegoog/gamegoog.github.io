const CRASH_CHANCE = 0.4999998;
const ROCKET_SPEED = 2000; // ms
const RESPAWN_SPEED = 840 // ms
const ERROR_AWARD = 5.8 // The amount of times cash is multiplied if the cash is below the bet amount


document.addEventListener('DOMContentLoaded', initialize);

function initialize() {
  const rocket = document.getElementById('rocket');
  updateCashDisplay();
  rocket.style.backgroundImage = "url('/gamblr/images/rocket.png')";
  document.getElementById('bet-button').addEventListener('click', placeBet);
}

	@@ -17,13 +21,12 @@ function updateCashDisplay() {

function resetRocket() {
  const rocket = document.getElementById('rocket');
  rocket.style.transition = 'opacity 0.6s ease-in-out';
  rocket.style.opacity = '0';

  setTimeout(() => {
    rocket.style.transition = 'none';
    rocket.style.backgroundImage = "url('/gamblr/images/rocket.png')";
    rocket.style.bottom = '0';
    rocket.style.left = '0';
    rocket.offsetHeight;
	@@ -67,26 +70,32 @@ function placeBet() {
  rocket.style.transition = 'bottom 2s ease-in-out, left 2s ease-in-out';
  rocket.style.bottom = newAscent + 'px';
  rocket.style.left = newForward + 'px';
  displayResult(`🚀 ...`);
  const dr = `🌑 The rocket made it. You won $${actualWonAmount.toLocaleString()}!`
  setTimeout(() => {
    if (crashChance < CRASH_CHANCE) {
      const lostAmount = betAmount;
      displayResult(`The rocket exploded. You lost $${lostAmount.toLocaleString()}!`);
      rocket.style.backgroundImage = "url('/gamblr/images/boom.png')";
      setTimeout(resetRocket, 1000);
      localStorage.setItem('cash', (cashValue - betAmount).toFixed(2));
      updateCashDisplay();

    } else {
      const randomMultiplier = (Math.random() * 3) + Math.random();
      const wonAmount = betAmount * randomMultiplier;
      const actualWonAmount = wonAmount - betAmount;
      if (actualWonAmount < (betAmount + 0.5)) {
        const wonAmount = betAmount * ERROR_AWARD;
        const actualWonAmount = wonAmount - betAmount;
        displayResult(dr)
        setTimeout(resetRocket, 480);
        localStorage.setItem('cash', (cashValue + actualWonAmount).toFixed(2));
        updateCashDisplay();
      } else {
        const wonAmount = betAmount * randomMultiplier;
        const actualWonAmount = wonAmount - betAmount;
        displayResult(dr);
        setTimeout(resetRocket, 480);
        localStorage.setItem('cash', (cashValue + actualWonAmount).toFixed(2));
        updateCashDisplay();
	@@ -98,4 +107,4 @@ function placeBet() {

function displayResult(message) {
  document.getElementById('result').textContent = message;
}
