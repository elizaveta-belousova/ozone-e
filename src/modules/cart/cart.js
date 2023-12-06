import { getById } from "../catalog/api/goodsApi";
import cartModel from "./cartModel";
import renderGoodsCart from "./renderGoodsCart";

class Cart {
  goods = []; //засунем подходящие товары сюда, которые нужно отрендерить

  elemBasket;
  cart;
  crossCart;

  constructor() {
    this.elemBasket = document.querySelector('.header__cart');
    this.cart = document.querySelector('.cart');
    this.crossCart = document.querySelector('.cart-body__cross');

    document.querySelector(".header__cart").addEventListener("click", () => {
      const isOpened = this.cart.style.display === 'block';

      console.log(isOpened);

      if (isOpened) {
        this.close();
      } else {
        this.open();
      }

    });
  }

  async open() {
    this.cart.style.display = 'block';

    await this.loadGoods();
    console.log("goods: ", cartModel.parseLocalStorage());
    this.render();
  }

  close() {
    this.cart.style.display = 'none';
  }

  
  async loadGoods() {
    this.goods = await getById(cartModel.parseLocalStorage()); //товары из local storage записываю по клику на корзину в массив goods отфильтрованные с апи по id  ['ssv4545eg7','ef5e4f5']
  }

  render() {
    document.querySelector(".cart-body__goods").innerHTML = renderGoodsCart(
      this.goods
    );
  }
}

export default Cart;