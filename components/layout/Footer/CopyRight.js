import { Divider, Grid, Typography } from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import YouTubeIcon from "@mui/icons-material/YouTube";
function CopyRightSection() {
  return (
    <>
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
          <Typography variant="h3">
            © 2023, JarStore - Powered by  &nbsp;
            <Typography variant="colortext">
                AWahabtech
                </Typography> 
          </Typography>
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
              gap: "8px",
            }}
          >
            <Typography variant="h2">Follow Us</Typography>
            <FacebookOutlinedIcon style={{ fontSize: "28px" }} />
            <YouTubeIcon style={{ fontSize: "28px" }} />
          </div>
          <Typography variant="h3" style={{ fontWeight: "400" }}>
            Up to 5 % discount on your first subscription
          </Typography>
        </div>
      </div>
    </>
  );
}

export default CopyRightSection;
