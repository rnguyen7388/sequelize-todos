module.exports = function(sequelize, DataTypes) {
  const Todo = sequelize.define("Todo", {
    text: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 50]
      }
    },
    complete: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  });
  return Todo;
}