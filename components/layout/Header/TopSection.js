import {
  Box,
  Button,
  Divider,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import * as React from "react";
import { UHeading3, UHeading2 } from "@/components/Ucomponents/Uheading";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

function HeaderTopSection() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Grid container style={{ padding: "8px 8px 8px 8px" , borderBottom:"1px solid #C2C1C1" }}>
      <Grid
        item
        xl={4}
        lg={4}
        md={4}
        style={{ display: "flex", alignItems: "center" }}
      >
        <Button variant="texted">TRY IT 3D</Button>
        <Divider flexItem orientation="vertical" sx={{ mx: 0.5, my: 1 , color:"#C2C1C1"}} />
        <Button variant="texted">STORE LOCATION</Button>
        <Divider flexItem orientation="vertical" sx={{ mx: 0.5, my: 1 }} />
        <Button variant="texted">QUALITY</Button>
        <Divider flexItem orientation="vertical" sx={{ mx: 0.5, my: 1 }} />
        <Button variant="texted">TRACK ORDER</Button>
      </Grid>
      <Grid
        item
        xl={4}
        lg={4}
        md={4}
        style={{
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h2">
          100 % SECURE DELIVERY WITHOUT CONTACT TO COURIOR
        </Typography>
      </Grid>
      <Grid
        item
        xl={4}
        lg={4}
        md={4}
        style={{
          display: "flex",
          flexDirection: "row-reverse",
          alignItems: "center",
          gap: "16px",
        }}
      >
        <Button
          id="fade-button"
          aria-controls={open ? "fade-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          endIcon={<KeyboardArrowDownIcon />}
          style={{ fontWeight: "600", fontSize: "14px" }}
        >
          Language
        </Button>
        <Menu
          id="fade-menu"
          MenuListProps={{
            "aria-labelledby": "fade-button",
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          TransitionComponent={Fade}
        >
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={handleClose}>My account</MenuItem>
          <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Menu>
        <Divider flexItem orientation="vertical" sx={{ mx: 0.5, my: 1 }} />
        <Typography variant="colortext">+966-51-00000</Typography>
        <Typography variant="h3">NEED HELP CALL US:</Typography>
      </Grid>
    </Grid>
  );
}

export default HeaderTopSection;
