/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatepractice"]("app",{

/***/ "./ResponseCheck.jsx":
/*!***************************!*\
  !*** ./ResponseCheck.jsx ***!
  \***************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js\");\n/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js\");\n__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ \"./node_modules/react-refresh/runtime.js\");\n__webpack_require__.$Refresh$.setup(module.id);\n\nvar _this = undefined,\n    _s2 = __webpack_require__.$Refresh$.signature();\n\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && Symbol.iterator in Object(iter)) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { if (typeof Symbol === \"undefined\" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\nvar ResponseCheck = function ResponseCheck() {\n  _s2();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"waiting\"),\n      _useState2 = _slicedToArray(_useState, 2),\n      state = _useState2[0],\n      setState = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"클릭해서 시작하세요\"),\n      _useState4 = _slicedToArray(_useState3, 2),\n      message = _useState4[0],\n      setMessage = _useState4[1];\n\n  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),\n      _useState6 = _slicedToArray(_useState5, 2),\n      result = _useState6[0],\n      setResult = _useState6[1];\n\n  timeout;\n  startTime;\n  endTime;\n\n  var onClickScreen = function onClickScreen() {\n    if (state === \"waiting\") {\n      setState(\"ready\");\n      setMessage(\"초록색이 되면 클릭하세요\");\n      timeout = setTimeout(function () {\n        setState(\"now\");\n        setMessage(\"지금 클릭하세요\"); // this.setState({\n        //   state: \"now\",\n        //   message: \"지금 클릭하세요\",\n        // });\n\n        startTime = new Date();\n      }, Math.floor(Math.random() * 1000) + 2000);\n    } else if (state === \"ready\") {\n      clearTimeout(timeout);\n\n      _this.setState({\n        state: \"waiting\",\n        message: \"성급했네요. 다시 시작하세요.\"\n      });\n    } else if (state === \"now\") {\n      endTime = new Date();\n\n      _this.setState(function (prevState) {\n        return {\n          state: \"waiting\",\n          message: \"클릭해서 시작하세요\",\n          result: [].concat(_toConsumableArray(prevState), [_this.endTime - _this.startTime])\n        };\n      });\n    }\n  };\n\n  var onReset = function onReset() {\n    _this.setState({\n      result: []\n    });\n  };\n\n  var renderAverage = function renderAverage() {\n    return result.length === 0 ? null : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", null, \"\\uD3C9\\uADE0 \\uC2DC\\uAC04: \", result.reduce(function (a, c) {\n      return a + c;\n    }) / result.length, \"ms\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"button\", {\n      onClick: onReset\n    }, \"\\uB9AC\\uC14B\"));\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    id: \"screen\",\n    className: state,\n    onClick: onClickScreen\n  }, message), renderAverage());\n};\n\n_s2(ResponseCheck, \"ZhvDOBcXpKO6HXWB6NpWdYFXNL0=\");\n\n_c = ResponseCheck;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ResponseCheck);\n\nvar _c;\n\n__webpack_require__.$Refresh$.register(_c, \"ResponseCheck\");\n\nconst currentExports = __react_refresh_utils__.getModuleExports(module.id);\n__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.id);\n\nif (true) {\n  const isHotUpdate = !!module.hot.data;\n  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;\n\n  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {\n    module.hot.dispose(\n      /**\n       * A callback to performs a full refresh if React has unrecoverable errors,\n       * and also caches the to-be-disposed module.\n       * @param {*} data A hot module data object from Webpack HMR.\n       * @returns {void}\n       */\n      function hotDisposeCallback(data) {\n        // We have to mutate the data object to get data registered and cached\n        data.prevExports = currentExports;\n      }\n    );\n    module.hot.accept(\n      /**\n       * An error handler to allow self-recovering behaviours.\n       * @param {Error} error An error occurred during evaluation of a module.\n       * @returns {void}\n       */\n      function hotErrorHandler(error) {\n        if (\n          typeof __react_refresh_error_overlay__ !== 'undefined' &&\n          __react_refresh_error_overlay__\n        ) {\n          __react_refresh_error_overlay__.handleRuntimeError(error);\n        }\n\n        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {\n          if (window.onHotAcceptError) {\n            window.onHotAcceptError(error.message);\n          }\n        }\n\n        __webpack_require__.c[module.id].hot.accept(hotErrorHandler);\n      }\n    );\n\n    if (isHotUpdate) {\n      if (\n        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&\n        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)\n      ) {\n        module.hot.invalidate();\n      } else {\n        __react_refresh_utils__.enqueueUpdate(\n          /**\n           * A function to dismiss the error overlay after performing React refresh.\n           * @returns {void}\n           */\n          function updateCallback() {\n            if (\n              typeof __react_refresh_error_overlay__ !== 'undefined' &&\n              __react_refresh_error_overlay__\n            ) {\n              __react_refresh_error_overlay__.clearRuntimeErrors();\n            }\n          }\n        );\n      }\n    }\n  } else {\n    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {\n      module.hot.invalidate();\n    }\n  }\n}\n\n//# sourceURL=webpack://practice/./ResponseCheck.jsx?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ 	"use strict";
/******/ 
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => "aaf566dc5ff1ad21d0e1"
/******/ 	})();
/******/ 	
/******/ }
);