const bcrypt = require('bcryptjs');

function hashPassword(newUserPass) {
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync('' + newUserPass, salt);
  return hash;
}

function comparePassword(inputPass, passDb) {
  return bcrypt.compareSync(inputPass, passDb);
}

module.exports = { hashPassword, comparePassword }