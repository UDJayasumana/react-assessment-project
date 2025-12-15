import { Box, Typography } from "@mui/material";
import React from "react";

export const Dashboard = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url("/images/dashboard/dashboard.png")`,
        width: "100%",
        height: "100%",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          p: 5,
          gap: "20px",
          
        }}
      >
        <Typography
          variant="h2"
          gutterBottom
          sx={{
            padding: 2,
            fontFamily: '"Poppins", sans-serif',
            fontWeight: 600,
          }}
        >
          Dashboard
        </Typography>
      </Box>
    </Box>
  );
};
