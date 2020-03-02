(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{109:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return u})),n.d(t,"rightToc",(function(){return d})),n.d(t,"default",(function(){return m}));var r=n(1),a=n(6),i=(n(0),n(124)),o=n(148),s=n(146),l=n(147),c={id:"validate-models",title:"Plugin Validate Models"},u={id:"plugins/validate-models",title:"Plugin Validate Models",description:"import {CodeGenerator} from '../../src/components/codeGenerator';\r",source:"@site/docs\\plugins\\validate-models.md",permalink:"/docs/plugins/validate-models",editUrl:"https://github.com/schema-driven-rest/schema-driven-rest.github.io/edit/development/docs/plugins/validate-models.md",sidebar:"someSidebar",previous:{title:"Plugin Models",permalink:"/docs/plugins/models"},next:{title:"Plugin Raw Fetch",permalink:"/docs/plugins/raw-fetch"}},d=[{value:"Install",id:"install",children:[]},{value:"Code Generation",id:"code-generation",children:[]},{value:"Directives",id:"directives",children:[]},{value:"Dependencies",id:"dependencies",children:[]}],p={rightToc:d};function m(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"This plugin is used to generate a series of ",Object(i.b)("inlineCode",{parentName:"p"},"typescript")," functions that can be used to validate a JSON model. It can be used as a driven step to make sure that the JSON sent over the wire matches your schema. "),Object(i.b)("h2",{id:"install"},"Install"),Object(i.b)(s.a,{defaultValue:"yarn",values:[{label:"Yarn",value:"yarn"},{label:"npm",value:"npm"}],mdxType:"Tabs"},Object(i.b)(l.a,{value:"yarn",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"yarn add @sdr/validate-models\n"))),Object(i.b)(l.a,{value:"npm",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"npm install @sdr/validate-models\n")))),Object(i.b)("hr",null),Object(i.b)("h2",{id:"code-generation"},"Code Generation"),Object(i.b)(o.a,{plugin:"validate-models",mdxType:"CodeGenerator"}),Object(i.b)("h2",{id:"directives"},"Directives"),Object(i.b)("p",null,"This plugin does not include any directives."),Object(i.b)("h2",{id:"dependencies"},"Dependencies"),Object(i.b)("p",null,Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/plugins/controller"}),"@sdr/controller")))}m.isMDXComponent=!0},124:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return _}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),u=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s({},t,{},e)),n},d=function(e){var t=u(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,_=d["".concat(o,".").concat(m)]||d[m]||p[m]||i;return n?a.a.createElement(_,s({ref:t},c,{components:n})):a.a.createElement(_,s({ref:t},c))}));function _(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},127:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return m}));n(12);var r=n(172),a=n(164),i=n(125),o=n(135);const s=/^Maybe<(.*?)>$/,l=/^Array<(.*?)>$/,c=/^Scalars\['(.*?)'\]$/,u=["Query","Mutation","Subscription"],d=["ID","String","Boolean","Int","Float"],p=["ID","Int","Float"];class m extends o.a{constructor(e,t,n={}){super(e,t,Object.assign({avoidOptionals:t.avoidOptionals||!1,maybeValue:t.maybeValue||"T | null",constEnums:t.constEnums||!1,enumsAsTypes:t.enumsAsTypes||!1,immutableTypes:t.immutableTypes||!1,declarationKind:{type:"class",interface:"abstract class",arguments:"class",input:"class",scalar:"type"}},n||{})),a(this);const r=Object.values(e.getTypeMap()).map(e=>e instanceof i.a?e.name:void 0).filter(e=>e);this.setArgumentsTransformer(new o.b(this.scalars,this.convertName,this.config.avoidOptionals.object,this.config.immutableTypes,null,r,this.config.enumPrefix,this.config.enumValues)),this.setDeclarationBlockConfig({enumNameValueSeparator:" ="})}ObjectTypeDefinition(e,t,n){const r=n[t];let a=this.getObjectTypeDeclarationBlock(e,r);if(-1===u.indexOf(e.name)){const e=r.interfaces.map(e=>this.convertName(e));let t="";e.length>1?t=`{ implements: [${e.join(", ")}] }`:1===e.length&&(t=`{ implements: ${e[0]} }`)}return[a.string,this.buildArgumentsBlock(r)].filter(e=>e).join("\n\n")}InputObjectTypeDefinition(e){return this.getInputObjectDeclarationBlock(e).string}getArgumentsObjectDeclarationBlock(e,t,n){return new r.b(this._declarationBlockConfig).export().asKind(this._parsedConfig.declarationKind.arguments).withName(this.convertName(t)).withComment(e.description).withBlock(n.arguments.map(e=>this.InputValueDefinition(e)).join("\n"))}getArgumentsObjectTypeDefinition(e,t,n){return this.getArgumentsObjectDeclarationBlock(e,t,n).string}InterfaceTypeDefinition(e,t,n){const r=n[t];return[this.getInterfaceTypeDeclarationBlock(e,r).string,this.buildArgumentsBlock(r)].filter(e=>e).join("\n\n")}buildTypeString(e){return e.isArray||e.isScalar||e.isNullable||(e.type=`FixDecorator<${e.type}>`),e.isScalar&&(e.type=`Scalars['${e.type}']`),e.isArray&&(e.type=`Array<${e.type}>`),e.isNullable&&(e.type=`Maybe<${e.type}>`),e.type}parseType(t){const n=t;if("NamedType"===n.kind)return{type:n.name.value,isNullable:!0,isArray:!1,isScalar:d.includes(n.name.value)};if("NonNullType"===n.kind)return Object.assign(Object.assign({},this.parseType(n.type)),{isNullable:!1});if("ListType"===n.kind)return Object.assign(Object.assign({},this.parseType(n.type)),{isArray:!0,isNullable:!0});const r=!!t.match(s),a=t.replace(s,"$1"),i=!!a.match(l),o=a.replace(l,"$1"),u=!!o.match(c);return{type:o.replace(c,(t,n)=>{if(p.includes(n))return`TypeGraphQL.${n}`;if(e[n])return n;if(this.scalars[n])return this.scalars[n];throw new Error(`Unknown scalar type ${n}`)}),isNullable:r,isArray:i,isScalar:u}}fixDecorator(e,t){return e.isArray||e.isNullable||e.isScalar?t:`FixDecorator<${t}>`}FieldDefinition(e,t,n){let a=e.type;const i=Object(r.f)(e.description,1),o=this.parseType(a);return a=this.fixDecorator(o,a),i+Object(r.e)(`${this.config.immutableTypes?"readonly ":""}${e.name}!: ${a};`)}InputValueDefinition(e,t,n){let a=e.type;const i=Object(r.f)(e.description,1),o=this.parseType(a),s=(o.isScalar&&p.includes(o.type)?o.type:o.type,e.name.kind?e.name.value:e.name),l=a.kind?this.buildTypeString(o):this.fixDecorator(o,a);return i+Object(r.e)(`${this.config.immutableTypes?"readonly ":""}${s}!: ${l};`)}EnumTypeDefinition(e){return super.EnumTypeDefinition(e)+"\n"}}}).call(this,n(48))},146:function(e,t,n){"use strict";var r=n(0),a=n.n(r),i=n(128),o=n.n(i),s=n(84),l=n.n(s);const c=37,u=39;t.a=function(e){const{block:t,children:n,defaultValue:i,values:s}=e,[d,p]=Object(r.useState)(i),m=[];return a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:o()("tabs",{"tabs--block":t})},s.map(({value:e,label:t})=>a.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":d===e,className:o()("tab-item",l.a.tabItem,{"tab-item--active":d===e}),key:e,ref:e=>m.push(e),onKeyDown:e=>((e,t,n)=>{switch(n.keyCode){case u:((e,t)=>{const n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()})(e,t);break;case c:((e,t)=>{const n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()})(e,t)}})(m,e.target,e),onFocus:()=>p(e),onClick:()=>p(e)},t))),a.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},r.Children.toArray(n).filter(e=>e.props.value===d)[0]))}},147:function(e,t,n){"use strict";var r=n(0),a=n.n(r);t.a=function(e){return a.a.createElement("div",null,e.children)}},148:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return b}));n(140),n(176),n(141);var r=n(0),a=n.n(r),i=n(167),o=n(188);e.hrtime=function(){return 1};var s=n(153).processPlugin,l=n(149),c=(l.plugin,l.config,n(154)),u=c.plugin,d=(c.config,n(150)),p=d.plugin,m=(d.config,n(152)),_=m.classesPlugin,f=m.handlersPlugin,y=n(151),h=y.plugin,v=(y.config,[{value:"models",label:"Models"},{value:"validate-models",label:"Validate Models"},{value:"raw-fetch",label:"Raw-Fetch"},{value:"serverless-api-base",label:"Serverless API Base"}]);function b(e){var t=e.plugin,n=Object(r.useState)(t||null),l=n[0],c=n[1],d=Object(r.useState)('type User @controller(path: "user") {\n  login(request: LoginRequest!): LoginResponse!\n    @request(method: POST, path: "login")\n}\n\ntype LoginRequest @model {\n  userType: UserTypes!\n  username: String!\n}\ntype LoginResponse @model {\n  authorized: Boolean!\n  jwt: String!\n}\nenum UserTypes @model{\n  admin, \n  user\n}\n'),m=d[0],y=d[1],b=Object(r.useState)("var x=12;"),g=b[0],O=b[1];return Object(r.useEffect)((function(){try{var e=[];switch(l){case"raw-fetch":e.push({name:"@sdr/raw-fetch",method:"index",body:{plugin:p}});break;case"models":e.push({name:"@sdr/models",method:"index",body:{plugin:u}});break;case"serverless-api-base":e.push({name:"@sdr/serverless-api-base",method:"index",body:{plugin:_}}),e.push({name:"@sdr/serverless-api-base",method:"index",body:{plugin:f}}),e.push({name:"@sdr/models",method:"index",body:{plugin:u}});break;case"validate-models":e.push({name:"@sdr/validate-models",method:"index",body:{plugin:h}});break;default:return void O("Select a plugin above")}var t=s("directive @request(method: Method, path: String) on FIELD_DEFINITION\ndirective @controller(path: String) on OBJECT\ndirective @model on OBJECT | UNION | ENUM | INTERFACE | INPUT_OBJECT\n\ndirective @auth on FIELD_DEFINITION\n\nenum Method {\n  POST\n  GET\n  DELETE\n  PUT\n}\n\r\n"+m,e,{config:{}},!0,{tabWidth:2,singleQuote:!0,printWidth:120,bracketSpacing:!1,trailingComma:"es5",jsxBracketSameLine:!0});O(t)}catch(n){O(n.toString())}}),[m,l]),a.a.createElement(a.a.Fragment,null,!t&&a.a.createElement("div",null,a.a.createElement(o.a,{style:{width:"100%"},value:v.find((function(e){return e.value===l})),onChange:function(e){c(e.value)},options:v,placeholder:"Select Plugin"})),a.a.createElement("div",{className:"rowIfScreen"},a.a.createElement("div",{style:{flex:1}},a.a.createElement("div",{className:"code-header"},"GraphQL Schema"),a.a.createElement(i.ControlledEditor,{height:"50vh",theme:"dark",language:"graphql",value:m,onChange:function(e,t){return y(t)},options:{minimap:{enabled:!1}}})),a.a.createElement("div",{style:{flex:1}},a.a.createElement("div",{className:"code-header"},"Generated Code"),a.a.createElement(i.ControlledEditor,{height:"50vh",theme:"dark",language:"typescript",value:g,options:{readOnly:!0,minimap:{enabled:!1}}}))))}}).call(this,n(136))},149:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.plugin=function(e){},t.config={}},150:function(e,t,n){"use strict";n.r(t),n.d(t,"plugin",(function(){return a})),n.d(t,"config",(function(){return i}));n(130),n(140);var r=n(131);function a(e,t){return r.render("/* This file was generated by https://github.com/schema-driven-rest/plugin-raw-fetch */\n/* tslint:disable */\nimport {BaseClient,ControllerOptions} from '<%=baseClientLocation%>';\n\n<% for(const type of types) { %>\n    <%\n        const controllerName = type.name;\n        const {\n            parameters: [{value: controllerPath}],\n        } = type.directives.find(a => a.name === 'controller');\n\n    %>\n\nexport class <%= type.name %>Client extends BaseClient {\n\n    constructor(options:ControllerOptions){\n        super(options);\n    }\n\n    <% for(const method of type.methods) { %>\n        <%\n            const requestDirective = method.directives.find(a => a.name === 'request');\n            const requiresAuth = !!method.directives.find(a => a.name === 'auth');\n            const methodName = method.name;\n            const requestType = method.arguments[0].type;\n            const returnType = method.returnType.type;\n\n            if (!requestDirective) {\n                throw `This plugin requires all methods to have a request directive. ${method.name} is missing.`;\n            }\n            const methodPath = requestDirective.parameters.find(parameter => parameter.name === 'path').value;\n            const methodType = requestDirective.parameters.find(parameter => parameter.name === 'method').value;\n\n        %>\n\n    async <%= methodName %>(model: <%= requestType %>):Promise<<%= returnType %>>{\n        try{\n            let url = this.options.baseUrl + '/<%=controllerPath%>/<%= methodPath %>?';\n            const options = {\n                method: \"<%= methodType %>\",\n                headers: {\n                    \"Content-Type\": \"application/json\",\n                    \"Accept\": \"application/json\"\n                }\n            } as RequestInit;\n            <% if(methodType.toUpperCase() === 'GET') { %>\n                url += Object.keys(model)\n                .filter(key => !!(model as any)[key])\n                .map(key => `${key}=${encodeURIComponent((model as any)[key])}`)\n                .join('&');\n            <% } else { %>\n                options.body = JSON.stringify(model);\n            <% } %>\n\n            const response = await fetch(url, await this.transformOptions(options));\n\n            const status = response.status;\n            const headers: any = {};\n\n            if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => headers[k] = v); };\n\n            const responseText = await response.text();\n\n            if (status === 200) {\n                return JSON.parse(responseText)\n            }\n\n            else {\n                try {\n                    const body = JSON.parse(responseText);\n                    throw body;\n                } catch (ex) {\n                    throw ex;\n                }\n            }\n        }\n        catch(ex){\n            throw ex;\n        }\n    }\n    <% } %>\n}\n\n\n<% } %>\n",{types:e.types.filter((function(e){return e.directives.find((function(e){return"controller"===e.name}))})),baseClientLocation:t.baseClientLocation},{})}var i={dependsOn:["@sdr/controller"]}},151:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"plugin",(function(){return plugin})),__webpack_require__.d(__webpack_exports__,"config",(function(){return config}));var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(142),core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0__),core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(143),core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1__),core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(12),core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_2__),core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(134),core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_3__),core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(130),core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_4__),graphql__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(195),validateField=function e(t,n,r){var a="";switch(n.kind){case"NamedType":switch(r.optional&&(a+="\n    if(model."+t+"!==null && model."+t+" !==undefined){\n    "),r.noFieldCount||(a+="fieldCount++;"),n.name.value){case"String":a+="if((typeof model."+t+") !== 'string'){return false;}";break;case"Boolean":a+="if((typeof model."+t+") !== 'boolean'){return false;}";break;case"Int":case"Float":a+="if((typeof model."+t+") !== 'number'){return false;}";break;default:a+="if(validate"+n.name.value+"(model."+t+")){return false;}"}r.optional&&(a+="}");break;case"ListType":r.optional&&(a+="\n    if(model."+t+"!==null && model."+t+" !==undefined){ \n    "),r.noFieldCount||(a+="fieldCount++;"),a+="if(!Array.isArray(model."+t+")){return false;}",a+="for(let ind"+r.arrayFieldIndex+"=0;ind"+r.arrayFieldIndex+"<model."+t+".length;ind"+r.arrayFieldIndex+"++){\n        "+e(t+"[ind"+r.arrayFieldIndex+"]",n.type,Object.assign(Object.assign({},r),{noFieldCount:!0,arrayFieldIndex:r.arrayFieldIndex+1}))+"\n      }",r.optional&&(a+="}");break;case"NonNullType":a+="if(model."+t+"===null || model."+t+"===undefined){return false;}",a+=e(t,n.type,Object.assign(Object.assign({},r),{optional:!1}))}return a};function plugin(options,config){var _a,schema=Object(graphql__WEBPACK_IMPORTED_MODULE_5__.c)(options.schemaString),typeMap=schema.getTypeMap();for(var key in typeMap)(null===(_a=typeMap[key].astNode)||void 0===_a?void 0:_a.directives.some((function(e){return"model"===e.name.value})))||delete typeMap[key];var validation="/* This file was generated by https://github.com/schema-driven-rest/plugin-validate-models */\n  /* tslint:disable */\n";for(var _key in typeMap){var type=typeMap[_key];if(type.astNode.directives.some((function(e){return"model"===e.name.value}))){if(validation+="export function validate"+type.name+"(model: any){","ObjectTypeDefinition"===type.astNode.kind||"InterfaceTypeDefinition"===type.astNode.kind||"InputObjectTypeDefinition"===type.astNode.kind){validation+="if(model===null || model ===undefined) return false;",validation+="let fieldCount=0;";for(var _iterator=type.astNode.fields,_isArray=Array.isArray(_iterator),_i=0,_iterator=_isArray?_iterator:_iterator[Symbol.iterator]();;){var _ref;if(_isArray){if(_i>=_iterator.length)break;_ref=_iterator[_i++]}else{if(_i=_iterator.next(),_i.done)break;_ref=_i.value}var field=_ref;validation+=validateField(field.name.value,field.type,{optional:!0,noFieldCount:!1,arrayFieldIndex:1})}if(type.astNode.interfaces)for(var _iterator2=type.astNode.interfaces,_isArray2=Array.isArray(_iterator2),_i2=0,_iterator2=_isArray2?_iterator2:_iterator2[Symbol.iterator]();;){var _ref2;if(_isArray2){if(_i2>=_iterator2.length)break;_ref2=_iterator2[_i2++]}else{if(_i2=_iterator2.next(),_i2.done)break;_ref2=_i2.value}var _interface=_ref2;validation+="if(validate"+_interface.name.value+"(model)) return true;"}validation+="if(Object.keys(model).length !== fieldCount) return false;",validation+="return true;"}if("EnumTypeDefinition"===type.astNode.kind){for(var values=eval("type.astNode.values"),_iterator3=values,_isArray3=Array.isArray(_iterator3),_i3=0,_iterator3=_isArray3?_iterator3:_iterator3[Symbol.iterator]();;){var _ref3;if(_isArray3){if(_i3>=_iterator3.length)break;_ref3=_iterator3[_i3++]}else{if(_i3=_iterator3.next(),_i3.done)break;_ref3=_i3.value}var value=_ref3;validation+="if(model==='"+value.name.value+"') return true;"}validation+="return false;"}if("UnionTypeDefinition"===type.astNode.kind){for(var _iterator4=type.astNode.types,_isArray4=Array.isArray(_iterator4),_i4=0,_iterator4=_isArray4?_iterator4:_iterator4[Symbol.iterator]();;){var _ref4;if(_isArray4){if(_i4>=_iterator4.length)break;_ref4=_iterator4[_i4++]}else{if(_i4=_iterator4.next(),_i4.done)break;_ref4=_i4.value}var t=_ref4;validation+="if(validate"+t.name.value+"(model)) return true;"}validation+="return false;"}validation+="}"}}return validation}var config={dependsOn:["@sdr/controller"]}},152:function(e,t,n){"use strict";n.r(t);var r=n(131);function a(e,t){return r.render("/* This file was generated by https://github.com/schema-driven-rest/plugin-serverless-api-base */\n/* tslint:disable */\n\n<% for(const type of types) { %>\n    <%\n        const controllerName = type.name;\n        const {\n            parameters: [{value: controllerPath}],\n        } = type.directives.find(a => a.name === 'controller');\n\n    %>\n\nexport abstract class Base<%= type.name %>Controller {\n\n    <% for(const method of type.methods) { %>\n        <%\n            const requestDirective = method.directives.find(a => a.name === 'request');\n            const requiresAuth = !!method.directives.find(a => a.name === 'auth');\n            const methodName = method.name;\n            const requestType = method.arguments[0].type;\n            const returnType = method.returnType.type;\n\n            if (!requestDirective) {\n                throw `This plugin requires all methods to have a request directive. ${method.name} is missing.`;\n            }\n            const methodPath = requestDirective.parameters.find(parameter => parameter.name === 'path').value;\n            const methodType = requestDirective.parameters.find(parameter => parameter.name === 'method').value;\n\n        %>\n\n    abstract <%= methodName %>(model: <%= requestType %>):Promise<<%= returnType %>>;\n    <% } %>\n}\n\n\n<% } %>\n",{types:e.types.filter(e=>e.directives.find(e=>"controller"===e.name))},{})}const i={dependsOn:["@sdr/controller"]};function o(e,t){return r.render("/* This file was generated by https://github.com/schema-driven-rest/plugin-serverless-api-base */\n\n<% for(const type of types) { %>\n    <%\n        const controllerName = type.name;\n        const {\n            parameters: [{value: controllerPath}],\n        } = type.directives.find(a => a.name === 'controller');\n\n    %>\nimport {<%=controllerName%>Controller} from './api/<%=controllerName%>Controller';\n\n<% } %>\n\n<% for(const type of types) { %>\n    <%\n        const controllerName = type.name;\n        const {\n            parameters: [{value: controllerPath}],\n        } = type.directives.find(a => a.name === 'controller');\n\n    %>\n    <% for(const method of type.methods) { %>\n        <%\n            const requestDirective = method.directives.find(a => a.name === 'request');\n            const requiresAuth = !!method.directives.find(a => a.name === 'auth');\n            const methodName = method.name;\n            const requestType = method.arguments[0].type;\n            const returnType = method.returnType.type;\n\n            if (!requestDirective) {\n                throw `This plugin requires all methods to have a request directive. ${method.name} is missing.`;\n            }\n            const methodPath = requestDirective.parameters.find(parameter => parameter.name === 'path').value;\n            const methodType = requestDirective.parameters.find(parameter => parameter.name === 'method').value;\n\n        %>\n export const <%=controllerName%>_<%=methodName%> = new <%=controllerName%>Controller().<%=methodName%>\n    <% } %>\n<% } %>\n",{types:e.types.filter(e=>e.directives.find(e=>"controller"===e.name))},{})}const s={dependsOn:["@sdr/controller"]};function l(e,t){return r.render("# This file was generated by https://github.com/schema-driven-rest/plugin-serverless-api-base\n\n<% for(const type of types) { %>\n    <%\n        const controllerName = type.name;\n        const {\n            parameters: [{value: controllerPath}],\n        } = type.directives.find(a => a.name === 'controller');\n\n    %>\n    <% for(const method of type.methods) { %>\n        <%\n            const requestDirective = method.directives.find(a => a.name === 'request');\n            const requiresAuth = !!method.directives.find(a => a.name === 'auth');\n            const methodName = method.name;\n            const requestType = method.arguments[0].type;\n            const returnType = method.returnType.type;\n\n            if (!requestDirective) {\n                throw `This plugin requires all methods to have a request directive. ${method.name} is missing.`;\n            }\n            const methodPath = requestDirective.parameters.find(parameter => parameter.name === 'path').value;\n            const methodType = requestDirective.parameters.find(parameter => parameter.name === 'method').value;\n\n        %>\n    <%=controllerName%>_<%=methodName%>:\n       handler: handler.<%=controllerName%>_<%=methodName%>\n       events:\n         - http:\n             path: <%=controllerPath%>/<%=methodPath%>\n             method: <%=methodType%>\n             cors:\n               origin: '*'\n       <% } %>\n<% } %>\n",{types:e.types.filter(e=>e.directives.find(e=>"controller"===e.name))},{})}const c={dependsOn:["@sdr/controller"]};n.d(t,"classesPlugin",(function(){return a})),n.d(t,"classesConfig",(function(){return i})),n.d(t,"handlersPlugin",(function(){return o})),n.d(t,"handlersConfig",(function(){return s})),n.d(t,"serverlessPlugin",(function(){return l})),n.d(t,"serverlessConfig",(function(){return c}))},153:function(e,t,n){"use strict";n.r(t);n(130),n(142),n(143),n(12),n(134);var r=n(178),a=n(179),i=n(195),o=n(202);n(49),n(141);function s(e){switch(e.kind){case"Variable":throw"variable not supported";case"IntValue":return parseInt(e.value);case"FloatValue":return parseFloat(e.value);case"StringValue":case"BooleanValue":return e.value;case"NullValue":return null;case"EnumValue":return e.value;case"ListValue":return e.values.map(s);case"ObjectValue":return e.fields.reduce((function(e,t){var n;return Object.assign(Object.assign({},e),((n={})[t.name.value]=s(t.value),n))}),{})}}function l(e){switch(e.kind){case"NamedType":return{type:e.name.value,array:!1,nonNull:!1};case"ListType":return Object.assign(Object.assign({},l(e.type)),{array:!0});case"NonNullType":return Object.assign(Object.assign({},l(e.type)),{nonNull:!0})}}function c(e){return Object.assign(Object.assign({},l(e.type)),{name:e.name.value,defaultValue:e.defaultValue?s(e.defaultValue):void 0})}function u(e){var t;return{name:e.name.value,parameters:null===(t=e.arguments)||void 0===t?void 0:t.map((function(e){return{name:e.name.value,value:s(e.value)}}))}}function d(e){var t,n;return{name:e.name.value,directives:null!==(n=null===(t=e.directives)||void 0===t?void 0:t.map(u))&&void 0!==n?n:[],methods:e.fields.map((function(e){var t,n;return{name:e.name.value,arguments:e.arguments.map(c),returnType:l(e.type),directives:null!==(n=null===(t=e.directives)||void 0===t?void 0:t.map(u))&&void 0!==n?n:[]}}))}}function p(e,t,n,s,l){var c,u=Object(i.c)(e),p=Object(o.parse)(e),m={schema:u,document:p,schemaString:e,types:p.definitions.filter((function(e){return"ObjectTypeDefinition"===e.kind})).map((function(e){return d(e)}))},_="",f=t,y=Array.isArray(f),h=0;for(f=y?f:f[Symbol.iterator]();;){var v;if(y){if(h>=f.length)break;v=f[h++]}else{if((h=f.next()).done)break;v=h.value}var b=v;_+=null!==(c=b.body.plugin(m,n.config[b.name+("index"===b.method?"":b.method)]||{}))&&void 0!==c?c:"",_+="\r\n"}return s&&(l.parser="typescript",l&&(_=r.format(_,Object.assign(Object.assign({},l),{plugins:[a]})))),_}n.d(t,"processPlugin",(function(){return p})),n.d(t,"buildType",(function(){return d}))},154:function(e,t,n){"use strict";n.r(t);var r=n(219),a=n(202),i=n(163),o=n(127),s=n(135);var l=n(195);function c(e){var t,n,c,u,d;const p=Object(l.c)(e.schemaString);let m=p.getTypeMap();for(const r in m)(null===(t=m[r].astNode)||void 0===t?void 0:t.directives.some(e=>"model"===e.name.value))||delete m[r];const _=((e,t,n)=>{const l=new o.a(e,n),c=Object(r.b)(e),u=Object(a.parse)(c),d=`export type Maybe<T> = ${l.config.maybeValue};`,p=Object(i.c)(u,{leave:l}),m=Object(s.c)(e,t,n),_=l.scalarsDefinition;let f=p.definitions;return f.sort((e,t)=>-1!==e.indexOf("@TypeGraphQL.InterfaceType()")?-1:1),{prepend:[...l.getEnumsImports(),d,"type FixDecorator<T> = T;"],content:[_,...f,...m].join("\n")}})(p,[],{skipTypename:!0});return"/* This file was generated by https://github.com/schema-driven-rest/plugin-models */\r\n"+(null!==(c=null===(n=_.prepend)||void 0===n?void 0:n.join("\r\n"))&&void 0!==c?c:"")+_.content+"\r\n"+(null!==(d=null===(u=_.append)||void 0===u?void 0:u.join("\r\n"))&&void 0!==d?d:"")}n.d(t,"plugin",(function(){return c})),n.d(t,"config",(function(){return u}));const u={dependsOn:["@sdr/controller"]}},171:function(e,t){function n(e){return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}))}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id=171},187:function(e,t){}}]);