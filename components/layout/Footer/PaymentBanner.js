import { Box, Divider, Grid, Typography } from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";

// components/PaymentBanner.js
function PaymentBanner() {
  return (
    <>
      <Box
        style={{
          backgroundColor: "#FFF5F5",
          alignItems: "center",
          padding: "8px 8px 8px 8px",
          display:"flex", flexDirection:'row', justifyContent:'space-between'
        }}
      >
         <Typography variant="h3">
            <LockIcon style={{ fontSize: "12px" }} /> &nbsp; We guarantee every
            transaction is 100% secure.
          </Typography>
          <div>
         payment methods
          </div>
          <Typography variant="h3">Also Available On:</Typography>
      </Box>
    </>
  );
}

export default PaymentBanner;
