var J=Object.defineProperty;var F=Object.getOwnPropertySymbols;var R=Object.prototype.hasOwnProperty,q=Object.prototype.propertyIsEnumerable;var O=(t,e,o)=>e in t?J(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o,I=(t,e)=>{for(var o in e||(e={}))R.call(e,o)&&O(t,o,e[o]);if(F)for(var o of F(e))q.call(e,o)&&O(t,o,e[o]);return t};import{r as _,o as d,c as p,a as l,t as g,b as i,w as m,d as C,e as f,F as v,f as S,g as M,h as B,i as b,v as $,j as z,k as U,C as H,l as j,m as K,D as Z,B as W,n as Y,p as G,q as T,s as Q,u as X,x as ee}from"./vendor.d47392f5.js";const te=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))u(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&u(n)}).observe(document,{childList:!0,subtree:!0});function o(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerpolicy&&(r.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?r.credentials="include":s.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function u(s){if(s.ep)return;s.ep=!0;const r=o(s);fetch(s.href,r)}};te();var h=(t,e)=>{const o=t.__vccOpts||t;for(const[u,s]of e)o[u]=s;return o};const oe={props:{user:Object},computed:{isAdmin(){return this.user.isAdmin}},methods:{logout(){this.$emit("logout")}}},re={class:"app-header"},se={key:0},ne=f("Logout"),le={class:"header-links"},ie=f("Toys"),ae=f("Chart");function ue(t,e,o,u,s,r){const n=_("el-button"),c=_("router-link");return d(),p("section",re,[o.user?(d(),p("div",se,[l("h1",null,"Hello "+g(o.user.fullname),1),i(n,{type:"primary",onClick:r.logout},{default:m(()=>[ne]),_:1},8,["onClick"])])):C("",!0),l("div",le,[i(c,{to:"/toy"},{default:m(()=>[ie]),_:1}),i(c,{to:"/toy/chart"},{default:m(()=>[ae]),_:1})])])}var de=h(oe,[["render",ue]]);const ce={props:{toy:Object},methods:{removeToy(t){this.$emit("toy-remove",t)}}},ye=f("        "),pe=f(`
        `),me=f(`
        `),_e=f("Details"),fe=f(`
    `);function he(t,e,o,u,s,r){const n=_("router-link");return d(),p("pre",null,[ye,i(n,{to:"/edit/"+o.toy._id},{default:m(()=>[f(g(o.toy.name)+" ",1)]),_:1},8,["to"]),f("  | "+g(o.toy.price)+" | ",1),(d(!0),p(v,null,S(o.toy.labels,c=>(d(),p("span",{key:c},g(c)+",",1))),128)),pe,l("button",{onClick:e[0]||(e[0]=c=>r.removeToy(o.toy._id))},"Remove"),me,i(n,{to:"/toy/"+o.toy._id},{default:m(()=>[_e]),_:1},8,["to"]),fe])}var ge=h(ce,[["render",he]]);const ve={props:{toys:Array},data(){return{drag:!1}},components:{toyPreview:ge,draggable:M},methods:{removeToy(t){this.$emit("toy-remove",t)},setToysOrder(){}}},be={key:0};function Se(t,e,o,u,s,r){const n=_("toy-preview"),c=_("draggable");return o.toys?(d(),p("section",be,[i(c,{onEnd:r.setToysOrder,modelValue:o.toys,"onUpdate:modelValue":e[0]||(e[0]=a=>o.toys=a),"item-key":"_id"},{item:m(({element:a})=>[i(n,{class:"toy-card",onToyRemove:r.removeToy,toy:a},null,8,["onToyRemove","toy"])]),_:1},8,["onEnd","modelValue"])])):C("",!0)}var Te=h(ve,[["render",Se]]);const we={data(){return{filterBy:{name:"",inStock:!0,labels:[]}}},methods:{setFilter(){this.$emit("filter-set",I({},this.filterBy))},setSort(t){this.$emit("sort-set",t)}},computed:{labels(){return this.$store.getters.toyLabels}},watch:{"filterBy.inStock"(){this.setFilter()}}},$e={class:"toy-filter"},Ce=l("h2",null,"Filter:",-1),ke=l("h2",null,"Sort:",-1),Ve=l("label",{for:"sortA-Z"},"ABC",-1),xe=l("label",{for:"sortPrice"},"Price",-1);function Be(t,e,o,u,s,r){const n=_("el-input"),c=_("el-option"),a=_("el-select"),V=_("el-checkbox");return d(),p("section",$e,[Ce,l("div",null,[i(n,{modelValue:s.filterBy.name,"onUpdate:modelValue":e[0]||(e[0]=y=>s.filterBy.name=y),placeholder:"Please input",onInput:r.setFilter,clearable:""},null,8,["modelValue","onInput"]),i(a,{onChange:r.setFilter,multiple:"",modelValue:s.filterBy.labels,"onUpdate:modelValue":e[1]||(e[1]=y=>s.filterBy.labels=y),class:"m-2",placeholder:"Select",size:"large"},{default:m(()=>[(d(!0),p(v,null,S(r.labels,y=>(d(),B(c,{key:y,label:y,value:y},null,8,["label","value"]))),128))]),_:1},8,["onChange","modelValue"]),i(V,{modelValue:s.filterBy.inStock,"onUpdate:modelValue":e[2]||(e[2]=y=>s.filterBy.inStock=y),label:"in stock",size:"large"},null,8,["modelValue"])]),ke,l("div",null,[l("input",{type:"radio",name:"sortInput",id:"sortA-Z",onInput:e[3]||(e[3]=y=>r.setSort("abc"))},null,32),Ve,l("input",{type:"radio",name:"sortInput",id:"sortPrice",onInput:e[4]||(e[4]=y=>r.setSort("price"))},null,32),xe])])}var Ue=h(we,[["render",Be]]);const Le={data(){return{toy:{name:"",price:null,labels:[],inStock:!0}}},methods:{addToy(){this.toy.createdAt=Date.now(),this.$emit("toy-add",JSON.parse(JSON.stringify(this.toy)))}},computed:{labels(){return this.$store.getters.toyLabels}}},Ie=l("button",null,"Save",-1);function Ae(t,e,o,u,s,r){const n=_("el-option"),c=_("el-select");return d(),p("form",{onSubmit:e[4]||(e[4]=U((...a)=>r.addToy&&r.addToy(...a),["prevent"]))},[b(l("input",{type:"text","onUpdate:modelValue":e[0]||(e[0]=a=>s.toy.name=a)},null,512),[[$,s.toy.name]]),b(l("input",{type:"number","onUpdate:modelValue":e[1]||(e[1]=a=>s.toy.price=a)},null,512),[[$,s.toy.price]]),b(l("input",{type:"checkbox","onUpdate:modelValue":e[2]||(e[2]=a=>s.toy.inStock=a)},null,512),[[z,s.toy.inStock]]),i(c,{multiple:"",modelValue:s.toy.labels,"onUpdate:modelValue":e[3]||(e[3]=a=>s.toy.labels=a),class:"m-2",placeholder:"Select",size:"large"},{default:m(()=>[(d(!0),p(v,null,S(r.labels,a=>(d(),B(n,{key:a,label:a,value:a},null,8,["label","value"]))),128))]),_:1},8,["modelValue"]),Ie],32)}var De=h(Le,[["render",Ae]]);const Fe={components:{toyList:Te,toyFilter:Ue,toyAdd:De},computed:{toys(){return this.$store.getters.filteredToys}},methods:{addToy(t){this.$store.dispatch({type:"addToy",toyToAdd:t})},removeToy(t){this.$store.dispatch({type:"removeToy",toyId:t})},setFilter(t){this.$store.commit({type:"setFilter",filterBy:t})},setSort(t){this.$store.commit({type:"setSort",sortBy:t})}}},Oe={class:"main"};function Ne(t,e,o,u,s,r){const n=_("toy-filter"),c=_("toy-list"),a=_("toy-add");return d(),p("section",Oe,[i(n,{onSortSet:r.setSort,onFilterSet:r.setFilter},null,8,["onSortSet","onFilterSet"]),i(c,{onToyRemove:r.removeToy,toys:r.toys},null,8,["onToyRemove","toys"]),i(a,{onToyAdd:r.addToy},null,8,["onToyAdd"])])}var N=h(Fe,[["render",Ne]]);const Ee={created(){this.$store.dispatch("loadToys"),this.$store.dispatch("loadUser")},components:{appHeader:de,toyApp:N},computed:{user(){return this.$store.getters.currUser}},methods:{async logout(){console.log("hi"),await this.$store.dispatch("logout"),this.$router.push("/")}}};function Pe(t,e,o,u,s,r){const n=_("app-header"),c=_("router-view");return d(),p(v,null,[i(n,{onLogout:r.logout,user:r.user},null,8,["onLogout","user"]),i(c)],64)}var Je=h(Ee,[["render",Pe]]);const Re={data(){return{isLogin:!1,userSignup:{fullname:"",username:"",password:""},userLogin:{username:"",password:""}}},methods:{async signup(){await this.$store.dispatch({type:"signup",newUser:this.userSignup}),this.$router.push("/toy")},async login(){await this.$store.dispatch({type:"login",loginUser:this.userLogin}),this.$router.push("/toy")}}},qe={class:"login-screen-btns"},Me=f("Login"),ze=f("Sign Up"),He=l("h1",null,"Login!",-1),je=l("input",{class:"submit-input",type:"submit",value:"Login"},null,-1),Ke=l("h1",null,"Sign Up!",-1),Ze={class:"form-btn-conainter"},We=l("input",{class:"submit-input",type:"submit",value:"Sign Up"},null,-1);function Ye(t,e,o,u,s,r){const n=_("el-button"),c=_("el-input"),a=_("el-form-item"),V=_("el-form");return d(),p(v,null,[l("div",qe,[i(n,{onClick:e[0]||(e[0]=y=>s.isLogin=!0),type:"primary"},{default:m(()=>[Me]),_:1}),i(n,{onClick:e[1]||(e[1]=y=>s.isLogin=!1),type:"success"},{default:m(()=>[ze]),_:1})]),s.isLogin?(d(),B(V,{key:0,"status-icon":"","label-width":"120px",class:"form login-form",onSubmit:e[4]||(e[4]=U(y=>r.login(),["prevent"]))},{default:m(()=>[He,i(a,{label:"Username"},{default:m(()=>[i(c,{modelValue:s.userLogin.username,"onUpdate:modelValue":e[2]||(e[2]=y=>s.userLogin.username=y),type:"text",autocomplete:"off",required:""},null,8,["modelValue"])]),_:1}),i(a,{label:"password",prop:"pass"},{default:m(()=>[i(c,{type:"password",modelValue:s.userLogin.password,"onUpdate:modelValue":e[3]||(e[3]=y=>s.userLogin.password=y),modelModifiers:{number:!0},required:""},null,8,["modelValue"])]),_:1}),i(a,null,{default:m(()=>[i(n,{class:"form-btn",type:"primary"},{default:m(()=>[je]),_:1})]),_:1})]),_:1})):C("",!0),s.isLogin?C("",!0):(d(),B(V,{key:1,"status-icon":"","label-width":"120px",class:"form signup-form",onSubmit:e[8]||(e[8]=U(y=>r.signup(),["prevent"]))},{default:m(()=>[Ke,i(a,{label:"Full Name"},{default:m(()=>[i(c,{modelValue:s.userSignup.fullname,"onUpdate:modelValue":e[5]||(e[5]=y=>s.userSignup.fullname=y),type:"text",autocomplete:"off",required:""},null,8,["modelValue"])]),_:1}),i(a,{label:"Username"},{default:m(()=>[i(c,{modelValue:s.userSignup.username,"onUpdate:modelValue":e[6]||(e[6]=y=>s.userSignup.username=y),type:"text",autocomplete:"off",required:""},null,8,["modelValue"])]),_:1}),i(a,{label:"password",prop:"pass"},{default:m(()=>[i(c,{type:"password",modelValue:s.userSignup.password,"onUpdate:modelValue":e[7]||(e[7]=y=>s.userSignup.password=y),modelModifiers:{number:!0},required:""},null,8,["modelValue"])]),_:1}),l("div",Ze,[i(a,null,{default:m(()=>[i(n,{class:"form-btn",type:"success"},{default:m(()=>[We]),_:1})]),_:1})])]),_:1}))],64)}var Ge=h(Re,[["render",Ye]]);const Qe={data(){return{}},created(){this.$store.dispatch({type:"setCurrToy",id:this.$route.params.toyId})},methods:{editToy(){this.$store.dispatch({type:"editToy",toy:this.toy}).then(()=>this.$router.push("/"))}},computed:{toy(){return this.$store.getters.currToy}}},Xe={key:0,class:"main"},et=["onUpdate:modelValue"],tt=l("button",null,"Submit",-1);function ot(t,e,o,u,s,r){return r.toy?(d(),p("section",Xe,[l("form",{onSubmit:e[2]||(e[2]=U((...n)=>r.editToy&&r.editToy(...n),["prevent"]))},[b(l("input",{type:"text","onUpdate:modelValue":e[0]||(e[0]=n=>r.toy.name=n)},null,512),[[$,r.toy.name]]),b(l("input",{type:"number","onUpdate:modelValue":e[1]||(e[1]=n=>r.toy.price=n)},null,512),[[$,r.toy.price]]),(d(!0),p(v,null,S(r.toy.labels,(n,c)=>(d(),p("span",{key:n},[b(l("input",{type:"text","onUpdate:modelValue":a=>r.toy.labels[c]=a},null,8,et),[[$,r.toy.labels[c]]])]))),128)),tt],32)])):C("",!0)}var rt=h(Qe,[["render",ot]]);const st={created(){this.$store.dispatch({type:"setCurrToy",id:this.$route.params.toyId})},computed:{toy(){return this.$store.getters.currToy},toyCreated(){return new Date(this.toy.createdAt)}}},nt={class:"main"},lt=l("h3",null,"Labels:",-1),it=l("h3",null,"Reviews:",-1);function at(t,e,o,u,s,r){return d(),p("section",nt,[l("h2",null,g(r.toy.name),1),l("h4",null,"Price: "+g(r.toy.price),1),l("h4",null,"Created At: "+g(r.toyCreated),1),lt,l("ul",null,[(d(!0),p(v,null,S(r.toy.labels,n=>(d(),p("li",{key:n},[l("p",null,g(n),1)]))),128))]),it,l("ul",null,[(d(!0),p(v,null,S(r.toy.reviews,n=>(d(),p("li",{key:n},[l("p",null,g(n),1)]))),128))])])}var ut=h(st,[["render",at]]);H.register(...j);const dt=K({name:"charts",components:{DoughnutChart:Z,BubbleChart:W},data(){return{pricesData:{labels:[],datasets:[{data:[0,0,0,0,0],backgroundColor:["#77CEFF","#0079AF","#123E6B","#97B0C4","#A5C8ED"]}]}}},created(){this.toys.forEach(t=>{t.labels.forEach(e=>{e&&!this.pricesData.labels.includes(e)&&this.pricesData.labels.push(e)})}),this.pricesData.labels.forEach((t,e)=>{this.toys.forEach(o=>{o.labels.includes(t)&&(this.pricesData.datasets[0].data[e]+=o.price)})})},methods:{},computed:{toys(){return this.$store.getters.toysForDisplay}}}),ct={class:"main"},yt=l("h1",null,"Prices By Toy Labels:",-1);function pt(t,e,o,u,s,r){const n=_("DoughnutChart");return d(),p("div",ct,[yt,i(n,{chartData:t.pricesData},null,8,["chartData"])])}var mt=h(dt,[["render",pt]]);const _t=Y({history:G("/"),routes:[{path:"/",name:"login",component:Ge},{path:"/toy",name:"toyApp",component:N},{path:"/edit/:toyId",name:"toyEdit",component:rt},{path:"/toy/:toyId",name:"toyDetails",component:ut},{path:"/toy/chart",name:"toyChart",component:mt}]}),w={loadToys:ft,removeToy:vt,save:gt,getToyById:ht},k="/api/toy/";async function ft(){try{return(await T.get(k)).data}catch(t){console.log("Couldn't get toys:",t)}}async function ht(t){try{return(await T.get(k+t)).data}catch(e){console.log("Couldn't get toy:",e)}}async function gt(t){try{return(t._id?await T.put(k,t):await T.post(k,t)).data}catch(e){console.log("Couldn't save toy:",e)}}async function vt(t){try{return(await T.delete(k+t)).data}catch(e){console.log("Couldn't get toys:",e)}}const bt={state(){return{currToy:null,toys:[],filterBy:null,sortBy:null}},mutations:{loadToys(t,{toys:e}){t.toys=e},removeToy(t,{toyId:e}){const o=t.toys.findIndex(u=>u._id===e);t.toys.splice(o,1)},setFilter(t,{filterBy:e}){t.filterBy=e},addToy(t,{newToy:e}){t.toys.unshift(e)},editToy(t,{toy:e}){const o=t.toys.findIndex(u=>u._id===e._id);t.toys.splice(o,1,e)},setCurrToy(t,{toy:e}){t.currToy=I({},e)},setSort(t,{sortBy:e}){t.sortBy=e}},actions:{loadToys({commit:t}){w.loadToys().then(e=>{t({type:"loadToys",toys:e})})},removeToy({commit:t},{toyId:e}){w.removeToy(e).then(()=>{t({type:"removeToy",toyId:e})})},addToy({commit:t},{toyToAdd:e}){w.save(e).then(o=>{t({type:"addToy",newToy:o})})},editToy({commit:t},{toy:e}){return w.save(e).then(o=>{t({type:"editToy",toy:o})})},setCurrToy({commit:t},{id:e}){return w.getToyById(e).then(o=>t({type:"setCurrToy",toy:o}))}},getters:{filteredToys(t){if(!t.toys)return;let e=JSON.parse(JSON.stringify(t.toys));if(!t.filterBy&&!t.sortBy)return e;if(t.filterBy){if(t.filterBy.name){const o=new RegExp(t.filterBy.name,"i");e=e.filter(u=>o.test(u.name))}t.filterBy.labels.length&&(e=e.filter(o=>o.labels.some(u=>t.filterBy.labels.includes(u)))),e=e.filter(o=>o.inStock===t.filterBy.inStock)}return t.sortBy==="abc"?e.sort((o,u)=>o.name.toLowerCase()<u.name.toLowerCase()?-1:o.name.toLowerCase()>u.name.toLowerCase()?1:0):e.sort((o,u)=>o.price-u.price),e},toysForDisplay(t){return JSON.parse(JSON.stringify(t.toys))},currToy(t){return JSON.parse(JSON.stringify(t.currToy))},toyLabels(){return["On wheels","Box game","Art","Baby","Doll","Puzzle","Outdoor"]}}},A=T.create({withCredentials:!0}),x={signup:St,login:Tt,logout:wt,loadFromStorage:$t},E="USER",D="/api/auth/";async function St(t){try{const e=await A.post(D+"signup",t);return await P(e),e.data}catch(e){throw e}}async function Tt(t){try{const e=await A.post(D+"login",t);return await P(e),e.data}catch(e){throw e}}async function wt(){try{return await Ct(),await A.post(D+"logout")}catch(t){throw t}}async function P(t){return sessionStorage.setItem(E,JSON.stringify(t)),Promise.resolve()}async function $t(){let t=sessionStorage.getItem(E);return t=JSON.parse(t),Promise.resolve(t.data)}async function Ct(){return sessionStorage.clear(),Promise.resolve()}const kt={state(){return{loggedInUser:null}},mutations:{login(t,{user:e}){t.loggedInUser=e},logout(t){t.loggedInUser=null}},actions:{async signup({commit:t},{newUser:e}){try{const o=await x.signup(e);t({type:"login",user:o})}catch(o){console.log(o)}},async login({commit:t},{loginUser:e}){try{const o=await x.login(e);t({type:"login",user:o})}catch{}},async logout({commit:t}){await x.logout(),t("logout")},async loadUser({commit:t}){const e=await x.loadFromStorage();!e||t({type:"login",user:e})}},getters:{currUser(t){if(t.loggedInUser)return JSON.parse(JSON.stringify(t.loggedInUser))}}},Vt=Q({strict:!0,modules:{toyStore:bt,userStore:kt}});const L=X(Je);L.use(ee);L.use(_t);L.use(Vt);L.mount("#app");