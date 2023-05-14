import mongoose from "mongoose";

const connectDatabase = (url) => {
  mongoose
    .connect(url)
    .then(() => console.log("Connect to database"))
    .catch((err) => console.log(err));
};

export default connectDatabase;
