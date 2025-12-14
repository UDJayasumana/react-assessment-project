import { Box, Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React, { forwardRef, useImperativeHandle } from "react";
import { useProducts } from "@/hooks/useProducts";
import { useNavigate } from "react-router-dom";

export const ProductListGrid = forwardRef(({ props }, ref) => {
  const navigate = useNavigate();

  const handleDetails = (id) => {
    navigate(`/products/${id}`);
  };

  //Destructure only required fields for this component
  const {
    list,
    listLoading,
    listError,
    paginationModel,
    setPaginationModel,
    setProductUserFilters,
  } = useProducts();

  //column values of the product list
  const columns = [
    {
      field: "id",
      headerName: "Product ID",
      flex: 1,
      width: 150,
      editable: false,
    },
    {
      field: "name",
      headerName: "Product",
      flex: 1,
      width: 150,
      editable: false,
    },
    {
      field: "category",
      headerName: "Category",
      flex: 1,
      width: 150,
      editable: false,
    },
    {
      field: "status",
      headerName: "Status",
      flex: 1,
      width: 150,
      editable: false,
    },
    {
      field: "actions",
      headerName: "Actions",
      flex: 1,
      minWidth: 150,
      sortable: false,
      filterable: false,
      disableColumnMenu: true,
      renderCell: (params) => (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100%",
            gap: 1,
          }}
        >
          <Button
            sx={{ width: "60%", height: "80%" }}
            variant="contained"
            color="primary"
            size="small"
            onClick={() => handleDetails(params.row.id)}
          >
            Details
          </Button>
        </Box>
      ),
    },
  ];

  const updateProductList = (filters) => {
    setProductUserFilters(filters);
  }

  useImperativeHandle(ref, () => ({
    updateProductList
  }))


  if (listLoading) return <h1>Loading...</h1>;
  if (listError) return <h1>Error: {listError.message}</h1>;
  if (!list || list.length === 0) return <h1>No products found</h1>;

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        minHeight: "calc(100vh - 27vh)",
      }}
    >
      <DataGrid
              columns={columns} 
              rows={list.data}
              pagination
              paginationMode='server'
              rowCount={list.count || 0}
              paginationModel={paginationModel}
              onPaginationModelChange={setPaginationModel}
              pageSizeOptions={[3]}
              disableRowSelectionOnClick
              />
    </Box>
  );
});
