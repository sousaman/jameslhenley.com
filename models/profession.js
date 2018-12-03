module.exports = function (sequelize, DataTypes) {
    var Profession = sequelize.define("Profession", {
        company: DataTypes.STRING,
        websiteLink: DataTypes.STRING,
        jobImage: DataTypes.BLOB,
        startYear: DataTypes.STRING,
        startMonth: DataTypes.STRING,
        endYear: DataTypes.STRING,
        endMonth: DataTypes.STRING,
        jobTitle: DataTypes.STRING,
        responsibilities: DataTypes.TEXT
    })
    return Profession;
}