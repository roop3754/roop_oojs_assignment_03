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
}