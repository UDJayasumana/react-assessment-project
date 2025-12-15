import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchOrders } from "../features/orders";

export const useOrders = () => {
  const dispatch = useDispatch();

  const { list, listLoading, listError } = useSelector((state) => state.orders);

  //#region productList state handling

    //hook for handle user's filter actions
    const [orderUserFilters, setOrderUserFilters] = useState({});

  //Memorize fetchOrders function
  const getAllOrders = useCallback(
    (filters) => dispatch(fetchOrders(filters)),
    [dispatch]
  );

  useEffect(()=>{
    const newFilters = {...(orderUserFilters || null)}
    getAllOrders(newFilters);
  }, [orderUserFilters, getAllOrders])
  //#endregion

  return {
    list,
    listLoading,
    listError,
    getAllOrders,
    setOrderUserFilters
  };
};
