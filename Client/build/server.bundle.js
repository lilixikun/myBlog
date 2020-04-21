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

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js?!./src/shared/containers/App.less":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js??ref--7-2!./src/shared/containers/App.less ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"* {\\n  margin: 0;\\n  padding: 0;\\n  box-sizing: border-box;\\n}\\nbody {\\n  background: #202020;\\n}\\n.layout {\\n  max-width: 1440px;\\n  height: 100vh;\\n  margin: 0 auto;\\n  display: flex;\\n  background-color: #fff;\\n  flex-direction: column;\\n  font-family: microsoft yahei, wenquanyi micro hei, sans-serif !important;\\n}\\nnav {\\n  height: 60px;\\n  padding-left: 120px;\\n}\\nnav,\\nfooter {\\n  background: #000000;\\n  display: flex;\\n  align-items: center;\\n  color: #fff;\\n  font-family: PingFangSC-Regular, PingFang SC;\\n  font-size: 14px;\\n  font-weight: 400;\\n}\\n.main {\\n  color: #bdbdbd;\\n  flex: auto;\\n  padding: 40px 20px 40px 60px;\\n  background-color: #fff;\\n}\\nfooter {\\n  flex-shrink: 0;\\n  flex-direction: column;\\n  justify-content: center;\\n  padding: 20px 0;\\n  line-height: 22px;\\n}\\na {\\n  text-decoration: none;\\n}\\n.img-wrapper img {\\n  transition: 0.3s linear;\\n}\\n.img-wrapper img:hover {\\n  transform: scale(1.1);\\n}\\n.createTime {\\n  font-size: 12px;\\n  color: #999;\\n}\\n.title {\\n  font-size: 14px;\\n  color: #000;\\n  line-height: 22px;\\n}\\n.title:hover {\\n  color: #4B9AF4;\\n}\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/shared/containers/App.less?./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js??ref--7-2");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js?!./src/shared/containers/Home/index.less":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js??ref--7-2!./src/shared/containers/Home/index.less ***!
  \**************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \".content {\\n  position: relative;\\n  display: flex;\\n  flex-direction: row;\\n  justify-content: space-between;\\n}\\n.aside-left {\\n  flex: 1;\\n}\\n.aside-left .list-item {\\n  display: flex;\\n  flex-direction: row;\\n  justify-content: space-between;\\n  cursor: pointer;\\n  align-items: center;\\n  margin-bottom: 50px;\\n}\\n.aside-left .list-item img {\\n  width: 220px;\\n  height: 140px;\\n  margin-right: 20px;\\n  border-radius: 2px;\\n}\\n.aside-left .list-item .item-wrapper {\\n  height: 140px;\\n  display: flex;\\n  flex: 1;\\n  flex-direction: column;\\n  justify-content: space-between;\\n}\\n.aside-left .list-item .item-wrapper .item-footer {\\n  display: flex;\\n  align-items: center;\\n  color: #999;\\n  font-size: 12px;\\n}\\n.aside-left .list-item .item-wrapper .item-footer img {\\n  width: 12px;\\n  height: 12px;\\n  margin-right: 5px;\\n}\\n.aside-left .list-item .item-wrapper .item-footer span {\\n  margin-right: 20px;\\n}\\n.main-title {\\n  font-size: 20px;\\n  color: #000;\\n  position: relative;\\n  padding-left: 50px;\\n}\\n.main-title:after {\\n  content: '最新';\\n  left: 0px;\\n  top: 0;\\n  position: absolute;\\n  color: #4B9AF4;\\n  font-size: 10px;\\n  width: 38px;\\n  height: 24px;\\n  line-height: 24px;\\n  text-align: center;\\n  border: 1px solid #4B9AF4;\\n  border-radius: 2px;\\n}\\n.main-title:hover {\\n  color: #4B9AF4;\\n}\\n.sub-title {\\n  font-size: 14px;\\n  color: #666;\\n  line-height: 22px;\\n}\\n.aside-right {\\n  width: 350px;\\n  height: 100%;\\n}\\n.aside-right img {\\n  width: 100%;\\n  height: 170px;\\n}\\n.xk-tags {\\n  width: 350px;\\n  border-radius: 4px;\\n  padding: 10px 20px;\\n  border: 1px solid #eeeeee;\\n}\\n.xk-tags .hot-tas {\\n  position: relative;\\n  font-size: 18px;\\n  color: #000000;\\n  padding-bottom: 10px;\\n  border-bottom: 1px solid #EEE;\\n  font-weight: bold;\\n  padding-left: 10px;\\n}\\n.xk-tags .hot-tas:before {\\n  content: '';\\n  position: absolute;\\n  left: 0px;\\n  top: 3px;\\n  width: 2px;\\n  height: 60%;\\n  background-color: #4B9AF4;\\n}\\n.xk-tags .tag-content {\\n  display: flex;\\n  margin-top: 10px;\\n  flex-direction: row;\\n  flex-wrap: wrap;\\n}\\n.xk-tags .tag {\\n  padding: 6px 10px;\\n  color: #fff;\\n  font-size: 12px;\\n  border-radius: 8px;\\n  cursor: pointer;\\n  margin-right: 15px;\\n  margin-bottom: 15px;\\n}\\n.hot-article {\\n  position: relative;\\n  display: flex;\\n  flex-direction: row;\\n  margin-bottom: 20px;\\n  cursor: pointer;\\n}\\n.hot-article .article-wrapper {\\n  width: 96px;\\n  height: 60px;\\n  overflow: hidden;\\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.6);\\n  margin-right: 10px;\\n  border: 3px solid #000;\\n}\\n.hot-article .article-wrapper img {\\n  width: 96px;\\n  height: 60px;\\n  border-radius: 2px;\\n}\\n.hot-article > div {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: space-between;\\n}\\n.sort {\\n  position: absolute;\\n  top: 0;\\n  left: 0;\\n  width: 18px;\\n  height: 18px;\\n  background-color: #4B9AF4;\\n  font-size: 12px;\\n  color: #fff;\\n  text-align: center;\\n}\\n.sort-content {\\n  display: flex;\\n  flex-direction: row;\\n  align-items: center;\\n  border-radius: 4px;\\n  margin-bottom: 15px;\\n  cursor: pointer;\\n}\\n.sort-content span {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  width: 20px;\\n  height: 20px;\\n  color: #999999;\\n  border: 1px solid #EEEEEE;\\n  margin-right: 10px;\\n  font-size: 12px;\\n}\\n.sort-content > p {\\n  white-space: nowrap;\\n  overflow: hidden;\\n  text-overflow: ellipsis;\\n}\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/shared/containers/Home/index.less?./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js??ref--7-2");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js?!./src/shared/containers/Me/index.less":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js??ref--7-2!./src/shared/containers/Me/index.less ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/shared/containers/Me/index.less?./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js??ref--7-2");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js?!./src/shared/containers/component/Header/index.less":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js??ref--7-2!./src/shared/containers/component/Header/index.less ***!
  \**************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \".na_link {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  width: 100px;\\n  height: 60px;\\n  color: #fff;\\n  /* padding-top: 10px; */\\n  transition: all 0.2s;\\n}\\n.na_activel_link {\\n  background-color: rgba(255, 255, 255, 0.2);\\n}\\n.na_title {\\n  height: 60px;\\n  cursor: pointer;\\n  margin-right: 20px;\\n}\\n.na_title span {\\n  position: relative;\\n  text-align: center;\\n  color: white;\\n  font-size: 22px;\\n  animation: letter 1s cubic-bezier(0.1, 0.5, 0.2, 1) infinite alternate;\\n  top: 0px;\\n}\\n.na_title span:nth-child(1) {\\n  animation-delay: 0s;\\n}\\n.na_title span:nth-child(2) {\\n  animation-delay: 0.1s;\\n}\\n.na_title span:nth-child(3) {\\n  animation-delay: 0.2s;\\n}\\n.na_title span:nth-child(4) {\\n  animation-delay: 0.3s;\\n}\\n.na_title span:nth-child(5) {\\n  animation-delay: 0.4s;\\n}\\n.na_title span:nth-child(6) {\\n  animation-delay: 0.5s;\\n}\\n.na_title span:nth-child(7) {\\n  animation-delay: 0.6s;\\n}\\n@keyframes letter {\\n  from {\\n    top: 0px;\\n    /* text-shadow: blanchedalmond 0 0 0.05em; */\\n  }\\n  to {\\n    top: 20px;\\n    /* text-shadow: blanchedalmond 0 1em 0.2em; */\\n  }\\n}\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/shared/containers/component/Header/index.less?./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js??ref--7-2");

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

