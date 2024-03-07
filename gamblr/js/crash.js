function placeBet() {
  const betAmount = parseFloat(document.getElementById('bet-amount').value);
  let cashValue = parseFloat(localStorage.getItem('cash')) || 0;
  
  document.getElementById('bet-button').disabled = true;
  
  if (isNaN(betAmount) || betAmount <= 0 || betAmount > cashValue) {
    displayResult('Invalid bet or insufficient funds!');
    document.getElementById('bet-button').disabled = false;
    return;
  }

  const ascent = 260;
  const forward = 300;
  const crashChance = Math.random();

  const rocket = document.getElementById('rocket');
  const rocketContainer = document.getElementById('rocket-container');

  const containerWidth = rocketContainer.clientWidth;
  const containerHeight = rocketContainer.clientHeight;

  const rocketWidth = rocket.offsetWidth;
  const rocketHeight = rocket.offsetHeight;

  const maxForward = containerWidth - rocketWidth;
  const maxAscent = containerHeight - rocketHeight;

  const newForward = Math.min(maxForward, forward);
  const newAscent = Math.min(maxAscent, ascent);

  rocket.style.transition = 'bottom 2s ease-in-out, left 2s ease-in-out';
  rocket.style.bottom = newAscent + 'px';
  rocket.style.left = newForward + 'px';
  displayResult("🚀 ...");

  setTimeout(() => {
    let lostAmount = betAmount;
    let actualWonAmount = 0;

    if (crashChance < CRASH_CHANCE) {
      displayResult(`💥 The rocket exploded. You lost $${betAmount.toLocaleString()}!`);
      rocket.style.backgroundImage = "url('/gamblr/images/boom.png')";
      setTimeout(resetRocket, 1000);
      cashValue -= betAmount; // Deduct bet amount from cash
    } else {
      const randomMultiplier = randomIntFromInterval(1, 3);
      const wonAmount = betAmount * randomMultiplier;
      actualWonAmount = wonAmount - betAmount;
      
      if (actualWonAmount < (betAmount + 0.5)) {
        actualWonAmount = betAmount * ERROR_AWARD;
      }

      displayResult(`🌑 The rocket made it! You won $${actualWonAmount.toLocaleString()}!`);
      setTimeout(resetRocket, 480);
      cashValue += actualWonAmount; // Add winnings to cash
    }

    localStorage.setItem('cash', cashValue.toFixed(2));
    updateCashDisplay();
  }, ROCKET_SPEED);
}
