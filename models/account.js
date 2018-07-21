module.exports = (sequelize, DataTypes) => {
  const Account = sequelize.define(
    "Account",
    {
      accountId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      accountTypeDesc: { type: DataTypes.TEXT, allowNull: false },
      transactionDesc: { type: DataTypes.TEXT, allowNull: false },
      categoryDesc: {
        type: DataTypes.TEXT,
        validate: { len: [1] },
        allowNull: false
      },
      amount: { type: DataTypes.FLOAT, allowNull: false },
      balance: { type: DataTypes.FLOAT, allowNull: false }
    },
    {
      charset: "utf8",
      freezeTableName: true,
      classMethods: {},
      instanceMethods: {}
    }
  );
  Account.associate = models => {
    Account.belongsToMany(models.User, { through: "userIdAccountId" });
    Account.belongsTo(models.AccountType, {
      foreignKey: "accountTypeId",
      target: "accountTypeDesc"
    });
    // Account.hasMany(models.Transaction, {
    //   foreignKey: "transactionId",
    //   source: "amount",
    //   source: "balance",
    //   source: "categoryDesc",
    //   source: "transactionDesc"
    // });
  };
  return Account;
};
