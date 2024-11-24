import { Box, Button, Link } from "@mui/material";
import { useEffect, useState } from "react";

const LoginBtn = () => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState<string | null>(null);

  useEffect(() => {
    const userLoggedInInfo = localStorage.getItem("user");
    setIsUserLoggedIn(userLoggedInInfo ? JSON.parse(userLoggedInInfo) : null);
  }, []);

  return (
    <Box
      sx={{
        flexGrow: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        component="img"
        src="/profile.svg"
        alt="profile"
        sx={{ width: 24, height: 24, display: "flex" }}
      />
      <Button
        sx={{
          textDecoration: "none",
          alignSelf: "start",
          ml: {
            lg: "16px",
            md: "12px",
            sm: "10px",
            xs: "5px",
          },
          color: "#e4e4e4",
        }}
      >
        {!isUserLoggedIn ? (
          <Link
            sx={{
              textDecoration: "none",
              color: "#e4e4e4",
            }}
            href="/login"
          >
            Login / Register
          </Link>
        ) : (
          isUserLoggedIn
        )}
      </Button>
    </Box>
  );
};

export default LoginBtn;
