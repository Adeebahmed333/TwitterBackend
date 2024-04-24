import express from "express";
import { createTweet, getTweet } from "../../controllers/tweet-controller.js";
import { toggleLike } from "../../controllers/like-controller.js";
import { createComment } from "../../controllers/comment-controller.js";
import { signup, login } from "../../controllers/user-controller.js";
import { authenticate } from "../../middlewares/authenticate.js";

const router = express.Router();
//User Routes
router.post("/user/signup", signup);
router.post("/user/login", login);

//Tweet Routes
router.post("/tweets", authenticate, createTweet);
router.get("/tweets/:id", getTweet);

//Like Routes
router.post("/likes/toggle", toggleLike);

//Comment Routes
router.post("/comments", authenticate, createComment);

export default router;
