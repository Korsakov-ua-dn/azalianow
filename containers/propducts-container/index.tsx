import React, { useCallback } from "react";
import { Product } from "../../api";
import MainLayout from "../../components/layouts/main-layout";
import Pagination from "../../components/pagination";
import ProductsList from "../../components/catalog-list";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { productsActions } from "../../store/products-slice";
import { cartActions } from "../../store/cart-slice";
import CatalogItemContainer from "../catalog-item-container";
import { favoritesActions } from "../../store/cart-slice copy";

type PropsType = {
  products: Product[];
  total: number;
};

const ProductsContainer: React.FC<PropsType> = (props) => {
  const dispatch = useAppDispatch();

  const select = useAppSelector((state) => ({
    products: state.products.data,
    total: state.products.total,
    page: state.products.page,
    limit: state.products.limit,
    cart: state.cart.data,
    loading: state.products.loading,
    error: state.products.error,
  }));

  const callbacks = {
    // Пагианция
    onPaginate: useCallback(
      (page: number) => dispatch(productsActions.setPage(page)),
      [dispatch]
    ),
    // Добавление в корзину
    addToCart: useCallback(
      (id: number, total: number) =>
        dispatch(cartActions.addToCart({ id, total })),
      [dispatch]
    ),
    // Добавление в избранное
    addToFavorites: useCallback(
      (id: number) => dispatch(favoritesActions.addToFavorites(id)),
      [dispatch]
    ),
  };

  const renders = {
    catalogItem: useCallback(
      (product: Product, i: number) => {
        if (
          i < select.limit * select.page &&
          i >= select.limit * (select.page - 1)
        ) {
          return (
            <CatalogItemContainer
              key={product.id}
              item={product}
              addToCart={callbacks.addToCart}
              addToFavorites={callbacks.addToFavorites}
            />
          );
        }
      },
      [callbacks.addToCart, callbacks.addToFavorites, select.limit, select.page]
    ),
  };

  return (
    <MainLayout title="Каталог товаров">
      <ProductsList
        products={select.products}
        renderItem={renders.catalogItem}
      />
      <Pagination
        count={select.total}
        page={select.page}
        limit={select.limit}
        indent={1}
        onChange={callbacks.onPaginate}
      />
    </MainLayout>
  );
};

export default React.memo(ProductsContainer);
