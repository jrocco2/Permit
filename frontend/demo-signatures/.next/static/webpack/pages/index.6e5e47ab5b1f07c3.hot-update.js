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

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @rainbow-me/rainbowkit */ \"./node_modules/@rainbow-me/rainbowkit/dist/index.js\");\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! wagmi */ \"./node_modules/wagmi/dist/index.js\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nvar Home = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"0\"), balance = ref[0], setBalance = ref[1];\n    var ref1 = (0,wagmi__WEBPACK_IMPORTED_MODULE_3__.useSigner)(), signer = ref1.data, isError = ref1.isError, isLoading = ref1.isLoading;\n    var contractAddress = \"0xaDf1e5171Bbc1605Bf746B490ED925cEc6479B1d\";\n    var abi = [\n        \"function balanceOf(address) public view returns (uint256)\", \n    ];\n    var providerUrl = \"https://eth-goerli.g.alchemy.com/v2/cWbSiG2tHrQ1Np3VpcUnStJUsxE7BEze\";\n    var contract = new ethers__WEBPACK_IMPORTED_MODULE_4__.ethers.Contract(contractAddress, abi, new ethers__WEBPACK_IMPORTED_MODULE_4__.ethers.providers.JsonRpcProvider(providerUrl));\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        var getBalance = function() {\n            var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(function() {\n                var address, balance;\n                return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(this, function(_state) {\n                    switch(_state.label){\n                        case 0:\n                            if (!(signer === null || signer === void 0 ? void 0 : signer._isSigner)) return [\n                                2\n                            ];\n                            return [\n                                4,\n                                signer === null || signer === void 0 ? void 0 : signer.getAddress()\n                            ];\n                        case 1:\n                            address = _state.sent();\n                            console.log(\"Address: \", address);\n                            return [\n                                4,\n                                contract.balanceOf(address)\n                            ];\n                        case 2:\n                            balance = _state.sent();\n                            setBalance(ethers__WEBPACK_IMPORTED_MODULE_4__.ethers.utils.formatEther(balance));\n                            console.log(balance);\n                            return [\n                                2\n                            ];\n                    }\n                });\n            });\n            return function getBalance() {\n                return _ref.apply(this, arguments);\n            };\n        }();\n        getBalance();\n    }, [\n        signer\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Signature App\"\n                    }, void 0, false, {\n                        fileName: \"/Users/josephroc/Documents/Solidity/Permit2/frontend/demo-signatures/pages/index.tsx\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"An small app to demonstrate how to sign messages.\"\n                    }, void 0, false, {\n                        fileName: \"/Users/josephroc/Documents/Solidity/Permit2/frontend/demo-signatures/pages/index.tsx\",\n                        lineNumber: 41,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/Users/josephroc/Documents/Solidity/Permit2/frontend/demo-signatures/pages/index.tsx\",\n                        lineNumber: 45,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/josephroc/Documents/Solidity/Permit2/frontend/demo-signatures/pages/index.tsx\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().main),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_8__.ConnectButton, {}, void 0, false, {\n                        fileName: \"/Users/josephroc/Documents/Solidity/Permit2/frontend/demo-signatures/pages/index.tsx\",\n                        lineNumber: 49,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().title),\n                        children: [\n                            \"Welcome to the \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"\",\n                                children: \"Signature\"\n                            }, void 0, false, {\n                                fileName: \"/Users/josephroc/Documents/Solidity/Permit2/frontend/demo-signatures/pages/index.tsx\",\n                                lineNumber: 52,\n                                columnNumber: 26\n                            }, _this),\n                            \" Express!\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/josephroc/Documents/Solidity/Permit2/frontend/demo-signatures/pages/index.tsx\",\n                        lineNumber: 51,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().description),\n                        children: \"Choose a signing method to see how signatures work\"\n                    }, void 0, false, {\n                        fileName: \"/Users/josephroc/Documents/Solidity/Permit2/frontend/demo-signatures/pages/index.tsx\",\n                        lineNumber: 55,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().grid),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"https://rainbowkit.com\",\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().card),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        children: \"Sign Message\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/josephroc/Documents/Solidity/Permit2/frontend/demo-signatures/pages/index.tsx\",\n                                        lineNumber: 61,\n                                        columnNumber: 13\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: \"Click this to see an old school message\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/josephroc/Documents/Solidity/Permit2/frontend/demo-signatures/pages/index.tsx\",\n                                        lineNumber: 62,\n                                        columnNumber: 13\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/josephroc/Documents/Solidity/Permit2/frontend/demo-signatures/pages/index.tsx\",\n                                lineNumber: 60,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"https://wagmi.sh\",\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().card),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        children: \"EIP-712 Signature\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/josephroc/Documents/Solidity/Permit2/frontend/demo-signatures/pages/index.tsx\",\n                                        lineNumber: 66,\n                                        columnNumber: 13\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: \"See how an EIP-712 Signature looks like\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/josephroc/Documents/Solidity/Permit2/frontend/demo-signatures/pages/index.tsx\",\n                                        lineNumber: 67,\n                                        columnNumber: 13\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/josephroc/Documents/Solidity/Permit2/frontend/demo-signatures/pages/index.tsx\",\n                                lineNumber: 65,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/josephroc/Documents/Solidity/Permit2/frontend/demo-signatures/pages/index.tsx\",\n                        lineNumber: 59,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        href: \"https://rainbowkit.com\",\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().card),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                children: \"MyToken Balance →\"\n                            }, void 0, false, {\n                                fileName: \"/Users/josephroc/Documents/Solidity/Permit2/frontend/demo-signatures/pages/index.tsx\",\n                                lineNumber: 73,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    \"You have \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                                        children: balance\n                                    }, void 0, false, {\n                                        fileName: \"/Users/josephroc/Documents/Solidity/Permit2/frontend/demo-signatures/pages/index.tsx\",\n                                        lineNumber: 74,\n                                        columnNumber: 25\n                                    }, _this),\n                                    \" MyTokens in your wallet\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/josephroc/Documents/Solidity/Permit2/frontend/demo-signatures/pages/index.tsx\",\n                                lineNumber: 74,\n                                columnNumber: 13\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/josephroc/Documents/Solidity/Permit2/frontend/demo-signatures/pages/index.tsx\",\n                        lineNumber: 72,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/josephroc/Documents/Solidity/Permit2/frontend/demo-signatures/pages/index.tsx\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().footer),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    href: \"https://rainbow.me\",\n                    target: \"_blank\",\n                    rel: \"noopener noreferrer\",\n                    children: \"Made with ❤️ by your frens at \\uD83C\\uDF08\"\n                }, void 0, false, {\n                    fileName: \"/Users/josephroc/Documents/Solidity/Permit2/frontend/demo-signatures/pages/index.tsx\",\n                    lineNumber: 79,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/josephroc/Documents/Solidity/Permit2/frontend/demo-signatures/pages/index.tsx\",\n                lineNumber: 78,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/josephroc/Documents/Solidity/Permit2/frontend/demo-signatures/pages/index.tsx\",\n        lineNumber: 38,\n        columnNumber: 5\n    }, _this);\n};\n_s(Home, \"VHmQYhImHYo1cCkSl7ujvbLocvE=\", false, function() {\n    return [\n        wagmi__WEBPACK_IMPORTED_MODULE_3__.useSigner\n    ];\n});\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDO2dDQUFDSCxJQUFJLEVBQUMsd0JBQXdCO2dDQUFDUixTQUFTLEVBQUUzQixxRUFBVzs7a0RBQ3JELDhEQUFDMkMsSUFBRTtrREFBQyxjQUFZOzs7Ozs2Q0FBSztrREFDckIsOERBQUNKLEdBQUM7a0RBQUMseUNBQXVDOzs7Ozs2Q0FBSTs7Ozs7O3FDQUM1QzswQ0FFSiw4REFBQ0QsR0FBQztnQ0FBQ0gsSUFBSSxFQUFDLGtCQUFrQjtnQ0FBQ1IsU0FBUyxFQUFFM0IscUVBQVc7O2tEQUMvQyw4REFBQzJDLElBQUU7a0RBQUMsbUJBQWlCOzs7Ozs2Q0FBSztrREFDMUIsOERBQUNKLEdBQUM7a0RBQUMseUNBQXVDOzs7Ozs2Q0FBSTs7Ozs7O3FDQUM1Qzs7Ozs7OzZCQUdBO2tDQUNOLDhEQUFDRCxHQUFDO3dCQUFDSCxJQUFJLEVBQUMsd0JBQXdCO3dCQUFDUixTQUFTLEVBQUUzQixxRUFBVzs7MENBQ25ELDhEQUFDMkMsSUFBRTswQ0FBQyxtQkFBc0I7Ozs7O3FDQUFLOzBDQUMvQiw4REFBQ0osR0FBQzs7b0NBQUMsV0FBUztrREFBQSw4REFBQ0ssR0FBQztrREFBRXhDLE9BQU87Ozs7OzZDQUFLO29DQUFBLDBCQUF3Qjs7Ozs7O3FDQUFJOzs7Ozs7NkJBQ3REOzs7Ozs7cUJBQ0Q7MEJBRVAsOERBQUN5QyxRQUFNO2dCQUFDbEIsU0FBUyxFQUFFM0IsdUVBQWE7MEJBQzlCLDRFQUFDc0MsR0FBQztvQkFBQ0gsSUFBSSxFQUFDLG9CQUFvQjtvQkFBQ1csTUFBTSxFQUFDLFFBQVE7b0JBQUNaLEdBQUcsRUFBQyxxQkFBcUI7OEJBQUMsNENBRXZFOzs7Ozt5QkFBSTs7Ozs7cUJBQ0c7Ozs7OzthQUNMLENBQ047QUFDSixDQUFDO0dBNUVLL0IsSUFBSTs7UUFHcUNOLDRDQUFTOzs7QUFIbERNLEtBQUFBLElBQUk7QUE4RVYsK0RBQWVBLElBQUksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb25uZWN0QnV0dG9uIH0gZnJvbSAnQHJhaW5ib3ctbWUvcmFpbmJvd2tpdCc7XG5pbXBvcnQgdHlwZSB7IE5leHRQYWdlIH0gZnJvbSAnbmV4dCc7XG5pbXBvcnQgeyB1c2VTaWduZXIgfSBmcm9tICd3YWdtaSc7XG5pbXBvcnQgeyBldGhlcnMgfSBmcm9tIFwiZXRoZXJzXCI7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJztcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IEhvbWU6IE5leHRQYWdlID0gKCkgPT4ge1xuICBjb25zdCBbYmFsYW5jZSwgc2V0QmFsYW5jZV0gPSB1c2VTdGF0ZShcIjBcIik7XG5cbiAgY29uc3QgeyBkYXRhOiBzaWduZXIsIGlzRXJyb3IsIGlzTG9hZGluZyB9ID0gdXNlU2lnbmVyKCk7XG5cbiAgY29uc3QgY29udHJhY3RBZGRyZXNzID0gXCIweGFEZjFlNTE3MUJiYzE2MDVCZjc0NkI0OTBFRDkyNWNFYzY0NzlCMWRcIjtcbiAgY29uc3QgYWJpID0gW1xuICAgICAgXCJmdW5jdGlvbiBiYWxhbmNlT2YoYWRkcmVzcykgcHVibGljIHZpZXcgcmV0dXJucyAodWludDI1NilcIixcbiAgXVxuICBjb25zdCBwcm92aWRlclVybCA9IFwiaHR0cHM6Ly9ldGgtZ29lcmxpLmcuYWxjaGVteS5jb20vdjIvY1diU2lHMnRIclExTnAzVnBjVW5TdEpVc3hFN0JFemVcIlxuICBjb25zdCBjb250cmFjdCA9IG5ldyBldGhlcnMuQ29udHJhY3QoXG4gICAgICBjb250cmFjdEFkZHJlc3MsXG4gICAgICBhYmksXG4gICAgICBuZXcgZXRoZXJzLnByb3ZpZGVycy5Kc29uUnBjUHJvdmlkZXIocHJvdmlkZXJVcmwpXG4gICk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBnZXRCYWxhbmNlID0gYXN5bmMgKCkgPT4ge1xuICAgICAgaWYgKCFzaWduZXI/Ll9pc1NpZ25lcikgcmV0dXJuO1xuICAgICAgY29uc3QgYWRkcmVzcyA9IGF3YWl0IHNpZ25lcj8uZ2V0QWRkcmVzcygpO1xuICAgICAgY29uc29sZS5sb2coXCJBZGRyZXNzOiBcIiwgYWRkcmVzcylcbiAgICAgIGNvbnN0IGJhbGFuY2UgPSBhd2FpdCBjb250cmFjdC5iYWxhbmNlT2YoYWRkcmVzcyk7XG4gICAgICBzZXRCYWxhbmNlKGV0aGVycy51dGlscy5mb3JtYXRFdGhlcihiYWxhbmNlKSlcbiAgICAgIGNvbnNvbGUubG9nKGJhbGFuY2UpO1xuICAgIH1cbiAgICBnZXRCYWxhbmNlKCk7XG4gIH0sIFtzaWduZXJdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+U2lnbmF0dXJlIEFwcDwvdGl0bGU+XG4gICAgICAgIDxtZXRhXG4gICAgICAgICAgbmFtZT1cImRlc2NyaXB0aW9uXCJcbiAgICAgICAgICBjb250ZW50PVwiQW4gc21hbGwgYXBwIHRvIGRlbW9uc3RyYXRlIGhvdyB0byBzaWduIG1lc3NhZ2VzLlwiXG4gICAgICAgIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XG4gICAgICAgIDxDb25uZWN0QnV0dG9uIC8+XG5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT5cbiAgICAgICAgICBXZWxjb21lIHRvIHRoZSA8YSBocmVmPVwiXCI+U2lnbmF0dXJlPC9hPiBFeHByZXNzIVxuICAgICAgICA8L2gxPlxuXG4gICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmRlc2NyaXB0aW9ufT5cbiAgICAgICAgICBDaG9vc2UgYSBzaWduaW5nIG1ldGhvZCB0byBzZWUgaG93IHNpZ25hdHVyZXMgd29ya1xuICAgICAgICA8L3A+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ncmlkfT5cbiAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9yYWluYm93a2l0LmNvbVwiIGNsYXNzTmFtZT17c3R5bGVzLmNhcmR9PlxuICAgICAgICAgICAgPGgyPlNpZ24gTWVzc2FnZTwvaDI+XG4gICAgICAgICAgICA8cD5DbGljayB0aGlzIHRvIHNlZSBhbiBvbGQgc2Nob29sIG1lc3NhZ2U8L3A+XG4gICAgICAgICAgPC9hPlxuXG4gICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd2FnbWkuc2hcIiBjbGFzc05hbWU9e3N0eWxlcy5jYXJkfT5cbiAgICAgICAgICAgIDxoMj5FSVAtNzEyIFNpZ25hdHVyZTwvaDI+XG4gICAgICAgICAgICA8cD5TZWUgaG93IGFuIEVJUC03MTIgU2lnbmF0dXJlIGxvb2tzIGxpa2U8L3A+XG4gICAgICAgICAgPC9hPlxuXG4gICAgICAgICAgXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9yYWluYm93a2l0LmNvbVwiIGNsYXNzTmFtZT17c3R5bGVzLmNhcmR9PlxuICAgICAgICAgICAgPGgyPk15VG9rZW4gQmFsYW5jZSAmcmFycjs8L2gyPlxuICAgICAgICAgICAgPHA+WW91IGhhdmUgPGI+e2JhbGFuY2V9PC9iPiBNeVRva2VucyBpbiB5b3VyIHdhbGxldDwvcD5cbiAgICAgICAgICA8L2E+XG4gICAgICA8L21haW4+XG5cbiAgICAgIDxmb290ZXIgY2xhc3NOYW1lPXtzdHlsZXMuZm9vdGVyfT5cbiAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vcmFpbmJvdy5tZVwiIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIj5cbiAgICAgICAgICBNYWRlIHdpdGgg4p2k77iPIGJ5IHlvdXIgZnJlbnMgYXQg8J+MiFxuICAgICAgICA8L2E+XG4gICAgICA8L2Zvb3Rlcj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iXSwibmFtZXMiOlsiQ29ubmVjdEJ1dHRvbiIsInVzZVNpZ25lciIsImV0aGVycyIsIkhlYWQiLCJzdHlsZXMiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkhvbWUiLCJiYWxhbmNlIiwic2V0QmFsYW5jZSIsImRhdGEiLCJzaWduZXIiLCJpc0Vycm9yIiwiaXNMb2FkaW5nIiwiY29udHJhY3RBZGRyZXNzIiwiYWJpIiwicHJvdmlkZXJVcmwiLCJjb250cmFjdCIsIkNvbnRyYWN0IiwicHJvdmlkZXJzIiwiSnNvblJwY1Byb3ZpZGVyIiwiZ2V0QmFsYW5jZSIsImFkZHJlc3MiLCJfaXNTaWduZXIiLCJnZXRBZGRyZXNzIiwiY29uc29sZSIsImxvZyIsImJhbGFuY2VPZiIsInV0aWxzIiwiZm9ybWF0RXRoZXIiLCJkaXYiLCJjbGFzc05hbWUiLCJjb250YWluZXIiLCJ0aXRsZSIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsImxpbmsiLCJyZWwiLCJocmVmIiwibWFpbiIsImgxIiwiYSIsInAiLCJkZXNjcmlwdGlvbiIsImdyaWQiLCJjYXJkIiwiaDIiLCJiIiwiZm9vdGVyIiwidGFyZ2V0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});