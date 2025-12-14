import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TableSortLabel, Typography } from "@mui/material";
import React, { useState } from "react";
import { Badge } from "../main/Badge";

const rows = [
  { id: 1, product: 'Apple', status: 'PENDING' },
  { id: 2, product: 'Orange', status: 'PENDING' },
  { id: 3, product: 'Banana', status: 'CANCELLED' },
  { id: 4, product: 'Mango', status: 'DELIVERED' },
  { id: 5, product: 'Grapes', status: 'SHIPPED' },
  { id: 6, product: 'Pineapple', status: 'PENDING' },
  { id: 7, product: 'Papaya', status: 'SHIPPED' },
  { id: 8, product: 'Watermelon', status: 'CANCELLED' },
  { id: 9, product: 'Strawberry', status: 'PENDING' },
  { id: 10, product: 'Blueberry', status: 'DELIVERED' },
  { id: 11, product: 'Kiwi', status: 'SHIPPED' },
  { id: 12, product: 'Peach', status: 'CANCELLED' },
  { id: 13, product: 'Pear', status: 'SHIPPED' },
  { id: 14, product: 'Plum', status: 'DELIVERED' },
  { id: 15, product: 'Cherry', status: 'SHIPPED' },
];


export const OrderListTable = () => {

  //Determine sorting direction
  const [order, setOrder] = useState('asc');
  //Determine which column going to sort
  const [orderBy, setOrderBy] = useState('status');

  const handleSort = (property) => {
    //Are we sorting and the order ascending?
    const isAsc = orderBy === property && order === 'asc';
    //Toggle to opposite
    setOrder(isAsc ? 'desc' : 'asc');
    //Set the active column
    setOrderBy(property);
  };

  //Sorting algorithm and useMemo use to memorize
  //because we not need to recreate this little heave function again and again
  const sortedRows = React.useMemo(() => {
    return [...rows].sort((a, b) => {
      if (a[orderBy] < b[orderBy]) return order === 'asc' ? -1 : 1;
      if (a[orderBy] > b[orderBy]) return order === 'asc' ? 1 : -1;
      return 0;
    });
  }, [order, orderBy]);


  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        minHeight: "calc(100vh - 27vh)",
      }}
    >
    <TableContainer component={Paper} sx={{height: '73vh'}}>
    <Table>
        <TableHead>
          <TableRow>
            <TableCell>

            <TableSortLabel
                active={orderBy === 'id'}
                direction={orderBy === 'id' ? order : 'asc'}
                onClick={() => handleSort('id')}
              >
                ID
            </TableSortLabel>
            </TableCell>

            <TableCell>
              <TableSortLabel
                  active={orderBy === 'product'}
                  direction={orderBy === 'product' ? order : 'asc'}
                  onClick={() => handleSort('product')}
                >
                Product
              </TableSortLabel>
            </TableCell>

            <TableCell>
              <TableSortLabel
                  active={orderBy === 'status'}
                  direction={orderBy === 'status' ? order : 'asc'}
                  onClick={() => handleSort('status')}
                >
                Status
              </TableSortLabel>
            </TableCell>



            </TableRow>
            </TableHead>

              <TableBody>
              {sortedRows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.product}</TableCell>
              <TableCell>
              
                <Badge bgColor='#CC7462' textColor='#961558' width={130} height={30} text={row.status}/>
              </TableCell>
            </TableRow>
              ))}
              </TableBody>

            </Table>
      </TableContainer>
    </Box>
  );
};
