import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    fname: {
      type: String,
      required: true,
    },
    lname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    country: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    occupation: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      minlength: 8,
      required: true,
    },
    confirmpassword: {
      type: String,
      minlength: 8,
      required: true,
    },
    image: {
      type: String,
    },
  },
  { timestamps: true }
);

const userSchemaModel = mongoose.model("User", userSchema);

export default userSchemaModel;
