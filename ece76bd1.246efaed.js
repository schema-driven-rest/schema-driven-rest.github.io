(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{116:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(127),o=a.n(l),i=a(179),s=a(144),c=a(129),u=a(135),d=a(117),m=a.n(d),h=a(140);r.a.createElement(r.a.Fragment,null,"Easy to Use"),r.a.createElement(r.a.Fragment,null,"Docusaurus was designed from the ground up to be easily installed and used to get your website up and running quickly."),r.a.createElement(r.a.Fragment,null,"Focus on What Matters"),r.a.createElement(r.a.Fragment,null,"Docusaurus lets you focus on your docs, and we'll do the chores. Go ahead and move your docs into the"," ",r.a.createElement("code",null,"docs")," directory."),r.a.createElement(r.a.Fragment,null,"Powered by React"),r.a.createElement(r.a.Fragment,null,"Extend or customize your website layout by reusing React. Docusaurus can be extended while reusing the same header and footer.");t.default=function(){const e=Object(c.a)(),{siteConfig:t={}}=e;return r.a.createElement(i.a,{title:`${t.title}`,description:"GraphQL Based Schema For Your REST API"},r.a.createElement("header",{className:o()("hero hero--primary",m.a.heroBanner)},r.a.createElement("div",{className:"container"},r.a.createElement("img",{src:"./img/logo.png",alt:"logo",style:{width:200,height:200}}),r.a.createElement("h1",{className:"hero__title"},t.title),r.a.createElement("p",{className:"hero__subtitle"},t.tagline),r.a.createElement("div",{className:m.a.buttons},r.a.createElement(s.a,{className:o()("button  button--secondary button--lg",m.a.getStarted),to:Object(u.a)("docs/introduction/theory")},"Get Started")))),r.a.createElement("main",null,r.a.createElement("section",{className:m.a.features},r.a.createElement("div",{className:"container"},r.a.createElement(h.a,null)))))}},131:function(e,t,a){"use strict";a.r(t);a(12);function n(e){switch(e.kind){case"Variable":throw"variable not supported";case"IntValue":return parseInt(e.value);case"FloatValue":return parseFloat(e.value);case"StringValue":case"BooleanValue":return e.value;case"NullValue":return null;case"EnumValue":return e.value;case"ListValue":return e.values.map(n);case"ObjectValue":return e.fields.reduce((e,t)=>Object.assign(Object.assign({},e),{[t.name.value]:n(t.value)}),{})}}function r(e){switch(e.kind){case"NamedType":return{type:e.name.value,array:!1,nonNull:!1};case"ListType":return Object.assign(Object.assign({},r(e.type)),{array:!0});case"NonNullType":return Object.assign(Object.assign({},r(e.type)),{nonNull:!0})}}function l(e){return Object.assign(Object.assign({},r(e.type)),{name:e.name.value,defaultValue:e.defaultValue?n(e.defaultValue):void 0})}function o(e){var t;return{name:e.name.value,parameters:null===(t=e.arguments)||void 0===t?void 0:t.map(e=>({name:e.name.value,value:n(e.value)}))}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.buildType=function(e){var t,a;return{name:e.name.value,directives:null!==(a=null===(t=e.directives)||void 0===t?void 0:t.map(o))&&void 0!==a?a:[],methods:e.fields.map(e=>{var t,a;return{name:e.name.value,arguments:e.arguments.map(l),returnType:r(e.type),directives:null!==(a=null===(t=e.directives)||void 0===t?void 0:t.map(o))&&void 0!==a?a:[]}})}}},140:function(e,t,a){"use strict";(function(e){a.d(t,"a",(function(){return y}));var n=a(0),r=a.n(n),l=a(155),o=a(178);e.hrtime=()=>1;const{processPlugin:i}=a(141),{plugin:s,config:c}=a(172),{plugin:u,config:d}=a(173),{plugin:m,config:h}=a(176),{classesPlugin:f,handlersPlugin:p}=a(177),{plugin:v,config:b}=a(143),g=[{value:"models",label:"Models"},{value:"validate-models",label:"Validate Models"},{value:"raw-fetch",label:"Raw-Fetch"},{value:"serverless-api-base",label:"Serverless API Base"}];function y({plugin:e}){const[t,a]=Object(n.useState)(e||null),[s,c]=Object(n.useState)('type User @controller(path: "user") {\n  login(request: LoginRequest!): LoginResponse!\n    @request(method: POST, path: "login")\n}\n\ntype LoginRequest @model {\n  userType: UserTypes!\n  username: String!\n}\ntype LoginResponse @model {\n  authorized: Boolean!\n  jwt: String!\n}\nenum UserTypes @model{\n  admin, \n  user\n}\n'),[d,h]=Object(n.useState)("var x=12;");return Object(n.useEffect)(()=>{try{const e=[];switch(t){case"raw-fetch":e.push({name:"@sdr/raw-fetch",method:"index",body:{plugin:m}});break;case"models":e.push({name:"@sdr/models",method:"index",body:{plugin:u}});break;case"serverless-api-base":e.push({name:"@sdr/serverless-api-base",method:"index",body:{plugin:f}}),e.push({name:"@sdr/serverless-api-base",method:"index",body:{plugin:p}}),e.push({name:"@sdr/models",method:"index",body:{plugin:u}});break;case"validate-models":e.push({name:"@sdr/validate-models",method:"index",body:{plugin:v}});break;default:return void h("Select a plugin above")}let a=i(`directive @request(method: Method, path: String) on FIELD_DEFINITION\ndirective @controller(path: String) on OBJECT\ndirective @model on OBJECT | UNION | ENUM | INTERFACE | INPUT_OBJECT\n\ndirective @auth on FIELD_DEFINITION\n\nenum Method {\n  POST\n  GET\n  DELETE\n  PUT\n}\n\r\n${s}`,e,{config:{}},!0,{tabWidth:2,singleQuote:!0,printWidth:120,bracketSpacing:!1,trailingComma:"es5",jsxBracketSameLine:!0});h(a)}catch(e){h(e.toString())}},[s,t]),r.a.createElement(r.a.Fragment,null,!e&&r.a.createElement("div",null,r.a.createElement(o.a,{style:{width:"100%"},value:g.find(e=>e.value===t),onChange:e=>{a(e.value)},options:g,placeholder:"Select Plugin"})),r.a.createElement("div",{className:"rowIfScreen"},r.a.createElement("div",{style:{flex:1}},r.a.createElement("div",{className:"code-header"},"GraphQL Schema"),r.a.createElement(l.ControlledEditor,{height:"50vh",theme:"dark",language:"graphql",value:s,onChange:(e,t)=>c(t),options:{lineNumbers:"off",minimap:{enabled:!1}}})),r.a.createElement("div",{style:{flex:1}},r.a.createElement("div",{className:"code-header"},"Generated Code"),r.a.createElement(l.ControlledEditor,{height:"50vh",theme:"dark",language:"typescript",value:d,options:{lineNumbers:"off",readOnly:!0,minimap:{enabled:!1}}}))))}}).call(this,a(132))},141:function(e,t,a){"use strict";function n(e){for(var a in e)t.hasOwnProperty(a)||(t[a]=e[a])}Object.defineProperty(t,"__esModule",{value:!0}),n(a(142)),n(a(131))},142:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=a(164),r=a(165),l=a(122),o=a(131);t.processPlugin=function(e,t,a,i,s){var c;const u=l.buildSchema(e),d=l.parse(e);let m={schema:u,document:d,schemaString:e,types:d.definitions.filter(e=>"ObjectTypeDefinition"===e.kind).map(e=>o.buildType(e))},h="";for(const n of t)h+=null!==(c=n.body.plugin(m,a.config[n.name+("index"===n.method?"":n.method)]||{}))&&void 0!==c?c:"",h+="\r\n";return i&&(s.parser="typescript",s&&(h=n.format(h,Object.assign(Object.assign({},s),{plugins:[r]})))),h}},143:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const graphql_1=__webpack_require__(122);let validateField=function(e,t,a){let n="";switch(t.kind){case"NamedType":switch(a.optional&&(n+=`\n    if(model.${e}!==null && model.${e} !==undefined){\n    `),a.noFieldCount||(n+="fieldCount++;"),t.name.value){case"String":n+=`if((typeof model.${e}) !== 'string'){return false;}`;break;case"Boolean":n+=`if((typeof model.${e}) !== 'boolean'){return false;}`;break;case"Int":case"Float":n+=`if((typeof model.${e}) !== 'number'){return false;}`;break;default:n+=`if(validate${t.name.value}(model.${e})){return false;}`}a.optional&&(n+="}");break;case"ListType":a.optional&&(n+=`\n    if(model.${e}!==null && model.${e} !==undefined){ \n    `),a.noFieldCount||(n+="fieldCount++;"),n+=`if(!Array.isArray(model.${e})){return false;}`,n+=`for(let ind${a.arrayFieldIndex}=0;ind${a.arrayFieldIndex}<model.${e}.length;ind${a.arrayFieldIndex}++){\n        ${validateField(`${e}[ind${a.arrayFieldIndex}]`,t.type,Object.assign(Object.assign({},a),{noFieldCount:!0,arrayFieldIndex:a.arrayFieldIndex+1}))}\n      }`,a.optional&&(n+="}");break;case"NonNullType":n+=`if(model.${e}===null || model.${e}===undefined){return false;}`,n+=validateField(e,t.type,Object.assign(Object.assign({},a),{optional:!1}))}return n};function plugin(options,config){var _a;const schema=graphql_1.buildSchema(options.schemaString);let typeMap=schema.getTypeMap();for(const e in typeMap)(null===(_a=typeMap[e].astNode)||void 0===_a?void 0:_a.directives.some(e=>"model"===e.name.value))||delete typeMap[e];let validation="/* This file was generated by https://github.com/schema-driven-rest/plugin-validate-models */\n  /* tslint:disable */\n";for(const key in typeMap){const type=typeMap[key];if(type.astNode.directives.some(e=>"model"===e.name.value)){if(validation+=`export function validate${type.name}(model: any){`,"ObjectTypeDefinition"===type.astNode.kind||"InterfaceTypeDefinition"===type.astNode.kind||"InputObjectTypeDefinition"===type.astNode.kind){validation+="if(model===null || model ===undefined) return false;",validation+="let fieldCount=0;";for(const e of type.astNode.fields)validation+=validateField(e.name.value,e.type,{optional:!0,noFieldCount:!1,arrayFieldIndex:1});if(type.astNode.interfaces)for(const e of type.astNode.interfaces)validation+=`if(validate${e.name.value}(model)) return true;`;validation+="if(Object.keys(model).length !== fieldCount) return false;",validation+="return true;"}if("EnumTypeDefinition"===type.astNode.kind){const values=eval("type.astNode.values");for(const e of values)validation+=`if(model==='${e.name.value}') return true;`;validation+="return false;"}if("UnionTypeDefinition"===type.astNode.kind){for(const e of type.astNode.types)validation+=`if(validate${e.name.value}(model)) return true;`;validation+="return false;"}validation+="}"}}return validation}exports.plugin=plugin,exports.config={dependsOn:["@sdr/controller"]}},151:function(e,t,a){"use strict";var n=a(0);const r=a.n(n).a.createContext({isDarkTheme:!1,setLightTheme:()=>{},setDarkTheme:()=>{}});t.a=r},159:function(e,t){function a(e){return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}))}a.keys=function(){return[]},a.resolve=a,e.exports=a,a.id=159},160:function(e,t,a){"use strict";var n=a(0),r=a(151);t.a=function(){return Object(n.useContext)(r.a)}},161:function(e,t,a){"use strict";var n=a(17);a.d(t,"a",(function(){return n.c})),a.d(t,"b",(function(){return n.d}))},162:function(e,t,a){"use strict";var n=a(0);t.a=function(e=!0){Object(n.useEffect)(()=>(document.body.style.overflow=e?"hidden":"visible",()=>{document.body.style.overflow="visible"}),[e])}},175:function(e,t){},179:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(198),o=a(129),i=a(135);const s="",c="dark";var u=()=>{const{siteConfig:{themeConfig:{disableDarkMode:e}}={}}=Object(o.a)(),[t,a]=Object(n.useState)("undefined"!=typeof document?document.documentElement.getAttribute("data-theme"):s),r=Object(n.useCallback)(e=>{try{localStorage.setItem("theme",e)}catch(t){console.error(t)}},[a]),l=Object(n.useCallback)(()=>{a(s),r(s)},[]),i=Object(n.useCallback)(()=>{a(c),r(c)},[]);return Object(n.useEffect)(()=>{document.documentElement.setAttribute("data-theme",t)},[t]),Object(n.useEffect)(()=>{if(!e)try{const e=localStorage.getItem("theme");null!==e&&a(e)}catch(t){console.error(t)}},[a]),{isDarkTheme:t===c,setLightTheme:l,setDarkTheme:i}},d=a(151);var m=function(e){const{isDarkTheme:t,setLightTheme:a,setDarkTheme:n}=u();return r.a.createElement(d.a.Provider,{value:{isDarkTheme:t,setLightTheme:a,setDarkTheme:n}},e.children)},h=a(1),f=a(144),p=()=>null,v=a(180),b=a.n(v),g=a(127),y=a.n(g),E=a(85),k=a.n(E);const _=()=>r.a.createElement("span",{className:y()(k.a.toggle,k.a.moon)}),O=()=>r.a.createElement("span",{className:y()(k.a.toggle,k.a.sun)});var N=function(e){const{isClient:t}=Object(o.a)();return r.a.createElement(b.a,Object(h.a)({disabled:!t,icons:{checked:r.a.createElement(_,null),unchecked:r.a.createElement(O,null)}},e))},j=a(160),w=a(161);var T=function(e){const[t,a]=Object(n.useState)(e);return Object(n.useEffect)(()=>{const e=()=>a(window.location.hash);return window.addEventListener("hashchange",e),()=>window.removeEventListener("hashchange",e)},[]),[t,a]};var C=e=>{const[t,a]=Object(n.useState)(!0),[r,l]=Object(n.useState)(!1),[o,i]=Object(n.useState)(0),[s,c]=Object(n.useState)(0),u=Object(n.useCallback)(e=>{null!==e&&c(e.getBoundingClientRect().height)},[]),d=Object(w.b)(),[m,h]=T(d.hash),f=()=>{const e=window.pageYOffset||document.documentElement.scrollTop;if(e<s)return;if(r)return l(!1),a(!1),void i(e);const t=document.documentElement.scrollHeight-s,n=window.innerHeight;o&&e>o?a(!1):e+n<t&&a(!0),i(e)};return Object(n.useEffect)(()=>{if(e)return window.addEventListener("scroll",f),()=>{window.removeEventListener("scroll",f)}},[o,s]),Object(n.useEffect)(()=>{e&&(a(!0),h(d.hash))},[d]),Object(n.useEffect)(()=>{e&&m&&l(!0)},[m]),{navbarRef:u,isNavbarVisible:t}},S=a(162),x=a(86),F=a.n(x);function M({to:e,href:t,label:a,position:n,...l}){const o=Object(i.a)(e);return r.a.createElement(f.a,Object(h.a)({className:"navbar__item navbar__link"},t?{target:"_blank",rel:"noopener noreferrer",href:t}:{activeClassName:"navbar__link--active",to:o},l),a)}var D=function(){const e=Object(o.a)(),{siteConfig:t={}}=e,{baseUrl:a,themeConfig:l={}}=t,{navbar:s={},disableDarkMode:c=!1}=l,{title:u,logo:d={},links:m=[],hideOnScroll:v=!1}=s,[b,g]=Object(n.useState)(!1),[E,k]=Object(n.useState)(!1),{isDarkTheme:_,setLightTheme:O,setDarkTheme:w}=Object(j.a)(),{navbarRef:T,isNavbarVisible:x}=C(v);Object(S.a)(b);const D=Object(n.useCallback)(()=>{g(!0)},[g]),I=Object(n.useCallback)(()=>{g(!1)},[g]),L=Object(n.useCallback)(e=>e.target.checked?w():O(),[O,w]),P=d.href||a,$=/http/.test(P)?{rel:"noopener noreferrer",target:"_blank"}:null,B=d.srcDark&&_?d.srcDark:d.src,V=Object(i.a)(B);return r.a.createElement("nav",{ref:T,className:y()("navbar","navbar--light","navbar--fixed-top",{"navbar-sidebar--show":b,[F.a.navbarHideable]:v,[F.a.navbarHidden]:!x})},r.a.createElement("div",{className:"navbar__inner"},r.a.createElement("div",{className:"navbar__items"},r.a.createElement("div",{"aria-label":"Navigation bar toggle",className:"navbar__toggle",role:"button",tabIndex:0,onClick:D,onKeyDown:D},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 30 30",role:"img",focusable:"false"},r.a.createElement("title",null,"Menu"),r.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),r.a.createElement(f.a,Object(h.a)({className:"navbar__brand",to:P},$),null!=d&&r.a.createElement("img",{className:"navbar__logo",src:V,alt:d.alt}),null!=u&&r.a.createElement("strong",{className:E?F.a.hideLogoText:""},u)),m.filter(e=>"right"!==e.position).map((e,t)=>r.a.createElement(M,Object(h.a)({},e,{key:t})))),r.a.createElement("div",{className:"navbar__items navbar__items--right"},m.filter(e=>"right"===e.position).map((e,t)=>r.a.createElement(M,Object(h.a)({},e,{key:t}))),!c&&r.a.createElement(N,{className:F.a.displayOnlyInLargeViewport,"aria-label":"Dark mode toggle",checked:_,onChange:L}),r.a.createElement(p,{handleSearchBarToggle:k,isSearchBarExpanded:E}))),r.a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:I}),r.a.createElement("div",{className:"navbar-sidebar"},r.a.createElement("div",{className:"navbar-sidebar__brand"},r.a.createElement(f.a,Object(h.a)({className:"navbar__brand",onClick:I,to:P},$),null!=d&&r.a.createElement("img",{className:"navbar__logo",src:V,alt:d.alt}),null!=u&&r.a.createElement("strong",null,u)),!c&&b&&r.a.createElement(N,{"aria-label":"Dark mode toggle in sidebar",checked:_,onChange:L})),r.a.createElement("div",{className:"navbar-sidebar__items"},r.a.createElement("div",{className:"menu"},r.a.createElement("ul",{className:"menu__list"},m.map((e,t)=>r.a.createElement("li",{className:"menu__list-item",key:t},r.a.createElement(M,Object(h.a)({className:"menu__link"},e,{onClick:I})))))))))},I=a(87),L=a.n(I);function P({to:e,href:t,label:a,...n}){const l=Object(i.a)(e);return r.a.createElement(f.a,Object(h.a)({className:"footer__link-item"},t?{target:"_blank",rel:"noopener noreferrer",href:t}:{to:l},n),a)}const $=({url:e,alt:t})=>r.a.createElement("img",{className:"footer__logo",alt:t,src:e});var B=function(){const e=Object(o.a)(),{siteConfig:t={}}=e,{themeConfig:a={}}=t,{footer:n}=a,{copyright:l,links:s=[],logo:c={}}=n||{},u=Object(i.a)(c.src);return n?r.a.createElement("footer",{className:y()("footer",{"footer--dark":"dark"===n.style})},r.a.createElement("div",{className:"container"},s&&s.length>0&&r.a.createElement("div",{className:"row footer__links"},s.map((e,t)=>r.a.createElement("div",{key:t,className:"col footer__col"},null!=e.title?r.a.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?r.a.createElement("ul",{className:"footer__items"},e.items.map((e,t)=>e.html?r.a.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):r.a.createElement("li",{key:e.href||e.to,className:"footer__item"},r.a.createElement(P,e)))):null))),(c||l)&&r.a.createElement("div",{className:"text--center"},c&&c.src&&r.a.createElement("div",{className:"margin-bottom--sm"},c.href?r.a.createElement("a",{href:c.href,target:"_blank",rel:"noopener noreferrer",className:L.a.footerLogoLink},r.a.createElement($,{alt:c.alt,url:u})):r.a.createElement($,{alt:c.alt,url:u})),l))):null};a(88);t.a=function(e){const{siteConfig:t={}}=Object(o.a)(),{favicon:a,title:n,themeConfig:{image:s},url:c}=t,{children:u,title:d,noFooter:h,description:f,image:p,keywords:v,permalink:b,version:g}=e,y=d?`${d} | ${n}`:n,E=p||s,k=c+Object(i.a)(E),_=Object(i.a)(a);return r.a.createElement(m,null,r.a.createElement(l.a,null,r.a.createElement("html",{lang:"en"}),r.a.createElement("meta",{httpEquiv:"x-ua-compatible",content:"ie=edge"}),y&&r.a.createElement("title",null,y),y&&r.a.createElement("meta",{property:"og:title",content:y}),a&&r.a.createElement("link",{rel:"shortcut icon",href:_}),f&&r.a.createElement("meta",{name:"description",content:f}),f&&r.a.createElement("meta",{property:"og:description",content:f}),g&&r.a.createElement("meta",{name:"docsearch:version",content:g}),v&&v.length&&r.a.createElement("meta",{name:"keywords",content:v.join(",")}),E&&r.a.createElement("meta",{property:"og:image",content:k}),E&&r.a.createElement("meta",{property:"twitter:image",content:k}),E&&r.a.createElement("meta",{name:"twitter:image:alt",content:`Image for ${y}`}),b&&r.a.createElement("meta",{property:"og:url",content:c+b}),r.a.createElement("meta",{name:"twitter:card",content:"summary"})),r.a.createElement(D,null),r.a.createElement("div",{className:"main-wrapper"},u),!h&&r.a.createElement(B,null))}},180:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),l=a(0),o=m(l),i=m(a(127)),s=m(a(8)),c=m(a(181)),u=m(a(182)),d=a(183);function m(e){return e&&e.__esModule?e:{default:e}}var h=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.handleClick=a.handleClick.bind(a),a.handleTouchStart=a.handleTouchStart.bind(a),a.handleTouchMove=a.handleTouchMove.bind(a),a.handleTouchEnd=a.handleTouchEnd.bind(a),a.handleFocus=a.handleFocus.bind(a),a.handleBlur=a.handleBlur.bind(a),a.previouslyChecked=!(!e.checked&&!e.defaultChecked),a.state={checked:!(!e.checked&&!e.defaultChecked),hasFocus:!1},a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentDidUpdate",value:function(e){e.checked!==this.props.checked&&this.setState({checked:!!this.props.checked})}},{key:"handleClick",value:function(e){var t=this.input;if(e.target!==t&&!this.moved)return this.previouslyChecked=t.checked,e.preventDefault(),t.focus(),void t.click();var a=this.props.hasOwnProperty("checked")?this.props.checked:t.checked;this.setState({checked:a})}},{key:"handleTouchStart",value:function(e){this.startX=(0,d.pointerCoord)(e).x,this.activated=!0}},{key:"handleTouchMove",value:function(e){if(this.activated&&(this.moved=!0,this.startX)){var t=(0,d.pointerCoord)(e).x;this.state.checked&&t+15<this.startX?(this.setState({checked:!1}),this.startX=t,this.activated=!0):t-15>this.startX&&(this.setState({checked:!0}),this.startX=t,this.activated=t<this.startX+5)}}},{key:"handleTouchEnd",value:function(e){if(this.moved){var t=this.input;if(e.preventDefault(),this.startX){var a=(0,d.pointerCoord)(e).x;!0===this.previouslyChecked&&this.startX+4>a?this.previouslyChecked!==this.state.checked&&(this.setState({checked:!1}),this.previouslyChecked=this.state.checked,t.click()):this.startX-4<a&&this.previouslyChecked!==this.state.checked&&(this.setState({checked:!0}),this.previouslyChecked=this.state.checked,t.click()),this.activated=!1,this.startX=null,this.moved=!1}}}},{key:"handleFocus",value:function(e){var t=this.props.onFocus;t&&t(e),this.setState({hasFocus:!0})}},{key:"handleBlur",value:function(e){var t=this.props.onBlur;t&&t(e),this.setState({hasFocus:!1})}},{key:"getIcon",value:function(e){var a=this.props.icons;return a?void 0===a[e]?t.defaultProps.icons[e]:a[e]:null}},{key:"render",value:function(){var e=this,t=this.props,a=t.className,r=(t.icons,function(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}(t,["className","icons"])),l=(0,i.default)("react-toggle",{"react-toggle--checked":this.state.checked,"react-toggle--focus":this.state.hasFocus,"react-toggle--disabled":this.props.disabled},a);return o.default.createElement("div",{className:l,onClick:this.handleClick,onTouchStart:this.handleTouchStart,onTouchMove:this.handleTouchMove,onTouchEnd:this.handleTouchEnd},o.default.createElement("div",{className:"react-toggle-track"},o.default.createElement("div",{className:"react-toggle-track-check"},this.getIcon("checked")),o.default.createElement("div",{className:"react-toggle-track-x"},this.getIcon("unchecked"))),o.default.createElement("div",{className:"react-toggle-thumb"}),o.default.createElement("input",n({},r,{ref:function(t){e.input=t},onFocus:this.handleFocus,onBlur:this.handleBlur,className:"react-toggle-screenreader-only",type:"checkbox"})))}}]),t}(l.PureComponent);t.default=h,h.displayName="Toggle",h.defaultProps={icons:{checked:o.default.createElement(c.default,null),unchecked:o.default.createElement(u.default,null)}},h.propTypes={checked:s.default.bool,disabled:s.default.bool,defaultChecked:s.default.bool,onChange:s.default.func,onFocus:s.default.func,onBlur:s.default.func,className:s.default.string,name:s.default.string,value:s.default.string,id:s.default.string,"aria-labelledby":s.default.string,"aria-label":s.default.string,icons:s.default.oneOfType([s.default.bool,s.default.shape({checked:s.default.node,unchecked:s.default.node})])}},181:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r=a(0),l=(n=r)&&n.__esModule?n:{default:n};t.default=function(){return l.default.createElement("svg",{width:"14",height:"11",viewBox:"0 0 14 11"},l.default.createElement("title",null,"switch-check"),l.default.createElement("path",{d:"M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0",fill:"#fff",fillRule:"evenodd"}))}},182:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r=a(0),l=(n=r)&&n.__esModule?n:{default:n};t.default=function(){return l.default.createElement("svg",{width:"10",height:"10",viewBox:"0 0 10 10"},l.default.createElement("title",null,"switch-x"),l.default.createElement("path",{d:"M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12",fill:"#fff",fillRule:"evenodd"}))}},183:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.pointerCoord=function(e){if(e){var t=e.changedTouches;if(t&&t.length>0){var a=t[0];return{x:a.clientX,y:a.clientY}}var n=e.pageX;if(void 0!==n)return{x:n,y:e.pageY}}return{x:0,y:0}}}}]);