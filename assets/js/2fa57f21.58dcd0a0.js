"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[871],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=s(n),d=r,h=m["".concat(p,".").concat(d)]||m[d]||u[d]||o;return n?a.createElement(h,l(l({ref:t},c),{},{components:n})):a.createElement(h,l({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7470:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_position:2,title:"Beam"},l=void 0,i={unversionedId:"active-development/beam",id:"active-development/beam",title:"Beam",description:"Explore the beam desktop/web app repository...",source:"@site/docs/active-development/beam.md",sourceDirName:"active-development",slug:"/active-development/beam",permalink:"/docs/active-development/beam",draft:!1,editUrl:"https://github.com/resonatecoop/beam/edit/main/README.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Beam"},sidebar:"tutorialSidebar",previous:{title:"API",permalink:"/docs/active-development/api"},next:{title:"Mobile",permalink:"/docs/active-development/mobile"}},p={},s=[{value:"Development",id:"development",level:2},{value:"Logging in.",id:"logging-in",level:3},{value:"Production build",id:"production-build",level:3},{value:"Tests",id:"tests",level:3},{value:"Electron",id:"electron",level:2},{value:"Preparing a release",id:"preparing-a-release",level:2}],c={toc:s};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Explore the ",(0,r.kt)("code",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/resonatecoop/beam"},"beam"))," desktop/web app repository..."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\ud83d\udee0 ",(0,r.kt)("strong",{parentName:"p"},"Status: Active Development | Stable")),(0,r.kt)("p",{parentName:"blockquote"},"This project is under active development."),(0,r.kt)("p",{parentName:"blockquote"},"\u26a0\ufe0f \u26a0\ufe0f The ",(0,r.kt)("inlineCode",{parentName:"p"},"main")," branch works with ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/resonatecoop/api"},"api"),". If you want to fix a bug in the currently ",(0,r.kt)("strong",{parentName:"p"},"live")," version of Beam, which works with the active id.resonate.coop services, please submit them to the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/resonatecoop/beam/tree/v0.5-maintenance"},"v0.5-maintenance")," branch.")),(0,r.kt)("h1",{id:"beam"},"Beam"),(0,r.kt)("p",null,"This is a music player that uses Resonate's API."),(0,r.kt)("p",null,"This project was bootstrapped with ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/facebook/create-react-app"},"Create React App"),"."),(0,r.kt)("p",null,"View the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/resonatecoop/beam/projects/1"},"project board")," where work is tracked for this repository."),(0,r.kt)("h2",{id:"development"},"Development"),(0,r.kt)("p",null,"Install yarn if you don't yet have it on your machine by running:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npx install yarn\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git clone git@github.com:resonatecoop/beam.git\ncd beam\nyarn install\nyarn start\n")),(0,r.kt)("p",null,"Runs the app in the development mode.\\\nOpen ",(0,r.kt)("a",{parentName:"p",href:"http://localhost:8080"},"http://localhost:8080")," to view it in the browser."),(0,r.kt)("p",null,"The page will reload if you make edits.\\\nYou will also see any lint errors in the console."),(0,r.kt)("h3",{id:"logging-in"},"Logging in."),(0,r.kt)("p",null,"By default, most of the app will work without logging in, but if you want to log in you'll need a ",(0,r.kt)("inlineCode",{parentName:"p"},"client_secret"),". Logging in will let you play complete songs, manage your playlists, etc."),(0,r.kt)("p",null,"First, create a local .env file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cp .env .env.local\n")),(0,r.kt)("p",null,"Then, you'll need to set ",(0,r.kt)("inlineCode",{parentName:"p"},"REACT_APP_CLIENT_SECRET")," to be the client \\\nsecret for your client app. If you're working on beam directly, \\\nyou can message ",(0,r.kt)("a",{parentName:"p",href:"https://community.resonate.coop/u/psi/summary"},"Si")," \\\nto get a client secret."),(0,r.kt)("h3",{id:"production-build"},"Production build"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn build\n")),(0,r.kt)("p",null,"You can then run that locally with"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn serve\n")),(0,r.kt)("h3",{id:"tests"},"Tests"),(0,r.kt)("p",null,"for unit tests:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn test\n")),(0,r.kt)("p",null,"for cypress tests:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn cypress:open\n")),(0,r.kt)("h2",{id:"electron"},"Electron"),(0,r.kt)("p",null,"Set up using ",(0,r.kt)("a",{parentName:"p",href:"https://mmazzarolo.com/blog/2021-08-12-building-an-electron-application-using-create-react-app/"},"this blog post")),(0,r.kt)("p",null,"To try it locally do:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn electron:start\n")),(0,r.kt)("p",null,"To build it for your system:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn electron:package:<linux|mac|windows>\n")),(0,r.kt)("h2",{id:"preparing-a-release"},"Preparing a release"),(0,r.kt)("p",null,"In a distinct commit that ",(0,r.kt)("em",{parentName:"p"},"just")," bumps the version."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Edit the package.json with the new version ",(0,r.kt)("inlineCode",{parentName:"li"},"vx.x.x"),"."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"git commit -am vx.x.x")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"git tag vx.x.x")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"git push && git push --tags"))))}u.isMDXComponent=!0}}]);