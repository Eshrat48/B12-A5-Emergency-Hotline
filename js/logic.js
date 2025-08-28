document.addEventListener('DOMContentLoaded', () => {
  const heartCount = document.getElementById('heart-count');
  const coinCount = document.getElementById('coin-count');
  const historyList = document.querySelector('.history-list');

  // Heart icon logic
  document.querySelectorAll('.card-fav').forEach(icon => {
    icon.addEventListener('click', () => {
      let currentCount = parseInt(heartCount.textContent);
      heartCount.textContent = currentCount + 1;
    });
  });

  // Call button logic
  document.querySelectorAll('.card-call').forEach(btn => {
    btn.addEventListener('click', function () {
      // Find service name and number from the card
      const card = btn.closest('.hotline-card');
      const serviceName = card.querySelector('.card-title').textContent;
      const serviceNumber = card.querySelector('.card-number').textContent;

      // Check coins
      let coins = parseInt(coinCount.textContent);
      if (coins < 20) {
        alert('Not enough coins to make a call!');
        return;
      }

      // Show alert
      alert(`Calling ${serviceName} (${serviceNumber})`);

      // Deduct coins
      coinCount.textContent = coins - 20;

      // Add to history
      const time = new Date().toLocaleTimeString();
      const li = document.createElement('li');
      li.className = 'history-item';
      li.innerHTML = `
        <span class="history-name">${serviceName}</span>
        <span class="history-number">${serviceNumber}</span>
        <span class="history-time">${time}</span>
      `;
      historyList.prepend(li); // Add to top of history
    });
  });
});