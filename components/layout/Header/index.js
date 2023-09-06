import { Box, Button, Divider, TextField } from "@mui/material";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import * as React from "react";
import { UHeading3, UHeading2 } from "@/components/Ucomponents/Uheading";
import HeaderMiddleSection from "./MiddleSection";
import HeaderBottomSection from "./BottomSection";
import HeaderTopSection from "./TopSection";

function Header() {
  return (
    <header
      style={{
        backgroundColor: "white",
        height: "20vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <HeaderTopSection />
     
      <HeaderMiddleSection />
     
      <HeaderBottomSection />

    </header>
  );
}

export default Header;
