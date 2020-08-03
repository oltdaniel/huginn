//= require popper
//= require bootstrap/util
//= require bootstrap/alert
//= require bootstrap/button
//= require bootstrap/carousel
//= require bootstrap/collapse
//= require bootstrap/dropdown
//= require bootstrap/index
//= require bootstrap/modal
//= require bootstrap/tooltip
//= require bootstrap/popover
//= require bootstrap/scrollspy
//= require bootstrap/tab
//= require bootstrap/toast

/* This fix by https://github.com/twbs/bootstrap/issues/24870
 * The issue: This project uses jQuery 4+, however the new bootstrap
 * only works with an older version.
 */
$.prototype.tooltip = (function (tooltip) {
  return function (config) {
    try {
      return tooltip.call(this, config);
    } catch (ex) {
      if (ex instanceof TypeError && config === "destroy") {
        return tooltip.call(this, "dispose");
      }
    }
  };
})($.prototype.tooltip);