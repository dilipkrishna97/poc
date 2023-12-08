import React from "react";
import moment from "moment";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { Box } from "@mui/system";
import { MenuItem, Radio, TextField } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Styles } from "./styles";

function CustomInput({
  value,
  labelStyles,
  inputStyles,
  placeholder,
  datePicker = false,
  radioButtons = false,
  formData,
  setFormData,
  label,
  options = [],
  type = "",
}) {
  const styles = Styles();

  const controlProps = (item) => ({
    checked: formData.gender === item,
    onChange: () => selectGender(item),
    value: item,
    name: "size-radio-button-demo",
    inputProps: { "aria-label": item },
  });

  function inputChange(data) {
    let temp = { ...formData };
    temp[type] = data.target.value;
    setFormData(temp);
  }

  function dateChange(data) {
    setFormData((prevData) => ({ ...prevData, dob: new Date(data) }));
  }

  function selectGender(selected) {
    setFormData((prevData) => ({ ...prevData, gender: selected }));
  }

  return (
    <>
      {Boolean(label) && (
        <Box component={"div"} className={labelStyles}>
          {label}
        </Box>
      )}
      {datePicker && (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker onChange={dateChange} maxDate={moment(new Date())} />
        </LocalizationProvider>
      )}
      {radioButtons && (
        <Box component={"div"} className={styles.radioButtonsContainer}>
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
      )}
      {!datePicker && !radioButtons && (
        <TextField
          variant="filled"
          size="small"
          color="none"
          fullWidth
          select={Boolean(options.length)}
          placeholder={placeholder}
          onChange={inputChange}
          value={value}
          className={inputStyles}
        >
          {Boolean(options.length) &&
            options.map((option) => (
              <MenuItem key={option} value={option} color={"#000"}>
                {option}
              </MenuItem>
            ))}
        </TextField>
      )}
    </>
  );
}

export default CustomInput;
