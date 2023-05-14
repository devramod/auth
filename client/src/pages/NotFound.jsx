import { Box, Typography } from "@mui/material"

const NotFound = () => {
  return (
    <Box
      width="100%"
      sx={{
        minHeight: "calc(100vh - 80px)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "transparent",
      }}
    >
      <Typography
        sx={{
          color: "#fafafa",
          fontWeight: "500",
          fontSize: "24px",
          textAlign: "center",
        }}
      >
        There's nothing here: 404!
      </Typography>
    </Box>
  )
}

export default NotFound