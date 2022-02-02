import api from './api';
import {
  FETCH_PRODUCTS_BY_CATEGORY,
  saveProductsByCategory,
} from '../actions/products';


// const categorySlug = window.location.pathname;
// console.log(categorySlug);

const productsMiddleware = (store) => (next) => (action) => {
  const slugURL = store.getState().user.slug;
  console.log(slugURL);
  switch (action.type) {
    case FETCH_PRODUCTS_BY_CATEGORY:
      console.log('appel à fetch products by category');
      // API call to get the products
      api.get(`/categories/${slugURL}/products`)
        .then((response) => {
          const { products } = response.data;
          console.log(products);
          store.dispatch(saveProductsByCategory(products));
        })
        .catch((error) => {
          console.log(error);
        });

      break;
    default:
  }

  next(action);
};

export default productsMiddleware;
