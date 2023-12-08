import { useState } from "react";
import { Box, Button, Grid, Modal, Paper } from "@mui/material";
import FormBody from "./Form";
import DataTable from "./DataTable";

function App() {
  const [modalToggle, setModalToggle] = useState(false);
  function addChild() {
    setModalToggle(!modalToggle);
  }

  return (
    <Paper style={useStyles.paperStyle}>
      <Grid md={12} width={"100%"} height={"100%"}>
        <Grid md={12} sx={useStyles.headerContainer} display="flex">
          <Box component={"div"} sx={useStyles.headerLeft}>
            Children Details
          </Box>
          <Button
            variant="contained"
            onClick={addChild}
            sx={useStyles.headerRight}
          >
            Add child
          </Button>
        </Grid>
        <Grid md={12} sx={useStyles.tableContainer}>
          <DataTable />
        </Grid>
      </Grid>
      <Modal
        open={modalToggle}
        onClose={() => setModalToggle(false)}
        style={useStyles.modalStyle}
      >
        <FormBody setModalToggle={setModalToggle} />
      </Modal>
    </Paper>
  );
}

export default App;

const useStyles = {
  headerContainer: { height: "15%", width: "100%", p: 2, alignItems: "center" },
  headerLeft: {
    width: { md: "80%", xs: "100%" },
    fontSize: 40,
    fontWeight: "600",
    textDecorationLine: "underline",
  },
  headerRight: { width: { md: "20%", xs: "50%" }, height: 50 },
  tableContainer: { height: "85%", width: "100%", p: 2 },
  paperStyle: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100vw",
    height: "100vh",
  },
  modalStyle: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  avatarSelectedStyle: {
    position: "relative",
    bottom: 0,
    right: -5,
    height: 40,
    width: 40,
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#000",
  },
};
