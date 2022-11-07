"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[978],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),l=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=l(a),d=n,h=m["".concat(p,".").concat(d)]||m[d]||u[d]||o;return a?r.createElement(h,i(i({ref:t},c),{},{components:a})):r.createElement(h,i({ref:t},c))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var l=2;l<o;l++)i[l]=a[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},6899:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=a(7462),n=(a(7294),a(3905));const o={sidebar_position:4,title:"Stream App"},i=void 0,s={unversionedId:"legacy/stream-app",id:"legacy/stream-app",title:"Stream App",description:"Explore the mobile & tablet stream-app repository...",source:"@site/docs/legacy/stream-app.md",sourceDirName:"legacy",slug:"/legacy/stream-app",permalink:"/docs/legacy/stream-app",draft:!1,editUrl:"https://github.com/resonatecoop/stream-app/edit/main/README.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"Stream App"},sidebar:"tutorialSidebar",previous:{title:"ID Server",permalink:"/docs/legacy/id"},next:{title:"User API",permalink:"/docs/legacy/user-api"}},p={},l=[{value:"\ud83c\udfb5 Resonate Stream App",id:"-resonate-stream-app",level:2},{value:"\ud83c\udfb6 Description",id:"-description",level:2},{value:"\ud83d\uddc2 Tech Stack",id:"-tech-stack",level:2},{value:"\ud83d\udd27 Installation &amp; Start",id:"-installation--start",level:2},{value:"\ud83d\udce6 Build",id:"-build",level:2},{value:"\ud83e\uddea Testing",id:"-testing",level:2},{value:"\ud83d\udcda Contributing",id:"-contributing",level:2},{value:"\ud83d\udcd6 References",id:"-references",level:2},{value:"\ud83d\udcd1 License",id:"-license",level:2},{value:"\ud83d\udcf8 Screenshots",id:"-screenshots",level:2}],c={toc:l};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Explore the mobile & tablet ",(0,n.kt)("code",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/resonatecoop/stream-app"},"stream-app"))," repository..."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\ud83d\udee0 ",(0,n.kt)("strong",{parentName:"p"},"Status: Maintenance Mode | Stable")),(0,n.kt)("p",{parentName:"blockquote"},"This project is currently in ",(0,n.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Maintenance_mode"},"maintenance mode")," - users should feel free to continue to use this app and expect bug fixes, but not expect many additional features, as this is considered relatively feature-complete (given the limitations of ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/react-native-webview/react-native-webview"},(0,n.kt)("inlineCode",{parentName:"a"},"react-native-webview")),"."),(0,n.kt)("p",{parentName:"blockquote"},"Future development is occurring here: ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/resonatecoop/mobile"},(0,n.kt)("inlineCode",{parentName:"a"},"mobile"))," as a React Native TypeScript implementation without ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/react-native-webview/react-native-webview"},(0,n.kt)("inlineCode",{parentName:"a"},"react-native-webview")),". Note that this repository is still active on the ",(0,n.kt)("a",{parentName:"p",href:"https://play.google.com/store/apps/details?id=com.resonate.streamapp"},"Google Play Store")," and the ",(0,n.kt)("a",{parentName:"p",href:"https://testflight.apple.com/join/WJZ5EHqf"},"Apple Store"),", so please submit any issues for problems encountered ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/peterklingelhofer/stream-app/issues"},"here"),", as we are continuing to offer support and fix bugs while ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/resonatecoop/mobile"},(0,n.kt)("inlineCode",{parentName:"a"},"mobile"))," development is still underway.")),(0,n.kt)("h2",{id:"-resonate-stream-app"},"\ud83c\udfb5 Resonate Stream App"),(0,n.kt)("p",null,"A mobile app for playing music on ",(0,n.kt)("a",{parentName:"p",href:"https://stream.resonate.coop/"},"Resonate"),", an open source music streaming co-op."),(0,n.kt)("p",null,"The ",(0,n.kt)("a",{parentName:"p",href:"https://play.google.com/store/apps/details?id=com.resonate.streamapp"},"\ud83e\udd16 Android App")," is available for open testing."),(0,n.kt)("p",null,"The ",(0,n.kt)("a",{parentName:"p",href:"https://testflight.apple.com/join/WJZ5EHqf"},"\ud83c\udf4e Apple/iOS App")," is available for external testing."),(0,n.kt)("p",null,"The ",(0,n.kt)("a",{parentName:"p",href:"https://expo.dev/@peterklingelhofer/stream-app?serviceType=classic&distribution=expo-go"},"Expo Project Page")," permits testing with the ",(0,n.kt)("a",{parentName:"p",href:"https://expo.dev/client"},"Expo Go")," client."),(0,n.kt)("p",null,"A ",(0,n.kt)("a",{parentName:"p",href:"https://www.dropbox.com/s/yfpaw0v7lu2x9af/Simulator%20Screen%20Recording%20-%20iPhone%208%20-%202022-02-17%20at%2018.58.26.mp4?dl=0"},"demonstration video")," is available."),(0,n.kt)("p",null,"See the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/resonatecoop/stream"},"stream")," repository for more details."),(0,n.kt)("p",null,"View the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/peterklingelhofer/stream-app/projects/1"},"GitHub Project Board")," to track work progress and management for this repository."),(0,n.kt)("h2",{id:"-description"},"\ud83c\udfb6 Description"),(0,n.kt)("p",null,"Resonate is an open-source music streaming service run by a cooperative of artists and software developers."),(0,n.kt)("p",null,"If you want to know what we're building or want to get more involved, head over to the Platform category on our ",(0,n.kt)("a",{parentName:"p",href:"https://community.resonate.is/c/platform/l/latest?board=default"},"forum")," or read the ",(0,n.kt)("a",{parentName:"p",href:"https://community.resonate.is/docs?topic=2262"},"Developer Guide")," in our ",(0,n.kt)("a",{parentName:"p",href:"https://community.resonate.is/docs"},"Resonate Handbook"),"."),(0,n.kt)("p",null,"View the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/peterklingelhofer/stream-app/projects/1"},"project board")," where work is tracked for this repository. If you're looking for a good first task, feel encouraged to take on an un-assigned ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/resonatecoop/stream/issues"},(0,n.kt)("inlineCode",{parentName:"a"},"help wanted")," or ",(0,n.kt)("inlineCode",{parentName:"a"},"good first task")," issues"),"."),(0,n.kt)("p",null,"Are you building something using the Resonate ",(0,n.kt)("a",{parentName:"p",href:"#api"},"API")," and would like to request a change? Resonate welcomes #proposals in the ",(0,n.kt)("a",{parentName:"p",href:"https://community.resonate.is/c/66"},"Co-Operation section of the forum"),"."),(0,n.kt)("h2",{id:"-tech-stack"},"\ud83d\uddc2 Tech Stack"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Babel"),(0,n.kt)("li",{parentName:"ul"},"Expo"),(0,n.kt)("li",{parentName:"ul"},"React"),(0,n.kt)("li",{parentName:"ul"},"React Native"),(0,n.kt)("li",{parentName:"ul"},"TypeScript")),(0,n.kt)("h2",{id:"-installation--start"},"\ud83d\udd27 Installation & Start"),(0,n.kt)("p",null,"Clone this repository, install dependencies, and start expo."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"git clone https://github.com/peterklingelhofer/stream-app.git\ncd stream-app\nyarn global add expo-cli\nyarn\nexpo start\n")),(0,n.kt)("h2",{id:"-build"},"\ud83d\udce6 Build"),(0,n.kt)("p",null,"Install the latest Expo Application Services (EAS) package."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"npm install -g eas-cli\n")),(0,n.kt)("p",null,"Then create a build for whichever platform you desire:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"eas build -p android\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"eas build -p ios\n")),(0,n.kt)("p",null,"For more in-depth instructions and additional options, review the ",(0,n.kt)("a",{parentName:"p",href:"https://docs.expo.dev/build/introduction/"},"official Expo build documentation"),"."),(0,n.kt)("h2",{id:"-testing"},"\ud83e\uddea Testing"),(0,n.kt)("p",null,"For testing, per ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/resonatecoop/stream/issues/171"},"#3 under Other issues to consider"),", we should probably also be testing (at-least locally) with the development branch of the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/resonatecoop/stream"},"stream repository")," considering the in-progress Wordpress transition -- change the WebView ",(0,n.kt)("inlineCode",{parentName:"p"},"source")," prop in ",(0,n.kt)("inlineCode",{parentName:"p"},"App.tsx")," to ",(0,n.kt)("inlineCode",{parentName:"p"},"source={{ uri: 'https://stream.resonate.ninja/discover' }}"),". As far as we know, the only difference for the streaming player should be signup/login flow and account settings."),(0,n.kt)("h2",{id:"-contributing"},"\ud83d\udcda Contributing"),(0,n.kt)("a",{href:"https://github.com/resonatecoop/stream2own/blob/master/CONTRIBUTING.md"},"Contributing")," to others\u2019 projects is an avenue to learn new software development skills and experience new technologies. The pull request is how your personal contributions will be added to the project. The following is an overview of the Git project management workflow:",(0,n.kt)("p",null,"Search project for contribution instructions and follow them if present.\nFork project repo from your personal Github account.\nCopy the fork and clone repo onto your local machine.\nAdd the original repository (the you forked) as a remote called upstream.\nIf you created your fork a while ago be sure to pull upstream changes into your local repository.\nCreate a new branch to work on! Branch from develop if it exists, else from master.\nImplement/fix your feature.\nFollow the code style of the project, including indentation.\nIf the project has included tests use them.\nAdd additional tests or convert existing tests as necessary.\nAdd or convert project documentation as needed.\nPush your working branch to your forked repo on Github.\nMake a pull request from your forked repo to the origin master or development branch if present.\nOnce your pull request is merged, pull down upstream master to your local repo and delete any additional branch(es) you may have created.\nCommit messages should be written in present tense describing what the committed code does and not what you changed in the code."),(0,n.kt)("h2",{id:"-references"},"\ud83d\udcd6 References"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://expo.dev/"},"Expo")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://reactnative.dev/"},"React Native")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://typescriptlang.org/'"},"TypeScript"))),(0,n.kt)("h2",{id:"-license"},"\ud83d\udcd1 License"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"stream-app")," is licensed under the\n",(0,n.kt)("a",{parentName:"p",href:"https://github.com/peterklingelhofer/stream-app/blob/master/LICENSE"},"GNU General Public License v3.0")),(0,n.kt)("p",null,"Permissions of this strong copyleft license are conditioned on making available complete source code of licensed works and modifications, which include larger works using a licensed work, under the same license. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights."),(0,n.kt)("h2",{id:"-screenshots"},"\ud83d\udcf8 Screenshots"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/60944077/167742491-00e0ac80-3fc7-4b6d-a564-d4bd03c146da.jpg",alt:"Screenshot_20220328-234520_Resonate"}),"\n",(0,n.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/60944077/167742511-087af2d5-af71-45a3-96ef-e1d5d7e2034a.png",alt:"Screenshot_20220328-234804_Resonate"}),"\n",(0,n.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/60944077/167742534-13c8d18b-7923-439d-8b61-abd7ea53896e.jpg",alt:"Screenshot_20220328-234942_Resonate"})))}u.isMDXComponent=!0}}]);