import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableSortLabel,
  Typography,
} from "@mui/material";
import React, { forwardRef, useImperativeHandle, useState } from "react";
import { Badge } from "../main/Badge";
import { useOrders } from "../../hooks/useOrders";

export const OrderListTable = forwardRef(({props}, ref) => {
  const { list, listLoading, listError, setOrderUserFilters } = useOrders();

 const updateOrdersList = (filters) => {
    setOrderUserFilters(filters);
  }

  useImperativeHandle(ref, () => ({
    updateOrdersList
  }))

  //Determine sorting direction
  const [order, setOrder] = useState("asc");
  //Determine which column going to sort
  const [orderBy, setOrderBy] = useState("status");

  const handleSort = (property) => {
    //Are we sorting and the order ascending?
    const isAsc = orderBy === property && order === "asc";
    //Toggle to opposite
    setOrder(isAsc ? "desc" : "asc");
    //Set the active column
    setOrderBy(property);
  };

  //Sorting algorithm and useMemo use to memorize
  //because we not need to recreate this little heave function again and again
  const sortedRows = React.useMemo(() => {
    return [...(list.data || [])].sort((a, b) => {
      if (a[orderBy] < b[orderBy]) return order === "asc" ? -1 : 1;
      if (a[orderBy] > b[orderBy]) return order === "asc" ? 1 : -1;
      return 0;
    });
  }, [order, orderBy, list.data]);

  if (listLoading) return <h1>Loading...</h1>;
  if (listError) return <h1>Error: {listError.message}</h1>;
  if (!list || list.length === 0) return <h1>No orders found</h1>;

  
  
  const statusColors = {
    pending: { bg: "#FF9800", text: "#FFFFFF" },
    shipped: { bg: "#42B1FF", text: "#FFFFFF" },
    delivered: { bg: "#C0CC18", text: "#FFFFFF" },
    cancelled: { bg: "#F44336", text: "#FFFFFF" },
    // Add more statuses as needed
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        minHeight: "calc(100vh - 27vh)",
      }}
    >
      <TableContainer component={Paper} sx={{ height: "73vh" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <TableSortLabel
                  active={orderBy === "id"}
                  direction={orderBy === "id" ? order : "asc"}
                  onClick={() => handleSort("id")}
                >
                  ID
                </TableSortLabel>
              </TableCell>

              <TableCell>
                <TableSortLabel
                  active={orderBy === "product"}
                  direction={orderBy === "product" ? order : "asc"}
                  onClick={() => handleSort("product")}
                >
                  Product
                </TableSortLabel>
              </TableCell>

              <TableCell>
                <TableSortLabel
                  active={orderBy === "status"}
                  direction={orderBy === "status" ? order : "asc"}
                  onClick={() => handleSort("status")}
                >
                  Status
                </TableSortLabel>
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {sortedRows.map((row) => {
              const colorConfig = statusColors[row.status.toLowerCase()] || {
                bg: "#403E3E",
                text: "#961558",
              };

              return (
                <TableRow key={row.id}>
                  <TableCell>{row.id}</TableCell>
                  <TableCell>{row.product}</TableCell>
                  <TableCell>
                    <Badge
                      bgColor={colorConfig.bg}
                      textColor={colorConfig.text}
                      width={130}
                      height={30}
                      text={row.status}
                    />
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
});
