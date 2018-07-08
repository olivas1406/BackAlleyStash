module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      firstName: { type: DataTypes.STRING, allowNull: false },
      lastName: { type: DataTypes.STRING, allowNull: false },
      email: { type: DataTypes.STRING, allowNull: false }
    },
    {
      charset: "utf8",
      freezeTableName: true,
      classMethods: {},
      instanceMethods: {}
    }
  );
  User.associate = models => {
    User.belongsToMany(models.Account, { through: "userIdAccountId" });
    User.hasMany(models.Transaction, { foreignKey: "usersId" });
    User.hasOne(models.Authentication, { foreignKey: "userID" });
  };

  return User;
};
// //sets many to many relationship between these two tables
// stash.User.belongsToMany(Account, { through: "userIdaccountId" });
// stash.Account.belongsToMany(User, { through: "userIdaccountId" });

// //relationship between account type and accounts, each account belongs to one type, each type has many accounts.
// stash.AccountType.hasMany(stash.Account, {
//   foreignKey: "accounttypeId",
//   source: "accountTypeDesc"
// });
// stash.Account.belongsTo(stash.AccountType, {
//   foreignKey: "accounttypeId",
//   target: "accountTypeDesc"
// });
// //relationship between caterogires type and tranactions, each transaction belongs to one category,
// //each category has many transactions.

// stash.Categories.hasMany(stash.Transactions, {
//   foreignKey: "categoryId",
//   source: "categoryDesc"
// });
// stash.Transaction.belongsTo(stash.Categories, {
//   foreignKey: "categoryId",
//   target: "categoryDesc"
// });

// stash.Account.hasMany(stash.Transaction, {
//   foreignKey: "transactionId",
//   source: "amount",
//   source: "balance"
// });
// stash.Transaction.belongsTo(stash.Account, {
//   foreignKey: "transactionId",
//   target: "amount",
//   target: "balance"
// });

// stash.User.hasMany(stash.Transaction, { foreignKey: "userId" });
// stash.Transaction.belongsTo(stash.User, { foreignKey: "userID" });

// stash.AccountType.hasMany(stash.Transaction, { foreignKey: "accountTypeId" });
// stash.Transaction.belongsTo(stash.AccountType, { foreignKey: "accountTypeId" });

// //One to one relationship between authenticaion and user
// stash.User.hasOne(authentication, { foreignKey: "userID" });
// stash.Authentication.belongsTo(user);
