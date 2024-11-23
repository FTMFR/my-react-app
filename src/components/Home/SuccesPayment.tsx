import { Box, Typography } from "@mui/material";
import { useEffect } from "react";


const SuccesPayment = () => {
  useEffect(() => {
    localStorage.removeItem("activeStep");
    localStorage.removeItem("formData"); 
  }, []);
  return (
    <>
      <Box
        sx={{
          color: "#40a578",
          mt: "68px",
          gap: "16px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <Box component="img" src="./public/success.png" />
        <Typography sx={{ fontSize: "32px", fontWeight: "bold" }}>
          Payment Success!
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          mt: "28px",
        }}
      >
        <Typography
          sx={{
            color: "#ababab",
            fontSize: "20px",
            fontWeight: "bold",
            mb: "14px",
          }}
        >
          The Transaction Was Successfully Completed And The Amount Of 100
          Tether Was Deposited To This Address
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            width: "100%",
            mb: "14px",
          }}
        >
          <Typography
            sx={{
              fontSize: "20px",
              fontWeight: "bold",
              color: "#ababab",
              flex: "1",
            }}
          >
            E- Voucher :
          </Typography>
          <Typography
            sx={{
              flex: 4,
              padding: "18px 16px",
              color: "white",
              fontSize: "16px",
              fontWeight: "bold",
              letterSpacing: "4px",
              bgcolor: "#242c39",
              borderRadius: "10px",
            }}
          >
            2326564925
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            width: "100%",
            mb: "14px",
          }}
        >
          <Typography
            sx={{
              fontSize: "20px",
              fontWeight: "bold",
              color: "#ababab",
              flex: "1",
            }}
          >
            Activation Code :
          </Typography>
          <Typography
            sx={{
              flex: 4,
              padding: "18px 16px",
              color: "white",
              fontSize: "16px",
              fontWeight: "bold",
              letterSpacing: "4px",
              bgcolor: "#242c39",
              borderRadius: "10px",
            }}
          >
            9012037427092330
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            width: "100%",
            mb: "14px",
          }}
        >
          <Typography
            sx={{
              fontSize: "20px",
              fontWeight: "bold",
              color: "#ababab",
              flex: "1",
            }}
          >
            Amount :
          </Typography>
          <Typography
            sx={{
              flex: 4,
              padding: "18px 16px",
              color: "white",
              fontSize: "16px",
              fontWeight: "bold",
              letterSpacing: "4px",
              bgcolor: "#242c39",
              borderRadius: "10px",
            }}
          >
            100 USDT
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            width: "100%",
            mb: "14px",
          }}
        >
          <Typography
            sx={{
              fontSize: "20px",
              fontWeight: "bold",
              color: "#ababab",
              flex: "1",
            }}
          >
            Time & Date :
          </Typography>
          <Typography
            sx={{
              flex: 4,
              padding: "18px 16px",
              color: "white",
              fontSize: "16px",
              fontWeight: "bold",
              letterSpacing: "4px",
              bgcolor: "#242c39",
              borderRadius: "10px",
            }}
          >
            25-02-2023, 13:22:16
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default SuccesPayment;
