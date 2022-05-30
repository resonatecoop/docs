"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[126],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(n),m=r,k=c["".concat(s,".").concat(m)]||c[m]||d[m]||i;return n?a.createElement(k,l(l({ref:t},u),{},{components:n})):a.createElement(k,l({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},925:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return d}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),l=["components"],o={sidebar_position:4},s=void 0,p={unversionedId:"basics/user-api",id:"basics/user-api",title:"user-api",description:"Explore the Golang-based user-api repository...",source:"@site/docs/basics/user-api.md",sourceDirName:"basics",slug:"/basics/user-api",permalink:"/docs/docs/basics/user-api",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"id",permalink:"/docs/docs/basics/id"},next:{title:"user-api-client",permalink:"/docs/docs/basics/user-api-client"}},u={},d=[{value:"Running",id:"running",level:2},{value:"Getting started",id:"getting-started",level:2},{value:"Dev database setup",id:"dev-database-setup",level:2},{value:"Tests",id:"tests",level:2},{value:"Running!",id:"running-1",level:2},{value:"Docker!",id:"docker",level:2},{value:"Working with a reverse-proxy (like nginx)",id:"working-with-a-reverse-proxy-like-nginx",level:2},{value:"Maintenance",id:"maintenance",level:2}],c={toc:d};function m(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Explore the Golang-based ",(0,i.kt)("code",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/resonatecoop/user-api"},"user-api"))," repository..."),(0,i.kt)("h1",{id:"user-api"},"user-api"),(0,i.kt)("p",null,"This is a significant evolution of @blushi's ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/resonatecoop/user-api-old"},"original Golang-based user-api")),(0,i.kt)("p",null,"The changes are so significant a new repo was created, but a lot of code lives on from that repo."),(0,i.kt)("p",null,"It builds on that work in several important ways:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"drops Twirp framework in favour of ",(0,i.kt)("a",{parentName:"li",href:"https://grpc-ecosystem.github.io/grpc-gateway/"},"GRPC-Gateway")," which has gained significant traction"),(0,i.kt)("li",{parentName:"ul"},"implements full OpenAPIV2 workflow - write interfaces in protobufs and generate the code stubs, then implement them."),(0,i.kt)("li",{parentName:"ul"},"exposes full Swagger UI automatically"),(0,i.kt)("li",{parentName:"ul"},"implements full RBAC using native Golang Interceptors (arguably better than using Twirp Handlers)"),(0,i.kt)("li",{parentName:"ul"},"RBAC is based on User role and interface access config in the config file"),(0,i.kt)("li",{parentName:"ul"},"built with Go modules for dependency management"),(0,i.kt)("li",{parentName:"ul"},"adds a CLI for database management and for running the server"),(0,i.kt)("li",{parentName:"ul"},"replaces ",(0,i.kt)("inlineCode",{parentName:"li"},"go-pg")," with ",(0,i.kt)("inlineCode",{parentName:"li"},"bun")),(0,i.kt)("li",{parentName:"ul"},"merges in the models from ",(0,i.kt)("inlineCode",{parentName:"li"},"resonatecoop\\id"))),(0,i.kt)("p",null,"It is WIP, do NOT use this in Production yet!"),(0,i.kt)("h2",{id:"running"},"Running"),(0,i.kt)("p",null,"Running ",(0,i.kt)("inlineCode",{parentName:"p"},"go run main.go runserver")," starts a web server on ",(0,i.kt)("a",{parentName:"p",href:"https://0.0.0.0:11000/"},"https://0.0.0.0:11000/"),". You can configure\nthe port used with the ",(0,i.kt)("inlineCode",{parentName:"p"},"$PORT")," environment variable, and to serve on HTTP set\n",(0,i.kt)("inlineCode",{parentName:"p"},"$SERVE_HTTP=true"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ go run main.go runserver\n")),(0,i.kt)("p",null,"An OpenAPI UI is served on ",(0,i.kt)("a",{parentName:"p",href:"https://0.0.0.0:11000/"},"https://0.0.0.0:11000/"),"."),(0,i.kt)("h2",{id:"getting-started"},"Getting started"),(0,i.kt)("p",null,"After cloning the repo, there are a couple of initial steps;"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Ensure that you have ",(0,i.kt)("a",{parentName:"li",href:"https://go.dev/doc/install"},"Go")," installed on your system."),(0,i.kt)("li",{parentName:"ol"},"Install the generate dependencies with ",(0,i.kt)("inlineCode",{parentName:"li"},"make install"),".\nThis will install ",(0,i.kt)("inlineCode",{parentName:"li"},"buf"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"protoc-gen-go"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"protoc-gen-go-grpc"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"protoc-gen-grpc-gateway"),",\n",(0,i.kt)("inlineCode",{parentName:"li"},"protoc-gen-openapiv2")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"statik")," which are necessary for us to generate the Go, swagger and static files."),(0,i.kt)("li",{parentName:"ol"},"Install the git submodule(s) with ",(0,i.kt)("inlineCode",{parentName:"li"},"git submodule update --init")," from root directory of the cloned repo"),(0,i.kt)("li",{parentName:"ol"},"Finally, generate the files with ",(0,i.kt)("inlineCode",{parentName:"li"},"make generate"),"."),(0,i.kt)("li",{parentName:"ol"},"Now, you'll need to generate a certificate:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"mkcert -install\nmkcert 0.0.0.0 127.0.0.1 localhost ::1\n")),(0,i.kt)("p",null,"The certificate is in the directory you ran the above command from. Rename the key file (something like ",(0,i.kt)("inlineCode",{parentName:"p"},"./0.0.0.0+3-key.pem"),") to ",(0,i.kt)("inlineCode",{parentName:"p"},"uaclient.key")," and the certificate file (something like ",(0,i.kt)("inlineCode",{parentName:"p"},"./0.0.0.0+3.pem"),") to ",(0,i.kt)("inlineCode",{parentName:"p"},"uaclient.pem"),". Copy both of the renamed files to ",(0,i.kt)("inlineCode",{parentName:"p"},"/usr/local/etc/nginx/ssl")," (if you don't have an ",(0,i.kt)("inlineCode",{parentName:"p"},"ssl")," folder in your nginx directory, create one)."),(0,i.kt)("p",null,"Serve the User API at ",(0,i.kt)("a",{parentName:"p",href:"https://127.0.0.1:11000"},"https://127.0.0.1:11000")," with this command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},'UACERT_DIR="/usr/local/etc/nginx/ssl" go run main.go runserver -env dev -dbdebug true\n')),(0,i.kt)("ol",{start:6},(0,i.kt)("li",{parentName:"ol"},"Start the server:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"pg_ctl -D /usr/local/var/postgres -l logfile start\n")),(0,i.kt)("h2",{id:"dev-database-setup"},"Dev database setup"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Create user and database as follows (as found in the local config file in ",(0,i.kt)("inlineCode",{parentName:"li"},"./conf.local.yaml"),"):")),(0,i.kt)("p",null,'username = "resonate_dev_user"'),(0,i.kt)("p",null,'password = "password"'),(0,i.kt)("p",null,'dbname = "resonate_dev"'),(0,i.kt)("p",null,"To get into the Postgres shell, run:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"psql\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE DATABASE resonate_dev;\nCREATE USER resonate_dev_user WITH PASSWORD 'password';\nGRANT ALL PRIVILEGES ON DATABASE resonate_dev TO resonate_dev_user;\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"And add the ",(0,i.kt)("inlineCode",{parentName:"li"},"hstore")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"uuid-ossp")," extensions, confirming with the ",(0,i.kt)("inlineCode",{parentName:"li"},"SELECT")," statement.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},'\\c resonate_dev;\nCREATE EXTENSION hstore;\nCREATE EXTENSION "uuid-ossp";\nSELECT * FROM pg_extension;\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Then, run these migrations (from the root of the user-api):")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},'UACERT_DIR="/usr/local/etc/nginx/ssl" go run main.go db -env dev init\nUACERT_DIR="/usr/local/etc/nginx/ssl" go run main.go db -env dev migrate                                                                                                     \nUACERT_DIR="/usr/local/etc/nginx/ssl" go run main.go db -env dev load_default_fixtures\nUACERT_DIR="/usr/local/etc/nginx/ssl" go run main.go db -env dev load_test_fixtures\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Then, repeat the last two above blocks replacing ",(0,i.kt)("inlineCode",{parentName:"li"},"dev")," with ",(0,i.kt)("inlineCode",{parentName:"li"},"test"),".")),(0,i.kt)("p",null,"If you need to roll back:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},'UACERT_DIR="/usr/local/etc/nginx/ssl" go run main.go db -env dev rollback\n')),(0,i.kt)("h2",{id:"tests"},"Tests"),(0,i.kt)("p",null,"Ongoing WIP atm, but for example, can be run with:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"$  go test -timeout 30s -run ^TestDeleteUser$ github.com/resonatecoop/user-api/server/users\n")),(0,i.kt)("h2",{id:"running-1"},"Running!"),(0,i.kt)("p",null,"Now you can run the web server with ",(0,i.kt)("inlineCode",{parentName:"p"},"go run main.go runserver"),"."),(0,i.kt)("p",null,"This will default to running in dev and without debug output from queries."),(0,i.kt)("p",null,"However, there are two flags:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"env")," (",(0,i.kt)("inlineCode",{parentName:"li"},"dev"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"test")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"prod"),", defaults to ",(0,i.kt)("inlineCode",{parentName:"li"},"dev"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"dbdebug")," (",(0,i.kt)("inlineCode",{parentName:"li"},"true")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),", defaults to ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),")")),(0,i.kt)("p",null,"So e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"go run main.go runserver -env test -dbdebug true")," will run the server on the test DB (defined in the config) with db query debug output on."),(0,i.kt)("p",null,"The PSN connection strings for dev and test are in conf.local.yaml, but for prod this is built from environement variables:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"POSTGRES_NAME")," (DB name)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"POSTGRES_USER")," (DB username)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"POSTGRES_PASS")," (DB password)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"POSTGRES_HOST")," (DB host, defaulted ",(0,i.kt)("inlineCode",{parentName:"li"},"127.0.0.1"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"POSTGRES_PORT")," (DB port, defaulted ",(0,i.kt)("inlineCode",{parentName:"li"},"5432"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"POSTGRES_SSL")," (",(0,i.kt)("inlineCode",{parentName:"li"},"enable")," or defaulted ",(0,i.kt)("inlineCode",{parentName:"li"},"disable"),")")),(0,i.kt)("h2",{id:"docker"},"Docker!"),(0,i.kt)("p",null,"Build a container with ",(0,i.kt)("inlineCode",{parentName:"p"},"docker build -t resonateuserapi .")),(0,i.kt)("p",null,"(to avoid cache, use ",(0,i.kt)("inlineCode",{parentName:"p"},"--no-cache")," option)"),(0,i.kt)("p",null,"Run container with ",(0,i.kt)("inlineCode",{parentName:"p"},"docker run -p 11000:11000 --network=host -tid resonateuserapi")),(0,i.kt)("p",null,"Check status with ",(0,i.kt)("inlineCode",{parentName:"p"},"docker container ls")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"docker logs <image>")),(0,i.kt)("p",null,"(use sudo as required)"),(0,i.kt)("h2",{id:"working-with-a-reverse-proxy-like-nginx"},"Working with a reverse-proxy (like nginx)"),(0,i.kt)("p",null,"You need to register a certificate in a pair of files."),(0,i.kt)("p",null,"This prefix of this file is held in the config file as ",(0,i.kt)("inlineCode",{parentName:"p"},"cert_name"),", default value ",(0,i.kt)("inlineCode",{parentName:"p"},"uaclient")),(0,i.kt)("p",null,'The server will then look for two files, suffix\'s ".pem" and ".key" in the directory provided by\nthe environment variable ',(0,i.kt)("inlineCode",{parentName:"p"},"UACERT_DIR")),(0,i.kt)("p",null,"In your reverse proxy you will need to refer to these too in order to be able to proxy the service securely."),(0,i.kt)("h2",{id:"maintenance"},"Maintenance"),(0,i.kt)("p",null,"Interfaces are designed in\n",(0,i.kt)("inlineCode",{parentName:"p"},"proto/")," directory. See ",(0,i.kt)("a",{parentName:"p",href:"https://developers.google.com/protocol-buffers/"},"https://developers.google.com/protocol-buffers/"),"\ntutorials and guides on writing protofiles."),(0,i.kt)("p",null,"Once that is done, regenerate the files using\n",(0,i.kt)("inlineCode",{parentName:"p"},"make generate"),". This will mean you'll need to implement any functions in\n",(0,i.kt)("inlineCode",{parentName:"p"},"server/"),", or else the build will fail since your struct won't\nbe implementing the interface defined by the generated file in ",(0,i.kt)("inlineCode",{parentName:"p"},"proto/example.pb.go"),"."))}m.isMDXComponent=!0}}]);