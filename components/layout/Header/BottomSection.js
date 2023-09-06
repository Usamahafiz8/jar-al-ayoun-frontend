import { Box, Button, Divider, TextField } from "@mui/material";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import * as React from "react";
import { UHeading3, UHeading2 } from "@/components/Ucomponents/Uheading";


function HeaderBottomSection() {
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
          padding: "12px",
          borderBottom:"1px solid #C2C1C1"
        }}
      >
        <Button variant="contained">Browse All Categories</Button>
        <Button
          variant="texted"
          startIcon={<WhatshotIcon style={{ color: "red" }} />}
        >
          Deals
        </Button>
        <Button variant="texted">EYEGLASSES</Button>
        <Button variant="texted">COMPUTER GLASSES</Button>
        <Button variant="texted">KIDS GLASSES</Button>
        <Button variant="texted"> CONTACT LENSES</Button>
        <Button variant="texted"> SUNGLASSES</Button>
        <Button variant="texted"> GET APPOINTMENT</Button>
        <Button variant="texted"> 3D TRY ON</Button>
      </Box>
  );
}

export default HeaderBottomSection;
