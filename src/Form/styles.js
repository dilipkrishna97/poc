import { makeStyles } from "@mui/styles";

export const Styles = makeStyles(() => ({
  qrContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FAFAFA",
    padding: 20,
    borderRadius: 10,
  },
  formContainer: {
    backgroundColor: "#FAFAFA",
    borderRadius: 10,
    padding: 10,
    height: "90%",
  },
  addDetailsText: {
    color: "#000",
    textTransform: "capitalize",
    marginTop: 10,
    marginBottom: 10,
    textAlign: "left",
    width: "100%",
    fontSize: 30,
    fontWeight: "600",
  },
  formInnerContainer: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    padding: "10px 30px",
  },
  avatarOuterContainer: { display: "flex", flexDirection: "column" },
  avatarsContainer: {
    display: "flex",
    flexDirection: "row",
    marginTop: "10px",
  },
  avatarStyles: {
    height: 40,
    width: 40,
    borderRadius: "50%",
    margin: "0px 5px 10px 5px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: "1px solid grey",
    cursor: "pointer",
  },
  labelStyles: {
    fontSize: 16,
    fontWeight: "500",
    color: "#000",
    // marginBottom: 10
  },
  dobLabelStyles: {
    display: "flex",
    flexDirection: "column",
    marginTop: 20,
    flex: 0.9,
    fontSize: 16,
    fontWeight: "500",
    color: "#000",
  },
  genderContainer: {
    display: "flex",
    flexDirection: "column",
    paddingRight: 10,
    marginTop: 20,
  },
  genderDobContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  radioButtonsContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  radioButton: {
    border: "1px solid grey",
    borderRadius: 10,
    marginTop: 10,
    display: "flex",
    width: "40%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "5px 20px",
    marginRight: 20,
    backgroundColor: "#ededed",
    cursor: "pointer",
  },
  generalMargin10: {
    marginTop: 10,
  },
  generalMargin20: {
    marginTop: 20,
  },
  colorSelectorContainer: {
    width: 40,
    height: 40,
    borderRadius: "50%",
    marginRight: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
  },
  addButtonStyles: {
    margin: "10px 0px !important",
    borderRadius: 10,
    color: "#FFF",
  },
  selectButtonStyles: { borderRadius: 10, color: "#FFF" },
  cityCountryContainer: { display: "flex", justifyContent: "space-between" },
  cityCountryField: {
    marginTop: "10px !important",
    width: "47% !important",
    "& .MuiFilledInput-root:before": {
      borderBottom: "none",
    },
  },
  formSubContainer: {
    overflowY: "scroll",
    border: "1px solid #3A3A3A",
    height: "90%",
  },
  avatarInnerStyle: {
    position: "absolute",
    bottom: 0,
    right: -5,
    height: 20,
    width: 20,
    borderRadius: "50%",
    backgroundColor: "#ededed",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 10,
  },
  nameTextStyle: {
    marginTop: "10px !important",
    "& .MuiFilledInput-root:before": {
      borderBottom: "none",
    },
  },
  dobTextStyle: {
    marginBottom: "10px !important",
  },
  medicalInfoText: {
    marginTop: "10px !important",
    "& .MuiFilledInput-root:before": {
      borderBottom: "none",
    },
  },
  addressTextStyle: {
    marginTop: "10px !important",
    "& .MuiFilledInput-root:before": {
      borderBottom: "none",
    },
    "& .MuiFilledInput-root:focus": {
      borderBottom: "none",
    },
  },
  colorSelectorMain: {
    display: "flex",
    flexDirection: "row",
    marginTop: "10px !important",
  },
  avatarSelectedStyle: {
    position: "absolute",
    height: 25,
    width: 25,
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  qrInnerContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItem: "center",
    fontSize: 20,
    fontWeight: "600",
  },
  qrSvgStyle: {
    marginTop: 20,
    border: "5px solid black",
    padding: 10,
    borderRadius: 10,
    display: "flex",
    alignSelf: "center",
  },
}));
