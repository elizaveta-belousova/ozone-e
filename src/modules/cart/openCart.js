export const openCart = () => {
  const elemBasket = document.querySelector('.header__cart');
  const cart = document.querySelector('.cart');
  const crossCart = document.querySelector('.cart-body__cross');

  elemBasket.addEventListener('click', () => {
    cart.style.display = cart.style.display == 'block' ? '' : 'block';
  });

  crossCart.addEventListener('click', () => {
    cart.style.display = '' ;
  });
};
