import { Box, Button } from "@mui/material";
import React, { useRef } from "react";

const FilterPanel = ({ children, onSubmit, onReset }) => {
  const formRef = useRef(null);

  const getFormData = () => {
    if (formRef.current) return new FormData(formRef.current);
    else return null;
  };

  const handleFilter = (e) => {
    e.preventDefault();

    /*
        //unsafe way to get Mui-Slider values. so ignored
        const sliderDom = document.querySelector('[data-slider="true"]');
        const valueText = sliderDom.querySelector('.MuiSlider-valueLabelLabel')?.innerHTML;
        console.log(valueText);
        */

    const values = Object.fromEntries(getFormData().entries());
    if (Object.entries(values).length > 0 && onSubmit) onSubmit(values);
  };

  const handleReset = () => {
    if (onReset) onReset();
  };

  return (
    <Box
      component="form"
      ref={formRef}
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%",
        // backgroundColor: "#E8E8DC",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          alignContent: "flex-start",
          p: 3,
          gap: 3,
          width: "100%",
          height: "100%",
          flex: 1,
          minHeight: 0,
          overflow: "auto",
          // backgroundColor: "#8C8887",
        }}
      >
        {children}
      </Box>

      {/* Filter Footer area */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          p: 3,
          gap: 3,
          width: "100%",
          height: "15%",
          flexShrink: 0,
          // backgroundColor: "#4D3029",
        }}
      >
        <Button
          variant="contained"
          color="primary"
          sx={{ height: 30, width: 100 }}
          onClick={handleFilter}
        >
          Filter
        </Button>
        <Button
          variant="contained"
          color="secondary"
          sx={{ height: 30, width: 100 }}
          onClick={handleReset}
        >
          Reset
        </Button>
      </Box>
    </Box>
  );
};

export default FilterPanel;
