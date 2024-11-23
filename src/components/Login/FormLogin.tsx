import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  IconButton,
  InputAdornment,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import { useForm, SubmitHandler } from "react-hook-form";
import { VisibilityOffOutlined, VisibilityOutlined } from "@mui/icons-material";
import { useEffect, useState } from "react";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

type LoginInputs = {
  email: string;
  password: string;
};

const FormLogin = () => {
  const [loginDatas, setLoginDatas] = useState<LoginInputs>();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState<boolean>(false);

  console.log(loginDatas);

  const loginSchema = z.object({
    email: z.string().email("The Email Is Incorrect"),
    password: z.string().min(4, "The Password Is Incorrect"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInputs>({
    resolver: zodResolver(loginSchema),
  });

  useEffect(() => {
    const storedUser = Cookies.get("user");
    if (storedUser) {
      setIsAuthenticated(true);
      navigate("/");
    } else {
      navigate("/login");
    }
  }, [isAuthenticated, navigate]);

  const onSubmit: SubmitHandler<LoginInputs> = (data) => {
    setLoginDatas(data);
    if (data) {
      if (rememberMe) {
        Cookies.set("user", JSON.stringify(data.email), { expires: 30 });
      } else {
        Cookies.remove("user");
      }
      setIsAuthenticated(true);
      navigate("/");
    }
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

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
        variant="body1"
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

      {/* Options */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mt: "22px",
          mb: "46px",
        }}
      >
        <FormControlLabel
          control={
            <Checkbox
              sx={{ color: "#ababab" }}
              checked={rememberMe}
              onChange={() => setRememberMe((prev) => !prev)}
            />
          }
          label={
            <Typography
              sx={{
                color: "#ababab",
                fontWeight: "bold",
                fontSize: {
                  lg: "16px",
                  md: "14px",
                  sm: "12px",
                  sx: "10px",
                },
              }}
            >
              Keep Me Login
            </Typography>
          }
        />
        <Link
          href="/forgot-password"
          sx={{
            color: "#1d8d94",
            textDecoration: "none",
            fontWeight: "bold",
            fontSize: {
              lg: "16px",
              md: "14px",
              sm: "12px",
              xs: "10px",
            },
          }}
        >
          Forgot Your Password?
        </Link>
      </Box>

      {/* Submit Button */}
      <Button
        type="submit"
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
          mb: "27px",
        }}
      >
        Login
      </Button>
    </Box>
  );
};

export default FormLogin;
