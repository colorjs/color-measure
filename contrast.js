/**
 * http://www.w3.org/TR/WCAG20/#contrast-ratiodef
 *
 * @module  color-measure/contrast
 */

var luminance = require('./luminance');

module.exports = function (color1, color2) {
	var lum1 = luminance(color1);
	var lum2 = luminance(color2);
	if (lum1 > lum2) {
		return (lum1 + 0.05) / (lum2 + 0.05);
	}
	return (lum2 + 0.05) / (lum1 + 0.05);
};