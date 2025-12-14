import { Box, Button } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import React, { forwardRef } from 'react'
import { useNavigate } from 'react-router-dom'

export const ProductListGrid = forwardRef(({props}, ref) => {


    const navigate = useNavigate()

    const handleDetails = (id) => {
        navigate(`/products/${id}`);
      }

    //column values of the product list
    const columns = [
        {
          field: 'id',
          headerName: 'Product ID',
          flex: 1,
          width: 150,
          editable: false
        },
        {
          field: 'name',
          headerName: 'Product',
          flex: 1,
          width: 150,
          editable: false
        },
        {
          field: 'category',
          headerName: 'Category',
          flex: 1,
          width: 150,
          editable: false
        },
        {
          field: 'status',
          headerName: 'Status',
          flex: 1,
          width: 150,
          editable: false
        },
        {
          field: 'actions',
          headerName: 'Actions',
          flex: 1,
          minWidth: 150,
          sortable: false,
          filterable: false,
          disableColumnMenu: true,
          renderCell:(params) => (
            <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%', gap: 1}}>
              <Button 
                    sx={{width: '60%', height: '80%'}}
                    variant='contained'
                    color='primary'
                    size='small'
                    onClick={() => handleDetails(params.row.id)}
                    >
                  Details
              </Button>
            </Box>
          )
        }
      ];

    //dummy data
      const rows = [
        {
          id: 1,
          name: 'Wireless Mouse',
          category: 'Electronics',
          status: 'Active',
        },
        {
          id: 2,
          name: 'Mechanical Keyboard',
          category: 'Electronics',
          status: 'Inactive'
        },
        {
          id: 3,
          name: 'Office Chair',
          category: 'Furniture',
          status: 'Active'
        },
        {
          id: 4,
          name: 'Water Bottle',
          category: 'Accessories',
          status: 'Active'
        },
        {
          id: 5,
          name: 'Notebook',
          category: 'Stationery',
          status: 'Inactive'
        }
      ];
      
    

  return (
    <Box sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        height: '100%', 
        minHeight: 'calc(100vh - 27vh)' 
      }}>
        <DataGrid 
                columns={columns} 
                rows={rows}
                pagination
                paginationMode='server'
                rowCount={rows.count || 0}
                disableRowSelectionOnClick/>
      </Box>
  )
})

