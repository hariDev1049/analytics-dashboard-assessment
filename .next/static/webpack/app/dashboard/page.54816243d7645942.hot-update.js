"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/dashboard/page",{

/***/ "(app-pages-browser)/./app/components/Pagination.tsx":
/*!***************************************!*\
  !*** ./app/components/Pagination.tsx ***!
  \***************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Pagination)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n\nfunction Pagination(param) {\n    let { currentPage, totalRecords, onPageChange } = param;\n    const totalPages = Math.ceil(totalRecords / 10);\n    const handlePrevious = ()=>{\n        if (currentPage > 1) {\n            onPageChange(currentPage - 1);\n        }\n    };\n    const handleNext = ()=>{\n        if (currentPage < totalPages) {\n            onPageChange(currentPage + 1);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex justify-between items-center mt-4 text-slate-950\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: handlePrevious,\n                disabled: currentPage === 1,\n                className: \"px-4 py-2 bg-gray-500 text-white rounded disabled:opacity-50\",\n                children: \"Previous\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\LENOVO\\\\Documents\\\\dash\\\\analytics-dashboard-assessment\\\\app\\\\components\\\\Pagination.tsx\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: \"text-lg\",\n                children: [\n                    \"Page \",\n                    currentPage,\n                    \" of \",\n                    totalPages\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\LENOVO\\\\Documents\\\\dash\\\\analytics-dashboard-assessment\\\\app\\\\components\\\\Pagination.tsx\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: handleNext,\n                disabled: currentPage === totalPages,\n                className: \"px-4 py-2 bg-gray-500 text-white rounded disabled:opacity-50\",\n                children: \"Next\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\LENOVO\\\\Documents\\\\dash\\\\analytics-dashboard-assessment\\\\app\\\\components\\\\Pagination.tsx\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\LENOVO\\\\Documents\\\\dash\\\\analytics-dashboard-assessment\\\\app\\\\components\\\\Pagination.tsx\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, this);\n}\n_c = Pagination;\nvar _c;\n$RefreshReg$(_c, \"Pagination\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL1BhZ2luYXRpb24udHN4IiwibWFwcGluZ3MiOiI7Ozs7OztBQUFlLFNBQVNBLFdBQVcsS0FJbEM7UUFKa0MsRUFDakNDLFdBQVcsRUFDWEMsWUFBWSxFQUNaQyxZQUFZLEVBQ2IsR0FKa0M7SUFLakMsTUFBTUMsYUFBYUMsS0FBS0MsSUFBSSxDQUFDSixlQUFlO0lBRTVDLE1BQU1LLGlCQUFpQjtRQUNyQixJQUFJTixjQUFjLEdBQUc7WUFDbkJFLGFBQWFGLGNBQWM7UUFDN0I7SUFDRjtJQUVBLE1BQU1PLGFBQWE7UUFDakIsSUFBSVAsY0FBY0csWUFBWTtZQUM1QkQsYUFBYUYsY0FBYztRQUM3QjtJQUNGO0lBRUEscUJBQ0UsOERBQUNRO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDQztnQkFDQ0MsU0FBU0w7Z0JBQ1RNLFVBQVVaLGdCQUFnQjtnQkFDMUJTLFdBQVU7MEJBQ1g7Ozs7OzswQkFHRCw4REFBQ0k7Z0JBQUtKLFdBQVU7O29CQUFVO29CQUNsQlQ7b0JBQVk7b0JBQUtHOzs7Ozs7OzBCQUV6Qiw4REFBQ087Z0JBQ0NDLFNBQVNKO2dCQUNUSyxVQUFVWixnQkFBZ0JHO2dCQUMxQk0sV0FBVTswQkFDWDs7Ozs7Ozs7Ozs7O0FBS1A7S0F4Q3dCViIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvY29tcG9uZW50cy9QYWdpbmF0aW9uLnRzeD9mNzFlIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBhZ2luYXRpb24oe1xyXG4gIGN1cnJlbnRQYWdlLFxyXG4gIHRvdGFsUmVjb3JkcyxcclxuICBvblBhZ2VDaGFuZ2UsXHJcbn0pIHtcclxuICBjb25zdCB0b3RhbFBhZ2VzID0gTWF0aC5jZWlsKHRvdGFsUmVjb3JkcyAvIDEwKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlUHJldmlvdXMgPSAoKSA9PiB7XHJcbiAgICBpZiAoY3VycmVudFBhZ2UgPiAxKSB7XHJcbiAgICAgIG9uUGFnZUNoYW5nZShjdXJyZW50UGFnZSAtIDEpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZU5leHQgPSAoKSA9PiB7XHJcbiAgICBpZiAoY3VycmVudFBhZ2UgPCB0b3RhbFBhZ2VzKSB7XHJcbiAgICAgIG9uUGFnZUNoYW5nZShjdXJyZW50UGFnZSArIDEpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciBtdC00IHRleHQtc2xhdGUtOTUwXCI+XHJcbiAgICAgIDxidXR0b25cclxuICAgICAgICBvbkNsaWNrPXtoYW5kbGVQcmV2aW91c31cclxuICAgICAgICBkaXNhYmxlZD17Y3VycmVudFBhZ2UgPT09IDF9XHJcbiAgICAgICAgY2xhc3NOYW1lPVwicHgtNCBweS0yIGJnLWdyYXktNTAwIHRleHQtd2hpdGUgcm91bmRlZCBkaXNhYmxlZDpvcGFjaXR5LTUwXCJcclxuICAgICAgPlxyXG4gICAgICAgIFByZXZpb3VzXHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWxnXCI+XHJcbiAgICAgICAgUGFnZSB7Y3VycmVudFBhZ2V9IG9mIHt0b3RhbFBhZ2VzfVxyXG4gICAgICA8L3NwYW4+XHJcbiAgICAgIDxidXR0b25cclxuICAgICAgICBvbkNsaWNrPXtoYW5kbGVOZXh0fVxyXG4gICAgICAgIGRpc2FibGVkPXtjdXJyZW50UGFnZSA9PT0gdG90YWxQYWdlc31cclxuICAgICAgICBjbGFzc05hbWU9XCJweC00IHB5LTIgYmctZ3JheS01MDAgdGV4dC13aGl0ZSByb3VuZGVkIGRpc2FibGVkOm9wYWNpdHktNTBcIlxyXG4gICAgICA+XHJcbiAgICAgICAgTmV4dFxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIlBhZ2luYXRpb24iLCJjdXJyZW50UGFnZSIsInRvdGFsUmVjb3JkcyIsIm9uUGFnZUNoYW5nZSIsInRvdGFsUGFnZXMiLCJNYXRoIiwiY2VpbCIsImhhbmRsZVByZXZpb3VzIiwiaGFuZGxlTmV4dCIsImRpdiIsImNsYXNzTmFtZSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJkaXNhYmxlZCIsInNwYW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/Pagination.tsx\n"));

/***/ })

});