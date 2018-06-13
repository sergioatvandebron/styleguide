!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t(require("react"),require("prop-types"),require("classnames"));else if("function"==typeof define&&define.amd)define(["react","prop-types","classnames"],t);else{var n="object"==typeof exports?t(require("react"),require("prop-types"),require("classnames")):t(e.react,e["prop-types"],e.classnames);for(var r in n)("object"==typeof exports?exports:e)[r]=n[r]}}(this,function(e,t,n){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/",t(t.s=329)}({0:function(t,n){t.exports=e},1:function(e,n){e.exports=t},136:function(e,t){e.exports='<svg viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1671 566q0 40-28 68l-724 724-136 136q-28 28-68 28t-68-28l-136-136-362-362q-28-28-28-68t28-68l136-136q28-28 68-28t68 28l294 295 656-657q28-28 68-28t68 28l136 136q28 28 28 68z"></path></svg>'},15:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(0),p=r(l),f=n(1),d=r(f),m=n(2),y=r(m),v=n(17),b=r(v);n(19);var g=function(e){function t(){return a(this,t),u(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return s(t,e),c(t,[{key:"render",value:function(){var e=this.props,t=e.className,n=e.source,r=e.animation,a=o(e,["className","source","animation"]);return(0,b.default)(n)?p.default.createElement("span",i({className:(0,y.default)("Van-Icon",t),dangerouslySetInnerHTML:{__html:""===r?n:n.replace("<svg ",'<svg class="Van-u-animation--'+r+'" ')}},a)):null}}]),t}(l.PureComponent);g.defaultProps={className:"",source:"",animation:""},g.propTypes={className:d.default.string,source:d.default.string,animation:d.default.oneOf(["","spin","pulse"])},t.default=g},17:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(18),o=/^\s*(?:<\?xml[^>]*>\s*)?(?:<!doctype svg[^>]*\s*(?:\[?(?:\s*<![^>]*>\s*)*\]?)*[^>]*>\s*)?<svg[^>]*>[^]*<\/svg>\s*$/i;t.default=function(e){return o.test(e.toString().replace(r,""))}},18:function(e,t,n){"use strict";e.exports=/<!--([\s\S]*?)-->/g},19:function(e,t){},2:function(e,t){e.exports=n},329:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u=n(0),s=r(u),i=n(1),c=r(i),l=n(2),p=r(l),f=n(136),d=r(f),m=n(85),y=r(m),v=n(15),b=r(v);n(330);var g=function(e){var t=e.meta,n=e.input,r=e.className,u=e.type,i=o(e,["meta","input","className","type"]),c=t.error,l=t.warning,f=t.touched,m=(0,p.default)("Van-TextInput",r,{"Van-TextInput--error":f&&c},{"Van-TextInput--warning":f&&l},{"Van-TextInput--success":f&&!c&&!l});return s.default.createElement("div",{className:m},s.default.createElement("input",a({className:"Van-TextInput-input",id:n.name||i.id,type:u},i,n)),f&&c&&s.default.createElement(b.default,{source:y.default,className:"Van-TextInput-icon"}),f&&!c&&!l&&s.default.createElement(b.default,{source:d.default,className:"Van-TextInput-icon"}),f&&"string"==typeof c&&s.default.createElement("div",{className:"Van-TextInput-error-message"},c))};g.propTypes={meta:c.default.object,input:c.default.object,className:c.default.string,id:c.default.string,type:c.default.string},g.defaultProps={meta:{},input:{},className:"",id:"",type:"text"},t.default=g},330:function(e,t){},85:function(e,t){e.exports='<svg viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1490 1322q0 40-28 68l-136 136q-28 28-68 28t-68-28l-294-294-294 294q-28 28-68 28t-68-28l-136-136q-28-28-28-68t28-68l294-294-294-294q-28-28-28-68t28-68l136-136q28-28 68-28t68 28l294 294 294-294q28-28 68-28t68 28l136 136q28 28 28 68t-28 68l-294 294 294 294q28 28 28 68z"></path></svg>'}})});