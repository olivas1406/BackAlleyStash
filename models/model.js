var Sequelize = require('sequelize');
var db_config = require('../config/models.json');
var db = new Sequelize(db_config.database, db_config.user, db_config.password, db_config.server);

var self = module.exports = {
  /** Sequel Object **/
  'db' : db,

  User: db.define('users',
    {
      userId: {type: Sequelize.INTEGER, allowNull: false, primaryKey: true},
      firstname: {type: Sequelize.STRING, allowNull: false}
      lastname: {type: Sequelize.STRING, allowNull: fale}
      email: {type: Sequelize.STRING, len: 255, allowNull: false},
    },
    {
      charset: 'utf8',
      timestamps: false,
      freezeTableName: true,
      classMethods: {
      },
      instanceMethods: {
      }
    }
  ),

    authentication: db.define('authentication'),
    {
      authenticationId: {type: Sequelize.INTEGER, allowNull: false, primaryKey: true},
      login: {type: Sequelize.STRING, len: 255, allowNull: false}
      password: {type: Sequelize.STRING, len: 10, allowNull: false}
    },
    {
      charset: 'utf8',
      timestamps: false,
      freezeTableName: true,
      classMethods: {
      },
      instanceMethods: {
      }
    }
  ),


  Office: db.define('offices',
    {
      id: {type: Sequelize.INTEGER, allowNull: false, primaryKey: true},
      code: {type: Sequelize.STRING, len: 255, allowNull: false},
      address: {type: Sequelize.STRING, len: 255, allowNull: false}
    },
    {
      charset: 'utf8',
      timestamps: false,
      freezeTableName: true,
      classMethods: {
      },
      instanceMethods: {
      }
    }
  ),

  AccountType: db.define('accounttype',
    {
      accountTypeId: {type: Sequelize.INTEGER, allowNull: false, primaryKey: true},
      accountTypeDesc: {type: Sequelize.STRING, len: 255, allowNull: false}
    },
    {
      charset: 'utf8',
      timestamps: false,
      freezeTableName: true,
      classMethods: {
      },
      instanceMethods: {
      }
    }
  ),

    categories: db.define('categories',
    {
      categoriesId: {type: Sequelize.INTEGER, allowNull: false, primaryKey: true},
      CategoryDesc: {type: Sequelize.STRING, len: 255, allowNull: false}
    },
    {
      charset: 'utf8',
      timestamps: false,
      freezeTableName: true,
      classMethods: {
      },
      instanceMethods: {
      }
    }
  ),

  Account: db.define('accounts',
    {
      accountId: {type: Sequelize.INTEGER, allowNull: false, primaryKey: true},
      userId: {type: Sequelize.INTEGER, allowNull: false},
      accountTypeDesc: {type: Sequelize.STRING, allowNull: false},
      transactionId: {type: Sequelize.INTEGER, allowNull: false},
      amount: {type: Sequelize.FLOAT, allowNull: false},
      balance: {type: Sequelize.FLOAT, allowNull: false}
    },
    {
      charset: 'utf8',
      timestamps: false,
      freezeTableName: true,
      classMethods: {
      },
      instanceMethods: {
      }
    }
  )
};
//sets many to many relationship between these two tables
self.User.belongsToMany(Account, {through: 'userIdaccountId'})
self.Account.belongsToMany(User, {through: 'userIdaccountId'})

//relationship between account type and accounts, each account belongs to one type, each type has many accounts.
self.AccountType.hasMany(self.Account, {foreignKey: 'accounttypeId' source: 'accountTypeDesc'});
self.Account.belongsTo(self.AccountType, {foreignKey: 'accounttypeId' target: 'accountTypeDesc'});
//relationship between caterogires type and tranactions, each transaction belongs to one category, 
//each category has many transactions.

self.Categories.hasMany(self.Transactions, {foreignKey: 'categoryId' source: 'categoryDesc'});
self.Transaction.belongsTo(self.Categories, {foreignKey: 'categoryId' target: 'categoryDesc'});



//One to one relationship between authenticaion and user
self.User.hasOne(authentication, {foreignKey: 'userID'}); 
self.Authentication.belongsTo(user);