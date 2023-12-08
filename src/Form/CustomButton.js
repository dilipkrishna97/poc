import React from "react";
import { Button, CircularProgress } from "@mui/material";
import { Styles } from "./styles";

function CustomButton({ label, onClick = () => {}, disabled, loading }) {
  const styles = Styles();
  return (
    <Button
      variant="contained"
      fullWidth
      disabled={!disabled}
      className={styles.addButtonStyles}
      onClick={onClick}
    >
      {loading ? <CircularProgress color="inherit" size={20} /> : label}
    </Button>
  );
}

export default CustomButton;
