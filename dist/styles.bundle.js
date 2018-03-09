webpackJsonp(["styles"],{

/***/ "./node_modules/raw-loader/index.js!./node_modules/postcss-loader/lib/index.js??embedded!./src/styles.css":
/***/ (function(module, exports) {

module.exports = "html {\n    position: relative;\n    min-height: 100%;\n  }\n  \n  body {\n    overflow-x: hidden;\n  }\n  \n  div.sticky-footer {\n    margin-bottom: 56px;\n  }\n  \n  div.sticky-footer .content-wrapper {\n    min-height: calc(100vh - 56px - 56px);\n  }\n  \n  div.fixed-nav {\n    padding-top: 56px;\n  }\n  \n  .content-wrapper {\n    min-height: calc(100vh - 56px);\n    padding-top: 1rem;\n  }\n  \n  .scroll-to-top {\n    position: fixed;\n    right: 15px;\n    bottom: 3px;\n    display: none;\n    width: 50px;\n    height: 50px;\n    text-align: center;\n    color: white;\n    background: rgba(52, 58, 64, 0.5);\n    line-height: 45px;\n  }\n  \n  .scroll-to-top:focus, .scroll-to-top:hover {\n    color: white;\n  }\n  \n  .scroll-to-top:hover {\n    background: #343a40;\n  }\n  \n  .scroll-to-top i {\n    font-weight: 800;\n  }\n  \n  .smaller {\n    font-size: 0.7rem;\n  }\n  \n  .o-hidden {\n    overflow: hidden !important;\n  }\n  \n  .z-0 {\n    z-index: 0;\n  }\n  \n  .z-1 {\n    z-index: 1;\n  }\n  \n  #mainNav .navbar-collapse {\n    overflow: auto;\n    max-height: 75vh;\n  }\n  \n  #mainNav .navbar-collapse .navbar-nav .nav-item .nav-link {\n    cursor: pointer;\n  }\n  \n  #mainNav .navbar-collapse .navbar-sidenav .nav-link-collapse:after {\n    float: right;\n    content: '\\f107';\n    font-family: 'FontAwesome';\n  }\n  \n  #mainNav .navbar-collapse .navbar-sidenav .nav-link-collapse.collapsed:after {\n    content: '\\f105';\n  }\n  \n  #mainNav .navbar-collapse .navbar-sidenav .sidenav-second-level,\n  #mainNav .navbar-collapse .navbar-sidenav .sidenav-third-level {\n    padding-left: 0;\n  }\n  \n  #mainNav .navbar-collapse .navbar-sidenav .sidenav-second-level > li > a,\n  #mainNav .navbar-collapse .navbar-sidenav .sidenav-third-level > li > a {\n    display: block;\n    padding: 0.5em 0;\n  }\n  \n  #mainNav .navbar-collapse .navbar-sidenav .sidenav-second-level > li > a:focus, #mainNav .navbar-collapse .navbar-sidenav .sidenav-second-level > li > a:hover,\n  #mainNav .navbar-collapse .navbar-sidenav .sidenav-third-level > li > a:focus,\n  #mainNav .navbar-collapse .navbar-sidenav .sidenav-third-level > li > a:hover {\n    text-decoration: none;\n  }\n  \n  #mainNav .navbar-collapse .navbar-sidenav .sidenav-second-level > li > a {\n    padding-left: 1em;\n  }\n  \n  #mainNav .navbar-collapse .navbar-sidenav .sidenav-third-level > li > a {\n    padding-left: 2em;\n  }\n  \n  #mainNav .navbar-collapse .sidenav-toggler {\n    display: none;\n  }\n  \n  #mainNav .navbar-collapse .navbar-nav > .nav-item.dropdown > .nav-link {\n    position: relative;\n    min-width: 45px;\n  }\n  \n  #mainNav .navbar-collapse .navbar-nav > .nav-item.dropdown > .nav-link:after {\n    float: right;\n    width: auto;\n    content: '\\f105';\n    border: none;\n    font-family: 'FontAwesome';\n  }\n  \n  #mainNav .navbar-collapse .navbar-nav > .nav-item.dropdown > .nav-link .indicator {\n    position: absolute;\n    top: 5px;\n    left: 21px;\n    font-size: 10px;\n  }\n  \n  #mainNav .navbar-collapse .navbar-nav > .nav-item.dropdown.show > .nav-link:after {\n    content: '\\f107';\n  }\n  \n  #mainNav .navbar-collapse .navbar-nav > .nav-item.dropdown .dropdown-menu > .dropdown-item > .dropdown-message {\n    overflow: hidden;\n    max-width: none;\n    text-overflow: ellipsis;\n  }\n  \n  @media (min-width: 992px) {\n    #mainNav .navbar-brand {\n      width: 250px;\n    }\n    #mainNav .navbar-collapse {\n      overflow: visible;\n      max-height: none;\n    }\n    #mainNav .navbar-collapse .navbar-sidenav {\n      position: absolute;\n      top: 0;\n      left: 0;\n      -ms-flex-direction: column;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n              flex-direction: column;\n      margin-top: 56px;\n    }\n    #mainNav .navbar-collapse .navbar-sidenav > .nav-item {\n      width: 250px;\n      padding: 0;\n    }\n    #mainNav .navbar-collapse .navbar-sidenav > .nav-item > .nav-link {\n      padding: 1em;\n    }\n    #mainNav .navbar-collapse .navbar-sidenav > .nav-item .sidenav-second-level,\n    #mainNav .navbar-collapse .navbar-sidenav > .nav-item .sidenav-third-level {\n      padding-left: 0;\n      list-style: none;\n    }\n    #mainNav .navbar-collapse .navbar-sidenav > .nav-item .sidenav-second-level > li,\n    #mainNav .navbar-collapse .navbar-sidenav > .nav-item .sidenav-third-level > li {\n      width: 250px;\n    }\n    #mainNav .navbar-collapse .navbar-sidenav > .nav-item .sidenav-second-level > li > a,\n    #mainNav .navbar-collapse .navbar-sidenav > .nav-item .sidenav-third-level > li > a {\n      padding: 1em;\n    }\n    #mainNav .navbar-collapse .navbar-sidenav > .nav-item .sidenav-second-level > li > a {\n      padding-left: 2.75em;\n    }\n    #mainNav .navbar-collapse .navbar-sidenav > .nav-item .sidenav-third-level > li > a {\n      padding-left: 3.75em;\n    }\n    #mainNav .navbar-collapse .navbar-nav > .nav-item.dropdown > .nav-link {\n      min-width: 0;\n    }\n    #mainNav .navbar-collapse .navbar-nav > .nav-item.dropdown > .nav-link:after {\n      width: 24px;\n      text-align: center;\n    }\n    #mainNav .navbar-collapse .navbar-nav > .nav-item.dropdown .dropdown-menu > .dropdown-item > .dropdown-message {\n      max-width: 300px;\n    }\n  }\n  \n  #mainNav.fixed-top .sidenav-toggler {\n    display: none;\n  }\n  \n  @media (min-width: 992px) {\n    #mainNav.fixed-top .navbar-sidenav {\n      height: calc(100vh - 112px);\n    }\n    #mainNav.fixed-top .sidenav-toggler {\n      position: absolute;\n      top: 0;\n      left: 0;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -ms-flex-direction: column;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n              flex-direction: column;\n      margin-top: calc(100vh - 56px);\n    }\n    #mainNav.fixed-top .sidenav-toggler > .nav-item {\n      width: 250px;\n      padding: 0;\n    }\n    #mainNav.fixed-top .sidenav-toggler > .nav-item > .nav-link {\n      padding: 1em;\n    }\n  }\n  \n  #mainNav.fixed-top.navbar-dark .sidenav-toggler {\n    background-color: #212529;\n  }\n  \n  #mainNav.fixed-top.navbar-dark .sidenav-toggler a i {\n    color: #adb5bd;\n  }\n  \n  #mainNav.fixed-top.navbar-light .sidenav-toggler {\n    background-color: #dee2e6;\n  }\n  \n  #mainNav.fixed-top.navbar-light .sidenav-toggler a i {\n    color: rgba(0, 0, 0, 0.5);\n  }\n  \n  body.sidenav-toggled #mainNav.fixed-top .sidenav-toggler {\n    overflow-x: hidden;\n    width: 55px;\n  }\n  \n  body.sidenav-toggled #mainNav.fixed-top .sidenav-toggler .nav-item,\n  body.sidenav-toggled #mainNav.fixed-top .sidenav-toggler .nav-link {\n    width: 55px !important;\n  }\n  \n  body.sidenav-toggled #mainNav.fixed-top #sidenavToggler i {\n    -webkit-transform: scaleX(-1);\n    transform: scaleX(-1);\n    -webkit-filter: FlipH;\n            filter: FlipH;\n    -ms-filter: 'FlipH';\n  }\n  \n  #mainNav.static-top .sidenav-toggler {\n    display: none;\n  }\n  \n  @media (min-width: 992px) {\n    #mainNav.static-top .sidenav-toggler {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n    }\n  }\n  \n  body.sidenav-toggled #mainNav.static-top #sidenavToggler i {\n    -webkit-transform: scaleX(-1);\n    transform: scaleX(-1);\n    -webkit-filter: FlipH;\n            filter: FlipH;\n    -ms-filter: 'FlipH';\n  }\n  \n  .content-wrapper {\n    overflow-x: hidden;\n    background: white;\n  }\n  \n  @media (min-width: 992px) {\n    .content-wrapper {\n      margin-left: 250px;\n    }\n  }\n  \n  #sidenavToggler i {\n    font-weight: 800;\n  }\n  \n  .navbar-sidenav-tooltip.show {\n    display: none;\n  }\n  \n  @media (min-width: 992px) {\n    body.sidenav-toggled .content-wrapper {\n      margin-left: 55px;\n    }\n  }\n  \n  body.sidenav-toggled .navbar-sidenav {\n    width: 55px;\n  }\n  \n  body.sidenav-toggled .navbar-sidenav .nav-link-text {\n    display: none;\n  }\n  \n  body.sidenav-toggled .navbar-sidenav .nav-item,\n  body.sidenav-toggled .navbar-sidenav .nav-link {\n    width: 55px !important;\n  }\n  \n  body.sidenav-toggled .navbar-sidenav .nav-item:after,\n  body.sidenav-toggled .navbar-sidenav .nav-link:after {\n    display: none;\n  }\n  \n  body.sidenav-toggled .navbar-sidenav .nav-item {\n    white-space: nowrap;\n  }\n  \n  body.sidenav-toggled .navbar-sidenav-tooltip.show {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n  }\n  \n  #mainNav.navbar-dark .navbar-collapse .navbar-sidenav .nav-link-collapse:after {\n    color: #868e96;\n  }\n  \n  #mainNav.navbar-dark .navbar-collapse .navbar-sidenav > .nav-item > .nav-link {\n    color: #868e96;\n  }\n  \n  #mainNav.navbar-dark .navbar-collapse .navbar-sidenav > .nav-item > .nav-link:hover {\n    color: #adb5bd;\n  }\n  \n  #mainNav.navbar-dark .navbar-collapse .navbar-sidenav > .nav-item .sidenav-second-level > li > a,\n  #mainNav.navbar-dark .navbar-collapse .navbar-sidenav > .nav-item .sidenav-third-level > li > a {\n    color: #868e96;\n  }\n  \n  #mainNav.navbar-dark .navbar-collapse .navbar-sidenav > .nav-item .sidenav-second-level > li > a:focus, #mainNav.navbar-dark .navbar-collapse .navbar-sidenav > .nav-item .sidenav-second-level > li > a:hover,\n  #mainNav.navbar-dark .navbar-collapse .navbar-sidenav > .nav-item .sidenav-third-level > li > a:focus,\n  #mainNav.navbar-dark .navbar-collapse .navbar-sidenav > .nav-item .sidenav-third-level > li > a:hover {\n    color: #adb5bd;\n  }\n  \n  #mainNav.navbar-dark .navbar-collapse .navbar-nav > .nav-item.dropdown > .nav-link:after {\n    color: #adb5bd;\n  }\n  \n  @media (min-width: 992px) {\n    #mainNav.navbar-dark .navbar-collapse .navbar-sidenav {\n      background: #343a40;\n    }\n    #mainNav.navbar-dark .navbar-collapse .navbar-sidenav li.active a {\n      color: white !important;\n      background-color: #495057;\n    }\n    #mainNav.navbar-dark .navbar-collapse .navbar-sidenav li.active a:focus, #mainNav.navbar-dark .navbar-collapse .navbar-sidenav li.active a:hover {\n      color: white;\n    }\n    #mainNav.navbar-dark .navbar-collapse .navbar-sidenav > .nav-item .sidenav-second-level,\n    #mainNav.navbar-dark .navbar-collapse .navbar-sidenav > .nav-item .sidenav-third-level {\n      background: #343a40;\n    }\n  }\n  \n  #mainNav.navbar-light .navbar-collapse .navbar-sidenav .nav-link-collapse:after {\n    color: rgba(0, 0, 0, 0.5);\n  }\n  \n  #mainNav.navbar-light .navbar-collapse .navbar-sidenav > .nav-item > .nav-link {\n    color: rgba(0, 0, 0, 0.5);\n  }\n  \n  #mainNav.navbar-light .navbar-collapse .navbar-sidenav > .nav-item > .nav-link:hover {\n    color: rgba(0, 0, 0, 0.7);\n  }\n  \n  #mainNav.navbar-light .navbar-collapse .navbar-sidenav > .nav-item .sidenav-second-level > li > a,\n  #mainNav.navbar-light .navbar-collapse .navbar-sidenav > .nav-item .sidenav-third-level > li > a {\n    color: rgba(0, 0, 0, 0.5);\n  }\n  \n  #mainNav.navbar-light .navbar-collapse .navbar-sidenav > .nav-item .sidenav-second-level > li > a:focus, #mainNav.navbar-light .navbar-collapse .navbar-sidenav > .nav-item .sidenav-second-level > li > a:hover,\n  #mainNav.navbar-light .navbar-collapse .navbar-sidenav > .nav-item .sidenav-third-level > li > a:focus,\n  #mainNav.navbar-light .navbar-collapse .navbar-sidenav > .nav-item .sidenav-third-level > li > a:hover {\n    color: rgba(0, 0, 0, 0.7);\n  }\n  \n  #mainNav.navbar-light .navbar-collapse .navbar-nav > .nav-item.dropdown > .nav-link:after {\n    color: rgba(0, 0, 0, 0.5);\n  }\n  \n  @media (min-width: 992px) {\n    #mainNav.navbar-light .navbar-collapse .navbar-sidenav {\n      background: #f8f9fa;\n    }\n    #mainNav.navbar-light .navbar-collapse .navbar-sidenav li.active a {\n      color: #000 !important;\n      background-color: #e9ecef;\n    }\n    #mainNav.navbar-light .navbar-collapse .navbar-sidenav li.active a:focus, #mainNav.navbar-light .navbar-collapse .navbar-sidenav li.active a:hover {\n      color: #000;\n    }\n    #mainNav.navbar-light .navbar-collapse .navbar-sidenav > .nav-item .sidenav-second-level,\n    #mainNav.navbar-light .navbar-collapse .navbar-sidenav > .nav-item .sidenav-third-level {\n      background: #f8f9fa;\n    }\n  }\n  \n  .card-body-icon {\n    position: absolute;\n    z-index: 0;\n    top: -25px;\n    right: -25px;\n    font-size: 5rem;\n    -webkit-transform: rotate(15deg);\n    transform: rotate(15deg);\n  }\n  \n  @media (min-width: 576px) {\n    .card-columns {\n      -webkit-column-count: 1;\n              column-count: 1;\n    }\n  }\n  \n  @media (min-width: 768px) {\n    .card-columns {\n      -webkit-column-count: 2;\n              column-count: 2;\n    }\n  }\n  \n  @media (min-width: 1200px) {\n    .card-columns {\n      -webkit-column-count: 2;\n              column-count: 2;\n    }\n  }\n  \n  .card-login {\n    max-width: 25rem;\n  }\n  \n  .card-register {\n    max-width: 40rem;\n  }\n  \n  footer.sticky-footer {\n    position: absolute;\n    right: 0;\n    bottom: 0;\n    width: 100%;\n    height: 56px;\n    background-color: #e9ecef;\n    line-height: 55px;\n  }\n  \n  @media (min-width: 992px) {\n    footer.sticky-footer {\n      width: calc(100% - 250px);\n    }\n  }\n  \n  @media (min-width: 992px) {\n    body.sidenav-toggled footer.sticky-footer {\n      width: calc(100% - 55px);\n    }\n  }"

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			var styleTarget = fn.call(this, selector);
			// Special case to return head of iframe instead of iframe itself
			if (styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[selector] = styleTarget;
		}
		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__("./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/styles.css":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/raw-loader/index.js!./node_modules/postcss-loader/lib/index.js??embedded!./src/styles.css");
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__("./node_modules/style-loader/lib/addStyles.js")(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/raw-loader/index.js!../node_modules/postcss-loader/lib/index.js??embedded!./styles.css", function() {
			var newContent = require("!!../node_modules/raw-loader/index.js!../node_modules/postcss-loader/lib/index.js??embedded!./styles.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/styles.css");


/***/ })

},[2]);
//# sourceMappingURL=styles.bundle.js.map