import * as dotenv from "dotenv";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import userSchemaModel from "../database/models/user.js";

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    userSchemaModel.findOne({ email: email }).then((result) => {
      if (result) {
        const isPasswordCorrect = bcrypt.compareSync(password, result.password);
        if (isPasswordCorrect) {
          const token = jwt.sign({ id: result._id }, process.env.SECRET_KEY, {
            expiresIn: "30s",
          });
          console.log("generate token\n", token);
          if (req.cookies[`${result._id}`]) {
            req.cookies[`${result._id}`] = "";
          }
          res.cookie(String(result._id), token, {
            path: "/",
            expires: new Date(Date.now() + 1000 * 30),
            httpOnly: true,
            sameSite: "lax",
          });
          const userData = {
            fname: result.fname,
            lname: result.lname,
            email: result.email,
            country: result.country,
            city: result.city,
            state: result.state,
            phone: result.phone,
            occupation: result.occupation,
            image: result.image,
          };
          res.status(200).json({
            message: "Successfully logged in",
            alert: true,
            data: userData,
            token,
          });
        } else {
          res.json({ message: "Invalid password", alert: false });
        }
      } else {
        res.json({ message: "Invalid email", alert: false });
      }
    });
  } catch (error) {
    res.status(500);
    console.log("Error:", error.message);
  }
};

export const verifyJWT = async (req, res, next) => {
  try {
    const cookies = req.headers.cookie;
    const token = cookies.split("=")[1];
    if (token) {
      jwt.verify(String(token), process.env.SECRET_KEY, (err, user) => {
        if (err) {
          res.status(400).json({ message: "Invalid token" });
        } else {
          req.id = user.id;
        }
      });
    } else {
      res.status(404).json({ message: "No token found" });
    }
    next();
  } catch (error) {
    res.status(500);
    console.log("Error:", error.message);
  }
};

export const getUser = async (req, res) => {
  try {
    const userId = req.id;
    const user = await userSchemaModel.findById(
      userId,
      "-password -confirmpassword"
    );
    if (user) {
      res.status(200).json({ user });
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    res.status(500);
    console.log("Error:", error.message);
  }
};

export const refreshToken = async (req, res, next) => {
  try {
    const cookies = req.headers.cookie;
    const previousToken = cookies.split("=")[1];
    console.log(previousToken);
    if (previousToken) {
      jwt.verify(String(previousToken), process.env.SECRET_KEY, (err, user) => {
        if (err) {
          console.log(err);
          res.status(403).json({ message: "Authentification failed" });
        } else {
          console.log(user);
          res.clearCookie(`${user.id}`);
          req.cookies[`${user.id}`] = "";

          const token = jwt.sign({ id: user.id }, process.env.SECRET_KEY, {
            expiresIn: "30s",
          });
          console.log("refresh token\n", token);
          res.cookie(String(user.id), token, {
            path: "/",
            expires: new Date(Date.now() + 1000 * 30),
            httpOnly: true,
            sameSite: "lax",
          });

          req.id = user.id;
          next();
        }
      });
    } else {
      res.status(400).json({ message: "No token found" });
    }
  } catch (error) {
    res.status(500);
    console.log("Error:", error.message);
  }
};

export const logOut = async (req, res) => {
  try {
    const cookies = req.headers.cookie;
    const previousToken = cookies.split("=")[1];
    if (previousToken) {
      jwt.verify(String(previousToken), process.env.SECRET_KEY, (err, user) => {
        if (err) {
          res.status(403).json({ message: "Authentification failed" });
        } else {
          res.clearCookie(`${user.id}`);
          req.cookies[`${user.id}`] = "";
          return res.json({ message: "Successfully logged out", alert: true });
        }
      });
    } else {
      res.status(400).json({ message: "No token found" });
    }
  } catch (error) {
    res.status(500);
    console.log("Error:", error.message);
  }
};
