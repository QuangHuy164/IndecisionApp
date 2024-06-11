"use strict";

var _react = _interopRequireDefault(require("react"));
var _client = require("react-dom/client");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
console.log('App.js is running!');
var user = {
  age: 21
};
function getLocation(location) {
  if (location) {
    return Location;
  } else {
    return /*#__PURE__*/_react["default"].createElement("p", null, "Location: ", location);
  }
}
var myName = /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("h1", null, user.name ? user.name : 'Anonymous'), user.age >= 18 && /*#__PURE__*/_react["default"].createElement("p", null, "Age: ", user.age), getLocation(user.location));

// Render your React component instead
var root = (0, _client.createRoot)(document.getElementById('app'));
root.render(myName);