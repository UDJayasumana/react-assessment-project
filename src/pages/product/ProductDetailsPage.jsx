import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BackNavPanel } from "@/components/main/BackNavPanel";
import { ConfirmDialog } from "@/components/dialogbox/ConfirmDialog";
import { ProductDetailCard } from "../../components/products/ProductDetailCard";
import { useProducts } from "@/hooks/useProducts";
import { useDispatch } from "react-redux";
import {
  resetPatchedProduct,
  resetUpdatedProduct,
} from "../../features/products/productSlice";

export const ProductDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const [openDialog, setOpenDialog] = useState(false);
  const [dialogData, setDialogData] = useState({
    title: "Untitled",
    message: "Are you sure?",
    confirmBtnLabel: "OK",
    cancelBtnLabel: "Cancel",
    action: "PUT",
    data: {},
  });

  const handleDialog = () => {
    if (dialogData.action === "PUT") {
      updateProductByID(productID, dialogData.data);
    }
    if (dialogData.action === "PATCH") {
      patchProductByID(productID, dialogData.data);
    }
    setOpenDialog(false);
  };

  const {
    selectedProduct,
    selectedProductLoading,
    selectedProductError,
    productID,
    setProductID,
    updateProductByID,
    updatedProduct,
    patchProductByID,
    patchedProduct,
  } = useProducts();

  useEffect(() => {
    if (id) {
      setProductID(id);
    }
  }, [id, setProductID]);

  useEffect(() => {
    if (updatedProduct.success || patchedProduct.success) {
      setTimeout(() => {
        navigate(-1);
      }, 1000);

      if (updatedProduct.success) dispatch(resetUpdatedProduct());
      if (patchedProduct.success) dispatch(resetPatchedProduct());
    }
  }, [updatedProduct, patchedProduct]);

  const onUpdateProduct = (data) => {
    setDialogData({
      title: "Update Product",
      message: "Are you sure you want to update this entire product?",
      confirmBtnLabel: "Yes",
      cancelBtnLabel: "Cancel",
      action: "PUT",
      data,
    });
    setOpenDialog(true);
  };

  const onPatchProduct = (data) => {
    setDialogData({
      title: "Update Field",
      message: "Are you sure you want to update only one field?",
      confirmBtnLabel: "Yes",
      cancelBtnLabel: "Cancel",
      action: "PATCH",
      data,
    });
    setOpenDialog(true);
  };

  if (selectedProductLoading) return <h1>Loading...</h1>;
  if (selectedProductError)
    return <h1>Error: {selectedProductError.message}</h1>;
  if (!selectedProduct || selectedProduct.length === 0)
    return <h1>No products found</h1>;

  return (
    <Box
      component="main"
      sx={{
        // background: "#D6CEC3",
        flex: 1,
        width: "100%",
        height: "100%",
      }}
    >
      <BackNavPanel onBackClick={() => navigate(-1)} />

      {/* Main Product Card Showing Area */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "94%",
          flex: 1,
          minHeight: 0,
          overflow: "auto",
          // background: "#E3E2DC",
        }}
      >
        {selectedProduct?.data && (
          <ProductDetailCard
            productName={selectedProduct.data.name}
            price={selectedProduct.data.price}
            description={selectedProduct.data.description}
            initialStock={selectedProduct.data.stock}
            initialStatus={
              selectedProduct.data.status === "ACTIVE" ? true : false
            }
            onUpdateProduct={onUpdateProduct}
            onPatchProduct={onPatchProduct}
            fallbackCardImgUrl={selectedProduct.data.imageUrl}
          />
        )}
      </Box>

      <ConfirmDialog
        open={openDialog}
        title={dialogData.title}
        message={dialogData.message}
        onClose={() => setOpenDialog(false)}
        onConfirm={handleDialog}
        confirmText={dialogData.confirmBtnLabel}
        cancelText={dialogData.cancelBtnLabel}
      />
    </Box>
  );
};
