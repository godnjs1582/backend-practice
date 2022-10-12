"use strict";

class UserStorage {
  static #users = {
    id: ["가나다", "라마바", "사아자"],
    password: ["1234", "5678", "1212"],
    name: ["권해원", "권핑키", "권기범"],
  };
  static getUsers(...params) {
    const users = this.#users;
    const newUsers = params.reduce((newUsers, params) => {
      if (users.hasOwnProperty(params)) {
        newUsers[params] = users[params];
      }
      return newUsers;
    }, {});
    return newUsers;
  }
}

module.exports = UserStorage;