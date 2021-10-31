module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/constants":
/*!*********************************************************!*\
  !*** external "next/dist/next-server/lib/constants.js" ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/constants.js");

/***/ }),

/***/ "../next-server/lib/document-context":
/*!****************************************************************!*\
  !*** external "next/dist/next-server/lib/document-context.js" ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/document-context.js");

/***/ }),

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "../next-server/server/utils":
/*!********************************************************!*\
  !*** external "next/dist/next-server/server/utils.js" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/server/utils.js");

/***/ }),

/***/ "./images/favicon.png":
/*!****************************!*\
  !*** ./images/favicon.png ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAIAAAF0mx+sAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjAxQ0ExMjM1NjlDNjExRUFBMjcxOTI3N0IxQTNDMjMwIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjAxQ0ExMjM2NjlDNjExRUFBMjcxOTI3N0IxQTNDMjMwIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MDFDQTEyMzM2OUM2MTFFQUEyNzE5Mjc3QjFBM0MyMzAiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MDFDQTEyMzQ2OUM2MTFFQUEyNzE5Mjc3QjFBM0MyMzAiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7YAvMuAAADnUlEQVR42mL8at/KgASYgJhjUiyTniwQgQSA8v+RABNE2TeHNiACMlggfK4DVRAGQAAxYjGP2UIZaBjnmlyoevaOcBR5dPXIACCA0M1DA+jWIwOgAxGm/axeA2H8PXUPi2XsrSEguQsPmc2U0A2HeBQTAAQQAacxMeAFTHCXQ8IahFTF4R4B2c25Ng8SGygaWZkZfv8F6/7zj7DdcMcj+4IFWe3/Z+9/Lz/B7KSFRRronP8vPrIVeTIwMmDXzSjBjyVKvodPweU0gAAiEGr4AQsaH2u8w8GvaXv/rDqJRTOLqw5btd/vGft+rziBSzPQaLYsZ3ioITSzpjiAyAwnICLgXHBUYU8KPytWoqWrv8fvYE1pWDQz26qjifxefpyoAAMJeRuwuOshW8WkJoE1IFlwRAIT/mBHd/b/n7+Jjd+//9Bt/hE3k9REAhBAFKUwJgYKAEWaUUKb2VoNUiThAmhJBUUzUOf/rz9/5i5m4GHHCBxGjokxHHNTfiTPwZ7fQbnXuxdnlureylbqzRJi+mfNaXKyJChTxFjDNZMeYP//0yyqgEH6Z+tFNJGfpSuIjmdGTIWMxGr+sxy9JGLSliZKM2uM1b/Hb3/WrQWFzvuvkITBGmdDVH4GFmb/rj37e+gmPD1xbishtiQBJbW+KCD57+IjRiEeRlkhYsttFC/pyw2qLPn3HxZn42oD0MrZAAFGURk2YEUY1Yo/LAk12Z411prh15//uFs96GEIzH0crH/Wn/01cSc5Qc0owsOxII2Rh4MSb/1ImP3vwWsSfMxW4M4SYAxvJPw9cZe0+NOU4pieAGo2Lkj9u/fqz+aNRPmYY3E6k6wwNAMArWRkYOTlYPj3n+j0yvj/+y+Gn3+ATX0GZlAa+v/6M6gRiGoCFh8zsrEiKj2gZiokJCaQC/79HQqpGlr2b7kAbPwxMDOyhpkz6chgVfPv/uvfi4+CQthUEZ4+KLX478m7f4/eAoe8Ci6L/7/69HffNbDqv8RYTFRQM4rywk3HpebfgzewJgU71Uou1mgrBjZQ2PxecPj3nANY4mLVyd/T90IVx9tQLY4ZhXm4dpX9yFv879Lj30uOARGwccAoIQAk/z//AK90gHUo55wUBnYWqlkMzd/gTuTfgzeA/gYmJWCfD2qfOD9roh2Lhy71UzVKc9ZeA4iGcO3EhL2goS5gZCQqqH/PO8ia5cLw+QfDn7+UWgksKfk4/wA7j7//jvgWCAD8HkbmGeYQvgAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./node_modules/next/dist/pages/_document.js":
/*!***************************************************!*\
  !*** ./node_modules/next/dist/pages/_document.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.middleware = middleware;
exports.NextScript = exports.Main = exports.Head = exports.Html = exports.default = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _server = _interopRequireDefault(__webpack_require__(/*! styled-jsx/server */ "styled-jsx/server"));

var _constants = __webpack_require__(/*! ../next-server/lib/constants */ "../next-server/lib/constants");

var _documentContext = __webpack_require__(/*! ../next-server/lib/document-context */ "../next-server/lib/document-context");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "../next-server/lib/utils");

exports.DocumentContext = _utils.DocumentContext;
exports.DocumentInitialProps = _utils.DocumentInitialProps;
exports.DocumentProps = _utils.DocumentProps;

var _utils2 = __webpack_require__(/*! ../next-server/server/utils */ "../next-server/server/utils");

var _htmlescape = __webpack_require__(/*! ../server/htmlescape */ "./node_modules/next/dist/server/htmlescape.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

async function middleware({
  req,
  res
}) {}

function dedupe(bundles) {
  const files = new Set();
  const kept = [];

  for (const bundle of bundles) {
    if (files.has(bundle.file)) continue;
    files.add(bundle.file);
    kept.push(bundle);
  }

  return kept;
}

function getOptionalModernScriptVariant(path) {
  if (false) {}

  return path;
}
/**
* `Document` component handles the initial `document` markup and renders only on the server side.
* Commonly used for implementing server side rendering for `css-in-js` libraries.
*/


class Document extends _react.Component {
  /**
  * `getInitialProps` hook returns the context object with the addition of `renderPage`.
  * `renderPage` callback executes `React` rendering logic synchronously to support server-rendering wrappers
  */
  static async getInitialProps(ctx) {
    const enhancers =  false ? undefined : [];

    const enhanceApp = App => {
      for (const enhancer of enhancers) {
        App = enhancer(App);
      }

      return props => /*#__PURE__*/_react.default.createElement(App, props);
    };

    const {
      html,
      head
    } = await ctx.renderPage({
      enhanceApp
    });
    const styles = [...(0, _server.default)(), ...( false ? undefined : [])];
    return {
      html,
      head,
      styles
    };
  }

  static renderDocument(Document, props) {
    return /*#__PURE__*/_react.default.createElement(_documentContext.DocumentContext.Provider, {
      value: {
        _documentProps: props,
        // In dev we invalidate the cache by appending a timestamp to the resource URL.
        // This is a workaround to fix https://github.com/vercel/next.js/issues/5860
        // TODO: remove this workaround when https://bugs.webkit.org/show_bug.cgi?id=187726 is fixed.
        _devOnlyInvalidateCacheQueryString: true ? '?ts=' + Date.now() : undefined
      }
    }, /*#__PURE__*/_react.default.createElement(Document, props));
  }

  render() {
    return /*#__PURE__*/_react.default.createElement(Html, null, /*#__PURE__*/_react.default.createElement(Head, null), /*#__PURE__*/_react.default.createElement("body", null, /*#__PURE__*/_react.default.createElement(Main, null), /*#__PURE__*/_react.default.createElement(NextScript, null)));
  }

}

exports.default = Document;
Document.headTagsMiddleware =  false ? undefined : () => [];
Document.bodyTagsMiddleware =  false ? undefined : () => [];
Document.htmlPropsMiddleware =  false ? undefined : () => [];

class Html extends _react.Component {
  constructor(...args) {
    super(...args);
    this.context = void 0;
  }

  render() {
    const {
      inAmpMode,
      htmlProps
    } = this.context._documentProps;
    return /*#__PURE__*/_react.default.createElement("html", Object.assign({}, htmlProps, this.props, {
      amp: inAmpMode ? '' : undefined,
      "data-ampdevmode": inAmpMode && true ? '' : undefined
    }));
  }

}

exports.Html = Html;
Html.contextType = _documentContext.DocumentContext;
Html.propTypes = {
  children: _propTypes.default.node.isRequired
};

class Head extends _react.Component {
  constructor(...args) {
    super(...args);
    this.context = void 0;
  }

  getCssLinks() {
    const {
      assetPrefix,
      files
    } = this.context._documentProps;
    const {
      _devOnlyInvalidateCacheQueryString
    } = this.context;
    const cssFiles = files && files.length ? files.filter(f => /\.css$/.test(f)) : [];
    const cssLinkElements = [];
    cssFiles.forEach(file => {
      cssLinkElements.push( /*#__PURE__*/_react.default.createElement("link", {
        key: `${file}-preload`,
        nonce: this.props.nonce,
        rel: "preload",
        href: `${assetPrefix}/_next/${encodeURI(file)}${_devOnlyInvalidateCacheQueryString}`,
        as: "style",
        crossOrigin: this.props.crossOrigin || undefined
      }), /*#__PURE__*/_react.default.createElement("link", {
        key: file,
        nonce: this.props.nonce,
        rel: "stylesheet",
        href: `${assetPrefix}/_next/${encodeURI(file)}${_devOnlyInvalidateCacheQueryString}`,
        crossOrigin: this.props.crossOrigin || undefined
      }));
    });
    return cssLinkElements.length === 0 ? null : cssLinkElements;
  }

  getPreloadDynamicChunks() {
    const {
      dynamicImports,
      assetPrefix
    } = this.context._documentProps;
    const {
      _devOnlyInvalidateCacheQueryString
    } = this.context;
    return dedupe(dynamicImports).map(bundle => {
      // `dynamicImports` will contain both `.js` and `.module.js` when the
      // feature is enabled. This clause will filter down to the modern
      // variants only.
      if (!bundle.file.endsWith(getOptionalModernScriptVariant('.js'))) {
        return null;
      }

      return /*#__PURE__*/_react.default.createElement("link", {
        rel: "preload",
        key: bundle.file,
        href: `${assetPrefix}/_next/${encodeURI(bundle.file)}${_devOnlyInvalidateCacheQueryString}`,
        as: "script",
        nonce: this.props.nonce,
        crossOrigin: this.props.crossOrigin || undefined
      });
    }) // Filter out nulled scripts
    .filter(Boolean);
  }

  getPreloadMainLinks() {
    const {
      assetPrefix,
      files
    } = this.context._documentProps;
    const {
      _devOnlyInvalidateCacheQueryString
    } = this.context;
    const preloadFiles = files && files.length ? files.filter(file => {
      // `dynamicImports` will contain both `.js` and `.module.js` when
      // the feature is enabled. This clause will filter down to the
      // modern variants only.
      return file.endsWith(getOptionalModernScriptVariant('.js'));
    }) : [];
    return !preloadFiles.length ? null : preloadFiles.map(file => /*#__PURE__*/_react.default.createElement("link", {
      key: file,
      nonce: this.props.nonce,
      rel: "preload",
      href: `${assetPrefix}/_next/${encodeURI(file)}${_devOnlyInvalidateCacheQueryString}`,
      as: "script",
      crossOrigin: this.props.crossOrigin || undefined
    }));
  }

  render() {
    const {
      styles,
      ampPath,
      inAmpMode,
      assetPrefix,
      hybridAmp,
      canonicalBase,
      __NEXT_DATA__,
      dangerousAsPath,
      headTags,
      unstable_runtimeJS
    } = this.context._documentProps;
    const disableRuntimeJS = unstable_runtimeJS === false;
    const {
      _devOnlyInvalidateCacheQueryString
    } = this.context;
    const {
      page,
      buildId
    } = __NEXT_DATA__;
    let {
      head
    } = this.context._documentProps;
    let children = this.props.children; // show a warning if Head contains <title> (only in development)

    if (true) {
      children = _react.default.Children.map(children, child => {
        var _child$props;

        const isReactHelmet = child === null || child === void 0 ? void 0 : (_child$props = child.props) === null || _child$props === void 0 ? void 0 : _child$props['data-react-helmet'];

        if ((child === null || child === void 0 ? void 0 : child.type) === 'title' && !isReactHelmet) {
          console.warn("Warning: <title> should not be used in _document.js's <Head>. https://err.sh/next.js/no-document-title");
        }

        return child;
      });
      if (this.props.crossOrigin) console.warn('Warning: `Head` attribute `crossOrigin` is deprecated. https://err.sh/next.js/doc-crossorigin-deprecated');
    }

    let hasAmphtmlRel = false;
    let hasCanonicalRel = false; // show warning and remove conflicting amp head tags

    head = _react.default.Children.map(head || [], child => {
      if (!child) return child;
      const {
        type,
        props
      } = child;

      if (inAmpMode) {
        let badProp = '';

        if (type === 'meta' && props.name === 'viewport') {
          badProp = 'name="viewport"';
        } else if (type === 'link' && props.rel === 'canonical') {
          hasCanonicalRel = true;
        } else if (type === 'script') {
          // only block if
          // 1. it has a src and isn't pointing to ampproject's CDN
          // 2. it is using dangerouslySetInnerHTML without a type or
          // a type of text/javascript
          if (props.src && props.src.indexOf('ampproject') < -1 || props.dangerouslySetInnerHTML && (!props.type || props.type === 'text/javascript')) {
            badProp = '<script';
            Object.keys(props).forEach(prop => {
              badProp += ` ${prop}="${props[prop]}"`;
            });
            badProp += '/>';
          }
        }

        if (badProp) {
          console.warn(`Found conflicting amp tag "${child.type}" with conflicting prop ${badProp} in ${__NEXT_DATA__.page}. https://err.sh/next.js/conflicting-amp-tag`);
          return null;
        }
      } else {
        // non-amp mode
        if (type === 'link' && props.rel === 'amphtml') {
          hasAmphtmlRel = true;
        }
      }

      return child;
    }); // try to parse styles from fragment for backwards compat

    const curStyles = Array.isArray(styles) ? styles : [];

    if (inAmpMode && styles && // @ts-ignore Property 'props' does not exist on type ReactElement
    styles.props && // @ts-ignore Property 'props' does not exist on type ReactElement
    Array.isArray(styles.props.children)) {
      const hasStyles = el => {
        var _el$props, _el$props$dangerously;

        return el === null || el === void 0 ? void 0 : (_el$props = el.props) === null || _el$props === void 0 ? void 0 : (_el$props$dangerously = _el$props.dangerouslySetInnerHTML) === null || _el$props$dangerously === void 0 ? void 0 : _el$props$dangerously.__html;
      }; // @ts-ignore Property 'props' does not exist on type ReactElement


      styles.props.children.forEach(child => {
        if (Array.isArray(child)) {
          child.forEach(el => hasStyles(el) && curStyles.push(el));
        } else if (hasStyles(child)) {
          curStyles.push(child);
        }
      });
    }

    return /*#__PURE__*/_react.default.createElement("head", this.props, this.context._documentProps.isDevelopment && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("style", {
      "data-next-hide-fouc": true,
      "data-ampdevmode": inAmpMode ? 'true' : undefined,
      dangerouslySetInnerHTML: {
        __html: `body{display:none}`
      }
    }), /*#__PURE__*/_react.default.createElement("noscript", {
      "data-next-hide-fouc": true,
      "data-ampdevmode": inAmpMode ? 'true' : undefined
    }, /*#__PURE__*/_react.default.createElement("style", {
      dangerouslySetInnerHTML: {
        __html: `body{display:block}`
      }
    }))), children, head, /*#__PURE__*/_react.default.createElement("meta", {
      name: "next-head-count",
      content: _react.default.Children.count(head || []).toString()
    }), inAmpMode && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("meta", {
      name: "viewport",
      content: "width=device-width,minimum-scale=1,initial-scale=1"
    }), !hasCanonicalRel && /*#__PURE__*/_react.default.createElement("link", {
      rel: "canonical",
      href: canonicalBase + (0, _utils2.cleanAmpPath)(dangerousAsPath)
    }), /*#__PURE__*/_react.default.createElement("link", {
      rel: "preload",
      as: "script",
      href: "https://cdn.ampproject.org/v0.js"
    }), styles && /*#__PURE__*/_react.default.createElement("style", {
      "amp-custom": "",
      dangerouslySetInnerHTML: {
        __html: curStyles.map(style => style.props.dangerouslySetInnerHTML.__html).join('').replace(/\/\*# sourceMappingURL=.*\*\//g, '').replace(/\/\*@ sourceURL=.*?\*\//g, '')
      }
    }), /*#__PURE__*/_react.default.createElement("style", {
      "amp-boilerplate": "",
      dangerouslySetInnerHTML: {
        __html: `body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}`
      }
    }), /*#__PURE__*/_react.default.createElement("noscript", null, /*#__PURE__*/_react.default.createElement("style", {
      "amp-boilerplate": "",
      dangerouslySetInnerHTML: {
        __html: `body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}`
      }
    })), /*#__PURE__*/_react.default.createElement("script", {
      async: true,
      src: "https://cdn.ampproject.org/v0.js"
    })), !inAmpMode && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !hasAmphtmlRel && hybridAmp && /*#__PURE__*/_react.default.createElement("link", {
      rel: "amphtml",
      href: canonicalBase + getAmpPath(ampPath, dangerousAsPath)
    }), this.getCssLinks(), !disableRuntimeJS && /*#__PURE__*/_react.default.createElement("link", {
      rel: "preload",
      href: assetPrefix + getOptionalModernScriptVariant(encodeURI(`/_next/static/${buildId}/pages/_app.js`)) + _devOnlyInvalidateCacheQueryString,
      as: "script",
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined
    }), !disableRuntimeJS && page !== '/_error' && /*#__PURE__*/_react.default.createElement("link", {
      rel: "preload",
      href: assetPrefix + getOptionalModernScriptVariant(encodeURI(`/_next/static/${buildId}/pages${getPageFile(page)}`)) + _devOnlyInvalidateCacheQueryString,
      as: "script",
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined
    }), !disableRuntimeJS && this.getPreloadDynamicChunks(), !disableRuntimeJS && this.getPreloadMainLinks(), this.context._documentProps.isDevelopment &&
    /*#__PURE__*/
    // this element is used to mount development styles so the
    // ordering matches production
    // (by default, style-loader injects at the bottom of <head />)
    _react.default.createElement("noscript", {
      id: "__next_css__DO_NOT_USE__"
    }), styles || null), _react.default.createElement(_react.default.Fragment, {}, ...(headTags || [])));
  }

}

