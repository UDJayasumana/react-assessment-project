import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProducts,
  fetchProductById,
  updateProductById,
  patchProductById,
} from "../features/products";

export const useProducts = () => {
  const dispatch = useDispatch();

  const {
    list,
    listLoading,
    listError,
    selectedProduct,
    selectedProductLoading,
    selectedProductError,
    updatedProduct,
    updatedProductLoading,
    updatedProductError,
    patchedProduct,
    patchedProductLoading,
    patchedProductError,
  } = useSelector((state) => state.products);

  //#region productList state handling

  //hook for handle product list grid pagination
  const [paginationModel, setPaginationModel] = useState({
    page: 0,
    pageSize: 3,
  });

  //hook for handle user's filter actions
  const [productUserFilters, setProductUserFilters] = useState({});

  //Memorize fetchProducts function
  const getAllProducts = useCallback(
    (filters) => dispatch(fetchProducts(filters)),
    [dispatch]
  );

  // Fetch product list with filters if exists
  // This will update in pagination and filter changes
  useEffect(() => {
    const newFilters = {
      ...(productUserFilters || null),
      page: paginationModel.page + 1,
      limit: paginationModel.pageSize,
    };
    getAllProducts(newFilters);
  }, [
    paginationModel.page,
    paginationModel.pageSize,
    productUserFilters,
    getAllProducts,
  ]);

  //#endregion

  //#region selected product
  const [productID, setProductID] = useState(null);
  //Memorize actions
  const getProductByID = useCallback(
    (id) => id && dispatch(fetchProductById(id)),
    [dispatch]
  );

  useEffect(() => {
    getProductByID(productID);
  }, [productID, getProductByID]);

  //#endregion

  //#region updated product

  // Memoize update action - this just creates the function, doesn't call it
  const updateProductByID = useCallback(
    (id, updateData) => {
      if (id && updateData) {
        return dispatch(updateProductById({ id: id, ...updateData }));
      }
    },
    [dispatch]
  );

  //#endregion

  //#region patched product

  // Memoize patch action - this just creates the function, doesn't call it
  const patchProductByID = useCallback(
    (id, patchData) => {
      if (id && patchData) {
        return dispatch(patchProductById({ id: id, ...patchData }));
      }
    },
    [dispatch]
  );

  //#endregion

  return {
    list,
    listLoading,
    listError,
    paginationModel,
    setPaginationModel,
    getAllProducts,
    setProductUserFilters,
    selectedProduct,
    selectedProductLoading,
    selectedProductError,
    productID,
    setProductID,
    updatedProduct,
    updatedProductLoading,
    updatedProductError,
    updateProductByID,
    patchedProduct,
    patchedProductLoading,
    patchedProductError,
    patchProductByID,
  };
};
