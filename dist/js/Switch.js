!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t(require("react"),require("prop-types"));else if("function"==typeof define&&define.amd)define(["react","prop-types"],t);else{var r="object"==typeof exports?t(require("react"),require("prop-types")):t(e.react,e["prop-types"]);for(var n in r)("object"==typeof exports?exports:e)[n]=r[n]}}(this,function(e,t){return function(e){function t(n){if(r[n])return r[n].exports;var a=r[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,t),a.l=!0,a.exports}var r={};return t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/",t(t.s=346)}({0:function(t,r){t.exports=e},1:function(e,r){e.exports=t},346:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function a(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i=r(0),c=n(i),u=r(1),l=n(u);r(347);var p=function(e){var t=e.input,r=(e.meta,a(e,["input","meta"]));return c.default.createElement("div",{className:"Van-Switch"},c.default.createElement("input",o({},t,r,{type:"checkbox",className:"Van-Switch-input",id:t.name||r.id,name:t.name||r.name})),c.default.createElement("label",{htmlFor:t.name||r.id,className:"Van-Switch-wrapper"},c.default.createElement("div",{className:"Van-Switch-toggle"}),c.default.createElement("div",{className:"Van-Switch-label Van-Switch-label--on"},"Ja"),c.default.createElement("div",{className:"Van-Switch-label Van-Switch-label--off"},"Nee")))};p.defaultProps={meta:{},input:{},id:"",name:""},p.propTypes={meta:l.default.object,input:l.default.object,id:l.default.string,name:l.default.string},t.default=p},347:function(e,t){}})});