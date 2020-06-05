var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Portfolio Model
 * ==========
 */
var Portfolio = new keystone.List('Portfolio');

Portfolio.add({
	projectName: { type: Types.Text, initial: true },
	logo: { type: Types.CloudinaryImage, initial: true },
	url: { type: Types.Url, initial: true },
    description: { type: Types.Textarea, initial: true }
});


/**
 * Relationships
 */


/**
 * Registration
 */
Portfolio.defaultColumns = 'school, degree, gradMonth, gradYear';
Portfolio.register();
