module.exports = function (sequelize, DataTypes) {
    var Certification = sequelize.define("Certification", {
        entity: DataTypes.STRING,
        entityLink: DataTypes.STRING,
        entityImage: DataTypes.BLOB,
        denotation: DataTypes.STRING,
        shortDenote: DataTypes.STRING,
        startDenote: DataTypes.STRING,
        endDenote: DataTypes.STRING,
        responsibilities: DataTypes.TEXT
    })
    return Certification;
}