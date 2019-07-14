const Post = require("../models/post");
exports.getMessage = (req, res, next) => {
  Post.find().then(posts => {
    posts.forEach((e, i) => {
      if (e.maxTime < new Date()) {
        const { id } = e.id;
        Post.findByIdAndDelete(id);
      }
    });
    console.log(posts);
    res.render("index", { posts });
  });
};
