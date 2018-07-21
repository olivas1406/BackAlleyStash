module.exports = (sequelize, DataTypes) => {
  const Transaction = sequelize.define(
    "Transaction",
    {
      transactionId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      transactionDesc: { type: DataTypes.TEXT, allowNull: false },
      categoryDesc: { type: DataTypes.TEXT, allowNull: false },
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
  Transaction.associate = models => {
    Transaction.belongsTo(models.Category, {
      foreignKey: "categoryId",
      target: "categoryDesc"
    });
    // Transaction.belongsTo(models.Account, {
    //   foreignKey: "transactionId",
    //   target: "amount",
    //   target: "balance",
    //   target: "categoryDesc",
    //   target: "transactionDesc"
    // });
    Transaction.belongsTo(models.User, { foreignKey: "userID" });
    Transaction.belongsTo(models.AccountType, { foreignKey: "accountTypeId" });
  };
  return Transaction;
};
