import React from "react";
import { Sheet } from "@mui/joy";
import {
  Box,
  TableBody,
  TableHead,
  TableRow,
  Table,
  TableCell,
} from "@mui/material";
import moment from "moment";
import { QRCodeSVG } from "qrcode.react";
import { useSelector } from "react-redux";
import { Avatars, TableHeader } from "../Constants";
import AvatarWithBackground from "./AvatarWithBackground";

function DataTable() {
  const childrenDetails = useSelector(
    (state) => state.childrenDetails.childrenDetails
  );
  return (
    <Sheet style={useStyles.sheetStyles}>
      <Table
        aria-label="table with sticky header"
        stickyHeader
        stickyFooter
        stripe="even"
        hoverRow
      >
        <TableHead>
          <TableRow>
            {TableHeader.map((label, index) => (
              <TableCell key={`${label}${index}`}>{label}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        {childrenDetails.length ? (
          <TableBody>
            {childrenDetails.map((row, index) => (
              <TableRow key={`${row.name}${index}`}>
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
                    <AvatarWithBackground
                      avatar={Avatars[row.avatarIndex]}
                      color={row.profileColor}
                    />
                  )}
                </TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.gender}</TableCell>
                <TableCell>{row.medicalInfo}</TableCell>
                <TableCell>{moment(row.dob).format("MM/DD/YYYY")}</TableCell>
                <TableCell>{row.address}</TableCell>
                <TableCell>{row.city}</TableCell>
                <TableCell>{row.country}</TableCell>
                <TableCell>
                  <QRCodeSVG value={row.name} size={30} />;
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
  );
}

export default DataTable;

const useStyles = {
  sheetStyles: { height: "90%", overflow: "auto" },
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
