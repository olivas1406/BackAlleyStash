module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define(
    "Category",
    {
      categoriesId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      CategoryDesc: { type: DataTypes.STRING, allowNull: false }
    },
    {
      charset: "utf8",
      timestamps: false,
      freezeTableName: true,
      classMethods: {},
      instanceMethods: {}
    }
  );
  return Category;
};
