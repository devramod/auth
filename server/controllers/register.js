import userSchemaModel from "../database/models/user.js";
import bcrypt from "bcryptjs";

export const registerUser = async (req, res) => {
  try {
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
      image,
    } = req.body;
    userSchemaModel
      .findOne({ email: email })
      .then((result) => {
        if (result) {
          res
            .status(201)
            .json({ message: "Email already registered", alert: false });
        } else {
          const hashedPassword = bcrypt.hashSync(password);
          const newUser = new userSchemaModel({
            fname,
            lname,
            email,
            country,
            city,
            state,
            phone,
            occupation,
            password: hashedPassword,
            confirmpassword: hashedPassword,
            image,
          });
          const saveUser = newUser.save();
          res.status(201).json({
            message: "Suceessfully registered",
            alert: true,
          });
        }
      })
      .catch((err) => console.log("Error:", err));
  } catch (err) {
    res.status(500);
    console.log("Error:", err.message);
  }
};
