let root;
if (typeof global !== 'undefined') root = global;
else if (typeof window !== 'undefined') root = window;
else root = {};

(function (window) {
  'use strict';

  // jQuery
  window.$ = window.jQuery = require('jquery');
  // require('materialize-css/dist/js/materialize.js');

  // moment
  window.moment = require('moment');
  window.locale = require('../etc/moment');
  // lodash
  window._ = require('lodash');

  // riot
  window.riot = require('riot');

  // dropzone
  window.Dropzone = require('dropzone');

  // slick
  require('slick-carousel');
}(root));
