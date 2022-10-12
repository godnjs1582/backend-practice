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

  static getUserInfo(id){
    const users =this.#users;
    const idx=users.id.indexOf(id)
    const usersKeys =Object.keys(users) //=>users의 key값으로 이루어진 배열을 만듦 [id,password,name]
    const userInfo =usersKeys.reduce((newUser,info)=>{
        newUser[info]=users[info][idx];
        return newUser
    },{})
    return userInfo
  }

  static save(userInfo){
    const users =this.#users;
    users.id.push(userInfo.id);
    users.name.push(userInfo.name);
    users.password.push(userInfo.password);
    return {success:true}
  }
}

module.exports = UserStorage;