module.exports = (sequelize, Sequelize) => {
  return sequelize.define(
    "student",
    {
      id: {
        autoIncrement: true,
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      firstName: Sequelize.STRING,
      familyName: Sequelize.STRING,
      email: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      dob: {
        type: Sequelize.DATE,
        allowNull: true,
      },
    },
    {
      sequelize,
      alter: true,
      freezeTableName: true,
      tableName: "student",
      timestamps: true,
      underscored: false,
    }
  );
};
