if(!self.define){let e,i={};const n=(n,s)=>(n=new URL(n+".js",s).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(s,r)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(i[o])return;let t={};const c=e=>n(e,o),l={module:{uri:o},exports:t,require:c};i[o]=Promise.all(s.map((e=>l[e]||c(e)))).then((e=>(r(...e),t)))}}define(["./workbox-5ffe50d4"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-BwdV6UwW.js",revision:null},{url:"assets/index-DvnB1QKX.css",revision:null},{url:"index.html",revision:"f62fefd686424728160109761b9369f2"},{url:"registerSW.js",revision:"8154afcb04a381e7885e93e5808e56f8"},{url:"maskable-icon-512x512.png",revision:"d5717d7306e070c7b6c5ecec48c91068"},{url:"pwa-192x192.png",revision:"bc8706908e471aa260521111a0b9fcca"},{url:"pwa-512x512.png",revision:"bebdc26086c7ad69d4059c31ec604f21"},{url:"pwa-64x64.png",revision:"60f8d62ea45e4f173d08a1c5ed5314b4"},{url:"manifest.webmanifest",revision:"644eae38c6022e4bee8bfd82b859ffe1"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
