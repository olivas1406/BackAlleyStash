module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define(
    "Category",
    {
      categoryId: {
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
  Category.associate = models => {
    Category.hasMany(models.Transaction, {
      foreignKey: "categoryId",
      source: "categoryDesc"
    });
  };
  return Category;
};
