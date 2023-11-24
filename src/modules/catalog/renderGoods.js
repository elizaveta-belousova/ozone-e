function renderGoods(goods) {
  return goods.reduce((acc, good) => {
    return (
      acc +
      `
    <div class="main-goods__wrapper">
      <a class="main-goods__group-image">
        <img class="main-goods__image" src="${good.img}">
      </a>
      <div class="main-goods__group-des-btn">
        <div class="main-goods__group-description">
          <div class="main-goods__price">
            <div class="main-goods__price-normal">${good.price} ₽</div>
            ${
              good.sale
                ? '<div class="main-goods__price-sale">🔥Hot Sale🔥</div>'
                : ""
            }
          </div>
          <a class="main-goods__anchor-description">
            <div class="main-goods__name">
              <p>${good.title}
              </p>
            </div>
            <div class="main-goods__name-color">
            ${good.category}
            </div>
          </a>
        </div>
        <button class="main-goods__button">
          Оформить заказ
        </button>
      </div>
    </div>
    `
    );
  }, "");
}

export default renderGoods;
