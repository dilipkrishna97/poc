import { useState } from "react";
import {
  Box,
  Button,
  Grid,
  Modal,
  Paper,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import FormBody from "./Form";
import Table from "@mui/joy/Table";
import Sheet from "@mui/joy/Sheet";
import { useSelector } from "react-redux";
import { Avatars } from "./Constants";
import moment from "moment";
import { Styles } from "./Form/styles";
import { QRCodeSVG } from "qrcode.react";

function App() {
  const [modalToggle, setModalToggle] = useState(false);
  const data = useSelector((state) => state.childrenDetails.childrenDetails);
  const styles = Styles();
  function addChild() {
    setModalToggle(!modalToggle);
  }

  function avatarWithBackground(avatar, color) {
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

  return (
    <Paper style={useStyles.paperStyle}>
      <Grid md={12} width={"100%"} height={"100%"}>
        <Grid
          md={12}
          sx={{ height: "15%", width: "100%", p: 2, alignItems: "center" }}
          display="flex"
        >
          <Box component={"div"} sx={{ width: { md: "80%", xs: "100%" },fontSize: 40, fontWeight: '600', textDecorationLine:'underline' }}>
            Children Details
          </Box>
          <Button
            variant="contained"
            onClick={addChild}
            sx={{ width: { md: "20%", xs: "50%" }, height: 50 }}
          >
            Add child
          </Button>
        </Grid>
        <Grid md={12} sx={{ height: "85%", width: "100%", p: 2 }}>
          <Sheet sx={{ height: "90%", overflow: "auto" }}>
            <Table
              aria-label="table with sticky header"
              stickyHeader
              stickyFooter
              stripe="even"
              hoverRow
            >
              <TableHead>
                <TableRow>
                  <TableCell>Sl No.</TableCell>
                  <TableCell>Avatar</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Gender</TableCell>
                  {/* <TableCell>Medical Info</TableCell> */}
                  {/* <TableCell>DOB</TableCell> */}
                  {/* <TableCell>Address</TableCell> */}
                  {/* <TableCell>City</TableCell> */}
                  {/* <TableCell>Country</TableCell> */}
                  <TableCell>QR</TableCell>
                </TableRow>
              </TableHead>
              {data.length ? (
                <TableBody>
                  {data.map((row, index) => (
                    <TableRow key={row.name}>
                      <TableCell>{index + 1}</TableCell>
                      <TableCell>
                        {row?.avatarImage ? (
                          <img
                            src={URL.createObjectURL(row?.avatarImage)}
                            alt="Selected Avatar"
                            style={{
                              ...useStyles.avatarSelectedStyle,
                              backgroundColor: row.profileColor ?? "#FFF",
                            }}
                          />
                        ) : (
                          avatarWithBackground(
                            Avatars[row.avatarIndex],
                            row.profileColor
                          )
                        )}
                      </TableCell>
                      <TableCell>{row.name}</TableCell>
                      <TableCell>{row.gender}</TableCell>
                      {/* <TableCell>{row.medicalInfo}</TableCell> */}
                      {/* <TableCell>
                        {moment(row.dob).format("MM/DD/YYYY")}
                      </TableCell> */}
                      {/* <TableCell>{row.address}</TableCell> */}
                      {/* <TableCell>{row.city}</TableCell> */}
                      {/* <TableCell>{row.country}</TableCell> */}
                      <TableCell>
                        <QRCodeSVG value={row.name} size={30} />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              ) : (
                <TableRow>
                  <Box component={"div"} style={useStyles.tableDivStyle}>
                    No records found
                  </Box>
                </TableRow>
              )}
            </Table>
          </Sheet>
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
  tableDivStyle: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 200,
    width: "100%",
    position: "absolute",
  },
};
