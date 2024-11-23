import { Box, Divider, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        mt: "50px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: {
          lg: "80%",
          md: "80%",
          sm: "80%",
          xs: "90%",
        },
        mx: "auto",
      }}
    >
      <Divider
        orientation="vertical"
        flexItem
        sx={{
          bgcolor: "#2E3E59",
          border: "1px solid #2E3E59",
        }}
      />

      <Typography
        component="p"
        sx={{
          color: "#ABABAB",
          fontSize: "12px",
          mt: "10px",
        }}
      >
        Copyright © 2024 repayment. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