/***/ "./node_modules/react-lazyload/lib/index.js":
/*!**************************************************!*\
  !*** ./node_modules/react-lazyload/lib/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.forceVisible = exports.forceCheck = exports.lazyload = undefined;\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactDom = __webpack_require__(/*! react-dom */ \"react-dom\");\n\nvar _reactDom2 = _interopRequireDefault(_reactDom);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ \"prop-types\");\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _event = __webpack_require__(/*! ./utils/event */ \"./node_modules/react-lazyload/lib/utils/event.js\");\n\nvar _scrollParent = __webpack_require__(/*! ./utils/scrollParent */ \"./node_modules/react-lazyload/lib/utils/scrollParent.js\");\n\nvar _scrollParent2 = _interopRequireDefault(_scrollParent);\n\nvar _debounce = __webpack_require__(/*! ./utils/debounce */ \"./node_modules/react-lazyload/lib/utils/debounce.js\");\n\nvar _debounce2 = _interopRequireDefault(_debounce);\n\nvar _throttle = __webpack_require__(/*! ./utils/throttle */ \"./node_modules/react-lazyload/lib/utils/throttle.js\");\n\nvar _throttle2 = _interopRequireDefault(_throttle);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * react-lazyload\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */\n\n\nvar defaultBoundingClientRect = { top: 0, right: 0, bottom: 0, left: 0, width: 0, height: 0 };\nvar LISTEN_FLAG = 'data-lazyload-listened';\nvar listeners = [];\nvar pending = [];\n\n// try to handle passive events\nvar passiveEventSupported = false;\ntry {\n  var opts = Object.defineProperty({}, 'passive', {\n    get: function get() {\n      passiveEventSupported = true;\n    }\n  });\n  window.addEventListener('test', null, opts);\n} catch (e) {}\n// if they are supported, setup the optional params\n// IMPORTANT: FALSE doubles as the default CAPTURE value!\nvar passiveEvent = passiveEventSupported ? { capture: false, passive: true } : false;\n\n/**\n * Check if `component` is visible in overflow container `parent`\n * @param  {node} component React component\n * @param  {node} parent    component's scroll parent\n * @return {bool}\n */\nvar checkOverflowVisible = function checkOverflowVisible(component, parent) {\n  var node = _reactDom2.default.findDOMNode(component);\n  // const node = component.ref;\n\n  var parentTop = void 0;\n  var parentLeft = void 0;\n  var parentHeight = void 0;\n  var parentWidth = void 0;\n\n  try {\n    var _parent$getBoundingCl = parent.getBoundingClientRect();\n\n    parentTop = _parent$getBoundingCl.top;\n    parentLeft = _parent$getBoundingCl.left;\n    parentHeight = _parent$getBoundingCl.height;\n    parentWidth = _parent$getBoundingCl.width;\n  } catch (e) {\n    parentTop = defaultBoundingClientRect.top;\n    parentLeft = defaultBoundingClientRect.left;\n    parentHeight = defaultBoundingClientRect.height;\n    parentWidth = defaultBoundingClientRect.width;\n  }\n\n  var windowInnerHeight = window.innerHeight || document.documentElement.clientHeight;\n  var windowInnerWidth = window.innerWidth || document.documentElement.clientWidth;\n\n  // calculate top and height of the intersection of the element's scrollParent and viewport\n  var intersectionTop = Math.max(parentTop, 0); // intersection's top relative to viewport\n  var intersectionLeft = Math.max(parentLeft, 0); // intersection's left relative to viewport\n  var intersectionHeight = Math.min(windowInnerHeight, parentTop + parentHeight) - intersectionTop; // height\n  var intersectionWidth = Math.min(windowInnerWidth, parentLeft + parentWidth) - intersectionLeft; // width\n\n  // check whether the element is visible in the intersection\n  var top = void 0;\n  var left = void 0;\n  var height = void 0;\n  var width = void 0;\n\n  try {\n    var _node$getBoundingClie = node.getBoundingClientRect();\n\n    top = _node$getBoundingClie.top;\n    left = _node$getBoundingClie.left;\n    height = _node$getBoundingClie.height;\n    width = _node$getBoundingClie.width;\n  } catch (e) {\n    top = defaultBoundingClientRect.top;\n    left = defaultBoundingClientRect.left;\n    height = defaultBoundingClientRect.height;\n    width = defaultBoundingClientRect.width;\n  }\n\n  var offsetTop = top - intersectionTop; // element's top relative to intersection\n  var offsetLeft = left - intersectionLeft; // element's left relative to intersection\n\n  var offsets = Array.isArray(component.props.offset) ? component.props.offset : [component.props.offset, component.props.offset]; // Be compatible with previous API\n\n  return offsetTop - offsets[0] <= intersectionHeight && offsetTop + height + offsets[1] >= 0 && offsetLeft - offsets[0] <= intersectionWidth && offsetLeft + width + offsets[1] >= 0;\n};\n\n/**\n * Check if `component` is visible in document\n * @param  {node} component React component\n * @return {bool}\n */\nvar checkNormalVisible = function checkNormalVisible(component) {\n  var node = _reactDom2.default.findDOMNode(component);\n  // const node = component.ref;\n\n  // If this element is hidden by css rules somehow, it's definitely invisible\n  if (!(node.offsetWidth || node.offsetHeight || node.getClientRects().length)) return false;\n\n  var top = void 0;\n  var elementHeight = void 0;\n\n  try {\n    var _node$getBoundingClie2 = node.getBoundingClientRect();\n\n    top = _node$getBoundingClie2.top;\n    elementHeight = _node$getBoundingClie2.height;\n  } catch (e) {\n    top = defaultBoundingClientRect.top;\n    elementHeight = defaultBoundingClientRect.height;\n  }\n\n  var windowInnerHeight = window.innerHeight || document.documentElement.clientHeight;\n\n  var offsets = Array.isArray(component.props.offset) ? component.props.offset : [component.props.offset, component.props.offset]; // Be compatible with previous API\n\n  return top - offsets[0] <= windowInnerHeight && top + elementHeight + offsets[1] >= 0;\n};\n\n/**\n * Detect if element is visible in viewport, if so, set `visible` state to true.\n * If `once` prop is provided true, remove component as listener after checkVisible\n *\n * @param  {React} component   React component that respond to scroll and resize\n */\nvar checkVisible = function checkVisible(component) {\n  var node = _reactDom2.default.findDOMNode(component);\n  // const node = component.ref;\n  if (!(node instanceof HTMLElement)) {\n    return;\n  }\n\n  var parent = (0, _scrollParent2.default)(node);\n  var isOverflow = component.props.overflow && parent !== node.ownerDocument && parent !== document && parent !== document.documentElement;\n  var visible = isOverflow ? checkOverflowVisible(component, parent) : checkNormalVisible(component);\n  if (visible) {\n    // Avoid extra render if previously is visible\n    if (!component.visible) {\n      if (component.props.once) {\n        pending.push(component);\n      }\n\n      component.visible = true;\n      component.forceUpdate();\n    }\n  } else if (!(component.props.once && component.visible)) {\n    component.visible = false;\n    if (component.props.unmountIfInvisible) {\n      component.forceUpdate();\n    }\n  }\n};\n\nvar purgePending = function purgePending() {\n  pending.forEach(function (component) {\n    var index = listeners.indexOf(component);\n    if (index !== -1) {\n      listeners.splice(index, 1);\n    }\n  });\n\n  pending = [];\n};\n\nvar lazyLoadHandler = function lazyLoadHandler() {\n  for (var i = 0; i < listeners.length; ++i) {\n    var listener = listeners[i];\n    checkVisible(listener);\n  }\n  // Remove `once` component in listeners\n  purgePending();\n};\n\n/**\n * Forces the component to display regardless of whether the element is visible in the viewport.\n */\nvar forceVisible = function forceVisible() {\n  for (var i = 0; i < listeners.length; ++i) {\n    var listener = listeners[i];\n    listener.visible = true;\n    listener.forceUpdate();\n  }\n  // Remove `once` component in listeners\n  purgePending();\n};\n\n// Depending on component's props\nvar delayType = void 0;\nvar finalLazyLoadHandler = null;\n\nvar isString = function isString(string) {\n  return typeof string === 'string';\n};\n\nvar LazyLoad = function (_Component) {\n  _inherits(LazyLoad, _Component);\n\n  function LazyLoad(props) {\n    _classCallCheck(this, LazyLoad);\n\n    var _this = _possibleConstructorReturn(this, (LazyLoad.__proto__ || Object.getPrototypeOf(LazyLoad)).call(this, props));\n\n    _this.visible = false;\n    // this.setRef = this.setRef.bind(this);\n    return _this;\n  }\n\n  // setRef(element) {\n  //   if (element) {\n  //     this.ref = element;\n  //   }\n  // }\n\n  _createClass(LazyLoad, [{\n    key: 'componentDidMount',\n    value: function componentDidMount() {\n      // It's unlikely to change delay type on the fly, this is mainly\n      // designed for tests\n      var scrollport = window;\n      var scrollContainer = this.props.scrollContainer;\n\n      if (scrollContainer) {\n        if (isString(scrollContainer)) {\n          scrollport = scrollport.document.querySelector(scrollContainer);\n        }\n      }\n      var needResetFinalLazyLoadHandler = this.props.debounce !== undefined && delayType === 'throttle' || delayType === 'debounce' && this.props.debounce === undefined;\n\n      if (needResetFinalLazyLoadHandler) {\n        (0, _event.off)(scrollport, 'scroll', finalLazyLoadHandler, passiveEvent);\n        (0, _event.off)(window, 'resize', finalLazyLoadHandler, passiveEvent);\n        finalLazyLoadHandler = null;\n      }\n\n      if (!finalLazyLoadHandler) {\n        if (this.props.debounce !== undefined) {\n          finalLazyLoadHandler = (0, _debounce2.default)(lazyLoadHandler, typeof this.props.debounce === 'number' ? this.props.debounce : 300);\n          delayType = 'debounce';\n        } else if (this.props.throttle !== undefined) {\n          finalLazyLoadHandler = (0, _throttle2.default)(lazyLoadHandler, typeof this.props.throttle === 'number' ? this.props.throttle : 300);\n          delayType = 'throttle';\n        } else {\n          finalLazyLoadHandler = lazyLoadHandler;\n        }\n      }\n\n      if (this.props.overflow) {\n        var parent = (0, _scrollParent2.default)(_reactDom2.default.findDOMNode(this));\n        // const parent = scrollParent(this.ref);\n        if (parent && typeof parent.getAttribute === 'function') {\n          var listenerCount = 1 + +parent.getAttribute(LISTEN_FLAG);\n          if (listenerCount === 1) {\n            parent.addEventListener('scroll', finalLazyLoadHandler, passiveEvent);\n          }\n          parent.setAttribute(LISTEN_FLAG, listenerCount);\n        }\n      } else if (listeners.length === 0 || needResetFinalLazyLoadHandler) {\n        var _props = this.props,\n            scroll = _props.scroll,\n            resize = _props.resize;\n\n\n        if (scroll) {\n          (0, _event.on)(scrollport, 'scroll', finalLazyLoadHandler, passiveEvent);\n        }\n\n        if (resize) {\n          (0, _event.on)(window, 'resize', finalLazyLoadHandler, passiveEvent);\n        }\n      }\n\n      listeners.push(this);\n      checkVisible(this);\n    }\n  }, {\n    key: 'shouldComponentUpdate',\n    value: function shouldComponentUpdate() {\n      return this.visible;\n    }\n  }, {\n    key: 'componentWillUnmount',\n    value: function componentWillUnmount() {\n      if (this.props.overflow) {\n        var parent = (0, _scrollParent2.default)(_reactDom2.default.findDOMNode(this));\n        // const parent = scrollParent(this.ref);\n        if (parent && typeof parent.getAttribute === 'function') {\n          var listenerCount = +parent.getAttribute(LISTEN_FLAG) - 1;\n          if (listenerCount === 0) {\n            parent.removeEventListener('scroll', finalLazyLoadHandler, passiveEvent);\n            parent.removeAttribute(LISTEN_FLAG);\n          } else {\n            parent.setAttribute(LISTEN_FLAG, listenerCount);\n          }\n        }\n      }\n\n      var index = listeners.indexOf(this);\n      if (index !== -1) {\n        listeners.splice(index, 1);\n      }\n\n      if (listeners.length === 0 && typeof window !== 'undefined') {\n        (0, _event.off)(window, 'resize', finalLazyLoadHandler, passiveEvent);\n        (0, _event.off)(window, 'scroll', finalLazyLoadHandler, passiveEvent);\n      }\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      return this.visible ? this.props.children : this.props.placeholder ? this.props.placeholder : _react2.default.createElement('div', { style: { height: this.props.height }, className: 'lazyload-placeholder' });\n      // <span ref={this.setRef} className=\"lazyload-custom-placeholder\">\n      //   {this.props.placeholder}\n      // </span> :\n      // <div ref={this.setRef} style={{ height: this.props.height }} className=\"lazyload-placeholder\" />;\n    }\n  }]);\n\n  return LazyLoad;\n}(_react.Component);\n\nLazyLoad.propTypes = {\n  once: _propTypes2.default.bool,\n  height: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),\n  offset: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.arrayOf(_propTypes2.default.number)]),\n  overflow: _propTypes2.default.bool,\n  resize: _propTypes2.default.bool,\n  scroll: _propTypes2.default.bool,\n  children: _propTypes2.default.node,\n  throttle: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.bool]),\n  debounce: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.bool]),\n  placeholder: _propTypes2.default.node,\n  scrollContainer: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object]),\n  unmountIfInvisible: _propTypes2.default.bool\n};\n\nLazyLoad.defaultProps = {\n  once: false,\n  offset: 0,\n  overflow: false,\n  resize: false,\n  scroll: true,\n  unmountIfInvisible: false\n};\n\nvar getDisplayName = function getDisplayName(WrappedComponent) {\n  return WrappedComponent.displayName || WrappedComponent.name || 'Component';\n};\n\nvar decorator = function decorator() {\n  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n  return function lazyload(WrappedComponent) {\n    return function (_Component2) {\n      _inherits(LazyLoadDecorated, _Component2);\n\n      function LazyLoadDecorated() {\n        _classCallCheck(this, LazyLoadDecorated);\n\n        var _this2 = _possibleConstructorReturn(this, (LazyLoadDecorated.__proto__ || Object.getPrototypeOf(LazyLoadDecorated)).call(this));\n\n        _this2.displayName = 'LazyLoad' + getDisplayName(WrappedComponent);\n        return _this2;\n      }\n\n      _createClass(LazyLoadDecorated, [{\n        key: 'render',\n        value: function render() {\n          return _react2.default.createElement(\n            LazyLoad,\n            options,\n            _react2.default.createElement(WrappedComponent, this.props)\n          );\n        }\n      }]);\n\n      return LazyLoadDecorated;\n    }(_react.Component);\n  };\n};\n\nexports.lazyload = decorator;\nexports.default = LazyLoad;\nexports.forceCheck = lazyLoadHandler;\nexports.forceVisible = forceVisible;\n\n//# sourceURL=webpack:///./node_modules/react-lazyload/lib/index.js?");

