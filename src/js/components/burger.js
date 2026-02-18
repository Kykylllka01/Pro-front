export const useBurger = () => {
  const burgerBtn = document.querySelector('[data-burger="btn"]');
  const overlay = document.querySelector('[data-burger="overlay"]');
  const menu = document.querySelector('[data-burger="menu"]');

  const closeBurgerMenu = () => {
    burgerBtn.classList.remove('burger--active');
    overlay.classList.remove('overlay--active');
    menu.classList.remove('header__right--active');
  };

  burgerBtn.addEventListener('click', () => {
    burgerBtn.classList.toggle('burger--active');
    overlay.classList.toggle('overlay--active');
    menu.classList.toggle('header__right--active');
  });

  overlay.addEventListener('click', () => {
    closeBurgerMenu();
  });
};
