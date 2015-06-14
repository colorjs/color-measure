/**
 * http://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html#visual-audio-contrast-contrast-73-head
 *
 * @module color-measure/level
 */

var contrast = require('./contrast');

module.exports = function (color1, color2) {
	var contrastRatio = contrast(color1, color2);

	return (contrastRatio >= 7.1) ? 'AAA' : (contrastRatio >= 4.5) ? 'AA' : '';
};