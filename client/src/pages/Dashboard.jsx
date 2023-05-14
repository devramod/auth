import { Box, Typography } from "@mui/material";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../states/user";

axios.defaults.withCredentials = true;
let firstRender = true;

const Dashboard = () => {
  const dispatch = useDispatch();
  const getData = useSelector((state) => state);

  const fname = getData.user.fname;

  const token = async () => {
    const response = await axios.get(
      `${import.meta.env.VITE_SERVER_BASE_URL}/api/v1/login/user`,
      {
        withCredentials: true,
      }
    );
    const resData = await response.data;
    return resData;
  };

  const refreshToken = async () => {
    const response = await axios.get(
      `${import.meta.env.VITE_SERVER_BASE_URL}/api/v1/login/refresh`,
      {
        withCredentials: true,
      }
    );
    const resData = await response.data;
    return resData;
  };

  useEffect(() => {
    if (firstRender) {
      firstRender = false;
      token().then((resData) => dispatch(login(resData.user)));
    }
    let interval = setInterval(() => {
      refreshToken().then((resData) => dispatch(login(resData.user)));
      console.log("token refresh");
    }, 1000 * 25);

    return () => clearInterval(interval);
  }, []);

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
            {fname.charAt(0).toUpperCase() + fname.slice(1).toLowerCase()}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
