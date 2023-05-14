import { Box, Typography } from "@mui/material";

const Homepage = () => {
  return (
    <Box
      width="100%"
      height="100%"
      sx={{
        minHeight: "calc(100vh - 80px)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "transparent",
        p: 4,
      }}
    >
      <Box
        sx={{
          width: "450px",
          maxWidth: "450px",
          backgroundColor: "transparent",
          border: "1px solid rgba(255, 255, 255, .5)",
          borderRadius: "20px",
          backdropFilter: "blur(10px)",
          px: 4,
          py: 5,
          boxShadow: 2,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: 1,
            width: "100%",
          }}
        >
          <Typography
            sx={{
              color: "#9e9e9e",
              fontWeight: "500",
              fontSize: "32px",
              textAlign: "center",
            }}
          >
            Welcome!
          </Typography>
          <Typography
            sx={{
              color: "#fafafa",
              fontWeight: "500",
              fontSize: "20px",
              textAlign: "center",
            }}
          >
            Please login
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Homepage;
