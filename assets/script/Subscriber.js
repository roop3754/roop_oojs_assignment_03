'use strict';

export class Subscriber {
  constructor(id, name, username, email, pages, groups, canMonetize) {
    this.id = id;
    this.name = name;
    this.username = username;
    this.email = email;
    this.pages = pages;
    this.groups = groups;
    this.canMonetize = canMonetize;
  }
  getInfo() {
    return `
      <p><b>Name:</b> ${this.name}</p>
      <p><b>Username:</b> ${this.username}</p>
      <p><b>Email:</b> ${this.email}</p>
      <p><b>Pages:</b> ${this.pages.join(", ")}</p>
      <p><b>Groups:</b> ${this.groups.join(", ")}</p>
      <p><b>Can Monetize:</b> ${this.canMonetize ? "Yes" : "No"}</p>
    `;
  }
}