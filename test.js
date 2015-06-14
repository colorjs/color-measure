var assert = require("assert");
var m = require('./');

var Color = require("color");


describe('Metrics', function () {
	it('Color metrics', function () {
		assert.equal(m.luminance(Color("white")), 1);
		assert.equal(m.luminance(Color("black")), 0);
		assert.equal(m.luminance(Color("red")), 0.2126);
		assert.equal(m.contrast(Color("white"), Color("black")), 21);
		assert.equal(Math.round(m.contrast(Color("white"), Color("red"))), 4);
		assert.equal(Math.round(m.contrast(Color("red"), Color("white"))), 4);
		assert.equal(m.contrast(Color("blue"), Color("blue")), 1);
		assert.ok(m.isDark(Color("black")));
		assert.ok(!m.isLight(Color("black")));
		assert.ok(m.isLight(Color("white")));
		assert.ok(!m.isDark(Color("white")));
		assert.ok(m.isDark(Color("blue")));
		assert.ok(m.isDark(Color("darkgreen")));
		assert.ok(m.isLight(Color("pink")));
		assert.ok(m.isLight(Color("goldenrod")));
		assert.ok(m.isDark(Color("red")));

		assert.equal(m.level(Color("white"), Color("black")), "AAA");
		assert.equal(m.level(Color("grey"), Color("black")), "AA");
	});
});