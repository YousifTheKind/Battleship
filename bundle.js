/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assests/images/rcLxML7Ri.png */ \"./assests/images/rcLxML7Ri.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap);\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n}\n\n:root {\n}\nbody {\n    display: flex;\n    justify-content: center;\n    background-color: #d9d9d9;\n    font-family: \"Noto Sans\", sans-serif;\n}\n.container {\n    display: flex;\n    flex-direction: column;\n}\nheader {\n    margin-top: 15px;\n    text-align: center;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 10px;\n}\n.main {\n    display: flex;\n    gap: 75px;\n    flex-wrap: wrap;\n}\n.logo {\n    font-size: 64px;\n    font-weight: 700;\n}\n.instructions-bar {\n    background-color: #9a9a9a;\n    width: 256px;\n    height: 24px;\n}\n.instructions-message {\n    color: white;\n}\n.real-player-square {\n    width: 40px;\n    height: 40px;\n    border: 1px solid #797979;\n}\n.bot-player-square {\n    width: 40px;\n    height: 40px;\n}\n.real-player-board {\n    display: grid;\n    grid: repeat(10, 1fr) / repeat(10, 1fr);\n    width: 400px;\n}\n.bot-player-board {\n    display: grid;\n    grid: repeat(10, 1fr) / repeat(10, 1fr);\n    width: 400px;\n}\n.ships-form form {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    margin-top: 24px;\n}\n\n.bot-player-board-text {\n    text-align: center;\n}\n.real-player-board-text {\n    text-align: center;\n}\n\n.index {\n    position: relative;\n    z-index: -1;\n}\n.row {\n    right: 4em;\n    text-align: right;\n\n    height: 1em;\n}\n.column {\n    bottom: 3em;\n}\n.bot-player-square:first-child > .column {\n    bottom: 3.5em;\n}\n.real-player-square:first-child > .column {\n    bottom: 3.5em;\n}\n#ship-hit {\n    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\n    background-size: 40px;\n    border: red 1px solid;\n}\n\n#ship-miss {\n    background-color: rgb(255, 255, 118, 0.5);\n}\n.action-buttons {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    margin-top: 24px;\n}\n.place-ship-button {\n    margin-top: 32px;\n}\n.disabled-square {\n    pointer-events: none;\n    cursor: not-allowed;\n    opacity: 0.65;\n    filter: alpha(opacity=65);\n    -webkit-box-shadow: none;\n    box-shadow: none;\n}\n.ships {\n    background-color: rgb(77, 77, 81, 0.5) !important;\n}\n.place-ship-button,\n.reset-button,\n.play-button {\n    appearance: none;\n    background-color: #2c2c2c;\n    border: 1px solid rgba(27, 31, 35, 0.15);\n    border-radius: 6px;\n    box-shadow: rgba(27, 31, 35, 0.1) 0 1px 0;\n    box-sizing: border-box;\n    color: #fff;\n    cursor: pointer;\n    display: inline-block;\n    font-family: -apple-system, system-ui, \"Segoe UI\", Helvetica, Arial,\n        sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\";\n    font-size: 14px;\n    font-weight: 600;\n    line-height: 20px;\n    padding: 6px 16px;\n    position: relative;\n    text-align: center;\n    text-decoration: none;\n    user-select: none;\n    -webkit-user-select: none;\n    touch-action: manipulation;\n    vertical-align: middle;\n    white-space: nowrap;\n}\n\n.place-ship-button:focus:not(:focus-visible):not(.focus-visible),\n.reset-button:focus:not(:focus-visible):not(.focus-visible),\n.play-button:focus:not(:focus-visible):not(.focus-visible) {\n    box-shadow: none;\n    outline: none;\n}\n\n.place-ship-button:hover,\n.reset-button:hover,\n.play-button:hover {\n    background-color: #000000;\n}\n\n.place-ship-button:focus,\n.reset-button:focus,\n.play-button:focus {\n    box-shadow: rgba(46, 164, 79, 0.4) 0 0 0 3px;\n    outline: none;\n}\n\n.place-ship-button:disabled,\n.reset-button:disabled,\n.play-button:disabled {\n    background-color: #94d3a2;\n    border-color: rgba(27, 31, 35, 0.1);\n    color: rgba(255, 255, 255, 0.8);\n    cursor: default;\n}\n\n.place-ship-button:active,\n.reset-button:active,\n.play-button:active {\n    background-color: #298e46;\n    box-shadow: rgba(20, 70, 32, 0.2) 0 1px 0 inset;\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://template-repo/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://template-repo/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://template-repo/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://template-repo/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://template-repo/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://template-repo/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://template-repo/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://template-repo/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://template-repo/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://template-repo/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://template-repo/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./assests/images/rcLxML7Ri.png":
/*!**************************************!*\
  !*** ./assests/images/rcLxML7Ri.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/8ff17584ab4935a68d1d.png\";\n\n//# sourceURL=webpack://template-repo/./assests/images/rcLxML7Ri.png?");

/***/ }),

