const db = require("../../models");
const bcrypt = require("bcrypt");

require("dotenv").config();
const message = require("../../constants/messages.json");

//adding student
exports.addStudent = async (req, res) => {
  //checking for duplicate email
  const check = await db.student.findOne({ where: { email: req.body.email } });
  if (check) {
    res.send(message.alreadyExists);
  }
  await db.student
    .create(req.body)
    .then((data) => {
      res.send(data);
    })
    .catch((e) => {
      res.send(e);
    });
};
//getting all students
exports.showAll = async (req, res) => {
  const student = await db.student.findAll();
  if (!student) {
    res.send(message.notFound);
  }

  res.send(student);
};

//deleting student by id
exports.delete = async (req, res) => {
  const id = req.params.id;
  await db.student
    .destroy({
      where: { id: id },
    })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: message.deleted,
        });
      } else {
        res.send({
          message: message.failed,
        });
      }
    })
    .catch((err) => {
      res.send({
        message: err.message || message.failed,
      });
    });
};
