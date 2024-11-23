import { Input } from "@mui/material";

const InputLabel = () => {
  return (
    <Input
      // variant="standard"
      id="email"
      placeholder="Please Enter Your Email"
      // {...register("email")}
      sx={{
        color: "white",
        backgroundColor: "#242c39",
        borderRadius: "10px",
        fontWeight: "bold",
        //   fontSize: "14px",
        padding: "20px 18px 19px",
        height: "57px",
        mb: 3,
        width: "100%",
        outline: "none",
        border: "none",
        fontSize: {
          lg: "16px",
          md: "14px",
          sm: "12px",
          xs: "12px",
        },
      }}
    />
  );
};

export default InputLabel;
