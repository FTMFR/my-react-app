import { Box, Typography } from "@mui/material";

const Waiting = () => {
  return (
    
    <>
      <Box
        sx={{
          color: "#ffaf00",
          mt: "68px",
          gap: "16px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <Box component="img" src="./public/waiting.png" />
        <Typography sx={{ fontSize: "32px", fontWeight: "bold" }}>
          Waiting ...
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          mt: "28px",
          width: "100%",
        }}
      >
        <Typography
          sx={{
            color: "#ababab",
            fontSize: "20px",
            fontWeight: "bold",
            mb: "37px",
          }}
        >
          Your Payment Was Successful And We Will Soon Pay The Amount Of 100
          Tether To This Address :
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
      </Box>
    </>
  );
};

export default Waiting;
