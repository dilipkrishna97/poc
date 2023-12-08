import { Box } from "@mui/material";
import { Styles } from "../Form/styles";

function AvatarWithBackground({avatar, color}) {
  const styles = Styles();
  return (
    <Box
      component={"div"}
      className={styles.avatarStyles}
      style={{
        backgroundColor: color ?? "#FFF",
        position: "relative",
      }}
    >
      {avatar}
    </Box>
  );
}
export default AvatarWithBackground;
