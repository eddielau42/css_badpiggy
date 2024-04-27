(function main() {
  const STYLE_PIXEL = 'pixel';
  const switcher = document.querySelector('.switcher');
  if (switcher) {
    switcher.addEventListener('click', () => {
      document.body.classList.toggle(STYLE_PIXEL);
    });
  }
})();