import {
  Box,
  Button,
  FormControl,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";

const PMToTether = () => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: "16px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "start",
          justifyContent: "center",
          flexDirection: "column",
          gap: "12px",
        }}
      >
        <Typography
          sx={{
            color: "#ababab",
            fontSize: "16px",
            fontWeight: "bold",
          }}
        >
          Perfect Money Code :
        </Typography>
        <TextField
          sx={{
            width: "100%",
            bgcolor: "#242c39",
            fontWeight: "bold",
            borderRadius: "10px",
            input: {
              color: "white",
              "&::placeholder": {
                color: "white",
                opacity: 1,
                fontWeight: "bold",
                fontSize: {
                  lg: "16px",
                  md: "14px",
                  sm: "14px",
                  xs: "10px",
                },
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
          placeholder="Please Enter Perfect Money Code"
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "start",
          justifyContent: "center",
          flexDirection: "column",
          gap: "12px",
        }}
      >
        <Typography
          sx={{
            color: "#ababab",
            fontSize: "16px",
            fontWeight: "bold",
          }}
        >
          Perfect Money Number :
        </Typography>
        <TextField
          sx={{
            width: "100%",
            // height:'57px',
            bgcolor: "#242c39",

            fontWeight: "bold",
            borderRadius: "10px",
            input: {
              color: "white",
              "&::placeholder": {
                color: "white",
                opacity: 1,
                fontWeight: "bold",
                fontSize: {
                  lg: "16px",
                  md: "14px",
                  sm: "12px",
                  xs: "10px",
                },
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
          placeholder="Please Enter Perfect Money Number"
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "start",
          justifyContent: "center",
          flexDirection: "column",
          gap: "12px",
        }}
      >
        <Typography
          sx={{
            color: "#ababab",
            fontSize: "16px",
            fontWeight: "bold",
          }}
        >
          Choose Network And Enter Tether Address :
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
              label="Options"
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
              bgcolor: "#242c39",
              fontWeight: "bold",
              borderRadius: "0 10px 10px 0",
              input: {
                color: "white",
                "&::placeholder": {
                  color: "white",
                  opacity: 1,
                  fontSize: {
                    lg: "16px",
                    md: "14px",
                    sm: "12px",
                    xs: "10px",
                  },
                  fontWeight: "bold",
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
            placeholder="Please Enter Address"
          />
        </Box>
      </Box>
      <Button
        type="submit"
        sx={{
          bgcolor: "#1d8d94",
          height: "60px",
          color: "white",
          fontSize: "16px",
          fontWeight: "bold",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mx: "auto",
          width: {
            lg: "620px",
            md: "100%",
            sm: "100%",
            xs: "80%",
          },
          boxShadow: " 0 0 20px 0 rgba(29, 141, 148, 0.5)",
          borderRadius: "10px",
          mt: "12px",
          mb: {
            lg: "164px",
            md: "164px",
            sm: "50px",
            xs: "20px",
          },
        }}
      >
        Submit
      </Button>
    </Box>
  );
};

export default PMToTether;
