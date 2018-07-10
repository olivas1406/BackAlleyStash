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

      timeStamp: {type: Sequelize.DATE(6), allowNull: false},
      accountTypeDesc: { type: DataTypes.STRING, allowNull: false },

      transactionDesc: { type: DataTypes.STRING, allowNull: false },
      categoryDesc: {tyep: Sequelize.STRING, len: 255, allowNull: false},
      amount: { type: DataTypes.FLOAT, allowNull: false },
      balance: { type: DataTypes.FLOAT, allowNull: false }

    },
    {
      charset: "utf8",
      timestamps: true,

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
    Account.hasMany(models.Transaction, {
      foreignKey: "transactionId",
      source: "amount",

      source: "balance",
      source: "categoryDesc",
      source: "transactionDesc",
      source: "timeStamp"

    });
  };
  return Account;
};