/***/ "./src/DOMController.js":
/*!******************************!*\
  !*** ./src/DOMController.js ***!
  \******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _GameController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GameController.js */ \"./src/GameController.js\");\n\nconst realPlayerBoardElement = document.querySelector(\".real-player-board\");\nconst botPlayerBoardElement = document.querySelector(\".bot-player-board\");\nconst instructionElement = document.querySelector(\".instructions-message\");\nconst mainElement = document.querySelector(\".main\");\nconst resetButton = document.querySelector(\".reset-button\");\nconst form = document.querySelector(\".ships-form form\");\nconst realPlayerGameboard = (0,_GameController_js__WEBPACK_IMPORTED_MODULE_0__.Game)().getRealPlayerGameboard();\nconst realPlayerBoard = realPlayerGameboard.getBoard();\nconst botPlayerGameboard = (0,_GameController_js__WEBPACK_IMPORTED_MODULE_0__.Game)().getBotPlayerGameboard();\nconst botPlayerBoard = botPlayerGameboard.getBoard();\nfunction updateInstructions(message) {\n  instructionElement.textContent = message;\n}\nfunction render(board, player) {\n  board.forEach((square, index) => {\n    const sq = document.createElement(\"button\");\n    sq.dataset.row = square.y;\n    sq.dataset.column = square.x;\n    if (index % 10 == 0) {\n      const rowIndex = document.createElement(\"div\");\n      rowIndex.textContent = index.toString()[0];\n      rowIndex.classList.add(\"row\");\n      rowIndex.classList.add(\"index\");\n      sq.appendChild(rowIndex);\n    }\n    if (index < 10) {\n      const colIndex = document.createElement(\"div\");\n      colIndex.textContent = index.toString()[0];\n      colIndex.classList.add(\"column\");\n      colIndex.classList.add(\"index\");\n      sq.appendChild(colIndex);\n    }\n    if (square.hit || square.miss) {\n      sq.className = \"disabled-square\";\n      if (square.hit) {\n        sq.id = \"ship-hit\";\n      }\n      if (square.miss) {\n        sq.id = \"ship-miss\";\n      }\n    }\n    if (player == \"real\") {\n      sq.className = \"real-player-square\";\n      if (square.ship) {\n        sq.classList.add(\"ships\");\n      }\n      realPlayerBoardElement.appendChild(sq);\n    } else {\n      sq.className = \"bot-player-square\";\n      if (square.ship) {\n        sq.classList.add(\"ships\");\n      }\n      botPlayerBoardElement.appendChild(sq);\n    }\n  });\n}\nfunction renderRealPlayerBoard() {\n  realPlayerBoardElement.replaceChildren();\n  render(realPlayerBoard, \"real\");\n}\nfunction renderBotPlayerBoard() {\n  botPlayerBoardElement.replaceChildren();\n  render(botPlayerBoard, \"bot\");\n}\nfunction handleGameOver(winner) {\n  updateInstructions(\"Game Over!\");\n  mainElement.replaceChildren();\n  const winMsg = document.createElement(\"div\");\n  winMsg.textContent = `${winner} Won! \\n click reset to play again`;\n  mainElement.appendChild(winMsg);\n}\nfunction botAttackDOM() {\n  updateInstructions(\"Computer turn to attack\");\n  mainElement.classList.add(\"disabled-square\");\n  setTimeout(() => {\n    (0,_GameController_js__WEBPACK_IMPORTED_MODULE_0__.Game)().botAttack(realPlayerBoard);\n    if (realPlayerGameboard.checkWinner()) {\n      handleGameOver(\"Your Opponent\");\n    } else {\n      mainElement.classList.remove(\"disabled-square\");\n      renderRealPlayerBoard(realPlayerBoard);\n      updateInstructions(\"Your turn to attack\");\n    }\n  }, 500);\n}\nbotPlayerBoardElement.addEventListener(\"click\", e => {\n  const y = e.target.dataset.row;\n  const x = e.target.dataset.column;\n  if (!x || !y) return;else {\n    botPlayerGameboard.receiveAttack(botPlayerBoard, x, y);\n    if (botPlayerGameboard.checkWinner()) {\n      handleGameOver(\"You\");\n    } else {\n      renderBotPlayerBoard(botPlayerBoard);\n      botAttackDOM();\n    }\n  }\n});\nresetButton.addEventListener(\"click\", () => {\n  document.location.reload();\n});\nform.addEventListener(\"submit\", e => {\n  e.preventDefault();\n  form.reportValidity();\n  const y = document.getElementById(\"row\").value;\n  const x = document.getElementById(\"column\").value;\n  const orientation = document.getElementById(\"orientation\").value;\n  const length = document.getElementById(\"length\");\n  const status = realPlayerGameboard.placeShip(realPlayerBoard, x, y, length.value, orientation);\n  if (status.errorMsg) {\n    updateInstructions(status.errorMsg);\n  } else {\n    length.remove(length.selectedIndex);\n    form.reset();\n    renderRealPlayerBoard();\n    if (realPlayerGameboard.getNumberOfShips() == 1) {\n      botPlayerBoardElement.classList.remove(\"disabled-square\");\n      realPlayerBoardElement.classList.remove(\"disabled-square\");\n      updateInstructions(\"Your turn to attack\");\n    }\n  }\n});\nrenderBotPlayerBoard();\nrenderRealPlayerBoard();\n\n//# sourceURL=webpack://template-repo/./src/DOMController.js?");

