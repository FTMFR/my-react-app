import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { z } from "zod";

type PasswordInput = {
  Newpassword: string;
  Repeatpassword: string;
};

const ChangePassword = () => {
  const navigate = useNavigate();
  const [isAuthenticationPasswords, setIsAuthenticationPasswords] =
    useState(false);

  const loginSchema = z
    .object({
      Newpassword: z.string().min(4, "Password must be at least 4 characters"),
      Repeatpassword: z.string(),
    })
    .superRefine((data, ctx) => {
      if (data.Newpassword !== data.Repeatpassword) {
        ctx.addIssue({
          path: ["Repeatpassword"],
          message: "Repeat password must match the new password",
          code: z.ZodIssueCode.custom,
        });
      }
    });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PasswordInput>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit: SubmitHandler<PasswordInput> = (data) => {
    if (data) {
      setIsAuthenticationPasswords(true);
    }
  };

  useEffect(() => {
    if (isAuthenticationPasswords) {
      navigate("/");
    } else {
      navigate("/change-password");
    }
  }, [isAuthenticationPasswords, navigate]);

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
            fontWeight: "bold",
            color: "transparent",
            WebkitBackgroundClip: "text",
            backgroundImage: "linear-gradient(to right, #1D8D94, #91D2A3)",
          }}
        >
          Change password
        </Typography>

        <Box
          sx={{
            display: "flex",
            alignItems: "start",
            justifyContent: "center",
            flexDirection: "column",
            width: "100%",
            mt: {
              lg: "55px",
              md: "40px",
              sm: "30px",
              xs: "20px",
            },
          }}
        >
          <Typography
            component="label"
            htmlFor="Newpassword"
            sx={{
              color: "#ababab",
              fontWeight: "bold",
              mb: "15px",
              fontSize: {
                lg: "16px",
                md: "14px",
                sm: "12px",
                xs: "10px",
              },
            }}
          >
            new password :
          </Typography>
          <TextField
            autoComplete="current-password"
            {...register("Newpassword")}
            error={!!errors.Newpassword}
            helperText={errors.Newpassword?.message}
            id="Newpassword"
            placeholder="Please Enter Your Password"
            sx={{
              color: "white",
              backgroundColor: "#242c39",
              borderRadius: "10px",
              fontWeight: "bold",
              width: "100%",
              border: "none",
              mb: "15px",
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
                  color: "white",
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
            htmlFor="Repeatpassword"
            sx={{
              color: "#ababab",
              fontWeight: "bold",
              mb: "15px",
              fontSize: {
                lg: "16px",
                md: "14px",
                sm: "12px",
                xs: "10px",
              },
            }}
          >
            Repeat new password :
          </Typography>
          <TextField
            autoComplete="current-password"
            id="Repeatpassword"
            {...register("Repeatpassword")}
            error={!!errors.Repeatpassword}
            helperText={errors.Repeatpassword?.message}
            placeholder="Please Repeat Your Password"
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
              mt: "36px",
            }}
          >
            Confirm
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default ChangePassword;
