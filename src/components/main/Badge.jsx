import { Box, Typography } from "@mui/material";
import React from "react";

export const Badge = ({
  bgColor = "#CC7462",
  textColor = "#961558",
  badgeWidth = 130,
  badgeHeight = 30,
  text = "UNTITLED"
}) => {
  return (
    <Box
      sx={{
        width: badgeWidth,
        height: badgeHeight,
        background: bgColor,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 1,
      }}
    >
      <Typography variant="h6" color={textColor}>
        {text}
      </Typography>
    </Box>
  );
};
