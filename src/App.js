import { useState } from "react";
import {
  Button,
  Modal,
  Paper,
} from "@mui/material";
import FormBody from "./Form";

function App() {
  const [modalToggle, setModalToggle] = useState(false);

  function addChild() {
    setModalToggle(!modalToggle);
  }
  return (
    <Paper style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100vw",
      height: "100vh",
    }}>
      <Button variant="contained" onClick={addChild}>
        Add child
      </Button>
      <Modal
        open={modalToggle}
        onClose={() => setModalToggle(false)}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flex: 1,
        }}
      >
        <FormBody />
      </Modal>
    </Paper>
  );
}

export default App;
