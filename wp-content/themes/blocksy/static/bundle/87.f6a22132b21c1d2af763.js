"use strict";(self.blocksyJsonP=self.blocksyJsonP||[]).push([[87],{3780:function(t,e,n){n.d(e,{d:function(){return o}});const o=function(t){return t&&"[object Function]"==={}.toString.call(t)?t():t}},9257:function(t,e,n){n.d(e,{O:function(){return o}});const o=function(){return"undefined"!=typeof window&&window.navigator&&window.navigator.platform&&(/iP(ad|hone|od)/.test(window.navigator.platform)||"MacIntel"===window.navigator.platform&&window.navigator.maxTouchPoints>1)}},4087:function(t,e,n){n.r(e),n.d(e,{fetchVideoBy:function(){return d},mount:function(){return g}});var o=n(9679),i=n(9257),r=n(2248),a=n(3780);function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e,n){return(e=function(t){var e=function(t,e){if("object"!=typeof t||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,e||"default");if("object"!=typeof o)return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==typeof e?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}const s={},d=function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e=u({ignoreVideoOptions:!1},e);let n=ct_localizations.ajax_url+"?action=blocksy_get_image_video_component&media="+t;return e.ignoreVideoOptions&&(n+="&ignore_video_options=true"),new Promise((function(t){(function(t){return s[t]?new Promise((function(e){e(s[t]),s[t]=s[t].clone()})):new Promise((function(e){return fetch(t).then((function(n){e(n),s[t]=n.clone()}))}))})(n).then((function(e){200===e.status&&e.json().then((function(e){let{success:n,data:o}=e;n&&t(o)}))}))}))},f=function(t){t.querySelector(".ct-video-indicator").classList.add("loading"),d(t.dataset.mediaId).then((function(e){const n=document.createElement("div");n.innerHTML=e.html;const r=n.firstChild;t.querySelector(".ct-dynamic-media-inner")?t.querySelector(".ct-dynamic-media-inner").insertAdjacentElement("beforeend",r):t.insertAdjacentElement("beforeend",r);const a=t.querySelector("video,iframe"),c=a.closest(".flexy-container[data-autoplay]"),l=null==c?void 0:c.flexy;!function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e=u({onPause:function(){},onPlay:function(){},onReady:function(){}},e),t.isListeningForStateChanges||(t.isListeningForStateChanges=!0,(0,o.pF)(t,(function(n){"pause"===n&&((0,o.Vz)(t),e.onPause()),"play"===n&&(e.onPlay(),(0,o.zT)(t)),"ready"===n&&e.onReady()})))}(a,{onPlay:function(){setTimeout((function(){t.querySelector(".ct-video-indicator").classList.remove("loading")}),120),l&&(l.options=u(u({},l.options),{},{autoplay:!1,_autoplay:!1}))},onPause:function(){l&&(l.options=u(u({},l.options),{},{autoplay:parseInt(c.dataset.autoplay),_autoplay:parseInt(c.dataset.autoplay)}),l.state=u(u({},l.state),{},{lastTimeAnimated:(new Date).getTime()}))},onReady:function(){(0,i.O)()&&(0,o.$0)(a),(0,o.Kz)(a)}})}))},m=function(t){const e=ct_localizations.dynamic_styles_selectors.find((function(t){return".ct-media-container[data-media-id], .ct-dynamic-media[data-media-id]"===t.selector}));e&&(0,r.Xr)(e.url).then((function(){f(t)}))};ctEvents.on("blocksy:frontend:flexy:slide-change",(function(t){let{instance:e,payload:n}=t;const i=(0,a.d)(e.sliderContainer);[...i.querySelectorAll("video,iframe")].map((function(t){return(0,o.r)(t)}));const r=i.children[n.currentIndex].querySelector(".ct-media-container[data-media-id], .ct-dynamic-media[data-media-id]");if(!r)return;const c=r.querySelector("video,iframe");c?(0,o.v3)(c):y(r,{performVisibilityCheck:!1})})),ctEvents.on("blocksy:ajax:filters:done",(function(){[...document.querySelectorAll(".ct-media-container[data-media-id]")].map((function(t){y(t)}))}));const y=function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(e=u({performVisibilityCheck:!0},e),!t.matches('[data-state*="autoplay"]'))return;let n=!0;if(e.performVisibilityCheck&&t.closest(".flexy-items")){const e=t.getBoundingClientRect(),o=t.closest(".flexy-items").getBoundingClientRect();n=e.left>=o.left&&e.left<=o.left+o.width&&e.top>=o.top&&e.top<=o.top+o.height}n&&(t.removeAttribute("data-state"),m(t))};let p=!1;const g=function(t,e){let{event:n}=e;if(!n||"scroll"===n.type){if(p)return;p=!0;const t=function(){[...document.querySelectorAll(".ct-media-container[data-media-id], .ct-dynamic-media[data-media-id]")].map((function(t){y(t)}))};return ctEvents.on("blocksy:frontend:init",(function(){t()})),void t()}const i=t.querySelector("video,iframe");i?t.matches('[data-state="playing"]')?(0,o.r)(i):(0,o.Kz)(i):m(t)}}}]);