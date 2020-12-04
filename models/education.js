var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Education Model
 * ==========
 */
var Education = new keystone.List('Education');

Education.add({
	school: { type: Types.Text, initial: true },
	cityState: { type: Types.Text, initial: true },
    gradDate: { type: Types.Text, initial: true },
    degree: { type: Types.Text, initial: true },
    websiteLink: { type: Types.Url, initial: true },
    minors: { type: Types.TextArray, initial: true },
    logo: { type: Types.CloudinaryImage, initial: true },
});


/**
 * Relationships
 */


/**
 * Registration
 */
Education.defaultColumns = 'school, degree, gradMonth, gradYear';
Education.register();
