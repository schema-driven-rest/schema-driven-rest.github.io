(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{106:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return d})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return m}));var r=n(1),a=n(6),l=(n(0),n(123)),o=n(138),i=n(136),c=n(137),s={id:"models",title:"Plugin Models"},d={id:"plugins/models",title:"Plugin Models",description:"import {CodeGenerator} from '../../src/components/codeGenerator';",source:"@site/docs\\plugins\\models.md",permalink:"/docs/plugins/models",editUrl:"https://github.com/schema-first-rest/schema-first-rest.github.io/edit/master/docs/plugins/models.md",sidebar:"someSidebar",previous:{title:"Plugin Controller",permalink:"/docs/plugins/controller"},next:{title:"Plugin Validate Models",permalink:"/docs/plugins/validate-models"}},u=[{value:"Install",id:"install",children:[]},{value:"Code Generation",id:"code-generation",children:[]},{value:"Directives",id:"directives",children:[]},{value:"Dependencies",id:"dependencies",children:[]}],p={rightToc:u};function m(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"This plugin is used to generate a series of ",Object(l.b)("inlineCode",{parentName:"p"},"typescript")," models to be used in most other plugins. The bulk of the code is from the incredible ",Object(l.b)("a",Object(r.a)({parentName:"p"},{href:"https://graphql-code-generator.com/"}),"GraphQL Code Generator")," project."),Object(l.b)("h2",{id:"install"},"Install"),Object(l.b)(i.a,{defaultValue:"yarn",values:[{label:"Yarn",value:"yarn"},{label:"npm",value:"npm"}],mdxType:"Tabs"},Object(l.b)(c.a,{value:"yarn",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"yarn add @sdr/models\n"))),Object(l.b)(c.a,{value:"npm",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"npm install @sdr/models\n")))),Object(l.b)("hr",null),Object(l.b)("h2",{id:"code-generation"},"Code Generation"),Object(l.b)(o.a,{plugin:"models",mdxType:"CodeGenerator"}),Object(l.b)("h2",{id:"directives"},"Directives"),Object(l.b)("p",null,"This plugin does not include any directives."),Object(l.b)("h2",{id:"dependencies"},"Dependencies"),Object(l.b)("p",null,Object(l.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/plugins/controller"}),"@sdr/controller")))}m.isMDXComponent=!0},123:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),d=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},u=function(e){var t=d(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=d(n),m=r,b=u["".concat(o,".").concat(m)]||u[m]||p[m]||l;return n?a.a.createElement(b,i({ref:t},s,{components:n})):a.a.createElement(b,i({ref:t},s))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},136:function(e,t,n){"use strict";var r=n(0),a=n.n(r),l=n(126),o=n.n(l),i=n(85),c=n.n(i);const s=37,d=39;t.a=function(e){const{block:t,children:n,defaultValue:l,values:i}=e,[u,p]=Object(r.useState)(l),m=[];return a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:o()("tabs",{"tabs--block":t})},i.map(({value:e,label:t})=>a.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":u===e,className:o()("tab-item",c.a.tabItem,{"tab-item--active":u===e}),key:e,ref:e=>m.push(e),onKeyDown:e=>((e,t,n)=>{switch(n.keyCode){case d:((e,t)=>{const n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()})(e,t);break;case s:((e,t)=>{const n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()})(e,t)}})(m,e.target,e),onFocus:()=>p(e),onClick:()=>p(e)},t))),a.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},r.Children.toArray(n).filter(e=>e.props.value===u)[0]))}},137:function(e,t,n){"use strict";var r=n(0),a=n.n(r);t.a=function(e){return a.a.createElement("div",null,e.children)}},138:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return O}));var r=n(0),a=n.n(r),l=n(150),o=n(173);n(84);e.hrtime=()=>1;const{processPlugin:i}=n(159),{plugin:c,config:s}=n(166),{plugin:d,config:u}=n(167),{plugin:p,config:m}=n(170),{classesPlugin:b,handlersPlugin:f}=n(171),{plugin:h,config:g}=n(172),v=[{value:"models",label:"Models"},{value:"validate-models",label:"Validate Models"},{value:"raw-fetch",label:"Raw-Fetch"},{value:"serverless-api-base",label:"Serverless API Base"}];function O({plugin:e}){const[t,n]=Object(r.useState)(e||null),[c,s]=Object(r.useState)('type User @controller(path: "user") {\n  login(request: LoginRequest!): LoginResponse!\n    @request(method: POST, path: "login")\n}\n\ntype LoginRequest @model {\n  username: String!\n}\ntype LoginResponse @model {\n  authorized: Boolean!\n  jwt: String!\n}'),[u,m]=Object(r.useState)("var x=12;");return Object(r.useEffect)(()=>{try{const e=[];switch(t){case"raw-fetch":e.push({name:"@sdr/raw-fetch",method:"index",body:{plugin:p}});break;case"models":e.push({name:"@sdr/models",method:"index",body:{plugin:d}});break;case"serverless-api-base":e.push({name:"@sdr/serverless-api-base",method:"index",body:{plugin:b}}),e.push({name:"@sdr/serverless-api-base",method:"index",body:{plugin:f}}),e.push({name:"@sdr/models",method:"index",body:{plugin:d}});break;case"validate-models":e.push({name:"@sdr/validate-models",method:"index",body:{plugin:h}});break;default:return void m("Select a plugin above")}let n=i(`directive @request(method: Method, path: String) on FIELD_DEFINITION\ndirective @controller(path: String) on OBJECT\ndirective @model on OBJECT | UNION | ENUM | INTERFACE | INPUT_OBJECT\n\ndirective @auth on FIELD_DEFINITION\n\nenum Method {\n  POST\n  GET\n  DELETE\n  PUT\n}\n\r\n${c}`,e,{config:{}},!0,{tabWidth:2,singleQuote:!0,printWidth:120,bracketSpacing:!1,trailingComma:"es5",jsxBracketSameLine:!0});m(n)}catch(e){m(e.toString())}},[c,t]),a.a.createElement(a.a.Fragment,null,!e&&a.a.createElement("div",null,a.a.createElement(o.a,{style:{width:"100%"},value:v.find(e=>e.value===t),onChange:e=>{n(e.value)},options:v,placeholder:"Select Plugin"})),a.a.createElement("div",{className:"rowIfScreen"},a.a.createElement("div",{style:{flex:1}},a.a.createElement("div",{className:"code-header"},"GraphQL Schema"),a.a.createElement(l.ControlledEditor,{height:"50vh",theme:"dark",language:"graphql",value:c,onChange:(e,t)=>s(t),options:{lineNumbers:"off",minimap:{enabled:!1}}})),a.a.createElement("div",{style:{flex:1}},a.a.createElement("div",{className:"code-header"},"Generated Code"),a.a.createElement(l.ControlledEditor,{height:"50vh",theme:"dark",language:"typescript",value:u,options:{lineNumbers:"off",readOnly:!0,minimap:{enabled:!1}}}))))}}).call(this,n(130))},154:function(e,t){function n(e){return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}))}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id=154},169:function(e,t){}}]);