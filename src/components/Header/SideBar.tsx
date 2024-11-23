import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
const pages = ["Home", "about us", "contact us", "blog", "FAQ"];

interface SideBarProps {
  isOpen: boolean;
}

const SideBar: React.FC<SideBarProps> = ({ isOpen }) => {
  const [activePage, setActivePage] = useState(0);

  const handleActivePage = (
    e: React.MouseEvent<HTMLButtonElement>,
    index: number
  ) => {
    e.preventDefault();
    setActivePage(index);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        gap: "20px",
        alignItems: "center",
        visibility: `${isOpen ? "visible" : "hidden"}`,
        position: "absolute",
        top: 0,
        right: 0,
        width: "50vw",
        backgroundColor: "#2A3342",
        height: "100vh",
        pt: "20px",
      }}
    >
      {pages.map((page, index) => (
        <Button
          key={index}
          onClick={(e) => handleActivePage(e, index)}
          sx={{ color: "#e4e4e4", display: "flex" }}
        >
          <Typography
            component="p"
            sx={{
              fontSize: "16px",
              fontWeight: `${activePage === index ? "bold" : "normal"}`,
              color: "white",
            }}
          >
            {page}
          </Typography>
        </Button>
      ))}
    </Box>
  );
};

export default SideBar;
