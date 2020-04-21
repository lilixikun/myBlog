/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js?!./src/shared/containers/Home/index.less":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js??ref--6-2!./src/shared/containers/Home/index.less ***!
  \**************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \".content {\\n  position: relative;\\n  display: flex;\\n  flex-direction: row;\\n  justify-content: space-between;\\n}\\n.aside-left {\\n  float: 1;\\n}\\n.aside-right {\\n  width: 350px;\\n  height: 100%;\\n}\\n.aside-right img {\\n  width: 100%;\\n  height: 170px;\\n}\\n.xk-tags {\\n  width: 350px;\\n  border-radius: 4px;\\n  padding: 10px 20px;\\n  border: 1px solid #eeeeee;\\n}\\n.xk-tags .hot-tas {\\n  position: relative;\\n  font-size: 18px;\\n  color: #000000;\\n  padding-bottom: 10px;\\n  border-bottom: 1px solid #EEE;\\n  font-weight: bold;\\n  padding-left: 10px;\\n}\\n.xk-tags .hot-tas:before {\\n  content: '';\\n  position: absolute;\\n  left: 0px;\\n  top: 3px;\\n  width: 2px;\\n  height: 60%;\\n  background-color: #4B9AF4;\\n}\\n.xk-tags .tag-content {\\n  display: flex;\\n  margin-top: 10px;\\n  flex-direction: row;\\n  flex-wrap: wrap;\\n}\\n.xk-tags .tag {\\n  padding: 6px 10px;\\n  color: #fff;\\n  font-size: 12px;\\n  border-radius: 8px;\\n  cursor: pointer;\\n  margin-right: 15px;\\n  margin-bottom: 15px;\\n}\\n.hot-article {\\n  position: relative;\\n  display: flex;\\n  flex-direction: row;\\n  margin-bottom: 20px;\\n  cursor: pointer;\\n}\\n.hot-article .img-wrapper {\\n  width: 96px;\\n  height: 60px;\\n  overflow: hidden;\\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.6);\\n  margin-right: 10px;\\n  border: 3px solid #000;\\n}\\n.hot-article .img-wrapper img {\\n  width: 96px;\\n  height: 60px;\\n  border-radius: 2px;\\n  transition: 0.3s linear;\\n}\\n.hot-article .img-wrapper img:hover {\\n  transform: scale(1.1);\\n}\\n.hot-article > div {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: space-between;\\n}\\n.hot-article > div .time {\\n  font-size: 12px;\\n  color: #999;\\n}\\n.title {\\n  font-size: 14px;\\n  color: #000;\\n  line-height: 22px;\\n}\\n.hot-article:hover .title,\\n.sort-content:hover .title {\\n  color: #4B9AF4;\\n}\\n.sort {\\n  position: absolute;\\n  top: 0;\\n  left: 0;\\n  width: 18px;\\n  height: 18px;\\n  background-color: #4B9AF4;\\n  font-size: 12px;\\n  color: #fff;\\n  text-align: center;\\n}\\n.sort-content {\\n  display: flex;\\n  flex-direction: row;\\n  align-items: center;\\n  border-radius: 4px;\\n  margin-bottom: 15px;\\n  cursor: pointer;\\n}\\n.sort-content span {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  width: 20px;\\n  height: 20px;\\n  color: #999999;\\n  border: 1px solid #EEEEEE;\\n  margin-right: 10px;\\n  font-size: 12px;\\n}\\n.sort-content > p {\\n  white-space: nowrap;\\n  overflow: hidden;\\n  text-overflow: ellipsis;\\n}\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/shared/containers/Home/index.less?./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js??ref--6-2");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./src/shared/containers/App.css":
