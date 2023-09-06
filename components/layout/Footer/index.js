import { Divider, Grid, Typography } from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import YouTubeIcon from "@mui/icons-material/YouTube";
import CopyRightSection from "./CopyRight";
import AccountLinkSection from "./AcountSection";
import PaymentBanner from "./PaymentBanner";
// components/Footer.js
function Footer() {
  return (
    <>
      <footer>
        <PaymentBanner />
        <AccountLinkSection />
        <Divider />

        <CopyRightSection />
      </footer>
    </>
  );
}

export default Footer;
