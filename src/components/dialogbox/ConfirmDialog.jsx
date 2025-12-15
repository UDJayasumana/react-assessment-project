// ConfirmDialog.jsx
import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button
} from "@mui/material";

export const ConfirmDialog = ({ 
  open, 
  title = "Confirm", 
  message = "Are you sure?", 
  onClose, 
  onConfirm, 
  confirmText = "Yes", 
  cancelText = "No" 
}) => {

  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="confirm-dialog-title"
      aria-describedby="confirm-dialog-description"
      maxWidth="sm" 
      sx={{
        "& .MuiPaper-root": {
          width: { xs: '60%', sm: '60%', md: '50%' }, // responsive width
          maxWidth: { xs: '90%', sm: '500px', md: '600px' }, // responsive maxWidth
          height: { xs: '50%', sm: '28%', md: '25%' }, // responsive Height
          maxHeight: { xs: '90%', sm: '500px', md: '600px' }, // responsive maxHeight
        },
        
      }}
    >
      <DialogTitle id="confirm-dialog-title">{title}</DialogTitle>
      <DialogContent>
        <DialogContentText id="confirm-dialog-description">
          {message}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          {cancelText}
        </Button>
        <Button onClick={onConfirm} color="error" autoFocus>
          {confirmText}
        </Button>
      </DialogActions>
    </Dialog>
  );
};