/*!***************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-1!./src/shared/containers/App.css ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"* {\\n    margin: 0;\\n    padding: 0;\\n    box-sizing: border-box;\\n}\\n\\nbody {\\n    background: #202020;\\n}\\n\\n._3VeaFWvN5pIRBIFAztD79H {\\n    max-width: 1300px;\\n    height: 100vh;\\n    margin: 0 auto;\\n    display: flex;\\n    background-color: #fff;\\n    flex-direction: column;\\n    font-family: microsoft yahei, wenquanyi micro hei, sans-serif !important;\\n}\\n\\nnav {\\n    height: 60px;\\n    padding-left: 120px;\\n}\\n\\nnav,\\nfooter {\\n    background: #000000;\\n    display: flex;\\n    align-items: center;\\n    color: #fff;\\n    font-family: PingFangSC-Regular, PingFang SC;\\n    font-size: 14px;\\n    font-weight: 400;\\n}\\n\\n._3UuA-CJ5Ml-hxhxn0mFS4E {\\n    color: #bdbdbd;\\n    flex: auto;\\n    padding: 40px 120px;\\n    background-color: #fff;\\n}\\n\\nfooter {\\n    flex-shrink: 0;\\n    flex-direction: column;\\n    justify-content: center;\\n    padding: 20px 0;\\n    line-height: 22px;\\n}\", \"\"]);\n// Exports\nexports.locals = {\n\t\"layout\": \"_3VeaFWvN5pIRBIFAztD79H\",\n\t\"main\": \"_3UuA-CJ5Ml-hxhxn0mFS4E\"\n};\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/shared/containers/App.css?./node_modules/css-loader/dist/cjs.js??ref--5-1");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./src/shared/containers/Me/index.css":
/*!********************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-1!./src/shared/containers/Me/index.css ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/shared/containers/Me/index.css?./node_modules/css-loader/dist/cjs.js??ref--5-1");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./src/shared/containers/component/Header/index.css":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-1!./src/shared/containers/component/Header/index.css ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"._9LTgN0LDpgz6aPz8TGAQu {\\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n    width: 100px;\\n    height: 60px;\\n    color: #fff;\\n    /* padding-top: 10px; */\\n    transition: all 0.2s;\\n}\\n\\n._2rK3zGnjG0YL0EL5XIzzGI {\\n    background-color: rgba(255, 255, 255, 0.2);\\n}\\n\\n._2rS4vOjoPFmVmBOiDLYGlW {\\n    height: 60px;\\n    cursor: pointer;\\n    margin-right: 20px;\\n}\\n\\n._2rS4vOjoPFmVmBOiDLYGlW span {\\n    position: relative;\\n    text-align: center;\\n    color: white;\\n    font-size: 22px;\\n    animation: _3WojFZp4TacxdQzFu7Fx5U 1s cubic-bezier(0.1, 0.5, 0.2, 1) infinite alternate;\\n    top: 0px;\\n}\\n\\n\\n._2rS4vOjoPFmVmBOiDLYGlW span:nth-child(1) {\\n    animation-delay: 0s;\\n}\\n\\n._2rS4vOjoPFmVmBOiDLYGlW span:nth-child(2) {\\n    animation-delay: 0.1s;\\n}\\n\\n._2rS4vOjoPFmVmBOiDLYGlW span:nth-child(3) {\\n    animation-delay: 0.2s;\\n}\\n\\n._2rS4vOjoPFmVmBOiDLYGlW span:nth-child(4) {\\n    animation-delay: 0.3s;\\n}\\n\\n._2rS4vOjoPFmVmBOiDLYGlW span:nth-child(5) {\\n    animation-delay: 0.4s;\\n}\\n\\n._2rS4vOjoPFmVmBOiDLYGlW span:nth-child(6) {\\n    animation-delay: 0.5s;\\n}\\n\\n._2rS4vOjoPFmVmBOiDLYGlW span:nth-child(7) {\\n    animation-delay: 0.6s;\\n}\\n\\n@keyframes _3WojFZp4TacxdQzFu7Fx5U {\\n    from {\\n        top: 0px;\\n        /* text-shadow: blanchedalmond 0 0 0.05em; */\\n    }\\n\\n    to {\\n        top: 20px;\\n        /* text-shadow: blanchedalmond 0 1em 0.2em; */\\n    }\\n}\", \"\"]);\n// Exports\nexports.locals = {\n\t\"na_link\": \"_9LTgN0LDpgz6aPz8TGAQu\",\n\t\"na_activel_link\": \"_2rK3zGnjG0YL0EL5XIzzGI\",\n\t\"na_title\": \"_2rS4vOjoPFmVmBOiDLYGlW\",\n\t\"letter\": \"_3WojFZp4TacxdQzFu7Fx5U\"\n};\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/shared/containers/component/Header/index.css?./node_modules/css-loader/dist/cjs.js??ref--5-1");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/isomorphic-style-loader/insertCss.js":
/*!***********************************************************!*\
  !*** ./node_modules/isomorphic-style-loader/insertCss.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/*! Isomorphic Style Loader | MIT License | https://github.com/kriasoft/isomorphic-style-loader */\n\n\n\nvar inserted = {};\n\nfunction b64EncodeUnicode(str) {\n  return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function (match, p1) {\n    return String.fromCharCode(\"0x\" + p1);\n  }));\n}\n\nfunction removeCss(ids) {\n  ids.forEach(function (id) {\n    if (--inserted[id] <= 0) {\n      var elem = document.getElementById(id);\n\n      if (elem) {\n        elem.parentNode.removeChild(elem);\n      }\n    }\n  });\n}\n\nfunction insertCss(styles, _temp) {\n  var _ref = _temp === void 0 ? {} : _temp,\n      _ref$replace = _ref.replace,\n      replace = _ref$replace === void 0 ? false : _ref$replace,\n      _ref$prepend = _ref.prepend,\n      prepend = _ref$prepend === void 0 ? false : _ref$prepend,\n      _ref$prefix = _ref.prefix,\n      prefix = _ref$prefix === void 0 ? 's' : _ref$prefix;\n\n  var ids = [];\n\n  for (var i = 0; i < styles.length; i++) {\n    var _styles$i = styles[i],\n        moduleId = _styles$i[0],\n        css = _styles$i[1],\n        media = _styles$i[2],\n        sourceMap = _styles$i[3];\n    var id = \"\" + prefix + moduleId + \"-\" + i;\n    ids.push(id);\n\n    if (inserted[id]) {\n      if (!replace) {\n        inserted[id]++;\n        continue;\n      }\n    }\n\n    inserted[id] = 1;\n    var elem = document.getElementById(id);\n    var create = false;\n\n    if (!elem) {\n      create = true;\n      elem = document.createElement('style');\n      elem.setAttribute('type', 'text/css');\n      elem.id = id;\n\n      if (media) {\n        elem.setAttribute('media', media);\n      }\n    }\n\n    var cssText = css;\n\n    if (sourceMap && typeof btoa === 'function') {\n      cssText += \"\\n/*# sourceMappingURL=data:application/json;base64,\" + b64EncodeUnicode(JSON.stringify(sourceMap)) + \"*/\";\n      cssText += \"\\n/*# sourceURL=\" + sourceMap.file + \"?\" + id + \"*/\";\n    }\n\n    if ('textContent' in elem) {\n      elem.textContent = cssText;\n    } else {\n      elem.styleSheet.cssText = cssText;\n    }\n\n    if (create) {\n      if (prepend) {\n        document.head.insertBefore(elem, document.head.childNodes[0]);\n      } else {\n        document.head.appendChild(elem);\n      }\n    }\n  }\n\n  return removeCss.bind(null, ids);\n}\n\nmodule.exports = insertCss;\n//# sourceMappingURL=insertCss.js.map\n\n\n//# sourceURL=webpack:///./node_modules/isomorphic-style-loader/insertCss.js?");

/***/ }),