/***/ }),

/***/ "./src/GameController.js":
/*!*******************************!*\
  !*** ./src/GameController.js ***!
  \*******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Game: () => (/* binding */ Game)\n/* harmony export */ });\n/* harmony import */ var _Player_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Player.js */ \"./src/Player.js\");\n\nfunction Game() {\n  const botAttacks = [];\n  const realPlayer = (0,_Player_js__WEBPACK_IMPORTED_MODULE_0__.Player)();\n  const botPlayer = (0,_Player_js__WEBPACK_IMPORTED_MODULE_0__.Player)();\n  function placeBotShips() {\n    const getRandomPoint = () => {\n      const x = Math.floor(Math.random() * 9);\n      const y = Math.floor(Math.random() * 9);\n      return [x, y];\n    };\n    let randomPoint = getRandomPoint();\n    const lengths = [2, 3, 3, 4, 5];\n    const orientation = [\"H\", \"V\"];\n    for (let i = 0; i < lengths.length; i++) {\n      while (botPlayer.Gameboard.placeShip(botPlayer.Gameboard.getBoard(), randomPoint[0], randomPoint[1], lengths[i], orientation[Math.round(Math.random())]).errorMsg) {\n        randomPoint = getRandomPoint();\n      }\n    }\n  }\n  function botAttack(board) {\n    const getRandomPoint = () => {\n      const x = Math.floor(Math.random() * 9);\n      const y = Math.floor(Math.random() * 9);\n      return [x, y];\n    };\n    let randomPoint = getRandomPoint();\n    while (botAttacks.includes(randomPoint)) {\n      randomPoint = getRandomPoint();\n    }\n    realPlayer.Gameboard.receiveAttack(board, randomPoint[0], randomPoint[1]);\n    botAttacks.push(randomPoint);\n  }\n  const getRealPlayerGameboard = () => realPlayer.Gameboard;\n  const getBotPlayerGameboard = () => botPlayer.Gameboard;\n  placeBotShips();\n  return {\n    botAttack,\n    getRealPlayerGameboard,\n    getBotPlayerGameboard\n  };\n}\n\n//# sourceURL=webpack://template-repo/./src/GameController.js?");

/***/ }),

