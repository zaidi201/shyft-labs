module.exports = (sequelize, Sequelize) => {
  return sequelize.define(
    "course",
    {
      id: {
        autoIncrement: true,
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      courseName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      alter: true,
      freezeTableName: true,
      tableName: "course",
      timestamps: true,
      underscored: false,
    }
  );
};
