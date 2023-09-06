import { Divider, Grid } from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";
import { UHeading1, UHeading2, UHeading3, UMainHeading } from "../Ucomponents/Uheading";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { useTheme } from "styled-components";
// components/Footer.js
function Footer() {
    const theme = useTheme
  return (
    <>
      <footer>
        <Grid
          container
          style={{
            backgroundColor: "#FFF5F5",
            alignItems: "center",
            padding: "8px 8px 8px 8px",
          }}
          spacing={2}
        >
          <Grid item xl={4} lg={4} md={4} sm={12} xs={12}>
            <UHeading3>
              <LockIcon style={{ fontSize: "12px" }} /> &nbsp; We guarantee
              every transaction is 100% secure.
            </UHeading3>
          </Grid>
          <Grid
            item
            xl={4}
            lg={4}
            md={4}
            sm={12}
            xs={12}
            style={{ textAlign: "center" }}
          >
            Payment Gate ways
          </Grid>
          <Grid
            item
            xl={4}
            lg={4}
            md={4}
            sm={12}
            xs={12}
            style={{ textAlign: "right" }}
          >
            <UHeading3>Also Available On: s</UHeading3>
          </Grid>
        </Grid>
        <Grid
          container
          spacing={2}
          style={{ textAlign: "center", padding: "8px", }}
        >
          <Grid item xl={2} lg={2} md={2} sm={6} xs={6}>
            <UHeading2>Jar al ayuoun</UHeading2>
          </Grid>
          <Divider orientation="vertical" variant="middle" flexItem />
          <Grid item xl={1.5} lg={1.5} md={1.5} sm={6} xs={6}>
            <UHeading2>Accounts</UHeading2>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <pointsParagraph>Sign In</pointsParagraph>
              <pointsParagraph>Register</pointsParagraph>
              <pointsParagraph>My Accounts</pointsParagraph>
              <pointsParagraph>Terms & Conditions</pointsParagraph>
              <pointsParagraph>Privacy Policy</pointsParagraph>
            </div>
          </Grid>
          <Grid item xl={1.5} lg={1.5} md={1.5} sm={6} xs={6}>
            <UHeading2>Brands</UHeading2>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <pointsParagraph>Raybans</pointsParagraph>
              <pointsParagraph>Police</pointsParagraph>
              <pointsParagraph>Carrera</pointsParagraph>
              <pointsParagraph>Findi</pointsParagraph>
              <pointsParagraph>View More..</pointsParagraph>
            </div>
          </Grid>
          <Grid item xl={1.5} lg={1.5} md={1.5} sm={6} xs={6}>
            <UHeading2>CATEGORIES</UHeading2>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <pointsParagraph>SUNGLASS</pointsParagraph>
              <pointsParagraph>Medical Sunglasses</pointsParagraph>
              <pointsParagraph>Contact Lenses</pointsParagraph>
              <pointsParagraph>Meddical Frames</pointsParagraph>
              <pointsParagraph>View More..</pointsParagraph>
            </div>
          </Grid>
          <Grid item xl={1.5} lg={1.5} md={1.5} sm={6} xs={6}>
            <UHeading2>Accessories</UHeading2>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <pointsParagraph>COVERS</pointsParagraph>
              <pointsParagraph>Chains</pointsParagraph>
              <pointsParagraph>Contact Lenses kit</pointsParagraph>
              <pointsParagraph>Lens Cleaning Spray</pointsParagraph>
              <pointsParagraph>View More..</pointsParagraph>
            </div>
          </Grid>
          <Grid item xl={2} lg={2} md={2} sm={6} xs={6}>
            <UHeading2>Instagram</UHeading2>
          </Grid>
        </Grid>
        <Divider style={{ marginTop: "16px", color:"red" }} />
        <div
          style={{
            padding: "8px 8px 8px 8px",
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "row",
            flexWrap: "warp",
            alignItems: "center",
          }}
        >
          <div>
            <UHeading3>© 2023, JarStore - Powered by AWahabtech </UHeading3>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap:'8px',
              }}
            >
              <UHeading1>Follow Us</UHeading1>
              <FacebookOutlinedIcon style={{fontSize:'28px'}}/>
              <YouTubeIcon style={{fontSize:'28px'}} />
            </div>
            <UHeading3 styles={{fontWeight:'400'}}> Up to 5 % discount on your first subscription</UHeading3>
          </div>
        </div>
      </footer>
      ;
    </>
  );
}

export default Footer;
