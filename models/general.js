module.exports = function (sequelize, DataTypes) {
    var General = sequelize.define("General", {
        intro: DataTypes.TEXT,
        headline1: DataTypes.STRING,
        headline2: DataTypes.STRING,
    })
    return General;
}