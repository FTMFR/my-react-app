import { Box, Typography } from "@mui/material";
import { useEffect } from "react";

const SuccesPaymentPM = () => {
  const textToCopy =
    "f9798ecf9e9cc54dd819c8e1dc36588a6a7fe9d8e055d56ef6a9847139a4ed6c";

  const handleCopyClick = () => {
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        alert("Text copied to clipboard!");
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err);
      });
  };

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
            Address:
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
            x09aa998ee454c456255daf3ac94908f1dcfb7033
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
            Amount:
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
            TX Id:
          </Typography>
          <Box
            sx={{
              flex: 4,
              padding: "18px 16px",
              bgcolor: "#242c39",
              borderRadius: "10px",
              height: "auto",
              display: "flex",
              alignItems: "start",
              justifyContent: "center",
            }}
          >
            <Typography
              sx={{
                color: "white",
                fontSize: "16px",
                fontWeight: "bold",
                letterSpacing: "4px",
                wordWrap: "break-word",
                wordBreak: "break-all",
                whiteSpace: "normal",
              }}
            >
              f9798ecf9e9cc54dd819c8e1dc36588a6a7fe9d8e055d56ef6a9847139a4ed6c
            </Typography>
            <Box
              sx={{
                borderRadius: "8px",
                bgcolor: "#2a3342",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                ml: "70px",
                padding: "13px",
              }}
              onClick={handleCopyClick}
            >
              <Box component="img" src="./public/copy.png" />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default SuccesPaymentPM;
