const express = require("express");
const router = express.Router();
const {
  userLogin,
  alluserGet,
  userUpdate,
  homeGet,
  ChannelGet,
  createUser,
  userCreate,
} = require("./controller.js");

router.get("/api/user", alluserGet);
router.post("/api/user/signup", userCreate);
router.route("/api/user/:id").post(userLogin).patch(userUpdate);
router.get("/", homeGet);
router.route("/api/v1/channels").get(ChannelGet).post(createUser);

module.exports = router;
