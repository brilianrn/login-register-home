const { User } = require("../models");
const { comparePassword } = require("../helpers/hashPass");
const { generateToken } = require("../helpers/jwt");
const { v4: uuidv4 } = require('uuid');

class UserController {
  static customerRegister(req, res) {
    let customer = {
      id: uuidv4(),
      full_name: req.body.full_name,
      nick_name: req.body.nick_name,
      email: req.body.email,
      password: req.body.password,
      dob: new Date(req.body.dob),
      address: req.body.address,
      photo: req.body.photo,
      approval: false,
      role: "customer",
    }

    User.create(customer)
      .then(data => {
        res.status(201).json({ message: `${data.email} successfully created` })
      })
      .catch(err => {
        res.status(400).json({ code: 400, message: err.message });
      })
  };

  static customerLogin(req, res) {
    let email = req.body.email;
    let password = req.body.password;

    User.findOne({
      where: {
        email,
        role: "customer"
      }
    })
      .then(user => {
        if (user) {
          if (user.approval) {
            let cekPassword = comparePassword(password, user.password);
            let payload = { id: user.id, email: user.email };

            if (cekPassword) {
              let access_token = generateToken(payload);
              res.status(200).json({
                id: user.id,
                email: user.email,
                nick_name: user.nick_name,
                photo: user.photo,
                role: user.role,
                approval: user.approval,
                access_token
              });
            } else {
              throw ({ name: 'Unauth­orized', message: 'Invalid email/password' })
            }
          } else {
            throw ({ name: 'Unauth­orized', message: 'Sorry your account is not active' })
          }
        } else {
          throw ({ name: 'Unauth­orized', message: 'Invalid email/password' })
        }
      })
      .catch(err => {
        res.status(401).json({ code: 401, message: err.message });
      })
  };

  static adminLogin(req, res) {
    let email = req.body.email;
    let password = req.body.password;

    User.findOne({
      where: {
        email,
        role: "admin"
      }
    })
      .then(user => {
        if (user) {
          let cekPassword = comparePassword(password, user.password);
          let payload = { id: user.id, email: user.email };

          if (cekPassword) {
            let access_token = generateToken(payload);
            res.status(200).json({
              id: user.id,
              email: user.email,
              nick_name: user.nick_name,
              photo: user.photo,
              role: user.role,
              access_token
            });
          } else {
            throw ({ name: 'Unauth­orized', message: 'Invalid email/password' })
          }
        } else {
          throw ({ name: 'Unauth­orized', message: 'Invalid email/password' })
        }
      })
      .catch(err => {
        res.status(401).json({ code: 401, message: err.message });
      })
  };

  static listCustomers(req, res) {
    User.findAll({
      where: {
        role: "customer",
        approval: false
      }
    })
      .then(data => {
        res.status(200).json(data);
      })
      .catch(err => {
        res.status(500).json(err.message);
      })
  }

  static userDetail(req, res) {
    const { id } = req.params;

    User.findOne({
      where: {
        id
      }
    })
      .then(data => {
        res.status(200).json(data);
      })
      .catch(err => {
        res.status(500).json(err.message);
      })
  }

  static approveCustomer(req, res) {
    const { id } = req.body;

    User.update({
      approval: true
    }, {
      where: {
        id
      }
    })
      .then(data => {
        res.status(200).json(data);
      })
      .catch(err => {
        console.log(err.message)
        res.status(500).json(err.message);
      })
  }
}

module.exports = UserController;