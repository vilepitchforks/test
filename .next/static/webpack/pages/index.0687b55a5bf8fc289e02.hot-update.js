webpackHotUpdate_N_E("pages/index",{

/***/ "./src/lib/helpers/processDb.js":
/*!**************************************!*\
  !*** ./src/lib/helpers/processDb.js ***!
  \**************************************/
/*! exports provided: makeStoreData, getDbNames, getScannedMeta, getSingleMeta, getStoresNames, getStoreData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"makeStoreData\", function() { return makeStoreData; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getDbNames\", function() { return getDbNames; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getScannedMeta\", function() { return getScannedMeta; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getSingleMeta\", function() { return getSingleMeta; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStoresNames\", function() { return getStoresNames; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStoreData\", function() { return getStoreData; });\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var zangodb__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! zangodb */ \"./node_modules/zangodb/build/src/index.js\");\n/* harmony import */ var zangodb__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(zangodb__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n // TO DO: check if db exists before running scan\n// export const getDbs = async () =>{}\n// TO DO: if existing url has been selected, return metadata\n// export const checkMeta = async () =>{}\n\nvar makeStoreData = function makeStoreData(url, actions, meta) {\n  return /*#__PURE__*/function () {\n    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(data) {\n      var v, collName, dbCheck, db, collection, successMsg;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              v = 0;\n              collName = meta ? \"metadata\" : new Date().getTime().toString(); // Check if DB for current URL exists\n\n              _context.next = 4;\n              return window.indexedDB.databases().then(function (dbs) {\n                return Array.isArray(dbs) && dbs.find(function (db) {\n                  return db.name === url;\n                });\n              });\n\n            case 4:\n              dbCheck = _context.sent;\n              // If DB existis, increment version in order to add a new collection\n              if (typeof dbCheck != \"undefined\" && dbCheck.name === url && dbCheck.version > 0) v = dbCheck.version + 1; // Modify data when storing scan data. If storing metadata, ignore this block\n\n              if (meta) {\n                _context.next = 12;\n                break;\n              }\n\n              // Get only results with valid DCC objects\n              data = data[url] && data[url].filter(function (item) {\n                return Object.keys(item).length > 1;\n              });\n\n              if (!(typeof data === \"undefined\" || !data.length)) {\n                _context.next = 12;\n                break;\n              }\n\n              actions.addInfoEvent(\"Scan data processed. No bvDCC data found.\");\n              actions.setProcessInProgress(false);\n              return _context.abrupt(\"return\");\n\n            case 12:\n              // Define collections without indexes.\n              db = new zangodb__WEBPACK_IMPORTED_MODULE_3___default.a.Db(url, v, [collName]);\n              collection = db.collection(collName);\n              successMsg = meta ? \"Metadata successfully stored.\" : \"Scan data successfully processed.\";\n              collection.insert(data).then(function () {\n                actions.addInfoEvent(successMsg); // Completes the check switch for the entire process from starting scan to the storing of data in db:\n\n                !meta && actions.setProcessInProgress(false);\n                db.close();\n              })[\"catch\"](function (error) {\n                actions.addErrorEvent(\"Error processing scanned data: \" + error.message);\n                console.error(error); // Completes the check switch for the entire process from starting scan to the storing of data in db:\n\n                !meta && actions.setProcessInProgress(false);\n                db.close();\n              });\n              db.on(\"blocked\", function () {\n                console.warn(\"Database blocked event fired with details: \".concat(meta ? \"Metadata\" : \"Scan data\", \" store attempt for url \").concat(url));\n                actions.addInfoEvent(\"We are experiencing some issues with data processing.\\nPlease stand by or reload the page and try again.\");\n                db.close();\n              });\n\n            case 17:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function (_x) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n};\nvar getDbNames = /*#__PURE__*/function () {\n  var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2() {\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            return _context2.abrupt(\"return\", window.indexedDB.databases().then(function (res) {\n              return res.map(function (db) {\n                return db.name;\n              });\n            }));\n\n          case 1:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2);\n  }));\n\n  return function getDbNames() {\n    return _ref2.apply(this, arguments);\n  };\n}();\nvar getScannedMeta = /*#__PURE__*/function () {\n  var _ref3 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee3() {\n    var dbNames, meta;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee3$(_context3) {\n      while (1) {\n        switch (_context3.prev = _context3.next) {\n          case 0:\n            _context3.prev = 0;\n            _context3.next = 3;\n            return getDbNames();\n\n          case 3:\n            dbNames = _context3.sent;\n            _context3.next = 6;\n            return Promise.all(dbNames.map(function (dbName) {\n              return new Promise(function (resolve, reject) {\n                var db = new zangodb__WEBPACK_IMPORTED_MODULE_3___default.a.Db(dbName, [\"metadata\"]);\n                var col = db.collection(\"metadata\");\n                col.findOne().then(function (res) {\n                  return resolve(_objectSpread({\n                    dbName: dbName\n                  }, res));\n                })[\"catch\"](function (err) {\n                  return reject(err);\n                });\n              });\n            }));\n\n          case 6:\n            meta = _context3.sent;\n            return _context3.abrupt(\"return\", {\n              ok: true,\n              meta: meta\n            });\n\n          case 10:\n            _context3.prev = 10;\n            _context3.t0 = _context3[\"catch\"](0);\n            console.warn(\"Error occurred while fetching scanned Metadata: \", _context3.t0);\n            return _context3.abrupt(\"return\", {\n              ok: false\n            });\n\n          case 14:\n          case \"end\":\n            return _context3.stop();\n        }\n      }\n    }, _callee3, null, [[0, 10]]);\n  }));\n\n  return function getScannedMeta() {\n    return _ref3.apply(this, arguments);\n  };\n}();\nvar getSingleMeta = /*#__PURE__*/function () {\n  var _ref4 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee4(dbName, store) {\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee4$(_context4) {\n      while (1) {\n        switch (_context4.prev = _context4.next) {\n          case 0:\n          case \"end\":\n            return _context4.stop();\n        }\n      }\n    }, _callee4);\n  }));\n\n  return function getSingleMeta(_x2, _x3) {\n    return _ref4.apply(this, arguments);\n  };\n}();\nvar getStoresNames = function getStoresNames(dbName) {\n  var db = new zangodb__WEBPACK_IMPORTED_MODULE_3___default.a.Db(dbName);\n  return new Promise(function (resolve, reject) {\n    db.open(function () {\n      resolve(db._idb.objectStoreNames);\n      db.close();\n    });\n  });\n};\nvar getStoreData = /*#__PURE__*/function () {\n  var _ref5 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee5(dbName, store) {\n    var db, col, data;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee5$(_context5) {\n      while (1) {\n        switch (_context5.prev = _context5.next) {\n          case 0:\n            _context5.prev = 0;\n            db = new zangodb__WEBPACK_IMPORTED_MODULE_3___default.a.Db(dbName, [store]);\n            col = db.collection(store);\n            _context5.next = 5;\n            return col.find().toArray();\n\n          case 5:\n            data = _context5.sent;\n            return _context5.abrupt(\"return\", {\n              ok: true,\n              data: data\n            });\n\n          case 9:\n            _context5.prev = 9;\n            _context5.t0 = _context5[\"catch\"](0);\n            console.warn(\"Error accessing data: \", _context5.t0);\n            return _context5.abrupt(\"return\", {\n              ok: false,\n              data: _context5.t0\n            });\n\n          case 13:\n          case \"end\":\n            return _context5.stop();\n        }\n      }\n    }, _callee5, null, [[0, 9]]);\n  }));\n\n  return function getStoreData(_x4, _x5) {\n    return _ref5.apply(this, arguments);\n  };\n}();\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2xpYi9oZWxwZXJzL3Byb2Nlc3NEYi5qcz9hOWY1Il0sIm5hbWVzIjpbIm1ha2VTdG9yZURhdGEiLCJ1cmwiLCJhY3Rpb25zIiwibWV0YSIsImRhdGEiLCJ2IiwiY29sbE5hbWUiLCJEYXRlIiwiZ2V0VGltZSIsInRvU3RyaW5nIiwid2luZG93IiwiaW5kZXhlZERCIiwiZGF0YWJhc2VzIiwidGhlbiIsImRicyIsIkFycmF5IiwiaXNBcnJheSIsImZpbmQiLCJkYiIsIm5hbWUiLCJkYkNoZWNrIiwidmVyc2lvbiIsImZpbHRlciIsIml0ZW0iLCJPYmplY3QiLCJrZXlzIiwibGVuZ3RoIiwiYWRkSW5mb0V2ZW50Iiwic2V0UHJvY2Vzc0luUHJvZ3Jlc3MiLCJ6YW5nbyIsIkRiIiwiY29sbGVjdGlvbiIsInN1Y2Nlc3NNc2ciLCJpbnNlcnQiLCJjbG9zZSIsImVycm9yIiwiYWRkRXJyb3JFdmVudCIsIm1lc3NhZ2UiLCJjb25zb2xlIiwib24iLCJ3YXJuIiwiZ2V0RGJOYW1lcyIsInJlcyIsIm1hcCIsImdldFNjYW5uZWRNZXRhIiwiZGJOYW1lcyIsIlByb21pc2UiLCJhbGwiLCJkYk5hbWUiLCJyZXNvbHZlIiwicmVqZWN0IiwiY29sIiwiZmluZE9uZSIsImVyciIsIm9rIiwiZ2V0U2luZ2xlTWV0YSIsInN0b3JlIiwiZ2V0U3RvcmVzTmFtZXMiLCJvcGVuIiwiX2lkYiIsIm9iamVjdFN0b3JlTmFtZXMiLCJnZXRTdG9yZURhdGEiLCJ0b0FycmF5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FFQTtBQUNBO0FBRUE7QUFDQTs7QUFFTyxJQUFNQSxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUNDLEdBQUQsRUFBTUMsT0FBTixFQUFlQyxJQUFmO0FBQUE7QUFBQSxnTUFBd0IsaUJBQU1DLElBQU47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQy9DQyxlQUQrQyxHQUMzQyxDQUQyQztBQUU3Q0Ms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b0IsR0FHZGpDLEVBQUUsQ0FBQ2EsVUFBSCxDQUFjeUIsS0FBZCxDQUhjO0FBQUE7QUFBQSxtQkFJTEwsR0FBRyxDQUFDbEMsSUFBSixHQUFXNkMsT0FBWCxFQUpLOztBQUFBO0FBSWxCMUQsZ0JBSmtCO0FBQUEsOENBS2pCO0FBQUVrRCxnQkFBRSxFQUFFLElBQU47QUFBWWxELGtCQUFJLEVBQUpBO0FBQVosYUFMaUI7O0FBQUE7QUFBQTtBQUFBO0FBT3hCa0MsbUJBQU8sQ0FBQ0UsSUFBUixDQUFhLHdCQUFiO0FBUHdCLDhDQVFqQjtBQUFFYyxnQkFBRSxFQUFFLEtBQU47QUFBYWxELGtCQUFJO0FBQWpCLGFBUmlCOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUg7O0FBQUEsa0JBQVp5RCxZQUFZO0FBQUE7QUFBQTtBQUFBLEdBQWxCIiwiZmlsZSI6Ii4vc3JjL2xpYi9oZWxwZXJzL3Byb2Nlc3NEYi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB6YW5nbyBmcm9tIFwiemFuZ29kYlwiO1xuXG4vLyBUTyBETzogY2hlY2sgaWYgZGIgZXhpc3RzIGJlZm9yZSBydW5uaW5nIHNjYW5cbi8vIGV4cG9ydCBjb25zdCBnZXREYnMgPSBhc3luYyAoKSA9Pnt9XG5cbi8vIFRPIERPOiBpZiBleGlzdGluZyB1cmwgaGFzIGJlZW4gc2VsZWN0ZWQsIHJldHVybiBtZXRhZGF0YVxuLy8gZXhwb3J0IGNvbnN0IGNoZWNrTWV0YSA9IGFzeW5jICgpID0+e31cblxuZXhwb3J0IGNvbnN0IG1ha2VTdG9yZURhdGEgPSAodXJsLCBhY3Rpb25zLCBtZXRhKSA9PiBhc3luYyBkYXRhID0+IHtcbiAgbGV0IHYgPSAwO1xuICBjb25zdCBjb2xsTmFtZSA9IG1ldGEgPyBcIm1ldGFkYXRhXCIgOiBuZXcgRGF0ZSgpLmdldFRpbWUoKS50b1N0cmluZygpO1xuXG4gIC8vIENoZWNrIGlmIERCIGZvciBjdXJyZW50IFVSTCBleGlzdHNcbiAgY29uc3QgZGJDaGVjayA9IGF3YWl0IHdpbmRvdy5pbmRleGVkREJcbiAgICAuZGF0YWJhc2VzKClcbiAgICAudGhlbihkYnMgPT4gQXJyYXkuaXNBcnJheShkYnMpICYmIGRicy5maW5kKGRiID0+IGRiLm5hbWUgPT09IHVybCkpO1xuXG4gIC8vIElmIERCIGV4aXN0aXMsIGluY3JlbWVudCB2ZXJzaW9uIGluIG9yZGVyIHRvIGFkZCBhIG5ldyBjb2xsZWN0aW9uXG4gIGlmIChcbiAgICB0eXBlb2YgZGJDaGVjayAhPSBcInVuZGVmaW5lZFwiICYmXG4gICAgZGJDaGVjay5uYW1lID09PSB1cmwgJiZcbiAgICBkYkNoZWNrLnZlcnNpb24gPiAwXG4gIClcbiAgICB2ID0gZGJDaGVjay52ZXJzaW9uICsgMTtcblxuICAvLyBNb2RpZnkgZGF0YSB3aGVuIHN0b3Jpbmcgc2NhbiBkYXRhLiBJZiBzdG9yaW5nIG1ldGFkYXRhLCBpZ25vcmUgdGhpcyBibG9ja1xuICBpZiAoIW1ldGEpIHtcbiAgICAvLyBHZXQgb25seSByZXN1bHRzIHdpdGggdmFsaWQgRENDIG9iamVjdHNcbiAgICBkYXRhID0gZGF0YVt1cmxdICYmIGRhdGFbdXJsXS5maWx0ZXIoaXRlbSA9PiBPYmplY3Qua2V5cyhpdGVtKS5sZW5ndGggPiAxKTtcbiAgICBpZiAodHlwZW9mIGRhdGEgPT09IFwidW5kZWZpbmVkXCIgfHwgIWRhdGEubGVuZ3RoKSB7XG4gICAgICBhY3Rpb25zLmFkZEluZm9FdmVudChcIlNjYW4gZGF0YSBwcm9jZXNzZWQuIE5vIGJ2RENDIGRhdGEgZm91bmQuXCIpO1xuICAgICAgYWN0aW9ucy5zZXRQcm9jZXNzSW5Qcm9ncmVzcyhmYWxzZSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICB9XG5cbiAgLy8gRGVmaW5lIGNvbGxlY3Rpb25zIHdpdGhvdXQgaW5kZXhlcy5cbiAgY29uc3QgZGIgPSBuZXcgemFuZ28uRGIodXJsLCB2LCBbY29sbE5hbWVdKTtcblxuICBjb25zdCBjb2xsZWN0aW9uID0gZGIuY29sbGVjdGlvbihjb2xsTmFtZSk7XG5cbiAgY29uc3Qgc3VjY2Vzc01zZyA9IG1ldGFcbiAgICA/IFwiTWV0YWRhdGEgc3VjY2Vzc2Z1bGx5IHN0b3JlZC5cIlxuICAgIDogXCJTY2FuIGRhdGEgc3VjY2Vzc2Z1bGx5IHByb2Nlc3NlZC5cIjtcblxuICBjb2xsZWN0aW9uXG4gICAgLmluc2VydChkYXRhKVxuICAgIC50aGVuKCgpID0+IHtcbiAgICAgIGFjdGlvbnMuYWRkSW5mb0V2ZW50KHN1Y2Nlc3NNc2cpO1xuICAgICAgLy8gQ29tcGxldGVzIHRoZSBjaGVjayBzd2l0Y2ggZm9yIHRoZSBlbnRpcmUgcHJvY2VzcyBmcm9tIHN0YXJ0aW5nIHNjYW4gdG8gdGhlIHN0b3Jpbmcgb2YgZGF0YSBpbiBkYjpcbiAgICAgICFtZXRhICYmIGFjdGlvbnMuc2V0UHJvY2Vzc0luUHJvZ3Jlc3MoZmFsc2UpO1xuICAgICAgZGIuY2xvc2UoKTtcbiAgICB9KVxuICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICBhY3Rpb25zLmFkZEVycm9yRXZlbnQoXCJFcnJvciBwcm9jZXNzaW5nIHNjYW5uZWQgZGF0YTogXCIgKyBlcnJvci5tZXNzYWdlKTtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgLy8gQ29tcGxldGVzIHRoZSBjaGVjayBzd2l0Y2ggZm9yIHRoZSBlbnRpcmUgcHJvY2VzcyBmcm9tIHN0YXJ0aW5nIHNjYW4gdG8gdGhlIHN0b3Jpbmcgb2YgZGF0YSBpbiBkYjpcbiAgICAgICFtZXRhICYmIGFjdGlvbnMuc2V0UHJvY2Vzc0luUHJvZ3Jlc3MoZmFsc2UpO1xuICAgICAgZGIuY2xvc2UoKTtcbiAgICB9KTtcblxuICBkYi5vbihcImJsb2NrZWRcIiwgKCkgPT4ge1xuICAgIGNvbnNvbGUud2FybihcbiAgICAgIGBEYXRhYmFzZSBibG9ja2VkIGV2ZW50IGZpcmVkIHdpdGggZGV0YWlsczogJHtcbiAgICAgICAgbWV0YSA/IFwiTWV0YWRhdGFcIiA6IFwiU2NhbiBkYXRhXCJcbiAgICAgIH0gc3RvcmUgYXR0ZW1wdCBmb3IgdXJsICR7dXJsfWBcbiAgICApO1xuICAgIGFjdGlvbnMuYWRkSW5mb0V2ZW50KFxuICAgICAgXCJXZSBhcmUgZXhwZXJpZW5jaW5nIHNvbWUgaXNzdWVzIHdpdGggZGF0YSBwcm9jZXNzaW5nLlxcblBsZWFzZSBzdGFuZCBieSBvciByZWxvYWQgdGhlIHBhZ2UgYW5kIHRyeSBhZ2Fpbi5cIlxuICAgICk7XG4gICAgZGIuY2xvc2UoKTtcbiAgfSk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0RGJOYW1lcyA9IGFzeW5jICgpID0+XG4gIHdpbmRvdy5pbmRleGVkREIuZGF0YWJhc2VzKCkudGhlbihyZXMgPT4gcmVzLm1hcChkYiA9PiBkYi5uYW1lKSk7XG5cbmV4cG9ydCBjb25zdCBnZXRTY2FubmVkTWV0YSA9IGFzeW5jICgpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCBkYk5hbWVzID0gYXdhaXQgZ2V0RGJOYW1lcygpO1xuXG4gICAgY29uc3QgbWV0YSA9IGF3YWl0IFByb21pc2UuYWxsKFxuICAgICAgZGJOYW1lcy5tYXAoXG4gICAgICAgIGRiTmFtZSA9PlxuICAgICAgICAgIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGRiID0gbmV3IHphbmdvLkRiKGRiTmFtZSwgW1wibWV0YWRhdGFcIl0pO1xuICAgICAgICAgICAgbGV0IGNvbCA9IGRiLmNvbGxlY3Rpb24oXCJtZXRhZGF0YVwiKTtcbiAgICAgICAgICAgIGNvbFxuICAgICAgICAgICAgICAuZmluZE9uZSgpXG4gICAgICAgICAgICAgIC50aGVuKHJlcyA9PiByZXNvbHZlKHsgZGJOYW1lLCAuLi5yZXMgfSkpXG4gICAgICAgICAgICAgIC5jYXRjaChlcnIgPT4gcmVqZWN0KGVycikpO1xuICAgICAgICAgIH0pXG4gICAgICApXG4gICAgKTtcblxuICAgIHJldHVybiB7XG4gICAgICBvazogdHJ1ZSxcbiAgICAgIG1ldGFcbiAgICB9O1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUud2FybihcIkVycm9yIG9jY3VycmVkIHdoaWxlIGZldGNoaW5nIHNjYW5uZWQgTWV0YWRhdGE6IFwiLCBlcnJvcik7XG4gICAgcmV0dXJuIHsgb2s6IGZhbHNlIH07XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBnZXRTaW5nbGVNZXRhID0gYXN5bmMgKGRiTmFtZSwgc3RvcmUpID0+IHtcbiAgLy8gdHJ5IHtcbiAgLy8gICBjb25zdCBkYiA9IG5ldyB6YW5nby5EYihkYk5hbWUsIFtzdG9yZV0pO1xuICAvLyAgIGxldCBjb2wgPSBkYi5jb2xsZWN0aW9uKHN0b3JlKTtcbiAgLy8gICBjb25zdCBkYXRhID0gYXdhaXQgY29sLmZpbmQoKS50b0FycmF5KCk7XG4gIC8vICAgcmV0dXJuIHsgb2s6IHRydWUsIGRhdGEgfTtcbiAgLy8gfSBjYXRjaCAoZXJyb3IpIHtcbiAgLy8gICBjb25zb2xlLndhcm4oXCJFcnJvciBhY2Nlc3NpbmcgZGF0YTogXCIsIGVycm9yKTtcbiAgLy8gICByZXR1cm4geyBvazogZmFsc2UsIGRhdGE6IGVycm9yIH07XG4gIC8vIH1cbn07XG5cbmV4cG9ydCBjb25zdCBnZXRTdG9yZXNOYW1lcyA9IGRiTmFtZSA9PiB7XG4gIGNvbnN0IGRiID0gbmV3IHphbmdvLkRiKGRiTmFtZSk7XG5cbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBkYi5vcGVuKCgpID0+IHtcbiAgICAgIHJlc29sdmUoZGIuX2lkYi5vYmplY3RTdG9yZU5hbWVzKTtcbiAgICAgIGRiLmNsb3NlKCk7XG4gICAgfSk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFN0b3JlRGF0YSA9IGFzeW5jIChkYk5hbWUsIHN0b3JlKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgZGIgPSBuZXcgemFuZ28uRGIoZGJOYW1lLCBbc3RvcmVdKTtcbiAgICBsZXQgY29sID0gZGIuY29sbGVjdGlvbihzdG9yZSk7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IGNvbC5maW5kKCkudG9BcnJheSgpO1xuICAgIHJldHVybiB7IG9rOiB0cnVlLCBkYXRhIH07XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS53YXJuKFwiRXJyb3IgYWNjZXNzaW5nIGRhdGE6IFwiLCBlcnJvcik7XG4gICAgcmV0dXJuIHsgb2s6IGZhbHNlLCBkYXRhOiBlcnJvciB9O1xuICB9XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/lib/helpers/processDb.js\n");

/***/ })

})