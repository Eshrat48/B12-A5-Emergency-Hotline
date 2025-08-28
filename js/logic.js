document.addEventListener('DOMContentLoaded', () => {
  const heartCount = document.getElementById('heart-count');
  if (!heartCount) {
    console.error('No element with id="heart-count" found in the DOM.');
    return;
  }

  document.querySelectorAll('.card-fav').forEach(icon => {
    icon.addEventListener('click', () => {
      let currentCount = parseInt(heartCount.textContent);
      heartCount.textContent = currentCount + 1;
      console.log('Heart icon clicked!'); // Debug log
    });
  });
});