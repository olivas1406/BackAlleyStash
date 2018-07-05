module.exports = (sequelize, DataTypes) => {
  const Account = sequelize.define(
    "Account",
    {
      accountId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      accountTypeDesc: { type: DataTypes.STRING, allowNull: false },
      transactionId: { type: DataTypes.INTEGER, allowNull: false },
      amount: { type: DataTypes.FLOAT, allowNull: false },
      balance: { type: DataTypes.FLOAT, allowNull: false }
    },
    {
      charset: "utf8",
      timestamps: false,
      freezeTableName: true,
      classMethods: {},
      instanceMethods: {}
    }
  );
  Account.associate = models => {
    Account.belongsToMany(models.User, { through: "userIdAccountId" });
    Account.belongsTo(model.AccountType, {
      foreignKey: "accountTypeId",
      target: "accountTypeDesc"
    });
    Account.hasMany(models.Transaction, {
      foreignKey: "transactionId",
      source: "amount",
      source: "balance"
    });
  };
  return Account;
};
