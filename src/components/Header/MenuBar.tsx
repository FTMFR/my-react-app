import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";

const pages = ["Home", "about us", "contact us", "blog", "FAQ"];

const MenuBar = () => {
  const [activePage, setActivePage] = useState<number>(0);

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
        display: {
          lg: "flex",
          md: "flex",
          sm: "none",
          xs: "none",
        },
        justifyContent: "center",
        alignItems: "center",
        gap: {
          lg: "21px",
          md: "15px",
        },
        visibility: {
          lg: "visible",
          md: "visible",
          sm: "hidden",
          xs: "hidden",
        },
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
            }}
          >
            {page}
          </Typography>
        </Button>
      ))}
    </Box>
  );
};

export default MenuBar;
