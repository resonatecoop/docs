"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[656],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),f=c(n),m=a,d=f["".concat(l,".").concat(m)]||f[m]||u[m]||i;return n?r.createElement(d,o(o({ref:t},p),{},{components:n})):r.createElement(d,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},2126:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],s={sidebar_position:5},l=void 0,c={unversionedId:"basics/user-api-client",id:"basics/user-api-client",title:"user-api-client",description:"Explore the goswagger.io generated client for user-api, the user-api-client repository...",source:"@site/docs/basics/user-api-client.md",sourceDirName:"basics",slug:"/basics/user-api-client",permalink:"/docs/docs/basics/user-api-client",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"user-api",permalink:"/docs/docs/basics/user-api"},next:{title:"Congratulations!",permalink:"/docs/docs/basics/congratulations"}},p={},u=[{value:"Install goswagger",id:"install-goswagger",level:2},{value:"Generate client",id:"generate-client",level:2},{value:"Example",id:"example",level:2},{value:"License",id:"license",level:2}],f={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Explore the goswagger.io generated client for ",(0,i.kt)("code",null,"user-api"),", the ",(0,i.kt)("code",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/resonatecoop/user-api-client"},"user-api-client"))," repository..."),(0,i.kt)("h1",{id:"user-api-client"},"User API Client"),(0,i.kt)("h2",{id:"install-goswagger"},"Install goswagger"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://goswagger.io/install.html"},"https://goswagger.io/install.html")),(0,i.kt)("h2",{id:"generate-client"},"Generate client"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},'swagger generate client -f ./user.swagger.json -a "user-api-client"\n')),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "fmt"\n\n    httptransport "github.com/go-openapi/runtime/client"\n    "github.com/go-openapi/strfmt"\n    apiclient "github.com/resonatecoop/user-api-client/client"\n\n    "github.com/resonatecoop/user-api-client/client/usergroups"\n    "github.com/resonatecoop/user-api-client/models"\n)\n\nvar (\n    insecureSkipVerify = true\n    basepath           = ""\n    schemes            = []string{}\n)\n\nfunc main() {\n    httpClient, err := httptransport.TLSClient(httptransport.TLSClientOptions{\n        InsecureSkipVerify: insecureSkipVerify,\n    })\n\n    if err != nil {\n        panic(err)\n    }\n\n    hostname := fmt.Sprintf("%s%s", "0.0.0.0", ":11000") // replace with your user api hostname\n    transport := httptransport.NewWithClient(hostname, basepath, schemes, httpClient)\n\n    client := apiclient.New(transport, strfmt.Default)\n\n    bearer := httptransport.BearerToken("4f29a260-141e-4238-a6c0-921e1e842fcd") // replace with valid token\n\n    params := usergroups.NewResonateUserAddUserGroupParams()\n\n    params.WithID("4e4a2187-2d7c-49ac-978e-0656c2d4b050") // replace with valid user id\n\n    params.Body = &models.UserUserGroupCreateRequest{\n        DisplayName: "Burial",\n        GroupType:   "persona",\n    }\n\n    result, err := client.Usergroups.ResonateUserAddUserGroup(params, bearer)\n\n    if err != nil {\n        if casted, ok := err.(*usergroups.ResonateUserAddUserGroupDefault); ok {\n            if ok {\n                fmt.Println(casted)\n            }\n        }\n    }\n\n    if result == nil {\n        panic("User API not started?")\n    }\n\n    fmt.Println(result.Payload)\n    return\n}\n')),(0,i.kt)("h2",{id:"license"},"License"),(0,i.kt)("p",null,"MIT"))}m.isMDXComponent=!0}}]);