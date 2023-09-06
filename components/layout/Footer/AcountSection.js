import { Divider, Grid, Typography } from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import YouTubeIcon from "@mui/icons-material/YouTube";
import CopyRightSection from "./CopyRight";
// components/AccountLinkSection.js
function AccountLinkSection() {
  return (
    
        <Grid container>
          <Grid item xl={2} lg={2} md={2} sm={6} xs={6}>
            <Typography variant="h2">Jar al ayuoun</Typography>
          </Grid>
          <Grid item xl={1.5} lg={1.5} md={1.5} sm={6} xs={6}>
            <Typography variant="h2">Accounts</Typography>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <Typography variant="point">Sign In</Typography>
              <Typography variant="point">Register</Typography>
              <Typography variant="point">My Accounts</Typography>
              <Typography variant="point">Terms & Conditions</Typography>
              <Typography variant="point">Privacy Policy</Typography>
            </div>
          </Grid>
          <Grid item xl={1.5} lg={1.5} md={1.5} sm={6} xs={6}>
            <Typography variant="h2">Brands</Typography>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <Typography variant="point">Raybans</Typography>
              <Typography variant="point">Police</Typography>
              <Typography variant="point">Carrera</Typography>
              <Typography variant="point">Findi</Typography>
              <Typography variant="point">View More..</Typography>
            </div>
          </Grid>
          <Grid item xl={1.5} lg={1.5} md={1.5} sm={6} xs={6}>
            <Typography variant="h2">CATEGORIES</Typography>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <Typography variant="point">SUNGLASS</Typography>
              <Typography variant="point">Medical Sunglasses</Typography>
              <Typography variant="point">Contact Lenses</Typography>
              <Typography variant="point">Meddical Frames</Typography>
              <Typography variant="point">View More..</Typography>
            </div>
          </Grid>
          <Grid item xl={1.5} lg={1.5} md={1.5} sm={6} xs={6}>
            <Typography variant="h2">Accessories</Typography>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <Typography variant="point">COVERS</Typography>
              <Typography variant="point">Chains</Typography>
              <Typography variant="point">Contact Lenses kit</Typography>
              <Typography variant="point">Lens Cleaning Spray</Typography>
              <Typography variant="point">View More..</Typography>
            </div>
          </Grid>
          <Grid item xl={2} lg={2} md={2} sm={6} xs={6}>
            <Typography variant="h2">Instagram</Typography>
          </Grid>
        </Grid>
   
  );
}

export default AccountLinkSection;
