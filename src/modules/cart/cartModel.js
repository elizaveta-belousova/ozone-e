import cart from "./cart";

class CartModel {
  //из корзины удаляются товары(корзина очищается)
  //в корзину добавляются товары
  //Высчитывается общая сумма товаров
  //Увеличитель кол-ва товаров
  //От увеличителя складывается сумма в зеленом(на одном товаре)
  //Счетчик на корзине
  key = "basket";
  ids = []; //id
  sum = {
    total: null,
    single: null,
  };

  constructor() {
    this.ids = this.parseLocalStorage();  //сохраняю при перезагрузке страницы, все что было у пользователя в local storage ему в корзину
    console.log(this.ids)
  }

  getIds() { 
    return this.ids;
  }

  add(id) {
    if (!this.ids.includes(id)) {
      //пушим айди товара в массив ids
      this.ids.push(id);
      this.saveLocalStorage();
    }
  }

  remove(id) {
    const index = this.ids.indexOf(id);

    if (index !== -1) {
      this.ids.splice(index, 1);
      this.saveLocalStorage();
    }
  }

  saveLocalStorage() {
    window.localStorage.setItem(this.key, JSON.stringify(this.ids));
  }

  parseLocalStorage() {
    return JSON.parse(localStorage.getItem(this.key)) || []; //переводим из строки в массив из LS
  }
}

export default new CartModel();
