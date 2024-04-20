import express from 'express';
import { createTweet,getTweet } from '../../controllers/tweet-controller.js';
import { toggleLike } from '../../controllers/like-controller.js';
import { createComment } from '../../controllers/comment-controller.js';
import {signup} from '../../controllers/user-controller.js';
const router=express.Router();

//User Routes
router.post('/user/signup',signup)

//Tweet Routes
router.post('/tweets',createTweet);
router.get('/tweets/:id',getTweet);

//Like Routes
router.post("/likes/toggle",toggleLike);

//Comment Routes
router.post("/comments",createComment);

export default router;