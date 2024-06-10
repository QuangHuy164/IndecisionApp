"use strict";

console.log('App.js is running!');
var template = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "It changedddddd"), /*#__PURE__*/React.createElement("p", null, "siuuu"), /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement("li", null, "Item One"), /*#__PURE__*/React.createElement("li", null, "Item Two")));
var myName = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Huy Nguyen"), /*#__PURE__*/React.createElement("p", null, "Age: 21"), /*#__PURE__*/React.createElement("p", null, "Location: Helsinki"));
var appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot, myName);