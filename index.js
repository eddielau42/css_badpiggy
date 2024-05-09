(function main() {
  const STYLE_PIXEL = 'pixel';

  const styleSwitch = () => {
    document.body.classList.toggle(STYLE_PIXEL);
  };
  
  document.querySelector('.switcher').addEventListener('click', styleSwitch);
  document.querySelector('.piggy .nose').addEventListener('click', styleSwitch);
  
})();