/***/ "./src/server/index.js":
/*!*****************************!*\
  !*** ./src/server/index.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var http_proxy_middleware__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! http-proxy-middleware */ \"http-proxy-middleware\");\n/* harmony import */ var http_proxy_middleware__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(http_proxy_middleware__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ \"./src/server/utils.js\");\n\n\n\nconst app = express__WEBPACK_IMPORTED_MODULE_0___default()();\napp.use(express__WEBPACK_IMPORTED_MODULE_0___default.a.static('public')); // app.use(\n//     '/api',\n//     proxy('http://localhost:7071', {\n//         proxyReqPathResolver(req) {\n//             return `/api/${req.url}`;\n//         },\n//     }),\n// );\n\napp.get('*', (req, res) => {\n  const html = Object(_utils__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(req, res);\n  res.send(html);\n});\napp.listen('8082');\n\n//# sourceURL=webpack:///./src/server/index.js?");

/***/ }),

/***/ "./src/server/utils.js":
/*!*****************************!*\
  !*** ./src/server/utils.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_config__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var html_minifier__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! html-minifier */ \"html-minifier\");\n/* harmony import */ var html_minifier__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(html_minifier__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _shared_containers_Routers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/containers/Routers */ \"./src/shared/containers/Routers.js\");\n/* harmony import */ var _shared_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/store */ \"./src/shared/store/index.js\");\n\n\n\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ((req, res) => {\n  const context = {\n    css: []\n  };\n  const ele = Object(react_dom_server__WEBPACK_IMPORTED_MODULE_4__[\"renderToString\"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_2__[\"Provider\"], {\n    store: Object(_shared_store__WEBPACK_IMPORTED_MODULE_7__[\"getServerStore\"])()\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"StaticRouter\"], {\n    location: req.url,\n    context: context\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], null, Object(react_router_config__WEBPACK_IMPORTED_MODULE_3__[\"renderRoutes\"])(_shared_containers_Routers__WEBPACK_IMPORTED_MODULE_6__[\"default\"])))));\n  const cssStr = context.css.length ? context.css.join(\"\\n\") : '';\n  console.log(cssStr);\n  const html = `<!DOCTYPE html>\n        <html lang=\"en\">\n        <head>\n        <meta charset=\"UTF-8\">\n        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n        <title>Document111</title>\n        <style>${cssStr}</style>\n        \n        </head>\n\n        <body>\n            <div id=\"root\">${ele}</div>\n            <script src=\"/index.js\"></script>\n        </body>\n        </html>\n    `;\n  const minifyHtml = Object(html_minifier__WEBPACK_IMPORTED_MODULE_5__[\"minify\"])(html, {\n    minifyCSS: true,\n    minifyJS: true,\n    minifyURLs: true\n  });\n  console.log(minifyHtml);\n  return minifyHtml;\n});\n\n//# sourceURL=webpack:///./src/server/utils.js?");

