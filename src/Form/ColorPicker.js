import React from "react";
import { Box } from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
import { BackGroundColors } from "../Constants";
import { Styles } from "./styles";

function ColorPicker({ setFormData, formData }) {
  const styles = Styles();
  function colorChange(color) {
    setFormData((prevData) => ({ ...prevData, profileColor: color }));
  }
  return (
    <Box className={styles.generalMargin20}>
      <Box component={"div"} className={styles.labelStyles}>
        {"Select an children profile background color"}
      </Box>
      <Box component={"div"} className={styles.colorSelectorMain}>
        {BackGroundColors.map((color, index) => (
          <Box
            component={"div"}
            key={`${color}${index}`}
            className={styles.colorSelectorContainer}
            style={{
              backgroundColor: color,
            }}
            onClick={() => {
              colorChange(color);
            }}
          >
            {!!(formData.profileColor === color) && (
              <DoneIcon sx={{ fontSize: 30 }} htmlColor="#FFF" />
            )}
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default ColorPicker;
