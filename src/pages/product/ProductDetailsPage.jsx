import { Box } from "@mui/material";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BackNavPanel } from '@/components/main/BackNavPanel';
import { ProductDetailCard } from "../../components/products/ProductDetailCard";

export const ProductDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const onUpdateProduct = (data) => {};

  const onPatchProduct = (data) => {};


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
        <Box sx={{
                display:'flex',
                justifyContent: 'center',
                alignItems: 'center', 
                height: '94%',
                flex: 1,
                minHeight: 0, 
                overflow: 'auto',
                background: '#E3E2DC'
            }}>
              <ProductDetailCard />
        </Box>

    </Box>
  );
};
