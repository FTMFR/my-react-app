import {
  Box,
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";

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
];

const ConfirmFirstPage = () => {
  const [selectedValue, setSelectedValue] = useState("TTH");

  const handleChange = (e: SelectChangeEvent<string>) => {
    setSelectedValue(e.target.value);
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "start",
            width: "100%",
            justifyContent: "center",
            flexDirection: "column",
            mr: "60px",
          }}
        >
          <Typography
            sx={{
              fontSize: "20px",
              fontWeight: "bold",
              color: "#ababab",
              mb: "38px",
            }}
          >
            choose network and To receive 120 Perfect Money, please deposit 100
            Tether to the Tether address below:
          </Typography>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "start",
            }}
          >
            <FormControl
              sx={{
                width: "126px",
                borderRadius: "10px 0 0 10px",
                border: "none",
                color: "white",
                bgcolor: "#1d8d94",
                "& .MuiOutlinedInput-notchedOutline": {
                  border: "none",
                },
              }}
            >
              <Select
                labelId="dropdown-label"
                id="dropdown"
                value={selectedValue}
                label="Options"
                onChange={handleChange}
                sx={{
                  borderRadius: "10px 0 0 10px",
                  border: "none",
                  color: "white",
                  "& .MuiSelect-icon": {
                    color: "white",
                  },
                }}
              >
                <MenuItem value="TTH">TTH</MenuItem>
                <MenuItem value="BTC">BTC</MenuItem>
                <MenuItem value="HTC">HTC</MenuItem>
              </Select>
            </FormControl>
            <TextField
              sx={{
                width: "100%",
                "& .MuiOutlinedInput-root": {
                  borderRadius: "0 10px 10px 0",
                },
              }}
              placeholder="x09aa998ee454c456255daf3ac94908f1dcfb7033"
            />
          </Box>
        </Box>
        <Box
          component="img"
          src="/qrCode.png"
          sx={{
            width: "191px",
            height: "191px",
          }}
        />
      </Box>
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
    </>
  );
};

export default ConfirmFirstPage;
