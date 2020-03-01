(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{117:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return s})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return p}));var r=t(1),o=t(6),a=(t(0),t(122)),i={id:"configuration",title:"Configuration",sidebar_label:"Configuration"},s={id:"introduction/configuration",title:"Configuration",description:"The `sfr` cli looks for a `sfc.yml` config file at the root of your projects directory. It will look something like this:\r",source:"@site/docs\\introduction\\configuration.md",permalink:"/docs/introduction/configuration",editUrl:"https://github.com/schema-first-rest/schema-first-rest.github.io/edit/master/docs/introduction/configuration.md",sidebar_label:"Configuration",sidebar:"someSidebar",previous:{title:"Get Started",permalink:"/docs/introduction/getStarted"},next:{title:"Plugins",permalink:"/docs/introduction/plugins"}},c=[],l={rightToc:c};function p(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"sfr")," cli looks for a ",Object(a.b)("inlineCode",{parentName:"p"},"sfc.yml")," config file at the root of your projects directory. It will look something like this:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"schema: ./schema/*.graphql           # the schemas you want to act on\nprettier: ./.prettierrc              # an optional prettier file for js/ts files\nconfig:\n  @sfr/raw-fetch:                    # config values for the plugins\n    baseClientLocation: ./baseClient\ngenerates:\n  api/api.ts:                        # the name of the file to generate\n    plugins:                         # the plugins to use on this file \n      - @sfr/raw-fetch\n      - @sfr/models\n")),Object(a.b)("p",null,"The above ",Object(a.b)("inlineCode",{parentName:"p"},"sfc.yml")," file will create a file named ",Object(a.b)("inlineCode",{parentName:"p"},"api/api.ts")," that will contain the output from the ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/plugins/raw-fetch"}),"@sfr/raw-fetch")," and ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/plugins/models"}),"@sfr/models")," plugins. The output will look something like:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"/* This file was generated by https://github.com/schema-rest-first/plugin-raw-fetch */\n/* tslint:disable */\nimport {BaseClient, ControllerOptions} from './baseClient';\n\nexport class UserClient extends BaseClient {\n  constructor(options: ControllerOptions) {\n    super(options);\n  }\n\n  async login(model: LoginRequest): Promise<LoginResponse> {\n    try {\n      let url = this.options.baseUrl + '/user/login?';\n      const options = {\n        method: 'POST',\n        headers: {\n          'Content-Type': 'application/json',\n          Accept: 'application/json',\n        },\n      } as RequestInit;\n\n      options.body = JSON.stringify(model);\n\n      const response = await fetch(url, await this.transformOptions(options));\n\n      const status = response.status;\n      const headers: any = {};\n\n      if (response.headers && response.headers.forEach) {\n        response.headers.forEach((v: any, k: any) => (headers[k] = v));\n      }\n\n      const responseText = await response.text();\n\n      if (status === 200) {\n        return JSON.parse(responseText);\n      } else {\n        try {\n          const body = JSON.parse(responseText);\n          throw body;\n        } catch (ex) {\n          throw ex;\n        }\n      }\n    } catch (ex) {\n      throw ex;\n    }\n  }\n}\n\nexport type Maybe<T> = T | null;\ntype FixDecorator<T> = T; /** All built-in and custom scalars, mapped to their actual values */\nexport type Scalars = {\n  ID: string;\n  String: string;\n  Boolean: boolean;\n  Int: number;\n  Float: number;\n};\n\nexport class LoginResponse {\n  authorized!: Scalars['Boolean'];\n  jwt!: Scalars['String'];\n}\n\nexport class LoginRequest {\n  username!: Scalars['String'];\n}\n")))}p.isMDXComponent=!0},122:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return d}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=o.a.createContext({}),p=function(e){var n=o.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s({},n,{},e)),t},u=function(e){var n=p(e.components);return o.a.createElement(l.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},b=Object(r.forwardRef)((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(t),b=r,d=u["".concat(i,".").concat(b)]||u[b]||f[b]||a;return t?o.a.createElement(d,s({ref:n},l,{components:t})):o.a.createElement(d,s({ref:n},l))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=b;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<a;l++)i[l]=t[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);