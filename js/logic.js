document.addEventListener('DOMContentLoaded', () => {
  const heartCount = document.getElementById('heart-count');
  const coinCount = document.getElementById('coin-count');
  const copyButton = document.getElementById('copy-button');
  const heartIconContainer = document.querySelector('.heart-icon-container');

  // Increment heart count on click
  heartIconContainer.addEventListener('click', () => {
    let currentCount = parseInt(heartCount.textContent);
    heartCount.textContent = currentCount + 1;
  });

  // Handle the copy button click
  copyButton.addEventListener('click', () => {
    console.log('Copy button clicked!');
    // You could add logic here to copy something to the clipboard
    alert('Content copied!');
  });
});