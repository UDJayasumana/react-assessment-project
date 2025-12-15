import { useTheme } from "@emotion/react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Stack,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Controller, useForm, useWatch } from "react-hook-form";

export const ProductDetailCard = ({
  productName = "Astra",
  price = 500,
  description = "Dummy Description",
  initialStock = 0,
  initialStatus = false,
  onUpdateProduct,
  onPatchProduct,
  fallbackCardImgUrl = "",
}) => {
  const theme = useTheme();

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      stock: 0,
      status: true,
    },
  });

  const stock = useWatch({ control, name: "stock" });
  const status = useWatch({ control, name: "status" });

  const [fieldsInitialState, setFieldsInitialState] = useState({
    stock: initialStock,
    status: initialStatus,
  });

  // Reset form when props change
  useEffect(() => {
    reset({
      stock: initialStock,
      status: initialStatus,
    });
  }, [initialStock, initialStatus, reset]);

  const onSubmit = (data) => {
    //If both form current statuses != to heir prev statuses then all 2 fields are changed
    if (
      fieldsInitialState.stock != stock &&
      fieldsInitialState.status != status
    ) {
      console.log("Do PUT : ", fieldsInitialState);
      onUpdateProduct({ stock: stock, status: status ? "ACTIVE" : "INACTIVE" });
    } else if (
      fieldsInitialState.stock != stock ||
      fieldsInitialState.status != status
    ) {
      if (fieldsInitialState.stock != stock) onPatchProduct({ stock: stock });
      if (fieldsInitialState.status != status)
        onPatchProduct({ status: status ? "ACTIVE" : "INACTIVE" });
      console.log("Do PATCH :  ", fieldsInitialState.status);
    }
    setFieldsInitialState({ stock: stock, status: status });
  };

  return (
    <Card
      sx={{
        width: "100%",
        maxWidth: 1200,
        margin: "auto",
        // Handle card ui responsiveness
        [theme.breakpoints.up("xs")]: { maxWidth: 600 },
        [theme.breakpoints.up("sm")]: { maxWidth: 650 },
        [theme.breakpoints.up("md")]: { maxWidth: 700 },
        [theme.breakpoints.up("lg")]: { maxWidth: 850 },
        [theme.breakpoints.up("xl")]: { maxWidth: 900 },
      }}
    >
      <CardContent sx={{ p: 0 }}>
        <Box
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          sx={{
            display: "flex",
            flexDirection: "column",
            minHeight: 600,
          }}
        >
          {/* Image Section */}
          <Box
            sx={{
              width: "100%",
              minHeight: 200,
              bgcolor: "#827D64",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <Box
              component="img"
              src="/df"
              alt="Product not found"
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center",
              }}
              onError={(e) => {
                const img = e.currentTarget;

                if (!img.dataset.fallback) {
                  img.src = fallbackCardImgUrl;
                  img.dataset.fallback = "true"; // mark fallback used
                } else {
                  img.style.display = "none";
                }
              }}
            />
          </Box>

          {/* Content Section */}
          <Box
            sx={{
              width: "100%",
              p: 3,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Stack
              direction="row"
              spacing={1}
              sx={{ justifyContent: "center", alignItems: "center" }}
            >
              <Typography gutterBottom variant="h3">
                {productName}
              </Typography>
            </Stack>

            <Stack
              direction="row"
              sx={{
                justifyContent: "left",
                alignItems: "center",
              }}
            >
              <Typography gutterBottom variant="h4" component="div">
                {`Rs.${price}`}
              </Typography>
            </Stack>

            <Stack
              direction="row"
              sx={{
                width: "100%",
                p: 1,
                minHeight: "150px",
                justifyContent: "left",
                alignItems: "left",
                background: "#9E9C98",
                borderRadius: 1,
              }}
            >
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                {description}
              </Typography>
            </Stack>

            <Grid container spacing={2} sx={{ p: 1 }}>
              <Grid>
                <Typography>Quantity</Typography>
                <TextField
                  fullWidth
                  size="small"
                  type="number"
                  {...register("stock")}
                  error={!!errors.name}
                  helperText={errors.name?.message}
                />
              </Grid>

              <Grid>
                <Controller
                  name="status"
                  control={control}
                  render={({ field }) => (
                    <Stack
                      direction="row"
                      alignItems="center"
                      sx={{ mt: 3, ml: 5 }}
                    >
                      <Typography>Status</Typography>
                      <Switch {...field} checked={field.value} />
                    </Stack>
                  )}
                />
              </Grid>
            </Grid>
          </Box>

          <Stack
            direction="row"
            sx={{
              width: "100%",
              p: 1,
              minHeight: "50px",
              justifyContent: "right",
              alignItems: "left",
              borderRadius: 1,
            }}
          >
            <Button
              type="submit"
              variant="contained"
              color="secondary"
              sx={{ height: 40, width: 150 }}
            >
              Submit
            </Button>
          </Stack>
        </Box>
      </CardContent>
    </Card>
  );
};
