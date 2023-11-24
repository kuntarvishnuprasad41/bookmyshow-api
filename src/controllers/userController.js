const { storeUser } = require("../models/userModel");

require("bcrypt");

async function createUser(req, res, next) {
  let user = req.body;
  storeUser(user)
    .then((resy) => {
      return res.status(200).send(resy);
    })
    .catch((err) => {
      return res.status(200).send({ error: err.errors[0].message });
    });
}

module.exports = { createUser };
