(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./src/styles.css ***!
  \*****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "/* You can add global styles to this file, and also import other style files */\n* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\nhtml,body{\n  background: #eaebec;\n  font-family: \"Open Sans\", sans-serif\n}\nspan.chip {\n  -webkit-transition: background-color .3s;\n  transition: background-color .3s;\n  font-size: 1rem;\n  color: #fff;\n  display: block;\n  padding: 0 15px;\n  margin-top:16px;\n  background-color: #ef5350;\n}\n/* fallback */\n@font-face {\n  font-family: 'Material Icons';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/materialicons/v50/flUhRq6tzZclQEJ-Vdg-IuiaDsNc.woff2) format('woff2');\n}\n.container {\n  margin-top: 30px;\n}\n.material-icons {\n  font-family: 'Material Icons';\n  font-weight: normal;\n  font-style: normal;\n  font-size: 24px;\n  line-height: 1;\n  letter-spacing: normal;\n  text-transform: none;\n  display: inline-block;\n  white-space: nowrap;\n  word-wrap: normal;\n  direction: ltr;\n  -webkit-font-smoothing: antialiased;\n}\nnav .brand-logo {\n  padding-left: 15px;\n}\n/* product */\n.card-image {\n  height: 250px;\n  max-height: 250px;\n  max-width: 100%;\n}\n.card-content {\n  padding: 8px !important;\n  background: #fff;\n}\n.card-content .card-title{\n\tfont-size:22px;\n\tcolor:#393c45;\n}\n.card-content p{\n  font-size:15px;\n\tcolor:#b1b1b3;\n  padding:1px 0 20px 0;\n  text-transform: lowercase;\n}\n.card-content .product-price{\n\tfloat:right;\n\tcolor:#48cfad;\n\tfont-size:18px;\n\tfont-weight:500;\n}\n.card .card-action {\n  padding: 16px 10px;\n}\n.overlay {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  height: 100%;\n  width: 100%;\n  opacity: 0;\n  -webkit-transition: .5s ease;\n  transition: .5s ease;\n  background:rgba(72, 218, 161, 0.65);\n}\n.view_details{\n\tposition:absolute;\n\ttop:50%;\n\tleft:50%;\n\tborder:2px solid #fff;\n\tcolor:#fff;\n\tfont-size:19px;\n\ttext-align:center;\n\ttext-transform:uppercase;\n\tfont-weight:700;\n\tpadding:10px 0;\n\twidth:172px;\n\topacity:0;\n\t-webkit-transition: all 200ms ease-out;\n            transition: all 200ms ease-out;\n  -webkit-transform: translate(-50%, -50%);\n  transform: translate(-50%, -50%);\n}\n.view_details:hover{\n\tbackground:#fff;\n\tcolor:#48cfad;\n\tcursor:pointer;\n\n}\n.card:hover .overlay {\n\topacity:1;\n}\n.card:hover .view_details{\n  opacity: 1;\n}\n\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDhFQUE4RTtBQUM5RTtFQUNFLHNCQUFzQjtFQUN0QixTQUFTO0VBQ1QsVUFBVTtBQUNaO0FBRUE7RUFDRSxtQkFBbUI7RUFDbkI7QUFDRjtBQUVBO0VBQ0Usd0NBQWdDO0VBQWhDLGdDQUFnQztFQUNoQyxlQUFlO0VBQ2YsV0FBVztFQUNYLGNBQWM7RUFDZCxlQUFlO0VBQ2YsZUFBZTtFQUNmLHlCQUF5QjtBQUMzQjtBQUVBLGFBQWE7QUFDYjtFQUNFLDZCQUE2QjtFQUM3QixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLDBHQUEwRztBQUM1RztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSw2QkFBNkI7RUFDN0IsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsY0FBYztFQUNkLHNCQUFzQjtFQUN0QixvQkFBb0I7RUFDcEIscUJBQXFCO0VBQ3JCLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsY0FBYztFQUNkLG1DQUFtQztBQUNyQztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBQ0EsWUFBWTtBQUVaO0VBQ0UsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCO0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsZ0JBQWdCO0FBQ2xCO0FBQ0E7Q0FDQyxjQUFjO0NBQ2QsYUFBYTtBQUNkO0FBQ0E7RUFDRSxjQUFjO0NBQ2YsYUFBYTtFQUNaLG9CQUFvQjtFQUNwQix5QkFBeUI7QUFDM0I7QUFDQTtDQUNDLFdBQVc7Q0FDWCxhQUFhO0NBQ2IsY0FBYztDQUNkLGVBQWU7QUFDaEI7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixTQUFTO0VBQ1QsT0FBTztFQUNQLFFBQVE7RUFDUixZQUFZO0VBQ1osV0FBVztFQUNYLFVBQVU7RUFDViw0QkFBb0I7RUFBcEIsb0JBQW9CO0VBQ3BCLG1DQUFtQztBQUNyQztBQUVBO0NBQ0MsaUJBQWlCO0NBQ2pCLE9BQU87Q0FDUCxRQUFRO0NBQ1IscUJBQXFCO0NBQ3JCLFVBQVU7Q0FDVixjQUFjO0NBQ2QsaUJBQWlCO0NBQ2pCLHdCQUF3QjtDQUN4QixlQUFlO0NBQ2YsY0FBYztDQUNkLFdBQVc7Q0FDWCxTQUFTO0NBQ1Qsc0NBQXNDO1lBRzNCLDhCQUE4QjtFQUN4Qyx3Q0FBd0M7RUFFeEMsZ0NBQWdDO0FBQ2xDO0FBQ0E7Q0FDQyxlQUFlO0NBQ2YsYUFBYTtDQUNiLGNBQWM7O0FBRWY7QUFFQTtDQUNDLFNBQVM7QUFDVjtBQUNBO0VBQ0UsVUFBVTtBQUNaIiwiZmlsZSI6InNyYy9zdHlsZXMuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xuKiB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuaHRtbCxib2R5e1xuICBiYWNrZ3JvdW5kOiAjZWFlYmVjO1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZlxufVxuXG5zcGFuLmNoaXAge1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIC4zcztcbiAgZm9udC1zaXplOiAxcmVtO1xuICBjb2xvcjogI2ZmZjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmc6IDAgMTVweDtcbiAgbWFyZ2luLXRvcDoxNnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWY1MzUwO1xufVxuXG4vKiBmYWxsYmFjayAqL1xuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnTWF0ZXJpYWwgSWNvbnMnO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHNyYzogdXJsKGh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb20vcy9tYXRlcmlhbGljb25zL3Y1MC9mbFVoUnE2dHpaY2xRRUotVmRnLUl1aWFEc05jLndvZmYyKSBmb3JtYXQoJ3dvZmYyJyk7XG59XG5cbi5jb250YWluZXIge1xuICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuXG4ubWF0ZXJpYWwtaWNvbnMge1xuICBmb250LWZhbWlseTogJ01hdGVyaWFsIEljb25zJztcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB3b3JkLXdyYXA6IG5vcm1hbDtcbiAgZGlyZWN0aW9uOiBsdHI7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xufVxuXG5uYXYgLmJyYW5kLWxvZ28ge1xuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG59XG4vKiBwcm9kdWN0ICovXG5cbi5jYXJkLWltYWdlIHtcbiAgaGVpZ2h0OiAyNTBweDtcbiAgbWF4LWhlaWdodDogMjUwcHg7XG4gIG1heC13aWR0aDogMTAwJTtcbn1cblxuLmNhcmQtY29udGVudCB7XG4gIHBhZGRpbmc6IDhweCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuLmNhcmQtY29udGVudCAuY2FyZC10aXRsZXtcblx0Zm9udC1zaXplOjIycHg7XG5cdGNvbG9yOiMzOTNjNDU7XG59XG4uY2FyZC1jb250ZW50IHB7XG4gIGZvbnQtc2l6ZToxNXB4O1xuXHRjb2xvcjojYjFiMWIzO1xuICBwYWRkaW5nOjFweCAwIDIwcHggMDtcbiAgdGV4dC10cmFuc2Zvcm06IGxvd2VyY2FzZTtcbn1cbi5jYXJkLWNvbnRlbnQgLnByb2R1Y3QtcHJpY2V7XG5cdGZsb2F0OnJpZ2h0O1xuXHRjb2xvcjojNDhjZmFkO1xuXHRmb250LXNpemU6MThweDtcblx0Zm9udC13ZWlnaHQ6NTAwO1xufVxuXG4uY2FyZCAuY2FyZC1hY3Rpb24ge1xuICBwYWRkaW5nOiAxNnB4IDEwcHg7XG59XG5cbi5vdmVybGF5IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zaXRpb246IC41cyBlYXNlO1xuICBiYWNrZ3JvdW5kOnJnYmEoNzIsIDIxOCwgMTYxLCAwLjY1KTtcbn1cblxuLnZpZXdfZGV0YWlsc3tcblx0cG9zaXRpb246YWJzb2x1dGU7XG5cdHRvcDo1MCU7XG5cdGxlZnQ6NTAlO1xuXHRib3JkZXI6MnB4IHNvbGlkICNmZmY7XG5cdGNvbG9yOiNmZmY7XG5cdGZvbnQtc2l6ZToxOXB4O1xuXHR0ZXh0LWFsaWduOmNlbnRlcjtcblx0dGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlO1xuXHRmb250LXdlaWdodDo3MDA7XG5cdHBhZGRpbmc6MTBweCAwO1xuXHR3aWR0aDoxNzJweDtcblx0b3BhY2l0eTowO1xuXHQtd2Via2l0LXRyYW5zaXRpb246IGFsbCAyMDBtcyBlYXNlLW91dDtcbiAgICAgICAtbW96LXRyYW5zaXRpb246IGFsbCAyMDBtcyBlYXNlLW91dDtcbiAgICAgICAgIC1vLXRyYW5zaXRpb246IGFsbCAyMDBtcyBlYXNlLW91dDtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAyMDBtcyBlYXNlLW91dDtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cbi52aWV3X2RldGFpbHM6aG92ZXJ7XG5cdGJhY2tncm91bmQ6I2ZmZjtcblx0Y29sb3I6IzQ4Y2ZhZDtcblx0Y3Vyc29yOnBvaW50ZXI7XG5cbn1cblxuLmNhcmQ6aG92ZXIgLm92ZXJsYXkge1xuXHRvcGFjaXR5OjE7XG59XG4uY2FyZDpob3ZlciAudmlld19kZXRhaWxze1xuICBvcGFjaXR5OiAxO1xufVxuXG5cblxuIl19 */", '', '']]

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stylesInDom = {};

