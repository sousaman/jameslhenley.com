var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Profession Model
 * ==========
 */
var Profession = new keystone.List('Profession');

Profession.add({
	company: { type: Types.Text, initial: true },
    websiteLink: { type: Types.Url, initial: true },
    jobImage: { type: Types.CloudinaryImage, initial: true },
    startDate: { type: Types.Text, initial: true },
    endDate: { type: Types.Text, initial: true },
    jobTitle: { type: Types.Text, initial: true },
    responsibilities: { type: Types.Textarea, initial: true }
});


/**
 * Relationships
 */


/**
 * Registration
 */
Profession.defaultColumns = 'company, jobTitle, startDate, endDate';
Profession.register();
