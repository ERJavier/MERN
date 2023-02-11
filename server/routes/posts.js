import express  from "express";
import { getFeedPosts, getUserPosts, likePosts } from "../controllers/post.js"
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

//READ 

router.get("/", verifyToken, getFeedPosts);
router.get("/:userID/posts", verifyToken, getUserPosts);


//UPDATE

router.patch("/:id/like", verifyToken, likePosts);

export default router;