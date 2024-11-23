import { VisibilityOffOutlined, VisibilityOutlined } from "@mui/icons-material";
import {
  Box,
  Button,
  Checkbox,
  Container,
  Divider,
  FormControlLabel,
  IconButton,
  InputAdornment,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import { FC, useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const staticDataForExchangeConditions = [
  {
    id: 1,
    text: "Any Change In Exchange Rate On The Binance Exchange Gives Us The right To Recalculate The Amount Of The Application.",
  },
  {
    id: 2,
    text: "The Rate For Your Application Will Be Fixed After 1 Confirmation Online.",
  },
  { id: 3, text: "Funds Are Credited After 20 Transaction Confirmations." },
  {
    id: 4,
    text: "We Cconduct AML Checks In Accordance With The AML Policy Of The Flashobmen Service.",
  },
  { id: 5, text: "Fill Out All Fields Of The Form Provided." },
  { id: 6, text: "Click The “Make An Exchange” Button." },
  {
    id: 7,
    text: "Read The Terms Of Exchange. If You Accept Them, Check The Approprite Boxes9. Pay For The Application According To The Instructions On The Website.",
  },
];

interface ConfirmProps {
  handleNext: () => void;
}

const Confirm: FC<ConfirmProps> = ({ handleNext }) => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [exchangeData, setExchangeData] = useState({
    fromCurrency: "Tether",
    toCurrency: "Perfect Money",
    fromValue: "0",
    toValue: "0",
  });

  const { handleSubmit } = useForm();

  useEffect(() => {
    const storedData = localStorage.getItem("formData");
    const storedEmail = localStorage.getItem("user");
    const storedPassword = localStorage.getItem("password");
    if (storedEmail) {
      setIsUserLoggedIn(true);
      setEmail(storedEmail);
    }

    if (storedPassword) {
      setPassword(storedPassword);
    }

    if (storedData) {
      setExchangeData(JSON.parse(storedData));
    }
  }, []);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleCheckboxChange = () => {
    setIsCheckboxChecked((prev) => !prev);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value); // Handle password change
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const onSubmit = () => {
    if (!isUserLoggedIn && !email) {
      alert("Please enter your email to proceed.");
      return;
    }
    if (!isCheckboxChecked) {
      alert("You must agree to the terms and conditions.");
      return;
    }
    if (!isUserLoggedIn) {
      localStorage.setItem("user", JSON.stringify(email));
      localStorage.setItem("password", JSON.stringify(password));
      setIsUserLoggedIn(true);
    }
    handleNext();
  };

  return (
    <>
      <Container
        onSubmit={handleSubmit(onSubmit)}
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
            padding: "29px 77px",
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
            Invoice Details :
          </Typography>

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

          {isUserLoggedIn ? (
            ""
          ) : (
            <Box
              sx={{
                width: "100%",
                gap: "20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <Box
                sx={{
                  width: "100%",
                }}
              >
                <Typography
                  sx={{
                    color: "#ababab",
                    fontSize: "16px",
                    fontWeight: "bold",
                    mb: "12px",
                  }}
                >
                  Email :
                </Typography>
                <TextField
                  value={email}
                  onChange={handleEmailChange}
                  autoComplete="current-email"
                  placeholder="Please Enter your Email"
                  sx={{
                    color: "white",
                    borderRadius: "10px",
                    width: "100%",
                    bgcolor: "#242c39",
                    height: "57px",
                    input: {
                      color: "white",
                      "&::placeholder": {
                        color: "white",
                        opacity: 1,
                      },
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
              </Box>
              <Box
                sx={{
                  width: "100%",
                }}
              >
                <Typography
                  sx={{
                    color: "#ababab",
                    fontSize: "16px",
                    fontWeight: "bold",
                    mb: "12px",
                  }}
                >
                  Password :
                </Typography>
                <TextField
                  type={showPassword ? "text" : "password"}
                  fullWidth
                  value={password}
                  onChange={handlePasswordChange}
                  required
                  placeholder="Please Enter your Password"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleTogglePasswordVisibility}
                          edge="end"
                          sx={{
                            color: "white",
                          }}
                        >
                          {showPassword ? (
                            <VisibilityOffOutlined />
                          ) : (
                            <VisibilityOutlined />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  sx={{
                    color: "white",
                    borderRadius: "10px",
                    width: "100%",
                    bgcolor: "#242c39",
                    height: "57px",
                    input: {
                      color: "white",
                      "&::placeholder": {
                        color: "white",
                        opacity: 1,
                      },
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
              </Box>
            </Box>
          )}

          <Box
            sx={{
              mt: "43px",
            }}
          >
            <Typography
              sx={{
                color: "white",
                fontWeight: "bold",
                mb: "31px",
              }}
            >
              Exchange Conditions :
            </Typography>
            {staticDataForExchangeConditions.map((item) => (
              <Box
                key={item.id}
                sx={{
                  display: "flex",
                  alignItems: {
                    ld: "start",
                    md: "start",
                    sm: "center",
                    xs: "center",
                  },
                  justifyContent: "start",
                  gap: "12px",
                  mb: {
                    lg: "12px",
                    md: "12px",
                    sm: "5px",
                    xs: "5px",
                  },
                }}
              >
                <Typography
                  sx={{
                    width: {
                      lg: "25px",
                      md: "25px",
                      sm: "15px",
                      xs: "10px",
                    },
                    height: {
                      lg: "25px",
                      md: "25px",
                      sm: "15px",
                      xs: "10px",
                    },
                    borderRadius: "50%",
                    bgcolor: {
                      lg: "#1d8d94",
                      md: "#1d8d94",
                      sm: "transparent",
                      xs: "transparent",
                    },
                    fontSize: {
                      lg: "16px",
                      md: "14px",
                      sm: "12px",
                      xs: "10px",
                    },
                    color: "white",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {item.id}
                </Typography>
                <Typography
                  sx={{
                    color: "white",
                    fontWeight: "light",
                    fontSize: {
                      lg: "16px",
                      md: "14px",
                      sm: "12px",
                      xs: "10px",
                    },
                  }}
                >
                  {item.text}
                </Typography>
              </Box>
            ))}
          </Box>

          <Box
            sx={{
              mt: "20px",
              mb: "44px",
            }}
          >
            <FormControlLabel
              control={
                <Checkbox
                  sx={{ color: "#ababab" }}
                  onChange={handleCheckboxChange}
                />
              }
              label={
                <Typography
                  sx={{
                    color: "#ababab",
                    fontSize: {
                      lg: "16px",
                      md: "14px",
                      sm: "12px",
                      xs: "10px",
                    },
                    fontWeight: "light",
                  }}
                >
                  I Agree With The <Link>AML Policy</Link> And{" "}
                  <Link>User Agreement</Link>.{" "}
                </Typography>
              }
            />
          </Box>
          <Button
            type="submit"
            sx={{
              width: "560px",
              height: "60px",
              bgcolor: "#1d8d94",
              boxShadow: "0 0 20px 0 rgba(29, 141, 148, 0.5)",
              borderRadius: "10px",
              mx: "auto",
              color: "white",
              fontWeight: "bold",
            }}
          >
            Confirm
          </Button>
        </Box>
      </Container>
    </>
  );
};

export default Confirm;
