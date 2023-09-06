// themes/theme.js

import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ED1B24", // Customize the primary color
    },
    secondary: {
      main: "#FFC107", // Customize the secondary color
    },
    divider: "#ED1B24", // Set the divider color to red
  },
  typography: {
    fontFamily: "Roboto, sans-serif", // Customize the default font
    colortext: {
      color: "#ED1B24", // Set your desired color for h1 headings
      fontWeight: 600,
      fontSize: "14px",
    },
    h2: {
      fontWeight: 600,
      fontSize: "16px",
    },
    h3: {
      fontWeight: 700,
      fontSize: "14px",
    },
    point: {
      fontWeight: 400,
      fontSize: "14px",
    },
  },

});

export default theme;
