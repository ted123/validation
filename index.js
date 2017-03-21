'use strict';

var validations = {
	'authentication' : require( './schemas/authentication' ),
	'libraries'      : require( './schemas/libraries' ),
	'lti'            : require( './schemas/lti' ),
	'mc'             : require( './schemas/mc' ),
	'observation'    : require( './schemas/observation' ),
	'user'           : require( './schemas/user' )
};

module.exports = validations;
