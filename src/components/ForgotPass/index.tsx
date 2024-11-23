import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { z } from "zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

type ForgotPassInput = {
  email: string;
};

const ForgotPass = () => {
  const [emailForgotPass, setEmailForgotPass] = useState("");
  const [isAuthenticatorForgotPass, setIsAuthenticatorForgotPass] =
    useState(false);
  const navigate = useNavigate();
  const loginSchema = z.object({
    email: z.string().email("The Email Entered Is Invalid"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPassInput>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit: SubmitHandler<ForgotPassInput> = (data) => {
    setEmailForgotPass(data.email);
    if (emailForgotPass.length !== 0) {
      localStorage.setItem("user", JSON.stringify(emailForgotPass));
      setIsAuthenticatorForgotPass(true);
    }
  };

  useEffect(() => {
    if (isAuthenticatorForgotPass) {
      navigate("/change-password");
    } else {
      navigate("/forgot-password");
    }
  }, [isAuthenticatorForgotPass, navigate]);


  return (
    <Container
      maxWidth="xl"
      sx={{
        width: { lg: "560px", md: "560px", sm: "80%", xs: "90%" },
        height: {
          lg: "auto",
          md: "auto",
          sm: "70vh",
          xs: "70vh",
        },
        mx: "auto",
        backgroundColor: "#2A3342",
        borderRadius: "30px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        mt: "30px",
        py: {
          lg: "32px",
          md: "30px",
          sm: "26px",
          xs: "20px",
        },
        px: {
          lg: "37px",
          md: "30px",
          sm: "26px",
          xs: "20px",
        },
      }}
    >
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Typography
          component="h1"
          sx={{
            fontSize: {
              lg: "36px",
              md: "30px",
              sm: "26px",
              xs: "20px",
            },
            mb: {
              lg: "55px",
              md: "40px",
              sm: "30px",
              xs: "20px",
            },

            fontWeight: "bold",
            color: "transparent",
            WebkitBackgroundClip: "text",
            backgroundImage: "linear-gradient(to right, #1D8D94, #91D2A3)",
          }}
        >
          Forget Password
        </Typography>

        <Box
          sx={{
            display: "flex",
            alignItems: "start",
            justifyContent: "center",
            flexDirection: "column",
            width: "100%",
            gap: "15px",
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
              width: "100%",
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
            Confirm
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default ForgotPass;
