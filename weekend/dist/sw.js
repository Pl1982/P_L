if(!self.define){let e,t={};const n=(n,i)=>(n=new URL(n+".js",i).href,t[n]||new Promise((t=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=t,document.head.appendChild(e)}else e=n,importScripts(n),t()})).then((()=>{let e=t[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(i,o)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(t[r])return;let s={};const f=e=>n(e,r),l={module:{uri:r},exports:s,require:f};t[r]=Promise.all(i.map((e=>l[e]||f(e)))).then((e=>(o(...e),s)))}}define(["./workbox-fa446783"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"manifest.webmanifest",revision:"24bd413967d317837430fe1f99f40beb"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));