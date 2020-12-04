var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Certification Model
 * ==========
 */
var Certification = new keystone.List('Certification');

Certification.add({
	entity: { type: Types.Text, initial: true },
	entityLink: { type: Types.Url, initial: true },
    entityImage: { type: Types.CloudinaryImage, initial: true },
    denotation: { type: Types.Text, initial: true },
    certification: { type: Types.TextArray, inital: true },
    shortDenote: { type: Types.Text, initial: true },
    startDenote: { type: Types.Text, initial: true },
    endDenote: { type: Types.Text, initial: true },
    responsibilities: { type: Types.Textarea, initial: true },
});


/**
 * Relationships
 */


/**
 * Registration
 */
Certification.defaultColumns = 'entity, startDenote, endDenote';
Certification.register();