/***/ "./src/Gameboard.js":
/*!**************************!*\
  !*** ./src/Gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Gameboard: () => (/* binding */ Gameboard)\n/* harmony export */ });\n/* harmony import */ var _Ship_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Ship.js */ \"./src/Ship.js\");\n\nfunction Gameboard() {\n  const ships = [];\n  const board = [];\n  for (let i = 0; i < 100; i++) {\n    board[i] = {\n      x: i % 10,\n      y: Math.floor(i / 10),\n      ship: null,\n      hit: false,\n      miss: false\n    };\n  }\n  const findSquare = (board, x, y) => {\n    return board.find(square => square.x == x && square.y == y);\n  };\n  const placeShip = (board, x, y, length, orientation) => {\n    let changed = false;\n    let errorMsg = null;\n    x = parseInt(x);\n    y = parseInt(y);\n    function checkValidity() {\n      if (x > 9 || x < 0 || y > 9 || y < 0) {\n        errorMsg = \"You're going overboard!\";\n        return false;\n      } else if (2 > length > 5) {\n        errorMsg = \"Length should be between 2 & 5\";\n        return false;\n      }\n      if (orientation != \"V\" && orientation != \"H\") {\n        errorMsg = \"orientation should be 'H' or 'V'\";\n        return false;\n      }\n      if (orientation == \"H\") {\n        if (x + (length - 1) > 9) {\n          errorMsg = \"You're going overboard!\";\n          return false;\n        }\n        for (let i = 0; i < length; i++) {\n          const targetSquare = findSquare(board, x + i, y);\n          if (targetSquare) {\n            if (targetSquare.ship) {\n              errorMsg = \"There is already a ship there!\";\n              return false;\n            }\n          } else {\n            errorMsg = \"Square not found\";\n            return false;\n          }\n        }\n      }\n      if (orientation == \"V\") {\n        if (y + (length - 1) > 9) {\n          errorMsg = \"You're going overboard!\";\n          return false;\n        }\n        for (let i = 0; i < length; i++) {\n          const targetSquare = findSquare(board, x, y + i);\n          if (targetSquare) {\n            if (targetSquare.ship) {\n              errorMsg = \"There is already a ship there!\";\n              return false;\n            }\n          } else {\n            errorMsg = \"Square not found\";\n            return false;\n          }\n        }\n      }\n      return true;\n    }\n    if (checkValidity()) {\n      const ship = (0,_Ship_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(length);\n      if (orientation === \"H\") {\n        for (let i = 0; i < length; i++) {\n          const targetSquare = findSquare(board, x + i, y);\n          targetSquare.ship = ship;\n        }\n      }\n      if (orientation === \"V\") {\n        for (let i = 0; i < length; i++) {\n          const targetSquare = findSquare(board, x, y + i);\n          targetSquare.ship = ship;\n        }\n      }\n      changed = true;\n      ships.push(ship);\n    }\n    return {\n      changed,\n      errorMsg\n    };\n  };\n  const receiveAttack = (board, x, y) => {\n    let errorMsg = null;\n    const square = findSquare(board, x, y);\n    function checkValidity() {\n      if (x > 9 || x < 0 || y > 9 || y < 0) {\n        errorMsg = \"Attack is off the board.\";\n        return false;\n      }\n      if (square.hit || square.miss) {\n        errorMsg = \"Square has already been attacked.\";\n        return false;\n      }\n      return true;\n    }\n    if (checkValidity()) {\n      if (square.ship) {\n        square.ship.hit();\n        square.hit = true;\n      }\n      if (!square.ship) {\n        square.miss = true;\n      }\n    }\n    return {\n      errorMsg\n    };\n  };\n  const checkWinner = () => {\n    return ships.every(ship => ship.IsSunk());\n  };\n  const getBoard = () => board;\n  const getNumberOfShips = () => ships.length;\n  return {\n    getBoard,\n    placeShip,\n    receiveAttack,\n    checkWinner,\n    getNumberOfShips\n  };\n}\n\n//# sourceURL=webpack://template-repo/./src/Gameboard.js?");

/***/ }),

/***/ "./src/Player.js":
/*!***********************!*\
  !*** ./src/Player.js ***!
  \***********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Player: () => (/* binding */ Player)\n/* harmony export */ });\n/* harmony import */ var _Gameboard_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Gameboard.js */ \"./src/Gameboard.js\");\n\nfunction Player() {\n  return {\n    Gameboard: (0,_Gameboard_js__WEBPACK_IMPORTED_MODULE_0__.Gameboard)()\n  };\n}\n\n//# sourceURL=webpack://template-repo/./src/Player.js?");

/***/ }),

/***/ "./src/Ship.js":
/*!*********************!*\
  !*** ./src/Ship.js ***!
  \*********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Ship)\n/* harmony export */ });\nfunction Ship(length) {\n  if (2 > length > 5) {\n    throw new Error(\"Ship length should be between 2 & 5\");\n  }\n  let timesHit = 0;\n  const hit = () => {\n    timesHit++;\n  };\n  const IsSunk = () => {\n    return length === timesHit ? true : false;\n  };\n  const getTimesHit = () => timesHit;\n  return {\n    getTimesHit,\n    hit,\n    IsSunk\n  };\n}\n\n//# sourceURL=webpack://template-repo/./src/Ship.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _DOMController_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOMController.js */ \"./src/DOMController.js\");\n\n\n\n//# sourceURL=webpack://template-repo/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;