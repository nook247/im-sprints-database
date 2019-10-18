// 여기 줄부터 주석
// var Sequelize = require("sequelize");
// const sequelize = new Sequelize(
//   "chat", // 데이터베이스 이름
//   "root", // 유저 명
//   "1234", // 비밀번호
//   {
//     host: "localhost", // 데이터베이스 호스트
//     dialect: "mysql" // 사용할 데이터베이스 종류
//   }
// );

// const Messages = sequelize.define('Messages', {
//   username : Sequelize.STRING,
//   message : Sequelize.STRING,
//   roomname : Sequelize.STRING
// }, {
//   timestamps: false
// });

// const Users = sequelize.define("Users", {
//   username: Sequelize.STRING
// }, {
//     timestamps: false
// });

// module.exports = {
//   messages: {
//     get: function() {
//       return new Promise((resolve, reject) => {
//         Messages.findAll()
//           .then(results => {
//             console.log("이것은 msg get의 results여 ", results);
//             resolve(results);
//           })
//           .catch(err => {
//             console.log(err);
//           });
//       });
//     }, // a function which produces all the messages
//     post: function(msg) {
//       return new Promise((resolve, reject) => {
//         Messages.create({
//           username: msg.username,
//           message: msg.message,
//           roomname: msg.roomname
//         })
//           .then(results => {
//             console.log("이것은 msg postt의 results여 ", results);
//             resolve(results);
//           })
//           .catch(err => {
//             console.log(err);
//           });
//       });
//     }
//     // a function which can be used to insert a message into the database
//   },

//   users: {
//     // Ditto as above.
//     get: function() {
//       return new Promise((resolve, reject) => {
//         Users.findAll()
//           .then(results => {
//             console.log("이것은 user get의 results여 ", results);
//             resolve(results);
//           })
//           .catch(err => {
//             console.log(err);
//           });
//       });
//     },
//     post: function(msg) {
//       return new Promise((resolve, reject) => {
//         Users.create({
//           username: msg.username
//         })
//           .then(results => {
//             console.log("이것은 user post의 results여 ", results);
//             resolve(results);
//           })
//           .catch(err => {
//             console.log(err);
//           });
//       });
//     }
//   }
// };
// 여기 줄까지 주석

//여기 줄부터 임시
var db = require("../db");

module.exports = {
  messages: {
    get: function() {
      return new Promise((resolve, reject) => {
        db.query("SELECT * from messages", function(err, results, fields) {
          if (err) reject(err);
          else {
            console.log(results);
            resolve(results);
          }
        });
      });
    }, // a function which produces all the messages
    post: function(msg) {
      return new Promise((resolve, reject) => {
        db.query(
          `INSERT INTO messages (username, message, roomname) 
      VALUES(?, ?, ?)`,
          [msg.username, msg.message, msg.roomname],
          function(err, results) {
            if (err) reject(err);
            else {
              console.log(results);
              resolve(results);
            }
          }
        );
      });
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function() {
      return new Promise((resolve, reject) => {
        db.query("SELECT * from users", function(err, results, fields) {
          if (err) reject(err);
          else {
            console.log(results);
            resolve(results);
          }
        });
      });
    },
    post: function(message) {
      return new Promise((resolve, reject) => {
        db.query(
          `INSERT INTO users (username) VALUES('${message.username}')`,
          function(err, results) {
            if (err) reject(err);
            else {
              console.log(results);
              resolve(results);
            }
          }
        );
      });
    }
  }
};
//여기 줄까지 임시


// -------이하부분 버림--------
// db.connection.query(`INSERT INTO messages (username, message, roomname)
// VALUES('name','message check','codestates')`,
// function(err,results){
//   if(!err){
//     console.log(results);
//    // return results;
//   } else {
//     console.log(err);
//   }
// })

// db.connection.query('SELECT * from messages',function(err,rows){
// if(!err){
// console.log(rows);
// } else {
// console.log(err);
// }
// })

/*
const messages = { results: [] };

const getMessageModels = function() {
  return messages;
};
const postMessageModels = function(message) {
  messages.results.push(message);
  return message;
};

module.exports = {
  getMessageModels,
  postMessageModels
};
*/
