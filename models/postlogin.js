module.exports = function (sequelize, DataTypes) {
    var Post = sequelize.define("Authentication", {
        AccountTypeDescr: {
            type: DataTypes.STRING,
            allowNull: false
        },
        InterestRate: {
            type: DataTypes.PER,
            allowNull: false
        },  

    });

    Post.associate = function (models) {
        // Product
        // A Post can't be created without a User
        Post.belongsTo(models.Users, {

        });
    };


    return Post;
};