/***/ }),

/***/ "./node_modules/react-lazyload/lib/utils/debounce.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-lazyload/lib/utils/debounce.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = debounce;\nfunction debounce(func, wait, immediate) {\n  var timeout = void 0;\n  var args = void 0;\n  var context = void 0;\n  var timestamp = void 0;\n  var result = void 0;\n\n  var later = function later() {\n    var last = +new Date() - timestamp;\n\n    if (last < wait && last >= 0) {\n      timeout = setTimeout(later, wait - last);\n    } else {\n      timeout = null;\n      if (!immediate) {\n        result = func.apply(context, args);\n        if (!timeout) {\n          context = null;\n          args = null;\n        }\n      }\n    }\n  };\n\n  return function debounced() {\n    context = this;\n    args = arguments;\n    timestamp = +new Date();\n\n    var callNow = immediate && !timeout;\n    if (!timeout) {\n      timeout = setTimeout(later, wait);\n    }\n\n    if (callNow) {\n      result = func.apply(context, args);\n      context = null;\n      args = null;\n    }\n\n    return result;\n  };\n}\n\n//# sourceURL=webpack:///./node_modules/react-lazyload/lib/utils/debounce.js?");

/***/ }),

/***/ "./node_modules/react-lazyload/lib/utils/event.js":
/*!********************************************************!*\
  !*** ./node_modules/react-lazyload/lib/utils/event.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.on = on;\nexports.off = off;\nfunction on(el, eventName, callback, opts) {\n  opts = opts || false;\n  if (el.addEventListener) {\n    el.addEventListener(eventName, callback, opts);\n  } else if (el.attachEvent) {\n    el.attachEvent(\"on\" + eventName, function (e) {\n      callback.call(el, e || window.event);\n    });\n  }\n}\n\nfunction off(el, eventName, callback, opts) {\n  opts = opts || false;\n  if (el.removeEventListener) {\n    el.removeEventListener(eventName, callback, opts);\n  } else if (el.detachEvent) {\n    el.detachEvent(\"on\" + eventName, callback);\n  }\n}\n\n//# sourceURL=webpack:///./node_modules/react-lazyload/lib/utils/event.js?");

/***/ }),

