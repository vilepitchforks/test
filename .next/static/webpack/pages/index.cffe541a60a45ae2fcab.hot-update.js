webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/NewScanModal/NewScanModal.js":
/*!*****************************************************!*\
  !*** ./src/components/NewScanModal/NewScanModal.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var easy_peasy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! easy-peasy */ \"./node_modules/easy-peasy/dist/easy-peasy.js\");\n/* harmony import */ var easy_peasy__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(easy_peasy__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _NewScanForm_NewScanForm_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../NewScanForm/NewScanForm.js */ \"./src/components/NewScanForm/NewScanForm.js\");\n/* harmony import */ var _WebCard_WebCard_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../WebCard/WebCard.js */ \"./src/components/WebCard/WebCard.js\");\n/* harmony import */ var _NewScanInit_NewScanInit_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../NewScanInit/NewScanInit.js */ \"./src/components/NewScanInit/NewScanInit.js\");\n/* harmony import */ var _ModalBackground_ModalBackground_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../ModalBackground/ModalBackground.js */ \"./src/components/ModalBackground/ModalBackground.js\");\n/* harmony import */ var _NewScanModal_module_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./NewScanModal.module.css */ \"./src/components/NewScanModal/NewScanModal.module.css\");\n/* harmony import */ var _NewScanModal_module_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_NewScanModal_module_css__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _lib_drivers_restDrivers__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../lib/drivers/restDrivers */ \"./src/lib/drivers/restDrivers.js\");\n/* harmony import */ var _lib_helpers_processDb_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../lib/helpers/processDb.js */ \"./src/lib/helpers/processDb.js\");\n/* harmony import */ var _lib_helpers_regex__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../lib/helpers/regex */ \"./src/lib/helpers/regex.js\");\n/* harmony import */ var _lib_helpers_regex__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_lib_helpers_regex__WEBPACK_IMPORTED_MODULE_13__);\n\n\n\n\n\nvar _jsxFileName = \"/home/angelovski/Documents/Projects/dccscanner/web/src/components/NewScanModal/NewScanModal.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\n\n\n\n\n\nvar NewScanModal = function NewScanModal(_ref) {\n  _s();\n\n  var isNew = _ref.isNew,\n      setIsNew = _ref.setIsNew,\n      setNewScan = _ref.setNewScan;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(false),\n      loading = _useState[0],\n      setLoading = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(\"\"),\n      url = _useState2[0],\n      setUrl = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])([]),\n      slugs = _useState3[0],\n      setSlugs = _useState3[1];\n\n  var _useStoreState = Object(easy_peasy__WEBPACK_IMPORTED_MODULE_5__[\"useStoreState\"])(function (state) {\n    return state;\n  }),\n      scanCtgs = _useStoreState.scanCtgs;\n\n  var actions = Object(easy_peasy__WEBPACK_IMPORTED_MODULE_5__[\"useStoreActions\"])(function (actions) {\n    return actions;\n  });\n\n  var handleSlugs = /*#__PURE__*/function () {\n    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n      var website, _yield$getSingleMeta, ok, data, storeMetaData;\n\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              setUrl(\"\");\n\n              if (_lib_helpers_regex__WEBPACK_IMPORTED_MODULE_13__[\"urlRgx\"].test(url)) {\n                _context.next = 3;\n                break;\n              }\n\n              return _context.abrupt(\"return\");\n\n            case 3:\n              // Remove \"New DCC scan\" title and set loading animation\n              setIsNew(false);\n              setLoading(true);\n              _context.next = 7;\n              return Object(_lib_helpers_processDb_js__WEBPACK_IMPORTED_MODULE_12__[\"getSingleMeta\"])(url);\n\n            case 7:\n              _yield$getSingleMeta = _context.sent;\n              ok = _yield$getSingleMeta.ok;\n              data = _yield$getSingleMeta.data;\n\n              if (!(ok && data)) {\n                _context.next = 16;\n                break;\n              }\n\n              actions.addInfoEvent(\"Metadata for \".concat(url, \" successfully fetched.\"));\n              actions.setMetadata(data);\n              setSlugs(data.slugs);\n              _context.next = 27;\n              break;\n\n            case 16:\n              _context.next = 18;\n              return Object(_lib_drivers_restDrivers__WEBPACK_IMPORTED_MODULE_11__[\"slugDriver\"])({\n                query: \"url=\" + url\n              });\n\n            case 18:\n              website = _context.sent;\n              // Store website metadata and slugs to local db\n              storeMetaData = website && Object(_lib_helpers_processDb_js__WEBPACK_IMPORTED_MODULE_12__[\"makeStoreData\"])(url, actions, true);\n              _context.t0 = website;\n\n              if (!_context.t0) {\n                _context.next = 24;\n                break;\n              }\n\n              _context.next = 24;\n              return storeMetaData(_objectSpread(_objectSpread({}, website.metadata), {}, {\n                slugs: website.slugs\n              }));\n\n            case 24:\n              website && website.metadata && actions.setMetadata(website.metadata);\n              website && setSlugs(website.slugs);\n              website && setLoading(false);\n\n            case 27:\n              actions.setScanUrl(url); // In case of errors while fetching metadata, reset the loading screen\n\n              if (!website) {\n                setIsNew(true);\n                setLoading(false);\n              }\n\n            case 29:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function handleSlugs() {\n      return _ref2.apply(this, arguments);\n    };\n  }(); // Cleanup function, resets all url data each tome Modal component unmounts\n\n\n  Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useEffect\"])(function () {\n    return function () {\n      return setIsNew(true);\n    };\n  }, []);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(_ModalBackground_ModalBackground_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n    trigger: setNewScan,\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(\"div\", {\n      className: _NewScanModal_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.modal,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(\"div\", {\n        className: \"row flex\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(\"div\", {\n          className: \"three columns\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(_NewScanForm_NewScanForm_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n            url: url,\n            setUrl: setUrl,\n            slugs: slugs,\n            handleSlugs: handleSlugs\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 72,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 71,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(_WebCard_WebCard_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n          loading: loading,\n          isNew: isNew\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 79,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 70,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(\"div\", {\n        className: \"row\",\n        children: scanCtgs && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(_NewScanInit_NewScanInit_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n          setNewScan: setNewScan\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 83,\n          columnNumber: 24\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 81,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 68,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(NewScanModal, \"oX4FExHVWd0jLOt8KthK/603T3g=\", false, function () {\n  return [easy_peasy__WEBPACK_IMPORTED_MODULE_5__[\"useStoreState\"], easy_peasy__WEBPACK_IMPORTED_MODULE_5__[\"useStoreActions\"]];\n});\n\n_c = NewScanModal;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NewScanModal);\n\nvar _c;\n\n$RefreshReg$(_c, \"NewScanModal\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTmV3U2Nhbk1vZGFsL05ld1NjYW5Nb2RhbC5qcz85ZTE0Il0sIm5hbWVzIjpbIk5ld1NjYW5Nb2RhbCIsImlzTmV3Iiwic2V0SXNOZXciLCJzZXROZXdTY2FuIiwidXNlU3RhdGUiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInVybCIsInNldFVybCIsInNsdWdzIiwic2V0U2x1Z3MiLCJ1c2VTdG9yZVN0YXRlIiwic3RhdGUiLCJzY2FuQ3RncyIsImFjdGlvbnMiLCJ1c2VTdG9yZUFjdGlvbnMiLCJoYW5kbGVTbHVncyIsInVybFJneCIsInRlc3QiLCJnZXRTaW5nbGVNZXRhIiwib2siLCJkYXRhIiwiYWRkSW5mb0V2ZW50Iiwic2V0TWV0YWRhdGEiLCJzbHVnRHJpdmVyIiwicXVlcnkiLCJ3ZWJzaXRlIiwic3RvcmVNZXRhRGF0YSIsIm1ha2VTdG9yZURhdGEiLCJtZXRhZGF0YSIsInNldFNjYW5VcmwiLCJ1c2VFZmZlY3QiLCJjc3MiLCJtb2RhbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLFlBQVksR0FBRyxTQUFmQSxZQUFlLE9BQXFDO0FBQUE7O0FBQUEsTUFBbENDLEtBQWtDLFFBQWxDQSxLQUFrQztBQUFBLE1BQTNCQyxRQUEyQixRQUEzQkEsUUFBMkI7QUFBQSxNQUFqQkMsVUFBaUIsUUFBakJBLFVBQWlCOztBQUFBLGtCQUMxQkMsc0RBQVEsQ0FBQyxLQUFELENBRGtCO0FBQUEsTUFDakRDLE9BRGlEO0FBQUEsTUFDeENDLFVBRHdDOztBQUFBLG1CQUVsQ0Ysc0RBQVEsQ0FBQyxFQUFELENBRjBCO0FBQUEsTUFFakRHLEdBRmlEO0FBQUEsTUFFNUNDLE1BRjRDOztBQUFBLG1CQUc5Qkosc0RBQVEsQ0FBQyxFQUFELENBSHNCO0FBQUEs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QkFBVyxFQUFFTztBQUpmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBU0UscUVBQUMsMkRBQUQ7QUFBUyxpQkFBTyxFQUFFWCxPQUFsQjtBQUEyQixlQUFLLEVBQUVKO0FBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBVEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFZRTtBQUFLLGlCQUFTLEVBQUMsS0FBZjtBQUFBLGtCQUVHWSxRQUFRLGlCQUFJLHFFQUFDLG1FQUFEO0FBQWEsb0JBQVUsRUFBRVY7QUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZmO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFaRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFxQkQsQ0F6RUQ7O0dBQU1ILFk7VUFLaUJXLHdELEVBQ0xJLDBEOzs7S0FOWmYsWTtBQTJFU0EsMkVBQWYiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9OZXdTY2FuTW9kYWwvTmV3U2Nhbk1vZGFsLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlU3RvcmVBY3Rpb25zLCB1c2VTdG9yZVN0YXRlIH0gZnJvbSBcImVhc3ktcGVhc3lcIjtcblxuaW1wb3J0IE5ld1NjYW5Gb3JtIGZyb20gXCIuLi9OZXdTY2FuRm9ybS9OZXdTY2FuRm9ybS5qc1wiO1xuaW1wb3J0IFdlYkNhcmQgZnJvbSBcIi4uL1dlYkNhcmQvV2ViQ2FyZC5qc1wiO1xuaW1wb3J0IE5ld1NjYW5Jbml0IGZyb20gXCIuLi9OZXdTY2FuSW5pdC9OZXdTY2FuSW5pdC5qc1wiO1xuaW1wb3J0IE1vZGFsQmFja2dyb3VuZCBmcm9tIFwiLi4vTW9kYWxCYWNrZ3JvdW5kL01vZGFsQmFja2dyb3VuZC5qc1wiO1xuXG5pbXBvcnQgY3NzIGZyb20gXCIuL05ld1NjYW5Nb2RhbC5tb2R1bGUuY3NzXCI7XG5cbmltcG9ydCB7IHNsdWdEcml2ZXIgfSBmcm9tIFwiLi4vLi4vbGliL2RyaXZlcnMvcmVzdERyaXZlcnNcIjtcbmltcG9ydCB7IGdldFNpbmdsZU1ldGEsIG1ha2VTdG9yZURhdGEgfSBmcm9tIFwiLi4vLi4vbGliL2hlbHBlcnMvcHJvY2Vzc0RiLmpzXCI7XG5pbXBvcnQgeyB1cmxSZ3ggfSBmcm9tIFwiLi4vLi4vbGliL2hlbHBlcnMvcmVnZXhcIjtcblxuY29uc3QgTmV3U2Nhbk1vZGFsID0gKHsgaXNOZXcsIHNldElzTmV3LCBzZXROZXdTY2FuIH0pID0+IHtcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbdXJsLCBzZXRVcmxdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtzbHVncywgc2V0U2x1Z3NdID0gdXNlU3RhdGUoW10pO1xuXG4gIGNvbnN0IHsgc2NhbkN0Z3MgfSA9IHVzZVN0b3JlU3RhdGUoc3RhdGUgPT4gc3RhdGUpO1xuICBjb25zdCBhY3Rpb25zID0gdXNlU3RvcmVBY3Rpb25zKGFjdGlvbnMgPT4gYWN0aW9ucyk7XG5cbiAgY29uc3QgaGFuZGxlU2x1Z3MgPSBhc3luYyAoKSA9PiB7XG4gICAgc2V0VXJsKFwiXCIpO1xuXG4gICAgaWYgKCF1cmxSZ3gudGVzdCh1cmwpKSByZXR1cm47XG5cbiAgICAvLyBSZW1vdmUgXCJOZXcgRENDIHNjYW5cIiB0aXRsZSBhbmQgc2V0IGxvYWRpbmcgYW5pbWF0aW9uXG4gICAgc2V0SXNOZXcoZmFsc2UpO1xuICAgIHNldExvYWRpbmcodHJ1ZSk7XG5cbiAgICBsZXQgd2Vic2l0ZTtcblxuICAgIC8vIENoZWNrIGlmIG1ldGFkYXRhIGV4aXN0cyBpbiBsb2NhbCBkYlxuICAgIGNvbnN0IHsgb2ssIGRhdGEgfSA9IGF3YWl0IGdldFNpbmdsZU1ldGEodXJsKTtcblxuICAgIGlmIChvayAmJiBkYXRhKSB7XG4gICAgICBhY3Rpb25zLmFkZEluZm9FdmVudChgTWV0YWRhdGEgZm9yICR7dXJsfSBzdWNjZXNzZnVsbHkgZmV0Y2hlZC5gKTtcbiAgICAgIGFjdGlvbnMuc2V0TWV0YWRhdGEoZGF0YSk7XG4gICAgICBzZXRTbHVncyhkYXRhLnNsdWdzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gSWYgd2Vic2l0ZSBkb2VzIG5vdCBleGlzdCBpbiBsb2NhbCBkYiwgZmV0Y2ggbWV0YWRhdGFcbiAgICAgIHdlYnNpdGUgPSBhd2FpdCBzbHVnRHJpdmVyKHsgcXVlcnk6IFwidXJsPVwiICsgdXJsIH0pO1xuXG4gICAgICAvLyBTdG9yZSB3ZWJzaXRlIG1ldGFkYXRhIGFuZCBzbHVncyB0byBsb2NhbCBkYlxuICAgICAgY29uc3Qgc3RvcmVNZXRhRGF0YSA9IHdlYnNpdGUgJiYgbWFrZVN0b3JlRGF0YSh1cmwsIGFjdGlvbnMsIHRydWUpO1xuXG4gICAgICB3ZWJzaXRlICYmXG4gICAgICAgIChhd2FpdCBzdG9yZU1ldGFEYXRhKHsgLi4ud2Vic2l0ZS5tZXRhZGF0YSwgc2x1Z3M6IHdlYnNpdGUuc2x1Z3MgfSkpO1xuXG4gICAgICB3ZWJzaXRlICYmIHdlYnNpdGUubWV0YWRhdGEgJiYgYWN0aW9ucy5zZXRNZXRhZGF0YSh3ZWJzaXRlLm1ldGFkYXRhKTtcbiAgICAgIHdlYnNpdGUgJiYgc2V0U2x1Z3Mod2Vic2l0ZS5zbHVncyk7XG4gICAgICB3ZWJzaXRlICYmIHNldExvYWRpbmcoZmFsc2UpO1xuICAgIH1cblxuICAgIGFjdGlvbnMuc2V0U2NhblVybCh1cmwpO1xuICAgIC8vIEluIGNhc2Ugb2YgZXJyb3JzIHdoaWxlIGZldGNoaW5nIG1ldGFkYXRhLCByZXNldCB0aGUgbG9hZGluZyBzY3JlZW5cbiAgICBpZiAoIXdlYnNpdGUpIHtcbiAgICAgIHNldElzTmV3KHRydWUpO1xuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgfVxuICB9O1xuXG4gIC8vIENsZWFudXAgZnVuY3Rpb24sIHJlc2V0cyBhbGwgdXJsIGRhdGEgZWFjaCB0b21lIE1vZGFsIGNvbXBvbmVudCB1bm1vdW50c1xuICB1c2VFZmZlY3QoKCkgPT4gKCkgPT4gc2V0SXNOZXcodHJ1ZSksIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxNb2RhbEJhY2tncm91bmQgdHJpZ2dlcj17c2V0TmV3U2Nhbn0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y3NzLm1vZGFsfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgZmxleFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGhyZWUgY29sdW1uc1wiPlxuICAgICAgICAgICAgPE5ld1NjYW5Gb3JtXG4gICAgICAgICAgICAgIHVybD17dXJsfVxuICAgICAgICAgICAgICBzZXRVcmw9e3NldFVybH1cbiAgICAgICAgICAgICAgc2x1Z3M9e3NsdWdzfVxuICAgICAgICAgICAgICBoYW5kbGVTbHVncz17aGFuZGxlU2x1Z3N9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxXZWJDYXJkIGxvYWRpbmc9e2xvYWRpbmd9IGlzTmV3PXtpc05ld30gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgey8qIERvIG5vdCBkaXNwbGF5IFNUQVJUIFNDQU4gYnV0dG9uIHVudGlsIFVSTCBhbmQgY2F0ZWdvcmllcyBhcmUgcHJlcGFyZWQgKi99XG4gICAgICAgICAge3NjYW5DdGdzICYmIDxOZXdTY2FuSW5pdCBzZXROZXdTY2FuPXtzZXROZXdTY2FufSAvPn1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L01vZGFsQmFja2dyb3VuZD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE5ld1NjYW5Nb2RhbDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/NewScanModal/NewScanModal.js\n");

/***/ })

})