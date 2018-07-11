var Sequelize = require("sequelize");
var db_config = require("../config/config.json");

var db = new Sequelize(
  db_config.database,
  db_config.user,
  db_config.password,
  db_config.development
);

var stash = (module.exports = {
  /** Sequel Object **/
  db: db,

  User: db.define(
    "user",
    {
      userId: { type: Sequelize.INTEGER, allowNull: false, primaryKey: true },
      firstname: { type: Sequelize.STRING, allowNull: false },
      lastname: { type: Sequelize.STRING, allowNull: false },
      email: {
        type: Sequelize.STRING,
        len: 255,
        allowNull: false,
        validate: {
          isEmail: true
        }
      }
    },
    {
      charset: "utf8",
      timestamps: false,
      freezeTableName: true,
      classMethods: {},
      instanceMethods: {}
    }
  ),

  authentication: db.define(
    "authentication",
    {
      authenticationId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      login: { type: Sequelize.STRING, len: 255, allowNull: false },
      password: { type: Sequelize.STRING, len: 10, allowNull: false }
    },
    {
      charset: "utf8",
      timestamps: false,
      freezeTableName: true,
      classMethods: {},
      instanceMethods: {}
    }
  ),

  transactions: db.define(
    "transactions",
    {
      transactionId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      timeStamp: { type: Sequelize.DATE(6), allowNull: false },
      transactionDesc: { type: Sequelize.STRING, allowNull: false },
      categoryDesc: { type: Sequelize.STRING, len: 255, allowNull: false },
      amount: { type: Sequelize.FLOAT, allowNull: false },
      balance: { type: Sequelize.FLOAT, allowNull: false }
    },
    {
      charset: "utf8",
      timestamps: false,
      freezeTableName: true,
      classMethods: {},
      instanceMethods: {}
    }
  ),

  AccountType: db.define(
    "accounttype",
    {
      accountTypeId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      accountTypeDesc: { type: Sequelize.STRING, len: 255, allowNull: false }
    },
    {
      charset: "utf8",
      timestamps: false,
      freezeTableName: true,
      classMethods: {},
      instanceMethods: {}
    }
  ),

  categories: db.define(
    "categories",
    {
      categoriesId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      CategoryDesc: { type: Sequelize.STRING, len: 255, allowNull: false }
    },
    {
      charset: "utf8",
      timestamps: false,
      freezeTableName: true,
      classMethods: {},
      instanceMethods: {}
    }
  ),

  account: db.define(
    "account",
    {
      accountId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
      },

      userId: { type: Sequelize.INTEGER, allowNull: false },
      accountTypeDesc: { type: Sequelize.STRING, allowNull: false },
      transactionId: { type: Sequelize.INTEGER, allowNull: false },
      amount: { type: Sequelize.FLOAT, allowNull: false },
      balance: { type: Sequelize.FLOAT, allowNull: false }
    },
    {
      charset: "utf8",
      timestamps: false,
      freezeTableName: true,
      classMethods: {},
      instanceMethods: {}
    }
  )
});
//sets many to many relationship between these two tables
stash.User.belongsToMany(account, { through: "userIdaccountId" });
stash.account.belongsToMany(User, { through: "userIdaccountId" });

//relationship between account type and accounts, each account belongs to one type, each type has many accounts.
stash.AccountType.hasMany(stash.account, {
  foreignKey: "accounttypeId",
  source: "accountTypeDesc"
});
stash.account.belongsTo(stash.AccountType, {
  foreignKey: "accounttypeId",
  target: "accountTypeDesc"
});
//relationship between caterogires type and tranactions, each transaction belongs to one category,
//each category has many transactions.

stash.Categories.hasMany(stash.Transactions, {
  foreignKey: "categoryId",
  source: "categoryDesc"
});
stash.Transaction.belongsTo(stash.Categories, {
  foreignKey: "categoryId",
  target: "categoryDesc"
});

stash.account.hasMany(stash.Transaction, {
  foreignKey: "transactionId",
  source: "amount",
  source: "balance"
});
stash.Transaction.belongsTo(stash.account, {
  foreignKey: "transactionId",
  target: "amount",
  target: "balance"
});

stash.User.hasMany(stash.Transaction, { foreignKey: "userId" });
stash.Transaction.belongsTo(stash.User, { foreignKey: "userID" });

stash.AccountType.hasMany(stash.Transaction, { foreignKey: "accountTypeId" });
stash.Transaction.belongsTo(stash.AccountType, { foreignKey: "accountTypeId" });

//One to one relationship between authenticaion and user
stash.User.hasOne(authentication, { foreignKey: "userID" });
stash.Authentication.belongsTo(user);
