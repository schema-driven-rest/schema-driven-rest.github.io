(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{105:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return u})),n.d(t,"rightToc",(function(){return d})),n.d(t,"default",(function(){return m}));var r=n(1),a=n(6),l=(n(0),n(123)),i=n(138),o=n(136),s=n(137),c={id:"serverless-api-base",title:"Plugin Serverless API Base"},u={id:"plugins/serverless-api-base",title:"Plugin Serverless API Base",description:"import {CodeGenerator} from '../../src/components/codeGenerator';\r",source:"@site/docs\\plugins\\serverless-api-base.md",permalink:"/docs/plugins/serverless-api-base",editUrl:"https://github.com/schema-first-rest/schema-first-rest.github.io/edit/master/docs/plugins/serverless-api-base.md",sidebar:"someSidebar",previous:{title:"Plugin Raw Fetch",permalink:"/docs/plugins/raw-fetch"},next:{title:"Rest Client",permalink:"/docs/examples/rest-client"}},d=[{value:"Install",id:"install",children:[]},{value:"Code Generation",id:"code-generation",children:[]},{value:"Directives",id:"directives",children:[]},{value:"Dependencies",id:"dependencies",children:[]}],p={rightToc:d};function m(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"This plugin is used to generate a series of ",Object(l.b)("inlineCode",{parentName:"p"},"typescript")," functions that can be used to validate a JSON model. It can be used as a first step to make sure that the JSON sent over the wire matches your schema. "),Object(l.b)("h2",{id:"install"},"Install"),Object(l.b)(o.a,{defaultValue:"yarn",values:[{label:"Yarn",value:"yarn"},{label:"npm",value:"npm"}],mdxType:"Tabs"},Object(l.b)(s.a,{value:"yarn",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"yarn add @sdr/models\n"))),Object(l.b)(s.a,{value:"npm",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"npm install @sdr/models\n")))),Object(l.b)("hr",null),Object(l.b)("h2",{id:"code-generation"},"Code Generation"),Object(l.b)(i.a,{plugin:"validate-models",mdxType:"CodeGenerator"}),Object(l.b)("h2",{id:"directives"},"Directives"),Object(l.b)("p",null,"This plugin does not include any directives."),Object(l.b)("h2",{id:"dependencies"},"Dependencies"),Object(l.b)("p",null,Object(l.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/plugins/controller"}),"@sdr/controller")))}m.isMDXComponent=!0},123:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),u=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o({},t,{},e)),n},d=function(e){var t=u(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,b=d["".concat(i,".").concat(m)]||d[m]||p[m]||l;return n?a.a.createElement(b,o({ref:t},c,{components:n})):a.a.createElement(b,o({ref:t},c))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},136:function(e,t,n){"use strict";var r=n(0),a=n.n(r),l=n(126),i=n.n(l),o=n(85),s=n.n(o);const c=37,u=39;t.a=function(e){const{block:t,children:n,defaultValue:l,values:o}=e,[d,p]=Object(r.useState)(l),m=[];return a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:i()("tabs",{"tabs--block":t})},o.map(({value:e,label:t})=>a.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":d===e,className:i()("tab-item",s.a.tabItem,{"tab-item--active":d===e}),key:e,ref:e=>m.push(e),onKeyDown:e=>((e,t,n)=>{switch(n.keyCode){case u:((e,t)=>{const n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()})(e,t);break;case c:((e,t)=>{const n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()})(e,t)}})(m,e.target,e),onFocus:()=>p(e),onClick:()=>p(e)},t))),a.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},r.Children.toArray(n).filter(e=>e.props.value===d)[0]))}},137:function(e,t,n){"use strict";var r=n(0),a=n.n(r);t.a=function(e){return a.a.createElement("div",null,e.children)}},138:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return O}));var r=n(0),a=n.n(r),l=n(150),i=n(173);n(84);e.hrtime=()=>1;const{processPlugin:o}=n(159),{plugin:s,config:c}=n(166),{plugin:u,config:d}=n(167),{plugin:p,config:m}=n(170),{classesPlugin:b,handlersPlugin:f}=n(171),{plugin:h,config:v}=n(172),g=[{value:"models",label:"Models"},{value:"validate-models",label:"Validate Models"},{value:"raw-fetch",label:"Raw-Fetch"},{value:"serverless-api-base",label:"Serverless API Base"}];function O({plugin:e}){const[t,n]=Object(r.useState)(e||null),[s,c]=Object(r.useState)('type User @controller(path: "user") {\n  login(request: LoginRequest!): LoginResponse!\n    @request(method: POST, path: "login")\n}\n\ntype LoginRequest @model {\n  username: String!\n}\ntype LoginResponse @model {\n  authorized: Boolean!\n  jwt: String!\n}'),[d,m]=Object(r.useState)("var x=12;");return Object(r.useEffect)(()=>{try{const e=[];switch(t){case"raw-fetch":e.push({name:"@sdr/raw-fetch",method:"index",body:{plugin:p}});break;case"models":e.push({name:"@sdr/models",method:"index",body:{plugin:u}});break;case"serverless-api-base":e.push({name:"@sdr/serverless-api-base",method:"index",body:{plugin:b}}),e.push({name:"@sdr/serverless-api-base",method:"index",body:{plugin:f}}),e.push({name:"@sdr/models",method:"index",body:{plugin:u}});break;case"validate-models":e.push({name:"@sdr/validate-models",method:"index",body:{plugin:h}});break;default:return void m("Select a plugin above")}let n=o(`directive @request(method: Method, path: String) on FIELD_DEFINITION\ndirective @controller(path: String) on OBJECT\ndirective @model on OBJECT | UNION | ENUM | INTERFACE | INPUT_OBJECT\n\ndirective @auth on FIELD_DEFINITION\n\nenum Method {\n  POST\n  GET\n  DELETE\n  PUT\n}\n\r\n${s}`,e,{config:{}},!0,{tabWidth:2,singleQuote:!0,printWidth:120,bracketSpacing:!1,trailingComma:"es5",jsxBracketSameLine:!0});m(n)}catch(e){m(e.toString())}},[s,t]),a.a.createElement(a.a.Fragment,null,!e&&a.a.createElement("div",null,a.a.createElement(i.a,{style:{width:"100%"},value:g.find(e=>e.value===t),onChange:e=>{n(e.value)},options:g,placeholder:"Select Plugin"})),a.a.createElement("div",{className:"rowIfScreen"},a.a.createElement("div",{style:{flex:1}},a.a.createElement("div",{className:"code-header"},"GraphQL Schema"),a.a.createElement(l.ControlledEditor,{height:"50vh",theme:"dark",language:"graphql",value:s,onChange:(e,t)=>c(t),options:{lineNumbers:"off",minimap:{enabled:!1}}})),a.a.createElement("div",{style:{flex:1}},a.a.createElement("div",{className:"code-header"},"Generated Code"),a.a.createElement(l.ControlledEditor,{height:"50vh",theme:"dark",language:"typescript",value:d,options:{lineNumbers:"off",readOnly:!0,minimap:{enabled:!1}}}))))}}).call(this,n(130))},154:function(e,t){function n(e){return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}))}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id=154},169:function(e,t){}}]);