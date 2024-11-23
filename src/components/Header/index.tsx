import AppBar from "@mui/material/AppBar";
import LogoSvg from "../LogoSvg";
import MenuBar from "./MenuBar";
import LoginBtn from "../LoginBtn";
import { Box, IconButton, Toolbar } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import SideBar from "./SideBar";

const Header = () => {
  const [sideBarMenu, setSideBarMenu] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  const handleOpenNavMenu = (event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      setSideBarMenu(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOpenNavMenu);

    return () => {
      document.removeEventListener("mousedown", handleOpenNavMenu);
    };
  }, []);

  return (
    <AppBar
      position="static"
      sx={{
        width: "100%",
        py: {
          lg: "52px",
          md: "10px",
          sm: "10px",
        },
        backgroundColor: "transparent",
        boxShadow: "none",
      }}
    >
      <Toolbar
        sx={{
          mx: "auto",
          display: "flex",
          width: {
            lg: "80%",
            md: "80%",
            sm: "80%",
            xs: "90%",
          },
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <LogoSvg />
        <MenuBar />
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <LoginBtn />

          <IconButton
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={() => {
              setSideBarMenu((prev) => !prev);
            }}
            color="inherit"
            sx={{
              visibility: {
                lg: "hidden",
                md: "hidden",
              },
              width: 24,
              height: 24,
            }}
          >
            <MenuIcon />
          </IconButton>
        </Box>
        {sideBarMenu && (
          <Box ref={modalRef}>
            <SideBar isOpen={sideBarMenu} />
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