/***/ "./node_modules/react-lazyload/lib/utils/scrollParent.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-lazyload/lib/utils/scrollParent.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\n/**\n * @fileOverview Find scroll parent\n */\n\nexports.default = function (node) {\n  if (!(node instanceof HTMLElement)) {\n    return document.documentElement;\n  }\n\n  var excludeStaticParent = node.style.position === 'absolute';\n  var overflowRegex = /(scroll|auto)/;\n  var parent = node;\n\n  while (parent) {\n    if (!parent.parentNode) {\n      return node.ownerDocument || document.documentElement;\n    }\n\n    var style = window.getComputedStyle(parent);\n    var position = style.position;\n    var overflow = style.overflow;\n    var overflowX = style['overflow-x'];\n    var overflowY = style['overflow-y'];\n\n    if (position === 'static' && excludeStaticParent) {\n      parent = parent.parentNode;\n      continue;\n    }\n\n    if (overflowRegex.test(overflow) && overflowRegex.test(overflowX) && overflowRegex.test(overflowY)) {\n      return parent;\n    }\n\n    parent = parent.parentNode;\n  }\n\n  return node.ownerDocument || node.documentElement || document.documentElement;\n};\n\n//# sourceURL=webpack:///./node_modules/react-lazyload/lib/utils/scrollParent.js?");

/***/ }),

/***/ "./node_modules/react-lazyload/lib/utils/throttle.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-lazyload/lib/utils/throttle.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = throttle;\n/*eslint-disable */\nfunction throttle(fn, threshhold, scope) {\n  threshhold || (threshhold = 250);\n  var last, deferTimer;\n  return function () {\n    var context = scope || this;\n\n    var now = +new Date(),\n        args = arguments;\n    if (last && now < last + threshhold) {\n      // hold on to it\n      clearTimeout(deferTimer);\n      deferTimer = setTimeout(function () {\n        last = now;\n        fn.apply(context, args);\n      }, threshhold);\n    } else {\n      last = now;\n      fn.apply(context, args);\n    }\n  };\n}\n\n//# sourceURL=webpack:///./node_modules/react-lazyload/lib/utils/throttle.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_config__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var html_minifier__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! html-minifier */ \"html-minifier\");\n/* harmony import */ var html_minifier__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(html_minifier__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var isomorphic_style_loader_StyleContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! isomorphic-style-loader/StyleContext */ \"isomorphic-style-loader/StyleContext\");\n/* harmony import */ var isomorphic_style_loader_StyleContext__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(isomorphic_style_loader_StyleContext__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _shared_containers_Routers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/containers/Routers */ \"./src/shared/containers/Routers.js\");\n/* harmony import */ var _shared_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/store */ \"./src/shared/store/index.js\");\n\n\n\n\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ((req, res) => {\n  const context = {\n    css: []\n  };\n  const css = new Set(); // CSS for all rendered React components\n\n  const insertCss = (...styles) => styles.forEach(style => css.add(style._getCss()));\n\n  const ele = Object(react_dom_server__WEBPACK_IMPORTED_MODULE_4__[\"renderToString\"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(isomorphic_style_loader_StyleContext__WEBPACK_IMPORTED_MODULE_6___default.a.Provider, {\n    value: {\n      insertCss\n    }\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_2__[\"Provider\"], {\n    store: Object(_shared_store__WEBPACK_IMPORTED_MODULE_8__[\"getServerStore\"])()\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"StaticRouter\"], {\n    location: req.url,\n    context: context\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], null, Object(react_router_config__WEBPACK_IMPORTED_MODULE_3__[\"renderRoutes\"])(_shared_containers_Routers__WEBPACK_IMPORTED_MODULE_7__[\"default\"]))))));\n  const html = `<!DOCTYPE html>\n        <html lang=\"en\">\n        <head>\n        <meta charset=\"UTF-8\">\n        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n        <title>Document111</title>\n        <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css\">\n        <style>${[...css].join('')}</style>\n        \n        </head>\n\n        <body>\n            <div id=\"root\">${ele}</div>\n            <script src=\"/index.js\"></script>\n        </body>\n        </html>\n    `;\n  const minifyHtml = Object(html_minifier__WEBPACK_IMPORTED_MODULE_5__[\"minify\"])(html, {\n    minifyCSS: true,\n    minifyJS: true,\n    minifyURLs: true\n  });\n  return minifyHtml;\n});\n\n//# sourceURL=webpack:///./src/server/utils.js?");