var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

function listToStyles(list, options) {
  var styles = [];
  var newStyles = {};

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      css: css,
      media: media,
      sourceMap: sourceMap
    };

    if (!newStyles[id]) {
      styles.push(newStyles[id] = {
        id: id,
        parts: [part]
      });
    } else {
      newStyles[id].parts.push(part);
    }
  }

  return styles;
}

function addStylesToDom(styles, options) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i];
    var domStyle = stylesInDom[item.id];
    var j = 0;

    if (domStyle) {
      domStyle.refs++;

      for (; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j]);
      }

      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j], options));
      }
    } else {
      var parts = [];

      for (; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j], options));
      }

      stylesInDom[item.id] = {
        id: item.id,
        refs: 1,
        parts: parts
      };
    }
  }
}

function insertStyleElement(options) {
  var style = document.createElement('style');

  if (typeof options.attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      options.attributes.nonce = nonce;
    }
  }

  Object.keys(options.attributes).forEach(function (key) {
    style.setAttribute(key, options.attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  var styles = listToStyles(list, options);
  addStylesToDom(styles, options);
  return function update(newList) {
    var mayRemove = [];

    for (var i = 0; i < styles.length; i++) {
      var item = styles[i];
      var domStyle = stylesInDom[item.id];

      if (domStyle) {
        domStyle.refs--;
        mayRemove.push(domStyle);
      }
    }

    if (newList) {
      var newStyles = listToStyles(newList, options);
      addStylesToDom(newStyles, options);
    }

    for (var _i = 0; _i < mayRemove.length; _i++) {
      var _domStyle = mayRemove[_i];

      if (_domStyle.refs === 0) {
        for (var j = 0; j < _domStyle.parts.length; j++) {
          _domStyle.parts[j]();
        }

        delete stylesInDom[_domStyle.id];
      }
    }
  };
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../node_modules/postcss-loader/src??embedded!./styles.css */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ 2:
/*!******************************!*\
  !*** multi ./src/styles.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\ahmed\Desktop\Code\ECommerceApp\Presentation\Client\src\styles.css */"./src/styles.css");


/***/ })

},[[2,"runtime"]]]);
//# sourceMappingURL=styles.js.map