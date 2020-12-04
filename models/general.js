var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * General Model
 * ==========
 */
var General = new keystone.List('General');

General.add({
	intro: { type: Types.Textarea, initial: true },
	headline1: { type: Types.Text, initial: true },
	headline2: { type: Types.Text, initial: true },
	contactEmail: { type: Types.Text, initial: true }
});


/**
 * Relationships
 */


/**
 * Registration
 */
General.defaultColumns = 'school, degree, gradMonth, gradYear';
General.register();
