import {
  Autocomplete,
  Box,
  Button,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import axios from "axios";
import { toast } from "react-hot-toast";
import { Country, State, City } from "country-state-city";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const Register = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    fname: "",
    lname: "",
    email: "",
    country: "",
    city: "",
    state: "",
    phone: "",
    occupation: "",
    password: "",
    confirmpassword: "",
    image: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState("");
  const [countryISO, setcountryISO] = useState("");
  const [stateISO, setstateISO] = useState("");
  const contries = Country.getAllCountries();
  const regEx = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const {
      fname,
      lname,
      email,
      country,
      city,
      state,
      phone,
      occupation,
      password,
      confirmpassword,
      image,
    } = userData;

    if (
      fname &&
      lname &&
      email &&
      country &&
      city &&
      state &&
      phone &&
      occupation &&
      password &&
      confirmpassword
    ) {
      if (password === confirmpassword) {
        if (password.match(regEx) && confirmpassword.match(regEx)) {
          const fetchData = await axios.post(
            `${import.meta.env.VITE_SERVER_BASE_URL}/api/v1/register`,
            {
              fname,
              lname,
              email,
              country,
              city,
              state,
              phone,
              occupation,
              password,
              confirmpassword,
              image,
            }
          );
          const resData = await fetchData.data;
          if (resData.alert) {
            toast(resData.message);
            setTimeout(() => {
              navigate("/login");
            }, 1500);
          } else {
            setError(resData.message);
          }
        } else {
          setError(
            "Password should contain at least 8 characters, one upper case letter, one lower case letter,one number, and one special character"
          );
        }
      } else {
        setError("Password and confirm password should equal");
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
          width: "650px",
          maxWidth: "650px",
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
            Create account
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
              display: "grid",
              gridTemplateRows: "5",
              gridTemplateColumns: "2",
              gridTemplateAreas: `
            'a b'
            'c d'
            'e f'
            'g h'
            'i j'
             'k k'
           `,
              gap: "24px 24px",
              "& .MuiTextField-root": {},
            }}
          >
            <TextField
              variant="standard"
              type="text"
              label="First name"
              name="fname"
              value={userData.fname}
              onChange={(e) => {
                setUserData((pre) => {
                  return {
                    ...pre,
                    fname: e.target.value,
                  };
                });
              }}
              sx={{
                gridArea: "a",
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
            <TextField
              variant="standard"
              type="text"
              label="Last name"
              name="lname"
              value={userData.lname}
              onChange={(e) => {
                setUserData((pre) => {
                  return {
                    ...pre,
                    lname: e.target.value,
                  };
                });
              }}
              sx={{
                gridArea: "b",
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
                gridArea: "c",
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
            <Autocomplete
              disablePortal
              options={contries}
              inputValue={userData.country}
              onChange={(e, value) => {
                setUserData({ ...userData, country: value.name });
                setcountryISO(value.isoCode);
              }}
              getOptionLabel={(option) => option.name}
              onInputChange={(event, newInputValue, reason) => {
                if (reason === "reset") {
                  setUserData({ ...userData, country: "" });
                  return;
                } else {
                  setUserData({ ...userData, country: newInputValue });
                }
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  variant="standard"
                  label="Country"
                  name="country"
                  onChange={(e) => {
                    setUserData({ ...userData, country: e.target.value });
                  }}
                />
              )}
              sx={{
                gridArea: "d",
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
                "& .MuiIconButton-root": {
                  color: "#fafafa",
                },
              }}
            />
            <Autocomplete
              disablePortal
              options={State.getStatesOfCountry(countryISO)}
              inputValue={userData.state}
              onChange={(e, value) => {
                setUserData({ ...userData, state: value.name });
                setstateISO(value.isoCode);
              }}
              onInputChange={(event, newInputValue, reason) => {
                if (reason === "reset") {
                  setUserData({ ...userData, state: "" });
                  return;
                } else {
                  setUserData({ ...userData, state: newInputValue });
                }
              }}
              getOptionLabel={(option) => option.name}
              renderInput={(params) => (
                <TextField
                  {...params}
                  variant="standard"
                  label="State"
                  name="state"
                  onChange={(e) => {
                    setUserData({ ...userData, state: e.target.value });
                  }}
                />
              )}
              sx={{
                gridArea: "e",
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
                "& .MuiIconButton-root": {
                  color: "#fafafa",
                },
              }}
            />
            <Autocomplete
              disablePortal
              options={City.getCitiesOfState(countryISO, stateISO)}
              inputValue={userData.city}
              onChange={(e, { name }) =>
                setUserData({ ...userData, city: name })
              }
              onInputChange={(event, newInputValue, reason) => {
                if (reason === "reset") {
                  setUserData({ ...userData, city: "" });
                  return;
                } else {
                  setUserData({ ...userData, city: newInputValue });
                }
              }}
              getOptionLabel={(option) => option.name}
              renderInput={(params) => (
                <TextField
                  {...params}
                  variant="standard"
                  label="City"
                  name="city"
                  onChange={(e) => {
                    setUserData({ ...userData, city: e.target.value });
                  }}
                />
              )}
              sx={{
                gridArea: "f",
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
                "& .MuiIconButton-root": {
                  color: "#fafafa",
                },
              }}
            />

            <Box sx={{ gridArea: "g" }}>
              <PhoneInput
                country={"us"}
                value={userData.phone}
                onChange={(phone) => setUserData({ ...userData, phone: phone })}
                inputProps={{
                  name: "phone",
                }}
                enableSearch={true}
                containerStyle={{
                  width: "100%",
                  height: "100%",
                  borderBottom: "1px solid #fafafa",
                }}
                inputStyle={{
                  width: "100%",
                  height: "100%",
                  color: "#fafafa",
                  backgroundColor: "transparent",
                  borderColor: "transparent",
                }}
                buttonStyle={{
                  backgroundColor: "transparent",
                  borderColor: "transparent",
                }}
              />
            </Box>
            <TextField
              variant="standard"
              type="text"
              label="Occupation"
              name="occupation"
              value={userData.occupation}
              onChange={(e) => {
                setUserData((pre) => {
                  return {
                    ...pre,
                    occupation: e.target.value,
                  };
                });
              }}
              sx={{
                gridArea: "h",
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
                  gridArea: "i",
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
            <Box
              sx={{
                position: "relative",
              }}
            >
              <TextField
                variant="standard"
                type={showConfirmPassword ? "text" : "password"}
                label="Confirm password"
                name="confirmpassword"
                value={userData.confirmpassword}
                onChange={(e) => {
                  setUserData((pre) => {
                    return {
                      ...pre,
                      confirmpassword: e.target.value,
                    };
                  });
                }}
                sx={{
                  gridArea: "j",
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
                onClick={() => setShowConfirmPassword((preve) => !preve)}
                sx={{
                  position: "absolute",
                  top: 10,
                  right: 4,
                  color: "#fafafa",
                }}
              >
                {showConfirmPassword ? <AiFillEye /> : <AiFillEyeInvisible />}
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
              Create account
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
            Already have an account?{" "}
            <Box
              component="span"
              onClick={() => navigate("/login")}
              sx={{
                cursor: "pointer",
                fontWeight: "400",
                color: "#fafafa",
                ":hover": {
                  color: "#eeeeee",
                },
              }}
            >
              Log in
            </Box>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Register;
