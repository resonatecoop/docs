"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[386],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),u=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=u(r),m=n,f=d["".concat(i,".").concat(m)]||d[m]||p[m]||l;return r?a.createElement(f,s(s({ref:t},c),{},{components:r})):a.createElement(f,s({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,s=new Array(l);s[0]=d;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:n,s[1]=o;for(var u=2;u<l;u++)s[u]=r[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5201:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var a=r(7462),n=(r(7294),r(3905));const l={sidebar_position:10,title:"Audio Process Queue"},s=void 0,o={unversionedId:"basics/audio-process-queue",id:"basics/audio-process-queue",title:"Audio Process Queue",description:"Explore the audio-process-queue repository...",source:"@site/docs/basics/audio-process-queue.md",sourceDirName:"basics",slug:"/basics/audio-process-queue",permalink:"/docs/basics/audio-process-queue",draft:!1,editUrl:"https://github.com/resonatecoop/audio-process-queue/edit/main/README.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10,title:"Audio Process Queue"},sidebar:"tutorialSidebar",previous:{title:"Upload",permalink:"/docs/basics/upload"},next:{title:"Image Process Queue",permalink:"/docs/basics/image-process-queue"}},i={},u=[{value:"Install",id:"install",level:2},{value:"Install ffmpeg with libfdk_aac",id:"install-ffmpeg-with-libfdk_aac",level:2},{value:"Install redis",id:"install-redis",level:2},{value:"Build (babel)",id:"build-babel",level:2},{value:"Env",id:"env",level:2},{value:"Usage",id:"usage",level:2},{value:"Test",id:"test",level:2},{value:"See also",id:"see-also",level:2},{value:"LICENSE",id:"license",level:2}],c={toc:u};function p(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Explore the ",(0,n.kt)("code",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/resonatecoop/audio-process-queue"},"audio-process-queue"))," repository..."),(0,n.kt)("h1",{id:"audio-processing"},"Audio processing"),(0,n.kt)("p",null,"Convert audio files to streamable m4a using fluent-ffmpeg."),(0,n.kt)("h2",{id:"install"},"Install"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"npm install\n")),(0,n.kt)("h2",{id:"install-ffmpeg-with-libfdk_aac"},"Install ffmpeg with libfdk","_","aac"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"brew tap homebrew-ffmpeg/ffmpeg\nbrew install homebrew-ffmpeg/ffmpeg/ffmpeg --with-fdk-aac\n")),(0,n.kt)("h2",{id:"install-redis"},"Install redis"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"brew install redis\n")),(0,n.kt)("p",null,"Update your redis config to use a password."),(0,n.kt)("h2",{id:"build-babel"},"Build (babel)"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"npm run build\n")),(0,n.kt)("h2",{id:"env"},"Env"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"cp .env.example .env\n")),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"node ./lib/index.js run --name my-queue-name\n")),(0,n.kt)("h2",{id:"test"},"Test"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"npm test\n")),(0,n.kt)("h2",{id:"see-also"},"See also"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/OptimalBits/bull"},"bull")," Queue system"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/taskforcesh/taskforce-connector"},"taskforce-connector"))),(0,n.kt)("h2",{id:"license"},"LICENSE"),(0,n.kt)("p",null,"MIT"))}p.isMDXComponent=!0}}]);