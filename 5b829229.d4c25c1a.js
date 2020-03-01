(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{106:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return s})),t.d(n,"metadata",(function(){return u})),t.d(n,"rightToc",(function(){return d})),t.d(n,"default",(function(){return m}));var r=t(1),a=t(6),o=(t(0),t(122)),l=t(137),i=t(135),c=t(136),s={id:"models",title:"Plugin Models"},u={id:"plugins/models",title:"Plugin Models",description:"import {CodeGenerator} from '../../src/components/codeGenerator';",source:"@site/docs\\plugins\\models.md",permalink:"/docs/plugins/models",editUrl:"https://github.com/schema-first-rest/schema-first-rest.github.io/edit/master/docs/plugins/models.md",sidebar:"someSidebar",previous:{title:"Plugin Controller",permalink:"/docs/plugins/controller"},next:{title:"Plugin Validate Models",permalink:"/docs/plugins/validate-models"}},d=[{value:"Install",id:"install",children:[]},{value:"Code Generation",id:"code-generation",children:[]},{value:"Directives",id:"directives",children:[]},{value:"Dependencies",id:"dependencies",children:[]}],p={rightToc:d};function m(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This plugin is used to generate a series of ",Object(o.b)("inlineCode",{parentName:"p"},"typescript")," models to be used in most other plugins. The bulk of the code is from the incredible ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://graphql-code-generator.com/"}),"GraphQL Code Generator")," project."),Object(o.b)("h2",{id:"install"},"Install"),Object(o.b)(i.a,{defaultValue:"yarn",values:[{label:"Yarn",value:"yarn"},{label:"npm",value:"npm"}],mdxType:"Tabs"},Object(o.b)(c.a,{value:"yarn",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"yarn add @sfr/models\n"))),Object(o.b)(c.a,{value:"npm",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"npm install @sfr/models\n")))),Object(o.b)("hr",null),Object(o.b)("h2",{id:"code-generation"},"Code Generation"),Object(o.b)(l.a,{plugin:"models",mdxType:"CodeGenerator"}),Object(o.b)("h2",{id:"directives"},"Directives"),Object(o.b)("p",null,"This plugin does not include any directives."),Object(o.b)("h2",{id:"dependencies"},"Dependencies"),Object(o.b)("p",null,Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/plugins/controller"}),"@sfr/controller")))}m.isMDXComponent=!0},122:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return b}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=a.a.createContext({}),u=function(e){var n=a.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i({},n,{},e)),t},d=function(e){var n=u(e.components);return a.a.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},m=Object(r.forwardRef)((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=u(t),m=r,b=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return t?a.a.createElement(b,i({ref:n},s,{components:t})):a.a.createElement(b,i({ref:n},s))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=m;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=t[s];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},135:function(e,n,t){"use strict";var r=t(0),a=t.n(r),o=t(125),l=t.n(o),i=t(85),c=t.n(i);const s=37,u=39;n.a=function(e){const{block:n,children:t,defaultValue:o,values:i}=e,[d,p]=Object(r.useState)(o),m=[];return a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:l()("tabs",{"tabs--block":n})},i.map(({value:e,label:n})=>a.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":d===e,className:l()("tab-item",c.a.tabItem,{"tab-item--active":d===e}),key:e,ref:e=>m.push(e),onKeyDown:e=>((e,n,t)=>{switch(t.keyCode){case u:((e,n)=>{const t=e.indexOf(n)+1;e[t]?e[t].focus():e[0].focus()})(e,n);break;case s:((e,n)=>{const t=e.indexOf(n)-1;e[t]?e[t].focus():e[e.length-1].focus()})(e,n)}})(m,e.target,e),onFocus:()=>p(e),onClick:()=>p(e)},n))),a.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},r.Children.toArray(t).filter(e=>e.props.value===d)[0]))}},136:function(e,n,t){"use strict";var r=t(0),a=t.n(r);n.a=function(e){return a.a.createElement("div",null,e.children)}},137:function(e,n,t){"use strict";(function(e){t.d(n,"a",(function(){return O}));t(157),t(158),t(159);var r=t(0),a=t.n(r),o=t(149),l=t(175);t(84);e.hrtime=function(){return 1};var i=t(161).processPlugin,c=t(168),s=(c.plugin,c.config,t(169)),u=s.plugin,d=(s.config,t(172)),p=d.plugin,m=(d.config,t(173)),b=m.classesPlugin,f=m.handlersPlugin,h=t(174),g=h.plugin,v=(h.config,[{value:"models",label:"Models"},{value:"validate-models",label:"Validate Models"},{value:"raw-fetch",label:"Raw-Fetch"},{value:"serverless-api-base",label:"Serverless API Base"}]);function O(e){var n=e.plugin,t=Object(r.useState)(n||null),c=t[0],s=t[1],d=Object(r.useState)('type User @controller(path: "user") {\n  login(request: LoginRequest!): LoginResponse!\n    @request(method: POST, path: "login")\n}\n\ntype LoginRequest @model {\n  username: String!\n}\ntype LoginResponse @model {\n  authorized: Boolean!\n  jwt: String!\n}'),m=d[0],h=d[1],O=Object(r.useState)("var x=12;"),y=O[0],j=O[1];return Object(r.useEffect)((function(){try{var e=[];switch(c){case"raw-fetch":e.push({name:"@sfr/raw-fetch",method:"index",body:{plugin:p}});break;case"models":e.push({name:"@sfr/models",method:"index",body:{plugin:u}});break;case"serverless-api-base":e.push({name:"@sfr/serverless-api-base",method:"index",body:{plugin:b}}),e.push({name:"@sfr/serverless-api-base",method:"index",body:{plugin:f}}),e.push({name:"@sfr/models",method:"index",body:{plugin:u}});break;case"validate-models":e.push({name:"@sfr/validate-models",method:"index",body:{plugin:g}});break;default:return void j("Select a plugin above")}var n=i("directive @request(method: Method, path: String) on FIELD_DEFINITION\ndirective @controller(path: String) on OBJECT\ndirective @model on OBJECT | UNION | ENUM | INTERFACE | INPUT_OBJECT\n\ndirective @auth on FIELD_DEFINITION\n\nenum Method {\n  POST\n  GET\n  DELETE\n  PUT\n}\n\r\n"+m,e,{config:{}},!0,{tabWidth:2,singleQuote:!0,printWidth:120,bracketSpacing:!1,trailingComma:"es5",jsxBracketSameLine:!0});j(n)}catch(t){j(t.toString())}}),[m,c]),a.a.createElement(a.a.Fragment,null,!n&&a.a.createElement("div",null,a.a.createElement(l.a,{style:{width:"100%"},value:v.find((function(e){return e.value===c})),onChange:function(e){s(e.value)},options:v,placeholder:"Select Plugin"})),a.a.createElement("div",{className:"rowIfScreen"},a.a.createElement("div",{style:{flex:1}},a.a.createElement("div",{className:"code-header"},"GraphQL Schema"),a.a.createElement(o.ControlledEditor,{height:"50vh",theme:"dark",language:"graphql",value:m,onChange:function(e,n){return h(n)},options:{lineNumbers:"off",minimap:{enabled:!1}}})),a.a.createElement("div",{style:{flex:1}},a.a.createElement("div",{className:"code-header"},"Generated Code"),a.a.createElement(o.ControlledEditor,{height:"50vh",theme:"dark",language:"typescript",value:y,options:{lineNumbers:"off",readOnly:!0,minimap:{enabled:!1}}}))))}}).call(this,t(129))},153:function(e,n){function t(e){return Promise.resolve().then((function(){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}))}t.keys=function(){return[]},t.resolve=t,e.exports=t,t.id=153},171:function(e,n){}}]);