/***/ }),

/***/ "./src/shared/containers/App.js":
/*!**************************************!*\
  !*** ./src/shared/containers/App.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_config__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! isomorphic-style-loader/withStyles */ \"isomorphic-style-loader/withStyles\");\n/* harmony import */ var isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _component_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./component/Header */ \"./src/shared/containers/component/Header/index.js\");\n/* harmony import */ var _component_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./component/Footer */ \"./src/shared/containers/component/Footer/index.js\");\n/* harmony import */ var _App_less__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./App.less */ \"./src/shared/containers/App.less\");\n/* harmony import */ var _App_less__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_App_less__WEBPACK_IMPORTED_MODULE_5__);\n\n\n //import withStylesHOC from './component/WithStylesHOC'\n\n\n\n\n\nconst App = props => {\n  const {\n    route\n  } = props;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"layout\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_component_Header__WEBPACK_IMPORTED_MODULE_3__[\"default\"], props), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"main\"\n  }, Object(react_router_config__WEBPACK_IMPORTED_MODULE_1__[\"renderRoutes\"])(route.routes)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_component_Footer__WEBPACK_IMPORTED_MODULE_4__[\"default\"], null));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_2___default()(_App_less__WEBPACK_IMPORTED_MODULE_5___default.a)(App));\n\n//# sourceURL=webpack:///./src/shared/containers/App.js?");

/***/ }),

/***/ "./src/shared/containers/App.less":
/*!****************************************!*\
  !*** ./src/shared/containers/App.less ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\n    var refs = 0;\n    var css = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/less-loader/dist/cjs.js??ref--7-2!./App.less */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js?!./src/shared/containers/App.less\");\n    var insertCss = __webpack_require__(/*! ../../../node_modules/isomorphic-style-loader/insertCss.js */ \"./node_modules/isomorphic-style-loader/insertCss.js\");\n    var content = typeof css === 'string' ? [[module.i, css, '']] : css;\n\n    exports = module.exports = css.locals || {};\n    exports._getContent = function() { return content; };\n    exports._getCss = function() { return '' + css; };\n    exports._insertCss = function(options) { return insertCss(content, options) };\n\n    // Hot Module Replacement\n    // https://webpack.github.io/docs/hot-module-replacement\n    // Only activated in browser context\n    if (false) { var removeCss; }\n  \n\n//# sourceURL=webpack:///./src/shared/containers/App.less?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! isomorphic-style-loader/withStyles */ \"isomorphic-style-loader/withStyles\");\n/* harmony import */ var isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils */ \"./src/shared/containers/utils/index.js\");\n/* harmony import */ var react_lazyload__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-lazyload */ \"./node_modules/react-lazyload/lib/index.js\");\n/* harmony import */ var react_lazyload__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_lazyload__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _assets_author_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/author.svg */ \"./src/shared/containers/assets/author.svg\");\n/* harmony import */ var _assets_look_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/look.svg */ \"./src/shared/containers/assets/look.svg\");\n/* harmony import */ var _assets_time_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/time.svg */ \"./src/shared/containers/assets/time.svg\");\n/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./index.less */ \"./src/shared/containers/Home/index.less\");\n/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_8__);\n\n\n\n\n\n\n\n\n\nconst tags = [\"前段\", \"Sql\", \"Vue\", \"JAVA\", \"测试\", \"Python\"];\nconst imags = ['https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3941434829,1642547318&fm=26&gp=0.jpg', 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=4110196045,3829597861&fm=26&gp=0.jpg', 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2202851728,786325929&fm=26&gp=0.jpg', 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=4219346243,168775371&fm=11&gp=0.jpg', 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1135012456,1998209284&fm=26&gp=0.jpg', 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1619425792,2885514976&fm=26&gp=0.jpg'];\n\nclass Home extends react__WEBPACK_IMPORTED_MODULE_0__[\"PureComponent\"] {\n  render() {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"content\"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"aside\", {\n      className: \"aside-left\"\n    }, tags.map((item, index) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"list-item img-wrapper\",\n      key: index\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_lazyload__WEBPACK_IMPORTED_MODULE_4___default.a, {\n      height: 140\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n      src: imags[index]\n    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"item-wrapper\"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n      className: \"main-title\"\n    }, \"\\u70ED\\u95E8\\u6807\\u7B7E\\u70ED\\u95E8\\u6807\\u7B7E\\u70ED\\u95E8\\u6807\\u7B7E\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n      className: \"sub-title\"\n    }, \"\\u70ED\\u95E8\\u6807\\u7B7E\\u70ED\\u95E8\\u6807\\u7B7E\\u70ED\\u95E8\\u6807\\u7B7E\\u70ED\\u95E8\\u6807\\u7B7E\\u70ED\\u95E8\\u6807\\u7B7E\\u70ED\\u95E8\\u6807\\u7B7E\\u70ED\\u95E8\\u6807\\u7B7E\\u70ED\\u95E8\\u6807\\u7B7E\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"item-footer\"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n      src: _assets_author_svg__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n    }), \" \", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", null, \"\\u51F9\\u51F8\\u66FC\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n      src: _assets_time_svg__WEBPACK_IMPORTED_MODULE_7__[\"default\"]\n    }), \" \", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", null, \"2020-11-20\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n      src: _assets_look_svg__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n    }), \" \", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", null, \"252\")))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"aside\", {\n      className: \"aside-right\"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"xk-tags\"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"hot-tas\"\n    }, \"\\u70ED\\u95E8\\u6807\\u7B7E\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"section\", {\n      className: \"tag-content\"\n    }, tags.map((item, index) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"tag\",\n      style: {\n        background: Object(_utils__WEBPACK_IMPORTED_MODULE_3__[\"getRandomColor\"])()\n      },\n      key: index\n    }, item)))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"xk-tags\",\n      style: {\n        marginTop: 20\n      }\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"hot-tas\"\n    }, \"\\u63A8\\u8350\\u6587\\u7AE0\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"section\", {\n      className: \"tag-content\"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"hot-article\"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"img-wrapper article-wrapper\"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n      src: \"https://t9.baidu.com/it/u=1307125826,3433407105&fm=79&app=86&size=h300&n=0&g=4n&f=jpeg?sec=1587982384&t=da2294a846663c27e8b3b0bd00cf6405\"\n    })), \"                                    \", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n      className: \"title\"\n    }, \"CSS3\\u4E2D\\u5E38\\u89C1\\u7684\\u5355\\u4F4D\\u53CA\\u603B\\u7ED3\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n      className: \"createTime\"\n    }, \"2020-03-29\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"sort\"\n    }, \"1\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"hot-article\"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"img-wrapper article-wrapper\"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n      src: \"https://t9.baidu.com/it/u=1307125826,3433407105&fm=79&app=86&size=h300&n=0&g=4n&f=jpeg?sec=1587982384&t=da2294a846663c27e8b3b0bd00cf6405\"\n    })), \"                                    \", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n      className: \"title\"\n    }, \"CSS3\\u4E2D\\u5E38\\u89C1\\u7684\\u5355\\u4F4D\\u53CA\\u603B\\u7ED3\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n      className: \"createTime\"\n    }, \"2020-03-29\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"sort\"\n    }, \"2\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"hot-article\"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"img-wrapper article-wrapper\"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n      src: \"https://t9.baidu.com/it/u=1307125826,3433407105&fm=79&app=86&size=h300&n=0&g=4n&f=jpeg?sec=1587982384&t=da2294a846663c27e8b3b0bd00cf6405\"\n    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n      className: \"title\"\n    }, \"CSS3\\u4E2D\\u5E38\\u89C1\\u7684\\u5355\\u4F4D\\u53CA\\u603B\\u7ED3\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n      className: \"createTime\"\n    }, \"2020-03-29\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"sort\"\n    }, \"3\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"sort-content\"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", null, \"4\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n      className: \"title\"\n    }, \"\\u975E\\u5B98\\u65B9\\u4E2A\\u98CE\\u683C\\u975E\\u5B98\\u65B9\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"sort-content\"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", null, \"5\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n      className: \"title\"\n    }, \"\\u975E\\u5B98\\u65B9\\u4E2A\\u98CE\\u683C\\u975E\\u5B98\\u65B9\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"sort-content\"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", null, \"6\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n      className: \"title\"\n    }, \"\\u975E\\u5B98\\u65B9\\u4E2A\\u98CE\\u683C\\u975E\\u5B98\\u65B9\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"sort-content\"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", null, \"7\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n      className: \"title\"\n    }, \"\\u975E\\u5B98\\u65B9\\u4E2A\\u98CE\\u683C\\u975E\\u5B98\\u65B9\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"sort-content\"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", null, \"8\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n      className: \"title\"\n    }, \"\\u975E\\u5B98\\u65B9\\u4E2A\\u98CE\\u683C\\u975E\\u5B98\\u65B9\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"sort-content\"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", null, \"9\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n      className: \"title\"\n    }, \"\\u975E\\u5B98\\u65B9\\u4E2A\\u98CE\\u683C\\u975E\\u5B98\\u65B9\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"sort-content\"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", null, \"10\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n      className: \"title\"\n    }, \"\\u975E\\u5B98\\u65B9\\u4E2A\\u98CE\\u683C\\u975E\\u5B98\\u65B9\")))))));\n  }\n\n}\n\nconst mapStateToProps = state => ({});\n\nconst ExportHome = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(mapStateToProps, null)(isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_2___default()(_index_less__WEBPACK_IMPORTED_MODULE_8___default.a)(Home));\n/* harmony default export */ __webpack_exports__[\"default\"] = (ExportHome);\n\n//# sourceURL=webpack:///./src/shared/containers/Home/index.js?");

