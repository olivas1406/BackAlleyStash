module.exports = (sequelize, DataTypes) => {
  const AccountType = sequelize.define(
    "AccountType",
    {
      accountTypeId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      accountTypeDesc: { type: DataTypes.TEXT, allowNull: false },
      interestRate: { type: DataTypes.FLOAT, allowNull: false }
    },
    {
      charset: "utf8",
      freezeTableName: true,
      classMethods: {},
      instanceMethods: {}
    }
  );
  AccountType.associate = models => {
    AccountType.hasMany(models.Account, {
      foreignKey: "accountTypeId",
      source: "accountTypeDesc"
    });
    AccountType.hasMany(models.Transaction, { foreignKey: "accountTypeId" });
  };
  return AccountType;
};
