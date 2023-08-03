"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/floatbox.js":
/*!********************************!*\
  !*** ./components/floatbox.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Floatbox; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _colorselection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./colorselection */ \"./components/colorselection.js\");\n/* harmony import */ var _imageselection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./imageselection */ \"./components/imageselection.js\");\n/* harmony import */ var _packageselection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./packageselection */ \"./components/packageselection.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Floatbox() {\n    _s();\n    const [index, setIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [showColorSelection, setColor] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [showImageSelection, setImage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [showPackageSelection, setPackage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [mms, setMms] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([\n        {\n            id: \"RC0001\",\n            color: \"bg-mm-red border-solid border-4 border-black\",\n            available: true\n        },\n        {\n            id: \"WC0001\",\n            color: \"bg-white\",\n            available: true\n        },\n        {\n            id: \"BC0001\",\n            color: \"bg-mm-blue\",\n            available: true\n        },\n        {\n            id: \"LBC0001\",\n            color: \"bg-mm-lightblue border-solid border-4 border-black\",\n            available: true\n        },\n        {\n            id: \"DBC0001\",\n            color: \"bg-mm-darkblue\",\n            available: true\n        },\n        {\n            id: \"DPC0001\",\n            color: \"bg-mm-darkpink\",\n            available: true\n        },\n        {\n            id: \"PC0001\",\n            color: \"bg-mm-pink\",\n            available: true\n        },\n        {\n            id: \"OC0001\",\n            color: \"bg-mm-orange\",\n            available: true\n        },\n        {\n            id: \"DYC0001\",\n            color: \"bg-mm-darkyellow\",\n            available: true\n        },\n        {\n            id: \"Y0001\",\n            color: \"bg-mm-yellow border-solid border-4 border-black\",\n            available: true\n        }\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        for(const index in mms){\n            fetch(\"https://api.watsoncommerce.ibm.com/inventory/us-1bbb91c7/v2/availability/network\", {\n                method: \"POST\",\n                body: JSON.stringify({\n                    distributionGroupId: \"DIAB_ALL\",\n                    lines: [\n                        {\n                            lineId: \"1\",\n                            itemId: mms[index].id,\n                            unitOfMeasure: \"EACH\"\n                        }\n                    ],\n                    segment: \"\",\n                    segmentType: \"\",\n                    considerSafetyStock: false\n                }),\n                headers: {\n                    \"Content-Type\": \"application/json\",\n                    \"Authorization\": \"Bearer \" + \"ZWIBmbJJrZJkJx6y76MpHOXL5raxKzYb\"\n                }\n            }).then((res)=>res.json()).then((data)=>{\n                if (data.lines[0].networkAvailabilities[0].onhandAvailableQuantity <= 0) {\n                    updateAvailability(index);\n                }\n            });\n        }\n    }, []);\n    const handleButtonClick = (ind)=>{\n        if (ind == 0) {\n            setColor(false);\n            setImage(true);\n            setPackage(false);\n            setIndex(1);\n        } else if (ind == 1) {\n            setColor(false);\n            setImage(false);\n            setPackage(true);\n            setIndex(2);\n        } else {\n            setColor(true);\n            setImage(false);\n            setPackage(false);\n            setIndex(0);\n        }\n    };\n    function updateAvailability(ind) {\n        const newmms = mms.map((mm, i)=>{\n            if (i == ind) {\n                mm.available = false;\n                return mm;\n            } else {\n                return mm;\n            }\n        });\n        setMms(newmms);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"shadow-lg h-fit w-1/4 m-16 rounded-lg bg-white\",\n        children: [\n            showColorSelection && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_colorselection__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                incomingMms: mms\n            }, void 0, false, {\n                fileName: \"/Users/knicholas.kennedyibm.com/Documents/projects/mms-nextjs-app/components/floatbox.js\",\n                lineNumber: 131,\n                columnNumber: 36\n            }, this),\n            showImageSelection && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_imageselection__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/knicholas.kennedyibm.com/Documents/projects/mms-nextjs-app/components/floatbox.js\",\n                lineNumber: 132,\n                columnNumber: 36\n            }, this),\n            showPackageSelection && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_packageselection__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/knicholas.kennedyibm.com/Documents/projects/mms-nextjs-app/components/floatbox.js\",\n                lineNumber: 133,\n                columnNumber: 38\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"h-16 w-full m-8 bg-mm-yellow rounded-lg next-button\",\n                style: {\n                    width: \"-moz-available\"\n                },\n                onClick: ()=>handleButtonClick(index),\n                children: \"Next\"\n            }, void 0, false, {\n                fileName: \"/Users/knicholas.kennedyibm.com/Documents/projects/mms-nextjs-app/components/floatbox.js\",\n                lineNumber: 134,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/knicholas.kennedyibm.com/Documents/projects/mms-nextjs-app/components/floatbox.js\",\n        lineNumber: 130,\n        columnNumber: 9\n    }, this);\n}\n_s(Floatbox, \"RHXlKQmC51PWfcoRzlzBNgHqzJQ=\");\n_c = Floatbox;\nvar _c;\n$RefreshReg$(_c, \"Floatbox\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LDhEQUFDUCx1REFBY0E7Ozs7O1lBQ3JDUyxzQ0FBd0IsOERBQUNSLHlEQUFnQkE7Ozs7OzBCQUMxQyw4REFBQ2dEO2dCQUNHRixXQUFVO2dCQUNWRyxPQUFPO29CQUFFQyxPQUFRO2dCQUFnQjtnQkFDakNDLFNBQVMsSUFBTVosa0JBQWtCckM7MEJBQ3BDOzs7Ozs7Ozs7Ozs7QUFLYjtHQXhJd0JEO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvZmxvYXRib3guanM/NDk1NSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCBDb2xvclNlbGVjdGlvbiBmcm9tIFwiLi9jb2xvcnNlbGVjdGlvblwiXG5pbXBvcnQgSW1hZ2VTZWxlY3Rpb24gZnJvbSBcIi4vaW1hZ2VzZWxlY3Rpb25cIlxuaW1wb3J0IFBhY2thZ2VTZWxlY3Rpb24gZnJvbSBcIi4vcGFja2FnZXNlbGVjdGlvblwiXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRmxvYXRib3goKSB7XG4gICAgY29uc3QgW2luZGV4LCBzZXRJbmRleF0gPSB1c2VTdGF0ZSgwKVxuICAgIGNvbnN0IFtzaG93Q29sb3JTZWxlY3Rpb24sIHNldENvbG9yXSA9IHVzZVN0YXRlKHRydWUpXG4gICAgY29uc3QgW3Nob3dJbWFnZVNlbGVjdGlvbiwgc2V0SW1hZ2VdID0gdXNlU3RhdGUoZmFsc2UpXG4gICAgY29uc3QgW3Nob3dQYWNrYWdlU2VsZWN0aW9uLCBzZXRQYWNrYWdlXSA9IHVzZVN0YXRlKGZhbHNlKVxuICAgIGNvbnN0IFttbXMsIHNldE1tc10gPSB1c2VTdGF0ZShbXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAnUkMwMDAxJyxcbiAgICAgICAgICAgIGNvbG9yOiAnYmctbW0tcmVkIGJvcmRlci1zb2xpZCBib3JkZXItNCBib3JkZXItYmxhY2snLFxuICAgICAgICAgICAgYXZhaWxhYmxlOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAnV0MwMDAxJyxcbiAgICAgICAgICAgIGNvbG9yOiAnYmctd2hpdGUnLFxuICAgICAgICAgICAgYXZhaWxhYmxlOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAnQkMwMDAxJyxcbiAgICAgICAgICAgIGNvbG9yOiAnYmctbW0tYmx1ZScsXG4gICAgICAgICAgICBhdmFpbGFibGU6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgaWQ6ICdMQkMwMDAxJyxcbiAgICAgICAgICAgIGNvbG9yOiAnYmctbW0tbGlnaHRibHVlIGJvcmRlci1zb2xpZCBib3JkZXItNCBib3JkZXItYmxhY2snLFxuICAgICAgICAgICAgYXZhaWxhYmxlOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAnREJDMDAwMScsXG4gICAgICAgICAgICBjb2xvcjogJ2JnLW1tLWRhcmtibHVlJyxcbiAgICAgICAgICAgIGF2YWlsYWJsZTogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBpZDogJ0RQQzAwMDEnLFxuICAgICAgICAgICAgY29sb3I6ICdiZy1tbS1kYXJrcGluaycsXG4gICAgICAgICAgICBhdmFpbGFibGU6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgaWQ6ICdQQzAwMDEnLFxuICAgICAgICAgICAgY29sb3I6ICdiZy1tbS1waW5rJyxcbiAgICAgICAgICAgIGF2YWlsYWJsZTogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBpZDogJ09DMDAwMScsXG4gICAgICAgICAgICBjb2xvcjogJ2JnLW1tLW9yYW5nZScsXG4gICAgICAgICAgICBhdmFpbGFibGU6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgaWQ6ICdEWUMwMDAxJyxcbiAgICAgICAgICAgIGNvbG9yOiAnYmctbW0tZGFya3llbGxvdycsXG4gICAgICAgICAgICBhdmFpbGFibGU6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgaWQ6ICdZMDAwMScsXG4gICAgICAgICAgICBjb2xvcjogJ2JnLW1tLXllbGxvdyBib3JkZXItc29saWQgYm9yZGVyLTQgYm9yZGVyLWJsYWNrJyxcbiAgICAgICAgICAgIGF2YWlsYWJsZTogdHJ1ZVxuICAgICAgICB9XSlcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGZvciAoY29uc3QgaW5kZXggaW4gbW1zKSB7XG4gICAgICAgICAgICBmZXRjaCgnaHR0cHM6Ly9hcGkud2F0c29uY29tbWVyY2UuaWJtLmNvbS9pbnZlbnRvcnkvdXMtMWJiYjkxYzcvdjIvYXZhaWxhYmlsaXR5L25ldHdvcmsnLCB7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgICAgICBkaXN0cmlidXRpb25Hcm91cElkOiBcIkRJQUJfQUxMXCIsXG4gICAgICAgICAgICAgICAgICAgIGxpbmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZUlkOiBcIjFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtSWQ6IG1tc1tpbmRleF0uaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdW5pdE9mTWVhc3VyZTogXCJFQUNIXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgc2VnbWVudDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgc2VnbWVudFR5cGU6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIGNvbnNpZGVyU2FmZXR5U3RvY2s6IGZhbHNlXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6ICdCZWFyZXIgJyArIHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0JFQVJFUl9UT0tFTlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcbiAgICAgICAgICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS5saW5lc1swXS5uZXR3b3JrQXZhaWxhYmlsaXRpZXNbMF0ub25oYW5kQXZhaWxhYmxlUXVhbnRpdHkgPD0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlQXZhaWxhYmlsaXR5KGluZGV4KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH0sIFtdKVxuXG4gICAgY29uc3QgaGFuZGxlQnV0dG9uQ2xpY2sgPSAoaW5kKSA9PiB7XG4gICAgICAgIGlmIChpbmQgPT0gMCkge1xuICAgICAgICAgICAgc2V0Q29sb3IoZmFsc2UpXG4gICAgICAgICAgICBzZXRJbWFnZSh0cnVlKVxuICAgICAgICAgICAgc2V0UGFja2FnZShmYWxzZSlcbiAgICAgICAgICAgIHNldEluZGV4KDEpXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoaW5kID09IDEpIHtcbiAgICAgICAgICAgIHNldENvbG9yKGZhbHNlKVxuICAgICAgICAgICAgc2V0SW1hZ2UoZmFsc2UpXG4gICAgICAgICAgICBzZXRQYWNrYWdlKHRydWUpXG4gICAgICAgICAgICBzZXRJbmRleCgyKVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgc2V0Q29sb3IodHJ1ZSlcbiAgICAgICAgICAgIHNldEltYWdlKGZhbHNlKVxuICAgICAgICAgICAgc2V0UGFja2FnZShmYWxzZSlcbiAgICAgICAgICAgIHNldEluZGV4KDApXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1cGRhdGVBdmFpbGFiaWxpdHkoaW5kKSB7XG4gICAgICAgIGNvbnN0IG5ld21tcyA9IG1tcy5tYXAoKG1tLCBpKSA9PiB7XG4gICAgICAgICAgICBpZiAoaSA9PSBpbmQpIHtcbiAgICAgICAgICAgICAgICBtbS5hdmFpbGFibGUgPSBmYWxzZVxuICAgICAgICAgICAgICAgIHJldHVybiBtbVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG1tXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIHNldE1tcyhuZXdtbXMpXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaGFkb3ctbGcgaC1maXQgdy0xLzQgbS0xNiByb3VuZGVkLWxnIGJnLXdoaXRlXCI+XG4gICAgICAgICAgICB7c2hvd0NvbG9yU2VsZWN0aW9uICYmIDxDb2xvclNlbGVjdGlvbiBpbmNvbWluZ01tcz17bW1zfSAvPn1cbiAgICAgICAgICAgIHtzaG93SW1hZ2VTZWxlY3Rpb24gJiYgPEltYWdlU2VsZWN0aW9uIC8+fVxuICAgICAgICAgICAge3Nob3dQYWNrYWdlU2VsZWN0aW9uICYmIDxQYWNrYWdlU2VsZWN0aW9uIC8+fVxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtMTYgdy1mdWxsIG0tOCBiZy1tbS15ZWxsb3cgcm91bmRlZC1sZyBuZXh0LWJ1dHRvblwiXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IGAtbW96LWF2YWlsYWJsZWAgfX1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVCdXR0b25DbGljayhpbmRleCl9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgTmV4dFxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn0iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJDb2xvclNlbGVjdGlvbiIsIkltYWdlU2VsZWN0aW9uIiwiUGFja2FnZVNlbGVjdGlvbiIsIkZsb2F0Ym94IiwiaW5kZXgiLCJzZXRJbmRleCIsInNob3dDb2xvclNlbGVjdGlvbiIsInNldENvbG9yIiwic2hvd0ltYWdlU2VsZWN0aW9uIiwic2V0SW1hZ2UiLCJzaG93UGFja2FnZVNlbGVjdGlvbiIsInNldFBhY2thZ2UiLCJtbXMiLCJzZXRNbXMiLCJpZCIsImNvbG9yIiwiYXZhaWxhYmxlIiwiZmV0Y2giLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImRpc3RyaWJ1dGlvbkdyb3VwSWQiLCJsaW5lcyIsImxpbmVJZCIsIml0ZW1JZCIsInVuaXRPZk1lYXN1cmUiLCJzZWdtZW50Iiwic2VnbWVudFR5cGUiLCJjb25zaWRlclNhZmV0eVN0b2NrIiwiaGVhZGVycyIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19CRUFSRVJfVE9LRU4iLCJ0aGVuIiwicmVzIiwianNvbiIsImRhdGEiLCJuZXR3b3JrQXZhaWxhYmlsaXRpZXMiLCJvbmhhbmRBdmFpbGFibGVRdWFudGl0eSIsInVwZGF0ZUF2YWlsYWJpbGl0eSIsImhhbmRsZUJ1dHRvbkNsaWNrIiwiaW5kIiwibmV3bW1zIiwibWFwIiwibW0iLCJpIiwiZGl2IiwiY2xhc3NOYW1lIiwiaW5jb21pbmdNbXMiLCJidXR0b24iLCJzdHlsZSIsIndpZHRoIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/floatbox.js\n"));

/***/ })

});