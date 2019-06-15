const db = require("../models");

// Defining methods for the improveuController
module.exports = {
  findAllUsers: function (req, res) {
         db.User
          .find(req.query)
          /* .sort({ date: -1 }) */
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err)); 
  },
  findUserById: function (req, res) {
         db.User
          .findById(req.params.id)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err)); 
  },
  createUser: function (req, res) {
          db.User
          .create(req.body)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
  },
  updateUser: function (req, res) {
          db.User
          .findOneAndUpdate({ _id: req.params.id }, req.body)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err)); 
  },
  removeUser: function (req, res) {
          db.User
          .findById({ _id: req.params.id })
          .then(dbModel => dbModel.remove())
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err)); 
  },
  findAllGoals: function (req, res) {
          db.Goal
          .find(req.query)
          /* .sort({ date: -1 }) */
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err)); 
  },
  findGoalById: function (req, res) {
          db.Goal
          .findById(req.params.id)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err)); 
  },
  createGoal: function (req, res) {
          db.Goal
          .create(req.body)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err)); 
  },
  updateGoal: function (req, res) {
          db.Goal
          .findOneAndUpdate({ _id: req.params.id }, req.body)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err)); 
  },
  removeGoal: function (req, res) {
          db.Goal
          .findById({ _id: req.params.id })
          .then(dbModel => dbModel.remove())
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err)); 
  }
};
