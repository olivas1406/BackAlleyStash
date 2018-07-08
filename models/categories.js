module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define(
    "Category",
    {
      categoryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      CategoryDesc: { type: DataTypes.TEXT, allowNull: false }
    },
    {
      charset: "utf8",
      classMethods: {},
      instanceMethods: {}
    }
  );
  Category.associate = models => {
    Category.hasMany(models.Transaction, {
      foreignKey: "categoryId",
      source: "categoryDesc"
    });
  };
  return Category;
};
