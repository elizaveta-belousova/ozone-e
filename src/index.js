import "./styles/style.css";
import "./index.html";

import categoryMenu from "./modules/catalog/categoryMenu";
import { openCart } from "./modules/cart/openCart";
import renderCatalog from "./modules/catalog/renderCatalog";
import cart from "./modules/cart/cart";



categoryMenu();
renderCatalog();
cart.counterBasket();