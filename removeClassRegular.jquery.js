(function ($) {
  $.fn.RegRemoveClass = function (value) {
    var removes, className, elem, c, cl, i, l, core_rspace = /\s+/, rclass = /[\t\r\n]/g;

    if (jQuery.isFunction (value)) {
      return this.each (function (j) {
        jQuery (this).myRemoveClass (value.call (this, j, this.className));
      });
    }
    if ((value && typeof value === "string") || value === undefined) {
      removes = ( value || "" ).split (core_rspace);

      for (i = 0, l = this.length; i < l; i++) {
        elem = this[ i ];
        if (elem.nodeType === 1 && elem.className) {

          className = (" " + elem.className + " ").replace (rclass, " ");

          // loop over each item in the removal list
          for (c = 0, cl = removes.length; c < cl; c++) {
            // Remove until there is nothing to remove,
            while (className.indexOf (" " + removes[ c ] + " ") >= 0) {
              className = className.split (" " + removes[ c ] + " ").join (" ");
            }
          }
          elem.className = value ? jQuery.trim (className) : "";
        }
      }
    }

    return this;
  };
}) (jQuery);