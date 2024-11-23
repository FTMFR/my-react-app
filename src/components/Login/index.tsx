import { Box, Container, Link, Typography } from "@mui/material";
import FormLogin from "./FormLogin";

const Login = () => {
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
        Login
      </Typography>

      <FormLogin />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "5px",
          fontWeight: "bold",
        }}
      >
        <Typography
          component="p"
          sx={{
            color: "#ABABAB",
            fontWeight: "bold",
          }}
        >
          Dont Have An Account?{" "}
        </Typography>
        <Link
          href="/register"
          sx={{
            fontWeight: "bold",
            color: "#1D8D94",
            textDecoration:'none'
          }}
        >
          Register
        </Link>
      </Box>
    </Container>
  );
};

export default Login;
