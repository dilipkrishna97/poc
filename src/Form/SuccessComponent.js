import React from "react";
import { Box } from "@mui/material";
import { QRCodeSVG } from "qrcode.react";
import { Styles } from "./styles";

function SuccessComponent({ name }) {
  const styles = Styles();
  return (
    <Box component={"div"} className={styles.qrInnerContainer}>
      {"Children Details QR"}
      <QRCodeSVG
        value={name}
        size={130}
        className={styles.qrSvgStyle}
      />
    </Box>
  );
}

export default SuccessComponent;
