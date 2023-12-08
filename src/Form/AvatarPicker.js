import React, { useRef } from "react";
import { Box } from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
import { Avatars } from "../Constants";
import { Styles } from "./styles";

function AvatarPicker({ setFormData, formData }) {
  const styles = Styles();
  const imageRef = useRef(null);
  return (
    <Box className={[styles.avatarOuterContainer, styles.labelStyles]}>
      {"Select an avatar or add photo"}
      <Box className={styles.avatarsContainer}>
        {Avatars.map((Avatar, index) => (
          <Box
            key={index}
            component={"div"}
            className={styles.avatarStyles}
            onClick={() => {
              if (index !== 0) {
                setFormData({ ...formData, avatarIndex: index });
              }
              if (index === 0 && !formData.avatarImage) {
                imageRef.current.click();
              } else if (index === 0 && formData.avatarImage) {
                setFormData({ ...formData, avatarIndex: index });
              }
            }}
            style={{
              backgroundColor: formData.profileColor ?? "#FFF",
              position: "relative",
            }}
          >
            {Avatar}
            {!!(
              !isNaN(formData.avatarIndex) && formData.avatarIndex === index
            ) && (
              <Box component={"div"} className={styles.avatarInnerStyle}>
                <DoneIcon sx={{ fontSize: 20 }} htmlColor="#04aa6d" />
              </Box>
            )}
            {index === 0 && formData.avatarImage && (
              <img
                src={URL.createObjectURL(formData.avatarImage)}
                alt="Selected Avatar"
                className={styles.avatarSelectedStyle}
                style={{
                  backgroundColor: formData.profileColor ?? "#FFF",
                }}
              />
            )}
          </Box>
        ))}
      </Box>
      <input
        hidden
        key={"input "}
        onChange={(e) => {
          setFormData({
            ...formData,
            avatarImage: e.target.files[0],
            avatarIndex: 0,
          });
        }}
        ref={imageRef}
        type="file"
        accept="image/*"
      />
    </Box>
  );
}

export default AvatarPicker;