/***/ }),

/***/ "./src/shared/containers/App.css":
/*!***************************************!*\
  !*** ./src/shared/containers/App.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\n    var refs = 0;\n    var css = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-1!./App.css */ \"./node_modules/css-loader/dist/cjs.js?!./src/shared/containers/App.css\");\n    var insertCss = __webpack_require__(/*! ../../../node_modules/isomorphic-style-loader/insertCss.js */ \"./node_modules/isomorphic-style-loader/insertCss.js\");\n    var content = typeof css === 'string' ? [[module.i, css, '']] : css;\n\n    exports = module.exports = css.locals || {};\n    exports._getContent = function() { return content; };\n    exports._getCss = function() { return '' + css; };\n    exports._insertCss = function(options) { return insertCss(content, options) };\n\n    // Hot Module Replacement\n    // https://webpack.github.io/docs/hot-module-replacement\n    // Only activated in browser context\n    if (false) { var removeCss; }\n  \n\n//# sourceURL=webpack:///./src/shared/containers/App.css?");

/***/ }),

/***/ "./src/shared/containers/App.js":
/*!**************************************!*\
  !*** ./src/shared/containers/App.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_config__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _component_WithStylesHOC__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./component/WithStylesHOC */ \"./src/shared/containers/component/WithStylesHOC.js\");\n/* harmony import */ var _component_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./component/Header */ \"./src/shared/containers/component/Header/index.js\");\n/* harmony import */ var _component_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./component/Footer */ \"./src/shared/containers/component/Footer/index.js\");\n/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./App.css */ \"./src/shared/containers/App.css\");\n/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\n\nconst App = props => {\n  const {\n    route\n  } = props;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: _App_css__WEBPACK_IMPORTED_MODULE_5___default.a.layout\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_component_Header__WEBPACK_IMPORTED_MODULE_3__[\"default\"], props), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: _App_css__WEBPACK_IMPORTED_MODULE_5___default.a.main\n  }, Object(react_router_config__WEBPACK_IMPORTED_MODULE_1__[\"renderRoutes\"])(route.routes)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_component_Footer__WEBPACK_IMPORTED_MODULE_4__[\"default\"], null));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_component_WithStylesHOC__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(App, _App_css__WEBPACK_IMPORTED_MODULE_5___default.a));\n\n//# sourceURL=webpack:///./src/shared/containers/App.js?");

/***/ }),

/***/ "./src/shared/containers/Hello/index.js":
/*!**********************************************!*\
  !*** ./src/shared/containers/Hello/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nclass Hello extends react__WEBPACK_IMPORTED_MODULE_0__[\"PureComponent\"] {\n  render() {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"\\u6587\\u4F73\\u5C0F\\u59D0\\u59D0\");\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Hello);\n\n//# sourceURL=webpack:///./src/shared/containers/Hello/index.js?");

/***/ }),

