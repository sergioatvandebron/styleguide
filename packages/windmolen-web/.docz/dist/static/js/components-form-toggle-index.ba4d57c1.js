(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{"./src/components/Form/Toggle/index.mdx":function(e,a,n){"use strict";n.r(a);var t=n("./node_modules/react/index.js"),o=n.n(t),p=n("./node_modules/@mdx-js/tag/dist/index.js"),r=n("./node_modules/docz/dist/index.m.js"),s=(n("./node_modules/classnames/index.js"),n("./src/components/Wrapper/index.js")),m=n("./src/components/Form/SwitchBase/index.js"),c=function(e){return o.a.createElement(m.a,Object.assign({type:"toggle"},e))},l=c;c.__docgenInfo={description:"",methods:[],displayName:"Toggle"};a.default=function(e){var a=e.components;!function(e,a){var n={};for(var t in e)a.indexOf(t)>=0||Object.prototype.hasOwnProperty.call(e,t)&&(n[t]=e[t])}(e,["components"]);return o.a.createElement(p.MDXTag,{name:"wrapper",components:a},o.a.createElement(p.MDXTag,{name:"h1",components:a,props:{id:"toggle"}},o.a.createElement(p.MDXTag,{name:"a",components:a,parentName:"h1",props:{"aria-hidden":!0,href:"#toggle"}},o.a.createElement(p.MDXTag,{name:"span",components:a,parentName:"a",props:{className:"icon-link"}},"#")),"Toggle"),o.a.createElement(p.MDXTag,{name:"p",components:a},"The Toggle component is a wrapper around the ",o.a.createElement(p.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"SwitchBase")," component."),o.a.createElement(p.MDXTag,{name:"h2",components:a,props:{id:"switchbase-props"}},o.a.createElement(p.MDXTag,{name:"a",components:a,parentName:"h2",props:{"aria-hidden":!0,href:"#switchbase-props"}},o.a.createElement(p.MDXTag,{name:"span",components:a,parentName:"a",props:{className:"icon-link"}},"#")),"SwitchBase Props"),o.a.createElement(r.e,{of:m.a}),o.a.createElement(p.MDXTag,{name:"h2",components:a,props:{id:"props"}},o.a.createElement(p.MDXTag,{name:"a",components:a,parentName:"h2",props:{"aria-hidden":!0,href:"#props"}},o.a.createElement(p.MDXTag,{name:"span",components:a,parentName:"a",props:{className:"icon-link"}},"#")),"Props"),o.a.createElement(r.e,{of:l}),o.a.createElement(p.MDXTag,{name:"h2",components:a,props:{id:"basic-usage"}},o.a.createElement(p.MDXTag,{name:"a",components:a,parentName:"h2",props:{"aria-hidden":!0,href:"#basic-usage"}},o.a.createElement(p.MDXTag,{name:"span",components:a,parentName:"a",props:{className:"icon-link"}},"#")),"Basic usage"),o.a.createElement(r.d,{__position:2,__code:"<Toggle\n  onChange={checked => {\n    console.log('Basic usage - onChange', checked)\n  }}\n/>",wrapper:s.a},o.a.createElement(l,{onChange:function(e){console.log("Basic usage - onChange",e)}})),o.a.createElement(p.MDXTag,{name:"h2",components:a,props:{id:"with-label"}},o.a.createElement(p.MDXTag,{name:"a",components:a,parentName:"h2",props:{"aria-hidden":!0,href:"#with-label"}},o.a.createElement(p.MDXTag,{name:"span",components:a,parentName:"a",props:{className:"icon-link"}},"#")),"With label"),o.a.createElement(r.d,{__position:3,__code:'<Toggle label="Gender" value="my value" />',wrapper:s.a},o.a.createElement(l,{label:"Gender",value:"my value"})),o.a.createElement(p.MDXTag,{name:"h2",components:a,props:{id:"with-label-on-the-left"}},o.a.createElement(p.MDXTag,{name:"a",components:a,parentName:"h2",props:{"aria-hidden":!0,href:"#with-label-on-the-left"}},o.a.createElement(p.MDXTag,{name:"span",components:a,parentName:"a",props:{className:"icon-link"}},"#")),"With label on the left"),o.a.createElement(r.d,{__position:4,__code:'<Toggle label="Gender" labelPlacement="start" value="my value" />',wrapper:s.a},o.a.createElement(l,{label:"Gender",labelPlacement:"start",value:"my value"})),o.a.createElement(p.MDXTag,{name:"h2",components:a,props:{id:"checked-on-default"}},o.a.createElement(p.MDXTag,{name:"a",components:a,parentName:"h2",props:{"aria-hidden":!0,href:"#checked-on-default"}},o.a.createElement(p.MDXTag,{name:"span",components:a,parentName:"a",props:{className:"icon-link"}},"#")),"Checked on default"),o.a.createElement(r.d,{__position:5,__code:'<Toggle label="Gender" value="my value" defaultChecked />',wrapper:s.a},o.a.createElement(l,{label:"Gender",value:"my value",defaultChecked:!0})))}}}]);