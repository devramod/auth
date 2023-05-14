import { Box, TextField, Typography, Button, IconButton } from "@mui/material";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import axios from "axios";
import { useDispatch } from "react-redux";
import { login } from "../states/user";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = userData;

    if (email && password) {
      const fetchData = await axios.post(
        `${import.meta.env.VITE_SERVER_BASE_URL}/api/v1/login`,
        {
          email,
          password,
        }
      );
      const resData = await fetchData.data;

      if (resData.alert) {
        toast(resData.message);
        dispatch(login(resData.data))
        setTimeout(() => {
          navigate("/user");
        }, 1500);
      } else {
        setError(resData.message);
      }
    } else {
      setError("Please Enter required fields");
    }
  };
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
          py: 3,
          boxShadow: 2,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: 3,
            width: "100%",
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
            Log in
          </Typography>
          {error ? (
            <Typography
              sx={{
                color: "#f44336",
                fontWeight: "400",
                fontSize: "14px",
                textAlign: "center",
              }}
            >
              {error}
            </Typography>
          ) : (
            ""
          )}
          <Box
            component="form"
            width="100%"
            onSubmit={(e) => handleSubmit(e)}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: 3,
              width: "100%",
            }}
          >
            <TextField
              variant="standard"
              type="email"
              label="Email address"
              name="email"
              value={userData.email}
              onChange={(e) => {
                setUserData((pre) => {
                  return {
                    ...pre,
                    email: e.target.value,
                  };
                });
              }}
              sx={{
                "& .MuiInputLabel-root": {
                  color: "#fafafa",
                },
                "& .MuiFormLabel-root.Mui-focused": {
                  color: "#fafafa",
                },
                "& .MuiInput-root": {
                  color: "#fafafa",
                  "&:before": {
                    borderBottomColor: "#fafafa",
                  },
                  "&:after": {
                    borderBottomColor: "#fafafa",
                  },
                },
              }}
            />
            <Box
              sx={{
                position: "relative",
              }}
            >
              <TextField
                variant="standard"
                type={showPassword ? "text" : "password"}
                label="Password"
                name="password"
                value={userData.password}
                onChange={(e) => {
                  setUserData((pre) => {
                    return {
                      ...pre,
                      password: e.target.value,
                    };
                  });
                }}
                sx={{
                  width: "100%",
                  "& .MuiInputLabel-root": {
                    color: "#fafafa",
                  },
                  "& .MuiFormLabel-root.Mui-focused": {
                    color: "#fafafa",
                  },
                  "& .MuiInput-root": {
                    color: "#fafafa",
                    "&:before": {
                      borderBottomColor: "#fafafa",
                    },
                    "&:after": {
                      borderBottomColor: "#fafafa",
                    },
                  },
                }}
              />
              <IconButton
                onClick={() => setShowPassword((preve) => !preve)}
                sx={{
                  position: "absolute",
                  top: 10,
                  right: 4,
                  color: "#fafafa",
                }}
              >
                {showPassword ? <AiFillEye /> : <AiFillEyeInvisible />}
              </IconButton>
            </Box>
            <Button
              type="submit"
              variant="contained"
              sx={{
                gridArea: "k",
                py: 1.5,
                color: "#000",
                fontWeight: 600,
                fontSize: "14px",
                textTransform: "capitalize",
                backgroundColor: "#f5f5f5",
                ":hover": {
                  backgroundColor: "#eeeeee",
                },
              }}
            >
              Log in
            </Button>
          </Box>
          <Typography
            sx={{
              color: "#fff",
              fontWeight: "400",
              fontSize: "14px",
              textAlign: "center",
            }}
          >
            Don't have an account?{" "}
            <Box
              component="span"
              onClick={() => navigate("/register")}
              sx={{
                cursor: "pointer",
                fontWeight: "400",
                color: "#fafafa",
                ":hover": {
                  color: "#eeeeee",
                },
              }}
            >
              Register
            </Box>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
