"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[581],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=o.createContext({}),c=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(r),m=n,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||a;return r?o.createElement(f,i(i({ref:t},u),{},{components:r})):o.createElement(f,i({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var c=2;c<a;c++)i[c]=r[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6306:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var o=r(7462),n=r(3366),a=(r(7294),r(3905)),i=["components"],s={sidebar_position:2},l=void 0,c={unversionedId:"basics/website",id:"basics/website",title:"website",description:"Explore the Resonate website repository...",source:"@site/docs/basics/website.md",sourceDirName:"basics",slug:"/basics/website",permalink:"/documentation/docs/basics/website",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"stream",permalink:"/documentation/docs/basics/stream"},next:{title:"id",permalink:"/documentation/docs/basics/id"}},u={},p=[{value:"Tools",id:"tools",level:2},{value:"Node.js",id:"nodejs",level:3},{value:"Hugo v0.88.1",id:"hugo-v0881",level:3},{value:"Development",id:"development",level:2},{value:"Setup",id:"setup",level:3},{value:"Server",id:"server",level:3},{value:"Docker",id:"docker",level:2},{value:"Docker compose",id:"docker-compose",level:3},{value:"Contributors",id:"contributors",level:2},{value:"See also",id:"see-also",level:2},{value:"LICENSE",id:"license",level:2}],d={toc:p};function m(e){var t=e.components,r=(0,n.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Explore the Resonate ",(0,a.kt)("code",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/resonatecoop/website"},"website"))," repository..."),(0,a.kt)("h1",{id:"resonate-coop-website-resonatecoop"},"Resonate Coop website (resonate.coop)"),(0,a.kt)("h2",{id:"tools"},"Tools"),(0,a.kt)("h3",{id:"nodejs"},"Node.js"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://nodejs.org"},"nodejs.org")),(0,a.kt)("h3",{id:"hugo-v0881"},"Hugo v0.88.1"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://gohugo.io"},"gohugo.io")," The world\u2019s fastest framework for building websites"),(0,a.kt)("h2",{id:"development"},"Development"),(0,a.kt)("h3",{id:"setup"},"Setup"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"cd src && \\\nnpm install -g @babel/cli @babel/core postcss@7.x postcss-cli@7.x && \\\nnpm install\n")),(0,a.kt)("h3",{id:"server"},"Server"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"hugo server --baseURL http://localhost:1314 --environment development --port 1314\n")),(0,a.kt)("h2",{id:"docker"},"Docker"),(0,a.kt)("h3",{id:"docker-compose"},"Docker compose"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"docker-compose -f docker-compose-dev.yml up -d website\n")),(0,a.kt)("h2",{id:"contributors"},"Contributors"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Jase ",(0,a.kt)("a",{parentName:"li",href:"mailto:jase@jasecoop.com"},"jase@jasecoop.com")),(0,a.kt)("li",{parentName:"ul"},"Alex Crane ",(0,a.kt)("a",{parentName:"li",href:"mailto:alex@resonate.is"},"alex@resonate.is")),(0,a.kt)("li",{parentName:"ul"},"Augustin Godiscal ",(0,a.kt)("a",{parentName:"li",href:"mailto:auggod@resonate.is"},"auggod@resonate.is")),(0,a.kt)("li",{parentName:"ul"},"Timoth\xe9e Goguely ",(0,a.kt)("a",{parentName:"li",href:"mailto:timothee@goguely.com"},"timothee@goguely.com"))),(0,a.kt)("h2",{id:"see-also"},"See also"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://gohugo.io"},"gohugo.io")," The world\u2019s fastest framework for building websites"),(0,a.kt)("h2",{id:"license"},"LICENSE"),(0,a.kt)("p",null,"GPL-3.0-or-later"))}m.isMDXComponent=!0}}]);