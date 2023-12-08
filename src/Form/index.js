import React, { useCallback, useEffect, useState } from "react";
import { Box } from "@mui/material";
import { useDispatch } from "react-redux";
import { MedicalInfoOptions, PostalCodeOptions } from "../Constants";
import { addChildDetails } from "../Store/action";
import { addChild } from "../services";
import SuccessComponent from "./SuccessComponent";
import CustomInput from "./CustomInput";
import ColorPicker from "./ColorPicker";
import AvatarPicker from "./AvatarPicker";
import CustomButton from "./CustomButton";
import { Styles } from "./styles";

function FormBody() {
  const styles = Styles();
  const dispatch = useDispatch();
  const [addEnable, setAddEnable] = useState(false);
  const [loading, setLoading] = useState(false);
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

  async function addChildData() {
    if (addEnable) {
      setLoading(true);
      await addChild();
      dispatch(
        addChildDetails({
          ...formData,
          address: `${formData.addressLine1}\n${formData.addressLine2}\n${formData.postalCode}`,
        })
      );
      setSuccess(true);
    }
  }

  return (
    <Box
      component={"div"}
      className={success ? styles.qrContainer : styles.formContainer}
    >
      {success ? (
        <SuccessComponent name={formData.name} />
      ) : (
        <>
          <Box component={"div"} className={styles.addDetailsText}>
            {"Add children details"}
          </Box>
          <Box component="div" className={styles.formSubContainer}>
            <Box className={styles.formInnerContainer} component="form">
              <AvatarPicker formData={formData} setFormData={setFormData} />
              <Box component={"div"} className={styles.avatarOuterContainer}>
                <CustomInput
                  label={"Name"}
                  placeholder={"Enter your name"}
                  value={formData.name}
                  inputStyles={styles.nameTextStyle}
                  labelStyles={styles.labelStyles}
                  formData={formData}
                  setFormData={setFormData}
                  type={"name"}
                />
              </Box>
              <Box component={"div"} className={styles.genderDobContainer}>
                <Box component={"div"} className={styles.genderContainer}>
                  <CustomInput
                    label={"Gender"}
                    inputStyles={styles.nameTextStyle}
                    labelStyles={styles.labelStyles}
                    formData={formData}
                    setFormData={setFormData}
                    radioButtons={true}
                  />
                </Box>
                <Box component={"div"} className={styles.dobLabelStyles}>
                  <CustomInput
                    label={"Date Of Birth"}
                    inputStyles={styles.nameTextStyle}
                    labelStyles={[styles.labelStyles, styles.dobTextStyle]}
                    formData={formData}
                    setFormData={setFormData}
                    datePicker={true}
                  />
                </Box>
              </Box>
              <Box component={"div"} className={styles.generalMargin20}>
                <CustomInput
                  label={"Medical Information"}
                  inputStyles={styles.nameTextStyle}
                  labelStyles={[styles.labelStyles, styles.generalMargin10]}
                  formData={formData}
                  value={formData.medicalInfo}
                  setFormData={setFormData}
                  options={MedicalInfoOptions}
                  type={"medicalInfo"}
                />
              </Box>
              <Box component={"div"} className={styles.generalMargin20}>
                <CustomInput
                  label={"Address"}
                  inputStyles={styles.addressTextStyle}
                  labelStyles={styles.labelStyles}
                  formData={formData}
                  value={formData.addressLine1}
                  placeholder="Address line 1"
                  setFormData={setFormData}
                  type={"addressLine1"}
                />
                <CustomInput
                  inputStyles={styles.addressTextStyle}
                  formData={formData}
                  value={formData.addressLine2}
                  placeholder="Address line 2"
                  setFormData={setFormData}
                  type={"addressLine2"}
                />
                <CustomInput
                  formData={formData}
                  value={formData.postalCode}
                  setFormData={setFormData}
                  options={PostalCodeOptions}
                  inputStyles={styles.addressTextStyle}
                  type={"postalCode"}
                />
                <Box component={"div"} className={styles.cityCountryContainer}>
                  <CustomInput
                    inputStyles={styles.cityCountryField}
                    formData={formData}
                    value={formData.city}
                    placeholder="City"
                    setFormData={setFormData}
                    type={"city"}
                  />
                  <CustomInput
                    inputStyles={styles.cityCountryField}
                    formData={formData}
                    value={formData.country}
                    placeholder="Country"
                    setFormData={setFormData}
                    type={"country"}
                  />
                </Box>
              </Box>
              <ColorPicker formData={formData} setFormData={setFormData} />
              <CustomButton
                onClick={addChildData}
                disabled={addEnable}
                label={"Add"}
                loading={loading}
              />
              <CustomButton disabled={false} label={"Select Package"} />
            </Box>
          </Box>
        </>
      )}
    </Box>
  );
}

export default FormBody;