exports.Head = Head;
Head.contextType = _documentContext.DocumentContext;
Head.propTypes = {
  nonce: _propTypes.default.string,
  crossOrigin: _propTypes.default.string
};

class Main extends _react.Component {
  constructor(...args) {
    super(...args);
    this.context = void 0;
  }

  render() {
    const {
      inAmpMode,
      html
    } = this.context._documentProps;
    if (inAmpMode) return _constants.AMP_RENDER_TARGET;
    return /*#__PURE__*/_react.default.createElement("div", {
      id: "__next",
      dangerouslySetInnerHTML: {
        __html: html
      }
    });
  }

}

exports.Main = Main;
Main.contextType = _documentContext.DocumentContext;

class NextScript extends _react.Component {
  constructor(...args) {
    super(...args);
    this.context = void 0;
  }

  getDynamicChunks() {
    const {
      dynamicImports,
      assetPrefix,
      files
    } = this.context._documentProps;
    const {
      _devOnlyInvalidateCacheQueryString
    } = this.context;
    return dedupe(dynamicImports).map(bundle => {
      let modernProps = {};

      if (false) {}

      if (!/\.js$/.test(bundle.file) || files.includes(bundle.file)) return null;
      return /*#__PURE__*/_react.default.createElement("script", Object.assign({
        async: true,
        key: bundle.file,
        src: `${assetPrefix}/_next/${encodeURI(bundle.file)}${_devOnlyInvalidateCacheQueryString}`,
        nonce: this.props.nonce,
        crossOrigin: this.props.crossOrigin || undefined
      }, modernProps));
    });
  }

  getScripts() {
    const {
      assetPrefix,
      files,
      lowPriorityFiles
    } = this.context._documentProps;
    const {
      _devOnlyInvalidateCacheQueryString
    } = this.context;
    const normalScripts = files === null || files === void 0 ? void 0 : files.filter(file => file.endsWith('.js'));
    const lowPriorityScripts = lowPriorityFiles === null || lowPriorityFiles === void 0 ? void 0 : lowPriorityFiles.filter(file => file.endsWith('.js'));
    return [...normalScripts, ...lowPriorityScripts].map(file => {
      let modernProps = {};

      if (false) {}

      return /*#__PURE__*/_react.default.createElement("script", Object.assign({
        key: file,
        src: `${assetPrefix}/_next/${encodeURI(file)}${_devOnlyInvalidateCacheQueryString}`,
        nonce: this.props.nonce,
        async: true,
        crossOrigin: this.props.crossOrigin || undefined
      }, modernProps));
    });
  }

  getPolyfillScripts() {
    // polyfills.js has to be rendered as nomodule without async
    // It also has to be the first script to load
    const {
      assetPrefix,
      polyfillFiles
    } = this.context._documentProps;
    const {
      _devOnlyInvalidateCacheQueryString
    } = this.context;
    return polyfillFiles.filter(polyfill => polyfill.endsWith('.js') && !/\.module\.js$/.test(polyfill)).map(polyfill => /*#__PURE__*/_react.default.createElement("script", {
      key: polyfill,
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined,
      noModule: true,
      src: `${assetPrefix}/_next/${polyfill}${_devOnlyInvalidateCacheQueryString}`
    }));
  }

  static getInlineScriptSource(documentProps) {
    const {
      __NEXT_DATA__
    } = documentProps;

    try {
      const data = JSON.stringify(__NEXT_DATA__);
      return (0, _htmlescape.htmlEscapeJsonString)(data);
    } catch (err) {
      if (err.message.indexOf('circular structure')) {
        throw new Error(`Circular structure in "getInitialProps" result of page "${__NEXT_DATA__.page}". https://err.sh/vercel/next.js/circular-structure`);
      }

      throw err;
    }
  }

  render() {
    const {
      staticMarkup,
      assetPrefix,
      inAmpMode,
      devFiles,
      __NEXT_DATA__,
      bodyTags,
      unstable_runtimeJS
    } = this.context._documentProps;
    const disableRuntimeJS = unstable_runtimeJS === false;
    const {
      _devOnlyInvalidateCacheQueryString
    } = this.context;

    if (inAmpMode) {
      if (false) {}

      const devFiles = [_constants.CLIENT_STATIC_FILES_RUNTIME_REACT_REFRESH, _constants.CLIENT_STATIC_FILES_RUNTIME_AMP, _constants.CLIENT_STATIC_FILES_RUNTIME_WEBPACK];
      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, staticMarkup || disableRuntimeJS ? null : /*#__PURE__*/_react.default.createElement("script", {
        id: "__NEXT_DATA__",
        type: "application/json",
        nonce: this.props.nonce,
        crossOrigin: this.props.crossOrigin || undefined,
        dangerouslySetInnerHTML: {
          __html: NextScript.getInlineScriptSource(this.context._documentProps)
        },
        "data-ampdevmode": true
      }), devFiles ? devFiles.map(file => /*#__PURE__*/_react.default.createElement("script", {
        key: file,
        src: `${assetPrefix}/_next/${file}${_devOnlyInvalidateCacheQueryString}`,
        nonce: this.props.nonce,
        crossOrigin: this.props.crossOrigin || undefined,
        "data-ampdevmode": true
      })) : null, _react.default.createElement(_react.default.Fragment, {}, ...(bodyTags || [])));
    }

    const {
      page,
      buildId
    } = __NEXT_DATA__;

    if (true) {
      if (this.props.crossOrigin) console.warn('Warning: `NextScript` attribute `crossOrigin` is deprecated. https://err.sh/next.js/doc-crossorigin-deprecated');
    }

    const pageScript = [/*#__PURE__*/_react.default.createElement("script", Object.assign({
      async: true,
      "data-next-page": page,
      key: page,
      src: assetPrefix + encodeURI(`/_next/static/${buildId}/pages${getPageFile(page)}`) + _devOnlyInvalidateCacheQueryString,
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined
    },  false ? undefined : {})),  false && /*#__PURE__*/false];
    const appScript = [/*#__PURE__*/_react.default.createElement("script", Object.assign({
      async: true,
      "data-next-page": "/_app",
      src: assetPrefix + `/_next/static/${buildId}/pages/_app.js` + _devOnlyInvalidateCacheQueryString,
      key: "_app",
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined
    },  false ? undefined : {})),  false && /*#__PURE__*/false];
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !disableRuntimeJS && devFiles ? devFiles.map(file => !file.match(/\.js\.map/) && /*#__PURE__*/_react.default.createElement("script", {
      key: file,
      src: `${assetPrefix}/_next/${encodeURI(file)}${_devOnlyInvalidateCacheQueryString}`,
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined
    })) : null, staticMarkup || disableRuntimeJS ? null : /*#__PURE__*/_react.default.createElement("script", {
      id: "__NEXT_DATA__",
      type: "application/json",
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined,
      dangerouslySetInnerHTML: {
        __html: NextScript.getInlineScriptSource(this.context._documentProps)
      }
    }),  false ? /*#__PURE__*/undefined : null, !disableRuntimeJS && this.getPolyfillScripts(), !disableRuntimeJS && appScript, !disableRuntimeJS && page !== '/_error' && pageScript, disableRuntimeJS || staticMarkup ? null : this.getDynamicChunks(), disableRuntimeJS || staticMarkup ? null : this.getScripts(), _react.default.createElement(_react.default.Fragment, {}, ...(bodyTags || [])));
  }

}

exports.NextScript = NextScript;
NextScript.contextType = _documentContext.DocumentContext;
NextScript.propTypes = {
  nonce: _propTypes.default.string,
  crossOrigin: _propTypes.default.string
};
NextScript.safariNomoduleFix = '!function(){var e=document,t=e.createElement("script");if(!("noModule"in t)&&"onbeforeload"in t){var n=!1;e.addEventListener("beforeload",function(e){if(e.target===t)n=!0;else if(!e.target.hasAttribute("nomodule")||!n)return;e.preventDefault()},!0),t.type="module",t.src=".",e.head.appendChild(t),t.remove()}}();';

function getAmpPath(ampPath, asPath) {
  return ampPath || `${asPath}${asPath.includes('?') ? '&' : '?'}amp=1`;
}

function getPageFile(page, buildId) {
  const startingUrl = page === '/' ? '/index' : page;
  return buildId ? `${startingUrl}.${buildId}.js` : `${startingUrl}.js`;
}

/***/ }),

/***/ "./node_modules/next/dist/server/htmlescape.js":
/*!*****************************************************!*\
  !*** ./node_modules/next/dist/server/htmlescape.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.htmlEscapeJsonString=htmlEscapeJsonString;// This utility is based on https://github.com/zertosh/htmlescape
// License: https://github.com/zertosh/htmlescape/blob/0527ca7156a524d256101bb310a9f970f63078ad/LICENSE
const ESCAPE_LOOKUP={'&':'\\u0026','>':'\\u003e','<':'\\u003c','\u2028':'\\u2028','\u2029':'\\u2029'};const ESCAPE_REGEX=/[&><\u2028\u2029]/g;function htmlEscapeJsonString(str){return str.replace(ESCAPE_REGEX,match=>ESCAPE_LOOKUP[match]);}
//# sourceMappingURL=htmlescape.js.map

/***/ }),

/***/ "./node_modules/next/document.js":
/*!***************************************!*\
  !*** ./node_modules/next/document.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/pages/_document */ "./node_modules/next/dist/pages/_document.js")


/***/ }),

/***/ "./pages/_document.jsx":
/*!*****************************!*\
  !*** ./pages/_document.jsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/document */ "./node_modules/next/document.js");
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_document__WEBPACK_IMPORTED_MODULE_1__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


class MyDocument extends next_document__WEBPACK_IMPORTED_MODULE_1___default.a {
  render() {
    return __jsx(next_document__WEBPACK_IMPORTED_MODULE_1__["Html"], {
      lang: "zxx"
    }, __jsx(next_document__WEBPACK_IMPORTED_MODULE_1__["Head"], null, __jsx("meta", {
      name: "viewport",
      content: "width=device-width, initial-scale=1, shrink-to-fit=no"
    }), __jsx("link", {
      rel: "icon",
      type: "image/png",
      href: __webpack_require__(/*! ../images/favicon.png */ "./images/favicon.png")
    })), __jsx("body", null, __jsx(next_document__WEBPACK_IMPORTED_MODULE_1__["Main"], null), __jsx(next_document__WEBPACK_IMPORTED_MODULE_1__["NextScript"], null)));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (MyDocument);

/***/ }),

/***/ 1:
/*!**********************************************!*\
  !*** multi private-next-pages/_document.jsx ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_document.jsx */"./pages/_document.jsx");


