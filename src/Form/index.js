import React, { useEffect, useRef, useState } from "react";
import { Box, Button, MenuItem, Radio, TextField } from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import {
  Avatars,
  BackGroundColors,
  MedicalInfoOptions,
  PostalCodeOptions,
} from "../Constants";
import { Styles } from "./styles";
import moment from "moment";
import { useDispatch } from "react-redux";
import { addChildDetails } from "../Store/action";
import { addChild } from "../services";
import { QRCodeSVG } from "qrcode.react";

function FormBody() {
  const styles = Styles();
  const imageRef = useRef(null);
  const dispatch = useDispatch();
  const [addEnable, setAddEnable] = useState(false);
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    gender: "",
    dob: "",
    medicalInfo: "Allergy",
    addressLine1: "",
    addressLine2: "",
    postalCode: "",
    city: "",
    country: "",
    profileColor: null,
    avatarIndex: null,
  });

  useEffect(() => {
    validation();
  }, [formData]);

  function selectGender(selected) {
    setFormData((prevData) => ({ ...prevData, gender: selected }));
  }

  function dateChange(data) {
    setFormData((prevData) => ({ ...prevData, dob: new Date(data) }));
  }

  function inputChange(data, type) {
    let temp = { ...formData };
    temp[type] = data.target.value;
    setFormData(temp);
  }

  function colorChange(color) {
    setFormData((prevData) => ({ ...prevData, profileColor: color }));
  }

  const controlProps = (item) => ({
    checked: formData.gender === item,
    onChange: () => selectGender(item),
    value: item,
    name: "size-radio-button-demo",
    inputProps: { "aria-label": item },
  });

  function validation() {
    if (
      !Boolean(
        Object.keys(formData).find((item) => {
          if (item === "avatarIndex" && !(formData[item] > -1)) {
            return item;
          } else if (item !== "avatarIndex" && !Boolean(formData[item])) {
            return item;
          }
          return null;
        })
      )
    ) {
      setAddEnable(true);
    } else {
      setAddEnable(false);
    }
  }

  return (
    <Box
      component={"div"}
      className={success ? styles.qrContainer : styles.formContainer}
    >
      {success ? (
        <Box component={"div"} className={styles.qrInnerContainer}>
          {"Children Details QR"}
          <QRCodeSVG
            value={formData.name}
            size={130}
            className={styles.qrSvgStyle}
          />
        </Box>
      ) : (
        <>
          <Box component={"div"} className={styles.addDetailsText}>
            {"Add children details"}
          </Box>
          <Box component="div" className={styles.formSubContainer}>
            <Box className={styles.formInnerContainer} component="form">
              <Box
                className={[styles.avatarOuterContainer, styles.labelStyles]}
              >
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
                        !isNaN(formData.avatarIndex) &&
                        formData.avatarIndex === index
                      ) && (
                        <Box
                          component={"div"}
                          className={styles.avatarInnerStyle}
                        >
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
              <Box component={"div"} className={styles.avatarOuterContainer}>
                <Box component={"div"} className={styles.labelStyles}>
                  Name
                </Box>
                <TextField
                  variant="filled"
                  size="small"
                  color="none"
                  fullWidth
                  placeholder="Enter your name"
                  onChange={(value) => inputChange(value, "name")}
                  value={formData.name}
                  className={styles.nameTextStyle}
                />
              </Box>
              <Box component={"div"} className={styles.genderDobContainer}>
                <Box component={"div"} className={styles.genderContainer}>
                  <Box component={"div"} className={styles.labelStyles}>
                    Gender
                  </Box>
                  <Box
                    component={"div"}
                    className={styles.radioButtonsContainer}
                  >
                    <Box
                      onClick={() => selectGender("Male")}
                      component={"div"}
                      className={styles.radioButton}
                      style={{
                        backgroundColor:
                          formData.gender === "Male" ? "#7f9e4fa1" : "#FFF",
                      }}
                    >
                      {"Male"}
                      <Radio {...controlProps("Male")} />
                    </Box>
                    <Box
                      onClick={() => selectGender("Female")}
                      component={"div"}
                      className={styles.radioButton}
                      style={{
                        backgroundColor:
                          formData.gender === "Female" ? "#7f9e4fa1" : "#FFF",
                      }}
                    >
                      {"Female"}
                      <Radio {...controlProps("Female")} />
                    </Box>
                  </Box>
                </Box>
                <Box component={"div"} className={styles.dobLabelStyles}>
                  <Box
                    component={"div"}
                    className={[styles.labelStyles, styles.dobTextStyle]}
                  >
                    Date Of Birth
                  </Box>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                      onChange={dateChange}
                      maxDate={moment(new Date())}
                    />
                  </LocalizationProvider>
                </Box>
              </Box>
              <Box component={"div"} className={styles.generalMargin20}>
                <Box className={[styles.labelStyles, styles.generalMargin10]}>
                  Medical Information
                </Box>
                <TextField
                  variant="filled"
                  size="small"
                  color="none"
                  select
                  fullWidth
                  defaultValue={"Allergy"}
                  onChange={(value) => inputChange(value, "medicalInfo")}
                  value={formData.medicalInfo}
                  className={styles.medicalInfoText}
                >
                  {MedicalInfoOptions.map((option) => (
                    <MenuItem key={option} value={option} color={"#000"}>
                      {option}
                    </MenuItem>
                  ))}
                </TextField>
              </Box>
              <Box component={"div"} className={styles.generalMargin20}>
                <Box component={"div"} className={styles.labelStyles}>
                  Address
                </Box>
                <TextField
                  variant="filled"
                  size="small"
                  color="none"
                  fullWidth
                  placeholder="Address line 1"
                  onChange={(value) => inputChange(value, "addressLine1")}
                  className={styles.addressTextStyle}
                />
                <TextField
                  variant="filled"
                  size="small"
                  color="none"
                  fullWidth
                  placeholder="Address line 2"
                  onChange={(value) => inputChange(value, "addressLine2")}
                  className={styles.addressTextStyle}
                />
                <TextField
                  variant="filled"
                  size="small"
                  color="none"
                  select
                  fullWidth
                  placeholder="Postal Code"
                  defaultValue={""}
                  onChange={(value) => inputChange(value, "postalCode")}
                  value={formData.postalCode}
                  className={styles.addressTextStyle}
                >
                  {PostalCodeOptions.map((option) => (
                    <MenuItem key={option} value={option} color={"#000"}>
                      {option}
                    </MenuItem>
                  ))}
                </TextField>
                <Box component={"div"} className={styles.cityCountryContainer}>
                  <TextField
                    variant="filled"
                    size="small"
                    color="none"
                    fullWidth
                    placeholder="City"
                    onChange={(value) => inputChange(value, "city")}
                    className={styles.cityCountryField}
                  />
                  <TextField
                    variant="filled"
                    size="small"
                    color="none"
                    fullWidth
                    placeholder="Country"
                    onChange={(value) => inputChange(value, "country")}
                    className={styles.cityCountryField}
                  />
                </Box>
              </Box>
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
              <Button
                variant="contained"
                fullWidth
                disabled={!addEnable}
                className={styles.addButtonStyles}
                onClick={async () => {
                  if (addEnable) {
                    await addChild();
                    dispatch(
                      addChildDetails({
                        ...formData,
                        address: `${formData.addressLine1}\n${formData.addressLine2}\n${formData.postalCode}`,
                      })
                    );
                    setSuccess(true);
                  }
                }}
              >
                Add
              </Button>
              <Button
                variant="contained"
                fullWidth
                disabled={true}
                className={styles.addButton}
              >
                Select Package
              </Button>
            </Box>
          </Box>
        </>
      )}
    </Box>
  );
}

export default FormBody;
