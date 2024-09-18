const express = require("express");
const accountsRouter = express.Router();
const { getAllUsers, getOneUser, addUser, editUser, deleteUser } = require("./accounts.controller");

accountsRouter.route('/users')
  .get(getAllUsers)
  .post(addUser)

accountsRouter.route('/users/:id')
  .get(getOneUser)
  .put(editUser)
  .delete(deleteUser)

module.exports = accountsRouter;
