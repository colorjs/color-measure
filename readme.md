# color-measure [![Build Status](https://travis-ci.org/dfcreative/color-measure.svg?branch=master)](https://travis-ci.org/dfcreative/color-measure) [![Code Climate](https://codeclimate.com/github/dfcreative/color-measure/badges/gpa.svg)](https://codeclimate.com/github/dfcreative/color-measure)

A collection of color metric functions.


`$ npm install color-measure`

```js
var luma = require('color-measure/luminance');
luminance(color); //0.78
```

## Metrics

* **[luminance](http://www.w3.org/TR/WCAG20/#relativeluminancedef)** (aka _luminosity_) — get relative luminance.
* **[contrast](http://www.w3.org/TR/WCAG20/#contrast-ratiodef)** — measure contrast ratio of two colors.
* **[level](http://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html#visual-audio-contrast-contrast-73-head)** — measure the readability level of two colors, based on contrast ratio.
* **[is-dark](http://24ways.org/2010/calculating-color-contrast)** — check whether color is dark via YIQ transform.
* **[is-light](http://24ways.org/2010/calculating-color-contrast)** — check whether color is dark via YIQ transform.
* [sugest measure](http://github.com/dfcreative/color-manipulate/issues/new/)

<!--
* [ ] [tone]()
* [ ] [readable]()
* [ ] [sepia]()
* temperature
* luma
* **nearest(colors)** — return nearest color from the passed list
* **difference(color)** — return color difference between the passed color
* **equal()** — whether passed color equals to the initial one.
-->



## Related

* **[color-manipulate](http://npmjs.org/package/color-manipulate)** — a collection of color manipulation functions.
* **[color-blend](http://npmjs.org/package/color-blend)** — a collection of color blending functions.
* **[color-space](http://npmjs.org/package/color-space)** — a collection of color spaces and conversions between them.
* **[color](http://npmjs.org/package/color2)** — color class, exposing metrics as own API.

[![NPM](https://nodei.co/npm/color-measure.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/color-measure/)