/***/ "./src/shared/containers/Home/index.js":
/*!*********************************************!*\
  !*** ./src/shared/containers/Home/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ \"./src/shared/containers/utils/index.js\");\n/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.less */ \"./src/shared/containers/Home/index.less\");\n/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst tags = [\"前段\", \"Sql\", \"Vue\", \"JAVA\", \"测试\", \"Python\"];\n\nclass Home extends react__WEBPACK_IMPORTED_MODULE_0__[\"PureComponent\"] {\n  render() {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"content\"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"aside\", {\n      className: \"aside-left\"\n    }, \"Left\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"aside\", {\n      className: \"aside-right\"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"xk-tags\"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"hot-tas\"\n    }, \"\\u70ED\\u95E8\\u6807\\u7B7E\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"section\", {\n      className: \"tag-content\"\n    }, tags.map((item, index) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"tag\",\n      style: {\n        background: Object(_utils__WEBPACK_IMPORTED_MODULE_2__[\"getRandomColor\"])()\n      },\n      key: index\n    }, item)))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"xk-tags\",\n      style: {\n        marginTop: 20\n      }\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"hot-tas\"\n    }, \"\\u63A8\\u8350\\u6587\\u7AE0\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"section\", {\n      className: \"tag-content\"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"hot-article\"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"img-wrapper\"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n      src: \"https://t9.baidu.com/it/u=1307125826,3433407105&fm=79&app=86&size=h300&n=0&g=4n&f=jpeg?sec=1587982384&t=da2294a846663c27e8b3b0bd00cf6405\"\n    })), \"                                    \", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n      className: \"title\"\n    }, \"CSS3\\u4E2D\\u5E38\\u89C1\\u7684\\u5355\\u4F4D\\u53CA\\u603B\\u7ED3\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n      className: \"time\"\n    }, \"2020-03-29\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"sort\"\n    }, \"1\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"hot-article\"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"img-wrapper\"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n      src: \"https://t9.baidu.com/it/u=1307125826,3433407105&fm=79&app=86&size=h300&n=0&g=4n&f=jpeg?sec=1587982384&t=da2294a846663c27e8b3b0bd00cf6405\"\n    })), \"                                    \", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n      className: \"title\"\n    }, \"CSS3\\u4E2D\\u5E38\\u89C1\\u7684\\u5355\\u4F4D\\u53CA\\u603B\\u7ED3\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n      className: \"time\"\n    }, \"2020-03-29\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"sort\"\n    }, \"2\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"hot-article\"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"img-wrapper\"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n      src: \"https://t9.baidu.com/it/u=1307125826,3433407105&fm=79&app=86&size=h300&n=0&g=4n&f=jpeg?sec=1587982384&t=da2294a846663c27e8b3b0bd00cf6405\"\n    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n      className: \"title\"\n    }, \"CSS3\\u4E2D\\u5E38\\u89C1\\u7684\\u5355\\u4F4D\\u53CA\\u603B\\u7ED3\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n      className: \"time\"\n    }, \"2020-03-29\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"sort\"\n    }, \"3\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"sort-content\"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", null, \"4\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n      className: \"title\"\n    }, \"\\u975E\\u5B98\\u65B9\\u4E2A\\u98CE\\u683C\\u975E\\u5B98\\u65B9\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"sort-content\"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", null, \"5\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n      className: \"title\"\n    }, \"\\u975E\\u5B98\\u65B9\\u4E2A\\u98CE\\u683C\\u975E\\u5B98\\u65B9\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"sort-content\"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", null, \"6\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n      className: \"title\"\n    }, \"\\u975E\\u5B98\\u65B9\\u4E2A\\u98CE\\u683C\\u975E\\u5B98\\u65B9\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"sort-content\"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", null, \"7\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n      className: \"title\"\n    }, \"\\u975E\\u5B98\\u65B9\\u4E2A\\u98CE\\u683C\\u975E\\u5B98\\u65B9\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"sort-content\"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", null, \"8\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n      className: \"title\"\n    }, \"\\u975E\\u5B98\\u65B9\\u4E2A\\u98CE\\u683C\\u975E\\u5B98\\u65B9\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"sort-content\"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", null, \"9\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n      className: \"title\"\n    }, \"\\u975E\\u5B98\\u65B9\\u4E2A\\u98CE\\u683C\\u975E\\u5B98\\u65B9\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"sort-content\"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", null, \"10\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n      className: \"title\"\n    }, \"\\u975E\\u5B98\\u65B9\\u4E2A\\u98CE\\u683C\\u975E\\u5B98\\u65B9\")))))));\n  }\n\n}\n\nconst mapStateToProps = state => ({});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(mapStateToProps, null)(Home));\n\n//# sourceURL=webpack:///./src/shared/containers/Home/index.js?");

/***/ }),

/***/ "./src/shared/containers/Home/index.less":
/*!***********************************************!*\
  !*** ./src/shared/containers/Home/index.less ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\n    var refs = 0;\n    var css = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/less-loader/dist/cjs.js??ref--6-2!./index.less */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js?!./src/shared/containers/Home/index.less\");\n    var insertCss = __webpack_require__(/*! ../../../../node_modules/isomorphic-style-loader/insertCss.js */ \"./node_modules/isomorphic-style-loader/insertCss.js\");\n    var content = typeof css === 'string' ? [[module.i, css, '']] : css;\n\n    exports = module.exports = css.locals || {};\n    exports._getContent = function() { return content; };\n    exports._getCss = function() { return '' + css; };\n    exports._insertCss = function(options) { return insertCss(content, options) };\n\n    // Hot Module Replacement\n    // https://webpack.github.io/docs/hot-module-replacement\n    // Only activated in browser context\n    if (false) { var removeCss; }\n  \n\n//# sourceURL=webpack:///./src/shared/containers/Home/index.less?");

