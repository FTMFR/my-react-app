import { Box, Button, Typography } from "@mui/material";
import { useEffect } from "react";


const FailedPayment = () => {
  useEffect(() => {
    localStorage.removeItem("activeStep");
    localStorage.removeItem("formData"); 
  }, []);

  return (
    <Box
      sx={{
        mt: "68px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        flexDirection: "column",
        gap: "30px",
      }}
    >
      <Box
        sx={{
          color: "#f66066",
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
          gap: "12px",
        }}
      >
        <Box component="img" src="/failed.png" />
        <Typography sx={{ fontSize: "32px", fontWeight: "bold" }}>
          Your Payment Time Has Expired !
        </Typography>
      </Box>
      <Typography
        sx={{
          color: "#ababab",
          fontSize: "20px",
          fontWeight: "bold",
        }}
      >
        Please Complete The Payment Process Again
      </Typography>
      <Button
        href="/"
        sx={{
          bgcolor: "#1d8d94",
          boxShadow: "0 4px 20px 0 rgba(29, 141, 148, 0.8)",
          borderRadius: "10px",
          color: "white",
          fontSize: "20px",
          fontWeight: "bold",
          width: "173",
          height: "68px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "9px 41px 10px",
        }}
      >
        Try Again
      </Button>
    </Box>
  );
};

export default FailedPayment;
