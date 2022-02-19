'use strict';

const { hashPassword } = require('../helpers/hashPass');
const { v4: uuidv4 } = require('uuid');

module.exports = {
  up(queryInterface, Sequelize) {
    const data = [
      {
        "id": uuidv4(),
        "full_name": "Hartono Admin",
        "nick_name": "Hart",
        "email": "hartono@admin.com",
        "password": hashPassword(12345),
        "dob": new Date("Feb 18 1992"),
        "address": "Jalan Padjajaran No 53, Bekasi, Jawa Barat",
        "role": "admin",
        "approval": true,
        "photo": "https://storage.googleapis.com/fastwork-static/4cdb5e84-df58-4096-94fd-e4ed4df6d28f.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "id": uuidv4(),
        "full_name": "Rudy Customer",
        "nick_name": "Rudy",
        "email": "rudy@customer.com",
        "password": hashPassword(54321),
        "dob": new Date("Nov 11 2002"),
        "address": "Jalan Pang Pangjang No 102, Semarang, Jawa Tengah",
        "role": "customer",
        "approval": true,
        "photo": "https://www.hashmicro.com/id/blog/wp-content/uploads/2021/09/1.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "id": uuidv4(),
        "full_name": "Bambang Customer",
        "nick_name": "Bambang",
        "email": "bambang@customer.com",
        "password": hashPassword(54321),
        "dob": new Date("Mar 18 2000"),
        "address": "Jalan Pemuda Nomer 32, Pangandaran, Jawa Barat",
        "role": "customer",
        "approval": false,
        "photo": "https://www.hashmicro.com/id/blog/wp-content/uploads/2021/09/1.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ];
    return queryInterface.bulkInsert('Users', data, {});
  },

  down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
