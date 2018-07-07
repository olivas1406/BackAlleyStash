module.exports = (sequelize, DataTypes) => {
  const Authentication = sequelize.define(
    "Authentication",
    {
      authenticationId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      login: { type: DataTypes.STRING, allowNull: false },
      password: { type: DataTypes.STRING, allowNull: false }
    },
    {
      charset: "utf8",
      timestamps: false,
      freezeTableName: true,
      classMethods: {},
      instanceMethods: {}
    }
  );
  Authentication.associate = models => {
    Authentication.belongsTo(models.User);
  };
  return Authentication;
};
