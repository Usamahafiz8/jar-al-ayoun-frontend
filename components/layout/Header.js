import { Box, Button, Divider, TextField } from "@mui/material";
import { UHeading2, UHeading3 } from "../Ucomponents/Uheading";

function Header() {
  return (
    <header style={{ backgroundColor: "white" }}>
      <Box
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <div>
          <Button variant="texted">TRY IT 3D</Button>
          <Button variant="texted">STORE LOCATION</Button>
          <Button variant="texted">QUALITY</Button>
          <Button variant="texted">TRACK ORDER</Button>
        </div>
        <div>
          {" "}
          <UHeading2>
            100 % SECURE DELIVERY WITHOUT CONTACT TO COURIOR
          </UHeading2>
        </div>
        <div>drop down</div>
      </Box>
      <Divider />

      <Box
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
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
        </div>
        <div style={{ width: "600px" }}>
          <TextField fullWidth label="search" id="fullWidth" />
        </div>
        <div>
          <Button variant="texted">Compare</Button>
          <Button variant="texted">Wishlist</Button>
          <Button variant="texted">Cart</Button>
          <Button variant="texted">Account</Button>
        </div>
      </Box>
      <Divider />

      <Box
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Button variant="contained">Browse All Categories</Button>
        <Button variant="texted">Deals</Button>
        <Button variant="texted">EYEGLASSES</Button>
        <Button variant="texted">COMPUTER GLASSES</Button>
        <Button variant="texted">KIDS GLASSES</Button>
        <Button variant="texted"> CONTACT LENSES</Button>
        <Button variant="texted"> SUNGLASSES</Button>
        <Button variant="texted"> GET APPOINTMENT</Button>
        <Button variant="texted"> 3D TRY ON</Button>
      </Box>
      <Divider />
    </header>
  );
}

export default Header;
