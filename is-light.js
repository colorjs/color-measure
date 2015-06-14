/**
 * @module  color-measure/is-white
 */

var isDark = require('./is-dark');

module.exports = function (color) {
	return !isDark(color);
};