module.exports = (sequelize, DataTypes) => {
  const AccountType = sequelize.define(
    "AccountType",
    {
      accountTypeId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      accountTypeDesc: { type: DataTypes.STRING, allowNull: false }
    },
    {
      charset: "utf8",
      timestamps: false,
      freezeTableName: true,
      classMethods: {},
      instanceMethods: {}
    }
  );
  AccountType.associate = models => {
    AccountType.hasmany(models.Account, {
      foreignKey: "accountTypeId",
      source: "accountTypeDesc"
    });
    AccountType.hasMany(models.Transaction, { foreignKey: "accountTypeId" });
  };
  return AccountType;
};