/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/server":
/*!************************************!*\
  !*** external "styled-jsx/server" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/server");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9jb25zdGFudHMuanNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL2RvY3VtZW50LWNvbnRleHQuanNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLmpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci91dGlscy5qc1wiIiwid2VicGFjazovLy8uL2ltYWdlcy9mYXZpY29uLnBuZyIsIndlYnBhY2s6Ly8vLi4vLi4vcGFnZXMvX2RvY3VtZW50LnRzeCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L3NlcnZlci9odG1sZXNjYXBlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2RvY3VtZW50LmpzIiwid2VicGFjazovLy8uL3BhZ2VzL19kb2N1bWVudC5qc3giLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicHJvcC10eXBlc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3R5bGVkLWpzeC9zZXJ2ZXJcIiJdLCJuYW1lcyI6WyJmaWxlcyIsImtlcHQiLCJidW5kbGUiLCJwcm9jZXNzIiwiQ29tcG9uZW50IiwiZW5oYW5jZXJzIiwiZW5oYW5jZUFwcCIsIkFwcCIsImVuaGFuY2VyIiwicHJvcHMiLCJjdHgiLCJzdHlsZXMiLCJfZG9jdW1lbnRQcm9wcyIsIl9kZXZPbmx5SW52YWxpZGF0ZUNhY2hlUXVlcnlTdHJpbmciLCJEYXRlIiwicmVuZGVyIiwiRG9jdW1lbnQiLCJoZWFkVGFnc01pZGRsZXdhcmUiLCJib2R5VGFnc01pZGRsZXdhcmUiLCJodG1sUHJvcHNNaWRkbGV3YXJlIiwiaW5BbXBNb2RlIiwiSHRtbCIsImNvbnRleHRUeXBlIiwiRG9jdW1lbnRDb21wb25lbnRDb250ZXh0IiwicHJvcFR5cGVzIiwiY2hpbGRyZW4iLCJQcm9wVHlwZXMiLCJnZXRDc3NMaW5rcyIsImNzc0ZpbGVzIiwiZiIsImNzc0xpbmtFbGVtZW50cyIsImZpbGUiLCJhc3NldFByZWZpeCIsImVuY29kZVVSSSIsImdldFByZWxvYWREeW5hbWljQ2h1bmtzIiwiZ2V0T3B0aW9uYWxNb2Rlcm5TY3JpcHRWYXJpYW50IiwiZ2V0UHJlbG9hZE1haW5MaW5rcyIsInByZWxvYWRGaWxlcyIsImRpc2FibGVSdW50aW1lSlMiLCJ1bnN0YWJsZV9ydW50aW1lSlMiLCJSZWFjdCIsImNoaWxkIiwiaXNSZWFjdEhlbG1ldCIsImNvbnNvbGUiLCJoYXNBbXBodG1sUmVsIiwiaGFzQ2Fub25pY2FsUmVsIiwiaGVhZCIsImJhZFByb3AiLCJ0eXBlIiwiT2JqZWN0IiwicHJvcCIsIl9fTkVYVF9EQVRBX18iLCJwYWdlIiwiY3VyU3R5bGVzIiwiQXJyYXkiLCJoYXNTdHlsZXMiLCJlbCIsIl9faHRtbCIsImNhbm9uaWNhbEJhc2UiLCJzdHlsZSIsImdldEFtcFBhdGgiLCJidWlsZElkIiwiZ2V0UGFnZUZpbGUiLCJoZWFkVGFncyIsIkhlYWQiLCJub25jZSIsImNyb3NzT3JpZ2luIiwiQU1QX1JFTkRFUl9UQVJHRVQiLCJNYWluIiwiZ2V0RHluYW1pY0NodW5rcyIsImRlZHVwZSIsIm1vZGVyblByb3BzIiwiZ2V0U2NyaXB0cyIsIm5vcm1hbFNjcmlwdHMiLCJsb3dQcmlvcml0eVNjcmlwdHMiLCJsb3dQcmlvcml0eUZpbGVzIiwiZ2V0UG9seWZpbGxTY3JpcHRzIiwicG9seWZpbGxGaWxlcyIsInBvbHlmaWxsIiwiZGF0YSIsIkpTT04iLCJlcnIiLCJkZXZGaWxlcyIsIkNMSUVOVF9TVEFUSUNfRklMRVNfUlVOVElNRV9SRUFDVF9SRUZSRVNIIiwiQ0xJRU5UX1NUQVRJQ19GSUxFU19SVU5USU1FX0FNUCIsIkNMSUVOVF9TVEFUSUNfRklMRVNfUlVOVElNRV9XRUJQQUNLIiwic3RhdGljTWFya3VwIiwiTmV4dFNjcmlwdCIsImJvZHlUYWdzIiwicGFnZVNjcmlwdCIsImFwcFNjcmlwdCIsInNhZmFyaU5vbW9kdWxlRml4IiwiYW1wUGF0aCIsImFzUGF0aCIsInN0YXJ0aW5nVXJsIiwiTXlEb2N1bWVudCIsInJlcXVpcmUiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ3hGQSxtRTs7Ozs7Ozs7Ozs7QUNBQSwwRTs7Ozs7Ozs7Ozs7QUNBQSwrRDs7Ozs7Ozs7Ozs7QUNBQSxrRTs7Ozs7Ozs7Ozs7QUNBQSxpQ0FBaUMsNDVFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBakM7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBTUE7O0FBQ0E7Ozs7OztBQUtBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QixtQkFBTyxDQUFDLDJFQUF3Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBakQ7O0FBRUEsTUFBTUMsVUFBTixTQUF5Qi9FLG9EQUF6QixDQUFrQztBQUM5QkQsUUFBTSxHQUFHO0FBQ0wsV0FDSSxNQUFDLGtEQUFEO0FBQU0sVUFBSSxFQUFDO0FBQVgsT0FDSSxNQUFDLGtEQUFELFFBQ0k7QUFBTSxVQUFJLEVBQUMsVUFBWDtBQUFzQixhQUFPLEVBQUM7QUFBOUIsTUFESixFQUVJO0FBQU0sU0FBRyxFQUFDLE1BQVY7QUFBaUIsVUFBSSxFQUFDLFdBQXRCO0FBQWtDLFVBQUksRUFBRWlGLG1CQUFPLENBQUMsbURBQUQ7QUFBL0MsTUFGSixDQURKLEVBS0ksb0JBQ0ksTUFBQyxrREFBRCxPQURKLEVBRUksTUFBQyx3REFBRCxPQUZKLENBTEosQ0FESjtBQVlIOztBQWQ2Qjs7QUFpQm5CRCx5RUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25CQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSw4QyIsImZpbGUiOiJzdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcX2RvY3VtZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDEpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9jb25zdGFudHMuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9kb2N1bWVudC1jb250ZXh0LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci91dGlscy5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFDZ0FBQUFvQ0FJQUFBRjBteCtzQUFBQUdYUkZXSFJUYjJaMGQyRnlaUUJCWkc5aVpTQkpiV0ZuWlZKbFlXUjVjY2xsUEFBQUF5WnBWRmgwV0UxTU9tTnZiUzVoWkc5aVpTNTRiWEFBQUFBQUFEdy9lSEJoWTJ0bGRDQmlaV2RwYmowaTc3dS9JaUJwWkQwaVZ6Vk5NRTF3UTJWb2FVaDZjbVZUZWs1VVkzcHJZemxrSWo4K0lEeDRPbmh0Y0cxbGRHRWdlRzFzYm5NNmVEMGlZV1J2WW1VNmJuTTZiV1YwWVM4aUlIZzZlRzF3ZEdzOUlrRmtiMkpsSUZoTlVDQkRiM0psSURVdU5pMWpNVFExSURjNUxqRTJNelE1T1N3Z01qQXhPQzh3T0M4eE15MHhOam8wTURveU1pQWdJQ0FnSUNBZ0lqNGdQSEprWmpwU1JFWWdlRzFzYm5NNmNtUm1QU0pvZEhSd09pOHZkM2QzTG5jekxtOXlaeTh4T1RrNUx6QXlMekl5TFhKa1ppMXplVzUwWVhndGJuTWpJajRnUEhKa1pqcEVaWE5qY21sd2RHbHZiaUJ5WkdZNllXSnZkWFE5SWlJZ2VHMXNibk02ZUcxd1BTSm9kSFJ3T2k4dmJuTXVZV1J2WW1VdVkyOXRMM2hoY0M4eExqQXZJaUI0Yld4dWN6cDRiWEJOVFQwaWFIUjBjRG92TDI1ekxtRmtiMkpsTG1OdmJTOTRZWEF2TVM0d0wyMXRMeUlnZUcxc2JuTTZjM1JTWldZOUltaDBkSEE2THk5dWN5NWhaRzlpWlM1amIyMHZlR0Z3THpFdU1DOXpWSGx3WlM5U1pYTnZkWEpqWlZKbFppTWlJSGh0Y0RwRGNtVmhkRzl5Vkc5dmJEMGlRV1J2WW1VZ1VHaHZkRzl6YUc5d0lFTkRJREl3TVRrZ0tGZHBibVJ2ZDNNcElpQjRiWEJOVFRwSmJuTjBZVzVqWlVsRVBTSjRiWEF1YVdsa09qQXhRMEV4TWpNMU5qbEROakV4UlVGQk1qY3hPVEkzTjBJeFFUTkRNak13SWlCNGJYQk5UVHBFYjJOMWJXVnVkRWxFUFNKNGJYQXVaR2xrT2pBeFEwRXhNak0yTmpsRE5qRXhSVUZCTWpjeE9USTNOMEl4UVRORE1qTXdJajRnUEhodGNFMU5Pa1JsY21sMlpXUkdjbTl0SUhOMFVtVm1PbWx1YzNSaGJtTmxTVVE5SW5odGNDNXBhV1E2TURGRFFURXlNek0yT1VNMk1URkZRVUV5TnpFNU1qYzNRakZCTTBNeU16QWlJSE4wVW1WbU9tUnZZM1Z0Wlc1MFNVUTlJbmh0Y0M1a2FXUTZNREZEUVRFeU16UTJPVU0yTVRGRlFVRXlOekU1TWpjM1FqRkJNME15TXpBaUx6NGdQQzl5WkdZNlJHVnpZM0pwY0hScGIyNCtJRHd2Y21SbU9sSkVSajRnUEM5NE9uaHRjRzFsZEdFK0lEdy9lSEJoWTJ0bGRDQmxibVE5SW5JaVB6N1lBdk11QUFBRG5VbEVRVlI0Mm1MOGF0L0tnQVNZZ0poalVpeVRuaXdRZ1FTQTh2K1JBQk5FMlRlSE5pQUNNbGdnZks0RFZSQUdRQUF4WWpHUDJVSVphQmpubWx5b2V2YU9jQlI1ZFBYSUFDQ0EwTTFEQStqV0l3T2dBeEdtL2F4ZUEySDhQWFVQaTJYc3JTRWd1UXNQbWMyVTBBMkhlQlFUQUFRUUFhY3hNZUFGVEhDWFE4SWFoRlRGNFI0QjJjMjVOZzhTR3lnYVdaa1pmdjhGNi83emo3RGRjTWNqKzRJRldlMy9aKzkvTHovQjdLU0ZSUnJvblA4dlBySVZlVEl3TW1EWHpTakJqeVZLdm9kUHdlVTBnQUFpRUdyNEFRc2FIMnU4dzhHdmFYdi9yRHFKUlRPTHF3NWJ0ZC92R2Z0K3J6aUJTelBRYUxZc1ozaW9JVFN6cGppQXlBd25JQ0xnWEhCVVlVOEtQeXRXb3FXcnY4ZnZZRTFwV0RRejI2cWppZnhlZnB5b0FBTUplUnV3dU9zaFc4V2tKb0UxSUZsd1JBSVQvbUJIZC9iL243K0pqZCsvLzlCdC9oRTNrOVJFQWhCQUZLVXdKZ1lLQUVXYVVVS2IyVm9OVWlUaEFtaEpCVVV6VU9mL3J6OS81aTVtNEdISENCeEdqb2t4SEhOVGZpVFB3WjdmUWJuWHV4ZG5sdXJleWxicXpSSmkrbWZOYVhLeUpDaFR4RmpETlpNZVlQLy8weXlxZ0VINlordEZOSkdmcFN1SWptZEdUSVdNeEdyK3N4eTlKR0xTbGlaS00ydU0xYi9IYjMvV3JRV0Z6dnV2a0lUQkdtZERWSDRHRm1iL3JqMzdlK2dtUEQxeGJpc2h0aVFCSmJXK0tDRDU3K0lqUmlFZVJsa2hZc3R0RkMvcHl3MnFMUG4zSHhabjQyb0QwTXJaQUFGR1VSazJZRVVZMVlvL0xBazEyWjQxMXByaDE1Ly91RnM5NkdFSXpIMGNySC9Xbi8wMWNTYzVRYzBvd3NPeElJMlJoNE1TYi8xSW1QM3Z3V3NTZk14VzRNNFNZQXh2SlB3OWNaZTArTk9VNHBpZUFHbzJMa2o5dS9mcXorYU5SUG1ZWTNFNms2d3dOQU1BcldSa1lPVGxZUGozbitqMHl2ai8reStHbjMrQVRYMEdabEFhK3YvNk02Z1JpR29DRmg4enNyRWlLajJnWmlva0pDYVFDLzc5SFFxcEdscjJiN2tBYlB3eE1ET3locGt6NmNoZ1ZmUHYvdXZmaTQrQ1F0aFVFWjQrS0xYNDc4bTdmNC9lQW9lOENpNkwvNy82OUhmZk5iRHF2OFJZVEZSUU00cnl3azNIcGViZmd6ZXdKZ1U3MVVvdTFtZ3JCalpRMlB4ZWNQajNuQU5ZNG1MVnlkL1Q5MElWeDl0UUxZNFpoWG00ZHBYOXlGdjg3OUxqMzB1T0FSR3djY0FvSVFBay96Ly9BSzkwZ0hVbzU1d1VCbllXcWxrTXpkL2dUdVRmZ3plQS9nWW1KV0NmRDJxZk9EOXJvaDJMaHk3MVV6VktjOVplQTRpR2NPM0VoTDJnb1M1Z1pDUXFxSC9QTzhpYTVjTHcrUWZEbjcrVVdna3NLZms0L3dBN2o3Ly9qdmdXQ0FEOEhrYm1HZVlRdmdBQUFBQkpSVTVFcmtKZ2dnPT1cIiIsImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBmbHVzaCBmcm9tICdzdHlsZWQtanN4L3NlcnZlcidcbmltcG9ydCB7XG4gIEFNUF9SRU5ERVJfVEFSR0VULFxuICBDTElFTlRfU1RBVElDX0ZJTEVTX1JVTlRJTUVfQU1QLFxuICBDTElFTlRfU1RBVElDX0ZJTEVTX1JVTlRJTUVfUkVBQ1RfUkVGUkVTSCxcbiAgQ0xJRU5UX1NUQVRJQ19GSUxFU19SVU5USU1FX1dFQlBBQ0ssXG59IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9jb25zdGFudHMnXG5pbXBvcnQgeyBEb2N1bWVudENvbnRleHQgYXMgRG9jdW1lbnRDb21wb25lbnRDb250ZXh0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL2RvY3VtZW50LWNvbnRleHQnXG5pbXBvcnQge1xuICBEb2N1bWVudENvbnRleHQsXG4gIERvY3VtZW50SW5pdGlhbFByb3BzLFxuICBEb2N1bWVudFByb3BzLFxufSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvdXRpbHMnXG5pbXBvcnQgeyBjbGVhbkFtcFBhdGggfSBmcm9tICcuLi9uZXh0LXNlcnZlci9zZXJ2ZXIvdXRpbHMnXG5pbXBvcnQgeyBodG1sRXNjYXBlSnNvblN0cmluZyB9IGZyb20gJy4uL3NlcnZlci9odG1sZXNjYXBlJ1xuXG5leHBvcnQgeyBEb2N1bWVudENvbnRleHQsIERvY3VtZW50SW5pdGlhbFByb3BzLCBEb2N1bWVudFByb3BzIH1cblxuZXhwb3J0IHR5cGUgT3JpZ2luUHJvcHMgPSB7XG4gIG5vbmNlPzogc3RyaW5nXG4gIGNyb3NzT3JpZ2luPzogc3RyaW5nXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBtaWRkbGV3YXJlKHsgcmVxLCByZXMgfTogRG9jdW1lbnRDb250ZXh0KSB7fVxuXG5mdW5jdGlvbiBkZWR1cGUoYnVuZGxlczogYW55W10pOiBhbnlbXSB7XG4gIGNvbnN0IGZpbGVzID0gbmV3IFNldCgpXG4gIGNvbnN0IGtlcHQgPSBbXVxuXG4gIGZvciAoY29uc3QgYnVuZGxlIG9mIGJ1bmRsZXMpIHtcbiAgICBpZiAoZmlsZXMuaGFzKGJ1bmRsZS5maWxlKSkgY29udGludWVcbiAgICBmaWxlcy5hZGQoYnVuZGxlLmZpbGUpXG4gICAga2VwdC5wdXNoKGJ1bmRsZSlcbiAgfVxuICByZXR1cm4ga2VwdFxufVxuXG5mdW5jdGlvbiBnZXRPcHRpb25hbE1vZGVyblNjcmlwdFZhcmlhbnQocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9NT0RFUk5fQlVJTEQpIHtcbiAgICByZXR1cm4gcGF0aC5yZXBsYWNlKC9cXC5qcyQvLCAnLm1vZHVsZS5qcycpXG4gIH1cbiAgcmV0dXJuIHBhdGhcbn1cblxuLyoqXG4gKiBgRG9jdW1lbnRgIGNvbXBvbmVudCBoYW5kbGVzIHRoZSBpbml0aWFsIGBkb2N1bWVudGAgbWFya3VwIGFuZCByZW5kZXJzIG9ubHkgb24gdGhlIHNlcnZlciBzaWRlLlxuICogQ29tbW9ubHkgdXNlZCBmb3IgaW1wbGVtZW50aW5nIHNlcnZlciBzaWRlIHJlbmRlcmluZyBmb3IgYGNzcy1pbi1qc2AgbGlicmFyaWVzLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEb2N1bWVudDxQID0ge30+IGV4dGVuZHMgQ29tcG9uZW50PERvY3VtZW50UHJvcHMgJiBQPiB7XG4gIHN0YXRpYyBoZWFkVGFnc01pZGRsZXdhcmUgPSBwcm9jZXNzLmVudi5fX05FWFRfUExVR0lOU1xuICAgID8gaW1wb3J0KFxuICAgICAgICAvLyBAdHMtaWdub3JlIGxvYWRlciBzeW50YXhcbiAgICAgICAgJ25leHQtcGx1Z2luLWxvYWRlcj9taWRkbGV3YXJlPWRvY3VtZW50LWhlYWQtdGFncy1zZXJ2ZXIhJ1xuICAgICAgKVxuICAgIDogKCkgPT4gW11cbiAgc3RhdGljIGJvZHlUYWdzTWlkZGxld2FyZSA9IHByb2Nlc3MuZW52Ll9fTkVYVF9QTFVHSU5TXG4gICAgPyBpbXBvcnQoXG4gICAgICAgIC8vIEB0cy1pZ25vcmUgbG9hZGVyIHN5bnRheFxuICAgICAgICAnbmV4dC1wbHVnaW4tbG9hZGVyP21pZGRsZXdhcmU9ZG9jdW1lbnQtYm9keS10YWdzLXNlcnZlciEnXG4gICAgICApXG4gICAgOiAoKSA9PiBbXVxuICBzdGF0aWMgaHRtbFByb3BzTWlkZGxld2FyZSA9IHByb2Nlc3MuZW52Ll9fTkVYVF9QTFVHSU5TXG4gICAgPyBpbXBvcnQoXG4gICAgICAgIC8vIEB0cy1pZ25vcmUgbG9hZGVyIHN5bnRheFxuICAgICAgICAnbmV4dC1wbHVnaW4tbG9hZGVyP21pZGRsZXdhcmU9ZG9jdW1lbnQtaHRtbC1wcm9wcy1zZXJ2ZXIhJ1xuICAgICAgKVxuICAgIDogKCkgPT4gW11cblxuICAvKipcbiAgICogYGdldEluaXRpYWxQcm9wc2AgaG9vayByZXR1cm5zIHRoZSBjb250ZXh0IG9iamVjdCB3aXRoIHRoZSBhZGRpdGlvbiBvZiBgcmVuZGVyUGFnZWAuXG4gICAqIGByZW5kZXJQYWdlYCBjYWxsYmFjayBleGVjdXRlcyBgUmVhY3RgIHJlbmRlcmluZyBsb2dpYyBzeW5jaHJvbm91c2x5IHRvIHN1cHBvcnQgc2VydmVyLXJlbmRlcmluZyB3cmFwcGVyc1xuICAgKi9cbiAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyhcbiAgICBjdHg6IERvY3VtZW50Q29udGV4dFxuICApOiBQcm9taXNlPERvY3VtZW50SW5pdGlhbFByb3BzPiB7XG4gICAgY29uc3QgZW5oYW5jZXJzID0gcHJvY2Vzcy5lbnYuX19ORVhUX1BMVUdJTlNcbiAgICAgID8gYXdhaXQgaW1wb3J0KFxuICAgICAgICAgIC8vIEB0cy1pZ25vcmUgbG9hZGVyIHN5bnRheFxuICAgICAgICAgICduZXh0LXBsdWdpbi1sb2FkZXI/bWlkZGxld2FyZT11bnN0YWJsZS1lbmhhbmNlLWFwcC1zZXJ2ZXIhJ1xuICAgICAgICApLnRoZW4oKG1vZCkgPT4gbW9kLmRlZmF1bHQoY3R4KSlcbiAgICAgIDogW11cblxuICAgIGNvbnN0IGVuaGFuY2VBcHAgPSAoQXBwOiBhbnkpID0+IHtcbiAgICAgIGZvciAoY29uc3QgZW5oYW5jZXIgb2YgZW5oYW5jZXJzKSB7XG4gICAgICAgIEFwcCA9IGVuaGFuY2VyKEFwcClcbiAgICAgIH1cbiAgICAgIHJldHVybiAocHJvcHM6IGFueSkgPT4gPEFwcCB7Li4ucHJvcHN9IC8+XG4gICAgfVxuXG4gICAgY29uc3QgeyBodG1sLCBoZWFkIH0gPSBhd2FpdCBjdHgucmVuZGVyUGFnZSh7IGVuaGFuY2VBcHAgfSlcbiAgICBjb25zdCBzdHlsZXMgPSBbXG4gICAgICAuLi5mbHVzaCgpLFxuICAgICAgLi4uKHByb2Nlc3MuZW52Ll9fTkVYVF9QTFVHSU5TXG4gICAgICAgID8gYXdhaXQgaW1wb3J0KFxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZSBsb2FkZXIgc3ludGF4XG4gICAgICAgICAgICAnbmV4dC1wbHVnaW4tbG9hZGVyP21pZGRsZXdhcmU9dW5zdGFibGUtZ2V0LXN0eWxlcy1zZXJ2ZXIhJ1xuICAgICAgICAgICkudGhlbigobW9kKSA9PiBtb2QuZGVmYXVsdChjdHgpKVxuICAgICAgICA6IFtdKSxcbiAgICBdXG4gICAgcmV0dXJuIHsgaHRtbCwgaGVhZCwgc3R5bGVzIH1cbiAgfVxuXG4gIHN0YXRpYyByZW5kZXJEb2N1bWVudDxQPihcbiAgICBEb2N1bWVudDogbmV3ICgpID0+IERvY3VtZW50PFA+LFxuICAgIHByb3BzOiBEb2N1bWVudFByb3BzICYgUFxuICApOiBSZWFjdC5SZWFjdEVsZW1lbnQge1xuICAgIHJldHVybiAoXG4gICAgICA8RG9jdW1lbnRDb21wb25lbnRDb250ZXh0LlByb3ZpZGVyXG4gICAgICAgIHZhbHVlPXt7XG4gICAgICAgICAgX2RvY3VtZW50UHJvcHM6IHByb3BzLFxuICAgICAgICAgIC8vIEluIGRldiB3ZSBpbnZhbGlkYXRlIHRoZSBjYWNoZSBieSBhcHBlbmRpbmcgYSB0aW1lc3RhbXAgdG8gdGhlIHJlc291cmNlIFVSTC5cbiAgICAgICAgICAvLyBUaGlzIGlzIGEgd29ya2Fyb3VuZCB0byBmaXggaHR0cHM6Ly9naXRodWIuY29tL3ZlcmNlbC9uZXh0LmpzL2lzc3Vlcy81ODYwXG4gICAgICAgICAgLy8gVE9ETzogcmVtb3ZlIHRoaXMgd29ya2Fyb3VuZCB3aGVuIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xODc3MjYgaXMgZml4ZWQuXG4gICAgICAgICAgX2Rldk9ubHlJbnZhbGlkYXRlQ2FjaGVRdWVyeVN0cmluZzpcbiAgICAgICAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyAnP3RzPScgKyBEYXRlLm5vdygpIDogJycsXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxEb2N1bWVudCB7Li4ucHJvcHN9IC8+XG4gICAgICA8L0RvY3VtZW50Q29tcG9uZW50Q29udGV4dC5Qcm92aWRlcj5cbiAgICApXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxIdG1sPlxuICAgICAgICA8SGVhZCAvPlxuICAgICAgICA8Ym9keT5cbiAgICAgICAgICA8TWFpbiAvPlxuICAgICAgICAgIDxOZXh0U2NyaXB0IC8+XG4gICAgICAgIDwvYm9keT5cbiAgICAgIDwvSHRtbD5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEh0bWwgZXh0ZW5kcyBDb21wb25lbnQ8XG4gIFJlYWN0LkRldGFpbGVkSFRNTFByb3BzPFxuICAgIFJlYWN0Lkh0bWxIVE1MQXR0cmlidXRlczxIVE1MSHRtbEVsZW1lbnQ+LFxuICAgIEhUTUxIdG1sRWxlbWVudFxuICA+XG4+IHtcbiAgc3RhdGljIGNvbnRleHRUeXBlID0gRG9jdW1lbnRDb21wb25lbnRDb250ZXh0XG5cbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCxcbiAgfVxuXG4gIGNvbnRleHQhOiBSZWFjdC5Db250ZXh0VHlwZTx0eXBlb2YgRG9jdW1lbnRDb21wb25lbnRDb250ZXh0PlxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGluQW1wTW9kZSwgaHRtbFByb3BzIH0gPSB0aGlzLmNvbnRleHQuX2RvY3VtZW50UHJvcHNcbiAgICByZXR1cm4gKFxuICAgICAgPGh0bWxcbiAgICAgICAgey4uLmh0bWxQcm9wc31cbiAgICAgICAgey4uLnRoaXMucHJvcHN9XG4gICAgICAgIGFtcD17aW5BbXBNb2RlID8gJycgOiB1bmRlZmluZWR9XG4gICAgICAgIGRhdGEtYW1wZGV2bW9kZT17XG4gICAgICAgICAgaW5BbXBNb2RlICYmIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyAnJyA6IHVuZGVmaW5lZFxuICAgICAgICB9XG4gICAgICAvPlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgSGVhZCBleHRlbmRzIENvbXBvbmVudDxcbiAgT3JpZ2luUHJvcHMgJlxuICAgIFJlYWN0LkRldGFpbGVkSFRNTFByb3BzPFxuICAgICAgUmVhY3QuSFRNTEF0dHJpYnV0ZXM8SFRNTEhlYWRFbGVtZW50PixcbiAgICAgIEhUTUxIZWFkRWxlbWVudFxuICAgID5cbj4ge1xuICBzdGF0aWMgY29udGV4dFR5cGUgPSBEb2N1bWVudENvbXBvbmVudENvbnRleHRcblxuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIG5vbmNlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGNyb3NzT3JpZ2luOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB9XG5cbiAgY29udGV4dCE6IFJlYWN0LkNvbnRleHRUeXBlPHR5cGVvZiBEb2N1bWVudENvbXBvbmVudENvbnRleHQ+XG5cbiAgZ2V0Q3NzTGlua3MoKTogSlNYLkVsZW1lbnRbXSB8IG51bGwge1xuICAgIGNvbnN0IHsgYXNzZXRQcmVmaXgsIGZpbGVzIH0gPSB0aGlzLmNvbnRleHQuX2RvY3VtZW50UHJvcHNcbiAgICBjb25zdCB7IF9kZXZPbmx5SW52YWxpZGF0ZUNhY2hlUXVlcnlTdHJpbmcgfSA9IHRoaXMuY29udGV4dFxuICAgIGNvbnN0IGNzc0ZpbGVzID1cbiAgICAgIGZpbGVzICYmIGZpbGVzLmxlbmd0aCA/IGZpbGVzLmZpbHRlcigoZikgPT4gL1xcLmNzcyQvLnRlc3QoZikpIDogW11cblxuICAgIGNvbnN0IGNzc0xpbmtFbGVtZW50czogSlNYLkVsZW1lbnRbXSA9IFtdXG4gICAgY3NzRmlsZXMuZm9yRWFjaCgoZmlsZSkgPT4ge1xuICAgICAgY3NzTGlua0VsZW1lbnRzLnB1c2goXG4gICAgICAgIDxsaW5rXG4gICAgICAgICAga2V5PXtgJHtmaWxlfS1wcmVsb2FkYH1cbiAgICAgICAgICBub25jZT17dGhpcy5wcm9wcy5ub25jZX1cbiAgICAgICAgICByZWw9XCJwcmVsb2FkXCJcbiAgICAgICAgICBocmVmPXtgJHthc3NldFByZWZpeH0vX25leHQvJHtlbmNvZGVVUkkoXG4gICAgICAgICAgICBmaWxlXG4gICAgICAgICAgKX0ke19kZXZPbmx5SW52YWxpZGF0ZUNhY2hlUXVlcnlTdHJpbmd9YH1cbiAgICAgICAgICBhcz1cInN0eWxlXCJcbiAgICAgICAgICBjcm9zc09yaWdpbj17dGhpcy5wcm9wcy5jcm9zc09yaWdpbiB8fCBwcm9jZXNzLmNyb3NzT3JpZ2lufVxuICAgICAgICAvPixcbiAgICAgICAgPGxpbmtcbiAgICAgICAgICBrZXk9e2ZpbGV9XG4gICAgICAgICAgbm9uY2U9e3RoaXMucHJvcHMubm9uY2V9XG4gICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgICAgICAgaHJlZj17YCR7YXNzZXRQcmVmaXh9L19uZXh0LyR7ZW5jb2RlVVJJKFxuICAgICAgICAgICAgZmlsZVxuICAgICAgICAgICl9JHtfZGV2T25seUludmFsaWRhdGVDYWNoZVF1ZXJ5U3RyaW5nfWB9XG4gICAgICAgICAgY3Jvc3NPcmlnaW49e3RoaXMucHJvcHMuY3Jvc3NPcmlnaW4gfHwgcHJvY2Vzcy5jcm9zc09yaWdpbn1cbiAgICAgICAgLz5cbiAgICAgIClcbiAgICB9KVxuXG4gICAgcmV0dXJuIGNzc0xpbmtFbGVtZW50cy5sZW5ndGggPT09IDAgPyBudWxsIDogY3NzTGlua0VsZW1lbnRzXG4gIH1cblxuICBnZXRQcmVsb2FkRHluYW1pY0NodW5rcygpIHtcbiAgICBjb25zdCB7IGR5bmFtaWNJbXBvcnRzLCBhc3NldFByZWZpeCB9ID0gdGhpcy5jb250ZXh0Ll9kb2N1bWVudFByb3BzXG4gICAgY29uc3QgeyBfZGV2T25seUludmFsaWRhdGVDYWNoZVF1ZXJ5U3RyaW5nIH0gPSB0aGlzLmNvbnRleHRcblxuICAgIHJldHVybiAoXG4gICAgICBkZWR1cGUoZHluYW1pY0ltcG9ydHMpXG4gICAgICAgIC5tYXAoKGJ1bmRsZTogYW55KSA9PiB7XG4gICAgICAgICAgLy8gYGR5bmFtaWNJbXBvcnRzYCB3aWxsIGNvbnRhaW4gYm90aCBgLmpzYCBhbmQgYC5tb2R1bGUuanNgIHdoZW4gdGhlXG4gICAgICAgICAgLy8gZmVhdHVyZSBpcyBlbmFibGVkLiBUaGlzIGNsYXVzZSB3aWxsIGZpbHRlciBkb3duIHRvIHRoZSBtb2Rlcm5cbiAgICAgICAgICAvLyB2YXJpYW50cyBvbmx5LlxuICAgICAgICAgIGlmICghYnVuZGxlLmZpbGUuZW5kc1dpdGgoZ2V0T3B0aW9uYWxNb2Rlcm5TY3JpcHRWYXJpYW50KCcuanMnKSkpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxsaW5rXG4gICAgICAgICAgICAgIHJlbD1cInByZWxvYWRcIlxuICAgICAgICAgICAgICBrZXk9e2J1bmRsZS5maWxlfVxuICAgICAgICAgICAgICBocmVmPXtgJHthc3NldFByZWZpeH0vX25leHQvJHtlbmNvZGVVUkkoXG4gICAgICAgICAgICAgICAgYnVuZGxlLmZpbGVcbiAgICAgICAgICAgICAgKX0ke19kZXZPbmx5SW52YWxpZGF0ZUNhY2hlUXVlcnlTdHJpbmd9YH1cbiAgICAgICAgICAgICAgYXM9XCJzY3JpcHRcIlxuICAgICAgICAgICAgICBub25jZT17dGhpcy5wcm9wcy5ub25jZX1cbiAgICAgICAgICAgICAgY3Jvc3NPcmlnaW49e3RoaXMucHJvcHMuY3Jvc3NPcmlnaW4gfHwgcHJvY2Vzcy5jcm9zc09yaWdpbn1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKVxuICAgICAgICB9KVxuICAgICAgICAvLyBGaWx0ZXIgb3V0IG51bGxlZCBzY3JpcHRzXG4gICAgICAgIC5maWx0ZXIoQm9vbGVhbilcbiAgICApXG4gIH1cblxuICBnZXRQcmVsb2FkTWFpbkxpbmtzKCk6IEpTWC5FbGVtZW50W10gfCBudWxsIHtcbiAgICBjb25zdCB7IGFzc2V0UHJlZml4LCBmaWxlcyB9ID0gdGhpcy5jb250ZXh0Ll9kb2N1bWVudFByb3BzXG4gICAgY29uc3QgeyBfZGV2T25seUludmFsaWRhdGVDYWNoZVF1ZXJ5U3RyaW5nIH0gPSB0aGlzLmNvbnRleHRcblxuICAgIGNvbnN0IHByZWxvYWRGaWxlcyA9XG4gICAgICBmaWxlcyAmJiBmaWxlcy5sZW5ndGhcbiAgICAgICAgPyBmaWxlcy5maWx0ZXIoKGZpbGU6IHN0cmluZykgPT4ge1xuICAgICAgICAgICAgLy8gYGR5bmFtaWNJbXBvcnRzYCB3aWxsIGNvbnRhaW4gYm90aCBgLmpzYCBhbmQgYC5tb2R1bGUuanNgIHdoZW5cbiAgICAgICAgICAgIC8vIHRoZSBmZWF0dXJlIGlzIGVuYWJsZWQuIFRoaXMgY2xhdXNlIHdpbGwgZmlsdGVyIGRvd24gdG8gdGhlXG4gICAgICAgICAgICAvLyBtb2Rlcm4gdmFyaWFudHMgb25seS5cbiAgICAgICAgICAgIHJldHVybiBmaWxlLmVuZHNXaXRoKGdldE9wdGlvbmFsTW9kZXJuU2NyaXB0VmFyaWFudCgnLmpzJykpXG4gICAgICAgICAgfSlcbiAgICAgICAgOiBbXVxuXG4gICAgcmV0dXJuICFwcmVsb2FkRmlsZXMubGVuZ3RoXG4gICAgICA/IG51bGxcbiAgICAgIDogcHJlbG9hZEZpbGVzLm1hcCgoZmlsZTogc3RyaW5nKSA9PiAoXG4gICAgICAgICAgPGxpbmtcbiAgICAgICAgICAgIGtleT17ZmlsZX1cbiAgICAgICAgICAgIG5vbmNlPXt0aGlzLnByb3BzLm5vbmNlfVxuICAgICAgICAgICAgcmVsPVwicHJlbG9hZFwiXG4gICAgICAgICAgICBocmVmPXtgJHthc3NldFByZWZpeH0vX25leHQvJHtlbmNvZGVVUkkoXG4gICAgICAgICAgICAgIGZpbGVcbiAgICAgICAgICAgICl9JHtfZGV2T25seUludmFsaWRhdGVDYWNoZVF1ZXJ5U3RyaW5nfWB9XG4gICAgICAgICAgICBhcz1cInNjcmlwdFwiXG4gICAgICAgICAgICBjcm9zc09yaWdpbj17dGhpcy5wcm9wcy5jcm9zc09yaWdpbiB8fCBwcm9jZXNzLmNyb3NzT3JpZ2lufVxuICAgICAgICAgIC8+XG4gICAgICAgICkpXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgc3R5bGVzLFxuICAgICAgYW1wUGF0aCxcbiAgICAgIGluQW1wTW9kZSxcbiAgICAgIGFzc2V0UHJlZml4LFxuICAgICAgaHlicmlkQW1wLFxuICAgICAgY2Fub25pY2FsQmFzZSxcbiAgICAgIF9fTkVYVF9EQVRBX18sXG4gICAgICBkYW5nZXJvdXNBc1BhdGgsXG4gICAgICBoZWFkVGFncyxcbiAgICAgIHVuc3RhYmxlX3J1bnRpbWVKUyxcbiAgICB9ID0gdGhpcy5jb250ZXh0Ll9kb2N1bWVudFByb3BzXG4gICAgY29uc3QgZGlzYWJsZVJ1bnRpbWVKUyA9IHVuc3RhYmxlX3J1bnRpbWVKUyA9PT0gZmFsc2VcbiAgICBjb25zdCB7IF9kZXZPbmx5SW52YWxpZGF0ZUNhY2hlUXVlcnlTdHJpbmcgfSA9IHRoaXMuY29udGV4dFxuICAgIGNvbnN0IHsgcGFnZSwgYnVpbGRJZCB9ID0gX19ORVhUX0RBVEFfX1xuXG4gICAgbGV0IHsgaGVhZCB9ID0gdGhpcy5jb250ZXh0Ll9kb2N1bWVudFByb3BzXG4gICAgbGV0IGNoaWxkcmVuID0gdGhpcy5wcm9wcy5jaGlsZHJlblxuICAgIC8vIHNob3cgYSB3YXJuaW5nIGlmIEhlYWQgY29udGFpbnMgPHRpdGxlPiAob25seSBpbiBkZXZlbG9wbWVudClcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgY2hpbGRyZW4gPSBSZWFjdC5DaGlsZHJlbi5tYXAoY2hpbGRyZW4sIChjaGlsZDogYW55KSA9PiB7XG4gICAgICAgIGNvbnN0IGlzUmVhY3RIZWxtZXQgPSBjaGlsZD8ucHJvcHM/LlsnZGF0YS1yZWFjdC1oZWxtZXQnXVxuICAgICAgICBpZiAoY2hpbGQ/LnR5cGUgPT09ICd0aXRsZScgJiYgIWlzUmVhY3RIZWxtZXQpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICBcIldhcm5pbmc6IDx0aXRsZT4gc2hvdWxkIG5vdCBiZSB1c2VkIGluIF9kb2N1bWVudC5qcydzIDxIZWFkPi4gaHR0cHM6Ly9lcnIuc2gvbmV4dC5qcy9uby1kb2N1bWVudC10aXRsZVwiXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjaGlsZFxuICAgICAgfSlcbiAgICAgIGlmICh0aGlzLnByb3BzLmNyb3NzT3JpZ2luKVxuICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgJ1dhcm5pbmc6IGBIZWFkYCBhdHRyaWJ1dGUgYGNyb3NzT3JpZ2luYCBpcyBkZXByZWNhdGVkLiBodHRwczovL2Vyci5zaC9uZXh0LmpzL2RvYy1jcm9zc29yaWdpbi1kZXByZWNhdGVkJ1xuICAgICAgICApXG4gICAgfVxuXG4gICAgbGV0IGhhc0FtcGh0bWxSZWwgPSBmYWxzZVxuICAgIGxldCBoYXNDYW5vbmljYWxSZWwgPSBmYWxzZVxuXG4gICAgLy8gc2hvdyB3YXJuaW5nIGFuZCByZW1vdmUgY29uZmxpY3RpbmcgYW1wIGhlYWQgdGFnc1xuICAgIGhlYWQgPSBSZWFjdC5DaGlsZHJlbi5tYXAoaGVhZCB8fCBbXSwgKGNoaWxkKSA9PiB7XG4gICAgICBpZiAoIWNoaWxkKSByZXR1cm4gY2hpbGRcbiAgICAgIGNvbnN0IHsgdHlwZSwgcHJvcHMgfSA9IGNoaWxkXG5cbiAgICAgIGlmIChpbkFtcE1vZGUpIHtcbiAgICAgICAgbGV0IGJhZFByb3A6IHN0cmluZyA9ICcnXG5cbiAgICAgICAgaWYgKHR5cGUgPT09ICdtZXRhJyAmJiBwcm9wcy5uYW1lID09PSAndmlld3BvcnQnKSB7XG4gICAgICAgICAgYmFkUHJvcCA9ICduYW1lPVwidmlld3BvcnRcIidcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAnbGluaycgJiYgcHJvcHMucmVsID09PSAnY2Fub25pY2FsJykge1xuICAgICAgICAgIGhhc0Nhbm9uaWNhbFJlbCA9IHRydWVcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAnc2NyaXB0Jykge1xuICAgICAgICAgIC8vIG9ubHkgYmxvY2sgaWZcbiAgICAgICAgICAvLyAxLiBpdCBoYXMgYSBzcmMgYW5kIGlzbid0IHBvaW50aW5nIHRvIGFtcHByb2plY3QncyBDRE5cbiAgICAgICAgICAvLyAyLiBpdCBpcyB1c2luZyBkYW5nZXJvdXNseVNldElubmVySFRNTCB3aXRob3V0IGEgdHlwZSBvclxuICAgICAgICAgIC8vIGEgdHlwZSBvZiB0ZXh0L2phdmFzY3JpcHRcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAocHJvcHMuc3JjICYmIHByb3BzLnNyYy5pbmRleE9mKCdhbXBwcm9qZWN0JykgPCAtMSkgfHxcbiAgICAgICAgICAgIChwcm9wcy5kYW5nZXJvdXNseVNldElubmVySFRNTCAmJlxuICAgICAgICAgICAgICAoIXByb3BzLnR5cGUgfHwgcHJvcHMudHlwZSA9PT0gJ3RleHQvamF2YXNjcmlwdCcpKVxuICAgICAgICAgICkge1xuICAgICAgICAgICAgYmFkUHJvcCA9ICc8c2NyaXB0J1xuICAgICAgICAgICAgT2JqZWN0LmtleXMocHJvcHMpLmZvckVhY2goKHByb3ApID0+IHtcbiAgICAgICAgICAgICAgYmFkUHJvcCArPSBgICR7cHJvcH09XCIke3Byb3BzW3Byb3BdfVwiYFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGJhZFByb3AgKz0gJy8+J1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChiYWRQcm9wKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgYEZvdW5kIGNvbmZsaWN0aW5nIGFtcCB0YWcgXCIke2NoaWxkLnR5cGV9XCIgd2l0aCBjb25mbGljdGluZyBwcm9wICR7YmFkUHJvcH0gaW4gJHtfX05FWFRfREFUQV9fLnBhZ2V9LiBodHRwczovL2Vyci5zaC9uZXh0LmpzL2NvbmZsaWN0aW5nLWFtcC10YWdgXG4gICAgICAgICAgKVxuICAgICAgICAgIHJldHVybiBudWxsXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIG5vbi1hbXAgbW9kZVxuICAgICAgICBpZiAodHlwZSA9PT0gJ2xpbmsnICYmIHByb3BzLnJlbCA9PT0gJ2FtcGh0bWwnKSB7XG4gICAgICAgICAgaGFzQW1waHRtbFJlbCA9IHRydWVcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGNoaWxkXG4gICAgfSlcblxuICAgIC8vIHRyeSB0byBwYXJzZSBzdHlsZXMgZnJvbSBmcmFnbWVudCBmb3IgYmFja3dhcmRzIGNvbXBhdFxuICAgIGNvbnN0IGN1clN0eWxlczogUmVhY3QuUmVhY3RFbGVtZW50W10gPSBBcnJheS5pc0FycmF5KHN0eWxlcylcbiAgICAgID8gKHN0eWxlcyBhcyBSZWFjdC5SZWFjdEVsZW1lbnRbXSlcbiAgICAgIDogW11cbiAgICBpZiAoXG4gICAgICBpbkFtcE1vZGUgJiZcbiAgICAgIHN0eWxlcyAmJlxuICAgICAgLy8gQHRzLWlnbm9yZSBQcm9wZXJ0eSAncHJvcHMnIGRvZXMgbm90IGV4aXN0IG9uIHR5cGUgUmVhY3RFbGVtZW50XG4gICAgICBzdHlsZXMucHJvcHMgJiZcbiAgICAgIC8vIEB0cy1pZ25vcmUgUHJvcGVydHkgJ3Byb3BzJyBkb2VzIG5vdCBleGlzdCBvbiB0eXBlIFJlYWN0RWxlbWVudFxuICAgICAgQXJyYXkuaXNBcnJheShzdHlsZXMucHJvcHMuY2hpbGRyZW4pXG4gICAgKSB7XG4gICAgICBjb25zdCBoYXNTdHlsZXMgPSAoZWw6IFJlYWN0LlJlYWN0RWxlbWVudCkgPT5cbiAgICAgICAgZWw/LnByb3BzPy5kYW5nZXJvdXNseVNldElubmVySFRNTD8uX19odG1sXG4gICAgICAvLyBAdHMtaWdub3JlIFByb3BlcnR5ICdwcm9wcycgZG9lcyBub3QgZXhpc3Qgb24gdHlwZSBSZWFjdEVsZW1lbnRcbiAgICAgIHN0eWxlcy5wcm9wcy5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZDogUmVhY3QuUmVhY3RFbGVtZW50KSA9PiB7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGNoaWxkKSkge1xuICAgICAgICAgIGNoaWxkLmZvckVhY2goKGVsKSA9PiBoYXNTdHlsZXMoZWwpICYmIGN1clN0eWxlcy5wdXNoKGVsKSlcbiAgICAgICAgfSBlbHNlIGlmIChoYXNTdHlsZXMoY2hpbGQpKSB7XG4gICAgICAgICAgY3VyU3R5bGVzLnB1c2goY2hpbGQpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxoZWFkIHsuLi50aGlzLnByb3BzfT5cbiAgICAgICAge3RoaXMuY29udGV4dC5fZG9jdW1lbnRQcm9wcy5pc0RldmVsb3BtZW50ICYmIChcbiAgICAgICAgICA8PlxuICAgICAgICAgICAgPHN0eWxlXG4gICAgICAgICAgICAgIGRhdGEtbmV4dC1oaWRlLWZvdWNcbiAgICAgICAgICAgICAgZGF0YS1hbXBkZXZtb2RlPXtpbkFtcE1vZGUgPyAndHJ1ZScgOiB1bmRlZmluZWR9XG4gICAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XG4gICAgICAgICAgICAgICAgX19odG1sOiBgYm9keXtkaXNwbGF5Om5vbmV9YCxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8bm9zY3JpcHRcbiAgICAgICAgICAgICAgZGF0YS1uZXh0LWhpZGUtZm91Y1xuICAgICAgICAgICAgICBkYXRhLWFtcGRldm1vZGU9e2luQW1wTW9kZSA/ICd0cnVlJyA6IHVuZGVmaW5lZH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHN0eWxlXG4gICAgICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tcbiAgICAgICAgICAgICAgICAgIF9faHRtbDogYGJvZHl7ZGlzcGxheTpibG9ja31gLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L25vc2NyaXB0PlxuICAgICAgICAgIDwvPlxuICAgICAgICApfVxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIHtoZWFkfVxuICAgICAgICA8bWV0YVxuICAgICAgICAgIG5hbWU9XCJuZXh0LWhlYWQtY291bnRcIlxuICAgICAgICAgIGNvbnRlbnQ9e1JlYWN0LkNoaWxkcmVuLmNvdW50KGhlYWQgfHwgW10pLnRvU3RyaW5nKCl9XG4gICAgICAgIC8+XG4gICAgICAgIHtpbkFtcE1vZGUgJiYgKFxuICAgICAgICAgIDw+XG4gICAgICAgICAgICA8bWV0YVxuICAgICAgICAgICAgICBuYW1lPVwidmlld3BvcnRcIlxuICAgICAgICAgICAgICBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLG1pbmltdW0tc2NhbGU9MSxpbml0aWFsLXNjYWxlPTFcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIHshaGFzQ2Fub25pY2FsUmVsICYmIChcbiAgICAgICAgICAgICAgPGxpbmtcbiAgICAgICAgICAgICAgICByZWw9XCJjYW5vbmljYWxcIlxuICAgICAgICAgICAgICAgIGhyZWY9e2Nhbm9uaWNhbEJhc2UgKyBjbGVhbkFtcFBhdGgoZGFuZ2Vyb3VzQXNQYXRoKX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICB7LyogaHR0cHM6Ly93d3cuYW1wcHJvamVjdC5vcmcvZG9jcy9mdW5kYW1lbnRhbHMvb3B0aW1pemVfYW1wI29wdGltaXplLXRoZS1hbXAtcnVudGltZS1sb2FkaW5nICovfVxuICAgICAgICAgICAgPGxpbmtcbiAgICAgICAgICAgICAgcmVsPVwicHJlbG9hZFwiXG4gICAgICAgICAgICAgIGFzPVwic2NyaXB0XCJcbiAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vY2RuLmFtcHByb2plY3Qub3JnL3YwLmpzXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICB7LyogQWRkIGN1c3RvbSBzdHlsZXMgYmVmb3JlIEFNUCBzdHlsZXMgdG8gcHJldmVudCBhY2NpZGVudGFsIG92ZXJyaWRlcyAqL31cbiAgICAgICAgICAgIHtzdHlsZXMgJiYgKFxuICAgICAgICAgICAgICA8c3R5bGVcbiAgICAgICAgICAgICAgICBhbXAtY3VzdG9tPVwiXCJcbiAgICAgICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17e1xuICAgICAgICAgICAgICAgICAgX19odG1sOiBjdXJTdHlsZXNcbiAgICAgICAgICAgICAgICAgICAgLm1hcCgoc3R5bGUpID0+IHN0eWxlLnByb3BzLmRhbmdlcm91c2x5U2V0SW5uZXJIVE1MLl9faHRtbClcbiAgICAgICAgICAgICAgICAgICAgLmpvaW4oJycpXG4gICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9cXC9cXCojIHNvdXJjZU1hcHBpbmdVUkw9LipcXCpcXC8vZywgJycpXG4gICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9cXC9cXCpAIHNvdXJjZVVSTD0uKj9cXCpcXC8vZywgJycpLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgPHN0eWxlXG4gICAgICAgICAgICAgIGFtcC1ib2lsZXJwbGF0ZT1cIlwiXG4gICAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XG4gICAgICAgICAgICAgICAgX19odG1sOiBgYm9keXstd2Via2l0LWFuaW1hdGlvbjotYW1wLXN0YXJ0IDhzIHN0ZXBzKDEsZW5kKSAwcyAxIG5vcm1hbCBib3RoOy1tb3otYW5pbWF0aW9uOi1hbXAtc3RhcnQgOHMgc3RlcHMoMSxlbmQpIDBzIDEgbm9ybWFsIGJvdGg7LW1zLWFuaW1hdGlvbjotYW1wLXN0YXJ0IDhzIHN0ZXBzKDEsZW5kKSAwcyAxIG5vcm1hbCBib3RoO2FuaW1hdGlvbjotYW1wLXN0YXJ0IDhzIHN0ZXBzKDEsZW5kKSAwcyAxIG5vcm1hbCBib3RofUAtd2Via2l0LWtleWZyYW1lcyAtYW1wLXN0YXJ0e2Zyb217dmlzaWJpbGl0eTpoaWRkZW59dG97dmlzaWJpbGl0eTp2aXNpYmxlfX1ALW1vei1rZXlmcmFtZXMgLWFtcC1zdGFydHtmcm9te3Zpc2liaWxpdHk6aGlkZGVufXRve3Zpc2liaWxpdHk6dmlzaWJsZX19QC1tcy1rZXlmcmFtZXMgLWFtcC1zdGFydHtmcm9te3Zpc2liaWxpdHk6aGlkZGVufXRve3Zpc2liaWxpdHk6dmlzaWJsZX19QC1vLWtleWZyYW1lcyAtYW1wLXN0YXJ0e2Zyb217dmlzaWJpbGl0eTpoaWRkZW59dG97dmlzaWJpbGl0eTp2aXNpYmxlfX1Aa2V5ZnJhbWVzIC1hbXAtc3RhcnR7ZnJvbXt2aXNpYmlsaXR5OmhpZGRlbn10b3t2aXNpYmlsaXR5OnZpc2libGV9fWAsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPG5vc2NyaXB0PlxuICAgICAgICAgICAgICA8c3R5bGVcbiAgICAgICAgICAgICAgICBhbXAtYm9pbGVycGxhdGU9XCJcIlxuICAgICAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XG4gICAgICAgICAgICAgICAgICBfX2h0bWw6IGBib2R5ey13ZWJraXQtYW5pbWF0aW9uOm5vbmU7LW1vei1hbmltYXRpb246bm9uZTstbXMtYW5pbWF0aW9uOm5vbmU7YW5pbWF0aW9uOm5vbmV9YCxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9ub3NjcmlwdD5cbiAgICAgICAgICAgIDxzY3JpcHQgYXN5bmMgc3JjPVwiaHR0cHM6Ly9jZG4uYW1wcHJvamVjdC5vcmcvdjAuanNcIiAvPlxuICAgICAgICAgIDwvPlxuICAgICAgICApfVxuICAgICAgICB7IWluQW1wTW9kZSAmJiAoXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIHshaGFzQW1waHRtbFJlbCAmJiBoeWJyaWRBbXAgJiYgKFxuICAgICAgICAgICAgICA8bGlua1xuICAgICAgICAgICAgICAgIHJlbD1cImFtcGh0bWxcIlxuICAgICAgICAgICAgICAgIGhyZWY9e2Nhbm9uaWNhbEJhc2UgKyBnZXRBbXBQYXRoKGFtcFBhdGgsIGRhbmdlcm91c0FzUGF0aCl9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAge3RoaXMuZ2V0Q3NzTGlua3MoKX1cbiAgICAgICAgICAgIHshZGlzYWJsZVJ1bnRpbWVKUyAmJiAoXG4gICAgICAgICAgICAgIDxsaW5rXG4gICAgICAgICAgICAgICAgcmVsPVwicHJlbG9hZFwiXG4gICAgICAgICAgICAgICAgaHJlZj17XG4gICAgICAgICAgICAgICAgICBhc3NldFByZWZpeCArXG4gICAgICAgICAgICAgICAgICBnZXRPcHRpb25hbE1vZGVyblNjcmlwdFZhcmlhbnQoXG4gICAgICAgICAgICAgICAgICAgIGVuY29kZVVSSShgL19uZXh0L3N0YXRpYy8ke2J1aWxkSWR9L3BhZ2VzL19hcHAuanNgKVxuICAgICAgICAgICAgICAgICAgKSArXG4gICAgICAgICAgICAgICAgICBfZGV2T25seUludmFsaWRhdGVDYWNoZVF1ZXJ5U3RyaW5nXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGFzPVwic2NyaXB0XCJcbiAgICAgICAgICAgICAgICBub25jZT17dGhpcy5wcm9wcy5ub25jZX1cbiAgICAgICAgICAgICAgICBjcm9zc09yaWdpbj17dGhpcy5wcm9wcy5jcm9zc09yaWdpbiB8fCBwcm9jZXNzLmNyb3NzT3JpZ2lufVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIHshZGlzYWJsZVJ1bnRpbWVKUyAmJiBwYWdlICE9PSAnL19lcnJvcicgJiYgKFxuICAgICAgICAgICAgICA8bGlua1xuICAgICAgICAgICAgICAgIHJlbD1cInByZWxvYWRcIlxuICAgICAgICAgICAgICAgIGhyZWY9e1xuICAgICAgICAgICAgICAgICAgYXNzZXRQcmVmaXggK1xuICAgICAgICAgICAgICAgICAgZ2V0T3B0aW9uYWxNb2Rlcm5TY3JpcHRWYXJpYW50KFxuICAgICAgICAgICAgICAgICAgICBlbmNvZGVVUkkoXG4gICAgICAgICAgICAgICAgICAgICAgYC9fbmV4dC9zdGF0aWMvJHtidWlsZElkfS9wYWdlcyR7Z2V0UGFnZUZpbGUocGFnZSl9YFxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICApICtcbiAgICAgICAgICAgICAgICAgIF9kZXZPbmx5SW52YWxpZGF0ZUNhY2hlUXVlcnlTdHJpbmdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYXM9XCJzY3JpcHRcIlxuICAgICAgICAgICAgICAgIG5vbmNlPXt0aGlzLnByb3BzLm5vbmNlfVxuICAgICAgICAgICAgICAgIGNyb3NzT3JpZ2luPXt0aGlzLnByb3BzLmNyb3NzT3JpZ2luIHx8IHByb2Nlc3MuY3Jvc3NPcmlnaW59XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgeyFkaXNhYmxlUnVudGltZUpTICYmIHRoaXMuZ2V0UHJlbG9hZER5bmFtaWNDaHVua3MoKX1cbiAgICAgICAgICAgIHshZGlzYWJsZVJ1bnRpbWVKUyAmJiB0aGlzLmdldFByZWxvYWRNYWluTGlua3MoKX1cbiAgICAgICAgICAgIHt0aGlzLmNvbnRleHQuX2RvY3VtZW50UHJvcHMuaXNEZXZlbG9wbWVudCAmJiAoXG4gICAgICAgICAgICAgIC8vIHRoaXMgZWxlbWVudCBpcyB1c2VkIHRvIG1vdW50IGRldmVsb3BtZW50IHN0eWxlcyBzbyB0aGVcbiAgICAgICAgICAgICAgLy8gb3JkZXJpbmcgbWF0Y2hlcyBwcm9kdWN0aW9uXG4gICAgICAgICAgICAgIC8vIChieSBkZWZhdWx0LCBzdHlsZS1sb2FkZXIgaW5qZWN0cyBhdCB0aGUgYm90dG9tIG9mIDxoZWFkIC8+KVxuICAgICAgICAgICAgICA8bm9zY3JpcHQgaWQ9XCJfX25leHRfY3NzX19ET19OT1RfVVNFX19cIiAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIHtzdHlsZXMgfHwgbnVsbH1cbiAgICAgICAgICA8Lz5cbiAgICAgICAgKX1cbiAgICAgICAge1JlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIHt9LCAuLi4oaGVhZFRhZ3MgfHwgW10pKX1cbiAgICAgIDwvaGVhZD5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIE1haW4gZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgY29udGV4dFR5cGUgPSBEb2N1bWVudENvbXBvbmVudENvbnRleHRcblxuICBjb250ZXh0ITogUmVhY3QuQ29udGV4dFR5cGU8dHlwZW9mIERvY3VtZW50Q29tcG9uZW50Q29udGV4dD5cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBpbkFtcE1vZGUsIGh0bWwgfSA9IHRoaXMuY29udGV4dC5fZG9jdW1lbnRQcm9wc1xuICAgIGlmIChpbkFtcE1vZGUpIHJldHVybiBBTVBfUkVOREVSX1RBUkdFVFxuICAgIHJldHVybiA8ZGl2IGlkPVwiX19uZXh0XCIgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBodG1sIH19IC8+XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIE5leHRTY3JpcHQgZXh0ZW5kcyBDb21wb25lbnQ8T3JpZ2luUHJvcHM+IHtcbiAgc3RhdGljIGNvbnRleHRUeXBlID0gRG9jdW1lbnRDb21wb25lbnRDb250ZXh0XG5cbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBub25jZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBjcm9zc09yaWdpbjogUHJvcFR5cGVzLnN0cmluZyxcbiAgfVxuXG4gIGNvbnRleHQhOiBSZWFjdC5Db250ZXh0VHlwZTx0eXBlb2YgRG9jdW1lbnRDb21wb25lbnRDb250ZXh0PlxuXG4gIC8vIFNvdXJjZTogaHR0cHM6Ly9naXN0LmdpdGh1Yi5jb20vc2FtdGhvci82NGIxMTRlNGE0ZjUzOTkxNWE5NWI5MWZmZDM0MGFjY1xuICBzdGF0aWMgc2FmYXJpTm9tb2R1bGVGaXggPVxuICAgICchZnVuY3Rpb24oKXt2YXIgZT1kb2N1bWVudCx0PWUuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtpZighKFwibm9Nb2R1bGVcImluIHQpJiZcIm9uYmVmb3JlbG9hZFwiaW4gdCl7dmFyIG49ITE7ZS5hZGRFdmVudExpc3RlbmVyKFwiYmVmb3JlbG9hZFwiLGZ1bmN0aW9uKGUpe2lmKGUudGFyZ2V0PT09dCluPSEwO2Vsc2UgaWYoIWUudGFyZ2V0Lmhhc0F0dHJpYnV0ZShcIm5vbW9kdWxlXCIpfHwhbilyZXR1cm47ZS5wcmV2ZW50RGVmYXVsdCgpfSwhMCksdC50eXBlPVwibW9kdWxlXCIsdC5zcmM9XCIuXCIsZS5oZWFkLmFwcGVuZENoaWxkKHQpLHQucmVtb3ZlKCl9fSgpOydcblxuICBnZXREeW5hbWljQ2h1bmtzKCkge1xuICAgIGNvbnN0IHsgZHluYW1pY0ltcG9ydHMsIGFzc2V0UHJlZml4LCBmaWxlcyB9ID0gdGhpcy5jb250ZXh0Ll9kb2N1bWVudFByb3BzXG4gICAgY29uc3QgeyBfZGV2T25seUludmFsaWRhdGVDYWNoZVF1ZXJ5U3RyaW5nIH0gPSB0aGlzLmNvbnRleHRcblxuICAgIHJldHVybiBkZWR1cGUoZHluYW1pY0ltcG9ydHMpLm1hcCgoYnVuZGxlOiBhbnkpID0+IHtcbiAgICAgIGxldCBtb2Rlcm5Qcm9wcyA9IHt9XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX01PREVSTl9CVUlMRCkge1xuICAgICAgICBtb2Rlcm5Qcm9wcyA9IC9cXC5tb2R1bGVcXC5qcyQvLnRlc3QoYnVuZGxlLmZpbGUpXG4gICAgICAgICAgPyB7IHR5cGU6ICdtb2R1bGUnIH1cbiAgICAgICAgICA6IHsgbm9Nb2R1bGU6IHRydWUgfVxuICAgICAgfVxuXG4gICAgICBpZiAoIS9cXC5qcyQvLnRlc3QoYnVuZGxlLmZpbGUpIHx8IGZpbGVzLmluY2x1ZGVzKGJ1bmRsZS5maWxlKSkgcmV0dXJuIG51bGxcblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPHNjcmlwdFxuICAgICAgICAgIGFzeW5jXG4gICAgICAgICAga2V5PXtidW5kbGUuZmlsZX1cbiAgICAgICAgICBzcmM9e2Ake2Fzc2V0UHJlZml4fS9fbmV4dC8ke2VuY29kZVVSSShcbiAgICAgICAgICAgIGJ1bmRsZS5maWxlXG4gICAgICAgICAgKX0ke19kZXZPbmx5SW52YWxpZGF0ZUNhY2hlUXVlcnlTdHJpbmd9YH1cbiAgICAgICAgICBub25jZT17dGhpcy5wcm9wcy5ub25jZX1cbiAgICAgICAgICBjcm9zc09yaWdpbj17dGhpcy5wcm9wcy5jcm9zc09yaWdpbiB8fCBwcm9jZXNzLmNyb3NzT3JpZ2lufVxuICAgICAgICAgIHsuLi5tb2Rlcm5Qcm9wc31cbiAgICAgICAgLz5cbiAgICAgIClcbiAgICB9KVxuICB9XG5cbiAgZ2V0U2NyaXB0cygpIHtcbiAgICBjb25zdCB7IGFzc2V0UHJlZml4LCBmaWxlcywgbG93UHJpb3JpdHlGaWxlcyB9ID0gdGhpcy5jb250ZXh0Ll9kb2N1bWVudFByb3BzXG4gICAgY29uc3QgeyBfZGV2T25seUludmFsaWRhdGVDYWNoZVF1ZXJ5U3RyaW5nIH0gPSB0aGlzLmNvbnRleHRcblxuICAgIGNvbnN0IG5vcm1hbFNjcmlwdHMgPSBmaWxlcz8uZmlsdGVyKChmaWxlKSA9PiBmaWxlLmVuZHNXaXRoKCcuanMnKSlcbiAgICBjb25zdCBsb3dQcmlvcml0eVNjcmlwdHMgPSBsb3dQcmlvcml0eUZpbGVzPy5maWx0ZXIoKGZpbGUpID0+XG4gICAgICBmaWxlLmVuZHNXaXRoKCcuanMnKVxuICAgIClcblxuICAgIHJldHVybiBbLi4ubm9ybWFsU2NyaXB0cywgLi4ubG93UHJpb3JpdHlTY3JpcHRzXS5tYXAoKGZpbGUpID0+IHtcbiAgICAgIGxldCBtb2Rlcm5Qcm9wcyA9IHt9XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX01PREVSTl9CVUlMRCkge1xuICAgICAgICBtb2Rlcm5Qcm9wcyA9IGZpbGUuZW5kc1dpdGgoJy5tb2R1bGUuanMnKVxuICAgICAgICAgID8geyB0eXBlOiAnbW9kdWxlJyB9XG4gICAgICAgICAgOiB7IG5vTW9kdWxlOiB0cnVlIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxzY3JpcHRcbiAgICAgICAgICBrZXk9e2ZpbGV9XG4gICAgICAgICAgc3JjPXtgJHthc3NldFByZWZpeH0vX25leHQvJHtlbmNvZGVVUkkoXG4gICAgICAgICAgICBmaWxlXG4gICAgICAgICAgKX0ke19kZXZPbmx5SW52YWxpZGF0ZUNhY2hlUXVlcnlTdHJpbmd9YH1cbiAgICAgICAgICBub25jZT17dGhpcy5wcm9wcy5ub25jZX1cbiAgICAgICAgICBhc3luY1xuICAgICAgICAgIGNyb3NzT3JpZ2luPXt0aGlzLnByb3BzLmNyb3NzT3JpZ2luIHx8IHByb2Nlc3MuY3Jvc3NPcmlnaW59XG4gICAgICAgICAgey4uLm1vZGVyblByb3BzfVxuICAgICAgICAvPlxuICAgICAgKVxuICAgIH0pXG4gIH1cblxuICBnZXRQb2x5ZmlsbFNjcmlwdHMoKSB7XG4gICAgLy8gcG9seWZpbGxzLmpzIGhhcyB0byBiZSByZW5kZXJlZCBhcyBub21vZHVsZSB3aXRob3V0IGFzeW5jXG4gICAgLy8gSXQgYWxzbyBoYXMgdG8gYmUgdGhlIGZpcnN0IHNjcmlwdCB0byBsb2FkXG4gICAgY29uc3QgeyBhc3NldFByZWZpeCwgcG9seWZpbGxGaWxlcyB9ID0gdGhpcy5jb250ZXh0Ll9kb2N1bWVudFByb3BzXG4gICAgY29uc3QgeyBfZGV2T25seUludmFsaWRhdGVDYWNoZVF1ZXJ5U3RyaW5nIH0gPSB0aGlzLmNvbnRleHRcblxuICAgIHJldHVybiBwb2x5ZmlsbEZpbGVzXG4gICAgICAuZmlsdGVyKFxuICAgICAgICAocG9seWZpbGwpID0+XG4gICAgICAgICAgcG9seWZpbGwuZW5kc1dpdGgoJy5qcycpICYmICEvXFwubW9kdWxlXFwuanMkLy50ZXN0KHBvbHlmaWxsKVxuICAgICAgKVxuICAgICAgLm1hcCgocG9seWZpbGwpID0+IChcbiAgICAgICAgPHNjcmlwdFxuICAgICAgICAgIGtleT17cG9seWZpbGx9XG4gICAgICAgICAgbm9uY2U9e3RoaXMucHJvcHMubm9uY2V9XG4gICAgICAgICAgY3Jvc3NPcmlnaW49e3RoaXMucHJvcHMuY3Jvc3NPcmlnaW4gfHwgcHJvY2Vzcy5jcm9zc09yaWdpbn1cbiAgICAgICAgICBub01vZHVsZT17dHJ1ZX1cbiAgICAgICAgICBzcmM9e2Ake2Fzc2V0UHJlZml4fS9fbmV4dC8ke3BvbHlmaWxsfSR7X2Rldk9ubHlJbnZhbGlkYXRlQ2FjaGVRdWVyeVN0cmluZ31gfVxuICAgICAgICAvPlxuICAgICAgKSlcbiAgfVxuXG4gIHN0YXRpYyBnZXRJbmxpbmVTY3JpcHRTb3VyY2UoZG9jdW1lbnRQcm9wczogRG9jdW1lbnRQcm9wcyk6IHN0cmluZyB7XG4gICAgY29uc3QgeyBfX05FWFRfREFUQV9fIH0gPSBkb2N1bWVudFByb3BzXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGRhdGEgPSBKU09OLnN0cmluZ2lmeShfX05FWFRfREFUQV9fKVxuICAgICAgcmV0dXJuIGh0bWxFc2NhcGVKc29uU3RyaW5nKGRhdGEpXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBpZiAoZXJyLm1lc3NhZ2UuaW5kZXhPZignY2lyY3VsYXIgc3RydWN0dXJlJykpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgIGBDaXJjdWxhciBzdHJ1Y3R1cmUgaW4gXCJnZXRJbml0aWFsUHJvcHNcIiByZXN1bHQgb2YgcGFnZSBcIiR7X19ORVhUX0RBVEFfXy5wYWdlfVwiLiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9jaXJjdWxhci1zdHJ1Y3R1cmVgXG4gICAgICAgIClcbiAgICAgIH1cbiAgICAgIHRocm93IGVyclxuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBzdGF0aWNNYXJrdXAsXG4gICAgICBhc3NldFByZWZpeCxcbiAgICAgIGluQW1wTW9kZSxcbiAgICAgIGRldkZpbGVzLFxuICAgICAgX19ORVhUX0RBVEFfXyxcbiAgICAgIGJvZHlUYWdzLFxuICAgICAgdW5zdGFibGVfcnVudGltZUpTLFxuICAgIH0gPSB0aGlzLmNvbnRleHQuX2RvY3VtZW50UHJvcHNcbiAgICBjb25zdCBkaXNhYmxlUnVudGltZUpTID0gdW5zdGFibGVfcnVudGltZUpTID09PSBmYWxzZVxuXG4gICAgY29uc3QgeyBfZGV2T25seUludmFsaWRhdGVDYWNoZVF1ZXJ5U3RyaW5nIH0gPSB0aGlzLmNvbnRleHRcblxuICAgIGlmIChpbkFtcE1vZGUpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGRldkZpbGVzID0gW1xuICAgICAgICBDTElFTlRfU1RBVElDX0ZJTEVTX1JVTlRJTUVfUkVBQ1RfUkVGUkVTSCxcbiAgICAgICAgQ0xJRU5UX1NUQVRJQ19GSUxFU19SVU5USU1FX0FNUCxcbiAgICAgICAgQ0xJRU5UX1NUQVRJQ19GSUxFU19SVU5USU1FX1dFQlBBQ0ssXG4gICAgICBdXG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAge3N0YXRpY01hcmt1cCB8fCBkaXNhYmxlUnVudGltZUpTID8gbnVsbCA6IChcbiAgICAgICAgICAgIDxzY3JpcHRcbiAgICAgICAgICAgICAgaWQ9XCJfX05FWFRfREFUQV9fXCJcbiAgICAgICAgICAgICAgdHlwZT1cImFwcGxpY2F0aW9uL2pzb25cIlxuICAgICAgICAgICAgICBub25jZT17dGhpcy5wcm9wcy5ub25jZX1cbiAgICAgICAgICAgICAgY3Jvc3NPcmlnaW49e3RoaXMucHJvcHMuY3Jvc3NPcmlnaW4gfHwgcHJvY2Vzcy5jcm9zc09yaWdpbn1cbiAgICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tcbiAgICAgICAgICAgICAgICBfX2h0bWw6IE5leHRTY3JpcHQuZ2V0SW5saW5lU2NyaXB0U291cmNlKFxuICAgICAgICAgICAgICAgICAgdGhpcy5jb250ZXh0Ll9kb2N1bWVudFByb3BzXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgZGF0YS1hbXBkZXZtb2RlXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICl9XG4gICAgICAgICAge2RldkZpbGVzXG4gICAgICAgICAgICA/IGRldkZpbGVzLm1hcCgoZmlsZSkgPT4gKFxuICAgICAgICAgICAgICAgIDxzY3JpcHRcbiAgICAgICAgICAgICAgICAgIGtleT17ZmlsZX1cbiAgICAgICAgICAgICAgICAgIHNyYz17YCR7YXNzZXRQcmVmaXh9L19uZXh0LyR7ZmlsZX0ke19kZXZPbmx5SW52YWxpZGF0ZUNhY2hlUXVlcnlTdHJpbmd9YH1cbiAgICAgICAgICAgICAgICAgIG5vbmNlPXt0aGlzLnByb3BzLm5vbmNlfVxuICAgICAgICAgICAgICAgICAgY3Jvc3NPcmlnaW49e3RoaXMucHJvcHMuY3Jvc3NPcmlnaW4gfHwgcHJvY2Vzcy5jcm9zc09yaWdpbn1cbiAgICAgICAgICAgICAgICAgIGRhdGEtYW1wZGV2bW9kZVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICkpXG4gICAgICAgICAgICA6IG51bGx9XG4gICAgICAgICAge1JlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIHt9LCAuLi4oYm9keVRhZ3MgfHwgW10pKX1cbiAgICAgICAgPC8+XG4gICAgICApXG4gICAgfVxuXG4gICAgY29uc3QgeyBwYWdlLCBidWlsZElkIH0gPSBfX05FWFRfREFUQV9fXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKHRoaXMucHJvcHMuY3Jvc3NPcmlnaW4pXG4gICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAnV2FybmluZzogYE5leHRTY3JpcHRgIGF0dHJpYnV0ZSBgY3Jvc3NPcmlnaW5gIGlzIGRlcHJlY2F0ZWQuIGh0dHBzOi8vZXJyLnNoL25leHQuanMvZG9jLWNyb3Nzb3JpZ2luLWRlcHJlY2F0ZWQnXG4gICAgICAgIClcbiAgICB9XG5cbiAgICBjb25zdCBwYWdlU2NyaXB0ID0gW1xuICAgICAgPHNjcmlwdFxuICAgICAgICBhc3luY1xuICAgICAgICBkYXRhLW5leHQtcGFnZT17cGFnZX1cbiAgICAgICAga2V5PXtwYWdlfVxuICAgICAgICBzcmM9e1xuICAgICAgICAgIGFzc2V0UHJlZml4ICtcbiAgICAgICAgICBlbmNvZGVVUkkoYC9fbmV4dC9zdGF0aWMvJHtidWlsZElkfS9wYWdlcyR7Z2V0UGFnZUZpbGUocGFnZSl9YCkgK1xuICAgICAgICAgIF9kZXZPbmx5SW52YWxpZGF0ZUNhY2hlUXVlcnlTdHJpbmdcbiAgICAgICAgfVxuICAgICAgICBub25jZT17dGhpcy5wcm9wcy5ub25jZX1cbiAgICAgICAgY3Jvc3NPcmlnaW49e3RoaXMucHJvcHMuY3Jvc3NPcmlnaW4gfHwgcHJvY2Vzcy5jcm9zc09yaWdpbn1cbiAgICAgICAgey4uLihwcm9jZXNzLmVudi5fX05FWFRfTU9ERVJOX0JVSUxEID8geyBub01vZHVsZTogdHJ1ZSB9IDoge30pfVxuICAgICAgLz4sXG4gICAgICBwcm9jZXNzLmVudi5fX05FWFRfTU9ERVJOX0JVSUxEICYmIChcbiAgICAgICAgPHNjcmlwdFxuICAgICAgICAgIGFzeW5jXG4gICAgICAgICAgZGF0YS1uZXh0LXBhZ2U9e3BhZ2V9XG4gICAgICAgICAga2V5PXtgJHtwYWdlfS1tb2Rlcm5gfVxuICAgICAgICAgIHNyYz17XG4gICAgICAgICAgICBhc3NldFByZWZpeCArXG4gICAgICAgICAgICBnZXRPcHRpb25hbE1vZGVyblNjcmlwdFZhcmlhbnQoXG4gICAgICAgICAgICAgIGVuY29kZVVSSShgL19uZXh0L3N0YXRpYy8ke2J1aWxkSWR9L3BhZ2VzJHtnZXRQYWdlRmlsZShwYWdlKX1gKVxuICAgICAgICAgICAgKSArXG4gICAgICAgICAgICBfZGV2T25seUludmFsaWRhdGVDYWNoZVF1ZXJ5U3RyaW5nXG4gICAgICAgICAgfVxuICAgICAgICAgIG5vbmNlPXt0aGlzLnByb3BzLm5vbmNlfVxuICAgICAgICAgIGNyb3NzT3JpZ2luPXt0aGlzLnByb3BzLmNyb3NzT3JpZ2luIHx8IHByb2Nlc3MuY3Jvc3NPcmlnaW59XG4gICAgICAgICAgdHlwZT1cIm1vZHVsZVwiXG4gICAgICAgIC8+XG4gICAgICApLFxuICAgIF1cblxuICAgIGNvbnN0IGFwcFNjcmlwdCA9IFtcbiAgICAgIDxzY3JpcHRcbiAgICAgICAgYXN5bmNcbiAgICAgICAgZGF0YS1uZXh0LXBhZ2U9XCIvX2FwcFwiXG4gICAgICAgIHNyYz17XG4gICAgICAgICAgYXNzZXRQcmVmaXggK1xuICAgICAgICAgIGAvX25leHQvc3RhdGljLyR7YnVpbGRJZH0vcGFnZXMvX2FwcC5qc2AgK1xuICAgICAgICAgIF9kZXZPbmx5SW52YWxpZGF0ZUNhY2hlUXVlcnlTdHJpbmdcbiAgICAgICAgfVxuICAgICAgICBrZXk9XCJfYXBwXCJcbiAgICAgICAgbm9uY2U9e3RoaXMucHJvcHMubm9uY2V9XG4gICAgICAgIGNyb3NzT3JpZ2luPXt0aGlzLnByb3BzLmNyb3NzT3JpZ2luIHx8IHByb2Nlc3MuY3Jvc3NPcmlnaW59XG4gICAgICAgIHsuLi4ocHJvY2Vzcy5lbnYuX19ORVhUX01PREVSTl9CVUlMRCA/IHsgbm9Nb2R1bGU6IHRydWUgfSA6IHt9KX1cbiAgICAgIC8+LFxuICAgICAgcHJvY2Vzcy5lbnYuX19ORVhUX01PREVSTl9CVUlMRCAmJiAoXG4gICAgICAgIDxzY3JpcHRcbiAgICAgICAgICBhc3luY1xuICAgICAgICAgIGRhdGEtbmV4dC1wYWdlPVwiL19hcHBcIlxuICAgICAgICAgIHNyYz17XG4gICAgICAgICAgICBhc3NldFByZWZpeCArXG4gICAgICAgICAgICBgL19uZXh0L3N0YXRpYy8ke2J1aWxkSWR9L3BhZ2VzL19hcHAubW9kdWxlLmpzYCArXG4gICAgICAgICAgICBfZGV2T25seUludmFsaWRhdGVDYWNoZVF1ZXJ5U3RyaW5nXG4gICAgICAgICAgfVxuICAgICAgICAgIGtleT1cIl9hcHAtbW9kZXJuXCJcbiAgICAgICAgICBub25jZT17dGhpcy5wcm9wcy5ub25jZX1cbiAgICAgICAgICBjcm9zc09yaWdpbj17dGhpcy5wcm9wcy5jcm9zc09yaWdpbiB8fCBwcm9jZXNzLmNyb3NzT3JpZ2lufVxuICAgICAgICAgIHR5cGU9XCJtb2R1bGVcIlxuICAgICAgICAvPlxuICAgICAgKSxcbiAgICBdXG5cbiAgICByZXR1cm4gKFxuICAgICAgPD5cbiAgICAgICAgeyFkaXNhYmxlUnVudGltZUpTICYmIGRldkZpbGVzXG4gICAgICAgICAgPyBkZXZGaWxlcy5tYXAoXG4gICAgICAgICAgICAgIChmaWxlOiBzdHJpbmcpID0+XG4gICAgICAgICAgICAgICAgIWZpbGUubWF0Y2goL1xcLmpzXFwubWFwLykgJiYgKFxuICAgICAgICAgICAgICAgICAgPHNjcmlwdFxuICAgICAgICAgICAgICAgICAgICBrZXk9e2ZpbGV9XG4gICAgICAgICAgICAgICAgICAgIHNyYz17YCR7YXNzZXRQcmVmaXh9L19uZXh0LyR7ZW5jb2RlVVJJKFxuICAgICAgICAgICAgICAgICAgICAgIGZpbGVcbiAgICAgICAgICAgICAgICAgICAgKX0ke19kZXZPbmx5SW52YWxpZGF0ZUNhY2hlUXVlcnlTdHJpbmd9YH1cbiAgICAgICAgICAgICAgICAgICAgbm9uY2U9e3RoaXMucHJvcHMubm9uY2V9XG4gICAgICAgICAgICAgICAgICAgIGNyb3NzT3JpZ2luPXt0aGlzLnByb3BzLmNyb3NzT3JpZ2luIHx8IHByb2Nlc3MuY3Jvc3NPcmlnaW59XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcbiAgICAgICAgICA6IG51bGx9XG4gICAgICAgIHtzdGF0aWNNYXJrdXAgfHwgZGlzYWJsZVJ1bnRpbWVKUyA/IG51bGwgOiAoXG4gICAgICAgICAgPHNjcmlwdFxuICAgICAgICAgICAgaWQ9XCJfX05FWFRfREFUQV9fXCJcbiAgICAgICAgICAgIHR5cGU9XCJhcHBsaWNhdGlvbi9qc29uXCJcbiAgICAgICAgICAgIG5vbmNlPXt0aGlzLnByb3BzLm5vbmNlfVxuICAgICAgICAgICAgY3Jvc3NPcmlnaW49e3RoaXMucHJvcHMuY3Jvc3NPcmlnaW4gfHwgcHJvY2Vzcy5jcm9zc09yaWdpbn1cbiAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XG4gICAgICAgICAgICAgIF9faHRtbDogTmV4dFNjcmlwdC5nZXRJbmxpbmVTY3JpcHRTb3VyY2UoXG4gICAgICAgICAgICAgICAgdGhpcy5jb250ZXh0Ll9kb2N1bWVudFByb3BzXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgICl9XG4gICAgICAgIHtwcm9jZXNzLmVudi5fX05FWFRfTU9ERVJOX0JVSUxEICYmICFkaXNhYmxlUnVudGltZUpTID8gKFxuICAgICAgICAgIDxzY3JpcHRcbiAgICAgICAgICAgIG5vbmNlPXt0aGlzLnByb3BzLm5vbmNlfVxuICAgICAgICAgICAgY3Jvc3NPcmlnaW49e3RoaXMucHJvcHMuY3Jvc3NPcmlnaW4gfHwgcHJvY2Vzcy5jcm9zc09yaWdpbn1cbiAgICAgICAgICAgIG5vTW9kdWxlPXt0cnVlfVxuICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tcbiAgICAgICAgICAgICAgX19odG1sOiBOZXh0U2NyaXB0LnNhZmFyaU5vbW9kdWxlRml4LFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICApIDogbnVsbH1cbiAgICAgICAgeyFkaXNhYmxlUnVudGltZUpTICYmIHRoaXMuZ2V0UG9seWZpbGxTY3JpcHRzKCl9XG4gICAgICAgIHshZGlzYWJsZVJ1bnRpbWVKUyAmJiBhcHBTY3JpcHR9XG4gICAgICAgIHshZGlzYWJsZVJ1bnRpbWVKUyAmJiBwYWdlICE9PSAnL19lcnJvcicgJiYgcGFnZVNjcmlwdH1cbiAgICAgICAge2Rpc2FibGVSdW50aW1lSlMgfHwgc3RhdGljTWFya3VwID8gbnVsbCA6IHRoaXMuZ2V0RHluYW1pY0NodW5rcygpfVxuICAgICAgICB7ZGlzYWJsZVJ1bnRpbWVKUyB8fCBzdGF0aWNNYXJrdXAgPyBudWxsIDogdGhpcy5nZXRTY3JpcHRzKCl9XG4gICAgICAgIHtSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCB7fSwgLi4uKGJvZHlUYWdzIHx8IFtdKSl9XG4gICAgICA8Lz5cbiAgICApXG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0QW1wUGF0aChhbXBQYXRoOiBzdHJpbmcsIGFzUGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIGFtcFBhdGggfHwgYCR7YXNQYXRofSR7YXNQYXRoLmluY2x1ZGVzKCc/JykgPyAnJicgOiAnPyd9YW1wPTFgXG59XG5cbmZ1bmN0aW9uIGdldFBhZ2VGaWxlKHBhZ2U6IHN0cmluZywgYnVpbGRJZD86IHN0cmluZyk6IHN0cmluZyB7XG4gIGNvbnN0IHN0YXJ0aW5nVXJsID0gcGFnZSA9PT0gJy8nID8gJy9pbmRleCcgOiBwYWdlXG4gIHJldHVybiBidWlsZElkID8gYCR7c3RhcnRpbmdVcmx9LiR7YnVpbGRJZH0uanNgIDogYCR7c3RhcnRpbmdVcmx9LmpzYFxufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5odG1sRXNjYXBlSnNvblN0cmluZz1odG1sRXNjYXBlSnNvblN0cmluZzsvLyBUaGlzIHV0aWxpdHkgaXMgYmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL3plcnRvc2gvaHRtbGVzY2FwZVxuLy8gTGljZW5zZTogaHR0cHM6Ly9naXRodWIuY29tL3plcnRvc2gvaHRtbGVzY2FwZS9ibG9iLzA1MjdjYTcxNTZhNTI0ZDI1NjEwMWJiMzEwYTlmOTcwZjYzMDc4YWQvTElDRU5TRVxuY29uc3QgRVNDQVBFX0xPT0tVUD17JyYnOidcXFxcdTAwMjYnLCc+JzonXFxcXHUwMDNlJywnPCc6J1xcXFx1MDAzYycsJ1xcdTIwMjgnOidcXFxcdTIwMjgnLCdcXHUyMDI5JzonXFxcXHUyMDI5J307Y29uc3QgRVNDQVBFX1JFR0VYPS9bJj48XFx1MjAyOFxcdTIwMjldL2c7ZnVuY3Rpb24gaHRtbEVzY2FwZUpzb25TdHJpbmcoc3RyKXtyZXR1cm4gc3RyLnJlcGxhY2UoRVNDQVBFX1JFR0VYLG1hdGNoPT5FU0NBUEVfTE9PS1VQW21hdGNoXSk7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aHRtbGVzY2FwZS5qcy5tYXAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9wYWdlcy9fZG9jdW1lbnQnKVxuIiwiaW1wb3J0IERvY3VtZW50LCB7IEh0bWwsIEhlYWQsIE1haW4sIE5leHRTY3JpcHQgfSBmcm9tICduZXh0L2RvY3VtZW50JztcblxuY2xhc3MgTXlEb2N1bWVudCBleHRlbmRzIERvY3VtZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8SHRtbCBsYW5nPVwienh4XCI+XG4gICAgICAgICAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MSwgc2hyaW5rLXRvLWZpdD1ub1wiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cImljb25cIiB0eXBlPVwiaW1hZ2UvcG5nXCIgaHJlZj17cmVxdWlyZShcIi4uL2ltYWdlcy9mYXZpY29uLnBuZ1wiKX0+PC9saW5rPlxuICAgICAgICAgICAgICAgIDwvSGVhZD5cbiAgICAgICAgICAgICAgICA8Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgPE1haW4gLz5cbiAgICAgICAgICAgICAgICAgICAgPE5leHRTY3JpcHQgLz5cbiAgICAgICAgICAgICAgICA8L2JvZHk+XG4gICAgICAgICAgICA8L0h0bWw+XG4gICAgICAgIClcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE15RG9jdW1lbnQ7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtanN4L3NlcnZlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9