/***/ }),

/***/ "./src/shared/containers/Home/index.less":
/*!***********************************************!*\
  !*** ./src/shared/containers/Home/index.less ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\n    var refs = 0;\n    var css = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/less-loader/dist/cjs.js??ref--7-2!./index.less */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js?!./src/shared/containers/Home/index.less\");\n    var insertCss = __webpack_require__(/*! ../../../../node_modules/isomorphic-style-loader/insertCss.js */ \"./node_modules/isomorphic-style-loader/insertCss.js\");\n    var content = typeof css === 'string' ? [[module.i, css, '']] : css;\n\n    exports = module.exports = css.locals || {};\n    exports._getContent = function() { return content; };\n    exports._getCss = function() { return '' + css; };\n    exports._insertCss = function(options) { return insertCss(content, options) };\n\n    // Hot Module Replacement\n    // https://webpack.github.io/docs/hot-module-replacement\n    // Only activated in browser context\n    if (false) { var removeCss; }\n  \n\n//# sourceURL=webpack:///./src/shared/containers/Home/index.less?");

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

/***/ "./src/shared/containers/Me/index.js":
/*!*******************************************!*\
  !*** ./src/shared/containers/Me/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! isomorphic-style-loader/withStyles */ \"isomorphic-style-loader/withStyles\");\n/* harmony import */ var isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.less */ \"./src/shared/containers/Me/index.less\");\n/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\nclass Me extends react__WEBPACK_IMPORTED_MODULE_0__[\"PureComponent\"] {\n  componentDidMount() {\n    if (this.props.staticContext) {\n      console.log(111111);\n      this.props.staticContext.css.push(style._getCss());\n    }\n  }\n\n  render() {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: style.my\n    }, \"Me\");\n  }\n\n}\n\nconst mapStateToProps = state => ({\n  isLogin: state.user.isLogin\n});\n\nconst ExportMember = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(mapStateToProps, null)(isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_2___default()(_index_less__WEBPACK_IMPORTED_MODULE_3___default.a)(Me)); //ExportMember.loadData = store => store.dispatch(actions.getMemberList());\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ExportMember);\n\n//# sourceURL=webpack:///./src/shared/containers/Me/index.js?");

/***/ }),

/***/ "./src/shared/containers/Me/index.less":
/*!*********************************************!*\
  !*** ./src/shared/containers/Me/index.less ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\n    var refs = 0;\n    var css = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/less-loader/dist/cjs.js??ref--7-2!./index.less */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js?!./src/shared/containers/Me/index.less\");\n    var insertCss = __webpack_require__(/*! ../../../../node_modules/isomorphic-style-loader/insertCss.js */ \"./node_modules/isomorphic-style-loader/insertCss.js\");\n    var content = typeof css === 'string' ? [[module.i, css, '']] : css;\n\n    exports = module.exports = css.locals || {};\n    exports._getContent = function() { return content; };\n    exports._getCss = function() { return '' + css; };\n    exports._insertCss = function(options) { return insertCss(content, options) };\n\n    // Hot Module Replacement\n    // https://webpack.github.io/docs/hot-module-replacement\n    // Only activated in browser context\n    if (false) { var removeCss; }\n  \n\n//# sourceURL=webpack:///./src/shared/containers/Me/index.less?");

/***/ }),

/***/ "./src/shared/containers/Routers.js":
/*!******************************************!*\
  !*** ./src/shared/containers/Routers.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_loadable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-loadable */ \"react-loadable\");\n/* harmony import */ var react_loadable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_loadable__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App */ \"./src/shared/containers/App.js\");\n/* harmony import */ var _Me__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Me */ \"./src/shared/containers/Me/index.js\");\n/* harmony import */ var _Hello__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Hello */ \"./src/shared/containers/Hello/index.js\");\n/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Home */ \"./src/shared/containers/Home/index.js\");\n\n\n\n\n\n\n\nconst LoadableComponent = loader => {\n  return react_loadable__WEBPACK_IMPORTED_MODULE_1___default()({\n    loader,\n\n    loading() {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"Loading ...\");\n    }\n\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ([{\n  path: '*',\n  component: _App__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n  routes: [{\n    path: '/me',\n    component: _Me__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n  }, {\n    path: '/filing',\n    component: _Hello__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n  }, {\n    path: '*',\n    component: _Home__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n  }]\n}]);\n\n//# sourceURL=webpack:///./src/shared/containers/Routers.js?");

/***/ }),

