const Content = document.querySelectorAll(".the-weapon");
const Post = require("../../models/post");
const Forma = document.querySelector("#character-form");
let frames = 0;
const update = () => {
  frames++;
};

document.addEventListener(
  "DOMContentLoaded",
  () => {
    interval = setInterval(update, 1000 / 90);
  },
  false
);
Forma.onsubmit = async event => {
  const content = Content[0].value;
  event.preventDefault();
  const post = await Post.register({ content });
  try {
    const { data } = await axios.post(
      "mongodb+srv://Chuca:1234567812@angelhack-yzlaw.mongodb.net/test?retryWrites=true&w=majority",
      characterInfo
    );
    document.querySelector("#character-form").reset();
  } catch (err) {
    console.log(err);
  }
};
