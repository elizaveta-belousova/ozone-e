import Catalog from "./catalog";

async function renderCatalog() {
  const catalog = new Catalog();
  await catalog.loadGoods();
  catalog.render();
}

export default renderCatalog;
