"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/email-registration";
exports.ids = ["pages/api/email-registration"];
exports.modules = {

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "(api)/./pages/api/email-registration.js":
/*!*****************************************!*\
  !*** ./pages/api/email-registration.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);\n // include with node\n // read and write file\nfunction buildPath() {\n    return path__WEBPACK_IMPORTED_MODULE_0___default().join(process.cwd(), \"data\", \"data.json\");\n}\nfunction extractData(filePath) {\n    const jsonData = fs__WEBPACK_IMPORTED_MODULE_1___default().readFileSync(filePath);\n    const data = JSON.parse(jsonData);\n    return data; // this is a javascript object\n}\nfunction handler(req, res) {\n    const { method  } = req;\n    // Access our data\n    // Extract our data\n    // res 404 if there are no AllEvents\n    // from AllEvents - loop through them and find correct eventId\n    // add the email into emails-registered - write on our data\n    // only if that email doesn't exist\n    const filePath = buildPath();\n    const { events_categories , allEvents  } = extractData(filePath);\n    if (!allEvents) {\n        return res.status(404).json({\n            status: 404,\n            message: \"Events data not found\"\n        });\n    }\n    if (method === \"POST\") {\n        const { email , eventId  } = req.body;\n        if (!email | !email.includes(\"@\")) {\n            res.status(422).json({\n                message: \"Invalid email address\"\n            });\n        }\n        const newAllEvents = allEvents.map((ev)=>{\n            if (ev.id === eventId) {\n                if (ev.emails_registered.includes(email)) {\n                    res.status(409).json({\n                        message: \"This email has already been registered\"\n                    });\n                    return ev;\n                }\n                return {\n                    ...ev,\n                    emails_registered: [\n                        ...ev.emails_registered,\n                        email\n                    ]\n                };\n            }\n            return ev;\n        });\n        fs__WEBPACK_IMPORTED_MODULE_1___default().writeFileSync(filePath, JSON.stringify({\n            events_categories,\n            allEvents: newAllEvents\n        }));\n        res.status(201).json({\n            message: `You have been registered successfully with the email: ${email}\n             for the event ${eventId}`\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZW1haWwtcmVnaXN0cmF0aW9uLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQXdCLENBQUMsb0JBQW9CO0FBQ3pCLENBQUMsc0JBQXNCO0FBRTNDLFNBQVNFLFlBQVk7SUFDakIsT0FBT0YsZ0RBQVMsQ0FBQ0ksUUFBUUMsR0FBRyxJQUFJLFFBQVE7QUFDNUM7QUFFQSxTQUFTQyxZQUFZQyxRQUFRLEVBQUU7SUFDM0IsTUFBTUMsV0FBV1Asc0RBQWUsQ0FBQ007SUFDakMsTUFBTUcsT0FBT0MsS0FBS0MsS0FBSyxDQUFDSjtJQUN4QixPQUFPRSxNQUFNLDhCQUE4QjtBQUMvQztBQUVlLFNBQVNHLFFBQVFDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQ3RDLE1BQU0sRUFBRUMsT0FBTSxFQUFFLEdBQUdGO0lBQ25CLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsb0NBQW9DO0lBQ3BDLDhEQUE4RDtJQUM5RCwyREFBMkQ7SUFDM0QsbUNBQW1DO0lBRW5DLE1BQU1QLFdBQVdMO0lBQ2pCLE1BQU0sRUFBRWUsa0JBQWlCLEVBQUVDLFVBQVMsRUFBRSxHQUFHWixZQUFZQztJQUVyRCxJQUFJLENBQUNXLFdBQVc7UUFDWixPQUFPSCxJQUFJSSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1lBQ3hCRCxRQUFRO1lBQ1JFLFNBQVM7UUFDYjtJQUNKLENBQUM7SUFFRCxJQUFJTCxXQUFXLFFBQVE7UUFDbkIsTUFBTSxFQUFFTSxNQUFLLEVBQUVDLFFBQU8sRUFBRSxHQUFHVCxJQUFJVSxJQUFJO1FBRW5DLElBQUksQ0FBQ0YsUUFBUSxDQUFDQSxNQUFNRyxRQUFRLENBQUMsTUFBTTtZQUMvQlYsSUFBSUksTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztnQkFBRUMsU0FBUztZQUF3QjtRQUM1RCxDQUFDO1FBRUQsTUFBTUssZUFBZVIsVUFBVVMsR0FBRyxDQUFDQyxDQUFBQSxLQUFNO1lBQ3JDLElBQUlBLEdBQUdDLEVBQUUsS0FBS04sU0FBUztnQkFDbkIsSUFBSUssR0FBR0UsaUJBQWlCLENBQUNMLFFBQVEsQ0FBQ0gsUUFBUTtvQkFDdENQLElBQUlJLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7d0JBQUVDLFNBQVM7b0JBQXlDO29CQUN6RSxPQUFPTztnQkFDWCxDQUFDO2dCQUNELE9BQU87b0JBQ0gsR0FBR0EsRUFBRTtvQkFDTEUsbUJBQW1COzJCQUFJRixHQUFHRSxpQkFBaUI7d0JBQUVSO3FCQUFNO2dCQUN2RDtZQUNKLENBQUM7WUFDRCxPQUFPTTtRQUNYO1FBRUEzQix1REFBZ0IsQ0FBQ00sVUFDYkksS0FBS3FCLFNBQVMsQ0FBQztZQUFFZjtZQUFtQkMsV0FBV1E7UUFBYTtRQUVoRVgsSUFBSUksTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztZQUNqQkMsU0FBUyxDQUFDLHNEQUFzRCxFQUFFQyxNQUFNOzJCQUN6RCxFQUFFQyxRQUFRLENBQUM7UUFDOUI7SUFDSixDQUFDO0FBQ0wsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2V2ZW50c19hcHAvLi9wYWdlcy9hcGkvZW1haWwtcmVnaXN0cmF0aW9uLmpzP2E1OWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7IC8vIGluY2x1ZGUgd2l0aCBub2RlXG5pbXBvcnQgZnMgZnJvbSAnZnMnOyAvLyByZWFkIGFuZCB3cml0ZSBmaWxlXG5cbmZ1bmN0aW9uIGJ1aWxkUGF0aCgpIHtcbiAgICByZXR1cm4gcGF0aC5qb2luKHByb2Nlc3MuY3dkKCksICdkYXRhJywgJ2RhdGEuanNvbicpO1xufVxuXG5mdW5jdGlvbiBleHRyYWN0RGF0YShmaWxlUGF0aCkge1xuICAgIGNvbnN0IGpzb25EYXRhID0gZnMucmVhZEZpbGVTeW5jKGZpbGVQYXRoKTtcbiAgICBjb25zdCBkYXRhID0gSlNPTi5wYXJzZShqc29uRGF0YSk7XG4gICAgcmV0dXJuIGRhdGE7IC8vIHRoaXMgaXMgYSBqYXZhc2NyaXB0IG9iamVjdFxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XG4gICAgY29uc3QgeyBtZXRob2QgfSA9IHJlcTtcbiAgICAvLyBBY2Nlc3Mgb3VyIGRhdGFcbiAgICAvLyBFeHRyYWN0IG91ciBkYXRhXG4gICAgLy8gcmVzIDQwNCBpZiB0aGVyZSBhcmUgbm8gQWxsRXZlbnRzXG4gICAgLy8gZnJvbSBBbGxFdmVudHMgLSBsb29wIHRocm91Z2ggdGhlbSBhbmQgZmluZCBjb3JyZWN0IGV2ZW50SWRcbiAgICAvLyBhZGQgdGhlIGVtYWlsIGludG8gZW1haWxzLXJlZ2lzdGVyZWQgLSB3cml0ZSBvbiBvdXIgZGF0YVxuICAgIC8vIG9ubHkgaWYgdGhhdCBlbWFpbCBkb2Vzbid0IGV4aXN0XG5cbiAgICBjb25zdCBmaWxlUGF0aCA9IGJ1aWxkUGF0aCgpO1xuICAgIGNvbnN0IHsgZXZlbnRzX2NhdGVnb3JpZXMsIGFsbEV2ZW50cyB9ID0gZXh0cmFjdERhdGEoZmlsZVBhdGgpO1xuXG4gICAgaWYgKCFhbGxFdmVudHMpIHtcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDA0KS5qc29uKHtcbiAgICAgICAgICAgIHN0YXR1czogNDA0LFxuICAgICAgICAgICAgbWVzc2FnZTogJ0V2ZW50cyBkYXRhIG5vdCBmb3VuZCdcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBpZiAobWV0aG9kID09PSAnUE9TVCcpIHtcbiAgICAgICAgY29uc3QgeyBlbWFpbCwgZXZlbnRJZCB9ID0gcmVxLmJvZHk7XG5cbiAgICAgICAgaWYgKCFlbWFpbCB8ICFlbWFpbC5pbmNsdWRlcygnQCcpKSB7XG4gICAgICAgICAgICByZXMuc3RhdHVzKDQyMikuanNvbih7IG1lc3NhZ2U6ICdJbnZhbGlkIGVtYWlsIGFkZHJlc3MnIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbmV3QWxsRXZlbnRzID0gYWxsRXZlbnRzLm1hcChldiA9PiB7XG4gICAgICAgICAgICBpZiAoZXYuaWQgPT09IGV2ZW50SWQpIHtcbiAgICAgICAgICAgICAgICBpZiAoZXYuZW1haWxzX3JlZ2lzdGVyZWQuaW5jbHVkZXMoZW1haWwpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoNDA5KS5qc29uKHsgbWVzc2FnZTogJ1RoaXMgZW1haWwgaGFzIGFscmVhZHkgYmVlbiByZWdpc3RlcmVkJyB9KTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGV2O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAuLi5ldixcbiAgICAgICAgICAgICAgICAgICAgZW1haWxzX3JlZ2lzdGVyZWQ6IFsuLi5ldi5lbWFpbHNfcmVnaXN0ZXJlZCwgZW1haWxdXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBldjtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgZnMud3JpdGVGaWxlU3luYyhmaWxlUGF0aCxcbiAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHsgZXZlbnRzX2NhdGVnb3JpZXMsIGFsbEV2ZW50czogbmV3QWxsRXZlbnRzIH0pKVxuXG4gICAgICAgIHJlcy5zdGF0dXMoMjAxKS5qc29uKHtcbiAgICAgICAgICAgIG1lc3NhZ2U6IGBZb3UgaGF2ZSBiZWVuIHJlZ2lzdGVyZWQgc3VjY2Vzc2Z1bGx5IHdpdGggdGhlIGVtYWlsOiAke2VtYWlsfVxuICAgICAgICAgICAgIGZvciB0aGUgZXZlbnQgJHtldmVudElkfWAsXG4gICAgICAgIH0pO1xuICAgIH1cbn0iXSwibmFtZXMiOlsicGF0aCIsImZzIiwiYnVpbGRQYXRoIiwiam9pbiIsInByb2Nlc3MiLCJjd2QiLCJleHRyYWN0RGF0YSIsImZpbGVQYXRoIiwianNvbkRhdGEiLCJyZWFkRmlsZVN5bmMiLCJkYXRhIiwiSlNPTiIsInBhcnNlIiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsImV2ZW50c19jYXRlZ29yaWVzIiwiYWxsRXZlbnRzIiwic3RhdHVzIiwianNvbiIsIm1lc3NhZ2UiLCJlbWFpbCIsImV2ZW50SWQiLCJib2R5IiwiaW5jbHVkZXMiLCJuZXdBbGxFdmVudHMiLCJtYXAiLCJldiIsImlkIiwiZW1haWxzX3JlZ2lzdGVyZWQiLCJ3cml0ZUZpbGVTeW5jIiwic3RyaW5naWZ5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/email-registration.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/email-registration.js"));
module.exports = __webpack_exports__;

})();