/**
 * YIQ equasion from
 * http://24ways.org/2010/calculating-color-contrast
 *
 * @module  color-measure/is-dark
 */

module.exports = function (color) {
	var yiq = (color.red() * 299 + color.green() * 587 + color.blue() * 114) / 1000;
	return yiq < 128;
};