/***/ }),

/***/ "./src/shared/containers/Home/store/actions.js":
/*!*****************************************************!*\
  !*** ./src/shared/containers/Home/store/actions.js ***!
  \*****************************************************/
/*! exports provided: getTag */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getTag\", function() { return getTag; });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./src/shared/containers/Home/store/constants.js\");\n\nconst getTag = () => ({\n  type: _constants__WEBPACK_IMPORTED_MODULE_0__[\"HOME_GETTAG\"]\n});\n\n//# sourceURL=webpack:///./src/shared/containers/Home/store/actions.js?");

/***/ }),

/***/ "./src/shared/containers/Home/store/constants.js":
/*!*******************************************************!*\
  !*** ./src/shared/containers/Home/store/constants.js ***!
  \*******************************************************/
/*! exports provided: HOME_GETTAG */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"HOME_GETTAG\", function() { return HOME_GETTAG; });\nconst HOME_GETTAG = 'HOME_GETTAG';\n\n//# sourceURL=webpack:///./src/shared/containers/Home/store/constants.js?");

/***/ }),

/***/ "./src/shared/containers/Home/store/index.js":
/*!***************************************************!*\
  !*** ./src/shared/containers/Home/store/index.js ***!
  \***************************************************/
/*! exports provided: reducer, actions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reducer */ \"./src/shared/containers/Home/store/reducer.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"reducer\", function() { return _reducer__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions */ \"./src/shared/containers/Home/store/actions.js\");\n/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, \"actions\", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__; });\n\n\n\n\n//# sourceURL=webpack:///./src/shared/containers/Home/store/index.js?");

/***/ }),

/***/ "./src/shared/containers/Home/store/reducer.js":
/*!*****************************************************!*\
  !*** ./src/shared/containers/Home/store/reducer.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./src/shared/containers/Home/store/constants.js\");\n\nconst initState = {};\n/* harmony default export */ __webpack_exports__[\"default\"] = ((state = initState, actions) => {\n  switch (actions.type) {\n    case _constants__WEBPACK_IMPORTED_MODULE_0__[\"HOME_GETTAG\"]:\n      break;\n\n    default:\n      return state;\n  }\n});\n\n//# sourceURL=webpack:///./src/shared/containers/Home/store/reducer.js?");

/***/ }),

/***/ "./src/shared/containers/Me/index.css":
/*!********************************************!*\
  !*** ./src/shared/containers/Me/index.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\n    var refs = 0;\n    var css = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--5-1!./index.css */ \"./node_modules/css-loader/dist/cjs.js?!./src/shared/containers/Me/index.css\");\n    var insertCss = __webpack_require__(/*! ../../../../node_modules/isomorphic-style-loader/insertCss.js */ \"./node_modules/isomorphic-style-loader/insertCss.js\");\n    var content = typeof css === 'string' ? [[module.i, css, '']] : css;\n\n    exports = module.exports = css.locals || {};\n    exports._getContent = function() { return content; };\n    exports._getCss = function() { return '' + css; };\n    exports._insertCss = function(options) { return insertCss(content, options) };\n\n    // Hot Module Replacement\n    // https://webpack.github.io/docs/hot-module-replacement\n    // Only activated in browser context\n    if (false) { var removeCss; }\n  \n\n//# sourceURL=webpack:///./src/shared/containers/Me/index.css?");

/***/ }),

/***/ "./src/shared/containers/Me/index.js":
/*!*******************************************!*\
  !*** ./src/shared/containers/Me/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ \"./src/shared/containers/Me/index.css\");\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nclass Me extends react__WEBPACK_IMPORTED_MODULE_0__[\"PureComponent\"] {\n  componentDidMount() {\n    if (this.props.staticContext) {\n      console.log(111111);\n      this.props.staticContext.css.push(_index_css__WEBPACK_IMPORTED_MODULE_2___default.a._getCss());\n    }\n  }\n\n  render() {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: _index_css__WEBPACK_IMPORTED_MODULE_2___default.a.my\n    }, \"Me\");\n  }\n\n}\n\nconst mapStateToProps = state => ({\n  isLogin: state.user.isLogin\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(mapStateToProps, null)(Me));\n\n//# sourceURL=webpack:///./src/shared/containers/Me/index.js?");

/***/ }),

