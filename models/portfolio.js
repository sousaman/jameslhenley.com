module.exports = function (sequelize, DataTypes) {
    var Portfolio = sequelize.define("Portfolio", {
        projectName: DataTypes.STRING,
        url: DataTypes.STRING
    })
    return Portfolio;
}