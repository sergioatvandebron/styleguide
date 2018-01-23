webpackJsonp([8],{622:function(t,e,n){var o=n(65),i=n(629),r=n(212).PageRenderer;r.__esModule&&(r=r.default);var a=i({displayName:"WrappedPageRenderer",getInitialState:function(){return{content:n(644)}},componentWillMount:function(){},render:function(){return o.createElement(r,Object.assign({},this.props,{content:this.state.content}))}});a.__catalog_loader__=!0,t.exports=a},629:function(t,e,n){"use strict";var o=n(65),i=n(630);if("undefined"===typeof o)throw Error("create-react-class could not find the React object. If you are using script tags, make sure that React is being loaded before create-react-class.");var r=(new o.Component).updater;t.exports=i(o.Component,o.isValidElement,r)},630:function(t,e,n){"use strict";function o(t){return t}function i(t,e,n){function i(t,e){var n=N.hasOwnProperty(e)?N[e]:null;g.hasOwnProperty(e)&&s("OVERRIDE_BASE"===n,"ReactClassInterface: You are attempting to override `%s` from your class specification. Ensure that your method names do not overlap with React methods.",e),t&&s("DEFINE_MANY"===n||"DEFINE_MANY_MERGED"===n,"ReactClassInterface: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.",e)}function p(t,n){if(n){s("function"!==typeof n,"ReactClass: You're attempting to use a component class or function as a mixin. Instead, just use a regular object."),s(!e(n),"ReactClass: You're attempting to use a component as a mixin. Instead, just use a regular object.");var o=t.prototype,r=o.__reactAutoBindPairs;n.hasOwnProperty(c)&&_.mixins(t,n.mixins);for(var a in n)if(n.hasOwnProperty(a)&&a!==c){var p=n[a],u=o.hasOwnProperty(a);if(i(u,a),_.hasOwnProperty(a))_[a](t,p);else{var l=N.hasOwnProperty(a),d="function"===typeof p,h=d&&!l&&!u&&!1!==n.autobind;if(h)r.push(a,p),o[a]=p;else if(u){var y=N[a];s(l&&("DEFINE_MANY_MERGED"===y||"DEFINE_MANY"===y),"ReactClass: Unexpected spec policy %s for key %s when mixing in component specs.",y,a),"DEFINE_MANY_MERGED"===y?o[a]=f(o[a],p):"DEFINE_MANY"===y&&(o[a]=m(o[a],p))}else o[a]=p}}}else;}function u(t,e){if(e)for(var n in e){var o=e[n];if(e.hasOwnProperty(n)){var i=n in _;s(!i,'ReactClass: You are attempting to define a reserved property, `%s`, that shouldn\'t be on the "statics" key. Define it as an instance property instead; it will still be accessible on the constructor.',n);var r=n in t;s(!r,"ReactClass: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.",n),t[n]=o}}}function l(t,e){s(t&&e&&"object"===typeof t&&"object"===typeof e,"mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects.");for(var n in e)e.hasOwnProperty(n)&&(s(void 0===t[n],"mergeIntoWithNoDuplicateKeys(): Tried to merge two objects with the same key: `%s`. This conflict may be due to a mixin; in particular, this may be caused by two getInitialState() or getDefaultProps() methods returning objects with clashing keys.",n),t[n]=e[n]);return t}function f(t,e){return function(){var n=t.apply(this,arguments),o=e.apply(this,arguments);if(null==n)return o;if(null==o)return n;var i={};return l(i,n),l(i,o),i}}function m(t,e){return function(){t.apply(this,arguments),e.apply(this,arguments)}}function d(t,e){var n=e.bind(t);return n}function h(t){for(var e=t.__reactAutoBindPairs,n=0;n<e.length;n+=2){var o=e[n],i=e[n+1];t[o]=d(t,i)}}function y(t){var e=o(function(t,o,i){this.__reactAutoBindPairs.length&&h(this),this.props=t,this.context=o,this.refs=a,this.updater=i||n,this.state=null;var r=this.getInitialState?this.getInitialState():null;s("object"===typeof r&&!Array.isArray(r),"%s.getInitialState(): must return an object or null",e.displayName||"ReactCompositeComponent"),this.state=r});e.prototype=new v,e.prototype.constructor=e,e.prototype.__reactAutoBindPairs=[],E.forEach(p.bind(null,e)),p(e,D),p(e,t),p(e,I),e.getDefaultProps&&(e.defaultProps=e.getDefaultProps()),s(e.prototype.render,"createClass(...): Class specification must implement a `render` method.");for(var i in N)e.prototype[i]||(e.prototype[i]=null);return e}var E=[],N={mixins:"DEFINE_MANY",statics:"DEFINE_MANY",propTypes:"DEFINE_MANY",contextTypes:"DEFINE_MANY",childContextTypes:"DEFINE_MANY",getDefaultProps:"DEFINE_MANY_MERGED",getInitialState:"DEFINE_MANY_MERGED",getChildContext:"DEFINE_MANY_MERGED",render:"DEFINE_ONCE",componentWillMount:"DEFINE_MANY",componentDidMount:"DEFINE_MANY",componentWillReceiveProps:"DEFINE_MANY",shouldComponentUpdate:"DEFINE_ONCE",componentWillUpdate:"DEFINE_MANY",componentDidUpdate:"DEFINE_MANY",componentWillUnmount:"DEFINE_MANY",updateComponent:"OVERRIDE_BASE"},_={displayName:function(t,e){t.displayName=e},mixins:function(t,e){if(e)for(var n=0;n<e.length;n++)p(t,e[n])},childContextTypes:function(t,e){t.childContextTypes=r({},t.childContextTypes,e)},contextTypes:function(t,e){t.contextTypes=r({},t.contextTypes,e)},getDefaultProps:function(t,e){t.getDefaultProps?t.getDefaultProps=f(t.getDefaultProps,e):t.getDefaultProps=e},propTypes:function(t,e){t.propTypes=r({},t.propTypes,e)},statics:function(t,e){u(t,e)},autobind:function(){}},D={componentDidMount:function(){this.__isMounted=!0}},I={componentWillUnmount:function(){this.__isMounted=!1}},g={replaceState:function(t,e){this.updater.enqueueReplaceState(this,t,e)},isMounted:function(){return!!this.__isMounted}},v=function(){};return r(v.prototype,t.prototype,g),y}var r=n(136),a=n(137),s=n(631),c="mixins";t.exports=i},631:function(t,e,n){"use strict";function o(t,e,n,o,r,a,s,c){if(i(e),!t){var p;if(void 0===e)p=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var u=[n,o,r,a,s,c],l=0;p=new Error(e.replace(/%s/g,function(){return u[l++]})),p.name="Invariant Violation"}throw p.framesToPop=1,p}}var i=function(t){};t.exports=o},644:function(t,e){t.exports="### Normal list\n```react\n<List\n  items={[\n    { text: 'Item 1' },\n    { text: 'Item 2' },\n  ]}\n/>\n```\n\n### Unstyled list\n```react\n<List\n  items={[\n    { text: 'Item 1' },\n    { text: 'Item 2' },\n  ]}\n  unstyled\n/>\n```\n\n### List with icons\n```react\n<List\n  items={[\n    {\n      text: 'Item 1',\n      icon: 'check',\n    },\n    {\n      text: 'Item 2',\n      icon: 'close',\n    },\n    {\n      text: 'Item 3',\n      icon: 'facebook',\n    },\n    {\n      text: 'Item 4',\n      icon: 'instagram',\n    },\n  ]}\n/>\n```\n\n### API\n\n```table\ncolumns:\n  - Property\n  - Description\n  - Type\n  - Default\nrows:\n  - Property: items\n    Description: list items\n    Type: array\n  - Property: unstyled\n    Description: renders list without the bullets\n    Type: bool\n```\n"}});
//# sourceMappingURL=8.d609fd3f.chunk.js.map