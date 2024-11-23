import {
  Box,
  Button,
  CircularProgress,
  Container,
  Divider,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import ConfirmFirstPage from "./ConfirmFirstPage";
import Waiting from "./Waiting";
import SuccesPayment from "./SuccesPayment";
import FailedPayment from "./FailedPayment";
import PMToTether from "./PMToTether";
import SuccesPaymentPM from "./SuccessPaymentPM";

const Complete = () => {
  const [isWaiting, setIsWaiting] = useState(false);
  const [isTimeUp, setIsTimeUp] = useState(false);
  const [canceledProcess, setCanceledProcess] = useState(false);
  const initialTime = 10;
  const [exchangeData, setExchangeData] = useState({
    fromCurrency: "Tether",
    toCurrency: "Perfect Money",
    fromValue: "0",
    toValue: "0",
  });
  const [timeLeft, setTimeLeft] = useState(initialTime);

  const progress = ((initialTime - timeLeft) / initialTime) * 100;

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, "0")} : ${String(
      remainingSeconds
    ).padStart(2, "0")}`;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime === 0) {
          clearInterval(interval);
          setIsTimeUp(true);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const storedData = localStorage.getItem("formData");
    const parsedData = storedData
      ? JSON.parse(storedData)
      : {
          fromCurrency: "Tether",
          toCurrency: "Perfect Money",
          fromValue: "0",
          toValue: "0",
        };
    setExchangeData(parsedData);
    if (isTimeUp) {
      setIsWaiting(true);
      setTimeout(() => {
        setIsWaiting(false);
      }, 10000);
    }
  }, [isTimeUp]);

  return (
    <Container
      component="form"
      sx={{
        width: {
          lg: "80%",
          md: "80%",
          sm: "80%",
          xs: "90%",
        },
        mt: "33px",
        bgcolor: "#2a3342",
        padding: "29px 75px 39px 76px",
        borderRadius: "30px",
        fontSize: "16px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
          justifyContent: "center",
          padding: "30px 70px",
        }}
      >
        {!isTimeUp && !canceledProcess && (
          <Button
            type="button"
            onClick={() => setCanceledProcess(true)}
            sx={{
              bgcolor: "red",
              color: "white",
              mb: "10px",
            }}
          >
            Canceled
          </Button>
        )}

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Typography
            sx={{
              color: "white",
              fontWeight: "bold",
              fontSize: "24px",
              mb: "43px",
            }}
          >
            transaction details :
          </Typography>
          {isTimeUp || canceledProcess ? (
            ""
          ) : (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                mb: "55px",
                border: "1px solid #ababab",
                borderRadius: "50%",
                width: "168px",
                height: "168px",
                position: "relative",
              }}
            >
              <CircularProgress
                variant="determinate"
                value={progress}
                size={171}
                thickness={1}
                sx={{
                  position: "absolute",
                  color: "#40a578",
                }}
              />
              <Typography
                sx={{
                  color: "white",
                  fontSize: "12px",
                  fontWeight: "bold",
                }}
              >
                Time For Payment
              </Typography>
              <Typography
                sx={{
                  color: "#40a578",
                  fontSize: "32px",
                  fontWeight: "bold",
                  mb: "20px",
                  mt: "12px",
                }}
              >
                {formatTime(timeLeft)}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Box
                  component="img"
                  src="./public/bell.png"
                  sx={{
                    width: "15px",
                    height: "15px",
                  }}
                />
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: "bold",
                    color: "white",
                  }}
                >
                  15:30
                </Typography>
              </Box>
            </Box>
          )}
        </Box>

        {exchangeData.fromCurrency === "Tether" ? (
          <>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%",
                mb: "16px",
              }}
            >
              <Typography
                sx={{
                  color: "#ababab",
                  fontSize: "20px",
                  fontWeight: "bold",
                }}
              >
                Send:
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",

                  gap: "12px",
                  fontWeight: "bold",
                }}
              >
                <Typography
                  sx={{
                    fontSize: {
                      lg: "20px",
                      md: "20px",
                      sm: "10px",
                      xs: "10px",
                    },
                    fontWeight: "bold",
                  }}
                >
                  {exchangeData.fromValue}
                </Typography>
                <Box
                  component="img"
                  src={`${
                    exchangeData.fromCurrency === "Tether"
                      ? "./public/tether.svg"
                      : "./public/perfect.png"
                  }`}
                />
                <Typography
                  sx={{
                    fontWeight: "bold",
                    fontSize: {
                      lg: "20px",
                      md: "20px",
                      sm: "10px",
                      xs: "10px",
                    },
                  }}
                >
                  {exchangeData.fromCurrency === "Tether"
                    ? "USDT"
                    : "Perfect Money"}
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%",
                mb: "33px",
              }}
            >
              <Typography
                sx={{
                  color: "#ababab",
                  fontSize: "20px",
                  fontWeight: "bold",
                }}
              >
                Receive :
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  gap: "12px",
                }}
              >
                <Typography
                  sx={{
                    fontWeight: "bold",
                    fontSize: {
                      lg: "20px",
                      md: "20px",
                      sm: "10px",
                      xs: "10px",
                    },
                  }}
                >
                  {exchangeData.toValue}
                </Typography>
                <Box
                  component="img"
                  src={`${
                    exchangeData.fromCurrency === "Tether"
                      ? "./public/perfect.png"
                      : "./public/tether.svg"
                  }`}
                />
                <Typography
                  sx={{
                    fontSize: {
                      lg: "20px",
                      md: "20px",
                      sm: "10px",
                      xs: "10px",
                    },
                    fontWeight: "bold",
                  }}
                >
                  {exchangeData.fromCurrency === "Tether"
                    ? "Perfect Money"
                    : "USDT"}
                </Typography>
              </Box>
            </Box>
          </>
        ) : (
          <>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%",
                mb: "16px",
              }}
            >
              <Typography
                sx={{
                  color: "#ababab",
                  fontSize: "20px",
                  fontWeight: "bold",
                }}
              >
                Send:
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  gap: "12px",
                }}
              >
                <Typography
                  sx={{
                    fontWeight: "bold",
                    fontSize: {
                      lg: "20px",
                      md: "20px",
                      sm: "10px",
                      xs: "10px",
                    },
                  }}
                >
                  {exchangeData.fromValue}
                </Typography>
                <Box
                  component="img"
                  src={`${
                    exchangeData.fromCurrency === "Tether"
                      ? "./public/tether.svg"
                      : "./public/perfect.png"
                  }`}
                />
                <Typography
                  sx={{
                    fontSize: {
                      lg: "20px",
                      md: "20px",
                      sm: "10px",
                      xs: "10px",
                    },
                    fontWeight: "bold",
                  }}
                >
                  {exchangeData.fromCurrency === "Tether"
                    ? "USDT"
                    : "Perfect Money"}
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%",
                mb: "33px",
              }}
            >
              <Typography
                sx={{
                  color: "#ababab",
                  fontSize: "20px",
                  fontWeight: "bold",
                }}
              >
                Receive :
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",

                  gap: "12px",
                  fontWeight: "bold",
                }}
              >
                <Typography
                  sx={{
                    fontSize: {
                      lg: "20px",
                      md: "20px",
                      sm: "10px",
                      xs: "10px",
                    },
                    fontWeight: "bold",
                  }}
                >
                  {exchangeData.toValue}
                </Typography>
                <Box
                  component="img"
                  src={`${
                    exchangeData.fromCurrency === "Tether"
                      ? "./public/perfect.png"
                      : "./public/tether.svg"
                  }`}
                />
                <Typography
                  sx={{
                    fontWeight: "bold",
                    fontSize: {
                      lg: "20px",
                      md: "20px",
                      sm: "10px",
                      xs: "10px",
                    },
                  }}
                >
                  {exchangeData.toCurrency === "Tether"
                    ? "USDT"
                    : "Perfect Money"}
                </Typography>
              </Box>
            </Box>
          </>
        )}

        <Divider
          orientation="horizontal"
          sx={{
            width: "100%",
            mb: "16px",
            bgcolor: "#596b89",
            border: "none",
            height: "1px",
          }}
        />
        {exchangeData.fromCurrency === "Tether" ? (
          canceledProcess ? (
            <FailedPayment  />
          ) : !isTimeUp ? (
            <ConfirmFirstPage />
          ) : (
            <SuccesPayment />
          )
        ) : canceledProcess ? (
          <FailedPayment  />
        ) : !isTimeUp ? (
          <PMToTether />
        ) : isWaiting ? (
          <Waiting />
        ) : (
          <SuccesPaymentPM />
        )}
      </Box>
    </Container>
  );
};

export default Complete;
