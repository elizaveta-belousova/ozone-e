import Catalog from "../catalog/catalog";

class CartModel {
  //из корзины удаляются товары(корзина очищается)
  //в корзину добавляются товары
  //Высчитывается общая сумма товаров
  //Увеличитель кол-ва товаров
  //От увеличителя складывается сумма в зеленом(на одном товаре)
  //Счетчик на корзине
  key = 'basket'
  ids = []; //id
  sum = {
    total: null,
    single: null,
  };

  add(id) { 
    if (!this.ids.includes(id)) { //пушим айди товара в массив ids
      this.ids.push(id);
      this.saveLocalStorage();
    }
  }

  remove(id) {
    const index = this.ids.indexOf(id);  //айди товара в списке 

    if (index != -1) {
      this.ids.splice(index, 1);
      this.saveLocalStorage();
    }
  }


  saveLocalStorage() {
    window.localStorage.setItem(this.key, JSON.stringify(this.ids))
  }
  
  parseLocalStorage() {
    console.log(JSON.parse(localStorage.getItem(this.key)));
    return JSON.parse(localStorage.getItem(this.key)) //переводим из строки в массив из LS
  }
  
}

export default new CartModel();
