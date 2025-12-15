import { Box, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography, useTheme } from "@mui/material";
import React from "react";

const Sidebar = ({ width, menuItems, onClickItem }) => {
  const theme = useTheme();
 

  return (
    <Drawer
      sx={{
        width: width,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: width,
          backgroundColor: theme.primary,
          mt: `${theme.mixins.toolbar.minHeight}px`,
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Box>
        <Typography
          variant="h5"
          gutterBottom
          sx={{
            padding: 2,
            fontFamily: '"Poppins", sans-serif',
            fontWeight: 600,
          }}
        >
          Side Bar
        </Typography>

        <List>
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <ListItem key={item.text} disablePadding>
                <ListItemButton
                  onClick={() => onClickItem(item.path)}
                  sx={{
                    background: isActive ? theme.palette.primary.light : "transparent",
                    "&:hover": { background: isActive ? "#f4f4f4" : null },
                  }}
                >
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
