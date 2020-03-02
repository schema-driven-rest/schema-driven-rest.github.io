(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{101:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return d})),n.d(t,"default",(function(){return p}));var a=n(1),r=n(6),i=(n(0),n(124)),l=(n(140),n(138)),o=n(139),s={id:"controller",title:"Controller"},c={id:"plugins/controller",title:"Controller",description:"import {CodeGenerator} from '../../src/components/codeGenerator';\r",source:"@site/docs\\plugins\\controller.md",permalink:"/docs/plugins/controller",editUrl:"https://github.com/schema-driven-rest/schema-driven-rest.github.io/edit/development/docs/plugins/controller.md",sidebar:"someSidebar",previous:{title:"Plugins",permalink:"/docs/introduction/plugins"},next:{title:"Plugin Models",permalink:"/docs/plugins/models"}},d=[{value:"Install",id:"install",children:[]},{value:"Code Generation",id:"code-generation",children:[]},{value:"Directives",id:"directives",children:[]},{value:"Dependencies",id:"dependencies",children:[]}],u={rightToc:d};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The controller plugin is the base for all other included plugins. All plugins mark ",Object(i.b)("inlineCode",{parentName:"p"},"@sdr/controller")," as an explicit dependency, so it is not neccesary to include it in your configuration file. It defines the following directives."),Object(i.b)("h2",{id:"install"},"Install"),Object(i.b)(l.a,{defaultValue:"yarn",values:[{label:"Yarn",value:"yarn"},{label:"npm",value:"npm"}],mdxType:"Tabs"},Object(i.b)(o.a,{value:"yarn",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"yarn add @sdr/controller\n"))),Object(i.b)(o.a,{value:"npm",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"npm install @sdr/controller\n")))),Object(i.b)("hr",null),Object(i.b)("h2",{id:"code-generation"},"Code Generation"),Object(i.b)("p",null,"This plugin does not emit any code."),Object(i.b)("hr",null),Object(i.b)("h2",{id:"directives"},"Directives"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"controller")),Object(i.b)("p",null,"Add this to your top level types. This is how you group your web requests. Once you decorate your type with this it must only contain methods, not fields. The methods must be decorated with ",Object(i.b)("inlineCode",{parentName:"p"},"request"),"."),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Options"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"path")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The path for this grouping of requests")))),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"request")),Object(i.b)("p",null,"Add this to the methods within a ",Object(i.b)("inlineCode",{parentName:"p"},"controller"),". It defines your web requests."),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Options"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"path")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The path for request")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"method")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The REST method for this request. Allowed values are ",Object(i.b)("inlineCode",{parentName:"td"},"GET"),", ",Object(i.b)("inlineCode",{parentName:"td"},"POST"),", ",Object(i.b)("inlineCode",{parentName:"td"},"PUT"),", ",Object(i.b)("inlineCode",{parentName:"td"},"DELETE"),".")))),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"model")),Object(i.b)("p",null,"Add this to the ",Object(i.b)("inlineCode",{parentName:"p"},"types"),", ",Object(i.b)("inlineCode",{parentName:"p"},"unions"),", ",Object(i.b)("inlineCode",{parentName:"p"},"enums"),", ",Object(i.b)("inlineCode",{parentName:"p"},"inputs"),", and ",Object(i.b)("inlineCode",{parentName:"p"},"interfaces")," that you wish to emit ",Object(i.b)("inlineCode",{parentName:"p"},"typescript")," code for."),Object(i.b)("h2",{id:"dependencies"},"Dependencies"),Object(i.b)("p",null,"None"))}p.isMDXComponent=!0},124:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),d=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o({},t,{},e)),n},u=function(e){var t=d(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=d(n),b=a,m=u["".concat(l,".").concat(b)]||u[b]||p[b]||i;return n?r.a.createElement(m,o({ref:t},c,{components:n})):r.a.createElement(m,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=b;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},131:function(e,t,n){"use strict";n.r(t);n(12);function a(e){switch(e.kind){case"Variable":throw"variable not supported";case"IntValue":return parseInt(e.value);case"FloatValue":return parseFloat(e.value);case"StringValue":case"BooleanValue":return e.value;case"NullValue":return null;case"EnumValue":return e.value;case"ListValue":return e.values.map(a);case"ObjectValue":return e.fields.reduce((e,t)=>Object.assign(Object.assign({},e),{[t.name.value]:a(t.value)}),{})}}function r(e){switch(e.kind){case"NamedType":return{type:e.name.value,array:!1,nonNull:!1};case"ListType":return Object.assign(Object.assign({},r(e.type)),{array:!0});case"NonNullType":return Object.assign(Object.assign({},r(e.type)),{nonNull:!0})}}function i(e){return Object.assign(Object.assign({},r(e.type)),{name:e.name.value,defaultValue:e.defaultValue?a(e.defaultValue):void 0})}function l(e){var t;return{name:e.name.value,parameters:null===(t=e.arguments)||void 0===t?void 0:t.map(e=>({name:e.name.value,value:a(e.value)}))}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.buildType=function(e){var t,n;return{name:e.name.value,directives:null!==(n=null===(t=e.directives)||void 0===t?void 0:t.map(l))&&void 0!==n?n:[],methods:e.fields.map(e=>{var t,n;return{name:e.name.value,arguments:e.arguments.map(i),returnType:r(e.type),directives:null!==(n=null===(t=e.directives)||void 0===t?void 0:t.map(l))&&void 0!==n?n:[]}})}}},138:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(127),l=n.n(i),o=n(84),s=n.n(o);const c=37,d=39;t.a=function(e){const{block:t,children:n,defaultValue:i,values:o}=e,[u,p]=Object(a.useState)(i),b=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:l()("tabs",{"tabs--block":t})},o.map(({value:e,label:t})=>r.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":u===e,className:l()("tab-item",s.a.tabItem,{"tab-item--active":u===e}),key:e,ref:e=>b.push(e),onKeyDown:e=>((e,t,n)=>{switch(n.keyCode){case d:((e,t)=>{const n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()})(e,t);break;case c:((e,t)=>{const n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()})(e,t)}})(b,e.target,e),onFocus:()=>p(e),onClick:()=>p(e)},t))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(n).filter(e=>e.props.value===u)[0]))}},139:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function(e){return r.a.createElement("div",null,e.children)}},140:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return O}));var a=n(0),r=n.n(a),i=n(155),l=n(178);e.hrtime=()=>1;const{processPlugin:o}=n(141),{plugin:s,config:c}=n(172),{plugin:d,config:u}=n(173),{plugin:p,config:b}=n(176),{classesPlugin:m,handlersPlugin:f}=n(177),{plugin:v,config:y}=n(143),h=[{value:"models",label:"Models"},{value:"validate-models",label:"Validate Models"},{value:"raw-fetch",label:"Raw-Fetch"},{value:"serverless-api-base",label:"Serverless API Base"}];function O({plugin:e}){const[t,n]=Object(a.useState)(e||null),[s,c]=Object(a.useState)('type User @controller(path: "user") {\n  login(request: LoginRequest!): LoginResponse!\n    @request(method: POST, path: "login")\n}\n\ntype LoginRequest @model {\n  userType: UserTypes!\n  username: String!\n}\ntype LoginResponse @model {\n  authorized: Boolean!\n  jwt: String!\n}\nenum UserTypes @model{\n  admin, \n  user\n}\n'),[u,b]=Object(a.useState)("var x=12;");return Object(a.useEffect)(()=>{try{const e=[];switch(t){case"raw-fetch":e.push({name:"@sdr/raw-fetch",method:"index",body:{plugin:p}});break;case"models":e.push({name:"@sdr/models",method:"index",body:{plugin:d}});break;case"serverless-api-base":e.push({name:"@sdr/serverless-api-base",method:"index",body:{plugin:m}}),e.push({name:"@sdr/serverless-api-base",method:"index",body:{plugin:f}}),e.push({name:"@sdr/models",method:"index",body:{plugin:d}});break;case"validate-models":e.push({name:"@sdr/validate-models",method:"index",body:{plugin:v}});break;default:return void b("Select a plugin above")}let n=o(`directive @request(method: Method, path: String) on FIELD_DEFINITION\ndirective @controller(path: String) on OBJECT\ndirective @model on OBJECT | UNION | ENUM | INTERFACE | INPUT_OBJECT\n\ndirective @auth on FIELD_DEFINITION\n\nenum Method {\n  POST\n  GET\n  DELETE\n  PUT\n}\n\r\n${s}`,e,{config:{}},!0,{tabWidth:2,singleQuote:!0,printWidth:120,bracketSpacing:!1,trailingComma:"es5",jsxBracketSameLine:!0});b(n)}catch(e){b(e.toString())}},[s,t]),r.a.createElement(r.a.Fragment,null,!e&&r.a.createElement("div",null,r.a.createElement(l.a,{style:{width:"100%"},value:h.find(e=>e.value===t),onChange:e=>{n(e.value)},options:h,placeholder:"Select Plugin"})),r.a.createElement("div",{className:"rowIfScreen"},r.a.createElement("div",{style:{flex:1}},r.a.createElement("div",{className:"code-header"},"GraphQL Schema"),r.a.createElement(i.ControlledEditor,{height:"50vh",theme:"dark",language:"graphql",value:s,onChange:(e,t)=>c(t),options:{lineNumbers:"off",minimap:{enabled:!1}}})),r.a.createElement("div",{style:{flex:1}},r.a.createElement("div",{className:"code-header"},"Generated Code"),r.a.createElement(i.ControlledEditor,{height:"50vh",theme:"dark",language:"typescript",value:u,options:{lineNumbers:"off",readOnly:!0,minimap:{enabled:!1}}}))))}}).call(this,n(132))},141:function(e,t,n){"use strict";function a(e){for(var n in e)t.hasOwnProperty(n)||(t[n]=e[n])}Object.defineProperty(t,"__esModule",{value:!0}),a(n(142)),a(n(131))},142:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const a=n(164),r=n(165),i=n(122),l=n(131);t.processPlugin=function(e,t,n,o,s){var c;const d=i.buildSchema(e),u=i.parse(e);let p={schema:d,document:u,schemaString:e,types:u.definitions.filter(e=>"ObjectTypeDefinition"===e.kind).map(e=>l.buildType(e))},b="";for(const a of t)b+=null!==(c=a.body.plugin(p,n.config[a.name+("index"===a.method?"":a.method)]||{}))&&void 0!==c?c:"",b+="\r\n";return o&&(s.parser="typescript",s&&(b=a.format(b,Object.assign(Object.assign({},s),{plugins:[r]})))),b}},143:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const graphql_1=__webpack_require__(122);let validateField=function(e,t,n){let a="";switch(t.kind){case"NamedType":switch(n.optional&&(a+=`\n    if(model.${e}!==null && model.${e} !==undefined){\n    `),n.noFieldCount||(a+="fieldCount++;"),t.name.value){case"String":a+=`if((typeof model.${e}) !== 'string'){return false;}`;break;case"Boolean":a+=`if((typeof model.${e}) !== 'boolean'){return false;}`;break;case"Int":case"Float":a+=`if((typeof model.${e}) !== 'number'){return false;}`;break;default:a+=`if(validate${t.name.value}(model.${e})){return false;}`}n.optional&&(a+="}");break;case"ListType":n.optional&&(a+=`\n    if(model.${e}!==null && model.${e} !==undefined){ \n    `),n.noFieldCount||(a+="fieldCount++;"),a+=`if(!Array.isArray(model.${e})){return false;}`,a+=`for(let ind${n.arrayFieldIndex}=0;ind${n.arrayFieldIndex}<model.${e}.length;ind${n.arrayFieldIndex}++){\n        ${validateField(`${e}[ind${n.arrayFieldIndex}]`,t.type,Object.assign(Object.assign({},n),{noFieldCount:!0,arrayFieldIndex:n.arrayFieldIndex+1}))}\n      }`,n.optional&&(a+="}");break;case"NonNullType":a+=`if(model.${e}===null || model.${e}===undefined){return false;}`,a+=validateField(e,t.type,Object.assign(Object.assign({},n),{optional:!1}))}return a};function plugin(options,config){var _a;const schema=graphql_1.buildSchema(options.schemaString);let typeMap=schema.getTypeMap();for(const e in typeMap)(null===(_a=typeMap[e].astNode)||void 0===_a?void 0:_a.directives.some(e=>"model"===e.name.value))||delete typeMap[e];let validation="/* This file was generated by https://github.com/schema-driven-rest/plugin-validate-models */\n  /* tslint:disable */\n";for(const key in typeMap){const type=typeMap[key];if(type.astNode.directives.some(e=>"model"===e.name.value)){if(validation+=`export function validate${type.name}(model: any){`,"ObjectTypeDefinition"===type.astNode.kind||"InterfaceTypeDefinition"===type.astNode.kind||"InputObjectTypeDefinition"===type.astNode.kind){validation+="if(model===null || model ===undefined) return false;",validation+="let fieldCount=0;";for(const e of type.astNode.fields)validation+=validateField(e.name.value,e.type,{optional:!0,noFieldCount:!1,arrayFieldIndex:1});if(type.astNode.interfaces)for(const e of type.astNode.interfaces)validation+=`if(validate${e.name.value}(model)) return true;`;validation+="if(Object.keys(model).length !== fieldCount) return false;",validation+="return true;"}if("EnumTypeDefinition"===type.astNode.kind){const values=eval("type.astNode.values");for(const e of values)validation+=`if(model==='${e.name.value}') return true;`;validation+="return false;"}if("UnionTypeDefinition"===type.astNode.kind){for(const e of type.astNode.types)validation+=`if(validate${e.name.value}(model)) return true;`;validation+="return false;"}validation+="}"}}return validation}exports.plugin=plugin,exports.config={dependsOn:["@sdr/controller"]}},159:function(e,t){function n(e){return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}))}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id=159},175:function(e,t){}}]);