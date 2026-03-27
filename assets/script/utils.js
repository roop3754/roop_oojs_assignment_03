'use strict';

export function select(id) {
  return document.getElementById(id);
}

export function listen(element, event, callback) {
  element.addEventListener(event, callback);
}