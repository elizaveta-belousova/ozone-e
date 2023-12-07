import { getById } from "../catalog/api/goodsApi";
import cartModel from "./cartModel";
import renderGoodsCart from "./renderGoodsCart";

class Cart {
  goods = []; //засунем подходящие товары сюда, которые нужно отрендерить

  elemBasket;
  cart;
  cartCross;
  cartBackground;
  cartCounter;
  goodsWrapper;
  goodsDelete;

  constructor() {
    this.elemBasket = document.querySelector(".header__cart");
    this.cart = document.querySelector(".cart");
    this.cartCross = document.querySelector(".cart-body__cross");
    this.cartBackground = document.querySelector(".cart-background");
    this.cartCounter = document.querySelector(".cart__counter");
    this.goodsWrapper = document.querySelector(".cart-body__goods");
    this.goodsDelete = document.querySelector(".mark-group__delete");

    this.elemBasket.addEventListener("click", () => {
      const isOpened = this.cart.style.display === "block";

      if (isOpened) {
        this.close();
      } else {
        this.open();
      }
    });

    this.cartCross.addEventListener("click", () => {
      this.close();
    });

    this.goodsWrapper.addEventListener("click", async (event) => {  //удаляю id товара по клику
      const button = event.target.closest(".mark-group__delete");
      if (button) {
        const id = button.getAttribute("data-cardId");
        cartModel.remove(id);
        await this.loadGoods();
        this.render();
        this.counterBasket()
      }
    });
  }

  async open() {
    this.cart.style.display = "block";
    this.cartBackground.style.display = "block";

    await this.loadGoods();
    //console.log("goods: ", cartModel.parseLocalStorage());
    this.render();
  }

  close() {
    this.cart.style.display = "none";
    this.cartBackground.style.display = "none";
  }

  counterBasket() {
    this.cartCounter.textContent = cartModel.ids.length
  }

  async loadGoods() {
    this.goods = await getById(cartModel.getIds()); //товары из local storage записываю по клику на корзину в массив goods отфильтрованные с апи по id  ['ssv4545eg7','ef5e4f5']
  }

  render() {
    document.querySelector(".cart-body__goods").innerHTML = renderGoodsCart(
      this.goods
    );
  }
}

export default new Cart();