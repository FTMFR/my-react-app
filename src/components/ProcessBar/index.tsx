import { Box, Container, Divider, Typography } from "@mui/material";

interface ProcessBarProps {
  isActiveBar: number[];
}

const ProcessBar: React.FC<ProcessBarProps> = ({ isActiveBar }) => {
  const lastActiveStep = isActiveBar[isActiveBar.length - 1];

  return (
    <Container
      sx={{
        width: {
          lg: "80%",
          md: "80%",
          sm: "80%",
          xs: "90%",
        },
        borderRadius: "30px",
        bgcolor: "#2a3342",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: {
          lg: "36px 235px 37px 227px",
          md: "36px 235px 37px 227px",
          sm: "30px 50px",
          xs: "30px 50px",
        },
      }}
    >
      <Box
        sx={{
          color: "#596b89",
          fontSize: {
            lg: "14px",
            md: "12px",
            sm: "10px",
            xs: "8px",
          },

          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: {
            lg: "48px",
            md: "20px",
            sm: "10px",
            xs: "5px",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
          }}
        >
          <Typography
            sx={{
              padding: "px",
              borderRadius: "50%",
              bgcolor: isActiveBar.includes(1) ? "#40a578" : "#596b89",
              color: "white",
              height: "26px",
              width: "26px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: "normal",
              boxShadow:
                lastActiveStep === 1
                  ? " 0 4px 20px 0 rgba(64, 165, 120, 0.5)"
                  : "none",
            }}
          >
            1
          </Typography>
          <Typography
            sx={{
              color: isActiveBar.includes(1) ? "#40a578" : "#596b89",
              fontWeight: isActiveBar.includes(1) ? "bold" : "normal",
            }}
          >
            Exchange
          </Typography>
        </Box>
        <Divider
          orientation="horizontal"
          variant="middle"
          sx={{
            bgcolor: "#596b89",
            width: {
              lg: "100px",
              md: "60px",
              sm: "40px",
              xs: "hidden",
            },
            height: "1px",
            border: "none",
          }}
        />
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
          }}
        >
          <Typography
            sx={{
              padding: "px",
              bgcolor: isActiveBar.includes(2) ? "#40a578" : "#596b89",
              borderRadius: "50%",
              color: "white",
              height: "26px",
              width: "26px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: "normal",
              boxShadow:
                lastActiveStep === 2
                  ? " 0 4px 20px 0 rgba(64, 165, 120, 0.5)"
                  : "none",
            }}
          >
            2
          </Typography>
          <Typography
            sx={{
              color: isActiveBar.includes(2) ? "#40a578" : "#596b89",
              fontWeight: isActiveBar.includes(2) ? "bold" : "normal",
            }}
          >
            Confirm
          </Typography>
        </Box>
        <Divider
          orientation="horizontal"
          variant="middle"
          sx={{
            bgcolor: "#596b89",
            width: {
              lg: "100px",
              md: "60px",
              sm: "40px",
              xs: "hidden",
            },
            height: "1px",
            border: "none",
          }}
        />
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
          }}
        >
          <Typography
            sx={{
              padding: "px",
              borderRadius: "50%",
              color: "white",
              height: "26px",
              width: "26px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: "normal",
              bgcolor: isActiveBar.includes(3) ? "#40a578" : "#596b89",
              boxShadow:
                lastActiveStep === 3
                  ? " 0 4px 20px 0 rgba(64, 165, 120, 0.5)"
                  : "none",
            }}
          >
            3
          </Typography>
          <Typography
            sx={{
              color: isActiveBar.includes(3) ? "#40a578" : "#596b89",
              fontWeight: isActiveBar.includes(3) ? "bold" : "normal",
            }}
          >
            Complete
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default ProcessBar;
