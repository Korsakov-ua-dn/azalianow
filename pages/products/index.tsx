import {
  GetStaticProps,
  InferGetStaticPropsType,
} from "next";
import React, { useEffect, useCallback } from "react";
import { Product, productsApi } from "../../api";
import PropductsContainer from "../../containers/propducts-container";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { productsActions } from "../../store/products-slice";

const Products = ({
  products,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const dispatch = useAppDispatch();

  const select = useAppSelector((state) => ({
    products: state.products.data,
    total: state.products.total,
    limit: state.products.limit,
    loading: state.products.loading,
    error: state.products.error,
  }));

  const callbacks = {
    onResize: useCallback(() => {
      const width = window.innerWidth;
      switch(true) {
        case width < 576: 
          select.limit !== 1 && dispatch(productsActions.setLimit(3));
          break;
        case width < 992: 
          select.limit !== 3 && dispatch(productsActions.setLimit(3));
          break;
        case width < 1200: 
          select.limit !== 5 && dispatch(productsActions.setLimit(5));
          break;
        case width < 1920: 
          select.limit !== 7 && dispatch(productsActions.setLimit(7));
          break;
        default: 
          select.limit !== 9 && dispatch(productsActions.setLimit(9));
      }
    }, [select.limit, dispatch])
  };

  // synchronize data from the server with the store
  useEffect(() => {
    dispatch(productsActions.setPoducts({products, page: 1}));
  }, [dispatch, products]);
  
  // displaying the number of cards depending on the screen width
  useEffect(() => {
    callbacks.onResize();
    window.addEventListener("resize", callbacks.onResize)
    return () => {
      window.removeEventListener("resize", callbacks.onResize)
    }
  })

  return (
    <PropductsContainer
      products={
        typeof window === "undefined" || !select.products.length
          ? products
          : select.products
      }
      total={
        typeof window === "undefined" || !select.total
          ? products.length
          : select.total
      }
    />
  );
};

export default React.memo(Products);

export const getStaticProps: GetStaticProps<{ products: Product[] }> = async (
  ctx
) => {
  const response = await productsApi.getAll();

  return {
    props: {
      products: response.data,
    }, // will be passed to the page component as props
  };
};
