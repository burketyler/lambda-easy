"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[992],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return d}});var i=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=i.createContext({}),u=function(e){var n=i.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},l=function(e){var n=u(e.components);return i.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},g=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),g=u(t),d=r,m=g["".concat(c,".").concat(d)]||g[d]||p[d]||a;return t?i.createElement(m,o(o({ref:n},l),{},{components:t})):i.createElement(m,o({ref:n},l))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=g;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var u=2;u<a;u++)o[u]=t[u];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}g.displayName="MDXCreateElement"},7809:function(e,n,t){t.r(n),t.d(n,{assets:function(){return l},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var i=t(3117),r=t(102),a=(t(7294),t(3905)),o=["components"],s={},c="Plugins",u={unversionedId:"usage/plugins",id:"usage/plugins",title:"Plugins",description:"Plugins are a way to package and share code used to bootstrap a Bigsby instance. A plugin is",source:"@site/docs/usage/plugins.mdx",sourceDirName:"usage",slug:"/usage/plugins",permalink:"/bigsby/docs/usage/plugins",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Lifecycle",permalink:"/bigsby/docs/usage/lifecycle"}},l={},p=[{value:"Modules",id:"modules",level:2},{value:"Composition",id:"composition",level:3},{value:"Registration",id:"registration",level:3}],g={toc:p};function d(e){var n=e.components,t=(0,r.Z)(e,o);return(0,a.kt)("wrapper",(0,i.Z)({},g,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"plugins"},"Plugins"),(0,a.kt)("p",null,"Plugins are a way to package and share code used to bootstrap a Bigsby instance. A plugin is\nregistered using the ",(0,a.kt)("inlineCode",{parentName:"p"},"registerPlugin")," method, which accepts a ",(0,a.kt)("inlineCode",{parentName:"p"},"BigsbyPluginRegistration"),"\nobject."),(0,a.kt)("p",null,"A plugin is composed of a ",(0,a.kt)("inlineCode",{parentName:"p"},"name")," and an ",(0,a.kt)("inlineCode",{parentName:"p"},"onRegister")," method. The ",(0,a.kt)("inlineCode",{parentName:"p"},"onRegister")," method\naccepts two arguments: the Bigsby instance it's being registered to, as well as any\noptions that were declared as part of the registration."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'const bigsby = new Bigsby();\n\nasync function addJwtAuthScheme(\n  instance: BigsbyInstance,\n  options: Record<string, unknown>\n): Promise<void> {\n  instance.registerAuthMethod({\n    name: "jwt",\n    authenticator: async ({ event }: RequestContext) => {\n      return verifyJwt(event.headers.authorization, options.secret);\n    },\n  });\n}\n\nconst myPlugin: BigsbyPlugin = {\n  name: "my-plugin",\n  onRegister: addJwtAuthScheme,\n};\n\nbigsby.registerPlugin({ plugin: myPlugin, options: { secret: "mySecretKey" } });\n')),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Plugins will execute in the order of their registration when your handler\ninitializes."))),(0,a.kt)("h2",{id:"modules"},"Modules"),(0,a.kt)("h3",{id:"composition"},"Composition"),(0,a.kt)("p",null,"A Bigsby plugin distributed as an npm package is defined by a ",(0,a.kt)("inlineCode",{parentName:"p"},"default")," export from the\nmodule index containing the Bigsby plugin. The example above can be converted to a distributable\npackage by adding the below to the root ",(0,a.kt)("inlineCode",{parentName:"p"},"index.js"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'export default {\n  name: "bigsby-plugin-jwt-auth",\n  onRegister: async (\n  instance: BigsbyInstance,\n  options: Record<string, unknown>\n): Promise<void> => {\n    instance.registerAuthMethod({\n      name: "jwt",\n      authenticator: async ({ event }: RequestContext) => {\n        return verifyJwt(event.headers.authorization, options.secret);\n      },\n    });\n  },\n} as BigsbyPlugin;\n')),(0,a.kt)("h3",{id:"registration"},"Registration"),(0,a.kt)("p",null,"Bigsby plugins can be consumed directly from the ",(0,a.kt)("inlineCode",{parentName:"p"},"node_modules")," folder by supplying the package\nname instead of a plugin object when registering on the Bigsby instance."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'const bigsby = new Bigsby();\n\nbigsby.registerPlugin({ plugin: "bigsby-plugin-jwt-auth", options: { secret: "mySecretKey" } });\n')))}d.isMDXComponent=!0}}]);