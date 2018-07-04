module.exports = (sequelize, DataTypes) => {
  const Transaction = sequelize.define(
    "Transaction",
    {
      expense_name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      category: {
        type: DataTypes.STRING,
        allowNull: false
      },
      amount: {
        type: DataTypes.DECIMAL,
        allowNull: false
      },
      note: {
        type: DataTypes.TEXT,
        allowNull: true
      }
    },
    {
      freezeTableName: true
    }
  );

  Transaction.associate = function(models) {
    // We're saying that a Transaction should belong to a User
    Transaction.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Transaction;
};
