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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @rainbow-me/rainbowkit */ \"./node_modules/@rainbow-me/rainbowkit/dist/index.js\");\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! wagmi */ \"./node_modules/wagmi/dist/index.js\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nvar Home = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(1), balance = ref[0], setBalance = ref[1];\n    var ref1 = (0,wagmi__WEBPACK_IMPORTED_MODULE_3__.useSigner)(), signer = ref1.data, isError = ref1.isError, isLoading = ref1.isLoading;\n    var contractAddress = \"0x6b4B530656c450c685a46816751e6c8211483b77\";\n    var abi = [\n        \"function balanceOf(address) public view returns (uint256)\", \n    ];\n    var providerUrl = \"https://eth-goerli.g.alchemy.com/v2/cWbSiG2tHrQ1Np3VpcUnStJUsxE7BEze\";\n    var contract = new ethers__WEBPACK_IMPORTED_MODULE_4__.ethers.Contract(contractAddress, abi, new ethers__WEBPACK_IMPORTED_MODULE_4__.ethers.providers.JsonRpcProvider(providerUrl));\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        var getBalance = function() {\n            var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(function() {\n                var balance, _;\n                return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(this, function(_state) {\n                    switch(_state.label){\n                        case 0:\n                            _ = contract.balanceOf;\n                            return [\n                                4,\n                                signer === null || signer === void 0 ? void 0 : signer.getAddress()\n                            ];\n                        case 1:\n                            return [\n                                4,\n                                _.apply(contract, [\n                                    _state.sent()\n                                ])\n                            ];\n                        case 2:\n                            balance = _state.sent();\n                            setBalance(ethers__WEBPACK_IMPORTED_MODULE_4__.ethers.utils.formatEther(balance));\n                            console.log(balance);\n                            return [\n                                2\n                            ];\n                    }\n                });\n            });\n            return function getBalance() {\n                return _ref.apply(this, arguments);\n            };\n        }();\n        getBalance();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Signature App\"\n                    }, void 0, false, {\n                        fileName: \"/Users/josephroc/Documents/Solidity/Permit2/frontend/demo-signatures/pages/index.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"An small app to demonstrate how to sign messages.\"\n                    }, void 0, false, {\n                        fileName: \"/Users/josephroc/Documents/Solidity/Permit2/frontend/demo-signatures/pages/index.tsx\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/Users/josephroc/Documents/Solidity/Permit2/frontend/demo-signatures/pages/index.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/josephroc/Documents/Solidity/Permit2/frontend/demo-signatures/pages/index.tsx\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().main),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_8__.ConnectButton, {}, void 0, false, {\n                        fileName: \"/Users/josephroc/Documents/Solidity/Permit2/frontend/demo-signatures/pages/index.tsx\",\n                        lineNumber: 46,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().title),\n                        children: [\n                            \"Welcome to the \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"\",\n                                children: \"Signature\"\n                            }, void 0, false, {\n                                fileName: \"/Users/josephroc/Documents/Solidity/Permit2/frontend/demo-signatures/pages/index.tsx\",\n                                lineNumber: 49,\n                                columnNumber: 26\n                            }, _this),\n                            \" Express!\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/josephroc/Documents/Solidity/Permit2/frontend/demo-signatures/pages/index.tsx\",\n                        lineNumber: 48,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().description),\n                        children: \"Choose a signing method to see how signatures work\"\n                    }, void 0, false, {\n                        fileName: \"/Users/josephroc/Documents/Solidity/Permit2/frontend/demo-signatures/pages/index.tsx\",\n                        lineNumber: 52,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().grid),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"https://rainbowkit.com\",\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().card),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        children: \"Sign Message\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/josephroc/Documents/Solidity/Permit2/frontend/demo-signatures/pages/index.tsx\",\n                                        lineNumber: 58,\n                                        columnNumber: 13\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: \"Click this to see an old school message\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/josephroc/Documents/Solidity/Permit2/frontend/demo-signatures/pages/index.tsx\",\n                                        lineNumber: 59,\n                                        columnNumber: 13\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/josephroc/Documents/Solidity/Permit2/frontend/demo-signatures/pages/index.tsx\",\n                                lineNumber: 57,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"https://wagmi.sh\",\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().card),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        children: \"EIP-712 Signature\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/josephroc/Documents/Solidity/Permit2/frontend/demo-signatures/pages/index.tsx\",\n                                        lineNumber: 63,\n                                        columnNumber: 13\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: \"See how an EIP-712 Signature looks like\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/josephroc/Documents/Solidity/Permit2/frontend/demo-signatures/pages/index.tsx\",\n                                        lineNumber: 64,\n                                        columnNumber: 13\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/josephroc/Documents/Solidity/Permit2/frontend/demo-signatures/pages/index.tsx\",\n                                lineNumber: 62,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/josephroc/Documents/Solidity/Permit2/frontend/demo-signatures/pages/index.tsx\",\n                        lineNumber: 56,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        href: \"https://rainbowkit.com\",\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().card),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                children: \"MyToken Balance\"\n                            }, void 0, false, {\n                                fileName: \"/Users/josephroc/Documents/Solidity/Permit2/frontend/demo-signatures/pages/index.tsx\",\n                                lineNumber: 70,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    \"You have \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {}, void 0, false, {\n                                        fileName: \"/Users/josephroc/Documents/Solidity/Permit2/frontend/demo-signatures/pages/index.tsx\",\n                                        lineNumber: 71,\n                                        columnNumber: 25\n                                    }, _this),\n                                    \" MyTokens in your wallet\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/josephroc/Documents/Solidity/Permit2/frontend/demo-signatures/pages/index.tsx\",\n                                lineNumber: 71,\n                                columnNumber: 13\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/josephroc/Documents/Solidity/Permit2/frontend/demo-signatures/pages/index.tsx\",\n                        lineNumber: 69,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/josephroc/Documents/Solidity/Permit2/frontend/demo-signatures/pages/index.tsx\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().footer),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    href: \"https://rainbow.me\",\n                    target: \"_blank\",\n                    rel: \"noopener noreferrer\",\n                    children: \"Made with ❤️ by your frens at \\uD83C\\uDF08\"\n                }, void 0, false, {\n                    fileName: \"/Users/josephroc/Documents/Solidity/Permit2/frontend/demo-signatures/pages/index.tsx\",\n                    lineNumber: 76,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/josephroc/Documents/Solidity/Permit2/frontend/demo-signatures/pages/index.tsx\",\n                lineNumber: 75,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/josephroc/Documents/Solidity/Permit2/frontend/demo-signatures/pages/index.tsx\",\n        lineNumber: 35,\n        columnNumber: 5\n    }, _this);\n};\n_s(Home, \"1IwCS3ywgkNP7Mxc7c1PzpACtjg=\", false, function() {\n    return [\n        wagmi__WEBPACK_IMPORTED_MODULE_3__.useSigner\n    ];\n});\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDO2dDQUFDSCxJQUFJLEVBQUMsa0JBQWtCO2dDQUFDUixTQUFTLEVBQUV6QixxRUFBVzs7a0RBQy9DLDhEQUFDeUMsSUFBRTtrREFBQyxtQkFBaUI7Ozs7OzZDQUFLO2tEQUMxQiw4REFBQ0osR0FBQztrREFBQyx5Q0FBdUM7Ozs7OzZDQUFJOzs7Ozs7cUNBQzVDOzs7Ozs7NkJBR0E7a0NBQ04sOERBQUNELEdBQUM7d0JBQUNILElBQUksRUFBQyx3QkFBd0I7d0JBQUNSLFNBQVMsRUFBRXpCLHFFQUFXOzswQ0FDbkQsOERBQUN5QyxJQUFFOzBDQUFDLGlCQUFlOzs7OztxQ0FBSzswQ0FDeEIsOERBQUNKLEdBQUM7O29DQUFDLFdBQVM7a0RBQUEsOERBQUNLLEdBQUM7Ozs7NkNBQU87b0NBQUEsMEJBQXdCOzs7Ozs7cUNBQUk7Ozs7Ozs2QkFDL0M7Ozs7OztxQkFDRDswQkFFUCw4REFBQ0MsUUFBTTtnQkFBQ2xCLFNBQVMsRUFBRXpCLHVFQUFhOzBCQUM5Qiw0RUFBQ29DLEdBQUM7b0JBQUNILElBQUksRUFBQyxvQkFBb0I7b0JBQUNXLE1BQU0sRUFBQyxRQUFRO29CQUFDWixHQUFHLEVBQUMscUJBQXFCOzhCQUFDLDRDQUV2RTs7Ozs7eUJBQUk7Ozs7O3FCQUNHOzs7Ozs7YUFDTCxDQUNOO0FBQ0osQ0FBQztHQXpFSzdCLElBQUk7O1FBR3FDTiw0Q0FBUzs7O0FBSGxETSxLQUFBQSxJQUFJO0FBMkVWLCtEQUFlQSxJQUFJLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29ubmVjdEJ1dHRvbiB9IGZyb20gJ0ByYWluYm93LW1lL3JhaW5ib3draXQnO1xuaW1wb3J0IHR5cGUgeyBOZXh0UGFnZSB9IGZyb20gJ25leHQnO1xuaW1wb3J0IHsgdXNlU2lnbmVyIH0gZnJvbSAnd2FnbWknO1xuaW1wb3J0IHsgZXRoZXJzIH0gZnJvbSBcImV0aGVyc1wiO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcyc7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBIb21lOiBOZXh0UGFnZSA9ICgpID0+IHtcbiAgY29uc3QgW2JhbGFuY2UsIHNldEJhbGFuY2VdID0gdXNlU3RhdGUoMSk7XG5cbiAgY29uc3QgeyBkYXRhOiBzaWduZXIsIGlzRXJyb3IsIGlzTG9hZGluZyB9ID0gdXNlU2lnbmVyKCk7XG5cbiAgY29uc3QgY29udHJhY3RBZGRyZXNzID0gXCIweDZiNEI1MzA2NTZjNDUwYzY4NWE0NjgxNjc1MWU2YzgyMTE0ODNiNzdcIjtcbiAgY29uc3QgYWJpID0gW1xuICAgICAgXCJmdW5jdGlvbiBiYWxhbmNlT2YoYWRkcmVzcykgcHVibGljIHZpZXcgcmV0dXJucyAodWludDI1NilcIixcbiAgXVxuICBjb25zdCBwcm92aWRlclVybCA9IFwiaHR0cHM6Ly9ldGgtZ29lcmxpLmcuYWxjaGVteS5jb20vdjIvY1diU2lHMnRIclExTnAzVnBjVW5TdEpVc3hFN0JFemVcIlxuICBjb25zdCBjb250cmFjdCA9IG5ldyBldGhlcnMuQ29udHJhY3QoXG4gICAgICBjb250cmFjdEFkZHJlc3MsXG4gICAgICBhYmksXG4gICAgICBuZXcgZXRoZXJzLnByb3ZpZGVycy5Kc29uUnBjUHJvdmlkZXIocHJvdmlkZXJVcmwpXG4gICk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBnZXRCYWxhbmNlID0gYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgYmFsYW5jZSA9IGF3YWl0IGNvbnRyYWN0LmJhbGFuY2VPZihhd2FpdCBzaWduZXI/LmdldEFkZHJlc3MoKSk7XG4gICAgICBzZXRCYWxhbmNlKGV0aGVycy51dGlscy5mb3JtYXRFdGhlcihiYWxhbmNlKSlcbiAgICAgIGNvbnNvbGUubG9nKGJhbGFuY2UpO1xuICAgIH1cbiAgICBnZXRCYWxhbmNlKCk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+U2lnbmF0dXJlIEFwcDwvdGl0bGU+XG4gICAgICAgIDxtZXRhXG4gICAgICAgICAgbmFtZT1cImRlc2NyaXB0aW9uXCJcbiAgICAgICAgICBjb250ZW50PVwiQW4gc21hbGwgYXBwIHRvIGRlbW9uc3RyYXRlIGhvdyB0byBzaWduIG1lc3NhZ2VzLlwiXG4gICAgICAgIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XG4gICAgICAgIDxDb25uZWN0QnV0dG9uIC8+XG5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT5cbiAgICAgICAgICBXZWxjb21lIHRvIHRoZSA8YSBocmVmPVwiXCI+U2lnbmF0dXJlPC9hPiBFeHByZXNzIVxuICAgICAgICA8L2gxPlxuXG4gICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmRlc2NyaXB0aW9ufT5cbiAgICAgICAgICBDaG9vc2UgYSBzaWduaW5nIG1ldGhvZCB0byBzZWUgaG93IHNpZ25hdHVyZXMgd29ya1xuICAgICAgICA8L3A+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ncmlkfT5cbiAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9yYWluYm93a2l0LmNvbVwiIGNsYXNzTmFtZT17c3R5bGVzLmNhcmR9PlxuICAgICAgICAgICAgPGgyPlNpZ24gTWVzc2FnZTwvaDI+XG4gICAgICAgICAgICA8cD5DbGljayB0aGlzIHRvIHNlZSBhbiBvbGQgc2Nob29sIG1lc3NhZ2U8L3A+XG4gICAgICAgICAgPC9hPlxuXG4gICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd2FnbWkuc2hcIiBjbGFzc05hbWU9e3N0eWxlcy5jYXJkfT5cbiAgICAgICAgICAgIDxoMj5FSVAtNzEyIFNpZ25hdHVyZTwvaDI+XG4gICAgICAgICAgICA8cD5TZWUgaG93IGFuIEVJUC03MTIgU2lnbmF0dXJlIGxvb2tzIGxpa2U8L3A+XG4gICAgICAgICAgPC9hPlxuXG4gICAgICAgICAgXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9yYWluYm93a2l0LmNvbVwiIGNsYXNzTmFtZT17c3R5bGVzLmNhcmR9PlxuICAgICAgICAgICAgPGgyPk15VG9rZW4gQmFsYW5jZTwvaDI+XG4gICAgICAgICAgICA8cD5Zb3UgaGF2ZSA8Yj57fTwvYj4gTXlUb2tlbnMgaW4geW91ciB3YWxsZXQ8L3A+XG4gICAgICAgICAgPC9hPlxuICAgICAgPC9tYWluPlxuXG4gICAgICA8Zm9vdGVyIGNsYXNzTmFtZT17c3R5bGVzLmZvb3Rlcn0+XG4gICAgICAgIDxhIGhyZWY9XCJodHRwczovL3JhaW5ib3cubWVcIiB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCI+XG4gICAgICAgICAgTWFkZSB3aXRoIOKdpO+4jyBieSB5b3VyIGZyZW5zIGF0IPCfjIhcbiAgICAgICAgPC9hPlxuICAgICAgPC9mb290ZXI+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuIl0sIm5hbWVzIjpbIkNvbm5lY3RCdXR0b24iLCJ1c2VTaWduZXIiLCJldGhlcnMiLCJIZWFkIiwic3R5bGVzIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJIb21lIiwiYmFsYW5jZSIsInNldEJhbGFuY2UiLCJkYXRhIiwic2lnbmVyIiwiaXNFcnJvciIsImlzTG9hZGluZyIsImNvbnRyYWN0QWRkcmVzcyIsImFiaSIsInByb3ZpZGVyVXJsIiwiY29udHJhY3QiLCJDb250cmFjdCIsInByb3ZpZGVycyIsIkpzb25ScGNQcm92aWRlciIsImdldEJhbGFuY2UiLCJiYWxhbmNlT2YiLCJnZXRBZGRyZXNzIiwidXRpbHMiLCJmb3JtYXRFdGhlciIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiLCJjb250YWluZXIiLCJ0aXRsZSIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsImxpbmsiLCJyZWwiLCJocmVmIiwibWFpbiIsImgxIiwiYSIsInAiLCJkZXNjcmlwdGlvbiIsImdyaWQiLCJjYXJkIiwiaDIiLCJiIiwiZm9vdGVyIiwidGFyZ2V0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});