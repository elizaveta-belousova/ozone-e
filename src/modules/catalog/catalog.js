import { getAll } from "./api/goodsApi";
import renderGoods from "./renderGoods";

class Catalog {
  goods = [];
  filter = {
    title: "",
    price: {
      min: null,
      max: null,
    },
    sale: null,
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
