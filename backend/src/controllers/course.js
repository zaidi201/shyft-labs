const db = require("../../models");

require("dotenv").config();
const message = require("../../constants/messages.json");

//adding course
exports.addCourse = async (req, res) => {
  await db.course
    .create(req.body)
    .then((data) => {
      res.send(data);
    })
    .catch((e) => {
      res.send(e);
    });
};

//getting all courses
exports.showAll = async (req, res) => {
  const course = await db.course.findAll();
  if (!course) {
    res.send({ message: message.notFound });
  }

  res.send(course);
};

//deleting course by id
exports.delete = async (req, res) => {
  const id = req.params.id;
  await db.course
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
