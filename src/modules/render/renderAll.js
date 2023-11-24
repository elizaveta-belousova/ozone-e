import { renderGoods } from "./renderGoods";
import { getAll } from "../../server/db";


export async function renderAll ()  {
  const goods = await getAll();
  renderGoods(goods);
}

