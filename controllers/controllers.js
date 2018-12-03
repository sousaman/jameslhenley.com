// Requiring node packages needed
const path = require("path");
const express = require("express");
const firebase = require("firebase");
const db = require("../models");

// Declaring routes
const router = express.Router();

// Line of code that handles the html routes or any invalid paths entered
router.get("/portfolio", function (req, res) {
    db.Portfolio.findAll()
        .then(function (dbPort) {
            hbsObject = {
                portfolio: dbPort
            }
            res.render("portfolio", hbsObject);
        })
});



router.get("/", function (req, res) {
    db.General.findAll({
            where: {
                id: 1
            }
        })
        .then(function (dbGen) {
            db.Education.findAll()
                .then(function (dbEd) {
                    db.Profession.findAll()
                        .then(function (dbProf) {
                            db.Certification.findAll()
                                .then(function (dbCert) {
                                    hbsObject = {
                                        description: dbGen,
                                        education: dbEd,
                                        profession: dbProf,
                                        certification: dbCert
                                    }
                                    res.render("index", hbsObject);
                                })
                        })
                })
        });
});

module.exports = router;