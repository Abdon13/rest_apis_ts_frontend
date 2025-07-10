 import { createBrowserRouter } from "react-router-dom";
import Layaut from "./layauts/Layaut";
import Products from "./views/Products";
import {loader as productsLoader} from "./actions/Products.action";
import {action as updateAvailabilityAction} from "./actions/Products.action";
import NewProduct, {action as newProductAction} from "./views/NewProduct";
import EditProduct, {loader as editProductLoader, action as editProductAction} from "./views/EditProduct";
import { action as deleteProductAction } from "./actions/ProductDetails.action";

 export const router = createBrowserRouter([//En este router se va declarando las rutas en un arreglo después se define las rutas en un objeto
    {
        path: '/',//Primer path en este caso es la pagina principal
        element: <Layaut/>,
        children: [
            {
                index: true,//Hacemos que el hijo "Products" se muestre junto a la pagina principal
                element: <Products/>,
                loader: productsLoader,
                action: updateAvailabilityAction
            },
            {
                path: 'productos/nuevo', //Segundo path esta se muestra al visitar la pagina productos/nuevo
                element: <NewProduct/>,
                action: newProductAction //Función que se ejecuta al presionar agregar en newProduct
            },
            {
                path:'productos/:id/editar', //ROA Pattern - Resource-oriented design para activar el botón editar
                element: <EditProduct/>,
                loader: editProductLoader,
                action: editProductAction
            },
            {
                path:'productos/:id/eliminar',
                action: deleteProductAction
            }
        ]
    }
 ])