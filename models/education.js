module.exports = function (sequelize, DataTypes) {
    var Education = sequelize.define("Education", {
        school: DataTypes.STRING,
        cityState: DataTypes.STRING,
        gradMonth: DataTypes.STRING,
        gradYear: DataTypes.STRING,
        degree: DataTypes.STRING,
        websiteLink: DataTypes.STRING,
        minor1: DataTypes.STRING,
        minor2: DataTypes.STRING,
        logo: DataTypes.BLOB
    })
    return Education;
}