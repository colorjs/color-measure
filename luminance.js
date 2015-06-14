/**
 * http://www.w3.org/TR/WCAG20/#relativeluminancedef
 *
 * @module  color-metric/luminance
 */

module.exports = function (color) {
	var rgb = [color.red(), color.green(), color.blue()];
	var lum = [];

	for (var i = 0; i < rgb.length; i++) {
		var chan = rgb[i] / 255;
		lum[i] = (chan <= 0.03928) ? chan / 12.92 : Math.pow(((chan + 0.055) / 1.055), 2.4);
	}

	return 0.2126 * lum[0] + 0.7152 * lum[1] + 0.0722 * lum[2];
};