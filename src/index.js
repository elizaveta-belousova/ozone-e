import "./styles/style.css";
import "./index.html";

import catalogOld from "./modules/catalogOld";
import { openCart } from "./modules/cart/openCart";
import renderCatalog from "./modules/catalog/renderCatalog";


catalogOld();
openCart();
renderCatalog();
