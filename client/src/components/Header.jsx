import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-hot-toast";
import { logout } from "../states/user";

axios.defaults.withCredentials = true;

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const getData = useSelector((state) => state);

  const isLoggedIn = getData.isLoggedIn;

  const handleLogout = async () => {
    const response = await axios.post(
      `${import.meta.env.VITE_SERVER_BASE_URL}/api/v1/login/logout`,
      {
        withCredentials: true,
      }
    );
    const resData = await response.data;
    console.log(resData);
    if (resData.alert) {
      toast(resData.message);
      dispatch(logout());
      navigate("/");
    } else {
      toast("Unable to log out");
    }
  };
  return (
    <AppBar
      position="static"
      sx={{
        px: 4,
        py: 1,
        backgroundColor: "transparent",
        boxShadow: "none",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography
          onClick={() => navigate("/")}
          variant="h5"
          sx={{
            fontWeight: "600",
            textTransform: "capitalize",
            cursor: "pointer",
          }}
        >
          Auth
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 2,
          }}
        >
          {isLoggedIn ? (
            <Button
              onClick={handleLogout}
              variant="outlined"
              size="medium"
              sx={{
                color: "#fff",
                fontWeight: "600",

                borderColor: "#fff",
                ":hover": {
                  borderColor: "#fff",
                  color: "#162938",
                  backgroundColor: "#fff",
                },
              }}
            >
              Logout
            </Button>
          ) : (
            <>
              <Button
                onClick={() => navigate("/login")}
                variant="text"
                size="medium"
                sx={{
                  color: "#fff",
                  fontWeight: "600",
                }}
              >
                Login
              </Button>
              <Button
                onClick={() => navigate("/register")}
                variant="outlined"
                size="medium"
                sx={{
                  color: "#fff",
                  fontWeight: "600",

                  borderColor: "#fff",
                  ":hover": {
                    borderColor: "#fff",
                    color: "#162938",
                    backgroundColor: "#fff",
                  },
                }}
              >
                Register
              </Button>
            </>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
