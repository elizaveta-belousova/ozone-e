import { getAll } from "./api/goodsApi";
import renderGoods from "./renderGoods";
import cartModel from "../cart/cartModel";
import renderCart from "../cart/renderCart";

class Catalog {
  goods = [];
  filter = {
    title: "",
    price: {
      min: null,
      max: null,
    },
    sale: null,
    category: "",
  };

  constructor() {
    document
      .querySelector(".search-wrapper__input")                              
      .addEventListener("input", async (event) => {
        this.filter.title = event.target.value;

        await this.loadGoods();
        this.render();
      });

    document
      .querySelector("#min")
      .addEventListener("change", async (event) => {  
        this.filter.price.min = +event.target.value;    //записываем введенное значение 16499

        await this.loadGoods();
        this.render();
      })
    
      document
      .querySelector("#max")
      .addEventListener("change", async (event) => {  
        this.filter.price.max = +event.target.value;    //записываем введенное значение 33990

        await this.loadGoods();  //запускаю каждый раз loadgoods который передает в массив goods отфильтрованный товар с api
        this.render();                                //рендерю отфильтрованные товары лежащие в goods
      })

      document
      .querySelector(".filter-checkbox__real")                              
      .addEventListener("change", async (event) => {
        this.filter.sale = event.target.checked == true ? true : null;
        await this.loadGoods();
        this.render();
      });
      
      document
      .querySelector(".catalog__list")                              
      .addEventListener("click", async (event) => {
        this.filter.category = event.target.innerText    //записала: Игры и софт/Переферия для ПК...
        await this.loadGoods();
        this.render();
      });

      //корзина
      document
      .querySelector(".main__goods")
      .addEventListener("click", (event) => {
        if (event.target.className === 'main-goods__button') {
          cartModel.add(event.target.dataset.cardid);                 //записываю id товара по клику
          //renderCart()
        }
      });

      document
      .querySelector(".cart-body__goods")
      .addEventListener("click", (event) => {
        if (event.target.className === 'main-mark-group__delete') {
          cartModel.remove(event.target.dataset.cardid)                 //удаляю id товара по клику
        }
      });
  }

  async loadGoods() {
    this.goods = await getAll(this.filter); //передаю в массив-goods -> отфильтрованный товар с api 
  }

  render() {
    console.log(this.goods)
    document.querySelector(".main__goods").innerHTML = renderGoods(this.goods);  //запускаю рендер с отфильтрованными товарами лежащии в goods
  }
}

export default Catalog;
