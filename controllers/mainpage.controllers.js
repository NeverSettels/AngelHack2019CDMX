const Post = require("../models/post");
exports.getProfile = (req, res, next) => {
  Post.find().then(post => {
    res.render("index", post);
  });
};