/***/ "./src/shared/containers/Routers.js":
/*!******************************************!*\
  !*** ./src/shared/containers/Routers.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_loadable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-loadable */ \"react-loadable\");\n/* harmony import */ var react_loadable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_loadable__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App */ \"./src/shared/containers/App.js\");\n/* harmony import */ var _Me__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Me */ \"./src/shared/containers/Me/index.js\");\n/* harmony import */ var _Hello__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Hello */ \"./src/shared/containers/Hello/index.js\");\n/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Home */ \"./src/shared/containers/Home/index.js\");\n\n\n\n\n\n\n\nconst LoadableComponent = loader => {\n  return react_loadable__WEBPACK_IMPORTED_MODULE_1___default()({\n    loader,\n\n    loading() {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"Loading ...\");\n    }\n\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ([{\n  path: '*',\n  component: _App__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n  routes: [{\n    path: '/me',\n    component: _Me__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n  }, {\n    path: '/home',\n    component: _Home__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n  }, {\n    path: '/filing',\n    component: _Hello__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n  }]\n}]);\n\n//# sourceURL=webpack:///./src/shared/containers/Routers.js?");

/***/ }),

/***/ "./src/shared/containers/component/Footer/index.js":
/*!*********************************************************!*\
  !*** ./src/shared/containers/component/Footer/index.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nclass Footer extends react__WEBPACK_IMPORTED_MODULE_0__[\"PureComponent\"] {\n  render() {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"footer\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"Copyright \\xA9 2020 \\u5E2D\\u5764-XIKUN\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"\\u5907\\u6848\\u53F7:\\u9102ICP\\u590719024768\\u53F7\"));\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Footer);\n\n//# sourceURL=webpack:///./src/shared/containers/component/Footer/index.js?");

/***/ }),

/***/ "./src/shared/containers/component/Header/index.css":
/*!**********************************************************!*\
  !*** ./src/shared/containers/component/Header/index.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\n    var refs = 0;\n    var css = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js??ref--5-1!./index.css */ \"./node_modules/css-loader/dist/cjs.js?!./src/shared/containers/component/Header/index.css\");\n    var insertCss = __webpack_require__(/*! ../../../../../node_modules/isomorphic-style-loader/insertCss.js */ \"./node_modules/isomorphic-style-loader/insertCss.js\");\n    var content = typeof css === 'string' ? [[module.i, css, '']] : css;\n\n    exports = module.exports = css.locals || {};\n    exports._getContent = function() { return content; };\n    exports._getCss = function() { return '' + css; };\n    exports._insertCss = function(options) { return insertCss(content, options) };\n\n    // Hot Module Replacement\n    // https://webpack.github.io/docs/hot-module-replacement\n    // Only activated in browser context\n    if (false) { var removeCss; }\n  \n\n//# sourceURL=webpack:///./src/shared/containers/component/Header/index.css?");

/***/ }),

/***/ "./src/shared/containers/component/Header/index.js":
/*!*********************************************************!*\
  !*** ./src/shared/containers/component/Header/index.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _WithStylesHOC__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../WithStylesHOC */ \"./src/shared/containers/component/WithStylesHOC.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils */ \"./src/shared/containers/utils/index.js\");\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.css */ \"./src/shared/containers/component/Header/index.css\");\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nconst tabs = [{\n  title: '首页',\n  link: '/home'\n}, {\n  title: '归档',\n  link: '/filing'\n}, {\n  title: '杂谈',\n  link: '/home2'\n}, {\n  title: '关于我',\n  link: '/me'\n}];\n\nclass Header extends react__WEBPACK_IMPORTED_MODULE_0__[\"PureComponent\"] {\n  constructor(props) {\n    super(props);\n    this.state = {\n      activeKey: props.location.pathname || '/home'\n    };\n  }\n\n  tabClick(activeKey) {\n    this.setState({\n      activeKey\n    });\n  }\n\n  render() {\n    const {\n      activeKey\n    } = this.state;\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"nav\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: _index_css__WEBPACK_IMPORTED_MODULE_4___default.a.na_title\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", null, \"X\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", null, \"I\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", null, \"K\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", null, \"U\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", null, \"N\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", null, \"\\u535A\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", null, \"\\u5BA2\")), tabs.map(item => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      key: item.link,\n      onClick: () => this.tabClick(item.link)\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n      to: item.link\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n      className: activeKey === item.link ? _index_css__WEBPACK_IMPORTED_MODULE_4___default.a.na_activel_link + ' ' + _index_css__WEBPACK_IMPORTED_MODULE_4___default.a.na_link : _index_css__WEBPACK_IMPORTED_MODULE_4___default.a.na_link\n    }, item.title)))));\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_WithStylesHOC__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(Header, _index_css__WEBPACK_IMPORTED_MODULE_4___default.a));\n\n//# sourceURL=webpack:///./src/shared/containers/component/Header/index.js?");

