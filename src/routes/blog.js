const express = require("express");
const { body } = require("express-validator");

const router = express.Router();

const blogController = require("../controllers/blog");

// [POST] : /v1/blog/post
router.post(
  "/post",
  [
    body("title")
      .isLength({ min: 5 })
      .withMessage("character must more than 5 title"),
    body("body")
      .isLength({ min: 5 })
      .withMessage("character must more than 5 body"),
  ],
  blogController.createBlogPost
);

// [GET] : /v1/blog/posts
router.get("/posts", blogController.getAllBlogPost);
router.get("/post/:postId", blogController.getPostById);
router.put("/post/:postId", blogController.updateBlogPost);
router.delete("/post/:postId", blogController.deleteBlogPost);

module.exports = router;