/***/ "./src/shared/containers/assets/author.svg":
/*!*************************************************!*\
  !*** ./src/shared/containers/assets/author.svg ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTg3NDU1NTU3MDc2IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9Ijc5NTYiIGRhdGEtc3BtLWFuY2hvci1pZD0iYTMxM3guNzc4MTA2OS4wLmkxMCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48c3R5bGUgdHlwZT0idGV4dC9jc3MiPjwvc3R5bGU+PC9kZWZzPjxwYXRoIGQ9Ik01MTAuNTQ4IDEwNS41ODJjLTEyOS43OTcgMC0yMzUuMzg2IDEwNS41OTMtMjM1LjM4NiAyMzUuMzkgMCA5My45OTkgNTUuNTA5IDE3NS4wNjcgMTM1LjM1NCAyMTIuNzY3LTE0Ny42MTMgNDMuMzUtMjU1Ljc5MyAxNzkuODI1LTI1NS43OTMgMzQxLjI3MyAwIDEwLjI3NSA4LjMyNyAxOC41OTQgMTguNTk0IDE4LjU5NCAxMC4yNjcgMCAxOC41OTQtOC4zMTkgMTguNTk0LTE4LjU5NCAwLTE3NS43MDIgMTQyLjk1Ni0zMTguNjUgMzE4LjYzNi0zMTguNjUgMTI5Ljc5NyAwIDIzNS4zOTUtMTA1LjU5MyAyMzUuMzk1LTIzNS4zOXMtMTA1LjU5OC0yMzUuMzktMjM1LjM5NS0yMzUuMzl6IG0wIDQzMy41OTFjLTEwOS4yOTQgMC0xOTguMTk3LTg4LjkxNy0xOTguMTk3LTE5OC4yMDIgMC0xMDkuMjkgODguOTAzLTE5OC4yMDIgMTk4LjE5Ny0xOTguMjAyIDEwOS4yOTggMCAxOTguMjA2IDg4LjkxMiAxOTguMjA2IDE5OC4yMDIgMCAxMDkuMjktODguOTAzIDE5OC4yMDItMTk4LjIwNiAxOTguMjAyeiBtMCAweiBtMjE1LjgzOCA3Mi45MDdjLTguMTc1LTYuMjI5LTE5LjgzLTQuNjg2LTI2LjA1NyAzLjQ4Ny02LjI0NSA4LjE3LTQuNjg2IDE5LjgyNiAzLjQ4NCAyNi4wNzQgNzkuNjgxIDYwLjg4NiAxMjUuMzY3IDE1My4yNDEgMTI1LjM2NyAyNTMuMzY2IDAgMTAuMjc5IDguMzMyIDE4LjU5OCAxOC41OTUgMTguNTk4IDEwLjI3NSAwIDE4LjU5NC04LjMxOSAxOC41OTQtMTguNTk4IDAtMTExLjgxOC01MS4wMjQtMjE0Ljk0MS0xMzkuOTg0LTI4Mi45Mjd6IG0wIDB6IiBmaWxsPSIjOTk5OTk5IiBwLWlkPSI3OTU3Ij48L3BhdGg+PC9zdmc+\");\n\n//# sourceURL=webpack:///./src/shared/containers/assets/author.svg?");

/***/ }),

/***/ "./src/shared/containers/assets/look.svg":
/*!***********************************************!*\
  !*** ./src/shared/containers/assets/look.svg ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTg3NDU1NDEyNjU4IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjQ1MDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNTE2LjAzOTA0IDc2NC4zNTJjLTE3NC41OTIgMC0zNDYuMDY5MzMzLTgxLjE5NDY2Ny01MDkuNjMyLTI0MS4zMjI2NjdhMjEuMzMzMzMzIDIxLjMzMzMzMyAwIDAgMS0wLjkzODY2Ny0yOS41MDRjOC41OTczMzMtOS41NTczMzMgMjEzLjczODY2Ny0yMzMuODk4NjY3IDUxMC41NDkzMzQtMjMzLjg5ODY2NiAxNzQuNTkyIDAgMzQzLjMzODY2NyA3OC4zNTczMzMgNTAxLjU2OCAyMzIuODk2YTIxLjMzMzMzMyAyMS4zMzMzMzMgMCAwIDEgMS40NzIgMjguOTA2NjY2Yy04LjI1NiA5Ljk0MTMzMy0yMDUuNjk2IDI0Mi45MjI2NjctNTAzLjAxODY2NyAyNDIuOTIyNjY3ek01MS42NTUwNCA1MDcuMzQ5MzMzQzIwMi4yMjU3MDcgNjQ5LjYgMzU4LjM2NDM3MyA3MjEuNjg1MzMzIDUxNi4wNjAzNzMgNzIxLjY4NTMzM2MyMzUuMjIxMzMzIDAgNDA4Ljc0NjY2Ny0xNjIuNTM4NjY3IDQ1Ni44NTMzMzQtMjEyLjg4NTMzMy0xNDUuNTc4NjY3LTEzNy4wNDUzMzMtMjk5LjE3ODY2Ny0yMDYuNDg1MzMzLTQ1Ni44NzQ2NjctMjA2LjQ4NTMzMy0yMzUuMjg1MzMzIDAtNDEzLjg0NTMzMyAxNTUuNzk3MzMzLTQ2NC4zODQgMjA1LjAzNDY2NnoiIHAtaWQ9IjQ1MDciIGZpbGw9IiM5OTk5OTkiPjwvcGF0aD48cGF0aCBkPSJNNTEyLjAyODM3MyA2OTIuNDE2Yy05OS40NzczMzMgMC0xODAuMzk0NjY3LTgwLjg5Ni0xODAuMzk0NjY2LTE4MC4zMDkzMzMgMC05OS41MiA4MC45MTczMzMtMTgwLjQ4IDE4MC4zOTQ2NjYtMTgwLjQ4IDk5LjQzNDY2NyAwIDE4MC4zMzA2NjcgODAuOTYgMTgwLjMzMDY2NyAxODAuNDggMCA5OS40MTMzMzMtODAuODk2IDE4MC4zMDkzMzMtMTgwLjMzMDY2NyAxODAuMzA5MzMzeiBtMC0zMTguMTIyNjY3Yy03NS45NDY2NjcgMC0xMzcuNzI4IDYxLjgyNC0xMzcuNzI4IDEzNy44MTMzMzQgMCA3NS45MDQgNjEuNzgxMzMzIDEzNy42NDI2NjcgMTM3LjcyOCAxMzcuNjQyNjY2YTEzNy44MTMzMzMgMTM3LjgxMzMzMyAwIDAgMCAxMzcuNjY0LTEzNy42NDI2NjZjMC03NS45ODkzMzMtNjEuNzM4NjY3LTEzNy44MTMzMzMtMTM3LjY2NC0xMzcuODEzMzM0eiIgcC1pZD0iNDUwOCIgZmlsbD0iIzk5OTk5OSI+PC9wYXRoPjwvc3ZnPg==\");\n\n//# sourceURL=webpack:///./src/shared/containers/assets/look.svg?");

/***/ }),

