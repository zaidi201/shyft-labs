const db = require("../../models");

require("dotenv").config();
const message = require("../../constants/messages.json");

//adding result using studentId and courseId
exports.addResult = async (req, res) => {
  await db.result
    .create(req.body)
    .then((data) => {
      res.send(data);
    })
    .catch((e) => {
      res.send(e);
    });
};

//getting all results using joins
exports.showAll = async (req, res) => {
  const result = await db.result.findAll({
    include: [
      {
        model: db.student,
      },
      {
        model: db.course,
      },
    ],
  });
  if (!result) {
    res.send({ message: message.notFound });
  }

  res.send(result);
};
