module.exports = (sequelize, DataTypes) => {
  const AccountType = sequelize.define(
    "AccountType",
    {
      accountTypeId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      accountTypeDesc: { type: DataTypes.STRING, len: 255, allowNull: false }
    },
    {
      charset: "utf8",
      timestamps: false,
      freezeTableName: true,
      classMethods: {},
      instanceMethods: {}
    }
  );
  return AccountType;
};
