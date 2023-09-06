import { Typography } from "@mui/material";
import React from "react";

const UHeading1 = ({ children, styles }) => (
  <Typography
    variant="h5"
    style={{
      fontWeight: 600,
      ...styles,
    }}
  >
    {children}
  </Typography>
);

const UHeading2 = ({ children, styles }) => (
  <Typography
    variant="h6"
    style={{
      fontWeight: 600,
      padding: '0 0 12px 0',
      fontSize: "16px",
      ...styles,
    }}
  >
    {children}
  </Typography>
);

const UHeading3 = ({ children, styles }) => (
  <Typography
    style={{
      fontWeight: 700,
      fontSize: "14px",
      ...styles,
    }}
  >
    {children}
  </Typography>
 
 );

 const pointsParagraph = ({ children, styles }) => (
  <Typography variant="h1"
    style={{
      fontWeight: 400,
      fontSize: "12px",
      ...styles,
    }}
  >
    {children}
  </Typography> 
 );

 const colorheading= ({ children, styles }) => (
  <Typography variant="h1"
    style={{
      fontWeight: 400,
      fontSize: "12px",
      ...styles,
    }}
  >
    {children}
  </Typography> 
 );


export { UHeading1, UHeading2, UHeading3 , pointsParagraph, colorheading};
