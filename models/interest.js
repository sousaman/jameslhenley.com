var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * General Model
 * ==========
 */
var Interest = new keystone.List('Interest');

Interest.add({
	interest: { type: Types.Text, initial: true },
	link: { type: Types.Text, initial: true }
});


/**
 * Relationships
 */


/**
 * Registration
 */
Interest.defaultColumns = 'interest, link';
Interest.register();
