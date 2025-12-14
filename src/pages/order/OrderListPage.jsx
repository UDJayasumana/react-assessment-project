import { Box, MenuItem, Select, TextField, Typography, useTheme } from '@mui/material'
import React, { useState } from 'react'
import {
    filterTextField,
    filterCommonFields,
  } from "@/styles/main/FilterField.styles";
import FilterPanel from '../../components/main/FilterPanel';
import { ORDER_STATUSES } from '../../constants/orders';
import { OrderListTable } from '../../components/orders/OrderListTable';

export const OrderListPage = () => {

    const theme = useTheme();

      // Filter ui hooks
      const [productName, setProductName] = useState("");
      const [orderStatus, setOrderStatus] = useState("all");
      const [reseted, setReseted] = useState(false);

  return (
    <Box
      sx={{
        //  background: "#6267CC",
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

        <FilterPanel>

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
              Order Status:
            </Typography>
            <Select
              name="status"
              defaultValue="all"
              sx={{ ...filterCommonFields(theme) }}
              value={orderStatus}
              onChange={(e) => {
                setOrderStatus(e.target.value);
                setReseted(false);
              }}
            >
              {ORDER_STATUSES.map((status, index) => (
                <MenuItem key={index} value={status.value}>
                  {status.label}
                </MenuItem>
              ))}
            </Select>
          </Box>

        </FilterPanel>
      </Box>

      <Box sx={{
        background: '#656935',
        width: '100%',
        flex: 1 
      }}>
         <OrderListTable />
      </Box>

    </Box>
  )
}