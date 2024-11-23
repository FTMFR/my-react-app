import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { useForm, SubmitHandler } from "react-hook-form";
import { VisibilityOffOutlined, VisibilityOutlined } from "@mui/icons-material";
import { useEffect, useState } from "react";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";

type RegisterInputs = {
  email: string;
  password: string;
  name: string;
};

const FormRegister = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const [loginDatas, setLoginDatas] = useState<RegisterInputs>();
  const loginSchema = z.object({
    name: z.string().min(3, "Name must be at least 3 characters"),
    email: z.string().email("Invalid email format"),
    password: z.string().min(6, "Password must be at least 6 characters"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterInputs>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit: SubmitHandler<RegisterInputs> = (data) => {
    setLoginDatas(data);
    if (data) {
      localStorage.setItem("user", JSON.stringify(data.email));
      setIsAuthenticated(true);
    }
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    } else {
      navigate("/register");
    }
  }, [isAuthenticated, navigate]);

  useEffect(() => {
    if (loginDatas?.email) {
      console.log("Logged in as:", loginDatas.email);
    }
  }, [loginDatas]);

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <Typography
        component="label"
        htmlFor="name"
        sx={{
          color: "#ababab",
          fontWeight: "bold",
          mb: 1,
          fontSize: {
            lg: "16px",
            md: "14px",
            sm: "12px",
            xs: "10px",
          },
        }}
      >
        Name:
      </Typography>
      <TextField
        autoComplete="current-name"
        id="name"
        placeholder="Please Enter Your Name"
        {...register("name")}
        error={!!errors.name}
        helperText={errors.name?.message}
        sx={{
          color: "white",
          backgroundColor: "#242c39",
          borderRadius: "10px",
          fontWeight: "bold",
          mb: 3,
          border: "none",
          fontSize: {
            lg: "16px",
            md: "14px",
            sm: "12px",
            xs: "10px",
          },
          input: {
            color: "white",
            fontWeight: "bold",
          },
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "none",
              borderRadius: "10px",
            },
            "&:hover fieldset": {
              borderColor: "#1D8D94",
              borderRadius: "10px",
            },
          },
        }}
      />
      <Typography
        component="label"
        variant="body1"
        htmlFor="email"
        sx={{
          color: "#ababab",
          fontWeight: "bold",
          mb: 1,
          fontSize: {
            lg: "16px",
            md: "14px",
            sm: "12px",
            xs: "10px",
          },
        }}
      >
        Email:
      </Typography>
      <TextField
        autoComplete="current-email"
        id="email"
        placeholder="Please Enter Your Email"
        {...register("email")}
        error={!!errors.email}
        helperText={errors.email?.message}
        sx={{
          color: "white",
          backgroundColor: "#242c39",
          borderRadius: "10px",
          fontWeight: "bold",
          //   fontSize: "14px",
          mb: 3,
          border: "none",
          fontSize: {
            lg: "16px",
            md: "14px",
            sm: "12px",
            xs: "10px",
          },
          input: {
            color: "white",
            fontWeight: "bold",
          },
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "none",
              borderRadius: "10px",
            },
            "&:hover fieldset": {
              borderColor: "#1D8D94",
              borderRadius: "10px",
            },
          },
        }}
      />

      {/* Password Field */}
      <Typography
        component="label"
        htmlFor="password"
        sx={{
          color: "#ababab",
          fontWeight: "bold",
          mb: 1,
          fontSize: {
            lg: "16px",
            md: "14px",
            sm: "12px",
            xs: "10px",
          },
        }}
      >
        Password:
      </Typography>

      <TextField
        autoComplete="current-password"
        type={showPassword ? "text" : "password"}
        placeholder="Enter your password"
        variant="outlined"
        {...register("password")}
        error={!!errors.password}
        helperText={errors.password?.message}
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
          backgroundColor: "#242c39",
          color: "white",
          borderRadius: "10px",
          fontSize: {
            lg: "16px",
            md: "14px",
            sm: "12px",
            xs: "10px",
          },
          input: {
            color: "white",
            fontWeight: "bold",
          },
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "none",
              borderRadius: "10px",
            },
            "&:hover fieldset": {
              borderColor: "#1D8D94",
              borderRadius: "10px",
            },
          },
        }}
      />

      {/* Submit Button */}
      <Button
        type="submit"
        // href="/register"
        fullWidth
        sx={{
          backgroundColor: "#1d8d94",
          boxShadow: "0 0 20px 0 rgba(29, 141, 148, 0.5)",
          borderRadius: "10px",
          padding: "12px",
          color: "white",
          fontSize: {
            lg: "16px",
            md: "14px",
            sm: "12px",
            xs: "10px",
          },
          fontWeight: "bold",
          my: "27px",
        }}
      >
        Register
      </Button>
    </Box>
  );
};

export default FormRegister;
