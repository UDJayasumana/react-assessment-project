import { Box } from "@mui/material";
import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BackNavPanel } from "@/components/main/BackNavPanel";
import { ProductDetailCard } from "../../components/products/ProductDetailCard";
import { useProducts } from "@/hooks/useProducts";

export const ProductDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const {
    selectedProduct,
    selectedProductLoading,
    selectedProductError,
    productID,
    setProductID,
    updateProductByID
  } = useProducts();

  useEffect(() => {
    if (id) {
      setProductID(id);
    }
  }, [id, setProductID]);

  const onUpdateProduct = (data) => {
    console.log('Update Data: ', productID);
      updateProductByID(productID, data);
  };

  const onPatchProduct = (data) => {};

  if (selectedProductLoading) return <h1>Loading...</h1>;
  if (selectedProductError)
    return <h1>Error: {selectedProductError.message}</h1>;
  if (!selectedProduct || selectedProduct.length === 0)
    return <h1>No products found</h1>;

  return (
    <Box
      component="main"
      sx={{
        background: "#D6CEC3",
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
          background: "#E3E2DC",
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
          />
        )}
      </Box>
    </Box>
  );
};
