document.addEventListener('DOMContentLoaded', () => {
      const colorThemes = [
        "pink-mode",
        "lightpink-mode",
        "hotpink-mode",
        "deeppink-mode",
        "palevioletred-mode",
        "fuchsia-mode",
        "magenta-mode"
      ];
      let colorIndex = 0;

      const giftCard = document.querySelector('.gift-card');
      const toggleBtn = document.getElementById('theme-toggle');
      const openBtn = document.getElementById('open-surprise');

      // Flip on card click (if card exists)
      if (giftCard) {
        giftCard.addEventListener('click', () => {
          giftCard.classList.toggle('flipped');
        });
        // keyboard accessibility: Enter or Space flips card
        giftCard.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            giftCard.classList.toggle('flipped');
          }
        });
      }

      // Make the "Open Surprise" button flip the card instead of navigating
      if (openBtn && giftCard) {
        openBtn.addEventListener('click', (e) => {
          e.preventDefault();
          giftCard.classList.toggle('flipped');
        });
      }

      // Theme toggle button
      if (toggleBtn) {
        toggleBtn.addEventListener('click', () => {
          const el = document.body;
          // remove previous theme classes
          colorThemes.forEach(t => el.classList.remove(t));
          // add next
          el.classList.add(colorThemes[colorIndex]);
          colorIndex = (colorIndex + 1) % colorThemes.length;
        });
      }

      // Debug helper (optional): uncomment to log errors
      // console.log('Ready — theme toggle and flip handlers attached.');
    });