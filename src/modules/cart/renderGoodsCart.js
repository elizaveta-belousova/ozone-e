function renderGoodsCart(goods) {

  if (goods.length === 0) {
    return  `
      <div id="cart-empty">
        Ваша корзина пока пуста
      </div>
      `
  } return goods.reduce((acc, good) => {
      return (acc + `
        <div class="cart-goods__wrapper">
              <div class="cart-goods__chekbox">
                <label class="goods-chekbox__label">
                  <input type="checkbox" class="goods-chekbox__real">
                  <span class="goods-chekbox__custom"></span>
                </label>
              </div>
              <div class="cart-goods__container-description">
                <div class="cart-goods__image">
                  <img class="cart-goods__image-contain"  src="${good.img}">
                </div>
                <div class="cart-goods__group-description">
                  <a class="cart-goods__anchor-description">
                    <div class="cart-goods__name">
                      <p>${good.title}
                      </p>
                    </div>
                    <div class="cart-goods__name-color">
                      ${good.category}
                    </div>
                  </a>
                  <div class="cart-goods__mark-group">
                    <button class="mark-group__favorites">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" class="01">
                        <path fill="currentColor" d="M16 5.522C16 2.957 14.052 1 11.5 1c-1.432 0-2.665.799-3.5 1.926C7.165 1.799 5.932 1 4.5 1 1.948 1 0 2.957 0 5.522c0 2.457 1.66 4.415 3.241 5.743 1.617 1.358 3.387 2.258 4.062 2.577.444.21.95.21 1.394 0 .675-.32 2.445-1.219 4.062-2.577C14.339 9.937 16 7.979 16 5.522Z">
                        </path>
                      </svg>
                    </button>
                    <button class="mark-group__delete" data-cardId="${good.id}">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" class="ag018-a2">
                        <path fill="currentColor" d="m4.888 3.035.275-.826A2.5 2.5 0 0 1 7.535.5h.93a2.5 2.5 0 0 1 2.372 1.71l.275.825c2.267.09 3.555.406 3.555 1.527 0 .938-.417.938-1.25.938H2.583c-.833 0-1.25 0-1.25-.938 0-1.12 1.288-1.437 3.555-1.527Zm1.856-.299-.088.266C7.082 3 7.53 3 8 3c.47 0 .918 0 1.345.002l-.089-.266a.833.833 0 0 0-.79-.57h-.931a.833.833 0 0 0-.79.57ZM2.167 7.167c0-.6.416-.834.833-.834h10c.417 0 .833.235.833.834 0 6.666-.416 8.333-5.833 8.333s-5.833-1.667-5.833-8.333Zm4.166 1.666a.833.833 0 0 0-.833.834v1.666a.833.833 0 1 0 1.667 0V9.667a.833.833 0 0 0-.834-.834Zm4.167.834a.833.833 0 1 0-1.667 0v1.666a.833.833 0 1 0 1.667 0V9.667Z">
                        </path>
                      </svg>
                    </button>
                  </div>
                </div>
                <div class="cart-goods__price">
                  <div class="cart-goods__price-normal">${good.price}</div>
                  ${good.sale ? `<div class="cart-goods__price-sale">🔥Hot Sale🔥</div>`: ''}
                </div>
              </div>
              <div class="cart-goods__count-wrapp">
                <button class="count-wrapp__minus">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" class="a2429-e9"><path fill="currentColor" d="M5 11a1 1 0 1 0 0 2h14a1 1 0 1 0 0-2H5Z"></path>
                  </svg>
                </button>
                <input type="number" class="count-wrapp__numeric">
                <button class="count-wrapp__plus">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" class="a2429-e9"><path fill="currentColor" d="M12 4a1 1 0 0 0-1 1v6H5a1 1 0 1 0 0 2h6v6a1 1 0 1 0 2 0v-6h6a1 1 0 1 0 0-2h-6V5a1 1 0 0 0-1-1Z"></path>
                  </svg>
                </button>
              </div>
            </div>
          `);
  },"");
}


export default renderGoodsCart;