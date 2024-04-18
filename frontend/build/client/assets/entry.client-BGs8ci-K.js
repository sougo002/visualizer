import{r as l,j as H}from"./jsx-runtime-BlSqMCxk.js";import{i as G,u as K,S as Q,E as C,A as Z,D as q,a as O,l as ee,p as X,b as te,r as re,m as ne,c as oe,d as ie,e as ae,R as le,f as se,g as de}from"./components-C13sSMoO.js";/**
 * @remix-run/react v2.8.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */class ue extends l.Component{constructor(r){super(r),this.state={error:r.error||null,location:r.location}}static getDerivedStateFromError(r){return{error:r}}static getDerivedStateFromProps(r,t){return t.location!==r.location?{error:r.error||null,location:r.location}:{error:r.error||t.error,location:t.location}}render(){return this.state.error?l.createElement(z,{error:this.state.error}):this.props.children}}function z({error:e}){console.error(e);let r=l.createElement("script",{dangerouslySetInnerHTML:{__html:`
        console.log(
          "💿 Hey developer 👋. You can provide a way better UX than this when your app throws errors. Check out https://remix.run/guides/errors for more information."
        );
      `}});if(G(e))return l.createElement(S,{title:"Unhandled Thrown Response!"},l.createElement("h1",{style:{fontSize:"24px"}},e.status," ",e.statusText),r);let t;if(e instanceof Error)t=e;else{let o=e==null?"Unknown Error":typeof e=="object"&&"toString"in e?e.toString():JSON.stringify(e);t=new Error(o)}return l.createElement(S,{title:"Application Error!"},l.createElement("h1",{style:{fontSize:"24px"}},"Application Error"),l.createElement("pre",{style:{padding:"2rem",background:"hsla(10, 50%, 50%, 0.1)",color:"red",overflow:"auto"}},t.stack),r)}function S({title:e,renderScripts:r,children:t}){var o;let{routeModules:n}=K();return(o=n.root)!==null&&o!==void 0&&o.Layout?t:l.createElement("html",{lang:"en"},l.createElement("head",null,l.createElement("meta",{charSet:"utf-8"}),l.createElement("meta",{name:"viewport",content:"width=device-width,initial-scale=1,viewport-fit=cover"}),l.createElement("title",null,e)),l.createElement("body",null,l.createElement("main",{style:{fontFamily:"system-ui, sans-serif",padding:"2rem"}},t,r?l.createElement(Q,null):null)))}/**
 * @remix-run/react v2.8.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ce(e){if(!e)return null;let r=Object.entries(e),t={};for(let[o,n]of r)if(n&&n.__type==="RouteErrorResponse")t[o]=new C(n.status,n.statusText,n.data,n.internal===!0);else if(n&&n.__type==="Error"){if(n.__subType){let s=window[n.__subType];if(typeof s=="function")try{let d=new s(n.message);d.stack=n.stack,t[o]=d}catch{}}if(t[o]==null){let s=new Error(n.message);s.stack=n.stack,t[o]=s}}else t[o]=n;return t}/**
 * @remix-run/react v2.8.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function fe(e){return e.headers.get("X-Remix-Catch")!=null}function me(e){return e.headers.get("X-Remix-Error")!=null}function we(e){return U(e)&&e.status>=400&&e.headers.get("X-Remix-Error")==null&&e.headers.get("X-Remix-Catch")==null&&e.headers.get("X-Remix-Response")==null}function he(e){return e.headers.get("X-Remix-Redirect")!=null}function _e(e){var r;return!!((r=e.headers.get("Content-Type"))!==null&&r!==void 0&&r.match(/text\/remix-deferred/))}function U(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.headers=="object"&&typeof e.body<"u"}function ye(e){let r=e;return r&&typeof r=="object"&&typeof r.data=="object"&&typeof r.subscribe=="function"&&typeof r.cancel=="function"&&typeof r.resolveData=="function"}async function N(e,r,t=0){let o=new URL(e.url);o.searchParams.set("_data",r);let n={signal:e.signal};if(e.method!=="GET"){n.method=e.method;let a=e.headers.get("Content-Type");a&&/\bapplication\/json\b/.test(a)?(n.headers={"Content-Type":a},n.body=JSON.stringify(await e.json())):a&&/\btext\/plain\b/.test(a)?(n.headers={"Content-Type":a},n.body=await e.text()):a&&/\bapplication\/x-www-form-urlencoded\b/.test(a)?n.body=new URLSearchParams(await e.text()):n.body=await e.formData()}t>0&&await new Promise(a=>setTimeout(a,5**t*10));let s=window.__remixRevalidation,d=await fetch(o.href,n).catch(a=>{if(typeof s=="number"&&s===window.__remixRevalidation&&(a==null?void 0:a.name)==="TypeError"&&t<3)return N(e,r,t+1);throw a});if(me(d)){let a=await d.json(),i=new Error(a.message);return i.stack=a.stack,i}if(we(d)){let a=await d.text(),i=new Error(a);return i.stack=void 0,i}return d}const Re="__deferred_promise:";async function pe(e){if(!e)throw new Error("parseDeferredReadableStream requires stream argument");let r,t={};try{let o=ve(e),s=(await o.next()).value;if(!s)throw new Error("no critical data");let d=JSON.parse(s);if(typeof d=="object"&&d!==null)for(let[a,i]of Object.entries(d))typeof i!="string"||!i.startsWith(Re)||(r=r||{},r[a]=new Promise((u,_)=>{t[a]={resolve:c=>{u(c),delete t[a]},reject:c=>{_(c),delete t[a]}}}));return(async()=>{try{for await(let a of o){let[i,...u]=a.split(":"),_=u.join(":"),c=JSON.parse(_);if(i==="data")for(let[h,f]of Object.entries(c))t[h]&&t[h].resolve(f);else if(i==="error")for(let[h,f]of Object.entries(c)){let x=new Error(f.message);x.stack=f.stack,t[h]&&t[h].reject(x)}}for(let[a,i]of Object.entries(t))i.reject(new Z(`Deferred ${a} will never be resolved`))}catch(a){for(let i of Object.values(t))i.reject(a)}})(),new q({...d,...r})}catch(o){for(let n of Object.values(t))n.reject(o);throw o}}async function*ve(e){let r=e.getReader(),t=[],o=[],n=!1,s=new TextEncoder,d=new TextDecoder,a=async()=>{if(o.length>0)return o.shift();for(;!n&&o.length===0;){let u=await r.read();if(u.done){n=!0;break}t.push(u.value);try{let c=d.decode(T(...t)).split(`

`);if(c.length>=2&&(o.push(...c.slice(0,-1)),t=[s.encode(c.slice(-1).join(`

`))]),o.length>0)break}catch{continue}}return o.length>0||t.length>0&&(o=d.decode(T(...t)).split(`

`).filter(_=>_),t=[]),o.shift()},i=await a();for(;i;)yield i,i=await a()}function T(...e){let r=new Uint8Array(e.reduce((o,n)=>o+n.length,0)),t=0;for(let o of e)r.set(o,t),t+=o.length;return r}/**
 * @remix-run/react v2.8.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function xe(){return l.createElement(S,{title:"Loading...",renderScripts:!0},l.createElement("script",{dangerouslySetInnerHTML:{__html:`
              console.log(
                "💿 Hey developer 👋. You can provide a way better UX than this " +
                "when your app is running \`clientLoader\` functions on hydration. " +
                "Check out https://remix.run/route/hydrate-fallback for more information."
              );
            `}}))}/**
 * @remix-run/react v2.8.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function J(e){let r={};return Object.values(e).forEach(t=>{let o=t.parentId||"";r[o]||(r[o]=[]),r[o].push(t)}),r}function Ee(e,r,t){let o=W(r),n=r.HydrateFallback&&(!t||e.id==="root")?r.HydrateFallback:e.id==="root"?xe:void 0,s=r.ErrorBoundary?r.ErrorBoundary:e.id==="root"?()=>l.createElement(z,{error:te()}):void 0;return e.id==="root"&&r.Layout?{...o?{element:l.createElement(r.Layout,null,l.createElement(o,null))}:{Component:o},...s?{errorElement:l.createElement(r.Layout,null,l.createElement(s,null))}:{ErrorBoundary:s},...n?{hydrateFallbackElement:l.createElement(r.Layout,null,l.createElement(n,null))}:{HydrateFallback:n}}:{Component:o,ErrorBoundary:s,HydrateFallback:n}}function be(e,r,t,o,n,s){return D(r,t,o,n,s,"",J(r),e)}function b(e,r,t){if(t){let d=`You cannot call ${e==="action"?"serverAction()":"serverLoader()"} in SPA Mode (routeId: "${r.id}")`;throw console.error(d),new C(400,"Bad Request",new Error(d),!0)}let n=`You are trying to call ${e==="action"?"serverAction()":"serverLoader()"} on a route that does not have a server ${e} (routeId: "${r.id}")`;if(e==="loader"&&!r.hasLoader||e==="action"&&!r.hasAction)throw console.error(n),new C(400,"Bad Request",new Error(n),!0)}function M(e,r){let t=e==="clientAction"?"a":"an",o=`Route "${r}" does not have ${t} ${e}, but you are trying to submit to it. To fix this, please add ${t} \`${e}\` function to the route`;throw console.error(o),new C(405,"Method Not Allowed",new Error(o),!0)}function D(e,r,t,o,n,s="",d=J(e),a){return(d[s]||[]).map(i=>{let u=r[i.id];async function _(m){return i.hasLoader?F(m,i):null}async function c(m){if(!i.hasAction)throw M("action",i.id);return F(m,i)}async function h(m){let w=r[i.id],p=w?X(i,w):Promise.resolve();try{return m()}finally{await p}}let f={id:i.id,index:i.index,path:i.path};if(u){var x,k,L;Object.assign(f,{...f,...Ee(i,u,n),handle:u.handle,shouldRevalidate:a?B(i.id,u.shouldRevalidate,a):u.shouldRevalidate});let m=t==null||(x=t.loaderData)===null||x===void 0?void 0:x[i.id],w=t==null||(k=t.errors)===null||k===void 0?void 0:k[i.id],p=a==null&&(((L=u.clientLoader)===null||L===void 0?void 0:L.hydrate)===!0||!i.hasLoader);f.loader=async({request:y,params:v})=>{try{return await h(async()=>(O(u,"No `routeModule` available for critical-route loader"),u.clientLoader?u.clientLoader({request:y,params:v,async serverLoader(){if(b("loader",i,n),p){if(w!==void 0)throw w;return m}let $=await _(y);return await g($)}}):n?null:_(y)))}finally{p=!1}},f.loader.hydrate=Y(i,u,n),f.action=({request:y,params:v})=>h(async()=>{if(O(u,"No `routeModule` available for critical-route action"),!u.clientAction){if(n)throw M("clientAction",i.id);return c(y)}return u.clientAction({request:y,params:v,async serverAction(){b("action",i,n);let E=await c(y);return await g(E)}})})}else i.hasClientLoader||(f.loader=({request:m})=>h(()=>n?Promise.resolve(null):_(m))),i.hasClientAction||(f.action=({request:m})=>h(()=>{if(n)throw M("clientAction",i.id);return c(m)})),f.lazy=async()=>{let m=await ge(i,r),w={...m};if(m.clientLoader){let p=m.clientLoader;w.loader=y=>p({...y,async serverLoader(){b("loader",i,n);let v=await _(y.request);return await g(v)}})}if(m.clientAction){let p=m.clientAction;w.action=y=>p({...y,async serverAction(){b("action",i,n);let v=await c(y.request);return await g(v)}})}return a&&(w.shouldRevalidate=B(i.id,m.shouldRevalidate,a)),{...w.loader?{loader:w.loader}:{},...w.action?{action:w.action}:{},hasErrorBoundary:w.hasErrorBoundary,shouldRevalidate:w.shouldRevalidate,handle:w.handle,Component:w.Component,ErrorBoundary:w.ErrorBoundary}};let P=D(e,r,t,o,n,i.id,d,a);return P.length>0&&(f.children=P),f})}function B(e,r,t){let o=!1;return n=>o?r?r(n):n.defaultShouldRevalidate:(o=!0,t.has(e))}async function ge(e,r){let t=await ee(e,r);return await X(e,t),{Component:W(t),ErrorBoundary:t.ErrorBoundary,clientAction:t.clientAction,clientLoader:t.clientLoader,handle:t.handle,links:t.links,meta:t.meta,shouldRevalidate:t.shouldRevalidate}}async function F(e,r){let t=await N(e,r.id);if(t instanceof Error)throw t;if(he(t))throw Ce(t);if(fe(t))throw t;return _e(t)&&t.body?await pe(t.body):t}function g(e){if(ye(e))return e.data;if(U(e)){let r=e.headers.get("Content-Type");return r&&/\bapplication\/json\b/.test(r)?e.json():e.text()}return e}function Ce(e){let r=parseInt(e.headers.get("X-Remix-Status"),10)||302,t=e.headers.get("X-Remix-Redirect"),o={},n=e.headers.get("X-Remix-Revalidate");n&&(o["X-Remix-Revalidate"]=n);let s=e.headers.get("X-Remix-Reload-Document");return s&&(o["X-Remix-Reload-Document"]=s),re(t,{status:r,headers:o})}function W(e){if(e.default==null)return;if(!(typeof e.default=="object"&&Object.keys(e.default).length===0))return e.default}function Y(e,r,t){return t&&e.id!=="root"||r.clientLoader!=null&&(r.clientLoader.hydrate===!0||e.hasLoader!==!0)}let R,j=!1;let A,Ae=new Promise(e=>{A=e}).catch(()=>{});function ke(e){if(!R){let s=window.__remixContext.url,d=window.location.pathname;if(s!==d&&!window.__remixContext.isSpaMode){let u=`Initial URL (${s}) does not match URL at time of hydration (${d}), reloading page...`;return console.error(u),window.location.reload(),l.createElement(l.Fragment,null)}let a=D(window.__remixManifest.routes,window.__remixRouteModules,window.__remixContext.state,window.__remixContext.future,window.__remixContext.isSpaMode),i;if(!window.__remixContext.isSpaMode){i={...window.__remixContext.state,loaderData:{...window.__remixContext.state.loaderData}};let u=ne(a,window.location);if(u)for(let _ of u){let c=_.route.id,h=window.__remixRouteModules[c],f=window.__remixManifest.routes[c];h&&Y(f,h,window.__remixContext.isSpaMode)&&(h.HydrateFallback||!f.hasLoader)?i.loaderData[c]=void 0:f&&!f.hasLoader&&(i.loaderData[c]=null)}i&&i.errors&&(i.errors=ce(i.errors))}R=oe({routes:a,history:ie(),basename:window.__remixContext.basename,future:{v7_normalizeFormMethod:!0,v7_fetcherPersist:window.__remixContext.future.v3_fetcherPersist,v7_partialHydration:!0,v7_prependBasename:!0,v7_relativeSplatPath:window.__remixContext.future.v3_relativeSplatPath},hydrationData:i,mapRouteProperties:ae}),R.state.initialized&&(j=!0,R.initialize()),R.createRoutesForHMR=be,window.__remixRouter=R,A&&A(R)}let[r,t]=l.useState(void 0),[o,n]=l.useState(R.state.location);return l.useLayoutEffect(()=>{j||(j=!0,R.initialize())},[]),l.useLayoutEffect(()=>R.subscribe(s=>{s.location!==o&&n(s.location)}),[o]),l.createElement(le.Provider,{value:{manifest:window.__remixManifest,routeModules:window.__remixRouteModules,future:window.__remixContext.future,criticalCss:r,isSpaMode:window.__remixContext.isSpaMode}},l.createElement(ue,{location:o},l.createElement(se,{router:R,fallbackElement:null,future:{v7_startTransition:!0}})))}var V,I=de;I.createRoot,V=I.hydrateRoot;l.startTransition(()=>{V(document,H.jsx(l.StrictMode,{children:H.jsx(ke,{})}))});
