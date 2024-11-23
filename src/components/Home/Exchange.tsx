import {
  Box,
  Button,
  Container,
  Divider,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

interface ExchangeProps {
  handleNext: () => void; // Explicitly type the handleNext function
}

const Exchange: React.FC<ExchangeProps> = ({ handleNext }) => {
  const [fromCurrency, setFromCurrency] = useState("Tether");
  const [toCurrency, setToCurrency] = useState("Perfect Money");
  const [toValue, setToValue] = useState<number | string>("");
  const [error, setError] = useState("");
  const { handleSubmit } = useForm();
  const [fromValue, setFromValue] = useState<number>(0);

  useEffect(() => {
    if (fromValue) {
      setToValue((fromValue * 5).toString());
    } else {
      setToValue("");
    }
  }, [fromValue]);

  const onSubmit = () => {
    const parsedFromValue =
      typeof fromValue === "number" ? fromValue : parseFloat(fromValue);

    if (!parsedFromValue || parsedFromValue <= 0) {
      setError("Please enter a valid number in the 'From' field.");
      return;
    }

    const formData = {
      fromCurrency,
      toCurrency,
      fromValue,
      toValue,
    };

    localStorage.setItem("formData", JSON.stringify(formData));

    handleNext();
  };

  const handleSwap = () => {
    setFromCurrency((prev) => (prev === "Tether" ? "Perfect Money" : "Tether"));
    setToCurrency((prev) =>
      prev === "Perfect Money" ? "Tether" : "Perfect Money"
    );
  };

  return (
    <Container
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{
        mt: "35px",
        maxWidth: "none",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          mx: "auto",
        }}
      >
        <Box
          sx={{
            bgcolor: "#2a3342",
            width: {
              lg: "560px",
              md: "560px",
              sm: "80%",
              xs: "80%",
            },
            borderRadius: "30px",
            height: "auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            padding: "40px 36px 41px 39px",
            mb: "26px",
          }}
        >
          <Typography
            sx={{
              color: "#ABABAB",
              fontWeight: "bold",
              mb: "20px",
            }}
          >
            From:
          </Typography>
          <Box
            sx={{
              bgcolor: "#242c39",
              height: "57px",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "10px",
              width: "100%",
            }}
          >
            <TextField
              value={fromValue}
              onChange={(e) => setFromValue(parseFloat(e.target.value))}
              sx={{
                borderRadius: "10px",
                border: "none",
                color: "white",
                flex: "1",
                input: {
                  color: "white",
                  fontWeight: "bold",
                },

                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "transparent",
                    borderRadius: "10px",
                    color: "white",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "transparent",
                    outline: "none",
                  },
                  "&:hover fieldset": {
                    borderColor: "transparent",
                    borderRadius: "10px",
                  },
                },
              }}
            />
            <Divider
              orientation="vertical"
              sx={{
                width: "1px",
                height: "80%",
                mx: "16px",
                bgcolor: "#5b5f5e",
                border: "none",
              }}
            />

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flex: "1",
              }}
            >
              <Box
                component="img"
                src={`${
                  fromCurrency === "Tether"
                    ? "./public/tether.svg"
                    : "./public/perfect.png"
                }`}
                sx={{
                  width: {
                    lg: "25px",
                    md: "25px",
                    sm: "15px",
                    xs: "15.px",
                  },
                  height: {
                    lg: "25px",
                    md: "25px",
                    sm: "15px",
                    xs: "15px",
                  },
                }}
              />
              <Typography
                sx={{
                  mr: {
                    lg: "90px",
                    md: "86px",
                    sm: "50px",
                    xs: "20px",
                  },
                  color: "#979e9c",
                  ml: "10px",
                  fontSize: {
                    lg: "14px",
                    md: "14px",
                    sm: "12px",
                    xs: "12px",
                  },
                }}
              >
                {fromCurrency}
              </Typography>
            </Box>
          </Box>
          {error && ( // Show error message if validation fails
            <Typography
              sx={{
                color: "red",
                mt: "10px",
                fontSize: "14px",
              }}
            >
              {error}
            </Typography>
          )}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              color: "#ababab",
              gap: "15px",
              mt: "15px",
            }}
          >
            <Typography>Min : $100</Typography>
            <Typography>Max: $4832</Typography>
          </Box>
        </Box>

        <Button
          type="button"
          onClick={handleSwap}
          sx={{
            width: "69px",
            height: "69px",
            borderRadius: "50%",
            bgcolor: "#242c39",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
          }}
        >
          <Box component="img" src="./public/exchange.svg" />
        </Button>

        <Box
          sx={{
            bgcolor: "#2a3342",
            borderRadius: "30px",
            width: {
              lg: "560px",
              md: "560px",
              sm: "80%",
              xs: "80%",
            },
            height: "auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            padding: "40px 36px 41px 39px",
          }}
        >
          <Typography
            sx={{
              color: "#ABABAB",
              fontWeight: "bold",
              mb: "20px",
            }}
          >
            To:
          </Typography>
          <Box
            sx={{
              bgcolor: "#242c39",
              height: "57px",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "10px",
              width: "100%",
            }}
          >
            <TextField
              value={toValue}
              InputProps={{
                readOnly: true,
              }}
              sx={{
                borderRadius: "10px",
                border: "none",
                color: "white",
                display: "flex",
                flex: "1",
                input: {
                  color: "white",
                  fontWeight: "bold",
                },

                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "transparent",
                    borderRadius: "10px",
                    color: "white",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "transparent",
                    outline: "none",
                  },
                  "&:hover fieldset": {
                    borderColor: "transparent",
                    borderRadius: "10px",
                  },
                },
              }}
            />
            <Divider
              orientation="vertical"
              sx={{
                width: "1px",
                height: "80%",
                mx: "16px",
                bgcolor: "#5b5f5e",
                border: "none",
              }}
            />
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flex: "1",
              }}
            >
              <Box
                component="img"
                src={`${
                  toCurrency == "Tether"
                    ? "./public/tether.svg"
                    : "./public/perfect.png"
                }`}
                sx={{
                  width: {
                    lg: "25px",
                    md: "25px",
                    sm: "15px",
                    xs: "15px",
                  },
                  height: {
                    lg: "25px",
                    md: "25px",
                    sm: "15px",
                    xs: "15px",
                  },
                }}
              />
              <Typography
                sx={{
                  mr: {
                    lg: "86px",
                    md: "86px",
                    sm: "40px",
                    xs: "10px",
                  },
                  color: "#979e9c",
                  ml: "10px",
                  fontSize: {
                    lg: "14px",
                    md: "14px",
                    sm: "12px",
                    xs: "12px",
                  },
                }}
              >
                {toCurrency}
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              color: "#ababab",
              gap: "15px",
              mt: "15px",
            }}
          >
            <Typography>Min : $100</Typography>
            <Typography>Max: $4832</Typography>
          </Box>
        </Box>
      </Box>

      <Button
        type="submit"
        sx={{
          bgcolor: "#1d8d94",
          width: {
            lg: "620px",
            md: "100%",
            sm: "100%",
            xs: "80%",
          },
          height: "60px",
          mx: "auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          boxShadow: "0 0 20px 0 rgba(29, 141, 148, 0.5)",
          mt: "27px",
          borderRadius: "10px",
        }}
      >
        Make Exchange
      </Button>
    </Container>
  );
};

export default Exchange;
