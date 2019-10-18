//여기부터 주석
// const Sequelize = require('sequelize');

// const sequelize = new Sequelize(
//   'chat', // 데이터베이스 이름
//   'root', // 유저 명
//   '1234', // 비밀번호
//   {
//     'host': 'localhost', // 데이터베이스 호스트
//     'dialect': 'mysql' // 사용할 데이터베이스 종류
//   }
// );


// module.exports = sequelize;
//여기까지 주석

//여기부터 임시
var mysql = require('mysql');


  var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'chat'
  });
  connection.connect();

 
  //connection.end();
  
 module.exports = connection
  
//여기까지 임시


// var mysql = require('mysql');


//   var connection = mysql.createConnection({
//     host     : 'localhost',
//     user     : 'root',
//     password : '1234',
//     database : 'chat'
//   });
//   connection.connect();

 
//   //connection.end();
  
//  module.exports = connection
  

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".


