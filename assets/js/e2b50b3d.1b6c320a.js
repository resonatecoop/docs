"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[187],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return d}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=l(r),d=o,h=m["".concat(p,".").concat(d)]||m[d]||u[d]||a;return r?n.createElement(h,s(s({ref:t},c),{},{components:r})):n.createElement(h,s({ref:t},c))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var l=2;l<a;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4205:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return u}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),s=["components"],i={sidebar_position:2,title:"Stream App"},p=void 0,l={unversionedId:"ecosystem/stream-app",id:"ecosystem/stream-app",title:"Stream App",description:"Explore the mobile & tablet stream-app repository...",source:"@site/docs/ecosystem/stream-app.md",sourceDirName:"ecosystem",slug:"/ecosystem/stream-app",permalink:"/docs/ecosystem/stream-app",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Stream App"},sidebar:"tutorialSidebar",previous:{title:"Beam",permalink:"/docs/ecosystem/beam"}},c={},u=[{value:"\ud83c\udfb5 Resonate Stream App",id:"-resonate-stream-app",level:2},{value:"\ud83c\udfb6 Description",id:"-description",level:2},{value:"\ud83d\udce6 Tech Stack",id:"-tech-stack",level:2},{value:"\ud83d\udd27 Installation &amp; Start",id:"-installation--start",level:2},{value:"\ud83e\uddea Testing",id:"-testing",level:2},{value:"\ud83d\udcda Contributing",id:"-contributing",level:2},{value:"\ud83d\udcd6 References",id:"-references",level:2},{value:"\ud83d\udcd1 License",id:"-license",level:2},{value:"\ud83d\udcc7 Contact",id:"-contact",level:2},{value:"\ud83d\udcf8 Screenshots",id:"-screenshots",level:2}],m={toc:u};function d(e){var t=e.components,r=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Explore the mobile & tablet ",(0,a.kt)("code",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/peterklingelhofer/stream-app"},"stream-app"))," repository..."),(0,a.kt)("div",{align:"center"},(0,a.kt)("h1",{align:"center"},"stream2own"),(0,a.kt)("strong",null,"Play fair.")),(0,a.kt)("br",null),(0,a.kt)("div",{align:"center"},(0,a.kt)("h3",null,(0,a.kt)("a",{href:"https://resonate.is"},"Website"),(0,a.kt)("span",null," | "),(0,a.kt)("a",{href:"https://www.twitter.com/resonatecoop/"},"Twitter"),(0,a.kt)("span",null," | "),(0,a.kt)("a",{href:"https://github.com/resonatecoop/stream2own/blob/master/CONTRIBUTING.md"},"Contributing"),(0,a.kt)("span",null," | "),(0,a.kt)("a",{href:"https://community.resonate.is/t/dev-volunteers-needed-to-build-the-resonate-ecosystem/2262"},"Developer Guide"),(0,a.kt)("span",null," | "),(0,a.kt)("a",{href:"https://docs.resonate.coop"},"Resonate Docs"))),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"-resonate-stream-app"},"\ud83c\udfb5 Resonate Stream App"),(0,a.kt)("p",null,"A mobile app for playing music on ",(0,a.kt)("a",{parentName:"p",href:"https://stream.resonate.coop/"},"Resonate"),", an open source music streaming co-op."),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"https://play.google.com/store/apps/details?id=com.resonate.streamapp"},"\ud83e\udd16 Android App")," is available for open testing."),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"https://testflight.apple.com/join/WJZ5EHqf"},"\ud83c\udf4e Apple/iOS App")," is available for external testing."),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"https://expo.dev/@peterklingelhofer/stream-app?serviceType=classic&distribution=expo-go"},"Expo Project Page")," permits testing with the ",(0,a.kt)("a",{parentName:"p",href:"https://expo.dev/client"},"Expo Go")," client."),(0,a.kt)("p",null,"A ",(0,a.kt)("a",{parentName:"p",href:"https://www.dropbox.com/s/yfpaw0v7lu2x9af/Simulator%20Screen%20Recording%20-%20iPhone%208%20-%202022-02-17%20at%2018.58.26.mp4?dl=0"},"demonstration video")," is available."),(0,a.kt)("p",null,"See the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/resonatecoop/stream"},"stream")," repository for more details."),(0,a.kt)("h2",{id:"-description"},"\ud83c\udfb6 Description"),(0,a.kt)("p",null,"Resonate is an open-source music streaming service run by a cooperative of artists and software developers."),(0,a.kt)("p",null,"If you want to know what we're building or want to get more involved, head over to the Platform category on our ",(0,a.kt)("a",{parentName:"p",href:"https://community.resonate.is/c/platform/l/latest?board=default"},"forum")," or read the ",(0,a.kt)("a",{parentName:"p",href:"https://community.resonate.is/docs?topic=2262"},"Developer Guide")," in our ",(0,a.kt)("a",{parentName:"p",href:"https://community.resonate.is/docs"},"Resonate Handbook"),"."),(0,a.kt)("p",null,"View the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/peterklingelhofer/stream-app/projects/1"},"project board")," where work is tracked for this repository. If you're looking for a good first task, feel encouraged to take on an un-assigned ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/resonatecoop/stream/issues"},(0,a.kt)("inlineCode",{parentName:"a"},"help wanted")," or ",(0,a.kt)("inlineCode",{parentName:"a"},"good first task")," issues"),"."),(0,a.kt)("p",null,"Are you building something using the Resonate ",(0,a.kt)("a",{parentName:"p",href:"#api"},"API")," and would like to request a change? Resonate welcomes #proposals in the ",(0,a.kt)("a",{parentName:"p",href:"https://community.resonate.is/c/66"},"Co-Operation section of the forum"),"."),(0,a.kt)("h2",{id:"-tech-stack"},"\ud83d\udce6 Tech Stack"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Babel"),(0,a.kt)("li",{parentName:"ul"},"Expo"),(0,a.kt)("li",{parentName:"ul"},"React"),(0,a.kt)("li",{parentName:"ul"},"React Native"),(0,a.kt)("li",{parentName:"ul"},"TypeScript")),(0,a.kt)("h2",{id:"-installation--start"},"\ud83d\udd27 Installation & Start"),(0,a.kt)("p",null,"Clone this repository, install dependencies, and start expo."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"git clone https://github.com/peterklingelhofer/stream-app.git\ncd stream-app\nyarn global add expo-cli\nyarn\nexpo start\n")),(0,a.kt)("h2",{id:"-testing"},"\ud83e\uddea Testing"),(0,a.kt)("p",null,"For testing, per ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/resonatecoop/stream/issues/171"},"#3 under Other issues to consider"),", we should probably also be testing (at-least locally) with the development branch of the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/resonatecoop/stream"},"stream repository")," considering the in-progress Wordpress transition -- change the WebView ",(0,a.kt)("inlineCode",{parentName:"p"},"source")," prop in ",(0,a.kt)("inlineCode",{parentName:"p"},"App.tsx")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"source={{ uri: 'https://stream.resonate.ninja/discover' }}"),". As far as we know, the only difference for the streaming player should be signup/login flow and account settings."),(0,a.kt)("h2",{id:"-contributing"},"\ud83d\udcda Contributing"),(0,a.kt)("a",{href:"https://github.com/resonatecoop/stream2own/blob/master/CONTRIBUTING.md"},"Contributing")," to others\u2019 projects is an avenue to learn new software development skills and experience new technologies. The pull request is how your personal contributions will be added to the project. The following is an overview of the Git project management workflow:",(0,a.kt)("p",null,"Search project for contribution instructions and follow them if present.\nFork project repo from your personal Github account.\nCopy the fork and clone repo onto your local machine.\nAdd the original repository (the you forked) as a remote called upstream.\nIf you created your fork a while ago be sure to pull upstream changes into your local repository.\nCreate a new branch to work on! Branch from develop if it exists, else from master.\nImplement/fix your feature.\nFollow the code style of the project, including indentation.\nIf the project has included tests use them.\nAdd additional tests or convert existing tests as necessary.\nAdd or convert project documentation as needed.\nPush your working branch to your forked repo on Github.\nMake a pull request from your forked repo to the origin master or development branch if present.\nOnce your pull request is merged, pull down upstream master to your local repo and delete any additional branch(es) you may have created.\nCommit messages should be written in present tense describing what the committed code does and not what you changed in the code."),(0,a.kt)("h2",{id:"-references"},"\ud83d\udcd6 References"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://expo.dev/"},"Expo")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://reactnative.dev/"},"React Native")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://typescriptlang.org/'"},"TypeScript"))),(0,a.kt)("h2",{id:"-license"},"\ud83d\udcd1 License"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"stream-app")," is licensed under the\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/peterklingelhofer/stream-app/blob/master/LICENSE"},"GNU General Public License v3.0")),(0,a.kt)("p",null,"Permissions of this strong copyleft license are conditioned on making available complete source code of licensed works and modifications, which include larger works using a licensed work, under the same license. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights."),(0,a.kt)("h2",{id:"-contact"},"\ud83d\udcc7 Contact"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"mailto:peterklingelhofer@gmail.com"},"peterklingelhofer@gmail.com")),(0,a.kt)("h2",{id:"-screenshots"},"\ud83d\udcf8 Screenshots"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/60944077/167742491-00e0ac80-3fc7-4b6d-a564-d4bd03c146da.jpg",alt:"Screenshot_20220328-234520_Resonate"}),"\n",(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/60944077/167742511-087af2d5-af71-45a3-96ef-e1d5d7e2034a.png",alt:"Screenshot_20220328-234804_Resonate"}),"\n",(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/60944077/167742534-13c8d18b-7923-439d-8b61-abd7ea53896e.jpg",alt:"Screenshot_20220328-234942_Resonate"})))}d.isMDXComponent=!0}}]);