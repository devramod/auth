import express from "express";
import {
  loginUser,
  verifyJWT,
  getUser,
  refreshToken,
  logOut,
} from "../controllers/login.js";

const router = express.Router();

router.post("/", loginUser);
router.get("/user", verifyJWT, getUser);
router.get("/refresh", refreshToken, verifyJWT, getUser);
router.post("/logout", verifyJWT, logOut);

export default router;
