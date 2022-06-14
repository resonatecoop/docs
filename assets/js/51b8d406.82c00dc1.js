"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[488],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return d}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=u(r),d=a,f=m["".concat(l,".").concat(d)]||m[d]||p[d]||o;return r?n.createElement(f,s(s({ref:t},c),{},{components:r})):n.createElement(f,s({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var u=2;u<o;u++)s[u]=r[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3142:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return p}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),s=["components"],i={sidebar_position:10,title:"Image Process Queue"},l=void 0,u={unversionedId:"basics/image-process-queue",id:"basics/image-process-queue",title:"Image Process Queue",description:"Explore the image-process-queue repository...",source:"@site/docs/basics/image-process-queue.md",sourceDirName:"basics",slug:"/basics/image-process-queue",permalink:"/docs/basics/image-process-queue",draft:!1,editUrl:"https://github.com/resonatecoop/image-process-queue/edit/main/README.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10,title:"Image Process Queue"},sidebar:"tutorialSidebar",previous:{title:"Audio Process Queue",permalink:"/docs/basics/audio-process-queue"},next:{title:"Congratulations",permalink:"/docs/basics/congratulations"}},c={},p=[{value:"Install",id:"install",level:2},{value:"Build (babel)",id:"build-babel",level:2},{value:"Env",id:"env",level:2},{value:"Usage",id:"usage",level:2},{value:"Test",id:"test",level:2},{value:"See also",id:"see-also",level:2},{value:"LICENSE",id:"license",level:2}],m={toc:p};function d(e){var t=e.components,r=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Explore the ",(0,o.kt)("code",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/resonatecoop/image-process-queue"},"image-process-queue"))," repository..."),(0,o.kt)("h1",{id:"image-processing"},"Image processing"),(0,o.kt)("p",null,"Convert image files to jpeg, webp following a set of variants"),(0,o.kt)("h2",{id:"install"},"Install"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"npm install\n")),(0,o.kt)("h2",{id:"build-babel"},"Build (babel)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"npm run build\n")),(0,o.kt)("h2",{id:"env"},"Env"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"cp .env.example .env\n")),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"node ./lib/index.js run --name my-queue-name\n")),(0,o.kt)("h2",{id:"test"},"Test"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"npm test\n")),(0,o.kt)("h2",{id:"see-also"},"See also"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/OptimalBits/bull"},"bull")," Queue system"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/taskforcesh/taskforce-connector"},"taskforce-connector")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/lovell/sharp"},"sharp")," High performance Node.js image processing")),(0,o.kt)("h2",{id:"license"},"LICENSE"),(0,o.kt)("p",null,"MIT"))}d.isMDXComponent=!0}}]);