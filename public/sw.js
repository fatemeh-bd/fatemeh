if(!self.define){let e,a={};const s=(s,n)=>(s=new URL(s+".js",n).href,a[s]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=a,document.head.appendChild(e)}else e=s,importScripts(s),a()})).then((()=>{let e=a[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(n,i)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(a[t])return;let o={};const f=e=>s(e,t),c={module:{uri:t},exports:o,require:f};a[t]=Promise.all(n.map((e=>c[e]||f(e)))).then((e=>(i(...e),o)))}}define(["./workbox-588899ac"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/Assets/fonts/Roboto/LICENSE.txt",revision:"3b83ef96387f14655fc854ddc3c6bd57"},{url:"/Assets/fonts/Roboto/Roboto-Black.ttf",revision:"d6a6f8878adb0d8e69f9fa2e0b622924"},{url:"/Assets/fonts/Roboto/Roboto-BlackItalic.ttf",revision:"c3332e3b8feff748ecb0c6cb75d65eae"},{url:"/Assets/fonts/Roboto/Roboto-Bold.ttf",revision:"b8e42971dec8d49207a8c8e2b919a6ac"},{url:"/Assets/fonts/Roboto/Roboto-BoldItalic.ttf",revision:"fd6e9700781c4aaae877999d09db9e09"},{url:"/Assets/fonts/Roboto/Roboto-Italic.ttf",revision:"cebd892d1acfcc455f5e52d4104f2719"},{url:"/Assets/fonts/Roboto/Roboto-Light.ttf",revision:"881e150ab929e26d1f812c4342c15a7c"},{url:"/Assets/fonts/Roboto/Roboto-LightItalic.ttf",revision:"5788d5ce921d7a9b4fa0eaa9bf7fec8d"},{url:"/Assets/fonts/Roboto/Roboto-Medium.ttf",revision:"68ea4734cf86bd544650aee05137d7bb"},{url:"/Assets/fonts/Roboto/Roboto-MediumItalic.ttf",revision:"c16d19c2c0fd1278390a82fc245f4923"},{url:"/Assets/fonts/Roboto/Roboto-Regular.ttf",revision:"8a36205bd9b83e03af0591a004bc97f4"},{url:"/Assets/fonts/Roboto/Roboto-Thin.ttf",revision:"66209ae01f484e46679622dd607fcbc5"},{url:"/Assets/fonts/Roboto/Roboto-ThinItalic.ttf",revision:"7bcadd0675fe47d69c2d8aaef683416f"},{url:"/Assets/fonts/dana/dana____.ttf",revision:"53463739f0588f3390ad68f2a3337a66"},{url:"/Assets/fonts/dana/woff/Dana-Black.woff",revision:"fd57be20c7bd7f58af07948596a77b70"},{url:"/Assets/fonts/dana/woff/Dana-Bold.woff",revision:"ca17090bbf4d82b3425225866ee47671"},{url:"/Assets/fonts/dana/woff/Dana-DemiBold.woff",revision:"0a6355ed1066fa931e04d16cfce902ef"},{url:"/Assets/fonts/dana/woff/Dana-ExtraBlack.woff",revision:"4716f0cd6abf67a67a665c64509d9c03"},{url:"/Assets/fonts/dana/woff/Dana-ExtraBold.woff",revision:"f628504ec70112ddd22ee4c7851d88d6"},{url:"/Assets/fonts/dana/woff/Dana-Hairline.woff",revision:"cb66de48c868ebd73be2a8a2a455147c"},{url:"/Assets/fonts/dana/woff/Dana-Heavy.woff",revision:"70bff44c2a4cd56c755337d810924936"},{url:"/Assets/fonts/dana/woff/Dana-Light.woff",revision:"297d0065ea96544b238eaf0735af2234"},{url:"/Assets/fonts/dana/woff/Dana-Medium.woff",revision:"07e978effc90d52404cf8b59e28a982b"},{url:"/Assets/fonts/dana/woff/Dana-Regular.woff",revision:"5d7f17f26526c49f1453e48fc545c6c6"},{url:"/Assets/fonts/dana/woff/Dana-Thin.woff",revision:"d13dd46b025178ea9575b878fb08c719"},{url:"/Assets/fonts/dana/woff/Dana-UltraLight.woff",revision:"193b3942334d835a9812257ba5b3274e"},{url:"/Assets/fonts/dana/woff/Dana-fat.woff",revision:"8ff3e3279fa90c95bf52cbdde5b45512"},{url:"/Assets/fonts/dana/woff2/Dana-Black.woff2",revision:"7a03038a562eab5b676f8ac5563e2a43"},{url:"/Assets/fonts/dana/woff2/Dana-Bold.woff2",revision:"fa5ade285fb115e438774743a29ff46d"},{url:"/Assets/fonts/dana/woff2/Dana-DemiBold.woff2",revision:"cab6c4e351b4ad3fbe56e84475bb17c0"},{url:"/Assets/fonts/dana/woff2/Dana-ExtraBlack.woff2",revision:"6473dc16a67f9a54ce5b938b7c849923"},{url:"/Assets/fonts/dana/woff2/Dana-ExtraBold.woff2",revision:"452150263c0a78ea831112c26aa71728"},{url:"/Assets/fonts/dana/woff2/Dana-Hairline.woff2",revision:"c89fc161f1b848d023e592cc836c8408"},{url:"/Assets/fonts/dana/woff2/Dana-Heavy.woff2",revision:"619466e7b245433b7d4f1fbec3f7fa52"},{url:"/Assets/fonts/dana/woff2/Dana-Light.woff2",revision:"0f57e2c688d1b4a763a9eef6e0a8bb2d"},{url:"/Assets/fonts/dana/woff2/Dana-Medium.woff2",revision:"50cb06d060d9713ac512fbfddceb6f32"},{url:"/Assets/fonts/dana/woff2/Dana-Regular.woff2",revision:"f647057258ebbb40518a622f46917cfb"},{url:"/Assets/fonts/dana/woff2/Dana-Thin.woff2",revision:"ee31f0bc759eea931a13076820dd2458"},{url:"/Assets/fonts/dana/woff2/Dana-UltraLight.woff2",revision:"daedfc553f10989ffd06417f44f75b97"},{url:"/Assets/fonts/dana/woff2/Dana-fat.woff2",revision:"f0b10e1cd3ffb4bcaa9338850bdc0544"},{url:"/Assets/images/3DAbstractBall.mp4",revision:"bfa4469b12880c98b4d4f58f5c609fa8"},{url:"/Assets/images/EarthLinesSphere.mp4",revision:"c866a4235a5c473fd2937e7a42fed9d6"},{url:"/Assets/images/LiquidsWavy.mp4",revision:"4aeff89a1cd20c458b73b3c388b35ee9"},{url:"/Assets/images/SimpleStrings.mp4",revision:"01d7db92a0e1aed5e532965e38db1421"},{url:"/Assets/images/WaterWaves.mp4",revision:"7ecbcc8b5a516025701ca8336b919a4a"},{url:"/Assets/images/asanbot.png",revision:"39d507eeabbed448d18135012de6b3d3"},{url:"/Assets/images/asanbot2.png",revision:"aa4f381f983977c0d3cd0ac15cadcd0b"},{url:"/Assets/images/asanbot3.png",revision:"4c226292f69c8eabc47a83c0a352f0b0"},{url:"/Assets/images/asanbot4.png",revision:"1a70e5357724155334516e4317409d54"},{url:"/Assets/images/asanbot5.png",revision:"37ec33e4398e13109be36a3fff631ec9"},{url:"/Assets/images/asanbot6.png",revision:"2c062895396a5e21ff7421675865762b"},{url:"/Assets/images/baridaryanResume.pdf",revision:"f169598ed1432b12f192a3652220120b"},{url:"/Assets/images/customerPanel.png",revision:"81dc252272ee9633c89eb28b579c715c"},{url:"/Assets/images/fatemeh.jpeg",revision:"1d04d5ab8eb9a5c2f5a3bd723a3bd8d8"},{url:"/Assets/images/fatemeh2.jpeg",revision:"82daa352f1ab6ca4863950f752d26272"},{url:"/Assets/images/fatemeh3.jpeg",revision:"b128ce7f173958c2623145d5cc575306"},{url:"/Assets/images/karma.png",revision:"3eedd554189ea207d6fb75ef8fb0415d"},{url:"/Assets/images/logo.svg",revision:"80e569daf7fd70537795556cc20fed7d"},{url:"/Assets/images/melina2.png",revision:"5a3d5867764ab6b4dffaaeaa679e52c5"},{url:"/Assets/images/melina3.png",revision:"2fc6e418e45174f7399adbc957115716"},{url:"/Assets/images/melina4.png",revision:"45e4cd1ae971d52580af6dfc87325690"},{url:"/Assets/images/melina5.png",revision:"5dfba576902f68e256a6b31e55359905"},{url:"/Assets/images/melinataj.png",revision:"59d56a85e52b143cb4c2e6eb676e3810"},{url:"/Assets/images/panelAdmin.png",revision:"75ce0c2fde1f4aaa7d852525cfd5a8a0"},{url:"/Assets/images/panelMedia.png",revision:"5ca86ae18f630e46ba6751e2ae798611"},{url:"/Assets/images/plof.png",revision:"09540af7e15e4a444a03d21e6842ac87"},{url:"/Assets/images/round-text.png",revision:"422870f21573a521e1aeb823824a0367"},{url:"/_next/static/MKCEaWWC-t16simuPO9qi/_buildManifest.js",revision:"737e3b218fd8a7285b3b8721d8d104b1"},{url:"/_next/static/MKCEaWWC-t16simuPO9qi/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/602-ba1ad0ea32c1961b.js",revision:"ba1ad0ea32c1961b"},{url:"/_next/static/chunks/framework-2c79e2a64abdb08b.js",revision:"2c79e2a64abdb08b"},{url:"/_next/static/chunks/main-2ed7c24b26d64108.js",revision:"2ed7c24b26d64108"},{url:"/_next/static/chunks/pages/_app-e050418c6d679ce0.js",revision:"e050418c6d679ce0"},{url:"/_next/static/chunks/pages/_error-8353112a01355ec2.js",revision:"8353112a01355ec2"},{url:"/_next/static/chunks/pages/index-640b1c0e0ec59258.js",revision:"640b1c0e0ec59258"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-f164db4954bac6ec.js",revision:"f164db4954bac6ec"},{url:"/_next/static/css/51ba0db0cc6b311b.css",revision:"51ba0db0cc6b311b"},{url:"/_next/static/css/ba361dc823d856c9.css",revision:"ba361dc823d856c9"},{url:"/_next/static/media/Dana-Light.24c535ae.woff2",revision:"24c535ae"},{url:"/_next/static/media/Dana-Light.db53d6d1.woff",revision:"db53d6d1"},{url:"/_next/static/media/Dana-Medium.4a367c77.woff",revision:"4a367c77"},{url:"/_next/static/media/Dana-Medium.d5c16fe5.woff2",revision:"d5c16fe5"},{url:"/_next/static/media/Roboto-Bold.c36a3fe0.ttf",revision:"c36a3fe0"},{url:"/_next/static/media/Roboto-Light.1ad50b89.ttf",revision:"1ad50b89"},{url:"/_next/static/media/asanbot.fb0e0346.png",revision:"39d507eeabbed448d18135012de6b3d3"},{url:"/_next/static/media/asanbot2.98a26ac6.png",revision:"aa4f381f983977c0d3cd0ac15cadcd0b"},{url:"/_next/static/media/asanbot3.a13eca97.png",revision:"4c226292f69c8eabc47a83c0a352f0b0"},{url:"/_next/static/media/asanbot4.f54be2af.png",revision:"1a70e5357724155334516e4317409d54"},{url:"/_next/static/media/asanbot5.f28c773b.png",revision:"37ec33e4398e13109be36a3fff631ec9"},{url:"/_next/static/media/asanbot6.a695dcaa.png",revision:"2c062895396a5e21ff7421675865762b"},{url:"/_next/static/media/customerPanel.481db542.png",revision:"81dc252272ee9633c89eb28b579c715c"},{url:"/_next/static/media/fatemeh.5c6c375e.jpeg",revision:"1d04d5ab8eb9a5c2f5a3bd723a3bd8d8"},{url:"/_next/static/media/karma.e9a12453.png",revision:"3eedd554189ea207d6fb75ef8fb0415d"},{url:"/_next/static/media/logo.d3c7084a.svg",revision:"80e569daf7fd70537795556cc20fed7d"},{url:"/_next/static/media/melina2.d8427d91.png",revision:"5a3d5867764ab6b4dffaaeaa679e52c5"},{url:"/_next/static/media/melina3.79fe4629.png",revision:"2fc6e418e45174f7399adbc957115716"},{url:"/_next/static/media/melina4.5b2c91e7.png",revision:"45e4cd1ae971d52580af6dfc87325690"},{url:"/_next/static/media/melina5.a5c804cf.png",revision:"5dfba576902f68e256a6b31e55359905"},{url:"/_next/static/media/melinataj.ae7f85e9.png",revision:"59d56a85e52b143cb4c2e6eb676e3810"},{url:"/_next/static/media/panelAdmin.5f68a54b.png",revision:"75ce0c2fde1f4aaa7d852525cfd5a8a0"},{url:"/_next/static/media/panelMedia.9702c53b.png",revision:"5ca86ae18f630e46ba6751e2ae798611"},{url:"/_next/static/media/plof.7cbba63a.png",revision:"09540af7e15e4a444a03d21e6842ac87"},{url:"/_next/static/media/round-text.374eb5a3.png",revision:"422870f21573a521e1aeb823824a0367"},{url:"/bd.png",revision:"89ecd83a1ade4ca74036d26723927dc5"},{url:"/favicon.ico",revision:"658c35cbb0fa2a12252e40e7a411da2c"},{url:"/locales/en/common.json",revision:"f41b1555c97a564a4be312ae73ded14e"},{url:"/locales/fa/common.json",revision:"5adee6eac25314f8e5412c53dbaf92f7"},{url:"/manifest.json",revision:"5911be7ee74a34d1dba237df3c3ef59a"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/thirteen.svg",revision:"53f96b8290673ef9d2895908e69b2f92"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:a,event:s,state:n})=>a&&"opaqueredirect"===a.type?new Response(a.body,{status:200,statusText:"OK",headers:a.headers}):a}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const a=e.pathname;return!a.startsWith("/api/auth/")&&!!a.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
