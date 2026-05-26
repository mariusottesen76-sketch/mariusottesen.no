(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,88143,(e,t,r)=>{"use strict";function n({widthInt:e,heightInt:t,blurWidth:r,blurHeight:n,blurDataURL:i,objectFit:s}){let a=r?40*r:e,o=n?40*n:t,l=a&&o?`viewBox='0 0 ${a} ${o}'`:"";return`%3Csvg xmlns='http://www.w3.org/2000/svg' ${l}%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='${l?"none":"contain"===s?"xMidYMid":"cover"===s?"xMidYMid slice":"none"}' style='filter: url(%23b);' href='${i}'/%3E%3C/svg%3E`}Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"getImageBlurSvg",{enumerable:!0,get:function(){return n}})},87690,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n={VALID_LOADERS:function(){return s},imageConfigDefault:function(){return a}};for(var i in n)Object.defineProperty(r,i,{enumerable:!0,get:n[i]});let s=["default","imgix","cloudinary","akamai","custom"],a={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:14400,formats:["image/webp"],maximumRedirects:3,maximumResponseBody:5e7,dangerouslyAllowLocalIP:!1,dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"attachment",localPatterns:void 0,remotePatterns:[],qualities:[75],unoptimized:!1}},8927,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"getImgProps",{enumerable:!0,get:function(){return d}}),e.r(33525);let n=e.r(43369),i=e.r(88143),s=e.r(87690),a=["-moz-initial","fill","none","scale-down",void 0];function o(e){return void 0!==e.default}function l(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function d({src:e,sizes:t,unoptimized:r=!1,priority:d=!1,preload:g=!1,loading:m,className:h,quality:c,width:k,height:u,fill:p=!1,style:f,overrideSrc:v,onLoad:x,onLoadingComplete:b,placeholder:y="empty",blurDataURL:w,fetchPriority:j,decoding:I="async",layout:A,objectFit:T,objectPosition:N,lazyBoundary:D,lazyRoot:S,...M},C){var E;let B,F,P,{imgConf:O,showAltText:z,blurComplete:G,defaultLoader:L}=C,R=O||s.imageConfigDefault;if("allSizes"in R)B=R;else{let e=[...R.deviceSizes,...R.imageSizes].sort((e,t)=>e-t),t=R.deviceSizes.sort((e,t)=>e-t),r=R.qualities?.sort((e,t)=>e-t);B={...R,allSizes:e,deviceSizes:t,qualities:r}}if(void 0===L)throw Object.defineProperty(Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config"),"__NEXT_ERROR_CODE",{value:"E163",enumerable:!1,configurable:!0});let H=M.loader||L;delete M.loader,delete M.srcSet;let W="__next_img_default"in H;if(W){if("custom"===B.loader)throw Object.defineProperty(Error(`Image with src "${e}" is missing "loader" prop.
Read more: https://nextjs.org/docs/messages/next-image-missing-loader`),"__NEXT_ERROR_CODE",{value:"E252",enumerable:!1,configurable:!0})}else{let e=H;H=t=>{let{config:r,...n}=t;return e(n)}}if(A){"fill"===A&&(p=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[A];e&&(f={...f,...e});let r={responsive:"100vw",fill:"100vw"}[A];r&&!t&&(t=r)}let K="",U=l(k),q=l(u);if((E=e)&&"object"==typeof E&&(o(E)||void 0!==E.src)){let t=o(e)?e.default:e;if(!t.src)throw Object.defineProperty(Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ${JSON.stringify(t)}`),"__NEXT_ERROR_CODE",{value:"E460",enumerable:!1,configurable:!0});if(!t.height||!t.width)throw Object.defineProperty(Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ${JSON.stringify(t)}`),"__NEXT_ERROR_CODE",{value:"E48",enumerable:!1,configurable:!0});if(F=t.blurWidth,P=t.blurHeight,w=w||t.blurDataURL,K=t.src,!p)if(U||q){if(U&&!q){let e=U/t.width;q=Math.round(t.height*e)}else if(!U&&q){let e=q/t.height;U=Math.round(t.width*e)}}else U=t.width,q=t.height}let V=!d&&!g&&("lazy"===m||void 0===m);(!(e="string"==typeof e?e:K)||e.startsWith("data:")||e.startsWith("blob:"))&&(r=!0,V=!1),B.unoptimized&&(r=!0),W&&!B.dangerouslyAllowSVG&&e.split("?",1)[0].endsWith(".svg")&&(r=!0);let _=l(c),J=Object.assign(p?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:T,objectPosition:N}:{},z?{}:{color:"transparent"},f),$=G||"empty"===y?null:"blur"===y?`url("data:image/svg+xml;charset=utf-8,${(0,i.getImageBlurSvg)({widthInt:U,heightInt:q,blurWidth:F,blurHeight:P,blurDataURL:w||"",objectFit:J.objectFit})}")`:`url("${y}")`,Y=a.includes(J.objectFit)?"fill"===J.objectFit?"100% 100%":"cover":J.objectFit,Q=$?{backgroundSize:Y,backgroundPosition:J.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:$}:{},X=function({config:e,src:t,unoptimized:r,width:i,quality:s,sizes:a,loader:o}){if(r){let e=(0,n.getDeploymentId)();if(t.startsWith("/")&&!t.startsWith("//")&&e){let r=t.includes("?")?"&":"?";t=`${t}${r}dpl=${e}`}return{src:t,srcSet:void 0,sizes:void 0}}let{widths:l,kind:d}=function({deviceSizes:e,allSizes:t},r,n){if(n){let r=/(^|\s)(1?\d?\d)vw/g,i=[];for(let e;e=r.exec(n);)i.push(parseInt(e[2]));if(i.length){let r=.01*Math.min(...i);return{widths:t.filter(t=>t>=e[0]*r),kind:"w"}}return{widths:t,kind:"w"}}return"number"!=typeof r?{widths:e,kind:"w"}:{widths:[...new Set([r,2*r].map(e=>t.find(t=>t>=e)||t[t.length-1]))],kind:"x"}}(e,i,a),g=l.length-1;return{sizes:a||"w"!==d?a:"100vw",srcSet:l.map((r,n)=>`${o({config:e,src:t,quality:s,width:r})} ${"w"===d?r:n+1}${d}`).join(", "),src:o({config:e,src:t,quality:s,width:l[g]})}}({config:B,src:e,unoptimized:r,width:U,quality:_,sizes:t,loader:H}),Z=V?"lazy":m;return{props:{...M,loading:Z,fetchPriority:j,width:U,height:q,decoding:I,className:h,style:{...J,...Q},sizes:X.sizes,srcSet:X.srcSet,src:v||X.src},meta:{unoptimized:r,preload:g||d,placeholder:y,fill:p}}}},98879,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"default",{enumerable:!0,get:function(){return o}});let n=e.r(71645),i="u"<typeof window,s=i?()=>{}:n.useLayoutEffect,a=i?()=>{}:n.useEffect;function o(e){let{headManager:t,reduceComponentsToState:r}=e;function o(){if(t&&t.mountedInstances){let e=n.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));t.updateHead(r(e))}}return i&&(t?.mountedInstances?.add(e.children),o()),s(()=>(t?.mountedInstances?.add(e.children),()=>{t?.mountedInstances?.delete(e.children)})),s(()=>(t&&(t._pendingUpdate=o),()=>{t&&(t._pendingUpdate=o)})),a(()=>(t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null),()=>{t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null)})),null}},25633,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n={default:function(){return u},defaultHead:function(){return m}};for(var i in n)Object.defineProperty(r,i,{enumerable:!0,get:n[i]});let s=e.r(55682),a=e.r(90809),o=e.r(43476),l=a._(e.r(71645)),d=s._(e.r(98879)),g=e.r(42732);function m(){return[(0,o.jsx)("meta",{charSet:"utf-8"},"charset"),(0,o.jsx)("meta",{name:"viewport",content:"width=device-width"},"viewport")]}function h(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===l.default.Fragment?e.concat(l.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}e.r(33525);let c=["name","httpEquiv","charSet","itemProp"];function k(e){let t,r,n,i;return e.reduce(h,[]).reverse().concat(m().reverse()).filter((t=new Set,r=new Set,n=new Set,i={},e=>{let s=!0,a=!1;if(e.key&&"number"!=typeof e.key&&e.key.indexOf("$")>0){a=!0;let r=e.key.slice(e.key.indexOf("$")+1);t.has(r)?s=!1:t.add(r)}switch(e.type){case"title":case"base":r.has(e.type)?s=!1:r.add(e.type);break;case"meta":for(let t=0,r=c.length;t<r;t++){let r=c[t];if(e.props.hasOwnProperty(r))if("charSet"===r)n.has(r)?s=!1:n.add(r);else{let t=e.props[r],n=i[r]||new Set;("name"!==r||!a)&&n.has(t)?s=!1:(n.add(t),i[r]=n)}}}return s})).reverse().map((e,t)=>{let r=e.key||t;return l.default.cloneElement(e,{key:r})})}let u=function({children:e}){let t=(0,l.useContext)(g.HeadManagerContext);return(0,o.jsx)(d.default,{reduceComponentsToState:k,headManager:t,children:e})};("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},18556,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"ImageConfigContext",{enumerable:!0,get:function(){return s}});let n=e.r(55682)._(e.r(71645)),i=e.r(87690),s=n.default.createContext(i.imageConfigDefault)},65856,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"RouterContext",{enumerable:!0,get:function(){return n}});let n=e.r(55682)._(e.r(71645)).default.createContext(null)},70965,(e,t,r)=>{"use strict";function n(e,t){let r=e||75;return t?.qualities?.length?t.qualities.reduce((e,t)=>Math.abs(t-r)<Math.abs(e-r)?t:e,0):r}Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"findClosestQuality",{enumerable:!0,get:function(){return n}})},1948,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"default",{enumerable:!0,get:function(){return a}});let n=e.r(70965),i=e.r(43369);function s({config:e,src:t,width:r,quality:s}){if(t.startsWith("/")&&t.includes("?")&&e.localPatterns?.length===1&&"**"===e.localPatterns[0].pathname&&""===e.localPatterns[0].search)throw Object.defineProperty(Error(`Image with src "${t}" is using a query string which is not configured in images.localPatterns.
Read more: https://nextjs.org/docs/messages/next-image-unconfigured-localpatterns`),"__NEXT_ERROR_CODE",{value:"E871",enumerable:!1,configurable:!0});let a=(0,n.findClosestQuality)(s,e),o=(0,i.getDeploymentId)();return`${e.path}?url=${encodeURIComponent(t)}&w=${r}&q=${a}${t.startsWith("/")&&o?`&dpl=${o}`:""}`}s.__next_img_default=!0;let a=s},5500,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"Image",{enumerable:!0,get:function(){return b}});let n=e.r(55682),i=e.r(90809),s=e.r(43476),a=i._(e.r(71645)),o=n._(e.r(74080)),l=n._(e.r(25633)),d=e.r(8927),g=e.r(87690),m=e.r(18556);e.r(33525);let h=e.r(65856),c=n._(e.r(1948)),k=e.r(18581),u={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[32,48,64,96,128,256,384],qualities:[75],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function p(e,t,r,n,i,s,a){let o=e?.src;e&&e["data-loaded-src"]!==o&&(e["data-loaded-src"]=o,("decode"in e?e.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&i(!0),r?.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let n=!1,i=!1;r.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>n,isPropagationStopped:()=>i,persist:()=>{},preventDefault:()=>{n=!0,t.preventDefault()},stopPropagation:()=>{i=!0,t.stopPropagation()}})}n?.current&&n.current(e)}}))}function f(e){return a.use?{fetchPriority:e}:{fetchpriority:e}}"u"<typeof window&&(globalThis.__NEXT_IMAGE_IMPORTED=!0);let v=(0,a.forwardRef)(({src:e,srcSet:t,sizes:r,height:n,width:i,decoding:o,className:l,style:d,fetchPriority:g,placeholder:m,loading:h,unoptimized:c,fill:u,onLoadRef:v,onLoadingCompleteRef:x,setBlurComplete:b,setShowAltText:y,sizesInput:w,onLoad:j,onError:I,...A},T)=>{let N=(0,a.useCallback)(e=>{e&&(I&&(e.src=e.src),e.complete&&p(e,m,v,x,b,c,w))},[e,m,v,x,b,I,c,w]),D=(0,k.useMergedRef)(T,N);return(0,s.jsx)("img",{...A,...f(g),loading:h,width:i,height:n,decoding:o,"data-nimg":u?"fill":"1",className:l,style:d,sizes:r,srcSet:t,src:e,ref:D,onLoad:e=>{p(e.currentTarget,m,v,x,b,c,w)},onError:e=>{y(!0),"empty"!==m&&b(!0),I&&I(e)}})});function x({isAppRouter:e,imgAttributes:t}){let r={as:"image",imageSrcSet:t.srcSet,imageSizes:t.sizes,crossOrigin:t.crossOrigin,referrerPolicy:t.referrerPolicy,...f(t.fetchPriority)};return e&&o.default.preload?(o.default.preload(t.src,r),null):(0,s.jsx)(l.default,{children:(0,s.jsx)("link",{rel:"preload",href:t.srcSet?void 0:t.src,...r},"__nimg-"+t.src+t.srcSet+t.sizes)})}let b=(0,a.forwardRef)((e,t)=>{let r=(0,a.useContext)(h.RouterContext),n=(0,a.useContext)(m.ImageConfigContext),i=(0,a.useMemo)(()=>{let e=u||n||g.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t),i=e.qualities?.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:r,qualities:i,localPatterns:"u"<typeof window?n?.localPatterns:e.localPatterns}},[n]),{onLoad:o,onLoadingComplete:l}=e,k=(0,a.useRef)(o);(0,a.useEffect)(()=>{k.current=o},[o]);let p=(0,a.useRef)(l);(0,a.useEffect)(()=>{p.current=l},[l]);let[f,b]=(0,a.useState)(!1),[y,w]=(0,a.useState)(!1),{props:j,meta:I}=(0,d.getImgProps)(e,{defaultLoader:c.default,imgConf:i,blurComplete:f,showAltText:y});return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(v,{...j,unoptimized:I.unoptimized,placeholder:I.placeholder,fill:I.fill,onLoadRef:k,onLoadingCompleteRef:p,setBlurComplete:b,setShowAltText:w,sizesInput:e.sizes,ref:t}),I.preload?(0,s.jsx)(x,{isAppRouter:!r,imgAttributes:j}):null]})});("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},94909,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n={default:function(){return g},getImageProps:function(){return d}};for(var i in n)Object.defineProperty(r,i,{enumerable:!0,get:n[i]});let s=e.r(55682),a=e.r(8927),o=e.r(5500),l=s._(e.r(1948));function d(e){let{props:t}=(0,a.getImgProps)(e,{defaultLoader:l.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[32,48,64,96,128,256,384],qualities:[75],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}}let g=o.Image},57688,(e,t,r)=>{t.exports=e.r(94909)},18566,(e,t,r)=>{t.exports=e.r(76562)},52683,e=>{"use strict";var t=e.i(43476),r=e.i(71645),n=e.i(57688),i=e.i(18566),s=e.i(75254);let a=(0,s.default)("shield-check",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]),o=(0,s.default)("zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]),l=(0,s.default)("globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]),d=(0,s.default)("target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]),g=(0,s.default)("star",[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]]),m=(0,s.default)("brain",[["path",{d:"M12 18V5",key:"adv99a"}],["path",{d:"M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4",key:"1e3is1"}],["path",{d:"M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5",key:"1gqd8o"}],["path",{d:"M17.997 5.125a4 4 0 0 1 2.526 5.77",key:"iwvgf7"}],["path",{d:"M18 18a4 4 0 0 0 2-7.464",key:"efp6ie"}],["path",{d:"M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517",key:"1gq6am"}],["path",{d:"M6 18a4 4 0 0 1-2-7.464",key:"k1g0md"}],["path",{d:"M6.003 5.125a4 4 0 0 0-2.526 5.77",key:"q97ue3"}]]),h=(0,s.default)("users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]]),c=(0,s.default)("arrow-right",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]),k={no:{hoved:`Kommersiell leder som skaper fremdrift, tillit og resultater der strategi m\xe5 omsettes til praksis, og mennesker, drift og teknologi m\xe5 fungere sammen.<br /><br />Jeg har bygget og ledet nasjonale salgsorganisasjoner med helhetlig P/L-ansvar, og leder i dag kommersiell utvikling og forretningsn\xe6r AI der strategi, drift og gjennomf\xf8ring m\xe5 henge sammen.<br /><br />Gjennom <a href="https://www.mariusottesen.no/consulting">Marius Ottesen Consulting</a> utvikler jeg virksomhetsn\xe6re AI-initiativer innen kundereise, prosessforbedring og operativ modernisering. P\xe5 <a href="/prosjekter">siden for mine AI-prosjekter</a> kan du lese mer om utvalgte initiativer og prosjekter.<br /><br />Jeg har ogs\xe5 tatt initiativ til <a href="https://www.linkedin.com/company/aivaluelaboslo/" target="_blank" rel="noopener noreferrer">AI Value Lab Oslo</a>, et utviklings- og innovasjonsmilj\xf8 for testing av AI-konsepter med tydelig kobling til forretningsverdi.`,lederskap:`Jeg trives best i situasjoner der retning, prioritering og gjennomf\xf8ring er avgj\xf8rende. Bidrar til \xe5 styrke kommersiell slagkraft, forbedre samspill mellom marked, salg og drift, og bygge team som leverer resultater over tid.

Jeg tror p\xe5 styrkebasert ledelse, tydelige forventninger og n\xe6r oppf\xf8lging. Lederstilen er tydelig, involverende og relasjonssterk, og kjennetegnes av trygghet, eierskap og gjennomf\xf8ring – ogs\xe5 i milj\xf8er med h\xf8yt tempo og sterke fagmilj\xf8er. Trives i hybride lederroller som kombinerer strategisk ansvar med operativ tilstedev\xe6relse.`,bransje:`Har erfaring fra komplekse B2B-virksomheter innen blant annet sirkul\xe6r \xf8konomi, life science, industri, teknologi og retail/grossist. Fellesnevneren er kommersiell ledelse, endringsarbeid og evnen til \xe5 skape struktur, retning og resultater p\xe5 tvers av fagmilj\xf8er og lokasjoner.`,utdanning:`Gjennom masterkurset *Generative AI for Business* ved Handelsh\xf8yskolen BI har jeg utviklet strategisk AI-kompetanse med fokus p\xe5 lederverkt\xf8y for beslutningsst\xf8tte, effektiv dokumentasjon og \xf8kt kommersiell effektivitet.

Studiet har ogs\xe5 gitt en bred innf\xf8ring i hele AI-reisen: fra identifisering av behov og muligheter, analyse og strukturering av store datamengder, samt forankring og eierskap i organisasjonen, til bruk av modeller og programmer koblet mot kjerneprosesser, roadmaps, implementering, governance og ikke minst skaleringsmuligheter som ledere m\xe5 forst\xe5 og h\xe5ndtere.

Utenfor pensum har jeg blant annet bygget agentl\xf8sninger, nettsider, AI-assistert innsikts- og innholdsmotor og AI-arkitektur for beslutningsst\xf8tte. Det har gitt meg enda st\xf8rre innsikt i mulighetsrommet, og i hvordan dette allerede er verdiskapende for virksomheter.

Jeg er utdannet *Master of Science in Business Administration (Sivil\xf8konom)* fra USA, og har en *Executive Master of Management* fra BI med spesialisering i strategi, kommunikasjon og AI.`,kompetanse:["Kommersiell ledelse & salgsstrategi","Resultatansvar (P/L), lønnsomhet & verdiskaping","Endringsledelse & team / organisasjonsutvikling","Samspill mellom strategi, drift & gjennomføring","Kunde-, marked- & interessenthåndtering","Digital utvikling & AI som lederverktøy"],styrker:["Gjennomføringskraft","Strategisk drivkraft","Påvirkning og engasjement","Relasjonsintelligens","Endrings- & innovasjonskraft"]},en:{hoved:'A commercially driven leader who creates momentum, trust, and results where strategy must translate into practice, and people, operations, and technology must work together.<br /><br />I have built and led national sales organisations with full P&L accountability, and today lead commercial development and business-near AI where strategy, operations, and execution must align.<br /><br />Through <a href="https://www.mariusottesen.no/consulting">Marius Ottesen Consulting</a>, I develop business-near AI initiatives in customer journeys, process improvement, and operational modernisation. On the <a href="/prosjekter">page for my AI projects</a> you can read more about selected initiatives and projects.<br /><br />I have also initiated <a href="https://www.linkedin.com/company/aivaluelaboslo/" target="_blank" rel="noopener noreferrer">AI Value Lab Oslo</a>, a development and innovation environment for testing AI concepts with a clear link to business value.',lederskap:`I thrive best where direction, prioritisation, and execution are what matter. I help strengthen commercial firepower, improve the interplay between marketing, sales, and operations, and build teams that deliver results over time.

I believe in strengths-based leadership, clear expectations, and close follow-up. My leadership style is clear, engaging, and relationship-oriented — characterised by psychological safety, ownership, and disciplined execution — also in fast-paced environments with strong specialist cultures. I thrive in hybrid leadership roles that combine strategic responsibility with operational presence.`,bransje:"I have experience from complex B2B organisations in areas including circular economy, life science, industry, technology, and retail/wholesale. The common thread is commercial leadership, change work, and the ability to create structure, direction, and results across professional environments and locations.",utdanning:`Through the master's course *Generative AI for Business* at BI Norwegian Business School, I have developed strategic AI competence focused on leadership tools for decision support, efficient documentation, and enhanced commercial effectiveness.

The programme has also provided a broad introduction to the full AI journey: from identifying needs and opportunities, analysing and structuring large data sets, and anchoring ownership in the organisation, to using models and applications connected to core processes, roadmaps, implementation, governance, and the scaling opportunities leaders must understand and manage.

Beyond the curriculum, I have built agent-based solutions, websites, an AI-assisted insights and content engine, and AI architecture for decision support. This has deepened my view of the opportunity space and how it already creates value for organisations.

I hold a *Master of Science in Business Administration* from the University of Utah (USA), and an *Executive Master of Management* from BI Norwegian Business School, specialising in strategy, communication, and AI.`,kompetanse:["Commercial leadership & go-to-market strategy","P&L ownership, profitability & value creation","Change management & organisational development","Strategic alignment across operations & execution","Customer, market & stakeholder engagement","Digital transformation & AI as a leadership tool"],styrker:["Execution power","Strategic vision & drive","Influence & stakeholder engagement","Relational intelligence","Change & innovation leadership"]}};k.no;let u=(0,r.createContext)({lang:"no",setLang:()=>{},t:e=>e});function p({children:e}){let[n,i]=(0,r.useState)("no");return(0,r.useEffect)(()=>{document.documentElement.lang="no"===n?"no":"en"},[n]),(0,t.jsx)(u.Provider,{value:{lang:n,setLang:i,t:(e,t)=>"no"===n?e:t},children:e})}function f(){return(0,r.useContext)(u)}function v(){let{lang:e,setLang:r}=f();return(0,t.jsxs)("div",{className:"flex items-center gap-1.5 shrink-0",children:[(0,t.jsx)("button",{onClick:()=>r("no"),className:`transition-all rounded-sm overflow-hidden ${"no"===e?"opacity-100 ring-2 ring-indigo-500 scale-110":"opacity-40 hover:opacity-70"}`,title:"Norsk","aria-label":"Bytt til norsk",children:(0,t.jsx)(n.default,{src:"/images/norsk-flagg.png",alt:"Norsk",width:24,height:16,className:"w-6 h-4 object-cover rounded-sm",unoptimized:!0})}),(0,t.jsx)("button",{onClick:()=>r("en"),className:`transition-all rounded-sm overflow-hidden ${"en"===e?"opacity-100 ring-2 ring-indigo-500 scale-110":"opacity-40 hover:opacity-70"}`,title:"English","aria-label":"Switch to English",children:(0,t.jsx)(n.default,{src:"/images/engelsk-flagg.jfif",alt:"English",width:24,height:16,className:"w-6 h-4 object-cover rounded-sm",unoptimized:!0})})]})}let x={"tab.profil":{no:"Profil",en:"Profile"},"tab.erfaring":{no:"Erfaring",en:"Experience"},"tab.resultater":{no:"Resultater",en:"Results"},"tab.referanser":{no:"Referanser",en:"References"},"tab.faginnlegg":{no:"Faginnlegg",en:"Articles"},"tab.prosjekter":{no:"AI-prosjekter",en:"AI Projects"},"tab.consulting":{no:"Consulting",en:"Consulting"},"tab.cv":{no:"CV & Åpen søknad",en:"CV & Application"},"tab.kontakt":{no:"Kontakt",en:"Contact"},"profil.vp.headline":{no:"Brobygger mellom kommersiell strategi og konkret AI-implementering",en:"Bridge between commercial strategy and hands-on AI implementation"},"profil.vp.sub":{no:"Erfaring fra nasjonal kommersiell ledelse og anvendbar AI-kompetanse — for virksomheter som vil identifisere kjerneprosesser, styrke beslutningsgrunnlaget og realisere målbar verdi av ny teknologi.",en:"National commercial leadership experience and applied AI expertise — for organisations that want to identify core processes, elevate executive decision-making, and realise measurable value from new technology."},"profil.tittel":{no:"Kommersiell leder | Vekst, transformasjon & AI",en:"Commercial leader | Growth, transformation & AI"},"profil.selskap.desc":{no:"Jeg leverer rådgivning og implementering innen AI-strategi, prosessoptimalisering og digital transformasjon — mellom ledelse, forretning og teknologi. I samarbeid med et nettverk av tekniske eksperter omsetter vi AI-muligheter til konkret kommersiell verdi.",en:"I deliver advisory and implementation across AI strategy, process optimisation, and digital transformation — connecting leadership, business, and technology. With a curated network of technical specialists, we convert AI opportunities into tangible commercial outcomes."},"profil.chip.ai":{no:"AI-Strategi & Rådgivning",en:"AI Strategy & Advisory"},"profil.chip.prosess":{no:"Prosess-optimalisering",en:"Process Optimisation"},"profil.chip.digital":{no:"Digital Transformasjon",en:"Digital Transformation"},"profil.chip.workshops":{no:"Workshops & Opplæring",en:"Workshops & Capability Building"},"profil.cta.tjenester":{no:"Se fullstendig tjenestetilbud",en:"Explore full service offering"},"profil.operativ.title":{no:"Operativ kraft & lederskap",en:"Operational Excellence & Leadership"},"profil.bransje.title":{no:"Bransjeerfaring & kommersiell tyngde",en:"Industry Experience & Commercial Depth"},"profil.utdanning.title":{no:"Utdanning & AI som strategisk verktøy",en:"Education & AI as a Strategic Enabler"},"profil.kompetanse.title":{no:"Kjernekompetanse",en:"Core Competencies"},"profil.kompetanse.title.1":{no:"Kjerne",en:"Core"},"profil.kompetanse.title.2":{no:"kompetanse",en:"Competencies"},"profil.styrker.title":{no:"Personlige superstyrker",en:"Signature Strengths"},"profil.styrker.sub":{no:"Slik beskrives min lederkraft av andre:",en:"How peers and colleagues characterise my leadership:"},"profil.logoer.erfaring":{no:"Erfaring fra blant annet",en:"Selected Professional Experience"},"profil.logoer.utdanning":{no:"Utdanning",en:"Education"},"erfaring.title":{no:"Karriere høydepunkter",en:"Career Highlights"},"erfaring.mandat":{no:"Mandat",en:"Mandate"},"erfaring.strategi":{no:"Strategi",en:"Approach"},"erfaring.resultater":{no:"Resultater",en:"Key Outcomes"},"erfaring.andre":{no:"Andre erfaringer",en:"Additional Experience"},"erfaring.cv":{no:"Se min fullstendige CV",en:"View my full CV"},"resultater.title":{no:"Dokumenterte Resultater",en:"Proven Track Record"},"resultater.sub":{no:"Nøkkeltall fra karrieren",en:"Career performance metrics"},"resultater.salgsvekst":{no:"Salgsvekst",en:"Revenue Growth"},"resultater.omsetning":{no:"Bidrag til selskapets mål",en:"Contribution to company target"},"resultater.ranking":{no:"Global Ranking",en:"Global Ranking"},"resultater.intro":{no:"Gjennomgående dokumenterte resultater med vekst, transformasjon og lønnsomhet — levert i roller med helhetlig kommersiellt ansvar.",en:"A consistent record of delivering growth, transformation, and profitability — in roles carrying full commercial P&L responsibility."},"ref.title":{no:"Referanser & Anbefalinger",en:"Endorsements & Recommendations"},"ref.sub":{no:"Hva andre sier om mitt lederskap",en:"What colleagues say about my leadership"},"ref.intro":{no:"Tilbakemeldinger fra kollegaer og medarbeidere som har jobbet direkte med meg — publisert på LinkedIn.",en:"Testimonials from colleagues and team members who have worked alongside me — published on LinkedIn."},"ref.linkedin":{no:"Se alle anbefalinger på LinkedIn",en:"View all recommendations on LinkedIn"},"fag.title.1":{no:"Innsikt &",en:"Insight &"},"fag.title.2":{no:"Tankeledelse",en:"Thought Leadership"},"fag.intro.1":{no:"I krysningen mellom teknologi, kommersiell strategi og menneskelig ledelse ligger nøkkelen til moderne vekst.",en:"At the intersection of technology, commercial strategy, and people-centric leadership lies the key to sustainable growth."},"fag.intro.2":{no:"For meg er formidling av fag en av de mest effektive metodene for egen læring; ved å strukturere og lære bort komplekse emner, tvinges man til å se nye sammenhenger.",en:"I regard knowledge sharing as one of the most powerful vehicles for continuous learning — structuring and articulating complex topics compels you to uncover new connections and sharper insights."},"fag.intro.3":{no:"Under finner du mine egenforfattede faginnlegg som gir innsikt innen strategisk ledelse, transformasjon og AI.",en:"Below you will find my authored articles providing insights into strategic leadership, transformation, and AI."},"fag.kat.ledelse":{no:"Strategisk Ledelse & Transformasjon",en:"Strategic Leadership & Transformation"},"fag.kat.ai":{no:"AI & Fremtidens Teknologiledelse",en:"AI & Next-Generation Technology Leadership"},"fag.toc.title":{no:"Innholdsfortegnelse",en:"Table of Contents"},"fag.toc.title.1":{no:"Innholds",en:"Table of"},"fag.toc.title.2":{no:"fortegnelse",en:"Contents"},"fag.les":{no:"Les hele innlegget",en:"Read full article"},"fag.nye":{no:"Nye innlegg under utarbeidelse...",en:"New articles in progress..."},"fag.linkedin":{no:"Les på LinkedIn",en:"Read on LinkedIn"},"fag.cta":{no:"Trenger din bedrift hjelp med å sette dette i system?",en:"Does your organisation need help turning these insights into action?"},"fag.cta.link":{no:"Gå til Consulting",en:"Explore Consulting Services"},"prosjekter.title.1":{no:"AI-prosjekter &",en:"AI Projects &"},"prosjekter.title.2":{no:"Utvikling",en:"Development"},"prosjekter.intro.1":{no:"Her samler jeg AI-prosjekter der teknologi kobles til kommersiell verdi, beslutningsstøtte og mer operativ gjennomføring. Fra salgstrening og virksomhetsnære case til agentiske arbeidsflyter – dette er prosjekter bygget for å gjøre AI nyttig i praksis.",en:"A collection of hands-on projects where AI and development meet commercial impact. From prototypes to production — ideas put into practice."},"prosjekter.intro.2":{no:"Fellesnevneren er ikke teknologi alene, men hvordan AI kan brukes til å strukturere kompleksitet, styrke prioriteringer og flytte arbeid fra analyse til handling. Dette er der strategi blir arbeidsflyt.",en:"Each project is tied to real challenges: better sales training, smarter decision support, or more effective processes. This is where strategy becomes code."},"prosjekter.les":{no:"Les mer",en:"Read more"},"cons.title.1":{no:"Marius Ottesen",en:"Marius Ottesen"},"cons.title.2":{no:"Consulting",en:"Consulting"},"cons.intro.1":{no:"Brobyggeren mellom ledelse og AI-teknologi. Jeg hjelper virksomheter med å omsette teknologiske muligheter til kommersiell verdi — uten at det krever et internt tech-team fra dag én.",en:"The bridge between executive leadership and AI technology. I help organisations translate technological opportunity into commercial value — without the need for an in-house tech team from day one."},"cons.intro.2":{no:"I samarbeid med flere tekniske eksperter leverer jeg rådgivning og implementering som er forankret i forretningsforståelse og praktisk ledererfaring.",en:"In partnership with a vetted network of technical experts, I deliver advisory and implementation services anchored in business acumen and hands-on leadership experience."},"cons.tjenester":{no:"Tjenester",en:"Service Offering"},"cons.initiatives.title":{no:"Utvalgte initiativer",en:"Selected initiatives"},"cons.initiatives.intro":{no:"Eksempler på pågående arbeid og virksomhetsnære utviklingsinitiativer inkluderer:",en:"Examples of current work and business-near development initiatives include:"},"cons.initiatives.avl.title":{no:"AI Value Lab Oslo",en:"AI Value Lab Oslo"},"cons.initiatives.avl.text":{no:"Utvikling og testing av AI-drevne konsepter, prototyper og virksomhetsnære anvendelser med fokus på reell verdiskaping og implementering.",en:"Development and testing of AI-driven concepts, prototypes, and business-near applications with a focus on real value creation and implementation."},"cons.initiatives.stk.title":{no:"Skøyenåsen Tannklinikk",en:"Skøyenåsen Tannklinikk"},"cons.initiatives.stk.text":{no:"Utviklingsarbeid knyttet til modernisering av pasientreisen, inkludert booking, oppfølging, kundeopplevelse, forbedring av arbeidsflyt og vurdering av relevante AI- og digitale muligheter.",en:"Development-oriented work related to modernization of the patient journey, including booking, follow-up, customer experience, workflow improvement, and assessment of relevant AI and digital opportunities."},"cons.kjenner":{no:"Kjenner du deg igjen?",en:"Does this resonate?"},"cons.prosess":{no:"Slik jobber vi sammen",en:"Our Engagement Model"},"cons.dialog":{no:"Start Dialogen",en:"Start the Conversation"},"cons.dialog.intro":{no:"Fortell meg kort om prosjektet eller utfordringen din, så tar jeg kontakt for en uforpliktende samtale. Du mottar en kopi av forespørselen på e-post.",en:"Share a brief overview of your project or challenge, and I will be in touch for a no-obligation discussion. You will receive a copy of your inquiry by email."},"cons.send":{no:"Send forespørsel",en:"Submit Inquiry"},"cons.sender":{no:"Sender...",en:"Submitting..."},"cons.sendt":{no:"Forespørsel sendt! Sjekk din e-post for bekreftelse.",en:"Inquiry submitted successfully. Please check your email for confirmation."},"cons.levert":{no:"Levert av Marius Ottesen Consulting",en:"Delivered by Marius Ottesen Consulting"},"kontakt.title":{no:"Kontakt",en:"Contact"},"kontakt.profil":{no:"Kommersiell Lederprofil",en:"Commercial Leadership Profile"},"kontakt.profil.desc":{no:"Er du en potensiell arbeidsgiver eller rekrutterer på jakt etter en kommersiell leder som kombinerer strategisk tyngde med operativ gjennomføringsevne?",en:"Are you an employer or executive recruiter seeking a commercial leader who combines strategic acuity with operational execution capability?"},"kontakt.ambisjon":{no:"Ambisjon & Fokus",en:"Ambition & Focus"},"kontakt.ambisjon.desc":{no:"Jeg er alltid interessert i å høre om spennende muligheter der jeg kan bidra til vekst, endring og digital transformasjon.",en:"I am always open to exploring compelling opportunities where I can drive growth, lead change, and accelerate digital transformation."},"kontakt.dialog":{no:"Dialog & Implementering",en:"Advisory & Implementation"},"kontakt.dialog.desc":{no:"Ønsker du en uforpliktende prat om kommersielle utfordringer, digital transformasjon eller hvordan AI praktisk kan implementeres i din virksomhet?",en:"Interested in a no-obligation discussion about commercial challenges, digital transformation, or the practical implementation of AI in your organisation?"},"kontakt.cta":{no:"Ta gjerne kontakt via en av kanalene under.",en:"Please feel free to reach out through any of the channels below."},"kontakt.linkedin":{no:"Besøk min LinkedIn-profil",en:"Visit my LinkedIn Profile"},"dok.title.1":{no:"CV & Åpen",en:"CV & Open"},"dok.title.2":{no:"Søknad",en:"Application"},"dok.cv":{no:"Min CV",en:"My CV"},"dok.cv.desc":{no:"Last ned eller les min fullstendige CV",en:"Download or review my comprehensive CV"},"dok.cv.btn":{no:"Åpne PDF",en:"Open PDF"},"dok.soknad":{no:"Åpen Søknad",en:"Open Application"},"dok.soknad.desc":{no:"Les min åpne søknad for kommersielle lederroller",en:"Read my open application for senior commercial leadership roles"},"dok.linkedin":{no:"Besøk min LinkedIn-profil",en:"Visit my LinkedIn Profile"},"footer.linkedin":{no:"Følg meg på LinkedIn for daglig AI-innsikt",en:"Follow me on LinkedIn for daily AI insights"}};function b(e,t){let r=x[e];return r?r[t]:e}function y({onNavigate:e}){let{lang:r}=f(),i=k[r];return(0,t.jsxs)("div",{className:"py-4 relative overflow-x-hidden w-full",children:[(0,t.jsx)("div",{className:"absolute -right-4 -top-12 w-[300px] md:w-[450px] h-[300px] md:h-[450px] opacity-[0.25] pointer-events-none select-none blur-[0.5px]",children:(0,t.jsx)(n.default,{src:"/images/fingerprint.png.png",alt:"",width:450,height:450,className:"w-full h-full object-contain","aria-hidden":"true",priority:!1})}),(0,t.jsxs)("div",{className:"flex flex-col md:flex-row gap-8 items-start text-left relative z-10",children:[(0,t.jsx)("div",{className:"w-full md:w-60 shrink-0",children:(0,t.jsx)("div",{className:"rounded-2xl overflow-hidden border border-slate-800 shadow-xl bg-slate-900",children:(0,t.jsx)(n.default,{src:"/images/profil.jpg",alt:"Marius Ottesen — Kommersiell Leder & AI-Strateg",width:240,height:320,className:"w-full h-auto",priority:!0})})}),(0,t.jsxs)("div",{className:"flex-1 min-w-0 space-y-6",children:[(0,t.jsxs)("div",{className:"space-y-2",children:[(0,t.jsxs)("h1",{className:"text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-white tracking-tighter uppercase italic break-words max-w-full [overflow-wrap:anywhere]",children:["Marius ",(0,t.jsx)("span",{className:"text-indigo-500",children:"Ottesen"})]}),(0,t.jsx)("p",{className:"text-lg text-indigo-400 font-black uppercase tracking-widest italic",children:b("profil.tittel",r)})]}),(0,t.jsxs)("div",{className:"p-6 bg-indigo-500/5 border border-indigo-500/15 rounded-2xl",children:[(0,t.jsx)("p",{className:"text-xl md:text-2xl text-white font-bold leading-snug tracking-tight",children:b("profil.vp.headline",r)}),(0,t.jsx)("p",{className:"text-lg text-slate-400 mt-2 italic",children:b("profil.vp.sub",r)})]}),(0,t.jsx)("div",{className:"text-lg text-slate-300 border-l-4 border-indigo-600 pl-6 italic font-medium leading-relaxed [&_a]:text-indigo-400 [&_a]:underline [&_a]:underline-offset-2 [&_a]:decoration-indigo-500/70 [&_a]:hover:text-indigo-200 [&_a]:transition-colors [&_a]:focus-visible:outline [&_a]:focus-visible:outline-2 [&_a]:focus-visible:outline-offset-2 [&_a]:focus-visible:outline-indigo-400",dangerouslySetInnerHTML:{__html:i.hoved}}),(0,t.jsxs)("div",{className:"p-8 bg-slate-900/25 backdrop-blur-sm border border-indigo-500/20 rounded-2xl shadow-xl space-y-5",children:[(0,t.jsxs)("div",{className:"flex items-start gap-4",children:[(0,t.jsx)("div",{className:"inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white border border-slate-700/50 p-1 shrink-0 overflow-hidden",children:(0,t.jsx)("img",{src:"/images/moc.logo.png",alt:"MOC",width:48,height:48,className:"w-full h-full object-contain"})}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{className:"text-white font-black text-xl uppercase italic tracking-tight",children:"Marius Ottesen Consulting"}),(0,t.jsx)("p",{className:"text-slate-500 text-[11px] font-bold tracking-widest mt-1",children:"Org. nr. 937 102 801"})]})]}),(0,t.jsx)("p",{className:"text-slate-300 text-sm font-medium italic leading-relaxed",children:b("profil.selskap.desc",r)}),(0,t.jsxs)("div",{className:"grid grid-cols-2 lg:grid-cols-4 gap-2",children:[(0,t.jsxs)("span",{className:"flex items-center justify-center gap-1 sm:gap-1.5 px-2 py-2.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-[8px] sm:text-[9px] lg:text-[10px] font-black uppercase tracking-tight sm:tracking-wider lg:tracking-widest text-center min-w-0 overflow-hidden",children:[(0,t.jsx)(m,{size:11,className:"sm:size-[12] lg:size-[13px] shrink-0 flex-shrink-0"}),(0,t.jsx)("span",{className:"break-words break-all leading-tight",style:{wordBreak:"break-word",overflowWrap:"anywhere"},children:b("profil.chip.ai",r)})]}),(0,t.jsxs)("span",{className:"flex items-center justify-center gap-1 sm:gap-1.5 px-2 py-2.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-[8px] sm:text-[9px] lg:text-[10px] font-black uppercase tracking-tight sm:tracking-wider lg:tracking-widest text-center min-w-0 overflow-hidden",children:[(0,t.jsx)(o,{size:11,className:"sm:size-[12] lg:size-[13px] shrink-0 flex-shrink-0"}),(0,t.jsx)("span",{className:"break-words break-all leading-tight",style:{wordBreak:"break-word",overflowWrap:"anywhere"},children:b("profil.chip.prosess",r)})]}),(0,t.jsxs)("span",{className:"flex items-center justify-center gap-1 sm:gap-1.5 px-2 py-2.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-[8px] sm:text-[9px] lg:text-[10px] font-black uppercase tracking-tight sm:tracking-wider lg:tracking-widest text-center min-w-0 overflow-hidden",children:[(0,t.jsx)(l,{size:11,className:"sm:size-[12] lg:size-[13px] shrink-0 flex-shrink-0"}),(0,t.jsx)("span",{className:"break-words break-all leading-tight",style:{wordBreak:"break-word",overflowWrap:"anywhere"},children:b("profil.chip.digital",r)})]}),(0,t.jsxs)("span",{className:"flex items-center justify-center gap-1 sm:gap-1.5 px-2 py-2.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-[8px] sm:text-[9px] lg:text-[10px] font-black uppercase tracking-tight sm:tracking-wider lg:tracking-widest text-center min-w-0 overflow-hidden",children:[(0,t.jsx)(h,{size:11,className:"sm:size-[12] lg:size-[13px] shrink-0 flex-shrink-0"}),(0,t.jsx)("span",{className:"break-words break-all leading-tight",style:{wordBreak:"break-word",overflowWrap:"anywhere"},children:b("profil.chip.workshops",r)})]})]}),e&&(0,t.jsxs)("button",{onClick:()=>e("Consulting"),className:"inline-flex items-center gap-2 text-indigo-400 font-black text-sm uppercase tracking-widest hover:text-white transition-all group/link",children:[b("profil.cta.tjenester",r),(0,t.jsx)(c,{size:16,className:"group-hover/link:translate-x-1 transition-transform"})]})]}),(0,t.jsxs)("div",{className:"grid gap-5",children:[(0,t.jsxs)("div",{className:"p-8 bg-slate-900/25 backdrop-blur-sm border border-slate-800 rounded-2xl shadow-xl space-y-4",children:[(0,t.jsxs)("h3",{className:"text-white font-black flex items-center gap-3 text-lg uppercase italic",children:[(0,t.jsx)(a,{className:"text-indigo-500",size:24})," ",b("profil.operativ.title",r)]}),(0,t.jsx)("div",{className:"text-slate-400 text-sm font-medium italic leading-relaxed whitespace-pre-line",children:i.lederskap})]}),(0,t.jsxs)("div",{className:"p-8 bg-slate-900/25 backdrop-blur-sm border border-slate-800 rounded-2xl shadow-xl space-y-4",children:[(0,t.jsxs)("h3",{className:"text-white font-black flex items-center gap-3 text-lg uppercase italic",children:[(0,t.jsx)(l,{className:"text-indigo-500",size:24})," ",b("profil.bransje.title",r)]}),(0,t.jsx)("div",{className:"text-slate-400 text-sm font-medium italic leading-relaxed whitespace-pre-line",children:i.bransje})]}),(0,t.jsxs)("div",{className:"p-8 bg-slate-900/25 backdrop-blur-sm border border-slate-800 rounded-2xl shadow-xl space-y-4",children:[(0,t.jsxs)("h3",{className:"text-white font-black flex items-center gap-3 text-lg uppercase italic",children:[(0,t.jsx)(o,{className:"text-indigo-500",size:24})," ",b("profil.utdanning.title",r)]}),(0,t.jsx)("div",{className:"text-slate-400 text-sm font-medium italic leading-relaxed whitespace-pre-line",dangerouslySetInnerHTML:{__html:i.utdanning.replace(/\*(.*?)\*/g,'<em class="text-indigo-400 not-italic font-black">$1</em>')}})]}),(0,t.jsxs)("div",{className:"grid md:grid-cols-2 gap-5",children:[(0,t.jsxs)("div",{className:"p-8 bg-slate-900/25 backdrop-blur-sm border border-slate-800 rounded-2xl shadow-xl space-y-4",children:[(0,t.jsxs)("h3",{className:"text-white font-black flex items-center gap-3 text-lg uppercase italic break-words max-w-full min-w-0 [overflow-wrap:anywhere]",children:[(0,t.jsx)(d,{className:"text-indigo-500 shrink-0",size:24})," ",(0,t.jsxs)("span",{className:"min-w-0",children:[b("profil.kompetanse.title.1",r),(0,t.jsx)("br",{className:"sm:hidden"}),b("profil.kompetanse.title.2",r)]})]}),(0,t.jsx)("ul",{className:"space-y-2 text-left",children:i.kompetanse.map((e,r)=>(0,t.jsxs)("li",{className:"text-slate-400 text-sm font-medium italic flex items-start gap-2",children:[(0,t.jsx)("span",{className:"text-indigo-500 text-lg leading-none",children:"•"})," ",e]},r))})]}),(0,t.jsxs)("div",{className:"p-8 bg-slate-900/25 backdrop-blur-sm border border-slate-800 rounded-2xl shadow-xl space-y-4",children:[(0,t.jsxs)("h3",{className:"text-white font-black flex items-center gap-3 text-lg uppercase italic",children:[(0,t.jsx)(g,{className:"text-indigo-500",size:24})," ",b("profil.styrker.title",r)]}),(0,t.jsx)("p",{className:"text-[10px] text-slate-500 italic mb-2",children:b("profil.styrker.sub",r)}),(0,t.jsx)("ul",{className:"space-y-2 text-left",children:i.styrker.map((e,r)=>(0,t.jsxs)("li",{className:"text-slate-400 text-sm font-medium italic flex items-start gap-2",children:[(0,t.jsx)("span",{className:"text-indigo-500 text-lg leading-none",children:"•"})," ",e]},r))})]})]})]}),(0,t.jsxs)("div",{className:"pt-4 space-y-5",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{className:"text-[10px] text-slate-500 uppercase tracking-widest font-bold mb-3",children:b("profil.logoer.erfaring",r)}),(0,t.jsx)("div",{className:"flex items-center gap-2 overflow-x-auto pb-2",children:[{src:"/images/Franzefoss.png",alt:"Franzefoss",h:"max-h-[26px]"},{src:"/images/Norengros.png",alt:"Norengros",h:"max-h-[30px]"},{src:"/images/Nilfisk.png",alt:"Nilfisk",h:"max-h-[42px]"},{src:"/images/Pelagia.png",alt:"Pelagia",h:"max-h-[32px]"},{src:"/images/Falck%20Nutec.png",alt:"Falck Nutec",h:"max-h-[42px]"},{src:"/images/Assessit.png",alt:"Assessit",h:"max-h-[32px]"},{src:"/images/Mundipharma.png",alt:"Mundipharma",h:"max-h-[26px]"},{src:"/images/meddrop-logo.png",alt:"MedDrop",h:"max-h-[32px]"}].map(e=>(0,t.jsx)("div",{className:"flex-1 min-w-[80px] h-[44px] flex items-center justify-center bg-white rounded-lg p-1.5 shrink-0",children:(0,t.jsx)("img",{src:e.src,alt:`${e.alt} logo`,width:100,height:44,className:`${e.h} max-w-full w-auto h-auto object-contain`})},e.alt))})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{className:"text-[10px] text-slate-500 uppercase tracking-widest font-bold mb-3",children:b("profil.logoer.utdanning",r)}),(0,t.jsx)("div",{className:"flex flex-wrap items-center gap-3",children:[{src:"/images/BI.png",alt:"BI Norwegian Business School"},{src:"/images/UofU.png",alt:"University of Utah"},{src:"/images/Uio.png",alt:"Universitetet i Oslo"}].map(e=>(0,t.jsx)("div",{className:"w-[120px] h-[48px] flex items-center justify-center bg-white rounded-lg p-2",children:(0,t.jsx)("img",{src:e.src,alt:`${e.alt} logo`,width:100,height:28,className:"max-h-[28px] max-w-[100px] w-auto h-auto object-contain"})},e.alt))})]})]})]})]})]})}let w=(0,s.default)("briefcase",[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]]),j=(0,s.default)("calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]),I=(0,s.default)("trending-up",[["path",{d:"M16 7h6v6",key:"box55l"}],["path",{d:"m22 7-8.5 8.5-5-5L2 17",key:"1t1m79"}]]),A=(0,s.default)("lightbulb",[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]]),T=(0,s.default)("file-text",[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]),N=(0,s.default)("chevron-right",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]),D={no:{intro:"Solid erfaring på tvers av kunnskapsintensive B2B-markeder — fra industri, life science og sirkulær økonomi til teknologi og grossistvirksomhet. Gjennomgående ansvar for å profesjonalisere salgsorganisasjoner, drive vekst og lede endringsprosesser i virksomheter med høye krav til kvalitet og leveranseevne.",jobs:[{title:"Nasjonal Salgssjef",company:"Franzefoss Gjenvinning",period:"2024 – 2025",mandate:"Hentet inn til kommersiell ledergruppe for å profesjonalisere salgsorganisasjonen, gjøre selskapet mer synlig og salgsteamet mer proaktive mot kunder, samt akselerere den digitale reisen i en tradisjonell bransje.",strategy:"Restrukturerte salgsavdelingen (20 årsverk) for økt slagkraft. Implementerte slagkraftige salgsprosesser og moderne CRM-metodikk, digitale dashboards og AI-støttede kundereiser og kundeportal for å flytte fokus fra reaktivt til proaktivt salg. Introduserte også flere nye tjenester for kunder.",results:"Styrket markedsposisjon gjennom mer målrettet innsats mot nøkkelkunder. Etablerte en ny standard for datadrevet salgsledelse og logistikksamhandling på tvers av 18 driftssteder. Bedret samhandlingen mellom salgsteamet og drift. Forbedret kapasitetsutnyttelse, tydeligere styringsmodell, resultatdrevne KPI-er & økte marginer."},{title:"Salgssjef Forbruksvarer",company:"Norengros Johs. Olsen",period:"2019 – 2023",mandate:"Totalansvar for selskapets største avdeling med mandat om å drive aggressiv regional vekst og lede transformasjonsprosjektet «Forbruk Oslo 2.0».",strategy:"Ledet transformasjon innen bemanning, IT og logistikk. Fungerte som CRM-superbruker og endringsagent for å modernisere salgsprosessene i et marked preget av tøff konkurranse.",results:"Leverte en eksepsjonell salgsvekst på 67 % i perioden. Bygget et høytytende team som leverte kritiske bidrag i prosjekter mot selskapets mål om 1 mrd. NOK i omsetning."},{title:"Gründer & Utvikler",company:"MedDrop",period:"2018 – Nå",mandate:"Identifisere og løse et kritisk gap i pasientsikkerhet ved legemiddelhåndtering gjennom utvikling av en smart, IoT-basert medisindispenser.",strategy:"Leder hele innovasjonsløpet fra idé til prototype. Navigerer i komplekse tekniske arkitekturer, IP-strategier og strengt regulerte medtech-rammeverk (MDR).",results:"Utviklet en funksjonell prototype klar for nasjonal og global skalering. Etablert dyp forståelse for skjæringspunktet mellom digital teknologi og kliniske behov."},{title:"Business Unit Manager",company:"Mundipharma",period:"2001 – 2012",mandate:"Ansvar for å forme nasjonal salgs- og markedsstrategi for kritiske terapiområder i et av verdens ledende farmasøytiske selskaper.",strategy:"Ledet nasjonale salgsteam og satt i internasjonale strategigrupper. Operasjonaliserte komplekse endringsprosesser og bygget strategiske partnerskap med KOLs.",results:"Lanserte og posisjonerte 4 blockbuster-produkter. Oppnådde høyest global vekst og omsetning i hele konsernet i perioden. Personlig vinner av EU PR-pris."}],others:[{area:"Internasjonal Salg",desc:"Pelagia: Senior Sales Manager (Europa, USA, Asia)."},{area:"Strategisk Rådgivning",desc:"Assessit: Executive Search & lederutvelgelse."},{area:"Markedsledelse",desc:"Nilfisk: Salgssjef med nasjonalt ansvar."}]},en:{intro:"Solid experience across knowledge-intensive B2B markets — from industry, life science and circular economy to technology and wholesale. A consistent track record of professionalising sales organisations, accelerating growth, and leading transformation programmes in businesses with exacting standards for quality and delivery.",jobs:[{title:"National Sales Director",company:"Franzefoss Gjenvinning",period:"2024 – 2025",mandate:"Appointed to the commercial leadership team to professionalise the sales organisation, elevate market visibility, shift the sales force from reactive to proactive engagement, and accelerate digital adoption in a traditionally analogue industry.",strategy:"Restructured the 20-person sales department for greater commercial impact. Deployed rigorous sales processes, modern CRM methodology, real-time digital dashboards, and AI-augmented customer journeys to drive a fundamental shift toward proactive, data-informed selling. Introduced multiple new value-added services.",results:"Strengthened market positioning through targeted key-account strategies. Established a new benchmark for data-driven sales management and logistics coordination across 18 operational sites. Improved cross-functional collaboration between sales and operations. Enhanced capacity utilisation, clearer governance, performance-driven KPIs, and margin expansion."},{title:"Sales Manager, Consumer Goods",company:"Norengros Johs. Olsen",period:"2019 – 2023",mandate:"Full P&L accountability for the company's largest division, with a mandate to drive aggressive regional growth and spearhead the strategic transformation initiative 'Forbruk Oslo 2.0'.",strategy:"Led end-to-end transformation encompassing workforce planning, IT infrastructure, and logistics. Served as CRM superuser and change agent to modernise commercial processes in a fiercely competitive marketplace.",results:"Delivered exceptional revenue growth of 67% over the period. Built a high-performing team that made mission-critical contributions in projects toward the company's NOK 1 billion revenue target."},{title:"Founder & Product Developer",company:"MedDrop",period:"2018 – Present",mandate:"Identify and address a critical gap in patient safety within medication management through the development of a smart, IoT-enabled medicine dispenser.",strategy:"Leading the full innovation lifecycle from concept through to functional prototype. Navigating complex technical architectures, intellectual property strategy, and stringent medtech regulatory frameworks (MDR).",results:"Developed a market-ready functional prototype positioned for national and international scale-up. Built deep domain expertise at the intersection of digital health technology and clinical needs."},{title:"Business Unit Manager",company:"Mundipharma",period:"2001 – 2012",mandate:"Accountable for shaping and executing the national sales and marketing strategy across critical therapeutic areas within one of the world's leading pharmaceutical organisations.",strategy:"Led national sales teams while serving on international strategy committees. Operationalised complex transformation programmes and cultivated strategic partnerships with key opinion leaders (KOLs).",results:"Successfully launched and positioned four blockbuster products. Achieved the highest global growth rate and revenue contribution across the entire group during tenure. Personal recipient of the EU Public Relations Award."}],others:[{area:"International Sales",desc:"Pelagia: Senior Sales Manager (Europe, USA, Asia)."},{area:"Strategic Advisory",desc:"Assessit: Executive Search & senior leadership selection."},{area:"Market Leadership",desc:"Nilfisk: Sales Manager with nationwide responsibility."}]}};D.no;let S={"Franzefoss Gjenvinning":"/images/Franzefoss.png","Norengros Johs. Olsen":"/images/Norengros.png",MedDrop:"/images/meddrop-logo.png",Mundipharma:"/images/Mundipharma.png",Nilfisk:"/images/Nilfisk.png"};function M(){let{lang:e}=f(),r=D[e];return(0,t.jsx)("div",{className:"py-4 text-left w-full overflow-x-hidden",children:(0,t.jsxs)("div",{className:"flex flex-col md:flex-row gap-8 items-start",children:[(0,t.jsx)("div",{className:"w-full md:w-60 shrink-0",children:(0,t.jsx)("div",{className:"rounded-2xl overflow-hidden border border-slate-800 shadow-xl bg-slate-900",children:(0,t.jsx)(n.default,{src:"/images/resultater.jpg",alt:"Karriere høydepunkter og profesjonell erfaring",width:240,height:320,className:"w-full h-auto"})})}),(0,t.jsxs)("div",{className:"flex-1 min-w-0 space-y-6",children:[(0,t.jsxs)("div",{className:"space-y-4 text-left",children:[(0,t.jsx)("h2",{className:"text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-white tracking-tighter uppercase italic break-words max-w-full [overflow-wrap:anywhere]",children:"no"===e?(0,t.jsxs)(t.Fragment,{children:["Karriere ",(0,t.jsx)("span",{className:"text-indigo-500",children:"høydepunkter"})]}):(0,t.jsxs)(t.Fragment,{children:["Career ",(0,t.jsx)("span",{className:"text-indigo-500",children:"Highlights"})]})}),(0,t.jsx)("div",{className:"text-lg text-slate-300 border-l-4 border-indigo-600 pl-6 italic font-medium leading-relaxed",children:r.intro})]}),(0,t.jsx)("div",{className:"space-y-5",children:r.jobs.map((r,n)=>(0,t.jsxs)("div",{className:"bg-slate-900/40 border border-slate-800 p-8 rounded-2xl shadow-xl text-left",children:[(0,t.jsxs)("div",{className:"flex flex-col md:flex-row justify-between gap-4 mb-6",children:[(0,t.jsxs)("div",{className:"flex items-start gap-3",children:[(0,t.jsx)("div",{className:"w-12 h-12 rounded-xl bg-white flex items-center justify-center p-1.5 shrink-0",children:S[r.company]?(0,t.jsx)("img",{src:S[r.company],alt:`${r.company} logo`,width:48,height:48,className:"max-h-9 max-w-full w-auto h-auto object-contain"}):(0,t.jsx)("span",{className:"text-slate-500 text-[10px] font-bold uppercase tracking-wider",children:r.company.replace(/ .*/,"")})}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{className:"text-xl font-black text-white uppercase italic leading-tight tracking-tight",children:r.title}),(0,t.jsxs)("p",{className:"text-indigo-400 uppercase text-sm mt-2 italic font-black flex items-center gap-2",children:[(0,t.jsx)(w,{size:14}),r.company]})]})]}),(0,t.jsxs)("div",{className:"text-slate-400 text-[10px] bg-slate-950 px-4 py-2 rounded-full border border-slate-800 self-start shrink-0 font-black",children:[(0,t.jsx)(j,{size:12,className:"mr-1 inline"}),r.period]})]}),(0,t.jsxs)("div",{className:"space-y-4 text-sm",children:[(0,t.jsxs)("div",{children:[(0,t.jsxs)("p",{className:"text-white text-[10px] uppercase tracking-widest flex items-center gap-2 font-black",children:[(0,t.jsx)(d,{size:14,className:"text-indigo-500"}),b("erfaring.mandat",e)]}),(0,t.jsx)("p",{className:"text-slate-300 italic font-medium",children:r.mandate})]}),(0,t.jsxs)("div",{children:[(0,t.jsxs)("p",{className:"text-white text-[10px] uppercase tracking-widest flex items-center gap-2 font-black",children:[(0,t.jsx)(A,{size:14,className:"text-indigo-500"}),b("erfaring.strategi",e)]}),(0,t.jsx)("p",{className:"text-slate-300 italic font-medium",children:r.strategy})]}),(0,t.jsxs)("div",{className:"pt-4 border-t border-slate-800",children:[(0,t.jsxs)("p",{className:"text-indigo-500 text-[10px] uppercase tracking-widest flex items-center gap-2 font-black",children:[(0,t.jsx)(I,{size:14}),b("erfaring.resultater",e)]}),(0,t.jsx)("p",{className:"text-white font-bold leading-relaxed",children:r.results})]})]})]},n))}),(0,t.jsxs)("div",{className:"space-y-3",children:[(0,t.jsx)("p",{className:"text-[10px] text-slate-500 uppercase tracking-widest font-bold",children:b("profil.logoer.erfaring",e)}),(0,t.jsx)("div",{className:"flex flex-wrap items-center gap-2",children:[{src:"/images/Franzefoss.png",alt:"Franzefoss",h:"max-h-[26px]"},{src:"/images/Norengros.png",alt:"Norengros",h:"max-h-[30px]"},{src:"/images/Nilfisk.png",alt:"Nilfisk",h:"max-h-[42px]"},{src:"/images/Pelagia.png",alt:"Pelagia",h:"max-h-[32px]"},{src:"/images/Falck%20Nutec.png",alt:"Falck Nutec",h:"max-h-[42px]"},{src:"/images/Assessit.png",alt:"Assessit",h:"max-h-[32px]"},{src:"/images/Mundipharma.png",alt:"Mundipharma",h:"max-h-[26px]"},{src:"/images/meddrop-logo.png",alt:"MedDrop",h:"max-h-[32px]"}].map(e=>(0,t.jsx)("div",{className:"flex-1 min-w-[80px] h-[44px] flex items-center justify-center bg-white rounded-lg p-1.5 shrink-0",children:(0,t.jsx)("img",{src:e.src,alt:`${e.alt} logo`,width:100,height:44,className:`${e.h} max-w-full w-auto h-auto object-contain`})},e.alt))})]}),(0,t.jsxs)("div",{className:"p-8 bg-slate-950 rounded-2xl border border-slate-800 space-y-4 text-left font-black",children:[(0,t.jsx)("h4",{className:"text-white text-xl uppercase italic",children:b("erfaring.andre",e)}),(0,t.jsx)("div",{className:"grid md:grid-cols-3 gap-6 text-[11px] leading-snug",children:r.others.map((e,r)=>(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{className:"text-indigo-500 uppercase italic",children:e.area}),(0,t.jsx)("p",{className:"text-slate-400 italic font-bold",children:e.desc})]},r))})]}),(0,t.jsx)("div",{className:"flex justify-center pt-4",children:(0,t.jsxs)("a",{href:"/pdf/cv.pdf",target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-3 bg-white text-black px-10 py-5 rounded-full font-black uppercase text-sm hover:bg-indigo-500 hover:text-white transition-all italic shadow-lg cursor-pointer",children:[(0,t.jsx)(T,{size:20}),b("erfaring.cv",e),(0,t.jsx)(N,{size:20})]})})]})]})})}let C=(0,s.default)("chart-column",[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]]),E=(0,s.default)("award",[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]]),B=(0,s.default)("arrow-up-right",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);function F(e,t=2e3,n=""){let{ref:i,isVisible:s}=function(e){let t=(0,r.useRef)(null),[n,i]=(0,r.useState)(!1);return(0,r.useEffect)(()=>{let e=new IntersectionObserver(([e])=>{e.isIntersecting&&i(!0)},{threshold:.1,rootMargin:"0px 0px -50px 0px",...void 0});return t.current&&e.observe(t.current),()=>{t.current&&e.unobserve(t.current)}},[void 0]),{ref:t,isVisible:n}}(),[a,o]=(0,r.useState)(0),l=(0,r.useRef)(0);return(0,r.useEffect)(()=>{if(!s)return;let r=Date.now(),n=()=>{let i=Math.min((Date.now()-r)/t,1),s=Math.floor(0+(e-0)*(1-Math.pow(1-i,3)));o(s),l.current=s,i<1?requestAnimationFrame(n):o(e)};n()},[s,e,t]),{ref:i,count:a.toString()+n}}let P={indigo:{text:"text-indigo-400",border:"border-indigo-500/20",bg:"bg-indigo-500/10",dot:"bg-indigo-500"},sky:{text:"text-indigo-400",border:"border-indigo-500/20",bg:"bg-indigo-500/10",dot:"bg-indigo-500"},emerald:{text:"text-indigo-400",border:"border-indigo-500/20",bg:"bg-indigo-500/10",dot:"bg-indigo-500"},amber:{text:"text-indigo-400",border:"border-indigo-500/20",bg:"bg-indigo-500/10",dot:"bg-indigo-500"}},O={indigo:(0,t.jsx)(o,{size:22}),sky:(0,t.jsx)(I,{size:22}),emerald:(0,t.jsx)(E,{size:22}),amber:(0,t.jsx)(B,{size:22})},z={"Franzefoss Gjenvinning":"/images/Franzefoss.png","Norengros Johs. Olsen":"/images/Norengros.png",Mundipharma:"/images/Mundipharma.png",Nilfisk:"/images/Nilfisk.png"};function G(){let{lang:e}=f(),r=F(67,2e3,"%"),i=F(1,2e3," MRD mål"),s=[{verdi:r.count,label:b("resultater.salgsvekst",e),ikon:(0,t.jsx)(C,{size:20}),ref:r.ref},{verdi:i.count,label:b("resultater.omsetning",e),ikon:(0,t.jsx)(l,{size:20}),ref:i.ref},{verdi:"#1",label:b("resultater.ranking",e),ikon:(0,t.jsx)(d,{size:20}),ref:null}],a="no"===e?[{selskap:"Franzefoss Gjenvinning",rolle:"Nasjonal Salgssjef",periode:"2024 – 2025",resultater:["Forbedret kapasitetsutnyttelse på tvers av 18 driftssteder","Tydeligere styringsmodell med resultatdrevne KPI-er","Økte marginer gjennom målrettet innsats mot nøkkelkunder","Etablerte ny standard for datadrevet salgsledelse"],farge:"indigo"},{selskap:"Norengros Johs. Olsen",rolle:"Salgssjef Forbruksvarer",periode:"2019 – 2023",resultater:["Leverte eksepsjonell salgsvekst på 67 % i perioden","Ledet team i ett av prosjektene som bidro til selskapets mål om 1 mrd. NOK","Bygget høytytende team gjennom transformasjonsprosjektet «Forbruk Oslo 2.0»","Moderniserte salgsprosesser i et marked preget av tøff konkurranse"],farge:"sky"},{selskap:"Mundipharma",rolle:"Business Unit Manager",periode:"2001 – 2012",resultater:["Ledet team til global #1 i vekst og omsetning i hele konsernet","Lanserte og posisjonerte 4 blockbuster-produkter","Vant EU PR-pris for fremragende resultater","Nominert til Årets Unge Leder"],farge:"emerald"},{selskap:"Nilfisk",rolle:"Salgssjef",periode:"2012 – 2014",resultater:["Snudde salgssvikt til vekst","Overgikk salgsmål","Økte teammotivasjon og prestasjoner"],farge:"amber"}]:[{selskap:"Franzefoss Gjenvinning",rolle:"National Sales Director",periode:"2024 – 2025",resultater:["Enhanced capacity utilisation across 18 operational sites","Implemented a transparent governance model with performance-driven KPIs","Delivered margin expansion through disciplined key-account strategy","Set a new benchmark for data-driven sales leadership"],farge:"indigo"},{selskap:"Norengros Johs. Olsen",rolle:"Sales Manager, Consumer Goods",periode:"2019 – 2023",resultater:["Achieved exceptional 67% revenue growth over the period","Led one of the projects that contributed to the company's NOK 1 billion revenue target","Built a high-performing team through the 'Forbruk Oslo 2.0' transformation programme","Modernised commercial processes in a fiercely competitive market"],farge:"sky"},{selskap:"Mundipharma",rolle:"Business Unit Manager",periode:"2001 – 2012",resultater:["Led team to global #1 ranking in growth and revenue across the entire group","Successfully launched and positioned four blockbuster products","Recipient of the EU Public Relations Award for outstanding performance","Nominated for Young Leader of the Year"],farge:"emerald"},{selskap:"Nilfisk",rolle:"Sales Manager",periode:"2012 – 2014",resultater:["Reversed a declining sales trajectory into sustained growth","Consistently exceeded annual sales targets","Significantly improved team engagement and performance"],farge:"amber"}];return(0,t.jsx)("div",{className:"py-4 text-left w-full overflow-x-hidden",children:(0,t.jsxs)("div",{className:"flex flex-col md:flex-row gap-8 items-start",children:[(0,t.jsx)("div",{className:"w-full md:w-60 shrink-0",children:(0,t.jsx)("div",{className:"rounded-2xl overflow-hidden border border-slate-800 shadow-xl bg-slate-900",children:(0,t.jsx)(n.default,{src:"/images/seier-ny.png",alt:"Dokumenterte resultater og karriereprestasjoner",width:240,height:320,className:"w-full h-auto"})})}),(0,t.jsxs)("div",{className:"flex-1 min-w-0 space-y-6",children:[(0,t.jsxs)("div",{className:"space-y-2",children:[(0,t.jsx)("h2",{className:"text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-white tracking-tighter uppercase italic break-words max-w-full [overflow-wrap:anywhere]",children:"no"===e?(0,t.jsxs)(t.Fragment,{children:["Dokumenterte ",(0,t.jsx)("span",{className:"text-indigo-500",children:"Resultater"})]}):(0,t.jsxs)(t.Fragment,{children:["Documented ",(0,t.jsx)("span",{className:"text-indigo-500",children:"Results"})]})}),(0,t.jsx)("p",{className:"text-lg text-indigo-400 font-black uppercase tracking-widest italic",children:b("resultater.sub",e)})]}),(0,t.jsx)("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-4",children:s.map((e,r)=>(0,t.jsxs)("div",{ref:e.ref||void 0,className:"p-6 bg-slate-900/40 rounded-2xl border border-slate-800 shadow-xl text-center scroll-animate",children:[(0,t.jsx)("div",{className:"flex justify-center text-indigo-500 mb-3",children:e.ikon}),(0,t.jsx)("span",{className:"block text-3xl md:text-4xl font-black text-white",children:e.verdi}),(0,t.jsx)("span",{className:"block text-indigo-400 font-black uppercase text-[10px] tracking-widest mt-2",children:e.label})]},r))}),(0,t.jsx)("div",{className:"text-lg text-slate-300 border-l-4 border-indigo-600 pl-6 italic font-medium leading-relaxed",children:b("resultater.intro",e)}),(0,t.jsx)("div",{className:"space-y-4",children:a.map((e,r)=>{let n=P[e.farge];return(0,t.jsxs)("div",{className:`p-8 bg-slate-900/40 rounded-2xl border ${n.border} shadow-xl`,children:[(0,t.jsxs)("div",{className:"flex flex-col md:flex-row md:items-center justify-between gap-3 mb-5",children:[(0,t.jsxs)("div",{className:"flex items-center gap-3",children:[(0,t.jsx)("div",{className:"w-12 h-12 rounded-xl bg-white flex items-center justify-center p-1.5 shrink-0",children:z[e.selskap]?(0,t.jsx)("img",{src:z[e.selskap],alt:`${e.selskap} logo`,width:48,height:48,className:"max-h-9 max-w-full w-auto h-auto object-contain"}):(0,t.jsx)("span",{className:`${n.text}`,children:O[e.farge]})}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{className:"text-lg font-black text-white uppercase italic tracking-tight",children:e.selskap}),(0,t.jsx)("p",{className:`text-sm ${n.text} font-bold italic`,children:e.rolle})]})]}),(0,t.jsx)("span",{className:"text-slate-500 text-[10px] bg-slate-950 px-4 py-2 rounded-full border border-slate-800 font-black shrink-0 self-start",children:e.periode})]}),(0,t.jsx)("ul",{className:"space-y-2",children:e.resultater.map((e,r)=>(0,t.jsxs)("li",{className:"flex items-start gap-3 text-sm text-slate-300 font-medium italic",children:[(0,t.jsx)("span",{className:`w-1.5 h-1.5 rounded-full ${n.dot} mt-1.5 shrink-0`}),e]},r))})]},r)})}),(0,t.jsxs)("div",{className:"space-y-3",children:[(0,t.jsx)("p",{className:"text-[10px] text-slate-500 uppercase tracking-widest font-bold",children:b("profil.logoer.erfaring",e)}),(0,t.jsx)("div",{className:"flex flex-wrap items-center gap-2",children:[{src:"/images/Franzefoss.png",alt:"Franzefoss",h:"max-h-[26px]"},{src:"/images/Norengros.png",alt:"Norengros",h:"max-h-[30px]"},{src:"/images/Nilfisk.png",alt:"Nilfisk",h:"max-h-[42px]"},{src:"/images/Pelagia.png",alt:"Pelagia",h:"max-h-[32px]"},{src:"/images/Falck%20Nutec.png",alt:"Falck Nutec",h:"max-h-[42px]"},{src:"/images/Assessit.png",alt:"Assessit",h:"max-h-[32px]"},{src:"/images/Mundipharma.png",alt:"Mundipharma",h:"max-h-[26px]"},{src:"/images/meddrop-logo.png",alt:"MedDrop",h:"max-h-[32px]"}].map(e=>(0,t.jsx)("div",{className:"flex-1 min-w-[80px] h-[44px] flex items-center justify-center bg-white rounded-lg p-1.5 shrink-0",children:(0,t.jsx)("img",{src:e.src,alt:`${e.alt} logo`,width:100,height:44,className:`${e.h} max-w-full w-auto h-auto object-contain`})},e.alt))})]})]})]})})}let L=(0,s.default)("x",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),R=(0,s.default)("external-link",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]),H=(0,s.default)("chevron-left",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);function W(e){let t="";for(let r of e){let e=r.codePointAt(0);void 0!==e&&(e>=119808&&e<=119833?t+=String.fromCharCode(e-119808+65):e>=119834&&e<=119859?t+=String.fromCharCode(e-119834+97):e>=119860&&e<=119885?t+=String.fromCharCode(e-119860+65):e>=119886&&e<=119911?t+=String.fromCharCode(e-119886+97):e>=119912&&e<=119937?t+=String.fromCharCode(e-119912+65):e>=119938&&e<=119963?t+=String.fromCharCode(e-119938+97):e>=120276&&e<=120301?t+=String.fromCharCode(e-120276+65):e>=120302&&e<=120327?t+=String.fromCharCode(e-120302+97):e>=120328&&e<=120353?t+=String.fromCharCode(e-120328+65):e>=120354&&e<=120379?t+=String.fromCharCode(e-120354+97):e>=120380&&e<=120405?t+=String.fromCharCode(e-120380+65):e>=120406&&e<=120431?t+=String.fromCharCode(e-120406+97):e>=120782&&e<=120791?t+=String.fromCharCode(e-120782+48):e>=120812&&e<=120821?t+=String.fromCharCode(e-120812+48):t+=r)}return t}let K=(e,t=e)=>({no:e,en:t}),U={"trykk-prestasjon-kommersiell-ledelse-2026-05":{tittel:"When pressure becomes leadership",teaser:"More pressure is rarely a sustainable leadership model. Commercial leadership is about results — but lasting performance is built in the space between clear demands and real ownership.",innhold:`When pressure becomes leadership

More pressure is not a leadership model. It is a short-term response.

I have seen and experienced it many times. Results fail to materialise, and the answer becomes more meetings, tighter follow-up, higher activity requirements and a faster pace.

Sometimes that is necessary.

The problem arises when pressure becomes the model itself.

Commercial leadership is about results. It should be. Sales, margin, customer value and growth are the mandate. But lasting results are rarely created through pressure alone.

Over time, B\xe5rd Kuvaas has highlighted the importance of autonomy-supportive leadership. Leaders who explain direction, ask good questions and support employees without becoming controlling often build stronger motivation, better performance and lower turnover.

Gallup points in the same direction. Highly engaged teams deliver better on customer loyalty, sales productivity and profitability. Engagement often starts with something as fundamental as clear expectations.

Does that mean employees should be shielded from demands?

In a strong commercial environment, responsibility goes both ways. The leader must create direction, structure, trust and follow-up. Employees must take ownership, be open to feedback, contribute to learning and stand in execution when it requires something of them.

That is where the dynamic gets interesting.

When leadership becomes pure control, the team loses momentum. When autonomy comes without direction, the organisation loses pace. Performance is built in the space between clear demands and real ownership.

Then activity becomes more than volume. It gets direction. Activity is linked to customer insight, quality, priorities and real value.

This is where many commercial environments lose momentum. They measure more, but learn less. They demand more, but do not always build capacity. They increase activity, but do not necessarily get stronger execution. For me, the difference between quantity and quality is one of the most important distinctions in commercial leadership.

Sales results are created through people who must handle pace, uncertainty, rejection and demanding customer needs, day after day.

That is why turning up the volume alone rarely works. You must build a system that makes performance possible.

The system must have:
🧭 Direction
⏱️ Rhythm
✅ Accountability
🤝 Collaboration
💡 Learning
🌱 Culture

That is the difference between a team that delivers when pressure rises, and a team that simply becomes more exhausted.

Commercial leadership is about building the engine behind the results.

👉 What do you think characterises commercial leadership that creates performance over time?

#kommersiellledelse #prestasjonskultur #salgsutvikling #kundeinnsikt #gjennomf\xf8ringskraft`},"gronne-exceltall-transformasjon-2026-05":{tittel:`The green numbers are not the problem. 📈`,teaser:`The business case looks good in Excel — but benefits often leak in operations. Good transformations start with the full reality, not just the curves.`,innhold:`The green numbers are not the problem. 📈

The problem is everything they do not show.

In leadership meetings, a business case can make a complex decision dangerously simple. Costs go down. Capacity goes up. The curves point the right way. Everyone wants to act. 🥊

Then the change starts.

Customers notice that the flow is not as good. Employees lose ownership of processes they used to control. Coordination gets heavier. Quality dips a little before anyone can explain why. And the benefits that looked so clear in Excel begin to leak in operations. 💣

That does not mean transformation is wrong. On the contrary. Change is necessary.

But good transformations do not start with a neat spreadsheet alone. They start with a more honest picture of reality — the whole reality!

My concrete advice is simple.
💥 Do not approve the project until someone has built the underside of the spreadsheet.
What does the change mean for customers, people, quality, coordination and ownership?
That is often where benefits are either realised or lost.

McKinsey has long pointed out that around 70% of transformations do not reach their original goals. I have seen this often myself too, and my experience is that the cause is rarely weak strategy. It usually lies in analysis that is too narrow, too little anchoring, and too weak execution capability.

AI can be a timely example. Many organisations adopt AI quickly, driven by ambitious benefit estimates and legitimate pressure to keep up. But AI does not create value because the technology is rolled out. It creates value when it is built into workflow, roles, quality, accountability and leadership.

One case I recently noted was Elkem and Egde's E2 model. It treats AI as an operating model that must be built through platform, concrete use cases and organisation, where user adoption and workflow matter as much as technology. The results were formidable!

So next time the numbers look a bit too neat, I would ask one question first:
What does Excel not see?

Because leadership is not only about making a change add up.
It is about seeing what the change does to people, customers and operations.

#Transformation #Leadership #ChangeManagement #Strategy #DecisionBasis`},"pappa-forst-trener-etterpa-2026-01":{tittel:"Dad first. Coach afterwards?",teaser:`Motivation, trust and psychological safety at home and on the tennis court: when is it more important to be a dad than a coach — and what happens when your own ambitions overshadow the kids’ joy?`,innhold:`Over the past week I have written about motivation, trust and psychological safety. Topics we often talk about in leadership, but which may matter even more at home.

What happens when you want to motivate, but create pressure? When you want to help, but take too much space? And when your child needs safety more than correction?

For me this also hits the tennis court. 🎾

I have played tennis almost my whole life, and I still play quite a lot.

I am also a trained tennis coach, and perhaps best of all: I get to share the sport with my family. Both my wife and our children, almost 5 and 7, play tennis. 👨‍👩‍👧‍👦

There is something very fine about that. But also something demanding.

Tennis is a fantastic school for life, and chasing a dream is beautiful. But a parent’s job is first and foremost to believe in their child, not to put pressure on them or live the journey for them.

If I am completely honest, I have felt pride when the kids succeed. But I have also felt frustration, and a bit of irritation, when it does not go quite as well. And that may not be so great. 💣

Perhaps that is why the question struck me when I saw the reflection that Novak Djokovic does not want to coach his own children. No comparison intended, but the thought is interesting: Maybe it is more important to be a dad than a coach.

At the same time, this is not black and white. Norway’s best tennis player of all time, Casper Ruud, has his father as coach. Many elite athletes have had parents as both supporters and coaches on the way to the top.

Perhaps that shows the question is not whether parents can be coaches, but 𝑤ℎ𝑒𝑛, ℎ𝑜𝑤 and ℎ𝑜𝑤 𝑙𝑜𝑛𝑔 it is right.

USTA describes the parent role in tennis first and foremost as support, safety and unconditional backing. Research also points out that the parent–coach combination can bring both quality time and motivation, but also role confusion, pressure and conflict.

And perhaps some of this is also age-related.

When children are small, it can be completely natural for a parent to introduce the play, the movements and the joy of the sport. But over time, the relationship may be best served when others take a clearer coaching role.

By the way, the image for this LinkedIn post is a bit playful. I have put my own face in front of the kids’. It is meant to say something about how easy it is to project your own ambitions onto them. Or how high expectations you may end up setting, because you have always set high demands on your own development.

In any case, it is a useful reminder for me.

I love tennis.

I love that my family does too. 💯

But perhaps my most important task is not to develop their strokes.

💙 Of course it is to preserve the joy. ❤️

👉 What do you think?

Is it a strength or a pitfall when parents are also coaches?

And does this change with age?

#tennis #parenting #sportjoy #mastery #development #leadership`},"psykologisk-trygghet-krav-2026-01":{tittel:"Psychological safety is not the absence of demands",teaser:`Psychological safety is not the absence of demands. It is about making people safe enough to contribute fully — with clarity, respect and responsibility both ways.`,innhold:`Psychological safety is sometimes portrayed as if it is about making working life softer, less direct or less demanding.

I think that is a misunderstanding.

In performance environments, and especially in commercial environments, there should still be:
• expectations
• demands for effort
• clear goals
• responsibility for deliveries

That is not the problem.

The problem arises when high demands are combined with low respect, unclear communication or a culture where people do not dare speak up, ask questions or report risk early enough.

Then you do not get more performance. You get more silence, poorer information and weaker learning.

For me, psychological safety is therefore not about lowering demands. It is about making people safe enough to contribute fully.

And that responsibility goes both ways. 💥

The leader has a particular responsibility to set direction, be clear, follow up, correct with respect and create frameworks that make it possible to contribute.

But employees also have a responsibility:
• to show up prepared
• to take ownership
• to contribute constructively
• to speak up when something is unclear
• to stand in demands, feedback and expectations

Safety does not mean a right to be passive. It means safety to be active.

That is an important difference.

The best performance environments are therefore not the most comfortable. They are the safest for thinking aloud, challenging, learning, adjusting and delivering under pressure. 📈

I also believe this is one of the most underestimated connections in leadership:

High demands are best tolerated where respect is high. 💯

When people experience clarity, respect and predictability, they also tolerate more pressure, more correction and higher expectations. Not because demands become lower, but because the framework becomes better. ⚖️

Perhaps that is why psychological safety is not primarily a wellbeing topic.

It is a topic about quality, responsibility and execution in the pursuit of goals. 🎯

#leadership #psychologicalsafety #trust #execution #commercialleadership`},"tillit-endring-gjennomforing-2025-01":{tittel:"People rarely resist change",teaser:"People rarely resist change. They resist ambiguity, distance and low trust.",innhold:`People rarely resist change. They resist ambiguity, distance and low trust.

That is an important distinction for leaders who need to execute something that truly matters.

When transformations stall, it is often explained as resistance to change. In practice, it is just as often about people not understanding the direction, not seeing their role in it, or not trusting the process behind it enough.

This is where trust shifts from being a culture word to becoming an operational leadership tool.

High trust reduces friction. It means decisions do not have to be sold again in every meeting. It helps people act faster, report mistakes earlier, and take greater ownership of what needs to be delivered.

Low trust does the opposite. It increases internal transaction costs: more control, more escalation, more time spent repairing what was not clearly said the first time.

In commercial environments, this is clear when leadership changes priorities, pricing models or sales focus. If people are only told 𝘸𝘩𝘢𝘵 has been decided, but not 𝘸𝘩𝘺, friction rises quickly. When the rationale is clear, both pace and execution improve.

The same applies to AI. Many AI initiatives do not stop because people are against the technology, but because they do not trust the purpose, the data foundation, or how the solution will be used. When value, control and role clarity are clear, adoption increases.

It is also not enough to communicate what has been decided and why. Leaders must also communicate 𝘩𝘰𝘸 it will actually be executed in practice. When something new is placed on someone's shoulders without clear frameworks, priorities and support, uncertainty and friction quickly appear. When people understand direction, rationale and what is expected of them, acceptance, ownership and action increase. 💥

Research points in the same direction. Employees in high-trust organizations report lower stress, higher productivity and stronger engagement than in low-trust organizations.

🤝 Trust is therefore not a soft topic. It is an operating system for execution.

🎯 The question is not only whether leadership believes in the plan. The question is whether the organization has enough trust to follow it.

#Leadership #Transformation #ChangeManagement #Execution #Trust`},"hva-motiverer-kunnskapsarbeid-2026-01":{tittel:"What motivates YOU and people in knowledge work?",teaser:"Bonuses can drive activity, but quality, learning and ownership are more often built through meaning, mastery, autonomy and inspiration.",innhold:`𝐇𝐯𝐚 𝐦𝐨𝐭𝐢𝐯𝐞𝐫𝐞𝐫 𝐃𝐄𝐆 og 𝐦𝐞𝐧𝐧𝐞𝐬𝐤𝐞𝐫 𝐢 𝐤𝐮𝐧𝐧𝐬𝐤𝐚𝐩𝐬𝐚𝐫𝐛𝐞𝐢𝐝?

I forrige innlegg skrev jeg at gode intensjoner ikke er nok. Men mellom intensjon og handling ligger ogs\xe5 et annet sp\xf8rsm\xe5l:

Hva er det som f\xe5r mennesker til \xe5 ville bidra, utvikle seg og ta ansvar over tid?

Mange ledere svarer fortsatt raskt: bonus, insentiver og prestasjonsl\xf8nn.

Forskningen svarer mer nyansert. I masteroppgaven min for endel \xe5r siden skrev jeg om bel\xf8nning og arbeidsmotivasjon i kunnskapsbedrifter. Der fant jeg et tydelig spenningsfelt: Prestasjonsbasert bel\xf8nning kan \xf8ke kvantitet, men ikke n\xf8dvendigvis kvalitet. I noen tilfeller kan den ogs\xe5 fortrenge det indre drivet som kunnskapsarbeid er avhengig av.

I kunnskapsarbeid er ikke sp\xf8rsm\xe5let bare om folk jobber mer. Det er om de tenker bedre, l\xe6rer raskere, samarbeider klokere og tar ansvar ogs\xe5 n\xe5r ingen f\xf8lger med.

Derfor tror jeg mange ledere overvurderer effekten av bonus, og undervurderer betydningen av mening, mestring, autonomi, anerkjennelse og utvikling. Oppgaven min peker s\xe6rlig p\xe5 kompetansehevende tiltak som en sterk motivasjonsfaktor.

Et kommersielt eksempel:
To selgere kan ha samme bonusordning. Den ene jager kortsiktig volum. Den andre bruker tid p\xe5 \xe5 forst\xe5 kundens behov, bygger tillit, utvikler egen kompetanse og skaper h\xf8yere verdi over tid.

Begge kan levere aktivitet. Men ikke n\xf8dvendigvis samme kvalitet.
Det er derfor bel\xf8nning er mer enn et l\xf8nnssp\xf8rsm\xe5l. Det er et ledelsessp\xf8rsm\xe5l. For det du m\xe5ler, premierer og gir oppmerksomhet til, former ikke bare innsatsen. Det former kulturen.

Jeg tror ogs\xe5 det finnes et niv\xe5 𝑜𝑣𝑒𝑟 motivasjon som ledere snakker for lite om: inspirasjon.

Motivasjon kan f\xe5 folk til \xe5 stille. Inspirasjon f\xe5r dem til \xe5 ville mer enn minimum.

Motivasjon kan v\xe6re knyttet til m\xe5l. Inspirasjon er oftere knyttet til mening.
Kanskje er det derfor videreutdanning, faglig vekst og muligheten til \xe5 mestre nye omr\xe5der ofte virker sterkere enn ledere tror.

For meg ligger motivasjon og inspirasjon ofte i l\xe6ring, utvikling og det \xe5 forst\xe5 nye sammenhenger. Derfor opplever jeg ogs\xe5 videreutdanningen jeg n\xe5 tar ved BI i 'Generative AI for Business' som mer enn faglig p\xe5fyll, den gir ny energi, nye perspektiver og st\xf8rre handlingsrom.

Et nyttig perspektiv fra forskningen er ogs\xe5 de tre C-ene for arbeidsmotivasjon: Content, Context og Change. Alts\xe5 hva arbeidet inneholder, hvilken kontekst folk jobber i, og hvordan motivasjon endrer seg over tid.

Og det leder naturlig til neste tema:
Selv sterk motivasjon er ikke nok hvis mennesker ikke har tillit til retningen, beslutningene eller lederne som kommuniserer dem.

👉 Neste innlegg vil derfor handle om at tillit ikke er "mykt". Det er gjennomf\xf8ringskraft.`},"alle-enige-ingen-gjor-noe-01":{tittel:"Everyone agrees. Nobody does anything.",teaser:"When strategy does not become behaviour: why agreement is not enough, and what is actually needed to succeed with transformation in practice.",innhold:`<strong>Everyone agrees. Nobody does anything.</strong>

Most businesses I meet do not lack ambition, strategies or the will to change. They have another problem, which is that what is decided in the meeting room does not happen in the market.

It is not sabotage or laziness. There is a gap that research has thoroughly documented, and which managers systematically underestimate: the distance between intention and actual behaviour. In my master's thesis on precisely this gap — rooted in the Theory of Planned Behavior — one of the clearest findings is that a high degree of agreement and a positive attitude are not sufficient to predict action. People can mean what they say. They may want to change. And yet don't do it.

In commercial management and sales management, the consequences are directly measurable. The priorities are clear, the KPIs are set, and everyone nods in the kickoff meeting. Three months later, the behavior in the customer dialogue is the same as before. Not because the strategy was wrong, but because no one translated it into concrete patterns of action: who does what, in what situation, and what is the first step? This is where transformations run aground. Not in the planning phase, but in the transition from intention to routine.

McKinsey's research on organizational transformation shows that 70% of change initiatives do not achieve their goals. The most frequently reported reason is not the wrong strategy or lack of resources, but the inability to change actual behavior across the organization. What separates the 30% who succeed is not better plans, but that managers at all levels actively model the new behavior themselves, rather than delegating the implementation downwards.

What helps is not more communication of the vision. There are implementation intentions — concrete if-then plans that link desired behavior to specific situations and triggers. Research consistently shows that this type of concretization significantly increases the likelihood of implementation, compared to general goal statements alone. In practice, this means that managers must go further than communicating what should happen, and into the more demanding work of designing the behavior that will carry the strategy.

The most difficult conversation in many leadership groups is not about direction. It is about what we stop doing, what we start doing differently tomorrow, and who is responsible for following up that it happens. Agreement is comfortable. Concrete behavior change is uncomfortable, because it reveals who delivers and who doesn't.

<em>The road to hell is paved with good intentions.</em> In management, it is not a proverb — it is an operational risk. The way forward is not built by intentions alone, but by action, responsibility and follow-up.

👉 Next post in the series on management, strategic implementation and transformation in practice: What actually motivates people in knowledge work? The research does not always answer what managers expect.`},"to-parallelle-spor-ledelse-ai-01":{tittel:"I have written a lot about AI. Now I also want to write more about management, strategy and transformation",teaser:"Two clear tracks ahead: AI, technology and future working life - as well as management, strategy and transformation in practice.",innhold:`Recently, I have written mostly about AI, future technology management and how new tools will affect working life. I will continue with that.

But I have also felt the need to lift up a larger part of my own core. Because I am primarily a commercial manager who has worked with sales, marketing, personnel management, strategy, change and responsibility for results in knowledge-intensive industries.

I like to work strategically, but also operationally and closely. Close to people, customers, operations and what actually happens when plans are to be translated into action. It is often where leadership is really tested.

Therefore, in the future I will build more clearly in two parallel tracks:
• AI, technology and future working life
• Management, strategic management, commercial management and transformation in practice

Through two master's degrees, including an Executive Master of Management from BI, I have delved into several topics that I believe are at least as relevant today:
• What actually creates motivation?
• Why do good intentions so often remain just that?
• How do leaders get people to move, not just nod?
• What builds trust, ownership and psychological security?
• How do culture, autonomy and recognition affect actual performance?
• Why do some transformations look right on paper, but become demanding in reality?

And here is the link to today's picture. 💡

The cartoon struck me because it shows a classic mistake in many businesses: We adopt new technology, but let old habits, control needs and symbolic actions control how it is used. The result is that we do not digitize the work. We just digitize the friction!

We talk a lot about "human in the loop" in AI. I believe it is equally relevant in management.

Many people think that resistance to change is primarily about attitude. Often it is just as much about obscurity. People rarely move because they have heard the message once. They move when they understand what is actually expected of them differently in practice.

Too many organizations do not lack strategy, plans or ambitions. They lack the ability to translate intention into actual behaviour, ownership and implementation.

Therefore, the next post will be based on one of the titles from my BI work:
👉 “The road to hell is paved with good intentions.”`},"econa-innovasjon-ideer-verdi-01":{tittel:"This is how you build an organization where ideas turn into value",teaser:"Reflections from Econa on innovation: structure, facilitation and culture that make good ideas actually turn into value.",innhold:`This is how you build an organization where ideas turn into value

On Thursday I participated in the Econa event "Innovation and development - become more opportunity-oriented", with lectures and workshops led by Nina Prestegard.

One of the most interesting things was not how many ideas there are in an organization, but how they are handled. Many businesses have employees who come up with good ideas, but the ideas often appear in the hallway, between meetings or in unstructured settings. They are often met with a "good input", but without clear follow-up. Over time, it weakens both initiative and commitment.

The course was clear that innovation does not happen by chance. It must be designed, both through structure and culture.

Three things stand out in particular:
• Structure beats randomness. Idea work must have clear frameworks, issues and ownership. If not, it will be random what is taken next.

• Groups must be facilitated. Without structure, you get groupthink, dominance and early criticism. Let people think individually first, and build further together.

• Distinguish between exploration and decision. Many go to assessment too quickly. Then the ideas stop before they have had a chance to develop.

Another important point was that creativity is not a quality someone has, but a skill that can be trained. We are often trained to find correct answers, not to explore multiple possibilities. Therefore, managers must consciously facilitate divergent thinking, where the aim is to open up before narrowing down. Curiosity and questions like “what if?” and "can you elaborate?" is a prerequisite for better decisions.

At the same time, this is not only about management, but also about ownership. It cannot be expected that the manager alone will drive forward all ideas that come in. Real innovation happens when employees themselves take responsibility for further developing proposals, testing them and facing the uncertainty. Autonomy builds ownership, and ownership creates progress.

In terms of experience, it is smart to establish regular innovation meetings with a clear structure. Ideas are presented briefly, one person owns further development, and the next step is clarified before the meeting ends. It provides both direction and responsibility, while at the same time signaling that ideas are taken seriously.

For managers, this means that you have to go from asking for ideas to building systems that actually handle them. It is about creating space for exploration, but also clear responsibility for implementation.

The link to commercial management is direct. If you want to develop new services, improve customer experiences or use AI, good intentions are not enough. You must have an organization that is capable of developing, prioritizing and realizing ideas in practice.

My most important takeaway is therefore simple: Innovation is not primarily about more ideas, but about building a structure and a culture where ideas become valuable.`},"nettside-lansering-2026-01":{tittel:"From coding in 1999 to AI revolution in 2026 - new website and new consulting company!",teaser:"New website built with AI tools in two days - and launch of Marius Ottesen Consulting as a bridge between strategy and AI implementation.",innhold:`The last time I built a website from scratch was as a student in the USA in 1999. Then I wrote each line of HTML manually. The last 48 hours have been an eye-opener: I just launched <strong>my new website</strong> - built in just two days!

This is not thanks to my coding skills, but the power of strategic use of AI. Combining <strong>Cursor</strong>, <strong>Claude 3.5 Sonnet</strong>, <strong>Opus 4.6</strong> and <strong>Gemini 1.5 Pro</strong>, I have served as the architect while the AI ​​systems have handled the coding.

The process has also included setting up version control with Git and GitHub, deploying via Cell and connecting to my own domain - so that I can both iterate safely and have full control over how the website is published and updated.

But the project is about more than technology. It is about <strong>Bridge building</strong>.

Many managers feel that the gap between AI theory and commercial value is too large. After a period of focusing on theory and frameworks, I have now established <strong>Marius Ottesen Consulting</strong>. My mission is to be the bridge builder between strategy and practical AI implementation.

On the website you can dive into my professional toolbox:
• <strong>Profile, Experience, references & Results</strong>: Background and proof of value creation
• <strong>Subject posts</strong>: My LinkedIn posts that provide insight into "Strategic Management & Transformation" and "AI & Future Technology Management"
• <strong>Consulting</strong>: For those who need assistance to implement AI
• <strong>CV, Application & Contact</strong>: For informal or formal enquiries

I help businesses move AI from frameworks to core tasks:
• <strong>AI strategy</strong>: Link to business goals and ROI
• <strong>Process optimization</strong>: Removal of friction in operations
• <strong>Digital Transformation</strong>: Rigs the organization for a new everyday life
• <strong>Workshops</strong>: From theory to practical mastery

<strong>I am now moving from only theory to actual construction</strong>.

Together with technical partners, I go straight into companies' core processes to implement concrete AI projects - whether it's workflow automation or intelligent tools for decision support. AI should not be a side project, but the engine of their growth.

<strong>Take a look</strong> - and feel free to share! Under the tab "Consulting" you will find a contact form. Do you have challenges that we should look at together? Describe them there, and we will take the dialogue further.

What works and what is missing? I really appreciate all feedback!

<strong>Link to the website:</strong> www.mariusottesen.no`},"attitude-2016-01":{tittel:"Did you know?!? It's all about ATTITUDE!",teaser:"Short post about attitude and attitude.",innhold:"Did you know?!? It's all about ATTITUDE!"},"visindi-rekruttering-2024-01":{tittel:"Nice gesture by Visindi who ran a good and professional recruitment process when I was headhunted to Franzefoss Gjenvinning AS!",teaser:"Thanks Visindi for a good and professional recruitment process in headhunting for Franzefoss Gjenvinning.",innhold:"Nice gesture by Visindi who ran a good and professional recruitment process when I was headhunted to Franzefoss Gjenvinning AS! :-)"},"obf-klar-2025-01":{tittel:"Ready for two days of inspiration at Oslo Business Forum 2025 - The Big Shift!",teaser:`Ahead of Oslo Business Forum 2025 – The Big Shift: expectations for two days of learning, reflection and networking.`,innhold:`🚀 Ready for two days of inspiration at Oslo Business Forum 2025 - The Big Shift!

I am looking forward to a packed program with strong speakers, new perspectives and lots of professional additions. Equally important are the meetings with both old and new acquaintances – it's always exciting to share experiences and build relationships across industries.

These will be two days of learning, reflection and networking that I am really looking forward to! 💪 🙋‍♂️

https://www.obforum.com/`},"obf-2025-big-shift-01":{tittel:`Oslo Business Forum 2025 – The Big Shift`,teaser:"Takeaways from Oslo Business Forum 2025: strategy, AI, management and human power. OBF 10th anniversary.",innhold:`✨ Oslo Business Forum 2025 - The Big Shift ✨

Two inspiring and educational days are over - filled with strong lectures, important perspectives and energy around strategy, management, technology and the possibilities of the future. In addition, this year's conference marked the 10th anniversary of the Oslo Business Forum – a milestone that shows the importance the arena has taken on for managers.

🔑 <strong>My most important takeaways:</strong>

🎯 <strong>Strategy and growth:</strong>
B. Sternfels reminded us that future winners must aim high, move fast and build organizations that continuously adapt to change. He highlighted the importance of learning, humour, warmth and resilience – and emphasized growth and AI as top management priorities. M. Buckingham delivered a strong message: "Love is the most powerful force in business" – real value creation is about meaning and belonging.

🤖 <strong>AI and technology:</strong>
P. Lakhani showed how AI can be used strategically to create competitive advantage, while T. Mauri introduced "Agility is the new stability" and raised the importance of ethical reflection. P. Malmgren encouraged more creativity: "The big things that matter need better imagination from us."

👩‍💻 <strong>Generations and culture:</strong>
Dr. E. Filby showed how younger generations are constantly driving development forward, while Gen. X is most positive about AI and tech. She also pointed out why physical interaction and shared arenas are still crucial for learning, culture and innovation – even in a hybrid everyday life.

❤️ <strong>Leadership and human power:</strong>
S. Sinek reminded us of "What you search for, you will find" – leadership starts with meaning and optimism.
D. Kander delivered some of the conference's most concrete and powerful messages: "Never goal alone" - "Always ask: Who can help me do this?" – and "Success can be your biggest blind spot." She challenged us to cut low-value tasks and focus on value vs. effort.

🏆 <strong>Team and trust:</strong>
Aksel L. Svindal showed how winners are built through openness and collaboration: "Trust your team, share all good data – and don't forget the 7 o'clock dinner. Celebrate together."

🧭 <strong>Change as a driving force:</strong>
A. Rinne introduced the Flux mindset and showed how uncertainty can be used strategically, while G. Petriglieri reminded us that emotions are a competitive advantage in management.

💡 <strong>The common denominator from the stage was clear:</strong> The leaders of the future must combine strategy, technology and human insight - and the ability to create culture, pace, curiosity and trust in a time characterized by major changes.

<strong>Next Chapter – The Human Edge (2026):</strong>
OBF 2026 builds on this year's learning as it is about unlocking the strengths that no machine can replace. In an age of disruption, leaders must rely on creativity, courage, trust and persistence, and build cultures where people and ideas can flourish.

A big thank you to Christoffer Omberg and the entire skilled and pleasant(!) OBF team for an impressive, professional and inspiring event - both professionally and personally strong from start to finish! 🙏`},"kjeft-psykologisk-trygghet-01":{tittel:"Is it okay to 'shut up' as a leader - and what does that mean for psychological security?",teaser:"Psychological security, clarity and anonymous criticism. Reflections from a lecture with Henning Bang (Econa).",innhold:`On Monday, I attended an insightful lecture organized by Econa with professor <strong>Henning Bang</strong>. The topic was <strong>psychological security</strong>, and what actually builds it - or undermines it.
The lecture hit home, especially because it challenges both managers and employees.

<strong>The point that really created reactions and discussion in the room was Bang's claim that:</strong>
"Sometimes you have to be able to speak clearly. 'Jeft' can be tolerated by adults - as long as it is not person-focused, not humiliating and the language is proper. When boundaries are broken, it must be allowed to react clearly - even if it creates legitimate discomfort."

For the record:
<strong>I don't strive to 'shut up' as a leader.</strong>
But I share the principle of clarity: management requires that you actually speak up when something doesn't work.

Another important point that was discussed was <strong>anonymous criticism</strong>.
Anonymous input can pick up signals - but they are rarely developmental. When the sender is unknown:
🔹 the dialogue stops before it starts
🔹 misunderstandings spread in the team
🔹 the wrong people can be associated with the criticism
🔹 the culture is moving from courage to caution

In short: <strong>anonymity can be a safety net, but not a tool for development.</strong>

<strong>My most important takeaways from the lecture:</strong>
🔹 Psychological security does not mean the absence of demands.
🔹 Learning requires us to tolerate discomfort - also when it comes to ourselves.
🔹 Safety is not only created by the manager - employees also have responsibility.
🔹 Inside-out reflection is maturity: "What could I have done differently?"
🔹 Too little security → silence, defense and anonymous criticism.
🔹 Too much security → buddy club, low accountability and little development.
🔹 Clear expectations and correction are not "shouting" when given respectfully.
🔹 Explain - Invite - Respond: Actions that can increase psychological security.

Henning also referred to <strong>Amy C. Edmondson</strong>, Harvard professor and global leader in psychological safety. Her research shows that teams with high confidence:
✔ perform better
✔ learn faster
✔ share errors earlier
But she is as clear as Bang:
<strong>Safety without responsibility gives comfort - not quality.</strong>

💬 <strong>What do you think?</strong>
1. When is clear feedback perceived as help - and when as criticism?
2. How do we balance psychological security with demands and responsibilities?
3. What are the characteristics of employees who take ownership - also when something goes against them?

I learn most when others think out loud with me.`},"kapasitet-maraton-01":{tittel:"Capacity is built over time - and can be retrieved when relevant, in several arenas",teaser:"Half marathon in Cairo and reflection on capacity: performance is built over time and can be retrieved in several arenas.",innhold:`On Saturday I took part in the Marakez Pyramids Half Marathon in Cairo, Egypt.
10,000 runners from 122 countries at the starting line - I was 18th in my class.

Despite increased and targeted specific race training beforehand, it was not enough to extract full potential this time. At the same time, I am convinced that my performance and capacity are largely connected to what I have invested in over many years earlier in my life.

I am genuinely pleased with the result. Not just as a number, but as a personal victory and a confirmation of just this.

Performance is rarely about short-term effort, but about basic training – physically and mentally – built over time. Experience and capacity from cross-country skiing, running, tennis, strength and other training still remains. Today, I train variedly and particularly enjoy tennis, both training and competitions. It provides both strength, robustness and the inner drive – the motivation that makes you train when no one is watching.

The same applies in working life.
Education, professional development and experience from previous roles and companies provide capacity that you can call upon when it is relevant.

At a recent professional seminar, age discrimination in working life was discussed. A representative from NAV pointed out that many people already experience this from the age of 50. I'm not there yet, but the reflection is important: the solution is to continue investing in competence, development and learning.

This race was a clear "Big Hairy Goal" – something to train for and look forward to – a goal that provided direction, energy and boosted motivation. The social community made the experience even stronger. Being part of an environment means a lot, professionally and socially. We performed as a team, supported each other before, right up to, and after the race. There was a lot of reflection, training theory and development - and not least: it was fun.

Through roles as tennis coach and manager, I have experienced how rewarding it is to contribute to the development of others - and to succeed together as a group. Fellow players, the public, supporters, colleagues, family and friends who cheer, lift the performance even further.

Now we enter the winter - with more focus on other types of training, new sessions on snow and arenas that continue to build capacity. What about investments on the skills side? I consciously choose what builds value – for example, playing more with AI, as today's picture illustrates. Made at the airport on the way home to Norway.

Fun facts:
The Pyramid of Cheops was built over 5,000 years ago - approx. 2.5 million stone blocks, 2.5–5 tons each. Stone on stone. Of people. We still don't quite know how.
A reminder of what long-term effort, hard work, perseverance and management can create - whether it's about buildings, performance, competence or people.`},"videre-franzefoss-2026-01":{tittel:"After 2 years as National Sales Manager in Franzefoss Gjenvinning, I have chosen to move on",teaser:"Completion as National Sales Manager in Franzefoss. Further to interim, consulting and investment in AI expertise.",innhold:`After 2 years as National Sales Manager in Franzefoss Gjenvinning, I have chosen to move on

The background is different strategic views on the way forward - and a conscious choice to invest time in further development and expertise before the changes force themselves forward, including in the field of AI.

The time in Franzefoss has given me further solid experience in commercial management, sales development and implementation in a complex and socially critical industry. At the same time, I have gained a deeper understanding of circular economy and recycling, as well as what is actually required to succeed with change in practice.

I would like to thank my colleagues for an exciting and intensive period, during which both the company and the people developed significantly.

<strong>Today I used the experiences actively</strong>, i.a. as interim manager and consultant in dentistry at Sk\xf8yen\xe5sen Tannklinikk. This is growing strongly, with more dentists, more specialized treatments and a clear focus on both existing patients and new customer groups. At the same time, the clinic has been renovated and modernized to meet the requirements forward-looking clinics must deliver on – professionally, technologically and in terms of patient experience.

AI is also on its way into dentistry – not only in examinations and treatment, but in the areas of efficiency, decision support and development. Here I am now concretely working on how technology can contribute to better quality, flow and results.

Also, I continue to develop MedDrop. This is a med-tech start-up and an IoT-based medicine dispenser - with a focus on patient safety, compliance and clinical needs. The project deals with innovation at the intersection of technology, health, regulatory frameworks and clinical practice.

<strong>At the same time, I invest heavily in my own development:</strong>
• Master's course in <em>Generative AI for Business</em> (BI)
• Practical application and testing beyond the syllabus
• Active learning and sharing in the network (the AI posts I publish are part of this)
• Courses, networks and dialogue with exciting professional environments - to learn and contribute where relevant

The period I am in now is not a break, but an active investment in development, ability to implement and relevance for forward-looking organisations. I still want to stand strong as a commercial manager, where AI is one of my key management skills.

<strong>Curious about dialogue - not necessarily a new job tomorrow!</strong>

Feel free to get in touch for an informal conversation.`},"brains-not-included-01":{tittel:"Brains not included - and that is precisely why authenticity becomes the leader's most important advantage",teaser:"In the age of AI, authenticity becomes the leader's advantage: write something that stands for something. Reflections from BI breakfast about CTRL+ALT.",innhold:`Yesterday I attended a breakfast meeting at BI Executive. The theme was "How authenticity will become the manager's strategic advantage in 2026", with a clear link to the use of AI.

The starting point was the book <em>CTRL+ALT. Strategic, creative and practical - the art of writing for businesses</em> by i.a. \xd8ystein Bonvik, who was a speaker in dialogue with Hanne Kj\xe6rnes. The conversation dealt with management, language, brand and technology.

The main point was clear:
When AI makes it extremely easy to produce text, meaning, clarity and the human sender become more important than ever. When everyone can write "okay", it becomes crucial to write something that actually stands for something.

AI should therefore not be used to write for us, but to help us. As a structural partner, challenger of ideas and editor - not as a voice. Used correctly, AI works very well, even for demanding tasks. Used incorrectly, the communication is correct, but empty.

A central concept in the discussion was unconsciousness. AI makes it easy to be neutral, cautious and indistinct. The quest not to offend anyone can quickly end in texts that in practice say nothing. Authenticity is therefore not about "being yourself", but about matching who we are, what we do and how we express ourselves.

This is closely related to tone of voice. Many businesses are aware of their logo and colours, but far less so of how they actually sound. Language is perhaps the most important carrier of the brand's personality – internally and externally.

An important management point was the risk when managers bypass professional environments and employees by using AI to get quick answers. It can weaken both quality and trust. AI lacks judgment and empathy – and neither understands context, nuances or puns as humans do. A good pun can be obviously powerful to us, but completely incomprehensible to a machine.

We are still in the playroom. Just like when PPT and ClipArt arrived, we test, fail and learn. AI is the future, but mature use requires awareness. AI won't take your job – but the person who can use AI wisely will.

There was also an interesting reflection on academia and plagiarism. Plagiarism is the worst thing you can do, and at the same time the methods for revealing AI-generated text are far from accurate. Among other things, AI detectors have failed on texts written 20 years ago. It says something important that technology is not the challenge, but more about responsibility and judgement.

I asked about <strong>line of thought</strong> - and was clearly told to continue using it. It is a deliberate linguistic move, not an AI stamp.

"<strong>Brains not included</strong>" – a bit like "batteries not included". AI can help us a long way, but it is never an exemption from thinking for ourselves.`},"frastotende-salg-2026-01":{tittel:"With reference to the article from ASD Group, Espen Hellman puts into words something very important for the sales profession",teaser:"Espen Hellman and ASD: what sets the best salespeople apart - listen, be honest, take responsibility for progress.",innhold:`With reference to this article (<a href="https://www.linkedin.com/feed/update/urn:li:activity:7407361511905452033/" target="_blank" rel="noopener noreferrer">https://www.linkedin.com/feed/update/urn:li:activity:7407361511905452033/</a> ) from the ASD Group, Espen sets Hellman's words on something very important for the sales profession. Trust in salespeople is low, and few customers experience real value in the first meeting. At the same time, the article shows that there are simple principles that distinguish the best: Listen, be honest - and don't pressure.

I completely agree with this, and at the same time it is worth clarifying what "do not press" actually means. Good sales are also about taking responsibility for progress. Without clear next steps, even good dialogues run the risk of being postponed, forgotten or never realized. Each sales process lives its own life, but professional salespeople follow up with the right timing and clarity - in a way that feels natural to the customer.

The article also shares an interesting fun fact:
The best sellers ask an average of 32 questions in the analysis phase - 39% more than the average.
For me, this is not about the number of questions, but which questions are asked. It requires thoughtful situational and reflective questions - and the ability to listen with empathy. In professional language, we call this active listening. When the salesperson understands both how the customer works today and why, the dialogue moves from price to actual value.

Much of this resembles good coaching. When the customer himself formulates the challenge – and often parts of the solution – the decision becomes both easier and stronger than when the solution is presented ready-made. It provides both better relationships and more robust sales processes.

This is also the reason why I have great respect for the expertise in ASD. I myself have used them as a supplier of coaching services in sales, and find that they are particularly strong in developing the role of adviser - where methodology, behavior and reflection are closely linked.

So finally:
What do you think of when you hear the word "salesman"?
For me, a good salesperson is an advisor and partner – someone who listens actively, is honest, takes responsibility for progress and is strong at (also latent) needs mapping and the interpersonal aspects.`},"skalering-01":{tittel:"What actually determines whether scaling is successful - and why people, timing and choices are decisive",teaser:"What determines whether scaling succeeds: plan, life cycle, people and timing. From the webinar Scaling in practice.",innhold:`Many people talk about scaling as if it is primarily about pace, ambitions and growth in numbers. My experience is that the challenges more often arise in the transition from what worked yesterday to the next phase.

On Wednesday, I participated in the webinar <em>Scaling in practice</em> with Annette Sveen, and several perspectives resonated well with my own managerial everyday life.

A key point was the importance of having <strong>a clear plan and direction</strong>. Scaling without a clear understanding of why you are growing - and where you are going - makes the organization reactive. Is the goal further growth, internationalization or sale of the company? Without an explicit answer, priorities become unclear, and management loses control.

Furthermore, it became clear how crucial it is to know <strong>where the business is in the life cycle</strong>. Start-up, growth, maturation and saturation make completely different demands on structure, management and people. Measures that work in one phase can become inhibiting in the next. Scaling is as much about timing and adaptation as it is about execution.

A consistent theme was <strong>people as the most critical factor in scaling</strong>. The focus often ends up on technology, systems and finance, while the ability to implement is determined by how people interact, make decisions and handle increased complexity. Mismatch between people, roles and phase creates friction - which costs speed and energy.

I recognize this very well, and myself have experience with the use of <strong>profile identification and analysis tools</strong> at management level and employee level. This has been particularly valuable in work with sales advisors and customers. When we understand behaviour, drivers and communication style - in ourselves and others - management, collaboration and sales become more precise.

The webinar also highlighted <strong>AI as a practical tool in scaling</strong>, not as a replacement for humans, but as a way to free up capacity. The advice was clear: start controlled, test yourself first, integrate into existing systems and identify bottlenecks before rolling widely. Used correctly, AI can contribute to better resource utilization - in line with own experiences from management and sales.

Finally, some <strong>pervasive errors in scaling</strong> were pointed out: missing plan, wrong people in key roles, wrong priorities, too little understanding of technology and absence of good sparring partners.

My most important reminder after the webinar is simple but demanding:
<strong>Scaling doesn't start with doing more – but with doing the right things, in the right order, with the right people.</strong>`},"tennis-01":{tittel:"Tennis and Management: Strategy under pressure",teaser:`Tennis and management: Djokovic, Alcaraz and transfer value to working life – strategy and attitude under pressure.`,innhold:`Working purposefully does not always mean winning.
Sometimes you win. Other times you lose the final.

More often than we like to admit, you don't even get there.

In December, I wrote about the half-marathon in Egypt and how capacity is built over time, stone by stone, and can be retrieved when needed. I also took that reflection here with me.

During the Australian Open recently, I got to see Novak Djokovic knock out Jannik Sinner in the semi-finals. A new generation at full speed - and the "old" champion who still finds a way to victory. Great as a winner.

Two years ago, I sat close to the court in Paris during the Olympics and watched Djokovic win over arch-rival Carlos Alcaraz in the final. Gold. The only medal he was missing. The culmination of a life's work.

This year, in Melbourne, I experienced much of the same, but with the opposite outcome. In the final, Djoko lost to "Carlitos" after a brutal, close and physical match.
Two moments. Same performers. Two completely different results.

What made the strongest impression this time was not just the tennis – it is in a league of its own – but what came after the match.

In a sport where "only victories count", at least for Djokovic, he delivered an interview characterized by dignity, gratitude and respect. For his team. For the opponent. For the audience. For the journey. Great - even as a loser.

Djokovic er av mange regnet som the GOAT. Samtidig er han en av de mest kontroversielle skikkelsene i moderne tennis. Emotional. Stubborn. Principled. Kritisk til systemer og rammer, som blandt annet kostet ham dyrt som under covid-perioden og boikotten av Australian Open. Likevel er det sl\xe5ende hvor elsket og respektert han er, ogs\xe5 nettopp i Australia. For the game. For mental strength. For viljen til \xe5 st\xe5 i motvind. Jeg kjenner ingen annen som er mer r\xe5 p\xe5 dette enn han.

As an active tennis player myself – and this is the sport I love most, out of many – this hits particularly well. I recognize the work behind it: the hours on the field, the adjustments, the frustration, the repetitions. Tennis is brutally honest. You stand alone on the field with the responsibility, but you never succeed alone over time.

This is something the tennis world is often good at showing off. Many players on the tour are good at lifting the team around them and showing respect for competitors. In other sports, unfortunately, we often see the opposite, where this disappears when the pressure becomes great.

And Alcaraz. What a performer!
An artist. Creative, brave and playful - at the same time extremely purposeful. He creates enthusiasm and love for the sport. It is also a form of achievement.

For me, this is not just about tennis.
It's about the path to becoming number one - in sport, work and life. About enduring the contrasts between victory and defeat. And about continuing to invest in the process - as I also experienced in the marathon.

The transfer value to working life and management is greater than many people think.`},"landet-rikt-01":{tittel:"Your business may be well into decline - but you don't notice it",teaser:`The Land That Got Too Rich: How Abundance Hides Decay in Business—and What Leaders Can Do Differently.`,innhold:`Your business may be well into decline.
But you don't notice it - because the account is full.

On a recent holiday in Australia, I read Martin Bech Holte's book <em>The Land that Got Too Rich</em>. It started as a book about the Norwegian economy. It ended up being the most uncomfortable mirror I have held up to my own leadership experiences.

<strong>This is Norway's fault - and probably yours too.</strong>

What makes this extra unpleasant is that this is not new. History is full of countries and companies that built enormous values ​​- and lost them. Not because the crisis came suddenly, but because discipline disappeared. Abundance removed the need for prioritization, and the warning lights were ignored because the numbers were still green.

The decay does not happen dramatically, but gradually. The pace slows down a bit. Decisions take a little longer. Responsibility is pulverized. On paper, everything looks fine, but in practice the organization loses momentum. Just like this, Norway's productivity has fallen by 11% since 2013, at the same time as the oil fund grew to over NOK 21,000 billion.

In management groups, I see the same pattern: "We can afford it", therefore inefficiency is tolerated. In sales, we hire more salespeople instead of improving the conversion rate. We increase the marketing budget rather than work systematically with sales enablement, process improvement and smarter use of support functions. Artificial scarcity, even with funds, is often the key to higher productivity.

Then the next thing happens. The best managers and value creators lose patience. When support functions, processes and internal considerations gradually take precedence over actual value creation, I know the wealth trap has struck. Those who create results experience increasing friction and look away. Again, those who are comfortable with the status quo sit. Revenue per employee is falling, but no one is reacting – because the absolute numbers are still growing.

The system produces what you incentivize. Bonus on activities. Pipeline without quality requirements. Sales that are rewarded regardless of margin, customer satisfaction or retention. The result is predictable: sales to the wrong customers.

"We have plenty of time" is perhaps the most dangerous illusion of all. Sweden took around 20 years from top to bottom. Norway may be well into a similar development, but does not notice it as the oil fund masks the pain. The focus shifts away from the core competence. The changes happen slowly at first - and then at an accelerating pace.

In sales, it looks like this: ACV gradually falls. The sales cycle is getting longer. Win rate against primary competitor goes from 60% to 45%. But absolute turnover is still growing 10% annually, so no one is sounding the alarm.

The question is not whether this can be reversed. History shows that it can. What needs to change before the numbers also start to point in the wrong direction?`},"norge-virksomhet-01":{tittel:"If Norway were a business - what would the management have to do now?",teaser:"If Norway were a business: learning from Bech Holte about discipline, resource allocation and AI as a management tool.",innhold:`In <em>The country that became too rich</em>, Martin Bech Holte describes how Norway has gradually lost momentum, not because we lack resources, but because they are used incorrectly. The interesting question for us who manage businesses is not whether the analysis is completely precise, but what we can learn from the pattern - and do differently.

<strong>Learning for business management</strong>

The core of the book is simple and unpleasant: Abundance removes pressure. When the pain threshold is never reached, the priorities are not met. In businesses, it often looks like this: Capital is allocated based on history and internal impact, not effect. Budgets grow, while output per employee falls. More initiatives are started than finished. "We have plenty of time" becomes a guiding principle. The result is rarely a crisis, but stagnation – such as at the national level.

<strong>Solution for businesses</strong>

Businesses that break this pattern do some fundamental things differently. They introduce artificial scarcity even when the account is full, and do not allow everything that is possible to live. They move resources based on effect, not intent. They manage by productivity and outcome rather than activity and headcount. And they adjust incentives so that long-term value creation is rewarded more than volume and visibility.

Here, AI can be a tool, but only when used correctly. Not as an individual productivity tool, but as support for better prioritization, more objective resource allocation and earlier warnings about what is actually not working. 88% of organizations will use AI in at least one function by 2025, according to McKinsey. Nevertheless, the gains are often not realized, because the technology is not built into the core processes.

The experiences from the study Generative AI for Business at BI have made one thing clear to me: AI transformation is about governance, not licences. IBM reports $4.5 billion in annual productivity gains from end-to-end process automation, not individual tools. In sales, this means, among other things, real-time analysis of deals, automated lead scoring, more precise pricing and forecasting that can actually be used for management. But this must be led from the top. AI is not an IT project, it is a core competence.

<strong>First 90 days – a practical start</strong>

If this were operationalized, I would start with a thorough review of where the money goes, what is rewarded in incentives, and whether the measurements say anything about real value creation. Then, resource allocation, KPIs and decision models must be designed for effect, not activity. Only in the last phase is it about consistent implementation, also when it means stopping initiatives that do not deliver.

The point is not to become more efficient.
The point is to restore discipline before it is imposed.

Norway did not become weaker because we lacked resources.
Businesses often fail for the same reason.`}},q=[{id:"trykk-prestasjon-kommersiell-ledelse-2026-05",tittel:"Når press blir ledelse",teaser:"Mer trykk er sjelden en bærekraftig ledelsesmodell. Kommersiell ledelse handler om resultater — men varig prestasjon bygges i spennet mellom tydelige krav og reelt eierskap.",bildeUrl:"/images/trykk-prestasjon.png",dato:"2026-05-26",visningsDato:"26.05.26",kategori:"Kommersiell Ledelse",link:"https://www.linkedin.com/in/mariusottesen/recent-activity/all/",innhold:`N\xe5r press blir ledelse

Mer trykk er ikke en ledelsesmodell. Det er en kortsiktig respons.

Jeg har sett og erfart det mange ganger. Resultatene uteblir, og svaret blir flere m\xf8ter, tettere oppf\xf8lging, h\xf8yere aktivitetskrav og raskere tempo.

Noen ganger er det n\xf8dvendig.

Problemet oppst\xe5r n\xe5r trykket blir selve modellen.

Kommersiell ledelse handler om resultater. Det skal den gj\xf8re. Salg, margin, kundeverdi og vekst er mandatet. Men varige resultater skapes sjelden gjennom press alene.

B\xe5rd Kuvaas har over tid l\xf8ftet frem betydningen av autonomist\xf8ttende ledelse. Ledere som forklarer retning, stiller gode sp\xf8rsm\xe5l og st\xf8tter medarbeidere uten \xe5 bli kontrollerende, bygger ofte sterkere motivasjon, bedre prestasjoner og lavere turnover.

Gallup peker i samme retning. H\xf8yt engasjerte team leverer bedre p\xe5 kundelojalitet, salgsproduktivitet og l\xf8nnsomhet. Engasjement starter ofte med noe s\xe5 grunnleggende som tydelige forventninger.

Betyr det at medarbeidere skal skjermes for krav?

I et sterkt kommersielt milj\xf8 g\xe5r ansvaret begge veier. Lederen m\xe5 skape retning, struktur, tillit og oppf\xf8lging. Medarbeiderne m\xe5 ta eierskap, v\xe6re \xe5pne for tilbakemelding, bidra til l\xe6ring og st\xe5 i gjennomf\xf8ringen n\xe5r det krever noe.

Det er her dynamikken blir interessant.

N\xe5r ledelse blir ren kontroll, mister teamet kraft. N\xe5r autonomi blir uten retning, mister organisasjonen tempo. Prestasjon bygges i spennet mellom tydelige krav og reelt eierskap.

Da blir aktivitet mer enn volum. Den f\xe5r retning. Aktiviteten kobles til kundeinnsikt, kvalitet, prioriteringer og reell verdi.

Det er her mange kommersielle milj\xf8er mister kraft. De m\xe5ler mer, men l\xe6rer mindre. De krever mer, men bygger ikke alltid kapasitet. De \xf8ker aktiviteten, men f\xe5r ikke n\xf8dvendigvis sterkere gjennomf\xf8ring. For meg er forskjellen p\xe5 kvantitet og kvalitet et av de viktigste skillene i kommersiell ledelse.

Salgsresultater skapes gjennom mennesker som skal t\xe5le tempo, usikkerhet, avslag og krevende kundebehov, dag etter dag.

Derfor holder det sjelden \xe5 skru opp volumet alene. Man m\xe5 bygge et system som gj\xf8r det mulig \xe5 prestere.

Systemet m\xe5 ha:
🧭 Retning
⏱️ Rytme
✅ Ansvar
🤝 Samspill
💡 L\xe6ring
🌱 Kultur

Det er forskjellen p\xe5 et team som leverer n\xe5r presset \xf8ker, og et team som bare blir mer slitent.

Kommersiell ledelse handler om \xe5 bygge motoren bak resultatene.

👉 Hva mener du kjennetegner kommersiell ledelse som skaper prestasjon over tid?

#kommersiellledelse #prestasjonskultur #salgsutvikling #kundeinnsikt #gjennomf\xf8ringskraft`},{id:"gronne-exceltall-transformasjon-2026-05",tittel:"De grønne tallene er ikke problemet. 📈",teaser:"Business caset ser bra ut i Excel – men gevinstene lekker ofte i drift. Gode transformasjoner starter med hele virkeligheten, ikke bare kurvene.",bildeUrl:"/images/grønne-exceltall.png",dato:"2026-05-19",visningsDato:"19.05.26",kategori:"Generell ledelse og strategi",link:"https://www.linkedin.com/in/mariusottesen/recent-activity/all/",innhold:`De gr\xf8nne tallene er ikke problemet. 📈

Problemet er alt de ikke viser.

I lederm\xf8ter kan et business case gj\xf8re en kompleks beslutning farlig enkel. Kostnadene g\xe5r ned. Kapasiteten g\xe5r opp. Kurvene peker riktig vei. Alle vil v\xe6re handlekraftige. 🥊

S\xe5 starter endringen.

Kundene merker at flyten ikke er like god. Ansatte mister eierskap til prosesser de tidligere hadde kontroll p\xe5. Koordineringen blir tyngre. Kvaliteten faller litt f\xf8r noen klarer \xe5 forklare hvorfor. Og gevinstene som s\xe5 s\xe5 tydelige ut i Excel, begynner \xe5 lekke i drift. 💣

Dette betyr ikke at transformasjon er feil. Tvert imot. Endring er n\xf8dvendig.

Men gode transformasjoner starter ikke med et pent regneark alene. De starter med et \xe6rligere bilde av virkeligheten – hele virkeligheten!

Mitt konkrete r\xe5d er enkelt.
💥 Ikke godkjenn prosjektet f\xf8r noen har laget undersiden av regnearket.
Hva betyr endringen for kunder, mennesker, kvalitet, koordinering og eierskap?
Det er ofte der gevinstene enten realiseres eller forsvinner.

McKinsey har lenge pekt p\xe5 at rundt 70 % av transformasjoner ikke n\xe5r sine opprinnelige m\xe5l. Jeg har sett dette ofte selv ogs\xe5, og min erfaring er at \xe5rsaken sjelden er svak strategi. Den ligger ofte i for smal analyse, for lite forankring og for svak gjennomf\xf8ringsevne.

AI kan v\xe6re et aktuelt eksempel. Mange virksomheter innf\xf8rer AI raskt, drevet av ambisi\xf8se gevinstestimater og et legitimt press om \xe5 henge med. Men AI skaper ikke verdi fordi teknologien rulles ut. Den skaper verdi n\xe5r den bygges inn i arbeidsflyt, roller, kvalitet, ansvar og ledelse.

En case jeg nylig merket meg var Elkem og Egde sin E2-modell. Den behandler AI som en driftsmodell som m\xe5 bygges gjennom plattform, konkrete use cases og organisering, der brukeradopsjon og arbeidsflyt er like viktig som teknologi. Resultatene var formidable!

S\xe5 neste gang tallene ser litt for pene ut, ville jeg stilt ett sp\xf8rsm\xe5l f\xf8rst:
Hva er det Excel ikke ser?

For ledelse handler ikke bare om \xe5 regne hjem en endring.
Det handler om \xe5 se hva endringen gj\xf8r med mennesker, kunder og drift.

#Transformasjon #Ledelse #Endringsledelse #Strategi #Beslutningsgrunnlag`},{id:"pappa-forst-trener-etterpa-2026-01",tittel:"Pappa først. Trener etterpå?",teaser:"Motivasjon, tillit og trygghet hjemme og på tennisbanen: når er det viktigere å være pappa enn trener – og hva skjer når egne ambisjoner skygger for barnas gleden?",bildeUrl:"/images/pappa-ikke-trener.png",dato:"2026-05-09",visningsDato:"09.05.26",kategori:"Kommersiell Ledelse",link:"https://www.linkedin.com/in/mariusottesen/recent-activity/all/",innhold:`Den siste uken har jeg skrevet om motivasjon, tillit og psykologisk trygghet. Temaer vi ofte snakker om i ledelse, men som kanskje blir enda viktigere hjemme.

For hva skjer n\xe5r du vil motivere, men skaper press? N\xe5r du vil hjelpe, men tar for mye plass? Og n\xe5r barnet ditt trenger trygghet mer enn korrigering?

For meg treffer dette ogs\xe5 tennisbanen. 🎾

Jeg har spilt tennis nesten hele livet, og jeg spiller fortsatt en god del.

Jeg er ogs\xe5 utdannet tennistrener, og kanskje aller finest: Jeg f\xe5r dele sporten med familien min. B\xe5de kona mi og barna v\xe5re p\xe5 snart 5 og 7 \xe5r spiller tennis. 👨‍👩‍👧‍👦

Det er noe veldig fint med det. Men ogs\xe5 noe krevende.

Tennis er en fantastisk skole i livet, og det \xe5 jage en dr\xf8m er noe vakkert. Men en forelders oppgave er f\xf8rst og fremst \xe5 tro p\xe5 barnet sitt, ikke \xe5 legge press p\xe5 dem eller leve reisen for dem.

For hvis jeg skal v\xe6re helt \xe6rlig, s\xe5 har jeg kjent p\xe5 stolthet n\xe5r barna f\xe5r det til. Men jeg har ogs\xe5 kjent p\xe5 frustrasjon, og litt irritasjon, n\xe5r det ikke g\xe5r fullt s\xe5 bra. Og akkurat det er kanskje ikke s\xe5 bra. 💣

Muligens er det nettopp derfor sp\xf8rsm\xe5let traff meg da jeg s\xe5 refleksjonen rundt at Novak Djokovic ikke \xf8nsker \xe5 v\xe6re trener for sine egne barn. Uten sammenligning for \xf8vrig, men tanken er interessant: Kanskje er det viktigere \xe5 v\xe6re pappa enn trener.

Samtidig er dette ikke svart-hvitt. Norges beste tennisspiller gjennom tidene, Casper Ruud, har faren sin som trener. Mange topput\xf8vere har hatt foreldre som b\xe5de st\xf8ttespillere og trenere p\xe5 veien mot verdenstoppen.

Det viser kanskje at sp\xf8rsm\xe5let ikke er om foreldre kan v\xe6re trenere, men 𝑛\xe5𝑟, ℎ𝑣𝑜𝑟𝑑𝑎𝑛 og ℎ𝑣𝑜𝑟 𝑙𝑒𝑛𝑔𝑒 det er riktig.

USTA beskriver foreldrerollen i tennis f\xf8rst og fremst som st\xf8tte, trygghet og ubetinget backing. Forskning peker ogs\xe5 p\xe5 at kombinasjonen forelder og trener kan gi b\xe5de kvalitetstid og motivasjon, men ogs\xe5 rolleforvirring, press og konflikt.

Og kanskje er noe av dette ogs\xe5 aldersbetinget.

N\xe5r barna er sm\xe5, kan det v\xe6re helt naturlig at mor eller far introduserer leken, bevegelsene og gleden ved sporten. Men etter hvert kan det hende at relasjonen er best tjent med at andre tar en tydeligere trenerrolle.

Bildet til dette LinkedIn innlegget er for \xf8vrig litt artig. Der har jeg satt mitt eget ansikt foran barnas. Det er ment for \xe5 si noe om hvor lett det er \xe5 projisere egne ambisjoner over p\xe5 dem. Eller hvor h\xf8ye forventninger man kan komme til \xe5 stille, fordi man selv alltid har stilt h\xf8ye krav til egen utvikling.

Det er i alle fall en nyttig p\xe5minnelse for meg.

Jeg elsker tennis.

Jeg elsker at familien min ogs\xe5 gj\xf8r det. 💯

Men kanskje er ikke min viktigste oppgave \xe5 utvikle slagene deres.

💙 Det er selvf\xf8lgelig \xe5 bevare gleden. ❤️

👉 Hva tenker du?

Er det en styrke eller en fallgruve at foreldre ogs\xe5 er trenere?

Og er dette noe som endrer seg med alder?

#tennis #foreldrerollen #idrettsglede #mestring #utvikling #ledelse`},{id:"psykologisk-trygghet-krav-2026-01",tittel:"Psykologisk trygghet er ikke fravær av krav",teaser:"Psykologisk trygghet er ikke fravær av krav. Det handler om å gjøre mennesker trygge nok til å bidra fullt ut – med tydelighet, respekt og ansvar begge veier.",bildeUrl:"/images/psykologisk-trygghet.png",dato:"2026-05-07",visningsDato:"07.05.26",kategori:"Kommersiell Ledelse",link:"https://www.linkedin.com/in/mariusottesen/recent-activity/all/",innhold:`Psykologisk trygghet blir av og til fremstilt som om det handler om \xe5 gj\xf8re arbeidslivet mykere, mindre direkte eller mindre krevende.

Det mener jeg er en misforst\xe5else.

I prestasjonsmilj\xf8er, og ikke minst i kommersielle milj\xf8er, skal det fortsatt v\xe6re:
• forventninger
• krav til innsats
• tydelige m\xe5l
• ansvar for leveranser

Det er ikke problemet.

Problemet oppst\xe5r n\xe5r h\xf8ye krav kombineres med lav respekt, uklar kommunikasjon eller en kultur der folk ikke t\xf8r \xe5 si fra, stille sp\xf8rsm\xe5l eller melde risiko tidlig nok.

Da f\xe5r du ikke mer prestasjon. Du f\xe5r mer stillhet, d\xe5rligere informasjon og svakere l\xe6ring.

For meg handler psykologisk trygghet derfor ikke om \xe5 senke kravene. Det handler om \xe5 gj\xf8re mennesker trygge nok til \xe5 bidra fullt ut.

Og det ansvaret g\xe5r begge veier. 💥

Lederen har et s\xe6rskilt ansvar for \xe5 sette retning, v\xe6re tydelig, f\xf8lge opp, korrigere med respekt og skape rammer som gj\xf8r det mulig \xe5 bidra.

Men medarbeidere har ogs\xe5 et ansvar:
• \xe5 m\xf8te forberedte
• \xe5 ta eierskap
• \xe5 bidra konstruktivt
• \xe5 si fra n\xe5r noe er uklart
• \xe5 st\xe5 i krav, tilbakemeldinger og forventninger

Trygghet betyr ikke rett til \xe5 v\xe6re passiv. Det betyr trygghet til \xe5 v\xe6re aktiv.

Det er en viktig forskjell.

De beste prestasjonsmilj\xf8ene er derfor ikke de mest behagelige. De er de mest trygge til \xe5 tenke h\xf8yt, utfordre, l\xe6re, justere og levere under press. 📈

Jeg tror ogs\xe5 dette er en av de mest undervurderte sammenhengene i ledelse:

H\xf8ye krav t\xe5les best der respekten er h\xf8y. 💯

N\xe5r mennesker opplever tydelighet, respekt og forutsigbarhet, t\xe5ler de ogs\xe5 mer press, mer korrigering og h\xf8yere forventninger. Ikke fordi kravene blir mindre, men fordi rammene blir bedre. ⚖️

Det er kanskje derfor psykologisk trygghet ikke f\xf8rst og fremst er et trivselstema.

Det er et tema om kvalitet, ansvar og gjennomf\xf8ring i streben etter \xe5 n\xe5 m\xe5l. 🎯

#ledelse #psykologisktrygghet #tillit #gjennomf\xf8ring #kommersiellledelse`},{id:"tillit-endring-gjennomforing-2025-01",tittel:"Folk motsetter seg sjelden endring",teaser:"Folk motsetter seg sjelden endring. De motsetter seg uklarhet, avstand og lav tillit.",bildeUrl:"/images/effektiv-endring.jfif",dato:"2026-05-05",visningsDato:"05.05.26",kategori:"Generell ledelse og strategi",link:"https://www.linkedin.com/in/mariusottesen/recent-activity/all/",innhold:`Folk motsetter seg sjelden endring. De motsetter seg uklarhet, avstand og lav tillit.

Det er en viktig forskjell for ledere som skal gjennomf\xf8re noe som faktisk betyr noe.

N\xe5r transformasjoner stopper opp, forklares det ofte med endringsmotstand. I praksis handler det like ofte om at mennesker ikke forst\xe5r retningen, ikke ser sin rolle i den, eller ikke stoler nok p\xe5 prosessen bak den.

Det er her tillit g\xe5r fra \xe5 v\xe6re et kulturord til \xe5 bli et operativt lederverkt\xf8y.

H\xf8y tillit reduserer friksjon. Den gj\xf8r at beslutninger ikke m\xe5 selges inn p\xe5 nytt i hvert m\xf8te. Den gj\xf8r at folk handler raskere, rapporterer feil tidligere og tar st\xf8rre eierskap til det som skal gjennomf\xf8res.

Lav tillit gj\xf8r det motsatte. Den \xf8ker de interne transaksjonskostnadene: mer kontroll, mer eskalering, mer tid brukt p\xe5 \xe5 reparere det som ikke ble sagt tydelig nok f\xf8rste gang.

I kommersielle milj\xf8er ser du dette tydelig n\xe5r ledelsen endrer prioriteringer, prismodeller eller salgsfokus. Hvis folk bare f\xe5r vite 𝘩𝘷𝘢 som er besluttet, men ikke 𝘩𝘷𝘰𝘳𝘧𝘰𝘳, \xf8ker friksjonen raskt. N\xe5r begrunnelsen er tydelig, \xf8ker b\xe5de tempo og gjennomf\xf8ringskraft.

Det samme gjelder AI. Mange AI-initiativer stopper ikke fordi folk er mot teknologien, men fordi de ikke stoler p\xe5 form\xe5let, datagrunnlaget eller hvordan l\xf8sningen skal brukes. N\xe5r nytte, kontroll og rolleforst\xe5else er tydelig, \xf8ker adopsjonen.

Det er heller ikke nok \xe5 kommunisere hva som er besluttet og hvorfor det er bestemt. Ledere m\xe5 ogs\xe5 kommunisere 𝘩𝘷𝘰𝘳𝘥𝘢𝘯 det faktisk skal gjennomf\xf8res i praksis. N\xe5r noe nytt legges p\xe5 noens skuldre uten tydelige rammer, prioriteringer og st\xf8tte, oppst\xe5r det fort usikkerhet og friksjon. N\xe5r mennesker forst\xe5r b\xe5de retning, begrunnelse og hva som forventes av dem, \xf8ker aksept, eierskap og handling. 💥

Forskning peker i samme retning. Ansatte i h\xf8y-tillitsorganisasjoner rapporterer lavere stress, h\xf8yere produktivitet og sterkere engasjement enn i organisasjoner med lav tillit.

🤝Tillit er derfor ikke en myk sak. Det er et operativsystem for gjennomf\xf8ring.

🎯 Sp\xf8rsm\xe5let er ikke bare om ledelsen tror p\xe5 planen. Sp\xf8rsm\xe5let er om organisasjonen har tillit nok til \xe5 f\xf8lge den.

#Ledelse #Transformasjon #Endringsledelse #Gjennomf\xf8ring #Tillit`},{id:"hva-motiverer-kunnskapsarbeid-2026-01",tittel:"Hva motiverer DEG og mennesker i kunnskapsarbeid?",teaser:"Bonus kan drive aktivitet, men kvalitet, læring og ansvar bygges oftere gjennom mening, mestring, autonomi og inspirasjon.",bildeUrl:"/images/bonus.png",dato:"2026-04-28",visningsDato:"28.04.26",kategori:"Kommersiell Ledelse",link:"https://www.linkedin.com/in/mariusottesen/recent-activity/all/",innhold:`𝐇𝐯𝐚 𝐦𝐨𝐭𝐢𝐯𝐞𝐫𝐞𝐫 𝐃𝐄𝐆 og 𝐦𝐞𝐧𝐧𝐞𝐬𝐤𝐞𝐫 𝐢 𝐤𝐮𝐧𝐧𝐬𝐤𝐚𝐩𝐬𝐚𝐫𝐛𝐞𝐢𝐝?

I forrige innlegg skrev jeg at gode intensjoner ikke er nok. Men mellom intensjon og handling ligger ogs\xe5 et annet sp\xf8rsm\xe5l:

Hva er det som f\xe5r mennesker til \xe5 ville bidra, utvikle seg og ta ansvar over tid?

Mange ledere svarer fortsatt raskt: bonus, insentiver og prestasjonsl\xf8nn.

Forskningen svarer mer nyansert. I masteroppgaven min for endel \xe5r siden skrev jeg om bel\xf8nning og arbeidsmotivasjon i kunnskapsbedrifter. Der fant jeg et tydelig spenningsfelt: Prestasjonsbasert bel\xf8nning kan \xf8ke kvantitet, men ikke n\xf8dvendigvis kvalitet. I noen tilfeller kan den ogs\xe5 fortrenge det indre drivet som kunnskapsarbeid er avhengig av.

I kunnskapsarbeid er ikke sp\xf8rsm\xe5let bare om folk jobber mer. Det er om de tenker bedre, l\xe6rer raskere, samarbeider klokere og tar ansvar ogs\xe5 n\xe5r ingen f\xf8lger med.

Derfor tror jeg mange ledere overvurderer effekten av bonus, og undervurderer betydningen av mening, mestring, autonomi, anerkjennelse og utvikling. Oppgaven min peker s\xe6rlig p\xe5 kompetansehevende tiltak som en sterk motivasjonsfaktor.

Et kommersielt eksempel:
To selgere kan ha samme bonusordning. Den ene jager kortsiktig volum. Den andre bruker tid p\xe5 \xe5 forst\xe5 kundens behov, bygger tillit, utvikler egen kompetanse og skaper h\xf8yere verdi over tid.

Begge kan levere aktivitet. Men ikke n\xf8dvendigvis samme kvalitet.
Det er derfor bel\xf8nning er mer enn et l\xf8nnssp\xf8rsm\xe5l. Det er et ledelsessp\xf8rsm\xe5l. For det du m\xe5ler, premierer og gir oppmerksomhet til, former ikke bare innsatsen. Det former kulturen.

Jeg tror ogs\xe5 det finnes et niv\xe5 𝑜𝑣𝑒𝑟 motivasjon som ledere snakker for lite om: inspirasjon.

Motivasjon kan f\xe5 folk til \xe5 stille. Inspirasjon f\xe5r dem til \xe5 ville mer enn minimum.

Motivasjon kan v\xe6re knyttet til m\xe5l. Inspirasjon er oftere knyttet til mening.
Kanskje er det derfor videreutdanning, faglig vekst og muligheten til \xe5 mestre nye omr\xe5der ofte virker sterkere enn ledere tror.

For meg ligger motivasjon og inspirasjon ofte i l\xe6ring, utvikling og det \xe5 forst\xe5 nye sammenhenger. Derfor opplever jeg ogs\xe5 videreutdanningen jeg n\xe5 tar ved BI i 'Generative AI for Business' som mer enn faglig p\xe5fyll, den gir ny energi, nye perspektiver og st\xf8rre handlingsrom.

Et nyttig perspektiv fra forskningen er ogs\xe5 de tre C-ene for arbeidsmotivasjon: Content, Context og Change. Alts\xe5 hva arbeidet inneholder, hvilken kontekst folk jobber i, og hvordan motivasjon endrer seg over tid.

Og det leder naturlig til neste tema:
Selv sterk motivasjon er ikke nok hvis mennesker ikke har tillit til retningen, beslutningene eller lederne som kommuniserer dem.

👉 Neste innlegg vil derfor handle om at tillit ikke er "mykt". Det er gjennomf\xf8ringskraft.`},{id:"alle-enige-ingen-gjor-noe-01",tittel:"Alle er enige. Ingen gjør noe.",teaser:"Når strategi ikke blir adferd: hvorfor enighet ikke er nok, og hva som faktisk skal til for å lykkes med transformasjon i praksis.",bildeUrl:"/images/intentions.png",dato:"2026-04-20",visningsDato:"20.04.26",kategori:"Kommersiell Ledelse",link:"https://www.linkedin.com/in/mariusottesen/recent-activity/all/",innhold:`<strong>Alle er enige. Ingen gj\xf8r noe.</strong>

De fleste virksomheter jeg m\xf8ter har ikke mangel p\xe5 ambisjoner, strategier eller vilje til endring. De har et annet problem hvilket er at det som besluttes i m\xf8terommet, skjer ikke i markedet.

Det er ikke sabotasje eller latskap. Det er et gap som forskning har dokumentert grundig, og som ledere systematisk undervurderer: Avstanden mellom intensjon og faktisk adferd. I min masteroppgave om nettopp dette gapet — forankret i Theory of Planned Behavior — er ett av de tydeligste funnene at h\xf8y grad av enighet og positiv innstilling ikke er tilstrekkelig for \xe5 predikere handling. Folk kan mene det de sier. De kan \xf8nske \xe5 endre seg. Og likevel ikke gj\xf8re det.

I kommersiell ledelse og salgsledelse er konsekvensene direkte m\xe5lbare. Prioriteringene er klare, KPI-ene er satt, og alle nikker i kickoff-m\xf8tet. Tre m\xe5neder senere er adferden i kundedialogen den samme som f\xf8r. Ikke fordi strategien var feil, men fordi ingen oversatte den til konkrete handlingsm\xf8nstre: hvem gj\xf8r hva, i hvilken situasjon, og hva er det f\xf8rste steget? Det er her transformasjoner strander. Ikke i planfasen, men i overgangen fra intensjon til rutine.

McKinseys forskning p\xe5 organisatorisk transformasjon viser at 70 % av endringsinitiativ ikke n\xe5r sine m\xe5l. Den hyppigst rapporterte \xe5rsaken er ikke feil strategi eller manglende ressurser, men manglende evne til \xe5 endre faktisk adferd p\xe5 tvers av organisasjonen. Det som skiller de 30 % som lykkes, er ikke bedre planer, men at ledere p\xe5 alle niv\xe5er aktivt modellerer den nye adferden selv, fremfor \xe5 delegere gjennomf\xf8ringen nedover.

Det som hjelper, er ikke mer kommunikasjon av visjonen. Det er implementeringsintensjoner — konkrete hvis-s\xe5-planer som kobler \xf8nsket adferd til spesifikke situasjoner og triggere. Forskning viser konsistent at denne typen konkretisering \xf8ker sannsynligheten for gjennomf\xf8ring betydelig, sammenlignet med generelle m\xe5lsetninger alene. I praksis betyr det at ledere m\xe5 g\xe5 lenger enn \xe5 kommunisere hva som skal skje, og inn i det mer krevende arbeidet med \xe5 designe adferden som skal b\xe6re strategien.

Den vanskeligste samtalen i mange ledergrupper er ikke om retning. Den er om hva vi slutter \xe5 gj\xf8re, hva vi begynner \xe5 gj\xf8re annerledes i morgen, og hvem som er ansvarlig for \xe5 f\xf8lge opp at det skjer. Enighet er komfortabelt. Konkret adferdsendring er ubehagelig, fordi det avsl\xf8rer hvem som leverer og hvem som ikke gj\xf8r det.

<em>The road to hell is paved with good intentions.</em> I ledelse er det ikke et ordtak — det er en driftsrisiko. Veien videre bygges ikke av intensjoner alene, men av handling, ansvar og oppf\xf8lging.

👉 Neste innlegg i serien om ledelse, strategisk gjennomf\xf8ring og transformasjon i praksis: Hva er det som faktisk motiverer mennesker i kunnskapsarbeid? Forskningen svarer ikke alltid det ledere forventer.`},{id:"to-parallelle-spor-ledelse-ai-01",tittel:"Jeg har skrevet mye om AI. Nå vil jeg også skrive mer om ledelse, strategi og transformasjon",teaser:"To tydelige spor videre: AI, teknologi og fremtidig arbeidsliv - samt ledelse, strategi og transformasjon i praksis.",bildeUrl:"/images/tegneserie.jfif",dato:"2026-04-16",visningsDato:"16.04.2026",kategori:"Kommersiell Ledelse",link:"https://www.linkedin.com/in/mariusottesen/recent-activity/all/",innhold:`Den siste tiden har jeg skrevet mest om AI, fremtidens teknologiledelse og hvordan nye verkt\xf8y vil p\xe5virke arbeidslivet. Det kommer jeg til \xe5 fortsette med.

Men jeg har ogs\xe5 kjent p\xe5 behovet for \xe5 l\xf8fte frem en st\xf8rre del av min egen kjerne. For jeg er f\xf8rst og fremst en kommersiell leder som har jobbet med salg, markedsf\xf8ring, personalledelse, strategi, endring og resultatansvar i kunnskapsintensive bransjer.

Jeg liker \xe5 jobbe strategisk, men ogs\xe5 operativt og tett p\xe5. Tett p\xe5 mennesker, kunder, drift og det som faktisk skjer n\xe5r planer skal omsettes til handling. Det er ofte der ledelse blir testet p\xe5 ordentlig.

Derfor kommer jeg fremover til \xe5 bygge tydeligere i to parallelle spor:
• AI, teknologi og fremtidig arbeidsliv
• Ledelse, strategisk ledelse, kommersiell ledelse og transformasjon i praksis

Gjennom to masterutdannelser, inkludert Executive Master of Management fra BI, har jeg fordypet meg i flere temaer jeg mener er minst like aktuelle i dag:
• Hva skaper egentlig motivasjon?
• Hvorfor blir gode intensjoner s\xe5 ofte st\xe5ende som nettopp det?
• Hvordan f\xe5r ledere mennesker til \xe5 bevege seg, ikke bare nikke?
• Hva bygger tillit, eierskap og psykologisk trygghet?
• Hvordan p\xe5virker kultur, autonomi og anerkjennelse faktisk prestasjon?
• Hvorfor ser noen transformasjoner riktige ut p\xe5 papiret, men blir krevende i virkeligheten?

Og her kommer koblingen til dagens bilde. 💡

Tegneserien traff meg fordi det viser en klassisk feil i mange virksomheter: Vi tar i bruk ny teknologi, men lar gamle vaner, kontrollbehov og symbolhandlinger styre hvordan den brukes. Resultatet er at vi ikke digitaliserer arbeidet. Vi digitaliserer bare friksjonen!

Vi snakker mye om \xabhuman in the loop\xbb i AI. Jeg mener det er like relevant i ledelse.

Mange tror motstand mot endring f\xf8rst og fremst handler om holdning. Ofte handler den like mye om uklarhet. Folk beveger seg sjelden fordi de har h\xf8rt budskapet \xe9n gang. De beveger seg n\xe5r de forst\xe5r hva som faktisk forventes annerledes av dem i praksis.

For mange organisasjoner mangler ikke strategi, planer eller ambisjoner. De mangler evnen til \xe5 omsette intensjon til faktisk atferd, eierskap og gjennomf\xf8ring.

Derfor kommer neste innlegg til \xe5 ta utgangspunkt i en av titlene fra mitt BI-arbeid:
👉 “The road to hell is paved with good intentions.”`},{id:"econa-innovasjon-ideer-verdi-01",tittel:"Slik bygger du en organisasjon hvor idéer blir til verdi",teaser:"Refleksjoner fra Econa om innovasjon: struktur, fasilitering og kultur som gjør at gode idéer faktisk blir til verdi.",bildeUrl:"/images/innovasjon.jpg",dato:"2026-03-28",visningsDato:"28.03.2026",kategori:"Kommersiell Ledelse",link:"https://www.linkedin.com/in/mariusottesen/recent-activity/all/",innhold:`𝗦𝗹𝗶𝗸 𝗯𝘆𝗴𝗴𝗲𝗿 𝗱𝘂 𝗲𝗻 𝗼𝗿𝗴𝗮𝗻𝗶𝘀𝗮𝘀𝗷𝗼𝗻 𝗵𝘃𝗼𝗿 𝗶𝗱𝗲𝗲𝗿 𝗯𝗹𝗶𝗿 𝘁𝗶𝗹 𝘃𝗲𝗿𝗱𝗶

P\xe5 torsdag deltok jeg p\xe5 Econa-arrangementet “𝘐𝘯𝘯𝘰𝘷𝘢𝘴𝘫𝘰𝘯 𝘰𝘨 𝘶𝘵𝘷𝘪𝘬𝘭𝘪𝘯𝘨 – 𝘣𝘭𝘪 𝘮𝘦𝘳 𝘮𝘶𝘭𝘪𝘨𝘩𝘦𝘵𝘴𝘰𝘳𝘪𝘦𝘯𝘵𝘦𝘳𝘵”, med foredrag og workshops ledet av Nina Prestegard.

Noe av det mest interessante, var ikke hvor mange id\xe9er som finnes i en organisasjon, men hvordan de blir h\xe5ndtert. Mange virksomheter har ansatte som kommer med gode innspill, men id\xe9ene dukker ofte opp i gangen, mellom m\xf8ter eller i ustrukturerte settinger. De blir gjerne m\xf8tt med et “bra innspill”, men uten tydelig videre oppf\xf8lging. Over tid svekker det b\xe5de initiativ og engasjement.

Kurset var tydelig p\xe5 at innovasjon ikke skjer tilfeldig. Det m\xe5 designes, b\xe5de gjennom struktur og kultur.

Tre ting peker seg spesielt ut:
• Struktur sl\xe5r tilfeldighet. Id\xe9arbeid m\xe5 ha tydelige rammer, problemstillinger og eierskap. Hvis ikke, blir det tilfeldig hva som tas videre.

• Grupper m\xe5 fasiliteres. Uten struktur f\xe5r man gruppetenkning, dominans og tidlig kritikk. La folk tenke individuelt f\xf8rst, og bygg videre sammen.

• Skille mellom utforskning og beslutning. Mange g\xe5r for raskt til vurdering. Da stopper id\xe9ene f\xf8r de har f\xe5tt utvikle seg.

Et annet viktig poeng var at kreativitet ikke er en egenskap noen har, men en ferdighet som kan trenes. Vi er ofte trent til \xe5 finne riktige svar, ikke til \xe5 utforske flere muligheter. Derfor m\xe5 ledere bevisst legge til rette for divergent tenkning, hvor m\xe5let er \xe5 \xe5pne opp f\xf8r man snevrer inn. Nysgjerrighet og sp\xf8rsm\xe5l som “hva hvis?” og “kan du utdype?” er en forutsetning for bedre beslutninger.

Samtidig handler dette ikke bare om ledelse, men ogs\xe5 om eierskap. Det kan ikke forventes at lederen alene skal drive frem alle id\xe9er som kommer inn. Ekte innovasjon skjer n\xe5r ansatte selv tar ansvar for \xe5 videreutvikle forslag, teste dem og st\xe5 i usikkerheten. Autonomi bygger eierskap, og eierskap skaper fremdrift.

Erfaringsmessig er det smart \xe5 etablere faste innovasjonsm\xf8ter med tydelig struktur. Der presenteres id\xe9er kort, \xe9n person eier videre utvikling, og det avklares neste steg f\xf8r m\xf8tet avsluttes. Det gir b\xe5de retning og ansvar, samtidig som det signaliserer at id\xe9er tas p\xe5 alvor.

For ledere betyr dette at man m\xe5 g\xe5 fra \xe5 ettersp\xf8rre id\xe9er til \xe5 bygge systemer som faktisk h\xe5ndterer dem. Det handler om \xe5 skape rom for utforskning, men ogs\xe5 tydelig ansvar for gjennomf\xf8ring.

Koblingen til kommersiell ledelse er direkte. Skal man utvikle nye tjenester, forbedre kundeopplevelser eller ta i bruk AI, holder det ikke med gode intensjoner. Man m\xe5 ha en organisasjon som evner \xe5 utvikle, prioritere og realisere id\xe9er i praksis.

Min viktigste takeaway er derfor enkel: Innovasjon handler ikke f\xf8rst og fremst om flere id\xe9er, men om \xe5 bygge en struktur og en kultur hvor id\xe9er blir til verdi.`},{id:"nettside-lansering-2026-01",tittel:"Fra koding i 1999 til AI-revolusjon i 2026 – ny hjemmeside og nytt consultingselskap!",teaser:"Ny hjemmeside bygget med AI-verktøy på to dager – og lansering av Marius Ottesen Consulting som brobygger mellom strategi og AI-implementering.",bildeUrl:"/images/nettside-bilde.gif",dato:"2026-02-16",visningsDato:"16.02.2026",kategori:"AI / KI",link:"https://www.linkedin.com/in/mariusottesen/recent-activity/all/",innhold:`Sist jeg bygde en nettside fra bunnen, var som student i USA i 1999. Da skrev jeg hver linje HTML manuelt. De siste 48 timene har v\xe6rt en \xf8ye\xe5pner: Jeg har nettopp lansert <strong>min nye hjemmeside</strong> – bygget p\xe5 bare to dager!

Dette er ikke takket v\xe6re mine kodeferdigheter, men kraften i strategisk bruk av AI. Ved \xe5 kombinere <strong>Cursor</strong>, <strong>Claude 3.5 Sonnet</strong>, <strong>Opus 4.6</strong> og <strong>Gemini 1.5 Pro</strong>, har jeg fungert som arkitekt mens AI-systemene har st\xe5tt for kodingen.

Prosessen har ogs\xe5 inkludert \xe5 sette opp versjonskontroll med 𝗚𝗶𝘁 og 𝗚𝗶𝘁𝗛𝘂𝗯, deploye via 𝗩𝗲𝗿𝗰𝗲𝗹 og koble til 𝗲𝗴𝗲𝘁 𝗱𝗼𝗺𝗲𝗻𝗲 – slik at jeg b\xe5de kan iterere trygt og ha full kontroll p\xe5 hvordan nettsiden publiseres og oppdateres.

Men prosjektet handler om mer enn teknologi. Det handler om <strong>Brobygging</strong>.

Mange ledere opplever at gapet mellom AI-teori og kommersiell verdi er for stort. Etter en periode med fokus p\xe5 teori og rammeverk, har jeg n\xe5 etablert <strong>Marius Ottesen Consulting</strong>. Min misjon er \xe5 v\xe6re brobyggeren mellom strategi og praktisk AI-implementering.

P\xe5 hjemmesiden kan du dykke ned i min profesjonelle verkt\xf8ykasse:
• <strong>Profil, Erfaring, referanser & Resultater</strong>: Bakgrunn og bevis p\xe5 verdiskapning
• <strong>Faginnlegg</strong>: Mine LinkedIn innlegg som gir innsikt innen "Strategisk Ledelse & Transformasjon" og "AI & Fremtidens Teknologiledelse"
• <strong>Consulting</strong>: For deg som trenger bistand til \xe5 iverksette AI
• <strong>CV, S\xf8knad & Kontakt</strong>: For uformelle eller formelle foresp\xf8rsler

Jeg hjelper virksomheter med \xe5 flytte AI fra rammeverk til kjerneoppgaver:
• <strong>AI-strategi</strong>: Kobling til forretningsm\xe5l og ROI
• <strong>Prosessoptimalisering</strong>: Fjerning av friksjon i driften
• <strong>Digital Transformasjon</strong>: Rigger organisasjonen for en ny hverdag
• <strong>Workshops</strong>: Fra teori til praktisk mestring

<strong>Jeg g\xe5r n\xe5 fra kun teori til faktisk bygging</strong>.

Sammen med tekniske partnere g\xe5r jeg rett inn i virksomheters kjerneprosesser for \xe5 implementere konkrete AI-prosjekter – enten det er automatisering av arbeidsflyt eller intelligente verkt\xf8y for beslutningsst\xf8tte. AI skal ikke v\xe6re et sideprosjekt, men motoren i deres vekst.

<strong>Ta en titt</strong> - og del gjerne! Under fanen "Consulting" finner du et kontaktskjema. Har du utfordringer vi skal se p\xe5 sammen? Beskriv dem der, s\xe5 tar vi dialogen videre.

Hva fungerer og hva mangler? Jeg setter stor pris p\xe5 alle tilbakemeldinger!

<strong>Link til hjemmesiden:</strong> www.mariusottesen.no`},{id:"attitude-2016-01",tittel:"Did you know?!? It's all about ATTITUDE!",teaser:"Kort innlegg om holdning og attitude.",bildeUrl:"/images/attitude.jfif",dato:"2016-10-08",visningsDato:"08.10.2016",kategori:"Kommersiell Ledelse",link:"https://www.linkedin.com/in/mariusottesen/recent-activity/all/",innhold:"Did you know?!? It's all about ATTITUDE!"},{id:"visindi-rekruttering-2024-01",tittel:"Hyggelig gest av Visindi som kjørte en god og profesjonell rekrutteringsprosess da jeg ble headhuntet til Franzefoss Gjenvinning AS!",teaser:"Takker Visindi for en god og profesjonell rekrutteringsprosess ved headhunting til Franzefoss Gjenvinning.",bildeUrl:"/images/visindi.jfif",dato:"2024-01-03",visningsDato:"03.01.2024",kategori:"Kommersiell Ledelse",link:"https://www.linkedin.com/in/mariusottesen/recent-activity/all/",innhold:`Hyggelig gest av Visindi som kj\xf8rte en god og profesjonell rekrutteringsprosess da jeg ble headhuntet til Franzefoss Gjenvinning AS! :-)`},{id:"obf-klar-2025-01",tittel:"Klar for to dager med inspirasjon på Oslo Business Forum 2025 – The Big Shift!",teaser:"Foran Oslo Business Forum 2025 – The Big Shift: forventninger til to dager med læring, refleksjon og nettverk.",bildeUrl:"/images/obf-deltakelse.jfif",dato:"2025-09-23",visningsDato:"23.09.2025",kategori:"Kommersiell Ledelse",link:"https://www.linkedin.com/in/mariusottesen/recent-activity/all/",innhold:`🚀 Klar for to dager med inspirasjon p\xe5 Oslo Business Forum 2025 – The Big Shift!

Jeg ser frem til et tettpakket program med sterke foredragsholdere, nye perspektiver og mye faglig p\xe5fyll. Like viktig er m\xf8tene med b\xe5de gamle og nye bekjentskaper – alltid spennende \xe5 dele erfaringer og bygge relasjoner p\xe5 tvers av bransjer.

Dette blir to dager med l\xe6ring, refleksjon og nettverk som jeg gleder meg stort til! 💪 🙋‍♂️

https://www.obforum.com/`},{id:"obf-2025-big-shift-01",tittel:"Oslo Business Forum 2025 – The Big Shift",teaser:"Takeaways fra Oslo Business Forum 2025: strategi, AI, ledelse og menneskelig kraft. OBF 10-årsjubileum.",bildeUrl:"/images/obf.jfif",dato:"2025-09-26",visningsDato:"26.09.2025",kategori:"Kommersiell Ledelse",link:"https://www.linkedin.com/in/mariusottesen/recent-activity/all/",innhold:`✨ Oslo Business Forum 2025 – The Big Shift ✨

To inspirerende og l\xe6rerike dager er over – fylt med sterke foredrag, viktige perspektiver og energi rundt strategi, ledelse, teknologi og fremtidens muligheter. I tillegg markerte \xe5rets konferanse 10-\xe5rsjubileet til Oslo Business Forum – en milep\xe6l som viser hvilken betydning arenaen har f\xe5tt for ledere.

🔑 <strong>Mine viktigste takeaways:</strong>

🎯 <strong>Strategi og vekst:</strong>
B. Sternfels minnet oss om at fremtidens vinnere m\xe5 sikte h\xf8yt, bevege seg raskt og bygge organisasjoner som kontinuerlig tilpasser seg endring. Han fremhevet viktigheten av l\xe6ring, humor, varme og motstandskraft – og understreket vekst og AI som topplederprioriteter. M. Buckingham leverte et sterkt budskap: "Love is the most powerful force in business" – ekte verdiskaping handler om mening og tilh\xf8righet.

🤖 <strong>AI og teknologi:</strong>
P. Lakhani viste hvordan AI kan brukes strategisk for \xe5 skape konkurransefortrinn, mens T. Mauri introduserte "Agility is the new stability" og l\xf8ftet viktigheten av etisk refleksjon. P. Malmgren oppfordret til mer kreativitet: "The big things that matter need better imagination from us."

👩‍💻 <strong>Generasjoner og kultur:</strong>
Dr. E. Filby viste hvordan yngre generasjoner stadig driver utviklingen fremover, mens Gen. X er mest positiv til AI og tech. Dessuten viste hun til hvorfor fysisk samspill og felles arenaer fortsatt er avgj\xf8rende for l\xe6ring, kultur og innovasjon – selv i en hybrid hverdag.

❤️ <strong>Ledelse og menneskelig kraft:</strong>
S. Sinek minnet oss p\xe5 "What you search for, you will find" – ledelse starter med mening og optimisme.
D. Kander leverte noen av konferansens mest konkrete og kraftfulle budskap: "Never goal alone" – "Always ask: Who can help me do this?" – og "Success can be your biggest blind spot." Hun utfordret oss til \xe5 kutte lavverdige oppgaver og fokusere p\xe5 verdi vs. innsats.

🏆 <strong>Team og tillit:</strong>
Aksel L. Svindal viste hvordan vinnere bygges gjennom \xe5penhet og samarbeid: "Trust your team, share all good data – and don't forget the 7 o'clock dinner. Celebrate together."

🧭 <strong>Endring som drivkraft:</strong>
A. Rinne introduserte Flux mindset og viste hvordan usikkerhet kan brukes strategisk, mens G. Petriglieri minnet oss p\xe5 at emosjoner er en konkurransefordel i ledelse.

💡 <strong>Fellesnevneren fra scenen var tydelig:</strong> Fremtidens ledere m\xe5 kombinere strategi, teknologi og menneskelig innsikt – og evne \xe5 skape kultur, tempo, nysgjerrighet og tillit i en tid preget av store skift.

<strong>Neste kapittel – The Human Edge (2026):</strong>
OBF 2026 bygger videre p\xe5 \xe5rets l\xe6ring da det handler om \xe5 l\xe5se opp de styrkene ingen maskin kan erstatte. I en tid med disrupsjon m\xe5 ledere lene seg p\xe5 kreativitet, mot, tillit og utholdenhet, og bygge kulturer der mennesker og ideer kan blomstre.

En stor takk til Christoffer Omberg og hele det dyktige og hyggelige(!) OBF-teamet for et imponerende, profesjonelt og inspirerende arrangement – b\xe5de faglig og menneskelig sterkt fra start til slutt! 🙏`},{id:"kjeft-psykologisk-trygghet-01",tittel:"Er det greit å gi 'kjeft' som leder – og hva betyr det for psykologisk trygghet?",teaser:"Psykologisk trygghet, tydelighet og anonym kritikk. Refleksjoner fra foredrag med Henning Bang (Econa).",bildeUrl:"/images/kjeft.jfif",dato:"2025-12-04",visningsDato:"04.12.2025",kategori:"Kommersiell Ledelse",link:"https://www.linkedin.com/in/mariusottesen/recent-activity/all/",innhold:`P\xe5 mandag deltok jeg p\xe5 et innsiktsfullt foredrag i regi av Econa med professor <strong>Henning Bang</strong>. Temaet var <strong>psykologisk trygghet</strong>, og hva som faktisk bygger den – eller undergraver den.
Foredraget traff, spesielt fordi det utfordrer b\xe5de ledere og medarbeidere.

<strong>Det punktet som virkelig skapte reaksjoner og diskusjon i salen, var Bangs p\xe5stand om at:</strong>
\xabAv og til m\xe5 man kunne si tydelig ifra. 'Kjeft' t\xe5ler voksne mennesker – s\xe5 lenge det ikke er personfokus, ikke ydmykende og spr\xe5ket er ordentlig. N\xe5r grenser brytes, m\xe5 det v\xe6re lov \xe5 reagere tydelig – ogs\xe5 om det skaper et rettmessig ubehag.\xbb

For ordens skyld:
<strong>Jeg tilstreber ikke 'kjeft' som leder.</strong>
Men jeg deler tydelighetsprinsippet: ledelse krever at man faktisk sier fra n\xe5r noe ikke fungerer.

Et annet viktig poeng som ble diskutert, var <strong>anonym kritikk</strong>.
Anonyme innspill kan fange opp signaler – men de er sjelden utviklende. N\xe5r avsender er ukjent:
🔹 dialogen stopper f\xf8r den starter
🔹 misforst\xe5elser sprer seg i teamet
🔹 feil personer kan bli assosiert med kritikken
🔹 kulturen beveger seg fra modighet til forsiktighet

Kort sagt: <strong>anonymiteten kan v\xe6re et sikkerhetsnett, men ikke et verkt\xf8y for utvikling.</strong>

<strong>Mine viktigste takeaways fra foredraget:</strong>
🔹 Psykologisk trygghet betyr ikke frav\xe6r av krav.
🔹 L\xe6ring krever at vi t\xe5ler ubehag – ogs\xe5 n\xe5r det gjelder oss selv.
🔹 Trygghet skapes ikke bare av lederen – medarbeidere har ogs\xe5 ansvar.
🔹 Inside–out refleksjon er modenhet: \xabHva kunne jeg gjort annerledes?\xbb
🔹 For lite trygghet → stillhet, forsvar og anonym kritikk.
🔹 For mye trygghet → kameratklubb, lav ansvarlighet og lite utvikling.
🔹 Tydelige forventninger og korrigering er ikke \xabkjeft\xbb n\xe5r det gis respektfullt.
🔹 Forklar - Inviter - Responder: Handlinger som kan \xf8ke psykologisk trygghet.

Henning refererte ogs\xe5 til <strong>Amy C. Edmondson</strong>, Harvard-professor og globalt ledende p\xe5 psykologisk trygghet. Hennes forskning viser at team med h\xf8y trygghet:
✔ presterer bedre
✔ l\xe6rer raskere
✔ deler feil tidligere
Men hun er like tydelig som Bang:
<strong>Trygghet uten ansvar gir komfort – ikke kvalitet.</strong>

💬 <strong>Hva tenker dere?</strong>
1. N\xe5r oppleves tydelige tilbakemeldinger som hjelp – og n\xe5r som kritikk?
2. Hvordan balanserer vi psykologisk trygghet med krav og ansvar?
3. Hva kjennetegner medarbeidere som tar eierskap – ogs\xe5 n\xe5r noe butter imot?

Jeg l\xe6rer mest n\xe5r andre tenker h\xf8yt sammen med meg.`},{id:"kapasitet-maraton-01",tittel:"Kapasitet bygges over tid – og kan hentes fram når det gjelder, på flere arenaer",teaser:"Halvmaraton i Kairo og refleksjon om kapasitet: prestasjon bygges over tid og kan hentes fram på flere arenaer.",bildeUrl:"/images/maraton.jfif",dato:"2025-12-16",visningsDato:"16.12.2025",kategori:"Kommersiell Ledelse",link:"https://www.linkedin.com/in/mariusottesen/recent-activity/all/",innhold:`P\xe5 l\xf8rdag deltok jeg i Marakez Pyramids Half Marathon i Kairo, Egypt.
10.000 l\xf8pere fra 122 land p\xe5 startstreken – det ble 18. plass i min klasse.

Til tross for \xf8kt og m\xe5lrettet spesifikk l\xf8pstrening i forkant, var det ikke nok til \xe5 hente ut fullt potensial denne gangen. Samtidig er jeg overbevist om at prestasjonen og kapasiteten i stor grad henger sammen med det jeg har investert i gjennom mange \xe5r tidligere i livet.

Jeg er oppriktig forn\xf8yd med resultatet. Ikke bare som et tall, men som en personlig seier og en bekreftelse p\xe5 nettopp dette.

Prestasjon handler sjelden om kortsiktig innsats, men om grunntrening – fysisk og mentalt – bygget over tid. Erfaring og kapasitet fra langrenn, l\xf8ping, tennis, styrke og annen trening sitter fortsatt igjen. I dag trener jeg variert og har s\xe6rlig stor glede av tennis, b\xe5de trening og konkurranser. Det gir b\xe5de styrke, robusthet og den indre driven – motivasjonen som gj\xf8r at du trener n\xe5r ingen ser p\xe5.

Det samme gjelder i arbeidslivet.
Utdanning, faglig utvikling og erfaring fra tidligere roller og selskaper gir kapasitet du kan hente fram n\xe5r det gjelder.

P\xe5 et nylig fagseminar ble aldersdiskriminering i arbeidslivet diskutert. En representant fra NAV p\xe5pekte at mange opplever dette allerede fra de er 50 \xe5r. Jeg er ikke der enn\xe5, men refleksjonen er viktig: l\xf8sningen er \xe5 fortsette \xe5 investere i kompetanse, utvikling og l\xe6ring.

Dette l\xf8pet var et tydelig "Big Hairy Goal" – noe \xe5 trene mot og glede seg til – et m\xe5l som ga retning, energi og forsterket motivasjonen. Det sosiale fellesskapet gjorde opplevelsen enda sterkere. \xc5 v\xe6re del av et milj\xf8 betyr mye, faglig og sosialt. Vi presterte som team, st\xf8ttet hverandre f\xf8r, helt opp mot, og etter l\xf8pet. Det ble mye refleksjon, treningsteori og utvikling – og ikke minst: det var g\xf8y.

Gjennom roller som tenniscoach og leder har jeg erfart hvor givende det er \xe5 bidra til andres utvikling – og \xe5 lykkes sammen som gruppe. Medspillere, publikum, st\xf8ttespillere, kollegaer, familie og venner som heier, l\xf8fter prestasjonen ytterligere.

N\xe5 g\xe5r vi inn i vinteren – med mer fokus p\xe5 annen type trening, nye \xf8kter p\xe5 sn\xf8 og arenaer som bygger kapasitet videre. Hva med investeringer p\xe5 kompetansesiden? Jeg velger bevisst det som bygger verdi – for eksempel \xe5 leke mer med AI, som dagens bilde illustrerer. Laget p\xe5 flyplassen p\xe5 vei hjem til Norge.

Fun fact:
Kheopspyramiden ble bygget for over 5.000 \xe5r siden – ca. 2,5 millioner steinblokker, 2,5–5 tonn hver. Stein p\xe5 stein. Av mennesker. Vi vet fortsatt ikke helt hvordan.
En p\xe5minnelse om hva langsiktig innsats, hardt arbeid, utholdenhet og styring kan skape – enten det handler om byggverk, prestasjon, kompetanse eller mennesker.`},{id:"videre-franzefoss-2026-01",tittel:"Etter 2 år som Nasjonal Salgssjef i Franzefoss Gjenvinning har jeg valgt å gå videre",teaser:"Avslutning som Nasjonal Salgssjef i Franzefoss. Videre til interim, consulting og investering i AI-kompetanse.",bildeUrl:"/images/videre.jfif",dato:"2026-01-21",visningsDato:"21.01.2026",kategori:"Kommersiell Ledelse",link:"https://www.linkedin.com/in/mariusottesen/recent-activity/all/",innhold:`Etter 2 \xe5r som Nasjonal Salgssjef i Franzefoss Gjenvinning har jeg valgt \xe5 g\xe5 videre

Bakgrunnen er ulike strategiske syn p\xe5 veien videre – og et bevisst valg om \xe5 investere tid i videre utvikling og kompetanse f\xf8r endringene tvinger seg frem, blant annet innen AI.

Tiden i Franzefoss har gitt meg ytterligere solid erfaring innen kommersiell ledelse, salgsutvikling og gjennomf\xf8ring i en kompleks og samfunnskritisk bransje. Jeg har samtidig f\xe5tt en dypere forst\xe5else for sirkul\xe6r \xf8konomi og gjenvinning, samt hva som faktisk kreves for \xe5 lykkes med endring i praksis.

Jeg vil rette en takk til kollegaer for en spennende og intensiv periode, hvor b\xe5de selskapet og menneskene utviklet seg betydelig.

<strong>I dag for jeg brukt erfaringene aktivt</strong>, bla. som interim leder og r\xe5dgiver innen odontologi hos Sk\xf8yen\xe5sen Tannklinikk. Denne er i sterk vekst, med flere tannleger, mer spesialiserte behandlinger og tydelig fokus p\xe5 b\xe5de eksisterende pasienter og nye kundegrupper. Samtidig er klinikken pusset opp og modernisert for \xe5 m\xf8te kravene fremtidsrettede klinikker m\xe5 levere p\xe5 – faglig, teknologisk og i pasientopplevelse.

AI er ogs\xe5 p\xe5 vei inn i odontologi – ikke bare i unders\xf8kelser og behandling, men innen effektivisering, beslutningsst\xf8tte og utvikling. Her jobber jeg n\xe5 konkret med hvordan teknologi kan bidra til bedre kvalitet, flyt og resultater.

Dessuten fortsetter jeg \xe5 utvikle MedDrop. Dette er en med-tech start-up og en IoT-basert medisindispenser - med fokus p\xe5 pasientsikkerhet, compliance og kliniske behov. Prosjektet omhandler innovasjon i skj\xe6ringspunktet mellom teknologi, helse, regulatoriske rammer og klinisk praksis.

<strong>Parallelt investerer jeg tungt i egen utvikling:</strong>
• Masterkurs i <em>Generativ AI for Business</em> (BI)
• Praktisk anvendelse og testing utover pensum
• Aktiv l\xe6ring og deling i nettverket (AI-innleggene jeg publiserer er en del av dette)
• Kurs, nettverk og dialog med spennende fagmilj\xf8er – for \xe5 l\xe6re og bidra der det er relevant

Perioden jeg er inne i n\xe5 er ikke en pause, men en aktiv investering i utvikling, gjennomf\xf8ringsevne og relevans for fremtidsrettede organisasjoner. Jeg \xf8nsker fortsatt \xe5 st\xe5 sterkt som en kommersiell leder, der AI er en av mine sentrale lederkompetanser.

<strong>Nysgjerrig p\xe5 dialog – ikke n\xf8dvendigvis ny jobb i morgen!</strong>

Ta gjerne kontakt for en uformell samtale.`},{id:"brains-not-included-01",tittel:"Brains not included – og nettopp derfor blir autentisiteten lederens viktigste fortrinn",teaser:"I KI-tiden blir autentisitet lederens fortrinn: skriv noe som står for noe. Refleksjoner fra BI-frokost om CTRL+ALT.",bildeUrl:"/images/brains.jfif",dato:"2026-01-15",visningsDato:"15.01.2026",kategori:"Kommersiell Ledelse",link:"https://www.linkedin.com/in/mariusottesen/recent-activity/all/",innhold:`I g\xe5r var jeg p\xe5 frokostm\xf8te p\xe5 BI Executive. Temaet var \xabSlik blir autentisiteten lederens strategiske fortrinn i 2026\xbb, med en tydelig kobling til bruk av KI.

Utgangspunktet var boka <em>CTRL+ALT. Strategisk, kreativt og praktisk – kunsten \xe5 skrive for virksomheter</em> av bl.a. \xd8ystein Bonvik, som var foredragsholder i dialog med Hanne Kj\xe6rnes. Samtalen omhandlet ledelse, spr\xe5k, merkevare og teknologi.

Hovedpoenget var tydelig:
N\xe5r KI gj\xf8r det ekstremt enkelt \xe5 produsere tekst, blir mening, tydelighet og menneskelig avsender viktigere enn noen gang. N\xe5r alle kan skrive "greit", blir det avgj\xf8rende \xe5 skrive noe som faktisk st\xe5r for noe.

KI b\xf8r derfor ikke brukes til \xe5 skrive for oss, men til \xe5 hjelpe oss. Som strukturpartner, id\xe9utfordrer og redakt\xf8r – ikke som stemme. Brukt riktig fungerer KI sv\xe6rt godt, ogs\xe5 til krevende oppgaver. Brukt feil blir kommunikasjonen korrekt, men tom.

Et sentralt begrep i diskusjonen var bevisstl\xf8shet. KI gj\xf8r det lett \xe5 bli n\xf8ytral, forsiktig og utydelig. Jakten p\xe5 \xe5 ikke st\xf8te noen kan fort ende i tekster som i praksis ikke sier noe. Autentisitet handler derfor ikke om \xabv\xe6r deg selv\xbb, men om samsvar mellom hvem vi er, hva vi gj\xf8r og hvordan vi uttrykker oss.

Dette henger tett sammen med tone of voice. Mange virksomheter er bevisste p\xe5 logo og farger, men langt mindre p\xe5 hvordan de faktisk h\xf8res ut. Spr\xe5k er kanskje den viktigste b\xe6reren av merkevarens personlighet – internt og eksternt.

Et viktig lederpoeng var risikoen n\xe5r ledere g\xe5r forbi fagmilj\xf8er og ansatte ved \xe5 bruke KI for \xe5 f\xe5 raske svar. Det kan svekke b\xe5de kvalitet og tillit. KI mangler d\xf8mmekraft og empati – og forst\xe5r verken kontekst, nyanser eller ordspill slik mennesker gj\xf8r. Et godt ordspill kan v\xe6re \xe5penbart sterkt for oss, men fullstendig uforst\xe5elig for en maskin.

Vi er fortsatt p\xe5 lekerommet. Akkurat som da PPT og ClipArt kom, tester vi, feiler og l\xe6rer. KI er fremtiden, men moden bruk krever bevissthet. KI tar ikke jobben din – men det gj\xf8r personen som kan bruke KI klokt.

Det ble ogs\xe5 en interessant refleksjon rundt akademia og plagiat. Plagiat er det verste man kan gj\xf8re, samtidig er metodene for \xe5 avsl\xf8re KI-generert tekst langt fra treffsikre. KI-detektorer har blant annet feilet p\xe5 tekster skrevet for 20 \xe5r siden. Det sier noe viktig om at teknologi ikke er utfordringen, men mer om ansvar og d\xf8mmekraft.

Jeg spurte om <strong>tankestrek</strong> – og fikk klar beskjed om \xe5 fortsette \xe5 bruke den. Den er et bevisst spr\xe5klig grep, ikke et KI-stempel.

"<strong>Brains not included</strong>" – litt som "batteries not included". KI kan hjelpe oss langt p\xe5 vei, men det er aldri et fritak for \xe5 tenke selv.`},{id:"frastotende-salg-2026-01",tittel:"Med referanse til artikkelen fra ASD Group setter Espen Hellman ord på noe svært viktig for salgsfaget",teaser:"Espen Hellman og ASD: hva skiller de beste selgerne – lytt, vær ærlig, ta ansvar for fremdrift.",bildeUrl:"/images/frastøtende.jfif",dato:"2025-12-18",visningsDato:"18.12.2025",kategori:"Kommersiell Ledelse",link:"https://www.linkedin.com/in/mariusottesen/recent-activity/all/",innhold:`Med referanse til denne artikkelen (<a href="https://www.linkedin.com/feed/update/urn:li:activity:7407361511905452033/" target="_blank" rel="noopener noreferrer">https://www.linkedin.com/feed/update/urn:li:activity:7407361511905452033/</a> ) fra ASD Group setter Espen Hellman ord p\xe5 noe sv\xe6rt viktig for salgsfaget. Tilliten til selgere er lav, og f\xe5 kunder opplever reell verdi i f\xf8rste m\xf8te. Samtidig viser artikkelen at det er enkle prinsipper som skiller de beste: Lytt, v\xe6r \xe6rlig – og ikke press.

Jeg er helt enig i dette, og samtidig verdt \xe5 nyansere hva \xabikke presse\xbb faktisk betyr. Godt salg handler ogs\xe5 om \xe5 ta ansvar for fremdrift. Uten tydelige neste steg risikerer selv gode dialoger \xe5 bli utsatt, glemt eller aldri realisert. Hver salgsprosess lever sitt eget liv, men profesjonelle selgere f\xf8lger opp med riktig timing og tydelighet – p\xe5 en m\xe5te som oppleves naturlig for kunden.

Artikkelen deler ogs\xe5 en interessant fun fact:
𝘋𝘦 𝘣𝘦𝘴𝘵𝘦 𝘴𝘦𝘭𝘨𝘦𝘳𝘯𝘦 𝘴𝘵𝘪𝘭𝘭𝘦𝘳 𝘪 𝘴𝘯𝘪𝘵𝘵 32 𝘴𝘱\xf8𝘳𝘴𝘮\xe5𝘭 𝘪 𝘢𝘯𝘢𝘭𝘺𝘴𝘦𝘧𝘢𝘴𝘦𝘯 – 39 % 𝘮𝘦𝘳 𝘦𝘯𝘯 𝘨𝘫𝘦𝘯𝘯𝘰𝘮𝘴𝘯𝘪𝘵𝘵𝘦𝘵.
For meg handler ikke dette om antall sp\xf8rsm\xe5l, men hvilke sp\xf8rsm\xe5l som stilles. Det krever gjennomtenkte situasjons- og refleksjonssp\xf8rsm\xe5l – og evnen til \xe5 lytte med empati. I fagspr\xe5ket kaller vi dette aktiv lytting. N\xe5r selgeren forst\xe5r b\xe5de hvordan kunden jobber i dag og hvorfor, flyttes dialogen fra pris til faktisk verdi.

Mye av dette ligner god coaching. N\xe5r kunden selv formulerer utfordringen – og ofte deler av l\xf8sningen – blir beslutningen b\xe5de enklere og sterkere enn n\xe5r l\xf8sningen presenteres ferdig. Det gir b\xe5de bedre relasjoner og mer robuste salgsprosesser.

Dette er ogs\xe5 grunnen til at jeg har stor respekt for kompetansen i ASD. Jeg har selv brukt dem som leverand\xf8r av coachingtjenester innen salg, og opplever at de er spesielt sterke p\xe5 \xe5 utvikle r\xe5dgiverrollen – der metodikk, adferd og refleksjon henger tett sammen.

S\xe5 til slutt:
𝗛𝘃𝗮 𝘁𝗲𝗻𝗸𝗲𝗿 𝗱𝘂 𝗻\xe5𝗿 𝗱𝘂 𝗵\xf8𝗿𝗲𝗿 𝗼𝗿𝗱𝗲𝘁 \xab𝘀𝗲𝗹𝗴𝗲𝗿\xbb?
For meg er en god selger en r\xe5dgiver og partner – en som lytter aktivt, er \xe6rlig, tar ansvar for fremdrift og er sterk p\xe5 (ogs\xe5 latent) behovskartlegging og de mellommenneskelige aspektene.`},{id:"skalering-01",tittel:"Hva som faktisk avgjør om skalering lykkes – og hvorfor mennesker, timing og valg er utslagsgivende",teaser:"Hva som avgjør om skalering lykkes: plan, livssyklus, mennesker og timing. Fra webinaret Skalering i praksis.",bildeUrl:"/images/skalering.jfif",dato:"2026-01-26",visningsDato:"26.01.2026",kategori:"Kommersiell Ledelse",link:"https://www.linkedin.com/in/mariusottesen/recent-activity/all/",innhold:`Mange snakker om skalering som om det f\xf8rst og fremst handler om tempo, ambisjoner og vekst i tall. Min erfaring er at utfordringene oftere oppst\xe5r i overgangen fra det som fungerte i g\xe5r til neste fase.

P\xe5 onsdag deltok jeg p\xe5 webinaret <em>Skalering i praksis</em> med Annette Sveen, og flere perspektiver traff godt i min egen lederhverdag.

Et sentralt poeng var viktigheten av \xe5 ha <strong>en tydelig plan og retning</strong>. Skalering uten klar forst\xe5else av hvorfor man vokser – og hvor man skal – gj\xf8r organisasjonen reaktiv. Er m\xe5let videre vekst, internasjonalisering eller salg av selskapet? Uten et eksplisitt svar blir prioriteringer uklare, og ledelsen mister styring.

Videre ble det tydelig hvor avgj\xf8rende det er \xe5 vite <strong>hvor virksomheten befinner seg i livssyklusen</strong>. Oppstart, vekst, modning og metning stiller helt ulike krav til struktur, ledelse og mennesker. Tiltak som fungerer i \xe9n fase, kan bli hemmende i neste. Skalering handler like mye om timing og tilpasning som om gjennomf\xf8ring.

Et gjennomg\xe5ende tema var <strong>mennesker som den mest kritiske faktoren i skalering</strong>. Fokus havner ofte p\xe5 teknologi, systemer og finans, mens gjennomf\xf8ringsevnen avgj\xf8res av hvordan mennesker samhandler, tar beslutninger og h\xe5ndterer \xf8kt kompleksitet. Manglende samsvar mellom folk, roller og fase skaper friksjon – som koster fart og energi.

Dette kjenner jeg meg sv\xe6rt godt igjen i, og har selv erfaring med bruk av <strong>profilidentifisering og analyseverkt\xf8y</strong> p\xe5 lederniv\xe5 og medarbeiderniv\xe5. Dette har v\xe6rt s\xe6rlig verdifullt i arbeid med salgsr\xe5dgivere og kunder. N\xe5r vi forst\xe5r adferd, drivere og kommunikasjonsstil – hos oss selv og andre – blir ledelse, samarbeid og salg mer presist.

Webinaret l\xf8ftet ogs\xe5 frem <strong>AI som et praktisk verkt\xf8y i skalering</strong>, ikke som en erstatning for mennesker, men som en m\xe5te \xe5 frigj\xf8re kapasitet p\xe5. R\xe5det var tydelig: start kontrollert, test selv f\xf8rst, integrer i eksisterende systemer og identifiser flaskehalser f\xf8r man ruller bredt. Brukt riktig kan AI bidra til bedre ressursutnyttelse – i tr\xe5d med egne erfaringer fra ledelse og salg.

Til slutt ble det pekt p\xe5 noen <strong>gjennomg\xe5ende feil i skalering</strong>: manglende plan, feil mennesker i n\xf8kkelroller, feil prioriteringer, for lite teknologiforst\xe5else og frav\xe6r av gode sparringspartnere.

Min viktigste p\xe5minnelse etter webinaret er enkel, men krevende:
<strong>Skalering starter ikke med \xe5 gj\xf8re mer – men med \xe5 gj\xf8re de riktige tingene, i riktig rekkef\xf8lge, med riktige mennesker.</strong>`},{id:"tennis-01",tittel:"Tennis og Ledelse: Strategi under press",teaser:"Tennis og ledelse: Djokovic, Alcaraz og overføringsverdi til arbeidsliv – strategi og holdning under press.",bildeUrl:"/images/tennis-ledelse.jpg",dato:"2026-02-10",visningsDato:"10.02.2026",kategori:"Kommersiell Ledelse",link:"https://www.linkedin.com/in/mariusottesen/recent-activity/all/",innhold:`\xc5 jobbe m\xe5lrettet betyr ikke alltid \xe5 vinne.
Noen ganger seirer du. Andre ganger taper du finalen.

Oftere enn vi liker \xe5 innr\xf8mme, kommer du ikke dit en gang.

I desember skrev jeg om halvmaratonet i Egypt og hvordan kapasitet bygges over tid, stein p\xe5 stein, og kan hentes fram n\xe5r det gjelder. Den refleksjonen tok jeg med meg ogs\xe5 hit.

Under Australian Open nylig fikk jeg se Novak Djokovic sl\xe5 ut Jannik Sinner i semifinalen. En ny generasjon p\xe5 full fart opp – og den \xabgamle\xbb mesteren som fortsatt finner en vei til seier. Stor som vinner.

For to \xe5r siden satt jeg tett p\xe5 banen i Paris under OL og s\xe5 Djokovic vinne over erkerivalen Carlos Alcaraz i finalen. Gull. Den eneste medaljen han manglet. Kulminasjonen av et livsverk.

I \xe5r, i Melbourne, opplevde jeg mye av det samme, men med motsatt utfall. I finalen tapte Djoko mot "Carlitos" etter en brutal, tett og fysisk kamp.
To \xf8yeblikk. Samme ut\xf8vere. To helt ulike resultater.

Det som gjorde sterkest inntrykk denne gangen, var ikke bare tennisen – den er i en egen liga – men det som kom etter kampen.

I en idrett der \xabkun seire teller\xbb, i hvert fall for Djokovic, leverte han et intervju preget av verdighet, takknemlighet og respekt. For teamet sitt. For motstanderen. For publikum. For reisen. Stor – ogs\xe5 som taper.

Djokovic er av mange regnet som the GOAT. Samtidig er han en av de mest kontroversielle skikkelsene i moderne tennis. Emosjonell. Sta. Prinsippfast. Kritisk til systemer og rammer, som blandt annet kostet ham dyrt som under covid-perioden og boikotten av Australian Open. Likevel er det sl\xe5ende hvor elsket og respektert han er, ogs\xe5 nettopp i Australia. For spillet. For mental styrke. For viljen til \xe5 st\xe5 i motvind. Jeg kjenner ingen annen som er mer r\xe5 p\xe5 dette enn han.

Som aktiv tennisspiller selv – og dette er idretten jeg elsker mest, av mange – treffer dette ekstra godt. Jeg kjenner igjen arbeidet bak: timene p\xe5 banen, justeringene, frustrasjonen, gjentakelsene. Tennis er brutalt \xe6rlig. Du st\xe5r alene p\xe5 banen med ansvaret, men lykkes aldri alene over tid.

Dette er noe tennisverdenen ofte er gode p\xe5 \xe5 vise frem. Mange spillere p\xe5 touren er flinke til \xe5 l\xf8fte teamet rundt seg og vise respekt for konkurrenter. I andre idretter ser vi dessverre oftere det motsatte, der dette forsvinner n\xe5r presset blir stort.

Og Alcaraz. For en ut\xf8ver!
En kunstner. Kreativ, modig og leken – samtidig ekstremt m\xe5lrettet. Han skaper entusiasme og kj\xe6rlighet til sporten. Det er ogs\xe5 en form for prestasjon.

For meg handler dette ikke bare om tennis.
Det handler om veien mot \xe5 bli nummer \xe9n – i idrett, jobb og liv. Om \xe5 t\xe5le kontrastene mellom seier og tap. Og om \xe5 fortsette \xe5 investere i prosessen – slik jeg ogs\xe5 erfarte i maratonl\xf8pet.

Overf\xf8ringsverdien til arbeidsliv og ledelse er st\xf8rre enn mange tror.`},{id:"landet-rikt-01",tittel:"Din virksomhet kan være langt inne i forfall – men du merker det ikke",teaser:"Landet som ble for rikt: hvordan overflod skjuler forfall i virksomheter – og hva ledere kan gjøre annerledes.",bildeUrl:"/images/landet-rikt.png",dato:"2026-02-05",visningsDato:"05.02.2026",kategori:"Kommersiell Ledelse",link:"https://www.linkedin.com/in/mariusottesen/recent-activity/all/",innhold:`Din virksomhet kan v\xe6re langt inne i forfall.
Men du merker det ikke – fordi kontoen er full.

P\xe5 nylig ferie i Australia leste jeg Martin Bech Holte sin bok <em>Landet som ble for rikt</em>. Det startet som en bok om norsk \xf8konomi. Det endte som det mest ubehagelige speilet jeg har holdt opp mot egne ledererfaringer.

<strong>Dette er Norges feil – og sannsynligvis din ogs\xe5.</strong>

Det som gj\xf8r dette ekstra ubehagelig, er at dette ikke er nytt. Historien er full av land og selskaper som bygget enorme verdier – og mistet dem. Ikke fordi krisen kom br\xe5tt, men fordi disiplinen forsvant. Overflod fjernet behovet for prioritering, og varsellampene ble ignorert fordi tallene fortsatt var gr\xf8nne.

Forfallet skjer ikke dramatisk, men gradvis. Tempoet g\xe5r litt ned. Beslutninger tar litt lengre tid. Ansvar pulveriseres. P\xe5 papiret ser alt greit ut, men i praksis taper organisasjonen fart. Akkurat slik har Norges produktivitet falt med 11% siden 2013, samtidig som oljefondet vokste til over 21.000 milliarder kroner.

I ledergrupper ser jeg det samme m\xf8nsteret: \xabVi har r\xe5d\xbb, derfor tolereres ineffektivitet. I salg ansetter vi flere selgere i stedet for \xe5 forbedre konverteringsraten. Vi \xf8ker markedsbudsjettet fremfor \xe5 jobbe systematisk med sales enablement, prosessforbedring og smartere bruk av st\xf8ttefunksjoner. Kunstig knapphet, selv med midler, er ofte n\xf8kkelen til h\xf8yere produktivitet.

S\xe5 skjer det neste. De beste lederne og verdiskaperne mister t\xe5lmodigheten. N\xe5r st\xf8ttefunksjoner, prosesser og interne hensyn gradvis f\xe5r forrang foran faktisk verdiskaping, vet jeg at rikdomsfellen har sl\xe5tt til. De som skaper resultater, opplever \xf8kende friksjon og s\xf8ker seg bort. Igjen sitter de som er komfortable med status quo. Revenue per employee synker, men ingen reagerer – fordi de absolutte tallene fortsatt vokser.

Systemet produserer det du incentiverer. Bonus p\xe5 aktiviteter. Pipeline uten kvalitetskrav. Salg som bel\xf8nnes uavhengig av margin, kundetilfredshet eller retention. Resultatet er forutsigbart: salg til feil kunder.

\xabVi har god tid\xbb er kanskje den farligste illusjonen av alle. Sverige brukte rundt 20 \xe5r fra topp til bunn. Norge kan v\xe6re langt inne i en tilsvarende utvikling, men merker det ikke da oljefondet maskerer smerten. Fokus glir bort fra kjernekompetansen. Endringene skjer sakte f\xf8rst – og deretter i akselererende tempo.

I salg ser det slik ut: ACV faller gradvis. Sales cycle blir lengre. Win rate mot prim\xe6rkonkurrent g\xe5r fra 60 % til 45 %. Men absolutt omsetning vokser fortsatt 10 % \xe5rlig, s\xe5 ingen sl\xe5r alarm.

Sp\xf8rsm\xe5let er ikke om dette kan snus. Historien viser at det kan det. Hva m\xe5 endres f\xf8r tallene ogs\xe5 begynner \xe5 peke feil vei?`},{id:"norge-virksomhet-01",tittel:"Hvis Norge var en virksomhet – hva måtte ledelsen gjort nå?",teaser:"Hvis Norge var en virksomhet: læring fra Bech Holte om disiplin, ressursallokering og AI som styringsverktøy.",bildeUrl:"/images/norge-virksomhet.jpg",dato:"2026-02-07",visningsDato:"07.02.2026",kategori:"Kommersiell Ledelse",link:"https://www.linkedin.com/in/mariusottesen/recent-activity/all/",innhold:`I <em>Landet som ble for rikt</em> beskriver Martin Bech Holte hvordan Norge gradvis har mistet fart, ikke fordi vi mangler ressurser, men fordi de brukes feil. Det interessante sp\xf8rsm\xe5let for oss som leder virksomheter er ikke om analysen er helt presis, men hva vi kan l\xe6re av m\xf8nsteret – og gj\xf8re annerledes.

<strong>L\xe6ring for virksomhetsledelse</strong>

Bokens kjerne er enkel og ubehagelig: Overflod fjerner press. N\xe5r smertegrensen aldri n\xe5s, uteblir prioriteringene. I virksomheter ser det ofte slik ut: Kapital allokeres basert p\xe5 historikk og intern gjennomslagskraft, ikke effekt. Budsjetter vokser, mens output per ansatt faller. Flere initiativer startes enn avsluttes. \xabVi har god tid\xbb blir et styringsprinsipp. Resultatet er sjelden krise, men stagnasjon – slik som p\xe5 nasjonalt niv\xe5.

<strong>L\xf8sning for virksomheter</strong>

Virksomheter som bryter dette m\xf8nsteret gj\xf8r noen grunnleggende ting annerledes. De innf\xf8rer kunstig knapphet ogs\xe5 n\xe5r kontoen er full, og lar ikke alt som er mulig leve. De flytter ressurser basert p\xe5 effekt, ikke intensjon. De styrer etter produktivitet og outcome fremfor aktivitet og headcount. Og de justerer incentiver slik at langsiktig verdiskaping bel\xf8nnes h\xf8yere enn volum og synlighet.

Her kan AI v\xe6re et virkemiddel, men bare n\xe5r det brukes riktig. Ikke som et individuelt produktivitetsverkt\xf8y, men som st\xf8tte for bedre prioriteringer, mer objektiv ressursallokering og tidligere varsler om hva som faktisk ikke virker. 88% av organisasjoner bruker AI i minst \xe9n funksjon i 2025, if\xf8lge McKinsey. Likevel uteblir gevinstene ofte, fordi teknologien ikke bygges inn i kjerneprosessene.

Erfaringene fra studiet Generative AI for Business ved BI har gjort \xe9n ting tydelig for meg: AI-transformasjon handler om styring, ikke lisenser. IBM rapporterer 4,5 milliarder dollar i \xe5rlige produktivitetsgevinster fra ende-til-ende prosessautomatisering, ikke enkeltverkt\xf8y. I salg betyr dette blant annet sanntidsanalyse av deals, automatisert lead scoring, mer presis prising og forecasting som faktisk kan brukes til styring. Men dette m\xe5 ledes fra toppen. AI er ikke et IT-prosjekt, det er en kjernekompetanse.

<strong>F\xf8rste 90 dager – en praktisk start</strong>

Skulle dette v\xe6rt operasjonalisert, ville jeg startet med en grundig gjennomgang av hvor pengene g\xe5r, hva som bel\xf8nnes i incentiver, og om m\xe5lingene sier noe om reell verdiskaping. Deretter m\xe5 ressursallokering, KPI-er og beslutningsmodeller designes for effekt, ikke aktivitet. F\xf8rst i siste fase handler det om konsekvent gjennomf\xf8ring, ogs\xe5 n\xe5r det betyr \xe5 stoppe initiativer som ikke leverer.

Poenget er ikke \xe5 bli mer effektiv.
Poenget er \xe5 gjeninnf\xf8re disiplin f\xf8r den p\xe5tvinges.

Norge ble ikke svakere fordi vi manglet ressurser.
Virksomheter feiler ofte av samme grunn.`}].map(e=>({...e,tittel:K(W(e.tittel),W(U[e.id]?.tittel??e.tittel)),teaser:K(e.teaser,U[e.id].teaser),innhold:K(e.innhold,U[e.id].innhold)})),V=(e,t=e)=>({no:e,en:t}),_=[{id:"ai-gap-kompetanse-stokke-digi-2026-05",tittel:"Den virkelige AI-mangelen: mennesker med praktisk AI kompetanse",teaser:"Refleksjon på Erlend Rosseland Stokkes artikkel i digi.no: kompetansegapet handler om mennesker med praktisk AI-erfaring i produksjon — og hvorfor AI Value Lab Oslo utforsker dette i praksis.",bildeUrl:"/images/AI-gap.png",dato:"2026-05-22",visningsDato:"22.05.26",kategori:"AI / KI",link:"https://www.linkedin.com/in/mariusottesen/recent-activity/all/",innhold:`Erlend Rosseland Stokke peker i <a href="https://www.digi.no/artikler/debatt-norsk-naeringsliv-undervurderer-den-virkelige-ki-mangelen/572264" target="_blank" rel="noopener noreferrer" class="text-indigo-300 underline underline-offset-2 decoration-indigo-500/70 hover:text-indigo-200 transition-colors">digi.no</a> p\xe5 en AI-mangel som fort kan bli langt mer krevende enn mange ser n\xe5.

Mangelen er ikke teknologi.
Mangelen er ikke verkt\xf8y og modeller.
👉 Men, mangelen er mennesker og milj\xf8er som har f\xe5tt AI til \xe5 fungere i produksjon. Med reelle brukere, virksomhetsn\xe6re data og tydelige konsekvenser.

Stokke beskriver ogs\xe5 en selvforsterkende sirkel. ⭕

Virksomheter blir st\xe5ende i pilotmodus fordi de mangler folk med reell erfaring. Samtidig bygges konkret erfaring f\xf8rst n\xe5r noen f\xe5r muligheten til \xe5 ta AI fra pilot til produksjon. Da blir kompetansegapet st\xf8rre.

Det er ogs\xe5 noe av grunnen til at vi har etablert <a href="https://www.linkedin.com/company/aivaluelaboslo/" target="_blank" rel="noopener noreferrer" class="text-indigo-300 underline underline-offset-2 decoration-indigo-500/70 hover:text-indigo-200 transition-colors">AI Value Lab Oslo</a>.
Vi \xf8nsker \xe5 utforske AI praktisk, ikke bare prinsipielt.

Marius, Tatiana og Ole utvikler oss sammen med \xe5 kombinere forretningsforst\xe5else, teknologi, kundereiser, praktisk utvikling og ansvarlig implementering.
Gjennom konkrete case, prototyper og diskusjoner utfordrer og utforsker vi hvordan AI kan kobles til arbeidsprosesser, beslutningsst\xf8tte, brukeropplevelse, governance og reell verdiskaping.

For de som venter, l\xe6rer saktere. De f\xe5r f\xe6rre leveranser, f\xe6rre feil \xe5 l\xe6re av, f\xe6rre avklaringer rundt data og risiko, og mindre forst\xe5else for hva som kreves i egen organisasjon.
Samtidig bygger de som tar grep en l\xe6ringskurve som blir vanskeligere \xe5 hente inn. 📈

De l\xe6rer gjennom bruk.
De justerer underveis.
De utvikler egne rammer.
De bygger intern trygghet.
De ser raskere hvor verdien oppst\xe5r.

Det interessante er ikke n\xf8dvendigvis at kompetansen ikke finnes, men at den m\xe5 jobbes aktivt med. B\xe5de p\xe5 individ- og organisasjonsniv\xe5.

Den viktigste l\xe6ringen kommer ikke bare fra skolebenken eller sporadiske og teoretiske kurs. Kompetanse bygges heller ikke f\xf8rst og fremst gjennom innlegg og diskusjoner. Og heller ikke prim\xe6rt gjennom \xe5 teste et nytt verkt\xf8y.

N\xe5r man st\xe5r i avveiningene mellom behov, bruker, data, risiko, ansvar, forretning og gjennomf\xf8ring – det er da en utvikler en helt annen form for AI-kompetanse og erfaring. Den som virkelig betyr noe. 💯

Og derfor er vi enige i at kompetansegapet handler om mer enn generell AI-interesse. Det handler om hvem som aktivt bygger erfaring og praktisk modenhet som gj\xf8r at AI kan skape reell verdi i morgen.

💥 For virksomheter som vil lykkes, holder det ikke \xe5 f\xf8lge med fra sidelinjen.

Vi tar gjerne en kaffe med andre som jobber med dette, eller som er nysgjerrige p\xe5 hvordan slik erfaring kan bygges i praksis. ☕

#GenerativeAI #AIKompetanse #DigitalTransformasjon #Teknologiledelse #PraktiskAI`},{id:"nova-frokost-ai-kjernekompetanse-2026-05",tittel:"AI må bli kjernekompetanse, ikke sideprosjekt",teaser:"Refleksjoner fra NOVA Consulting Groups frokostmøte: hvorfor mange virksomheter sitter fast i piloter — og hva Elkem, Egde, Nordic Corporate Bank og Infra Group viste om AI i drift.",bildeUrl:"/images/nova-bistudenter.jpg",dato:"2026-05-21",visningsDato:"21.05.26",kategori:"AI / KI",link:"https://www.linkedin.com/in/mariusottesen/recent-activity/all/",innhold:`Det burde egentlig v\xe6re et tankekors for flere ledergrupper og styrer.

Hvorfor sitter s\xe5 mange virksomheter fortsatt fast i \xabprat\xbb, piloter og enkeltverkt\xf8y n\xe5r andre allerede flytter AI inn i drift og kjerneprosesser?

AI m\xe5 bli kjernekompetanse, ikke sideprosjekt.

P\xe5 individniv\xe5 kan man komme et stykke p\xe5 vei med enkelte verkt\xf8y. Men hvis virksomheter skal ta reelle steg, skape verdi og bygge konkurransefortrinn, m\xe5 AI kobles til mer sentrale oppgaver.

Til verdiskapende prosesser.
Til arbeidsflyt.
Til beslutninger.
Til kunde- og brukerreiser.
Til kompetansen organisasjonen selv m\xe5 eie.

Det viktigste jeg tok med meg fra NOVA Consulting Group sitt frokostm\xf8te i g\xe5r var ikke \xe9n demo eller ett verkt\xf8y. Det var m\xf8nsteret i \xe5 h\xf8re hva som ligger bak det som fungerer i ulike selskaper, og hvor det kan ta dem.

Det ga meg en skikkelig inspirasjonsboost. 💥

• Elkem ASA og Egde viste hvordan mange sm\xe5 use cases, korte utviklingsl\xf8p og tett brukerinvolvering kan bli til en intern AI-plattform med reell effekt.
• Nordic Corporate Bank ASA viste hvordan AI-agenter kan flytte arbeid tidligere i prosessen, fra uklare krav til bedre avklaringer, testing, kode og dokumentasjon.
• Infra Group viste hvordan ustrukturert HMS-data kan bli bedre beslutningsst\xf8tte, risikoforst\xe5else og forebygging.

Ikke alle selskaper skal kopiere disse l\xf8sningene. Men de viste at AI ikke b\xf8r bli st\xe5ende i pilotmodus hvis virksomheten vil bygge konkurransekraft.

Det er ogs\xe5 interessant \xe5 se hvor mye av det jeg selv bygger og utforsker peker i samme retning. Gjennom blant annet masterkurset <em>GenAI for Business</em> og det selvstartede <a href="https://www.linkedin.com/company/aivaluelaboslo/" target="_blank" rel="noopener noreferrer" class="text-indigo-300 underline underline-offset-2 decoration-indigo-500/70 hover:text-indigo-200 transition-colors">AI Value Lab Oslo</a>, har jeg jobbet med hele AI-reisen: fra forretningsbehov, kundereise og use case-logikk til bygging av apper, agenter, AI-arkitektur, visuelt innhold, governance og skalering.

Fokuset er ikke p\xe5 teknologi alene, selv om jeg ogs\xe5 blir godt kjent med modeller, verkt\xf8y og tekniske muligheter.

Det handler om hvordan AI faktisk kan brukes til \xe5 l\xf8se viktige forretningsutfordringer. ✅

Jeg oppfordrer flere til \xe5 fokusere p\xe5 - og ta del i - <em>hele</em> reisen:
Fra id\xe9 til use case.
Fra use case til trygg testing.
Fra testing til drift.
Fra drift til kjernekompetanse.

For hvis andre f\xe5r det til, kan flere f\xe5 det til. 💯

AI-transformasjon starter sjelden med den st\xf8rste ideen.
Den starter med nok struktur til at sm\xe5 ideer kan testes raskt, l\xe6res av og deretter skaleres trygt.

Men da m\xe5 AI slutte \xe5 v\xe6re noe organisasjonen pr\xf8ver ved siden av jobben.
Det m\xe5 bli en del av hvordan jobben faktisk gj\xf8res.

Takk til Nova-crewet, til m\xf8teleder Michael Christophersen, og til BI-medstudenter Thomas Holm og Dimitri Oetiker som ogs\xe5 tok turen.

Sammen fortsetter vi \xe5 utforske potensialet i AI n\xe5r det settes i gode systemer. 📈

#GenerativeAI #DigitalTransformasjon #Teknologiledelse #KommersiellLedelse`},{id:"ai-prosjekt-forretningsproblem-tegneserie-2026-05",tittel:"Når et AI-prosjekt ikke starter med AI, men med et forretningsproblem.",teaser:"Masteroppgave-case for Skøyenåsen Tannklinikk: GenAI-verdi i pasientreisen — illustrert med en tegneserie som oppsummerer implementeringsreisen.",bildeUrl:"/images/tegneserie1.png",dato:"2026-05-23",visningsDato:"23.05.26",kategori:"AI / KI",link:"https://www.linkedin.com/in/mariusottesen/recent-activity/all/",karusellBilder:Array.from({length:9},(e,t)=>({src:`/images/tegneserie${t+1}.png`,alt:{no:`Tegneserie – panel ${t+1} av 9`,en:`Comic – panel ${t+1} of 9`}})),karusellPdfUrl:"/images/tegneserie-karusell.pdf",innhold:`I masteroppgaven min i <em>Generative AI for Business</em> ved BI har jeg jobbet med et konkret case for Sk\xf8yen\xe5sen Tannklinikk. 🦷

M\xe5let har ikke bare v\xe6rt \xe5 lage en ny nettside, chatbot eller digitale l\xf8sninger. Det har v\xe6rt \xe5 forst\xe5 hvor GenAI faktisk kan skape verdi i en reell virksomhet. 📈

✅ Prosjektet handler om kunde- og pasientreisen rundt leveransen og behandlingen: informasjon, behovsavklaring, booking, oppf\xf8lging og recall.

🚫 Ikke diagnose. Ikke behandlingsr\xe5d. Ikke automatisering av faglige vurderinger.

Det handler om \xe5 forst\xe5 problemet, bygge konkret, ta risiko p\xe5 alvor og vite hvor mennesker fortsatt m\xe5 eie beslutningen.

For min egen del har l\xe6ringen v\xe6rt stor. Ikke bare i bruk av AI-verkt\xf8y, promptarbeid og strategisk tech-forst\xe5else, men ogs\xe5 i det \xe5 drive et AI-prosjekt fremover fra problemforst\xe5else til konkrete leveranser.

Samtidig har prosjektoppgaven gitt en ramme for \xe5 beskrive hele implementeringsreisen: forretningsbehov, l\xf8sning, roadmap, risiko, governance, personvern, skalering og menneskelig ansvar.

Resultatet begynner n\xe5 \xe5 ta form: ny nettside, text/speech-to-text chatbot p\xe5 6 spr\xe5k, booking, behovsavklaring, oppf\xf8lging og recall.

Kanskje din virksomhet kjenner p\xe5 samme behov, eller er nysgjerrig p\xe5 hvordan AI kan brukes mer konkret, trygt og verdiskapende? Ta gjerne kontakt for en prat.

Tegneserien oppsummerer reisen.

#GenerativeAI #Ledelse #DigitalTransformasjon #Forretningsutvikling #ResponsibleAI`},{id:"genai-foerste-reklamefilm-psc-2026-05",tittel:"Min første reklamefilm med Generativ AI. 🎥",teaser:"Jeg laget filmen for The Predictive Sales Coach – og reflekterer over GenAI-produksjon, masterleveranser på BI og hva dette betyr for kommersiell innholdsproduksjon.",bildeUrl:"/images/promovideo-final.mov",dato:"2026-05-12",visningsDato:"12.05.26",kategori:"AI / KI",link:"https://www.linkedin.com/in/mariusottesen/recent-activity/all/",innhold:`Min f\xf8rste reklamefilm med Generativ AI. 🎥

Denne filmen laget jeg for <a href="https://pscv6-744893320985.europe-west2.run.app/" target="_blank" rel="noopener noreferrer" class="text-indigo-300 underline underline-offset-2 decoration-indigo-500/70 hover:text-indigo-200 transition-colors">The Predictive Sales Coach</a>, mitt egenutviklede, AI-baserte verkt\xf8y for salgstrening som kombinerer DISC-inspirert kundepsykologi med realistiske salgssimuleringer, objektiv evaluering og strukturert l\xe6ring for \xe5 styrke trygghet, metodikk og win-rate.

Det har v\xe6rt b\xe5de l\xe6rerikt og fascinerende \xe5 se hvor mye som n\xe5 er mulig \xe5 f\xe5 til, uten lang planlegging, stor produksjonsrigg, skuespillere, location, filmcrew, omfattende koordinering og de budsjettene som tidligere ofte var n\xf8dvendige.

I prosjektet brukte jeg blant annet Higgsfield til produksjon, Seedance 2.0 til \xe5 generere scenene, DaVinci Resolve til redigering og ferdigstillelse, og lyd/musikk fra Pixabay. Verkt\xf8yene er ikke gratis, men sammenlignet med tradisjonell produksjon \xe5pner de for helt andre muligheter i fart, testing, fleksibilitet og kreativ gjennomf\xf8ring.

Ekstra meningsfullt for meg var det at b\xe5de PSC-appen og reklamefilmen var to av tre eksamensoppgaver p\xe5 masterkurset <em>Generative AI for Business</em> ved Handelsh\xf8yskolen BI, levert denne helgen.

Studiet har v\xe6rt utrolig interessant. I l\xf8pet av disse m\xe5nedene har vi jobbet bredt og praktisk med Gen.AI, digital transformasjon og utvikling. Ikke bare teori, men ogs\xe5 konkrete leveranser, eksperimentering, innholdsutvikling, bygging av l\xf8sninger og innsikt i utfordringer og nye muligheter.

For meg har studiet ogs\xe5 gitt en bred innf\xf8ring i hele AI-reisen: fra identifisering av behov og muligheter, analyse og strukturering av store datamengder, samt forankring og eierskap i organisasjonen, til bruk av modeller og programmer koblet mot kjerneprosesser, roadmaps, implementering, governance og ikke minst skaleringsmuligheter som ledere m\xe5 forst\xe5 og h\xe5ndtere.

Det har ogs\xe5 gitt motivasjon til mer. Utenfor pensum har jeg blant annet bygget agentl\xf8sninger, nettsider, AI-assistert innsikts- og innholdsmotor og AI-arkitektur for beslutningsst\xf8tte. Det har gitt meg enda st\xf8rre innsikt i mulighetsrommet, og i hvordan dette allerede er verdiskapende for virksomheter.

Kompetanse innen dette feltet har ogs\xe5 gitt inspirasjon til \xe5 komme i kontakt med likesinnede. Nettverket har vokst med mennesker som \xf8nsker \xe5 utforske, bygge og bidra til morgendagens l\xf8sninger.

💥 Oppsummert peker dette i en tydelig retning. Jeg \xf8nsker \xe5 fortsette og utforske hvordan Gen.AI kan skape reell verdi for virksomheter og kunder i kommersiell sammenheng. Det er en retning jeg vil bygge videre, enten gjennom eget selskap eller i arbeid i et selskap som vil bruke AI mer m\xe5lrettet.

Om noen er nysgjerrige p\xe5 \xe5 teste ut Sales Coach-l\xf8sningen, er det bare \xe5 ta kontakt med meg for innlogging.

#GenerativeAI #DigitalTransformasjon #KommersiellLedelse #Innholdsproduksjon #AIAdvertising`},{id:"bi-generative-ai-for-business-2026-01",tittel:"Siste samling på BI i Generative AI for Business – dette er bare starten",teaser:"Siste fysiske samling på masterstudiet ved BI ga både praktisk erfaring og strategisk retning: bygging, ledelse og implementering av GenAI i virksomheter.",bildeUrl:"/images/studenter.mp4",dato:"2026-04-30",visningsDato:"30.04.26",kategori:"AI / KI",link:"https://www.linkedin.com/in/mariusottesen/recent-activity/all/",innhold:`I g\xe5r hadde vi siste fysiske samling p\xe5 masterstudiet "Generative AI for Business" ved Handelsh\xf8yskolen BI.

Men f\xf8lelsen er ikke at noe avsluttes. Snarere at noe har begynt! Kurset har gitt b\xe5de praktisk erfaring og et tydeligere strategisk perspektiv p\xe5 hvordan GenAI kan brukes, implementeres og ledes i virksomheter.

For min del har dette v\xe6rt langt mer enn et fag med pensum, innleveringer, eksamener og prosjektoppgave.

Vi har laget apper, nettsider, assistenter, infographics, podcast, quiz, reklamemateriell i form av bilder og video, og jobbet med et bredt spekter av GenAI verkt\xf8y, modeller og praktiske anvendelser. Man skal ikke bare forst\xe5 hva AI er, men pr\xf8ve det ut p\xe5 tvers av oppgaver, arbeidsformer og forretningsbehov. Studiet har ogs\xe5 vektlagt prompt engineering, dataanalyse, automatisering, strategi, implementering og ansvarlig bruk.

I tillegg har jeg f\xe5tt utviklet 'The Predictive Sales Coach' 👇 - et salgscoach-verkt\xf8y som springer ut av b\xe5de l\xe6ringen p\xe5 studiet og min egen kjernekompetanse innen kommersiell ledelse. Indikasjoner p\xe5 at dette kan ha kommersielt potensial har jeg ogs\xe5 f\xe5tt. 📈

Men studiet har ogs\xe5 utl\xf8st mer!
Det har gitt meg motivasjon til \xe5 bygge videre utover pensum med agentl\xf8sninger, AI-assistert innsikts- og innholdsmotor, AI-arkitektur for beslutningsst\xf8tte, og ikke minst videre refleksjon og faglig deling. Dessuten har det gitt meg inspirasjon for \xe5 komme i kontakt med "likesinnede", hvilket for eksempel har ledet til at jeg har dannet AI Value Lab Oslo.

Det gir meg en f\xf8lelse av stolthet av flere grunner.
💥 Fordi jeg ikke bare har l\xe6rt om teknologien, men ogs\xe5 bygget noe.
💥 Fordi jeg har klart \xe5 koble ny teknologi med det jeg kan best fra f\xf8r: salg, kommersiell utvikling, ledelse og praktisk verdiskaping.
💥 Og fordi det er inspirerende \xe5 kjenne at dette ikke bare er faglig interessant, men ogs\xe5 relevant og anvendbart i forretningskontekst der det kan ha store konkurransemessige fordeler.

Det er ogs\xe5 vanskelig \xe5 komme utenom hvor g\xf8y dette har v\xe6rt. GenAI er et fagomr\xe5de som utvikler seg sv\xe6rt raskt, og som s\xe5 tydelig er i tiden, hvilket b\xe5de gir energi og l\xe6ringslyst. N\xe5r andre h\xf8rer man fordyper seg i GenAI, er responsen alltid positiv. De fleste ser at dette er et omr\xe5de som blir stadig viktigere fremover.

Min viktigste take-away er derfor denne:
Det stopper ikke her!
Innen GenAI holder det ikke \xe5 ha testet noen verkt\xf8y eller fullf\xf8rt ett kurs. Utviklingen g\xe5r for fort til det. Man m\xe5 fortsette \xe5 l\xe6re, teste, bygge, feile, vurdere og omsette innsikt til praksis. Derfor har det v\xe6rt spennende \xe5 kjenne p\xe5 f\xf8lelsen av \xe5 sitte mer i f\xf8rersetet enn p\xe5 sidelinjen mens mye fortsatt formes. 💪

Takk til professor Shubin Yu og alle medstudenter for inspirerende samlinger, gode diskusjoner, mye energi og kreativitet underveis. 💯`},{id:"econa-ai-kundereise-arbeidsflyt-01",tittel:"Det mest interessante med AI nå er hva den gjør med kundereisen, arbeidsflyten og tilgjengeligheten",teaser:"Refleksjoner fra Econa-arrangementet: AI skaper verdi når den kobles til kundereise, arbeidsflyt og konkrete behov.",bildeUrl:"/images/econa-ai.jpg",dato:"2026-04-22",visningsDato:"22.04.26",kategori:"AI / KI",link:"https://www.linkedin.com/in/mariusottesen/recent-activity/all/",innhold:`Det mest interessante med AI n\xe5 er hva den gj\xf8r med kundereisen, arbeidsflyten og tilgjengeligheten.

Det traff meg tydelig p\xe5 Econa-arrangementet i g\xe5r.

Selv jobber jeg n\xe5 med \xe5 bygge b\xe5de AI-basert chatbot, agenter og smartere bookingflyt i en privat klinikk, med m\xe5l om bedre behovsavklaring og en mer presis kunde-/pasientreise. Derfor ble dette ekstra relevant for meg:

AI skaper verdi f\xf8rst n\xe5r den kobles til kundereisen, arbeidsflyten og konkrete behov.

N\xe5r jeg selv jobber kommersielt, er det spesielt spennende \xe5 se hvor veien g\xe5r n\xe5, og samtidig f\xe5 v\xe6re med p\xe5 \xe5 bygge noe av det i praksis.

Synne Christiansen og Jens Fredrik Allworthy fra Sprint l\xf8ftet et viktig poeng: Kundeopplevelse er ikke lenger bare kommunikasjon eller kundeservice. Det er summen av alle interaksjoner, og AI er i ferd med \xe5 endre dem alle.
Et illustrerende eksempel var hvordan kj\xf8psopplevelser kan g\xe5 fra klassisk navigasjon og filtrering til at kunden bare beskriver behovet sitt i naturlig spr\xe5k, og f\xe5r en relevant l\xf8sning generert derfra. Det er et stort skifte \xe5 g\xe5 fra menylogikk til intensjonslogikk.

Hanna Vodopic fra Devoteam satte ord p\xe5 noe mange undervurderer: AI er blitt "den stille kollegaen".
Et konkret eksempel var hvordan ansatte i st\xf8rre grad sp\xf8r AI f\xf8r de sp\xf8r sidemannen. Det gir fart, men kan ogs\xe5 svekke l\xe6ring, kunnskapsdeling og den friksjonen som ofte skaper bedre l\xf8sninger. Hun l\xf8ftet ogs\xe5 begrepet hollow intelligence: at vi kan fremst\xe5 mer kapable fordi AI hjelper oss \xe5 levere, uten at vi n\xf8dvendigvis bygger dyp nok forst\xe5else selv.
Det var en viktig p\xe5minnelse: AI m\xe5 ikke bare gj\xf8re oss raskere. Den m\xe5 brukes slik at vi ogs\xe5 blir bedre, klokere og mer samkj\xf8rte.

Daniel Kirken\xe6r Mathisen fra IGM viste den mest operative siden av dette: digitale kolleger og agenter som tar en rolle i frontlinjen.
Det ble veldig konkret da han viste hvordan AI-resepsjonisten svarer umiddelbart, h\xe5ndterer flere henvendelser samtidig og setter over til menneske n\xe5r det trengs.
Det er interessant fordi det flytter AI fra st\xf8tteverkt\xf8y til arbeidskapasitet. Det resonerer godt med noe av det jeg selv bygger n\xe5, der agenter ikke bare skal svare, men bidra inn i flyt, tilgjengelighet og oppf\xf8lging.

Det som st\xe5r sterkest igjen hos meg etter kvelden er at vi g\xe5r fra AI som noe ansatte "tester litt", til AI som bygges langt inn i kjerneprosesser.

Da endres ogs\xe5 kravene til oss som bygger:
 • Vi m\xe5 forst\xe5 kundereisen
 • Vi m\xe5 forst\xe5 prosessene
 • Vi m\xe5 forst\xe5 hvor friksjonen faktisk er
 • Og bygge med tydelig human in the loop

Det er ogs\xe5 her jeg mener noe av det mest oppsiktsvekkende skjer n\xe5:
Virksomheter som klarer \xe5 koble AI til f\xf8rstelinje, booking, behovsavklaring og oppf\xf8lging, bygger ikke bare effektivitet. De bygger en helt annen tilgjengelighet og presisjon i kundem\xf8tet.

Det er der mye av konkurransekraften kommer til \xe5 ligge fremover.`},{id:"ai-needs-first-tannklinikk-case-01",tittel:"De fleste starter feil med AI – erfaringer fra et reelt case",teaser:"Fra AI Value Lab Oslo og et reelt tannklinikk-case: start med virksomheten og behov — ikke med «hvilken AI-løsning?» Nettside, chatbot og booking i riktig rekkefølge.",bildeUrl:"/images/ai-to-needs.jfif",dato:"2026-04-14",visningsDato:"14.04.2026",kategori:"AI / KI",link:"https://www.linkedin.com/in/mariusottesen/recent-activity/all/",innhold:`I p\xe5sken og i forrige uke har jeg jobbet videre med et konkret case gjennom min gruppe AI Value Lab Oslo, der vi bruker en reell tannklinikk som l\xe6ringsarena for \xe5 teste hvordan AI kan brukes i praksis.

Vi startet ikke med teknologi. Vi startet med virksomheten.

Gjennom analyse, research, intervjuer og diskusjoner jobbet vi oss frem til ett kjernepunkt: Hvor oppleves friksjon i hverdagen?

Hva fungerer godt i dag?
Hvor er flaskehalsene?
Hvor taper klinikken tid, kapasitet eller potensielle inntekter?

Vi s\xe5 ogs\xe5 p\xe5 hva konkurrentene gj\xf8r bedre, s\xe6rlig i hvordan de m\xf8ter pasientene digitalt og operativt.

Bildet som tegnet seg var tydelig:
Den faglige kvaliteten og pasientopplevelsen er sterk, men det er et gap i det digitale og kommersielle rundt. Alts\xe5 ikke i kjerneleveransen, men i det som skjer f\xf8r og etter.

Det er derfor vi n\xe5 jobber med \xe5 modernisere pasientreisen, og vurderer hvordan AI og digitale l\xf8sninger kan styrke:
🦷 booking og tilgjengelighet
🦷 oppf\xf8lging og gjenkj\xf8p
🦷 tydelig informasjon og pasientkommunikasjon
🦷 mer effektive arbeidsprosesser
🦷 bedre operativ st\xf8tte i hverdagen

Helt konkret jobber vi n\xe5 med:
– videreutvikling av nettside (bedre struktur og mer relevant informasjon)
– ny chatbot (ikke hatt tidligere)
– ny online bookingl\xf8sning (ikke hatt tidligere)

Alt utvikles med utgangspunkt i faktiske behov hos pasientene. Poenget er ikke verkt\xf8yene i seg selv, men rekkef\xf8lgen.

De fleste virksomheter starter derimot med sp\xf8rsm\xe5let:
"Hvilken AI-l\xf8sning skal vi velge?"

I praksis b\xf8r man starte et helt annet sted ved \xe5 sp\xf8rre:
"Hvilke beslutninger og prosesser p\xe5virker resultatet?"

Dette gjenkjenner jeg fra kommersielle organisasjoner:
Prioritering av kunder gj\xf8res ulikt fra person til person.
Oppf\xf8lging av tilbud styres like mye av kapasitet som av potensial.
Pipeline og forecast preges ofte mer av optimisme enn struktur.

Det betyr ikke at det gj\xf8res d\xe5rlig, men at det finnes et betydelig forbedringspotensial. Det er her AI kan bidra!

En modell kan analysere m\xf8nstre og foresl\xe5 neste beste handling. Men verdien oppst\xe5r f\xf8rst n\xe5r det brukes til \xe5 ta bedre beslutninger i praksis.

Siden disse AI-postene er ment som kompetansedeling, nevner jeg ogs\xe5 kort verkt\xf8yene vi tester. L\xf8sninger er utviklet med Claude og Claude Code, med innhold fra FAQ-er og dagens nettside bygget p\xe5 localhost, med videre plan for deployment via Vercel. Nettsidearbeid parallelt i Lovable. Ikke fordi verkt\xf8yene er av betydning, men fordi flere sp\xf8r hva som faktisk brukes i praksis.

👉 I neste innlegg ser jeg p\xe5 hvorfor mange AI-initiativer stopper opp, selv n\xe5r de starter riktig.

PS. P\xe5sken ble ellers brukt p\xe5 R\xf8ros og Svalbard med opplevelser som minner meg p\xe5 noe viktig: Ikke alt skal optimaliseres. Langrenn, alpint, sn\xf8scooter, hundeslede, villdyr og tid med familie og venner sl\xe5r fortsatt det meste – det reelle er ikke kunstig.`},{id:"ai-value-lab-munch-kickoff-01",tittel:"Kick off på Munch med AI Value Lab Oslo",teaser:"Påske-lunsj på Munch: utforske ansvarlig AI der kommunikasjon, forventninger og trygghet betyr mye – fra sterke følelser til tannlegebesøk.",bildeUrl:"/images/ai-dental-lab.png",dato:"2026-04-07",visningsDato:"07.04.2026",kategori:"AI / KI",link:"https://www.linkedin.com/in/mariusottesen/recent-activity/all/",innhold:`I p\xe5sken hadde vi kick off lunsj, og vi i AI Value Lab Oslo m\xf8ttes p\xe5 𝘔𝘜𝘕𝘊𝘏.

Det f\xf8ltes egentlig som et ganske passende sted \xe5 starte.

Munchs univers handler om sterke f\xf8lelser, uro og menneskelige reaksjoner. Det gj\xf8r ogs\xe5 mange menneskers m\xf8te med helsetjenester. For noen kan et tannlegebes\xf8k v\xe6re forbundet med usikkerhet, friksjon og i noen tilfeller tannlegefrykt. Da er det ikke s\xe5 vanskelig \xe5 forst\xe5 hvorfor slike opplevelser er verdt \xe5 l\xe6re mer om.

I denne fasen bruker vi tid p\xe5 \xe5 utforske hvordan AI kan brukes p\xe5 en ansvarlig og gjennomtenkt m\xe5te i situasjoner der kommunikasjon, forventninger og trygghet betyr mye.

Det vi er s\xe6rlig opptatt av n\xe5, er hva som faktisk skjer i m\xf8tet mellom mennesker, informasjon og teknologi. Hvor oppst\xe5r usikkerhet? Hva skaper trygghet? Og hvor kan AI v\xe6re nyttig, uten at det g\xe5r p\xe5 bekostning av personvern, vurderingsevne eller menneskelig n\xe6rhet?

For oss handler dette ikke bare om teknologi. Det handler ogs\xe5 om l\xe6ring underveis, om \xe5 bygge bedre forst\xe5else, utvikle ferdigheter og dele refleksjoner p\xe5 tvers av fagomr\xe5der.

Noe av det mest interessante med AI er kanskje ikke tempoet eller effekten i seg selv, men hvordan teknologien kan brukes mer varsomt, mer presist og mer menneskelig.

Fra Munchs tid til v\xe5r egen har verkt\xf8yene endret seg mye. Behovet for \xe5 forst\xe5 mennesker er fortsatt det samme.

Kanskje er noe av den mest interessante AI utforskningen nettopp dette: ikke \xe5 gj\xf8re det menneskelige mindre viktig, men \xe5 forst\xe5 bedre hva som gj\xf8r en opplevelse tryggere og mer sammenhengende.

Det blir spennende \xe5 utforske dette sammen videre, Tatiana Hanecakova og Ole Mjelde!`},{id:"april-ai-kompetanse-praksis-01",tittel:"Vi har nå funnet en enkel måte å bygge AI-kompetanse i organisasjonen",teaser:"AI-kompetanse bygges ikke på kurs alene, men i beslutninger og praksis tett på kjernearbeidet.",bildeUrl:"/images/easter-ai.jfif",dato:"2026-04-01",visningsDato:"01.04.2026",kategori:"AI / KI",link:"https://www.linkedin.com/in/mariusottesen/recent-activity/all/",innhold:`𝐕𝐢 𝐡𝐚𝐫 𝐧𝐚̊ 𝐟𝐮𝐧𝐧𝐞𝐭 𝐞𝐧 𝐞𝐧𝐤𝐞𝐥 𝐦𝐚̊𝐭𝐞 \xe5 𝐛𝐲𝐠𝐠𝐞 𝐀𝐈-𝐤𝐨𝐦𝐩𝐞𝐭𝐚𝐧𝐬𝐞 𝐢 𝐨𝐫𝐠𝐚𝐧𝐢𝐬𝐚𝐬𝐣𝐨𝐧𝐞𝐧

Send alle p\xe5 kurs!

Eller kanskje ikke. Dette var fors\xf8k p\xe5 en d\xe5rlig 𝐀𝐩𝐫𝐢𝐥𝐬𝐧𝐚𝐫𝐫:

Mange ledere venter med AI – kan du tenke deg hvorfor? Det handler ikke om fordi de ikke vil, men fordi de ikke ser hvor de skal starte. Det er i stor grad forst\xe5elig.

De siste m\xe5nedene har jeg v\xe6rt p\xe5 flere kurs og samlinger om AI. Jeg liker det. Det gir energi, nye perspektiver og et spr\xe5k for \xe5 forst\xe5 hva som skjer.

Men \xe9n ting har blitt veldig tydelig: utviklingen skjer ikke der. Den skjer f\xf8rst n\xe5r AI flyttes inn i arbeidshverdagen og kobles til beslutninger som faktisk betyr noe.

S\xe5 langt i denne AI-serien har jeg skrevet om d\xf8mmekraft, struktur og hvordan mennesker reagerer n\xe5r AI begynner \xe5 gi r\xe5d. N\xe5 g\xe5r jeg over til det mange ledere faktisk er opptatt av:

Hvordan skapes verdi i praksis?

I kommersielle team ser jeg et tydelig skille. Noen tester AI p\xe5 siden. Lager tekster, oppsummerer dokumenter, pr\xf8ver litt frem. Det er nyttig, men det flytter lite. Andre kobler AI direkte til kjernebeslutninger:
 • Hvilke kunder skal prioriteres?
 • Hvilke tilbud skal f\xf8lges opp n\xe5?
 • Hvor er det reell sannsynlighet for \xe5 vinne?

Det er DER forskjellen oppst\xe5r.

En modell kan analysere pipeline og foresl\xe5 neste beste handling. Men verdien ligger ikke i svaret. Den ligger i hva teamet gj\xf8r med det. Tester de anbefalingen? Utfordrer de den? Justerer de beslutningen?

Det er der KOMPETANSEN bygges. Ikke i verkt\xf8yet, men i samspillet mellom erfaring, data og vurdering.

Jeg merker det selv n\xe5r jeg bygger og tester AI-verkt\xf8y. Sm\xe5 endringer i kontekst eller input gir ulike anbefalinger. Det gj\xf8r \xe9n ting tydelig i form av at dette ikke er noe du “l\xe6rer ferdig”. Du utvikler det gjennom bruk. Derfor tror jeg mange overvurderer behovet for \xe5 starte med teknologi. Det viktigste i startfasen er ikke nye systemer, men \xe5 koble AI til beslutninger som allerede tas i dag.

De virksomhetene som lykkes best, bygger ikke AI-kompetanse ved siden av driften. De bygger den i linjen.

Den neste uken skal jeg bygge og teste AI-agenter. Det inneb\xe6rer bruk av ulike verkt\xf8y, men f\xf8rst og fremst l\xe6ring, testing og \xe5 utfordre det jeg gj\xf8r og de svarene som gis.

👉 I neste innlegg ser jeg n\xe6rmere p\xe5 hvordan man identifiserer de riktige AI-use casene \xe5 starte med.

God p\xe5ske!`},{id:"iteam-operativ-modell-2026-01",tittel:"Er din kommersielle operative modell rigget for 2026?",teaser:"Refleksjoner fra iteam sitt frokostseminar: AI som nytt operativsystem, cybersikkerhet som fundament og agenter som faktisk utfører arbeid.",bildeUrl:"/images/iteam.jpg",dato:"2026-03-11",visningsDato:"11.03.2026",kategori:"AI / KI",link:"https://www.linkedin.com/in/mariusottesen/recent-activity/all/",innhold:`𝗘𝗿 𝗱𝗶𝗻 𝗸𝗼𝗺𝗺𝗲𝗿𝘀𝗶𝗲𝗹𝗹𝗲 𝗼𝗽𝗲𝗿𝗮𝘁𝗶𝘃𝗲 𝗺𝗼𝗱𝗲𝗹𝗹 𝗿𝗶𝗴𝗴𝗲𝘁 𝗳𝗼𝗿 𝟮𝟬𝟮𝟲?

I g\xe5r deltok jeg p\xe5 iteam og Michael Jacobs sitt frokostseminar p\xe5 Saga Kino i Oslo – et arrangement med over 800 deltakere fordelt p\xe5 29 lokasjoner. Budskapet var krystallklart: Vi st\xe5r i et teknologisk skifte som krever en fundamental rekalibrering av hvordan vi leder, sikrer og skalerer virksomheter.

I m\xf8tet ble det fremhevet at gapet mellom de som kun ser p\xe5 AI som et verkt\xf8y, og de som forst\xe5r det som et nytt kommersielt operativsystem, \xf8ker raskt. \xc5 investere i dyp AI-forst\xe5else og endringsledelse n\xe5 er ikke bare en fordel, men en kritisk kapabilitet for enhver leder som skal navigere i \xe5rene som kommer.

Her er min strategiske oppsummering av de viktigste driverne for 2026:

<strong>1. Det teknologiske paradigmeskiftet</strong>
Vi har beveget oss fra 90-tallets fokus p\xe5 programvare til 2000-tallets skytjenester. N\xe5 trer vi inn i de autonome agentenes tidsalder.
• Fra verkt\xf8y til digital arbeidsstyrke: AI g\xe5r fra \xe5 v\xe6re en passiv assistent til \xe5 bli en aktiv agent som automatiserer rutineoppgaver, analyserer enorme datasett og st\xf8tter strategiske beslutninger.
• Global teknologi – lokale konsekvenser: Teknologien er tilgjengelig for alle, men konkurransefortrinnet skapes lokalt av de lederne som evner \xe5 operasjonalisere AI i sin verdikjede.

<strong>2. Cybersikkerhet som strategisk fundament</strong>
Roar Thon fra NSM leverte en dyster realitetsorientering: Trusselbildet er preget av statlige akt\xf8rer og organiserte kriminelle.
• Identitet er den nye angrepsflaten: Angripere hacker sjelden systemer. De logger seg inn via misbrukte brukeridentiteter.
• Breddesikkerhet: En helhetlig tiln\xe6rming krever kontroll p\xe5 teknologi, mennesker og prosesser.
• Fire kritiske kapabiliteter: Enhver moderne virksomhet m\xe5 kunne forebygge, detektere, h\xe5ndtere og normalisere drift etter et angrep.

<strong>3. AI i operativ praksis: Microsoft Copilot</strong>
Daniel Horgmo fra Microsoft demonstrerte hvordan vi g\xe5r fra enkel chat til faktiske autonome agenter som fungerer som en digital arbeidsstyrke.
• Presis delegring: Suksess med AI krever "Prompting 101" – evnen til \xe5 gi m\xe5l, kontekst og kilder som om du delegerer til et teammedlem.
• Agent Mode: Gjennom Copilot ser vi n\xe5 agenter som utf\xf8rer flerstegsoppgaver autonomt direkte i v\xe5re kjernesystemer.

<strong>Min strategiske konklusjon:</strong>
Jeg at suksess krever at vi slutter \xe5 se p\xe5 sikkerhet og AI som IT-prosjekter. Kulturelle og strukturelle endringer m\xe5 til.
• Start sm\xe5tt, tenk stort. Test i liten skala, men ha en klar strategi fra ledelsen.
• Datadisplin: Gode data og streng tilgangsstyring er forutsetningen for AI-effekt.
• Sikkerhet by design: Integrer sikkerhet fra start da det er betydelig billigere enn \xe5 h\xe5ndtere en krise.

Takk til iteam for et profesjonelt dypdykk inn i fremtiden.`},{id:"ai-tech-frokost-rebel-01",tittel:"Tech-frokost: Nå handler det om hva AI-agenter kan gjøre for virksomheten",teaser:"AI-agenter skaper verdi når de kobles til systemer, data og prosesser — med kontroll, tydelige instruksjoner og human in the loop.",bildeUrl:"/images/rebel.jpg",dato:"2026-03-25",visningsDato:"25.03.2026",kategori:"AI / KI",link:"https://www.linkedin.com/in/mariusottesen/recent-activity/all/",innhold:`P\xe5 AI-agent m\xf8te hos Digital Norway i g\xe5r fikk vi et godt bilde av hvor agentfeltet st\xe5r n\xe5, fra begrepsforst\xe5else, via offentlig sektor og governance, til startup, skalering og konkret bygging.

Mange snakker fortsatt om AI som bedre tekst, raskere s\xf8k og smartere assistenter. Det er ikke der verdien ligger. Verdien oppst\xe5r n\xe5r AI kobles til systemer, data og prosesser – og utf\xf8rer arbeid.

Alexander Haneng fra Digital Norway satte rammen godt. En chatbot svarer. En assistent hjelper. En agent handler. Den kan trigge prosesser, hente data, sende email og jobbe i bakgrunnen. Samtidig \xf8ker risikoen. Tilgang til systemer og data krever kontroll, tydelige instrukser og begrensede rettigheter.

Kjetil Ringstad fra Statens Vegvesen viste hvordan dette implementeres i en stor virksomhet. Ikke som teknologi alene, men som struktur og styring. En modell som fungerte godt var hvordan ansatte bygger egne agenter, eksperter bygger fellesl\xf8sninger og utviklere bygger plattform.

Caset med dokumentkontroll var konkret. Agenter identifiserer sensitiv informasjon, foresl\xe5r endringer og reduserer manuelt arbeid. Samtidig er to prinsipper avgj\xf8rende: h\xe5ndtering av sensitive data m\xe5 v\xe6re kontrollert, og human in the loop m\xe5 v\xe6re p\xe5 plass f\xf8r noe publiseres. Det er her mange m\xf8ter den reelle kompleksiteten.

Einar Michaelsen fra Circular viste hvordan dette ser ut n\xe5r det kobles direkte til verdikjeden. Produkter kan digitaliseres, kategoriseres, prises og publiseres p\xe5 sekunder. Salgsagenter finner leads, scorer dem og setter neste steg i prosess. N\xe5r 4 mennesker jobber sammen med 40 agenter, sier det noe om retningen!

Stacken bak var bla. Linear, Claude Code, Cursor, GitHub, Supabase, Vercel, Gemini, mm. Verdien ligger i hvordan dette kobles sammen til en produksjonslinje. For min del var det g\xf8y \xe5 se dette, da jeg har erfaring med flere av verkt\xf8yene og n\xe5 jobber med \xe5 bygge egne agentl\xf8sninger.

Det som skiller de som f\xe5r effekt n\xe5 er hvordan de starter. Ikke med teknologi, men med konkrete oppgaver. Repetitivt arbeid p\xe5 tvers av systemer, med tydelige regler og m\xe5lbar verdi. Deretter bygges en enkel agent med begrenset tilgang inkl. menneskelig kontroll. N\xe5r dette fungerer, skaleres det.

Min take er enkel. Sp\xf8rsm\xe5let er ikke hvilke modeller man skal bruke. Sp\xf8rsm\xe5let er hvilket arbeid som kan delegeres, hvilke prosesser som b\xf8r redesignes og hvor dette faktisk gir verdi.

Det er ogs\xe5 bakgrunnen for at jeg n\xe5 jobber konkret med \xe5 bygge agenter, med ambisjon om m\xe5lbar effekt i en virksomhet jeg samarbeider med.

Inne i lokalet stod det en DeLorean med “REBEL”-skilt. I filmen Back to the Future handlet det om \xe5 reise frem i tid. Med AI f\xf8les det mer som vi bygger den. AI-agenter er retningen fremover!`},{id:"nova-day-data-forst-01",tittel:"NOVA Day: Data først – alltid",teaser:"Jeg deltok på NOVA Day og fikk tydelige takeaways om data først, dømmekraft og governance som grunnmur.",bildeUrl:"/images/nova-day.jpg",dato:"2026-03-19",visningsDato:"19.03.2026",kategori:"AI / KI",link:"https://www.linkedin.com/in/mariusottesen/recent-activity/all/",innhold:`Jeg deltok i g\xe5r p\xe5 𝗡𝗢𝗩𝗔 𝗗𝗮𝘆 p\xe5 Hotel Bristol – et sv\xe6rt relevant og innsiktsfullt heldagsseminar med temaet “𝗗𝗮𝘁𝗮 𝗳\xf8𝗿𝘀𝘁 – 𝗮𝗹𝗹𝘁𝗶𝗱”, med fokus p\xe5 AI, data og fremtidens forretningsmodeller.

Dagen ble ledet av Morten Blomfeldt, og samlet sterke foredragsholdere.

𝗠𝗶𝗻𝗲 𝘃𝗶𝗸𝘁𝗶𝗴𝘀𝘁𝗲 𝘁𝗮𝗸𝗲𝗮𝘄𝗮𝘆𝘀:
1. Data f\xf8rst – ikke AI f\xf8rst
Gjennomg\xe5ende budskap var at uten riktig datagrunnlag uteblir gevinstene. AI er forretningskritisk, men data er fundamentet for skalering og verdiskaping.

2. Fremtiden formes n\xe5 – men ikke av teknologi alene
Gerd Leonhard l\xf8ftet viktigheten av menneskelig d\xf8mmekraft, etikk og ansvar. Teknologi gir muligheter, men det er ledelse som avgj\xf8r retning og konsekvenser.

3. Datakvalitet, risiko og governance er kritisk
Iselin Paulsen viste hvordan geopolitikk, sikkerhet og regulering p\xe5virker teknologivalg. Datakvalitet, kontroll og tydelig eierskap i ledelsen er avgj\xf8rende.

4. Fra hype til h\xe5ndverk – der de fleste feiler
\xd8rjan Segtnan Clausen var tydelig: De fleste AI-initiativer stopper p\xe5 pilotstadiet. \xc5rsaken er manglende problemforst\xe5else, svakt datagrunnlag og frav\xe6r av tydelig verdidefinisjon. Han viste blant annet til ADDDD-rammeverket (Align, Discover, Define, Develop, Deliver) som en struktur for \xe5 sikre at AI-initiativer g\xe5r fra id\xe9 til forretningsverdi.

5. AI g\xe5r fra verkt\xf8y til akt\xf8r
Det mest spennende for meg var innsikten fra Lars Alexander Jakobsen rundt MCP (Model Context Protocol) og utviklingen mot A2A (Agent-to-Agent). N\xe5r AI kobles direkte til systemer og agenter samhandler, beveger vi oss mot operative “digitale kollegaer”. Dette vil fundamentalt endre hvordan vi organiserer arbeid og skaper verdi.

Midt p\xe5 dagen var det ogs\xe5 en paneldebatt som bandt sammen perspektivene. Diskusjonen handlet om geopolitikk, avhengighet til globale teknologileverand\xf8rer, digital suverenitet og behovet for tydeligere strategiske valg. Dette er ikke lenger et IT-sp\xf8rsm\xe5l, men et lederansvar.

𝗠𝗶𝗻 𝗿𝗲𝗳𝗹𝗲𝗸𝘀𝗷𝗼𝗻:
“Data f\xf8rst – alltid” er ikke et teknologivalg. Det er et strategisk valg – og et tydelig lederansvar.

Det som traff meg mest, er at mange fortsatt jobber med AI som et verkt\xf8y, mens gevinstene f\xf8rst kommer n\xe5r man redesigner prosesser og ansvar.
For meg er dette ogs\xe5 et kommersielt skifte, der AI vil p\xe5virke salg, kundeopplevelse og verdiskaping i praksis.

N\xe5r vi ser fremveksten av MCP og A2A, beveger vi oss mot en ny operativ modell der AI-agenter ikke bare st\xf8tter, men utf\xf8rer arbeid p\xe5 tvers av systemer. Vi snakker ny arkitektur for hvordan arbeid utf\xf8res!

👉 Dette jobber jeg ogs\xe5 aktivt med n\xe5 da jeg anser det som viktig \xe5 forst\xe5 hvordan dette implementeres i praksis, ikke bare p\xe5 niv\xe5 med teoretiske rammeverk.

Takk til NOVA Consulting Groupfor et sv\xe6rt godt gjennomf\xf8rt arrangement – og ikke minst hyggelig \xe5 m\xf8te mange nye bekjentskaper og ha gode faglige diskusjoner gjennom dagen!`},{id:"ai-value-lab-01",tittel:"Vi har startet noe jeg mener flere ledere burde gjøre",teaser:"Et uformelt fellesskap for å bygge, dele og utfordre hverandre med AI — for reell forretningsverdi.",bildeUrl:"/images/ai-value-lab.jpeg",dato:"2026-03-20",visningsDato:"20.03.2026",kategori:"AI / KI",link:"https://www.linkedin.com/in/mariusottesen/recent-activity/all/",innhold:`𝗩𝗶 𝗵𝗮𝗿 𝘀𝘁𝗮𝗿𝘁𝗲𝘁 𝗻𝗼𝗲 𝗷𝗲𝗴 𝗺𝗲𝗻𝗲𝗿 𝗳𝗹𝗲𝗿𝗲 𝗹𝗲𝗱𝗲𝗿𝗲 𝗯𝘂𝗿𝗱𝗲 𝗴𝗷\xf8𝗿𝗲.

For min del har dette blitt en arena hvor jeg b\xe5de l\xe6rer raskere og f\xe5r testet egne hypoteser i praksis.

Vi er tre personer med \xe9n felles ambisjon:
\xc5 skape reell forretningsverdi med AI.

Vi har etablert et uformelt samarbeid vi kaller "𝗔𝗜 𝗩𝗮𝗹𝘂𝗲 𝗟𝗮𝗯".

Ikke bare for \xe5 teste verkt\xf8y, men for faktisk \xe5 bygge, dele og utfordre hverandre systematisk.

Vi m\xf8tes jevnlig til det vi kaller “𝗦𝗵𝗼𝘄 & 𝗧𝗲𝗹𝗹”.

Her deler vi konkret hva vi har jobbet med siden sist:
• AI-agenter, applikasjoner og nettsider vi har utviklet
• Eksperimenter p\xe5 tvers av modeller og verkt\xf8y. Hva fungerer, hva fungerer ikke
• Sammenlikning av styrker og svakheter mellom ulike AI-l\xf8sninger
• Innsikt fra m\xf8ter, workshops og kurs vi deltar p\xe5, samt innspill og tips til andre og nye fagarenaer og tema

Men det som gj\xf8r dette spesielt, er dybden i diskusjonene. Vi bruker ogs\xe5 tid p\xe5 det mange hopper over:
• Hvordan bruke data som gir konkurransefortrinn
• Governance – hvordan sikre kontroll, kvalitet og ansvarlighet
• Rammeverk som ADDDD (Align, Discover, Define, Develop, Deliver) – og hvordan det brukes i praksis
• Hvordan g\xe5 fra pilot til skalerbar verdi

Samtidig jobber vi ikke bare med eksperimenter. Vi tar for oss reelle problemstillinger og use-cases.

V\xe5r hypotese er enkel. AI skaper ikke verdi i siloer. Den skaper verdi n\xe5r ulike enheter jobber sammen. Akkurat som avdelinger i virksomheter m\xe5 gj\xf8re.

Det jeg sitter igjen med s\xe5 langt, er en ganske tydelig erkjennelse. Mange jobber med AI p\xe5 individniv\xe5. F\xe5 klarer \xe5 bygge strukturer som skaper verdi p\xe5 selskapsniv\xe5.

V\xe5r tiln\xe6rming er derfor bevisst:
👉 Kombinere praktisk bygging med strategisk forst\xe5else
👉 Koble AI direkte til kommersielle use-cases
👉 L\xe6re raskere sammen enn hver for oss

Neste steg? Vi skal bygge noe sammen som gir reell effekt – og som kan skaleres.

For meg handler dette minst like mye om ledelse som teknologi.

Ledelse som evner \xe5 koble eksperimentering med retning.
Ledelse som forst\xe5r b\xe5de data, governance og verdiskaping.
Ledelse som leverer effekt og resultat.

Vi er tidlig ute. Vi bygger, ikke bare prater. I dobbel forstand. Ser frem til fortsettelsen Ole Mjelde og Tatiana Hanecakova!

𝗦𝗸𝘆 𝗶𝘀 𝘁𝗵𝗲 𝗹𝗶𝗺𝗶𝘁. 𝗠𝗲𝗻 𝗸𝘂𝗻 𝗳𝗼𝗿 𝗱𝗲 𝘀𝗼𝗺 𝗼𝗺𝘀𝗲𝘁𝘁𝗲𝗿 𝗔𝗜 𝘁𝗶𝗹 𝘃𝗲𝗿𝗱𝗶.`},{id:"ai-debatten-hype-vs-frykt-01",tittel:"AI-debatten går fortsatt i to spor: hype vs frykt",teaser:"Når debatten låser seg til «hype» og «frykt», blir det vanskelig å se verdiskaping i praksis. Det er adopsjon som flytter drift.",bildeUrl:"/images/debatten.jfif",dato:"2026-03-22",visningsDato:"22.03.2026",kategori:"AI / KI",link:"https://www.linkedin.com/in/mariusottesen/recent-activity/all/",innhold:`Men det virkelige skillet skjer et annet sted.

Etter \xe5 ha fulgt <strong>Debatten</strong> p\xe5 <strong>NRK1</strong> denne uken sitter jeg igjen med to tydelige refleksjoner.

For det f\xf8rste:
<strong>AI er ikke lenger noe vi diskuterer p\xe5 avstand.</strong> Det er allerede i ferd med \xe5 endre hvordan virksomheter opererer.

Eksemplene fra blant annet Oljefondet er tydelige. Nicolai Tangen viste hvordan de har allerede dokumentert betydelige gevinster. De har \xf8kt produktiviteten med rundt 20 prosent og spart milliarder gjennom bedre analyse, overv\xe5kning og beslutningsst\xf8tte.

Dette er ikke eksperimentering, men reell verdiskaping i praksis.

For det andre:
Som ogs\xe5 l\xf8ftes frem i diskusjonen rundt AI i Norge, trenger vi flere perspektiver inn. AI er ikke ett fag, men det spenner fra teknologi og matematikk til forretning, ledelse, sikkerhet og samfunn.

Hvis debatten l\xe5ser seg til hvem som har “rett” til \xe5 mene noe, risikerer vi \xe5 snevre inn forst\xe5elsen og samtidig forsinke n\xf8dvendig utvikling. Denne bredden i perspektiver er avgj\xf8rende for \xe5 ta bedre beslutninger og sikre ansvarlig bruk av AI.

Nicolai Tangen var tydelig p\xe5 at virksomheter som ikke tar dette i bruk risikerer \xe5 falle bak.

👉 De som adopterer raskt f\xe5r et strukturelt fortrinn. Dette gjelder b\xe5de individer og organisasjoner.

P\xe5 individniv\xe5 ser vi at de som tar i bruk AI utvikler seg raskere. De jobber mer effektivt, tar bedre beslutninger og \xf8ker sin egen verdi i arbeidsmarkedet.

P\xe5 organisasjonsniv\xe5 handler det ikke om enkeltverkt\xf8y, men om hvordan man jobber. AI m\xe5 integreres i kjerneprosesser, kompetanse m\xe5 bygges bredt, og arbeidsformer m\xe5 endres. Fra pilotprosjekter til faktisk drift og beslutningstaking.

Det er her forskjellen skapes, samtidig som vi m\xe5 unng\xe5 to ytterpunkter. Naivitet, der man ukritisk kaster seg p\xe5 alt. Eller handlingslammelse, der debatten blir viktigere enn fremdriften. Begge deler svekker evnen til \xe5 skape verdi.

Min refleksjon er at AI ikke f\xf8rst og fremst vil skape vinnere. Den vil tydeliggj\xf8re hvem som evner \xe5 utvikle seg raskest og omsette teknologi til konkret verdi.

Sp\xf8rsm\xe5let er ikke hvem som har rett i AI-debatten.
Det reelle sp\xf8rsm\xe5let er hvem som klarer \xe5 skape reell verdi av den.`},{id:"ai-dommekraft-bias-01",tittel:"Når AI gir råd – hvem stoler vi egentlig på?",teaser:"AI fjerner ikke menneskelig bias, den kan forsterke den. Refleksjoner rundt hvordan vi tolker og bruker AI-anbefalinger i kommersielle beslutninger.",bildeUrl:"/images/ai-judgement.jpg",dato:"2026-03-16",visningsDato:"16.03.2026",kategori:"AI / KI",link:"https://www.linkedin.com/in/mariusottesen/recent-activity/all/",innhold:`Denne uken deltar jeg p\xe5 NOVA Day. Mange av samtalene der handler naturlig nok om hva AI kan gj\xf8re for virksomheter. Det er viktig, men en problemstilling jeg mener f\xe5r for lite oppmerksomhet, er hvordan mennesker reagerer n\xe5r systemene begynner \xe5 gi r\xe5d.

AI fjerner ikke menneskelig bias, men kan heller forsterke den.

En del av forklaringen ligger i hvordan generativ AI faktisk fungerer. Modellene svarer ikke fordi de “vet”. De beregner statistisk hva som er det mest sannsynlige neste ordet basert p\xe5 store mengder treningsdata og konteksten de f\xe5r. Det betyr at modellene speiler m\xf8nstre i dataene og p\xe5virkes av hvordan vi rammer inn sp\xf8rsm\xe5let.

Men bias oppst\xe5r ikke bare i modellen. Den oppst\xe5r ogs\xe5 i m\xf8tet mellom modell og menneske.

Forskning fra blant annet MIT Sloan, Harvard Business School og Stanford peker p\xe5 flere mekanismer som kan svekke beslutningskvaliteten n\xe5r AI brukes i praksis:

<strong>Automation bias</strong>
N\xe5r mennesker legger for stor vekt p\xe5 anbefalingen fra systemet, fordi den kommer fra en modell og oppleves objektiv.

<strong>Algorithm aversion</strong>
N\xe5r mennesker mister tilliten til modellen etter \xe9n synlig feil, og deretter avviser den helt, selv om den over tid kan v\xe6re bedre enn magef\xf8lelsen alene.

<strong>Databias</strong>
Hvis datagrunnlaget er skjevt, vil ogs\xe5 analysene bli det.

<strong>Confirmation bias</strong>
Vi tolker gjerne AI-svar p\xe5 en m\xe5te som bekrefter det vi allerede tror.

I praksis ser jeg dette tydelig i kommersielle situasjoner. En AI-modell kan analysere salgsdata og foresl\xe5 hvilke kunder som b\xf8r prioriteres, hvilke tilbud som b\xf8r f\xf8lges opp eller hvilke kontoer som har st\xf8rst vekstpotensial. Selgeren eller lederen kan gj\xf8re to feil ved enten f\xf8lge anbefalingen blindt, eller ignorere den helt.

F\xf8lges anbefalingen ukritisk, kan skjevheter i data eller modell forsterkes. Hvis den avvises fordi den “f\xf8les feil”, mister man samtidig verdien av m\xf8nstergjenkjenningen modellen faktisk kan tilf\xf8re.

Det er her ledelsesutfordringen ligger.

Den modne organisasjonen ber ikke folk velge mellom teknologi og skj\xf8nn. Den bygger prosesser der anbefalinger testes, modellens begrensninger forst\xe5s, og analyse kombineres med d\xf8mmekraft. Det bygges med andre ord en kultur der mennesker fortsatt stiller sp\xf8rsm\xe5l, ogs\xe5 n\xe5r systemet virker sikkert. Det er f\xf8rst da AI blir beslutningsst\xf8tte i ordets egentlige forstand.

For meg er dette noe av det mest interessante ved AI akkurat n\xe5. Ikke bare hva modellen kan produsere, men hva som skjer med vurderingsevnen v\xe5r n\xe5r svaret kommer raskt, ser overbevisende ut og er pakket inn med h\xf8y selvtillit.

I arbeidet med \xe5 bygge og teste egne AI-modeller og verkt\xf8y merker jeg dette tydelig. Sm\xe5 justeringer i data, kontekst eller instruksjoner kan gi ulike anbefalinger. Det minner meg stadig om at modellen gir forslag og ikke fasitsvar. Testing er en n\xf8dvendighet fortl\xf8pende.`},{id:"ai-ready-virksomhet-01",tittel:"Når er en virksomhet AI-ready?",teaser:"Mange investerer i AI, men færre forbereder organisasjonen. En gjennomgang av de fire områdene som avgjør om en virksomhet er rigget for å hente ut verdi fra teknologien.",bildeUrl:"/images/ai-ready.jpg",dato:"2026-03-09",visningsDato:"09.03.2026",kategori:"AI / KI",link:"https://www.linkedin.com/in/mariusottesen/recent-activity/all/",innhold:`Mange virksomheter sier de jobber med AI. F\xe6rre har forberedt organisasjonen p\xe5 hva det inneb\xe6rer. 

Teknologien er tilgjengelig for alle. Den virkelige forskjellen ligger i hvordan virksomheten organiserer beslutninger, data og ansvar rundt den.

McKinsey peker p\xe5 at mange selskaper investerer tungt i AI, men f\xe5r begrenset effekt fordi organisasjonen ikke er rigget for \xe5 bruke dem. Problemet er sjelden modellen. Det er strukturen rundt den.

MIT Sloan beskriver at mange organisasjoner starter AI-arbeidet med teknologi. De som lykkes, starter med beslutninger. F\xf8rst n\xe5r man vet hvilke beslutninger som skal forbedres, gir det mening \xe5 bygge AI-l\xf8sninger.

Et kommersielt eksempel illustrerer poenget: En AI-modell kan analysere salgsdata og foresl\xe5 hvilke kunder som b\xf8r prioriteres. Den kan rangere sannsynlighet for kj\xf8p, margin og neste handling. Men dersom organisasjonen ikke har avklart hvem som eier beslutningen, hvilke kriterier som gjelder eller hvordan anbefalingen skal brukes, blir resultatet ofte mer analyse og ikke bedre beslutninger.

Gjennom arbeidet med generativ AI ser jeg fire omr\xe5der som avgj\xf8r om en virksomhet er AI-ready:

<strong>1. Datagrunnlaget</strong>
AI forsterker kvaliteten p\xe5 input. Gode data gir bedre analyser. Fragmenterte eller ustrukturerte data gir bare raskere feil. I mange kommersielle organisasjoner ligger n\xf8kkelinformasjon spredt i CRM, presentasjoner, e-poster og notater. F\xf8r AI kan gi verdi, m\xe5 dette struktureres.

<strong>2. Beslutningsstruktur</strong>
AI fungerer best n\xe5r beslutninger er tydelig definert. Hvem eier vurderingen? Hvilke kriterier gjelder? Hva er mandatet? Uten dette risikerer man at modellen leverer anbefalinger som ingen egentlig eier.

<strong>3. Kompetanse</strong>
Verkt\xf8y alene skaper ikke verdi. Ledere og medarbeidere m\xe5 forst\xe5 hvordan modellene fungerer, hvilke begrensninger de har og hvordan output vurderes kritisk. Det handler ikke om \xe5 bli teknolog. Det handler om \xe5 utvikle AI-d\xf8mmekraft.

<strong>4. Ansvarsforankring</strong>
Jo mer AI p\xe5virker beslutninger, desto viktigere blir styring. Hvem er ansvarlig dersom modellen gir en feil anbefaling? Hvem justerer konteksten eller stopper bruken? Dette er ledelsessp\xf8rsm\xe5l, ikke teknologisp\xf8rsm\xe5l.

Yu beskriver i 5A-modellen hvordan kravene til organisasjon og kompetanse \xf8ker n\xe5r vi beveger oss fra access og assistants til applications, automation og agents. Jo mer autonomi vi gir systemene, desto viktigere blir strukturen rundt dem.

Derfor er sp\xf8rsm\xe5let ikke bare om en virksomhet bruker AI. Det er om organisasjonen er rigget for \xe5 bruke den.

For virksomheter som vil bevege seg fra AI-eksperimentering til verdiskaping, bist\xe5r jeg gjennom Marius Ottesen Consulting med strategisk avklaring og praktisk implementering i samarbeid med tekniske spesialister.

👉 I neste innlegg ser jeg p\xe5 hvordan organisasjoner bygger AI-kompetanse i praksis, uten \xe5 bli avhengige av et stort internt tech-milj\xf8.`},{id:"ai-arkitektur-beslutningsstotte-01",tittel:"Jeg bygger AI-arkitektur for beslutningsstøtte",teaser:"Hvordan generativ AI kan strukturere komplekse problemstillinger og gi kommersielle ledere et bedre beslutningsgrunnlag gjennom AI-dekonstruksjon.",bildeUrl:"/images/analyse.gif",dato:"2026-03-05",visningsDato:"05.03.2026",kategori:"AI / KI",link:"https://www.linkedin.com/in/mariusottesen/recent-activity/all/",innhold:`Som kommersiell leder har jeg flere ganger deltatt i strategiprosesser der m\xe5let er \xe5 koble ambisjoner til faktisk gjennomf\xf8ring. Slike prosesser involverer ofte mange ansatte, eksterne konsulenter og fagmilj\xf8er med ulike perspektiver og agendaer. Resultatet kan bli omfattende analyser og presentasjoner f\xf8r man forst\xe5r hva virksomheten m\xe5 gj\xf8re annerledes.

Utfordringen er velkjent: Strategien er tydelig formulert, men koblingen til operativ handling er langt svakere. Strategidokumenter, KPI-strukturer, salgsprosesser, anbudsdokumenter og regulatoriske krav skaper store informasjonsmengder som er krevende \xe5 analysere systematisk.

Jeg arbeider derfor med en metode for \xe5 bruke generativ AI til \xe5 strukturere og analysere slike problemstillinger mer effektivt. Den grunnleggende logikken er enkel:

<strong>Dokumenter og data → AI-dekonstruksjon → strategisk innsikt → beslutningsst\xf8tte</strong>

AI analyserer tekst, struktur og sammenhenger, identifiserer mulige gap og formulerer hypoteser som gir ledelsen et bedre utgangspunkt for vurderinger og beslutninger.

Gjennom vibe-coding og verkt\xf8y som GPT-4o, Claude, Gemini, Cursor og Streamlit har jeg utviklet et teknisk fundament som gj\xf8r det mulig \xe5 bygge flere typer beslutningsverkt\xf8y p\xe5 samme arkitektur.

<strong>Fra id\xe9 til verkt\xf8y</strong>
Den samme analysemodellen kan brukes p\xe5 flere omr\xe5der innen kommersiell ledelse:

• <strong>Strategi og gjennomf\xf8ring</strong>
AI kan analysere strategidokumenter opp mot operative planer, KPI-strukturer og sales dashboards for \xe5 identifisere hvor strategien bryter sammen i overgangen til drift.

• <strong>Commercial excellence og salg</strong>
Dynamiske battlecards kan genereres ved \xe5 analysere konkurrentinformasjon og koble dette til egne verdiforslag, slik at salgsteamet selger kommersiell verdi fremfor rene produktfunksjoner.

• <strong>Anbud og RFP-prosesser</strong>
Store kravdokumenter kan dekonstrueres slik at organisasjonen raskt identifiserer hvilke krav som krever strategiske svar.

• <strong>Governance og compliance</strong>
AI kan overv\xe5ke regulatoriske endringer og koble disse mot interne prosedyrer slik at virksomheten raskere identifiserer hva som m\xe5 oppdateres.

• <strong>Onboarding og kapabilitetsutvikling</strong>
Samme logikk kan brukes til \xe5 strukturere kommersielle rammeverk slik at nye ansatte raskere forst\xe5r hvordan virksomheten arbeider med strategi, salg og prestasjonsstyring.

Et konkret eks. er l\xf8sningen "The Predictive Sales Coach", hvor selgere trener mot en dynamisk virtuell kunde basert p\xe5 DISC og konkrete salgsfaser, mens systemet analyserer dialogen og gir forbedringspunkter for \xe5 \xf8ke win-rate i reelle kundem\xf8ter.

Fellesnevneren er arkitekturen bak og hvordan Gen. AI kan analysere komplekse problemstillinger, identifisere strukturelle gap og gi ledere et bedre beslutningsgrunnlag.

👉 Jeg arbeider med \xe5 utvikle og anvende slike l\xf8sninger i praksis. Dersom du er nysgjerrig p\xe5 hvordan dette kan brukes i egen virksomhet tar jeg gjerne en prat.`},{id:"ai-dommekraft-kontekst-01",tittel:"AI-dømmekraft i praksis – fra prompt til kontekst",teaser:"Hvorfor context engineering – ikke bare prompt engineering – avgjør kvaliteten på AI-svar i praksis.",bildeUrl:"/images/context.png",dato:"2026-03-02",visningsDato:"02.03.2026",kategori:"AI / KI",link:"https://www.linkedin.com/in/mariusottesen/recent-activity/all/",innhold:`I arbeidet mitt med generativ AI har \xe9n ting blitt tydelig: <strong>Kvaliteten p\xe5 svaret avgj\xf8res lenge f\xf8r modellen begynner \xe5 skrive.</strong> Sm\xe5 justeringer i kontekst, instruksjoner eller parametere kan gi markant forskjell i presisjon og struktur, enten man bygger egne GPT-er med dokumenter eller bruker standardmodeller i \xe5pne arbeidsprosesser.

Vi snakker ofte om prompt engineering. I praksis er det <strong>context engineering</strong> som avgj\xf8r kvaliteten. Et AI-svar p\xe5virkes ikke bare av selve sp\xf8rsm\xe5let, men av systeminstruksjoner, tidligere dialog, dokumenter som hentes inn, modellvalg og parametere som temperatur og top-p. Temperatur styrer balansen mellom kreativitet og konsistens. I id\xe9utvikling kan variasjon v\xe6re nyttig. I kommersielle beslutningsprosesser kan det v\xe6re en risikofaktor.

Struktureringen av selve prompten har ogs\xe5 stor betydning. En enkel formel l\xf8fter kvaliteten betydelig: persona, kontekst, oppgave, format, eksempler og tone. Forskjellen mellom ustrukturert og strukturert input er ofte dramatisk.

Det viktigste skillet g\xe5r likevel mellom \xe5 optimalisere \xe9n interaksjon og \xe5 designe hele beslutningsmilj\xf8et. Prompt engineering forbedrer svaret her og n\xe5. Context engineering definerer rammene modellen arbeider innenfor over tid.

Hallusinasjoner illustrerer hvorfor dette er kritisk. Modellen optimaliserer for sannsynlig tekst, ikke sannhet. N\xe5r konteksten er uklar eller problemformuleringen upresis, kan svaret fremst\xe5 overbevisende og samtidig v\xe6re feil. I en kommersiell sammenheng kan konsekvensen v\xe6re betydelig. En modell kan analysere pipeline og foresl\xe5 neste beste handling. Den kan vekte sannsynlighet og margin. Men uten tydelig definert strategisk kontekst kan anbefalingen v\xe6re teknisk presis og forretningsmessig feil.

MIT Sloan og McKinsey peker p\xe5 det samme: Organisasjoner som lykkes med AI, kombinerer teknologi med tydelig menneskelig vurdering og ansvar. Modellen kan analysere m\xf8nstre. Den kan ikke forst\xe5 strategisk retning eller kontekst uten at vi definerer den.

AI-d\xf8mmekraft handler derfor om mer enn \xe5 mestre et verkt\xf8y. Det handler om \xe5 strukturere beslutningsgrunnlaget, designe informasjonsrammen modellen arbeider innenfor, forst\xe5 begrensningene og vurdere output kritisk f\xf8r implementering. Yu beskriver i 5A-modellen hvordan kravene til kompetanse \xf8ker jo n\xe6rmere vi beveger oss mot automation og agents. McKinsey peker p\xe5 det samme: Teknologien er tilgjengelig for mange. Evnen til \xe5 integrere den i beslutningsprosesser er det som differensierer. Strategisk sett er det context engineering som gir varig konkurransefortrinn.

For virksomheter som \xf8nsker \xe5 bevege seg fra AI-diskusjon til faktisk verdiskaping, bist\xe5r jeg gjennom mitt selskap med b\xe5de strategisk avklaring og praktisk implementering, i samarbeid med tekniske spesialister der det er n\xf8dvendig.`},{id:"strategi-ai-master-01",tittel:"Strategi uten AI er som å se bakover i speilet mens du kjører fremover",teaser:"AI er ikke lenger «nice to have» — det er en strategisk nødvendighet. Refleksjoner fra Oslo Business Forum og beslutningen om å melde seg på masterkurset Generativ AI for Business ved BI.",bildeUrl:"/images/strategi-ai.jfif",dato:"2025-11-11",visningsDato:"11.11.2025",kategori:"AI / KI",link:"https://www.linkedin.com/in/mariusottesen/recent-activity/all/",innhold:`For noen uker siden deltok jeg p\xe5 Oslo Business Forum 2025. Et gjennomg\xe5ende tema fra scenen var klart: <strong>AI er ikke lenger et \xabnice to have\xbb — det er en strategisk n\xf8dvendighet.</strong> 🤖

🧠 <em>Budskapet jeg s\xe6rlig tok med meg var:</em>
• Strategi m\xe5 utvikles i takt med teknologi, ikke i etterkant.
• De virksomhetene som klarer \xe5 kombinere strategisk tenkning med ny teknologi, vil v\xe6re morgendagens vinnere.
• AI fungerer ikke bare som et verkt\xf8y, men som en katalysator for innovasjon og konkurransekraft.

🎯 Jeg har lang erfaring med strategi, strategisk ledelse og utvikling. Blant annet har jeg en Executive Master of Management fra Handelsh\xf8yskolen BI med fordypning i strategisk ledelse og strategisk kommunikasjon.
I jobb har ansvar for strategisk ledelse, utvikling og forretningsmessig vekst og resultater v\xe6rt en r\xf8d tr\xe5d.
AI, derimot, er et omr\xe5de jeg ikke har samme bakgrunn i — men som jeg ikke har r\xe5d til \xe5 ignorere.

Derfor bes\xf8kte jeg BI sin stand p\xe5 OBF, og i forrige uke hadde jeg en inspirerende samtale med en r\xe5dgiver om hvordan jeg kan bygge denne kompetansen videre. <strong>Resultatet?</strong>
👉 Jeg har meldt meg p\xe5 masterkurset \xab<em>Generativ AI for Business</em>\xbb med oppstart i februar.

Ikke for studiepoengene. Men fordi jeg \xf8nsker \xe5 utforske hvordan AI kan brukes strategisk for \xe5 drive innovasjon, \xe5pne nye forretningsmuligheter og styrke operasjonell effektivitet. 📈
Og fordi jeg oppriktig tror at <strong>det aldri er for sent \xe5 utvikle seg faglig</strong> — ambisjon handler ikke bare om \xe5 prestere mer, men \xe5 l\xe6re mer. De som evner \xe5 fornye seg, st\xe5r sterkest i morgendagens konkurranse. 🚀

📚 B\xf8kene er allerede bestilt — n\xe5 gleder jeg meg til \xe5 l\xe6re mer og "tjuvstarte" studiet, og til \xe5 kombinere strategisk erfaring med ny teknologi.

Hva med deg? Ser du AI som en strategisk game-changer i din virksomhet der du aktivt tar grep — eller som noe du "tar n\xe5r det kommer"? Heng deg p\xe5, da! 💪

📌 <em>PS. For ordens skyld: Bildet er AI-generert.</em>`},{id:"ai-learning-google-skills-01",tittel:"Det er fascinerende hvor enkelt det har blitt å tilegne seg AI-kompetanse gjennom helt nye og moderne metoder",teaser:"Anbefaling av Googles læringsunivers for AI-kompetanse: Google Skills og Google Cloud YouTube-serier, med konkrete moduler å starte med.",bildeUrl:"/images/ai-learning.jfif",dato:"2025-11-27",visningsDato:"27.11.2025",kategori:"AI / KI",link:"https://www.linkedin.com/in/mariusottesen/recent-activity/all/",innhold:`Det er fascinerende hvor enkelt det har blitt \xe5 tilegne seg AI-kompetanse gjennom helt nye og moderne metoder. <strong>Google har samlet et imponerende l\xe6ringsunivers som gj\xf8r det mulig \xe5 bygge solid AI-kompetanse, uavhengig av teknisk bakgrunn.</strong>

To plattformer skiller seg spesielt ut:

✅ <strong>Google Skills</strong> – en komplett l\xe6ringsplattform med kurs, praktiske lab-oppgaver, progresjonssporing og sertifiseringer du kan vise direkte p\xe5 LinkedIn.

✅ <strong>Google Cloud YouTube-seriene</strong> – korte, pedagogiske videoer som gir et solid fundament f\xf8r du g\xe5r i gang med de mer praktiske delene.

Jeg har n\xe5 fullf\xf8rt mitt f\xf8rste kurs, "<strong>Gen AI: Beyond the Chatbot</strong>", og legger ved badgen her i posten. Dette er tydelige, faglig sterke kurs – ikke noe "low-level brevkurs", men gjennomf\xf8rt, relevant og praktisk l\xe6ring.

Inspirasjonen til \xe5 utforske dette kom fra delingene til Morten Johnsen som virkelig \xe5pnet \xf8ynene mine for bredden av temaer og muligheter i dette "AI-universet". Tusen takk, Morten!

<strong>Min anbefaling:</strong>

Disse YouTube-modulene er et effektivt sted \xe5 starte, og ga meg et godt rammeverk f\xf8r jeg gikk tettere inn i Google Skills-kursene:

🎥 Introduction to Generative AI – del av AI Essentials
🎥 Introduction to Large Language Models – grunnmodul f\xf8r Vertex AI
🎥 Introduction to Responsible AI – obligatorisk i alle l\xf8p
🎥 Introduction to AI Agents – utforsker hvordan intelligente agent-systemer bygger og automatiserer handlinger i komplekse milj\xf8er
🎥 Intro to Generative AI training course – tydelig oversikt over l\xe6ringsl\xf8pet
🎥 Introduction to Vertex AI Studio – nyttig for de praktiske labene

For min del er dette ogs\xe5 perfekt oppvarming f\xf8r jeg starter p\xe5 <strong>Masterprogrammet "Generative AI for Business"</strong> ved BI i februar. Men f\xf8rst st\xe5r flere AI-relaterte kurs fra Google Skills-universet for tur.

For deg som vil utforske mulighetene:
👉 https://lnkd.in/dM7WrkEe`},{id:"ai-ikke-intelligent-01",tittel:"AI er ikke intelligent — det er vi som må være det",teaser:"AI skaper verdi bare når vi forstår begrensningene. Refleksjoner fra BI-webinaret om når AI passer og når menneskelig dømmekraft må ta over.",bildeUrl:"/images/ikke-intelligent.jfif",dato:"2025-12-11",visningsDato:"11.12.2025",kategori:"AI / KI",link:"https://www.linkedin.com/in/mariusottesen/recent-activity/all/",innhold:`Refleksjoner fra g\xe5rsdagens BI-webinar \xabMore Than Words: How to Know How AI Can (and Can't) Help You\xbb

G\xe5rsdagens webinar fra BI med Auke Hunneman og Jan Ketil traff et viktig poeng:
<strong>AI skaper stor verdi – men bare n\xe5r vi forst\xe5r begrensningene.</strong>

Og jeg fikk erfare det selv, <em>samme dag</em>:

Jeg ba en AI-modell lage et bilde av meg i en kontorsetting. Resultatet?
Det ble "meg"… men ikke meg.
Noe var off. Ansiktet, uttrykket, formen – alt var liksom nesten riktig, men ikke riktig nok. Og nettopp dette er kjernen i hva mange som bruker AI b\xf8r forst\xe5 og utfordre:

<strong>1️⃣ AI predikerer – den forst\xe5r ikke</strong>
LLM-er (og bildegeneratorer) gjetter det mest sannsynlige resultatet basert p\xe5 enorme mengder data. De vet ikke hvordan jeg ser ut. De forst\xe5r ikke identitet

Derfor blir det ofte noe som ligner, men ikke treffer.

<strong>2️⃣ AI gir d\xe5rlig ROI n\xe5r problemet ikke passer</strong>
Det skilles mellom tre typer utfordringer:
• <strong>Problems</strong> (forutsigbart): prognoser → AI er sterk
• <strong>Secrets</strong> (skjulte m\xf8nstre): kanaldrivere → AI + fagkunnskap
• <strong>Mysteries</strong> (uforutsigbart): tverrfaglige kampanjer → mennesker m\xe5 koordinere

\xc5 lage et ekte bilde av meg?
Det faller mellom Secret og Mystery:
AI har ikke nok info → resultatet blir usikkert → mennesket m\xe5 evaluere

<strong>3️⃣ Cynefin-rammeverket</strong>
<strong>Clear:</strong> Oppgaver med fasit → automatiser
<strong>Complicated:</strong> Analys\xe9rbart, men krevende → AI + eksperter
<strong>Complex:</strong> M\xe5 pr\xf8ves ut → eksperiment\xe9r
<strong>Chaotic:</strong> krise, liten tid → handle raskt
<strong>Aporetic:</strong> uklart problem → stopp opp og still nye sp\xf8rsm\xe5l

\xc5 f\xe5 AI til \xe5 "forst\xe5 Marius"?
→ Aporetic + Secret: Det finnes ingen fasit for ansiktet mitt i modellen

<strong>4️⃣ Intelligens er mer enn ord – og mer enn pikslere</strong>
AI kan levere tekst og bilder. Men den kan ikke:
– lese rommet
– forst\xe5 motivasjon
– bygge team
– skape kultur
– kjenne meg igjen p\xe5 et bilde
Her er mennesket overlegent.

<strong>5️⃣ Tillit avgj\xf8r resultatet</strong>
N\xe5r folk ser et bilde som "skal forestille meg" men ikke ligner, mister de tillit. Samme gjelder i organisasjoner:
Uten tillit til b\xe5de tall og hverandre stopper samarbeid – uansett hvor avansert AI-modellen er

<strong>Hva betyr dette for ledere – og for alle som bruker AI?</strong>
Det er en <strong>kjernkompetanse</strong> \xe5:
• forst\xe5 n\xe5r AI passer
• forst\xe5 n\xe5r menneskelig d\xf8mmekraft m\xe5 ta over
• kombinere data + mennesker for reell verdi
• utfordre AI-resultater som ikke stemmer

<strong>Hvis AI ikke kjenner igjen ansiktet mitt – hvorfor skulle jeg stole blindt p\xe5 det den foresl\xe5r?</strong>`},{id:"alle-snakker-ai-01",tittel:"Alle snakker om AI – men hva er det egentlig vi driver med?",teaser:"Innledning til en serie om hva AI faktisk betyr i praksis — ikke bare som teknologi, men som ledelses- og forretningsdisiplin.",bildeUrl:"/images/snakk-ai.jfif",dato:"2025-12-22",visningsDato:"22.12.2025",kategori:"AI / KI",link:"https://www.linkedin.com/in/mariusottesen/recent-activity/all/",innhold:`\xc5ret som har g\xe5tt har – i likhet med mange andre – v\xe6rt preget av h\xf8yt tempo, spennende opplevelser, store forventninger og raske teknologiske endringer. For min del har det ogs\xe5 gitt rom for refleksjon, faglig fordypning og nye muligheter, s\xe6rlig innen AI og strategi. Denne fordypningen tar blant annet utgangspunkt i rammeverk og pensumlitteratur fra masterkurset <em>Generative AI for Business</em> ved BI, kombinert med praktisk utforsking av ulike AI-modeller og bruksomr\xe5der.

<strong>Dette innlegget markerer starten p\xe5 en serie</strong> der jeg i 2026 vil dele refleksjoner, rammeverk og erfaringer rundt hva AI faktisk betyr i praksis – ikke bare som teknologi, men som ledelses- og forretningsdisiplin.

Bakgrunnen er enkel: AI omtales ofte som enten et mirakelverkt\xf8y eller som noe diffust og teknisk. Samtidig opplever jeg at mange ledere – helt naturlig – reduserer AI til det de ser i hverdagen: ChatGPT, Copilot, litt automatisering. Det gir en f\xf8lelse av \xe5 v\xe6re "i gang", men ogs\xe5 en usikkerhet rundt hva dette egentlig betyr strategisk.

Pensumboken "Generative AI for Business - a guide book" av Shubin Yu har v\xe6rt et godt utgangspunkt for \xe5 rydde i dette. Ikke fordi den gir alle svar, men fordi den setter AI inn i en tydelig forretnings- og lederkontekst: verdiskaping, beslutninger, organisasjon, risiko og mennesker.

Samtidig har arbeidet med AI f\xe5tt meg til \xe5 se tidligere erfaringer i et nytt lys. Mye av det vi tidligere kalte IoT, sensorteknologi, automatisering og robotisering, fremst\xe5r n\xe5 som deler av samme \xf8kosystem – der AI fungerer som et kraftig akselererende lag.

Jeg h\xe5per denne serien kan bidra til refleksjon, diskusjon – og noen n\xf8dvendige erkjennelser. For meg er dette ogs\xe5 en spennende delingsreise, der jeg utforsker et fagomr\xe5de som fortsatt er nytt for meg, men som jeg opplever som sv\xe6rt inspirerende \xe5 bygge egen kompetanse innen. Ambisjonen er b\xe5de \xe5 l\xe6re videre selv, og forh\xe5pentligvis bidra med nyttig innsikt for andre.

Dialogen tar jeg gjerne her p\xe5 LinkedIn, eller over en uformell kaffesamtale, med andre som er nysgjerrige p\xe5 hvordan AI faktisk kan skape verdi i praksis.

Dette blir mitt siste innlegg i 2025. Takk for i \xe5r – jeg h\xe5per \xe5ret har gitt rom for b\xe5de utvikling, l\xe6ring og gode samtaler. Vi fortsetter i 2026.`},{id:"ai-foles-nytt-01",tittel:"AI føles nytt – men dette er ikke starten på historien",teaser:"AI oppleves som nytt, men er kulminasjonen av tiår med utvikling. Ser fremover mot rammeverket De fem A-ene (Access til Agents).",bildeUrl:"/images/nytt.jfif",dato:"2026-01-05",visningsDato:"05.01.2026",kategori:"AI / KI",link:"https://www.linkedin.com/in/mariusottesen/recent-activity/all/",innhold:`I mitt siste innlegg i 2025 stilte jeg sp\xf8rsm\xe5let: <em>Alle snakker om AI – men hva er det egentlig vi driver med?</em>

<strong>Dette innlegget er neste steg i samme serie.</strong> I 2026 vil jeg dele refleksjoner, rammeverk og erfaringer rundt hva AI faktisk betyr i praksis – med utgangspunkt i pensumboken <em>Generative AI for Business</em> av Shubin Yu, som inng\xe5r i masterstudiet mitt, kombinert med egne erfaringer og praktiske observasjoner.

Julen har gitt rom for roligere dager, refleksjon og selvstudier. For min del har denne perioden v\xe6rt en anledning til \xe5 fordype meg ytterligere i AI og strategi – b\xe5de gjennom fagstoffet i studiet og praktisk utforsking av ulike AI-modeller og bruksomr\xe5der.

AI oppleves som nytt for mange, men er i realiteten kulminasjonen av flere ti\xe5r med teknologisk utvikling. Allerede p\xe5 1950–60-tallet ble begrepet kunstig intelligens introdusert. Siden har vi v\xe6rt gjennom flere b\xf8lger – fra ekspertsystemer og nevrale nettverk, via machine learning, til deep learning og dagens generative modeller.

Gjennombruddet rundt 2020–2023 markerte derfor ikke starten p\xe5 AI, men et tydelig skifte i tilgjengelighet og anvendelse. Store spr\xe5kmodeller gjorde teknologien praktisk, skalerbar og relevant i en forretningskontekst.

Samtidig opplever jeg at mange organisasjoner spriker – noe boken ogs\xe5 adresserer. Vi tester verkt\xf8yene og ser rask nytte, men mangler ofte den strategiske forst\xe5elsen: Hva er egentlig nytt n\xe5, og hva kreves for \xe5 skape varig verdi?

I denne serien vil jeg bruke boken som et strukturert utgangspunkt og trekke ut hovedlinjene videre langs noen tydelige spor. Blant annet vil jeg se n\xe6rmere p\xe5:
• overgangen fra enkel AI-bruk til strategisk transformasjon
• betydningen av data, kontekst og egne informasjonskilder
• hva som kreves for \xe5 implementere AI i praksis – fra utforskning til skalering
• hvordan AI p\xe5virker ledelse, mennesker og kommersielle prosesser
• samt etikk, governance og ansvar

Der det er naturlig, vil jeg ogs\xe5 koble dette til egne erfaringer fra tidligere roller – s\xe6rlig innen IoT, automatisering, robotisering og datadrevne \xf8kosystemer – som jeg i dag ser tydeligere i sammenheng med AI.

<strong>Neste innlegg kommer p\xe5 onsdag</strong>, der jeg g\xe5r n\xe6rmere inn p\xe5 et sentralt rammeverk fra boken: <strong>De fem A-ene (fra Access til Agents)</strong> – og hvorfor de fleste organisasjoner stopper tidligere enn de tror.

Jeg h\xe5per flere vil dele egne erfaringer, perspektiver og sp\xf8rsm\xe5l underveis – enten her i kommentarfeltet, i direkte dialog, eller over en uformell kaffekopp. Dette er et fagfelt der vi alle fortsatt l\xe6rer. Bli med p\xe5 min lille \xabreise\xbb.`},{id:"access-til-agents-01",tittel:"Fra Access til Agents – hvorfor mange stopper tidlig",teaser:"Rammeverket De fem A-ene: hvordan AI tas i bruk i virksomheter i dag, og hvorfor mange stopper tidligere enn de tror.",bildeUrl:"/images/access-agents.jfif",dato:"2026-01-08",visningsDato:"08.01.2026",kategori:"AI / KI",link:"https://www.linkedin.com/in/mariusottesen/recent-activity/all/",innhold:`I forrige innlegg skrev jeg om at AI ofte oppleves som nytt, selv om det i realiteten bygger p\xe5 flere ti\xe5r med teknologisk utvikling. Dette innlegget er del av AI-serien jeg deler denne vinteren, der jeg utforsker hva AI faktisk betyr i praksis for ledelse, organisasjoner og verdiskaping.

Her ser jeg n\xe6rmere p\xe5 <em>hvordan AI tas i bruk i mange virksomheter i dag</em>, og hvorfor mange stopper tidligere enn de selv tror.

I pensumboken <em>Generative AI for Business</em> introduserer Shubin Yu et rammeverk jeg synes er spesielt nyttig for \xe5 rydde i dette: <strong>De fem A-ene for anvendt generativ AI i arbeidslivet</strong>. Rammeverket beskriver et spekter av modenhetsniv\xe5er – fra enkel bruk av AI til mer integrerte og autonome systemer.

Forenklet kan niv\xe5ene forst\xe5s slik, med eksempler mange vil kjenne seg igjen i:

<strong>Access</strong>
Bruk av generelle AI-verkt\xf8y som ChatGPT, Gemini eller Copilot for \xe5 skrive, oppsummere og analysere. Verdien er ofte rask og synlig, men prim\xe6rt individuell.

<strong>Assistants</strong>
Mer tilpassede assistenter med rolle- eller virksomhetskontekst, for eksempel en salgs- eller HR-assistent som kjenner interne data og arbeidsm\xe5ter.

<strong>Application</strong>
AI bygges inn i konkrete l\xf8sninger for bestemte oppgaver, som beslutningsst\xf8tte, analyse eller kundedialog i avgrensede systemer.

<strong>Automation</strong>
AI kobles til arbeidsflyt p\xe5 tvers av systemer, slik at prosesser henger sammen fra start til slutt – med tydelige effektivitets- og skaleringsgevinster.

<strong>Agents</strong>
Mer autonome systemer som kan planlegge, prioritere og utf\xf8re oppgaver innenfor definerte rammer, med klart ansvar og kontroll.

Det avgj\xf8rende poenget er ikke niv\xe5ene i seg selv, men overgangen mellom dem. Og nettopp her stopper mange.

I mange AI-milj\xf8er i sosiale medier ser jeg et sterkt fokus p\xe5 \xe5 "l\xe6re mange modeller" eller beherske flest mulig AI-verkt\xf8y. Det kan v\xe6re nyttig p\xe5 Access-niv\xe5, men gir begrenset verdi videre opp i pyramiden. Jo h\xf8yere man beveger seg, desto mindre handler det om verkt\xf8y – og desto mer om struktur, integrasjon, styring og ansvar.

N\xe5r AI kobles til data, prosesser og beslutninger, g\xe5r man fra individuell effektivisering til organisatorisk kjernekompetanse. Det er f\xf8rst da AI blir virkelig strategisk.

Derfor er ogs\xe5 AI og strategisk bruk og implementering i liten grad et IT-prosjekt. Det er et lederansvar – p\xe5 linje med andre strategiske valg knyttet til organisering, risiko og verdiskaping.`},{id:"fra-verktoy-til-system-01",tittel:"Fra verktøy til system – API-er, integrasjon og ledervalg",teaser:"Verdien av AI skjer først når den kobles til systemer og prosesser via integrasjon — ikke som frittstående verktøy. API-er og ledervalg.",bildeUrl:"/images/til-system.jfif",dato:"2026-01-12",visningsDato:"12.01.2026",kategori:"AI / KI",link:"https://www.linkedin.com/in/mariusottesen/recent-activity/all/",innhold:`I forrige innlegg i denne AI-serien skrev jeg om <em>De fem A-ene</em> og hvorfor mange organisasjoner stopper tidligere i AI-bruken enn de selv tror. Dette innlegget bygger videre p\xe5 samme rammeverk, og ser n\xe6rmere p\xe5 hva som skiller enkel AI-bruk fra mer moden og integrert anvendelse.

Et begrep mange har h\xf8rt om, men f\xe5 setter inn i en strategisk sammenheng, er <strong>API - Application Programming Interface</strong>. I pensumboken <em>Generative AI for Business</em> beskrives et API enkelt som en bro som lar systemer snakke sammen. Det h\xf8res teknisk ut, men konsekvensene er f\xf8rst og fremst organisatoriske.

S\xe5 lenge AI brukes som et frittst\xe5ende verkt\xf8y, skjer verdiskapingen hovedsakelig p\xe5 individniv\xe5. Man bruker ChatGPT, Copilot eller lignende, opplever rask nytte og f\xe5r en f\xf8lelse av \xe5 v\xe6re \xabi gang\xbb. Tallene viser imidlertid et tydelig paradoks: Millioner bruker generativ AI, mens bare en liten andel virksomheter har integrert teknologien i kjerneprosessene sine. Studier ansl\xe5r samtidig at rundt 95 % av AI-piloter ikke har gitt m\xe5lbar \xf8konomisk gevinst, og kan tolkes som at AI er overhypet. Jeg mener det er en feilslutning.

Dette m\xf8nsteret er godt dokumentert i analyser fra bla. MIT, Gartner og Forrester: AI skaper verdi f\xf8rst n\xe5r den flyttes fra eksperimenter til drift. Manglende avkastning handler sjelden om svak teknologi, men om at organisasjonen ikke er rigget for \xe5 ta den i bruk. Bla. viser Itera til at mange organisasjoner stopper p\xe5 <strong>Access- eller Assistants-niv\xe5</strong>.

F\xf8rst n\xe5r AI kobles via API-er til virksomhetens systemer, data og prosesser at det skjer et reelt skifte – fra \xe5 <em>bruke AI</em> til \xe5 <em>bygge med AI</em>. Fra <strong>Application-niv\xe5 og oppover</strong> er dette helt avgj\xf8rende. Uten integrasjoner blir det ingen reell automatisering, og heller ingen skalerbar verdi.

N\xe5r jeg ser tilbake p\xe5 mine erfaringer med IoT, sensorteknologi, automatisering og robotisering, er dette sv\xe6rt gjenkjennbart. Verdien l\xe5 aldri i teknologien isolert sett, men i hvordan data ble koblet til systemer, beslutninger og arbeidsprosesser.

I en tid der teknologien fungerer, skalerer og blir stadig rimeligere, er det ikke verkt\xf8yene som skiller virksomheter fra hverandre, men evnen til \xe5 gj\xf8re gode prioriteringer, ta eierskap til beslutninger og omsette AI til varig verdiskaping. Det er her forskjellen mellom <strong>AI AWARE</strong> og <strong>AI READY</strong> blir tydelig.`},{id:"fra-pilot-til-skalering-01",tittel:"Fra pilot til skalering – hvorfor så mange AI-initiativer stopper",teaser:"Hvorfor så få AI-initiativer skalerer selv når teknologien fungerer. Om eierskap, prosessendring og governance.",bildeUrl:"/images/fra-pilot.jfif",dato:"2026-01-15",visningsDato:"15.01.2026",kategori:"AI / KI",link:"https://www.linkedin.com/in/mariusottesen/recent-activity/all/",innhold:`I de siste innleggene har jeg skrevet om hvordan mange organisasjoner tar i bruk AI, men stopper tidligere enn de selv tror. I dag vil jeg g\xe5 ett niv\xe5 dypere – til sp\xf8rsm\xe5let mange ledere faktisk sitter med:

<strong>Hvorfor skalerer s\xe5 f\xe5 AI-initiativer, selv n\xe5r teknologien fungerer?</strong>

Flere analyser peker i samme retning: AI er i bruk overalt, men i begrenset grad integrert i virksomheters kjerneprosesser. Effekten er ofte reell, men fragmentert og vanskelig \xe5 f\xe5 \xf8ye p\xe5 i helheten (bl.a. MIT, Gartner).

Dette er ikke fordi AI \xabikke virker\xbb.
Det er fordi organisasjonen ofte ikke er rigget for skalering.

Basert p\xe5 b\xe5de forskning og praksis ser jeg noen gjentakende \xe5rsaker til at piloter stopper:

• <strong>Uklart eierskap</strong> – mange AI-initiativ mangler tydelig ansvar n\xe5r de g\xe5r fra pilot til drift (Gartner)
• <strong>Manglende prosessendring</strong> – ny teknologi legges p\xe5 gamle arbeidsformer, uten \xe5 endre hvordan arbeidet faktisk utf\xf8res (MIT Sloan)
• <strong>Svakt beslutningsmandat</strong> – AI gir innsikt, men beslutningsflyten forblir uendret (Forrester)
• <strong>Umoden governance</strong> – ansvar, risiko og kvalitetskontroll er ikke avklart f\xf8r l\xf8sninger skaleres (Shubin Yu)
• <strong>Datagrunnlag uten kontekst</strong> – mye data, men for lite kobling til faktiske beslutninger og forretningsm\xe5l (Gartner, The Economist)

<strong>Et godt startpunkt er \xe5 velge en konkret prosess, en tydelig beslutning og en ansvarlig eier – og bygge derfra.</strong>

Resultatet av manglende skalering ser vi ofte n\xe5 - AI hjelper enkeltpersoner, men endrer ikke hvordan virksomheten faktisk jobber.

Og her er et viktig poeng:
Agenter og mer autonome l\xf8sninger kommer ikke f\xf8rst. Skalering m\xe5 komme f\xf8rst.

Mange snakker om agenter. De f\xe6rreste har skalert en enkel AI-l\xf8sning p\xe5 en robust m\xe5te.

Skalering handler derfor mindre om teknologi – og mer om ledelse:
\xe5 ta bevisste valg om hvilke prosesser som skal endres, hvilke beslutninger som skal st\xf8ttes, og hvilket ansvar organisasjonen er villig til \xe5 ta (Yu; Gartner).

Det er her AI g\xe5r fra eksperiment til strategisk kjernekompetanse.`},{id:"praktisk-oppskrift-skalering-01",tittel:"Fra pilot til skalering – en praktisk oppskrift for ledere",teaser:"Fem ting virksomheter som lykkes med AI-skalering gjør riktig: eierskap, prosessendring, beslutningskobling, governance og data.",bildeUrl:"/images/praktisk-oppskrift.jfif",dato:"2026-01-12",visningsDato:"12.01.2026",kategori:"AI / KI",link:"https://www.linkedin.com/in/mariusottesen/recent-activity/all/",innhold:`I forrige innlegg skrev jeg om hvorfor s\xe5 mange AI-initiativer stopper p\xe5 pilotstadiet, selv n\xe5r teknologien fungerer. I dette innlegget vil jeg v\xe6re mer konkret:
Hva m\xe5 faktisk p\xe5 plass for at AI skal g\xe5 fra lovende fors\xf8k til reell, skalerbar verdiskaping?

Basert p\xe5 b\xe5de forskning (bl.a. MIT, Gartner, Forrester, Yu, The Economist) og erfaring fra praksis, ser jeg at virksomheter som lykkes med skalering ofte gj\xf8r fem ting riktig:

<strong>1. De definerer tydelig eierskap</strong>
AI kan ikke "eies av IT alene". Det m\xe5 v\xe6re klart hvem som har ansvar for gevinst, risiko og videreutvikling n\xe5r l\xf8sningen g\xe5r fra pilot til drift.

<strong>2. De endrer prosesser – ikke bare verkt\xf8y</strong>
Skalering skjer f\xf8rst n\xe5r arbeidsflyt faktisk endres. \xc5 legge AI opp\xe5 gamle arbeidsformer gir lokal effektivitet, men sjelden strukturell effekt.

<strong>3. De kobler AI til beslutninger</strong>
AI som bare produserer innsikt, men ikke er integrert i beslutningsflyt, stopper raskt. De mest modne bruker AI som st\xf8tte f\xf8r beslutninger tas, ikke bare som etterkontroll.

<strong>4. De har governance f\xf8r de skalerer</strong>
Sp\xf8rsm\xe5l om ansvar, kvalitet, data, personvern og risiko m\xe5 v\xe6re avklart tidlig. Manglende governance er en av de vanligste \xe5rsakene til at piloter aldri tas videre.

<strong>5. De jobber systematisk med data og kontekst</strong>
Data uten forretningskontekst gir begrenset verdi. Skalering forutsetter at data er relevante for faktiske beslutninger og m\xe5l – ikke bare teknisk tilgjengelige.

Dette bildet st\xf8ttes ogs\xe5 av ferske funn fra <em>Samfunns\xf8konomisk Analyse</em> (2026), som viser at majoriteten av norske virksomheter fortsatt bruker AI som enkeltverkt\xf8y, mens gevinstene f\xf8rst blir tydelige hos dem som har integrert AI i kjerneprosesser. Rapporten peker samtidig p\xe5 at bredere og mer moden bruk av AI gir klart st\xf8rre produktivitets- og inntektseffekter.

Et viktig poeng er derfor dette:
Skalering handler langt mindre om avansert teknologi, men mer om ledelse.

Mange snakker n\xe5 om agenter og autonome l\xf8sninger. Men realiteten er at de fleste organisasjoner ikke har skalert en enkel AI-l\xf8sning p\xe5 en robust m\xe5te enn\xe5. Uten eierskap, prosessendring og styring blir mer autonomi en risiko, ikke en gevinst.`},{id:"data-kontekst-rag-01",tittel:"Data, kontekst og RAG – hvorfor AI uten kontekst ikke er intelligens",teaser:"AI uten kontekst er ikke intelligens. Hvorfor RAG og virksomhetens egne data er forutsetning for moden AI-bruk.",bildeUrl:"/images/data-kontekst.jfif",dato:"2026-01-19",visningsDato:"19.01.2026",kategori:"AI / KI",link:"https://www.linkedin.com/in/mariusottesen/recent-activity/all/",innhold:`I de siste innleggene har jeg skrevet om hvorfor mange AI-initiativer stopper i pilot, selv n\xe5r teknologien fungerer. I dag vil jeg zoome inn p\xe5 et avgj\xf8rende, men ofte undervurdert punkt:

👉 AI er ikke intelligent uten kontekst.

Generative modeller er sterke p\xe5 spr\xe5k, m\xf8nstre og sannsynlighet. Det de ikke har, er forst\xe5else for virksomhetens faktiske situasjon, hvilke data som er relevante for akkurat denne beslutningen – eller ansvar for konsekvensene av anbefalingene sine.

Det er her <strong>RAG (Retrieval-Augmented Generation)</strong> kommer inn. Ikke som et teknisk buzzord, men som et prinsipp for moden AI-bruk.

I praksis handler RAG om \xe5 koble AI til virksomhetens egne data, gi modellen relevant kontekst i sanntid og s\xf8rge for at svar bygger p\xe5 faktiske kilder – ikke generelle antakelser.

Dette st\xf8ttes ogs\xe5 av analyser fra blant annet McKinsey, som peker p\xe5 at generativ AI f\xf8rst gir p\xe5litelig beslutningsst\xf8tte n\xe5r modeller kobles til virksomhetens egne data og kontekst. Uten slik forankring blir AI god p\xe5 spr\xe5k – men svak p\xe5 d\xf8mmekraft og relevans.

Mange kjenner seg igjen i dette fra bruk av Copilot eller ChatGPT:
Uten tilgang til riktige dokumenter, beslutningsgrunnlag eller interne f\xf8ringer blir svarene ofte generiske. N\xe5r AI derimot f\xe5r tilgang til strategidokumenter, prosessbeskrivelser eller kundedata, skjer det et tydelig skifte – fra teksthjelp til faktisk beslutningsst\xf8tte.

Det samme ser vi i lederm\xf8ter. Uten kontekst kan AI komme med overbevisende argumenter. Med RAG kan den vise til faktiske tall, tidligere vedtak og relevante rammer – og dermed skjerpe beslutningen i stedet for \xe5 bare effektivisere forarbeidet.

Dette er ogs\xe5 grunnen til at <strong>agenter uten kontekst er en risiko</strong>. De kan v\xe6re raske og overbevisende, men samtidig feil, inkonsistente eller d\xe5rlig forankret i virksomhetens virkelighet. Autonome systemer uten eierskap blir ikke intelligente – de blir bare effektive p\xe5 feil premisser.

F\xf8r mer autonome l\xf8sninger i det hele tatt er realistiske, m\xe5 virksomheten ha kontroll p\xe5 hvilke data som brukes og hvorfor, hvordan innsikt kobles til beslutningsflyt, og hvem som eier utfallet n\xe5r noe g\xe5r galt. Dette er ikke f\xf8rst og fremst et teknisk sp\xf8rsm\xe5l – det er et leder- og styringssp\xf8rsm\xe5l.

AI blir strategisk f\xf8rst n\xe5r den ikke bare gir svar, men bidrar til <strong>bedre beslutninger</strong>. Det forutsetter data med mening, kontekst med eierskap – og ledere som forst\xe5r forskjellen.`},{id:"rag-innsikt-handling-01",tittel:"Fra innsikt til handling – RAG som bro mellom AI og kjerneprosesser",teaser:"RAG som bro mellom AI og kjerneprosesser: hvordan virksomheter beveger seg fra testing til reell verdiskaping. Eksempel fra salg.",bildeUrl:"/images/innsikt-til-handling.jfif",dato:"2026-01-23",visningsDato:"23.01.2026",kategori:"AI / KI",link:"https://www.linkedin.com/in/mariusottesen/recent-activity/all/",innhold:`I forrige innlegg skrev jeg om hvorfor AI uten kontekst ikke er intelligens. N\xe5 vil jeg g\xe5 ett steg videre:
Hva betyr dette i praksis for virksomheter som \xf8nsker \xe5 bevege seg fra testing til faktisk verdiskaping?

Mange AI-initiativer stopper fordi innsikten blir st\xe5ende p\xe5 siden av driften. AI gir gode svar, men p\xe5virker ikke hvordan beslutninger faktisk tas. RAG er et av de viktigste grepene for \xe5 bryte dette m\xf8nsteret.

<strong>Ta salg som eksempel.</strong>
Uten RAG svarer AI ofte generelt: r\xe5d om god m\xf8teledelse, forslag til e-poster eller generelle salgsr\xe5d. Det er nyttig – men l\xf8srevet fra kundens faktiske situasjon.

Med RAG kan AI derimot hente relevant kontekst i sanntid: kundehistorikk fra CRM som historikk, kj\xf8p og pipeline, eksisterende avtaler, prisniv\xe5, tidligere tilbud og hitrate, service og supportdialog, samt strategiske f\xf8ringer som interne rammer for rabatt og prioritering. N\xe5r en selger sp\xf8r \xabhva b\xf8r jeg fokusere p\xe5 i m\xf8te med denne kunden?\xbb, kan AI svare basert p\xe5 egne data og reelle forutsetninger – ikke generelle salgsr\xe5d. Eksempler kan v\xe6re at AI svarer at kunden har hatt \xf8kt bruk av tjeneste A siste 6 mnd., eller at kunden kan ha behov for l\xf8sning B. Det er forskjellen p\xe5 tekstst\xf8tte og faktisk beslutningsst\xf8tte i kommersielle prosesser.

Det er her mange piloter feiler. Teknologien fungerer, men AI kobles aldri til reelle beslutningspunkter. N\xe5r AI derimot bygges inn i arbeidsflyt og beslutningsprosesser, endres hvordan organisasjonen faktisk jobber.

Dette samsvarer godt med analyser fra bla. McKinsey, Gartner og MIT Sloan, som peker p\xe5 at verdiskaping f\xf8rst oppst\xe5r n\xe5r AI integreres i kjerneprosesser og beslutningsflyt – ikke n\xe5r den brukes som et sideverkt\xf8y. Samfunns\xf8konomisk Analyse viser ogs\xe5 at norske virksomheter som lykkes best med AI, er de som har bygget teknologien inn i daglig drift og tydelig eierskap.

Et viktig poeng i b\xe5de forskning og praksis er at verdiskaping ikke oppst\xe5r n\xe5r AI tas i bruk - men n\xe5r den <strong>tas i ansvar</strong>. RAG er derfor ikke bare en datal\xf8sning, men en m\xe5te \xe5 tydeliggj\xf8re eierskap, rammer og beslutningslogikk p\xe5.

Dette er ogs\xe5 grunnen til at mange snakker om agenter f\xf8r de er klare for dem. Uten kontekst, styring og integrasjon blir autonomi bare hastighet – ikke kvalitet.

\xc5 lykkes med AI p\xe5 dette niv\xe5et handler mindre om flere verkt\xf8y og mer om tydelige valg:
• Hvilke prosesser skal st\xf8ttes?
• Hvilke beslutninger skal forbedres?
• Hvem eier konsekvensene?`},{id:"ai-agenter-hva-01",tittel:"AI-agenter – hva de er (og hva de ikke er)",teaser:"Hva AI-agenter er — og hva de ikke er. Rydding i begrepet og hvorfor det er et ledertema, ikke bare IT.",bildeUrl:"/images/ai-agenter-hva.jfif",dato:"2026-01-27",visningsDato:"27.01.2026",kategori:"AI / KI",link:"https://www.linkedin.com/in/mariusottesen/recent-activity/all/",innhold:`I de siste innleggene har jeg skrevet om hvorfor mange AI-initiativer stopper f\xf8r de skaper reell verdi – og hvorfor data, kontekst og RAG er forutsetninger for moden AI-bruk. N\xe5 er det p\xe5 tide \xe5 rydde i et begrep som stadig dukker opp i AI-debatten: <strong>AI-agenter</strong>.

La oss starte presist. I <em>Generative AI for Business</em> beskriver Shubin Yu agenter som systemer som ikke bare responderer p\xe5 foresp\xf8rsler, men som kan planlegge, utf\xf8re og f\xf8lge opp oppgaver over tid – innenfor definerte rammer. En agent har et tydelig m\xe5l, tilgang til relevante data og verkt\xf8y, evne til \xe5 ta sekvensielle beslutninger, og klare grenser for ansvar og kontroll. Det sier ogs\xe5 mye om hva en agent ikke er: den er ikke bare ChatGPT i ny innpakning, den er ikke automatisering uten kontekst, og den er ikke \xabautonom\xbb uten styring. Agenter er arbeidsflyt med intelligens – ikke magi.

Et kommersielt eksempel mange vil kjenne seg igjen i er salg. Uten agenter bruker selgere AI til \xe5 skrive e-poster, oppsummere m\xf8ter og f\xe5 forslag til tilbudstekster. Nyttig, ja – men fortsatt individuelt og fragmentert. Med en agent kan bildet se helt annerledes ut. En salgsagent kan f\xf8lge hele pipeline automatisk, analysere CRM-data, tidligere avtaler og kundeadferd, foresl\xe5 neste beste handling per kunde, varsle n\xe5r risiko i en deal \xf8ker og forberede lederbeslutninger f\xf8r forecast-m\xf8ter. Her har vi beveget oss fra AI som verkt\xf8y til AI som operativ st\xf8tte i en kjerneprosess. Verdien ligger ikke i teksten, men i beslutningene som forbedres.

Det er ogs\xe5 derfor dette f\xf8rst og fremst er et <strong>ledertema</strong>, ikke et IT-prosjekt. De fleste organisasjoner er ikke klare for agenter, selv om teknologien finnes. McKinsey beskriver i 2026 hvordan de selv bruker titusenvis av AI-agenter internt, med en ambisjon om at hver konsulent skal ha minst \xe9n agent som st\xf8tter arbeidet. Ikke fordi agentene er \xabsmarte\xbb, men fordi prosessene er tydelige, eierskapet er definert og beslutningsrommet er avklart. Agenter forutsetter modenhet i styring, ikke bare modenhet i teknologi.

Her ligger ogs\xe5 et viktig varsel til ledere. Jo mer autonom AI blir, desto viktigere blir svarene p\xe5 noen grunnleggende sp\xf8rsm\xe5l: Hvilke beslutninger kan delegeres – og hvilke kan ikke? Hvem eier konsekvensene n\xe5r noe g\xe5r galt? Og hvordan stopper vi en agent – og n\xe5r? Agenter forsterker organisasjonen slik den er. Er strukturen uklar, forsterkes uklarheten.`},{id:"ai-agenter-feil-01",tittel:"AI-agenter – hvorfor mange går feil når de vil bli mer autonome",teaser:"Hvorfor mange går feil når de jager autonomi: agenter handler om struktur og ansvar, ikke bare «slå på»-autonomi.",bildeUrl:"/images/ai-agenter.jfif",dato:"2026-01-31",visningsDato:"31.01.2026",kategori:"AI / KI",link:"https://www.linkedin.com/in/mariusottesen/recent-activity/all/",innhold:`Jeg ser et tydelig m\xf8nster i AI-samtaler. AI gir gode svar, analyser og demoer, men beslutningene tas fortsatt som f\xf8r. N\xe5r gapet mellom innsikt og handling blir for stort, dukker ett begrep nesten alltid opp: <strong>agenter</strong>.

De omtales ofte som neste naturlige steg - en oppgradering man \xabsl\xe5r p\xe5\xbb n\xe5r man er lei av manuelle prosesser. Det er her mange g\xe5r feil.

I forrige innlegg skrev jeg om hva AI-agenter faktisk er. N\xe5 er det viktig \xe5 rydde i vanlige misforst\xe5elser. Den st\xf8rste feilen er \xe5 tro at agenter f\xf8rst og fremst handler om autonomi. I praksis handler de mer om struktur, ansvar og samspill i organisasjonen.

I <em>Generative AI for Business</em> beskriver Shubin Yu agenter som systemer som kan planlegge, handle og f\xf8lge opp oppgaver over tid, innenfor tydelige rammer. Det forutsetter klare m\xe5l, godt datagrunnlag, beslutningsrom og avklart eierskap. Uten dette er det ikke autonomi – bare automatisert st\xf8y.

Typiske feil er at agenter introduseres f\xf8r prosesser er tydelige, autonomi gis uten mandat, ansvar er uklart n\xe5r noe g\xe5r galt, og at agenten ikke er koblet til reell arbeidsflyt. Resultatet er ofte imponerende demoer, men usikkerhet i drift.

La oss ta et kommersielt eksempel:

Mange salgsorganisasjoner snakker i dag om \xabAI-agenter i pipeline\xbb. Uten agentlogikk brukes AI til \xe5 skrive e-poster, oppsummere m\xf8ter og foresl\xe5 tilbudstekster. Nyttig, men fortsatt individuelt og fragmentert.

Med en faktisk agent skjer et tydelig skifte. En salgsagent kan overv\xe5ke hele pipelinen, analysere CRM-data, historiske avtaler og kundeadferd, varsle \xf8kt risiko, foresl\xe5 neste beste handling og forberede beslutninger f\xf8r forecast-m\xf8ter. Verdien ligger ikke i teksten, men i bedre beslutninger og timing.

Dette er grunnen til at mange organisasjoner ikke er klare for agenter – selv om teknologien finnes. Agenter forutsetter at man har bestemt hvilke beslutninger som kan delegeres, hvilke rammer som gjelder, og hvem som eier konsekvensene.

McKinsey har beskrevet hvordan de bruker et stort antall interne AI-agenter for \xe5 st\xf8tte konsulenter. Ikke fordi agentene er \xabselvtenkende\xbb, men fordi prosesser, data og ansvar er avklart. Verdien kommer av styring, ikke autonomi alene. Dette st\xf8ttes ogs\xe5 av forskning fra MIT Sloan, som viser at AI gir st\xf8rst effekt n\xe5r den bygges inn i beslutningsflyt og arbeidsprosesser.

Agenter forsterker organisasjonen. Er strukturen uklar, forsterkes uklarheten. Er ansvaret diffust, \xf8ker risikoen – ikke verdien. Derfor er dette et ledertema, ikke et IT-prosjekt.`},{id:"ai-agenter-praksis-01",tittel:"AI-agenter i praksis – når, hvor og hvordan de faktisk gir verdi",teaser:"Når gir AI-agenter faktisk verdi — og når bør man la være? Praktiske kriterier for ledere.",bildeUrl:"/images/agenter-i-praksis.jfif",dato:"2026-02-03",visningsDato:"03.02.2026",kategori:"AI / KI",link:"https://www.linkedin.com/in/mariusottesen/recent-activity/all/",innhold:`Flere ledere merker et tydelig dilemma.

Enten ser man potensialet i AI-agenter, eller s\xe5 er man man usikker p\xe5 hvor det er forsvarlig \xe5 slippe dem til. Resultatet blir ofte enten overdreven forsiktighet – eller for rask autonomi.

Begge deler er risikabelt.

I mine to siste AI-innlegg har jeg ryddet i hva agenter er, og hvorfor mange g\xe5r feil n\xe5r de jager autonomi for tidlig. Da gjenst\xe5r det viktigste sp\xf8rsm\xe5let:

<strong>N\xe5r gir det faktisk mening \xe5 bruke AI-agenter – og n\xe5r b\xf8r man la v\xe6re?</strong>

I praksis gir agenter gir reell verdi f\xf8rst n\xe5r tre forhold er p\xe5 plass samtidig: tydelige rammer, avklart ansvar og klart definerte beslutningspunkter. Uten dette blir autonomi bare tempo – uten styring.

Noen m\xf8nstre g\xe5r igjen der agenter faktisk fungerer godt:

• <strong>Beslutningsn\xe6re prosesser med mange signaler</strong>
For eksempel risikovurdering, portef\xf8ljestyring, kapasitetsplanlegging eller forecast-arbeid. Her kan agenter overv\xe5ke utvikling over tid, koble sammen data fra flere kilder og varsle n\xe5r terskler brytes – uten \xe5 ta den endelige beslutningen.

• <strong>Oppf\xf8lging der konsekvensene er kjente og reversible</strong>
Agenter egner seg godt til \xe5 foresl\xe5 handlinger, prioritere saker, f\xf8lge opp avvik og eskalere n\xe5r noe avviker fra normalen. De egner seg d\xe5rlig der konsekvensene er irreversible og beslutningsansvaret er uklart.

• <strong>Mennesker tydelig "in the loop"</strong>
De beste l\xf8sningene bruker agenter som kognitive forsterkere. Mennesket eier beslutningen, agenten strukturerer, varsler og gir anbefalinger innenfor definerte rammer.

Samtidig er det mange omr\xe5der der agenter ikke b\xf8r brukes, selv om teknologien tillater det. Prosesser med politiske avveininger, uklare m\xe5l, h\xf8y regulatorisk risiko eller svakt eierskap blir ikke bedre av autonomi, men derimot mer s\xe5rbare.

Et trekk jeg ser i flere bransjer n\xe5, er at mange organisasjoner lider mer av forsiktighetskultur enn av teknologiske begrensninger. Man analyserer lenge, og venter p\xe5 "det riktige tidspunktet". Resultatet er ofte stagnasjon.

Agenter b\xf8r derfor ikke innf\xf8res bredt – men testes kontrollert der:
• verdien er tydelig
• risikoen er h\xe5ndterbar
• ansvar er avklart p\xe5 forh\xe5nd

Agenter er kraftige verkt\xf8y som markerer et skifte i hva som flyttes fra mennesker til systemer – fra effektivitet til beslutninger. F\xf8rst n\xe5r agenter brukes p\xe5 Decisions-niv\xe5et i EDGE-rammeverket (Efficiency, Decisions, Growth, Empowerment), blir de et strategisk konkurransefortrinn – og et tydelig lederansvar.`},{id:"ai-governance-01",tittel:"Når AI får mer makt – hva skal ledere faktisk styre?",teaser:"Når AI påvirker beslutninger: hvem har ansvaret? EDGE, 5A og governance som ledelsens svar på økt autonomi.",bildeUrl:"/images/governance.jpg",dato:"2026-02-12",visningsDato:"12.02.2026",kategori:"AI / KI",link:"https://www.linkedin.com/in/mariusottesen/recent-activity/all/",innhold:`Flere ledere jeg snakker med beskriver det samme dilemmaet:
AI hjelper oss mer og mer – men vi er ikke helt sikre p\xe5 hvor grensen g\xe5r.

N\xe5r AI beveger seg fra st\xf8tte til beslutningsp\xe5virkning, oppst\xe5r et nytt lederansvar. Ikke teknisk. Ikke juridisk. Men styringsmessig.

I de siste innleggene i min AI-serie, og gjennom erfaringer fra mitt masterkurs p\xe5 BI, har jeg skrevet om AI-agenter. Fellesnevneren er klar: jo mer beslutningskraft som flyttes fra mennesker til systemer, desto viktigere blir ansvar og kontroll.

I dette innlegget stopper jeg opp og zoomer ut. Dette blir mer rammeverk og teori, fordi det er her mange organisasjoner mister oversikten n\xe5r AI beveger seg mot beslutningsp\xe5virkning.

Resonnementene bygger i stor grad p\xe5 <em>Generative AI for Business</em> av Shubin Yu, kombinert med m\xf8nstre jeg ser hos ledere i denne overgangen.

N\xe5r AI begynner \xe5 p\xe5virke beslutninger, dukker ett sp\xf8rsm\xe5l alltid opp i lederrommet:

<strong>Hvem har egentlig ansvaret n\xe5r AI f\xe5r mer makt?</strong>

Det er her <strong>governance</strong> kommer inn. Ikke som byr\xe5krati, men som ledelsens svar p\xe5 \xf8kt autonomi. N\xe5r AI p\xe5virker beslutninger, endrer ogs\xe5 lederansvaret karakter: sp\xf8rsm\xe5let er ikke om AI skaper verdi, men hvor og innenfor hvilke rammer.

For \xe5 forst\xe5 dette er det nyttig \xe5 rydde i to rammeverk som ofte blandes:

<strong>EDGE-rammeverket</strong> beskriver hvor verdien fra AI tas ut:
• <strong>Efficiency</strong> – gj\xf8re eksisterende arbeid raskere og billigere
• <strong>Decisions</strong> – forbedre beslutningskvalitet og timing
• <strong>Growth</strong> – utvikle nye produkter, tjenester og forretningsmodeller
• <strong>Empowerment</strong> – styrke mennesker i komplekse roller

Parallelt viser <strong>5A-modellen</strong> (Access → Assistants → Applications → Automation → Agents) modenhetsreisen i hvordan AI tas i bruk. Jo h\xf8yere opp man beveger seg, desto mer flyttes ansvar fra enkeltpersoner til systemer.

Governance er ikke en del av EDGE, men et overbygg som blir avgj\xf8rende n\xe5r AI brukes p\xe5 Decisions-niv\xe5et i EDGE og n\xe5r organisasjonen beveger seg mot Automation og Agents i 5A-modellen. Uten governance \xf8ker tempo og autonomi raskere enn ansvar og kontroll.

I praksis handler AI-governance om grunnleggende ledervalg:
• Hvilke beslutninger kan AI p\xe5virke – og hvilke kan den ikke?
• Hvem eier konsekvensene n\xe5r anbefalinger tas i bruk?
• Hvordan stopper, justerer eller overstyrer vi systemene n\xe5r virkeligheten endrer seg?

Med andre ord:
EDGE forklarer hvor verdien ligger.
5A forklarer modenhetsreisen.
Governance avgj\xf8r om dette blir et konkurransefortrinn – eller en risiko.`},{id:"ki-norsk-virksomheter-01",tittel:"KI i norske virksomheter – fra testing til verdiskaping",teaser:"Over halvparten av norske virksomheter bruker AI — men få har integrert det i kjerneprosesser. NHO-rapportens budskap.",bildeUrl:"/images/ki-norsk-virksomheter.jfif",dato:"2026-01-09",visningsDato:"09.01.2026",kategori:"AI / KI",link:"https://www.linkedin.com/in/mariusottesen/recent-activity/all/",innhold:`I g\xe5r deltok jeg online p\xe5 en konferanse i regi av <strong>NHO</strong>, der <strong>Samfunns\xf8konomisk Analyse</strong> presenterte sin ferske rapport om bruk av kunstig intelligens i norsk n\xe6ringsliv.

Hovedinntrykket mitt er at AI/KI n\xe5 for alvor har blitt en del av hverdagen i mange virksomheter. Over halvparten bruker AI i dag, en kraftig \xf8kning bare de siste to \xe5rene. Samtidig er det tydelig at bruken i stor grad fortsatt handler om testing, st\xf8tteverkt\xf8y og individuell effektivisering – ikke om reell endring av hvordan virksomheter drives og skaper verdi.

Rapporten viser et betydelig potensial: AI kan frigj\xf8re rundt 15 prosent av arbeidstiden i \xf8konomien. Det er i seg selv oppsiktsvekkende, s\xe6rlig sett i lys av den arbeidskraftmangelen Norge g\xe5r inn i. Men poenget som ble tydelig understreket er at disse gevinstene ikke kommer av seg selv. De oppst\xe5r f\xf8rst n\xe5r AI integreres i kjerneprosesser, prioriteres tydelig av ledelsen og kobles direkte til forretningsm\xe5l.

Bare rundt \xe9n av fem virksomheter regnes som reelle "frontl\xf8pere". Det er disse som ser st\xf8rst produktivitets- og inntektseffekter. For resten handler barrierene mindre om teknologi og mer om manglende innsikt, kompetanse og retning. Sp\xf8rsm\xe5let er ikke lenger om man skal bruke AI, men hvordan og hvorfor.

Samtidig blir det stadig tydeligere at kampen om disse frontl\xf8perne – b\xe5de virksomheter og mennesker – er i gang, og at evnen til \xe5 kombinere teknologiforst\xe5else, forretning og ansvarlig bruk av AI blir et stadig viktigere konkurransefortrinn.

Min viktigste takeaway er nok en gang at AI i liten grad er et IT-prosjekt. Det er et ledelses- og endringsprosjekt. Og nettopp her treffer rapporten godt med mye av det jeg selv er opptatt av: verdiskaping skjer ikke gjennom verkt\xf8y alene, men gjennom tydelige valg, prioriteringer og m\xe5ten vi organiserer arbeidet p\xe5.

Skal AI bli et reelt konkurransefortrinn, m\xe5 vi bevege oss fra nysgjerrig utforsking til bevisst integrasjon.`},{id:"ai-governance-i-praksis-01",tittel:"AI-governance i praksis – fem styringsgrep som avgjør hvor makten ligger",teaser:"Fem styringsgrep som avgjør hvor makten ligger når AI påvirker kunder, rabatter og prioriteringer.",bildeUrl:"/images/ai-governance-i-praksis.jpg",dato:"2026-02-18",visningsDato:"18.02.2026",kategori:"AI / KI",link:"https://www.linkedin.com/in/mariusottesen/recent-activity/all/",innhold:`De fleste ledergrupper har kontroll p\xe5 budsjett, marginer og forecast. Likevel ser jeg at mange mister oversikten n\xe5r AI begynner \xe5 p\xe5virke hvilke kunder som prioriteres, hvilke rabatter som anbefales og hvilke muligheter som vurderes som risiko. Utfordringen ligger sjelden i teknologien, men i at beslutningskraft forskyves uten at det er tydelig definert hvor makten faktisk ligger.

Tenk deg en kommersiell organisasjon som innf\xf8rer en AI-agent i salgsprosessen. Den analyserer CRM-data, historiske avtaler og kundeadferd og gir anbefalinger om neste beste handling. Presisjonen \xf8ker, prioriteringene blir skarpere og forecast mer treffsikker.

Sp\xf8rsm\xe5let er ikke bare hvem som tar beslutningen. Sp\xf8rsm\xe5let er hvem som har makt over beslutningen n\xe5r anbefalingen p\xe5virker strategisk retning og l\xf8nnsomhet.

Skillet g\xe5r ikke mellom virksomheter som bruker AI og de som ikke gj\xf8r det. Det g\xe5r mellom dem som har definert sitt beslutningsrom – og dermed maktstrukturen – og dem som lar den utvikle seg implisitt.

<strong>Fem forhold er avgj\xf8rende:</strong>

<strong>1. Beslutningsrommet m\xe5 avklares f\xf8r teknologien tas i bruk.</strong>
Hvilke beslutninger skal p\xe5virkes, og hvilke skal forbli menneskelige? Uten en eksplisitt avklaring skjer maktforskyvningen gradvis og uten tydelig forankring.

<strong>2. "Human in the loop" m\xe5 inneb\xe6re reelt mandat.</strong>
Det er ikke nok med formell godkjenning. Noen m\xe5 ha myndighet til \xe5 overstyre og st\xe5 ansvarlig dersom anbefalingen f\xf8lges.

<strong>3. Sporbarhet er et lederverkt\xf8y.</strong>
N\xe5r styret sp\xf8r om en prioritering, m\xe5 svaret v\xe6re konkret: hvilke data, hvilke terskler, hvilke kriterier. Forklarbarhet er en del av virksomhetens styring.

<strong>4. Det m\xe5 finnes tydelige justerings- og stoppepunkter.</strong>
Marked, regulering og strategi endrer seg raskt. Autonome systemer uten kontrollmekanismer skaper s\xe5rbarhet.

<strong>5. Eierskapet m\xe5 v\xe6re entydig.</strong>
N\xe5r noe g\xe5r galt, skal det v\xe6re klart hvor ansvaret ligger. IT kan ikke eie forretningsbeslutninger, og salg kan ikke fraskrive seg modellens anbefalinger. Ledergruppen m\xe5 definere rammene.

<strong>AI-governance handler i bunn og grunn om klassisk ledelse:</strong> \xe5 definere ansvar, mandat og kontroll f\xf8r kompleksiteten \xf8ker.

Dette handler ikke om \xe5 bremse utviklingen, men om \xe5 sikre at tempo og autonomi ikke l\xf8per fra ansvar og legitimitet. AI blir ikke risikabel fordi den er intelligent. Den blir risikabel n\xe5r organisasjonen ikke har tatt bevisste valg om hvordan beslutningskraft skal forvaltes.`},{id:"ai-kompetanse-2030-01",tittel:"AI er ikke trusselen i 2030. Kompetanseegapet er.",teaser:"Konkurransekraft i 2030 avgjøres av kompetanse — ikke av AI som trussel. Perspektiver fra WEF, McKinsey og OECD.",bildeUrl:"/images/core-skills.jfif",dato:"2026-02-20",visningsDato:"20.02.2026",kategori:"AI / KI",link:"https://www.linkedin.com/in/mariusottesen/recent-activity/all/",innhold:`AI-debatten preges ofte av tempo, b\xf8rsbevegelser og usikkerhet. For meg er sp\xf8rsm\xe5let mer hvilken kompetanse som faktisk vil avgj\xf8re konkurransekraft fremover?

Diagrammet jeg legger ved visualiserer dette tydelig. Den <em>horisontale</em> aksen viser andelen arbeidsgivere som i dag anser en ferdighet som en kjernekompetanse (2025). Den <em>vertikale</em> aksen viser andelen arbeidsgivere som forventer at denne ferdigheten vil \xf8ke i betydning frem mot 2030.

\xd8verst til h\xf8yre, der b\xe5de dagens viktighet og forventet vekst er h\xf8y, finner vi AI og big data. Tett rundt ligger teknologisk forst\xe5else, analytisk tenkning, kreativ probleml\xf8sning, resiliens, l\xe6ringsevne og lederskap.

Det mest interessante er ikke enkeltpunktene. Det er helheten!

Fremtidens kjernekompetanse er ikke bare teknisk. Den er en integrasjon av teknologi, kognitiv styrke og relasjonell kapasitet. Evnen til \xe5 forst\xe5 systemer, stille bedre sp\xf8rsm\xe5l, tolke data, ta beslutninger under usikkerhet og lede mennesker gjennom endring.

Dette bildet st\xf8ttes ogs\xe5 av analyser fra bla. World Economic Forum, McKinsey og OECD: Teknologiforst\xe5else \xf8ker i verdi, men det gj\xf8r ogs\xe5 analytisk d\xf8mmekraft, kreativitet og evnen til kontinuerlig l\xe6ring. Dette gjelder p\xe5 to niv\xe5er:

<strong>Individniv\xe5:</strong>
Vi kan ikke outsource v\xe5r egen utvikling. \xc5 forst\xe5 hvordan AI p\xe5virker beslutningsprosesser, maktbalanse og verdiskaping er i ferd med \xe5 bli grunnkompetanse, uavhengig av rolle. For min del betyr det \xe5 investere systematisk i riktig kompetanse n\xe5, ikke n\xe5r markedet krever det.

<strong>Selskapsniv\xe5:</strong>
AI er ikke noe man "tar i bruk" og er ferdig med. Det er en kapasitet som m\xe5 bygges, gjennom strategi, styring, datafundament, struktur og ledelse. Gevinstene tilfaller dem som kobler teknologi med forretningsforst\xe5else og gjennomf\xf8ringsevne.

Historisk har teknologiske skifter ikke bel\xf8nnet de som testet mest, men de som forberedte seg best. De som forsto hva endringen betydde for forretningsmodell, kompetansebehov, organisering og beslutningsprosesser – og handlet deretter.

Elektrifisering, digitalisering og internett skapte ikke verdi av seg selv. Verdien oppsto hos virksomheter som bygde kapasitet f\xf8r endringen tvang dem til det.

S\xe5ledes vil ikke AI automatisk gi konkurransefortrinn. Den vil forsterke forskjellene mellom dem som bygger kompetanse strukturert og dem som utsetter det.

Derfor ser jeg frem til mandagens samling p\xe5 mitt Exec. Master i Generative AI for Business studie. For meg handler det om \xe5 styrke det teoretiske fundamentet, forst\xe5 rammeverkene dypere og koble dette enda tydeligere til strategi og kommersiell verdiskaping.

Samtidig bist\xe5r jeg n\xe5 virksomheter innen AI og digital transformasjon – i skj\xe6ringspunktet mellom strategi, ledelse og implementering. \xd8nsker du \xe5 diskutere hvordan dette kan struktureres i din virksomhet, tar jeg gjerne en prat. Link til min consultingside finner du i f\xf8rste kommentarfelt.`},{id:"bi-master-oppstart-01",tittel:"Tilbake på BI – og på jakt etter en virksomhet å bygge AI-verdi med",teaser:"Tilbake på BI: masterkurset Generative AI for Business og jakten på en virksomhet å bygge AI-app og implementeringsplan med.",bildeUrl:"/images/bi-oppstart.jfif",dato:"2026-02-23",visningsDato:"23.02.2026",kategori:"AI / KI",link:"https://www.linkedin.com/in/mariusottesen/recent-activity/all/",innhold:`Tilbake p\xe5 BI – og p\xe5 jakt etter en virksomhet \xe5 bygge AI-verdi med (og en app du f\xe5r stemme p\xe5).

For 11 \xe5r siden fullf\xf8rte jeg Exec. Master of Management ved Handelsh\xf8yskolen BI, med fordypning i strategi og kommunikasjon. N\xe5 er jeg tilbake p\xe5 masterkurset <em>Generative AI for Business</em>, ledet av professor og AI-ekspert Shubin Yu.

Dette er ikke et kurs der vi kun diskuterer teori. Vi skal bygge AI i praksis, inkludert utvikling av en fungerende applikasjon og en strategisk implementeringsplan for generativ AI.

Vi har f\xf8rste fysiske samling denne uken, men jeg har allerede brukt de siste m\xe5nedene p\xe5 pensum, verkt\xf8ytesting, praktiske prosjekter (ja, det kodes) og sparring med b\xe5de tekniske og kommersielle milj\xf8er. Ambisjonen er \xe5 koble teknologi til konkret forretningsverdi og gjennomf\xf8ringskraft.

Dette henger tett sammen med det jeg n\xe5 bruker tid p\xe5 mht. \xe5 bygge bro mellom ledelse og AI-teknologi. Jeg \xf8nsker \xe5 hjelpe virksomheter med \xe5 omsette teknologiske muligheter til kommersiell verdi, uten behov for et stort internt tech-team. Sammen med flere tekniske eksperter leverer jeg r\xe5dgivning og implementering forankret i forretningsforst\xe5else og ledererfaring.

Som del av kurset skal jeg bygge en AI-app. Jeg har skissert tre egenutviklede konsepter som adresserer konkrete utfordringer i n\xe6ringslivet, og trenger n\xe5 innspill:

1️⃣ <strong>The “North Star” – AI Strategy Alignment Engine</strong><br />
Strategier d\xf8r ofte i dokumenter. Appen lar virksomheten laste opp strategien, og AI bryter den ned til konkrete, m\xe5lbare OKR-er for avdelinger. Den sikrer operativ forankring og felles retning.

2️⃣ <strong>The “Predictive Sales Coach”</strong><br />
En always-on AI-trener for salgsteam. Selgere kan simulere krevende kundem\xf8ter mot en skreddersydd persona, for eksempel en skeptisk CFO, og f\xe5 konkret feedback p\xe5 struktur, argumentasjon og h\xe5ndtering av innvendinger. M\xe5let er redusert time-to-competence og \xf8kt win-rate.

3️⃣ <strong>The “Churn Sentinel” – Revenue Retention</strong><br />
Appen analyserer kundedialog og CRM-logg for \xe5 avdekke tidlige signaler p\xe5 churn-risiko. Den gir risikovurdering med forklaring og foresl\xe5tte tiltak f\xf8r inntekten forsvinner.

Hvilken ville du sett meg bygge – 1, 2 eller 3?

I tillegg skal jeg gjennomf\xf8re en st\xf8rre strategisk prosjektoppgave. Jeg \xf8nsker \xe5 koble denne til en reell virksomhet.

Har din virksomhet en prosess som kan optimaliseres med generativ AI, men mangler kapasitet til \xe5 utforske det? Da kan jeg bygge prosjektoppgaven rundt deres case og levere en konkret implementeringsplan med prioriteringer, gevinstvurderinger, risikoanalyse og roadmap.

Ta gjerne kontakt p\xe5 DM dersom dette er aktuelt.`},{id:"predictive-sales-coach-01",tittel:"Jeg bestemte meg for å bygge – ikke bare mene noe om AI",teaser:"Fra analyse til bygging: refleksjoner fra BI-kurset og prototypen The Predictive Sales Coach.",bildeUrl:"/images/predictive-sales-coach.png",dato:"2026-02-26",visningsDato:"26.02.2026",kategori:"AI / KI",link:"https://www.linkedin.com/in/mariusottesen/recent-activity/all/",innhold:`Jeg bestemte meg for \xe5 bygge – ikke bare mene noe om AI.

Uken p\xe5 masterkurset <em>Generative AI for Business</em> ved BI har v\xe6rt s\xe6rdeles interessant og l\xe6rerik. Det som gj\xf8r dette relevant er ikke bare rammeverkene, men det praktiske arbeidet. Vi har jobbet i Google-\xf8kosystemet med Gemini, Google AI Studio og Workspace-integrasjoner, testet modellvalg, strukturert prompt-arkitektur og evaluert output mot konkrete forretningscase. N\xe5r man selv m\xe5 styre kontekst, parametere og datagrunnlag, f\xe5r man en helt annen forst\xe5else av presisjon og begrensninger.

Samtidig har jeg brukt mye tid p\xe5 \xe5 teste og utforske AI-verkt\xf8y i praksis. Innen skriving og analyse er det tydelige forskjeller mellom l\xf8sninger som Claude, ChatGPT og Perplexity n\xe5r det gjelder kontekstforst\xe5else og strukturert resonnering. P\xe5 utviklingssiden har verkt\xf8y som Cursor, Replit, Lovable og AI Studio gjort det mulig \xe5 g\xe5 fra id\xe9 til fungerende prototype raskt, gjennom AI-assistert koding, modelltesting og effektiv arbeidsflyt. Innen kunnskapsstrukturering har NotebookLM og lokale LLM-l\xf8sninger vist hvor avgj\xf8rende kontekst og datakvalitet er.

Poenget er ikke verkt\xf8yene i seg selv, men \xe5 forst\xe5 hva de faktisk kan og ikke kan gj\xf8re, og hvordan de kan kobles til verdiskaping.

WEF peker i <em>Future of Jobs</em>-rapporten p\xe5 at analytisk tenkning, kreativ probleml\xf8sning og teknologiforst\xe5else er blant de viktigste ferdighetene frem mot 2030, samtidig som virksomheter rapporterer et betydelig kompetansegap. Dataene viser at effekten av generativ AI ikke er line\xe6r, men divergerende: forskjellen mellom de som adopterer og de som ligger etter \xf8ker over tid. Kompetansegapet er med andre ord eskalerende, ikke statisk.

Arbeidet denne uken har allerede resultert i videreutvikling av et tidligere rammeverk til en konkret applikasjon: <strong>The Predictive Sales Coach</strong>. En l\xf8sning der selgere kan trene mot en dynamisk, virtuell kunde basert p\xe5 DISC-psykologi og konkrete salgsfaser, mens systemet analyserer dialogen objektivt og gir presise forbedringspunkter. Hovedm\xe5let er \xe5 trene for \xf8kt win-rate gjennom strukturert og m\xe5lrettet trening f\xf8r du m\xf8ter kunden.

F\xf8r kurset lanserte jeg ogs\xe5 egen hjemmeside (lenke i f\xf8rste kommentarfelt). Samlet opplever jeg at jeg har tatt et tydelig steg videre, fra analyse til faktisk bygging. AI handler i bunn og grunn ikke om teknologi alene, men om ledelse, prioritering og evnen til \xe5 koble innsikt til gjennomf\xf8ring.

Er du nysgjerrig p\xe5 app-l\xf8sningen, eller \xf8nsker \xe5 diskutere praktisk anvendelse av AI i din kommersielle virksomhet, tar jeg gjerne en prat. Dagene brukes ogs\xe5 til m\xf8ter med spennende ressurspersoner og fagmilj\xf8er innen AI, teknologi og kommersiell utvikling – noe som b\xe5de gir perspektiv og nye ideer til videre prosjekter.

Motivasjonen er stor – inspirasjonen st\xf8rre!`},{id:"ai-etikk-norden-01",tittel:"AI, makt, etikk og legitimitet – hva krever nordisk AI-ledelse?",teaser:"Hva krever nordisk AI-ledelse? Om makt, etikk, legitimitet og ansvarlig styring.",bildeUrl:"/images/etikk.jfif",dato:"2026-02-24",visningsDato:"24.02.2026",kategori:"AI / KI",link:"https://www.linkedin.com/in/mariusottesen/recent-activity/all/",innhold:`I forrige innlegg i min AI-serie skrev jeg om styringsgrepene som avgj\xf8r hvor makten ligger n\xe5r AI p\xe5virker beslutninger. Neste niv\xe5 handler om etikk. N\xe5r beslutningsmakt forskyves fra mennesker til systemer, oppst\xe5r ikke bare et styringssp\xf8rsm\xe5l, men ogs\xe5 et legitimitetssp\xf8rsm\xe5l.

Hvem oppleves som ansvarlig n\xe5r en algoritme prioriterer \xe9n kunde foran en annen? Hvem forklarer hvorfor en risikomodell gir ulike utslag? Hva skjer n\xe5r en dynamisk prismodell differensierer priser basert p\xe5 betalingsvillighet – og marginen \xf8ker, men rettferdighetsopplevelsen svekkes? Hva skjer med tilliten dersom beslutningen er effektiv, men oppleves urimelig?

Etikk i AI-ledelse handler ikke prim\xe6rt om regelverk, men om hvordan makt ut\xf8ves og oppfattes. Her ser vi tydelige regionale forskjeller.

I USA bel\xf8nnes tempo, skalering og markedsmakt. Innovasjon rulles raskt ut, og korreksjoner skjer ofte i etterkant. I deler av Asia kombineres h\xf8y teknologisk fremdrift med sterk sentral styring, der retning og ansvar defineres ovenfra.

I Norden st\xe5r vi i en annen tradisjon. H\xf8y institusjonell tillit (OECD, World Values Survey) og sterke arbeidstakerrettigheter gj\xf8r at legitimitet ikke kan tas for gitt. EU-regulering, herunder AI Act, forsterker kravene til ansvarlighet og forklarbarhet. Beslutningssystemer m\xe5 t\xe5le juridisk og sosial pr\xf8ving.

Debatten rundt Oljefondets AI-satsing illustrerer dette spenningsfeltet. Ambisjoner om produktivitetsl\xf8ft og milliardbesparelser er forst\xe5elige, men reiser sp\xf8rsm\xe5l om systemisk risiko, tap av institusjonell kompetanse og \xabalfa decay\xbb n\xe5r mange bruker like modeller. Sp\xf8rsm\xe5let er ikke om AI skal brukes, men om tempoet ledsages av tilstrekkelig risikovurdering og etisk forankring.

Det kan oppleves som et tempo-handicap, men ogs\xe5 som et konkurransefortrinn. Virksomheter som kombinerer teknologisk fremdrift med etisk forankring, vil st\xe5 sterkere over tid. Uten legitimitet svekkes tilliten, og dermed handlingsrommet og konkurransekraften.

AI-ledelse handler derfor ikke bare om styring, men om ansvarlig maktut\xf8velse. Det dreier seg ikke bare om hva systemene kan gj\xf8re, men om hva de b\xf8r gj\xf8re og hvordan det forklares.

Den virkelige testen p\xe5 modenhet er ikke hvor avansert modellen er, men om organisasjonen t\xe5ler konsekvensene av beslutningene den p\xe5virker, ogs\xe5 n\xe5r de utfordres.

Neste steg i serien handler om lederens d\xf8mmekraft. N\xe5r AI blir en del av beslutningsgrunnlaget, holder det ikke \xe5 forst\xe5 styringsstrukturene. Ledere m\xe5 forst\xe5 hvordan modeller responderer p\xe5 kontekst, hvordan hallusinasjoner oppst\xe5r, og hvordan anbefalinger skal vurderes kritisk.

AI-d\xf8mmekraft er ikke en teknisk nisjeferdighet. Det er en lederkompetanse.`}],J={"ai-gap-kompetanse-stokke-digi-2026-05":{tittel:"The real AI shortage: people with practical AI competence",teaser:"Reflection on Erlend Rosseland Stokke's article in digi.no: the skills gap is about people with practical AI experience in production — and why AI Value Lab Oslo explores this in practice.",innhold:`Erlend Rosseland Stokke points out in <a href="https://www.digi.no/artikler/debatt-norsk-naeringsliv-undervurderer-den-virkelige-ki-mangelen/572264" target="_blank" rel="noopener noreferrer" class="text-indigo-300 underline underline-offset-2 decoration-indigo-500/70 hover:text-indigo-200 transition-colors">digi.no</a> to an AI skills gap that may soon prove far more demanding than many realise today.

The shortage is not technology.
It is not tools and models.
👉 But the shortage is people and environments that have made AI work in production. With real users, business-near data and clear consequences.

Stokke also describes a self-reinforcing cycle. ⭕

Organisations remain stuck in pilot mode because they lack people with real experience. At the same time, concrete experience is built only when someone gets the opportunity to take AI from pilot to production. Then the skills gap grows.

That is also part of the reason we established <a href="https://www.linkedin.com/company/aivaluelaboslo/" target="_blank" rel="noopener noreferrer" class="text-indigo-300 underline underline-offset-2 decoration-indigo-500/70 hover:text-indigo-200 transition-colors">AI Value Lab Oslo</a>.
We want to explore AI in practice, not only in principle.

Marius, Tatiana and Ole develop together by combining business understanding, technology, customer journeys, practical development and responsible implementation.
Through concrete cases, prototypes and discussions we challenge and explore how AI can be connected to workflows, decision support, user experience, governance and real value creation.

Those who wait learn more slowly. They deliver less, have fewer mistakes to learn from, fewer clarifications around data and risk, and less understanding of what their own organisation requires.
Meanwhile, those who act build a learning curve that becomes harder for others to catch up with. 📈

They learn through use.
They adjust along the way.
They develop their own frameworks.
They build internal confidence.
They see faster where value emerges.

What is interesting is not necessarily that the competence does not exist, but that it must be worked on actively. Both at individual and organisational level.

The most important learning does not come only from the classroom or sporadic, theoretical courses. Competence is not built primarily through posts and discussions. And not primarily by testing a new tool either.

When you stand in the trade-offs between need, user, data, risk, accountability, business and execution — that is when a different form of AI competence and experience develops. The kind that really matters. 💯

And that is why we agree the skills gap is about more than general AI interest. It is about who actively builds experience and practical maturity so AI can create real value tomorrow.

💥 For organisations that want to succeed, it is not enough to watch from the sidelines.

We are happy to grab a coffee with others working on this, or curious about how such experience can be built in practice. ☕

#GenerativeAI #AICompetence #DigitalTransformation #TechnologyLeadership #PracticalAI`},"nova-frokost-ai-kjernekompetanse-2026-05":{tittel:"AI must become core competence, not a side project",teaser:"Reflections from NOVA Consulting Group's breakfast meeting: why many organisations remain stuck in pilots — and what Elkem, Egde, Nordic Corporate Bank and Infra Group showed about AI in operations.",innhold:`It should really give more leadership teams and boards pause for thought.

Why are so many organisations still stuck in talk, pilots and single tools when others are already moving AI into operations and core processes?

AI must become core competence, not a side project.

At individual level you can get somewhere with individual tools. But if organisations are to take real steps, create value and build competitive advantage, AI must be connected to more central tasks.

To value-creating processes.
To workflows.
To decisions.
To customer and user journeys.
To the competence the organisation itself must own.

The most important takeaway from yesterday's breakfast meeting with NOVA Consulting Group was not one demo or one tool. It was the pattern in hearing what lies behind what works in different companies, and where that can take them.

It gave me a real boost of inspiration. 💥

• Elkem ASA and Egde showed how many small use cases, short development cycles and close user involvement can become an internal AI platform with real impact.
• Nordic Corporate Bank ASA showed how AI agents can move work earlier in the process, from unclear requirements to better clarification, testing, code and documentation.
• Infra Group showed how unstructured HSE data can become better decision support, risk understanding and prevention.

Not every company should copy these solutions. But they showed that AI should not remain in pilot mode if the organisation wants to build competitiveness.

It is also interesting to see how much of what I build and explore myself points in the same direction. Through among other things the master's course <em>GenAI for Business</em> and the self-started <a href="https://www.linkedin.com/company/aivaluelaboslo/" target="_blank" rel="noopener noreferrer" class="text-indigo-300 underline underline-offset-2 decoration-indigo-500/70 hover:text-indigo-200 transition-colors">AI Value Lab Oslo</a>, I have worked across the full AI journey: from business needs, customer journey and use case logic to building apps, agents, AI architecture, visual content, governance and scaling.

The focus is not on technology alone, even though I also become well acquainted with models, tools and technical possibilities.

It is about how AI can actually be used to solve important business challenges. ✅

I encourage more people to focus on - and take part in - the <em>full</em> journey:
From idea to use case.
From use case to safe testing.
From testing to operations.
From operations to core competence.

Because if others can do it, more can do it. 💯

AI transformation rarely starts with the biggest idea.
It starts with enough structure for small ideas to be tested quickly, learned from and then scaled safely.

But then AI must stop being something the organisation tries on the side of the job.
It must become part of how the work is actually done.

Thank you to the Nova crew, meeting chair Michael Christophersen, and fellow BI students Thomas Holm and Dimitri Oetiker who also came along.

Together we continue exploring the potential of AI when it is placed in good systems. 📈

#GenerativeAI #DigitalTransformation #TechnologyLeadership #CommercialLeadership`},"ai-prosjekt-forretningsproblem-tegneserie-2026-05":{tittel:"When an AI project does not start with AI, but with a business problem.",teaser:`Master's thesis case for Sk\xf8yen\xe5sen Dental Clinic: GenAI value in the patient journey — illustrated with a comic summarising the implementation journey.`,innhold:`In my master's thesis in <em>Generative AI for Business</em> at BI, I have worked on a concrete case for Sk\xf8yen\xe5sen Dental Clinic. 🦷

The goal has not only been to build a new website, chatbot or digital solutions. It has been to understand where GenAI can actually create value in a real business. 📈

✅ The project focuses on the customer and patient journey around delivery and treatment: information, needs clarification, booking, follow-up and recall.

🚫 Not diagnosis. Not treatment advice. Not automation of professional judgements.

It is about understanding the problem, building concretely, taking risk seriously and knowing where people must still own the decision.

For me personally, the learning has been significant. Not only in using AI tools, prompt work and strategic tech understanding, but also in driving an AI project from problem understanding to concrete deliverables.

At the same time, the thesis has provided a framework for describing the full implementation journey: business need, solution, roadmap, risk, governance, privacy, scaling and human accountability.

Results are now taking shape: new website, text/speech-to-text chatbot in 6 languages, booking, needs clarification, follow-up and recall.

Perhaps your organisation recognises the same needs, or is curious about how AI can be used more concretely, safely and with real value creation? Please get in touch for a conversation.

The comic summarises the journey.

#GenerativeAI #Leadership #DigitalTransformation #BusinessDevelopment #ResponsibleAI`},"genai-foerste-reklamefilm-psc-2026-05":{tittel:`My first commercial with Generative AI. 🎥`,teaser:`I made the film for The Predictive Sales Coach — and reflect on GenAI production, BI master's deliverables, and what this means for commercial content production.`,innhold:`My first commercial with Generative AI. 🎥

I made this film for <a href="https://pscv6-744893320985.europe-west2.run.app/" target="_blank" rel="noopener noreferrer" class="text-indigo-300 underline underline-offset-2 decoration-indigo-500/70 hover:text-indigo-200 transition-colors">The Predictive Sales Coach</a>, my own AI-based sales training tool that combines DISC-inspired customer psychology with realistic sales simulations, objective evaluation, and structured learning to strengthen confidence, methodology, and win-rate.

It has been both instructive and fascinating to see how much is now possible without long planning, a large production rig, actors, locations, film crews, extensive coordination, and the budgets that were often necessary before.

In the project I used Higgsfield for production, Seedance 2.0 to generate scenes, DaVinci Resolve for editing and finishing, and audio/music from Pixabay. The tools are not free, but compared with traditional production they open completely different possibilities for speed, testing, flexibility, and creative execution.

It was especially meaningful for me that both the PSC app and the commercial were two of three exam assignments on the master's course <em>Generative AI for Business</em> at BI Norwegian Business School, submitted this weekend.

The programme has been incredibly interesting. Over these months we have worked broadly and practically with Gen.AI, digital transformation, and development — not only theory, but also concrete deliverables, experimentation, content development, building solutions, and insight into challenges and new opportunities.

For me the studies have also given a broad introduction to the full AI journey: from identifying needs and opportunities, analysing and structuring large data sets, and anchoring ownership in the organisation, to using models and programmes tied to core processes, roadmaps, implementation, governance, and not least scaling considerations that leaders must understand and handle.

It has also motivated me to do more. Beyond the curriculum I have among other things built agent solutions, websites, an AI-assisted insight and content engine, and AI architecture for decision support. That has given me even greater insight into the opportunity space, and into how this is already creating value for businesses.

Competence in this field has also inspired me to connect with like-minded people. The network has grown with people who want to explore, build, and contribute to tomorrow's solutions.

💥 In summary, this points in a clear direction. I want to continue exploring how Gen.AI can create real value for businesses and customers in a commercial context. It is a direction I want to build on further, either through my own company or in a role where the organisation wants to use AI in a more targeted way.

If anyone is curious about trying the Sales Coach solution, just contact me for access.

#GenerativeAI #DigitalTransformation #CommercialLeadership #ContentProduction #AIAdvertising`},"bi-generative-ai-for-business-2026-01":{tittel:"Final BI session in Generative AI for Business - this is only the beginning",teaser:"The final in-person session at BI delivered both practical experience and strategic direction: building, leading and implementing GenAI in business.",innhold:`I g\xe5r hadde vi siste fysiske samling p\xe5 masterstudiet "Generative AI for Business" ved Handelsh\xf8yskolen BI.

Men f\xf8lelsen er ikke at noe avsluttes. Snarere at noe har begynt! Kurset har gitt b\xe5de praktisk erfaring og et tydeligere strategisk perspektiv p\xe5 hvordan GenAI kan brukes, implementeres og ledes i virksomheter.

For min del har dette v\xe6rt langt mer enn et fag med pensum, innleveringer, eksamener og prosjektoppgave.

Vi har laget apper, nettsider, assistenter, infographics, podcast, quiz, reklamemateriell i form av bilder og video, og jobbet med et bredt spekter av GenAI verkt\xf8y, modeller og praktiske anvendelser. Man skal ikke bare forst\xe5 hva AI er, men pr\xf8ve det ut p\xe5 tvers av oppgaver, arbeidsformer og forretningsbehov. Studiet har ogs\xe5 vektlagt prompt engineering, dataanalyse, automatisering, strategi, implementering og ansvarlig bruk.

I tillegg har jeg f\xe5tt utviklet 'The Predictive Sales Coach' 👇 - et salgscoach-verkt\xf8y som springer ut av b\xe5de l\xe6ringen p\xe5 studiet og min egen kjernekompetanse innen kommersiell ledelse. Indikasjoner p\xe5 at dette kan ha kommersielt potensial har jeg ogs\xe5 f\xe5tt. 📈

Men studiet har ogs\xe5 utl\xf8st mer!
Det har gitt meg motivasjon til \xe5 bygge videre utover pensum med agentl\xf8sninger, AI-assistert innsikts- og innholdsmotor, AI-arkitektur for beslutningsst\xf8tte, og ikke minst videre refleksjon og faglig deling. Dessuten har det gitt meg inspirasjon for \xe5 komme i kontakt med "likesinnede", hvilket for eksempel har ledet til at jeg har dannet AI Value Lab Oslo.

Det gir meg en f\xf8lelse av stolthet av flere grunner.
💥 Fordi jeg ikke bare har l\xe6rt om teknologien, men ogs\xe5 bygget noe.
💥 Fordi jeg har klart \xe5 koble ny teknologi med det jeg kan best fra f\xf8r: salg, kommersiell utvikling, ledelse og praktisk verdiskaping.
💥 Og fordi det er inspirerende \xe5 kjenne at dette ikke bare er faglig interessant, men ogs\xe5 relevant og anvendbart i forretningskontekst der det kan ha store konkurransemessige fordeler.

Det er ogs\xe5 vanskelig \xe5 komme utenom hvor g\xf8y dette har v\xe6rt. GenAI er et fagomr\xe5de som utvikler seg sv\xe6rt raskt, og som s\xe5 tydelig er i tiden, hvilket b\xe5de gir energi og l\xe6ringslyst. N\xe5r andre h\xf8rer man fordyper seg i GenAI, er responsen alltid positiv. De fleste ser at dette er et omr\xe5de som blir stadig viktigere fremover.

Min viktigste take-away er derfor denne:
Det stopper ikke her!
Innen GenAI holder det ikke \xe5 ha testet noen verkt\xf8y eller fullf\xf8rt ett kurs. Utviklingen g\xe5r for fort til det. Man m\xe5 fortsette \xe5 l\xe6re, teste, bygge, feile, vurdere og omsette innsikt til praksis. Derfor har det v\xe6rt spennende \xe5 kjenne p\xe5 f\xf8lelsen av \xe5 sitte mer i f\xf8rersetet enn p\xe5 sidelinjen mens mye fortsatt formes. 💪

Takk til professor Shubin Yu og alle medstudenter for inspirerende samlinger, gode diskusjoner, mye energi og kreativitet underveis. 💯`},"econa-ai-kundereise-arbeidsflyt-01":{tittel:"What is most interesting about AI now is what it does to the customer journey, workflow and availability",teaser:"Reflections from the Econa event: AI creates value when connected to the customer journey, workflow and concrete needs.",innhold:`What is most interesting about AI now is what it does to the customer journey, workflow and availability.

This struck me clearly at the Econa event yesterday.

I am currently working on building both an AI-based chatbot, agents and a smarter booking flow in a private clinic, with the goal of better clarification of needs and a more precise customer/patient journey. That made this especially relevant to me:

AI creates value only when it is connected to the customer journey, workflow and concrete needs.

When I work commercially myself, it is especially exciting to see where the road is heading now, while also being able to help build some of it in practice.

Synne Christiansen and Jens Fredrik Allworthy from Sprint raised an important point: Customer experience is no longer just communication or customer service. It is the sum of all interactions, and AI is in the process of changing them all.
An illustrative example was how buying experiences can move from classic navigation and filtering to the customer simply describing their need in natural language, and getting a relevant solution generated from that. It is a major shift from menu logic to intention logic.

Hanna Vodopic from Devoteam put words to something many underestimate: AI has become "the quiet colleague."
A concrete example was how employees increasingly ask AI before they ask the colleague next to them. It gives speed, but can also weaken learning, knowledge sharing and the friction that often creates better solutions. She also raised the concept of hollow intelligence: that we can appear more capable because AI helps us deliver, without necessarily building deep enough understanding ourselves.
It was an important reminder: AI must not only make us faster. It must be used in a way that also makes us better, wiser and more aligned.

Daniel Kirken\xe6r Mathisen from IGM showed the most operational side of this: digital colleagues and agents that take a role in the frontline.
It became very concrete when he showed how the AI receptionist responds immediately, handles several inquiries at once and transfers to a human when needed.
This is interesting because it moves AI from a support tool to work capacity. It resonates well with something I am building myself now, where agents should not only answer, but contribute to flow, availability and follow-up.

What stands out strongest for me after the evening is that we are moving from AI as something employees "test a little" to AI being built deep into core processes.

That also changes the requirements for us who build:
 • We must understand the customer journey
 • We must understand the processes
 • We must understand where the friction actually is
 • And build with a clear human in the loop

This is also where I believe something of the most remarkable is happening now:
Businesses that manage to connect AI to frontline work, booking, needs clarification and follow-up are not only building efficiency. They are building a completely different level of availability and precision in the customer encounter.

That is where much of the competitive strength will lie going forward.`},"ai-needs-first-tannklinikk-case-01":{tittel:"Most people start wrong with AI - lessons from a real case",teaser:`From AI Value Lab Oslo and a real dental clinic case: start with the business and needs — not with "which AI solution?" Website, chatbot and booking in the correct order.`,innhold:`At Easter and last week, I continued to work on a concrete case through my group AI Value Lab Oslo, where we use a real dental clinic as a learning arena to test how AI can be used in practice.

We didn't start with technology. We started the business.

Through analysis, research, interviews and discussions, we worked our way to one core point: Where is friction experienced in everyday life?

What works well today?
Where are the bottlenecks?
Where does the clinic lose time, capacity or potential income?

We also looked at what the competitors do better, particularly in how they meet patients digitally and operationally.

The picture that emerged was clear:
The professional quality and patient experience are strong, but there is a gap in the digital and commercial areas around. So not in the core delivery, but in what happens before and after.

That is why we are now working to modernize the patient journey, and consider how AI and digital solutions can strengthen:
🦷 booking and availability
🦷 follow-up and repurchase
🦷 clear information and patient communication
🦷 more efficient work processes
🦷 better operational support in everyday life

Specifically, we are now working with:
- further development of the website (better structure and more relevant information)
– new chatbot (never had before)
- new online booking solution (not previously available)

Everything is developed based on the actual needs of the patients. The point is not the tools themselves, but the order.

Most businesses, on the other hand, start with the question:
"Which AI solution should we choose?"

In practice, one should start in a completely different place by asking:
"Which decisions and processes affect the outcome?"

I recognize this from commercial organisations:
Prioritization of customers is done differently from person to person.
Follow-up of offers is governed as much by capacity as by potential.
Pipeline and forecast are often characterized more by optimism than structure.

This does not mean that it is done poorly, but that there is considerable potential for improvement. This is where AI can help!

A model can analyze patterns and suggest the next best course of action. But the value only arises when it is used to make better decisions in practice.

Since these AI posts are meant as expertise sharing, I also briefly mention the tools we are testing. Solutions have been developed with Claude and Claude Code, with content from FAQs and today's website built on localhost, with further plans for deployment via Vercel. Website work in parallel in Lovable. Not because the tools are important, but because more people are asking what is actually used in practice.

👉 In the next post, I look at why many AI initiatives stall, even when they get off to a good start.

PS. Easter was otherwise spent in R\xf8ros and Svalbard with experiences that remind me of something important: Not everything should be optimized. Cross-country skiing, alpine skiing, snowmobiling, dog sledding, wild animals and time with family and friends still beat most - the real is not artificial.`},"ai-value-lab-munch-kickoff-01":{tittel:"Kick off at Munch with AI Value Lab Oslo",teaser:"Easter lunch at Munch: explore responsible AI where communication, expectations and security matter a lot - from strong emotions to visits to the dentist.",innhold:`At Easter we had a kick off lunch, and we in AI Value Lab Oslo met at 𝘔𝘜𝘕𝘊𝘏.

It really felt like a pretty appropriate place to start.

Munch's universe is about strong emotions, unrest and human reactions. So do many people's encounters with health services. For some, a visit to the dentist can be associated with uncertainty, friction and, in some cases, dental fear. Then it is not so difficult to understand why such experiences are worth learning more about.

In this phase, we spend time exploring how AI can be used in a responsible and thoughtful way in situations where communication, expectations and security matter a lot.

What we are particularly concerned about now is what actually happens in the meeting between people, information and technology. Where does uncertainty arise? What creates security? And where can AI be useful, without compromising privacy, judgment or human proximity?

For us, this is not just about technology. It is also about learning along the way, about building better understanding, developing skills and sharing reflections across disciplines.

Perhaps one of the most interesting things about AI is not the pace or the effect itself, but how the technology can be used more carefully, more precisely and more humanely.

From Munch's time to our own, the tools have changed a lot. The need to understand people remains the same.

Perhaps some of the most interesting AI exploration is precisely this: not to make the human less important, but to better understand what makes an experience safer and more coherent.

It will be exciting to explore this together further, Tatiana Hanecakova and Ole Mjelde!`},"april-ai-kompetanse-praksis-01":{tittel:"We have now found a simple way to build AI competence in the organisation",teaser:"AI competence is not built on courses alone, but in decisions and practice close to the core work.",innhold:`We haven't found a simple way to build 𝐀𝐈 competence in the organization zone

Send everyone on a course!

Or maybe not. This was an attempt at a bad 𝐀𝐩𝐫𝐢𝐥𝐬𝐧𝐫𝐫𝐫:

Many managers are waiting for AI – can you imagine why? It's not about because they don't want to, but because they don't see where to start. It is largely understandable.

In recent months, I have attended several courses and gatherings about AI. I like it. It provides energy, new perspectives and a language to understand what is happening.

But one thing has become very clear: development is not happening there. It only happens when AI is moved into everyday working life and connected to decisions that actually matter.

So far in this AI series, I've written about judgment, structure, and how humans react when AI starts giving advice. Now I move on to what many managers are actually concerned with:

How is value created in practice?

In commercial teams, I see a clear distinction. Someone is testing AI on the site. Create texts, summarize documents, try things out. It's useful, but it doesn't move much. Others connect AI directly to core decisions:
 • Which customers should be prioritized?
 • Which offers should be followed up now?
 • Where is the real probability of winning?

That is WHERE the difference occurs.

A model can analyze the pipeline and suggest the next best course of action. But the value is not in the answer. It lies in what the team does with it. Do they test the recommendation? Do they challenge it? Do they adjust the decision?

That is where the COMPETENCE is built. Not in the tool, but in the interaction between experience, data and assessment.

I notice it myself when I build and test AI tools. Small changes in context or input produce different recommendations. It makes one thing clear in the form that this is not something you "completely learn". You develop it through use. Therefore, I think many people overestimate the need to start with technology. The most important thing in the initial phase is not new systems, but connecting AI to decisions that are already made today.

The businesses that are most successful do not build AI expertise alongside their operations. They build it in the line.

For the next week I will be building and testing AI agents. It involves the use of various tools, but primarily learning, testing and challenging what I do and the answers that are given.

👉 In the next post, I look more closely at how to identify the right AI use cases to start with.

Happy Easter!`},"iteam-operativ-modell-2026-01":{tittel:"Is your commercial operating model rigged for 2026?",teaser:"Reflections from iteam's breakfast seminar: AI as a new operating system, cyber security as a foundation and agents that actually do work.",innhold:`Is your commercial operating model rigged for 2024?

Yesterday I attended iteam and Michael Jacobs' breakfast seminar at Saga Kino in Oslo - an event with over 800 participants spread over 29 locations. The message was crystal clear: We are in a technological shift that requires a fundamental recalibration of how we lead, secure and scale businesses.

In the meeting, it was highlighted that the gap between those who only see AI as a tool, and those who understand it as a new commercial operating system, is increasing rapidly. Investing in deep AI understanding and change management now is not just an advantage, but a critical capability for any leader navigating the years ahead.

Here is my strategic summary of the most important drivers for 2026:

<strong>1. The technological paradigm shift</strong>
We have moved from the 90s focus on software to the 2000s cloud services. We are now entering the age of autonomous agents.
• From tool to digital workforce: AI is moving from being a passive assistant to becoming an active agent that automates routine tasks, analyzes huge data sets and supports strategic decisions.
• Global technology - local consequences: The technology is available to everyone, but the competitive advantage is created locally by those managers who are able to operationalize AI in their value chain.

<strong>2. Cyber security as a strategic foundation</strong>
Roar Thon from NSM delivered a grim reality orientation: The threat picture is characterized by state actors and organized criminals.
• Identity is the new attack surface: Attackers rarely hack systems. They log in via misused user identities.
• Broad security: A holistic approach requires control over technology, people and processes.
• Four critical capabilities: Any modern business must be able to prevent, detect, manage and normalize operations after an attack.

<strong>3. AI in operational practice: Microsoft Copilot</strong>
Daniel Horgmo from Microsoft demonstrated how we are moving from simple chat to actual autonomous agents that act as a digital workforce.
• Precise delegation: Success with AI requires “Prompting 101” – the ability to provide goals, context and sources as if delegating to a team member.
• Agent Mode: Through Copilot, we now see agents that perform multi-step tasks autonomously directly in our core systems.

<strong>My strategic conclusion:</strong>
I believe that success requires us to stop looking at security and AI as IT projects. Cultural and structural changes are needed.
• Start small, think big. Test on a small scale, but have a clear strategy from management.
• Data discipline: Good data and strict access management are the prerequisites for AI effect.
• Security by design: Integrate security from the start as it is significantly cheaper than dealing with a crisis.

Thanks to iteam for a professional deep dive into the future.`},"ai-tech-frokost-rebel-01":{tittel:"Tech breakfast: Now it's about what AI agents can do for business",teaser:`AI agents create value when connected to systems, data and processes — with control, clear instructions and human in the loop.`,innhold:`At the AI ​​agent meeting at Digital Norway yesterday, we got a good picture of where the agent field stands now, from conceptual understanding, via the public sector and governance, to startup, scaling and concrete construction.

Many still talk about AI as better text, faster searches and smarter assistants. That is not where the value lies. The value arises when AI connects to systems, data and processes – and performs work.

Alexander Haneng from Digital Norway set the scene well. A chatbot answers. An assistant helps. An agent acts. It can trigger processes, retrieve data, send email and work in the background. At the same time, the risk increases. Access to systems and data requires control, clear instructions and limited rights.

Kjetil Ringstad from the Norwegian Road Administration showed how this is implemented in a large company. Not as technology alone, but as structure and management. A model that worked well was how employees build their own agents, experts build joint solutions and developers build platforms.

The case with document control was concrete. Agents identify sensitive information, suggest changes and reduce manual work. At the same time, two principles are crucial: the handling of sensitive data must be controlled, and human in the loop must be in place before anything is published. This is where many encounter the real complexity.

Einar Michaelsen from Circular showed how this looks when it is connected directly to the value chain. Products can be digitized, categorized, priced and published in seconds. Sales agents find leads, score them and set the next step in the process. When 4 people work together with 40 agents, that says something about the direction!

The stack behind was, among other things, Linear, Claude Code, Cursor, GitHub, Supabase, Vercel, Gemini, etc. The value lies in how this is connected to a production line. For me, it was fun to see this, as I have experience with several of the tools and am now working on building my own agent solutions.

What distinguishes those who are having an effect now is how they start. Not with technology, but with concrete tasks. Repetitive work across systems, with clear rules and measurable value. A simple agent with limited access including human control is then built. When this works, it scales.

My take is simple. The question is not which models to use. The question is which work can be delegated, which processes should be redesigned and where this actually adds value.

It is also the background to the fact that I am now concretely working on building agents, with the ambition of a measurable effect in a business I collaborate with.

Inside the venue was a DeLorean with a "REBEL" license plate. In the film Back to the Future, it was about traveling forward in time. With AI, it feels more like we build it. AI agents are the way forward!`},"nova-day-data-forst-01":{tittel:`NOVA Day: Data first – always`,teaser:"I attended NOVA Day and got clear takeaways about data first, judgment and governance as a foundation.",innhold:`Yesterday I attended 𝗡𝗢𝗩𝗔 𝗿𝗿 at Hotel Bristol - a very relevant and insightful full-day seminar with the theme "𝐗𝐮𝐮 first - 𝑅 all time", with a focus on AI, data and the business models of the future.

The day was led by Morten Blomfeldt, and brought together strong speakers.

My most important takeaways:
1. Data first – not AI first
The overall message was that without the right data base, the gains will not materialise. AI is business-critical, but data is the foundation for scaling and value creation.

2. The future is being shaped now – but not by technology alone
Gerd Leonhard highlighted the importance of human judgement, ethics and responsibility. Technology provides opportunities, but it is management that determines direction and consequences.

3. Data quality, risk and governance are critical
Iselin Paulsen showed how geopolitics, security and regulation affect technology choices. Data quality, control and clear ownership in management are essential.

4. From hype to craftsmanship – where most fail
\xd8rjan Segtnan Clausen was clear: Most AI initiatives stop at the pilot stage. The reason is a lack of understanding of the problem, a weak data base and the absence of a clear value definition. Among other things, he pointed to the ADDDD framework (Align, Discover, Define, Develop, Deliver) as a structure to ensure that AI initiatives go from idea to business value.

5. AI goes from tool to actor
The most exciting thing for me was the insight from Lars Alexander Jakobsen about MCP (Model Context Protocol) and the development towards A2A (Agent-to-Agent). When AI is connected directly to systems and agents interact, we are moving towards operational "digital colleagues". This will fundamentally change how we organize work and create value.

In the middle of the day, there was also a panel debate that linked the perspectives together. The discussion was about geopolitics, dependence on global technology suppliers, digital sovereignty and the need for clearer strategic choices. This is no longer an IT issue, but a managerial responsibility.

My reflection:
"Data first - always" is not a technology choice. It is a strategic choice - and a clear managerial responsibility.

What struck me the most is that many people still work with AI as a tool, while the gains only come when processes and responsibilities are redesigned.
For me, this is also a commercial shift, where AI will affect sales, customer experience and value creation in practice.

As we see the rise of MCP and A2A, we are moving towards a new operational model where AI agents not only support but perform work across systems. We are talking new architecture for how work is done!

👉 I am also actively working on this now as I consider it important to understand how this is implemented in practice, not just at the level of theoretical frameworks.

Thank you to NOVA Consulting Group for a very well-executed event - and not least nice to meet many new acquaintances and have good professional discussions throughout the day!`},"ai-value-lab-01":{tittel:"We have started something that I believe more managers should do",teaser:`An informal community to build, share and challenge each other with AI — for real business value.`,innhold:`We have started something that I think more leaders should do.

For me, this has become an arena where I both learn faster and get to test my own hypotheses in practice.

We are three people with one common ambition:
Creating real business value with AI.

We have established an informal collaboration we call "𝗔𝗜 𝗩𝗮𝗮𝗺 𝗗𝗮𝗮𝗮𝗮𝗮𝗮𝗮𝗮𝗮𝗼𝗮𝗮𝗮𝗮𝗮𝗮𝗶𝗮𝗮𝓁

Not just to test tools, but to actually build, share and challenge each other systematically.

We meet regularly for what we call "Shock & Shout".

Here we share concretely what we have been working on since the last time:
• AI agents, applications and websites we have developed
• Experiment across models and tools. What works, what doesn't
• Comparison of strengths and weaknesses between different AI solutions
• Insights from meetings, workshops and courses we attend, as well as input and tips for other and new subject areas and themes

But what makes this special is the depth of the discussions. We also spend time on what many skip:
• How to use data that provides competitive advantage
• Governance – how to ensure control, quality and accountability
• Frameworks such as ADDDD (Align, Discover, Define, Develop, Deliver) - and how it is used in practice
• How to go from pilot to scalable value

At the same time, we do not only work with experiments. We deal with real problems and use cases.

Our hypothesis is simple. AI does not create value in silos. It creates value when different units work together. Just as departments in businesses have to do.

What I'm left with so far is a pretty clear realization. Many work with AI on an individual level. Few manage to build structures that create value at company level.

Our approach is therefore deliberate:
👉 Combine practical construction with strategic understanding
👉 Connect AI directly to commercial use-cases
👉 Learn faster together than individually

Next step? We will build something together that has a real effect - and that can be scaled.

For me, this is at least as much about management as technology.

Management that is able to connect experimentation with direction.
Management that understands both data, governance and value creation.
Management that delivers effect and results.

We are early. We build, not just talk. In a double sense. Looking forward to the continuation Ole Mjelde and Tatiana Hanecakova!

Sky is the limit. But only for those who convert AI into value.`},"ai-debatten-hype-vs-frykt-01":{tittel:`The AI ​​debate still runs in two tracks: hype vs fear`,teaser:'When the debate locks onto "hype" and "fear", it becomes difficult to see value creation in practice. It is adoption that moves operations.',innhold:`But the real distinction happens elsewhere.

After following <strong>The Debate</strong> on <strong>NRK1</strong> this week, I am left with two clear reflections.

Firstly:
<strong>AI is no longer something we discuss from a distance.</strong> It is already changing how businesses operate.

The examples from, among others, the Oil Fund are clear. Nicolai Tangen showed how they have already documented significant gains. They have increased productivity by around 20 per cent and saved billions through better analysis, monitoring and decision support.

This is not experimentation, but real value creation in practice.

Secondly:
As is also highlighted in the discussion around AI in Norway, we need more perspectives. AI is not one subject, but it ranges from technology and mathematics to business, management, security and society.

If the debate is limited to who has the "right" to say something, we risk narrowing understanding and at the same time delaying necessary development. This breadth of perspectives is crucial for making better decisions and ensuring the responsible use of AI.

Nicolai Tangen was clear that businesses that do not use this risk falling behind.

👉 Those who adopt quickly get a structural advantage. This applies to both individuals and organisations.

On an individual level, we see that those who adopt AI develop faster. They work more efficiently, make better decisions and increase their own value in the labor market.

At organizational level, it is not about individual tools, but about how you work. AI must be integrated into core processes, expertise must be built broadly, and working methods must change. From pilot projects to actual operation and decision-making.

This is where the difference is created, while at the same time we must avoid two extremes. Naivety, where you uncritically throw yourself into everything. Or action paralysis, where the debate becomes more important than progress. Both parts weaken the ability to create value.

My reflection is that AI will not primarily create winners. It will clarify who is able to develop the fastest and convert technology into concrete value.

The question is not who is right in the AI ​​debate.
The real question is who manages to create real value from it.`},"ai-dommekraft-bias-01":{tittel:"When AI gives advice - who do we really trust?",teaser:"AI doesn't remove human bias, it can amplify it. Reflections on how we interpret and use AI recommendations in commercial decisions.",innhold:`This week I am participating in NOVA Day. Many of the conversations there are naturally about what AI can do for businesses. It is important, but one issue that I believe receives too little attention is how people react when the systems start giving advice.

AI does not eliminate human bias, but rather can amplify it.

Part of the explanation lies in how generative AI actually works. The models do not respond because they "know". They statistically calculate what is the most likely next word based on large amounts of training data and the context they are given. This means that the models reflect patterns in the data and are influenced by how we frame the question.

But bias does not only occur in the model. It also occurs in the meeting between model and human.

Research from, among others, MIT Sloan, Harvard Business School and Stanford points to several mechanisms that can weaken decision-making quality when AI is used in practice:

<strong>Automation bias</strong>
When people attach too much importance to the recommendation from the system, because it comes from a model and is perceived as objective.

<strong>Algorithm aversion</strong>
When people lose confidence in the model after one visible error, and then reject it entirely, even though over time it may be better than gut feeling alone.

<strong>Data bias</strong>
If the data base is skewed, so will the analyses.

<strong>Confirmation bias</strong>
We like to interpret AI responses in a way that confirms what we already believe.

In practice, I see this clearly in commercial situations. An AI model can analyze sales data and suggest which customers should be prioritized, which offers should be followed up or which accounts have the greatest growth potential. The salesperson or manager can make two mistakes by either following the recommendation blindly, or ignoring it completely.

If the recommendation is followed uncritically, biases in the data or model can be reinforced. If it is rejected because it "feels wrong", you simultaneously lose the value of the pattern recognition the model can actually add.

This is where the management challenge lies.

The mature organization does not ask people to choose between technology and discretion. It builds processes where recommendations are tested, model limitations are understood, and analysis is combined with judgment. In other words, a culture is being built where people still ask questions, even when the system seems secure. It is only then that AI becomes decision support in the true sense of the word.

To me, this is one of the most interesting things about AI right now. Not just what the model can produce, but what happens to our judgment ability when the answer comes quickly, looks convincing, and is wrapped with high confidence.

In the work of building and testing my own AI models and tools, I notice this clearly. Small adjustments in data, context or instructions can produce different recommendations. It constantly reminds me that the model gives suggestions and not definitive answers. Testing is a necessity on an ongoing basis.`},"ai-ready-virksomhet-01":{tittel:"When is a business AI-ready?",teaser:"Many invest in AI, but fewer prepare the organization. A review of the four areas that determine whether a business is equipped to extract value from technology.",innhold:`Many businesses say they are working with AI. Fewer have prepared the organization for what it entails.

The technology is available to everyone. The real difference lies in how the business organizes decisions, data and responsibilities around it.

McKinsey points out that many companies invest heavily in AI, but get limited effect because the organization is not equipped to use them. The problem is rarely the model. It's the structure around it.

MIT Sloan describes that many organizations start their AI work with technology. Those who succeed start with decisions. Only when you know which decisions need to be improved does it make sense to build AI solutions.

A commercial example illustrates the point: An AI model can analyze sales data and suggest which customers should be prioritized. It can rank probability of purchase, margin and next action. But if the organization has not clarified who owns the decision, which criteria apply or how the recommendation is to be used, the result is often more analysis and not better decisions.

Through the work with generative AI, I see four areas that determine whether a business is AI-ready:

<strong>1. The data base</strong>
AI enhances the quality of input. Good data leads to better analyses. Fragmented or unstructured data only makes errors faster. In many commercial organizations, key information is scattered in CRM, presentations, emails and memos. Before AI can provide value, this must be structured.

<strong>2. Decision Structure</strong>
AI works best when decisions are clearly defined. Who owns the assessment? Which criteria apply? What is the mandate? Without this, you run the risk that the model delivers recommendations that no one really owns.

<strong>3. Competence</strong>
Tools alone do not create value. Managers and employees must understand how the models work, what limitations they have and how the output is critically assessed. It's not about becoming a technologist. It's about developing AI judgement.

<strong>4. Anchoring responsibility</strong>
The more AI influences decisions, the more important governance becomes. Who is responsible if the model gives an incorrect recommendation? Who adjusts the context or stops the use? This is a management issue, not a technology issue.

Yu describes in the 5A model how the requirements for organization and competence increase when we move from access and assistants to applications, automation and agents. The more autonomy we give the systems, the more important the structure around them becomes.

Therefore, the question is not just whether a business uses AI. It is whether the organization is equipped to use it.

For businesses that want to move from AI experimentation to value creation, I assist through Marius Ottesen Consulting with strategic clarification and practical implementation in collaboration with technical specialists.

👉 In the next post, I look at how organizations build AI competence in practice, without becoming dependent on a large internal tech environment.`},"ai-arkitektur-beslutningsstotte-01":{tittel:"I build AI architecture for decision support",teaser:"How generative AI can structure complex issues and give commercial managers a better decision-making basis through AI deconstruction.",innhold:`As a commercial manager, I have several times participated in strategy processes where the goal is to link ambitions to actual implementation. Such processes often involve many employees, external consultants and professional environments with different perspectives and agendas. The result can be extensive analyzes and presentations before you understand what the business needs to do differently.

The challenge is well known: the strategy is clearly formulated, but the link to operational action is far weaker. Strategy documents, KPI structures, sales processes, tender documents and regulatory requirements create large amounts of information that are demanding to analyze systematically.

I am therefore working on a method for using generative AI to structure and analyze such issues more effectively. The basic logic is simple:

<strong>Documents and data → AI deconstruction → strategic insight → decision support</strong>

AI analyzes text, structure and connections, identifies possible gaps and formulates hypotheses that give management a better starting point for assessments and decisions.

Through vibe-coding and tools such as GPT-4o, Claude, Gemini, Cursor and Streamlit, I have developed a technical foundation that makes it possible to build several types of decision-making tools on the same architecture.

<strong>From idea to tool</strong>
The same analysis model can be used in several areas within commercial management:

• <strong>Strategy and implementation</strong>
AI can analyze strategy documents against operational plans, KPI structures and sales dashboards to identify where the strategy breaks down in the transition to operations.

• <strong>Commercial excellence and sales</strong>
Dynamic battlecards can be generated by analyzing competitor information and linking this to own value propositions, so that the sales team sells commercial value rather than pure product features.

• <strong>Tenders and RFP processes</strong>
Large requirements documents can be deconstructed so that the organization quickly identifies which requirements require strategic responses.

• <strong>Governance and compliance</strong>
AI can monitor regulatory changes and connect these to internal procedures so that the business can more quickly identify what needs to be updated.

• <strong>Onboarding and capability development</strong>
The same logic can be used to structure commercial frameworks so that new employees more quickly understand how the business works with strategy, sales and performance management.

A concrete example. is the solution "The Predictive Sales Coach", where salespeople train against a dynamic virtual customer based on DISC and concrete sales phases, while the system analyzes the dialogue and provides improvement points to increase the win-rate in real customer meetings.

The common denominator is the architecture behind and how Gen. AI can analyze complex issues, identify structural gaps and provide managers with a better decision-making basis.

👉 I work on developing and applying such solutions in practice. If you are curious about how this can be used in your own business, I would be happy to have a chat.`},"ai-dommekraft-kontekst-01":{tittel:`AI judgment in practice – from prompt to context`,teaser:`Why context engineering – not just prompt engineering – determines the quality of AI responses in practice.`,innhold:`In my work with generative AI, one thing has become clear: <strong>The quality of the answer is decided long before the model starts writing.</strong> Small adjustments in context, instructions or parameters can make a marked difference in precision and structure, whether you build your own GPTs with documents or use standard models in open work processes.

We often talk about prompt engineering. In practice, it is <strong>context engineering</strong> that determines the quality. An AI response is influenced not only by the question itself, but by system instructions, previous dialogue, documents retrieved, model selection and parameters such as temperature and top-p. Temperature controls the balance between creativity and consistency. In idea development, variety can be useful. In commercial decision-making processes it can be a risk factor.

The structuring of the prompt itself is also of great importance. A simple formula raises quality significantly: persona, context, task, format, examples and tone. The difference between unstructured and structured input is often dramatic.

The most important distinction, however, is between optimizing one interaction and designing the entire decision-making environment. Prompt engineering improves the answer here and now. Context engineering defines the framework within which the model works over time.

Hallucinations illustrate why this is critical. The model optimizes for probable text, not truth. When the context is unclear or the problem formulation imprecise, the answer may appear convincing and at the same time be wrong. In a commercial context, the consequence can be significant. A model can analyze the pipeline and suggest the next best course of action. It can weight probability and margin. But without a clearly defined strategic context, the recommendation can be technically precise and business-wise wrong.

MIT Sloan and McKinsey point to the same thing: Organizations that succeed with AI combine technology with clear human judgment and responsibility. The model can analyze patterns. It cannot understand strategic direction or context without us defining it.

AI judgment is therefore about more than mastering a tool. It is about structuring the decision-making basis, designing the information framework within which the model works, understanding the limitations and evaluating the output critically before implementation. Yu describes in the 5A model how the requirements for competence increase the closer we move towards automation and agents. McKinsey points to the same thing: The technology is available to many. The ability to integrate it into decision-making processes is what differentiates it. Strategically, it is context engineering that provides lasting competitive advantage.

For businesses that want to move from AI discussion to actual value creation, I assist through my company with both strategic clarification and practical implementation, in collaboration with technical specialists where necessary.`},"strategi-ai-master-01":{tittel:"Strategy without AI is like looking backwards in the mirror while driving forward",teaser:`AI is no longer a "nice to have" — it is a strategic necessity. Reflections from the Oslo Business Forum and the decision to enroll in the master's course Generative AI for Business at BI.`,innhold:`A few weeks ago I attended the Oslo Business Forum 2025. A consistent theme from the stage was clear: <strong>AI is no longer a "nice to have" — it is a strategic necessity.</strong> 🤖

🧠 <em>The message I particularly took with me was:</em>
• Strategy must be developed in step with technology, not afterwards.
• The businesses that manage to combine strategic thinking with new technology will be tomorrow's winners.
• AI works not only as a tool, but as a catalyst for innovation and competitiveness.

🎯 I have extensive experience with strategy, strategic management and development. Among other things, I have an Executive Master of Management from BI Norwegian Business School with specialization in strategic management and strategic communication.
At work, responsibility for strategic management, development and business growth and results has been a common thread.
AI, on the other hand, is an area in which I do not have the same background — but which I cannot afford to ignore.

That's why I visited BI's stand at OBF, and last week I had an inspiring conversation with an adviser about how I can build this competence further. <strong>The result?</strong>
👉 I have signed up for the master's course "<em>Generative AI for Business</em>" starting in February.

Not for the credits. But because I want to explore how AI can be used strategically to drive innovation, open up new business opportunities and strengthen operational efficiency. 📈
And because I sincerely believe that <strong>it is never too late to develop professionally</strong> — ambition is not just about performing more, but learning more. Those who are able to renew themselves are the strongest in tomorrow's competition. 🚀

📚 The books have already been ordered — now I'm looking forward to learning more and "jump-starting" the study, and to combining strategic experience with new technology.

What about you? Do you see AI as a strategic game-changer in your business where you actively take action — or as something you "take when it comes"? Hang on, then! 💪

📌 PS. For the record: The image is AI-generated.</em>`},"ai-learning-google-skills-01":{tittel:"It is fascinating how easy it has become to acquire AI expertise through completely new and modern methods",teaser:"Recommendation of Google's learning universe for AI competence: Google Skills and Google Cloud YouTube series, with concrete modules to start with.",innhold:`It is fascinating how easy it has become to acquire AI expertise through completely new and modern methods. <strong>Google has assembled an impressive learning universe that makes it possible to build solid AI competence, regardless of technical background.</strong>

Two platforms stand out in particular:

✅ <strong>Google Skills</strong> – a complete learning platform with courses, practical lab tasks, progress tracking and certifications you can show directly on LinkedIn.

✅ The <strong>Google Cloud YouTube Series</strong> – short, educational videos that provide a solid foundation before you get down to the more practical parts.

I have now completed my first course, "<strong>Gen AI: Beyond the Chatbot</strong>", and am attaching the badge here in the mail. These are clear, academically strong courses - not a "low-level correspondence course", but comprehensive, relevant and practical learning.

The inspiration to explore this came from the sharings of Morten Johnsen which really opened my eyes to the breadth of topics and possibilities in this "AI universe". Thank you very much, Morten!

<strong>My recommendation:</strong>

These YouTube modules are an effective place to start and gave me a good framework before diving deeper into the Google Skills courses:

🎥 Introduction to Generative AI - part of AI Essentials
🎥 Introduction to Large Language Models – basic module before Vertex AI
🎥 Introduction to Responsible AI - mandatory in all races
🎥 Introduction to AI Agents - explores how intelligent agent systems build and automate actions in complex environments
🎥 Intro to Generative AI training course - clear overview of the learning course
🎥 Introduction to Vertex AI Studio - useful for the practical labs

For my part, this is also the perfect warm-up before I start the <strong>Master's program "Generative AI for Business"</strong> at BI in February. But first several AI-related courses from the Google Skills universe are due.

For those who want to explore the possibilities:
👉 https://lnkd.in/dM7WrkEe`},"ai-ikke-intelligent-01":{tittel:`AI is not intelligent — we have to be`,teaser:"AI creates value only when we understand its limitations. Reflections from the BI webinar on when AI fits and when human judgment must take over.",innhold:`Reflections from yesterday's BI webinar "More Than Words: How to Know How AI Can (and Can't) Help You"

Yesterday's webinar from BI with Auke Hunneman and Jan Ketil hit an important point:
<strong>AI creates great value – but only when we understand the limitations.</strong>

And I got to experience it myself, <em>the same day</em>:

I asked an AI model to create a picture of me in an office setting. The result?
It became "me"… but not me.
Something was off. The face, the expression, the form - everything was somehow almost right, but not right enough. And precisely this is the core of what many who use AI should understand and challenge:

<strong>1️⃣ AI predicts - it does not understand</strong>
LLMs (and image generators) guess the most likely outcome based on huge amounts of data. They don't know what I look like. They don't understand identity

Therefore, there is often something that looks similar, but does not match.

<strong>2️⃣ AI gives poor ROI when the problem does not fit</strong>
A distinction is made between three types of challenges:
• <strong>Problems</strong> (predictable): forecasts → AI is strong
• <strong>Secrets</strong> (hidden patterns): channel drivers → AI + expertise
• <strong>Mysteries</strong> (unpredictable): interdisciplinary campaigns → people must coordinate

To create a real picture of me?
It falls between Secret and Mystery:
AI does not have enough information → the result is uncertain → the human must evaluate

<strong>3️⃣ The Cynefin framework</strong>
<strong>Clear:</strong> Tasks with summary → automate
<strong>Complicated:</strong> Analyzable, but demanding → AI + experts
<strong>Complex:</strong> Must be tried out → experiment
<strong>Chaotic:</strong> crisis, little time → act fast
<strong>Aporetic:</strong> unclear problem → stop and ask new questions

Getting the AI ​​to "understand Marius"?
→ Aporetic + Secret: There is no facit for my face in the model

<strong>4️⃣ Intelligence is more than words - and more than pixels</strong>
AI can deliver text and images. But it cannot:
- read the room
– understand motivation
- build teams
- create culture
- recognize me in a picture
Here man is superior.

<strong>5️⃣ Trust determines the result</strong>
When people see a picture that is "supposed to be me" but doesn't look like it, they lose confidence. The same applies in organisations:
Without trust in both numbers and each other, collaboration stops - no matter how advanced the AI model is

<strong>What does this mean for managers – and for everyone who uses AI?</strong>
It is a <strong>core competence</strong> to:
• understand when AI fits
• understand when human judgment must take over
• combine data + people for real value
• challenge inconsistent AI results

<strong>If AI can't recognize my face - why should I blindly trust what it suggests?</strong>`},"alle-snakker-ai-01":{tittel:`Everyone is talking about AI – but what are we really doing?`,teaser:`Introduction to a series on what AI actually means in practice — not just as a technology, but as a management and business discipline.`,innhold:`The past year has – like many others – been characterized by a fast pace, exciting experiences, great expectations and rapid technological changes. For my part, it has also provided room for reflection, professional deepening and new opportunities, particularly in the field of AI and strategy. This deepening takes, among other things, the framework and curriculum literature from the master's course <em>Generative AI for Business</em> at BI, combined with practical exploration of various AI models and areas of application.

<strong>This post marks the start of a series</strong> where in 2026 I will share reflections, frameworks and experiences around what AI actually means in practice – not just as technology, but as a management and business discipline.

The background is simple: AI is often referred to as either a miracle tool or as something diffuse and technical. At the same time, I find that many managers – quite naturally – reduce AI to what they see in everyday life: ChatGPT, Copilot, a bit of automation. It gives a feeling of being "in progress", but also an uncertainty about what this really means strategically.

The curriculum book "Generative AI for Business - a guide book" by Shubin Yu has been a good starting point for clearing this up. Not because it provides all the answers, but because it puts AI into a clear business and management context: value creation, decisions, organization, risk and people.

At the same time, working with AI has made me see previous experiences in a new light. Much of what we previously called IoT, sensor technology, automation and robotisation, now appear as parts of the same ecosystem - where AI acts as a powerful accelerating layer.

I hope this series can contribute to reflection, discussion - and some necessary realizations. For me, this is also an exciting journey of sharing, where I explore an area of ​​expertise that is still new to me, but which I find very inspiring to build my own expertise in. The ambition is both to learn further myself, and hopefully to contribute useful insight to others.

I am happy to have the dialogue here on LinkedIn, or over an informal coffee conversation, with others who are curious about how AI can actually create value in practice.

This will be my last post in 2025. Thank you for this year - I hope the year has provided room for both development, learning and good conversations. We will continue in 2026.`},"ai-foles-nytt-01":{tittel:`AI feels new – but this is not the start of the story`,teaser:"AI is experienced as new, but is the culmination of decades of development. Looking ahead to the framework The five A's (Access to Agents).",innhold:`In my last post in 2025, I asked the question: <em>Everyone is talking about AI – but what are we really doing?</em>

<strong>This post is the next step in the same series.</strong> In 2026, I will share reflections, frameworks and experiences around what AI actually means in practice - starting from the syllabus book <em>Generative AI for Business</em> by Shubin Yu, which is part of my master's study, combined with my own experiences and practical observations.

Christmas has given room for quieter days, reflection and self-study. For me, this period has been an opportunity to further immerse myself in AI and strategy - both through the subject matter in the study and practical exploration of various AI models and areas of use.

AI is experienced as new for many, but is in reality the culmination of several decades of technological development. Already in the 1950s and 1960s, the term artificial intelligence was introduced. Since then, we have been through several waves - from expert systems and neural networks, via machine learning, to deep learning and today's generative models.

The breakthrough around 2020–2023 therefore did not mark the start of AI, but a clear shift in availability and application. Large language models made the technology practical, scalable and relevant in a business context.

At the same time, I feel that many organizations are falling apart - something the book also addresses. We test the tools and see quick benefits, but often lack the strategic understanding: What is really new now, and what is required to create lasting value?

In this series, I will use the book as a structured starting point and extract the main lines further along some clear tracks. Among other things, I will take a closer look at:
• the transition from simple AI use to strategic transformation
• the importance of data, context and own sources of information
• what is required to implement AI in practice – from exploration to scaling
• how AI affects management, people and commercial processes
• as well as ethics, governance and responsibility

Where it is natural, I will also connect this to my own experiences from previous roles - particularly within IoT, automation, robotization and data-driven ecosystems - which I see today more clearly in the context of AI.

<strong>The next post comes on Wednesday</strong>, where I go into more detail about a central framework from the book: <strong>The five A's (from Access to Agents)</strong> - and why most organizations stop earlier than they think.

I hope more people will share their own experiences, perspectives and questions along the way - either here in the comments section, in direct dialogue, or over an informal cup of coffee. This is a field where we are all still learning. Join me on my little "journey".`},"access-til-agents-01":{tittel:"From Access to Agents - why many stop early",teaser:"The framework The five A's: how AI is being used in businesses today, and why many stop earlier than they think.",innhold:`In the previous post, I wrote about how AI is often perceived as new, even though it is in reality based on several decades of technological development. This post is part of the AI ​​series I'm sharing this winter, where I explore what AI actually means in practice for management, organizations and value creation.

Here I take a closer look at <em>how AI is being used in many businesses today</em>, and why many stop earlier than they themselves think.

In the curriculum book <em>Generative AI for Business</em>, Shubin Yu introduces a framework that I find particularly useful for clearing this up: <strong>The five A's for applied generative AI in working life</strong>. The framework describes a spectrum of maturity levels – from simple use of AI to more integrated and autonomous systems.

Simplified, the levels can be understood as follows, with examples many will recognize in:

<strong>Access</strong>
Using general AI tools such as ChatGPT, Gemini or Copilot to write, summarize and analyze. The value is often quick and visible, but primarily individual.

<strong>Assistants</strong>
More customized assistants with role or business context, for example a sales or HR assistant who knows internal data and working methods.

<strong>Application</strong>
AI is built into specific solutions for specific tasks, such as decision support, analysis or customer dialogue in limited systems.

<strong>Automation</strong>
AI is connected to workflows across systems, so that processes are connected from start to finish - with clear efficiency and scaling gains.

<strong>Agents</strong>
More autonomous systems that can plan, prioritize and carry out tasks within defined frameworks, with clear responsibility and control.

The decisive point is not the levels themselves, but the transition between them. And this is precisely where many people stop.

In many social media AI environments, I see a strong focus on "learning many models" or mastering as many AI tools as possible. It can be useful at the Access level, but provides limited value further up the pyramid. The higher one moves, the less it is about tools - and the more about structure, integration, management and responsibility.

When AI is connected to data, processes and decisions, one goes from individual efficiency gains to organizational core competence. It is only then that AI becomes truly strategic.

Therefore, AI and strategic use and implementation are also to a small extent an IT project. It is a managerial responsibility - in line with other strategic choices related to organisation, risk and value creation.`},"fra-verktoy-til-system-01":{tittel:`From tool to system – APIs, integration and manager selection`,teaser:`The value of AI only occurs when it is connected to systems and processes via integration — not as a stand-alone tool. APIs and manager selection.`,innhold:`In the previous post in this AI series, I wrote about <em>The five A's</em> and why many organizations stop using AI earlier than they think. This post builds on the same framework, and takes a closer look at what distinguishes simple AI use from more mature and integrated use.

A term many have heard of, but few put into a strategic context, is <strong>API - Application Programming Interface</strong>. In the curriculum book <em>Generative AI for Business</em>, an API is described simply as a bridge that allows systems to talk to each other. It sounds technical, but the consequences are primarily organizational.

As long as AI is used as a stand-alone tool, value creation occurs mainly at the individual level. You use ChatGPT, Copilot or similar, experience quick benefits and get a feeling of being "up and running". However, the figures show a clear paradox: Millions use generative AI, while only a small proportion of businesses have integrated the technology into their core processes. At the same time, studies estimate that around 95% of AI pilots have not produced a measurable financial gain, and can be interpreted as AI being overhyped. I think that is a fallacy.

This pattern is well documented in analyzes from, among others, MIT, Gartner and Forrester: AI only creates value when it moves from experiments to operations. A lack of return is rarely about weak technology, but about the organization not being equipped to use it. Blue. Itera points out that many organizations stop at <strong>Access or Assistants level</strong>.

Only when AI is connected via APIs to the company's systems, data and processes does a real shift take place - from <em>using AI</em> to <em>building with AI</em>. From the <strong>Application level upwards</strong> this is absolutely crucial. Without integrations, there will be no real automation, and no scalable value either.

When I look back on my experiences with IoT, sensor technology, automation and robotics, this is very recognizable. The value was never in the technology in isolation, but in how data was connected to systems, decisions and work processes.

In an age where technology works, scales and becomes increasingly affordable, it is not the tools that separate businesses from each other, but the ability to set good priorities, take ownership of decisions and translate AI into lasting value creation. This is where the difference between <strong>AI AWARE</strong> and <strong>AI READY</strong> becomes clear.`},"fra-pilot-til-skalering-01":{tittel:`From pilot to scaling – why so many AI initiatives stall`,teaser:"Why so few AI initiatives scale even when the technology works. About ownership, process change and governance.",innhold:`In recent posts, I have written about how many organizations adopt AI, but stop earlier than they themselves think. Today I want to go one level deeper - to the question many managers actually have:

<strong>Why do so few AI initiatives scale, even when the technology works?</strong>

Several analyzes point in the same direction: AI is in use everywhere, but to a limited extent integrated into companies' core processes. The effect is often real, but fragmented and difficult to see as a whole (e.g. MIT, Gartner).

This is not because AI "doesn't work".
That's because the organization is often not equipped for scaling.

Based on both research and practice, I see some recurring reasons why pilots stop:

• <strong>Unclear ownership</strong> – many AI initiatives lack clear accountability when moving from pilot to operation (Gartner)
• <strong>Lack of process change</strong> – new technology is added to old ways of working, without changing how the work is actually carried out (MIT Sloan)
• <strong>Weak decision-making mandate</strong> – AI provides insight, but the decision-making flow remains unchanged (Forrester)
• <strong>Immature governance</strong> – responsibility, risk and quality control are not clarified before solutions are scaled (Shubin Yu)
• <strong>Data base without context</strong> – lots of data, but too little connection to actual decisions and business goals (Gartner, The Economist)

<strong>A good starting point is to choose a concrete process, a clear decision and a responsible owner - and build from there.</strong>

We often see the result of a lack of scaling now - AI helps individuals, but does not change how the business actually works.

And here is an important point:
Agents and more autonomous solutions do not come first. Scaling must come first.

Many people talk about agents. Few have scaled a simple AI solution in a robust way.

Scaling is therefore less about technology – and more about management:
to make conscious choices about which processes to change, which decisions to support, and which responsibility the organization is willing to take (Yu; Gartner).

This is where AI goes from experiment to core strategic competence.`},"praktisk-oppskrift-skalering-01":{tittel:`From pilot to scaling – a practical recipe for managers`,teaser:"Five things businesses that succeed in AI scaling do right: ownership, process change, decision linking, governance and data.",innhold:`In the previous post, I wrote about why so many AI initiatives stop at the pilot stage, even when the technology works. In this post I will be more specific:
What actually needs to be in place for AI to go from promising experiments to real, scalable value creation?

Based on both research (e.g. MIT, Gartner, Forrester, Yu, The Economist) and experience from practice, I see that businesses that succeed in scaling often do five things right:

<strong>1. They clearly define ownership</strong>
AI cannot be "owned by IT alone". It must be clear who is responsible for profit, risk and further development when the solution goes from pilot to operation.

<strong>2. They change processes – not just tool</strong>s
Scaling only happens when workflow actually changes. Superimposing AI on top of old forms of work provides local efficiency, but rarely a structural effect.

<strong>3. They connect AI to decision</strong>s
AI that only produces insights but is not integrated into decision-making flows quickly stalls. The most mature use AI as support before decisions are made, not just as a post-check.

<strong>4. They have governance before they scale</strong>
Questions about responsibility, quality, data, privacy and risk must be clarified early. Lack of governance is one of the most common reasons why pilots are never taken on.

<strong>5. They work systematically with data and context</strong>
Data without business context provides limited value. Scaling requires data to be relevant to actual decisions and goals – not just technically available.

This picture is also supported by recent findings from <em>Socioeconomic Analysis</em> (2026), which show that the majority of Norwegian businesses still use AI as a single tool, while the gains only become apparent in those that have integrated AI into core processes. The report also points out that wider and more mature use of AI produces clearly greater productivity and income effects.

An important point is therefore this:
Scaling is far less about advanced technology and more about management.

Many are now talking about agents and autonomous solutions. But the reality is that most organizations have yet to robustly scale a simple AI solution. Without ownership, process change and management, more autonomy becomes a risk, not a gain.`},"data-kontekst-rag-01":{tittel:`Data, context and RAG – why AI without context is not intelligence`,teaser:"AI without context is not intelligence. Why RAG and the company's own data are prerequisites for mature AI use.",innhold:`In recent posts, I have written about why many AI initiatives stop in pilot, even when the technology works. Today I want to zoom in on a crucial but often underestimated point:

👉 AI is not intelligent without context.

Generative models are strong in language, patterns and probability. What they do not have is an understanding of the business's actual situation, which data is relevant for this particular decision - or responsibility for the consequences of their recommendations.

This is where <strong>RAG (Retrieval-Augmented Generation)</strong> comes in. Not as a technical buzzword, but as a principle for mature AI use.

In practice, RAG is about connecting AI to the company's own data, giving the model relevant context in real time and ensuring that answers are based on actual sources – not general assumptions.

This is also supported by analyzes from, among others, McKinsey, which point out that generative AI only provides reliable decision support when models are connected to the business's own data and context. Without such anchoring, AI will be good at language - but weak at judgment and relevance.

Many people recognize this from using Copilot or ChatGPT:
Without access to the right documents, decision-making bases or internal guidelines, the answers often become generic. When, on the other hand, AI gains access to strategy documents, process descriptions or customer data, a clear shift occurs – from textual help to actual decision support.

We see the same in management meetings. Without context, AI can make persuasive arguments. With RAG, it can refer to actual figures, previous decisions and relevant frameworks - and thus sharpen the decision instead of simply streamlining the preparatory work.

This is also why <strong>agents without context are a risk</strong>. They can be fast and convincing, but at the same time wrong, inconsistent or poorly grounded in the reality of the business. Autonomous systems without ownership do not become intelligent - they only become effective on the wrong premises.

Before more autonomous solutions are even realistic, the business must have control over which data is used and why, how insights are linked to decision flow, and who owns the outcome when something goes wrong. This is not primarily a technical issue – it is a leadership and management issue.

AI only becomes strategic when it not only provides answers, but contributes to <strong>better decisions</strong>. It requires data with meaning, context with ownership - and managers who understand the difference.`},"rag-innsikt-handling-01":{tittel:`From insight to action – RAG as a bridge between AI and core processes`,teaser:"RAG as a bridge between AI and core processes: how businesses move from testing to real value creation. Example from sales.",innhold:`In the previous post, I wrote about why AI without context is not intelligence. Now I want to go one step further:
What does this mean in practice for businesses that want to move from testing to actual value creation?

Many AI initiatives stop because the insight is left on the sidelines of operations. AI provides good answers, but does not influence how decisions are actually made. RAG is one of the most important measures to break this pattern.

<strong>Take sales as an example.</strong>
Without RAG, AI often answers in general terms: advice on good meeting management, suggestions for e-mails or general sales advice. It is useful - but detached from the customer's actual situation.

With RAG, on the other hand, AI can retrieve relevant context in real time: customer history from CRM such as history, purchases and pipeline, existing agreements, price level, previous offers and hit rate, service and support dialogue, as well as strategic guidelines such as internal frameworks for discounting and prioritization. When a salesperson asks "what should I focus on when meeting this customer?", AI can answer based on its own data and real assumptions - not general sales advice. Examples could be that AI responds that the customer has had increased use of service A in the last 6 months, or that the customer may need solution B. That is the difference between text support and actual decision support in commercial processes.

This is where many pilots fail. The technology works, but the AI ​​never connects to real decision points. However, when AI is built into workflow and decision-making processes, how the organization actually works changes.

This corresponds well with analyzes from, among others, McKinsey, Gartner and MIT Sloan, who point out that value creation only occurs when AI is integrated into core processes and decision-making flows – not when it is used as a side tool. Societal Economic Analysis also shows that Norwegian businesses that are most successful with AI are those that have built the technology into daily operations and clear ownership.

An important point in both research and practice is that value creation does not occur when AI is put into use - but when it is <strong>taken into account</strong>. RAG is therefore not just a data solution, but a way to clarify ownership, frameworks and decision logic.

This is also why many talk about agents before they are ready for them. Without context, governance and integration, autonomy becomes just speed – not quality.

Succeeding with AI at this level is less about more tools and more about clear choices:
• Which processes are to be supported?
• Which decisions should be improved?
• Who owns the consequences?`},"ai-agenter-hva-01":{tittel:`AI agents – what they are (and what they are not)`,teaser:`What AI agents are — and what they are not. Clearing up the term and why it is a management topic, not just IT.`,innhold:`In recent posts, I have written about why many AI initiatives stop before they create real value - and why data, context and RAG are prerequisites for mature AI use. Now it's time to clear up a term that keeps popping up in the AI ​​debate: <strong>AI agents</strong>.

Let's start precisely. In <em>Generative AI for Business</em>, Shubin Yu describes agents as systems that not only respond to requests, but can plan, execute and follow up tasks over time - within defined frameworks. An agent has a clear goal, access to relevant data and tools, ability to make sequential decisions, and clear boundaries for responsibility and control. It also says a lot about what an agent is not: it is not just ChatGPT in a new wrapper, it is not automation without context, and it is not "autonomous" without governance. Agents are workflows with intelligence – not magic.

A commercial example that many will recognize is sales. Without agents, salespeople use AI to write emails, summarize meetings and get suggestions for offer texts. Useful, yes – but still individual and fragmented. With an agent, the picture can look completely different. A sales agent can follow the entire pipeline automatically, analyze CRM data, previous deals and customer behaviour, suggest the next best course of action per customer, notify when risk in a deal increases and prepare management decisions before forecast meetings. Here we have moved from AI as a tool to AI as operational support in a core process. The value is not in the text, but in the decisions that are improved.

That is also why this is primarily a <strong>leadership theme</strong>, not an IT project. Most organizations are not ready for agents, even if the technology exists. McKinsey describes in 2026 how they themselves use tens of thousands of AI agents internally, with an ambition that each consultant should have at least one agent to support the work. Not because the agents are "smart", but because the processes are clear, the ownership is defined and the decision-making space is clarified. Agents require maturity in governance, not just maturity in technology.

There is also an important notice to managers here. The more autonomous AI becomes, the more important the answers to some fundamental questions become: Which decisions can be delegated – and which cannot? Who owns the consequences when something goes wrong? And how do we stop an agent – ​​and when? Agents reinforce the organization as it is. If the structure is unclear, the ambiguity is amplified.`},"ai-agenter-feil-01":{tittel:"AI agents - why many go wrong when they want to become more autonomous",teaser:`Why many go wrong chasing autonomy: agents are about structure and responsibility, not just “turn on” autonomy.`,innhold:`I see a clear pattern in AI conversations. AI provides good answers, analyzes and demos, but the decisions are still made as before. When the gap between insight and action becomes too large, one term almost always appears: <strong>agents</strong>.

They are often referred to as the next natural step - an upgrade you "turn on" when you are tired of manual processes. This is where many go wrong.

In the previous post, I wrote about what AI agents actually are. Now it is important to clear up common misunderstandings. The biggest mistake is to think that agents are primarily about autonomy. In practice, they are more about structure, responsibility and interaction in the organisation.

In <em>Generative AI for Business</em>, Shubin Yu describes agents as systems that can plan, act and follow up tasks over time, within clear frameworks. It requires clear goals, a good data base, room for decision-making and clarified ownership. Without this, there is no autonomy – just automated noise.

Typical mistakes are that agents are introduced before processes are clear, autonomy is given without a mandate, responsibility is unclear when something goes wrong, and that the agent is not connected to real workflow. The result is often impressive demos, but uncertainty in operation.

Let's take a commercial example:

Many sales organizations today talk about "AI agents in the pipeline". Without agent logic, AI is used to write emails, summarize meetings and suggest offer texts. Useful, but still individual and fragmented.

With an actual agent, a clear shift occurs. A sales agent can monitor the entire pipeline, analyze CRM data, historical deals and customer behavior, warn of increased risk, suggest the next best course of action and prepare decisions before forecast meetings. The value is not in the text, but in better decisions and timing.

This is why many organizations are not ready for agents – even though the technology exists. Agents assume that you have decided which decisions can be delegated, which frameworks apply, and who owns the consequences.

McKinsey has described how it uses a large number of internal AI agents to support consultants. Not because the agents are "self-thinking", but because processes, data and responsibilities are clarified. The value comes from governance, not autonomy alone. This is also supported by research from MIT Sloan, which shows that AI has the greatest effect when it is built into decision-making and work processes.

Agents reinforce the organization. If the structure is unclear, the ambiguity is amplified. If responsibility is diffused, the risk - not the value - increases. Therefore, this is a management topic, not an IT project.`},"ai-agenter-praksis-01":{tittel:`AI agents in practice – when, where and how they actually provide value`,teaser:`When do AI agents actually provide value — and when should you not? Practical criteria for managers.`,innhold:`Several managers notice a clear dilemma.

Either you see the potential in AI agents, or you are unsure where it is safe to release them. The result is often either excessive caution – or too rapid autonomy.

Both parts are risky.

In my last two AI posts, I have cleared up what agents are and why many go wrong when they chase autonomy too soon. Then the most important question remains:

<strong>When does it actually make sense to use AI agents - and when should you not?</strong>

In practice, agents only provide real value when three conditions are in place at the same time: clear frameworks, clarified responsibilities and clearly defined decision points. Without this, autonomy becomes just pace – without governance.

Some patterns repeat themselves where agents actually work well:

• <strong>Decision-making processes with many signals</strong>
For example, risk assessment, portfolio management, capacity planning or forecast work. Here, agents can monitor developments over time, connect data from multiple sources and notify when thresholds are breached – without making the final decision.

• <strong>Follow-up where the consequences are known and reversible</strong>
Agents are well suited to propose actions, prioritize cases, follow up deviations and escalate when something deviates from the norm. They are not suitable where the consequences are irreversible and the decision-making responsibility is unclear.

• <strong>People clearly "in the loop"</strong>
The best solutions use agents as cognitive enhancers. The person owns the decision, the agent structures, warns and makes recommendations within defined frameworks.

At the same time, there are many areas where agents should not be used, even if the technology allows it. Processes with political trade-offs, unclear goals, high regulatory risk or weak ownership are not improved by autonomy, but rather more vulnerable.

A trait I see in several industries now is that many organizations suffer more from a culture of caution than from technological limitations. One analyzes for a long time, and waits for "the right moment". The result is often stagnation.

Agents should therefore not be introduced widely - but tested in a controlled manner where:
• the value is clear
• the risk is manageable
• responsibilities are clarified in advance

Agents are powerful tools that mark a shift in what is being moved from people to systems – from efficiency to decisions. Only when agents are used at the Decisions level of the EDGE framework (Efficiency, Decisions, Growth, Empowerment) do they become a strategic competitive advantage – and a clear leadership responsibility.`},"ai-governance-01":{tittel:`When AI gains more power – what should managers actually manage?`,teaser:"When AI affects decisions: who is responsible? EDGE, 5A and governance as management's response to increased autonomy.",innhold:`Several managers I speak to describe the same dilemma:
AI is helping us more and more – but we're not quite sure where the limit is.

As AI moves from support to decision influence, a new managerial responsibility arises. Not technically. Not legal. But in terms of governance.

In the last posts in my AI series, and through experiences from my master's course at BI, I have written about AI agents. The common denominator is clear: the more decision-making power is moved from people to systems, the more important responsibility and control become.

In this post, I stop and zoom out. This becomes more of a framework and theory, because this is where many organizations lose track as AI moves towards decision influence.

The reasoning is largely based on <em>Generative AI for Business</em> by Shubin Yu, combined with patterns I see in managers in this transition.

As AI begins to influence decisions, one question always pops up in the executive room:

<strong>Who is really responsible when AI gets more power?</strong>

This is where <strong>governance</strong> comes in. Not as bureaucracy, but as management's response to increased autonomy. When AI affects decisions, the nature of managerial responsibility also changes: the question is not whether AI creates value, but where and within what framework.

To understand this, it is useful to clear up two frameworks that are often mixed up:

The <strong>EDGE framework</strong> describes where the value from AI is extracted:
• <strong>Efficiency</strong> – make existing work faster and cheaper
• <strong>Decisions</strong> – improve decision quality and timing
• <strong>Growth</strong> – develop new products, services and business models
• <strong>Empowerment</strong> – empowering people in complex roles

In parallel, the <strong>5A model</strong> (Access → Assistants → Applications → Automation → Agents) shows the maturity journey in how AI is used. The higher up one moves, the more responsibility is shifted from individuals to systems.

Governance is not part of EDGE, but a superstructure that becomes crucial when AI is used at the Decisions level in EDGE and when the organization moves towards Automation and Agents in the 5A model. Without governance, pace and autonomy increase faster than responsibility and control.

In practice, AI governance is about basic management choices:
• Which decisions can AI influence – and which can it not?
• Who owns the consequences when recommendations are used?
• How do we stop, adjust or override the systems when reality changes?

In other words:
EDGE explains where the value lies.
5A explains the journey to maturity.
Governance determines whether this becomes a competitive advantage - or a risk.`},"ki-norsk-virksomheter-01":{tittel:"AI in Norwegian businesses - from testing to value creation",teaser:`Over half of Norwegian businesses use AI — but few have integrated it into core processes. The NHO report's message.`,innhold:`Yesterday I participated online in a conference under the auspices of <strong>NHO</strong>, where <strong>Social Economic Analysis</strong> presented its recent report on the use of artificial intelligence in Norwegian business.

My main impression is that AI/CI has now seriously become part of everyday life in many businesses. Over half use AI today, a sharp increase in just the last two years. At the same time, it is clear that the use is still largely about testing, support tools and individual efficiency - not about real change in how businesses are run and create value.

The report shows significant potential: AI can free up around 15 percent of working time in the economy. That in itself is startling, especially in light of the labor shortage Norway is facing. But the point that was clearly emphasized is that these gains do not come by themselves. They only arise when AI is integrated into core processes, clearly prioritized by management and directly linked to business goals.

Only around one in five businesses are considered real "frontrunners". It is these who see the greatest productivity and income effects. For the rest, the barriers are less about technology and more about a lack of insight, competence and direction. The question is no longer whether to use AI, but how and why.

At the same time, it is becoming increasingly clear that the battle for these frontrunners – both businesses and people – is underway, and that the ability to combine technological understanding, business and the responsible use of AI is becoming an increasingly important competitive advantage.

My most important takeaway is once again that AI is to a small extent an IT project. It is a management and change project. And precisely here the report hits home with much of what I myself am concerned with: value creation does not happen through tools alone, but through clear choices, priorities and the way we organize our work.

If AI is to become a real competitive advantage, we must move from curious exploration to conscious integration.`},"ai-governance-i-praksis-01":{tittel:`AI governance in practice – five management measures that determine where the power lies`,teaser:"Five management measures that determine where the power lies when AI affects customers, discounts and priorities.",innhold:`Most management groups have control over the budget, margins and forecast. Nevertheless, I see that many people lose track when AI begins to influence which customers are prioritized, which discounts are recommended and which opportunities are assessed as risks. The challenge rarely lies in the technology, but in the fact that decision-making power is shifted without it being clearly defined where the power actually lies.

Imagine a commercial organization that introduces an AI agent into the sales process. It analyzes CRM data, historical deals and customer behavior and makes recommendations on the next best course of action. The precision increases, the priorities become sharper and the forecast more accurate.

The question is not just who makes the decision. The question is who has power over the decision when the recommendation affects strategic direction and profitability.

There is no distinction between businesses that use AI and those that do not. It is between those who have defined their decision-making space - and thus the power structure - and those who allow it to develop implicitly.

<strong>Five conditions are decisive:</strong>

<strong>1. The decision room must be clarified before the technology is put into use.</strong>
Which decisions should be influenced and which should remain human? Without an explicit clarification, the shift in power happens gradually and without clear anchoring.

<strong>2. "Human in the loop" must involve a real mandate.</strong>
Formal approval is not enough. Someone must have the authority to override and be responsible if the recommendation is followed.

<strong>3. Traceability is a management tool.</strong>
When the board asks about prioritization, the answer must be concrete: which data, which thresholds, which criteria. Explainability is part of the company's management.

<strong>4. There must be clear adjustment and stopping points.</strong>
The market, regulation and strategy are changing rapidly. Autonomous systems without control mechanisms create vulnerability.

<strong>5. Ownership must be unambiguous.</strong>
When something goes wrong, it must be clear where the responsibility lies. IT cannot own business decisions, and sales cannot opt ​​out of the model's recommendations. The management group must define the framework.

<strong>AI governance is fundamentally about classic management:</strong> defining responsibility, mandate and control before complexity increases.

This is not about slowing down development, but about ensuring that pace and autonomy do not run away from responsibility and legitimacy. AI does not become risky because it is intelligent. It becomes risky when the organization has not made conscious choices about how decision-making power is to be managed.`},"ai-kompetanse-2030-01":{tittel:"AI is not the threat in 2030. The skills gap is.",teaser:`Competitiveness in 2030 will be determined by competence — not by AI as a threat. Perspectives from the WEF, McKinsey and OECD.`,innhold:`The AI ​​debate is often characterized by pace, stock market movements and uncertainty. For me, the question is more which skills will actually determine competitiveness in the future?

The diagram I am attaching visualizes this clearly. The <em>horizontal</em> axis shows the proportion of employers who today consider a skill a core competence (2025). The <em>vertical</em> axis shows the proportion of employers who expect this skill to increase in importance towards 2030.

At the top right, where both today's importance and expected growth are high, we find AI and big data. Close by are technological understanding, analytical thinking, creative problem solving, resilience, learning ability and leadership.

The most interesting thing is not the individual points. That's the big picture!

The core competence of the future is not just technical. It is an integration of technology, cognitive strength and relational capacity. The ability to understand systems, ask better questions, interpret data, make decisions under uncertainty and lead people through change.

This picture is also supported by analyzes from, among others, World Economic Forum, McKinsey and OECD: Technological understanding increases in value, but so does analytical judgement, creativity and the ability to continuously learn. This applies on two levels:

<strong>Individual level:</strong>
We cannot outsource our own development. Understanding how AI affects decision-making processes, balance of power and value creation is becoming basic competence, regardless of role. For me, this means investing systematically in the right skills now, not when the market demands it.

<strong>Company level:</strong>
AI is not something you "take into use" and be done with. It is a capacity that must be built, through strategy, management, data foundation, structure and management. The gains accrue to those who connect technology with business understanding and execution ability.

Historically, technological shifts have not rewarded those who tested the most, but those who prepared the best. Those who understood what the change meant for the business model, competence needs, organization and decision-making processes - and acted accordingly.

Electrification, digitization and the internet did not create value by themselves. The value arose in businesses that built capacity before the change forced them to do so.

Thus, AI will not automatically provide a competitive advantage. It will reinforce the differences between those who build competence in a structured way and those who postpone it.

That's why I'm looking forward to Monday's meeting at my Exec. Master in Generative AI for Business study. For me, it's about strengthening the theoretical foundation, understanding the frameworks more deeply and linking this even more clearly to strategy and commercial value creation.

At the same time, I now assist companies in AI and digital transformation - at the intersection between strategy, management and implementation. If you would like to discuss how this can be structured in your business, I would be happy to have a chat. The link to my consulting page can be found in the first comment field.`},"bi-master-oppstart-01":{tittel:"Back at BI - and looking for a business to build AI value with",teaser:"Back at BI: the master's course Generative AI for Business and the search for a business to build an AI app and implementation plan with.",innhold:`Back at BI - and looking for a business to build AI value with (and an app you get to vote on).

11 years ago I completed the Exec. Master of Management at BI School of Economics, with specialization in strategy and communication. Now I'm back on the master's course <em>Generative AI for Business</em>, led by professor and AI expert Shubin Yu.

This is not a course where we only discuss theory. We will build AI in practice, including the development of a working application and a strategic implementation plan for generative AI.

We have our first physical meeting this week, but I've already spent the last few months on curriculum, tool testing, hands-on projects (yes, it's coded) and sparring with both technical and commercial environments. The ambition is to connect technology to concrete business value and execution power.

This is closely related to what I now spend time on. to bridge the gap between management and AI technology. I want to help businesses turn technological opportunities into commercial value, without the need for a large internal tech team. Together with several technical experts, I deliver consultancy and implementation based on business understanding and management experience.

As part of the course, I will build an AI app. I have outlined three self-developed concepts that address concrete challenges in the business world, and now need input:

1️⃣ <strong>The “North Star” – AI Strategy Alignment Engine</strong><br />
Strategies often die in documents. The app allows the business to upload the strategy, and AI breaks it down into concrete, measurable OKRs for departments. It ensures operational anchoring and common direction.

2️⃣ <strong>The “Predictive Sales Coach”</strong><br />
An always-on AI trainer for sales teams. Salespeople can simulate demanding customer meetings against a tailored persona, for example a skeptical CFO, and get concrete feedback on structure, argumentation and handling of objections. The aim is reduced time-to-competence and increased win-rate.

3️⃣ <strong>The “Churn Sentinel” – Revenue Retention</strong><br />
The app analyzes customer dialogue and CRM log to uncover early signals of churn risk. It provides a risk assessment with explanation and suggested measures before the income disappears.

Which one would you like to see me build – 1, 2 or 3?

In addition, I will carry out a larger strategic project assignment. I want to connect this to a real business.

Does your business have a process that can be optimized with generative AI, but lacks the capacity to explore it? Then I can build the project assignment around your case and deliver a concrete implementation plan with priorities, benefit assessments, risk analysis and roadmap.

Feel free to contact us via DM if this is relevant.`},"predictive-sales-coach-01":{tittel:`I decided to build – not just think about AI`,teaser:"From analysis to construction: reflections from the BI course and the prototype The Predictive Sales Coach.",innhold:`I decided to build – not just think about AI.

The week on the master's course <em>Generative AI for Business</em> at BI has been particularly interesting and educational. What makes this relevant is not just the frameworks, but the practical work. We have worked in the Google ecosystem with Gemini, Google AI Studio and Workspace integrations, tested model selection, structured prompt architecture and evaluated output against concrete business cases. When you have to manage the context, parameters and data base yourself, you get a completely different understanding of precision and limitations.

At the same time, I have spent a lot of time testing and exploring AI tools in practice. Within writing and analysis, there are clear differences between solutions such as Claude, ChatGPT and Perplexity when it comes to understanding context and structured reasoning. On the development side, tools such as Cursor, Replit, Lovable and AI Studio have made it possible to go from idea to working prototype quickly, through AI-assisted coding, model testing and efficient workflow. Within knowledge structuring, NotebookLM and local LLM solutions have shown how crucial context and data quality are.

The point is not the tools themselves, but to understand what they actually can and cannot do, and how they can be linked to value creation.

The WEF points out in the <em>Future of Jobs</em> report that analytical thinking, creative problem solving and technological understanding are among the most important skills up to 2030, while companies report a significant skills gap. The data shows that the effect of generative AI is not linear, but divergent: the difference between adopters and laggards increases over time. In other words, the skills gap is escalating, not static.

The work this week has already resulted in further development of an earlier framework into a concrete application: <strong>The Predictive Sales Coach</strong>. A solution where salespeople can train against a dynamic, virtual customer based on DISC psychology and concrete sales phases, while the system analyzes the dialogue objectively and provides precise points for improvement. The main goal is to train for an increased win-rate through structured and targeted training before you meet the customer.

Before the course, I also launched my own website (link in the first comment field). Overall, I feel that I have taken a clear step forward, from analysis to actual construction. AI is fundamentally not about technology alone, but about management, prioritization and the ability to connect insight to execution.

If you are curious about the app solution, or want to discuss the practical application of AI in your commercial business, I would be happy to have a chat. The days are also used for meetings with exciting resource persons and professional environments within AI, technology and commercial development - which both provides perspective and new ideas for further projects.

The motivation is great - the inspiration is greater!`},"ai-etikk-norden-01":{tittel:`AI, power, ethics and legitimacy – what does Nordic AI leadership require?`,teaser:"What does Nordic AI leadership require? About power, ethics, legitimacy and responsible governance.",innhold:`In the previous post in my AI series, I wrote about the controls that determine where the power lies when AI influences decisions. The next level is about ethics. When decision-making power is shifted from people to systems, not only a governance issue arises, but also a legitimacy issue.

Who is perceived as responsible when an algorithm prioritizes one customer over another? Who explains why a risk model gives different results? What happens when a dynamic pricing model differentiates prices based on willingness to pay - and the margin increases, but the experience of fairness weakens? What happens to the trust if the decision is effective, but is perceived as unreasonable?

Ethics in AI management is not primarily about regulations, but about how power is exercised and perceived. Here we see clear regional differences.

In the US, speed, scaling and market power are rewarded. Innovation is rolled out quickly, and corrections often take place afterwards. In parts of Asia, high technological progress is combined with strong central management, where direction and responsibility are defined from above.

In the Nordic countries, we stand in a different tradition. High institutional trust (OECD, World Values ​​Survey) and strong employee rights mean that legitimacy cannot be taken for granted. EU regulation, including the AI ​​Act, reinforces the requirements for accountability and explainability. Decision-making systems must withstand legal and social testing.

The debate surrounding the Norwegian Oil Fund's AI investment illustrates this field of tension. Ambitions to boost productivity and save billions are understandable, but raise questions about systemic risk, loss of institutional competence and "alpha decay" when many people use similar models. The question is not whether AI should be used, but whether the pace is accompanied by sufficient risk assessment and ethical grounding.

It can be experienced as a pace handicap, but also as a competitive advantage. Businesses that combine technological progress with ethical grounding will stand stronger over time. Without legitimacy, trust is weakened, and thus room for action and competitiveness.

AI management is therefore not only about governance, but about the responsible exercise of power. It is not just about what the systems can do, but about what they should do and how it is explained.

The real test of maturity is not how advanced the model is, but whether the organization can withstand the consequences of the decisions it influences, even when they are challenged.

The next step in the series is about the manager's judgement. When AI becomes part of the decision-making basis, it is no longer enough to understand the governance structures. Managers must understand how models respond to context, how hallucinations occur, and how recommendations should be critically assessed.

AI judgment is not a niche technical skill. It is a leadership skill.`}},$=_.map(e=>({...e,tittel:V(W(e.tittel),W(J[e.id]?.tittel??e.tittel)),teaser:V(e.teaser,J[e.id].teaser),innhold:V(e.innhold,J[e.id].innhold)})),Y=({innlegg:e,lang:r,onClick:i,lesLabel:s})=>{let a=e.bildeUrl.toLowerCase().endsWith(".mp4")||e.bildeUrl.toLowerCase().endsWith(".webm")||e.bildeUrl.toLowerCase().endsWith(".mov");return(0,t.jsxs)("div",{onClick:i,className:"group bg-slate-900/40 rounded-2xl border border-indigo-500/20 p-4 sm:p-6 hover:bg-slate-900/60 transition-all duration-300 shadow-xl flex flex-col sm:flex-row items-start gap-4 sm:gap-6 w-full text-left min-h-[200px] cursor-pointer",children:[(0,t.jsx)("div",{className:"w-full sm:w-[105px] h-[120px] sm:h-[160px] shrink-0 rounded-lg overflow-hidden bg-slate-800 border border-slate-800",children:a?(0,t.jsx)("video",{src:`${e.bildeUrl}?v=${e.dato}`,className:"w-full h-full object-cover transition-all duration-500",autoPlay:!0,muted:!0,loop:!0,playsInline:!0},`${e.bildeUrl}-${e.dato}`):(0,t.jsx)(n.default,{src:`${e.bildeUrl}?v=${e.dato}`,alt:e.tittel[r],width:105,height:160,className:"w-full h-full object-cover transition-all duration-500",unoptimized:!0},`${e.bildeUrl}-${e.dato}`)}),(0,t.jsxs)("div",{className:"flex-1 min-w-0 flex flex-col justify-between overflow-hidden",children:[(0,t.jsxs)("div",{className:"overflow-hidden",children:[(0,t.jsx)("span",{className:"text-[9px] font-mono text-indigo-400 uppercase tracking-widest font-bold block mb-1",children:e.visningsDato}),(0,t.jsx)("h3",{className:"text-lg font-sans font-bold text-white leading-tight truncate mb-1 group-hover:text-indigo-300 transition-colors",children:e.tittel[r]}),(0,t.jsx)("p",{className:"text-slate-400 text-[13px] leading-relaxed line-clamp-3 font-light",children:e.teaser[r]})]}),(0,t.jsxs)("div",{className:"mt-auto pt-2 flex items-center gap-4",children:[(0,t.jsxs)("span",{className:"inline-flex items-center gap-1 text-[9px] font-black uppercase tracking-widest text-indigo-400",children:[s," ",(0,t.jsx)("span",{children:"→"})]}),(0,t.jsxs)("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",onClick:e=>e.stopPropagation(),className:"inline-flex items-center gap-1 text-[9px] font-black uppercase tracking-widest text-slate-500 hover:text-white transition-all",children:["LinkedIn ",(0,t.jsx)(R,{size:10})]})]})]})]})},Q=({slides:e,lang:i,cacheVersion:s,pdfUrl:a})=>{let[o,l]=(0,r.useState)(0),d=e.length;if((0,r.useEffect)(()=>{l(0)},[e]),0===d)return null;let g=e[o],m=g.alt?.[i]??`Panel ${o+1}`;return(0,t.jsxs)("div",{className:"w-full max-w-[520px] mx-auto",children:[(0,t.jsxs)("div",{className:"relative rounded-lg overflow-hidden bg-slate-900 border border-slate-700/80",children:[(0,t.jsx)(n.default,{src:`${g.src}?v=${s}`,alt:m,width:520,height:720,className:"w-full h-auto max-h-[68vh] md:max-h-[75vh] object-contain",unoptimized:!0},`${g.src}-${o}`),d>1&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("button",{type:"button",onClick:()=>l(e=>(e-1+d)%d),className:"absolute left-2 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center rounded-full bg-slate-950/80 border border-slate-600 text-slate-300 hover:text-white hover:border-indigo-400 transition-all focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:outline-none","aria-label":"no"===i?"Forrige panel":"Previous panel",children:(0,t.jsx)(H,{size:20})}),(0,t.jsx)("button",{type:"button",onClick:()=>l(e=>(e+1)%d),className:"absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center rounded-full bg-slate-950/80 border border-slate-600 text-slate-300 hover:text-white hover:border-indigo-400 transition-all focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:outline-none","aria-label":"no"===i?"Neste panel":"Next panel",children:(0,t.jsx)(N,{size:20})}),(0,t.jsxs)("span",{className:"absolute bottom-2 right-2 px-2 py-0.5 rounded-md bg-slate-950/80 text-[10px] font-mono text-slate-400 border border-slate-700",children:[o+1," / ",d]})]})]}),d>1&&(0,t.jsx)("div",{className:"flex justify-center gap-1.5 mt-3 flex-wrap",children:e.map((e,r)=>(0,t.jsx)("button",{type:"button",onClick:()=>l(r),className:`w-2 h-2 rounded-full transition-all focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:outline-none ${r===o?"bg-indigo-400 w-5":"bg-slate-600 hover:bg-slate-500"}`,"aria-label":"no"===i?`G\xe5 til panel ${r+1}`:`Go to panel ${r+1}`,"aria-current":r===o?"true":void 0},r))}),a&&(0,t.jsx)("p",{className:"mt-3 text-center",children:(0,t.jsx)("a",{href:a,target:"_blank",rel:"noopener noreferrer",className:"text-[11px] font-bold uppercase tracking-widest text-indigo-400 hover:text-indigo-200 transition-colors",children:"no"===i?"Åpne hele tegneserien (PDF)":"Open full comic (PDF)"})})]})},X=({innlegg:e,lang:r,onClose:i,onNavigate:s,linkedinLabel:a,ctaText:o,ctaLink:l})=>{let d=e.innhold?.[r]||e.teaser[r],g=e.innhold?function(e,t){let r=e=>W(e).toLowerCase().replace(/<[^>]+>/g," ").replace(/[\u2013\u2014\u2212\-–—]/g," ").replace(/[^\p{L}\p{N}\s]/gu," ").replace(/\s+/g," ").trim(),n=e.split("\n\n").map(e=>e.trim()).filter(Boolean),i=r(t);if(!i)return e;let s=0,a="";for(let e=0;e<n.length;e++){let t=r(n[e].replace(/<[^>]+>/g," "));if(!t){s=e+1;continue}a=(a+" "+t).trim();let o=t===i||i===t||i.includes(t)||t.includes(i)||a===i||i.includes(a)||a.includes(i);if(o&&(s=e+1),a.length>2*i.length&&!o)break}return n.slice(s).join("\n\n")}(e.innhold[r],e.tittel[r]):d,m=e.bildeUrl.toLowerCase().endsWith(".mp4")||e.bildeUrl.toLowerCase().endsWith(".webm")||e.bildeUrl.toLowerCase().endsWith(".mov");return(0,t.jsx)("div",{className:"fixed inset-0 z-50 flex items-start justify-center bg-black/80 backdrop-blur-sm overflow-y-auto py-8 px-2 sm:px-4 modal-enter",onClick:i,children:(0,t.jsxs)("div",{className:"relative w-full max-w-3xl bg-slate-950 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden modal-enter",onClick:e=>e.stopPropagation(),role:"dialog","aria-modal":"true","aria-labelledby":"modal-title",children:[(0,t.jsx)("button",{onClick:i,className:"absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-slate-900/80 border border-slate-700 text-slate-400 hover:text-white hover:border-indigo-500 transition-all focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:outline-none","aria-label":"Lukk modal",children:(0,t.jsx)(L,{size:20})}),(0,t.jsx)("div",{className:"w-full flex justify-center bg-slate-900/50 p-4 sm:p-6",children:e.karusellBilder&&e.karusellBilder.length>0?(0,t.jsx)(Q,{slides:e.karusellBilder,lang:r,cacheVersion:e.dato,pdfUrl:e.karusellPdfUrl}):m?(0,t.jsx)("video",{src:`${e.bildeUrl}?v=${e.dato}`,className:"max-w-[420px] md:max-w-[520px] max-h-[68vh] md:max-h-[75vh] w-auto h-auto object-contain rounded-lg",controls:!0,autoPlay:!0,muted:!0,loop:!0,playsInline:!0},`${e.bildeUrl}-${e.dato}`):(0,t.jsx)(n.default,{src:`${e.bildeUrl}?v=${e.dato}`,alt:e.tittel[r],width:420,height:600,className:"max-w-[420px] md:max-w-[520px] max-h-[68vh] md:max-h-[75vh] w-auto h-auto object-contain rounded-lg",unoptimized:!0},`${e.bildeUrl}-${e.dato}`)}),(0,t.jsxs)("div",{className:"p-8 md:p-12 space-y-6",children:[(0,t.jsxs)("div",{className:"flex items-center gap-4 flex-wrap",children:[(0,t.jsx)("span",{className:"text-[10px] font-mono text-indigo-400 uppercase tracking-widest font-bold",children:e.visningsDato}),(0,t.jsx)("span",{className:"text-slate-700",children:"|"}),(0,t.jsx)("span",{className:"text-[10px] font-bold text-indigo-400 uppercase tracking-widest",children:e.kategori})]}),(0,t.jsx)("h2",{id:"modal-title",className:"text-3xl md:text-4xl font-sans font-black text-white tracking-tight leading-tight",children:e.tittel[r]}),(0,t.jsx)("div",{className:"w-16 h-0.5 bg-indigo-500/40"}),(0,t.jsx)("div",{className:"text-slate-300 text-base leading-relaxed space-y-0 [&_strong]:font-semibold [&_em]:italic",dangerouslySetInnerHTML:{__html:(g||d).split("\n\n").map(e=>{let t=e.trim();if(!t)return"";let r=t.split("\n").map(e=>e.trim()).filter(Boolean),n=r.filter(e=>e.startsWith("•")||e.startsWith("- "));if(n.length>0&&n.length===r.length){let e=n.map(e=>{let t=e.startsWith("•")?e.substring(1).trim():e.substring(2).trim();return`<li>${t}</li>`}).join("");return`<ul class="list-disc pl-6 space-y-2 my-4 text-slate-300 marker:text-indigo-400">${e}</ul>`}if(t.startsWith("•")||t.startsWith("- ")){let e=t.split("\n").filter(e=>e.trim().startsWith("•")||e.trim().startsWith("- ")).map(e=>{let t=e.trim(),r=t.startsWith("•")?t.substring(1).trim():t.substring(2).trim();return`<li>${r}</li>`}).join("");return`<ul class="list-disc pl-6 space-y-2 my-4 text-slate-300 marker:text-indigo-400">${e}</ul>`}return`<p class="mb-4">${t.replace(/\n/g,"<br/>")}</p>`}).join("")}}),(0,t.jsxs)("div",{className:"pt-6 border-t border-slate-800 space-y-4",children:[(0,t.jsxs)("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-3 px-8 py-4 bg-indigo-500 text-white rounded-xl font-black uppercase tracking-widest text-sm hover:bg-indigo-400 transition-all shadow-lg",children:[(0,t.jsx)(R,{size:16}),a]}),s&&(0,t.jsxs)("div",{className:"p-5 bg-slate-900/60 border border-indigo-500/15 rounded-xl",children:[(0,t.jsx)("p",{className:"text-slate-400 text-sm italic mb-3",children:o}),(0,t.jsxs)("button",{onClick:()=>{i(),s("Consulting")},className:"inline-flex items-center gap-2 text-indigo-400 font-black text-sm uppercase tracking-widest hover:text-white transition-all group/cta",children:[l,(0,t.jsx)(c,{size:16,className:"group-hover/cta:translate-x-1 transition-transform"})]})]})]})]})]})})},Z=({onNavigate:e})=>{let{lang:i}=f(),[s,a]=(0,r.useState)(null),o=[...q,...$].sort((e,t)=>new Date(t.dato).getTime()-new Date(e.dato).getTime()),l=new Set(["Kommersiell Ledelse","Generell ledelse og strategi"]),d=o.filter(e=>l.has(e.kategori)),g=o.filter(e=>"AI / KI"===e.kategori),m=(0,r.useCallback)(()=>a(null),[]);return(0,r.useEffect)(()=>{let e=e=>{"Escape"===e.key&&m()};return s&&(document.addEventListener("keydown",e),document.body.style.overflow="hidden"),()=>{document.removeEventListener("keydown",e),document.body.style.overflow=""}},[s,m]),(0,t.jsxs)("div",{className:"py-4 text-left w-full overflow-x-hidden",children:[(0,t.jsxs)("div",{className:"flex flex-col md:flex-row gap-6 items-start border-b border-slate-800/40 pb-6",children:[(0,t.jsx)("div",{className:"w-full md:w-[400px] shrink-0",children:(0,t.jsx)(n.default,{src:"/images/blogg.jpg",alt:"Innsikt og tankeledelse — Marius Ottesen",width:400,height:500,className:"w-full h-auto rounded-2xl shadow-xl border border-slate-800"})}),(0,t.jsxs)("div",{className:"flex-1 min-w-0 pt-2",children:[(0,t.jsxs)("h1",{className:"text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-black mb-6 tracking-tighter leading-tight text-white uppercase italic break-words max-w-full [overflow-wrap:anywhere]",children:[b("fag.title.1",i)," ",(0,t.jsx)("br",{}),(0,t.jsx)("span",{className:"text-indigo-500",children:b("fag.title.2",i)})]}),(0,t.jsxs)("div",{className:"max-w-3xl",children:[(0,t.jsx)("p",{className:"text-xl md:text-2xl text-slate-300 leading-relaxed font-light mb-4",children:b("fag.intro.1",i)}),(0,t.jsx)("p",{className:"text-lg md:text-xl text-slate-400 italic leading-relaxed font-light mb-4",children:b("fag.intro.2",i)}),(0,t.jsx)("p",{className:"text-base md:text-lg text-slate-300 leading-relaxed font-light",children:b("fag.intro.3",i)})]})]})]}),(0,t.jsxs)("div",{className:"mt-6 mb-6",children:[(0,t.jsxs)("h2",{className:"text-2xl font-bold tracking-tight text-white uppercase mb-4 break-words max-w-full [overflow-wrap:anywhere]",children:[b("fag.toc.title.1",i),(0,t.jsx)("br",{className:"sm:hidden"}),b("fag.toc.title.2",i)]}),(0,t.jsxs)("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{className:"text-lg font-semibold text-indigo-400 uppercase mb-2 border-b border-indigo-500/30 pb-1.5",children:b("fag.kat.ledelse",i)}),(0,t.jsx)("div",{className:"overflow-x-auto",children:(0,t.jsx)("table",{className:"w-full border-collapse",children:(0,t.jsx)("tbody",{children:d.map((e,r)=>(0,t.jsx)("tr",{onClick:()=>a(e),className:"border-b border-slate-800/40 hover:bg-slate-900/40 cursor-pointer transition-colors",children:(0,t.jsx)("td",{className:"py-1.5 px-2 text-sm font-sans font-normal text-slate-300 hover:text-indigo-300",children:e.tittel[i]})},e.id))})})})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{className:"text-lg font-semibold text-indigo-400 uppercase mb-2 border-b border-indigo-500/30 pb-1.5",children:b("fag.kat.ai",i)}),(0,t.jsx)("div",{className:"overflow-x-auto",children:(0,t.jsx)("table",{className:"w-full border-collapse",children:(0,t.jsx)("tbody",{children:g.map((e,r)=>(0,t.jsx)("tr",{onClick:()=>a(e),className:"border-b border-slate-800/40 hover:bg-slate-900/40 cursor-pointer transition-colors",children:(0,t.jsx)("td",{className:"py-1.5 px-2 text-sm text-slate-300 hover:text-indigo-300",children:e.tittel[i]})},e.id))})})})]})]})]}),(0,t.jsxs)("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mt-6 items-start",children:[(0,t.jsxs)("section",{className:"flex flex-col w-full",children:[(0,t.jsx)("div",{className:"border-b-2 border-indigo-500/30 mb-4 min-h-[4.5rem] flex flex-col justify-end",children:(0,t.jsx)("h2",{className:"text-2xl font-bold tracking-tight text-white uppercase mb-2",children:b("fag.kat.ledelse",i)})}),(0,t.jsx)("div",{className:"flex flex-col gap-4",children:d.length>0?d.map(e=>(0,t.jsx)(Y,{innlegg:e,lang:i,onClick:()=>a(e),lesLabel:b("fag.les",i)},e.id)):(0,t.jsx)("div",{className:"p-12 rounded-2xl border border-slate-800 bg-slate-900/40 italic text-slate-500 text-center font-light",children:b("fag.nye",i)})})]}),(0,t.jsxs)("section",{className:"flex flex-col w-full",children:[(0,t.jsx)("div",{className:"border-b-2 border-indigo-500/30 mb-4 min-h-[4.5rem] flex flex-col justify-end",children:(0,t.jsx)("h2",{className:"text-2xl font-bold tracking-tight text-white uppercase mb-2",children:b("fag.kat.ai",i)})}),(0,t.jsx)("div",{className:"flex flex-col gap-4",children:g.length>0?g.map(e=>(0,t.jsx)(Y,{innlegg:e,lang:i,onClick:()=>a(e),lesLabel:b("fag.les",i)},e.id)):(0,t.jsx)("div",{className:"p-12 rounded-2xl border border-slate-800 bg-slate-900/40 italic text-slate-500 text-center font-light",children:b("fag.nye",i)})})]})]}),s&&(0,t.jsx)(X,{innlegg:s,lang:i,onClose:m,onNavigate:e,linkedinLabel:b("fag.linkedin",i),ctaText:b("fag.cta",i),ctaLink:b("fag.cta.link",i)})]})},ee={id:"predictive-sales-coach-2026",tittel:{no:"The Predictive Sales Coach (PSCv6)",en:"The Predictive Sales Coach (PSCv6)"},teaser:{no:"Reduser usikkerhet og øk win-rate med AI-basert salgstrening gjennom realistiske simuleringer, dyp evaluering og målbar progresjon.",en:"An AI-powered training and decision-support tool for structured sales practice, realistic customer simulation, and faster capability building in B2B sales organisations."},bildeUrl:"/images/sales-coach-new2.jpg",bildeRamme:"cover",dato:"2026-02-26",visningsDato:"26.02.2026",bildeHint:{no:"Klikk på bildet for å se The Predictive Sales Coach i større format.",en:"Click the image to view The Predictive Sales Coach in a larger format."},bilderUnderHovedbilde:[{src:"/images/psc-v6-hurtigoppsett.png?v=20260519",alt:{no:"PSCv6 hurtigoppsett – DISC-profil, salgsfase, kundens holdning og vanskelighetsgrad",en:"PSCv6 quick setup – DISC profile, sales phase, customer attitude and difficulty level"}}],ekstraBilder:[{src:"/images/QR-PSCv6.png?v=20260509",alt:{no:"QR-kode for tilgang til The Predictive Sales Coach (PSC)v6-appen",en:"QR code for access to The Predictive Sales Coach (PSC)v6 app"}}],innhold:{no:`The Predictive Sales Coach er et konkret AI-basert trenings- og beslutningsst\xf8tteverkt\xf8y for B2B-salg, bygget for \xe5 trene selgere i realistiske kundesituasjoner f\xf8r de m\xf8ter kunden i virkeligheten. L\xf8sningen kombinerer DISC-psykologi med et strukturert fire-fasers salgsrammeverk, og lar brukeren simulere krevende kundem\xf8ter med ulik motstand, vanskelighetsgrad og fokusfase.

Etter hver simulering f\xe5r brukeren fasebasert evaluering, tydelig score breakdown og konkrete forbedringspunkter. Videreutviklingen har ogs\xe5 hatt fokus p\xe5 progresjon over tid, slik at b\xe5de selger og leder kan se m\xf8nstre, identifisere hvor det trenes for lite og styrke kvaliteten i kundeaktiviteten.

<strong>Hva er nytt i versjon 6?</strong>

Reduser usikkerhet og \xf8k din win-rate med fremtidens AI-baserte salgstrening. PSCv6 er et kraftfullt verkt\xf8y for strategisk kompetanseutvikling som lar deg simulere virkelighetsn\xe6re kundem\xf8ter f\xf8r de skjer i virkeligheten.

<strong>DISC-selvkartlegging:</strong> Start med \xe5 forst\xe5 din egen kommunikasjonsstil gjennom v\xe5r nye, integrerte DISC-baserte test.

<strong>Realistiske simuleringer:</strong> Tren p\xe5 spesifikke rollespill der du m\xf8ter ulike beslutningstakere og personlighetstyper. \xd8v p\xe5 \xe5 h\xe5ndtere argumenter og motstand skreddersydd til den enkelte kunden.

<strong>Dyp-evaluering og analyse:</strong> Etter hver \xf8kt f\xe5r du en objektiv analyse og et scorecard. Dette gir b\xe5de selger og leder et unikt datagrunnlag for \xe5 identifisere m\xf8nstre, tette blindsoner og dokumentere progresjon over tid.

PSC transformerer teoretisk salgsmetodikk til praktisk ferdighet, slik at du alltid er best forberedt n\xe5r det gjelder. L\xf8sningen er s\xe6rlig relevant for onboarding, m\xf8teforberedelse, salgsledelse og l\xf8pende kapabilitetsutvikling i team.

<strong>\xd8nsker du tilgang til PSCv6?</strong><br/>Skann QR-koden nedenfor eller klikk p\xe5 <a href="https://pscv6-744893320985.europe-west2.run.app/" target="_blank" rel="noopener noreferrer">Be om tilgang til PSC-appen</a> for \xe5 starte reisen mot smartere salg.`,en:`The Predictive Sales Coach is a practical AI-based training and decision-support tool for B2B sales, built to train sales professionals in realistic customer situations before they meet real clients. The solution combines DISC psychology with a structured four-phase sales framework and lets users simulate demanding customer meetings with varying resistance, difficulty, and focus phases.

After each simulation, users receive phase-based feedback, objective scoring with a clear score breakdown, and concrete improvement actions. The V3 logic is further developed with history and an analytics dashboard, enabling both sales reps and leaders to track progress over time, identify patterns, and see which sales phases and customer types require more training.

The solution is especially relevant for onboarding, meeting preparation, sales leadership, and continuous team capability development. The result is reduced time-to-competence, higher quality customer dialogues, and a stronger foundation for improving win-rate over time.

The underlying logic can also be extended to adjacent training and simulation scenarios, such as negotiation training, role-reversal for better counterpart understanding, and more advanced team insight for sales leaders.`}},et={id:"psc-promo-video-moc-2026",tittel:{no:"Promovideo: The Predictive Sales Coach & Marius Ottesen Consulting",en:"Promo video: The Predictive Sales Coach & Marius Ottesen Consulting"},teaser:{no:"PSCv6, DISC og strukturert salgstrening — og min første AI-genererte reklamefilm.",en:"PSCv6, DISC and structured sales training — plus my first AI-generated commercial."},bildeUrl:"/images/psc-promo-video-poster.png",dato:"2026-05-06",visningsDato:"06.05.26",videoUrl:"/images/promovideo-final.mov",videoFormat:"portrait",bildeHint:{no:"Klikk på bildet for å starte avspilling av promovideo",en:"Click the image to start playing the promo video"},innhold:{no:`Dette er en promovideo for <a href="https://pscv6-744893320985.europe-west2.run.app/" target="_blank" rel="noopener noreferrer" class="focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400">The Predictive Sales Coach</a> (PSCv6) og <a href="https://www.mariusottesen.no/consulting" class="focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400">Marius Ottesen Consulting</a>. Videoen er laget for \xe5 vise hvordan AI, DISC-basert kundepsykologi og strukturert salgstrening gjennom PSC kan gj\xf8re m\xf8teforberedelser mer presise, relevante og m\xe5lbare. Den markerer ogs\xe5 min f\xf8rste AI-genererte reklamefilm, der video, lyd og visuelt innhold er utviklet ved hjelp av generativ AI.

Filmen viser hvordan en selger og salgssjef kan bruke PSC til \xe5 forberede seg p\xe5 et realistisk kundem\xf8tescenario, forst\xe5 kundens personprofil, trene p\xe5 ulike salgsfaser og g\xe5 inn i m\xf8tet med st\xf8rre trygghet, tydeligere budskap og bedre forutsetninger for \xe5 vinne avtalen.

PSC er et AI-basert trenings- og beslutningsst\xf8tteverkt\xf8y for B2B-salg. L\xf8sningen er bygget for realistiske kundesimuleringer, der brukeren selv setter opp salgssituasjon, kundetype, m\xe5l og salgsfase. Deretter kan selgeren trene p\xe5 kundem\xf8ter med realistiske innvendinger, motargumenter og responsm\xf8nstre, basert p\xe5 scenarioet som er definert i forkant.

Etter hver \xf8kt f\xe5r brukeren fasebasert evaluering, scorecard og konkrete forbedringspunkter, slik at salgsmetodikk kan trenes og forbedres f\xf8r den brukes i virkelige kundem\xf8ter.

Videoen ble produsert i Higgsfield, med modellen Seedance 2.0 brukt til \xe5 generere scenene. Redigering, color grading og ferdigstillelse ble gjort i DaVinci Resolve Studio, mens lyd og musikk er hentet fra Pixabay.`,en:`This is a promotional video for <a href="https://pscv6-744893320985.europe-west2.run.app/" target="_blank" rel="noopener noreferrer" class="focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400">The Predictive Sales Coach</a> (PSCv6) and <a href="https://www.mariusottesen.no/consulting" class="focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400">Marius Ottesen Consulting</a>. It is designed to show how AI, DISC-based customer psychology, and structured sales training through PSC can make meeting preparation more precise, relevant, and measurable. It also marks my first AI-generated commercial, where video, audio, and visuals were produced using generative AI.

The film shows how a salesperson and sales manager can use PSC to prepare for a realistic customer-meeting scenario, understand the customer’s profile, practise different sales phases, and enter the meeting with greater confidence, clearer messaging, and a stronger chance of winning the deal.

PSC is an AI-based training and decision-support tool for B2B sales. It is built for realistic customer simulations: the user defines the sales situation, customer type, objectives, and sales phase. The seller can then practise meetings with realistic objections, counterarguments, and response patterns, based on the scenario set up in advance.

After each session, users receive phase-based evaluation, a scorecard, and concrete improvement points, so sales methodology can be trained and refined before it is used in real customer meetings.

<a href="https://www.mariusottesen.no/consulting" class="link-subtle focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400">Marius Ottesen Consulting</a> develops practical AI projects where technology is tied to commercial value, decision support, and operational execution. The common thread is making AI useful in practice — where strategy becomes workflow, better decisions, and measurable impact.`}},er={id:"ai-value-lab-oslo-2026",tittel:{no:"AI Value Lab Oslo",en:"AI Value Lab Oslo"},teaser:{no:"Tverrfaglig lærings- og byggeinitiativ der teknologi, forretning og praktisk utvikling møtes for å utforske ansvarlig bruk av AI gjennom reelle case.",en:"A cross-disciplinary learning initiative where technology, business, and practical development meet to explore how AI can be understood, tested, and used responsibly."},bildeUrl:"/images/ai-value-lab.jpeg",dato:"2026-03-29",visningsDato:"29.03.2026",bildeHint:{no:"Klikk på bildet for å se AI Value Lab Oslo i større format.",en:"Click the image to view AI Value Lab Oslo in a larger format."},ekstraBilder:[{src:"/images/ai-value-lab-banner.png",alt:{no:"AI Value Lab Oslo — deltakere",en:"AI Value Lab Oslo — participants"}},{src:"/images/ai-value-lab-logo.png",alt:{no:"AI Value Lab Oslo — logo",en:"AI Value Lab Oslo — logo"}}],innhold:{no:`AI Value Lab Oslo er et tverrfaglig l\xe6ringsinitiativ der teknologi, forretning og praktisk utvikling m\xf8tes for \xe5 utforske hvordan AI kan forst\xe5s, testes og anvendes p\xe5 en ansvarlig m\xe5te. Gruppen bruker case og problemstillinger som l\xe6ringsarena for \xe5 bygge kompetanse, pr\xf8ve ut verkt\xf8y, dele erfaringer og utvikle praktisk forst\xe5else p\xe5 tvers av fagomr\xe5der. M\xe5let er \xe5 l\xe6re gjennom samarbeid — og styrke evnen til \xe5 identifisere, vurdere og utforske relevante AI-muligheter i praksis.

Det som kjennetegner initiativet, er kombinasjonen av ulike perspektiver og komplement\xe6re styrker. Vi diskuterer ikke bare AI som teknologi, men bygger innsikt som er relevant i virkelige arbeidssituasjoner — med fokus p\xe5 ansvarlig bruk, l\xe6ring i praksis og l\xf8sninger som kan skape reell verdi.

Gruppen best\xe5r av Marius Ottesen, Tatiana Hanecakova og Ole Mjelde. Marius bidrar med erfaring fra kommersiell ledelse, strategi og organisasjonsutvikling, med s\xe6rlig styrke i gjennomf\xf8ring og koblingen mellom forretning, teknologi og verdiskaping. Tatiana bidrar med bakgrunn fra finansledelse og praktisk erfaring med AI-drevne arbeidsflyter — opptatt av l\xf8sninger som t\xe5ler virkeligheten og skaper konkret verdi. Ole bidrar med erfaring fra digitalisering, innovasjon og endringsarbeid i store nordiske virksomheter, med et praktisk blikk p\xe5 hvordan nye l\xf8sninger utvikles, testes og tas i bruk.

Jeg var initiativtaker til etableringen av AI Value Lab Oslo.

Les mer via LinkedIn: <a href="https://www.linkedin.com/company/aivaluelaboslo/" target="_blank" rel="noopener noreferrer">AI Value Lab Oslo</a>.`,en:`AI Value Lab Oslo is a cross-disciplinary learning initiative where technology, business, and hands-on development meet to explore how AI can be understood, tested, and applied responsibly. The group uses cases and real challenges as learning arenas to build competence, try tools, share experience, and develop practical understanding across disciplines. The goal is to learn through collaboration — and strengthen the ability to identify, assess, and explore relevant AI opportunities in practice.

What characterises the initiative is the combination of different perspectives and complementary strengths. We do not only discuss AI as technology; we build insight that matters in real working situations — with a focus on responsible use, learning in practice, and solutions that create genuine value.

The group consists of Marius Ottesen, Tatiana Hanecakova, and Ole Mjelde. Marius contributes experience from commercial leadership, strategy, and organisational development, with particular strength in execution and connecting business, technology, and value creation. Tatiana contributes a background in financial leadership and hands-on experience building AI-driven workflows — focused on solutions that work in reality and deliver concrete value. Ole contributes experience from digitalisation, innovation, and change in large Nordic organisations, with a practical view of how new solutions are developed, tested, and adopted.

I was the initiator behind establishing AI Value Lab Oslo.

Read more on LinkedIn: <a href="https://www.linkedin.com/company/aivaluelaboslo/" target="_blank" rel="noopener noreferrer">AI Value Lab Oslo</a>.`}},en={id:"skoyenasen-tannklinikk-2026",tittel:{no:"Skøyenåsen Tannklinikk",en:"Skoyenasen Dental Clinic"},teaser:{no:"Virksomhetsnært AI-case for pasientreise, smart intake, veiledet booking og mer systematisk oppfølging.",en:"A business-near AI case focused on patient journey, smart intake, guided booking, and more systematic follow-up."},bildeUrl:"/images/skoyenasen-tk.gif",dato:"2026-03-26",visningsDato:"26.03.2026",bildeHint:{no:"Klikk på bildet for å se Skøyenåsen Tannklinikk i større format.",en:"Click the image to view Skøyenåsen Tannklinikk in a larger format."},ekstraBilder:[{src:"/images/skoyenasen-tannklinikk-logo.png",alt:{no:"Skøyenåsen Tannklinikk — logo",en:"Skøyenåsen Dental Clinic — logo"}}],innhold:{no:`Sk\xf8yen\xe5sen Tannklinikk er et konkret utviklingscase med fokus p\xe5 hvordan AI og digitale l\xf8sninger kan forbedre pasientreisen fra f\xf8rste kontakt til oppf\xf8lging. Arbeidet tar utgangspunkt i konkrete behov knyttet til behovsavklaring, riktigere booking, tydeligere informasjon og mer systematisk oppf\xf8lging.

I f\xf8rste fase vurderes s\xe6rlig l\xf8sninger for smart intake, veiledet booking, mer relevant kommunikasjon og en sterkere digital front-end. M\xe5let er \xe5 forbedre flyt, tilgjengelighet og oppf\xf8lging uten \xe5 miste det personlige preget som er en viktig del av klinikkens styrke.

Prosjektet er valgt fordi det kombinerer tydelig forretningsverdi, h\xf8y pasientverdi og h\xe5ndterbar governance. Fokus ligger derfor forel\xf8pig p\xe5 front-end og pasientreise, ikke p\xe5 journaln\xe6re og mer sensitive AI-l\xf8sninger.

Bes\xf8k klinikkens nettside: <a href="https://xn--skyensentannklinikk-4wb90b.no/" target="_blank" rel="noopener noreferrer">Sk\xf8yen\xe5sen Tannklinikk</a>.`,en:`Skoyenasen Dental Clinic is a business-near development case focused on how AI and digital solutions can improve the patient journey before and after treatment. The work is based on concrete needs related to needs clarification, more accurate booking, clearer information, better follow-up, and a more modern digital patient flow.

In the first phase, we are primarily assessing solutions such as smart intake, guided booking, more relevant communication, and further development of the website and chatbot as part of a stronger front-end. The goal is to improve flow, accessibility, and follow-up without losing the personal touch that is a key strength of the clinic.

The project was selected because it combines clear business value, high patient value, moderate technical complexity, and manageable governance. Therefore, the first phase focuses on front-end and patient journey, not journal-adjacent and more sensitive AI solutions.

The project is under development. The solutions described here are not yet deployed on the clinic's website.

Visit the clinic website: <a href="https://xn--skyensentannklinikk-4wb90b.no/" target="_blank" rel="noopener noreferrer">Skoyenasen Dental Clinic</a>.`}},ei={id:"ai-arkitektur-beslutningsstotte-2026",tittel:{no:"AI-arkitektur for beslutningsstøtte",en:"AI Architecture for Decision Support"},teaser:{no:"Generativ AI brukt til å strukturere kompleksitet, identifisere gap, avdekke mønstre og styrke beslutningsgrunnlaget i strategi, salg, governance og operativ utvikling.",en:"Generative AI used to structure complexity, identify gaps, uncover patterns, and strengthen decision foundations across strategy, sales, governance, and operations."},bildeUrl:"/images/ai-beslutningsstotte-dashboard.png?v=20260519",bildeRamme:"natural",dato:"2026-03-05",visningsDato:"05.03.2026",bildeHint:{no:"Klikk på bildet for å se AI-arkitektur for beslutningsstøtte i større format.",en:"Click the image to view AI architecture for decision support in a larger format."},navigasjonsCta:{tab:"Kontakt",beskrivelse:{no:"Ta gjerne kontakt for en samtale om hvordan denne arkitekturen kan tilpasses din virksomhet — fra innsikt og gap-analyse til et konkret beslutningsstøtte-spor med ansvarlig bruk av AI.",en:"Please get in touch to discuss how this architecture can be adapted for your organisation — from insight and gap analysis to a concrete decision-support track with responsible use of AI."},label:{no:"Gå til kontaktskjema",en:"Go to contact form"}},innhold:{no:`Som kommersiell leder har jeg flere ganger sett hvor krevende det er \xe5 omsette store informasjonsmengder til tydelige prioriteringer og konkret handling. Strategidokumenter, KPI-strukturer, salgsprosesser, anbudsdokumenter og regulatoriske krav skaper ofte mer kompleksitet enn fremdrift.

Jeg bygger derfor en arkitektur for \xe5 bruke generativ AI til \xe5 bryte ned slike problemstillinger mer systematisk. M\xe5let er \xe5 identifisere gap, m\xf8nstre og handlingsalternativer tidligere, slik at ledere f\xe5r et tydeligere grunnlag for prioritering og gjennomf\xf8ring.

Den samme logikken brukes n\xe5 som teknisk fundament i flere praktiske spor, blant annet The Predictive Sales Coach og en mer agentisk innsikts- og opportunity-flyt. Det gj\xf8r arkitekturen relevant som byggestein for flere typer leder- og beslutningsverkt\xf8y.

Overf\xf8ringsverdien ligger i at konseptet ikke er bundet til ett domene: samme tiln\xe6rming kan tilpasses andre virksomheter som trenger \xe5 omsette data, dokumenter og erfaring til tydeligere innsikt, gap-analyse og prioriteringer. Jeg hjelper gjerne lederteam med \xe5 kartlegge hvor en slik arkitektur gir st\xf8rst effekt, og med \xe5 skissere et f\xf8rste spor fra id\xe9 til fungerende prototype.

<em>Et praktisk AI-spor for virksomheter som \xf8nsker bedre innsikt, tydeligere prioriteringer og mer operativ gjennomf\xf8ring.</em>`,en:`As a commercial leader, I have repeatedly participated in strategy processes where ambitions are clear, but the link to actual execution is weaker. Strategy documents, KPI structures, sales processes, RFP documents, and regulatory requirements create large volumes of information that are demanding to analyse systematically.

I am therefore developing a method to use generative AI to structure and analyse these challenges more effectively. The goal is to identify gaps, patterns, and action alternatives earlier, so leaders gain a clearer basis for prioritisation and execution. The core logic is simple:

Documents and data -> AI deconstruction -> strategic insight -> decision support.

The objective is not to replace leadership, but to give leaders a better foundation for assessments and decisions. By using tools such as GPT-4o, Claude, Gemini, Cursor, and Streamlit, I have developed a technical foundation that makes it possible to prototype and build multiple decision-support tools on the same architecture.

The same logic can be applied to areas such as strategy and execution, commercial excellence and sales, tender and RFP processes, governance and compliance, as well as onboarding and capability development.

<em>The Predictive Sales Coach</em> is a concrete example of how this architecture can be translated into a focused product with clear business value.

The transfer value is that the concept is not tied to one domain: the same approach can be adapted for other organisations that need to turn data, documents, and experience into clearer insight, gap analysis, and priorities. I am happy to help leadership teams map where this kind of architecture creates the most impact, and to outline a first track from idea to working prototype.

A practical AI track for organisations that want better insight, clearer priorities, and stronger operational execution.`}},es={id:"ai-faginnlegg-serie-2026",tittel:{no:"Faginnlegg: AI & fremtidens teknologiledelse",en:"Articles: AI & Next-Generation Technology Leadership"},teaser:{no:"Teori, rammeverk, masterarbeid fra BI, rapportutdrag, verktøy og praktiske erfaringer – løpende oppdatert.",en:"Theory, frameworks, BI master's insights, report excerpts, tools, and hands-on practice — plus concrete tips from real cases. Continuously updated."},bildeUrl:"/images/nova-day.jpg",dato:"2026-04-13",visningsDato:"",bildeHint:{no:"Klikk på bildet for å se illustrasjonen i større format.",en:"Click the image to view the illustration in a larger format."},navigasjonsCta:{tab:"Faginnlegg",label:{no:"Åpne alle innlegg under Faginnlegg",en:"Open all posts under Articles"}},innhold:{no:`Dette er ikke ett enkelt produkt, men et samlet spor av egenforfattede innlegg der jeg utforsker hva AI betyr i praksis for ledelse, kommersielle prioriteringer, transformasjon og verdiskaping.

Under fanen Faginnlegg ligger innleggene i to kolonner. Alt som er merket AI & fremtidens teknologiledelse h\xf8rer til denne serien. Her kobler jeg teori og rammeverk med egne erfaringer, rapporter, kurs, masterarbeid og reelle case.

M\xe5let er ikke bare \xe5 forklare teknologien, men \xe5 gj\xf8re den mer relevant for ledere som skal prioritere, gjennomf\xf8re og skape effekt.`,en:`This is not a single product or prototype, but a curated track of authored posts where I explore what artificial intelligence means in practice for leadership, commercial decision-making, and value creation.

Under the Articles tab, the posts are organised in two columns. Everything tagged AI & Next-Generation Technology Leadership belongs to this series. It includes theory and frameworks (for example maturity models, governance, and decision support), experience from AI master's studies at BI, various courses and seminars, and selected excerpts and commentary from reports and analyses relevant to both private and public sectors.

I also include tools and lessons from my own use and testing, in addition to practical tips from real-world cases where AI meets operations, sales, risk, and people. Other themes range from data and context, RAG and agents, to ethics and other topics that matter for building AI capability.

The series is updated continuously. You will also find links to further reading on <a href="https://www.linkedin.com/in/mariusottesen/recent-activity/all/" target="_blank" rel="noopener noreferrer">LinkedIn</a> for each topic.`}},ea={id:"ai-assistert-innsikts-og-opportunity-agent-2026",tittel:{no:"FRA INNSIKT TIL KOMMERSIELL HANDLING: AGENTISK ARBEIDSFLYT",en:"From Insight to Commercial Action: An Agent I Built"},teaser:{no:"Et praktisk AI-prosjekt der jeg videreutvikler en mer agentisk arbeidsflyt for å forstå oppgaven, velge riktig prosess og omsette innsikt til konkret kommersiell handling.",en:"A practical AI project where I am building a more agentic workflow to understand the task, choose the right process, and move from insight to concrete action."},bildeUrl:"/images/innsikt-handling.png",bildeRamme:"natural",dato:"2026-04-24",visningsDato:"24.04.26",bildeHint:{no:"Klikk på bildet for å se innsikt-handling i større format.",en:"Click the image to view insight-action in a larger format."},innhold:{no:`Et praktisk AI-prosjekt der jeg videreutvikler en mer agentisk arbeidsflyt for \xe5 forst\xe5 oppgaven, velge riktig prosess og omsette innsikt til konkret kommersiell handling.

Prosjektet startet som et behov for \xe5 gj\xf8re egen kunnskapsbank mer operativ i utvikling av lederrelevant innhold. L\xf8sningen er n\xe5 videreutviklet fra en sekvensiell innholdsapp til en mer agentisk arbeidsflyt med oppgaveforst\xe5else, workflow-routing, differensiert kontekstbruk og forslag til neste steg.

I f\xf8rste versjon h\xe5ndterer l\xf8sningen b\xe5de innholdsarbeid og opportunity discovery. Det betyr at den ikke bare henter og strukturerer innsikt fra Notion, men ogs\xe5 bruker en egen target-database til \xe5 prioritere relevante selskaper og strategiske kontaktpunkter, foresl\xe5 kontaktstrategi og utforme f\xf8rste outreach-utkast.

Det mest interessante er ikke tekstgenereringen i seg selv, men hvordan AI kan brukes til \xe5 prioritere, strukturere og drive en konkret arbeidsflyt frem mot handling. Dette er s\xe6rlig relevant for salg og kommersielle milj\xf8er som \xf8nsker \xe5 gj\xf8re strategi, prioritering og bearbeiding mer operativt i praksis.

Dette er ett av flere praktiske AI-prosjekter jeg bygger for \xe5 utforske hvordan teknologi kan kobles tettere til arbeidsflyt, ledelse og m\xe5lbar verdi i praksis.`,en:`This project started as a need to use my own knowledge base more operationally in the development of professional content and thought leadership. The solution retrieves relevant sources from Notion, evaluates and ranks matches, and builds suggestions for core angle, headlines, first drafts, image concepts, and further editing. The project is still under development, with ongoing testing and iterative refinement.

The most interesting part is not text generation itself, but how retrieval, prioritisation, structuring, and quality evaluation can be connected in one workflow. The project is also a step toward more agentic ways of working, where AI does not only answer, but helps select, weight, propose, and improve the next step in a concrete process.

I use this project as a practical build arena to explore how AI can make existing knowledge more useful, more accessible, and more decision-relevant. This is especially relevant for leaders and organisations that sit on substantial insight, but struggle to make it operational in communication, positioning, and execution.

<em>This is one of several practical AI projects I am building to explore how technology can be connected more closely to workflow, leadership, and measurable value in practice.</em>`}},eo={id:"ai-assistert-innsikts-og-innholdsagent-2026",tittel:{no:"AI-ASSISTERT INNSIKTS- OG INNHOLDSMOTOR",en:"AI-Assisted Insight and Content Agent"},teaser:{no:"En egenutviklet AI-løsning som omsetter kunnskapsbank til publiserbart innhold, tydelige budskap og mer kommersiell gjennomslagskraft.",en:"A custom-built agent that turns a knowledge base into publishable content, sharper messaging, and stronger commercial impact."},bildeUrl:"/images/ai-assistert-arbeidsflyt.jfif",dato:"2026-04-20",visningsDato:"20.04.26",bildeHint:{no:"Klikk på bildet for å se arbeidsflyten i større format.",en:"Click the image to view the workflow in a larger format."},innhold:{no:`Et praktisk AI-prosjekt utviklet for \xe5 gj\xf8re egen kunnskapsbank mer operativ i utvikling av faginnhold, refleksjoner og lederrelevant kommunikasjon.

L\xf8sningen henter innsikt fra Notion, rangerer relevante kilder og bygger forslag til hovedvinkel, overskrifter, f\xf8rsteutkast, hashtags, bildeid\xe9 og bildeprompt.

M\xe5let er \xe5 redusere avstanden mellom lagret innsikt og faktisk bruk. I stedet for at kunnskap blir liggende passivt i en database, kan den raskere omsettes til strukturert innhold med tydeligere budskap og mer kommersiell gjennomslagskraft.

Dette prosjektet representerer grunnmotoren i videre utvikling, og er senere bygget videre til en mer agentisk arbeidsflyt med oppgaveforst\xe5else, workflow-routing og st\xf8tte for opportunity discovery.`,en:`The solution retrieves insight from Notion, ranks relevant sources, and builds suggestions for core angle, headlines, first draft, hashtags, image concept, and image prompt. The goal has been to reduce the gap between stored insight and actual use.

The project serves as a core engine for further development, and has later been extended into a more agentic workflow with task understanding, workflow routing, and support for opportunity discovery.`}},el={id:"prosjektoppgave-strategisk-implementering-2026",tittel:{no:"Strategisk AI-implementering: Fra case til gjennomførbar plan",en:"Strategic AI implementation: From case to executable plan"},teaser:{no:"Prosjektoppgave fra Generative AI for Business ved BI — systematisk gjennomføring av hele AI-reisen, med Skøyenåsen Tannklinikk som case og konkrete digitale leveranser.",en:"Master's project from Generative AI for Business at BI — a systematic journey through AI implementation, with Skøyenåsen Dental Clinic as the case and concrete digital deliverables."},bildeUrl:"/images/prosjektoppgave-strategisk-implementering.png",dato:"2026-05-20",visningsDato:"20.05.26",bildeHint:{no:"Klikk på bildet for å se prosjektoppgaven i større format.",en:"Click the image to view the master's project in a larger format."},navigasjonsCta:{tab:"Kontakt",beskrivelse:{no:"Ta gjerne kontakt for en samtale om dine utfordringer og behov — også for virksomheter som ønsker bedre kundedialog, flyt og ansvarlig bruk av AI.",en:"Please get in touch for a conversation about your challenges and needs — also for organisations that want stronger customer dialogue, flow and responsible use of AI."},label:{no:"Gå til kontaktskjema",en:"Go to contact form"}},innhold:{no:`Dette prosjektet er utviklet som del av prosjektoppgaven i <em>Generative AI for Business</em> ved BI. Sk\xf8yen\xe5sen Tannklinikk er det konkrete caset, men hovedl\xe6ringen har ligget i \xe5 jobbe systematisk med hele AI-implementeringsreisen.

Arbeidet handlet ikke bare om \xe5 teste AI-verkt\xf8y eller utvikle digitale l\xf8sninger. Det handlet om \xe5 forst\xe5 reelt forretningsbehov, analysere kunde- og arbeidsflyt, avgrense riktig bruksomr\xe5de, vurdere risiko og bygge en implementeringsplan som kan vurderes p\xe5 lederniv\xe5.

Prosjektoppgaven beskriver denne reisen gjennom problemforst\xe5else, l\xf8sningsdesign, roadmap, teknologi, governance, personvern, ansvarlig bruk, skalering og menneskelig kontroll. I tillegg ble det levert ny digital front-end, chatbot med text og speech-to-text, st\xf8tte for seks spr\xe5k, behovsavklaring, bookinglogikk, oppf\xf8lging og recall.

Den viktigste l\xe6ringen er at god AI-implementering ikke starter med teknologien, men der kunder, brukere og ansatte opplever friksjon — og der AI kan skape verdi uten \xe5 overta vurderinger mennesker fortsatt b\xf8r eie. Selv om caset kommer fra tannhelse, gjelder m\xf8nsteret bredt: uklare henvendelser, manuelle kundereiser og fragmentert oppf\xf8lging finnes i mange bransjer, og gir grunnlag for videref\xf8ring mot andre klinikker og servicebedrifter.`,en:`This project was developed as part of the master's thesis in <em>Generative AI for Business</em> at BI Norwegian Business School. Sk\xf8yen\xe5sen Dental Clinic is the concrete case, but the main learning has been to work systematically through the full AI implementation journey.

The work was not only about testing AI tools or developing digital solutions. It was about understanding real business needs, analysing customer and work flows, scoping the right use case, assessing risk, and building an implementation plan that can be evaluated at leadership level.

The thesis describes this journey through problem understanding, solution design, roadmap, technology, governance, privacy, responsible use, scaling, and human control. In addition, deliverables included a new digital front-end, chatbot with text and speech-to-text, support for six languages, needs clarification, booking logic, follow-up and recall.

The most important lesson is that good AI implementation does not start with technology, but where customers, users and employees experience friction — and where AI can create value without taking over judgements people should still own. Although the case comes from dental care, the pattern is broader: unclear inquiries, manual customer journeys and fragmented follow-up exist across many industries, and provide a basis for extension to other clinics and service businesses.`}},ed=new Set(["predictive-sales-coach-2026","psc-promo-video-moc-2026"]);function eg(e){return e.replace(/\(PSC(v\d+)\)/gi,'(<span class="psc-mark">PSC</span><span class="psc-v">$1</span>)').replace(/\(PSC\)\s*(v\d+)/g,'(<span class="psc-mark">PSC</span><span class="psc-v">$1</span>)').replace(/PSC\s*(v\d+)/g,'<span class="psc-mark">PSC</span><span class="psc-v">$1</span>').replace(/\(PSC\)/g,'<span class="psc-mark">(PSC)</span>')}function em(e){return eg(e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"))}let eh=[...[el,et,ea,eo,ee,er,en,ei].sort((e,t)=>new Date(t.dato).getTime()-new Date(e.dato).getTime()),es];function ec(e){return"landscape"===e.videoFormat?"aspect-video":"aspect-[9/16]"}function ek({onNavigate:e}){let{lang:i}=f(),[s,a]=(0,r.useState)(null),[o,l]=(0,r.useState)(null);return(0,t.jsxs)("div",{className:"py-4 text-left w-full overflow-x-hidden min-w-0",children:[(0,t.jsxs)("div",{className:"flex flex-col md:flex-row gap-6 items-start border-b border-slate-800/40 pb-6 min-w-0",children:[(0,t.jsx)("div",{className:"w-full md:w-[400px] shrink-0 min-w-0",children:(0,t.jsx)(n.default,{src:"/images/etikk.jfif",alt:"Etikk og ansvarlig bruk av AI — illustrasjon",width:400,height:500,className:"w-full h-auto rounded-2xl shadow-2xl border border-slate-800 object-cover max-w-full"})}),(0,t.jsxs)("div",{className:"flex-1 min-w-0 pt-2 overflow-hidden",children:[(0,t.jsxs)("h1",{className:"text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-black mb-6 tracking-tighter leading-tight text-white uppercase italic break-words [overflow-wrap:anywhere]",children:[b("prosjekter.title.1",i)," ",(0,t.jsx)("br",{}),(0,t.jsx)("span",{className:"text-indigo-500",children:b("prosjekter.title.2",i)})]}),(0,t.jsxs)("div",{className:"max-w-3xl min-w-0",children:[(0,t.jsx)("p",{className:"text-xl md:text-2xl text-slate-300 leading-relaxed font-light mb-4 break-words",children:b("prosjekter.intro.1",i)}),(0,t.jsx)("p",{className:"text-lg md:text-xl text-slate-400 italic leading-relaxed font-light break-words",children:b("prosjekter.intro.2",i)})]})]})]}),(0,t.jsx)("div",{className:"mt-8 space-y-8 min-w-0",children:eh.map(r=>{var s;let d,g=(d=r.bildeHint?.[i])||("no"===i?`Klikk p\xe5 bildet for \xe5 se ${r.tittel.no} i st\xf8rre format.`:`Click the image to view ${r.tittel.en} in a larger format.`),m=(s=r.id,ed.has(s)),h="predictive-sales-coach-2026"===r.id?r.ekstraBilder?.[0]:void 0;return(0,t.jsx)("article",{className:m?"bg-[#0B1120] rounded-2xl border border-slate-800/80 overflow-hidden shadow-xl min-w-0":"bg-slate-900/40 rounded-2xl border border-indigo-500/20 overflow-hidden shadow-xl min-w-0",children:(0,t.jsxs)("div",{className:"flex flex-col md:flex-row gap-0 min-w-0",children:[(0,t.jsxs)("div",{className:"w-full md:w-[220px] lg:w-[260px] shrink-0 flex flex-col items-center gap-2 self-start",children:[r.videoEmbedUrl||r.videoUrl?o===r.id?(0,t.jsx)("div",{className:`w-full ${ec(r)} relative bg-slate-800 overflow-hidden rounded-lg border border-slate-700/60`,children:r.videoUrl?(0,t.jsx)("video",{src:r.videoUrl,className:"absolute inset-0 w-full h-full object-cover",controls:!0,autoPlay:!0,playsInline:!0}):(0,t.jsx)("iframe",{src:r.videoEmbedUrl,title:r.tittel[i],className:"absolute inset-0 w-full h-full border-0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0})}):(0,t.jsx)("button",{type:"button",onClick:()=>l(r.id),className:`w-full ${ec(r)} relative bg-slate-800 overflow-hidden rounded-lg border border-slate-700/60 cursor-pointer group focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:outline-none`,"aria-label":g,children:(0,t.jsx)(n.default,{src:r.bildeUrl,alt:r.tittel[i],fill:!0,className:"object-cover object-center transition-transform duration-300 group-hover:scale-[1.02]",sizes:"(max-width: 768px) 100vw, 260px"})}):"cover"===(r.bildeRamme?r.bildeRamme:(r.bildePortrett,"natural"))?(0,t.jsx)("button",{type:"button",onClick:()=>a({src:r.bildeUrl,alt:r.tittel[i]}),className:"w-full aspect-[4/3] relative bg-slate-800 overflow-hidden group cursor-zoom-in focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:outline-none rounded-lg border border-slate-700/60","aria-label":g,children:(0,t.jsx)(n.default,{src:r.bildeUrl,alt:r.tittel[i],fill:!0,className:"object-cover object-center transition-transform duration-300 group-hover:scale-[1.03]",sizes:"(max-width: 768px) 100vw, 260px"})}):(0,t.jsx)("button",{type:"button",onClick:()=>a({src:r.bildeUrl,alt:r.tittel[i]}),className:"w-full relative bg-slate-800 overflow-hidden group cursor-zoom-in focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:outline-none rounded-lg border border-slate-700/60","aria-label":g,children:(0,t.jsx)(n.default,{src:r.bildeUrl,alt:r.tittel[i],width:0,height:0,sizes:"(max-width: 768px) 100vw, 260px",className:"w-full h-auto transition-transform duration-300 group-hover:scale-[1.02]",style:{width:"100%",height:"auto"}})}),r.bilderUnderHovedbilde&&r.bilderUnderHovedbilde.length>0&&(0,t.jsx)("div",{className:"w-full flex flex-col gap-2 px-1",children:r.bilderUnderHovedbilde.map(e=>(0,t.jsx)("button",{type:"button",onClick:()=>a({src:e.src,alt:e.alt[i]}),className:"relative w-full rounded-lg overflow-hidden border border-slate-700/60 bg-slate-800 cursor-zoom-in focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:outline-none","aria-label":e.alt[i],children:(0,t.jsx)(n.default,{src:e.src,alt:e.alt[i],width:0,height:0,sizes:"(max-width: 768px) 100vw, 260px",className:"w-full h-auto",style:{width:"100%",height:"auto"}})},e.src))}),r.ekstraBilder&&r.ekstraBilder.length>0&&!r.bilderUnderHovedbilde?.length&&(0,t.jsx)("div",{className:"w-full flex flex-col gap-2 px-1",children:r.ekstraBilder.map(e=>(0,t.jsx)("button",{type:"button",onClick:()=>a({src:e.src,alt:e.alt[i]}),className:"relative w-full rounded-lg overflow-hidden border border-slate-700/60 bg-slate-800 cursor-zoom-in focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:outline-none","aria-label":e.alt[i],children:(0,t.jsx)(n.default,{src:e.src,alt:e.alt[i],width:0,height:0,sizes:"(max-width: 768px) 100vw, 260px",className:"w-full h-auto",style:{width:"100%",height:"auto"}})},e.src))}),(0,t.jsx)("p",{className:"text-[10px] text-slate-500 uppercase tracking-widest font-black text-center px-1",children:g})]}),(0,t.jsxs)("div",{className:"flex-1 min-w-0 p-6 md:p-8 flex flex-col justify-center overflow-hidden",children:[r.visningsDato?.trim()&&(0,t.jsx)("span",{className:`text-[10px] font-mono uppercase tracking-widest font-bold block mb-2 ${m?"text-slate-400":"text-indigo-400"}`,children:r.visningsDato}),m?(0,t.jsx)("h2",{className:"text-xl md:text-2xl font-black text-white tracking-tight leading-tight mb-4 break-words [overflow-wrap:anywhere]",dangerouslySetInnerHTML:{__html:em(r.tittel[i])}}):(0,t.jsx)("h2",{className:"text-xl md:text-2xl font-black text-white tracking-tight leading-tight italic mb-4 break-words [overflow-wrap:anywhere]",children:r.tittel[i]}),m?(0,t.jsx)("p",{className:"text-slate-300 text-sm leading-relaxed mb-4 font-light break-words",dangerouslySetInnerHTML:{__html:em(r.teaser[i])}}):(0,t.jsx)("p",{className:"text-slate-400 text-sm leading-relaxed mb-4 font-light break-words",children:r.teaser[i]}),(0,t.jsxs)("div",{className:m?"md:flex md:items-start md:gap-6":"",children:[(0,t.jsxs)("div",{className:m?`text-slate-200 text-base leading-relaxed space-y-3 font-light break-words overflow-hidden flex-1
                    [&_a]:text-[#E30613] [&_a]:underline [&_a]:underline-offset-2
                    [&_a]:decoration-[#E30613]/70 [&_a]:hover:text-white
                    [&_a]:transition-colors
                    [&_a.link-subtle]:text-slate-200 [&_a.link-subtle]:no-underline [&_a.link-subtle]:hover:text-[#E30613] [&_a.link-subtle]:hover:underline
                    [&_strong]:font-bold [&_strong]:text-white [&_em]:italic`:`text-slate-300 text-base leading-relaxed space-y-3 font-light break-words overflow-hidden flex-1
                    [&_a]:text-indigo-300 [&_a]:underline [&_a]:underline-offset-2
                    [&_a]:decoration-indigo-500/70 [&_a]:hover:text-indigo-200
                    [&_a]:transition-colors
                    [&_a.link-subtle]:text-slate-300 [&_a.link-subtle]:no-underline [&_a.link-subtle]:hover:text-indigo-300 [&_a.link-subtle]:hover:underline
                    [&_strong]:font-semibold [&_em]:italic`,children:[r.innhold[i].split("\n\n").map((e,r)=>(0,t.jsx)("p",{className:"min-w-0",dangerouslySetInnerHTML:{__html:m?eg(e.trim()):e.trim()}},r)),r.navigasjonsCta?.beskrivelse&&e&&(0,t.jsxs)("p",{className:"min-w-0",children:[r.navigasjonsCta.beskrivelse[i]," ",(0,t.jsxs)("button",{type:"button",onClick:()=>e(r.navigasjonsCta.tab),className:m?"text-[#E30613] hover:text-white underline underline-offset-2 decoration-[#E30613]/70 transition-colors focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:outline-none rounded-sm":"text-indigo-300 hover:text-indigo-200 underline underline-offset-2 decoration-indigo-500/70 transition-colors focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:outline-none rounded-sm",children:[r.navigasjonsCta.label[i]," →"]})]})]}),h&&(0,t.jsx)("div",{className:"mt-5 md:mt-0 w-full max-w-[230px] md:w-[230px] shrink-0 mx-auto md:mx-0",children:(0,t.jsx)("button",{type:"button",onClick:()=>a({src:h.src,alt:h.alt[i]}),className:"relative w-full h-[205px] rounded-lg overflow-hidden bg-slate-900/40 cursor-zoom-in focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:outline-none","aria-label":h.alt[i],children:(0,t.jsx)(n.default,{src:h.src,alt:h.alt[i],fill:!0,className:"object-contain object-center",sizes:"230px"})})})]}),r.navigasjonsCta&&e&&!r.navigasjonsCta.beskrivelse&&(0,t.jsxs)("button",{type:"button",onClick:()=>e(r.navigasjonsCta.tab),className:"group mt-5 inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-indigo-500/15 border border-indigo-500/35 hover:bg-indigo-500/25 hover:border-indigo-400/50 transition-all focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:outline-none",children:[(0,t.jsx)("span",{className:"text-indigo-300 text-xs font-black uppercase tracking-widest group-hover:text-white",children:r.navigasjonsCta.label[i]}),(0,t.jsx)("span",{"aria-hidden":!0,className:"text-indigo-300 group-hover:text-white",children:"→"})]})]})]})},r.id)})}),s&&(0,t.jsx)("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm",onClick:()=>a(null),children:(0,t.jsxs)("div",{className:"relative max-w-[96vw] max-h-[96vh] bg-slate-950 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden",onClick:e=>e.stopPropagation(),children:[(0,t.jsx)("button",{type:"button",onClick:()=>a(null),className:"absolute top-3 right-3 z-10 px-3 py-1.5 rounded-full bg-slate-900/80 text-xs font-black uppercase tracking-widest text-slate-300 hover:text-white hover:bg-slate-800 transition-all",children:"no"===i?"Lukk":"Close"}),(0,t.jsxs)("div",{className:"w-full h-full flex flex-col items-center justify-center p-4 overflow-auto",children:[(0,t.jsx)(n.default,{src:s.src,alt:s.alt,width:1400,height:900,className:"max-w-[1400px] max-h-[90vh] w-auto h-auto object-contain mx-auto"}),(0,t.jsx)("p",{className:"mt-3 text-xs text-slate-400 uppercase tracking-widest font-black text-center",children:s.alt})]})]})})]})}let eu=(0,s.default)("download",[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]]),ep=(0,s.default)("linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]),ef={no:{tittel:"Profil og Kvalifikasjoner",intro:"Her finner du min CV og en åpen søknad som gir et dypere innblikk i min erfaring og hvordan jeg skaper vekst. Disse kan du lese direkte her på siden, laste ned eller printe ut ved behov.",linkedinTekst:"Ønsker du å besøke min LinkedIn-profil for mer informasjon, trykk på linken under:"},en:{tittel:"Profile & Qualifications",intro:"Here you will find my CV and an open application that provides deeper insight into my experience and how I drive growth. You can read these directly on the site, download, or print as needed.",linkedinTekst:"Would you like to visit my LinkedIn profile for more information? Click the link below:"}};function ev(){let{lang:e}=f(),r=ef[e];return(0,t.jsx)("div",{className:"py-4 text-left w-full overflow-x-hidden",children:(0,t.jsxs)("div",{className:"flex flex-col md:flex-row gap-8 items-start",children:[(0,t.jsx)("div",{className:"w-full md:w-60 shrink-0",children:(0,t.jsx)("div",{className:"rounded-2xl overflow-hidden border border-slate-800 shadow-xl bg-slate-900",children:(0,t.jsx)(n.default,{src:"/images/cv-header.png",alt:"CV og åpen søknad — Marius Ottesen",width:240,height:320,className:"w-full h-auto"})})}),(0,t.jsxs)("div",{className:"flex-1 min-w-0 space-y-6",children:[(0,t.jsxs)("div",{className:"space-y-2",children:[(0,t.jsxs)("h1",{className:"text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-white tracking-tighter uppercase italic break-words max-w-full [overflow-wrap:anywhere]",children:[b("dok.title.1",e)," ",(0,t.jsx)("span",{className:"text-indigo-500",children:b("dok.title.2",e)})]}),(0,t.jsx)("p",{className:"text-lg text-indigo-400 font-black uppercase tracking-widest italic",children:r.tittel})]}),(0,t.jsx)("div",{className:"text-lg text-slate-300 border-l-4 border-indigo-600 pl-6 italic font-medium leading-relaxed",children:r.intro}),(0,t.jsxs)("div",{className:"grid md:grid-cols-2 gap-5",children:[(0,t.jsxs)("a",{href:"/pdf/cv.pdf",target:"_blank",rel:"noopener noreferrer",className:"group p-8 bg-slate-900/40 border border-slate-800 rounded-2xl shadow-xl hover:border-indigo-500/50 transition-all flex flex-col items-center gap-4 text-center",children:[(0,t.jsx)(T,{size:40,className:"text-indigo-500"}),(0,t.jsx)("h3",{className:"text-white font-black text-xl uppercase italic",children:b("dok.cv",e)}),(0,t.jsx)("p",{className:"text-slate-400 text-sm italic font-medium",children:b("dok.cv.desc",e)}),(0,t.jsxs)("span",{className:"flex items-center gap-2 text-indigo-400 font-black text-sm uppercase tracking-widest mt-2 group-hover:text-white transition-colors",children:[(0,t.jsx)(eu,{size:16})," ",b("dok.cv.btn",e)]})]}),(0,t.jsxs)("a",{href:"/pdf/soknad.pdf",target:"_blank",rel:"noopener noreferrer",className:"group p-8 bg-slate-900/40 border border-slate-800 rounded-2xl shadow-xl hover:border-indigo-500/50 transition-all flex flex-col items-center gap-4 text-center",children:[(0,t.jsx)(T,{size:40,className:"text-indigo-500"}),(0,t.jsx)("h3",{className:"text-white font-black text-xl uppercase italic",children:b("dok.soknad",e)}),(0,t.jsx)("p",{className:"text-slate-400 text-sm italic font-medium",children:b("dok.soknad.desc",e)}),(0,t.jsxs)("span",{className:"flex items-center gap-2 text-indigo-400 font-black text-sm uppercase tracking-widest mt-2 group-hover:text-white transition-colors",children:[(0,t.jsx)(eu,{size:16})," ",b("dok.cv.btn",e)]})]})]}),(0,t.jsxs)("div",{className:"space-y-4",children:[(0,t.jsx)("p",{className:"text-slate-400 italic font-medium text-sm",children:r.linkedinTekst}),(0,t.jsxs)("a",{href:"https://www.linkedin.com/in/mariusottesen/",target:"_blank",rel:"noopener noreferrer",className:"flex items-center justify-between p-6 bg-slate-900/30 border border-slate-800 rounded-2xl hover:bg-slate-900/60 transition-all group",children:[(0,t.jsxs)("div",{className:"flex items-center gap-4",children:[(0,t.jsx)(ep,{className:"text-indigo-500",size:24}),(0,t.jsx)("span",{className:"text-white font-bold uppercase tracking-widest text-sm",children:b("dok.linkedin",e)})]}),(0,t.jsx)(N,{className:"text-slate-600 group-hover:text-indigo-500 transition-colors"})]})]})]})]})})}ef.no;let ex=(0,s.default)("mail",[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]]),eb=(0,s.default)("smartphone",[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]]),ey=(0,s.default)("message-square",[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",key:"18887p"}]]);function ew(){let{lang:e}=f();return(0,t.jsx)("div",{className:"py-4 text-left w-full overflow-x-hidden",children:(0,t.jsxs)("div",{className:"flex flex-col md:flex-row gap-8 items-start",children:[(0,t.jsx)("div",{className:"w-full md:w-60 shrink-0",children:(0,t.jsx)("div",{className:"rounded-2xl overflow-hidden border border-slate-800 shadow-xl bg-slate-900",children:(0,t.jsx)(n.default,{src:"/images/kontakt.jpg",alt:"Marius Ottesen — Kontaktinformasjon",width:240,height:320,className:"w-full h-auto"})})}),(0,t.jsxs)("div",{className:"flex-1 min-w-0 space-y-6",children:[(0,t.jsxs)("div",{className:"space-y-2",children:[(0,t.jsx)("h2",{className:"text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-white tracking-tighter uppercase italic break-words max-w-full [overflow-wrap:anywhere]",children:b("kontakt.title",e)}),(0,t.jsx)("p",{className:"text-lg text-indigo-400 uppercase tracking-widest font-black italic",children:"Marius Ottesen"})]}),(0,t.jsx)("div",{className:"w-full bg-slate-900/40 rounded-2xl border border-slate-800 overflow-hidden shadow-xl",children:(0,t.jsxs)("div",{className:"p-8 md:p-10 space-y-5 text-slate-300",children:[(0,t.jsxs)("div",{className:"space-y-2",children:[(0,t.jsxs)("h3",{className:"text-indigo-500 font-black flex items-center gap-2 text-sm uppercase tracking-widest",children:[(0,t.jsx)(d,{size:18})," ",b("kontakt.profil",e)]}),(0,t.jsx)("p",{className:"italic font-medium text-base leading-relaxed",children:b("kontakt.profil.desc",e)})]}),(0,t.jsxs)("div",{className:"space-y-2",children:[(0,t.jsxs)("h3",{className:"text-indigo-500 font-black flex items-center gap-2 text-sm uppercase tracking-widest",children:[(0,t.jsx)(w,{size:18})," ",b("kontakt.ambisjon",e)]}),(0,t.jsx)("p",{className:"italic font-medium text-base leading-relaxed",children:b("kontakt.ambisjon.desc",e)})]}),(0,t.jsxs)("div",{className:"space-y-2",children:[(0,t.jsxs)("h3",{className:"text-indigo-500 font-black flex items-center gap-2 text-sm uppercase tracking-widest",children:[(0,t.jsx)(ey,{size:18})," ",b("kontakt.dialog",e)]}),(0,t.jsx)("p",{className:"italic font-medium text-base leading-relaxed",children:b("kontakt.dialog.desc",e)})]})]})}),(0,t.jsx)("div",{className:"text-center pt-4 max-w-3xl",children:(0,t.jsx)("p",{className:"text-white font-black text-2xl tracking-tight uppercase italic border-b-2 border-indigo-600 pb-4",children:b("kontakt.cta",e)})}),(0,t.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6 w-full min-w-0",children:[(0,t.jsxs)("a",{href:"mailto:marius.ottesen.76@gmail.com",className:"group p-6 sm:p-8 bg-slate-900/40 rounded-2xl border border-slate-800 shadow-xl hover:border-indigo-500/50 transition-all flex flex-col items-center gap-3 text-center min-w-0",children:[(0,t.jsx)(ex,{size:28,className:"text-indigo-500 shrink-0"}),(0,t.jsx)("p",{className:"text-white font-black text-[8px] sm:text-[9px] md:text-[10px] lg:text-xs whitespace-nowrap min-w-0 max-w-full",children:"marius.ottesen.76@gmail.com"})]}),(0,t.jsxs)("a",{href:"https://www.mariusottesen.no",target:"_blank",rel:"noopener noreferrer",className:"group p-6 sm:p-8 bg-slate-900/40 rounded-2xl border border-slate-800 shadow-xl hover:border-indigo-500/50 transition-all flex flex-col items-center gap-3 text-center min-w-0",children:[(0,t.jsx)(l,{size:28,className:"text-indigo-500 shrink-0"}),(0,t.jsx)("p",{className:"text-white font-black text-[8px] sm:text-[9px] md:text-[10px] lg:text-xs whitespace-nowrap min-w-0 max-w-full",children:"www.mariusottesen.no"})]}),(0,t.jsxs)("a",{href:"tel:+4747012005",className:"group p-6 sm:p-8 bg-slate-900/40 rounded-2xl border border-slate-800 shadow-xl hover:border-indigo-500/50 transition-all flex flex-col items-center gap-3 text-center min-w-0",children:[(0,t.jsx)(eb,{size:28,className:"text-indigo-500 shrink-0"}),(0,t.jsx)("p",{className:"text-white font-black text-[8px] sm:text-[9px] md:text-[10px] lg:text-xs whitespace-nowrap min-w-0 max-w-full",children:"+47 470 12 005"})]})]}),(0,t.jsxs)("a",{href:"https://linkedin.com/in/mariusottesen",target:"_blank",rel:"noopener noreferrer",className:"w-full flex items-center justify-between p-6 bg-slate-900/30 border border-slate-800 rounded-2xl hover:bg-slate-900/60 transition-all group",children:[(0,t.jsxs)("div",{className:"flex items-center gap-4",children:[(0,t.jsx)(ep,{className:"text-indigo-500",size:24}),(0,t.jsx)("span",{className:"text-white font-bold uppercase tracking-widest text-sm",children:b("kontakt.linkedin",e)})]}),(0,t.jsx)(N,{className:"text-slate-600 group-hover:text-indigo-500 transition-colors"})]})]})]})})}let ej=(0,s.default)("cog",[["path",{d:"M11 10.27 7 3.34",key:"16pf9h"}],["path",{d:"m11 13.73-4 6.93",key:"794ttg"}],["path",{d:"M12 22v-2",key:"1osdcq"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M14 12h8",key:"4f43i9"}],["path",{d:"m17 20.66-1-1.73",key:"eq3orb"}],["path",{d:"m17 3.34-1 1.73",key:"2wel8s"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"m20.66 17-1.73-1",key:"sg0v6f"}],["path",{d:"m20.66 7-1.73 1",key:"1ow05n"}],["path",{d:"m3.34 17 1.73-1",key:"nuk764"}],["path",{d:"m3.34 7 1.73 1",key:"1ulond"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["circle",{cx:"12",cy:"12",r:"8",key:"46899m"}]]),eI=(0,s.default)("network",[["rect",{x:"16",y:"16",width:"6",height:"6",rx:"1",key:"4q2zg0"}],["rect",{x:"2",y:"16",width:"6",height:"6",rx:"1",key:"8cvhb9"}],["rect",{x:"9",y:"2",width:"6",height:"6",rx:"1",key:"1egb70"}],["path",{d:"M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3",key:"1jsf9p"}],["path",{d:"M12 12V8",key:"2874zd"}]]),eA=(0,s.default)("send",[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]),eT=(0,s.default)("chevron-down",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]),eN=(0,s.default)("loader-circle",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]),eD=(0,s.default)("triangle-alert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]),eS=(0,s.default)("circle-check",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]),eM={sky:{text:"text-indigo-400",border:"border-indigo-500/20",bg:"bg-indigo-500/10"},indigo:{text:"text-indigo-400",border:"border-indigo-500/20",bg:"bg-indigo-500/10"},emerald:{text:"text-indigo-400",border:"border-indigo-500/20",bg:"bg-indigo-500/10"},amber:{text:"text-indigo-400",border:"border-indigo-500/20",bg:"bg-indigo-500/10"}},eC="w-full bg-slate-950/80 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/20 transition-all";function eE(){let{lang:e}=f(),i="no"===e?[{ikon:(0,t.jsx)(m,{size:32}),tittel:"AI-Strategi",beskrivelse:"Utvikle en skreddersydd AI-strategi som kobler forretningsbehov med teknologiske muligheter. Fra use-case identifisering til veikart for implementering — med fokus på konkret verdiskaping.",farge:"sky"},{ikon:(0,t.jsx)(ej,{size:32}),tittel:"Prosessoptimalisering",beskrivelse:"Kartlegge og optimalisere kommersielle og operative prosesser med AI og automatisering. Identifisere flaskehalser, eliminere manuelt arbeid og bygge skalerbare løsninger som frigjør kapasitet.",farge:"indigo"},{ikon:(0,t.jsx)(eI,{size:32}),tittel:"Teknisk Implementering",beskrivelse:"Gjennom et nettverk av tekniske eksperter leverer vi alt fra prototype til produksjon. Jeg er brobyggeren mellom ledelsesbeslutninger og teknisk gjennomføring — så du slipper å snakke to språk.",farge:"emerald"},{ikon:(0,t.jsx)(h,{size:32}),tittel:"Workshops & Opplæring",beskrivelse:"Praktiske workshops tilpasset ledergrupper og team som vil forstå AI-muligheter, bygge intern kompetanse og utvikle en kultur for datadrevet beslutningstaking.",farge:"amber"}]:[{ikon:(0,t.jsx)(m,{size:32}),tittel:"AI Strategy",beskrivelse:"Develop a bespoke AI strategy that aligns business imperatives with technological capability. From use-case prioritisation to a phased implementation roadmap — with relentless focus on measurable value creation.",farge:"sky"},{ikon:(0,t.jsx)(ej,{size:32}),tittel:"Process Optimisation",beskrivelse:"Map and optimise commercial and operational workflows through AI and intelligent automation. Identify bottlenecks, eliminate manual overhead, and architect scalable solutions that unlock capacity.",farge:"indigo"},{ikon:(0,t.jsx)(eI,{size:32}),tittel:"Technical Implementation",beskrivelse:"Through a curated network of technical specialists, we deliver end-to-end — from proof of concept to production. I serve as the bridge between executive decision-making and technical delivery, so you don't have to speak two languages.",farge:"emerald"},{ikon:(0,t.jsx)(h,{size:32}),tittel:"Workshops & Capability Building",beskrivelse:"Hands-on workshops designed for leadership teams and cross-functional groups seeking to understand AI opportunities, build organisational competence, and cultivate a culture of data-driven decision-making.",farge:"amber"}],s="no"===e?["Strategi","Prosess","Implementering","Annet"]:["Strategy","Process","Implementation","Other"],a="no"===e?["Velg budsjettramme (valgfritt)","Under 50 000 NOK","50 000 – 150 000 NOK","150 000 – 500 000 NOK","Over 500 000 NOK","Usikker / Ønsker rådgivning"]:["Select indicative budget (optional)","Under NOK 50,000","NOK 50,000 – 150,000","NOK 150,000 – 500,000","Above NOK 500,000","To be determined / Advisory needed"],o="no"===e?[{problem:"«AI føles som en hype — vi vet ikke hvor vi skal starte.»",losning:"AI-Roadmap: Vi kartlegger de 3 viktigste prosessene der AI vil gi umiddelbar ROI."},{problem:"«Vi har verktøyene, men mangler styring og forankring i ledelsen.»",losning:"Governance-rammeverk: Klare retningslinjer for hvem som eier hva når AI påvirker beslutninger."},{problem:"«Teamet bruker AI individuelt, men vi ser ingen gevinster på bunnlinjen.»",losning:"Prosessintegrasjon: Vi bygger AI inn i kjerneprosessene — ikke som enkeltverktøy, men ende-til-ende."},{problem:"«Vi trenger teknisk implementering, men har ikke et internt tech-team.»",losning:"Nettverksmodell: Jeg kobler deg med de rette ekspertene og leder prosjektet fra strategi til produksjon."}]:[{problem:'"AI feels like hype — we have no idea where to begin."',losning:"AI Roadmap: We identify the three highest-impact processes where AI will deliver immediate, measurable ROI."},{problem:'"We have the tools, but lack governance and leadership alignment."',losning:"Governance Framework: Clear accountability structures for AI-influenced decision-making across the organisation."},{problem:'"Our team uses AI individually, but we see no bottom-line impact."',losning:"Process Integration: We embed AI into core business workflows — not as isolated tools, but as an end-to-end capability."},{problem:'"We need technical implementation, but lack an in-house tech team."',losning:"Network Model: I connect you with the right specialists and lead the engagement from strategy through to production."}],l="no"===e?[{steg:"1",tittel:"Oppstartsmøte",beskrivelse:"Vi kartlegger utfordringer, mål og muligheter. Du får en klar anbefaling — uforpliktende."},{steg:"2",tittel:"Analyse & Strategi",beskrivelse:"Dypdykk i prosesser, data og organisasjon. Leverer et konkret veikart med prioriterte tiltak og forventet ROI."},{steg:"3",tittel:"Implementering",beskrivelse:"Gjennomføring med mine tekniske partnere. Jeg leder prosjektet og sikrer at det leverer kommersiell verdi."}]:[{steg:"1",tittel:"Discovery Session",beskrivelse:"We assess your challenges, objectives, and opportunities. You receive a clear, actionable recommendation — entirely no-obligation."},{steg:"2",tittel:"Analysis & Strategy",beskrivelse:"A thorough deep-dive into processes, data, and organisational readiness. Deliverable: a concrete roadmap with prioritised initiatives and projected ROI."},{steg:"3",tittel:"Execution & Delivery",beskrivelse:"Implementation alongside my technical partners. I lead the project end-to-end and ensure it translates into measurable commercial value."}],[d,g]=(0,r.useState)([]),[k,u]=(0,r.useState)(""),[p,v]=(0,r.useState)(""),[x,y]=(0,r.useState)(""),[w,j]=(0,r.useState)(""),[I,A]=(0,r.useState)(""),[T,N]=(0,r.useState)(""),[D,S]=(0,r.useState)(""),[M,C]=(0,r.useState)("idle"),[E,B]=(0,r.useState)(""),F=async e=>{e.preventDefault(),C("sending"),B("");let t=d.length>0?d.join(", "):"Ikke spesifisert",r=k||"Ikke spesifisert";try{let e=await fetch("/api/send",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({navn:p,firma:x,epost:w,telefon:I,stilling:T,kategorier:d,budsjett:k,beskrivelse:D})}),t=await e.json();if(!e.ok){if(t.fallback)return void n();throw Error(t.error||"Noe gikk galt")}C("success"),i(),setTimeout(()=>C("idle"),5e3)}catch{n()}function n(){let e=encodeURIComponent(`Ny foresp\xf8rsel fra ${p}${x?` – ${x}`:""}`),n=encodeURIComponent(`FORESP\xd8RSEL – MARIUS OTTESEN CONSULTING
${"─".repeat(40)}

Navn: ${p}
Firma: ${x||"–"}
Stilling: ${T||"–"}
E-post: ${w}
Telefon: ${I||"–"}
Kategori: ${t}
Budsjettramme: ${r}

PROSJEKTBESKRIVELSE
${"─".repeat(40)}
${D}
`),s=w?`&cc=${encodeURIComponent(w)}`:"";window.open(`mailto:marius.ottesen.76@gmail.com?subject=${e}&body=${n}${s}`,"_self"),C("success"),i(),setTimeout(()=>C("idle"),5e3)}function i(){v(""),y(""),j(""),A(""),N(""),g([]),u(""),S("")}};return(0,t.jsxs)("div",{className:"py-4 text-left w-full overflow-x-hidden",children:[(0,t.jsx)("section",{className:"border-b border-white/10 pb-8 mb-10",children:(0,t.jsxs)("div",{className:"flex flex-col md:flex-row gap-8 items-start",children:[(0,t.jsx)("div",{className:"w-full md:w-60 shrink-0",children:(0,t.jsx)("div",{className:"rounded-2xl overflow-hidden border border-slate-800 shadow-xl bg-slate-900",children:(0,t.jsx)("img",{src:"/images/consulting.png",alt:"Marius Ottesen Consulting",className:"w-full h-auto"})})}),(0,t.jsxs)("div",{className:"flex-1 min-w-0 flex flex-col",children:[(0,t.jsxs)("div",{className:"flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4",children:[(0,t.jsxs)("h1",{className:"text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-black tracking-tighter leading-tight text-white uppercase italic break-words max-w-full [overflow-wrap:anywhere] shrink-0",children:[b("cons.title.1",e)," ",(0,t.jsx)("br",{}),(0,t.jsx)("span",{className:"text-indigo-500",children:b("cons.title.2",e)})]}),(0,t.jsx)("div",{className:"rounded-lg overflow-hidden border border-slate-700/50 shadow bg-white p-2 min-w-0 max-w-full sm:max-w-[15.75rem] sm:ml-4",children:(0,t.jsx)("img",{src:"/images/moc-avlang.png",alt:"Marius Ottesen Consulting — Commercial Strategy & AI Leadership",className:"h-auto w-full max-w-full block object-contain object-left",width:360,height:113})})]}),(0,t.jsxs)("div",{className:"max-w-3xl space-y-6 mt-4",children:[(0,t.jsx)("p",{className:"text-xl md:text-2xl text-slate-300 leading-relaxed font-light",children:b("cons.intro.1",e)}),(0,t.jsx)("p",{className:"text-lg md:text-xl text-slate-400 italic leading-relaxed font-light",children:b("cons.intro.2",e)})]})]})]})}),(0,t.jsxs)("section",{className:"mb-12",children:[(0,t.jsx)("div",{className:"border-b-2 border-indigo-500/30 mb-6",children:(0,t.jsx)("h2",{className:"text-2xl md:text-3xl font-bold tracking-tight text-white uppercase mb-2",children:b("cons.tjenester",e)})}),(0,t.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-5",children:i.map((e,r)=>{let n=eM[e.farge];return(0,t.jsxs)("div",{className:`group p-8 bg-slate-900/40 rounded-2xl border ${n.border} shadow-xl hover:bg-slate-900/60 transition-all duration-300`,children:[(0,t.jsx)("div",{className:`inline-flex items-center justify-center w-14 h-14 rounded-xl ${n.bg} ${n.text} mb-6`,children:e.ikon}),(0,t.jsx)("h3",{className:`text-xl font-black uppercase italic tracking-tight mb-3 ${n.text}`,children:e.tittel}),(0,t.jsx)("p",{className:"text-slate-400 text-sm leading-relaxed font-light",children:e.beskrivelse})]},r)})})]}),(0,t.jsxs)("section",{className:"mb-12",children:[(0,t.jsx)("div",{className:"border-b-2 border-indigo-500/30 mb-6",children:(0,t.jsx)("h2",{className:"text-2xl md:text-3xl font-bold tracking-tight text-white uppercase mb-2",children:b("cons.initiatives.title",e)})}),(0,t.jsx)("p",{className:"text-slate-400 italic font-light text-lg mb-6 max-w-3xl",children:b("cons.initiatives.intro",e)}),(0,t.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-5",children:[(0,t.jsx)("div",{className:"p-6 bg-slate-900/40 rounded-2xl border border-slate-800 shadow-xl",children:(0,t.jsxs)("div",{className:"flex items-start gap-4",children:[(0,t.jsx)("div",{className:"w-[72px] h-[72px] shrink-0 rounded-xl bg-white border border-slate-700/50 p-2 flex items-center justify-center overflow-hidden",children:(0,t.jsx)(n.default,{src:"/images/ai-value-lab-logo.png",alt:"AI Value Lab Oslo",width:72,height:72,className:"w-full h-full object-contain"})}),(0,t.jsxs)("div",{className:"min-w-0 space-y-2",children:[(0,t.jsx)("h3",{className:"text-white font-black uppercase italic tracking-tight",children:b("cons.initiatives.avl.title",e)}),(0,t.jsx)("p",{className:"text-slate-400 text-sm leading-relaxed font-light",children:b("cons.initiatives.avl.text",e)})]})]})}),(0,t.jsx)("div",{className:"p-6 bg-slate-900/40 rounded-2xl border border-slate-800 shadow-xl",children:(0,t.jsxs)("div",{className:"flex items-start gap-4",children:[(0,t.jsx)("div",{className:"w-[72px] h-[72px] shrink-0 rounded-xl bg-white border border-slate-700/50 p-2 flex items-center justify-center overflow-hidden",children:(0,t.jsx)(n.default,{src:"/images/skoyenasen-tk-logo.png",alt:"Skøyenåsen Tannklinikk",width:72,height:72,className:"w-full h-full object-contain"})}),(0,t.jsxs)("div",{className:"min-w-0 space-y-2",children:[(0,t.jsx)("h3",{className:"text-white font-black uppercase italic tracking-tight",children:b("cons.initiatives.stk.title",e)}),(0,t.jsx)("p",{className:"text-slate-400 text-sm leading-relaxed font-light",children:b("cons.initiatives.stk.text",e)})]})]})})]})]}),(0,t.jsxs)("section",{className:"mb-12",children:[(0,t.jsx)("div",{className:"border-b-2 border-indigo-500/30 mb-6",children:(0,t.jsx)("h2",{className:"text-2xl md:text-3xl font-bold tracking-tight text-white uppercase mb-2",children:b("cons.kjenner",e)})}),(0,t.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-5",children:o.map((e,r)=>(0,t.jsxs)("div",{className:"p-6 bg-slate-900/40 rounded-2xl border border-slate-800 shadow-xl space-y-4",children:[(0,t.jsxs)("div",{className:"flex items-start gap-3",children:[(0,t.jsx)(eD,{size:16,className:"text-amber-400/70 shrink-0 mt-0.5"}),(0,t.jsx)("p",{className:"text-slate-400 text-sm italic",children:e.problem})]}),(0,t.jsxs)("div",{className:"flex items-start gap-3",children:[(0,t.jsx)(eS,{size:16,className:"text-emerald-400/70 shrink-0 mt-0.5"}),(0,t.jsx)("p",{className:"text-white text-sm font-bold",children:e.losning})]})]},r))})]}),(0,t.jsxs)("section",{className:"mb-12",children:[(0,t.jsx)("div",{className:"border-b-2 border-indigo-500/30 mb-6",children:(0,t.jsx)("h2",{className:"text-2xl md:text-3xl font-bold tracking-tight text-white uppercase mb-2",children:b("cons.prosess",e)})}),(0,t.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-5",children:l.map(e=>(0,t.jsxs)("div",{className:"p-6 bg-slate-900/40 rounded-2xl border border-indigo-500/20 shadow-xl text-center space-y-3",children:[(0,t.jsx)("div",{className:"inline-flex items-center justify-center w-12 h-12 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 font-black text-xl",children:e.steg}),(0,t.jsx)("h3",{className:"text-white font-black uppercase italic text-base tracking-tight",children:e.tittel}),(0,t.jsx)("p",{className:"text-slate-400 text-sm font-light leading-relaxed",children:e.beskrivelse}),"3"!==e.steg&&(0,t.jsx)(c,{size:16,className:"text-indigo-500/30 mx-auto hidden md:block"})]},e.steg))})]}),(0,t.jsxs)("section",{children:[(0,t.jsx)("div",{className:"border-b-2 border-indigo-500/30 mb-6",children:(0,t.jsx)("h2",{className:"text-2xl md:text-3xl font-bold tracking-tight text-white uppercase mb-2",children:b("cons.dialog",e)})}),(0,t.jsxs)("div",{className:"bg-slate-900/40 rounded-2xl border border-white/10 shadow-xl p-8 md:p-12",children:[(0,t.jsx)("p",{className:"text-slate-400 italic font-light text-lg mb-6 max-w-2xl",children:b("cons.dialog.intro",e)}),(0,t.jsxs)("form",{onSubmit:F,className:"space-y-5",children:[(0,t.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[(0,t.jsxs)("div",{className:"space-y-2",children:[(0,t.jsxs)("label",{className:"text-[11px] font-black uppercase tracking-widest text-slate-500",children:["no"===e?"Navn":"Name"," ",(0,t.jsx)("span",{className:"text-indigo-500",children:"*"})]}),(0,t.jsx)("input",{type:"text",required:!0,value:p,onChange:e=>v(e.target.value),placeholder:"no"===e?"Ditt fulle navn":"Full name",className:eC})]}),(0,t.jsxs)("div",{className:"space-y-2",children:[(0,t.jsx)("label",{className:"text-[11px] font-black uppercase tracking-widest text-slate-500",children:"no"===e?"Firmanavn":"Company"}),(0,t.jsx)("input",{type:"text",value:x,onChange:e=>y(e.target.value),placeholder:"no"===e?"Ditt selskap":"Company name",className:eC})]})]}),(0,t.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[(0,t.jsxs)("div",{className:"space-y-2",children:[(0,t.jsx)("label",{className:"text-[11px] font-black uppercase tracking-widest text-slate-500",children:"no"===e?"Stilling / Tittel":"Position / Title"}),(0,t.jsx)("input",{type:"text",value:T,onChange:e=>N(e.target.value),placeholder:"no"===e?"F.eks. CEO, CTO, Avdelingsleder":"e.g. CEO, CTO, VP of Sales",className:eC})]}),(0,t.jsxs)("div",{className:"space-y-2",children:[(0,t.jsx)("label",{className:"text-[11px] font-black uppercase tracking-widest text-slate-500",children:"no"===e?"Telefonnummer":"Phone Number"}),(0,t.jsx)("input",{type:"tel",value:I,onChange:e=>A(e.target.value),placeholder:"+47 000 00 000",className:eC})]})]}),(0,t.jsxs)("div",{className:"space-y-2",children:[(0,t.jsxs)("label",{className:"text-[11px] font-black uppercase tracking-widest text-slate-500",children:["no"===e?"E-post":"Email"," ",(0,t.jsx)("span",{className:"text-indigo-500",children:"*"})]}),(0,t.jsx)("input",{type:"email",required:!0,value:w,onChange:e=>j(e.target.value),placeholder:"no"===e?"din@epost.no":"your@email.com",className:eC})]}),(0,t.jsxs)("div",{className:"space-y-3",children:[(0,t.jsx)("label",{className:"text-[11px] font-black uppercase tracking-widest text-slate-500",children:"no"===e?"Hva gjelder henvendelsen?":"What is the inquiry about?"}),(0,t.jsx)("div",{className:"flex flex-wrap gap-3",children:s.map(e=>{let r=d.includes(e);return(0,t.jsx)("button",{type:"button",onClick:()=>{g(t=>t.includes(e)?t.filter(t=>t!==e):[...t,e])},className:`px-5 py-2.5 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-200 border ${r?"bg-indigo-500/20 border-indigo-400/50 text-indigo-300 shadow-lg shadow-indigo-500/10":"bg-slate-950/60 border-white/10 text-slate-500 hover:border-white/20 hover:text-slate-300"}`,children:e},e)})})]}),(0,t.jsxs)("div",{className:"space-y-2",children:[(0,t.jsxs)("label",{className:"text-[11px] font-black uppercase tracking-widest text-slate-500",children:["no"===e?"Budsjettramme":"Budget Range"," ",(0,t.jsx)("span",{className:"normal-case tracking-normal font-medium",children:"no"===e?"(valgfritt)":"(optional)"})]}),(0,t.jsxs)("div",{className:"relative",children:[(0,t.jsx)("select",{value:k,onChange:e=>u(e.target.value),className:"w-full appearance-none bg-slate-950/80 border border-white/10 rounded-xl px-5 py-4 text-sm text-slate-400 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/20 transition-all cursor-pointer",children:a.map((e,r)=>(0,t.jsx)("option",{value:0===r?"":e,className:"bg-slate-950 text-slate-300",children:e},r))}),(0,t.jsx)(eT,{size:18,className:"absolute right-4 top-1/2 -translate-y-1/2 text-slate-600 pointer-events-none"})]})]}),(0,t.jsxs)("div",{className:"space-y-2",children:[(0,t.jsxs)("label",{className:"text-[11px] font-black uppercase tracking-widest text-slate-500",children:["no"===e?"Prosjektbeskrivelse":"Project Description"," ",(0,t.jsx)("span",{className:"text-indigo-500",children:"*"})]}),(0,t.jsx)("textarea",{required:!0,rows:6,value:D,onChange:e=>S(e.target.value),placeholder:"no"===e?"Beskriv kort hva du trenger hjelp med, hvilke utfordringer du står overfor, eller hva du ønsker å oppnå...":"Please outline the challenge you are facing, the objectives you want to achieve, and any relevant context...",className:`${eC} leading-relaxed resize-none`})]}),(0,t.jsxs)("div",{className:"pt-4 space-y-4",children:["error"===M&&(0,t.jsx)("div",{className:"p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-300 text-sm",children:E}),(0,t.jsx)("button",{type:"submit",disabled:"sending"===M||"success"===M,className:`w-full md:w-auto inline-flex items-center justify-center gap-3 px-12 py-5 rounded-xl font-black uppercase tracking-widest text-sm transition-all duration-300 shadow-lg ${"success"===M?"bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 cursor-default":"sending"===M?"bg-indigo-500/50 text-white/70 cursor-wait":"bg-indigo-500 text-white hover:bg-indigo-400 hover:shadow-indigo-500/25 hover:shadow-xl active:scale-[0.98]"}`,children:"success"===M?b("cons.sendt",e):"sending"===M?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(eN,{size:18,className:"animate-spin"}),b("cons.sender",e)]}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(eA,{size:18}),b("cons.send",e)]})})]})]})]})]}),(0,t.jsx)("section",{className:"mt-12 pt-8 border-t border-slate-800/60",children:(0,t.jsxs)("div",{className:"flex flex-wrap items-center justify-center gap-4 py-4 px-6 bg-slate-900/30 rounded-2xl border border-slate-800/50",children:[(0,t.jsx)("div",{className:"rounded-xl overflow-hidden border border-slate-700/50 bg-white p-px shrink-0 w-14 h-14 flex items-center justify-center",children:(0,t.jsx)("img",{src:"/images/moc.logo.png",alt:"MOC",width:56,height:56,className:"w-full h-full object-contain"})}),(0,t.jsx)("span",{className:"text-slate-500 text-sm font-bold uppercase tracking-widest italic",children:b("cons.levert",e)})]})})]})}let eB=(0,s.default)("quote",[["path",{d:"M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",key:"rib7q0"}],["path",{d:"M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",key:"1ymkrd"}]]),eF=(0,s.default)("user-check",[["path",{d:"m16 11 2 2 4-4",key:"9rsbq5"}],["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]]),eP=[{id:"thomas-falch",navn:"Thomas Falch",tittel:"Markedsansvarlig Industri",relasjon:"Thomas rapporterte direkte til Marius",dato:"20. desember 2025",sorteringsDato:"2025-12-20",tekst:"Jeg trivdes godt med Marius som leder. Det var godt humør, fokus på salg og hvordan vi kunne oppnå resultater. Det var motiverende å jobbe mot felles mål og oppnå dem. Jeg fikk flere muligheter til å utvikle meg, og mine innspill ble lyttet til. Marius jobbet hardt for å forbedre salgsprestasjoner i teamet og lyktes med det.",linkedinUrl:"https://www.linkedin.com/in/mariusottesen/details/recommendations/"},{id:"agnese-daniluka",navn:"Agnese Daniluka",tittel:"Identitetsdesigner / ICF Certified Professional Coach",relasjon:"Agnese var klient til Marius",dato:"16. oktober 2025",sorteringsDato:"2025-10-16",tekst:`Jeg hadde gleden av \xe5 samarbeide med Marius da han inviterte meg til \xe5 gjennomf\xf8re utviklingsprosjektet \xabDu er her for mer enn et salgsbudsjett. N\xe5r du eier det – sa skjer det!\xbb for hele det kommersielle teamet i Franzefoss Gjenvinning. Allerede fra f\xf8rste stund var det tydelig at Marius er en engasjert og fremtidsrettet leder som virkelig investerer i faglig utvikling og kompetansebygging hos sine medarbeidere.

Marius forst\xe5r at reelle resultater skapes n\xe5r mennesker blir sett, verdsatt og motivert. Han kombinerer tydelig strategisk retning med et sterkt fokus p\xe5 personlig utvikling og eierskap i teamet – noe som ogs\xe5 reflekteres i prosjektets tittel og budskap. Dette kom tydelig til uttrykk i hvordan medarbeiderne responderte: med energi, \xe5penhet og ekte engasjement. En av deltakerne oppsummerte det treffende: \xabDette ga meg et l\xf8ft jeg trengte.\xbb Det vitner om en sterk kultur preget av tillit, tydelig lederskap og utviklingsfokus.

Gjennom gode og faglige samtaler i forkant og underveis fikk jeg ogs\xe5 oppleve en leder med solid teoretisk ballast og dyp forst\xe5else for hva som skaper prestasjoner over tid. Marius evner \xe5 koble strategisk tenkning med menneskelig innsikt – en kombinasjon som gj\xf8r ham til en leder som b\xe5de leverer resultater og utvikler mennesker.

Jeg h\xe5per virkelig \xe5 f\xe5 muligheten til \xe5 samarbeide med Marius igjen, og kan varmt anbefale ham som en tydelig, kunnskapsrik og inspirerende leder.`,linkedinUrl:"https://www.linkedin.com/in/mariusottesen/details/recommendations/"},{id:"ramo-ridderberg",navn:"Ramo Ridderberg",tittel:"Foredragsholder, trener, mentor og autorisert styremedlem",relasjon:"Ramo var mentor til Marius",dato:"2. juni 2025",sorteringsDato:"2025-06-02",tekst:`Jeg har jobbet med Marius over en lengre periode og blitt godt kjent med ham som salgsleder. Han har en krevende oppgave med ansvar for mange selgere, og det styrer han med stort engasjement og h\xf8y arbeidskapasitet.

Marius er en entusiast som brenner for \xe5 skape resultater. Han er ikke redd for \xe5 ta tak, gj\xf8re n\xf8dvendige endringer og stille tydelige krav for \xe5 f\xe5 teamet sitt til \xe5 fungere best mulig. Det er tydelig at han bryr seg om at folk rundt ham lykkes, og han legger ned en betydelig innsats for \xe5 f\xe5 det til.

En leder som st\xe5r i stormen og g\xe5r foran n\xe5r det trengs.`,linkedinUrl:"https://www.linkedin.com/in/mariusottesen/details/recommendations/"},{id:"paal-brovold",navn:"Pål Brovold",tittel:"Salgssjef og Prosjektleder hos Alles Miljø AS",relasjon:"Pål rapporterte direkte til Marius",dato:"7. desember 2020",sorteringsDato:"2020-12-07",tekst:"Marius er en klar og tydelig leder som jeg ved mange anledninger hadde gode og produktive samtaler med. Med meget god arbeidskapasitet ble man både hørt, men også stilt krav til som arbeidstager. Marius fungerer også godt under press og klarer å omstille krav ovenfra til forståelige mål for oss som ansatte. Jeg kan bare gratulere til de som får jobbe sammen med Marius da de får en dyktig leder, god kollega og sikkert en og annen god samtale med på kjøpet.",linkedinUrl:"https://www.linkedin.com/in/mariusottesen/details/recommendations/"},{id:"christian-thorrud",navn:"Christian Thorrud",tittel:"General Manager, Owner at Craft Beverages AS",relasjon:"Christian rapporterte direkte til Marius",dato:"22. november 2015",sorteringsDato:"2015-11-22",tekst:"I was recruited to Mundipharma by Marius and had the pleasure of working with him as my closest leader. Marius is a very team oriented leader, he constantly works hard to motivate his employees and succeeds at a high level. Norspan became a huge success, and became the best-selling product in Norway among all European countries. We had great fun and at the same time worked in a very professional manner. Marius has a strategic and commercial focus. He easily adapts changing environments and enjoys the pursuit of improving processes and results. He is structured and delivers high quality work. Marius gains easily new knowledge and has a huge working capacity. I have also learned to know Marius as being a social person, who is dedicated in what he does – both inside and outside the professional arena. He is inspiring to be with, competitive, professional, honest and I can highly recommend Marius as a leader.",linkedinUrl:"https://www.linkedin.com/in/mariusottesen/details/recommendations/"},{id:"magnus-aasjord",navn:"Magnus Sæther Aasjord",tittel:"Head of Broadband & Home Network at Telenor Norge",relasjon:"Magnus studerte sammen med Marius",dato:"7. september 2015",sorteringsDato:"2015-09-07",tekst:"I enjoyed 3 years of studying with Marius at BI's executive master program. Marius was always very engaged in class-discussions, casework and other assignments where the students' contributions were necessary. What he does the best is the way he turns the theoretical fundamentals into relevant and real-life settings and practical examples – a skill that is key for transforming knowledge into what matters when striving for achieving excellent business-results. In addition, Marius is very structured, inspiring and up to date on different affairs when it comes to commerce, politics and economics. I learned a lot from being his co-student, and appreciated his cooperative skills.",linkedinUrl:"https://www.linkedin.com/in/mariusottesen/details/recommendations/"},{id:"tina-gullaksen",navn:"Tina Gullaksen",tittel:"Personal og HR ansvarlig i TBM & Anlegg AS",relasjon:"Tina rapporterte direkte til Marius",dato:"3. september 2015",sorteringsDato:"2015-09-03",tekst:'In Marius you can see what a good leader is all about! He is great at motivating his employees, providing timely and accurate feedback and in getting the best out of each individual focusing their strengths. He is very dedicated and goes "all in" when approaching different tasks. Not to mention his ability to provide a good working environment for his team where people around him feels well and engaged. Marius\' working-capacity has always impressed me, and he has been my best manager in my career so far.',linkedinUrl:"https://www.linkedin.com/in/mariusottesen/details/recommendations/"}];function eO(){let{lang:e}=f(),r=[...eP].sort((e,t)=>new Date(t.sorteringsDato).getTime()-new Date(e.sorteringsDato).getTime());return(0,t.jsx)("div",{className:"py-4 text-left w-full overflow-x-hidden",children:(0,t.jsxs)("div",{className:"flex flex-col md:flex-row gap-8 items-start",children:[(0,t.jsx)("div",{className:"w-full md:w-60 shrink-0",children:(0,t.jsx)("div",{className:"rounded-2xl overflow-hidden border border-slate-800 shadow-xl bg-slate-900",children:(0,t.jsx)(n.default,{src:"/images/referanser.jpg.jpg",alt:"Referanser og anbefalinger fra kollegaer",width:240,height:320,className:"w-full h-auto"})})}),(0,t.jsxs)("div",{className:"flex-1 min-w-0 space-y-6",children:[(0,t.jsxs)("div",{className:"space-y-2",children:[(0,t.jsx)("h2",{className:"text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-white tracking-tighter uppercase italic break-words max-w-full [overflow-wrap:anywhere]",children:"no"===e?(0,t.jsxs)(t.Fragment,{children:["Referanser & ",(0,t.jsx)("span",{className:"text-indigo-500",children:"Anbefalinger"})]}):(0,t.jsxs)(t.Fragment,{children:["References & ",(0,t.jsx)("span",{className:"text-indigo-500",children:"Recommendations"})]})}),(0,t.jsx)("p",{className:"text-base text-indigo-400 font-black uppercase tracking-widest italic",children:b("ref.sub",e)})]}),(0,t.jsx)("div",{className:"text-base text-slate-300 border-l-4 border-indigo-600 pl-6 italic font-medium leading-relaxed",children:b("ref.intro",e)}),(0,t.jsx)("div",{className:"space-y-5",children:r.map(e=>(0,t.jsxs)("div",{className:"p-6 bg-slate-900/40 rounded-2xl border border-slate-800 shadow-xl",children:[(0,t.jsxs)("div",{className:"flex items-start gap-4 mb-4",children:[(0,t.jsx)("div",{className:"inline-flex items-center justify-center w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-400 shrink-0",children:(0,t.jsx)(eB,{size:18})}),(0,t.jsxs)("div",{className:"flex-1",children:[(0,t.jsx)("h3",{className:"text-base font-black text-white uppercase italic tracking-tight",children:e.navn}),(0,t.jsx)("p",{className:"text-indigo-400 text-xs font-bold italic",children:e.tittel})]})]}),(0,t.jsx)("blockquote",{className:"text-slate-300 text-[13px] italic font-medium leading-relaxed pl-14 border-l-2 border-indigo-500/20 ml-0 space-y-3",children:e.tekst.split("\n\n").map((r,n)=>(0,t.jsxs)("p",{children:[0===n?`\u201C${r}`:r,n===e.tekst.split("\n\n").length-1?"”":""]},n))}),(0,t.jsxs)("div",{className:"flex flex-wrap items-center gap-4 mt-4 pl-14",children:[(0,t.jsxs)("span",{className:"flex items-center gap-2 text-slate-500 text-[9px] font-bold uppercase tracking-widest",children:[(0,t.jsx)(eF,{size:11})," ",e.relasjon]}),(0,t.jsx)("span",{className:"text-slate-700",children:"|"}),(0,t.jsxs)("span",{className:"flex items-center gap-2 text-slate-500 text-[9px] font-bold uppercase tracking-widest",children:[(0,t.jsx)(j,{size:11})," ",e.dato]})]})]},e.id))}),(0,t.jsxs)("a",{href:"https://www.linkedin.com/in/mariusottesen/details/recommendations/",target:"_blank",rel:"noopener noreferrer",className:"flex items-center justify-between p-5 bg-slate-900/30 border border-slate-800 rounded-2xl hover:bg-slate-900/60 transition-all group",children:[(0,t.jsxs)("div",{className:"flex items-center gap-4",children:[(0,t.jsx)(ep,{className:"text-indigo-500",size:22}),(0,t.jsx)("span",{className:"text-white font-bold uppercase tracking-widest text-xs",children:b("ref.linkedin",e)})]}),(0,t.jsx)(eB,{className:"text-slate-600 group-hover:text-indigo-500 transition-colors",size:18})]})]})]})})}let ez=(0,s.default)("arrow-up",[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]]);function eG(){let[e,n]=(0,r.useState)(!1);return((0,r.useEffect)(()=>{let e=()=>{window.scrollY>300?n(!0):n(!1)};return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)},[]),e)?(0,t.jsx)("button",{onClick:()=>{window.scrollTo({top:0,behavior:"smooth"})},className:"fixed bottom-4 right-4 sm:bottom-8 sm:right-8 z-50 w-12 h-12 flex items-center justify-center rounded-full bg-indigo-500 text-white shadow-lg hover:bg-indigo-400 transition-all hover:scale-110 focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:outline-none","aria-label":"Tilbake til toppen",children:(0,t.jsx)(ez,{size:20})}):null}let eL=(0,s.default)("menu",[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]]);function eR({tabs:e,tabLabels:n,activeTab:i,onTabClick:s}){let[a,o]=(0,r.useState)(!1),{lang:l}=f();return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("button",{onClick:()=>o(!a),className:"md:hidden w-10 h-10 flex items-center justify-center rounded-lg bg-slate-900/40 border border-slate-800 text-slate-400 hover:text-white hover:border-indigo-500 transition-all focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:outline-none","aria-label":"Åpne meny","aria-expanded":a,children:a?(0,t.jsx)(L,{size:20}):(0,t.jsx)(eL,{size:20})}),a&&(0,t.jsxs)("div",{className:"fixed inset-0 z-50 md:hidden",children:[(0,t.jsx)("div",{className:"fixed inset-0 bg-black/80 backdrop-blur-sm",onClick:()=>o(!1)}),(0,t.jsx)("div",{className:"fixed top-0 left-0 right-0 bg-slate-950 border-b border-slate-800 shadow-2xl",children:(0,t.jsx)("div",{className:"p-4 space-y-2 max-h-[80vh] overflow-y-auto",children:e.map(e=>(0,t.jsx)("button",{onClick:()=>{s(e),o(!1)},className:`w-full text-left px-4 py-3 rounded-lg font-black uppercase text-base tracking-widest transition-all focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:outline-none ${i===e?"bg-indigo-500/20 text-indigo-400 border border-indigo-500/30":"text-slate-400 hover:text-white hover:bg-slate-900/60"}`,children:n[e]},e))})})]})]})}let eH={Profil:"",Erfaring:"erfaring",Resultater:"resultater",Referanser:"referanser",Faginnlegg:"faginnlegg",Prosjekter:"prosjekter",Consulting:"consulting","CV & Åpen søknad":"cv",Kontakt:"kontakt"};function eW({initialTab:e="Profil"}){let s=(0,i.useRouter)(),[a,o]=(0,r.useState)(e);(0,r.useEffect)(()=>{o(e)},[e]);let l=(0,r.useCallback)(e=>{o(e);let t=eH[e];t?s.push("/"+t):s.push("/")},[s]),{lang:d,t:g}=f(),m=["Profil","Erfaring","Resultater","Referanser","Faginnlegg","Prosjekter","Consulting","CV & Åpen søknad","Kontakt"],h={Profil:b("tab.profil",d),Erfaring:b("tab.erfaring",d),Resultater:b("tab.resultater",d),Referanser:b("tab.referanser",d),Faginnlegg:b("tab.faginnlegg",d),Prosjekter:b("tab.prosjekter",d),Consulting:b("tab.consulting",d),"CV & Åpen søknad":b("tab.cv",d),Kontakt:b("tab.kontakt",d)},c=(0,r.useRef)(null),k=(0,r.useRef)(null),[u,p]=(0,r.useState)(9);return(0,r.useLayoutEffect)(()=>{let e=c.current,t=k.current;if(!e||!t)return;let r=()=>{if(window.innerWidth<768)return;let r=e.clientWidth;if(r<2)return;let n=function(e,t,r,n,i){let s=e.clientWidth;if(s<=0)return 4.25;let a=Math.max(0,s-i);if(a<24)return 4.25;let o=t.querySelectorAll("button");if(0===o.length)return 4.25;let l=e=>{let r=`${e}px`;t.style.fontSize=r,o.forEach(e=>{e.style.fontSize=r,e.style.lineHeight="1.12"})},d=4.25,g=n,m=4.25;for(let e=0;e<32;e++){let e=(d+g)/2;if(l(e),t.scrollWidth<=a?(m=e,d=e):g=e,g-d<.05)break}return t.style.fontSize="",Math.round(10*Math.max(4.25,Math.max(4.25,Math.min(n,m))-.35))/10}(e,t,0,Math.min(15,Math.max(6.5,.026*r)),Math.min(26,Math.max(12,Math.round(10+.024*r))));p(e=>.05>Math.abs(e-n)?e:n)},n=()=>requestAnimationFrame(r);n();let i=new ResizeObserver(n);i.observe(e),window.addEventListener("resize",n);let s=!1;return document.fonts?.ready?.then(()=>{s||requestAnimationFrame(()=>requestAnimationFrame(r))}),()=>{s=!0,i.disconnect(),window.removeEventListener("resize",n)}},[d,a]),(0,t.jsx)("main",{className:"min-h-screen bg-slate-950 text-slate-200 px-16 sm:px-24 md:px-32 lg:px-40 xl:px-48 2xl:px-56 py-4 md:py-8 relative overflow-x-hidden w-full",children:(0,t.jsxs)("div",{className:`${"Faginnlegg"===a||"Prosjekter"===a||"Consulting"===a?"max-w-7xl":"max-w-6xl"} mx-auto relative z-10 transition-all duration-500 w-full`,children:[(0,t.jsxs)("nav",{className:"mb-8 flex w-full items-center justify-between gap-2 border-b border-slate-800/40 pb-3 md:grid md:grid-cols-[auto_minmax(0,1fr)_auto] md:items-center md:gap-x-3",children:[(0,t.jsxs)("button",{onClick:()=>l("Profil"),className:"relative z-20 flex items-center gap-2 sm:gap-2.5 group transition-all shrink-0 rounded-full bg-slate-950 pr-2 sm:pr-3",children:[(0,t.jsx)("div",{className:"w-[36px] h-[36px] sm:w-[44px] sm:h-[44px] rounded-full overflow-hidden shrink-0 bg-slate-800",children:(0,t.jsx)(n.default,{src:"/images/ikon.png",alt:"Marius Ottesen logo",width:44,height:44,className:"w-full h-full object-cover transition-all duration-300",priority:!0})}),(0,t.jsxs)("div",{className:"hidden items-center gap-0.5 shrink-0 sm:flex md:hidden lg:flex",children:[(0,t.jsx)("span",{className:"text-white font-black uppercase text-[9px] sm:text-[11px] md:text-[13px] tracking-tight italic",children:"Marius"}),(0,t.jsx)("span",{className:"text-indigo-500 font-black uppercase text-[9px] sm:text-[11px] md:text-[13px] tracking-tight italic",children:"Ottesen"})]})]}),(0,t.jsx)("div",{ref:c,className:"hidden min-w-0 max-w-full justify-center overflow-x-visible px-0 md:flex md:w-full",children:(0,t.jsx)("div",{ref:k,className:"inline-flex max-w-full min-w-0 flex-nowrap items-end justify-center gap-x-0 font-black tracking-tight [letter-spacing:-0.05em] uppercase md:gap-x-0.5 lg:gap-x-0.5 xl:gap-x-1",children:m.map(e=>(0,t.jsx)("button",{type:"button",onClick:()=>l(e),style:{fontSize:`${u}px`,lineHeight:1.12},className:`shrink-0 whitespace-nowrap pb-0.5 px-0 transition-colors md:px-0.5 focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:outline-none rounded-sm ${a===e?"text-indigo-400 border-b-2 border-indigo-400":"text-slate-400 hover:text-white"}`,title:h[e],children:h[e]},e))})}),(0,t.jsxs)("div",{className:"relative z-20 flex shrink-0 items-center gap-2 rounded-lg bg-slate-950 pl-3 md:pl-4",children:[(0,t.jsx)(eR,{tabs:m,tabLabels:h,activeTab:a,onTabClick:l}),(0,t.jsx)(v,{})]})]}),(0,t.jsxs)("div",{className:"transition-all duration-500",children:["Profil"===a&&(0,t.jsx)(y,{onNavigate:e=>l(e)}),"Erfaring"===a&&(0,t.jsx)(M,{}),"Resultater"===a&&(0,t.jsx)(G,{}),"Referanser"===a&&(0,t.jsx)(eO,{}),"Faginnlegg"===a&&(0,t.jsx)(Z,{onNavigate:e=>l(e)}),"Prosjekter"===a&&(0,t.jsx)(ek,{onNavigate:e=>l(e)}),"CV & Åpen søknad"===a&&(0,t.jsx)(ev,{}),"Consulting"===a&&(0,t.jsx)(eE,{}),"Kontakt"===a&&(0,t.jsx)(ew,{})]}),(0,t.jsxs)("footer",{className:"mt-12 pt-6 border-t border-slate-800/40 flex flex-col sm:flex-row items-center justify-between gap-4 pb-4",children:[(0,t.jsxs)("p",{className:"text-slate-600 text-[11px] font-bold tracking-wider",children:["© ",new Date().getFullYear()," Marius Ottesen Consulting · Org. nr. 937 102 801"]}),(0,t.jsxs)("a",{href:"https://linkedin.com/in/mariusottesen",target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-900/40 border border-slate-800 text-slate-400 text-[11px] font-black uppercase tracking-widest hover:text-white hover:border-indigo-500/50 transition-all",children:[(0,t.jsx)(ep,{size:14}),b("footer.linkedin",d)]})]}),(0,t.jsx)(eG,{})]})})}function eK({initialTab:e}={}){return(0,t.jsx)(p,{children:(0,t.jsx)(eW,{initialTab:e})})}Object.fromEntries(Object.entries(eH).filter(([,e])=>""!==e).map(([e,t])=>[t,e])),e.s(["default",()=>eK],52683)}]);