/***/ }),

/***/ "./src/shared/containers/component/WithStylesHOC.js":
/*!**********************************************************!*\
  !*** ./src/shared/containers/component/WithStylesHOC.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ((DecoratedComponent, styles) => {\n  return class CssComponent extends react__WEBPACK_IMPORTED_MODULE_0__[\"PureComponent\"] {\n    componentWillMount() {\n      if (this.props.staticContext) {\n        this.props.staticContext.css.push(styles._getCss());\n      }\n    }\n\n    render() {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DecoratedComponent, this.props);\n    }\n\n  };\n});\n\n//# sourceURL=webpack:///./src/shared/containers/component/WithStylesHOC.js?");

/***/ }),

/***/ "./src/shared/containers/utils/index.js":
/*!**********************************************!*\
  !*** ./src/shared/containers/utils/index.js ***!
  \**********************************************/
/*! exports provided: getActivePath, getRandomColor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getActivePath\", function() { return getActivePath; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getRandomColor\", function() { return getRandomColor; });\n/**\n * 获取选中的Tab\n * @param {*} url \n */\nconst getActivePath = url => {\n  const path = url.split(\"?\")[1];\n  return path;\n}; // 随机生成颜色RGB  核心点 ：（0,0,0)   rgb  每一组的数字取值范围是  0~255 \n\nconst getRandomColor = () => {\n  // 需要随机生成 0~255 之间的整数\n  function getRandom(min, max) {\n    return Math.floor(Math.random() * (max - min + 1)) + min;\n  }\n\n  var c1 = getRandom(0, 255);\n  var c2 = getRandom(0, 255);\n  var c3 = getRandom(0, 255);\n  return 'rgba(' + c1 + ',' + c2 + ',' + c3 + ',' + 0.8 + ')';\n};\n\n//# sourceURL=webpack:///./src/shared/containers/utils/index.js?");

/***/ }),

/***/ "./src/shared/store/index.js":
/*!***********************************!*\
  !*** ./src/shared/store/index.js ***!
  \***********************************/
/*! exports provided: getServerStore, getClienStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getServerStore\", function() { return getServerStore; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getClienStore\", function() { return getClienStore; });\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-thunk */ \"redux-thunk\");\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reducers */ \"./src/shared/store/reducers.js\");\n\n\n\nfunction getServerStore() {\n  return Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"createStore\"])(_reducers__WEBPACK_IMPORTED_MODULE_2__[\"default\"], Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"applyMiddleware\"])(redux_thunk__WEBPACK_IMPORTED_MODULE_1___default.a));\n}\nfunction getClienStore() {\n  return Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"createStore\"])(_reducers__WEBPACK_IMPORTED_MODULE_2__[\"default\"], Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"applyMiddleware\"])(redux_thunk__WEBPACK_IMPORTED_MODULE_1___default.a));\n}\n\n//# sourceURL=webpack:///./src/shared/store/index.js?");

/***/ }),

/***/ "./src/shared/store/reducers.js":
/*!**************************************!*\
  !*** ./src/shared/store/reducers.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _containers_Home_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../containers/Home/store */ \"./src/shared/containers/Home/store/index.js\");\n // import { reducer as userReducer } from '../..//store'\n\n\nconst reducers = Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"combineReducers\"])({\n  //user: userReducer,\n  home: _containers_Home_store__WEBPACK_IMPORTED_MODULE_1__[\"reducer\"]\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (reducers);\n\n//# sourceURL=webpack:///./src/shared/store/reducers.js?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "html-minifier":
/*!********************************!*\
  !*** external "html-minifier" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"html-minifier\");\n\n//# sourceURL=webpack:///external_%22html-minifier%22?");

/***/ }),

/***/ "http-proxy-middleware":
/*!****************************************!*\
  !*** external "http-proxy-middleware" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"http-proxy-middleware\");\n\n//# sourceURL=webpack:///external_%22http-proxy-middleware%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-loadable":
/*!*********************************!*\
  !*** external "react-loadable" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-loadable\");\n\n//# sourceURL=webpack:///external_%22react-loadable%22?");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");\n\n//# sourceURL=webpack:///external_%22react-redux%22?");

/***/ }),

/***/ "react-router-config":
/*!**************************************!*\
  !*** external "react-router-config" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-config\");\n\n//# sourceURL=webpack:///external_%22react-router-config%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");\n\n//# sourceURL=webpack:///external_%22redux%22?");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-thunk\");\n\n//# sourceURL=webpack:///external_%22redux-thunk%22?");

/***/ })

/******/ });