import { Box } from "@mui/material";

const LogoSvg = () => {
  return (
    <Box
      component="img"
      src="/logo.svg"
      alt="Logo"
      sx={{
        width: { xs: '100px', sm: '150px', md: '200px', lg: '232px' },
        height: "auto",
      }}
    />
  );
};

export default LogoSvg;