/***/ "./src/shared/containers/assets/time.svg":
/*!***********************************************!*\
  !*** ./src/shared/containers/assets/time.svg ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTg3NDU1NTIyNjYwIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjcwMjEiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNODk0LjUgMTE4LjI1aC0xMjMuNzVWOTUuNzVjMC0xNi44NzUtMTYuODc1LTMzLjc1LTMzLjc1LTMzLjc1cy0zMy43NSAxNi44NzUtMzMuNzUgMzMuNzVWMTE4LjI1SDMyNi4zNzVWOTUuNzVjMC0xNi44NzUtMTYuODc1LTMzLjc1LTMzLjc1LTMzLjc1cy0zMy43NSAxNi44NzUtMzMuNzUgMzMuNzVWMTE4LjI1SDEyOS41Qzk1Ljc1IDExOC4yNSA2MiAxNDYuMzc1IDYyIDE4NS43NXY3MDMuMTI1YzAgMzkuMzc1IDMzLjc1IDczLjEyNSA2Ny41IDczLjEyNWg3NTkuMzc1YzM5LjM3NSAwIDY3LjUtMzMuNzUgNjcuNS02Ny41VjE4NS43NWM1LjYyNS0zOS4zNzUtMjguMTI1LTY3LjUtNjEuODc1LTY3LjV6IG0wIDc3Ni4yNUgxMjkuNXYtNTYyLjVoNzU5LjM3NXY1NjIuNXogbTAtNjM1LjYyNUgxMjkuNVYxODUuNzVoMTIzLjc1djUuNjI1YzAgMTYuODc1IDE2Ljg3NSAzMy43NSAzMy43NSAzMy43NXMzMy43NS0xNi44NzUgMzMuNzUtMzMuNzV2LTUuNjI1aDM3MS4yNXY1LjYyNWMwIDE2Ljg3NSAxNi44NzUgMzMuNzUgMzMuNzUgMzMuNzVzMzMuNzUtMTYuODc1IDMzLjc1LTMzLjc1di01LjYyNWgxMjMuNzV2NzMuMTI1eiIgcC1pZD0iNzAyMiIgZmlsbD0iIzk5OTk5OSI+PC9wYXRoPjxwYXRoIGQ9Ik0yOTIuNjI1IDU2OC4yNWg2Ny41YzIyLjUgMCAzOS4zNzUtMTYuODc1IDM5LjM3NS0zMy43NXMtMTYuODc1LTM5LjM3NS0zMy43NS0zOS4zNzVIMjkyLjYyNWMtMTYuODc1IDAtMzMuNzUgMTYuODc1LTMzLjc1IDM5LjM3NXMxNi44NzUgMzMuNzUgMzMuNzUgMzMuNzV6TTQ3OC4yNSA1NjguMjVoNjcuNWMyMi41IDAgMzMuNzUtMTYuODc1IDMzLjc1LTMzLjc1cy0xMS4yNS0zOS4zNzUtMzMuNzUtMzkuMzc1SDQ3OC4yNWMtMjIuNSAwLTMzLjc1IDE2Ljg3NS0zMy43NSAzOS4zNzVzMTEuMjUgMzMuNzUgMzMuNzUgMzMuNzV6TTY1OC4yNSA1NjguMjVoNjcuNWMxNi44NzUgMCAzMy43NS0xNi44NzUgMzMuNzUtMzMuNzVzLTE2Ljg3NS0zMy43NS0zMy43NS0zMy43NWgtNjcuNWMtMTYuODc1LTUuNjI1LTMzLjc1IDExLjI1LTMzLjc1IDMzLjc1czE2Ljg3NSAzMy43NSAzMy43NSAzMy43NXpNMjkyLjYyNSA3NTMuODc1aDY3LjVjMjIuNSAwIDM5LjM3NS0xNi44NzUgMzkuMzc1LTM5LjM3NXMtMTYuODc1LTMzLjc1LTMzLjc1LTMzLjc1SDI5Mi42MjVjLTE2Ljg3NSAwLTMzLjc1IDE2Ljg3NS0zMy43NSAzMy43NXMxNi44NzUgMzkuMzc1IDMzLjc1IDM5LjM3NXpNNDc4LjI1IDc1My44NzVoNjcuNWMxNi44NzUgMCAzMy43NS0xNi44NzUgMzMuNzUtMzMuNzVTNTY4LjI1IDY4MC43NSA1NDUuNzUgNjgwLjc1SDQ3OC4yNWMtMTYuODc1IDAtMzMuNzUgMTYuODc1LTMzLjc1IDMzLjc1czExLjI1IDM5LjM3NSAzMy43NSAzOS4zNzV6IiBwLWlkPSI3MDIzIiBmaWxsPSIjOTk5OTk5Ij48L3BhdGg+PC9zdmc+\");\n\n//# sourceURL=webpack:///./src/shared/containers/assets/time.svg?");

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

/***/ "./src/shared/containers/component/Header/index.js":
/*!*********************************************************!*\
  !*** ./src/shared/containers/component/Header/index.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! isomorphic-style-loader/withStyles */ \"isomorphic-style-loader/withStyles\");\n/* harmony import */ var isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils */ \"./src/shared/containers/utils/index.js\");\n/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.less */ \"./src/shared/containers/component/Header/index.less\");\n/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nconst tabs = [{\n  title: '首页',\n  link: '/home'\n}, {\n  title: '归档',\n  link: '/filing'\n}, {\n  title: '分类',\n  link: '/home2'\n}, {\n  title: '关于我',\n  link: '/me'\n}];\n\nclass Header extends react__WEBPACK_IMPORTED_MODULE_0__[\"PureComponent\"] {\n  constructor(props) {\n    super(props);\n    this.state = {\n      activeKey: props.location.pathname || '/home'\n    };\n  }\n\n  tabClick(activeKey) {\n    this.setState({\n      activeKey\n    });\n  }\n\n  render() {\n    const {\n      activeKey\n    } = this.state;\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"nav\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"na_title\"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", null, \"X\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", null, \"I\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", null, \"K\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", null, \"U\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", null, \"N\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", null, \"\\u535A\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", null, \"\\u5BA2\")), tabs.map(item => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      key: item.link,\n      onClick: () => this.tabClick(item.link)\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n      to: item.link\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n      className: activeKey === item.link ? 'na_activel_link' + ' ' + 'na_link' : 'na_link'\n    }, item.title)))));\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_2___default()(_index_less__WEBPACK_IMPORTED_MODULE_4___default.a)(Header));\n\n//# sourceURL=webpack:///./src/shared/containers/component/Header/index.js?");

/***/ }),

/***/ "./src/shared/containers/component/Header/index.less":
/*!***********************************************************!*\
  !*** ./src/shared/containers/component/Header/index.less ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\n    var refs = 0;\n    var css = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/less-loader/dist/cjs.js??ref--7-2!./index.less */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js?!./src/shared/containers/component/Header/index.less\");\n    var insertCss = __webpack_require__(/*! ../../../../../node_modules/isomorphic-style-loader/insertCss.js */ \"./node_modules/isomorphic-style-loader/insertCss.js\");\n    var content = typeof css === 'string' ? [[module.i, css, '']] : css;\n\n    exports = module.exports = css.locals || {};\n    exports._getContent = function() { return content; };\n    exports._getCss = function() { return '' + css; };\n    exports._insertCss = function(options) { return insertCss(content, options) };\n\n    // Hot Module Replacement\n    // https://webpack.github.io/docs/hot-module-replacement\n    // Only activated in browser context\n    if (false) { var removeCss; }\n  \n\n//# sourceURL=webpack:///./src/shared/containers/component/Header/index.less?");

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

/***/ "isomorphic-style-loader/StyleContext":
/*!*******************************************************!*\
  !*** external "isomorphic-style-loader/StyleContext" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"isomorphic-style-loader/StyleContext\");\n\n//# sourceURL=webpack:///external_%22isomorphic-style-loader/StyleContext%22?");

/***/ }),

/***/ "isomorphic-style-loader/withStyles":
/*!*****************************************************!*\
  !*** external "isomorphic-style-loader/withStyles" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"isomorphic-style-loader/withStyles\");\n\n//# sourceURL=webpack:///external_%22isomorphic-style-loader/withStyles%22?");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"prop-types\");\n\n//# sourceURL=webpack:///external_%22prop-types%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom\");\n\n//# sourceURL=webpack:///external_%22react-dom%22?");

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