export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';
export const SAVE_PRODUCTS = 'SAVE_PRODUCTS';

export const FETCH_PRODUCTS_BY_CATEGORY = 'FETCH_PRODUCTS_BY_CATEGORY';
export const SAVE_PRODUCTS_BY_CATEGORY = 'SAVE_PRODUCTS_BY_CATEGORY';

export const FETCH_RANDOM_PRODUCTS = 'FETCH_RANDOM_PRODUCTS';
export const SAVE_RANDOM_PRODUCTS = 'SAVE_RANDOM_PRODUCTS';

export const FETCH_FAVORITE_PRODUCTS = 'FETCH_FAVORITE_PRODUCTS';
export const SAVE_FAVORITE_PRODUCTS = 'SAVE_FAVORITE_PRODUCTS';

export const FETCH_LATEST_PRODUCTS = 'FETCH_LATEST_PRODUCTS';
export const SAVE_LATEST_PRODUCTS = 'SAVE_LATEST_PRODUCTS';

export const fetchProducts = () => ({
  type: FETCH_PRODUCTS,
});

export const saveProducts = (products) => ({
  type: SAVE_PRODUCTS,
  products: products,
});

export const fetchProductsByCategory = () => ({
  type: FETCH_PRODUCTS_BY_CATEGORY,
});

export const saveProductsByCategory = (products) => ({
  type: SAVE_PRODUCTS_BY_CATEGORY,
  products: products,
});

export const fetchRandomProducts = () => ({
  type: FETCH_RANDOM_PRODUCTS,
});

export const saveRandomProducts = (randomProducts) => ({
  type: SAVE_RANDOM_PRODUCTS,
  randomProducts: randomProducts,
});

export const fetchFavoriteProducts = () => ({
  type: FETCH_FAVORITE_PRODUCTS,
});

export const saveFavoriteProducts = (favoriteProducts) => ({
  type: SAVE_FAVORITE_PRODUCTS,
  favoriteProducts: favoriteProducts,
});

export const fetchLatestProducts = () => ({
  type: FETCH_LATEST_PRODUCTS,
});

export const saveLatestProducts = (latestProducts) => ({
  type: SAVE_LATEST_PRODUCTS,
  latestProducts: latestProducts,
});
