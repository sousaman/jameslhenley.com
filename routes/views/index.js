var keystone = require('keystone');
var Certification = keystone.list('Certification');
var Education = keystone.list('Education');
var General = keystone.list('General');
var Profession = keystone.list('Profession');
var Portfolio = keystone.list('Portfolio');
var Interest = keystone.list('Interest');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'home';
	locals.data = {
		general: [],
		certifications: [],
		education: [],
		portfolio: [],
		professions: [],
		interests: [],
		req: req,
	};

	view.on('init', function (next) {
		General.model.find({}).exec(function (err, general) {
			if (err) {
				console.log(err);
				req.flash('error', err);
				next();
			}
			locals.data.general = general;
			Education.model.find({}).exec(function (err, education) {
				if (err) {
					console.log(err);
					req.flash('error', err);
					next();
				}
				locals.data.education = education;
				Profession.model.find({}).exec(function (err, professions) {
					if (err) {
						console.log(err);
						req.flash('error', err);
						next();
					}
					locals.data.professions = professions;
					Portfolio.model.find({}).exec(function (err, portfolio) {
						if (err) {
							console.log(err);
							req.flash('error', err);
							next();
						}
						locals.data.portfolio = portfolio;
						Certification.model.find({}).exec(function (err, certifications) {
							if (err) {
								console.log(err);
								req.flash('error', err);
								next();
							}
							locals.data.certifications = certifications;
							Interest.model.find({}).exec(function (err, interests) {
								if (err) {
									console.log(err);
									req.flash('error', err);
									next();
								}
								locals.data.interests = interests;
								next();
							})
						})
					})
				})
			})
		});
	});

	// Render the view
	view.render('index');
};
