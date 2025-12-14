import { Box, MenuItem, Select, Slider, TextField, Typography, useTheme } from "@mui/material";
import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  filterTextField,
  filterCommonFields,
} from "@/styles/main/FilterField.styles";
import {
  PRODUCT_CATEGORIES,
  PRODUCT_MAX_PRICE,
  PRODUCT_MIN_PRICE,
} from "@/constants/products";
import FilterPanel from "../../components/main/FilterPanel";
import {ProductListGrid} from "@/components/products/ProductListGrid";

export const ProductListPage = () => {
  const theme = useTheme();
  const productListRef = useRef();

  // Filter ui hooks
  const [productName, setProductName] = useState("");
  const [productCategory, setProductCategory] = useState("all");
  const [priceRange, setPriceRange] = useState([
    PRODUCT_MIN_PRICE,
    PRODUCT_MAX_PRICE,
  ]);
  const [reseted, setReseted] = useState(false);

  //Memorize ui value recieving function
  const getFilters = useCallback(() => {
    const filters = {};
    if (productName.trim().length != 0) filters["name"] = productName;
    if (
      productCategory.trim().length != 0 &&
      productCategory !== PRODUCT_CATEGORIES[0].value
    )
      filters["category"] = productCategory;
    if (priceRange[0] != PRODUCT_MIN_PRICE) filters["minPrice"] = priceRange[0];
    if (priceRange[1] != PRODUCT_MAX_PRICE) filters["maxPrice"] = priceRange[1];

    return filters;
  }, [productName, productCategory, priceRange]);

  //Memorize filter submit 
  const onSubmit = useCallback(
    (values) => {
      if (productListRef.current) {
        productListRef.current.updateProductList(getFilters());
      }
    },
    [productName, productCategory, priceRange, getFilters]
  );

  //Memorize filter reset 
  const onReset = useCallback(() => {
    setProductName("");
    setProductCategory("all");
    setPriceRange([PRODUCT_MIN_PRICE, PRODUCT_MAX_PRICE]);
    setReseted(true);

    productListRef.current.updateProductList();
  }, [PRODUCT_MIN_PRICE, PRODUCT_MAX_PRICE]);

  //Trigger filter resets
  useEffect(() => {
    if (reseted) {
      const data = {
        name: productName,
        category: productCategory,
        price: priceRange[1],
      };
      onSubmit(data);
    }
  }, [reseted]);

  //Get array input value
  const handlePriceChange = (event, newValue) => {
    setPriceRange(newValue);
  };

  return (
    <Box
      sx={{
        // background: "#6267CC",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",

          //Make Child element Responsive
          [theme.breakpoints.up("xs")]: { height: "320px" },
          [theme.breakpoints.up("sm")]: { height: "320px" },
          [theme.breakpoints.up("md")]: { height: "280px" },
          [theme.breakpoints.up("lg")]: { height: "220px" },
          [theme.breakpoints.up("xl")]: { height: "180px" },
        }}
      >
        <FilterPanel onSubmit={onSubmit} onReset={onReset}>
          {/* Product Name */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              height: "50px",
            }}
          >
            <Typography sx={{ minWidth: "140px", fontWeight: "bold" }}>
              Product Name:
            </Typography>
            <TextField
              value={productName}
              sx={{ ...filterTextField(), ...filterCommonFields(theme) }}
              placeholder="Enter Product Name..."
              name="name"
              required
              onChange={(e) => {
                setProductName(e.target.value);
                setReseted(false);
              }}
            />
          </Box>

          {/* Product Category */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              width: "400px",
              height: "50px",
            }}
          >
            <Typography sx={{ minWidth: "140px", fontWeight: "bold" }}>
              Product Category:
            </Typography>
            <Select
              name="category"
              defaultValue="all"
              sx={{ ...filterCommonFields(theme) }}
              value={productCategory}
              onChange={(e) => {
                setProductCategory(e.target.value);
                setReseted(false);
              }}
            >
              {PRODUCT_CATEGORIES.map((category, index) => (
                <MenuItem key={index} value={category.value}>
                  {category.label}
                </MenuItem>
              ))}
            </Select>
          </Box>

          {/* Price Range */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Typography sx={{ minWidth: "140px", fontWeight: "bold" }}>
              Price Range:
            </Typography>

            <Box sx={{ ...filterCommonFields(theme) }}>
              <Slider
                value={priceRange}
                onChange={(e, value) => {
                  handlePriceChange(e, value);
                  setReseted(false);
                }}
                valueLabelDisplay="auto"
                min={PRODUCT_MIN_PRICE}
                max={PRODUCT_MAX_PRICE}
                step={100}
                disableSwap
                name="price"
                data-slider="true"
              />
              <Typography variant="caption" sx={{ fontWeight: "bold" }}>
                Rs. {priceRange[0]} – Rs. {priceRange[1]}
              </Typography>
            </Box>
          </Box>
        </FilterPanel>
      </Box>

      <Box sx={{
        background: '#656935',
        width: '100%',
        flex: 1 
      }}>
        <ProductListGrid ref={productListRef} />
      </Box>


    </Box>
  );
};
