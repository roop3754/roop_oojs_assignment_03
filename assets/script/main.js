'use strict';

import { Subscriber } from "./Subscriber.js";
import { select, listen } from "./utils.js";

   class Post {
    constructor(text, image) {
      this.text = text;
      this.image = image;
      this.date = new Date().toLocaleString();
    }

    render() {
      return `
        <div class="post">
          <div class="post-header">
            <img src="./assets/media/profile.jpg" class="profile-img">
            <span><b>Roopjeet Kaur</b> - ${this.date}</span>
          </div>
          <p>${this.text}</p>
          ${this.image ? `<img src="${this.image}">` : ""}
        </div>
      `;
    }
  }
  const postsContainer = select("posts");
  const profilePic = select("profilePic");
  const postBtn = select("postBtn");
  const close = select("close");

  const user = new Subscriber(
    1,
    "Roopjeet Kaur",
    "roop3754",
    "roopjeetkaur23@gmail.com",
    ["Tech Page"],
    ["JS Group"],
    true
  );
listen(profilePic, "click", () => {
    modal.classList.remove("hidden");
    userInfo.innerHTML = user.getInfo();
  });

  listen(close, "click", () => {
    modal.classList.add("hidden");
  });

  listen(postBtn, "click", () => {
    const text = textInput.value.trim();
    const file = imageInput.files[0];

    if (!text && !file) {
      alert("Cannot post empty!");
      return;
    }

    if (file) {
      const reader = new FileReader();
      reader.onload = function () {
        const post = new Post(text, reader.result);
        postsContainer.innerHTML = post.render() + postsContainer.innerHTML;

        textInput.value = "";
        imageInput.value = "";
      };
      reader.readAsDataURL(file);
    } else {
      const post = new Post(text, "");
      postsContainer.innerHTML = post.render() + postsContainer.innerHTML;

      textInput.value = "";
      imageInput.value = "";
    }
  });

