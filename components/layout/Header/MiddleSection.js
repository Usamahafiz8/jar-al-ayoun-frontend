import { Box, Button, Divider, TextField } from "@mui/material";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import * as React from "react";
import { UHeading3, UHeading2 } from "@/components/Ucomponents/Uheading";

function HeaderMiddleSection() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (


      <Box
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          borderBottom:"1px solid #C2C1C1",
        }}
        >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <UHeading3 styles={{ fontSize: 36, padding: "0 " }}>
            JAR Al Ayoun
          </UHeading3>
          <UHeading3 styles={{ fontWeight: "400" }}>OPTICAL STORE</UHeading3>
          <UHeading3 styles={{ fontWeight: "400" }}>OPTICAL STORE</UHeading3>
          <UHeading3 styles={{ fontWeight: "400" }}>OPTICAL STORE</UHeading3>
        </div>
        <div style={{ width: "600px" }}>
          <TextField fullWidth label="search" id="fullWidth" />
        </div>
        <div>
          <Button variant="texted">Compare</Button>
          <Button variant="texted" startIcon={<FavoriteBorderIcon />}>
            Wishlist
          </Button>
          <Button variant="texted" startIcon={<ShoppingCartIcon />}>
            Cart
          </Button>
          <Button variant="texted">Account</Button>
        </div>
      </Box>
 
  );
}

export default HeaderMiddleSection;
