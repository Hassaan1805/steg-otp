(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function jS(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Qg={exports:{}},cc={},Jg={exports:{}},We={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ll=Symbol.for("react.element"),qS=Symbol.for("react.portal"),$S=Symbol.for("react.fragment"),KS=Symbol.for("react.strict_mode"),ZS=Symbol.for("react.profiler"),QS=Symbol.for("react.provider"),JS=Symbol.for("react.context"),ey=Symbol.for("react.forward_ref"),ty=Symbol.for("react.suspense"),ny=Symbol.for("react.memo"),iy=Symbol.for("react.lazy"),Rm=Symbol.iterator;function ry(n){return n===null||typeof n!="object"?null:(n=Rm&&n[Rm]||n["@@iterator"],typeof n=="function"?n:null)}var e0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},t0=Object.assign,n0={};function Xa(n,e,t){this.props=n,this.context=e,this.refs=n0,this.updater=t||e0}Xa.prototype.isReactComponent={};Xa.prototype.setState=function(n,e){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,e,"setState")};Xa.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function i0(){}i0.prototype=Xa.prototype;function $h(n,e,t){this.props=n,this.context=e,this.refs=n0,this.updater=t||e0}var Kh=$h.prototype=new i0;Kh.constructor=$h;t0(Kh,Xa.prototype);Kh.isPureReactComponent=!0;var bm=Array.isArray,r0=Object.prototype.hasOwnProperty,Zh={current:null},s0={key:!0,ref:!0,__self:!0,__source:!0};function a0(n,e,t){var i,r={},s=null,a=null;if(e!=null)for(i in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)r0.call(e,i)&&!s0.hasOwnProperty(i)&&(r[i]=e[i]);var o=arguments.length-2;if(o===1)r.children=t;else if(1<o){for(var l=Array(o),u=0;u<o;u++)l[u]=arguments[u+2];r.children=l}if(n&&n.defaultProps)for(i in o=n.defaultProps,o)r[i]===void 0&&(r[i]=o[i]);return{$$typeof:ll,type:n,key:s,ref:a,props:r,_owner:Zh.current}}function sy(n,e){return{$$typeof:ll,type:n.type,key:e,ref:n.ref,props:n.props,_owner:n._owner}}function Qh(n){return typeof n=="object"&&n!==null&&n.$$typeof===ll}function ay(n){var e={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(t){return e[t]})}var Pm=/\/+/g;function Uc(n,e){return typeof n=="object"&&n!==null&&n.key!=null?ay(""+n.key):e.toString(36)}function lu(n,e,t,i,r){var s=typeof n;(s==="undefined"||s==="boolean")&&(n=null);var a=!1;if(n===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(n.$$typeof){case ll:case qS:a=!0}}if(a)return a=n,r=r(a),n=i===""?"."+Uc(a,0):i,bm(r)?(t="",n!=null&&(t=n.replace(Pm,"$&/")+"/"),lu(r,e,t,"",function(u){return u})):r!=null&&(Qh(r)&&(r=sy(r,t+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(Pm,"$&/")+"/")+n)),e.push(r)),1;if(a=0,i=i===""?".":i+":",bm(n))for(var o=0;o<n.length;o++){s=n[o];var l=i+Uc(s,o);a+=lu(s,e,t,l,r)}else if(l=ry(n),typeof l=="function")for(n=l.call(n),o=0;!(s=n.next()).done;)s=s.value,l=i+Uc(s,o++),a+=lu(s,e,t,l,r);else if(s==="object")throw e=String(n),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function Sl(n,e,t){if(n==null)return n;var i=[],r=0;return lu(n,i,"","",function(s){return e.call(t,s,r++)}),i}function oy(n){if(n._status===-1){var e=n._result;e=e(),e.then(function(t){(n._status===0||n._status===-1)&&(n._status=1,n._result=t)},function(t){(n._status===0||n._status===-1)&&(n._status=2,n._result=t)}),n._status===-1&&(n._status=0,n._result=e)}if(n._status===1)return n._result.default;throw n._result}var pn={current:null},uu={transition:null},ly={ReactCurrentDispatcher:pn,ReactCurrentBatchConfig:uu,ReactCurrentOwner:Zh};function o0(){throw Error("act(...) is not supported in production builds of React.")}We.Children={map:Sl,forEach:function(n,e,t){Sl(n,function(){e.apply(this,arguments)},t)},count:function(n){var e=0;return Sl(n,function(){e++}),e},toArray:function(n){return Sl(n,function(e){return e})||[]},only:function(n){if(!Qh(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};We.Component=Xa;We.Fragment=$S;We.Profiler=ZS;We.PureComponent=$h;We.StrictMode=KS;We.Suspense=ty;We.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ly;We.act=o0;We.cloneElement=function(n,e,t){if(n==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+n+".");var i=t0({},n.props),r=n.key,s=n.ref,a=n._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=Zh.current),e.key!==void 0&&(r=""+e.key),n.type&&n.type.defaultProps)var o=n.type.defaultProps;for(l in e)r0.call(e,l)&&!s0.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&o!==void 0?o[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=t;else if(1<l){o=Array(l);for(var u=0;u<l;u++)o[u]=arguments[u+2];i.children=o}return{$$typeof:ll,type:n.type,key:r,ref:s,props:i,_owner:a}};We.createContext=function(n){return n={$$typeof:JS,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},n.Provider={$$typeof:QS,_context:n},n.Consumer=n};We.createElement=a0;We.createFactory=function(n){var e=a0.bind(null,n);return e.type=n,e};We.createRef=function(){return{current:null}};We.forwardRef=function(n){return{$$typeof:ey,render:n}};We.isValidElement=Qh;We.lazy=function(n){return{$$typeof:iy,_payload:{_status:-1,_result:n},_init:oy}};We.memo=function(n,e){return{$$typeof:ny,type:n,compare:e===void 0?null:e}};We.startTransition=function(n){var e=uu.transition;uu.transition={};try{n()}finally{uu.transition=e}};We.unstable_act=o0;We.useCallback=function(n,e){return pn.current.useCallback(n,e)};We.useContext=function(n){return pn.current.useContext(n)};We.useDebugValue=function(){};We.useDeferredValue=function(n){return pn.current.useDeferredValue(n)};We.useEffect=function(n,e){return pn.current.useEffect(n,e)};We.useId=function(){return pn.current.useId()};We.useImperativeHandle=function(n,e,t){return pn.current.useImperativeHandle(n,e,t)};We.useInsertionEffect=function(n,e){return pn.current.useInsertionEffect(n,e)};We.useLayoutEffect=function(n,e){return pn.current.useLayoutEffect(n,e)};We.useMemo=function(n,e){return pn.current.useMemo(n,e)};We.useReducer=function(n,e,t){return pn.current.useReducer(n,e,t)};We.useRef=function(n){return pn.current.useRef(n)};We.useState=function(n){return pn.current.useState(n)};We.useSyncExternalStore=function(n,e,t){return pn.current.useSyncExternalStore(n,e,t)};We.useTransition=function(){return pn.current.useTransition()};We.version="18.3.1";Jg.exports=We;var Je=Jg.exports;const uy=jS(Je);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cy=Je,fy=Symbol.for("react.element"),dy=Symbol.for("react.fragment"),hy=Object.prototype.hasOwnProperty,py=cy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,my={key:!0,ref:!0,__self:!0,__source:!0};function l0(n,e,t){var i,r={},s=null,a=null;t!==void 0&&(s=""+t),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(i in e)hy.call(e,i)&&!my.hasOwnProperty(i)&&(r[i]=e[i]);if(n&&n.defaultProps)for(i in e=n.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:fy,type:n,key:s,ref:a,props:r,_owner:py.current}}cc.Fragment=dy;cc.jsx=l0;cc.jsxs=l0;Qg.exports=cc;var he=Qg.exports,Kf={},u0={exports:{}},Wn={},c0={exports:{}},f0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(n){function e(U,H){var Z=U.length;U.push(H);e:for(;0<Z;){var ee=Z-1>>>1,J=U[ee];if(0<r(J,H))U[ee]=H,U[Z]=J,Z=ee;else break e}}function t(U){return U.length===0?null:U[0]}function i(U){if(U.length===0)return null;var H=U[0],Z=U.pop();if(Z!==H){U[0]=Z;e:for(var ee=0,J=U.length,Pe=J>>>1;ee<Pe;){var Le=2*(ee+1)-1,Fe=U[Le],j=Le+1,re=U[j];if(0>r(Fe,Z))j<J&&0>r(re,Fe)?(U[ee]=re,U[j]=Z,ee=j):(U[ee]=Fe,U[Le]=Z,ee=Le);else if(j<J&&0>r(re,Z))U[ee]=re,U[j]=Z,ee=j;else break e}}return H}function r(U,H){var Z=U.sortIndex-H.sortIndex;return Z!==0?Z:U.id-H.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;n.unstable_now=function(){return s.now()}}else{var a=Date,o=a.now();n.unstable_now=function(){return a.now()-o}}var l=[],u=[],c=1,h=null,f=3,p=!1,g=!1,v=!1,m=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(U){for(var H=t(u);H!==null;){if(H.callback===null)i(u);else if(H.startTime<=U)i(u),H.sortIndex=H.expirationTime,e(l,H);else break;H=t(u)}}function y(U){if(v=!1,x(U),!g)if(t(l)!==null)g=!0,z(E);else{var H=t(u);H!==null&&N(y,H.startTime-U)}}function E(U,H){g=!1,v&&(v=!1,d(S),S=-1),p=!0;var Z=f;try{for(x(H),h=t(l);h!==null&&(!(h.expirationTime>H)||U&&!b());){var ee=h.callback;if(typeof ee=="function"){h.callback=null,f=h.priorityLevel;var J=ee(h.expirationTime<=H);H=n.unstable_now(),typeof J=="function"?h.callback=J:h===t(l)&&i(l),x(H)}else i(l);h=t(l)}if(h!==null)var Pe=!0;else{var Le=t(u);Le!==null&&N(y,Le.startTime-H),Pe=!1}return Pe}finally{h=null,f=Z,p=!1}}var C=!1,w=null,S=-1,T=5,D=-1;function b(){return!(n.unstable_now()-D<T)}function V(){if(w!==null){var U=n.unstable_now();D=U;var H=!0;try{H=w(!0,U)}finally{H?B():(C=!1,w=null)}}else C=!1}var B;if(typeof _=="function")B=function(){_(V)};else if(typeof MessageChannel<"u"){var O=new MessageChannel,L=O.port2;O.port1.onmessage=V,B=function(){L.postMessage(null)}}else B=function(){m(V,0)};function z(U){w=U,C||(C=!0,B())}function N(U,H){S=m(function(){U(n.unstable_now())},H)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(U){U.callback=null},n.unstable_continueExecution=function(){g||p||(g=!0,z(E))},n.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<U?Math.floor(1e3/U):5},n.unstable_getCurrentPriorityLevel=function(){return f},n.unstable_getFirstCallbackNode=function(){return t(l)},n.unstable_next=function(U){switch(f){case 1:case 2:case 3:var H=3;break;default:H=f}var Z=f;f=H;try{return U()}finally{f=Z}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(U,H){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var Z=f;f=U;try{return H()}finally{f=Z}},n.unstable_scheduleCallback=function(U,H,Z){var ee=n.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?ee+Z:ee):Z=ee,U){case 1:var J=-1;break;case 2:J=250;break;case 5:J=1073741823;break;case 4:J=1e4;break;default:J=5e3}return J=Z+J,U={id:c++,callback:H,priorityLevel:U,startTime:Z,expirationTime:J,sortIndex:-1},Z>ee?(U.sortIndex=Z,e(u,U),t(l)===null&&U===t(u)&&(v?(d(S),S=-1):v=!0,N(y,Z-ee))):(U.sortIndex=J,e(l,U),g||p||(g=!0,z(E))),U},n.unstable_shouldYield=b,n.unstable_wrapCallback=function(U){var H=f;return function(){var Z=f;f=H;try{return U.apply(this,arguments)}finally{f=Z}}}})(f0);c0.exports=f0;var _y=c0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gy=Je,Vn=_y;function te(n){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+n,t=1;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var d0=new Set,Io={};function Us(n,e){Ra(n,e),Ra(n+"Capture",e)}function Ra(n,e){for(Io[n]=e,n=0;n<e.length;n++)d0.add(e[n])}var rr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Zf=Object.prototype.hasOwnProperty,vy=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Dm={},Lm={};function xy(n){return Zf.call(Lm,n)?!0:Zf.call(Dm,n)?!1:vy.test(n)?Lm[n]=!0:(Dm[n]=!0,!1)}function Sy(n,e,t,i){if(t!==null&&t.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:t!==null?!t.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function yy(n,e,t,i){if(e===null||typeof e>"u"||Sy(n,e,t,i))return!0;if(i)return!1;if(t!==null)switch(t.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function mn(n,e,t,i,r,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=t,this.propertyName=n,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var Qt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){Qt[n]=new mn(n,0,!1,n,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var e=n[0];Qt[e]=new mn(e,1,!1,n[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(n){Qt[n]=new mn(n,2,!1,n.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){Qt[n]=new mn(n,2,!1,n,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){Qt[n]=new mn(n,3,!1,n.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(n){Qt[n]=new mn(n,3,!0,n,null,!1,!1)});["capture","download"].forEach(function(n){Qt[n]=new mn(n,4,!1,n,null,!1,!1)});["cols","rows","size","span"].forEach(function(n){Qt[n]=new mn(n,6,!1,n,null,!1,!1)});["rowSpan","start"].forEach(function(n){Qt[n]=new mn(n,5,!1,n.toLowerCase(),null,!1,!1)});var Jh=/[\-:]([a-z])/g;function ep(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var e=n.replace(Jh,ep);Qt[e]=new mn(e,1,!1,n,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var e=n.replace(Jh,ep);Qt[e]=new mn(e,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(n){var e=n.replace(Jh,ep);Qt[e]=new mn(e,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(n){Qt[n]=new mn(n,1,!1,n.toLowerCase(),null,!1,!1)});Qt.xlinkHref=new mn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(n){Qt[n]=new mn(n,1,!1,n.toLowerCase(),null,!0,!0)});function tp(n,e,t,i){var r=Qt.hasOwnProperty(e)?Qt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(yy(e,t,r,i)&&(t=null),i||r===null?xy(e)&&(t===null?n.removeAttribute(e):n.setAttribute(e,""+t)):r.mustUseProperty?n[r.propertyName]=t===null?r.type===3?!1:"":t:(e=r.attributeName,i=r.attributeNamespace,t===null?n.removeAttribute(e):(r=r.type,t=r===3||r===4&&t===!0?"":""+t,i?n.setAttributeNS(i,e,t):n.setAttribute(e,t))))}var hr=gy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,yl=Symbol.for("react.element"),ia=Symbol.for("react.portal"),ra=Symbol.for("react.fragment"),np=Symbol.for("react.strict_mode"),Qf=Symbol.for("react.profiler"),h0=Symbol.for("react.provider"),p0=Symbol.for("react.context"),ip=Symbol.for("react.forward_ref"),Jf=Symbol.for("react.suspense"),ed=Symbol.for("react.suspense_list"),rp=Symbol.for("react.memo"),Tr=Symbol.for("react.lazy"),m0=Symbol.for("react.offscreen"),Nm=Symbol.iterator;function Za(n){return n===null||typeof n!="object"?null:(n=Nm&&n[Nm]||n["@@iterator"],typeof n=="function"?n:null)}var wt=Object.assign,Fc;function po(n){if(Fc===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);Fc=e&&e[1]||""}return`
`+Fc+n}var Oc=!1;function kc(n,e){if(!n||Oc)return"";Oc=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(n,[],e)}else{try{e.call()}catch(u){i=u}n.call(e.prototype)}else{try{throw Error()}catch(u){i=u}n()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),a=r.length-1,o=s.length-1;1<=a&&0<=o&&r[a]!==s[o];)o--;for(;1<=a&&0<=o;a--,o--)if(r[a]!==s[o]){if(a!==1||o!==1)do if(a--,o--,0>o||r[a]!==s[o]){var l=`
`+r[a].replace(" at new "," at ");return n.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",n.displayName)),l}while(1<=a&&0<=o);break}}}finally{Oc=!1,Error.prepareStackTrace=t}return(n=n?n.displayName||n.name:"")?po(n):""}function My(n){switch(n.tag){case 5:return po(n.type);case 16:return po("Lazy");case 13:return po("Suspense");case 19:return po("SuspenseList");case 0:case 2:case 15:return n=kc(n.type,!1),n;case 11:return n=kc(n.type.render,!1),n;case 1:return n=kc(n.type,!0),n;default:return""}}function td(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case ra:return"Fragment";case ia:return"Portal";case Qf:return"Profiler";case np:return"StrictMode";case Jf:return"Suspense";case ed:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case p0:return(n.displayName||"Context")+".Consumer";case h0:return(n._context.displayName||"Context")+".Provider";case ip:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case rp:return e=n.displayName||null,e!==null?e:td(n.type)||"Memo";case Tr:e=n._payload,n=n._init;try{return td(n(e))}catch{}}return null}function Ey(n){var e=n.type;switch(n.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=e.render,n=n.displayName||n.name||"",e.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return td(e);case 8:return e===np?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Xr(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function _0(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Ty(n){var e=_0(n)?"checked":"value",t=Object.getOwnPropertyDescriptor(n.constructor.prototype,e),i=""+n[e];if(!n.hasOwnProperty(e)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var r=t.get,s=t.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return r.call(this)},set:function(a){i=""+a,s.call(this,a)}}),Object.defineProperty(n,e,{enumerable:t.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function Ml(n){n._valueTracker||(n._valueTracker=Ty(n))}function g0(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),i="";return n&&(i=_0(n)?n.checked?"true":"false":n.value),n=i,n!==t?(e.setValue(n),!0):!1}function bu(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function nd(n,e){var t=e.checked;return wt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??n._wrapperState.initialChecked})}function Im(n,e){var t=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;t=Xr(e.value!=null?e.value:t),n._wrapperState={initialChecked:i,initialValue:t,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function v0(n,e){e=e.checked,e!=null&&tp(n,"checked",e,!1)}function id(n,e){v0(n,e);var t=Xr(e.value),i=e.type;if(t!=null)i==="number"?(t===0&&n.value===""||n.value!=t)&&(n.value=""+t):n.value!==""+t&&(n.value=""+t);else if(i==="submit"||i==="reset"){n.removeAttribute("value");return}e.hasOwnProperty("value")?rd(n,e.type,t):e.hasOwnProperty("defaultValue")&&rd(n,e.type,Xr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(n.defaultChecked=!!e.defaultChecked)}function Um(n,e,t){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+n._wrapperState.initialValue,t||e===n.value||(n.value=e),n.defaultValue=e}t=n.name,t!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,t!==""&&(n.name=t)}function rd(n,e,t){(e!=="number"||bu(n.ownerDocument)!==n)&&(t==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+t&&(n.defaultValue=""+t))}var mo=Array.isArray;function ga(n,e,t,i){if(n=n.options,e){e={};for(var r=0;r<t.length;r++)e["$"+t[r]]=!0;for(t=0;t<n.length;t++)r=e.hasOwnProperty("$"+n[t].value),n[t].selected!==r&&(n[t].selected=r),r&&i&&(n[t].defaultSelected=!0)}else{for(t=""+Xr(t),e=null,r=0;r<n.length;r++){if(n[r].value===t){n[r].selected=!0,i&&(n[r].defaultSelected=!0);return}e!==null||n[r].disabled||(e=n[r])}e!==null&&(e.selected=!0)}}function sd(n,e){if(e.dangerouslySetInnerHTML!=null)throw Error(te(91));return wt({},e,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Fm(n,e){var t=e.value;if(t==null){if(t=e.children,e=e.defaultValue,t!=null){if(e!=null)throw Error(te(92));if(mo(t)){if(1<t.length)throw Error(te(93));t=t[0]}e=t}e==null&&(e=""),t=e}n._wrapperState={initialValue:Xr(t)}}function x0(n,e){var t=Xr(e.value),i=Xr(e.defaultValue);t!=null&&(t=""+t,t!==n.value&&(n.value=t),e.defaultValue==null&&n.defaultValue!==t&&(n.defaultValue=t)),i!=null&&(n.defaultValue=""+i)}function Om(n){var e=n.textContent;e===n._wrapperState.initialValue&&e!==""&&e!==null&&(n.value=e)}function S0(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ad(n,e){return n==null||n==="http://www.w3.org/1999/xhtml"?S0(e):n==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var El,y0=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,t,i,r){MSApp.execUnsafeLocalFunction(function(){return n(e,t,i,r)})}:n}(function(n,e){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=e;else{for(El=El||document.createElement("div"),El.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=El.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;e.firstChild;)n.appendChild(e.firstChild)}});function Uo(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var Mo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},wy=["Webkit","ms","Moz","O"];Object.keys(Mo).forEach(function(n){wy.forEach(function(e){e=e+n.charAt(0).toUpperCase()+n.substring(1),Mo[e]=Mo[n]})});function M0(n,e,t){return e==null||typeof e=="boolean"||e===""?"":t||typeof e!="number"||e===0||Mo.hasOwnProperty(n)&&Mo[n]?(""+e).trim():e+"px"}function E0(n,e){n=n.style;for(var t in e)if(e.hasOwnProperty(t)){var i=t.indexOf("--")===0,r=M0(t,e[t],i);t==="float"&&(t="cssFloat"),i?n.setProperty(t,r):n[t]=r}}var Ay=wt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function od(n,e){if(e){if(Ay[n]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(te(137,n));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(te(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(te(61))}if(e.style!=null&&typeof e.style!="object")throw Error(te(62))}}function ld(n,e){if(n.indexOf("-")===-1)return typeof e.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ud=null;function sp(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var cd=null,va=null,xa=null;function km(n){if(n=fl(n)){if(typeof cd!="function")throw Error(te(280));var e=n.stateNode;e&&(e=mc(e),cd(n.stateNode,n.type,e))}}function T0(n){va?xa?xa.push(n):xa=[n]:va=n}function w0(){if(va){var n=va,e=xa;if(xa=va=null,km(n),e)for(n=0;n<e.length;n++)km(e[n])}}function A0(n,e){return n(e)}function C0(){}var Bc=!1;function R0(n,e,t){if(Bc)return n(e,t);Bc=!0;try{return A0(n,e,t)}finally{Bc=!1,(va!==null||xa!==null)&&(C0(),w0())}}function Fo(n,e){var t=n.stateNode;if(t===null)return null;var i=mc(t);if(i===null)return null;t=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(n=n.type,i=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!i;break e;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(te(231,e,typeof t));return t}var fd=!1;if(rr)try{var Qa={};Object.defineProperty(Qa,"passive",{get:function(){fd=!0}}),window.addEventListener("test",Qa,Qa),window.removeEventListener("test",Qa,Qa)}catch{fd=!1}function Cy(n,e,t,i,r,s,a,o,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(t,u)}catch(c){this.onError(c)}}var Eo=!1,Pu=null,Du=!1,dd=null,Ry={onError:function(n){Eo=!0,Pu=n}};function by(n,e,t,i,r,s,a,o,l){Eo=!1,Pu=null,Cy.apply(Ry,arguments)}function Py(n,e,t,i,r,s,a,o,l){if(by.apply(this,arguments),Eo){if(Eo){var u=Pu;Eo=!1,Pu=null}else throw Error(te(198));Du||(Du=!0,dd=u)}}function Fs(n){var e=n,t=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,e.flags&4098&&(t=e.return),n=e.return;while(n)}return e.tag===3?t:null}function b0(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function Bm(n){if(Fs(n)!==n)throw Error(te(188))}function Dy(n){var e=n.alternate;if(!e){if(e=Fs(n),e===null)throw Error(te(188));return e!==n?null:n}for(var t=n,i=e;;){var r=t.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){t=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===t)return Bm(r),n;if(s===i)return Bm(r),e;s=s.sibling}throw Error(te(188))}if(t.return!==i.return)t=r,i=s;else{for(var a=!1,o=r.child;o;){if(o===t){a=!0,t=r,i=s;break}if(o===i){a=!0,i=r,t=s;break}o=o.sibling}if(!a){for(o=s.child;o;){if(o===t){a=!0,t=s,i=r;break}if(o===i){a=!0,i=s,t=r;break}o=o.sibling}if(!a)throw Error(te(189))}}if(t.alternate!==i)throw Error(te(190))}if(t.tag!==3)throw Error(te(188));return t.stateNode.current===t?n:e}function P0(n){return n=Dy(n),n!==null?D0(n):null}function D0(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var e=D0(n);if(e!==null)return e;n=n.sibling}return null}var L0=Vn.unstable_scheduleCallback,zm=Vn.unstable_cancelCallback,Ly=Vn.unstable_shouldYield,Ny=Vn.unstable_requestPaint,Dt=Vn.unstable_now,Iy=Vn.unstable_getCurrentPriorityLevel,ap=Vn.unstable_ImmediatePriority,N0=Vn.unstable_UserBlockingPriority,Lu=Vn.unstable_NormalPriority,Uy=Vn.unstable_LowPriority,I0=Vn.unstable_IdlePriority,fc=null,Di=null;function Fy(n){if(Di&&typeof Di.onCommitFiberRoot=="function")try{Di.onCommitFiberRoot(fc,n,void 0,(n.current.flags&128)===128)}catch{}}var mi=Math.clz32?Math.clz32:By,Oy=Math.log,ky=Math.LN2;function By(n){return n>>>=0,n===0?32:31-(Oy(n)/ky|0)|0}var Tl=64,wl=4194304;function _o(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Nu(n,e){var t=n.pendingLanes;if(t===0)return 0;var i=0,r=n.suspendedLanes,s=n.pingedLanes,a=t&268435455;if(a!==0){var o=a&~r;o!==0?i=_o(o):(s&=a,s!==0&&(i=_o(s)))}else a=t&~r,a!==0?i=_o(a):s!==0&&(i=_o(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=t&16),e=n.entangledLanes,e!==0)for(n=n.entanglements,e&=i;0<e;)t=31-mi(e),r=1<<t,i|=n[t],e&=~r;return i}function zy(n,e){switch(n){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Vy(n,e){for(var t=n.suspendedLanes,i=n.pingedLanes,r=n.expirationTimes,s=n.pendingLanes;0<s;){var a=31-mi(s),o=1<<a,l=r[a];l===-1?(!(o&t)||o&i)&&(r[a]=zy(o,e)):l<=e&&(n.expiredLanes|=o),s&=~o}}function hd(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function U0(){var n=Tl;return Tl<<=1,!(Tl&4194240)&&(Tl=64),n}function zc(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function ul(n,e,t){n.pendingLanes|=e,e!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,e=31-mi(e),n[e]=t}function Gy(n,e){var t=n.pendingLanes&~e;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=e,n.mutableReadLanes&=e,n.entangledLanes&=e,e=n.entanglements;var i=n.eventTimes;for(n=n.expirationTimes;0<t;){var r=31-mi(t),s=1<<r;e[r]=0,i[r]=-1,n[r]=-1,t&=~s}}function op(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var i=31-mi(t),r=1<<i;r&e|n[i]&e&&(n[i]|=e),t&=~r}}var rt=0;function F0(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var O0,lp,k0,B0,z0,pd=!1,Al=[],Ur=null,Fr=null,Or=null,Oo=new Map,ko=new Map,Ar=[],Hy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Vm(n,e){switch(n){case"focusin":case"focusout":Ur=null;break;case"dragenter":case"dragleave":Fr=null;break;case"mouseover":case"mouseout":Or=null;break;case"pointerover":case"pointerout":Oo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ko.delete(e.pointerId)}}function Ja(n,e,t,i,r,s){return n===null||n.nativeEvent!==s?(n={blockedOn:e,domEventName:t,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=fl(e),e!==null&&lp(e)),n):(n.eventSystemFlags|=i,e=n.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),n)}function Wy(n,e,t,i,r){switch(e){case"focusin":return Ur=Ja(Ur,n,e,t,i,r),!0;case"dragenter":return Fr=Ja(Fr,n,e,t,i,r),!0;case"mouseover":return Or=Ja(Or,n,e,t,i,r),!0;case"pointerover":var s=r.pointerId;return Oo.set(s,Ja(Oo.get(s)||null,n,e,t,i,r)),!0;case"gotpointercapture":return s=r.pointerId,ko.set(s,Ja(ko.get(s)||null,n,e,t,i,r)),!0}return!1}function V0(n){var e=gs(n.target);if(e!==null){var t=Fs(e);if(t!==null){if(e=t.tag,e===13){if(e=b0(t),e!==null){n.blockedOn=e,z0(n.priority,function(){k0(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function cu(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=md(n.domEventName,n.eventSystemFlags,e[0],n.nativeEvent);if(t===null){t=n.nativeEvent;var i=new t.constructor(t.type,t);ud=i,t.target.dispatchEvent(i),ud=null}else return e=fl(t),e!==null&&lp(e),n.blockedOn=t,!1;e.shift()}return!0}function Gm(n,e,t){cu(n)&&t.delete(e)}function Xy(){pd=!1,Ur!==null&&cu(Ur)&&(Ur=null),Fr!==null&&cu(Fr)&&(Fr=null),Or!==null&&cu(Or)&&(Or=null),Oo.forEach(Gm),ko.forEach(Gm)}function eo(n,e){n.blockedOn===e&&(n.blockedOn=null,pd||(pd=!0,Vn.unstable_scheduleCallback(Vn.unstable_NormalPriority,Xy)))}function Bo(n){function e(r){return eo(r,n)}if(0<Al.length){eo(Al[0],n);for(var t=1;t<Al.length;t++){var i=Al[t];i.blockedOn===n&&(i.blockedOn=null)}}for(Ur!==null&&eo(Ur,n),Fr!==null&&eo(Fr,n),Or!==null&&eo(Or,n),Oo.forEach(e),ko.forEach(e),t=0;t<Ar.length;t++)i=Ar[t],i.blockedOn===n&&(i.blockedOn=null);for(;0<Ar.length&&(t=Ar[0],t.blockedOn===null);)V0(t),t.blockedOn===null&&Ar.shift()}var Sa=hr.ReactCurrentBatchConfig,Iu=!0;function Yy(n,e,t,i){var r=rt,s=Sa.transition;Sa.transition=null;try{rt=1,up(n,e,t,i)}finally{rt=r,Sa.transition=s}}function jy(n,e,t,i){var r=rt,s=Sa.transition;Sa.transition=null;try{rt=4,up(n,e,t,i)}finally{rt=r,Sa.transition=s}}function up(n,e,t,i){if(Iu){var r=md(n,e,t,i);if(r===null)Kc(n,e,i,Uu,t),Vm(n,i);else if(Wy(r,n,e,t,i))i.stopPropagation();else if(Vm(n,i),e&4&&-1<Hy.indexOf(n)){for(;r!==null;){var s=fl(r);if(s!==null&&O0(s),s=md(n,e,t,i),s===null&&Kc(n,e,i,Uu,t),s===r)break;r=s}r!==null&&i.stopPropagation()}else Kc(n,e,i,null,t)}}var Uu=null;function md(n,e,t,i){if(Uu=null,n=sp(i),n=gs(n),n!==null)if(e=Fs(n),e===null)n=null;else if(t=e.tag,t===13){if(n=b0(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null);return Uu=n,null}function G0(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Iy()){case ap:return 1;case N0:return 4;case Lu:case Uy:return 16;case I0:return 536870912;default:return 16}default:return 16}}var br=null,cp=null,fu=null;function H0(){if(fu)return fu;var n,e=cp,t=e.length,i,r="value"in br?br.value:br.textContent,s=r.length;for(n=0;n<t&&e[n]===r[n];n++);var a=t-n;for(i=1;i<=a&&e[t-i]===r[s-i];i++);return fu=r.slice(n,1<i?1-i:void 0)}function du(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function Cl(){return!0}function Hm(){return!1}function Xn(n){function e(t,i,r,s,a){this._reactName=t,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var o in n)n.hasOwnProperty(o)&&(t=n[o],this[o]=t?t(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Cl:Hm,this.isPropagationStopped=Hm,this}return wt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Cl)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Cl)},persist:function(){},isPersistent:Cl}),e}var Ya={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},fp=Xn(Ya),cl=wt({},Ya,{view:0,detail:0}),qy=Xn(cl),Vc,Gc,to,dc=wt({},cl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:dp,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==to&&(to&&n.type==="mousemove"?(Vc=n.screenX-to.screenX,Gc=n.screenY-to.screenY):Gc=Vc=0,to=n),Vc)},movementY:function(n){return"movementY"in n?n.movementY:Gc}}),Wm=Xn(dc),$y=wt({},dc,{dataTransfer:0}),Ky=Xn($y),Zy=wt({},cl,{relatedTarget:0}),Hc=Xn(Zy),Qy=wt({},Ya,{animationName:0,elapsedTime:0,pseudoElement:0}),Jy=Xn(Qy),eM=wt({},Ya,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),tM=Xn(eM),nM=wt({},Ya,{data:0}),Xm=Xn(nM),iM={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},rM={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},sM={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function aM(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=sM[n])?!!e[n]:!1}function dp(){return aM}var oM=wt({},cl,{key:function(n){if(n.key){var e=iM[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=du(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?rM[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:dp,charCode:function(n){return n.type==="keypress"?du(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?du(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),lM=Xn(oM),uM=wt({},dc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ym=Xn(uM),cM=wt({},cl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:dp}),fM=Xn(cM),dM=wt({},Ya,{propertyName:0,elapsedTime:0,pseudoElement:0}),hM=Xn(dM),pM=wt({},dc,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),mM=Xn(pM),_M=[9,13,27,32],hp=rr&&"CompositionEvent"in window,To=null;rr&&"documentMode"in document&&(To=document.documentMode);var gM=rr&&"TextEvent"in window&&!To,W0=rr&&(!hp||To&&8<To&&11>=To),jm=" ",qm=!1;function X0(n,e){switch(n){case"keyup":return _M.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Y0(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var sa=!1;function vM(n,e){switch(n){case"compositionend":return Y0(e);case"keypress":return e.which!==32?null:(qm=!0,jm);case"textInput":return n=e.data,n===jm&&qm?null:n;default:return null}}function xM(n,e){if(sa)return n==="compositionend"||!hp&&X0(n,e)?(n=H0(),fu=cp=br=null,sa=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return W0&&e.locale!=="ko"?null:e.data;default:return null}}var SM={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function $m(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!SM[n.type]:e==="textarea"}function j0(n,e,t,i){T0(i),e=Fu(e,"onChange"),0<e.length&&(t=new fp("onChange","change",null,t,i),n.push({event:t,listeners:e}))}var wo=null,zo=null;function yM(n){rv(n,0)}function hc(n){var e=la(n);if(g0(e))return n}function MM(n,e){if(n==="change")return e}var q0=!1;if(rr){var Wc;if(rr){var Xc="oninput"in document;if(!Xc){var Km=document.createElement("div");Km.setAttribute("oninput","return;"),Xc=typeof Km.oninput=="function"}Wc=Xc}else Wc=!1;q0=Wc&&(!document.documentMode||9<document.documentMode)}function Zm(){wo&&(wo.detachEvent("onpropertychange",$0),zo=wo=null)}function $0(n){if(n.propertyName==="value"&&hc(zo)){var e=[];j0(e,zo,n,sp(n)),R0(yM,e)}}function EM(n,e,t){n==="focusin"?(Zm(),wo=e,zo=t,wo.attachEvent("onpropertychange",$0)):n==="focusout"&&Zm()}function TM(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return hc(zo)}function wM(n,e){if(n==="click")return hc(e)}function AM(n,e){if(n==="input"||n==="change")return hc(e)}function CM(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var gi=typeof Object.is=="function"?Object.is:CM;function Vo(n,e){if(gi(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),i=Object.keys(e);if(t.length!==i.length)return!1;for(i=0;i<t.length;i++){var r=t[i];if(!Zf.call(e,r)||!gi(n[r],e[r]))return!1}return!0}function Qm(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Jm(n,e){var t=Qm(n);n=0;for(var i;t;){if(t.nodeType===3){if(i=n+t.textContent.length,n<=e&&i>=e)return{node:t,offset:e-n};n=i}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Qm(t)}}function K0(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?K0(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function Z0(){for(var n=window,e=bu();e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=bu(n.document)}return e}function pp(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}function RM(n){var e=Z0(),t=n.focusedElem,i=n.selectionRange;if(e!==t&&t&&t.ownerDocument&&K0(t.ownerDocument.documentElement,t)){if(i!==null&&pp(t)){if(e=i.start,n=i.end,n===void 0&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if(n=(e=t.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var r=t.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!n.extend&&s>i&&(r=i,i=s,s=r),r=Jm(t,s);var a=Jm(t,i);r&&a&&(n.rangeCount!==1||n.anchorNode!==r.node||n.anchorOffset!==r.offset||n.focusNode!==a.node||n.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),n.removeAllRanges(),s>i?(n.addRange(e),n.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),n.addRange(e)))}}for(e=[],n=t;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)n=e[t],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var bM=rr&&"documentMode"in document&&11>=document.documentMode,aa=null,_d=null,Ao=null,gd=!1;function e_(n,e,t){var i=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;gd||aa==null||aa!==bu(i)||(i=aa,"selectionStart"in i&&pp(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Ao&&Vo(Ao,i)||(Ao=i,i=Fu(_d,"onSelect"),0<i.length&&(e=new fp("onSelect","select",null,e,t),n.push({event:e,listeners:i}),e.target=aa)))}function Rl(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var oa={animationend:Rl("Animation","AnimationEnd"),animationiteration:Rl("Animation","AnimationIteration"),animationstart:Rl("Animation","AnimationStart"),transitionend:Rl("Transition","TransitionEnd")},Yc={},Q0={};rr&&(Q0=document.createElement("div").style,"AnimationEvent"in window||(delete oa.animationend.animation,delete oa.animationiteration.animation,delete oa.animationstart.animation),"TransitionEvent"in window||delete oa.transitionend.transition);function pc(n){if(Yc[n])return Yc[n];if(!oa[n])return n;var e=oa[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in Q0)return Yc[n]=e[t];return n}var J0=pc("animationend"),ev=pc("animationiteration"),tv=pc("animationstart"),nv=pc("transitionend"),iv=new Map,t_="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Zr(n,e){iv.set(n,e),Us(e,[n])}for(var jc=0;jc<t_.length;jc++){var qc=t_[jc],PM=qc.toLowerCase(),DM=qc[0].toUpperCase()+qc.slice(1);Zr(PM,"on"+DM)}Zr(J0,"onAnimationEnd");Zr(ev,"onAnimationIteration");Zr(tv,"onAnimationStart");Zr("dblclick","onDoubleClick");Zr("focusin","onFocus");Zr("focusout","onBlur");Zr(nv,"onTransitionEnd");Ra("onMouseEnter",["mouseout","mouseover"]);Ra("onMouseLeave",["mouseout","mouseover"]);Ra("onPointerEnter",["pointerout","pointerover"]);Ra("onPointerLeave",["pointerout","pointerover"]);Us("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Us("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Us("onBeforeInput",["compositionend","keypress","textInput","paste"]);Us("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Us("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Us("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var go="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),LM=new Set("cancel close invalid load scroll toggle".split(" ").concat(go));function n_(n,e,t){var i=n.type||"unknown-event";n.currentTarget=t,Py(i,e,void 0,n),n.currentTarget=null}function rv(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var i=n[t],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var a=i.length-1;0<=a;a--){var o=i[a],l=o.instance,u=o.currentTarget;if(o=o.listener,l!==s&&r.isPropagationStopped())break e;n_(r,o,u),s=l}else for(a=0;a<i.length;a++){if(o=i[a],l=o.instance,u=o.currentTarget,o=o.listener,l!==s&&r.isPropagationStopped())break e;n_(r,o,u),s=l}}}if(Du)throw n=dd,Du=!1,dd=null,n}function mt(n,e){var t=e[Md];t===void 0&&(t=e[Md]=new Set);var i=n+"__bubble";t.has(i)||(sv(e,n,2,!1),t.add(i))}function $c(n,e,t){var i=0;e&&(i|=4),sv(t,n,i,e)}var bl="_reactListening"+Math.random().toString(36).slice(2);function Go(n){if(!n[bl]){n[bl]=!0,d0.forEach(function(t){t!=="selectionchange"&&(LM.has(t)||$c(t,!1,n),$c(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[bl]||(e[bl]=!0,$c("selectionchange",!1,e))}}function sv(n,e,t,i){switch(G0(e)){case 1:var r=Yy;break;case 4:r=jy;break;default:r=up}t=r.bind(null,e,t,n),r=void 0,!fd||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?n.addEventListener(e,t,{capture:!0,passive:r}):n.addEventListener(e,t,!0):r!==void 0?n.addEventListener(e,t,{passive:r}):n.addEventListener(e,t,!1)}function Kc(n,e,t,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var o=i.stateNode.containerInfo;if(o===r||o.nodeType===8&&o.parentNode===r)break;if(a===4)for(a=i.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;a=a.return}for(;o!==null;){if(a=gs(o),a===null)return;if(l=a.tag,l===5||l===6){i=s=a;continue e}o=o.parentNode}}i=i.return}R0(function(){var u=s,c=sp(t),h=[];e:{var f=iv.get(n);if(f!==void 0){var p=fp,g=n;switch(n){case"keypress":if(du(t)===0)break e;case"keydown":case"keyup":p=lM;break;case"focusin":g="focus",p=Hc;break;case"focusout":g="blur",p=Hc;break;case"beforeblur":case"afterblur":p=Hc;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Wm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=Ky;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=fM;break;case J0:case ev:case tv:p=Jy;break;case nv:p=hM;break;case"scroll":p=qy;break;case"wheel":p=mM;break;case"copy":case"cut":case"paste":p=tM;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Ym}var v=(e&4)!==0,m=!v&&n==="scroll",d=v?f!==null?f+"Capture":null:f;v=[];for(var _=u,x;_!==null;){x=_;var y=x.stateNode;if(x.tag===5&&y!==null&&(x=y,d!==null&&(y=Fo(_,d),y!=null&&v.push(Ho(_,y,x)))),m)break;_=_.return}0<v.length&&(f=new p(f,g,null,t,c),h.push({event:f,listeners:v}))}}if(!(e&7)){e:{if(f=n==="mouseover"||n==="pointerover",p=n==="mouseout"||n==="pointerout",f&&t!==ud&&(g=t.relatedTarget||t.fromElement)&&(gs(g)||g[sr]))break e;if((p||f)&&(f=c.window===c?c:(f=c.ownerDocument)?f.defaultView||f.parentWindow:window,p?(g=t.relatedTarget||t.toElement,p=u,g=g?gs(g):null,g!==null&&(m=Fs(g),g!==m||g.tag!==5&&g.tag!==6)&&(g=null)):(p=null,g=u),p!==g)){if(v=Wm,y="onMouseLeave",d="onMouseEnter",_="mouse",(n==="pointerout"||n==="pointerover")&&(v=Ym,y="onPointerLeave",d="onPointerEnter",_="pointer"),m=p==null?f:la(p),x=g==null?f:la(g),f=new v(y,_+"leave",p,t,c),f.target=m,f.relatedTarget=x,y=null,gs(c)===u&&(v=new v(d,_+"enter",g,t,c),v.target=x,v.relatedTarget=m,y=v),m=y,p&&g)t:{for(v=p,d=g,_=0,x=v;x;x=zs(x))_++;for(x=0,y=d;y;y=zs(y))x++;for(;0<_-x;)v=zs(v),_--;for(;0<x-_;)d=zs(d),x--;for(;_--;){if(v===d||d!==null&&v===d.alternate)break t;v=zs(v),d=zs(d)}v=null}else v=null;p!==null&&i_(h,f,p,v,!1),g!==null&&m!==null&&i_(h,m,g,v,!0)}}e:{if(f=u?la(u):window,p=f.nodeName&&f.nodeName.toLowerCase(),p==="select"||p==="input"&&f.type==="file")var E=MM;else if($m(f))if(q0)E=AM;else{E=TM;var C=EM}else(p=f.nodeName)&&p.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(E=wM);if(E&&(E=E(n,u))){j0(h,E,t,c);break e}C&&C(n,f,u),n==="focusout"&&(C=f._wrapperState)&&C.controlled&&f.type==="number"&&rd(f,"number",f.value)}switch(C=u?la(u):window,n){case"focusin":($m(C)||C.contentEditable==="true")&&(aa=C,_d=u,Ao=null);break;case"focusout":Ao=_d=aa=null;break;case"mousedown":gd=!0;break;case"contextmenu":case"mouseup":case"dragend":gd=!1,e_(h,t,c);break;case"selectionchange":if(bM)break;case"keydown":case"keyup":e_(h,t,c)}var w;if(hp)e:{switch(n){case"compositionstart":var S="onCompositionStart";break e;case"compositionend":S="onCompositionEnd";break e;case"compositionupdate":S="onCompositionUpdate";break e}S=void 0}else sa?X0(n,t)&&(S="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(S="onCompositionStart");S&&(W0&&t.locale!=="ko"&&(sa||S!=="onCompositionStart"?S==="onCompositionEnd"&&sa&&(w=H0()):(br=c,cp="value"in br?br.value:br.textContent,sa=!0)),C=Fu(u,S),0<C.length&&(S=new Xm(S,n,null,t,c),h.push({event:S,listeners:C}),w?S.data=w:(w=Y0(t),w!==null&&(S.data=w)))),(w=gM?vM(n,t):xM(n,t))&&(u=Fu(u,"onBeforeInput"),0<u.length&&(c=new Xm("onBeforeInput","beforeinput",null,t,c),h.push({event:c,listeners:u}),c.data=w))}rv(h,e)})}function Ho(n,e,t){return{instance:n,listener:e,currentTarget:t}}function Fu(n,e){for(var t=e+"Capture",i=[];n!==null;){var r=n,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Fo(n,t),s!=null&&i.unshift(Ho(n,s,r)),s=Fo(n,e),s!=null&&i.push(Ho(n,s,r))),n=n.return}return i}function zs(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function i_(n,e,t,i,r){for(var s=e._reactName,a=[];t!==null&&t!==i;){var o=t,l=o.alternate,u=o.stateNode;if(l!==null&&l===i)break;o.tag===5&&u!==null&&(o=u,r?(l=Fo(t,s),l!=null&&a.unshift(Ho(t,l,o))):r||(l=Fo(t,s),l!=null&&a.push(Ho(t,l,o)))),t=t.return}a.length!==0&&n.push({event:e,listeners:a})}var NM=/\r\n?/g,IM=/\u0000|\uFFFD/g;function r_(n){return(typeof n=="string"?n:""+n).replace(NM,`
`).replace(IM,"")}function Pl(n,e,t){if(e=r_(e),r_(n)!==e&&t)throw Error(te(425))}function Ou(){}var vd=null,xd=null;function Sd(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var yd=typeof setTimeout=="function"?setTimeout:void 0,UM=typeof clearTimeout=="function"?clearTimeout:void 0,s_=typeof Promise=="function"?Promise:void 0,FM=typeof queueMicrotask=="function"?queueMicrotask:typeof s_<"u"?function(n){return s_.resolve(null).then(n).catch(OM)}:yd;function OM(n){setTimeout(function(){throw n})}function Zc(n,e){var t=e,i=0;do{var r=t.nextSibling;if(n.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(i===0){n.removeChild(r),Bo(e);return}i--}else t!=="$"&&t!=="$?"&&t!=="$!"||i++;t=r}while(t);Bo(e)}function kr(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return n}function a_(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return n;e--}else t==="/$"&&e++}n=n.previousSibling}return null}var ja=Math.random().toString(36).slice(2),Ai="__reactFiber$"+ja,Wo="__reactProps$"+ja,sr="__reactContainer$"+ja,Md="__reactEvents$"+ja,kM="__reactListeners$"+ja,BM="__reactHandles$"+ja;function gs(n){var e=n[Ai];if(e)return e;for(var t=n.parentNode;t;){if(e=t[sr]||t[Ai]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=a_(n);n!==null;){if(t=n[Ai])return t;n=a_(n)}return e}n=t,t=n.parentNode}return null}function fl(n){return n=n[Ai]||n[sr],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function la(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(te(33))}function mc(n){return n[Wo]||null}var Ed=[],ua=-1;function Qr(n){return{current:n}}function _t(n){0>ua||(n.current=Ed[ua],Ed[ua]=null,ua--)}function ht(n,e){ua++,Ed[ua]=n.current,n.current=e}var Yr={},un=Qr(Yr),Sn=Qr(!1),bs=Yr;function ba(n,e){var t=n.type.contextTypes;if(!t)return Yr;var i=n.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in t)r[s]=e[s];return i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=e,n.__reactInternalMemoizedMaskedChildContext=r),r}function yn(n){return n=n.childContextTypes,n!=null}function ku(){_t(Sn),_t(un)}function o_(n,e,t){if(un.current!==Yr)throw Error(te(168));ht(un,e),ht(Sn,t)}function av(n,e,t){var i=n.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return t;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(te(108,Ey(n)||"Unknown",r));return wt({},t,i)}function Bu(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Yr,bs=un.current,ht(un,n),ht(Sn,Sn.current),!0}function l_(n,e,t){var i=n.stateNode;if(!i)throw Error(te(169));t?(n=av(n,e,bs),i.__reactInternalMemoizedMergedChildContext=n,_t(Sn),_t(un),ht(un,n)):_t(Sn),ht(Sn,t)}var qi=null,_c=!1,Qc=!1;function ov(n){qi===null?qi=[n]:qi.push(n)}function zM(n){_c=!0,ov(n)}function Jr(){if(!Qc&&qi!==null){Qc=!0;var n=0,e=rt;try{var t=qi;for(rt=1;n<t.length;n++){var i=t[n];do i=i(!0);while(i!==null)}qi=null,_c=!1}catch(r){throw qi!==null&&(qi=qi.slice(n+1)),L0(ap,Jr),r}finally{rt=e,Qc=!1}}return null}var ca=[],fa=0,zu=null,Vu=0,$n=[],Kn=0,Ps=null,Zi=1,Qi="";function fs(n,e){ca[fa++]=Vu,ca[fa++]=zu,zu=n,Vu=e}function lv(n,e,t){$n[Kn++]=Zi,$n[Kn++]=Qi,$n[Kn++]=Ps,Ps=n;var i=Zi;n=Qi;var r=32-mi(i)-1;i&=~(1<<r),t+=1;var s=32-mi(e)+r;if(30<s){var a=r-r%5;s=(i&(1<<a)-1).toString(32),i>>=a,r-=a,Zi=1<<32-mi(e)+r|t<<r|i,Qi=s+n}else Zi=1<<s|t<<r|i,Qi=n}function mp(n){n.return!==null&&(fs(n,1),lv(n,1,0))}function _p(n){for(;n===zu;)zu=ca[--fa],ca[fa]=null,Vu=ca[--fa],ca[fa]=null;for(;n===Ps;)Ps=$n[--Kn],$n[Kn]=null,Qi=$n[--Kn],$n[Kn]=null,Zi=$n[--Kn],$n[Kn]=null}var kn=null,Un=null,gt=!1,fi=null;function uv(n,e){var t=Qn(5,null,null,0);t.elementType="DELETED",t.stateNode=e,t.return=n,e=n.deletions,e===null?(n.deletions=[t],n.flags|=16):e.push(t)}function u_(n,e){switch(n.tag){case 5:var t=n.type;return e=e.nodeType!==1||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(n.stateNode=e,kn=n,Un=kr(e.firstChild),!0):!1;case 6:return e=n.pendingProps===""||e.nodeType!==3?null:e,e!==null?(n.stateNode=e,kn=n,Un=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(t=Ps!==null?{id:Zi,overflow:Qi}:null,n.memoizedState={dehydrated:e,treeContext:t,retryLane:1073741824},t=Qn(18,null,null,0),t.stateNode=e,t.return=n,n.child=t,kn=n,Un=null,!0):!1;default:return!1}}function Td(n){return(n.mode&1)!==0&&(n.flags&128)===0}function wd(n){if(gt){var e=Un;if(e){var t=e;if(!u_(n,e)){if(Td(n))throw Error(te(418));e=kr(t.nextSibling);var i=kn;e&&u_(n,e)?uv(i,t):(n.flags=n.flags&-4097|2,gt=!1,kn=n)}}else{if(Td(n))throw Error(te(418));n.flags=n.flags&-4097|2,gt=!1,kn=n}}}function c_(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;kn=n}function Dl(n){if(n!==kn)return!1;if(!gt)return c_(n),gt=!0,!1;var e;if((e=n.tag!==3)&&!(e=n.tag!==5)&&(e=n.type,e=e!=="head"&&e!=="body"&&!Sd(n.type,n.memoizedProps)),e&&(e=Un)){if(Td(n))throw cv(),Error(te(418));for(;e;)uv(n,e),e=kr(e.nextSibling)}if(c_(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(te(317));e:{for(n=n.nextSibling,e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"){if(e===0){Un=kr(n.nextSibling);break e}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++}n=n.nextSibling}Un=null}}else Un=kn?kr(n.stateNode.nextSibling):null;return!0}function cv(){for(var n=Un;n;)n=kr(n.nextSibling)}function Pa(){Un=kn=null,gt=!1}function gp(n){fi===null?fi=[n]:fi.push(n)}var VM=hr.ReactCurrentBatchConfig;function no(n,e,t){if(n=t.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(te(309));var i=t.stateNode}if(!i)throw Error(te(147,n));var r=i,s=""+n;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var o=r.refs;a===null?delete o[s]:o[s]=a},e._stringRef=s,e)}if(typeof n!="string")throw Error(te(284));if(!t._owner)throw Error(te(290,n))}return n}function Ll(n,e){throw n=Object.prototype.toString.call(e),Error(te(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n))}function f_(n){var e=n._init;return e(n._payload)}function fv(n){function e(d,_){if(n){var x=d.deletions;x===null?(d.deletions=[_],d.flags|=16):x.push(_)}}function t(d,_){if(!n)return null;for(;_!==null;)e(d,_),_=_.sibling;return null}function i(d,_){for(d=new Map;_!==null;)_.key!==null?d.set(_.key,_):d.set(_.index,_),_=_.sibling;return d}function r(d,_){return d=Gr(d,_),d.index=0,d.sibling=null,d}function s(d,_,x){return d.index=x,n?(x=d.alternate,x!==null?(x=x.index,x<_?(d.flags|=2,_):x):(d.flags|=2,_)):(d.flags|=1048576,_)}function a(d){return n&&d.alternate===null&&(d.flags|=2),d}function o(d,_,x,y){return _===null||_.tag!==6?(_=af(x,d.mode,y),_.return=d,_):(_=r(_,x),_.return=d,_)}function l(d,_,x,y){var E=x.type;return E===ra?c(d,_,x.props.children,y,x.key):_!==null&&(_.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Tr&&f_(E)===_.type)?(y=r(_,x.props),y.ref=no(d,_,x),y.return=d,y):(y=xu(x.type,x.key,x.props,null,d.mode,y),y.ref=no(d,_,x),y.return=d,y)}function u(d,_,x,y){return _===null||_.tag!==4||_.stateNode.containerInfo!==x.containerInfo||_.stateNode.implementation!==x.implementation?(_=of(x,d.mode,y),_.return=d,_):(_=r(_,x.children||[]),_.return=d,_)}function c(d,_,x,y,E){return _===null||_.tag!==7?(_=Ts(x,d.mode,y,E),_.return=d,_):(_=r(_,x),_.return=d,_)}function h(d,_,x){if(typeof _=="string"&&_!==""||typeof _=="number")return _=af(""+_,d.mode,x),_.return=d,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case yl:return x=xu(_.type,_.key,_.props,null,d.mode,x),x.ref=no(d,null,_),x.return=d,x;case ia:return _=of(_,d.mode,x),_.return=d,_;case Tr:var y=_._init;return h(d,y(_._payload),x)}if(mo(_)||Za(_))return _=Ts(_,d.mode,x,null),_.return=d,_;Ll(d,_)}return null}function f(d,_,x,y){var E=_!==null?_.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return E!==null?null:o(d,_,""+x,y);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case yl:return x.key===E?l(d,_,x,y):null;case ia:return x.key===E?u(d,_,x,y):null;case Tr:return E=x._init,f(d,_,E(x._payload),y)}if(mo(x)||Za(x))return E!==null?null:c(d,_,x,y,null);Ll(d,x)}return null}function p(d,_,x,y,E){if(typeof y=="string"&&y!==""||typeof y=="number")return d=d.get(x)||null,o(_,d,""+y,E);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case yl:return d=d.get(y.key===null?x:y.key)||null,l(_,d,y,E);case ia:return d=d.get(y.key===null?x:y.key)||null,u(_,d,y,E);case Tr:var C=y._init;return p(d,_,x,C(y._payload),E)}if(mo(y)||Za(y))return d=d.get(x)||null,c(_,d,y,E,null);Ll(_,y)}return null}function g(d,_,x,y){for(var E=null,C=null,w=_,S=_=0,T=null;w!==null&&S<x.length;S++){w.index>S?(T=w,w=null):T=w.sibling;var D=f(d,w,x[S],y);if(D===null){w===null&&(w=T);break}n&&w&&D.alternate===null&&e(d,w),_=s(D,_,S),C===null?E=D:C.sibling=D,C=D,w=T}if(S===x.length)return t(d,w),gt&&fs(d,S),E;if(w===null){for(;S<x.length;S++)w=h(d,x[S],y),w!==null&&(_=s(w,_,S),C===null?E=w:C.sibling=w,C=w);return gt&&fs(d,S),E}for(w=i(d,w);S<x.length;S++)T=p(w,d,S,x[S],y),T!==null&&(n&&T.alternate!==null&&w.delete(T.key===null?S:T.key),_=s(T,_,S),C===null?E=T:C.sibling=T,C=T);return n&&w.forEach(function(b){return e(d,b)}),gt&&fs(d,S),E}function v(d,_,x,y){var E=Za(x);if(typeof E!="function")throw Error(te(150));if(x=E.call(x),x==null)throw Error(te(151));for(var C=E=null,w=_,S=_=0,T=null,D=x.next();w!==null&&!D.done;S++,D=x.next()){w.index>S?(T=w,w=null):T=w.sibling;var b=f(d,w,D.value,y);if(b===null){w===null&&(w=T);break}n&&w&&b.alternate===null&&e(d,w),_=s(b,_,S),C===null?E=b:C.sibling=b,C=b,w=T}if(D.done)return t(d,w),gt&&fs(d,S),E;if(w===null){for(;!D.done;S++,D=x.next())D=h(d,D.value,y),D!==null&&(_=s(D,_,S),C===null?E=D:C.sibling=D,C=D);return gt&&fs(d,S),E}for(w=i(d,w);!D.done;S++,D=x.next())D=p(w,d,S,D.value,y),D!==null&&(n&&D.alternate!==null&&w.delete(D.key===null?S:D.key),_=s(D,_,S),C===null?E=D:C.sibling=D,C=D);return n&&w.forEach(function(V){return e(d,V)}),gt&&fs(d,S),E}function m(d,_,x,y){if(typeof x=="object"&&x!==null&&x.type===ra&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case yl:e:{for(var E=x.key,C=_;C!==null;){if(C.key===E){if(E=x.type,E===ra){if(C.tag===7){t(d,C.sibling),_=r(C,x.props.children),_.return=d,d=_;break e}}else if(C.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Tr&&f_(E)===C.type){t(d,C.sibling),_=r(C,x.props),_.ref=no(d,C,x),_.return=d,d=_;break e}t(d,C);break}else e(d,C);C=C.sibling}x.type===ra?(_=Ts(x.props.children,d.mode,y,x.key),_.return=d,d=_):(y=xu(x.type,x.key,x.props,null,d.mode,y),y.ref=no(d,_,x),y.return=d,d=y)}return a(d);case ia:e:{for(C=x.key;_!==null;){if(_.key===C)if(_.tag===4&&_.stateNode.containerInfo===x.containerInfo&&_.stateNode.implementation===x.implementation){t(d,_.sibling),_=r(_,x.children||[]),_.return=d,d=_;break e}else{t(d,_);break}else e(d,_);_=_.sibling}_=of(x,d.mode,y),_.return=d,d=_}return a(d);case Tr:return C=x._init,m(d,_,C(x._payload),y)}if(mo(x))return g(d,_,x,y);if(Za(x))return v(d,_,x,y);Ll(d,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,_!==null&&_.tag===6?(t(d,_.sibling),_=r(_,x),_.return=d,d=_):(t(d,_),_=af(x,d.mode,y),_.return=d,d=_),a(d)):t(d,_)}return m}var Da=fv(!0),dv=fv(!1),Gu=Qr(null),Hu=null,da=null,vp=null;function xp(){vp=da=Hu=null}function Sp(n){var e=Gu.current;_t(Gu),n._currentValue=e}function Ad(n,e,t){for(;n!==null;){var i=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),n===t)break;n=n.return}}function ya(n,e){Hu=n,vp=da=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&e&&(xn=!0),n.firstContext=null)}function ni(n){var e=n._currentValue;if(vp!==n)if(n={context:n,memoizedValue:e,next:null},da===null){if(Hu===null)throw Error(te(308));da=n,Hu.dependencies={lanes:0,firstContext:n}}else da=da.next=n;return e}var vs=null;function yp(n){vs===null?vs=[n]:vs.push(n)}function hv(n,e,t,i){var r=e.interleaved;return r===null?(t.next=t,yp(e)):(t.next=r.next,r.next=t),e.interleaved=t,ar(n,i)}function ar(n,e){n.lanes|=e;var t=n.alternate;for(t!==null&&(t.lanes|=e),t=n,n=n.return;n!==null;)n.childLanes|=e,t=n.alternate,t!==null&&(t.childLanes|=e),t=n,n=n.return;return t.tag===3?t.stateNode:null}var wr=!1;function Mp(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function pv(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function er(n,e){return{eventTime:n,lane:e,tag:0,payload:null,callback:null,next:null}}function Br(n,e,t){var i=n.updateQueue;if(i===null)return null;if(i=i.shared,$e&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,ar(n,t)}return r=i.interleaved,r===null?(e.next=e,yp(i)):(e.next=r.next,r.next=e),i.interleaved=e,ar(n,t)}function hu(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194240)!==0)){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,op(n,t)}}function d_(n,e){var t=n.updateQueue,i=n.alternate;if(i!==null&&(i=i.updateQueue,t===i)){var r=null,s=null;if(t=t.firstBaseUpdate,t!==null){do{var a={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};s===null?r=s=a:s=s.next=a,t=t.next}while(t!==null);s===null?r=s=e:s=s.next=e}else r=s=e;t={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}function Wu(n,e,t,i){var r=n.updateQueue;wr=!1;var s=r.firstBaseUpdate,a=r.lastBaseUpdate,o=r.shared.pending;if(o!==null){r.shared.pending=null;var l=o,u=l.next;l.next=null,a===null?s=u:a.next=u,a=l;var c=n.alternate;c!==null&&(c=c.updateQueue,o=c.lastBaseUpdate,o!==a&&(o===null?c.firstBaseUpdate=u:o.next=u,c.lastBaseUpdate=l))}if(s!==null){var h=r.baseState;a=0,c=u=l=null,o=s;do{var f=o.lane,p=o.eventTime;if((i&f)===f){c!==null&&(c=c.next={eventTime:p,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var g=n,v=o;switch(f=e,p=t,v.tag){case 1:if(g=v.payload,typeof g=="function"){h=g.call(p,h,f);break e}h=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=v.payload,f=typeof g=="function"?g.call(p,h,f):g,f==null)break e;h=wt({},h,f);break e;case 2:wr=!0}}o.callback!==null&&o.lane!==0&&(n.flags|=64,f=r.effects,f===null?r.effects=[o]:f.push(o))}else p={eventTime:p,lane:f,tag:o.tag,payload:o.payload,callback:o.callback,next:null},c===null?(u=c=p,l=h):c=c.next=p,a|=f;if(o=o.next,o===null){if(o=r.shared.pending,o===null)break;f=o,o=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(!0);if(c===null&&(l=h),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=c,e=r.shared.interleaved,e!==null){r=e;do a|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Ls|=a,n.lanes=a,n.memoizedState=h}}function h_(n,e,t){if(n=e.effects,e.effects=null,n!==null)for(e=0;e<n.length;e++){var i=n[e],r=i.callback;if(r!==null){if(i.callback=null,i=t,typeof r!="function")throw Error(te(191,r));r.call(i)}}}var dl={},Li=Qr(dl),Xo=Qr(dl),Yo=Qr(dl);function xs(n){if(n===dl)throw Error(te(174));return n}function Ep(n,e){switch(ht(Yo,e),ht(Xo,n),ht(Li,dl),n=e.nodeType,n){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:ad(null,"");break;default:n=n===8?e.parentNode:e,e=n.namespaceURI||null,n=n.tagName,e=ad(e,n)}_t(Li),ht(Li,e)}function La(){_t(Li),_t(Xo),_t(Yo)}function mv(n){xs(Yo.current);var e=xs(Li.current),t=ad(e,n.type);e!==t&&(ht(Xo,n),ht(Li,t))}function Tp(n){Xo.current===n&&(_t(Li),_t(Xo))}var yt=Qr(0);function Xu(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Jc=[];function wp(){for(var n=0;n<Jc.length;n++)Jc[n]._workInProgressVersionPrimary=null;Jc.length=0}var pu=hr.ReactCurrentDispatcher,ef=hr.ReactCurrentBatchConfig,Ds=0,Tt=null,kt=null,Wt=null,Yu=!1,Co=!1,jo=0,GM=0;function en(){throw Error(te(321))}function Ap(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!gi(n[t],e[t]))return!1;return!0}function Cp(n,e,t,i,r,s){if(Ds=s,Tt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,pu.current=n===null||n.memoizedState===null?YM:jM,n=t(i,r),Co){s=0;do{if(Co=!1,jo=0,25<=s)throw Error(te(301));s+=1,Wt=kt=null,e.updateQueue=null,pu.current=qM,n=t(i,r)}while(Co)}if(pu.current=ju,e=kt!==null&&kt.next!==null,Ds=0,Wt=kt=Tt=null,Yu=!1,e)throw Error(te(300));return n}function Rp(){var n=jo!==0;return jo=0,n}function Ei(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Wt===null?Tt.memoizedState=Wt=n:Wt=Wt.next=n,Wt}function ii(){if(kt===null){var n=Tt.alternate;n=n!==null?n.memoizedState:null}else n=kt.next;var e=Wt===null?Tt.memoizedState:Wt.next;if(e!==null)Wt=e,kt=n;else{if(n===null)throw Error(te(310));kt=n,n={memoizedState:kt.memoizedState,baseState:kt.baseState,baseQueue:kt.baseQueue,queue:kt.queue,next:null},Wt===null?Tt.memoizedState=Wt=n:Wt=Wt.next=n}return Wt}function qo(n,e){return typeof e=="function"?e(n):e}function tf(n){var e=ii(),t=e.queue;if(t===null)throw Error(te(311));t.lastRenderedReducer=n;var i=kt,r=i.baseQueue,s=t.pending;if(s!==null){if(r!==null){var a=r.next;r.next=s.next,s.next=a}i.baseQueue=r=s,t.pending=null}if(r!==null){s=r.next,i=i.baseState;var o=a=null,l=null,u=s;do{var c=u.lane;if((Ds&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:n(i,u.action);else{var h={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(o=l=h,a=i):l=l.next=h,Tt.lanes|=c,Ls|=c}u=u.next}while(u!==null&&u!==s);l===null?a=i:l.next=o,gi(i,e.memoizedState)||(xn=!0),e.memoizedState=i,e.baseState=a,e.baseQueue=l,t.lastRenderedState=i}if(n=t.interleaved,n!==null){r=n;do s=r.lane,Tt.lanes|=s,Ls|=s,r=r.next;while(r!==n)}else r===null&&(t.lanes=0);return[e.memoizedState,t.dispatch]}function nf(n){var e=ii(),t=e.queue;if(t===null)throw Error(te(311));t.lastRenderedReducer=n;var i=t.dispatch,r=t.pending,s=e.memoizedState;if(r!==null){t.pending=null;var a=r=r.next;do s=n(s,a.action),a=a.next;while(a!==r);gi(s,e.memoizedState)||(xn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),t.lastRenderedState=s}return[s,i]}function _v(){}function gv(n,e){var t=Tt,i=ii(),r=e(),s=!gi(i.memoizedState,r);if(s&&(i.memoizedState=r,xn=!0),i=i.queue,bp(Sv.bind(null,t,i,n),[n]),i.getSnapshot!==e||s||Wt!==null&&Wt.memoizedState.tag&1){if(t.flags|=2048,$o(9,xv.bind(null,t,i,r,e),void 0,null),Xt===null)throw Error(te(349));Ds&30||vv(t,e,r)}return r}function vv(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=Tt.updateQueue,e===null?(e={lastEffect:null,stores:null},Tt.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function xv(n,e,t,i){e.value=t,e.getSnapshot=i,yv(e)&&Mv(n)}function Sv(n,e,t){return t(function(){yv(e)&&Mv(n)})}function yv(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!gi(n,t)}catch{return!0}}function Mv(n){var e=ar(n,1);e!==null&&_i(e,n,1,-1)}function p_(n){var e=Ei();return typeof n=="function"&&(n=n()),e.memoizedState=e.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:qo,lastRenderedState:n},e.queue=n,n=n.dispatch=XM.bind(null,Tt,n),[e.memoizedState,n]}function $o(n,e,t,i){return n={tag:n,create:e,destroy:t,deps:i,next:null},e=Tt.updateQueue,e===null?(e={lastEffect:null,stores:null},Tt.updateQueue=e,e.lastEffect=n.next=n):(t=e.lastEffect,t===null?e.lastEffect=n.next=n:(i=t.next,t.next=n,n.next=i,e.lastEffect=n)),n}function Ev(){return ii().memoizedState}function mu(n,e,t,i){var r=Ei();Tt.flags|=n,r.memoizedState=$o(1|e,t,void 0,i===void 0?null:i)}function gc(n,e,t,i){var r=ii();i=i===void 0?null:i;var s=void 0;if(kt!==null){var a=kt.memoizedState;if(s=a.destroy,i!==null&&Ap(i,a.deps)){r.memoizedState=$o(e,t,s,i);return}}Tt.flags|=n,r.memoizedState=$o(1|e,t,s,i)}function m_(n,e){return mu(8390656,8,n,e)}function bp(n,e){return gc(2048,8,n,e)}function Tv(n,e){return gc(4,2,n,e)}function wv(n,e){return gc(4,4,n,e)}function Av(n,e){if(typeof e=="function")return n=n(),e(n),function(){e(null)};if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function Cv(n,e,t){return t=t!=null?t.concat([n]):null,gc(4,4,Av.bind(null,e,n),t)}function Pp(){}function Rv(n,e){var t=ii();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&Ap(e,i[1])?i[0]:(t.memoizedState=[n,e],n)}function bv(n,e){var t=ii();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&Ap(e,i[1])?i[0]:(n=n(),t.memoizedState=[n,e],n)}function Pv(n,e,t){return Ds&21?(gi(t,e)||(t=U0(),Tt.lanes|=t,Ls|=t,n.baseState=!0),e):(n.baseState&&(n.baseState=!1,xn=!0),n.memoizedState=t)}function HM(n,e){var t=rt;rt=t!==0&&4>t?t:4,n(!0);var i=ef.transition;ef.transition={};try{n(!1),e()}finally{rt=t,ef.transition=i}}function Dv(){return ii().memoizedState}function WM(n,e,t){var i=Vr(n);if(t={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null},Lv(n))Nv(e,t);else if(t=hv(n,e,t,i),t!==null){var r=dn();_i(t,n,i,r),Iv(t,e,i)}}function XM(n,e,t){var i=Vr(n),r={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null};if(Lv(n))Nv(e,r);else{var s=n.alternate;if(n.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,o=s(a,t);if(r.hasEagerState=!0,r.eagerState=o,gi(o,a)){var l=e.interleaved;l===null?(r.next=r,yp(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}t=hv(n,e,r,i),t!==null&&(r=dn(),_i(t,n,i,r),Iv(t,e,i))}}function Lv(n){var e=n.alternate;return n===Tt||e!==null&&e===Tt}function Nv(n,e){Co=Yu=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function Iv(n,e,t){if(t&4194240){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,op(n,t)}}var ju={readContext:ni,useCallback:en,useContext:en,useEffect:en,useImperativeHandle:en,useInsertionEffect:en,useLayoutEffect:en,useMemo:en,useReducer:en,useRef:en,useState:en,useDebugValue:en,useDeferredValue:en,useTransition:en,useMutableSource:en,useSyncExternalStore:en,useId:en,unstable_isNewReconciler:!1},YM={readContext:ni,useCallback:function(n,e){return Ei().memoizedState=[n,e===void 0?null:e],n},useContext:ni,useEffect:m_,useImperativeHandle:function(n,e,t){return t=t!=null?t.concat([n]):null,mu(4194308,4,Av.bind(null,e,n),t)},useLayoutEffect:function(n,e){return mu(4194308,4,n,e)},useInsertionEffect:function(n,e){return mu(4,2,n,e)},useMemo:function(n,e){var t=Ei();return e=e===void 0?null:e,n=n(),t.memoizedState=[n,e],n},useReducer:function(n,e,t){var i=Ei();return e=t!==void 0?t(e):e,i.memoizedState=i.baseState=e,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:e},i.queue=n,n=n.dispatch=WM.bind(null,Tt,n),[i.memoizedState,n]},useRef:function(n){var e=Ei();return n={current:n},e.memoizedState=n},useState:p_,useDebugValue:Pp,useDeferredValue:function(n){return Ei().memoizedState=n},useTransition:function(){var n=p_(!1),e=n[0];return n=HM.bind(null,n[1]),Ei().memoizedState=n,[e,n]},useMutableSource:function(){},useSyncExternalStore:function(n,e,t){var i=Tt,r=Ei();if(gt){if(t===void 0)throw Error(te(407));t=t()}else{if(t=e(),Xt===null)throw Error(te(349));Ds&30||vv(i,e,t)}r.memoizedState=t;var s={value:t,getSnapshot:e};return r.queue=s,m_(Sv.bind(null,i,s,n),[n]),i.flags|=2048,$o(9,xv.bind(null,i,s,t,e),void 0,null),t},useId:function(){var n=Ei(),e=Xt.identifierPrefix;if(gt){var t=Qi,i=Zi;t=(i&~(1<<32-mi(i)-1)).toString(32)+t,e=":"+e+"R"+t,t=jo++,0<t&&(e+="H"+t.toString(32)),e+=":"}else t=GM++,e=":"+e+"r"+t.toString(32)+":";return n.memoizedState=e},unstable_isNewReconciler:!1},jM={readContext:ni,useCallback:Rv,useContext:ni,useEffect:bp,useImperativeHandle:Cv,useInsertionEffect:Tv,useLayoutEffect:wv,useMemo:bv,useReducer:tf,useRef:Ev,useState:function(){return tf(qo)},useDebugValue:Pp,useDeferredValue:function(n){var e=ii();return Pv(e,kt.memoizedState,n)},useTransition:function(){var n=tf(qo)[0],e=ii().memoizedState;return[n,e]},useMutableSource:_v,useSyncExternalStore:gv,useId:Dv,unstable_isNewReconciler:!1},qM={readContext:ni,useCallback:Rv,useContext:ni,useEffect:bp,useImperativeHandle:Cv,useInsertionEffect:Tv,useLayoutEffect:wv,useMemo:bv,useReducer:nf,useRef:Ev,useState:function(){return nf(qo)},useDebugValue:Pp,useDeferredValue:function(n){var e=ii();return kt===null?e.memoizedState=n:Pv(e,kt.memoizedState,n)},useTransition:function(){var n=nf(qo)[0],e=ii().memoizedState;return[n,e]},useMutableSource:_v,useSyncExternalStore:gv,useId:Dv,unstable_isNewReconciler:!1};function ui(n,e){if(n&&n.defaultProps){e=wt({},e),n=n.defaultProps;for(var t in n)e[t]===void 0&&(e[t]=n[t]);return e}return e}function Cd(n,e,t,i){e=n.memoizedState,t=t(i,e),t=t==null?e:wt({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var vc={isMounted:function(n){return(n=n._reactInternals)?Fs(n)===n:!1},enqueueSetState:function(n,e,t){n=n._reactInternals;var i=dn(),r=Vr(n),s=er(i,r);s.payload=e,t!=null&&(s.callback=t),e=Br(n,s,r),e!==null&&(_i(e,n,r,i),hu(e,n,r))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var i=dn(),r=Vr(n),s=er(i,r);s.tag=1,s.payload=e,t!=null&&(s.callback=t),e=Br(n,s,r),e!==null&&(_i(e,n,r,i),hu(e,n,r))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=dn(),i=Vr(n),r=er(t,i);r.tag=2,e!=null&&(r.callback=e),e=Br(n,r,i),e!==null&&(_i(e,n,i,t),hu(e,n,i))}};function __(n,e,t,i,r,s,a){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(i,s,a):e.prototype&&e.prototype.isPureReactComponent?!Vo(t,i)||!Vo(r,s):!0}function Uv(n,e,t){var i=!1,r=Yr,s=e.contextType;return typeof s=="object"&&s!==null?s=ni(s):(r=yn(e)?bs:un.current,i=e.contextTypes,s=(i=i!=null)?ba(n,r):Yr),e=new e(t,s),n.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=vc,n.stateNode=e,e._reactInternals=n,i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=s),e}function g_(n,e,t,i){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,i),e.state!==n&&vc.enqueueReplaceState(e,e.state,null)}function Rd(n,e,t,i){var r=n.stateNode;r.props=t,r.state=n.memoizedState,r.refs={},Mp(n);var s=e.contextType;typeof s=="object"&&s!==null?r.context=ni(s):(s=yn(e)?bs:un.current,r.context=ba(n,s)),r.state=n.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Cd(n,e,s,t),r.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&vc.enqueueReplaceState(r,r.state,null),Wu(n,t,r,i),r.state=n.memoizedState),typeof r.componentDidMount=="function"&&(n.flags|=4194308)}function Na(n,e){try{var t="",i=e;do t+=My(i),i=i.return;while(i);var r=t}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:n,source:e,stack:r,digest:null}}function rf(n,e,t){return{value:n,source:null,stack:t??null,digest:e??null}}function bd(n,e){try{console.error(e.value)}catch(t){setTimeout(function(){throw t})}}var $M=typeof WeakMap=="function"?WeakMap:Map;function Fv(n,e,t){t=er(-1,t),t.tag=3,t.payload={element:null};var i=e.value;return t.callback=function(){$u||($u=!0,Bd=i),bd(n,e)},t}function Ov(n,e,t){t=er(-1,t),t.tag=3;var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;t.payload=function(){return i(r)},t.callback=function(){bd(n,e)}}var s=n.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){bd(n,e),typeof i!="function"&&(zr===null?zr=new Set([this]):zr.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),t}function v_(n,e,t){var i=n.pingCache;if(i===null){i=n.pingCache=new $M;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(t)||(r.add(t),n=uE.bind(null,n,e,t),e.then(n,n))}function x_(n){do{var e;if((e=n.tag===13)&&(e=n.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return n;n=n.return}while(n!==null);return null}function S_(n,e,t,i,r){return n.mode&1?(n.flags|=65536,n.lanes=r,n):(n===e?n.flags|=65536:(n.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(e=er(-1,1),e.tag=2,Br(t,e,1))),t.lanes|=1),n)}var KM=hr.ReactCurrentOwner,xn=!1;function fn(n,e,t,i){e.child=n===null?dv(e,null,t,i):Da(e,n.child,t,i)}function y_(n,e,t,i,r){t=t.render;var s=e.ref;return ya(e,r),i=Cp(n,e,t,i,s,r),t=Rp(),n!==null&&!xn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,or(n,e,r)):(gt&&t&&mp(e),e.flags|=1,fn(n,e,i,r),e.child)}function M_(n,e,t,i,r){if(n===null){var s=t.type;return typeof s=="function"&&!kp(s)&&s.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(e.tag=15,e.type=s,kv(n,e,s,i,r)):(n=xu(t.type,null,i,e,e.mode,r),n.ref=e.ref,n.return=e,e.child=n)}if(s=n.child,!(n.lanes&r)){var a=s.memoizedProps;if(t=t.compare,t=t!==null?t:Vo,t(a,i)&&n.ref===e.ref)return or(n,e,r)}return e.flags|=1,n=Gr(s,i),n.ref=e.ref,n.return=e,e.child=n}function kv(n,e,t,i,r){if(n!==null){var s=n.memoizedProps;if(Vo(s,i)&&n.ref===e.ref)if(xn=!1,e.pendingProps=i=s,(n.lanes&r)!==0)n.flags&131072&&(xn=!0);else return e.lanes=n.lanes,or(n,e,r)}return Pd(n,e,t,i,r)}function Bv(n,e,t){var i=e.pendingProps,r=i.children,s=n!==null?n.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ht(pa,Ln),Ln|=t;else{if(!(t&1073741824))return n=s!==null?s.baseLanes|t:t,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:n,cachePool:null,transitions:null},e.updateQueue=null,ht(pa,Ln),Ln|=n,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:t,ht(pa,Ln),Ln|=i}else s!==null?(i=s.baseLanes|t,e.memoizedState=null):i=t,ht(pa,Ln),Ln|=i;return fn(n,e,r,t),e.child}function zv(n,e){var t=e.ref;(n===null&&t!==null||n!==null&&n.ref!==t)&&(e.flags|=512,e.flags|=2097152)}function Pd(n,e,t,i,r){var s=yn(t)?bs:un.current;return s=ba(e,s),ya(e,r),t=Cp(n,e,t,i,s,r),i=Rp(),n!==null&&!xn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,or(n,e,r)):(gt&&i&&mp(e),e.flags|=1,fn(n,e,t,r),e.child)}function E_(n,e,t,i,r){if(yn(t)){var s=!0;Bu(e)}else s=!1;if(ya(e,r),e.stateNode===null)_u(n,e),Uv(e,t,i),Rd(e,t,i,r),i=!0;else if(n===null){var a=e.stateNode,o=e.memoizedProps;a.props=o;var l=a.context,u=t.contextType;typeof u=="object"&&u!==null?u=ni(u):(u=yn(t)?bs:un.current,u=ba(e,u));var c=t.getDerivedStateFromProps,h=typeof c=="function"||typeof a.getSnapshotBeforeUpdate=="function";h||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==i||l!==u)&&g_(e,a,i,u),wr=!1;var f=e.memoizedState;a.state=f,Wu(e,i,a,r),l=e.memoizedState,o!==i||f!==l||Sn.current||wr?(typeof c=="function"&&(Cd(e,t,c,i),l=e.memoizedState),(o=wr||__(e,t,o,i,f,l,u))?(h||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),a.props=i,a.state=l,a.context=u,i=o):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{a=e.stateNode,pv(n,e),o=e.memoizedProps,u=e.type===e.elementType?o:ui(e.type,o),a.props=u,h=e.pendingProps,f=a.context,l=t.contextType,typeof l=="object"&&l!==null?l=ni(l):(l=yn(t)?bs:un.current,l=ba(e,l));var p=t.getDerivedStateFromProps;(c=typeof p=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==h||f!==l)&&g_(e,a,i,l),wr=!1,f=e.memoizedState,a.state=f,Wu(e,i,a,r);var g=e.memoizedState;o!==h||f!==g||Sn.current||wr?(typeof p=="function"&&(Cd(e,t,p,i),g=e.memoizedState),(u=wr||__(e,t,u,i,f,g,l)||!1)?(c||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,g,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,g,l)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===n.memoizedProps&&f===n.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===n.memoizedProps&&f===n.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=g),a.props=i,a.state=g,a.context=l,i=u):(typeof a.componentDidUpdate!="function"||o===n.memoizedProps&&f===n.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===n.memoizedProps&&f===n.memoizedState||(e.flags|=1024),i=!1)}return Dd(n,e,t,i,s,r)}function Dd(n,e,t,i,r,s){zv(n,e);var a=(e.flags&128)!==0;if(!i&&!a)return r&&l_(e,t,!1),or(n,e,s);i=e.stateNode,KM.current=e;var o=a&&typeof t.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,n!==null&&a?(e.child=Da(e,n.child,null,s),e.child=Da(e,null,o,s)):fn(n,e,o,s),e.memoizedState=i.state,r&&l_(e,t,!0),e.child}function Vv(n){var e=n.stateNode;e.pendingContext?o_(n,e.pendingContext,e.pendingContext!==e.context):e.context&&o_(n,e.context,!1),Ep(n,e.containerInfo)}function T_(n,e,t,i,r){return Pa(),gp(r),e.flags|=256,fn(n,e,t,i),e.child}var Ld={dehydrated:null,treeContext:null,retryLane:0};function Nd(n){return{baseLanes:n,cachePool:null,transitions:null}}function Gv(n,e,t){var i=e.pendingProps,r=yt.current,s=!1,a=(e.flags&128)!==0,o;if((o=a)||(o=n!==null&&n.memoizedState===null?!1:(r&2)!==0),o?(s=!0,e.flags&=-129):(n===null||n.memoizedState!==null)&&(r|=1),ht(yt,r&1),n===null)return wd(e),n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(e.mode&1?n.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=i.children,n=i.fallback,s?(i=e.mode,s=e.child,a={mode:"hidden",children:a},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=yc(a,i,0,null),n=Ts(n,i,t,null),s.return=e,n.return=e,s.sibling=n,e.child=s,e.child.memoizedState=Nd(t),e.memoizedState=Ld,n):Dp(e,a));if(r=n.memoizedState,r!==null&&(o=r.dehydrated,o!==null))return ZM(n,e,a,i,o,r,t);if(s){s=i.fallback,a=e.mode,r=n.child,o=r.sibling;var l={mode:"hidden",children:i.children};return!(a&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Gr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),o!==null?s=Gr(o,s):(s=Ts(s,a,t,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,a=n.child.memoizedState,a=a===null?Nd(t):{baseLanes:a.baseLanes|t,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=n.childLanes&~t,e.memoizedState=Ld,i}return s=n.child,n=s.sibling,i=Gr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=t),i.return=e,i.sibling=null,n!==null&&(t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)),e.child=i,e.memoizedState=null,i}function Dp(n,e){return e=yc({mode:"visible",children:e},n.mode,0,null),e.return=n,n.child=e}function Nl(n,e,t,i){return i!==null&&gp(i),Da(e,n.child,null,t),n=Dp(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function ZM(n,e,t,i,r,s,a){if(t)return e.flags&256?(e.flags&=-257,i=rf(Error(te(422))),Nl(n,e,a,i)):e.memoizedState!==null?(e.child=n.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=yc({mode:"visible",children:i.children},r,0,null),s=Ts(s,r,a,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Da(e,n.child,null,a),e.child.memoizedState=Nd(a),e.memoizedState=Ld,s);if(!(e.mode&1))return Nl(n,e,a,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var o=i.dgst;return i=o,s=Error(te(419)),i=rf(s,i,void 0),Nl(n,e,a,i)}if(o=(a&n.childLanes)!==0,xn||o){if(i=Xt,i!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|a)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,ar(n,r),_i(i,n,r,-1))}return Op(),i=rf(Error(te(421))),Nl(n,e,a,i)}return r.data==="$?"?(e.flags|=128,e.child=n.child,e=cE.bind(null,n),r._reactRetry=e,null):(n=s.treeContext,Un=kr(r.nextSibling),kn=e,gt=!0,fi=null,n!==null&&($n[Kn++]=Zi,$n[Kn++]=Qi,$n[Kn++]=Ps,Zi=n.id,Qi=n.overflow,Ps=e),e=Dp(e,i.children),e.flags|=4096,e)}function w_(n,e,t){n.lanes|=e;var i=n.alternate;i!==null&&(i.lanes|=e),Ad(n.return,e,t)}function sf(n,e,t,i,r){var s=n.memoizedState;s===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:t,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=t,s.tailMode=r)}function Hv(n,e,t){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(fn(n,e,i.children,t),i=yt.current,i&2)i=i&1|2,e.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&w_(n,t,e);else if(n.tag===19)w_(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}i&=1}if(ht(yt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(t=e.child,r=null;t!==null;)n=t.alternate,n!==null&&Xu(n)===null&&(r=t),t=t.sibling;t=r,t===null?(r=e.child,e.child=null):(r=t.sibling,t.sibling=null),sf(e,!1,r,t,s);break;case"backwards":for(t=null,r=e.child,e.child=null;r!==null;){if(n=r.alternate,n!==null&&Xu(n)===null){e.child=r;break}n=r.sibling,r.sibling=t,t=r,r=n}sf(e,!0,t,null,s);break;case"together":sf(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function _u(n,e){!(e.mode&1)&&n!==null&&(n.alternate=null,e.alternate=null,e.flags|=2)}function or(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),Ls|=e.lanes,!(t&e.childLanes))return null;if(n!==null&&e.child!==n.child)throw Error(te(153));if(e.child!==null){for(n=e.child,t=Gr(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=Gr(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function QM(n,e,t){switch(e.tag){case 3:Vv(e),Pa();break;case 5:mv(e);break;case 1:yn(e.type)&&Bu(e);break;case 4:Ep(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;ht(Gu,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(ht(yt,yt.current&1),e.flags|=128,null):t&e.child.childLanes?Gv(n,e,t):(ht(yt,yt.current&1),n=or(n,e,t),n!==null?n.sibling:null);ht(yt,yt.current&1);break;case 19:if(i=(t&e.childLanes)!==0,n.flags&128){if(i)return Hv(n,e,t);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),ht(yt,yt.current),i)break;return null;case 22:case 23:return e.lanes=0,Bv(n,e,t)}return or(n,e,t)}var Wv,Id,Xv,Yv;Wv=function(n,e){for(var t=e.child;t!==null;){if(t.tag===5||t.tag===6)n.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};Id=function(){};Xv=function(n,e,t,i){var r=n.memoizedProps;if(r!==i){n=e.stateNode,xs(Li.current);var s=null;switch(t){case"input":r=nd(n,r),i=nd(n,i),s=[];break;case"select":r=wt({},r,{value:void 0}),i=wt({},i,{value:void 0}),s=[];break;case"textarea":r=sd(n,r),i=sd(n,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(n.onclick=Ou)}od(t,i);var a;t=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var o=r[u];for(a in o)o.hasOwnProperty(a)&&(t||(t={}),t[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Io.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(o=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==o&&(l!=null||o!=null))if(u==="style")if(o){for(a in o)!o.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(t||(t={}),t[a]="");for(a in l)l.hasOwnProperty(a)&&o[a]!==l[a]&&(t||(t={}),t[a]=l[a])}else t||(s||(s=[]),s.push(u,t)),t=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,o=o?o.__html:void 0,l!=null&&o!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Io.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&mt("scroll",n),s||o===l||(s=[])):(s=s||[]).push(u,l))}t&&(s=s||[]).push("style",t);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};Yv=function(n,e,t,i){t!==i&&(e.flags|=4)};function io(n,e){if(!gt)switch(n.tailMode){case"hidden":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null;break;case"collapsed":t=n.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:i.sibling=null}}function tn(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,i=0;if(e)for(var r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=n,r=r.sibling;else for(r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=n,r=r.sibling;return n.subtreeFlags|=i,n.childLanes=t,e}function JM(n,e,t){var i=e.pendingProps;switch(_p(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return tn(e),null;case 1:return yn(e.type)&&ku(),tn(e),null;case 3:return i=e.stateNode,La(),_t(Sn),_t(un),wp(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(n===null||n.child===null)&&(Dl(e)?e.flags|=4:n===null||n.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,fi!==null&&(Gd(fi),fi=null))),Id(n,e),tn(e),null;case 5:Tp(e);var r=xs(Yo.current);if(t=e.type,n!==null&&e.stateNode!=null)Xv(n,e,t,i,r),n.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(te(166));return tn(e),null}if(n=xs(Li.current),Dl(e)){i=e.stateNode,t=e.type;var s=e.memoizedProps;switch(i[Ai]=e,i[Wo]=s,n=(e.mode&1)!==0,t){case"dialog":mt("cancel",i),mt("close",i);break;case"iframe":case"object":case"embed":mt("load",i);break;case"video":case"audio":for(r=0;r<go.length;r++)mt(go[r],i);break;case"source":mt("error",i);break;case"img":case"image":case"link":mt("error",i),mt("load",i);break;case"details":mt("toggle",i);break;case"input":Im(i,s),mt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},mt("invalid",i);break;case"textarea":Fm(i,s),mt("invalid",i)}od(t,s),r=null;for(var a in s)if(s.hasOwnProperty(a)){var o=s[a];a==="children"?typeof o=="string"?i.textContent!==o&&(s.suppressHydrationWarning!==!0&&Pl(i.textContent,o,n),r=["children",o]):typeof o=="number"&&i.textContent!==""+o&&(s.suppressHydrationWarning!==!0&&Pl(i.textContent,o,n),r=["children",""+o]):Io.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&mt("scroll",i)}switch(t){case"input":Ml(i),Um(i,s,!0);break;case"textarea":Ml(i),Om(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Ou)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=S0(t)),n==="http://www.w3.org/1999/xhtml"?t==="script"?(n=a.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof i.is=="string"?n=a.createElement(t,{is:i.is}):(n=a.createElement(t),t==="select"&&(a=n,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):n=a.createElementNS(n,t),n[Ai]=e,n[Wo]=i,Wv(n,e,!1,!1),e.stateNode=n;e:{switch(a=ld(t,i),t){case"dialog":mt("cancel",n),mt("close",n),r=i;break;case"iframe":case"object":case"embed":mt("load",n),r=i;break;case"video":case"audio":for(r=0;r<go.length;r++)mt(go[r],n);r=i;break;case"source":mt("error",n),r=i;break;case"img":case"image":case"link":mt("error",n),mt("load",n),r=i;break;case"details":mt("toggle",n),r=i;break;case"input":Im(n,i),r=nd(n,i),mt("invalid",n);break;case"option":r=i;break;case"select":n._wrapperState={wasMultiple:!!i.multiple},r=wt({},i,{value:void 0}),mt("invalid",n);break;case"textarea":Fm(n,i),r=sd(n,i),mt("invalid",n);break;default:r=i}od(t,r),o=r;for(s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="style"?E0(n,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&y0(n,l)):s==="children"?typeof l=="string"?(t!=="textarea"||l!=="")&&Uo(n,l):typeof l=="number"&&Uo(n,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Io.hasOwnProperty(s)?l!=null&&s==="onScroll"&&mt("scroll",n):l!=null&&tp(n,s,l,a))}switch(t){case"input":Ml(n),Um(n,i,!1);break;case"textarea":Ml(n),Om(n);break;case"option":i.value!=null&&n.setAttribute("value",""+Xr(i.value));break;case"select":n.multiple=!!i.multiple,s=i.value,s!=null?ga(n,!!i.multiple,s,!1):i.defaultValue!=null&&ga(n,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(n.onclick=Ou)}switch(t){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return tn(e),null;case 6:if(n&&e.stateNode!=null)Yv(n,e,n.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(te(166));if(t=xs(Yo.current),xs(Li.current),Dl(e)){if(i=e.stateNode,t=e.memoizedProps,i[Ai]=e,(s=i.nodeValue!==t)&&(n=kn,n!==null))switch(n.tag){case 3:Pl(i.nodeValue,t,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Pl(i.nodeValue,t,(n.mode&1)!==0)}s&&(e.flags|=4)}else i=(t.nodeType===9?t:t.ownerDocument).createTextNode(i),i[Ai]=e,e.stateNode=i}return tn(e),null;case 13:if(_t(yt),i=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(gt&&Un!==null&&e.mode&1&&!(e.flags&128))cv(),Pa(),e.flags|=98560,s=!1;else if(s=Dl(e),i!==null&&i.dehydrated!==null){if(n===null){if(!s)throw Error(te(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(te(317));s[Ai]=e}else Pa(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;tn(e),s=!1}else fi!==null&&(Gd(fi),fi=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=t,e):(i=i!==null,i!==(n!==null&&n.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(n===null||yt.current&1?Bt===0&&(Bt=3):Op())),e.updateQueue!==null&&(e.flags|=4),tn(e),null);case 4:return La(),Id(n,e),n===null&&Go(e.stateNode.containerInfo),tn(e),null;case 10:return Sp(e.type._context),tn(e),null;case 17:return yn(e.type)&&ku(),tn(e),null;case 19:if(_t(yt),s=e.memoizedState,s===null)return tn(e),null;if(i=(e.flags&128)!==0,a=s.rendering,a===null)if(i)io(s,!1);else{if(Bt!==0||n!==null&&n.flags&128)for(n=e.child;n!==null;){if(a=Xu(n),a!==null){for(e.flags|=128,io(s,!1),i=a.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=t,t=e.child;t!==null;)s=t,n=i,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=n,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,n=a.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t=t.sibling;return ht(yt,yt.current&1|2),e.child}n=n.sibling}s.tail!==null&&Dt()>Ia&&(e.flags|=128,i=!0,io(s,!1),e.lanes=4194304)}else{if(!i)if(n=Xu(a),n!==null){if(e.flags|=128,i=!0,t=n.updateQueue,t!==null&&(e.updateQueue=t,e.flags|=4),io(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!gt)return tn(e),null}else 2*Dt()-s.renderingStartTime>Ia&&t!==1073741824&&(e.flags|=128,i=!0,io(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(t=s.last,t!==null?t.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Dt(),e.sibling=null,t=yt.current,ht(yt,i?t&1|2:t&1),e):(tn(e),null);case 22:case 23:return Fp(),i=e.memoizedState!==null,n!==null&&n.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Ln&1073741824&&(tn(e),e.subtreeFlags&6&&(e.flags|=8192)):tn(e),null;case 24:return null;case 25:return null}throw Error(te(156,e.tag))}function eE(n,e){switch(_p(e),e.tag){case 1:return yn(e.type)&&ku(),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return La(),_t(Sn),_t(un),wp(),n=e.flags,n&65536&&!(n&128)?(e.flags=n&-65537|128,e):null;case 5:return Tp(e),null;case 13:if(_t(yt),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(te(340));Pa()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return _t(yt),null;case 4:return La(),null;case 10:return Sp(e.type._context),null;case 22:case 23:return Fp(),null;case 24:return null;default:return null}}var Il=!1,sn=!1,tE=typeof WeakSet=="function"?WeakSet:Set,_e=null;function ha(n,e){var t=n.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(i){Ct(n,e,i)}else t.current=null}function Ud(n,e,t){try{t()}catch(i){Ct(n,e,i)}}var A_=!1;function nE(n,e){if(vd=Iu,n=Z0(),pp(n)){if("selectionStart"in n)var t={start:n.selectionStart,end:n.selectionEnd};else e:{t=(t=n.ownerDocument)&&t.defaultView||window;var i=t.getSelection&&t.getSelection();if(i&&i.rangeCount!==0){t=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{t.nodeType,s.nodeType}catch{t=null;break e}var a=0,o=-1,l=-1,u=0,c=0,h=n,f=null;t:for(;;){for(var p;h!==t||r!==0&&h.nodeType!==3||(o=a+r),h!==s||i!==0&&h.nodeType!==3||(l=a+i),h.nodeType===3&&(a+=h.nodeValue.length),(p=h.firstChild)!==null;)f=h,h=p;for(;;){if(h===n)break t;if(f===t&&++u===r&&(o=a),f===s&&++c===i&&(l=a),(p=h.nextSibling)!==null)break;h=f,f=h.parentNode}h=p}t=o===-1||l===-1?null:{start:o,end:l}}else t=null}t=t||{start:0,end:0}}else t=null;for(xd={focusedElem:n,selectionRange:t},Iu=!1,_e=e;_e!==null;)if(e=_e,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,_e=n;else for(;_e!==null;){e=_e;try{var g=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var v=g.memoizedProps,m=g.memoizedState,d=e.stateNode,_=d.getSnapshotBeforeUpdate(e.elementType===e.type?v:ui(e.type,v),m);d.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var x=e.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(te(163))}}catch(y){Ct(e,e.return,y)}if(n=e.sibling,n!==null){n.return=e.return,_e=n;break}_e=e.return}return g=A_,A_=!1,g}function Ro(n,e,t){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&n)===n){var s=r.destroy;r.destroy=void 0,s!==void 0&&Ud(e,t,s)}r=r.next}while(r!==i)}}function xc(n,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var t=e=e.next;do{if((t.tag&n)===n){var i=t.create;t.destroy=i()}t=t.next}while(t!==e)}}function Fd(n){var e=n.ref;if(e!==null){var t=n.stateNode;switch(n.tag){case 5:n=t;break;default:n=t}typeof e=="function"?e(n):e.current=n}}function jv(n){var e=n.alternate;e!==null&&(n.alternate=null,jv(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&(delete e[Ai],delete e[Wo],delete e[Md],delete e[kM],delete e[BM])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function qv(n){return n.tag===5||n.tag===3||n.tag===4}function C_(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||qv(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Od(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.nodeType===8?t.parentNode.insertBefore(n,e):t.insertBefore(n,e):(t.nodeType===8?(e=t.parentNode,e.insertBefore(n,t)):(e=t,e.appendChild(n)),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=Ou));else if(i!==4&&(n=n.child,n!==null))for(Od(n,e,t),n=n.sibling;n!==null;)Od(n,e,t),n=n.sibling}function kd(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.insertBefore(n,e):t.appendChild(n);else if(i!==4&&(n=n.child,n!==null))for(kd(n,e,t),n=n.sibling;n!==null;)kd(n,e,t),n=n.sibling}var qt=null,ci=!1;function gr(n,e,t){for(t=t.child;t!==null;)$v(n,e,t),t=t.sibling}function $v(n,e,t){if(Di&&typeof Di.onCommitFiberUnmount=="function")try{Di.onCommitFiberUnmount(fc,t)}catch{}switch(t.tag){case 5:sn||ha(t,e);case 6:var i=qt,r=ci;qt=null,gr(n,e,t),qt=i,ci=r,qt!==null&&(ci?(n=qt,t=t.stateNode,n.nodeType===8?n.parentNode.removeChild(t):n.removeChild(t)):qt.removeChild(t.stateNode));break;case 18:qt!==null&&(ci?(n=qt,t=t.stateNode,n.nodeType===8?Zc(n.parentNode,t):n.nodeType===1&&Zc(n,t),Bo(n)):Zc(qt,t.stateNode));break;case 4:i=qt,r=ci,qt=t.stateNode.containerInfo,ci=!0,gr(n,e,t),qt=i,ci=r;break;case 0:case 11:case 14:case 15:if(!sn&&(i=t.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&Ud(t,e,a),r=r.next}while(r!==i)}gr(n,e,t);break;case 1:if(!sn&&(ha(t,e),i=t.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=t.memoizedProps,i.state=t.memoizedState,i.componentWillUnmount()}catch(o){Ct(t,e,o)}gr(n,e,t);break;case 21:gr(n,e,t);break;case 22:t.mode&1?(sn=(i=sn)||t.memoizedState!==null,gr(n,e,t),sn=i):gr(n,e,t);break;default:gr(n,e,t)}}function R_(n){var e=n.updateQueue;if(e!==null){n.updateQueue=null;var t=n.stateNode;t===null&&(t=n.stateNode=new tE),e.forEach(function(i){var r=fE.bind(null,n,i);t.has(i)||(t.add(i),i.then(r,r))})}}function si(n,e){var t=e.deletions;if(t!==null)for(var i=0;i<t.length;i++){var r=t[i];try{var s=n,a=e,o=a;e:for(;o!==null;){switch(o.tag){case 5:qt=o.stateNode,ci=!1;break e;case 3:qt=o.stateNode.containerInfo,ci=!0;break e;case 4:qt=o.stateNode.containerInfo,ci=!0;break e}o=o.return}if(qt===null)throw Error(te(160));$v(s,a,r),qt=null,ci=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){Ct(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Kv(e,n),e=e.sibling}function Kv(n,e){var t=n.alternate,i=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(si(e,n),Si(n),i&4){try{Ro(3,n,n.return),xc(3,n)}catch(v){Ct(n,n.return,v)}try{Ro(5,n,n.return)}catch(v){Ct(n,n.return,v)}}break;case 1:si(e,n),Si(n),i&512&&t!==null&&ha(t,t.return);break;case 5:if(si(e,n),Si(n),i&512&&t!==null&&ha(t,t.return),n.flags&32){var r=n.stateNode;try{Uo(r,"")}catch(v){Ct(n,n.return,v)}}if(i&4&&(r=n.stateNode,r!=null)){var s=n.memoizedProps,a=t!==null?t.memoizedProps:s,o=n.type,l=n.updateQueue;if(n.updateQueue=null,l!==null)try{o==="input"&&s.type==="radio"&&s.name!=null&&v0(r,s),ld(o,a);var u=ld(o,s);for(a=0;a<l.length;a+=2){var c=l[a],h=l[a+1];c==="style"?E0(r,h):c==="dangerouslySetInnerHTML"?y0(r,h):c==="children"?Uo(r,h):tp(r,c,h,u)}switch(o){case"input":id(r,s);break;case"textarea":x0(r,s);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?ga(r,!!s.multiple,p,!1):f!==!!s.multiple&&(s.defaultValue!=null?ga(r,!!s.multiple,s.defaultValue,!0):ga(r,!!s.multiple,s.multiple?[]:"",!1))}r[Wo]=s}catch(v){Ct(n,n.return,v)}}break;case 6:if(si(e,n),Si(n),i&4){if(n.stateNode===null)throw Error(te(162));r=n.stateNode,s=n.memoizedProps;try{r.nodeValue=s}catch(v){Ct(n,n.return,v)}}break;case 3:if(si(e,n),Si(n),i&4&&t!==null&&t.memoizedState.isDehydrated)try{Bo(e.containerInfo)}catch(v){Ct(n,n.return,v)}break;case 4:si(e,n),Si(n);break;case 13:si(e,n),Si(n),r=n.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Ip=Dt())),i&4&&R_(n);break;case 22:if(c=t!==null&&t.memoizedState!==null,n.mode&1?(sn=(u=sn)||c,si(e,n),sn=u):si(e,n),Si(n),i&8192){if(u=n.memoizedState!==null,(n.stateNode.isHidden=u)&&!c&&n.mode&1)for(_e=n,c=n.child;c!==null;){for(h=_e=c;_e!==null;){switch(f=_e,p=f.child,f.tag){case 0:case 11:case 14:case 15:Ro(4,f,f.return);break;case 1:ha(f,f.return);var g=f.stateNode;if(typeof g.componentWillUnmount=="function"){i=f,t=f.return;try{e=i,g.props=e.memoizedProps,g.state=e.memoizedState,g.componentWillUnmount()}catch(v){Ct(i,t,v)}}break;case 5:ha(f,f.return);break;case 22:if(f.memoizedState!==null){P_(h);continue}}p!==null?(p.return=f,_e=p):P_(h)}c=c.sibling}e:for(c=null,h=n;;){if(h.tag===5){if(c===null){c=h;try{r=h.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(o=h.stateNode,l=h.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,o.style.display=M0("display",a))}catch(v){Ct(n,n.return,v)}}}else if(h.tag===6){if(c===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(v){Ct(n,n.return,v)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===n)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===n)break e;for(;h.sibling===null;){if(h.return===null||h.return===n)break e;c===h&&(c=null),h=h.return}c===h&&(c=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:si(e,n),Si(n),i&4&&R_(n);break;case 21:break;default:si(e,n),Si(n)}}function Si(n){var e=n.flags;if(e&2){try{e:{for(var t=n.return;t!==null;){if(qv(t)){var i=t;break e}t=t.return}throw Error(te(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Uo(r,""),i.flags&=-33);var s=C_(n);kd(n,s,r);break;case 3:case 4:var a=i.stateNode.containerInfo,o=C_(n);Od(n,o,a);break;default:throw Error(te(161))}}catch(l){Ct(n,n.return,l)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function iE(n,e,t){_e=n,Zv(n)}function Zv(n,e,t){for(var i=(n.mode&1)!==0;_e!==null;){var r=_e,s=r.child;if(r.tag===22&&i){var a=r.memoizedState!==null||Il;if(!a){var o=r.alternate,l=o!==null&&o.memoizedState!==null||sn;o=Il;var u=sn;if(Il=a,(sn=l)&&!u)for(_e=r;_e!==null;)a=_e,l=a.child,a.tag===22&&a.memoizedState!==null?D_(r):l!==null?(l.return=a,_e=l):D_(r);for(;s!==null;)_e=s,Zv(s),s=s.sibling;_e=r,Il=o,sn=u}b_(n)}else r.subtreeFlags&8772&&s!==null?(s.return=r,_e=s):b_(n)}}function b_(n){for(;_e!==null;){var e=_e;if(e.flags&8772){var t=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:sn||xc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!sn)if(t===null)i.componentDidMount();else{var r=e.elementType===e.type?t.memoizedProps:ui(e.type,t.memoizedProps);i.componentDidUpdate(r,t.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&h_(e,s,i);break;case 3:var a=e.updateQueue;if(a!==null){if(t=null,e.child!==null)switch(e.child.tag){case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}h_(e,a,t)}break;case 5:var o=e.stateNode;if(t===null&&e.flags&4){t=o;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&t.focus();break;case"img":l.src&&(t.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var h=c.dehydrated;h!==null&&Bo(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(te(163))}sn||e.flags&512&&Fd(e)}catch(f){Ct(e,e.return,f)}}if(e===n){_e=null;break}if(t=e.sibling,t!==null){t.return=e.return,_e=t;break}_e=e.return}}function P_(n){for(;_e!==null;){var e=_e;if(e===n){_e=null;break}var t=e.sibling;if(t!==null){t.return=e.return,_e=t;break}_e=e.return}}function D_(n){for(;_e!==null;){var e=_e;try{switch(e.tag){case 0:case 11:case 15:var t=e.return;try{xc(4,e)}catch(l){Ct(e,t,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Ct(e,r,l)}}var s=e.return;try{Fd(e)}catch(l){Ct(e,s,l)}break;case 5:var a=e.return;try{Fd(e)}catch(l){Ct(e,a,l)}}}catch(l){Ct(e,e.return,l)}if(e===n){_e=null;break}var o=e.sibling;if(o!==null){o.return=e.return,_e=o;break}_e=e.return}}var rE=Math.ceil,qu=hr.ReactCurrentDispatcher,Lp=hr.ReactCurrentOwner,ti=hr.ReactCurrentBatchConfig,$e=0,Xt=null,Ft=null,Kt=0,Ln=0,pa=Qr(0),Bt=0,Ko=null,Ls=0,Sc=0,Np=0,bo=null,gn=null,Ip=0,Ia=1/0,Yi=null,$u=!1,Bd=null,zr=null,Ul=!1,Pr=null,Ku=0,Po=0,zd=null,gu=-1,vu=0;function dn(){return $e&6?Dt():gu!==-1?gu:gu=Dt()}function Vr(n){return n.mode&1?$e&2&&Kt!==0?Kt&-Kt:VM.transition!==null?(vu===0&&(vu=U0()),vu):(n=rt,n!==0||(n=window.event,n=n===void 0?16:G0(n.type)),n):1}function _i(n,e,t,i){if(50<Po)throw Po=0,zd=null,Error(te(185));ul(n,t,i),(!($e&2)||n!==Xt)&&(n===Xt&&(!($e&2)&&(Sc|=t),Bt===4&&Cr(n,Kt)),Mn(n,i),t===1&&$e===0&&!(e.mode&1)&&(Ia=Dt()+500,_c&&Jr()))}function Mn(n,e){var t=n.callbackNode;Vy(n,e);var i=Nu(n,n===Xt?Kt:0);if(i===0)t!==null&&zm(t),n.callbackNode=null,n.callbackPriority=0;else if(e=i&-i,n.callbackPriority!==e){if(t!=null&&zm(t),e===1)n.tag===0?zM(L_.bind(null,n)):ov(L_.bind(null,n)),FM(function(){!($e&6)&&Jr()}),t=null;else{switch(F0(i)){case 1:t=ap;break;case 4:t=N0;break;case 16:t=Lu;break;case 536870912:t=I0;break;default:t=Lu}t=sx(t,Qv.bind(null,n))}n.callbackPriority=e,n.callbackNode=t}}function Qv(n,e){if(gu=-1,vu=0,$e&6)throw Error(te(327));var t=n.callbackNode;if(Ma()&&n.callbackNode!==t)return null;var i=Nu(n,n===Xt?Kt:0);if(i===0)return null;if(i&30||i&n.expiredLanes||e)e=Zu(n,i);else{e=i;var r=$e;$e|=2;var s=ex();(Xt!==n||Kt!==e)&&(Yi=null,Ia=Dt()+500,Es(n,e));do try{oE();break}catch(o){Jv(n,o)}while(!0);xp(),qu.current=s,$e=r,Ft!==null?e=0:(Xt=null,Kt=0,e=Bt)}if(e!==0){if(e===2&&(r=hd(n),r!==0&&(i=r,e=Vd(n,r))),e===1)throw t=Ko,Es(n,0),Cr(n,i),Mn(n,Dt()),t;if(e===6)Cr(n,i);else{if(r=n.current.alternate,!(i&30)&&!sE(r)&&(e=Zu(n,i),e===2&&(s=hd(n),s!==0&&(i=s,e=Vd(n,s))),e===1))throw t=Ko,Es(n,0),Cr(n,i),Mn(n,Dt()),t;switch(n.finishedWork=r,n.finishedLanes=i,e){case 0:case 1:throw Error(te(345));case 2:ds(n,gn,Yi);break;case 3:if(Cr(n,i),(i&130023424)===i&&(e=Ip+500-Dt(),10<e)){if(Nu(n,0)!==0)break;if(r=n.suspendedLanes,(r&i)!==i){dn(),n.pingedLanes|=n.suspendedLanes&r;break}n.timeoutHandle=yd(ds.bind(null,n,gn,Yi),e);break}ds(n,gn,Yi);break;case 4:if(Cr(n,i),(i&4194240)===i)break;for(e=n.eventTimes,r=-1;0<i;){var a=31-mi(i);s=1<<a,a=e[a],a>r&&(r=a),i&=~s}if(i=r,i=Dt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*rE(i/1960))-i,10<i){n.timeoutHandle=yd(ds.bind(null,n,gn,Yi),i);break}ds(n,gn,Yi);break;case 5:ds(n,gn,Yi);break;default:throw Error(te(329))}}}return Mn(n,Dt()),n.callbackNode===t?Qv.bind(null,n):null}function Vd(n,e){var t=bo;return n.current.memoizedState.isDehydrated&&(Es(n,e).flags|=256),n=Zu(n,e),n!==2&&(e=gn,gn=t,e!==null&&Gd(e)),n}function Gd(n){gn===null?gn=n:gn.push.apply(gn,n)}function sE(n){for(var e=n;;){if(e.flags&16384){var t=e.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var i=0;i<t.length;i++){var r=t[i],s=r.getSnapshot;r=r.value;try{if(!gi(s(),r))return!1}catch{return!1}}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Cr(n,e){for(e&=~Np,e&=~Sc,n.suspendedLanes|=e,n.pingedLanes&=~e,n=n.expirationTimes;0<e;){var t=31-mi(e),i=1<<t;n[t]=-1,e&=~i}}function L_(n){if($e&6)throw Error(te(327));Ma();var e=Nu(n,0);if(!(e&1))return Mn(n,Dt()),null;var t=Zu(n,e);if(n.tag!==0&&t===2){var i=hd(n);i!==0&&(e=i,t=Vd(n,i))}if(t===1)throw t=Ko,Es(n,0),Cr(n,e),Mn(n,Dt()),t;if(t===6)throw Error(te(345));return n.finishedWork=n.current.alternate,n.finishedLanes=e,ds(n,gn,Yi),Mn(n,Dt()),null}function Up(n,e){var t=$e;$e|=1;try{return n(e)}finally{$e=t,$e===0&&(Ia=Dt()+500,_c&&Jr())}}function Ns(n){Pr!==null&&Pr.tag===0&&!($e&6)&&Ma();var e=$e;$e|=1;var t=ti.transition,i=rt;try{if(ti.transition=null,rt=1,n)return n()}finally{rt=i,ti.transition=t,$e=e,!($e&6)&&Jr()}}function Fp(){Ln=pa.current,_t(pa)}function Es(n,e){n.finishedWork=null,n.finishedLanes=0;var t=n.timeoutHandle;if(t!==-1&&(n.timeoutHandle=-1,UM(t)),Ft!==null)for(t=Ft.return;t!==null;){var i=t;switch(_p(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&ku();break;case 3:La(),_t(Sn),_t(un),wp();break;case 5:Tp(i);break;case 4:La();break;case 13:_t(yt);break;case 19:_t(yt);break;case 10:Sp(i.type._context);break;case 22:case 23:Fp()}t=t.return}if(Xt=n,Ft=n=Gr(n.current,null),Kt=Ln=e,Bt=0,Ko=null,Np=Sc=Ls=0,gn=bo=null,vs!==null){for(e=0;e<vs.length;e++)if(t=vs[e],i=t.interleaved,i!==null){t.interleaved=null;var r=i.next,s=t.pending;if(s!==null){var a=s.next;s.next=r,i.next=a}t.pending=i}vs=null}return n}function Jv(n,e){do{var t=Ft;try{if(xp(),pu.current=ju,Yu){for(var i=Tt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Yu=!1}if(Ds=0,Wt=kt=Tt=null,Co=!1,jo=0,Lp.current=null,t===null||t.return===null){Bt=1,Ko=e,Ft=null;break}e:{var s=n,a=t.return,o=t,l=e;if(e=Kt,o.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=o,h=c.tag;if(!(c.mode&1)&&(h===0||h===11||h===15)){var f=c.alternate;f?(c.updateQueue=f.updateQueue,c.memoizedState=f.memoizedState,c.lanes=f.lanes):(c.updateQueue=null,c.memoizedState=null)}var p=x_(a);if(p!==null){p.flags&=-257,S_(p,a,o,s,e),p.mode&1&&v_(s,u,e),e=p,l=u;var g=e.updateQueue;if(g===null){var v=new Set;v.add(l),e.updateQueue=v}else g.add(l);break e}else{if(!(e&1)){v_(s,u,e),Op();break e}l=Error(te(426))}}else if(gt&&o.mode&1){var m=x_(a);if(m!==null){!(m.flags&65536)&&(m.flags|=256),S_(m,a,o,s,e),gp(Na(l,o));break e}}s=l=Na(l,o),Bt!==4&&(Bt=2),bo===null?bo=[s]:bo.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var d=Fv(s,l,e);d_(s,d);break e;case 1:o=l;var _=s.type,x=s.stateNode;if(!(s.flags&128)&&(typeof _.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(zr===null||!zr.has(x)))){s.flags|=65536,e&=-e,s.lanes|=e;var y=Ov(s,o,e);d_(s,y);break e}}s=s.return}while(s!==null)}nx(t)}catch(E){e=E,Ft===t&&t!==null&&(Ft=t=t.return);continue}break}while(!0)}function ex(){var n=qu.current;return qu.current=ju,n===null?ju:n}function Op(){(Bt===0||Bt===3||Bt===2)&&(Bt=4),Xt===null||!(Ls&268435455)&&!(Sc&268435455)||Cr(Xt,Kt)}function Zu(n,e){var t=$e;$e|=2;var i=ex();(Xt!==n||Kt!==e)&&(Yi=null,Es(n,e));do try{aE();break}catch(r){Jv(n,r)}while(!0);if(xp(),$e=t,qu.current=i,Ft!==null)throw Error(te(261));return Xt=null,Kt=0,Bt}function aE(){for(;Ft!==null;)tx(Ft)}function oE(){for(;Ft!==null&&!Ly();)tx(Ft)}function tx(n){var e=rx(n.alternate,n,Ln);n.memoizedProps=n.pendingProps,e===null?nx(n):Ft=e,Lp.current=null}function nx(n){var e=n;do{var t=e.alternate;if(n=e.return,e.flags&32768){if(t=eE(t,e),t!==null){t.flags&=32767,Ft=t;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{Bt=6,Ft=null;return}}else if(t=JM(t,e,Ln),t!==null){Ft=t;return}if(e=e.sibling,e!==null){Ft=e;return}Ft=e=n}while(e!==null);Bt===0&&(Bt=5)}function ds(n,e,t){var i=rt,r=ti.transition;try{ti.transition=null,rt=1,lE(n,e,t,i)}finally{ti.transition=r,rt=i}return null}function lE(n,e,t,i){do Ma();while(Pr!==null);if($e&6)throw Error(te(327));t=n.finishedWork;var r=n.finishedLanes;if(t===null)return null;if(n.finishedWork=null,n.finishedLanes=0,t===n.current)throw Error(te(177));n.callbackNode=null,n.callbackPriority=0;var s=t.lanes|t.childLanes;if(Gy(n,s),n===Xt&&(Ft=Xt=null,Kt=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||Ul||(Ul=!0,sx(Lu,function(){return Ma(),null})),s=(t.flags&15990)!==0,t.subtreeFlags&15990||s){s=ti.transition,ti.transition=null;var a=rt;rt=1;var o=$e;$e|=4,Lp.current=null,nE(n,t),Kv(t,n),RM(xd),Iu=!!vd,xd=vd=null,n.current=t,iE(t),Ny(),$e=o,rt=a,ti.transition=s}else n.current=t;if(Ul&&(Ul=!1,Pr=n,Ku=r),s=n.pendingLanes,s===0&&(zr=null),Fy(t.stateNode),Mn(n,Dt()),e!==null)for(i=n.onRecoverableError,t=0;t<e.length;t++)r=e[t],i(r.value,{componentStack:r.stack,digest:r.digest});if($u)throw $u=!1,n=Bd,Bd=null,n;return Ku&1&&n.tag!==0&&Ma(),s=n.pendingLanes,s&1?n===zd?Po++:(Po=0,zd=n):Po=0,Jr(),null}function Ma(){if(Pr!==null){var n=F0(Ku),e=ti.transition,t=rt;try{if(ti.transition=null,rt=16>n?16:n,Pr===null)var i=!1;else{if(n=Pr,Pr=null,Ku=0,$e&6)throw Error(te(331));var r=$e;for($e|=4,_e=n.current;_e!==null;){var s=_e,a=s.child;if(_e.flags&16){var o=s.deletions;if(o!==null){for(var l=0;l<o.length;l++){var u=o[l];for(_e=u;_e!==null;){var c=_e;switch(c.tag){case 0:case 11:case 15:Ro(8,c,s)}var h=c.child;if(h!==null)h.return=c,_e=h;else for(;_e!==null;){c=_e;var f=c.sibling,p=c.return;if(jv(c),c===u){_e=null;break}if(f!==null){f.return=p,_e=f;break}_e=p}}}var g=s.alternate;if(g!==null){var v=g.child;if(v!==null){g.child=null;do{var m=v.sibling;v.sibling=null,v=m}while(v!==null)}}_e=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,_e=a;else e:for(;_e!==null;){if(s=_e,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ro(9,s,s.return)}var d=s.sibling;if(d!==null){d.return=s.return,_e=d;break e}_e=s.return}}var _=n.current;for(_e=_;_e!==null;){a=_e;var x=a.child;if(a.subtreeFlags&2064&&x!==null)x.return=a,_e=x;else e:for(a=_;_e!==null;){if(o=_e,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:xc(9,o)}}catch(E){Ct(o,o.return,E)}if(o===a){_e=null;break e}var y=o.sibling;if(y!==null){y.return=o.return,_e=y;break e}_e=o.return}}if($e=r,Jr(),Di&&typeof Di.onPostCommitFiberRoot=="function")try{Di.onPostCommitFiberRoot(fc,n)}catch{}i=!0}return i}finally{rt=t,ti.transition=e}}return!1}function N_(n,e,t){e=Na(t,e),e=Fv(n,e,1),n=Br(n,e,1),e=dn(),n!==null&&(ul(n,1,e),Mn(n,e))}function Ct(n,e,t){if(n.tag===3)N_(n,n,t);else for(;e!==null;){if(e.tag===3){N_(e,n,t);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(zr===null||!zr.has(i))){n=Na(t,n),n=Ov(e,n,1),e=Br(e,n,1),n=dn(),e!==null&&(ul(e,1,n),Mn(e,n));break}}e=e.return}}function uE(n,e,t){var i=n.pingCache;i!==null&&i.delete(e),e=dn(),n.pingedLanes|=n.suspendedLanes&t,Xt===n&&(Kt&t)===t&&(Bt===4||Bt===3&&(Kt&130023424)===Kt&&500>Dt()-Ip?Es(n,0):Np|=t),Mn(n,e)}function ix(n,e){e===0&&(n.mode&1?(e=wl,wl<<=1,!(wl&130023424)&&(wl=4194304)):e=1);var t=dn();n=ar(n,e),n!==null&&(ul(n,e,t),Mn(n,t))}function cE(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),ix(n,t)}function fE(n,e){var t=0;switch(n.tag){case 13:var i=n.stateNode,r=n.memoizedState;r!==null&&(t=r.retryLane);break;case 19:i=n.stateNode;break;default:throw Error(te(314))}i!==null&&i.delete(e),ix(n,t)}var rx;rx=function(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps||Sn.current)xn=!0;else{if(!(n.lanes&t)&&!(e.flags&128))return xn=!1,QM(n,e,t);xn=!!(n.flags&131072)}else xn=!1,gt&&e.flags&1048576&&lv(e,Vu,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;_u(n,e),n=e.pendingProps;var r=ba(e,un.current);ya(e,t),r=Cp(null,e,i,n,r,t);var s=Rp();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,yn(i)?(s=!0,Bu(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Mp(e),r.updater=vc,e.stateNode=r,r._reactInternals=e,Rd(e,i,n,t),e=Dd(null,e,i,!0,s,t)):(e.tag=0,gt&&s&&mp(e),fn(null,e,r,t),e=e.child),e;case 16:i=e.elementType;e:{switch(_u(n,e),n=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=hE(i),n=ui(i,n),r){case 0:e=Pd(null,e,i,n,t);break e;case 1:e=E_(null,e,i,n,t);break e;case 11:e=y_(null,e,i,n,t);break e;case 14:e=M_(null,e,i,ui(i.type,n),t);break e}throw Error(te(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ui(i,r),Pd(n,e,i,r,t);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ui(i,r),E_(n,e,i,r,t);case 3:e:{if(Vv(e),n===null)throw Error(te(387));i=e.pendingProps,s=e.memoizedState,r=s.element,pv(n,e),Wu(e,i,null,t);var a=e.memoizedState;if(i=a.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Na(Error(te(423)),e),e=T_(n,e,i,t,r);break e}else if(i!==r){r=Na(Error(te(424)),e),e=T_(n,e,i,t,r);break e}else for(Un=kr(e.stateNode.containerInfo.firstChild),kn=e,gt=!0,fi=null,t=dv(e,null,i,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Pa(),i===r){e=or(n,e,t);break e}fn(n,e,i,t)}e=e.child}return e;case 5:return mv(e),n===null&&wd(e),i=e.type,r=e.pendingProps,s=n!==null?n.memoizedProps:null,a=r.children,Sd(i,r)?a=null:s!==null&&Sd(i,s)&&(e.flags|=32),zv(n,e),fn(n,e,a,t),e.child;case 6:return n===null&&wd(e),null;case 13:return Gv(n,e,t);case 4:return Ep(e,e.stateNode.containerInfo),i=e.pendingProps,n===null?e.child=Da(e,null,i,t):fn(n,e,i,t),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ui(i,r),y_(n,e,i,r,t);case 7:return fn(n,e,e.pendingProps,t),e.child;case 8:return fn(n,e,e.pendingProps.children,t),e.child;case 12:return fn(n,e,e.pendingProps.children,t),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,a=r.value,ht(Gu,i._currentValue),i._currentValue=a,s!==null)if(gi(s.value,a)){if(s.children===r.children&&!Sn.current){e=or(n,e,t);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var o=s.dependencies;if(o!==null){a=s.child;for(var l=o.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=er(-1,t&-t),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=t,l=s.alternate,l!==null&&(l.lanes|=t),Ad(s.return,t,e),o.lanes|=t;break}l=l.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(te(341));a.lanes|=t,o=a.alternate,o!==null&&(o.lanes|=t),Ad(a,t,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}fn(n,e,r.children,t),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,ya(e,t),r=ni(r),i=i(r),e.flags|=1,fn(n,e,i,t),e.child;case 14:return i=e.type,r=ui(i,e.pendingProps),r=ui(i.type,r),M_(n,e,i,r,t);case 15:return kv(n,e,e.type,e.pendingProps,t);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ui(i,r),_u(n,e),e.tag=1,yn(i)?(n=!0,Bu(e)):n=!1,ya(e,t),Uv(e,i,r),Rd(e,i,r,t),Dd(null,e,i,!0,n,t);case 19:return Hv(n,e,t);case 22:return Bv(n,e,t)}throw Error(te(156,e.tag))};function sx(n,e){return L0(n,e)}function dE(n,e,t,i){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Qn(n,e,t,i){return new dE(n,e,t,i)}function kp(n){return n=n.prototype,!(!n||!n.isReactComponent)}function hE(n){if(typeof n=="function")return kp(n)?1:0;if(n!=null){if(n=n.$$typeof,n===ip)return 11;if(n===rp)return 14}return 2}function Gr(n,e){var t=n.alternate;return t===null?(t=Qn(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&14680064,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t}function xu(n,e,t,i,r,s){var a=2;if(i=n,typeof n=="function")kp(n)&&(a=1);else if(typeof n=="string")a=5;else e:switch(n){case ra:return Ts(t.children,r,s,e);case np:a=8,r|=8;break;case Qf:return n=Qn(12,t,e,r|2),n.elementType=Qf,n.lanes=s,n;case Jf:return n=Qn(13,t,e,r),n.elementType=Jf,n.lanes=s,n;case ed:return n=Qn(19,t,e,r),n.elementType=ed,n.lanes=s,n;case m0:return yc(t,r,s,e);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case h0:a=10;break e;case p0:a=9;break e;case ip:a=11;break e;case rp:a=14;break e;case Tr:a=16,i=null;break e}throw Error(te(130,n==null?n:typeof n,""))}return e=Qn(a,t,e,r),e.elementType=n,e.type=i,e.lanes=s,e}function Ts(n,e,t,i){return n=Qn(7,n,i,e),n.lanes=t,n}function yc(n,e,t,i){return n=Qn(22,n,i,e),n.elementType=m0,n.lanes=t,n.stateNode={isHidden:!1},n}function af(n,e,t){return n=Qn(6,n,null,e),n.lanes=t,n}function of(n,e,t){return e=Qn(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}function pE(n,e,t,i,r){this.tag=e,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=zc(0),this.expirationTimes=zc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=zc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Bp(n,e,t,i,r,s,a,o,l){return n=new pE(n,e,t,o,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Qn(3,null,null,e),n.current=s,s.stateNode=n,s.memoizedState={element:i,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Mp(s),n}function mE(n,e,t){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ia,key:i==null?null:""+i,children:n,containerInfo:e,implementation:t}}function ax(n){if(!n)return Yr;n=n._reactInternals;e:{if(Fs(n)!==n||n.tag!==1)throw Error(te(170));var e=n;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(yn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(te(171))}if(n.tag===1){var t=n.type;if(yn(t))return av(n,t,e)}return e}function ox(n,e,t,i,r,s,a,o,l){return n=Bp(t,i,!0,n,r,s,a,o,l),n.context=ax(null),t=n.current,i=dn(),r=Vr(t),s=er(i,r),s.callback=e??null,Br(t,s,r),n.current.lanes=r,ul(n,r,i),Mn(n,i),n}function Mc(n,e,t,i){var r=e.current,s=dn(),a=Vr(r);return t=ax(t),e.context===null?e.context=t:e.pendingContext=t,e=er(s,a),e.payload={element:n},i=i===void 0?null:i,i!==null&&(e.callback=i),n=Br(r,e,a),n!==null&&(_i(n,r,a,s),hu(n,r,a)),a}function Qu(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function I_(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function zp(n,e){I_(n,e),(n=n.alternate)&&I_(n,e)}function _E(){return null}var lx=typeof reportError=="function"?reportError:function(n){console.error(n)};function Vp(n){this._internalRoot=n}Ec.prototype.render=Vp.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(te(409));Mc(n,e,null,null)};Ec.prototype.unmount=Vp.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;Ns(function(){Mc(null,n,null,null)}),e[sr]=null}};function Ec(n){this._internalRoot=n}Ec.prototype.unstable_scheduleHydration=function(n){if(n){var e=B0();n={blockedOn:null,target:n,priority:e};for(var t=0;t<Ar.length&&e!==0&&e<Ar[t].priority;t++);Ar.splice(t,0,n),t===0&&V0(n)}};function Gp(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Tc(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function U_(){}function gE(n,e,t,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=Qu(a);s.call(u)}}var a=ox(e,i,n,0,null,!1,!1,"",U_);return n._reactRootContainer=a,n[sr]=a.current,Go(n.nodeType===8?n.parentNode:n),Ns(),a}for(;r=n.lastChild;)n.removeChild(r);if(typeof i=="function"){var o=i;i=function(){var u=Qu(l);o.call(u)}}var l=Bp(n,0,!1,null,null,!1,!1,"",U_);return n._reactRootContainer=l,n[sr]=l.current,Go(n.nodeType===8?n.parentNode:n),Ns(function(){Mc(e,l,t,i)}),l}function wc(n,e,t,i,r){var s=t._reactRootContainer;if(s){var a=s;if(typeof r=="function"){var o=r;r=function(){var l=Qu(a);o.call(l)}}Mc(e,a,n,r)}else a=gE(t,e,n,r,i);return Qu(a)}O0=function(n){switch(n.tag){case 3:var e=n.stateNode;if(e.current.memoizedState.isDehydrated){var t=_o(e.pendingLanes);t!==0&&(op(e,t|1),Mn(e,Dt()),!($e&6)&&(Ia=Dt()+500,Jr()))}break;case 13:Ns(function(){var i=ar(n,1);if(i!==null){var r=dn();_i(i,n,1,r)}}),zp(n,1)}};lp=function(n){if(n.tag===13){var e=ar(n,134217728);if(e!==null){var t=dn();_i(e,n,134217728,t)}zp(n,134217728)}};k0=function(n){if(n.tag===13){var e=Vr(n),t=ar(n,e);if(t!==null){var i=dn();_i(t,n,e,i)}zp(n,e)}};B0=function(){return rt};z0=function(n,e){var t=rt;try{return rt=n,e()}finally{rt=t}};cd=function(n,e,t){switch(e){case"input":if(id(n,t),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<t.length;e++){var i=t[e];if(i!==n&&i.form===n.form){var r=mc(i);if(!r)throw Error(te(90));g0(i),id(i,r)}}}break;case"textarea":x0(n,t);break;case"select":e=t.value,e!=null&&ga(n,!!t.multiple,e,!1)}};A0=Up;C0=Ns;var vE={usingClientEntryPoint:!1,Events:[fl,la,mc,T0,w0,Up]},ro={findFiberByHostInstance:gs,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},xE={bundleType:ro.bundleType,version:ro.version,rendererPackageName:ro.rendererPackageName,rendererConfig:ro.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:hr.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=P0(n),n===null?null:n.stateNode},findFiberByHostInstance:ro.findFiberByHostInstance||_E,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Fl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Fl.isDisabled&&Fl.supportsFiber)try{fc=Fl.inject(xE),Di=Fl}catch{}}Wn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=vE;Wn.createPortal=function(n,e){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Gp(e))throw Error(te(200));return mE(n,e,null,t)};Wn.createRoot=function(n,e){if(!Gp(n))throw Error(te(299));var t=!1,i="",r=lx;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Bp(n,1,!1,null,null,t,!1,i,r),n[sr]=e.current,Go(n.nodeType===8?n.parentNode:n),new Vp(e)};Wn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(te(188)):(n=Object.keys(n).join(","),Error(te(268,n)));return n=P0(e),n=n===null?null:n.stateNode,n};Wn.flushSync=function(n){return Ns(n)};Wn.hydrate=function(n,e,t){if(!Tc(e))throw Error(te(200));return wc(null,n,e,!0,t)};Wn.hydrateRoot=function(n,e,t){if(!Gp(n))throw Error(te(405));var i=t!=null&&t.hydratedSources||null,r=!1,s="",a=lx;if(t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),e=ox(e,null,n,1,t??null,r,!1,s,a),n[sr]=e.current,Go(n),i)for(n=0;n<i.length;n++)t=i[n],r=t._getVersion,r=r(t._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[t,r]:e.mutableSourceEagerHydrationData.push(t,r);return new Ec(e)};Wn.render=function(n,e,t){if(!Tc(e))throw Error(te(200));return wc(null,n,e,!1,t)};Wn.unmountComponentAtNode=function(n){if(!Tc(n))throw Error(te(40));return n._reactRootContainer?(Ns(function(){wc(null,null,n,!1,function(){n._reactRootContainer=null,n[sr]=null})}),!0):!1};Wn.unstable_batchedUpdates=Up;Wn.unstable_renderSubtreeIntoContainer=function(n,e,t,i){if(!Tc(t))throw Error(te(200));if(n==null||n._reactInternals===void 0)throw Error(te(38));return wc(n,e,t,!1,i)};Wn.version="18.3.1-next-f1338f8080-20240426";function ux(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ux)}catch(n){console.error(n)}}ux(),u0.exports=Wn;var SE=u0.exports,F_=SE;Kf.createRoot=F_.createRoot,Kf.hydrateRoot=F_.hydrateRoot;/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Hp="183",yE=0,O_=1,ME=2,Su=1,EE=2,vo=3,jr=0,En=1,Ki=2,tr=0,Ea=1,k_=2,B_=3,z_=4,TE=5,ms=100,wE=101,AE=102,CE=103,RE=104,bE=200,PE=201,DE=202,LE=203,Hd=204,Wd=205,NE=206,IE=207,UE=208,FE=209,OE=210,kE=211,BE=212,zE=213,VE=214,Xd=0,Yd=1,jd=2,Ua=3,qd=4,$d=5,Kd=6,Zd=7,cx=0,GE=1,HE=2,Ni=0,fx=1,dx=2,hx=3,px=4,mx=5,_x=6,gx=7,vx=300,Is=301,Fa=302,lf=303,uf=304,Ac=306,Qd=1e3,Ji=1001,Jd=1002,$t=1003,WE=1004,Ol=1005,on=1006,cf=1007,Ss=1008,Zn=1009,xx=1010,Sx=1011,Zo=1012,Wp=1013,Fi=1014,Ri=1015,lr=1016,Xp=1017,Yp=1018,Qo=1020,yx=35902,Mx=35899,Ex=1021,Tx=1022,pi=1023,ur=1026,ys=1027,wx=1028,jp=1029,Oa=1030,qp=1031,$p=1033,yu=33776,Mu=33777,Eu=33778,Tu=33779,eh=35840,th=35841,nh=35842,ih=35843,rh=36196,sh=37492,ah=37496,oh=37488,lh=37489,uh=37490,ch=37491,fh=37808,dh=37809,hh=37810,ph=37811,mh=37812,_h=37813,gh=37814,vh=37815,xh=37816,Sh=37817,yh=37818,Mh=37819,Eh=37820,Th=37821,wh=36492,Ah=36494,Ch=36495,Rh=36283,bh=36284,Ph=36285,Dh=36286,XE=3200,YE=0,jE=1,Rr="",qn="srgb",ka="srgb-linear",Ju="linear",it="srgb",Vs=7680,V_=519,qE=512,$E=513,KE=514,Kp=515,ZE=516,QE=517,Zp=518,JE=519,G_=35044,H_="300 es",bi=2e3,ec=2001;function e1(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function tc(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function t1(){const n=tc("canvas");return n.style.display="block",n}const W_={};function X_(...n){const e="THREE."+n.shift();console.log(e,...n)}function Ax(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Ne(...n){n=Ax(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function Qe(...n){n=Ax(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function nc(...n){const e=n.join(" ");e in W_||(W_[e]=!0,Ne(...n))}function n1(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}const i1={[Xd]:Yd,[jd]:Kd,[qd]:Zd,[Ua]:$d,[Yd]:Xd,[Kd]:jd,[Zd]:qd,[$d]:Ua};class qa{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const nn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ff=Math.PI/180,Lh=180/Math.PI;function hl(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(nn[n&255]+nn[n>>8&255]+nn[n>>16&255]+nn[n>>24&255]+"-"+nn[e&255]+nn[e>>8&255]+"-"+nn[e>>16&15|64]+nn[e>>24&255]+"-"+nn[t&63|128]+nn[t>>8&255]+"-"+nn[t>>16&255]+nn[t>>24&255]+nn[i&255]+nn[i>>8&255]+nn[i>>16&255]+nn[i>>24&255]).toLowerCase()}function Xe(n,e,t){return Math.max(e,Math.min(t,n))}function r1(n,e){return(n%e+e)%e}function df(n,e,t){return(1-t)*n+t*e}function so(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function _n(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class je{constructor(e=0,t=0){je.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Xe(this.x,e.x,t.x),this.y=Xe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Xe(this.x,e,t),this.y=Xe(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Xe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Xe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class $a{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let l=i[r+0],u=i[r+1],c=i[r+2],h=i[r+3],f=s[a+0],p=s[a+1],g=s[a+2],v=s[a+3];if(h!==v||l!==f||u!==p||c!==g){let m=l*f+u*p+c*g+h*v;m<0&&(f=-f,p=-p,g=-g,v=-v,m=-m);let d=1-o;if(m<.9995){const _=Math.acos(m),x=Math.sin(_);d=Math.sin(d*_)/x,o=Math.sin(o*_)/x,l=l*d+f*o,u=u*d+p*o,c=c*d+g*o,h=h*d+v*o}else{l=l*d+f*o,u=u*d+p*o,c=c*d+g*o,h=h*d+v*o;const _=1/Math.sqrt(l*l+u*u+c*c+h*h);l*=_,u*=_,c*=_,h*=_}}e[t]=l,e[t+1]=u,e[t+2]=c,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],l=i[r+1],u=i[r+2],c=i[r+3],h=s[a],f=s[a+1],p=s[a+2],g=s[a+3];return e[t]=o*g+c*h+l*p-u*f,e[t+1]=l*g+c*f+u*h-o*p,e[t+2]=u*g+c*p+o*f-l*h,e[t+3]=c*g-o*h-l*f-u*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,u=o(i/2),c=o(r/2),h=o(s/2),f=l(i/2),p=l(r/2),g=l(s/2);switch(a){case"XYZ":this._x=f*c*h+u*p*g,this._y=u*p*h-f*c*g,this._z=u*c*g+f*p*h,this._w=u*c*h-f*p*g;break;case"YXZ":this._x=f*c*h+u*p*g,this._y=u*p*h-f*c*g,this._z=u*c*g-f*p*h,this._w=u*c*h+f*p*g;break;case"ZXY":this._x=f*c*h-u*p*g,this._y=u*p*h+f*c*g,this._z=u*c*g+f*p*h,this._w=u*c*h-f*p*g;break;case"ZYX":this._x=f*c*h-u*p*g,this._y=u*p*h+f*c*g,this._z=u*c*g-f*p*h,this._w=u*c*h+f*p*g;break;case"YZX":this._x=f*c*h+u*p*g,this._y=u*p*h+f*c*g,this._z=u*c*g-f*p*h,this._w=u*c*h-f*p*g;break;case"XZY":this._x=f*c*h-u*p*g,this._y=u*p*h-f*c*g,this._z=u*c*g+f*p*h,this._w=u*c*h+f*p*g;break;default:Ne("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],u=t[2],c=t[6],h=t[10],f=i+o+h;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(c-l)*p,this._y=(s-u)*p,this._z=(a-r)*p}else if(i>o&&i>h){const p=2*Math.sqrt(1+i-o-h);this._w=(c-l)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+u)/p}else if(o>h){const p=2*Math.sqrt(1+o-i-h);this._w=(s-u)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(l+c)/p}else{const p=2*Math.sqrt(1+h-i-o);this._w=(a-r)/p,this._x=(s+u)/p,this._y=(l+c)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Xe(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,u=t._z,c=t._w;return this._x=i*c+a*o+r*u-s*l,this._y=r*c+a*l+s*o-i*u,this._z=s*c+a*u+i*l-r*o,this._w=a*c-i*o-r*l-s*u,this._onChangeCallback(),this}slerp(e,t){let i=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let l=1-t;if(o<.9995){const u=Math.acos(o),c=Math.sin(u);l=Math.sin(l*u)/c,t=Math.sin(t*u)/c,this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class X{constructor(e=0,t=0,i=0){X.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Y_.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Y_.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,u=2*(a*r-o*i),c=2*(o*t-s*r),h=2*(s*i-a*t);return this.x=t+l*u+a*h-o*c,this.y=i+l*c+o*u-s*h,this.z=r+l*h+s*c-a*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Xe(this.x,e.x,t.x),this.y=Xe(this.y,e.y,t.y),this.z=Xe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Xe(this.x,e,t),this.y=Xe(this.y,e,t),this.z=Xe(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Xe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return hf.copy(this).projectOnVector(e),this.sub(hf)}reflect(e){return this.sub(hf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Xe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const hf=new X,Y_=new $a;class ze{constructor(e,t,i,r,s,a,o,l,u){ze.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,u)}set(e,t,i,r,s,a,o,l,u){const c=this.elements;return c[0]=e,c[1]=r,c[2]=o,c[3]=t,c[4]=s,c[5]=l,c[6]=i,c[7]=a,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],u=i[1],c=i[4],h=i[7],f=i[2],p=i[5],g=i[8],v=r[0],m=r[3],d=r[6],_=r[1],x=r[4],y=r[7],E=r[2],C=r[5],w=r[8];return s[0]=a*v+o*_+l*E,s[3]=a*m+o*x+l*C,s[6]=a*d+o*y+l*w,s[1]=u*v+c*_+h*E,s[4]=u*m+c*x+h*C,s[7]=u*d+c*y+h*w,s[2]=f*v+p*_+g*E,s[5]=f*m+p*x+g*C,s[8]=f*d+p*y+g*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],u=e[7],c=e[8];return t*a*c-t*o*u-i*s*c+i*o*l+r*s*u-r*a*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],u=e[7],c=e[8],h=c*a-o*u,f=o*l-c*s,p=u*s-a*l,g=t*h+i*f+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=h*v,e[1]=(r*u-c*i)*v,e[2]=(o*i-r*a)*v,e[3]=f*v,e[4]=(c*t-r*l)*v,e[5]=(r*s-o*t)*v,e[6]=p*v,e[7]=(i*l-u*t)*v,e[8]=(a*t-i*s)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*a+u*o)+a+e,-r*u,r*l,-r*(-u*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(pf.makeScale(e,t)),this}rotate(e){return this.premultiply(pf.makeRotation(-e)),this}translate(e,t){return this.premultiply(pf.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const pf=new ze,j_=new ze().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),q_=new ze().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function s1(){const n={enabled:!0,workingColorSpace:ka,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===it&&(r.r=nr(r.r),r.g=nr(r.g),r.b=nr(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===it&&(r.r=Ta(r.r),r.g=Ta(r.g),r.b=Ta(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Rr?Ju:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return nc("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return nc("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[ka]:{primaries:e,whitePoint:i,transfer:Ju,toXYZ:j_,fromXYZ:q_,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:qn},outputColorSpaceConfig:{drawingBufferColorSpace:qn}},[qn]:{primaries:e,whitePoint:i,transfer:it,toXYZ:j_,fromXYZ:q_,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:qn}}}),n}const qe=s1();function nr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ta(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Gs;class a1{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Gs===void 0&&(Gs=tc("canvas")),Gs.width=e.width,Gs.height=e.height;const r=Gs.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Gs}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=tc("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=nr(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(nr(t[i]/255)*255):t[i]=nr(t[i]);return{data:t,width:e.width,height:e.height}}else return Ne("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let o1=0;class Qp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:o1++}),this.uuid=hl(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(mf(r[a].image)):s.push(mf(r[a]))}else s=mf(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function mf(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?a1.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Ne("Texture: Unable to serialize Texture."),{})}let l1=0;const _f=new X;class hn extends qa{constructor(e=hn.DEFAULT_IMAGE,t=hn.DEFAULT_MAPPING,i=Ji,r=Ji,s=on,a=Ss,o=pi,l=Zn,u=hn.DEFAULT_ANISOTROPY,c=Rr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:l1++}),this.uuid=hl(),this.name="",this.source=new Qp(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=u,this.format=o,this.internalFormat=null,this.type=l,this.offset=new je(0,0),this.repeat=new je(1,1),this.center=new je(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(_f).x}get height(){return this.source.getSize(_f).y}get depth(){return this.source.getSize(_f).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){Ne(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Ne(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==vx)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Qd:e.x=e.x-Math.floor(e.x);break;case Ji:e.x=e.x<0?0:1;break;case Jd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Qd:e.y=e.y-Math.floor(e.y);break;case Ji:e.y=e.y<0?0:1;break;case Jd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}hn.DEFAULT_IMAGE=null;hn.DEFAULT_MAPPING=vx;hn.DEFAULT_ANISOTROPY=1;class Lt{constructor(e=0,t=0,i=0,r=1){Lt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,u=l[0],c=l[4],h=l[8],f=l[1],p=l[5],g=l[9],v=l[2],m=l[6],d=l[10];if(Math.abs(c-f)<.01&&Math.abs(h-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(c+f)<.1&&Math.abs(h+v)<.1&&Math.abs(g+m)<.1&&Math.abs(u+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(u+1)/2,y=(p+1)/2,E=(d+1)/2,C=(c+f)/4,w=(h+v)/4,S=(g+m)/4;return x>y&&x>E?x<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(x),r=C/i,s=w/i):y>E?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=C/r,s=S/r):E<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(E),i=w/s,r=S/s),this.set(i,r,s,t),this}let _=Math.sqrt((m-g)*(m-g)+(h-v)*(h-v)+(f-c)*(f-c));return Math.abs(_)<.001&&(_=1),this.x=(m-g)/_,this.y=(h-v)/_,this.z=(f-c)/_,this.w=Math.acos((u+p+d-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Xe(this.x,e.x,t.x),this.y=Xe(this.y,e.y,t.y),this.z=Xe(this.z,e.z,t.z),this.w=Xe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Xe(this.x,e,t),this.y=Xe(this.y,e,t),this.z=Xe(this.z,e,t),this.w=Xe(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Xe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class u1 extends qa{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:on,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Lt(0,0,e,t),this.scissorTest=!1,this.viewport=new Lt(0,0,e,t),this.textures=[];const r={width:e,height:t,depth:i.depth},s=new hn(r),a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:on,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new Qp(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ii extends u1{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Cx extends hn{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=$t,this.minFilter=$t,this.wrapR=Ji,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class c1 extends hn{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=$t,this.minFilter=$t,this.wrapR=Ji,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ot{constructor(e,t,i,r,s,a,o,l,u,c,h,f,p,g,v,m){Ot.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,u,c,h,f,p,g,v,m)}set(e,t,i,r,s,a,o,l,u,c,h,f,p,g,v,m){const d=this.elements;return d[0]=e,d[4]=t,d[8]=i,d[12]=r,d[1]=s,d[5]=a,d[9]=o,d[13]=l,d[2]=u,d[6]=c,d[10]=h,d[14]=f,d[3]=p,d[7]=g,d[11]=v,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ot().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,i=e.elements,r=1/Hs.setFromMatrixColumn(e,0).length(),s=1/Hs.setFromMatrixColumn(e,1).length(),a=1/Hs.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=a*c,p=a*h,g=o*c,v=o*h;t[0]=l*c,t[4]=-l*h,t[8]=u,t[1]=p+g*u,t[5]=f-v*u,t[9]=-o*l,t[2]=v-f*u,t[6]=g+p*u,t[10]=a*l}else if(e.order==="YXZ"){const f=l*c,p=l*h,g=u*c,v=u*h;t[0]=f+v*o,t[4]=g*o-p,t[8]=a*u,t[1]=a*h,t[5]=a*c,t[9]=-o,t[2]=p*o-g,t[6]=v+f*o,t[10]=a*l}else if(e.order==="ZXY"){const f=l*c,p=l*h,g=u*c,v=u*h;t[0]=f-v*o,t[4]=-a*h,t[8]=g+p*o,t[1]=p+g*o,t[5]=a*c,t[9]=v-f*o,t[2]=-a*u,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const f=a*c,p=a*h,g=o*c,v=o*h;t[0]=l*c,t[4]=g*u-p,t[8]=f*u+v,t[1]=l*h,t[5]=v*u+f,t[9]=p*u-g,t[2]=-u,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const f=a*l,p=a*u,g=o*l,v=o*u;t[0]=l*c,t[4]=v-f*h,t[8]=g*h+p,t[1]=h,t[5]=a*c,t[9]=-o*c,t[2]=-u*c,t[6]=p*h+g,t[10]=f-v*h}else if(e.order==="XZY"){const f=a*l,p=a*u,g=o*l,v=o*u;t[0]=l*c,t[4]=-h,t[8]=u*c,t[1]=f*h+v,t[5]=a*c,t[9]=p*h-g,t[2]=g*h-p,t[6]=o*c,t[10]=v*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(f1,e,d1)}lookAt(e,t,i){const r=this.elements;return Pn.subVectors(e,t),Pn.lengthSq()===0&&(Pn.z=1),Pn.normalize(),vr.crossVectors(i,Pn),vr.lengthSq()===0&&(Math.abs(i.z)===1?Pn.x+=1e-4:Pn.z+=1e-4,Pn.normalize(),vr.crossVectors(i,Pn)),vr.normalize(),kl.crossVectors(Pn,vr),r[0]=vr.x,r[4]=kl.x,r[8]=Pn.x,r[1]=vr.y,r[5]=kl.y,r[9]=Pn.y,r[2]=vr.z,r[6]=kl.z,r[10]=Pn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],u=i[12],c=i[1],h=i[5],f=i[9],p=i[13],g=i[2],v=i[6],m=i[10],d=i[14],_=i[3],x=i[7],y=i[11],E=i[15],C=r[0],w=r[4],S=r[8],T=r[12],D=r[1],b=r[5],V=r[9],B=r[13],O=r[2],L=r[6],z=r[10],N=r[14],U=r[3],H=r[7],Z=r[11],ee=r[15];return s[0]=a*C+o*D+l*O+u*U,s[4]=a*w+o*b+l*L+u*H,s[8]=a*S+o*V+l*z+u*Z,s[12]=a*T+o*B+l*N+u*ee,s[1]=c*C+h*D+f*O+p*U,s[5]=c*w+h*b+f*L+p*H,s[9]=c*S+h*V+f*z+p*Z,s[13]=c*T+h*B+f*N+p*ee,s[2]=g*C+v*D+m*O+d*U,s[6]=g*w+v*b+m*L+d*H,s[10]=g*S+v*V+m*z+d*Z,s[14]=g*T+v*B+m*N+d*ee,s[3]=_*C+x*D+y*O+E*U,s[7]=_*w+x*b+y*L+E*H,s[11]=_*S+x*V+y*z+E*Z,s[15]=_*T+x*B+y*N+E*ee,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],u=e[13],c=e[2],h=e[6],f=e[10],p=e[14],g=e[3],v=e[7],m=e[11],d=e[15],_=l*p-u*f,x=o*p-u*h,y=o*f-l*h,E=a*p-u*c,C=a*f-l*c,w=a*h-o*c;return t*(v*_-m*x+d*y)-i*(g*_-m*E+d*C)+r*(g*x-v*E+d*w)-s*(g*y-v*C+m*w)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],u=e[7],c=e[8],h=e[9],f=e[10],p=e[11],g=e[12],v=e[13],m=e[14],d=e[15],_=t*o-i*a,x=t*l-r*a,y=t*u-s*a,E=i*l-r*o,C=i*u-s*o,w=r*u-s*l,S=c*v-h*g,T=c*m-f*g,D=c*d-p*g,b=h*m-f*v,V=h*d-p*v,B=f*d-p*m,O=_*B-x*V+y*b+E*D-C*T+w*S;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/O;return e[0]=(o*B-l*V+u*b)*L,e[1]=(r*V-i*B-s*b)*L,e[2]=(v*w-m*C+d*E)*L,e[3]=(f*C-h*w-p*E)*L,e[4]=(l*D-a*B-u*T)*L,e[5]=(t*B-r*D+s*T)*L,e[6]=(m*y-g*w-d*x)*L,e[7]=(c*w-f*y+p*x)*L,e[8]=(a*V-o*D+u*S)*L,e[9]=(i*D-t*V-s*S)*L,e[10]=(g*C-v*y+d*_)*L,e[11]=(h*y-c*C-p*_)*L,e[12]=(o*T-a*b-l*S)*L,e[13]=(t*b-i*T+r*S)*L,e[14]=(v*x-g*E-m*_)*L,e[15]=(c*E-h*x+f*_)*L,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,u=s*a,c=s*o;return this.set(u*a+i,u*o-r*l,u*l+r*o,0,u*o+r*l,c*o+i,c*l-r*a,0,u*l-r*o,c*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,u=s+s,c=a+a,h=o+o,f=s*u,p=s*c,g=s*h,v=a*c,m=a*h,d=o*h,_=l*u,x=l*c,y=l*h,E=i.x,C=i.y,w=i.z;return r[0]=(1-(v+d))*E,r[1]=(p+y)*E,r[2]=(g-x)*E,r[3]=0,r[4]=(p-y)*C,r[5]=(1-(f+d))*C,r[6]=(m+_)*C,r[7]=0,r[8]=(g+x)*w,r[9]=(m-_)*w,r[10]=(1-(f+v))*w,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinant();if(s===0)return i.set(1,1,1),t.identity(),this;let a=Hs.set(r[0],r[1],r[2]).length();const o=Hs.set(r[4],r[5],r[6]).length(),l=Hs.set(r[8],r[9],r[10]).length();s<0&&(a=-a),ai.copy(this);const u=1/a,c=1/o,h=1/l;return ai.elements[0]*=u,ai.elements[1]*=u,ai.elements[2]*=u,ai.elements[4]*=c,ai.elements[5]*=c,ai.elements[6]*=c,ai.elements[8]*=h,ai.elements[9]*=h,ai.elements[10]*=h,t.setFromRotationMatrix(ai),i.x=a,i.y=o,i.z=l,this}makePerspective(e,t,i,r,s,a,o=bi,l=!1){const u=this.elements,c=2*s/(t-e),h=2*s/(i-r),f=(t+e)/(t-e),p=(i+r)/(i-r);let g,v;if(l)g=s/(a-s),v=a*s/(a-s);else if(o===bi)g=-(a+s)/(a-s),v=-2*a*s/(a-s);else if(o===ec)g=-a/(a-s),v=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return u[0]=c,u[4]=0,u[8]=f,u[12]=0,u[1]=0,u[5]=h,u[9]=p,u[13]=0,u[2]=0,u[6]=0,u[10]=g,u[14]=v,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=bi,l=!1){const u=this.elements,c=2/(t-e),h=2/(i-r),f=-(t+e)/(t-e),p=-(i+r)/(i-r);let g,v;if(l)g=1/(a-s),v=a/(a-s);else if(o===bi)g=-2/(a-s),v=-(a+s)/(a-s);else if(o===ec)g=-1/(a-s),v=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return u[0]=c,u[4]=0,u[8]=0,u[12]=f,u[1]=0,u[5]=h,u[9]=0,u[13]=p,u[2]=0,u[6]=0,u[10]=g,u[14]=v,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Hs=new X,ai=new Ot,f1=new X(0,0,0),d1=new X(1,1,1),vr=new X,kl=new X,Pn=new X,$_=new Ot,K_=new $a;class cr{constructor(e=0,t=0,i=0,r=cr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],u=r[5],c=r[9],h=r[2],f=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(Xe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-c,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Xe(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Xe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Xe(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(Xe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Xe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,u),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-c,p),this._y=0);break;default:Ne("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return $_.makeRotationFromQuaternion(e),this.setFromRotationMatrix($_,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return K_.setFromEuler(this),this.setFromQuaternion(K_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}cr.DEFAULT_ORDER="XYZ";class Rx{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let h1=0;const Z_=new X,Ws=new $a,Vi=new Ot,Bl=new X,ao=new X,p1=new X,m1=new $a,Q_=new X(1,0,0),J_=new X(0,1,0),eg=new X(0,0,1),tg={type:"added"},_1={type:"removed"},Xs={type:"childadded",child:null},gf={type:"childremoved",child:null};class Bn extends qa{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:h1++}),this.uuid=hl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Bn.DEFAULT_UP.clone();const e=new X,t=new cr,i=new $a,r=new X(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ot},normalMatrix:{value:new ze}}),this.matrix=new Ot,this.matrixWorld=new Ot,this.matrixAutoUpdate=Bn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Bn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Rx,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ws.setFromAxisAngle(e,t),this.quaternion.multiply(Ws),this}rotateOnWorldAxis(e,t){return Ws.setFromAxisAngle(e,t),this.quaternion.premultiply(Ws),this}rotateX(e){return this.rotateOnAxis(Q_,e)}rotateY(e){return this.rotateOnAxis(J_,e)}rotateZ(e){return this.rotateOnAxis(eg,e)}translateOnAxis(e,t){return Z_.copy(e).applyQuaternion(this.quaternion),this.position.add(Z_.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Q_,e)}translateY(e){return this.translateOnAxis(J_,e)}translateZ(e){return this.translateOnAxis(eg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Vi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Bl.copy(e):Bl.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),ao.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Vi.lookAt(ao,Bl,this.up):Vi.lookAt(Bl,ao,this.up),this.quaternion.setFromRotationMatrix(Vi),r&&(Vi.extractRotation(r.matrixWorld),Ws.setFromRotationMatrix(Vi),this.quaternion.premultiply(Ws.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Qe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(tg),Xs.child=e,this.dispatchEvent(Xs),Xs.child=null):Qe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(_1),gf.child=e,this.dispatchEvent(gf),gf.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Vi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Vi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Vi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(tg),Xs.child=e,this.dispatchEvent(Xs),Xs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ao,e,p1),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ao,m1,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*i-s[8]*r,s[13]+=i-s[1]*t-s[5]*i-s[9]*r,s[14]+=r-s[2]*t-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const h=l[u];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,u=this.material.length;l<u;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),u=a(e.textures),c=a(e.images),h=a(e.shapes),f=a(e.skeletons),p=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=r,i;function a(o){const l=[];for(const u in o){const c=o[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Bn.DEFAULT_UP=new X(0,1,0);Bn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Bn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class zl extends Bn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const g1={type:"move"};class vf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new zl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new zl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new zl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){a=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,i),d=this._getHandJoint(u,v);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const c=u.joints["index-finger-tip"],h=u.joints["thumb-tip"],f=c.position.distanceTo(h.position),p=.02,g=.005;u.inputState.pinching&&f>p+g?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&f<=p-g&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(g1)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new zl;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const bx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},xr={h:0,s:0,l:0},Vl={h:0,s:0,l:0};function xf(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class ot{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=qn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,qe.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=qe.workingColorSpace){return this.r=e,this.g=t,this.b=i,qe.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=qe.workingColorSpace){if(e=r1(e,1),t=Xe(t,0,1),i=Xe(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=xf(a,s,e+1/3),this.g=xf(a,s,e),this.b=xf(a,s,e-1/3)}return qe.colorSpaceToWorking(this,r),this}setStyle(e,t=qn){function i(s){s!==void 0&&parseFloat(s)<1&&Ne("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Ne("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);Ne("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=qn){const i=bx[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Ne("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=nr(e.r),this.g=nr(e.g),this.b=nr(e.b),this}copyLinearToSRGB(e){return this.r=Ta(e.r),this.g=Ta(e.g),this.b=Ta(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=qn){return qe.workingToColorSpace(rn.copy(this),e),Math.round(Xe(rn.r*255,0,255))*65536+Math.round(Xe(rn.g*255,0,255))*256+Math.round(Xe(rn.b*255,0,255))}getHexString(e=qn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=qe.workingColorSpace){qe.workingToColorSpace(rn.copy(this),t);const i=rn.r,r=rn.g,s=rn.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,u;const c=(o+a)/2;if(o===a)l=0,u=0;else{const h=a-o;switch(u=c<=.5?h/(a+o):h/(2-a-o),a){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,t=qe.workingColorSpace){return qe.workingToColorSpace(rn.copy(this),t),e.r=rn.r,e.g=rn.g,e.b=rn.b,e}getStyle(e=qn){qe.workingToColorSpace(rn.copy(this),e);const t=rn.r,i=rn.g,r=rn.b;return e!==qn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(xr),this.setHSL(xr.h+e,xr.s+t,xr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(xr),e.getHSL(Vl);const i=df(xr.h,Vl.h,t),r=df(xr.s,Vl.s,t),s=df(xr.l,Vl.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const rn=new ot;ot.NAMES=bx;class v1 extends Bn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new cr,this.environmentIntensity=1,this.environmentRotation=new cr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const oi=new X,Gi=new X,Sf=new X,Hi=new X,Ys=new X,js=new X,ng=new X,yf=new X,Mf=new X,Ef=new X,Tf=new Lt,wf=new Lt,Af=new Lt;class hi{constructor(e=new X,t=new X,i=new X){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),oi.subVectors(e,t),r.cross(oi);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){oi.subVectors(r,t),Gi.subVectors(i,t),Sf.subVectors(e,t);const a=oi.dot(oi),o=oi.dot(Gi),l=oi.dot(Sf),u=Gi.dot(Gi),c=Gi.dot(Sf),h=a*u-o*o;if(h===0)return s.set(0,0,0),null;const f=1/h,p=(u*l-o*c)*f,g=(a*c-o*l)*f;return s.set(1-p-g,g,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Hi)===null?!1:Hi.x>=0&&Hi.y>=0&&Hi.x+Hi.y<=1}static getInterpolation(e,t,i,r,s,a,o,l){return this.getBarycoord(e,t,i,r,Hi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Hi.x),l.addScaledVector(a,Hi.y),l.addScaledVector(o,Hi.z),l)}static getInterpolatedAttribute(e,t,i,r,s,a){return Tf.setScalar(0),wf.setScalar(0),Af.setScalar(0),Tf.fromBufferAttribute(e,t),wf.fromBufferAttribute(e,i),Af.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Tf,s.x),a.addScaledVector(wf,s.y),a.addScaledVector(Af,s.z),a}static isFrontFacing(e,t,i,r){return oi.subVectors(i,t),Gi.subVectors(e,t),oi.cross(Gi).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return oi.subVectors(this.c,this.b),Gi.subVectors(this.a,this.b),oi.cross(Gi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return hi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return hi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return hi.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return hi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return hi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;Ys.subVectors(r,i),js.subVectors(s,i),yf.subVectors(e,i);const l=Ys.dot(yf),u=js.dot(yf);if(l<=0&&u<=0)return t.copy(i);Mf.subVectors(e,r);const c=Ys.dot(Mf),h=js.dot(Mf);if(c>=0&&h<=c)return t.copy(r);const f=l*h-c*u;if(f<=0&&l>=0&&c<=0)return a=l/(l-c),t.copy(i).addScaledVector(Ys,a);Ef.subVectors(e,s);const p=Ys.dot(Ef),g=js.dot(Ef);if(g>=0&&p<=g)return t.copy(s);const v=p*u-l*g;if(v<=0&&u>=0&&g<=0)return o=u/(u-g),t.copy(i).addScaledVector(js,o);const m=c*g-p*h;if(m<=0&&h-c>=0&&p-g>=0)return ng.subVectors(s,r),o=(h-c)/(h-c+(p-g)),t.copy(r).addScaledVector(ng,o);const d=1/(m+v+f);return a=v*d,o=f*d,t.copy(i).addScaledVector(Ys,a).addScaledVector(js,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class pl{constructor(e=new X(1/0,1/0,1/0),t=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(li.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(li.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=li.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,li):li.fromBufferAttribute(s,a),li.applyMatrix4(e.matrixWorld),this.expandByPoint(li);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Gl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Gl.copy(i.boundingBox)),Gl.applyMatrix4(e.matrixWorld),this.union(Gl)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,li),li.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(oo),Hl.subVectors(this.max,oo),qs.subVectors(e.a,oo),$s.subVectors(e.b,oo),Ks.subVectors(e.c,oo),Sr.subVectors($s,qs),yr.subVectors(Ks,$s),is.subVectors(qs,Ks);let t=[0,-Sr.z,Sr.y,0,-yr.z,yr.y,0,-is.z,is.y,Sr.z,0,-Sr.x,yr.z,0,-yr.x,is.z,0,-is.x,-Sr.y,Sr.x,0,-yr.y,yr.x,0,-is.y,is.x,0];return!Cf(t,qs,$s,Ks,Hl)||(t=[1,0,0,0,1,0,0,0,1],!Cf(t,qs,$s,Ks,Hl))?!1:(Wl.crossVectors(Sr,yr),t=[Wl.x,Wl.y,Wl.z],Cf(t,qs,$s,Ks,Hl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,li).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(li).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Wi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Wi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Wi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Wi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Wi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Wi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Wi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Wi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Wi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Wi=[new X,new X,new X,new X,new X,new X,new X,new X],li=new X,Gl=new pl,qs=new X,$s=new X,Ks=new X,Sr=new X,yr=new X,is=new X,oo=new X,Hl=new X,Wl=new X,rs=new X;function Cf(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){rs.fromArray(n,s);const o=r.x*Math.abs(rs.x)+r.y*Math.abs(rs.y)+r.z*Math.abs(rs.z),l=e.dot(rs),u=t.dot(rs),c=i.dot(rs);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>o)return!1}return!0}const It=new X,Xl=new je;let x1=0;class Ui{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:x1++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=G_,this.updateRanges=[],this.gpuType=Ri,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Xl.fromBufferAttribute(this,t),Xl.applyMatrix3(e),this.setXY(t,Xl.x,Xl.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)It.fromBufferAttribute(this,t),It.applyMatrix3(e),this.setXYZ(t,It.x,It.y,It.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)It.fromBufferAttribute(this,t),It.applyMatrix4(e),this.setXYZ(t,It.x,It.y,It.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)It.fromBufferAttribute(this,t),It.applyNormalMatrix(e),this.setXYZ(t,It.x,It.y,It.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)It.fromBufferAttribute(this,t),It.transformDirection(e),this.setXYZ(t,It.x,It.y,It.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=so(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=_n(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=so(t,this.array)),t}setX(e,t){return this.normalized&&(t=_n(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=so(t,this.array)),t}setY(e,t){return this.normalized&&(t=_n(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=so(t,this.array)),t}setZ(e,t){return this.normalized&&(t=_n(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=so(t,this.array)),t}setW(e,t){return this.normalized&&(t=_n(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=_n(t,this.array),i=_n(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=_n(t,this.array),i=_n(i,this.array),r=_n(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=_n(t,this.array),i=_n(i,this.array),r=_n(r,this.array),s=_n(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==G_&&(e.usage=this.usage),e}}class Px extends Ui{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Dx extends Ui{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class ir extends Ui{constructor(e,t,i){super(new Float32Array(e),t,i)}}const S1=new pl,lo=new X,Rf=new X;class Jp{constructor(e=new X,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):S1.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;lo.subVectors(e,this.center);const t=lo.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(lo,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Rf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(lo.copy(e.center).add(Rf)),this.expandByPoint(lo.copy(e.center).sub(Rf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let y1=0;const Yn=new Ot,bf=new Bn,Zs=new X,Dn=new pl,uo=new pl,Ht=new X;class pr extends qa{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:y1++}),this.uuid=hl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(e1(e)?Dx:Px)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new ze().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Yn.makeRotationFromQuaternion(e),this.applyMatrix4(Yn),this}rotateX(e){return Yn.makeRotationX(e),this.applyMatrix4(Yn),this}rotateY(e){return Yn.makeRotationY(e),this.applyMatrix4(Yn),this}rotateZ(e){return Yn.makeRotationZ(e),this.applyMatrix4(Yn),this}translate(e,t,i){return Yn.makeTranslation(e,t,i),this.applyMatrix4(Yn),this}scale(e,t,i){return Yn.makeScale(e,t,i),this.applyMatrix4(Yn),this}lookAt(e){return bf.lookAt(e),bf.updateMatrix(),this.applyMatrix4(bf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Zs).negate(),this.translate(Zs.x,Zs.y,Zs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ir(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&Ne("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new pl);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Qe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Dn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ht.addVectors(this.boundingBox.min,Dn.min),this.boundingBox.expandByPoint(Ht),Ht.addVectors(this.boundingBox.max,Dn.max),this.boundingBox.expandByPoint(Ht)):(this.boundingBox.expandByPoint(Dn.min),this.boundingBox.expandByPoint(Dn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Qe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Jp);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Qe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new X,1/0);return}if(e){const i=this.boundingSphere.center;if(Dn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];uo.setFromBufferAttribute(o),this.morphTargetsRelative?(Ht.addVectors(Dn.min,uo.min),Dn.expandByPoint(Ht),Ht.addVectors(Dn.max,uo.max),Dn.expandByPoint(Ht)):(Dn.expandByPoint(uo.min),Dn.expandByPoint(uo.max))}Dn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Ht.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Ht));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let u=0,c=o.count;u<c;u++)Ht.fromBufferAttribute(o,u),l&&(Zs.fromBufferAttribute(e,u),Ht.add(Zs)),r=Math.max(r,i.distanceToSquared(Ht))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Qe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Qe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ui(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let S=0;S<i.count;S++)o[S]=new X,l[S]=new X;const u=new X,c=new X,h=new X,f=new je,p=new je,g=new je,v=new X,m=new X;function d(S,T,D){u.fromBufferAttribute(i,S),c.fromBufferAttribute(i,T),h.fromBufferAttribute(i,D),f.fromBufferAttribute(s,S),p.fromBufferAttribute(s,T),g.fromBufferAttribute(s,D),c.sub(u),h.sub(u),p.sub(f),g.sub(f);const b=1/(p.x*g.y-g.x*p.y);isFinite(b)&&(v.copy(c).multiplyScalar(g.y).addScaledVector(h,-p.y).multiplyScalar(b),m.copy(h).multiplyScalar(p.x).addScaledVector(c,-g.x).multiplyScalar(b),o[S].add(v),o[T].add(v),o[D].add(v),l[S].add(m),l[T].add(m),l[D].add(m))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let S=0,T=_.length;S<T;++S){const D=_[S],b=D.start,V=D.count;for(let B=b,O=b+V;B<O;B+=3)d(e.getX(B+0),e.getX(B+1),e.getX(B+2))}const x=new X,y=new X,E=new X,C=new X;function w(S){E.fromBufferAttribute(r,S),C.copy(E);const T=o[S];x.copy(T),x.sub(E.multiplyScalar(E.dot(T))).normalize(),y.crossVectors(C,T);const b=y.dot(l[S])<0?-1:1;a.setXYZW(S,x.x,x.y,x.z,b)}for(let S=0,T=_.length;S<T;++S){const D=_[S],b=D.start,V=D.count;for(let B=b,O=b+V;B<O;B+=3)w(e.getX(B+0)),w(e.getX(B+1)),w(e.getX(B+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Ui(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const r=new X,s=new X,a=new X,o=new X,l=new X,u=new X,c=new X,h=new X;if(e)for(let f=0,p=e.count;f<p;f+=3){const g=e.getX(f+0),v=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,v),a.fromBufferAttribute(t,m),c.subVectors(a,s),h.subVectors(r,s),c.cross(h),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,v),u.fromBufferAttribute(i,m),o.add(c),l.add(c),u.add(c),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(m,u.x,u.y,u.z)}else for(let f=0,p=t.count;f<p;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),c.subVectors(a,s),h.subVectors(r,s),c.cross(h),i.setXYZ(f+0,c.x,c.y,c.z),i.setXYZ(f+1,c.x,c.y,c.z),i.setXYZ(f+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Ht.fromBufferAttribute(e,t),Ht.normalize(),e.setXYZ(t,Ht.x,Ht.y,Ht.z)}toNonIndexed(){function e(o,l){const u=o.array,c=o.itemSize,h=o.normalized,f=new u.constructor(l.length*c);let p=0,g=0;for(let v=0,m=l.length;v<m;v++){o.isInterleavedBufferAttribute?p=l[v]*o.data.stride+o.offset:p=l[v]*c;for(let d=0;d<c;d++)f[g++]=u[p++]}return new Ui(f,c,h)}if(this.index===null)return Ne("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new pr,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],u=e(l,i);t.setAttribute(o,u)}const s=this.morphAttributes;for(const o in s){const l=[],u=s[o];for(let c=0,h=u.length;c<h;c++){const f=u[c],p=e(f,i);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const u=a[o];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let h=0,f=u.length;h<f;h++){const p=u[h];c.push(p.toJSON(e.data))}c.length>0&&(r[l]=c,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(t))}const s=e.morphAttributes;for(const u in s){const c=[],h=s[u];for(let f=0,p=h.length;f<p;f++)c.push(h[f].clone(t));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let u=0,c=a.length;u<c;u++){const h=a[u];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let M1=0;class Cc extends qa{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:M1++}),this.uuid=hl(),this.name="",this.type="Material",this.blending=Ea,this.side=jr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Hd,this.blendDst=Wd,this.blendEquation=ms,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ot(0,0,0),this.blendAlpha=0,this.depthFunc=Ua,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=V_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Vs,this.stencilZFail=Vs,this.stencilZPass=Vs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){Ne(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Ne(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ea&&(i.blending=this.blending),this.side!==jr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Hd&&(i.blendSrc=this.blendSrc),this.blendDst!==Wd&&(i.blendDst=this.blendDst),this.blendEquation!==ms&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ua&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==V_&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Vs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Vs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Vs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Xi=new X,Pf=new X,Yl=new X,Mr=new X,Df=new X,jl=new X,Lf=new X;class E1{constructor(e=new X,t=new X(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Xi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Xi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Xi.copy(this.origin).addScaledVector(this.direction,t),Xi.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Pf.copy(e).add(t).multiplyScalar(.5),Yl.copy(t).sub(e).normalize(),Mr.copy(this.origin).sub(Pf);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Yl),o=Mr.dot(this.direction),l=-Mr.dot(Yl),u=Mr.lengthSq(),c=Math.abs(1-a*a);let h,f,p,g;if(c>0)if(h=a*l-o,f=a*o-l,g=s*c,h>=0)if(f>=-g)if(f<=g){const v=1/c;h*=v,f*=v,p=h*(h+a*f+2*o)+f*(a*h+f+2*l)+u}else f=s,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*l)+u;else f=-s,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*l)+u;else f<=-g?(h=Math.max(0,-(-a*s+o)),f=h>0?-s:Math.min(Math.max(-s,-l),s),p=-h*h+f*(f+2*l)+u):f<=g?(h=0,f=Math.min(Math.max(-s,-l),s),p=f*(f+2*l)+u):(h=Math.max(0,-(a*s+o)),f=h>0?s:Math.min(Math.max(-s,-l),s),p=-h*h+f*(f+2*l)+u);else f=a>0?-s:s,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Pf).addScaledVector(Yl,f),p}intersectSphere(e,t){Xi.subVectors(e.center,this.origin);const i=Xi.dot(this.direction),r=Xi.dot(Xi)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,l;const u=1/this.direction.x,c=1/this.direction.y,h=1/this.direction.z,f=this.origin;return u>=0?(i=(e.min.x-f.x)*u,r=(e.max.x-f.x)*u):(i=(e.max.x-f.x)*u,r=(e.min.x-f.x)*u),c>=0?(s=(e.min.y-f.y)*c,a=(e.max.y-f.y)*c):(s=(e.max.y-f.y)*c,a=(e.min.y-f.y)*c),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),h>=0?(o=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(o=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Xi)!==null}intersectTriangle(e,t,i,r,s){Df.subVectors(t,e),jl.subVectors(i,e),Lf.crossVectors(Df,jl);let a=this.direction.dot(Lf),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Mr.subVectors(this.origin,e);const l=o*this.direction.dot(jl.crossVectors(Mr,jl));if(l<0)return null;const u=o*this.direction.dot(Df.cross(Mr));if(u<0||l+u>a)return null;const c=-o*Mr.dot(Lf);return c<0?null:this.at(c/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Lx extends Cc{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new cr,this.combine=cx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ig=new Ot,ss=new E1,ql=new Jp,rg=new X,$l=new X,Kl=new X,Zl=new X,Nf=new X,Ql=new X,sg=new X,Jl=new X;class Oi extends Bn{constructor(e=new pr,t=new Lx){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Ql.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const c=o[l],h=s[l];c!==0&&(Nf.fromBufferAttribute(h,e),a?Ql.addScaledVector(Nf,c):Ql.addScaledVector(Nf.sub(t),c))}t.add(Ql)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ql.copy(i.boundingSphere),ql.applyMatrix4(s),ss.copy(e.ray).recast(e.near),!(ql.containsPoint(ss.origin)===!1&&(ss.intersectSphere(ql,rg)===null||ss.origin.distanceToSquared(rg)>(e.far-e.near)**2))&&(ig.copy(s).invert(),ss.copy(e.ray).applyMatrix4(ig),!(i.boundingBox!==null&&ss.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ss)))}_computeIntersections(e,t,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,u=s.attributes.uv,c=s.attributes.uv1,h=s.attributes.normal,f=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=f.length;g<v;g++){const m=f[g],d=a[m.materialIndex],_=Math.max(m.start,p.start),x=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let y=_,E=x;y<E;y+=3){const C=o.getX(y),w=o.getX(y+1),S=o.getX(y+2);r=eu(this,d,e,i,u,c,h,C,w,S),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),v=Math.min(o.count,p.start+p.count);for(let m=g,d=v;m<d;m+=3){const _=o.getX(m),x=o.getX(m+1),y=o.getX(m+2);r=eu(this,a,e,i,u,c,h,_,x,y),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,v=f.length;g<v;g++){const m=f[g],d=a[m.materialIndex],_=Math.max(m.start,p.start),x=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let y=_,E=x;y<E;y+=3){const C=y,w=y+1,S=y+2;r=eu(this,d,e,i,u,c,h,C,w,S),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let m=g,d=v;m<d;m+=3){const _=m,x=m+1,y=m+2;r=eu(this,a,e,i,u,c,h,_,x,y),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function T1(n,e,t,i,r,s,a,o){let l;if(e.side===En?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===jr,o),l===null)return null;Jl.copy(o),Jl.applyMatrix4(n.matrixWorld);const u=t.ray.origin.distanceTo(Jl);return u<t.near||u>t.far?null:{distance:u,point:Jl.clone(),object:n}}function eu(n,e,t,i,r,s,a,o,l,u){n.getVertexPosition(o,$l),n.getVertexPosition(l,Kl),n.getVertexPosition(u,Zl);const c=T1(n,e,t,i,$l,Kl,Zl,sg);if(c){const h=new X;hi.getBarycoord(sg,$l,Kl,Zl,h),r&&(c.uv=hi.getInterpolatedAttribute(r,o,l,u,h,new je)),s&&(c.uv1=hi.getInterpolatedAttribute(s,o,l,u,h,new je)),a&&(c.normal=hi.getInterpolatedAttribute(a,o,l,u,h,new X),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const f={a:o,b:l,c:u,normal:new X,materialIndex:0};hi.getNormal($l,Kl,Zl,f.normal),c.face=f,c.barycoord=h}return c}class w1 extends hn{constructor(e=null,t=1,i=1,r,s,a,o,l,u=$t,c=$t,h,f){super(null,a,o,l,u,c,r,s,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const If=new X,A1=new X,C1=new ze;class hs{constructor(e=new X(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=If.subVectors(i,t).cross(A1.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(If),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||C1.getNormalMatrix(e),r=this.coplanarPoint(If).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const as=new Jp,R1=new je(.5,.5),tu=new X;class Nx{constructor(e=new hs,t=new hs,i=new hs,r=new hs,s=new hs,a=new hs){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=bi,i=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],u=s[3],c=s[4],h=s[5],f=s[6],p=s[7],g=s[8],v=s[9],m=s[10],d=s[11],_=s[12],x=s[13],y=s[14],E=s[15];if(r[0].setComponents(u-a,p-c,d-g,E-_).normalize(),r[1].setComponents(u+a,p+c,d+g,E+_).normalize(),r[2].setComponents(u+o,p+h,d+v,E+x).normalize(),r[3].setComponents(u-o,p-h,d-v,E-x).normalize(),i)r[4].setComponents(l,f,m,y).normalize(),r[5].setComponents(u-l,p-f,d-m,E-y).normalize();else if(r[4].setComponents(u-l,p-f,d-m,E-y).normalize(),t===bi)r[5].setComponents(u+l,p+f,d+m,E+y).normalize();else if(t===ec)r[5].setComponents(l,f,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),as.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),as.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(as)}intersectsSprite(e){as.center.set(0,0,0);const t=R1.distanceTo(e.center);return as.radius=.7071067811865476+t,as.applyMatrix4(e.matrixWorld),this.intersectsSphere(as)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(tu.x=r.normal.x>0?e.max.x:e.min.x,tu.y=r.normal.y>0?e.max.y:e.min.y,tu.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(tu)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Ix extends hn{constructor(e=[],t=Is,i,r,s,a,o,l,u,c){super(e,t,i,r,s,a,o,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Jo extends hn{constructor(e,t,i=Fi,r,s,a,o=$t,l=$t,u,c=ur,h=1){if(c!==ur&&c!==ys)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:h};super(f,r,s,a,o,l,c,i,u),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Qp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class b1 extends Jo{constructor(e,t=Fi,i=Is,r,s,a=$t,o=$t,l,u=ur){const c={width:e,height:e,depth:1},h=[c,c,c,c,c,c];super(e,e,t,i,r,s,a,o,l,u),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Ux extends hn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class ml extends pr{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],u=[],c=[],h=[];let f=0,p=0;g("z","y","x",-1,-1,i,t,e,a,s,0),g("z","y","x",1,-1,i,t,-e,a,s,1),g("x","z","y",1,1,e,i,t,r,a,2),g("x","z","y",1,-1,e,i,-t,r,a,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new ir(u,3)),this.setAttribute("normal",new ir(c,3)),this.setAttribute("uv",new ir(h,2));function g(v,m,d,_,x,y,E,C,w,S,T){const D=y/w,b=E/S,V=y/2,B=E/2,O=C/2,L=w+1,z=S+1;let N=0,U=0;const H=new X;for(let Z=0;Z<z;Z++){const ee=Z*b-B;for(let J=0;J<L;J++){const Pe=J*D-V;H[v]=Pe*_,H[m]=ee*x,H[d]=O,u.push(H.x,H.y,H.z),H[v]=0,H[m]=0,H[d]=C>0?1:-1,c.push(H.x,H.y,H.z),h.push(J/w),h.push(1-Z/S),N+=1}}for(let Z=0;Z<S;Z++)for(let ee=0;ee<w;ee++){const J=f+ee+L*Z,Pe=f+ee+L*(Z+1),Le=f+(ee+1)+L*(Z+1),Fe=f+(ee+1)+L*Z;l.push(J,Pe,Fe),l.push(Pe,Le,Fe),U+=6}o.addGroup(p,U,T),p+=U,f+=N}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ml(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class _l extends pr{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(r),u=o+1,c=l+1,h=e/o,f=t/l,p=[],g=[],v=[],m=[];for(let d=0;d<c;d++){const _=d*f-a;for(let x=0;x<u;x++){const y=x*h-s;g.push(y,-_,0),v.push(0,0,1),m.push(x/o),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let _=0;_<o;_++){const x=_+u*d,y=_+u*(d+1),E=_+1+u*(d+1),C=_+1+u*d;p.push(x,y,C),p.push(y,E,C)}this.setIndex(p),this.setAttribute("position",new ir(g,3)),this.setAttribute("normal",new ir(v,3)),this.setAttribute("uv",new ir(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _l(e.width,e.height,e.widthSegments,e.heightSegments)}}function Ba(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(Ne("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function cn(n){const e={};for(let t=0;t<n.length;t++){const i=Ba(n[t]);for(const r in i)e[r]=i[r]}return e}function P1(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Fx(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:qe.workingColorSpace}const D1={clone:Ba,merge:cn};var L1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,N1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class vi extends Cc{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=L1,this.fragmentShader=N1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ba(e.uniforms),this.uniformsGroups=P1(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class I1 extends vi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class U1 extends Cc{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=XE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class F1 extends Cc{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const nu=new X,iu=new $a,yi=new X;class Ox extends Bn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ot,this.projectionMatrix=new Ot,this.projectionMatrixInverse=new Ot,this.coordinateSystem=bi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(nu,iu,yi),yi.x===1&&yi.y===1&&yi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(nu,iu,yi.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(nu,iu,yi),yi.x===1&&yi.y===1&&yi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(nu,iu,yi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Er=new X,ag=new je,og=new je;class di extends Ox{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Lh*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ff*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Lh*2*Math.atan(Math.tan(ff*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Er.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Er.x,Er.y).multiplyScalar(-e/Er.z),Er.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Er.x,Er.y).multiplyScalar(-e/Er.z)}getViewSize(e,t){return this.getViewBounds(e,ag,og),t.subVectors(og,ag)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ff*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,u=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*i/u,r*=a.width/l,i*=a.height/u}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class em extends Ox{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,a=s+u*this.view.width,o-=c*this.view.offsetY,l=o-c*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Qs=-90,Js=1;class O1 extends Bn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new di(Qs,Js,e,t);r.layers=this.layers,this.add(r);const s=new di(Qs,Js,e,t);s.layers=this.layers,this.add(s);const a=new di(Qs,Js,e,t);a.layers=this.layers,this.add(a);const o=new di(Qs,Js,e,t);o.layers=this.layers,this.add(o);const l=new di(Qs,Js,e,t);l.layers=this.layers,this.add(l);const u=new di(Qs,Js,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,l]=t;for(const u of t)this.remove(u);if(e===bi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ec)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,u,c]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(i,1,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,2,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(h,f,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class k1 extends di{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class B1{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Ne("THREE.Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function lg(n,e,t,i){const r=z1(i);switch(t){case Ex:return n*e;case wx:return n*e/r.components*r.byteLength;case jp:return n*e/r.components*r.byteLength;case Oa:return n*e*2/r.components*r.byteLength;case qp:return n*e*2/r.components*r.byteLength;case Tx:return n*e*3/r.components*r.byteLength;case pi:return n*e*4/r.components*r.byteLength;case $p:return n*e*4/r.components*r.byteLength;case yu:case Mu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Eu:case Tu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case th:case ih:return Math.max(n,16)*Math.max(e,8)/4;case eh:case nh:return Math.max(n,8)*Math.max(e,8)/2;case rh:case sh:case oh:case lh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case ah:case uh:case ch:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case fh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case dh:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case hh:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case ph:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case mh:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case _h:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case gh:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case vh:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case xh:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Sh:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case yh:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Mh:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Eh:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Th:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case wh:case Ah:case Ch:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Rh:case bh:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Ph:case Dh:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function z1(n){switch(n){case Zn:case xx:return{byteLength:1,components:1};case Zo:case Sx:case lr:return{byteLength:2,components:1};case Xp:case Yp:return{byteLength:2,components:4};case Fi:case Wp:case Ri:return{byteLength:4,components:1};case yx:case Mx:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Hp}}));typeof window<"u"&&(window.__THREE__?Ne("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Hp);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function kx(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function V1(n){const e=new WeakMap;function t(o,l){const u=o.array,c=o.usage,h=u.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,u,c),o.onUploadCallback();let p;if(u instanceof Float32Array)p=n.FLOAT;else if(typeof Float16Array<"u"&&u instanceof Float16Array)p=n.HALF_FLOAT;else if(u instanceof Uint16Array)o.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(u instanceof Int16Array)p=n.SHORT;else if(u instanceof Uint32Array)p=n.UNSIGNED_INT;else if(u instanceof Int32Array)p=n.INT;else if(u instanceof Int8Array)p=n.BYTE;else if(u instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:f,type:p,bytesPerElement:u.BYTES_PER_ELEMENT,version:o.version,size:h}}function i(o,l,u){const c=l.array,h=l.updateRanges;if(n.bindBuffer(u,o),h.length===0)n.bufferSubData(u,0,c);else{h.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<h.length;p++){const g=h[f],v=h[p];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++f,h[f]=v)}h.length=f+1;for(let p=0,g=h.length;p<g;p++){const v=h[p];n.bufferSubData(u,v.start*c.BYTES_PER_ELEMENT,c,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const c=e.get(o);(!c||c.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const u=e.get(o);if(u===void 0)e.set(o,t(o,l));else if(u.version<o.version){if(u.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,o,l),u.version=o.version}}return{get:r,remove:s,update:a}}var G1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,H1=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,W1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,X1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Y1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,j1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,q1=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,$1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,K1=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Z1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Q1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,J1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,eT=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,tT=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,nT=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,iT=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,rT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,sT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,aT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,oT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,lT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,uT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,cT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,fT=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,dT=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,hT=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,pT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,mT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,_T=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,gT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,vT="gl_FragColor = linearToOutputTexel( gl_FragColor );",xT=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ST=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,yT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,MT=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,ET=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,TT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,wT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,AT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,CT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,RT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,bT=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,PT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,DT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,LT=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,NT=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,IT=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,UT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,FT=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,OT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,kT=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,BT=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,zT=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,VT=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,GT=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,HT=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,WT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,XT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,YT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,qT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,$T=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,KT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,ZT=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,QT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,JT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ew=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,tw=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,nw=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,iw=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,rw=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,sw=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,aw=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,ow=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,uw=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,cw=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,fw=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,dw=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,hw=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,pw=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,mw=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,_w=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,gw=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,vw=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,xw=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Sw=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,yw=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Mw=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ew=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Tw=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,ww=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Aw=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Cw=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Rw=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,bw=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Pw=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Dw=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Lw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Nw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Iw=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Uw=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Fw=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Ow=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,kw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Bw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,zw=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Vw=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Gw=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ww=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Yw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jw=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,qw=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,$w=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Kw=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Zw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Qw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jw=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,eA=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,tA=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,nA=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,iA=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,rA=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sA=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,aA=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,oA=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,lA=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,uA=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,cA=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fA=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,dA=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hA=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,pA=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mA=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,_A=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,gA=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vA=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,xA=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,SA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ve={alphahash_fragment:G1,alphahash_pars_fragment:H1,alphamap_fragment:W1,alphamap_pars_fragment:X1,alphatest_fragment:Y1,alphatest_pars_fragment:j1,aomap_fragment:q1,aomap_pars_fragment:$1,batching_pars_vertex:K1,batching_vertex:Z1,begin_vertex:Q1,beginnormal_vertex:J1,bsdfs:eT,iridescence_fragment:tT,bumpmap_pars_fragment:nT,clipping_planes_fragment:iT,clipping_planes_pars_fragment:rT,clipping_planes_pars_vertex:sT,clipping_planes_vertex:aT,color_fragment:oT,color_pars_fragment:lT,color_pars_vertex:uT,color_vertex:cT,common:fT,cube_uv_reflection_fragment:dT,defaultnormal_vertex:hT,displacementmap_pars_vertex:pT,displacementmap_vertex:mT,emissivemap_fragment:_T,emissivemap_pars_fragment:gT,colorspace_fragment:vT,colorspace_pars_fragment:xT,envmap_fragment:ST,envmap_common_pars_fragment:yT,envmap_pars_fragment:MT,envmap_pars_vertex:ET,envmap_physical_pars_fragment:IT,envmap_vertex:TT,fog_vertex:wT,fog_pars_vertex:AT,fog_fragment:CT,fog_pars_fragment:RT,gradientmap_pars_fragment:bT,lightmap_pars_fragment:PT,lights_lambert_fragment:DT,lights_lambert_pars_fragment:LT,lights_pars_begin:NT,lights_toon_fragment:UT,lights_toon_pars_fragment:FT,lights_phong_fragment:OT,lights_phong_pars_fragment:kT,lights_physical_fragment:BT,lights_physical_pars_fragment:zT,lights_fragment_begin:VT,lights_fragment_maps:GT,lights_fragment_end:HT,logdepthbuf_fragment:WT,logdepthbuf_pars_fragment:XT,logdepthbuf_pars_vertex:YT,logdepthbuf_vertex:jT,map_fragment:qT,map_pars_fragment:$T,map_particle_fragment:KT,map_particle_pars_fragment:ZT,metalnessmap_fragment:QT,metalnessmap_pars_fragment:JT,morphinstance_vertex:ew,morphcolor_vertex:tw,morphnormal_vertex:nw,morphtarget_pars_vertex:iw,morphtarget_vertex:rw,normal_fragment_begin:sw,normal_fragment_maps:aw,normal_pars_fragment:ow,normal_pars_vertex:lw,normal_vertex:uw,normalmap_pars_fragment:cw,clearcoat_normal_fragment_begin:fw,clearcoat_normal_fragment_maps:dw,clearcoat_pars_fragment:hw,iridescence_pars_fragment:pw,opaque_fragment:mw,packing:_w,premultiplied_alpha_fragment:gw,project_vertex:vw,dithering_fragment:xw,dithering_pars_fragment:Sw,roughnessmap_fragment:yw,roughnessmap_pars_fragment:Mw,shadowmap_pars_fragment:Ew,shadowmap_pars_vertex:Tw,shadowmap_vertex:ww,shadowmask_pars_fragment:Aw,skinbase_vertex:Cw,skinning_pars_vertex:Rw,skinning_vertex:bw,skinnormal_vertex:Pw,specularmap_fragment:Dw,specularmap_pars_fragment:Lw,tonemapping_fragment:Nw,tonemapping_pars_fragment:Iw,transmission_fragment:Uw,transmission_pars_fragment:Fw,uv_pars_fragment:Ow,uv_pars_vertex:kw,uv_vertex:Bw,worldpos_vertex:zw,background_vert:Vw,background_frag:Gw,backgroundCube_vert:Hw,backgroundCube_frag:Ww,cube_vert:Xw,cube_frag:Yw,depth_vert:jw,depth_frag:qw,distance_vert:$w,distance_frag:Kw,equirect_vert:Zw,equirect_frag:Qw,linedashed_vert:Jw,linedashed_frag:eA,meshbasic_vert:tA,meshbasic_frag:nA,meshlambert_vert:iA,meshlambert_frag:rA,meshmatcap_vert:sA,meshmatcap_frag:aA,meshnormal_vert:oA,meshnormal_frag:lA,meshphong_vert:uA,meshphong_frag:cA,meshphysical_vert:fA,meshphysical_frag:dA,meshtoon_vert:hA,meshtoon_frag:pA,points_vert:mA,points_frag:_A,shadow_vert:gA,shadow_frag:vA,sprite_vert:xA,sprite_frag:SA},ce={common:{diffuse:{value:new ot(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ze}},envmap:{envMap:{value:null},envMapRotation:{value:new ze},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ze},normalScale:{value:new je(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ot(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ot(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0},uvTransform:{value:new ze}},sprite:{diffuse:{value:new ot(16777215)},opacity:{value:1},center:{value:new je(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}}},wi={basic:{uniforms:cn([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:Ve.meshbasic_vert,fragmentShader:Ve.meshbasic_frag},lambert:{uniforms:cn([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new ot(0)},envMapIntensity:{value:1}}]),vertexShader:Ve.meshlambert_vert,fragmentShader:Ve.meshlambert_frag},phong:{uniforms:cn([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new ot(0)},specular:{value:new ot(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphong_vert,fragmentShader:Ve.meshphong_frag},standard:{uniforms:cn([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new ot(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag},toon:{uniforms:cn([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new ot(0)}}]),vertexShader:Ve.meshtoon_vert,fragmentShader:Ve.meshtoon_frag},matcap:{uniforms:cn([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:Ve.meshmatcap_vert,fragmentShader:Ve.meshmatcap_frag},points:{uniforms:cn([ce.points,ce.fog]),vertexShader:Ve.points_vert,fragmentShader:Ve.points_frag},dashed:{uniforms:cn([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ve.linedashed_vert,fragmentShader:Ve.linedashed_frag},depth:{uniforms:cn([ce.common,ce.displacementmap]),vertexShader:Ve.depth_vert,fragmentShader:Ve.depth_frag},normal:{uniforms:cn([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:Ve.meshnormal_vert,fragmentShader:Ve.meshnormal_frag},sprite:{uniforms:cn([ce.sprite,ce.fog]),vertexShader:Ve.sprite_vert,fragmentShader:Ve.sprite_frag},background:{uniforms:{uvTransform:{value:new ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ve.background_vert,fragmentShader:Ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ze}},vertexShader:Ve.backgroundCube_vert,fragmentShader:Ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ve.cube_vert,fragmentShader:Ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ve.equirect_vert,fragmentShader:Ve.equirect_frag},distance:{uniforms:cn([ce.common,ce.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ve.distance_vert,fragmentShader:Ve.distance_frag},shadow:{uniforms:cn([ce.lights,ce.fog,{color:{value:new ot(0)},opacity:{value:1}}]),vertexShader:Ve.shadow_vert,fragmentShader:Ve.shadow_frag}};wi.physical={uniforms:cn([wi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ze},clearcoatNormalScale:{value:new je(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ze},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ze},sheen:{value:0},sheenColor:{value:new ot(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ze},transmissionSamplerSize:{value:new je},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ze},attenuationDistance:{value:0},attenuationColor:{value:new ot(0)},specularColor:{value:new ot(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ze},anisotropyVector:{value:new je},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ze}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag};const ru={r:0,b:0,g:0},os=new cr,yA=new Ot;function MA(n,e,t,i,r,s){const a=new ot(0);let o=r===!0?0:1,l,u,c=null,h=0,f=null;function p(_){let x=_.isScene===!0?_.background:null;if(x&&x.isTexture){const y=_.backgroundBlurriness>0;x=e.get(x,y)}return x}function g(_){let x=!1;const y=p(_);y===null?m(a,o):y&&y.isColor&&(m(y,1),x=!0);const E=n.xr.getEnvironmentBlendMode();E==="additive"?t.buffers.color.setClear(0,0,0,1,s):E==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(n.autoClear||x)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function v(_,x){const y=p(x);y&&(y.isCubeTexture||y.mapping===Ac)?(u===void 0&&(u=new Oi(new ml(1,1,1),new vi({name:"BackgroundCubeMaterial",uniforms:Ba(wi.backgroundCube.uniforms),vertexShader:wi.backgroundCube.vertexShader,fragmentShader:wi.backgroundCube.fragmentShader,side:En,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(E,C,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),os.copy(x.backgroundRotation),os.x*=-1,os.y*=-1,os.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(os.y*=-1,os.z*=-1),u.material.uniforms.envMap.value=y,u.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(yA.makeRotationFromEuler(os)),u.material.toneMapped=qe.getTransfer(y.colorSpace)!==it,(c!==y||h!==y.version||f!==n.toneMapping)&&(u.material.needsUpdate=!0,c=y,h=y.version,f=n.toneMapping),u.layers.enableAll(),_.unshift(u,u.geometry,u.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new Oi(new _l(2,2),new vi({name:"BackgroundMaterial",uniforms:Ba(wi.background.uniforms),vertexShader:wi.background.vertexShader,fragmentShader:wi.background.fragmentShader,side:jr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=qe.getTransfer(y.colorSpace)!==it,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(c!==y||h!==y.version||f!==n.toneMapping)&&(l.material.needsUpdate=!0,c=y,h=y.version,f=n.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null))}function m(_,x){_.getRGB(ru,Fx(n)),t.buffers.color.setClear(ru.r,ru.g,ru.b,x,s)}function d(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(_,x=1){a.set(_),o=x,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(_){o=_,m(a,o)},render:g,addToRenderList:v,dispose:d}}function EA(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,a=!1;function o(b,V,B,O,L){let z=!1;const N=h(b,O,B,V);s!==N&&(s=N,u(s.object)),z=p(b,O,B,L),z&&g(b,O,B,L),L!==null&&e.update(L,n.ELEMENT_ARRAY_BUFFER),(z||a)&&(a=!1,y(b,V,B,O),L!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(L).buffer))}function l(){return n.createVertexArray()}function u(b){return n.bindVertexArray(b)}function c(b){return n.deleteVertexArray(b)}function h(b,V,B,O){const L=O.wireframe===!0;let z=i[V.id];z===void 0&&(z={},i[V.id]=z);const N=b.isInstancedMesh===!0?b.id:0;let U=z[N];U===void 0&&(U={},z[N]=U);let H=U[B.id];H===void 0&&(H={},U[B.id]=H);let Z=H[L];return Z===void 0&&(Z=f(l()),H[L]=Z),Z}function f(b){const V=[],B=[],O=[];for(let L=0;L<t;L++)V[L]=0,B[L]=0,O[L]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:B,attributeDivisors:O,object:b,attributes:{},index:null}}function p(b,V,B,O){const L=s.attributes,z=V.attributes;let N=0;const U=B.getAttributes();for(const H in U)if(U[H].location>=0){const ee=L[H];let J=z[H];if(J===void 0&&(H==="instanceMatrix"&&b.instanceMatrix&&(J=b.instanceMatrix),H==="instanceColor"&&b.instanceColor&&(J=b.instanceColor)),ee===void 0||ee.attribute!==J||J&&ee.data!==J.data)return!0;N++}return s.attributesNum!==N||s.index!==O}function g(b,V,B,O){const L={},z=V.attributes;let N=0;const U=B.getAttributes();for(const H in U)if(U[H].location>=0){let ee=z[H];ee===void 0&&(H==="instanceMatrix"&&b.instanceMatrix&&(ee=b.instanceMatrix),H==="instanceColor"&&b.instanceColor&&(ee=b.instanceColor));const J={};J.attribute=ee,ee&&ee.data&&(J.data=ee.data),L[H]=J,N++}s.attributes=L,s.attributesNum=N,s.index=O}function v(){const b=s.newAttributes;for(let V=0,B=b.length;V<B;V++)b[V]=0}function m(b){d(b,0)}function d(b,V){const B=s.newAttributes,O=s.enabledAttributes,L=s.attributeDivisors;B[b]=1,O[b]===0&&(n.enableVertexAttribArray(b),O[b]=1),L[b]!==V&&(n.vertexAttribDivisor(b,V),L[b]=V)}function _(){const b=s.newAttributes,V=s.enabledAttributes;for(let B=0,O=V.length;B<O;B++)V[B]!==b[B]&&(n.disableVertexAttribArray(B),V[B]=0)}function x(b,V,B,O,L,z,N){N===!0?n.vertexAttribIPointer(b,V,B,L,z):n.vertexAttribPointer(b,V,B,O,L,z)}function y(b,V,B,O){v();const L=O.attributes,z=B.getAttributes(),N=V.defaultAttributeValues;for(const U in z){const H=z[U];if(H.location>=0){let Z=L[U];if(Z===void 0&&(U==="instanceMatrix"&&b.instanceMatrix&&(Z=b.instanceMatrix),U==="instanceColor"&&b.instanceColor&&(Z=b.instanceColor)),Z!==void 0){const ee=Z.normalized,J=Z.itemSize,Pe=e.get(Z);if(Pe===void 0)continue;const Le=Pe.buffer,Fe=Pe.type,j=Pe.bytesPerElement,re=Fe===n.INT||Fe===n.UNSIGNED_INT||Z.gpuType===Wp;if(Z.isInterleavedBufferAttribute){const oe=Z.data,Ie=oe.stride,we=Z.offset;if(oe.isInstancedInterleavedBuffer){for(let Ae=0;Ae<H.locationSize;Ae++)d(H.location+Ae,oe.meshPerAttribute);b.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let Ae=0;Ae<H.locationSize;Ae++)m(H.location+Ae);n.bindBuffer(n.ARRAY_BUFFER,Le);for(let Ae=0;Ae<H.locationSize;Ae++)x(H.location+Ae,J/H.locationSize,Fe,ee,Ie*j,(we+J/H.locationSize*Ae)*j,re)}else{if(Z.isInstancedBufferAttribute){for(let oe=0;oe<H.locationSize;oe++)d(H.location+oe,Z.meshPerAttribute);b.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let oe=0;oe<H.locationSize;oe++)m(H.location+oe);n.bindBuffer(n.ARRAY_BUFFER,Le);for(let oe=0;oe<H.locationSize;oe++)x(H.location+oe,J/H.locationSize,Fe,ee,J*j,J/H.locationSize*oe*j,re)}}else if(N!==void 0){const ee=N[U];if(ee!==void 0)switch(ee.length){case 2:n.vertexAttrib2fv(H.location,ee);break;case 3:n.vertexAttrib3fv(H.location,ee);break;case 4:n.vertexAttrib4fv(H.location,ee);break;default:n.vertexAttrib1fv(H.location,ee)}}}}_()}function E(){T();for(const b in i){const V=i[b];for(const B in V){const O=V[B];for(const L in O){const z=O[L];for(const N in z)c(z[N].object),delete z[N];delete O[L]}}delete i[b]}}function C(b){if(i[b.id]===void 0)return;const V=i[b.id];for(const B in V){const O=V[B];for(const L in O){const z=O[L];for(const N in z)c(z[N].object),delete z[N];delete O[L]}}delete i[b.id]}function w(b){for(const V in i){const B=i[V];for(const O in B){const L=B[O];if(L[b.id]===void 0)continue;const z=L[b.id];for(const N in z)c(z[N].object),delete z[N];delete L[b.id]}}}function S(b){for(const V in i){const B=i[V],O=b.isInstancedMesh===!0?b.id:0,L=B[O];if(L!==void 0){for(const z in L){const N=L[z];for(const U in N)c(N[U].object),delete N[U];delete L[z]}delete B[O],Object.keys(B).length===0&&delete i[V]}}}function T(){D(),a=!0,s!==r&&(s=r,u(s.object))}function D(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:T,resetDefaultState:D,dispose:E,releaseStatesOfGeometry:C,releaseStatesOfObject:S,releaseStatesOfProgram:w,initAttributes:v,enableAttribute:m,disableUnusedAttributes:_}}function TA(n,e,t){let i;function r(u){i=u}function s(u,c){n.drawArrays(i,u,c),t.update(c,i,1)}function a(u,c,h){h!==0&&(n.drawArraysInstanced(i,u,c,h),t.update(c,i,h))}function o(u,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,u,0,c,0,h);let p=0;for(let g=0;g<h;g++)p+=c[g];t.update(p,i,1)}function l(u,c,h,f){if(h===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<u.length;g++)a(u[g],c[g],f[g]);else{p.multiDrawArraysInstancedWEBGL(i,u,0,c,0,f,0,h);let g=0;for(let v=0;v<h;v++)g+=c[v]*f[v];t.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function wA(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(w){return!(w!==pi&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){const S=w===lr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==Zn&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==Ri&&!S)}function l(w){if(w==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=t.precision!==void 0?t.precision:"highp";const c=l(u);c!==u&&(Ne("WebGLRenderer:",u,"not supported, using",c,"instead."),u=c);const h=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),d=n.getParameter(n.MAX_VERTEX_ATTRIBS),_=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),x=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),E=n.getParameter(n.MAX_SAMPLES),C=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:u,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:_,maxVaryings:x,maxFragmentUniforms:y,maxSamples:E,samples:C}}function AA(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new hs,o=new ze,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const p=h.length!==0||f||i!==0||r;return r=f,i=h.length,p},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){t=c(h,f,0)},this.setState=function(h,f,p){const g=h.clippingPlanes,v=h.clipIntersection,m=h.clipShadows,d=n.get(h);if(!r||g===null||g.length===0||s&&!m)s?c(null):u();else{const _=s?0:i,x=_*4;let y=d.clippingState||null;l.value=y,y=c(g,f,x,p);for(let E=0;E!==x;++E)y[E]=t[E];d.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=_}};function u(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(h,f,p,g){const v=h!==null?h.length:0;let m=null;if(v!==0){if(m=l.value,g!==!0||m===null){const d=p+v*4,_=f.matrixWorldInverse;o.getNormalMatrix(_),(m===null||m.length<d)&&(m=new Float32Array(d));for(let x=0,y=p;x!==v;++x,y+=4)a.copy(h[x]).applyMatrix4(_,o),a.normal.toArray(m,y),m[y+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}const Dr=4,ug=[.125,.215,.35,.446,.526,.582],_s=20,CA=256,co=new em,cg=new ot;let Uf=null,Ff=0,Of=0,kf=!1;const RA=new X;class fg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,r=100,s={}){const{size:a=256,position:o=RA}=s;Uf=this._renderer.getRenderTarget(),Ff=this._renderer.getActiveCubeFace(),Of=this._renderer.getActiveMipmapLevel(),kf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=pg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=hg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Uf,Ff,Of),this._renderer.xr.enabled=kf,e.scissorTest=!1,ea(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Is||e.mapping===Fa?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Uf=this._renderer.getRenderTarget(),Ff=this._renderer.getActiveCubeFace(),Of=this._renderer.getActiveMipmapLevel(),kf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:on,minFilter:on,generateMipmaps:!1,type:lr,format:pi,colorSpace:ka,depthBuffer:!1},r=dg(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=dg(e,t,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=bA(s)),this._blurMaterial=DA(s,e,t),this._ggxMaterial=PA(s,e,t)}return r}_compileMaterial(e){const t=new Oi(new pr,e);this._renderer.compile(t,co)}_sceneToCubeUV(e,t,i,r,s){const l=new di(90,1,t,i),u=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,p=h.toneMapping;h.getClearColor(cg),h.toneMapping=Ni,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(r),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Oi(new ml,new Lx({name:"PMREM.Background",side:En,depthWrite:!1,depthTest:!1})));const v=this._backgroundBox,m=v.material;let d=!1;const _=e.background;_?_.isColor&&(m.color.copy(_),e.background=null,d=!0):(m.color.copy(cg),d=!0);for(let x=0;x<6;x++){const y=x%3;y===0?(l.up.set(0,u[x],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+c[x],s.y,s.z)):y===1?(l.up.set(0,0,u[x]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+c[x],s.z)):(l.up.set(0,u[x],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+c[x]));const E=this._cubeSize;ea(r,y*E,x>2?E:0,E,E),h.setRenderTarget(r),d&&h.render(v,l),h.render(e,l)}h.toneMapping=p,h.autoClear=f,e.background=_}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Is||e.mapping===Fa;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=pg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=hg());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;ea(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,co)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=i}_applyGGXFilter(e,t,i){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const l=a.uniforms,u=i/(this._lodMeshes.length-1),c=t/(this._lodMeshes.length-1),h=Math.sqrt(u*u-c*c),f=0+u*1.25,p=h*f,{_lodMax:g}=this,v=this._sizeLods[i],m=3*v*(i>g-Dr?i-g+Dr:0),d=4*(this._cubeSize-v);l.envMap.value=e.texture,l.roughness.value=p,l.mipInt.value=g-t,ea(s,m,d,3*v,2*v),r.setRenderTarget(s),r.render(o,co),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=g-i,ea(e,m,d,3*v,2*v),r.setRenderTarget(e),r.render(o,co)}_blur(e,t,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){const l=this._renderer,u=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&Qe("blur direction must be either latitudinal or longitudinal!");const c=3,h=this._lodMeshes[r];h.material=u;const f=u.uniforms,p=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*_s-1),v=s/g,m=isFinite(s)?1+Math.floor(c*v):_s;m>_s&&Ne(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${_s}`);const d=[];let _=0;for(let w=0;w<_s;++w){const S=w/v,T=Math.exp(-S*S/2);d.push(T),w===0?_+=T:w<m&&(_+=2*T)}for(let w=0;w<d.length;w++)d[w]=d[w]/_;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:x}=this;f.dTheta.value=g,f.mipInt.value=x-i;const y=this._sizeLods[r],E=3*y*(r>x-Dr?r-x+Dr:0),C=4*(this._cubeSize-y);ea(t,E,C,3*y,2*y),l.setRenderTarget(t),l.render(h,co)}}function bA(n){const e=[],t=[],i=[];let r=n;const s=n-Dr+1+ug.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let l=1/o;a>n-Dr?l=ug[a-n+Dr-1]:a===0&&(l=0),t.push(l);const u=1/(o-2),c=-u,h=1+u,f=[c,c,h,c,h,h,c,c,h,h,c,h],p=6,g=6,v=3,m=2,d=1,_=new Float32Array(v*g*p),x=new Float32Array(m*g*p),y=new Float32Array(d*g*p);for(let C=0;C<p;C++){const w=C%3*2/3-1,S=C>2?0:-1,T=[w,S,0,w+2/3,S,0,w+2/3,S+1,0,w,S,0,w+2/3,S+1,0,w,S+1,0];_.set(T,v*g*C),x.set(f,m*g*C);const D=[C,C,C,C,C,C];y.set(D,d*g*C)}const E=new pr;E.setAttribute("position",new Ui(_,v)),E.setAttribute("uv",new Ui(x,m)),E.setAttribute("faceIndex",new Ui(y,d)),i.push(new Oi(E,null)),r>Dr&&r--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function dg(n,e,t){const i=new Ii(n,e,t);return i.texture.mapping=Ac,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ea(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function PA(n,e,t){return new vi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:CA,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Rc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:tr,depthTest:!1,depthWrite:!1})}function DA(n,e,t){const i=new Float32Array(_s),r=new X(0,1,0);return new vi({name:"SphericalGaussianBlur",defines:{n:_s,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Rc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:tr,depthTest:!1,depthWrite:!1})}function hg(){return new vi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Rc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:tr,depthTest:!1,depthWrite:!1})}function pg(){return new vi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Rc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:tr,depthTest:!1,depthWrite:!1})}function Rc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class Bx extends Ii{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Ix(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new ml(5,5,5),s=new vi({name:"CubemapFromEquirect",uniforms:Ba(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:En,blending:tr});s.uniforms.tEquirect.value=t;const a=new Oi(r,s),o=t.minFilter;return t.minFilter===Ss&&(t.minFilter=on),new O1(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}function LA(n){let e=new WeakMap,t=new WeakMap,i=null;function r(f,p=!1){return f==null?null:p?a(f):s(f)}function s(f){if(f&&f.isTexture){const p=f.mapping;if(p===lf||p===uf)if(e.has(f)){const g=e.get(f).texture;return o(g,f.mapping)}else{const g=f.image;if(g&&g.height>0){const v=new Bx(g.height);return v.fromEquirectangularTexture(n,f),e.set(f,v),f.addEventListener("dispose",u),o(v.texture,f.mapping)}else return null}}return f}function a(f){if(f&&f.isTexture){const p=f.mapping,g=p===lf||p===uf,v=p===Is||p===Fa;if(g||v){let m=t.get(f);const d=m!==void 0?m.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==d)return i===null&&(i=new fg(n)),m=g?i.fromEquirectangular(f,m):i.fromCubemap(f,m),m.texture.pmremVersion=f.pmremVersion,t.set(f,m),m.texture;if(m!==void 0)return m.texture;{const _=f.image;return g&&_&&_.height>0||v&&_&&l(_)?(i===null&&(i=new fg(n)),m=g?i.fromEquirectangular(f):i.fromCubemap(f),m.texture.pmremVersion=f.pmremVersion,t.set(f,m),f.addEventListener("dispose",c),m.texture):null}}}return f}function o(f,p){return p===lf?f.mapping=Is:p===uf&&(f.mapping=Fa),f}function l(f){let p=0;const g=6;for(let v=0;v<g;v++)f[v]!==void 0&&p++;return p===g}function u(f){const p=f.target;p.removeEventListener("dispose",u);const g=e.get(p);g!==void 0&&(e.delete(p),g.dispose())}function c(f){const p=f.target;p.removeEventListener("dispose",c);const g=t.get(p);g!==void 0&&(t.delete(p),g.dispose())}function h(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:h}}function NA(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const r=n.getExtension(i);return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&nc("WebGLRenderer: "+i+" extension not supported."),r}}}function IA(n,e,t,i){const r={},s=new WeakMap;function a(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",a),delete r[f.id];const p=s.get(f);p&&(e.remove(p),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(h,f){return r[f.id]===!0||(f.addEventListener("dispose",a),r[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const p in f)e.update(f[p],n.ARRAY_BUFFER)}function u(h){const f=[],p=h.index,g=h.attributes.position;let v=0;if(g===void 0)return;if(p!==null){const _=p.array;v=p.version;for(let x=0,y=_.length;x<y;x+=3){const E=_[x+0],C=_[x+1],w=_[x+2];f.push(E,C,C,w,w,E)}}else{const _=g.array;v=g.version;for(let x=0,y=_.length/3-1;x<y;x+=3){const E=x+0,C=x+1,w=x+2;f.push(E,C,C,w,w,E)}}const m=new(g.count>=65535?Dx:Px)(f,1);m.version=v;const d=s.get(h);d&&e.remove(d),s.set(h,m)}function c(h){const f=s.get(h);if(f){const p=h.index;p!==null&&f.version<p.version&&u(h)}else u(h);return s.get(h)}return{get:o,update:l,getWireframeAttribute:c}}function UA(n,e,t){let i;function r(f){i=f}let s,a;function o(f){s=f.type,a=f.bytesPerElement}function l(f,p){n.drawElements(i,p,s,f*a),t.update(p,i,1)}function u(f,p,g){g!==0&&(n.drawElementsInstanced(i,p,s,f*a,g),t.update(p,i,g))}function c(f,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,f,0,g);let m=0;for(let d=0;d<g;d++)m+=p[d];t.update(m,i,1)}function h(f,p,g,v){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<f.length;d++)u(f[d]/a,p[d],v[d]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,f,0,v,0,g);let d=0;for(let _=0;_<g;_++)d+=p[_]*v[_];t.update(d,i,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=u,this.renderMultiDraw=c,this.renderMultiDrawInstances=h}function FA(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:Qe("WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function OA(n,e,t){const i=new WeakMap,r=new Lt;function s(a,o,l){const u=a.morphTargetInfluences,c=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=c!==void 0?c.length:0;let f=i.get(o);if(f===void 0||f.count!==h){let D=function(){S.dispose(),i.delete(o),o.removeEventListener("dispose",D)};var p=D;f!==void 0&&f.texture.dispose();const g=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,d=o.morphAttributes.position||[],_=o.morphAttributes.normal||[],x=o.morphAttributes.color||[];let y=0;g===!0&&(y=1),v===!0&&(y=2),m===!0&&(y=3);let E=o.attributes.position.count*y,C=1;E>e.maxTextureSize&&(C=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const w=new Float32Array(E*C*4*h),S=new Cx(w,E,C,h);S.type=Ri,S.needsUpdate=!0;const T=y*4;for(let b=0;b<h;b++){const V=d[b],B=_[b],O=x[b],L=E*C*4*b;for(let z=0;z<V.count;z++){const N=z*T;g===!0&&(r.fromBufferAttribute(V,z),w[L+N+0]=r.x,w[L+N+1]=r.y,w[L+N+2]=r.z,w[L+N+3]=0),v===!0&&(r.fromBufferAttribute(B,z),w[L+N+4]=r.x,w[L+N+5]=r.y,w[L+N+6]=r.z,w[L+N+7]=0),m===!0&&(r.fromBufferAttribute(O,z),w[L+N+8]=r.x,w[L+N+9]=r.y,w[L+N+10]=r.z,w[L+N+11]=O.itemSize===4?r.w:1)}}f={count:h,texture:S,size:new je(E,C)},i.set(o,f),o.addEventListener("dispose",D)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let g=0;for(let m=0;m<u.length;m++)g+=u[m];const v=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",v),l.getUniforms().setValue(n,"morphTargetInfluences",u)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:s}}function kA(n,e,t,i,r){let s=new WeakMap;function a(u){const c=r.render.frame,h=u.geometry,f=e.get(u,h);if(s.get(f)!==c&&(e.update(f),s.set(f,c)),u.isInstancedMesh&&(u.hasEventListener("dispose",l)===!1&&u.addEventListener("dispose",l),s.get(u)!==c&&(t.update(u.instanceMatrix,n.ARRAY_BUFFER),u.instanceColor!==null&&t.update(u.instanceColor,n.ARRAY_BUFFER),s.set(u,c))),u.isSkinnedMesh){const p=u.skeleton;s.get(p)!==c&&(p.update(),s.set(p,c))}return f}function o(){s=new WeakMap}function l(u){const c=u.target;c.removeEventListener("dispose",l),i.releaseStatesOfObject(c),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:a,dispose:o}}const BA={[fx]:"LINEAR_TONE_MAPPING",[dx]:"REINHARD_TONE_MAPPING",[hx]:"CINEON_TONE_MAPPING",[px]:"ACES_FILMIC_TONE_MAPPING",[_x]:"AGX_TONE_MAPPING",[gx]:"NEUTRAL_TONE_MAPPING",[mx]:"CUSTOM_TONE_MAPPING"};function zA(n,e,t,i,r){const s=new Ii(e,t,{type:n,depthBuffer:i,stencilBuffer:r}),a=new Ii(e,t,{type:lr,depthBuffer:!1,stencilBuffer:!1}),o=new pr;o.setAttribute("position",new ir([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new ir([0,2,0,0,2,0],2));const l=new I1({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new Oi(o,l),c=new em(-1,1,1,-1,0,1);let h=null,f=null,p=!1,g,v=null,m=[],d=!1;this.setSize=function(_,x){s.setSize(_,x),a.setSize(_,x);for(let y=0;y<m.length;y++){const E=m[y];E.setSize&&E.setSize(_,x)}},this.setEffects=function(_){m=_,d=m.length>0&&m[0].isRenderPass===!0;const x=s.width,y=s.height;for(let E=0;E<m.length;E++){const C=m[E];C.setSize&&C.setSize(x,y)}},this.begin=function(_,x){if(p||_.toneMapping===Ni&&m.length===0)return!1;if(v=x,x!==null){const y=x.width,E=x.height;(s.width!==y||s.height!==E)&&this.setSize(y,E)}return d===!1&&_.setRenderTarget(s),g=_.toneMapping,_.toneMapping=Ni,!0},this.hasRenderPass=function(){return d},this.end=function(_,x){_.toneMapping=g,p=!0;let y=s,E=a;for(let C=0;C<m.length;C++){const w=m[C];if(w.enabled!==!1&&(w.render(_,E,y,x),w.needsSwap!==!1)){const S=y;y=E,E=S}}if(h!==_.outputColorSpace||f!==_.toneMapping){h=_.outputColorSpace,f=_.toneMapping,l.defines={},qe.getTransfer(h)===it&&(l.defines.SRGB_TRANSFER="");const C=BA[f];C&&(l.defines[C]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=y.texture,_.setRenderTarget(v),_.render(u,c),v=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){s.dispose(),a.dispose(),o.dispose(),l.dispose()}}const zx=new hn,Nh=new Jo(1,1),Vx=new Cx,Gx=new c1,Hx=new Ix,mg=[],_g=[],gg=new Float32Array(16),vg=new Float32Array(9),xg=new Float32Array(4);function Ka(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=mg[r];if(s===void 0&&(s=new Float32Array(r),mg[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function zt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Vt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function bc(n,e){let t=_g[e];t===void 0&&(t=new Int32Array(e),_g[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function VA(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function GA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zt(t,e))return;n.uniform2fv(this.addr,e),Vt(t,e)}}function HA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(zt(t,e))return;n.uniform3fv(this.addr,e),Vt(t,e)}}function WA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zt(t,e))return;n.uniform4fv(this.addr,e),Vt(t,e)}}function XA(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(zt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Vt(t,e)}else{if(zt(t,i))return;xg.set(i),n.uniformMatrix2fv(this.addr,!1,xg),Vt(t,i)}}function YA(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(zt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Vt(t,e)}else{if(zt(t,i))return;vg.set(i),n.uniformMatrix3fv(this.addr,!1,vg),Vt(t,i)}}function jA(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(zt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Vt(t,e)}else{if(zt(t,i))return;gg.set(i),n.uniformMatrix4fv(this.addr,!1,gg),Vt(t,i)}}function qA(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function $A(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zt(t,e))return;n.uniform2iv(this.addr,e),Vt(t,e)}}function KA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(zt(t,e))return;n.uniform3iv(this.addr,e),Vt(t,e)}}function ZA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zt(t,e))return;n.uniform4iv(this.addr,e),Vt(t,e)}}function QA(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function JA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zt(t,e))return;n.uniform2uiv(this.addr,e),Vt(t,e)}}function eC(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(zt(t,e))return;n.uniform3uiv(this.addr,e),Vt(t,e)}}function tC(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zt(t,e))return;n.uniform4uiv(this.addr,e),Vt(t,e)}}function nC(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Nh.compareFunction=t.isReversedDepthBuffer()?Zp:Kp,s=Nh):s=zx,t.setTexture2D(e||s,r)}function iC(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Gx,r)}function rC(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Hx,r)}function sC(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Vx,r)}function aC(n){switch(n){case 5126:return VA;case 35664:return GA;case 35665:return HA;case 35666:return WA;case 35674:return XA;case 35675:return YA;case 35676:return jA;case 5124:case 35670:return qA;case 35667:case 35671:return $A;case 35668:case 35672:return KA;case 35669:case 35673:return ZA;case 5125:return QA;case 36294:return JA;case 36295:return eC;case 36296:return tC;case 35678:case 36198:case 36298:case 36306:case 35682:return nC;case 35679:case 36299:case 36307:return iC;case 35680:case 36300:case 36308:case 36293:return rC;case 36289:case 36303:case 36311:case 36292:return sC}}function oC(n,e){n.uniform1fv(this.addr,e)}function lC(n,e){const t=Ka(e,this.size,2);n.uniform2fv(this.addr,t)}function uC(n,e){const t=Ka(e,this.size,3);n.uniform3fv(this.addr,t)}function cC(n,e){const t=Ka(e,this.size,4);n.uniform4fv(this.addr,t)}function fC(n,e){const t=Ka(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function dC(n,e){const t=Ka(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function hC(n,e){const t=Ka(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function pC(n,e){n.uniform1iv(this.addr,e)}function mC(n,e){n.uniform2iv(this.addr,e)}function _C(n,e){n.uniform3iv(this.addr,e)}function gC(n,e){n.uniform4iv(this.addr,e)}function vC(n,e){n.uniform1uiv(this.addr,e)}function xC(n,e){n.uniform2uiv(this.addr,e)}function SC(n,e){n.uniform3uiv(this.addr,e)}function yC(n,e){n.uniform4uiv(this.addr,e)}function MC(n,e,t){const i=this.cache,r=e.length,s=bc(t,r);zt(i,s)||(n.uniform1iv(this.addr,s),Vt(i,s));let a;this.type===n.SAMPLER_2D_SHADOW?a=Nh:a=zx;for(let o=0;o!==r;++o)t.setTexture2D(e[o]||a,s[o])}function EC(n,e,t){const i=this.cache,r=e.length,s=bc(t,r);zt(i,s)||(n.uniform1iv(this.addr,s),Vt(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Gx,s[a])}function TC(n,e,t){const i=this.cache,r=e.length,s=bc(t,r);zt(i,s)||(n.uniform1iv(this.addr,s),Vt(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||Hx,s[a])}function wC(n,e,t){const i=this.cache,r=e.length,s=bc(t,r);zt(i,s)||(n.uniform1iv(this.addr,s),Vt(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Vx,s[a])}function AC(n){switch(n){case 5126:return oC;case 35664:return lC;case 35665:return uC;case 35666:return cC;case 35674:return fC;case 35675:return dC;case 35676:return hC;case 5124:case 35670:return pC;case 35667:case 35671:return mC;case 35668:case 35672:return _C;case 35669:case 35673:return gC;case 5125:return vC;case 36294:return xC;case 36295:return SC;case 36296:return yC;case 35678:case 36198:case 36298:case 36306:case 35682:return MC;case 35679:case 36299:case 36307:return EC;case 35680:case 36300:case 36308:case 36293:return TC;case 36289:case 36303:case 36311:case 36292:return wC}}class CC{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=aC(t.type)}}class RC{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=AC(t.type)}}class bC{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const Bf=/(\w+)(\])?(\[|\.)?/g;function Sg(n,e){n.seq.push(e),n.map[e.id]=e}function PC(n,e,t){const i=n.name,r=i.length;for(Bf.lastIndex=0;;){const s=Bf.exec(i),a=Bf.lastIndex;let o=s[1];const l=s[2]==="]",u=s[3];if(l&&(o=o|0),u===void 0||u==="["&&a+2===r){Sg(t,u===void 0?new CC(o,n,e):new RC(o,n,e));break}else{let h=t.map[o];h===void 0&&(h=new bC(o),Sg(t,h)),t=h}}}class wu{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);PC(o,l,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function yg(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const DC=37297;let LC=0;function NC(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const Mg=new ze;function IC(n){qe._getMatrix(Mg,qe.workingColorSpace,n);const e=`mat3( ${Mg.elements.map(t=>t.toFixed(4))} )`;switch(qe.getTransfer(n)){case Ju:return[e,"LinearTransferOETF"];case it:return[e,"sRGBTransferOETF"];default:return Ne("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Eg(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+NC(n.getShaderSource(e),o)}else return s}function UC(n,e){const t=IC(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const FC={[fx]:"Linear",[dx]:"Reinhard",[hx]:"Cineon",[px]:"ACESFilmic",[_x]:"AgX",[gx]:"Neutral",[mx]:"Custom"};function OC(n,e){const t=FC[e];return t===void 0?(Ne("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const su=new X;function kC(){qe.getLuminanceCoefficients(su);const n=su.x.toFixed(4),e=su.y.toFixed(4),t=su.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function BC(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(xo).join(`
`)}function zC(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function VC(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function xo(n){return n!==""}function Tg(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function wg(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const GC=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ih(n){return n.replace(GC,WC)}const HC=new Map;function WC(n,e){let t=Ve[e];if(t===void 0){const i=HC.get(e);if(i!==void 0)t=Ve[i],Ne('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Ih(t)}const XC=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ag(n){return n.replace(XC,YC)}function YC(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Cg(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const jC={[Su]:"SHADOWMAP_TYPE_PCF",[vo]:"SHADOWMAP_TYPE_VSM"};function qC(n){return jC[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const $C={[Is]:"ENVMAP_TYPE_CUBE",[Fa]:"ENVMAP_TYPE_CUBE",[Ac]:"ENVMAP_TYPE_CUBE_UV"};function KC(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":$C[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const ZC={[Fa]:"ENVMAP_MODE_REFRACTION"};function QC(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":ZC[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const JC={[cx]:"ENVMAP_BLENDING_MULTIPLY",[GE]:"ENVMAP_BLENDING_MIX",[HE]:"ENVMAP_BLENDING_ADD"};function eR(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":JC[n.combine]||"ENVMAP_BLENDING_NONE"}function tR(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function nR(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=qC(t),u=KC(t),c=QC(t),h=eR(t),f=tR(t),p=BC(t),g=zC(s),v=r.createProgram();let m,d,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(xo).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(xo).join(`
`),d.length>0&&(d+=`
`)):(m=[Cg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(xo).join(`
`),d=[Cg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ni?"#define TONE_MAPPING":"",t.toneMapping!==Ni?Ve.tonemapping_pars_fragment:"",t.toneMapping!==Ni?OC("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ve.colorspace_pars_fragment,UC("linearToOutputTexel",t.outputColorSpace),kC(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(xo).join(`
`)),a=Ih(a),a=Tg(a,t),a=wg(a,t),o=Ih(o),o=Tg(o,t),o=wg(o,t),a=Ag(a),o=Ag(o),t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",t.glslVersion===H_?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===H_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const x=_+m+a,y=_+d+o,E=yg(r,r.VERTEX_SHADER,x),C=yg(r,r.FRAGMENT_SHADER,y);r.attachShader(v,E),r.attachShader(v,C),t.index0AttributeName!==void 0?r.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function w(b){if(n.debug.checkShaderErrors){const V=r.getProgramInfoLog(v)||"",B=r.getShaderInfoLog(E)||"",O=r.getShaderInfoLog(C)||"",L=V.trim(),z=B.trim(),N=O.trim();let U=!0,H=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(U=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,v,E,C);else{const Z=Eg(r,E,"vertex"),ee=Eg(r,C,"fragment");Qe("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+b.name+`
Material Type: `+b.type+`

Program Info Log: `+L+`
`+Z+`
`+ee)}else L!==""?Ne("WebGLProgram: Program Info Log:",L):(z===""||N==="")&&(H=!1);H&&(b.diagnostics={runnable:U,programLog:L,vertexShader:{log:z,prefix:m},fragmentShader:{log:N,prefix:d}})}r.deleteShader(E),r.deleteShader(C),S=new wu(r,v),T=VC(r,v)}let S;this.getUniforms=function(){return S===void 0&&w(this),S};let T;this.getAttributes=function(){return T===void 0&&w(this),T};let D=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=r.getProgramParameter(v,DC)),D},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=LC++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=E,this.fragmentShader=C,this}let iR=0;class rR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new sR(e),t.set(e,i)),i}}class sR{constructor(e){this.id=iR++,this.code=e,this.usedTimes=0}}function aR(n,e,t,i,r,s){const a=new Rx,o=new rR,l=new Set,u=[],c=new Map,h=i.logarithmicDepthBuffer;let f=i.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(S){return l.add(S),S===0?"uv":`uv${S}`}function v(S,T,D,b,V){const B=b.fog,O=V.geometry,L=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?b.environment:null,z=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap,N=e.get(S.envMap||L,z),U=N&&N.mapping===Ac?N.image.height:null,H=p[S.type];S.precision!==null&&(f=i.getMaxPrecision(S.precision),f!==S.precision&&Ne("WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));const Z=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,ee=Z!==void 0?Z.length:0;let J=0;O.morphAttributes.position!==void 0&&(J=1),O.morphAttributes.normal!==void 0&&(J=2),O.morphAttributes.color!==void 0&&(J=3);let Pe,Le,Fe,j;if(H){const nt=wi[H];Pe=nt.vertexShader,Le=nt.fragmentShader}else Pe=S.vertexShader,Le=S.fragmentShader,o.update(S),Fe=o.getVertexShaderID(S),j=o.getFragmentShaderID(S);const re=n.getRenderTarget(),oe=n.state.buffers.depth.getReversed(),Ie=V.isInstancedMesh===!0,we=V.isBatchedMesh===!0,Ae=!!S.map,pt=!!S.matcap,Oe=!!N,Ke=!!S.aoMap,tt=!!S.lightMap,Be=!!S.bumpMap,xt=!!S.normalMap,P=!!S.displacementMap,Nt=!!S.emissiveMap,et=!!S.metalnessMap,ft=!!S.roughnessMap,Ee=S.anisotropy>0,R=S.clearcoat>0,M=S.dispersion>0,F=S.iridescence>0,K=S.sheen>0,Q=S.transmission>0,$=Ee&&!!S.anisotropyMap,ve=R&&!!S.clearcoatMap,le=R&&!!S.clearcoatNormalMap,be=R&&!!S.clearcoatRoughnessMap,De=F&&!!S.iridescenceMap,ne=F&&!!S.iridescenceThicknessMap,se=K&&!!S.sheenColorMap,xe=K&&!!S.sheenRoughnessMap,ye=!!S.specularMap,pe=!!S.specularColorMap,Ge=!!S.specularIntensityMap,I=Q&&!!S.transmissionMap,ue=Q&&!!S.thicknessMap,ae=!!S.gradientMap,ge=!!S.alphaMap,ie=S.alphaTest>0,q=!!S.alphaHash,Se=!!S.extensions;let Ue=Ni;S.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&(Ue=n.toneMapping);const dt={shaderID:H,shaderType:S.type,shaderName:S.name,vertexShader:Pe,fragmentShader:Le,defines:S.defines,customVertexShaderID:Fe,customFragmentShaderID:j,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,batching:we,batchingColor:we&&V._colorsTexture!==null,instancing:Ie,instancingColor:Ie&&V.instanceColor!==null,instancingMorph:Ie&&V.morphTexture!==null,outputColorSpace:re===null?n.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:ka,alphaToCoverage:!!S.alphaToCoverage,map:Ae,matcap:pt,envMap:Oe,envMapMode:Oe&&N.mapping,envMapCubeUVHeight:U,aoMap:Ke,lightMap:tt,bumpMap:Be,normalMap:xt,displacementMap:P,emissiveMap:Nt,normalMapObjectSpace:xt&&S.normalMapType===jE,normalMapTangentSpace:xt&&S.normalMapType===YE,metalnessMap:et,roughnessMap:ft,anisotropy:Ee,anisotropyMap:$,clearcoat:R,clearcoatMap:ve,clearcoatNormalMap:le,clearcoatRoughnessMap:be,dispersion:M,iridescence:F,iridescenceMap:De,iridescenceThicknessMap:ne,sheen:K,sheenColorMap:se,sheenRoughnessMap:xe,specularMap:ye,specularColorMap:pe,specularIntensityMap:Ge,transmission:Q,transmissionMap:I,thicknessMap:ue,gradientMap:ae,opaque:S.transparent===!1&&S.blending===Ea&&S.alphaToCoverage===!1,alphaMap:ge,alphaTest:ie,alphaHash:q,combine:S.combine,mapUv:Ae&&g(S.map.channel),aoMapUv:Ke&&g(S.aoMap.channel),lightMapUv:tt&&g(S.lightMap.channel),bumpMapUv:Be&&g(S.bumpMap.channel),normalMapUv:xt&&g(S.normalMap.channel),displacementMapUv:P&&g(S.displacementMap.channel),emissiveMapUv:Nt&&g(S.emissiveMap.channel),metalnessMapUv:et&&g(S.metalnessMap.channel),roughnessMapUv:ft&&g(S.roughnessMap.channel),anisotropyMapUv:$&&g(S.anisotropyMap.channel),clearcoatMapUv:ve&&g(S.clearcoatMap.channel),clearcoatNormalMapUv:le&&g(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:be&&g(S.clearcoatRoughnessMap.channel),iridescenceMapUv:De&&g(S.iridescenceMap.channel),iridescenceThicknessMapUv:ne&&g(S.iridescenceThicknessMap.channel),sheenColorMapUv:se&&g(S.sheenColorMap.channel),sheenRoughnessMapUv:xe&&g(S.sheenRoughnessMap.channel),specularMapUv:ye&&g(S.specularMap.channel),specularColorMapUv:pe&&g(S.specularColorMap.channel),specularIntensityMapUv:Ge&&g(S.specularIntensityMap.channel),transmissionMapUv:I&&g(S.transmissionMap.channel),thicknessMapUv:ue&&g(S.thicknessMap.channel),alphaMapUv:ge&&g(S.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(xt||Ee),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!O.attributes.uv&&(Ae||ge),fog:!!B,useFog:S.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:S.wireframe===!1&&(S.flatShading===!0||O.attributes.normal===void 0&&xt===!1&&(S.isMeshLambertMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isMeshPhysicalMaterial)),sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:oe,skinning:V.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:ee,morphTextureStride:J,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&D.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ue,decodeVideoTexture:Ae&&S.map.isVideoTexture===!0&&qe.getTransfer(S.map.colorSpace)===it,decodeVideoTextureEmissive:Nt&&S.emissiveMap.isVideoTexture===!0&&qe.getTransfer(S.emissiveMap.colorSpace)===it,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Ki,flipSided:S.side===En,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Se&&S.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Se&&S.extensions.multiDraw===!0||we)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return dt.vertexUv1s=l.has(1),dt.vertexUv2s=l.has(2),dt.vertexUv3s=l.has(3),l.clear(),dt}function m(S){const T=[];if(S.shaderID?T.push(S.shaderID):(T.push(S.customVertexShaderID),T.push(S.customFragmentShaderID)),S.defines!==void 0)for(const D in S.defines)T.push(D),T.push(S.defines[D]);return S.isRawShaderMaterial===!1&&(d(T,S),_(T,S),T.push(n.outputColorSpace)),T.push(S.customProgramCacheKey),T.join()}function d(S,T){S.push(T.precision),S.push(T.outputColorSpace),S.push(T.envMapMode),S.push(T.envMapCubeUVHeight),S.push(T.mapUv),S.push(T.alphaMapUv),S.push(T.lightMapUv),S.push(T.aoMapUv),S.push(T.bumpMapUv),S.push(T.normalMapUv),S.push(T.displacementMapUv),S.push(T.emissiveMapUv),S.push(T.metalnessMapUv),S.push(T.roughnessMapUv),S.push(T.anisotropyMapUv),S.push(T.clearcoatMapUv),S.push(T.clearcoatNormalMapUv),S.push(T.clearcoatRoughnessMapUv),S.push(T.iridescenceMapUv),S.push(T.iridescenceThicknessMapUv),S.push(T.sheenColorMapUv),S.push(T.sheenRoughnessMapUv),S.push(T.specularMapUv),S.push(T.specularColorMapUv),S.push(T.specularIntensityMapUv),S.push(T.transmissionMapUv),S.push(T.thicknessMapUv),S.push(T.combine),S.push(T.fogExp2),S.push(T.sizeAttenuation),S.push(T.morphTargetsCount),S.push(T.morphAttributeCount),S.push(T.numDirLights),S.push(T.numPointLights),S.push(T.numSpotLights),S.push(T.numSpotLightMaps),S.push(T.numHemiLights),S.push(T.numRectAreaLights),S.push(T.numDirLightShadows),S.push(T.numPointLightShadows),S.push(T.numSpotLightShadows),S.push(T.numSpotLightShadowsWithMaps),S.push(T.numLightProbes),S.push(T.shadowMapType),S.push(T.toneMapping),S.push(T.numClippingPlanes),S.push(T.numClipIntersection),S.push(T.depthPacking)}function _(S,T){a.disableAll(),T.instancing&&a.enable(0),T.instancingColor&&a.enable(1),T.instancingMorph&&a.enable(2),T.matcap&&a.enable(3),T.envMap&&a.enable(4),T.normalMapObjectSpace&&a.enable(5),T.normalMapTangentSpace&&a.enable(6),T.clearcoat&&a.enable(7),T.iridescence&&a.enable(8),T.alphaTest&&a.enable(9),T.vertexColors&&a.enable(10),T.vertexAlphas&&a.enable(11),T.vertexUv1s&&a.enable(12),T.vertexUv2s&&a.enable(13),T.vertexUv3s&&a.enable(14),T.vertexTangents&&a.enable(15),T.anisotropy&&a.enable(16),T.alphaHash&&a.enable(17),T.batching&&a.enable(18),T.dispersion&&a.enable(19),T.batchingColor&&a.enable(20),T.gradientMap&&a.enable(21),S.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),S.push(a.mask)}function x(S){const T=p[S.type];let D;if(T){const b=wi[T];D=D1.clone(b.uniforms)}else D=S.uniforms;return D}function y(S,T){let D=c.get(T);return D!==void 0?++D.usedTimes:(D=new nR(n,T,S,r),u.push(D),c.set(T,D)),D}function E(S){if(--S.usedTimes===0){const T=u.indexOf(S);u[T]=u[u.length-1],u.pop(),c.delete(S.cacheKey),S.destroy()}}function C(S){o.remove(S)}function w(){o.dispose()}return{getParameters:v,getProgramCacheKey:m,getUniforms:x,acquireProgram:y,releaseProgram:E,releaseShaderCache:C,programs:u,dispose:w}}function oR(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function r(a,o,l){n.get(a)[o]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function lR(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function Rg(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function bg(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(f){let p=0;return f.isInstancedMesh&&(p+=2),f.isSkinnedMesh&&(p+=1),p}function o(f,p,g,v,m,d){let _=n[e];return _===void 0?(_={id:f.id,object:f,geometry:p,material:g,materialVariant:a(f),groupOrder:v,renderOrder:f.renderOrder,z:m,group:d},n[e]=_):(_.id=f.id,_.object=f,_.geometry=p,_.material=g,_.materialVariant=a(f),_.groupOrder=v,_.renderOrder=f.renderOrder,_.z=m,_.group=d),e++,_}function l(f,p,g,v,m,d){const _=o(f,p,g,v,m,d);g.transmission>0?i.push(_):g.transparent===!0?r.push(_):t.push(_)}function u(f,p,g,v,m,d){const _=o(f,p,g,v,m,d);g.transmission>0?i.unshift(_):g.transparent===!0?r.unshift(_):t.unshift(_)}function c(f,p){t.length>1&&t.sort(f||lR),i.length>1&&i.sort(p||Rg),r.length>1&&r.sort(p||Rg)}function h(){for(let f=e,p=n.length;f<p;f++){const g=n[f];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:l,unshift:u,finish:h,sort:c}}function uR(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new bg,n.set(i,[a])):r>=s.length?(a=new bg,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function cR(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new X,color:new ot};break;case"SpotLight":t={position:new X,direction:new X,color:new ot,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new X,color:new ot,distance:0,decay:0};break;case"HemisphereLight":t={direction:new X,skyColor:new ot,groundColor:new ot};break;case"RectAreaLight":t={color:new ot,position:new X,halfWidth:new X,halfHeight:new X};break}return n[e.id]=t,t}}}function fR(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let dR=0;function hR(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function pR(n){const e=new cR,t=fR(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new X);const r=new X,s=new Ot,a=new Ot;function o(u){let c=0,h=0,f=0;for(let T=0;T<9;T++)i.probe[T].set(0,0,0);let p=0,g=0,v=0,m=0,d=0,_=0,x=0,y=0,E=0,C=0,w=0;u.sort(hR);for(let T=0,D=u.length;T<D;T++){const b=u[T],V=b.color,B=b.intensity,O=b.distance;let L=null;if(b.shadow&&b.shadow.map&&(b.shadow.map.texture.format===Oa?L=b.shadow.map.texture:L=b.shadow.map.depthTexture||b.shadow.map.texture),b.isAmbientLight)c+=V.r*B,h+=V.g*B,f+=V.b*B;else if(b.isLightProbe){for(let z=0;z<9;z++)i.probe[z].addScaledVector(b.sh.coefficients[z],B);w++}else if(b.isDirectionalLight){const z=e.get(b);if(z.color.copy(b.color).multiplyScalar(b.intensity),b.castShadow){const N=b.shadow,U=t.get(b);U.shadowIntensity=N.intensity,U.shadowBias=N.bias,U.shadowNormalBias=N.normalBias,U.shadowRadius=N.radius,U.shadowMapSize=N.mapSize,i.directionalShadow[p]=U,i.directionalShadowMap[p]=L,i.directionalShadowMatrix[p]=b.shadow.matrix,_++}i.directional[p]=z,p++}else if(b.isSpotLight){const z=e.get(b);z.position.setFromMatrixPosition(b.matrixWorld),z.color.copy(V).multiplyScalar(B),z.distance=O,z.coneCos=Math.cos(b.angle),z.penumbraCos=Math.cos(b.angle*(1-b.penumbra)),z.decay=b.decay,i.spot[v]=z;const N=b.shadow;if(b.map&&(i.spotLightMap[E]=b.map,E++,N.updateMatrices(b),b.castShadow&&C++),i.spotLightMatrix[v]=N.matrix,b.castShadow){const U=t.get(b);U.shadowIntensity=N.intensity,U.shadowBias=N.bias,U.shadowNormalBias=N.normalBias,U.shadowRadius=N.radius,U.shadowMapSize=N.mapSize,i.spotShadow[v]=U,i.spotShadowMap[v]=L,y++}v++}else if(b.isRectAreaLight){const z=e.get(b);z.color.copy(V).multiplyScalar(B),z.halfWidth.set(b.width*.5,0,0),z.halfHeight.set(0,b.height*.5,0),i.rectArea[m]=z,m++}else if(b.isPointLight){const z=e.get(b);if(z.color.copy(b.color).multiplyScalar(b.intensity),z.distance=b.distance,z.decay=b.decay,b.castShadow){const N=b.shadow,U=t.get(b);U.shadowIntensity=N.intensity,U.shadowBias=N.bias,U.shadowNormalBias=N.normalBias,U.shadowRadius=N.radius,U.shadowMapSize=N.mapSize,U.shadowCameraNear=N.camera.near,U.shadowCameraFar=N.camera.far,i.pointShadow[g]=U,i.pointShadowMap[g]=L,i.pointShadowMatrix[g]=b.shadow.matrix,x++}i.point[g]=z,g++}else if(b.isHemisphereLight){const z=e.get(b);z.skyColor.copy(b.color).multiplyScalar(B),z.groundColor.copy(b.groundColor).multiplyScalar(B),i.hemi[d]=z,d++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ce.LTC_FLOAT_1,i.rectAreaLTC2=ce.LTC_FLOAT_2):(i.rectAreaLTC1=ce.LTC_HALF_1,i.rectAreaLTC2=ce.LTC_HALF_2)),i.ambient[0]=c,i.ambient[1]=h,i.ambient[2]=f;const S=i.hash;(S.directionalLength!==p||S.pointLength!==g||S.spotLength!==v||S.rectAreaLength!==m||S.hemiLength!==d||S.numDirectionalShadows!==_||S.numPointShadows!==x||S.numSpotShadows!==y||S.numSpotMaps!==E||S.numLightProbes!==w)&&(i.directional.length=p,i.spot.length=v,i.rectArea.length=m,i.point.length=g,i.hemi.length=d,i.directionalShadow.length=_,i.directionalShadowMap.length=_,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=_,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=y+E-C,i.spotLightMap.length=E,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=w,S.directionalLength=p,S.pointLength=g,S.spotLength=v,S.rectAreaLength=m,S.hemiLength=d,S.numDirectionalShadows=_,S.numPointShadows=x,S.numSpotShadows=y,S.numSpotMaps=E,S.numLightProbes=w,i.version=dR++)}function l(u,c){let h=0,f=0,p=0,g=0,v=0;const m=c.matrixWorldInverse;for(let d=0,_=u.length;d<_;d++){const x=u[d];if(x.isDirectionalLight){const y=i.directional[h];y.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(m),h++}else if(x.isSpotLight){const y=i.spot[p];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(m),p++}else if(x.isRectAreaLight){const y=i.rectArea[g];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(m),a.identity(),s.copy(x.matrixWorld),s.premultiply(m),a.extractRotation(s),y.halfWidth.set(x.width*.5,0,0),y.halfHeight.set(0,x.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),g++}else if(x.isPointLight){const y=i.point[f];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(m),f++}else if(x.isHemisphereLight){const y=i.hemi[v];y.direction.setFromMatrixPosition(x.matrixWorld),y.direction.transformDirection(m),v++}}}return{setup:o,setupView:l,state:i}}function Pg(n){const e=new pR(n),t=[],i=[];function r(c){u.camera=c,t.length=0,i.length=0}function s(c){t.push(c)}function a(c){i.push(c)}function o(){e.setup(t)}function l(c){e.setupView(t,c)}const u={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:u,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function mR(n){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new Pg(n),e.set(r,[o])):s>=a.length?(o=new Pg(n),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const _R=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,gR=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,vR=[new X(1,0,0),new X(-1,0,0),new X(0,1,0),new X(0,-1,0),new X(0,0,1),new X(0,0,-1)],xR=[new X(0,-1,0),new X(0,-1,0),new X(0,0,1),new X(0,0,-1),new X(0,-1,0),new X(0,-1,0)],Dg=new Ot,fo=new X,zf=new X;function SR(n,e,t){let i=new Nx;const r=new je,s=new je,a=new Lt,o=new U1,l=new F1,u={},c=t.maxTextureSize,h={[jr]:En,[En]:jr,[Ki]:Ki},f=new vi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new je},radius:{value:4}},vertexShader:_R,fragmentShader:gR}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const g=new pr;g.setAttribute("position",new Ui(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Oi(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Su;let d=this.type;this.render=function(C,w,S){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;this.type===EE&&(Ne("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Su);const T=n.getRenderTarget(),D=n.getActiveCubeFace(),b=n.getActiveMipmapLevel(),V=n.state;V.setBlending(tr),V.buffers.depth.getReversed()===!0?V.buffers.color.setClear(0,0,0,0):V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const B=d!==this.type;B&&w.traverse(function(O){O.material&&(Array.isArray(O.material)?O.material.forEach(L=>L.needsUpdate=!0):O.material.needsUpdate=!0)});for(let O=0,L=C.length;O<L;O++){const z=C[O],N=z.shadow;if(N===void 0){Ne("WebGLShadowMap:",z,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;r.copy(N.mapSize);const U=N.getFrameExtents();r.multiply(U),s.copy(N.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(s.x=Math.floor(c/U.x),r.x=s.x*U.x,N.mapSize.x=s.x),r.y>c&&(s.y=Math.floor(c/U.y),r.y=s.y*U.y,N.mapSize.y=s.y));const H=n.state.buffers.depth.getReversed();if(N.camera._reversedDepth=H,N.map===null||B===!0){if(N.map!==null&&(N.map.depthTexture!==null&&(N.map.depthTexture.dispose(),N.map.depthTexture=null),N.map.dispose()),this.type===vo){if(z.isPointLight){Ne("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}N.map=new Ii(r.x,r.y,{format:Oa,type:lr,minFilter:on,magFilter:on,generateMipmaps:!1}),N.map.texture.name=z.name+".shadowMap",N.map.depthTexture=new Jo(r.x,r.y,Ri),N.map.depthTexture.name=z.name+".shadowMapDepth",N.map.depthTexture.format=ur,N.map.depthTexture.compareFunction=null,N.map.depthTexture.minFilter=$t,N.map.depthTexture.magFilter=$t}else z.isPointLight?(N.map=new Bx(r.x),N.map.depthTexture=new b1(r.x,Fi)):(N.map=new Ii(r.x,r.y),N.map.depthTexture=new Jo(r.x,r.y,Fi)),N.map.depthTexture.name=z.name+".shadowMap",N.map.depthTexture.format=ur,this.type===Su?(N.map.depthTexture.compareFunction=H?Zp:Kp,N.map.depthTexture.minFilter=on,N.map.depthTexture.magFilter=on):(N.map.depthTexture.compareFunction=null,N.map.depthTexture.minFilter=$t,N.map.depthTexture.magFilter=$t);N.camera.updateProjectionMatrix()}const Z=N.map.isWebGLCubeRenderTarget?6:1;for(let ee=0;ee<Z;ee++){if(N.map.isWebGLCubeRenderTarget)n.setRenderTarget(N.map,ee),n.clear();else{ee===0&&(n.setRenderTarget(N.map),n.clear());const J=N.getViewport(ee);a.set(s.x*J.x,s.y*J.y,s.x*J.z,s.y*J.w),V.viewport(a)}if(z.isPointLight){const J=N.camera,Pe=N.matrix,Le=z.distance||J.far;Le!==J.far&&(J.far=Le,J.updateProjectionMatrix()),fo.setFromMatrixPosition(z.matrixWorld),J.position.copy(fo),zf.copy(J.position),zf.add(vR[ee]),J.up.copy(xR[ee]),J.lookAt(zf),J.updateMatrixWorld(),Pe.makeTranslation(-fo.x,-fo.y,-fo.z),Dg.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),N._frustum.setFromProjectionMatrix(Dg,J.coordinateSystem,J.reversedDepth)}else N.updateMatrices(z);i=N.getFrustum(),y(w,S,N.camera,z,this.type)}N.isPointLightShadow!==!0&&this.type===vo&&_(N,S),N.needsUpdate=!1}d=this.type,m.needsUpdate=!1,n.setRenderTarget(T,D,b)};function _(C,w){const S=e.update(v);f.defines.VSM_SAMPLES!==C.blurSamples&&(f.defines.VSM_SAMPLES=C.blurSamples,p.defines.VSM_SAMPLES=C.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Ii(r.x,r.y,{format:Oa,type:lr})),f.uniforms.shadow_pass.value=C.map.depthTexture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,n.setRenderTarget(C.mapPass),n.clear(),n.renderBufferDirect(w,null,S,f,v,null),p.uniforms.shadow_pass.value=C.mapPass.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,n.setRenderTarget(C.map),n.clear(),n.renderBufferDirect(w,null,S,p,v,null)}function x(C,w,S,T){let D=null;const b=S.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(b!==void 0)D=b;else if(D=S.isPointLight===!0?l:o,n.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){const V=D.uuid,B=w.uuid;let O=u[V];O===void 0&&(O={},u[V]=O);let L=O[B];L===void 0&&(L=D.clone(),O[B]=L,w.addEventListener("dispose",E)),D=L}if(D.visible=w.visible,D.wireframe=w.wireframe,T===vo?D.side=w.shadowSide!==null?w.shadowSide:w.side:D.side=w.shadowSide!==null?w.shadowSide:h[w.side],D.alphaMap=w.alphaMap,D.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,D.map=w.map,D.clipShadows=w.clipShadows,D.clippingPlanes=w.clippingPlanes,D.clipIntersection=w.clipIntersection,D.displacementMap=w.displacementMap,D.displacementScale=w.displacementScale,D.displacementBias=w.displacementBias,D.wireframeLinewidth=w.wireframeLinewidth,D.linewidth=w.linewidth,S.isPointLight===!0&&D.isMeshDistanceMaterial===!0){const V=n.properties.get(D);V.light=S}return D}function y(C,w,S,T,D){if(C.visible===!1)return;if(C.layers.test(w.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&D===vo)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,C.matrixWorld);const B=e.update(C),O=C.material;if(Array.isArray(O)){const L=B.groups;for(let z=0,N=L.length;z<N;z++){const U=L[z],H=O[U.materialIndex];if(H&&H.visible){const Z=x(C,H,T,D);C.onBeforeShadow(n,C,w,S,B,Z,U),n.renderBufferDirect(S,null,B,Z,C,U),C.onAfterShadow(n,C,w,S,B,Z,U)}}}else if(O.visible){const L=x(C,O,T,D);C.onBeforeShadow(n,C,w,S,B,L,null),n.renderBufferDirect(S,null,B,L,C,null),C.onAfterShadow(n,C,w,S,B,L,null)}}const V=C.children;for(let B=0,O=V.length;B<O;B++)y(V[B],w,S,T,D)}function E(C){C.target.removeEventListener("dispose",E);for(const S in u){const T=u[S],D=C.target.uuid;D in T&&(T[D].dispose(),delete T[D])}}}function yR(n,e){function t(){let I=!1;const ue=new Lt;let ae=null;const ge=new Lt(0,0,0,0);return{setMask:function(ie){ae!==ie&&!I&&(n.colorMask(ie,ie,ie,ie),ae=ie)},setLocked:function(ie){I=ie},setClear:function(ie,q,Se,Ue,dt){dt===!0&&(ie*=Ue,q*=Ue,Se*=Ue),ue.set(ie,q,Se,Ue),ge.equals(ue)===!1&&(n.clearColor(ie,q,Se,Ue),ge.copy(ue))},reset:function(){I=!1,ae=null,ge.set(-1,0,0,0)}}}function i(){let I=!1,ue=!1,ae=null,ge=null,ie=null;return{setReversed:function(q){if(ue!==q){const Se=e.get("EXT_clip_control");q?Se.clipControlEXT(Se.LOWER_LEFT_EXT,Se.ZERO_TO_ONE_EXT):Se.clipControlEXT(Se.LOWER_LEFT_EXT,Se.NEGATIVE_ONE_TO_ONE_EXT),ue=q;const Ue=ie;ie=null,this.setClear(Ue)}},getReversed:function(){return ue},setTest:function(q){q?re(n.DEPTH_TEST):oe(n.DEPTH_TEST)},setMask:function(q){ae!==q&&!I&&(n.depthMask(q),ae=q)},setFunc:function(q){if(ue&&(q=i1[q]),ge!==q){switch(q){case Xd:n.depthFunc(n.NEVER);break;case Yd:n.depthFunc(n.ALWAYS);break;case jd:n.depthFunc(n.LESS);break;case Ua:n.depthFunc(n.LEQUAL);break;case qd:n.depthFunc(n.EQUAL);break;case $d:n.depthFunc(n.GEQUAL);break;case Kd:n.depthFunc(n.GREATER);break;case Zd:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ge=q}},setLocked:function(q){I=q},setClear:function(q){ie!==q&&(ie=q,ue&&(q=1-q),n.clearDepth(q))},reset:function(){I=!1,ae=null,ge=null,ie=null,ue=!1}}}function r(){let I=!1,ue=null,ae=null,ge=null,ie=null,q=null,Se=null,Ue=null,dt=null;return{setTest:function(nt){I||(nt?re(n.STENCIL_TEST):oe(n.STENCIL_TEST))},setMask:function(nt){ue!==nt&&!I&&(n.stencilMask(nt),ue=nt)},setFunc:function(nt,Bi,zi){(ae!==nt||ge!==Bi||ie!==zi)&&(n.stencilFunc(nt,Bi,zi),ae=nt,ge=Bi,ie=zi)},setOp:function(nt,Bi,zi){(q!==nt||Se!==Bi||Ue!==zi)&&(n.stencilOp(nt,Bi,zi),q=nt,Se=Bi,Ue=zi)},setLocked:function(nt){I=nt},setClear:function(nt){dt!==nt&&(n.clearStencil(nt),dt=nt)},reset:function(){I=!1,ue=null,ae=null,ge=null,ie=null,q=null,Se=null,Ue=null,dt=null}}}const s=new t,a=new i,o=new r,l=new WeakMap,u=new WeakMap;let c={},h={},f=new WeakMap,p=[],g=null,v=!1,m=null,d=null,_=null,x=null,y=null,E=null,C=null,w=new ot(0,0,0),S=0,T=!1,D=null,b=null,V=null,B=null,O=null;const L=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,N=0;const U=n.getParameter(n.VERSION);U.indexOf("WebGL")!==-1?(N=parseFloat(/^WebGL (\d)/.exec(U)[1]),z=N>=1):U.indexOf("OpenGL ES")!==-1&&(N=parseFloat(/^OpenGL ES (\d)/.exec(U)[1]),z=N>=2);let H=null,Z={};const ee=n.getParameter(n.SCISSOR_BOX),J=n.getParameter(n.VIEWPORT),Pe=new Lt().fromArray(ee),Le=new Lt().fromArray(J);function Fe(I,ue,ae,ge){const ie=new Uint8Array(4),q=n.createTexture();n.bindTexture(I,q),n.texParameteri(I,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(I,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Se=0;Se<ae;Se++)I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY?n.texImage3D(ue,0,n.RGBA,1,1,ge,0,n.RGBA,n.UNSIGNED_BYTE,ie):n.texImage2D(ue+Se,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ie);return q}const j={};j[n.TEXTURE_2D]=Fe(n.TEXTURE_2D,n.TEXTURE_2D,1),j[n.TEXTURE_CUBE_MAP]=Fe(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),j[n.TEXTURE_2D_ARRAY]=Fe(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),j[n.TEXTURE_3D]=Fe(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),re(n.DEPTH_TEST),a.setFunc(Ua),Be(!1),xt(O_),re(n.CULL_FACE),Ke(tr);function re(I){c[I]!==!0&&(n.enable(I),c[I]=!0)}function oe(I){c[I]!==!1&&(n.disable(I),c[I]=!1)}function Ie(I,ue){return h[I]!==ue?(n.bindFramebuffer(I,ue),h[I]=ue,I===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=ue),I===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=ue),!0):!1}function we(I,ue){let ae=p,ge=!1;if(I){ae=f.get(ue),ae===void 0&&(ae=[],f.set(ue,ae));const ie=I.textures;if(ae.length!==ie.length||ae[0]!==n.COLOR_ATTACHMENT0){for(let q=0,Se=ie.length;q<Se;q++)ae[q]=n.COLOR_ATTACHMENT0+q;ae.length=ie.length,ge=!0}}else ae[0]!==n.BACK&&(ae[0]=n.BACK,ge=!0);ge&&n.drawBuffers(ae)}function Ae(I){return g!==I?(n.useProgram(I),g=I,!0):!1}const pt={[ms]:n.FUNC_ADD,[wE]:n.FUNC_SUBTRACT,[AE]:n.FUNC_REVERSE_SUBTRACT};pt[CE]=n.MIN,pt[RE]=n.MAX;const Oe={[bE]:n.ZERO,[PE]:n.ONE,[DE]:n.SRC_COLOR,[Hd]:n.SRC_ALPHA,[OE]:n.SRC_ALPHA_SATURATE,[UE]:n.DST_COLOR,[NE]:n.DST_ALPHA,[LE]:n.ONE_MINUS_SRC_COLOR,[Wd]:n.ONE_MINUS_SRC_ALPHA,[FE]:n.ONE_MINUS_DST_COLOR,[IE]:n.ONE_MINUS_DST_ALPHA,[kE]:n.CONSTANT_COLOR,[BE]:n.ONE_MINUS_CONSTANT_COLOR,[zE]:n.CONSTANT_ALPHA,[VE]:n.ONE_MINUS_CONSTANT_ALPHA};function Ke(I,ue,ae,ge,ie,q,Se,Ue,dt,nt){if(I===tr){v===!0&&(oe(n.BLEND),v=!1);return}if(v===!1&&(re(n.BLEND),v=!0),I!==TE){if(I!==m||nt!==T){if((d!==ms||y!==ms)&&(n.blendEquation(n.FUNC_ADD),d=ms,y=ms),nt)switch(I){case Ea:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case k_:n.blendFunc(n.ONE,n.ONE);break;case B_:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case z_:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Qe("WebGLState: Invalid blending: ",I);break}else switch(I){case Ea:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case k_:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case B_:Qe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case z_:Qe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Qe("WebGLState: Invalid blending: ",I);break}_=null,x=null,E=null,C=null,w.set(0,0,0),S=0,m=I,T=nt}return}ie=ie||ue,q=q||ae,Se=Se||ge,(ue!==d||ie!==y)&&(n.blendEquationSeparate(pt[ue],pt[ie]),d=ue,y=ie),(ae!==_||ge!==x||q!==E||Se!==C)&&(n.blendFuncSeparate(Oe[ae],Oe[ge],Oe[q],Oe[Se]),_=ae,x=ge,E=q,C=Se),(Ue.equals(w)===!1||dt!==S)&&(n.blendColor(Ue.r,Ue.g,Ue.b,dt),w.copy(Ue),S=dt),m=I,T=!1}function tt(I,ue){I.side===Ki?oe(n.CULL_FACE):re(n.CULL_FACE);let ae=I.side===En;ue&&(ae=!ae),Be(ae),I.blending===Ea&&I.transparent===!1?Ke(tr):Ke(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),a.setFunc(I.depthFunc),a.setTest(I.depthTest),a.setMask(I.depthWrite),s.setMask(I.colorWrite);const ge=I.stencilWrite;o.setTest(ge),ge&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),Nt(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?re(n.SAMPLE_ALPHA_TO_COVERAGE):oe(n.SAMPLE_ALPHA_TO_COVERAGE)}function Be(I){D!==I&&(I?n.frontFace(n.CW):n.frontFace(n.CCW),D=I)}function xt(I){I!==yE?(re(n.CULL_FACE),I!==b&&(I===O_?n.cullFace(n.BACK):I===ME?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):oe(n.CULL_FACE),b=I}function P(I){I!==V&&(z&&n.lineWidth(I),V=I)}function Nt(I,ue,ae){I?(re(n.POLYGON_OFFSET_FILL),(B!==ue||O!==ae)&&(B=ue,O=ae,a.getReversed()&&(ue=-ue),n.polygonOffset(ue,ae))):oe(n.POLYGON_OFFSET_FILL)}function et(I){I?re(n.SCISSOR_TEST):oe(n.SCISSOR_TEST)}function ft(I){I===void 0&&(I=n.TEXTURE0+L-1),H!==I&&(n.activeTexture(I),H=I)}function Ee(I,ue,ae){ae===void 0&&(H===null?ae=n.TEXTURE0+L-1:ae=H);let ge=Z[ae];ge===void 0&&(ge={type:void 0,texture:void 0},Z[ae]=ge),(ge.type!==I||ge.texture!==ue)&&(H!==ae&&(n.activeTexture(ae),H=ae),n.bindTexture(I,ue||j[I]),ge.type=I,ge.texture=ue)}function R(){const I=Z[H];I!==void 0&&I.type!==void 0&&(n.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function M(){try{n.compressedTexImage2D(...arguments)}catch(I){Qe("WebGLState:",I)}}function F(){try{n.compressedTexImage3D(...arguments)}catch(I){Qe("WebGLState:",I)}}function K(){try{n.texSubImage2D(...arguments)}catch(I){Qe("WebGLState:",I)}}function Q(){try{n.texSubImage3D(...arguments)}catch(I){Qe("WebGLState:",I)}}function $(){try{n.compressedTexSubImage2D(...arguments)}catch(I){Qe("WebGLState:",I)}}function ve(){try{n.compressedTexSubImage3D(...arguments)}catch(I){Qe("WebGLState:",I)}}function le(){try{n.texStorage2D(...arguments)}catch(I){Qe("WebGLState:",I)}}function be(){try{n.texStorage3D(...arguments)}catch(I){Qe("WebGLState:",I)}}function De(){try{n.texImage2D(...arguments)}catch(I){Qe("WebGLState:",I)}}function ne(){try{n.texImage3D(...arguments)}catch(I){Qe("WebGLState:",I)}}function se(I){Pe.equals(I)===!1&&(n.scissor(I.x,I.y,I.z,I.w),Pe.copy(I))}function xe(I){Le.equals(I)===!1&&(n.viewport(I.x,I.y,I.z,I.w),Le.copy(I))}function ye(I,ue){let ae=u.get(ue);ae===void 0&&(ae=new WeakMap,u.set(ue,ae));let ge=ae.get(I);ge===void 0&&(ge=n.getUniformBlockIndex(ue,I.name),ae.set(I,ge))}function pe(I,ue){const ge=u.get(ue).get(I);l.get(ue)!==ge&&(n.uniformBlockBinding(ue,ge,I.__bindingPointIndex),l.set(ue,ge))}function Ge(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),c={},H=null,Z={},h={},f=new WeakMap,p=[],g=null,v=!1,m=null,d=null,_=null,x=null,y=null,E=null,C=null,w=new ot(0,0,0),S=0,T=!1,D=null,b=null,V=null,B=null,O=null,Pe.set(0,0,n.canvas.width,n.canvas.height),Le.set(0,0,n.canvas.width,n.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:re,disable:oe,bindFramebuffer:Ie,drawBuffers:we,useProgram:Ae,setBlending:Ke,setMaterial:tt,setFlipSided:Be,setCullFace:xt,setLineWidth:P,setPolygonOffset:Nt,setScissorTest:et,activeTexture:ft,bindTexture:Ee,unbindTexture:R,compressedTexImage2D:M,compressedTexImage3D:F,texImage2D:De,texImage3D:ne,updateUBOMapping:ye,uniformBlockBinding:pe,texStorage2D:le,texStorage3D:be,texSubImage2D:K,texSubImage3D:Q,compressedTexSubImage2D:$,compressedTexSubImage3D:ve,scissor:se,viewport:xe,reset:Ge}}function MR(n,e,t,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new je,c=new WeakMap;let h;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,M){return p?new OffscreenCanvas(R,M):tc("canvas")}function v(R,M,F){let K=1;const Q=Ee(R);if((Q.width>F||Q.height>F)&&(K=F/Math.max(Q.width,Q.height)),K<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const $=Math.floor(K*Q.width),ve=Math.floor(K*Q.height);h===void 0&&(h=g($,ve));const le=M?g($,ve):h;return le.width=$,le.height=ve,le.getContext("2d").drawImage(R,0,0,$,ve),Ne("WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+$+"x"+ve+")."),le}else return"data"in R&&Ne("WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),R;return R}function m(R){return R.generateMipmaps}function d(R){n.generateMipmap(R)}function _(R){return R.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?n.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function x(R,M,F,K,Q=!1){if(R!==null){if(n[R]!==void 0)return n[R];Ne("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let $=M;if(M===n.RED&&(F===n.FLOAT&&($=n.R32F),F===n.HALF_FLOAT&&($=n.R16F),F===n.UNSIGNED_BYTE&&($=n.R8)),M===n.RED_INTEGER&&(F===n.UNSIGNED_BYTE&&($=n.R8UI),F===n.UNSIGNED_SHORT&&($=n.R16UI),F===n.UNSIGNED_INT&&($=n.R32UI),F===n.BYTE&&($=n.R8I),F===n.SHORT&&($=n.R16I),F===n.INT&&($=n.R32I)),M===n.RG&&(F===n.FLOAT&&($=n.RG32F),F===n.HALF_FLOAT&&($=n.RG16F),F===n.UNSIGNED_BYTE&&($=n.RG8)),M===n.RG_INTEGER&&(F===n.UNSIGNED_BYTE&&($=n.RG8UI),F===n.UNSIGNED_SHORT&&($=n.RG16UI),F===n.UNSIGNED_INT&&($=n.RG32UI),F===n.BYTE&&($=n.RG8I),F===n.SHORT&&($=n.RG16I),F===n.INT&&($=n.RG32I)),M===n.RGB_INTEGER&&(F===n.UNSIGNED_BYTE&&($=n.RGB8UI),F===n.UNSIGNED_SHORT&&($=n.RGB16UI),F===n.UNSIGNED_INT&&($=n.RGB32UI),F===n.BYTE&&($=n.RGB8I),F===n.SHORT&&($=n.RGB16I),F===n.INT&&($=n.RGB32I)),M===n.RGBA_INTEGER&&(F===n.UNSIGNED_BYTE&&($=n.RGBA8UI),F===n.UNSIGNED_SHORT&&($=n.RGBA16UI),F===n.UNSIGNED_INT&&($=n.RGBA32UI),F===n.BYTE&&($=n.RGBA8I),F===n.SHORT&&($=n.RGBA16I),F===n.INT&&($=n.RGBA32I)),M===n.RGB&&(F===n.UNSIGNED_INT_5_9_9_9_REV&&($=n.RGB9_E5),F===n.UNSIGNED_INT_10F_11F_11F_REV&&($=n.R11F_G11F_B10F)),M===n.RGBA){const ve=Q?Ju:qe.getTransfer(K);F===n.FLOAT&&($=n.RGBA32F),F===n.HALF_FLOAT&&($=n.RGBA16F),F===n.UNSIGNED_BYTE&&($=ve===it?n.SRGB8_ALPHA8:n.RGBA8),F===n.UNSIGNED_SHORT_4_4_4_4&&($=n.RGBA4),F===n.UNSIGNED_SHORT_5_5_5_1&&($=n.RGB5_A1)}return($===n.R16F||$===n.R32F||$===n.RG16F||$===n.RG32F||$===n.RGBA16F||$===n.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function y(R,M){let F;return R?M===null||M===Fi||M===Qo?F=n.DEPTH24_STENCIL8:M===Ri?F=n.DEPTH32F_STENCIL8:M===Zo&&(F=n.DEPTH24_STENCIL8,Ne("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Fi||M===Qo?F=n.DEPTH_COMPONENT24:M===Ri?F=n.DEPTH_COMPONENT32F:M===Zo&&(F=n.DEPTH_COMPONENT16),F}function E(R,M){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==$t&&R.minFilter!==on?Math.log2(Math.max(M.width,M.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?M.mipmaps.length:1}function C(R){const M=R.target;M.removeEventListener("dispose",C),S(M),M.isVideoTexture&&c.delete(M)}function w(R){const M=R.target;M.removeEventListener("dispose",w),D(M)}function S(R){const M=i.get(R);if(M.__webglInit===void 0)return;const F=R.source,K=f.get(F);if(K){const Q=K[M.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&T(R),Object.keys(K).length===0&&f.delete(F)}i.remove(R)}function T(R){const M=i.get(R);n.deleteTexture(M.__webglTexture);const F=R.source,K=f.get(F);delete K[M.__cacheKey],a.memory.textures--}function D(R){const M=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(M.__webglFramebuffer[K]))for(let Q=0;Q<M.__webglFramebuffer[K].length;Q++)n.deleteFramebuffer(M.__webglFramebuffer[K][Q]);else n.deleteFramebuffer(M.__webglFramebuffer[K]);M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer[K])}else{if(Array.isArray(M.__webglFramebuffer))for(let K=0;K<M.__webglFramebuffer.length;K++)n.deleteFramebuffer(M.__webglFramebuffer[K]);else n.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&n.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let K=0;K<M.__webglColorRenderbuffer.length;K++)M.__webglColorRenderbuffer[K]&&n.deleteRenderbuffer(M.__webglColorRenderbuffer[K]);M.__webglDepthRenderbuffer&&n.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const F=R.textures;for(let K=0,Q=F.length;K<Q;K++){const $=i.get(F[K]);$.__webglTexture&&(n.deleteTexture($.__webglTexture),a.memory.textures--),i.remove(F[K])}i.remove(R)}let b=0;function V(){b=0}function B(){const R=b;return R>=r.maxTextures&&Ne("WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),b+=1,R}function O(R){const M=[];return M.push(R.wrapS),M.push(R.wrapT),M.push(R.wrapR||0),M.push(R.magFilter),M.push(R.minFilter),M.push(R.anisotropy),M.push(R.internalFormat),M.push(R.format),M.push(R.type),M.push(R.generateMipmaps),M.push(R.premultiplyAlpha),M.push(R.flipY),M.push(R.unpackAlignment),M.push(R.colorSpace),M.join()}function L(R,M){const F=i.get(R);if(R.isVideoTexture&&et(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&F.__version!==R.version){const K=R.image;if(K===null)Ne("WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)Ne("WebGLRenderer: Texture marked for update but image is incomplete");else{j(F,R,M);return}}else R.isExternalTexture&&(F.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,F.__webglTexture,n.TEXTURE0+M)}function z(R,M){const F=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&F.__version!==R.version){j(F,R,M);return}else R.isExternalTexture&&(F.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,F.__webglTexture,n.TEXTURE0+M)}function N(R,M){const F=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&F.__version!==R.version){j(F,R,M);return}t.bindTexture(n.TEXTURE_3D,F.__webglTexture,n.TEXTURE0+M)}function U(R,M){const F=i.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&F.__version!==R.version){re(F,R,M);return}t.bindTexture(n.TEXTURE_CUBE_MAP,F.__webglTexture,n.TEXTURE0+M)}const H={[Qd]:n.REPEAT,[Ji]:n.CLAMP_TO_EDGE,[Jd]:n.MIRRORED_REPEAT},Z={[$t]:n.NEAREST,[WE]:n.NEAREST_MIPMAP_NEAREST,[Ol]:n.NEAREST_MIPMAP_LINEAR,[on]:n.LINEAR,[cf]:n.LINEAR_MIPMAP_NEAREST,[Ss]:n.LINEAR_MIPMAP_LINEAR},ee={[qE]:n.NEVER,[JE]:n.ALWAYS,[$E]:n.LESS,[Kp]:n.LEQUAL,[KE]:n.EQUAL,[Zp]:n.GEQUAL,[ZE]:n.GREATER,[QE]:n.NOTEQUAL};function J(R,M){if(M.type===Ri&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===on||M.magFilter===cf||M.magFilter===Ol||M.magFilter===Ss||M.minFilter===on||M.minFilter===cf||M.minFilter===Ol||M.minFilter===Ss)&&Ne("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(R,n.TEXTURE_WRAP_S,H[M.wrapS]),n.texParameteri(R,n.TEXTURE_WRAP_T,H[M.wrapT]),(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)&&n.texParameteri(R,n.TEXTURE_WRAP_R,H[M.wrapR]),n.texParameteri(R,n.TEXTURE_MAG_FILTER,Z[M.magFilter]),n.texParameteri(R,n.TEXTURE_MIN_FILTER,Z[M.minFilter]),M.compareFunction&&(n.texParameteri(R,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(R,n.TEXTURE_COMPARE_FUNC,ee[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===$t||M.minFilter!==Ol&&M.minFilter!==Ss||M.type===Ri&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const F=e.get("EXT_texture_filter_anisotropic");n.texParameterf(R,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function Pe(R,M){let F=!1;R.__webglInit===void 0&&(R.__webglInit=!0,M.addEventListener("dispose",C));const K=M.source;let Q=f.get(K);Q===void 0&&(Q={},f.set(K,Q));const $=O(M);if($!==R.__cacheKey){Q[$]===void 0&&(Q[$]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,F=!0),Q[$].usedTimes++;const ve=Q[R.__cacheKey];ve!==void 0&&(Q[R.__cacheKey].usedTimes--,ve.usedTimes===0&&T(M)),R.__cacheKey=$,R.__webglTexture=Q[$].texture}return F}function Le(R,M,F){return Math.floor(Math.floor(R/F)/M)}function Fe(R,M,F,K){const $=R.updateRanges;if($.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,M.width,M.height,F,K,M.data);else{$.sort((ne,se)=>ne.start-se.start);let ve=0;for(let ne=1;ne<$.length;ne++){const se=$[ve],xe=$[ne],ye=se.start+se.count,pe=Le(xe.start,M.width,4),Ge=Le(se.start,M.width,4);xe.start<=ye+1&&pe===Ge&&Le(xe.start+xe.count-1,M.width,4)===pe?se.count=Math.max(se.count,xe.start+xe.count-se.start):(++ve,$[ve]=xe)}$.length=ve+1;const le=n.getParameter(n.UNPACK_ROW_LENGTH),be=n.getParameter(n.UNPACK_SKIP_PIXELS),De=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,M.width);for(let ne=0,se=$.length;ne<se;ne++){const xe=$[ne],ye=Math.floor(xe.start/4),pe=Math.ceil(xe.count/4),Ge=ye%M.width,I=Math.floor(ye/M.width),ue=pe,ae=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Ge),n.pixelStorei(n.UNPACK_SKIP_ROWS,I),t.texSubImage2D(n.TEXTURE_2D,0,Ge,I,ue,ae,F,K,M.data)}R.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,le),n.pixelStorei(n.UNPACK_SKIP_PIXELS,be),n.pixelStorei(n.UNPACK_SKIP_ROWS,De)}}function j(R,M,F){let K=n.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(K=n.TEXTURE_2D_ARRAY),M.isData3DTexture&&(K=n.TEXTURE_3D);const Q=Pe(R,M),$=M.source;t.bindTexture(K,R.__webglTexture,n.TEXTURE0+F);const ve=i.get($);if($.version!==ve.__version||Q===!0){t.activeTexture(n.TEXTURE0+F);const le=qe.getPrimaries(qe.workingColorSpace),be=M.colorSpace===Rr?null:qe.getPrimaries(M.colorSpace),De=M.colorSpace===Rr||le===be?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,De);let ne=v(M.image,!1,r.maxTextureSize);ne=ft(M,ne);const se=s.convert(M.format,M.colorSpace),xe=s.convert(M.type);let ye=x(M.internalFormat,se,xe,M.colorSpace,M.isVideoTexture);J(K,M);let pe;const Ge=M.mipmaps,I=M.isVideoTexture!==!0,ue=ve.__version===void 0||Q===!0,ae=$.dataReady,ge=E(M,ne);if(M.isDepthTexture)ye=y(M.format===ys,M.type),ue&&(I?t.texStorage2D(n.TEXTURE_2D,1,ye,ne.width,ne.height):t.texImage2D(n.TEXTURE_2D,0,ye,ne.width,ne.height,0,se,xe,null));else if(M.isDataTexture)if(Ge.length>0){I&&ue&&t.texStorage2D(n.TEXTURE_2D,ge,ye,Ge[0].width,Ge[0].height);for(let ie=0,q=Ge.length;ie<q;ie++)pe=Ge[ie],I?ae&&t.texSubImage2D(n.TEXTURE_2D,ie,0,0,pe.width,pe.height,se,xe,pe.data):t.texImage2D(n.TEXTURE_2D,ie,ye,pe.width,pe.height,0,se,xe,pe.data);M.generateMipmaps=!1}else I?(ue&&t.texStorage2D(n.TEXTURE_2D,ge,ye,ne.width,ne.height),ae&&Fe(M,ne,se,xe)):t.texImage2D(n.TEXTURE_2D,0,ye,ne.width,ne.height,0,se,xe,ne.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){I&&ue&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ge,ye,Ge[0].width,Ge[0].height,ne.depth);for(let ie=0,q=Ge.length;ie<q;ie++)if(pe=Ge[ie],M.format!==pi)if(se!==null)if(I){if(ae)if(M.layerUpdates.size>0){const Se=lg(pe.width,pe.height,M.format,M.type);for(const Ue of M.layerUpdates){const dt=pe.data.subarray(Ue*Se/pe.data.BYTES_PER_ELEMENT,(Ue+1)*Se/pe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ie,0,0,Ue,pe.width,pe.height,1,se,dt)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ie,0,0,0,pe.width,pe.height,ne.depth,se,pe.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ie,ye,pe.width,pe.height,ne.depth,0,pe.data,0,0);else Ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else I?ae&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ie,0,0,0,pe.width,pe.height,ne.depth,se,xe,pe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ie,ye,pe.width,pe.height,ne.depth,0,se,xe,pe.data)}else{I&&ue&&t.texStorage2D(n.TEXTURE_2D,ge,ye,Ge[0].width,Ge[0].height);for(let ie=0,q=Ge.length;ie<q;ie++)pe=Ge[ie],M.format!==pi?se!==null?I?ae&&t.compressedTexSubImage2D(n.TEXTURE_2D,ie,0,0,pe.width,pe.height,se,pe.data):t.compressedTexImage2D(n.TEXTURE_2D,ie,ye,pe.width,pe.height,0,pe.data):Ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):I?ae&&t.texSubImage2D(n.TEXTURE_2D,ie,0,0,pe.width,pe.height,se,xe,pe.data):t.texImage2D(n.TEXTURE_2D,ie,ye,pe.width,pe.height,0,se,xe,pe.data)}else if(M.isDataArrayTexture)if(I){if(ue&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ge,ye,ne.width,ne.height,ne.depth),ae)if(M.layerUpdates.size>0){const ie=lg(ne.width,ne.height,M.format,M.type);for(const q of M.layerUpdates){const Se=ne.data.subarray(q*ie/ne.data.BYTES_PER_ELEMENT,(q+1)*ie/ne.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,q,ne.width,ne.height,1,se,xe,Se)}M.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,se,xe,ne.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,ye,ne.width,ne.height,ne.depth,0,se,xe,ne.data);else if(M.isData3DTexture)I?(ue&&t.texStorage3D(n.TEXTURE_3D,ge,ye,ne.width,ne.height,ne.depth),ae&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,se,xe,ne.data)):t.texImage3D(n.TEXTURE_3D,0,ye,ne.width,ne.height,ne.depth,0,se,xe,ne.data);else if(M.isFramebufferTexture){if(ue)if(I)t.texStorage2D(n.TEXTURE_2D,ge,ye,ne.width,ne.height);else{let ie=ne.width,q=ne.height;for(let Se=0;Se<ge;Se++)t.texImage2D(n.TEXTURE_2D,Se,ye,ie,q,0,se,xe,null),ie>>=1,q>>=1}}else if(Ge.length>0){if(I&&ue){const ie=Ee(Ge[0]);t.texStorage2D(n.TEXTURE_2D,ge,ye,ie.width,ie.height)}for(let ie=0,q=Ge.length;ie<q;ie++)pe=Ge[ie],I?ae&&t.texSubImage2D(n.TEXTURE_2D,ie,0,0,se,xe,pe):t.texImage2D(n.TEXTURE_2D,ie,ye,se,xe,pe);M.generateMipmaps=!1}else if(I){if(ue){const ie=Ee(ne);t.texStorage2D(n.TEXTURE_2D,ge,ye,ie.width,ie.height)}ae&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,se,xe,ne)}else t.texImage2D(n.TEXTURE_2D,0,ye,se,xe,ne);m(M)&&d(K),ve.__version=$.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function re(R,M,F){if(M.image.length!==6)return;const K=Pe(R,M),Q=M.source;t.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture,n.TEXTURE0+F);const $=i.get(Q);if(Q.version!==$.__version||K===!0){t.activeTexture(n.TEXTURE0+F);const ve=qe.getPrimaries(qe.workingColorSpace),le=M.colorSpace===Rr?null:qe.getPrimaries(M.colorSpace),be=M.colorSpace===Rr||ve===le?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,be);const De=M.isCompressedTexture||M.image[0].isCompressedTexture,ne=M.image[0]&&M.image[0].isDataTexture,se=[];for(let q=0;q<6;q++)!De&&!ne?se[q]=v(M.image[q],!0,r.maxCubemapSize):se[q]=ne?M.image[q].image:M.image[q],se[q]=ft(M,se[q]);const xe=se[0],ye=s.convert(M.format,M.colorSpace),pe=s.convert(M.type),Ge=x(M.internalFormat,ye,pe,M.colorSpace),I=M.isVideoTexture!==!0,ue=$.__version===void 0||K===!0,ae=Q.dataReady;let ge=E(M,xe);J(n.TEXTURE_CUBE_MAP,M);let ie;if(De){I&&ue&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ge,Ge,xe.width,xe.height);for(let q=0;q<6;q++){ie=se[q].mipmaps;for(let Se=0;Se<ie.length;Se++){const Ue=ie[Se];M.format!==pi?ye!==null?I?ae&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,Se,0,0,Ue.width,Ue.height,ye,Ue.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,Se,Ge,Ue.width,Ue.height,0,Ue.data):Ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?ae&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,Se,0,0,Ue.width,Ue.height,ye,pe,Ue.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,Se,Ge,Ue.width,Ue.height,0,ye,pe,Ue.data)}}}else{if(ie=M.mipmaps,I&&ue){ie.length>0&&ge++;const q=Ee(se[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,ge,Ge,q.width,q.height)}for(let q=0;q<6;q++)if(ne){I?ae&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,se[q].width,se[q].height,ye,pe,se[q].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,Ge,se[q].width,se[q].height,0,ye,pe,se[q].data);for(let Se=0;Se<ie.length;Se++){const dt=ie[Se].image[q].image;I?ae&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,Se+1,0,0,dt.width,dt.height,ye,pe,dt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,Se+1,Ge,dt.width,dt.height,0,ye,pe,dt.data)}}else{I?ae&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,ye,pe,se[q]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,Ge,ye,pe,se[q]);for(let Se=0;Se<ie.length;Se++){const Ue=ie[Se];I?ae&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,Se+1,0,0,ye,pe,Ue.image[q]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,Se+1,Ge,ye,pe,Ue.image[q])}}}m(M)&&d(n.TEXTURE_CUBE_MAP),$.__version=Q.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function oe(R,M,F,K,Q,$){const ve=s.convert(F.format,F.colorSpace),le=s.convert(F.type),be=x(F.internalFormat,ve,le,F.colorSpace),De=i.get(M),ne=i.get(F);if(ne.__renderTarget=M,!De.__hasExternalTextures){const se=Math.max(1,M.width>>$),xe=Math.max(1,M.height>>$);Q===n.TEXTURE_3D||Q===n.TEXTURE_2D_ARRAY?t.texImage3D(Q,$,be,se,xe,M.depth,0,ve,le,null):t.texImage2D(Q,$,be,se,xe,0,ve,le,null)}t.bindFramebuffer(n.FRAMEBUFFER,R),Nt(M)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,K,Q,ne.__webglTexture,0,P(M)):(Q===n.TEXTURE_2D||Q>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,K,Q,ne.__webglTexture,$),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ie(R,M,F){if(n.bindRenderbuffer(n.RENDERBUFFER,R),M.depthBuffer){const K=M.depthTexture,Q=K&&K.isDepthTexture?K.type:null,$=y(M.stencilBuffer,Q),ve=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Nt(M)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,P(M),$,M.width,M.height):F?n.renderbufferStorageMultisample(n.RENDERBUFFER,P(M),$,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,$,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ve,n.RENDERBUFFER,R)}else{const K=M.textures;for(let Q=0;Q<K.length;Q++){const $=K[Q],ve=s.convert($.format,$.colorSpace),le=s.convert($.type),be=x($.internalFormat,ve,le,$.colorSpace);Nt(M)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,P(M),be,M.width,M.height):F?n.renderbufferStorageMultisample(n.RENDERBUFFER,P(M),be,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,be,M.width,M.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function we(R,M,F){const K=M.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,R),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Q=i.get(M.depthTexture);if(Q.__renderTarget=M,(!Q.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),K){if(Q.__webglInit===void 0&&(Q.__webglInit=!0,M.depthTexture.addEventListener("dispose",C)),Q.__webglTexture===void 0){Q.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,Q.__webglTexture),J(n.TEXTURE_CUBE_MAP,M.depthTexture);const De=s.convert(M.depthTexture.format),ne=s.convert(M.depthTexture.type);let se;M.depthTexture.format===ur?se=n.DEPTH_COMPONENT24:M.depthTexture.format===ys&&(se=n.DEPTH24_STENCIL8);for(let xe=0;xe<6;xe++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,se,M.width,M.height,0,De,ne,null)}}else L(M.depthTexture,0);const $=Q.__webglTexture,ve=P(M),le=K?n.TEXTURE_CUBE_MAP_POSITIVE_X+F:n.TEXTURE_2D,be=M.depthTexture.format===ys?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(M.depthTexture.format===ur)Nt(M)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,be,le,$,0,ve):n.framebufferTexture2D(n.FRAMEBUFFER,be,le,$,0);else if(M.depthTexture.format===ys)Nt(M)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,be,le,$,0,ve):n.framebufferTexture2D(n.FRAMEBUFFER,be,le,$,0);else throw new Error("Unknown depthTexture format")}function Ae(R){const M=i.get(R),F=R.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==R.depthTexture){const K=R.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),K){const Q=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,K.removeEventListener("dispose",Q)};K.addEventListener("dispose",Q),M.__depthDisposeCallback=Q}M.__boundDepthTexture=K}if(R.depthTexture&&!M.__autoAllocateDepthBuffer)if(F)for(let K=0;K<6;K++)we(M.__webglFramebuffer[K],R,K);else{const K=R.texture.mipmaps;K&&K.length>0?we(M.__webglFramebuffer[0],R,0):we(M.__webglFramebuffer,R,0)}else if(F){M.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[K]),M.__webglDepthbuffer[K]===void 0)M.__webglDepthbuffer[K]=n.createRenderbuffer(),Ie(M.__webglDepthbuffer[K],R,!1);else{const Q=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,$=M.__webglDepthbuffer[K];n.bindRenderbuffer(n.RENDERBUFFER,$),n.framebufferRenderbuffer(n.FRAMEBUFFER,Q,n.RENDERBUFFER,$)}}else{const K=R.texture.mipmaps;if(K&&K.length>0?t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=n.createRenderbuffer(),Ie(M.__webglDepthbuffer,R,!1);else{const Q=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,$=M.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,$),n.framebufferRenderbuffer(n.FRAMEBUFFER,Q,n.RENDERBUFFER,$)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function pt(R,M,F){const K=i.get(R);M!==void 0&&oe(K.__webglFramebuffer,R,R.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),F!==void 0&&Ae(R)}function Oe(R){const M=R.texture,F=i.get(R),K=i.get(M);R.addEventListener("dispose",w);const Q=R.textures,$=R.isWebGLCubeRenderTarget===!0,ve=Q.length>1;if(ve||(K.__webglTexture===void 0&&(K.__webglTexture=n.createTexture()),K.__version=M.version,a.memory.textures++),$){F.__webglFramebuffer=[];for(let le=0;le<6;le++)if(M.mipmaps&&M.mipmaps.length>0){F.__webglFramebuffer[le]=[];for(let be=0;be<M.mipmaps.length;be++)F.__webglFramebuffer[le][be]=n.createFramebuffer()}else F.__webglFramebuffer[le]=n.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){F.__webglFramebuffer=[];for(let le=0;le<M.mipmaps.length;le++)F.__webglFramebuffer[le]=n.createFramebuffer()}else F.__webglFramebuffer=n.createFramebuffer();if(ve)for(let le=0,be=Q.length;le<be;le++){const De=i.get(Q[le]);De.__webglTexture===void 0&&(De.__webglTexture=n.createTexture(),a.memory.textures++)}if(R.samples>0&&Nt(R)===!1){F.__webglMultisampledFramebuffer=n.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let le=0;le<Q.length;le++){const be=Q[le];F.__webglColorRenderbuffer[le]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,F.__webglColorRenderbuffer[le]);const De=s.convert(be.format,be.colorSpace),ne=s.convert(be.type),se=x(be.internalFormat,De,ne,be.colorSpace,R.isXRRenderTarget===!0),xe=P(R);n.renderbufferStorageMultisample(n.RENDERBUFFER,xe,se,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+le,n.RENDERBUFFER,F.__webglColorRenderbuffer[le])}n.bindRenderbuffer(n.RENDERBUFFER,null),R.depthBuffer&&(F.__webglDepthRenderbuffer=n.createRenderbuffer(),Ie(F.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if($){t.bindTexture(n.TEXTURE_CUBE_MAP,K.__webglTexture),J(n.TEXTURE_CUBE_MAP,M);for(let le=0;le<6;le++)if(M.mipmaps&&M.mipmaps.length>0)for(let be=0;be<M.mipmaps.length;be++)oe(F.__webglFramebuffer[le][be],R,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+le,be);else oe(F.__webglFramebuffer[le],R,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);m(M)&&d(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ve){for(let le=0,be=Q.length;le<be;le++){const De=Q[le],ne=i.get(De);let se=n.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(se=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(se,ne.__webglTexture),J(se,De),oe(F.__webglFramebuffer,R,De,n.COLOR_ATTACHMENT0+le,se,0),m(De)&&d(se)}t.unbindTexture()}else{let le=n.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(le=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(le,K.__webglTexture),J(le,M),M.mipmaps&&M.mipmaps.length>0)for(let be=0;be<M.mipmaps.length;be++)oe(F.__webglFramebuffer[be],R,M,n.COLOR_ATTACHMENT0,le,be);else oe(F.__webglFramebuffer,R,M,n.COLOR_ATTACHMENT0,le,0);m(M)&&d(le),t.unbindTexture()}R.depthBuffer&&Ae(R)}function Ke(R){const M=R.textures;for(let F=0,K=M.length;F<K;F++){const Q=M[F];if(m(Q)){const $=_(R),ve=i.get(Q).__webglTexture;t.bindTexture($,ve),d($),t.unbindTexture()}}}const tt=[],Be=[];function xt(R){if(R.samples>0){if(Nt(R)===!1){const M=R.textures,F=R.width,K=R.height;let Q=n.COLOR_BUFFER_BIT;const $=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ve=i.get(R),le=M.length>1;if(le)for(let De=0;De<M.length;De++)t.bindFramebuffer(n.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+De,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ve.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+De,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ve.__webglMultisampledFramebuffer);const be=R.texture.mipmaps;be&&be.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ve.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ve.__webglFramebuffer);for(let De=0;De<M.length;De++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(Q|=n.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(Q|=n.STENCIL_BUFFER_BIT)),le){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ve.__webglColorRenderbuffer[De]);const ne=i.get(M[De]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ne,0)}n.blitFramebuffer(0,0,F,K,0,0,F,K,Q,n.NEAREST),l===!0&&(tt.length=0,Be.length=0,tt.push(n.COLOR_ATTACHMENT0+De),R.depthBuffer&&R.resolveDepthBuffer===!1&&(tt.push($),Be.push($),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Be)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,tt))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),le)for(let De=0;De<M.length;De++){t.bindFramebuffer(n.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+De,n.RENDERBUFFER,ve.__webglColorRenderbuffer[De]);const ne=i.get(M[De]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ve.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+De,n.TEXTURE_2D,ne,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ve.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const M=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[M])}}}function P(R){return Math.min(r.maxSamples,R.samples)}function Nt(R){const M=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function et(R){const M=a.render.frame;c.get(R)!==M&&(c.set(R,M),R.update())}function ft(R,M){const F=R.colorSpace,K=R.format,Q=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||F!==ka&&F!==Rr&&(qe.getTransfer(F)===it?(K!==pi||Q!==Zn)&&Ne("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Qe("WebGLTextures: Unsupported texture color space:",F)),M}function Ee(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(u.width=R.naturalWidth||R.width,u.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(u.width=R.displayWidth,u.height=R.displayHeight):(u.width=R.width,u.height=R.height),u}this.allocateTextureUnit=B,this.resetTextureUnits=V,this.setTexture2D=L,this.setTexture2DArray=z,this.setTexture3D=N,this.setTextureCube=U,this.rebindTextures=pt,this.setupRenderTarget=Oe,this.updateRenderTargetMipmap=Ke,this.updateMultisampleRenderTarget=xt,this.setupDepthRenderbuffer=Ae,this.setupFrameBufferTexture=oe,this.useMultisampledRTT=Nt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function ER(n,e){function t(i,r=Rr){let s;const a=qe.getTransfer(r);if(i===Zn)return n.UNSIGNED_BYTE;if(i===Xp)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Yp)return n.UNSIGNED_SHORT_5_5_5_1;if(i===yx)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Mx)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===xx)return n.BYTE;if(i===Sx)return n.SHORT;if(i===Zo)return n.UNSIGNED_SHORT;if(i===Wp)return n.INT;if(i===Fi)return n.UNSIGNED_INT;if(i===Ri)return n.FLOAT;if(i===lr)return n.HALF_FLOAT;if(i===Ex)return n.ALPHA;if(i===Tx)return n.RGB;if(i===pi)return n.RGBA;if(i===ur)return n.DEPTH_COMPONENT;if(i===ys)return n.DEPTH_STENCIL;if(i===wx)return n.RED;if(i===jp)return n.RED_INTEGER;if(i===Oa)return n.RG;if(i===qp)return n.RG_INTEGER;if(i===$p)return n.RGBA_INTEGER;if(i===yu||i===Mu||i===Eu||i===Tu)if(a===it)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===yu)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Mu)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Eu)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Tu)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===yu)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Mu)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Eu)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Tu)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===eh||i===th||i===nh||i===ih)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===eh)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===th)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===nh)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===ih)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===rh||i===sh||i===ah||i===oh||i===lh||i===uh||i===ch)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===rh||i===sh)return a===it?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===ah)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===oh)return s.COMPRESSED_R11_EAC;if(i===lh)return s.COMPRESSED_SIGNED_R11_EAC;if(i===uh)return s.COMPRESSED_RG11_EAC;if(i===ch)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===fh||i===dh||i===hh||i===ph||i===mh||i===_h||i===gh||i===vh||i===xh||i===Sh||i===yh||i===Mh||i===Eh||i===Th)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===fh)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===dh)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===hh)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ph)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===mh)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===_h)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===gh)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===vh)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===xh)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Sh)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===yh)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Mh)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Eh)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Th)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===wh||i===Ah||i===Ch)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===wh)return a===it?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ah)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ch)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Rh||i===bh||i===Ph||i===Dh)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Rh)return s.COMPRESSED_RED_RGTC1_EXT;if(i===bh)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ph)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Dh)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Qo?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const TR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,wR=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class AR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new Ux(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new vi({vertexShader:TR,fragmentShader:wR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Oi(new _l(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class CR extends qa{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,u=null,c=null,h=null,f=null,p=null,g=null;const v=typeof XRWebGLBinding<"u",m=new AR,d={},_=t.getContextAttributes();let x=null,y=null;const E=[],C=[],w=new je;let S=null;const T=new di;T.viewport=new Lt;const D=new di;D.viewport=new Lt;const b=[T,D],V=new k1;let B=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let re=E[j];return re===void 0&&(re=new vf,E[j]=re),re.getTargetRaySpace()},this.getControllerGrip=function(j){let re=E[j];return re===void 0&&(re=new vf,E[j]=re),re.getGripSpace()},this.getHand=function(j){let re=E[j];return re===void 0&&(re=new vf,E[j]=re),re.getHandSpace()};function L(j){const re=C.indexOf(j.inputSource);if(re===-1)return;const oe=E[re];oe!==void 0&&(oe.update(j.inputSource,j.frame,u||a),oe.dispatchEvent({type:j.type,data:j.inputSource}))}function z(){r.removeEventListener("select",L),r.removeEventListener("selectstart",L),r.removeEventListener("selectend",L),r.removeEventListener("squeeze",L),r.removeEventListener("squeezestart",L),r.removeEventListener("squeezeend",L),r.removeEventListener("end",z),r.removeEventListener("inputsourceschange",N);for(let j=0;j<E.length;j++){const re=C[j];re!==null&&(C[j]=null,E[j].disconnect(re))}B=null,O=null,m.reset();for(const j in d)delete d[j];e.setRenderTarget(x),p=null,f=null,h=null,r=null,y=null,Fe.stop(),i.isPresenting=!1,e.setPixelRatio(S),e.setSize(w.width,w.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){s=j,i.isPresenting===!0&&Ne("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){o=j,i.isPresenting===!0&&Ne("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||a},this.setReferenceSpace=function(j){u=j},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return h===null&&v&&(h=new XRWebGLBinding(r,t)),h},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(j){if(r=j,r!==null){if(x=e.getRenderTarget(),r.addEventListener("select",L),r.addEventListener("selectstart",L),r.addEventListener("selectend",L),r.addEventListener("squeeze",L),r.addEventListener("squeezestart",L),r.addEventListener("squeezeend",L),r.addEventListener("end",z),r.addEventListener("inputsourceschange",N),_.xrCompatible!==!0&&await t.makeXRCompatible(),S=e.getPixelRatio(),e.getSize(w),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let oe=null,Ie=null,we=null;_.depth&&(we=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,oe=_.stencil?ys:ur,Ie=_.stencil?Qo:Fi);const Ae={colorFormat:t.RGBA8,depthFormat:we,scaleFactor:s};h=this.getBinding(),f=h.createProjectionLayer(Ae),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),y=new Ii(f.textureWidth,f.textureHeight,{format:pi,type:Zn,depthTexture:new Jo(f.textureWidth,f.textureHeight,Ie,void 0,void 0,void 0,void 0,void 0,void 0,oe),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const oe={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,oe),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new Ii(p.framebufferWidth,p.framebufferHeight,{format:pi,type:Zn,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),u=null,a=await r.requestReferenceSpace(o),Fe.setContext(r),Fe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function N(j){for(let re=0;re<j.removed.length;re++){const oe=j.removed[re],Ie=C.indexOf(oe);Ie>=0&&(C[Ie]=null,E[Ie].disconnect(oe))}for(let re=0;re<j.added.length;re++){const oe=j.added[re];let Ie=C.indexOf(oe);if(Ie===-1){for(let Ae=0;Ae<E.length;Ae++)if(Ae>=C.length){C.push(oe),Ie=Ae;break}else if(C[Ae]===null){C[Ae]=oe,Ie=Ae;break}if(Ie===-1)break}const we=E[Ie];we&&we.connect(oe)}}const U=new X,H=new X;function Z(j,re,oe){U.setFromMatrixPosition(re.matrixWorld),H.setFromMatrixPosition(oe.matrixWorld);const Ie=U.distanceTo(H),we=re.projectionMatrix.elements,Ae=oe.projectionMatrix.elements,pt=we[14]/(we[10]-1),Oe=we[14]/(we[10]+1),Ke=(we[9]+1)/we[5],tt=(we[9]-1)/we[5],Be=(we[8]-1)/we[0],xt=(Ae[8]+1)/Ae[0],P=pt*Be,Nt=pt*xt,et=Ie/(-Be+xt),ft=et*-Be;if(re.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(ft),j.translateZ(et),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),we[10]===-1)j.projectionMatrix.copy(re.projectionMatrix),j.projectionMatrixInverse.copy(re.projectionMatrixInverse);else{const Ee=pt+et,R=Oe+et,M=P-ft,F=Nt+(Ie-ft),K=Ke*Oe/R*Ee,Q=tt*Oe/R*Ee;j.projectionMatrix.makePerspective(M,F,K,Q,Ee,R),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function ee(j,re){re===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(re.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(r===null)return;let re=j.near,oe=j.far;m.texture!==null&&(m.depthNear>0&&(re=m.depthNear),m.depthFar>0&&(oe=m.depthFar)),V.near=D.near=T.near=re,V.far=D.far=T.far=oe,(B!==V.near||O!==V.far)&&(r.updateRenderState({depthNear:V.near,depthFar:V.far}),B=V.near,O=V.far),V.layers.mask=j.layers.mask|6,T.layers.mask=V.layers.mask&-5,D.layers.mask=V.layers.mask&-3;const Ie=j.parent,we=V.cameras;ee(V,Ie);for(let Ae=0;Ae<we.length;Ae++)ee(we[Ae],Ie);we.length===2?Z(V,T,D):V.projectionMatrix.copy(T.projectionMatrix),J(j,V,Ie)};function J(j,re,oe){oe===null?j.matrix.copy(re.matrixWorld):(j.matrix.copy(oe.matrixWorld),j.matrix.invert(),j.matrix.multiply(re.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(re.projectionMatrix),j.projectionMatrixInverse.copy(re.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Lh*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return V},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(j){l=j,f!==null&&(f.fixedFoveation=j),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=j)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(V)},this.getCameraTexture=function(j){return d[j]};let Pe=null;function Le(j,re){if(c=re.getViewerPose(u||a),g=re,c!==null){const oe=c.views;p!==null&&(e.setRenderTargetFramebuffer(y,p.framebuffer),e.setRenderTarget(y));let Ie=!1;oe.length!==V.cameras.length&&(V.cameras.length=0,Ie=!0);for(let Oe=0;Oe<oe.length;Oe++){const Ke=oe[Oe];let tt=null;if(p!==null)tt=p.getViewport(Ke);else{const xt=h.getViewSubImage(f,Ke);tt=xt.viewport,Oe===0&&(e.setRenderTargetTextures(y,xt.colorTexture,xt.depthStencilTexture),e.setRenderTarget(y))}let Be=b[Oe];Be===void 0&&(Be=new di,Be.layers.enable(Oe),Be.viewport=new Lt,b[Oe]=Be),Be.matrix.fromArray(Ke.transform.matrix),Be.matrix.decompose(Be.position,Be.quaternion,Be.scale),Be.projectionMatrix.fromArray(Ke.projectionMatrix),Be.projectionMatrixInverse.copy(Be.projectionMatrix).invert(),Be.viewport.set(tt.x,tt.y,tt.width,tt.height),Oe===0&&(V.matrix.copy(Be.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale)),Ie===!0&&V.cameras.push(Be)}const we=r.enabledFeatures;if(we&&we.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&v){h=i.getBinding();const Oe=h.getDepthInformation(oe[0]);Oe&&Oe.isValid&&Oe.texture&&m.init(Oe,r.renderState)}if(we&&we.includes("camera-access")&&v){e.state.unbindTexture(),h=i.getBinding();for(let Oe=0;Oe<oe.length;Oe++){const Ke=oe[Oe].camera;if(Ke){let tt=d[Ke];tt||(tt=new Ux,d[Ke]=tt);const Be=h.getCameraImage(Ke);tt.sourceTexture=Be}}}}for(let oe=0;oe<E.length;oe++){const Ie=C[oe],we=E[oe];Ie!==null&&we!==void 0&&we.update(Ie,re,u||a)}Pe&&Pe(j,re),re.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:re}),g=null}const Fe=new kx;Fe.setAnimationLoop(Le),this.setAnimationLoop=function(j){Pe=j},this.dispose=function(){}}}const ls=new cr,RR=new Ot;function bR(n,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,Fx(n)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function r(m,d,_,x,y){d.isMeshBasicMaterial?s(m,d):d.isMeshLambertMaterial?(s(m,d),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(s(m,d),h(m,d)):d.isMeshPhongMaterial?(s(m,d),c(m,d),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(s(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,y)):d.isMeshMatcapMaterial?(s(m,d),g(m,d)):d.isMeshDepthMaterial?s(m,d):d.isMeshDistanceMaterial?(s(m,d),v(m,d)):d.isMeshNormalMaterial?s(m,d):d.isLineBasicMaterial?(a(m,d),d.isLineDashedMaterial&&o(m,d)):d.isPointsMaterial?l(m,d,_,x):d.isSpriteMaterial?u(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===En&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===En&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const _=e.get(d),x=_.envMap,y=_.envMapRotation;x&&(m.envMap.value=x,ls.copy(y),ls.x*=-1,ls.y*=-1,ls.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(ls.y*=-1,ls.z*=-1),m.envMapRotation.value.setFromMatrix4(RR.makeRotationFromEuler(ls)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function a(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function o(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,_,x){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*_,m.scale.value=x*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function h(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,_){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===En&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function v(m,d){const _=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function PR(n,e,t,i){let r={},s={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,x){const y=x.program;i.uniformBlockBinding(_,y)}function u(_,x){let y=r[_.id];y===void 0&&(g(_),y=c(_),r[_.id]=y,_.addEventListener("dispose",m));const E=x.program;i.updateUBOMapping(_,E);const C=e.render.frame;s[_.id]!==C&&(f(_),s[_.id]=C)}function c(_){const x=h();_.__bindingPointIndex=x;const y=n.createBuffer(),E=_.__size,C=_.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,E,C),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,x,y),y}function h(){for(let _=0;_<o;_++)if(a.indexOf(_)===-1)return a.push(_),_;return Qe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(_){const x=r[_.id],y=_.uniforms,E=_.__cache;n.bindBuffer(n.UNIFORM_BUFFER,x);for(let C=0,w=y.length;C<w;C++){const S=Array.isArray(y[C])?y[C]:[y[C]];for(let T=0,D=S.length;T<D;T++){const b=S[T];if(p(b,C,T,E)===!0){const V=b.__offset,B=Array.isArray(b.value)?b.value:[b.value];let O=0;for(let L=0;L<B.length;L++){const z=B[L],N=v(z);typeof z=="number"||typeof z=="boolean"?(b.__data[0]=z,n.bufferSubData(n.UNIFORM_BUFFER,V+O,b.__data)):z.isMatrix3?(b.__data[0]=z.elements[0],b.__data[1]=z.elements[1],b.__data[2]=z.elements[2],b.__data[3]=0,b.__data[4]=z.elements[3],b.__data[5]=z.elements[4],b.__data[6]=z.elements[5],b.__data[7]=0,b.__data[8]=z.elements[6],b.__data[9]=z.elements[7],b.__data[10]=z.elements[8],b.__data[11]=0):(z.toArray(b.__data,O),O+=N.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,V,b.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(_,x,y,E){const C=_.value,w=x+"_"+y;if(E[w]===void 0)return typeof C=="number"||typeof C=="boolean"?E[w]=C:E[w]=C.clone(),!0;{const S=E[w];if(typeof C=="number"||typeof C=="boolean"){if(S!==C)return E[w]=C,!0}else if(S.equals(C)===!1)return S.copy(C),!0}return!1}function g(_){const x=_.uniforms;let y=0;const E=16;for(let w=0,S=x.length;w<S;w++){const T=Array.isArray(x[w])?x[w]:[x[w]];for(let D=0,b=T.length;D<b;D++){const V=T[D],B=Array.isArray(V.value)?V.value:[V.value];for(let O=0,L=B.length;O<L;O++){const z=B[O],N=v(z),U=y%E,H=U%N.boundary,Z=U+H;y+=H,Z!==0&&E-Z<N.storage&&(y+=E-Z),V.__data=new Float32Array(N.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=y,y+=N.storage}}}const C=y%E;return C>0&&(y+=E-C),_.__size=y,_.__cache={},this}function v(_){const x={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(x.boundary=4,x.storage=4):_.isVector2?(x.boundary=8,x.storage=8):_.isVector3||_.isColor?(x.boundary=16,x.storage=12):_.isVector4?(x.boundary=16,x.storage=16):_.isMatrix3?(x.boundary=48,x.storage=48):_.isMatrix4?(x.boundary=64,x.storage=64):_.isTexture?Ne("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Ne("WebGLRenderer: Unsupported uniform value type.",_),x}function m(_){const x=_.target;x.removeEventListener("dispose",m);const y=a.indexOf(x.__bindingPointIndex);a.splice(y,1),n.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function d(){for(const _ in r)n.deleteBuffer(r[_]);a=[],r={},s={}}return{bind:l,update:u,dispose:d}}const DR=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Mi=null;function LR(){return Mi===null&&(Mi=new w1(DR,16,16,Oa,lr),Mi.name="DFG_LUT",Mi.minFilter=on,Mi.magFilter=on,Mi.wrapS=Ji,Mi.wrapT=Ji,Mi.generateMipmaps=!1,Mi.needsUpdate=!0),Mi}class NR{constructor(e={}){const{canvas:t=t1(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1,outputBufferType:p=Zn}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=a;const v=p,m=new Set([$p,qp,jp]),d=new Set([Zn,Fi,Zo,Qo,Xp,Yp]),_=new Uint32Array(4),x=new Int32Array(4);let y=null,E=null;const C=[],w=[];let S=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ni,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const T=this;let D=!1;this._outputColorSpace=qn;let b=0,V=0,B=null,O=-1,L=null;const z=new Lt,N=new Lt;let U=null;const H=new ot(0);let Z=0,ee=t.width,J=t.height,Pe=1,Le=null,Fe=null;const j=new Lt(0,0,ee,J),re=new Lt(0,0,ee,J);let oe=!1;const Ie=new Nx;let we=!1,Ae=!1;const pt=new Ot,Oe=new X,Ke=new Lt,tt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Be=!1;function xt(){return B===null?Pe:1}let P=i;function Nt(A,k){return t.getContext(A,k)}try{const A={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Hp}`),t.addEventListener("webglcontextlost",Se,!1),t.addEventListener("webglcontextrestored",Ue,!1),t.addEventListener("webglcontextcreationerror",dt,!1),P===null){const k="webgl2";if(P=Nt(k,A),P===null)throw Nt(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw Qe("WebGLRenderer: "+A.message),A}let et,ft,Ee,R,M,F,K,Q,$,ve,le,be,De,ne,se,xe,ye,pe,Ge,I,ue,ae,ge;function ie(){et=new NA(P),et.init(),ue=new ER(P,et),ft=new wA(P,et,e,ue),Ee=new yR(P,et),ft.reversedDepthBuffer&&f&&Ee.buffers.depth.setReversed(!0),R=new FA(P),M=new oR,F=new MR(P,et,Ee,M,ft,ue,R),K=new LA(T),Q=new V1(P),ae=new EA(P,Q),$=new IA(P,Q,R,ae),ve=new kA(P,$,Q,ae,R),pe=new OA(P,ft,F),se=new AA(M),le=new aR(T,K,et,ft,ae,se),be=new bR(T,M),De=new uR,ne=new mR(et),ye=new MA(T,K,Ee,ve,g,l),xe=new SR(T,ve,ft),ge=new PR(P,R,ft,Ee),Ge=new TA(P,et,R),I=new UA(P,et,R),R.programs=le.programs,T.capabilities=ft,T.extensions=et,T.properties=M,T.renderLists=De,T.shadowMap=xe,T.state=Ee,T.info=R}ie(),v!==Zn&&(S=new zA(v,t.width,t.height,r,s));const q=new CR(T,P);this.xr=q,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const A=et.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=et.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return Pe},this.setPixelRatio=function(A){A!==void 0&&(Pe=A,this.setSize(ee,J,!1))},this.getSize=function(A){return A.set(ee,J)},this.setSize=function(A,k,Y=!0){if(q.isPresenting){Ne("WebGLRenderer: Can't change size while VR device is presenting.");return}ee=A,J=k,t.width=Math.floor(A*Pe),t.height=Math.floor(k*Pe),Y===!0&&(t.style.width=A+"px",t.style.height=k+"px"),S!==null&&S.setSize(t.width,t.height),this.setViewport(0,0,A,k)},this.getDrawingBufferSize=function(A){return A.set(ee*Pe,J*Pe).floor()},this.setDrawingBufferSize=function(A,k,Y){ee=A,J=k,Pe=Y,t.width=Math.floor(A*Y),t.height=Math.floor(k*Y),this.setViewport(0,0,A,k)},this.setEffects=function(A){if(v===Zn){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let k=0;k<A.length;k++)if(A[k].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}S.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(z)},this.getViewport=function(A){return A.copy(j)},this.setViewport=function(A,k,Y,W){A.isVector4?j.set(A.x,A.y,A.z,A.w):j.set(A,k,Y,W),Ee.viewport(z.copy(j).multiplyScalar(Pe).round())},this.getScissor=function(A){return A.copy(re)},this.setScissor=function(A,k,Y,W){A.isVector4?re.set(A.x,A.y,A.z,A.w):re.set(A,k,Y,W),Ee.scissor(N.copy(re).multiplyScalar(Pe).round())},this.getScissorTest=function(){return oe},this.setScissorTest=function(A){Ee.setScissorTest(oe=A)},this.setOpaqueSort=function(A){Le=A},this.setTransparentSort=function(A){Fe=A},this.getClearColor=function(A){return A.copy(ye.getClearColor())},this.setClearColor=function(){ye.setClearColor(...arguments)},this.getClearAlpha=function(){return ye.getClearAlpha()},this.setClearAlpha=function(){ye.setClearAlpha(...arguments)},this.clear=function(A=!0,k=!0,Y=!0){let W=0;if(A){let G=!1;if(B!==null){const fe=B.texture.format;G=m.has(fe)}if(G){const fe=B.texture.type,me=d.has(fe),de=ye.getClearColor(),Me=ye.getClearAlpha(),Ce=de.r,ke=de.g,He=de.b;me?(_[0]=Ce,_[1]=ke,_[2]=He,_[3]=Me,P.clearBufferuiv(P.COLOR,0,_)):(x[0]=Ce,x[1]=ke,x[2]=He,x[3]=Me,P.clearBufferiv(P.COLOR,0,x))}else W|=P.COLOR_BUFFER_BIT}k&&(W|=P.DEPTH_BUFFER_BIT),Y&&(W|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),W!==0&&P.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Se,!1),t.removeEventListener("webglcontextrestored",Ue,!1),t.removeEventListener("webglcontextcreationerror",dt,!1),ye.dispose(),De.dispose(),ne.dispose(),M.dispose(),K.dispose(),ve.dispose(),ae.dispose(),ge.dispose(),le.dispose(),q.dispose(),q.removeEventListener("sessionstart",Sm),q.removeEventListener("sessionend",ym),ts.stop()};function Se(A){A.preventDefault(),X_("WebGLRenderer: Context Lost."),D=!0}function Ue(){X_("WebGLRenderer: Context Restored."),D=!1;const A=R.autoReset,k=xe.enabled,Y=xe.autoUpdate,W=xe.needsUpdate,G=xe.type;ie(),R.autoReset=A,xe.enabled=k,xe.autoUpdate=Y,xe.needsUpdate=W,xe.type=G}function dt(A){Qe("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function nt(A){const k=A.target;k.removeEventListener("dispose",nt),Bi(k)}function Bi(A){zi(A),M.remove(A)}function zi(A){const k=M.get(A).programs;k!==void 0&&(k.forEach(function(Y){le.releaseProgram(Y)}),A.isShaderMaterial&&le.releaseShaderCache(A))}this.renderBufferDirect=function(A,k,Y,W,G,fe){k===null&&(k=tt);const me=G.isMesh&&G.matrixWorld.determinant()<0,de=VS(A,k,Y,W,G);Ee.setMaterial(W,me);let Me=Y.index,Ce=1;if(W.wireframe===!0){if(Me=$.getWireframeAttribute(Y),Me===void 0)return;Ce=2}const ke=Y.drawRange,He=Y.attributes.position;let Re=ke.start*Ce,st=(ke.start+ke.count)*Ce;fe!==null&&(Re=Math.max(Re,fe.start*Ce),st=Math.min(st,(fe.start+fe.count)*Ce)),Me!==null?(Re=Math.max(Re,0),st=Math.min(st,Me.count)):He!=null&&(Re=Math.max(Re,0),st=Math.min(st,He.count));const bt=st-Re;if(bt<0||bt===1/0)return;ae.setup(G,W,de,Y,Me);let At,at=Ge;if(Me!==null&&(At=Q.get(Me),at=I,at.setIndex(At)),G.isMesh)W.wireframe===!0?(Ee.setLineWidth(W.wireframeLinewidth*xt()),at.setMode(P.LINES)):at.setMode(P.TRIANGLES);else if(G.isLine){let Jt=W.linewidth;Jt===void 0&&(Jt=1),Ee.setLineWidth(Jt*xt()),G.isLineSegments?at.setMode(P.LINES):G.isLineLoop?at.setMode(P.LINE_LOOP):at.setMode(P.LINE_STRIP)}else G.isPoints?at.setMode(P.POINTS):G.isSprite&&at.setMode(P.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)nc("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),at.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(et.get("WEBGL_multi_draw"))at.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const Jt=G._multiDrawStarts,Te=G._multiDrawCounts,bn=G._multiDrawCount,Ze=Me?Q.get(Me).bytesPerElement:1,ri=M.get(W).currentProgram.getUniforms();for(let xi=0;xi<bn;xi++)ri.setValue(P,"_gl_DrawID",xi),at.render(Jt[xi]/Ze,Te[xi])}else if(G.isInstancedMesh)at.renderInstances(Re,bt,G.count);else if(Y.isInstancedBufferGeometry){const Jt=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,Te=Math.min(Y.instanceCount,Jt);at.renderInstances(Re,bt,Te)}else at.render(Re,bt)};function xm(A,k,Y){A.transparent===!0&&A.side===Ki&&A.forceSinglePass===!1?(A.side=En,A.needsUpdate=!0,xl(A,k,Y),A.side=jr,A.needsUpdate=!0,xl(A,k,Y),A.side=Ki):xl(A,k,Y)}this.compile=function(A,k,Y=null){Y===null&&(Y=A),E=ne.get(Y),E.init(k),w.push(E),Y.traverseVisible(function(G){G.isLight&&G.layers.test(k.layers)&&(E.pushLight(G),G.castShadow&&E.pushShadow(G))}),A!==Y&&A.traverseVisible(function(G){G.isLight&&G.layers.test(k.layers)&&(E.pushLight(G),G.castShadow&&E.pushShadow(G))}),E.setupLights();const W=new Set;return A.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const fe=G.material;if(fe)if(Array.isArray(fe))for(let me=0;me<fe.length;me++){const de=fe[me];xm(de,Y,G),W.add(de)}else xm(fe,Y,G),W.add(fe)}),E=w.pop(),W},this.compileAsync=function(A,k,Y=null){const W=this.compile(A,k,Y);return new Promise(G=>{function fe(){if(W.forEach(function(me){M.get(me).currentProgram.isReady()&&W.delete(me)}),W.size===0){G(A);return}setTimeout(fe,10)}et.get("KHR_parallel_shader_compile")!==null?fe():setTimeout(fe,10)})};let Nc=null;function zS(A){Nc&&Nc(A)}function Sm(){ts.stop()}function ym(){ts.start()}const ts=new kx;ts.setAnimationLoop(zS),typeof self<"u"&&ts.setContext(self),this.setAnimationLoop=function(A){Nc=A,q.setAnimationLoop(A),A===null?ts.stop():ts.start()},q.addEventListener("sessionstart",Sm),q.addEventListener("sessionend",ym),this.render=function(A,k){if(k!==void 0&&k.isCamera!==!0){Qe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;const Y=q.enabled===!0&&q.isPresenting===!0,W=S!==null&&(B===null||Y)&&S.begin(T,B);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),q.enabled===!0&&q.isPresenting===!0&&(S===null||S.isCompositing()===!1)&&(q.cameraAutoUpdate===!0&&q.updateCamera(k),k=q.getCamera()),A.isScene===!0&&A.onBeforeRender(T,A,k,B),E=ne.get(A,w.length),E.init(k),w.push(E),pt.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),Ie.setFromProjectionMatrix(pt,bi,k.reversedDepth),Ae=this.localClippingEnabled,we=se.init(this.clippingPlanes,Ae),y=De.get(A,C.length),y.init(),C.push(y),q.enabled===!0&&q.isPresenting===!0){const me=T.xr.getDepthSensingMesh();me!==null&&Ic(me,k,-1/0,T.sortObjects)}Ic(A,k,0,T.sortObjects),y.finish(),T.sortObjects===!0&&y.sort(Le,Fe),Be=q.enabled===!1||q.isPresenting===!1||q.hasDepthSensing()===!1,Be&&ye.addToRenderList(y,A),this.info.render.frame++,we===!0&&se.beginShadows();const G=E.state.shadowsArray;if(xe.render(G,A,k),we===!0&&se.endShadows(),this.info.autoReset===!0&&this.info.reset(),(W&&S.hasRenderPass())===!1){const me=y.opaque,de=y.transmissive;if(E.setupLights(),k.isArrayCamera){const Me=k.cameras;if(de.length>0)for(let Ce=0,ke=Me.length;Ce<ke;Ce++){const He=Me[Ce];Em(me,de,A,He)}Be&&ye.render(A);for(let Ce=0,ke=Me.length;Ce<ke;Ce++){const He=Me[Ce];Mm(y,A,He,He.viewport)}}else de.length>0&&Em(me,de,A,k),Be&&ye.render(A),Mm(y,A,k)}B!==null&&V===0&&(F.updateMultisampleRenderTarget(B),F.updateRenderTargetMipmap(B)),W&&S.end(T),A.isScene===!0&&A.onAfterRender(T,A,k),ae.resetDefaultState(),O=-1,L=null,w.pop(),w.length>0?(E=w[w.length-1],we===!0&&se.setGlobalState(T.clippingPlanes,E.state.camera)):E=null,C.pop(),C.length>0?y=C[C.length-1]:y=null};function Ic(A,k,Y,W){if(A.visible===!1)return;if(A.layers.test(k.layers)){if(A.isGroup)Y=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(k);else if(A.isLight)E.pushLight(A),A.castShadow&&E.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Ie.intersectsSprite(A)){W&&Ke.setFromMatrixPosition(A.matrixWorld).applyMatrix4(pt);const me=ve.update(A),de=A.material;de.visible&&y.push(A,me,de,Y,Ke.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Ie.intersectsObject(A))){const me=ve.update(A),de=A.material;if(W&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Ke.copy(A.boundingSphere.center)):(me.boundingSphere===null&&me.computeBoundingSphere(),Ke.copy(me.boundingSphere.center)),Ke.applyMatrix4(A.matrixWorld).applyMatrix4(pt)),Array.isArray(de)){const Me=me.groups;for(let Ce=0,ke=Me.length;Ce<ke;Ce++){const He=Me[Ce],Re=de[He.materialIndex];Re&&Re.visible&&y.push(A,me,Re,Y,Ke.z,He)}}else de.visible&&y.push(A,me,de,Y,Ke.z,null)}}const fe=A.children;for(let me=0,de=fe.length;me<de;me++)Ic(fe[me],k,Y,W)}function Mm(A,k,Y,W){const{opaque:G,transmissive:fe,transparent:me}=A;E.setupLightsView(Y),we===!0&&se.setGlobalState(T.clippingPlanes,Y),W&&Ee.viewport(z.copy(W)),G.length>0&&vl(G,k,Y),fe.length>0&&vl(fe,k,Y),me.length>0&&vl(me,k,Y),Ee.buffers.depth.setTest(!0),Ee.buffers.depth.setMask(!0),Ee.buffers.color.setMask(!0),Ee.setPolygonOffset(!1)}function Em(A,k,Y,W){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[W.id]===void 0){const Re=et.has("EXT_color_buffer_half_float")||et.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[W.id]=new Ii(1,1,{generateMipmaps:!0,type:Re?lr:Zn,minFilter:Ss,samples:Math.max(4,ft.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:qe.workingColorSpace})}const fe=E.state.transmissionRenderTarget[W.id],me=W.viewport||z;fe.setSize(me.z*T.transmissionResolutionScale,me.w*T.transmissionResolutionScale);const de=T.getRenderTarget(),Me=T.getActiveCubeFace(),Ce=T.getActiveMipmapLevel();T.setRenderTarget(fe),T.getClearColor(H),Z=T.getClearAlpha(),Z<1&&T.setClearColor(16777215,.5),T.clear(),Be&&ye.render(Y);const ke=T.toneMapping;T.toneMapping=Ni;const He=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),E.setupLightsView(W),we===!0&&se.setGlobalState(T.clippingPlanes,W),vl(A,Y,W),F.updateMultisampleRenderTarget(fe),F.updateRenderTargetMipmap(fe),et.has("WEBGL_multisampled_render_to_texture")===!1){let Re=!1;for(let st=0,bt=k.length;st<bt;st++){const At=k[st],{object:at,geometry:Jt,material:Te,group:bn}=At;if(Te.side===Ki&&at.layers.test(W.layers)){const Ze=Te.side;Te.side=En,Te.needsUpdate=!0,Tm(at,Y,W,Jt,Te,bn),Te.side=Ze,Te.needsUpdate=!0,Re=!0}}Re===!0&&(F.updateMultisampleRenderTarget(fe),F.updateRenderTargetMipmap(fe))}T.setRenderTarget(de,Me,Ce),T.setClearColor(H,Z),He!==void 0&&(W.viewport=He),T.toneMapping=ke}function vl(A,k,Y){const W=k.isScene===!0?k.overrideMaterial:null;for(let G=0,fe=A.length;G<fe;G++){const me=A[G],{object:de,geometry:Me,group:Ce}=me;let ke=me.material;ke.allowOverride===!0&&W!==null&&(ke=W),de.layers.test(Y.layers)&&Tm(de,k,Y,Me,ke,Ce)}}function Tm(A,k,Y,W,G,fe){A.onBeforeRender(T,k,Y,W,G,fe),A.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),G.onBeforeRender(T,k,Y,W,A,fe),G.transparent===!0&&G.side===Ki&&G.forceSinglePass===!1?(G.side=En,G.needsUpdate=!0,T.renderBufferDirect(Y,k,W,G,A,fe),G.side=jr,G.needsUpdate=!0,T.renderBufferDirect(Y,k,W,G,A,fe),G.side=Ki):T.renderBufferDirect(Y,k,W,G,A,fe),A.onAfterRender(T,k,Y,W,G,fe)}function xl(A,k,Y){k.isScene!==!0&&(k=tt);const W=M.get(A),G=E.state.lights,fe=E.state.shadowsArray,me=G.state.version,de=le.getParameters(A,G.state,fe,k,Y),Me=le.getProgramCacheKey(de);let Ce=W.programs;W.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?k.environment:null,W.fog=k.fog;const ke=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;W.envMap=K.get(A.envMap||W.environment,ke),W.envMapRotation=W.environment!==null&&A.envMap===null?k.environmentRotation:A.envMapRotation,Ce===void 0&&(A.addEventListener("dispose",nt),Ce=new Map,W.programs=Ce);let He=Ce.get(Me);if(He!==void 0){if(W.currentProgram===He&&W.lightsStateVersion===me)return Am(A,de),He}else de.uniforms=le.getUniforms(A),A.onBeforeCompile(de,T),He=le.acquireProgram(de,Me),Ce.set(Me,He),W.uniforms=de.uniforms;const Re=W.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Re.clippingPlanes=se.uniform),Am(A,de),W.needsLights=HS(A),W.lightsStateVersion=me,W.needsLights&&(Re.ambientLightColor.value=G.state.ambient,Re.lightProbe.value=G.state.probe,Re.directionalLights.value=G.state.directional,Re.directionalLightShadows.value=G.state.directionalShadow,Re.spotLights.value=G.state.spot,Re.spotLightShadows.value=G.state.spotShadow,Re.rectAreaLights.value=G.state.rectArea,Re.ltc_1.value=G.state.rectAreaLTC1,Re.ltc_2.value=G.state.rectAreaLTC2,Re.pointLights.value=G.state.point,Re.pointLightShadows.value=G.state.pointShadow,Re.hemisphereLights.value=G.state.hemi,Re.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Re.spotLightMatrix.value=G.state.spotLightMatrix,Re.spotLightMap.value=G.state.spotLightMap,Re.pointShadowMatrix.value=G.state.pointShadowMatrix),W.currentProgram=He,W.uniformsList=null,He}function wm(A){if(A.uniformsList===null){const k=A.currentProgram.getUniforms();A.uniformsList=wu.seqWithValue(k.seq,A.uniforms)}return A.uniformsList}function Am(A,k){const Y=M.get(A);Y.outputColorSpace=k.outputColorSpace,Y.batching=k.batching,Y.batchingColor=k.batchingColor,Y.instancing=k.instancing,Y.instancingColor=k.instancingColor,Y.instancingMorph=k.instancingMorph,Y.skinning=k.skinning,Y.morphTargets=k.morphTargets,Y.morphNormals=k.morphNormals,Y.morphColors=k.morphColors,Y.morphTargetsCount=k.morphTargetsCount,Y.numClippingPlanes=k.numClippingPlanes,Y.numIntersection=k.numClipIntersection,Y.vertexAlphas=k.vertexAlphas,Y.vertexTangents=k.vertexTangents,Y.toneMapping=k.toneMapping}function VS(A,k,Y,W,G){k.isScene!==!0&&(k=tt),F.resetTextureUnits();const fe=k.fog,me=W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial?k.environment:null,de=B===null?T.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:ka,Me=W.isMeshStandardMaterial||W.isMeshLambertMaterial&&!W.envMap||W.isMeshPhongMaterial&&!W.envMap,Ce=K.get(W.envMap||me,Me),ke=W.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,He=!!Y.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Re=!!Y.morphAttributes.position,st=!!Y.morphAttributes.normal,bt=!!Y.morphAttributes.color;let At=Ni;W.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(At=T.toneMapping);const at=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,Jt=at!==void 0?at.length:0,Te=M.get(W),bn=E.state.lights;if(we===!0&&(Ae===!0||A!==L)){const Gt=A===L&&W.id===O;se.setState(W,A,Gt)}let Ze=!1;W.version===Te.__version?(Te.needsLights&&Te.lightsStateVersion!==bn.state.version||Te.outputColorSpace!==de||G.isBatchedMesh&&Te.batching===!1||!G.isBatchedMesh&&Te.batching===!0||G.isBatchedMesh&&Te.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&Te.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&Te.instancing===!1||!G.isInstancedMesh&&Te.instancing===!0||G.isSkinnedMesh&&Te.skinning===!1||!G.isSkinnedMesh&&Te.skinning===!0||G.isInstancedMesh&&Te.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Te.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Te.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Te.instancingMorph===!1&&G.morphTexture!==null||Te.envMap!==Ce||W.fog===!0&&Te.fog!==fe||Te.numClippingPlanes!==void 0&&(Te.numClippingPlanes!==se.numPlanes||Te.numIntersection!==se.numIntersection)||Te.vertexAlphas!==ke||Te.vertexTangents!==He||Te.morphTargets!==Re||Te.morphNormals!==st||Te.morphColors!==bt||Te.toneMapping!==At||Te.morphTargetsCount!==Jt)&&(Ze=!0):(Ze=!0,Te.__version=W.version);let ri=Te.currentProgram;Ze===!0&&(ri=xl(W,k,G));let xi=!1,ns=!1,ks=!1;const lt=ri.getUniforms(),jt=Te.uniforms;if(Ee.useProgram(ri.program)&&(xi=!0,ns=!0,ks=!0),W.id!==O&&(O=W.id,ns=!0),xi||L!==A){Ee.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),lt.setValue(P,"projectionMatrix",A.projectionMatrix),lt.setValue(P,"viewMatrix",A.matrixWorldInverse);const _r=lt.map.cameraPosition;_r!==void 0&&_r.setValue(P,Oe.setFromMatrixPosition(A.matrixWorld)),ft.logarithmicDepthBuffer&&lt.setValue(P,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&lt.setValue(P,"isOrthographic",A.isOrthographicCamera===!0),L!==A&&(L=A,ns=!0,ks=!0)}if(Te.needsLights&&(bn.state.directionalShadowMap.length>0&&lt.setValue(P,"directionalShadowMap",bn.state.directionalShadowMap,F),bn.state.spotShadowMap.length>0&&lt.setValue(P,"spotShadowMap",bn.state.spotShadowMap,F),bn.state.pointShadowMap.length>0&&lt.setValue(P,"pointShadowMap",bn.state.pointShadowMap,F)),G.isSkinnedMesh){lt.setOptional(P,G,"bindMatrix"),lt.setOptional(P,G,"bindMatrixInverse");const Gt=G.skeleton;Gt&&(Gt.boneTexture===null&&Gt.computeBoneTexture(),lt.setValue(P,"boneTexture",Gt.boneTexture,F))}G.isBatchedMesh&&(lt.setOptional(P,G,"batchingTexture"),lt.setValue(P,"batchingTexture",G._matricesTexture,F),lt.setOptional(P,G,"batchingIdTexture"),lt.setValue(P,"batchingIdTexture",G._indirectTexture,F),lt.setOptional(P,G,"batchingColorTexture"),G._colorsTexture!==null&&lt.setValue(P,"batchingColorTexture",G._colorsTexture,F));const mr=Y.morphAttributes;if((mr.position!==void 0||mr.normal!==void 0||mr.color!==void 0)&&pe.update(G,Y,ri),(ns||Te.receiveShadow!==G.receiveShadow)&&(Te.receiveShadow=G.receiveShadow,lt.setValue(P,"receiveShadow",G.receiveShadow)),(W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial)&&W.envMap===null&&k.environment!==null&&(jt.envMapIntensity.value=k.environmentIntensity),jt.dfgLUT!==void 0&&(jt.dfgLUT.value=LR()),ns&&(lt.setValue(P,"toneMappingExposure",T.toneMappingExposure),Te.needsLights&&GS(jt,ks),fe&&W.fog===!0&&be.refreshFogUniforms(jt,fe),be.refreshMaterialUniforms(jt,W,Pe,J,E.state.transmissionRenderTarget[A.id]),wu.upload(P,wm(Te),jt,F)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(wu.upload(P,wm(Te),jt,F),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&lt.setValue(P,"center",G.center),lt.setValue(P,"modelViewMatrix",G.modelViewMatrix),lt.setValue(P,"normalMatrix",G.normalMatrix),lt.setValue(P,"modelMatrix",G.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const Gt=W.uniformsGroups;for(let _r=0,Bs=Gt.length;_r<Bs;_r++){const Cm=Gt[_r];ge.update(Cm,ri),ge.bind(Cm,ri)}}return ri}function GS(A,k){A.ambientLightColor.needsUpdate=k,A.lightProbe.needsUpdate=k,A.directionalLights.needsUpdate=k,A.directionalLightShadows.needsUpdate=k,A.pointLights.needsUpdate=k,A.pointLightShadows.needsUpdate=k,A.spotLights.needsUpdate=k,A.spotLightShadows.needsUpdate=k,A.rectAreaLights.needsUpdate=k,A.hemisphereLights.needsUpdate=k}function HS(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return V},this.getRenderTarget=function(){return B},this.setRenderTargetTextures=function(A,k,Y){const W=M.get(A);W.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),M.get(A.texture).__webglTexture=k,M.get(A.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:Y,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,k){const Y=M.get(A);Y.__webglFramebuffer=k,Y.__useDefaultFramebuffer=k===void 0};const WS=P.createFramebuffer();this.setRenderTarget=function(A,k=0,Y=0){B=A,b=k,V=Y;let W=null,G=!1,fe=!1;if(A){const de=M.get(A);if(de.__useDefaultFramebuffer!==void 0){Ee.bindFramebuffer(P.FRAMEBUFFER,de.__webglFramebuffer),z.copy(A.viewport),N.copy(A.scissor),U=A.scissorTest,Ee.viewport(z),Ee.scissor(N),Ee.setScissorTest(U),O=-1;return}else if(de.__webglFramebuffer===void 0)F.setupRenderTarget(A);else if(de.__hasExternalTextures)F.rebindTextures(A,M.get(A.texture).__webglTexture,M.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const ke=A.depthTexture;if(de.__boundDepthTexture!==ke){if(ke!==null&&M.has(ke)&&(A.width!==ke.image.width||A.height!==ke.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");F.setupDepthRenderbuffer(A)}}const Me=A.texture;(Me.isData3DTexture||Me.isDataArrayTexture||Me.isCompressedArrayTexture)&&(fe=!0);const Ce=M.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Ce[k])?W=Ce[k][Y]:W=Ce[k],G=!0):A.samples>0&&F.useMultisampledRTT(A)===!1?W=M.get(A).__webglMultisampledFramebuffer:Array.isArray(Ce)?W=Ce[Y]:W=Ce,z.copy(A.viewport),N.copy(A.scissor),U=A.scissorTest}else z.copy(j).multiplyScalar(Pe).floor(),N.copy(re).multiplyScalar(Pe).floor(),U=oe;if(Y!==0&&(W=WS),Ee.bindFramebuffer(P.FRAMEBUFFER,W)&&Ee.drawBuffers(A,W),Ee.viewport(z),Ee.scissor(N),Ee.setScissorTest(U),G){const de=M.get(A.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+k,de.__webglTexture,Y)}else if(fe){const de=k;for(let Me=0;Me<A.textures.length;Me++){const Ce=M.get(A.textures[Me]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+Me,Ce.__webglTexture,Y,de)}}else if(A!==null&&Y!==0){const de=M.get(A.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,de.__webglTexture,Y)}O=-1},this.readRenderTargetPixels=function(A,k,Y,W,G,fe,me,de=0){if(!(A&&A.isWebGLRenderTarget)){Qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Me=M.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&me!==void 0&&(Me=Me[me]),Me){Ee.bindFramebuffer(P.FRAMEBUFFER,Me);try{const Ce=A.textures[de],ke=Ce.format,He=Ce.type;if(A.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+de),!ft.textureFormatReadable(ke)){Qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ft.textureTypeReadable(He)){Qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=A.width-W&&Y>=0&&Y<=A.height-G&&P.readPixels(k,Y,W,G,ue.convert(ke),ue.convert(He),fe)}finally{const Ce=B!==null?M.get(B).__webglFramebuffer:null;Ee.bindFramebuffer(P.FRAMEBUFFER,Ce)}}},this.readRenderTargetPixelsAsync=async function(A,k,Y,W,G,fe,me,de=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Me=M.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&me!==void 0&&(Me=Me[me]),Me)if(k>=0&&k<=A.width-W&&Y>=0&&Y<=A.height-G){Ee.bindFramebuffer(P.FRAMEBUFFER,Me);const Ce=A.textures[de],ke=Ce.format,He=Ce.type;if(A.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+de),!ft.textureFormatReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ft.textureTypeReadable(He))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Re=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,Re),P.bufferData(P.PIXEL_PACK_BUFFER,fe.byteLength,P.STREAM_READ),P.readPixels(k,Y,W,G,ue.convert(ke),ue.convert(He),0);const st=B!==null?M.get(B).__webglFramebuffer:null;Ee.bindFramebuffer(P.FRAMEBUFFER,st);const bt=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await n1(P,bt,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,Re),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,fe),P.deleteBuffer(Re),P.deleteSync(bt),fe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,k=null,Y=0){const W=Math.pow(2,-Y),G=Math.floor(A.image.width*W),fe=Math.floor(A.image.height*W),me=k!==null?k.x:0,de=k!==null?k.y:0;F.setTexture2D(A,0),P.copyTexSubImage2D(P.TEXTURE_2D,Y,0,0,me,de,G,fe),Ee.unbindTexture()};const XS=P.createFramebuffer(),YS=P.createFramebuffer();this.copyTextureToTexture=function(A,k,Y=null,W=null,G=0,fe=0){let me,de,Me,Ce,ke,He,Re,st,bt;const At=A.isCompressedTexture?A.mipmaps[fe]:A.image;if(Y!==null)me=Y.max.x-Y.min.x,de=Y.max.y-Y.min.y,Me=Y.isBox3?Y.max.z-Y.min.z:1,Ce=Y.min.x,ke=Y.min.y,He=Y.isBox3?Y.min.z:0;else{const jt=Math.pow(2,-G);me=Math.floor(At.width*jt),de=Math.floor(At.height*jt),A.isDataArrayTexture?Me=At.depth:A.isData3DTexture?Me=Math.floor(At.depth*jt):Me=1,Ce=0,ke=0,He=0}W!==null?(Re=W.x,st=W.y,bt=W.z):(Re=0,st=0,bt=0);const at=ue.convert(k.format),Jt=ue.convert(k.type);let Te;k.isData3DTexture?(F.setTexture3D(k,0),Te=P.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(F.setTexture2DArray(k,0),Te=P.TEXTURE_2D_ARRAY):(F.setTexture2D(k,0),Te=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,k.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,k.unpackAlignment);const bn=P.getParameter(P.UNPACK_ROW_LENGTH),Ze=P.getParameter(P.UNPACK_IMAGE_HEIGHT),ri=P.getParameter(P.UNPACK_SKIP_PIXELS),xi=P.getParameter(P.UNPACK_SKIP_ROWS),ns=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,At.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,At.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Ce),P.pixelStorei(P.UNPACK_SKIP_ROWS,ke),P.pixelStorei(P.UNPACK_SKIP_IMAGES,He);const ks=A.isDataArrayTexture||A.isData3DTexture,lt=k.isDataArrayTexture||k.isData3DTexture;if(A.isDepthTexture){const jt=M.get(A),mr=M.get(k),Gt=M.get(jt.__renderTarget),_r=M.get(mr.__renderTarget);Ee.bindFramebuffer(P.READ_FRAMEBUFFER,Gt.__webglFramebuffer),Ee.bindFramebuffer(P.DRAW_FRAMEBUFFER,_r.__webglFramebuffer);for(let Bs=0;Bs<Me;Bs++)ks&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,M.get(A).__webglTexture,G,He+Bs),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,M.get(k).__webglTexture,fe,bt+Bs)),P.blitFramebuffer(Ce,ke,me,de,Re,st,me,de,P.DEPTH_BUFFER_BIT,P.NEAREST);Ee.bindFramebuffer(P.READ_FRAMEBUFFER,null),Ee.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(G!==0||A.isRenderTargetTexture||M.has(A)){const jt=M.get(A),mr=M.get(k);Ee.bindFramebuffer(P.READ_FRAMEBUFFER,XS),Ee.bindFramebuffer(P.DRAW_FRAMEBUFFER,YS);for(let Gt=0;Gt<Me;Gt++)ks?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,jt.__webglTexture,G,He+Gt):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,jt.__webglTexture,G),lt?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,mr.__webglTexture,fe,bt+Gt):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,mr.__webglTexture,fe),G!==0?P.blitFramebuffer(Ce,ke,me,de,Re,st,me,de,P.COLOR_BUFFER_BIT,P.NEAREST):lt?P.copyTexSubImage3D(Te,fe,Re,st,bt+Gt,Ce,ke,me,de):P.copyTexSubImage2D(Te,fe,Re,st,Ce,ke,me,de);Ee.bindFramebuffer(P.READ_FRAMEBUFFER,null),Ee.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else lt?A.isDataTexture||A.isData3DTexture?P.texSubImage3D(Te,fe,Re,st,bt,me,de,Me,at,Jt,At.data):k.isCompressedArrayTexture?P.compressedTexSubImage3D(Te,fe,Re,st,bt,me,de,Me,at,At.data):P.texSubImage3D(Te,fe,Re,st,bt,me,de,Me,at,Jt,At):A.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,fe,Re,st,me,de,at,Jt,At.data):A.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,fe,Re,st,At.width,At.height,at,At.data):P.texSubImage2D(P.TEXTURE_2D,fe,Re,st,me,de,at,Jt,At);P.pixelStorei(P.UNPACK_ROW_LENGTH,bn),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Ze),P.pixelStorei(P.UNPACK_SKIP_PIXELS,ri),P.pixelStorei(P.UNPACK_SKIP_ROWS,xi),P.pixelStorei(P.UNPACK_SKIP_IMAGES,ns),fe===0&&k.generateMipmaps&&P.generateMipmap(Te),Ee.unbindTexture()},this.initRenderTarget=function(A){M.get(A).__webglFramebuffer===void 0&&F.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?F.setTextureCube(A,0):A.isData3DTexture?F.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?F.setTexture2DArray(A,0):F.setTexture2D(A,0),Ee.unbindTexture()},this.resetState=function(){b=0,V=0,B=null,Ee.reset(),ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return bi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=qe._getDrawingBufferColorSpace(e),t.unpackColorSpace=qe._getUnpackColorSpace()}}const IR=`
precision highp float;

void main() {
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,UR=`
precision highp float;

uniform float iTime;
uniform vec3  iResolution;
uniform float animationSpeed;

uniform bool enableTop;
uniform bool enableMiddle;
uniform bool enableBottom;

uniform int topLineCount;
uniform int middleLineCount;
uniform int bottomLineCount;

uniform float topLineDistance;
uniform float middleLineDistance;
uniform float bottomLineDistance;

uniform vec3 topWavePosition;
uniform vec3 middleWavePosition;
uniform vec3 bottomWavePosition;

uniform vec2 iMouse;
uniform bool interactive;
uniform float bendRadius;
uniform float bendStrength;
uniform float bendInfluence;

uniform bool parallax;
uniform float parallaxStrength;
uniform vec2 parallaxOffset;

uniform vec3 lineGradient[8];
uniform int lineGradientCount;

const vec3 BLACK = vec3(0.0);
const vec3 PINK  = vec3(233.0, 71.0, 245.0) / 255.0;
const vec3 BLUE  = vec3(47.0,  75.0, 162.0) / 255.0;

mat2 rotate(float r) {
  return mat2(cos(r), sin(r), -sin(r), cos(r));
}

vec3 background_color(vec2 uv) {
  vec3 col = vec3(0.0);

  float y = sin(uv.x - 0.2) * 0.3 - 0.1;
  float m = uv.y - y;

  col += mix(BLUE, BLACK, smoothstep(0.0, 1.0, abs(m)));
  col += mix(PINK, BLACK, smoothstep(0.0, 1.0, abs(m - 0.8)));
  return col * 0.5;
}

vec3 getLineColor(float t, vec3 baseColor) {
  if (lineGradientCount <= 0) {
    return baseColor;
  }

  vec3 gradientColor;

  if (lineGradientCount == 1) {
    gradientColor = lineGradient[0];
  } else {
    float clampedT = clamp(t, 0.0, 0.9999);
    float scaled = clampedT * float(lineGradientCount - 1);
    int idx = int(floor(scaled));
    float f = fract(scaled);
    int idx2 = min(idx + 1, lineGradientCount - 1);

    vec3 c1 = lineGradient[idx];
    vec3 c2 = lineGradient[idx2];

    gradientColor = mix(c1, c2, f);
  }

  return gradientColor * 0.5;
}

float wave(vec2 uv, float offset, vec2 screenUv, vec2 mouseUv, bool shouldBend) {
  float time = iTime * animationSpeed;

  float x_offset   = offset;
  float x_movement = time * 0.1;
  float amp        = sin(offset + time * 0.2) * 0.3;
  float y          = sin(uv.x + x_offset + x_movement) * amp;

  if (shouldBend) {
    vec2 d = screenUv - mouseUv;
    float influence = exp(-dot(d, d) * bendRadius);
    float bendOffset = (mouseUv.y - screenUv.y) * influence * bendStrength * bendInfluence;
    y += bendOffset;
  }

  float m = uv.y - y;
  return 0.0175 / max(abs(m) + 0.01, 1e-3) + 0.01;
}

void mainImage(out vec4 fragColor, in vec2 fragCoord) {
  vec2 baseUv = (2.0 * fragCoord - iResolution.xy) / iResolution.y;
  baseUv.y *= -1.0;

  if (parallax) {
    baseUv += parallaxOffset;
  }

  vec3 col = vec3(0.0);

  vec3 b = lineGradientCount > 0 ? vec3(0.0) : background_color(baseUv);

  vec2 mouseUv = vec2(0.0);
  if (interactive) {
    mouseUv = (2.0 * iMouse - iResolution.xy) / iResolution.y;
    mouseUv.y *= -1.0;
  }

  if (enableBottom) {
    for (int i = 0; i < bottomLineCount; ++i) {
      float fi = float(i);
      float t = fi / max(float(bottomLineCount - 1), 1.0);
      vec3 lineCol = getLineColor(t, b);

      float angle = bottomWavePosition.z * log(length(baseUv) + 1.0);
      vec2 ruv = baseUv * rotate(angle);
      col += lineCol * wave(
        ruv + vec2(bottomLineDistance * fi + bottomWavePosition.x, bottomWavePosition.y),
        1.5 + 0.2 * fi,
        baseUv,
        mouseUv,
        interactive
      ) * 0.2;
    }
  }

  if (enableMiddle) {
    for (int i = 0; i < middleLineCount; ++i) {
      float fi = float(i);
      float t = fi / max(float(middleLineCount - 1), 1.0);
      vec3 lineCol = getLineColor(t, b);

      float angle = middleWavePosition.z * log(length(baseUv) + 1.0);
      vec2 ruv = baseUv * rotate(angle);
      col += lineCol * wave(
        ruv + vec2(middleLineDistance * fi + middleWavePosition.x, middleWavePosition.y),
        2.0 + 0.15 * fi,
        baseUv,
        mouseUv,
        interactive
      );
    }
  }

  if (enableTop) {
    for (int i = 0; i < topLineCount; ++i) {
      float fi = float(i);
      float t = fi / max(float(topLineCount - 1), 1.0);
      vec3 lineCol = getLineColor(t, b);

      float angle = topWavePosition.z * log(length(baseUv) + 1.0);
      vec2 ruv = baseUv * rotate(angle);
      ruv.x *= -1.0;
      col += lineCol * wave(
        ruv + vec2(topLineDistance * fi + topWavePosition.x, topWavePosition.y),
        1.0 + 0.2 * fi,
        baseUv,
        mouseUv,
        interactive
      ) * 0.1;
    }
  }

  fragColor = vec4(col, 1.0);
}

void main() {
  vec4 color = vec4(0.0);
  mainImage(color, gl_FragCoord.xy);
  gl_FragColor = color;
}
`,Lg=8;function FR(n){let e=n.trim();e.startsWith("#")&&(e=e.slice(1));let t=255,i=255,r=255;return e.length===3?(t=parseInt(e[0]+e[0],16),i=parseInt(e[1]+e[1],16),r=parseInt(e[2]+e[2],16)):e.length===6&&(t=parseInt(e.slice(0,2),16),i=parseInt(e.slice(2,4),16),r=parseInt(e.slice(4,6),16)),new X(t/255,i/255,r/255)}function OR({linesGradient:n,enabledWaves:e=["top","middle","bottom"],lineCount:t=[6],lineDistance:i=[5],topWavePosition:r,middleWavePosition:s,bottomWavePosition:a={x:2,y:-.7,rotate:-1},animationSpeed:o=1,interactive:l=!0,bendRadius:u=5,bendStrength:c=-.5,mouseDamping:h=.05,parallax:f=!0,parallaxStrength:p=.2,mixBlendMode:g="screen"}){const v=Je.useRef(null),m=Je.useRef(new je(-1e3,-1e3)),d=Je.useRef(new je(-1e3,-1e3)),_=Je.useRef(0),x=Je.useRef(0),y=Je.useRef(new je(0,0)),E=Je.useRef(new je(0,0)),C=O=>{if(typeof t=="number")return t;if(!e.includes(O))return 0;const L=e.indexOf(O);return t[L]??6},w=O=>{if(typeof i=="number")return i;if(!e.includes(O))return .1;const L=e.indexOf(O);return i[L]??.1},S=e.includes("top")?C("top"):0,T=e.includes("middle")?C("middle"):0,D=e.includes("bottom")?C("bottom"):0,b=e.includes("top")?w("top")*.01:.01,V=e.includes("middle")?w("middle")*.01:.01,B=e.includes("bottom")?w("bottom")*.01:.01;return Je.useEffect(()=>{const O=v.current;if(!O)return;let L=!0;const z=new v1,N=new em(-1,1,1,-1,0,1);N.position.z=1;const U=new NR({antialias:!0,alpha:!1});U.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),U.domElement.style.width="100%",U.domElement.style.height="100%",O.appendChild(U.domElement);const H={iTime:{value:0},iResolution:{value:new X(1,1,1)},animationSpeed:{value:o},enableTop:{value:e.includes("top")},enableMiddle:{value:e.includes("middle")},enableBottom:{value:e.includes("bottom")},topLineCount:{value:S},middleLineCount:{value:T},bottomLineCount:{value:D},topLineDistance:{value:b},middleLineDistance:{value:V},bottomLineDistance:{value:B},topWavePosition:{value:new X((r==null?void 0:r.x)??10,(r==null?void 0:r.y)??.5,(r==null?void 0:r.rotate)??-.4)},middleWavePosition:{value:new X((s==null?void 0:s.x)??5,(s==null?void 0:s.y)??0,(s==null?void 0:s.rotate)??.2)},bottomWavePosition:{value:new X((a==null?void 0:a.x)??2,(a==null?void 0:a.y)??-.7,(a==null?void 0:a.rotate)??.4)},iMouse:{value:new je(-1e3,-1e3)},interactive:{value:l},bendRadius:{value:u},bendStrength:{value:c},bendInfluence:{value:0},parallax:{value:f},parallaxStrength:{value:p},parallaxOffset:{value:new je(0,0)},lineGradient:{value:Array.from({length:Lg},()=>new X(1,1,1))},lineGradientCount:{value:0}};if(n&&n.length>0){const we=n.slice(0,Lg);H.lineGradientCount.value=we.length,we.forEach((Ae,pt)=>{const Oe=FR(Ae);H.lineGradient.value[pt].set(Oe.x,Oe.y,Oe.z)})}const Z=new vi({uniforms:H,vertexShader:IR,fragmentShader:UR}),ee=new _l(2,2),J=new Oi(ee,Z);z.add(J);const Pe=new B1,Le=()=>{if(!L)return;const we=O.clientWidth||1,Ae=O.clientHeight||1;U.setSize(we,Ae,!1);const pt=U.domElement.width,Oe=U.domElement.height;H.iResolution.value.set(pt,Oe,1)};Le();const Fe=typeof ResizeObserver<"u"?new ResizeObserver(()=>{L&&Le()}):null;Fe&&Fe.observe(O);const j=we=>{const Ae=U.domElement.getBoundingClientRect(),pt=we.clientX-Ae.left,Oe=we.clientY-Ae.top,Ke=U.getPixelRatio();if(m.current.set(pt*Ke,(Ae.height-Oe)*Ke),_.current=1,f){const tt=Ae.width/2,Be=Ae.height/2,xt=(pt-tt)/Ae.width,P=-(Oe-Be)/Ae.height;y.current.set(xt*p,P*p)}},re=()=>{_.current=0,y.current.set(0,0)};l&&(U.domElement.addEventListener("pointermove",j),U.domElement.addEventListener("pointerleave",re));let oe=0;const Ie=()=>{L&&(H.iTime.value=Pe.getElapsedTime(),l&&(d.current.lerp(m.current,h),H.iMouse.value.copy(d.current),x.current+=(_.current-x.current)*h,H.bendInfluence.value=x.current),f&&(E.current.lerp(y.current,h),H.parallaxOffset.value.copy(E.current)),U.render(z,N),oe=requestAnimationFrame(Ie))};return Ie(),()=>{L=!1,cancelAnimationFrame(oe),Fe&&Fe.disconnect(),l&&(U.domElement.removeEventListener("pointermove",j),U.domElement.removeEventListener("pointerleave",re)),ee.dispose(),Z.dispose(),U.dispose(),U.forceContextLoss(),U.domElement.parentElement&&U.domElement.parentElement.removeChild(U.domElement)}},[n,e,t,i,r,s,a,o,l,u,c,h,f,p,S,T,D,b,V,B]),he.jsx("div",{ref:v,className:"floating-lines-container",style:{mixBlendMode:g}})}function ji(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function Wx(n,e){n.prototype=Object.create(e.prototype),n.prototype.constructor=n,n.__proto__=e}/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var zn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},el={duration:.5,overwrite:!1,delay:0},tm,Zt,vt,Jn=1e8,ct=1/Jn,Uh=Math.PI*2,kR=Uh/4,BR=0,Xx=Math.sqrt,zR=Math.cos,VR=Math.sin,Yt=function(e){return typeof e=="string"},Rt=function(e){return typeof e=="function"},fr=function(e){return typeof e=="number"},nm=function(e){return typeof e>"u"},ki=function(e){return typeof e=="object"},Tn=function(e){return e!==!1},im=function(){return typeof window<"u"},au=function(e){return Rt(e)||Yt(e)},Yx=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},ln=Array.isArray,GR=/random\([^)]+\)/g,HR=/,\s*/g,Ng=/(?:-?\.?\d|\.)+/gi,jx=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,ma=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Vf=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,qx=/[+-]=-?[.\d]+/,WR=/[^,'"\[\]\s]+/gi,XR=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Mt,Ti,Fh,rm,Gn={},ic={},$x,Kx=function(e){return(ic=za(e,Gn))&&Rn},sm=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},tl=function(e,t){return!t&&console.warn(e)},Zx=function(e,t){return e&&(Gn[e]=t)&&ic&&(ic[e]=t)||Gn},nl=function(){return 0},YR={suppressEvents:!0,isStart:!0,kill:!1},Au={suppressEvents:!0,kill:!1},jR={suppressEvents:!0},am={},Hr=[],Oh={},Qx,Nn={},Gf={},Ig=30,Cu=[],om="",lm=function(e){var t=e[0],i,r;if(ki(t)||Rt(t)||(e=[e]),!(i=(t._gsap||{}).harness)){for(r=Cu.length;r--&&!Cu[r].targetTest(t););i=Cu[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new SS(e[r],i)))||e.splice(r,1);return e},ws=function(e){return e._gsap||lm(ei(e))[0]._gsap},Jx=function(e,t,i){return(i=e[t])&&Rt(i)?e[t]():nm(i)&&e.getAttribute&&e.getAttribute(t)||i},wn=function(e,t){return(e=e.split(",")).forEach(t)||e},Pt=function(e){return Math.round(e*1e5)/1e5||0},St=function(e){return Math.round(e*1e7)/1e7||0},wa=function(e,t){var i=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),i==="+"?e+r:i==="-"?e-r:i==="*"?e*r:e/r},qR=function(e,t){for(var i=t.length,r=0;e.indexOf(t[r])<0&&++r<i;);return r<i},rc=function(){var e=Hr.length,t=Hr.slice(0),i,r;for(Oh={},Hr.length=0,i=0;i<e;i++)r=t[i],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},um=function(e){return!!(e._initted||e._startAt||e.add)},eS=function(e,t,i,r){Hr.length&&!Zt&&rc(),e.render(t,i,!!(Zt&&t<0&&um(e))),Hr.length&&!Zt&&rc()},tS=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(WR).length<2?t:Yt(e)?e.trim():e},nS=function(e){return e},Hn=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},$R=function(e){return function(t,i){for(var r in i)r in t||r==="duration"&&e||r==="ease"||(t[r]=i[r])}},za=function(e,t){for(var i in t)e[i]=t[i];return e},Ug=function n(e,t){for(var i in t)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(e[i]=ki(t[i])?n(e[i]||(e[i]={}),t[i]):t[i]);return e},sc=function(e,t){var i={},r;for(r in e)r in t||(i[r]=e[r]);return i},Do=function(e){var t=e.parent||Mt,i=e.keyframes?$R(ln(e.keyframes)):Hn;if(Tn(e.inherit))for(;t;)i(e,t.vars.defaults),t=t.parent||t._dp;return e},KR=function(e,t){for(var i=e.length,r=i===t.length;r&&i--&&e[i]===t[i];);return i<0},iS=function(e,t,i,r,s){var a=e[r],o;if(s)for(o=t[s];a&&a[s]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[i],e[i]=t),t._next?t._next._prev=t:e[r]=t,t._prev=a,t.parent=t._dp=e,t},Pc=function(e,t,i,r){i===void 0&&(i="_first"),r===void 0&&(r="_last");var s=t._prev,a=t._next;s?s._next=a:e[i]===t&&(e[i]=a),a?a._prev=s:e[r]===t&&(e[r]=s),t._next=t._prev=t.parent=null},qr=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},As=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var i=e;i;)i._dirty=1,i=i.parent;return e},ZR=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},kh=function(e,t,i,r){return e._startAt&&(Zt?e._startAt.revert(Au):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},QR=function n(e){return!e||e._ts&&n(e.parent)},Fg=function(e){return e._repeat?Va(e._tTime,e=e.duration()+e._rDelay)*e:0},Va=function(e,t){var i=Math.floor(e=St(e/t));return e&&i===e?i-1:i},ac=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Dc=function(e){return e._end=St(e._start+(e._tDur/Math.abs(e._ts||e._rts||ct)||0))},Lc=function(e,t){var i=e._dp;return i&&i.smoothChildTiming&&e._ts&&(e._start=St(i._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Dc(e),i._dirty||As(i,e)),e},rS=function(e,t){var i;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(i=ac(e.rawTime(),t),(!t._dur||gl(0,t.totalDuration(),i)-t._tTime>ct)&&t.render(i,!0)),As(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(i=e;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;e._zTime=-ct}},Ci=function(e,t,i,r){return t.parent&&qr(t),t._start=St((fr(i)?i:i||e!==Mt?jn(e,i,t):e._time)+t._delay),t._end=St(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),iS(e,t,"_first","_last",e._sort?"_start":0),Bh(t)||(e._recent=t),r||rS(e,t),e._ts<0&&Lc(e,e._tTime),e},sS=function(e,t){return(Gn.ScrollTrigger||sm("scrollTrigger",t))&&Gn.ScrollTrigger.create(t,e)},aS=function(e,t,i,r,s){if(fm(e,t,s),!e._initted)return 1;if(!i&&e._pt&&!Zt&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Qx!==In.frame)return Hr.push(e),e._lazy=[s,r],1},JR=function n(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||n(t))},Bh=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},eb=function(e,t,i,r){var s=e.ratio,a=t<0||!t&&(!e._start&&JR(e)&&!(!e._initted&&Bh(e))||(e._ts<0||e._dp._ts<0)&&!Bh(e))?0:1,o=e._rDelay,l=0,u,c,h;if(o&&e._repeat&&(l=gl(0,e._tDur,t),c=Va(l,o),e._yoyo&&c&1&&(a=1-a),c!==Va(e._tTime,o)&&(s=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==s||Zt||r||e._zTime===ct||!t&&e._zTime){if(!e._initted&&aS(e,t,r,i,l))return;for(h=e._zTime,e._zTime=t||(i?ct:0),i||(i=t&&!h),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=l,u=e._pt;u;)u.r(a,u.d),u=u._next;t<0&&kh(e,t,i,!0),e._onUpdate&&!i&&Fn(e,"onUpdate"),l&&e._repeat&&!i&&e.parent&&Fn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&qr(e,1),!i&&!Zt&&(Fn(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},tb=function(e,t,i){var r;if(i>t)for(r=e._first;r&&r._start<=i;){if(r.data==="isPause"&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=i;){if(r.data==="isPause"&&r._start<t)return r;r=r._prev}},Ga=function(e,t,i,r){var s=e._repeat,a=St(t)||0,o=e._tTime/e._tDur;return o&&!r&&(e._time*=a/e._dur),e._dur=a,e._tDur=s?s<0?1e10:St(a*(s+1)+e._rDelay*s):a,o>0&&!r&&Lc(e,e._tTime=e._tDur*o),e.parent&&Dc(e),i||As(e.parent,e),e},Og=function(e){return e instanceof vn?As(e):Ga(e,e._dur)},nb={_start:0,endTime:nl,totalDuration:nl},jn=function n(e,t,i){var r=e.labels,s=e._recent||nb,a=e.duration()>=Jn?s.endTime(!1):e._dur,o,l,u;return Yt(t)&&(isNaN(t)||t in r)?(l=t.charAt(0),u=t.substr(-1)==="%",o=t.indexOf("="),l==="<"||l===">"?(o>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(u?(o<0?s:i).totalDuration()/100:1)):o<0?(t in r||(r[t]=a),r[t]):(l=parseFloat(t.charAt(o-1)+t.substr(o+1)),u&&i&&(l=l/100*(ln(i)?i[0]:i).totalDuration()),o>1?n(e,t.substr(0,o-1),i)+l:a+l)):t==null?a:+t},Lo=function(e,t,i){var r=fr(t[1]),s=(r?2:1)+(e<2?0:1),a=t[s],o,l;if(r&&(a.duration=t[1]),a.parent=i,e){for(o=a,l=i;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=Tn(l.vars.inherit)&&l.parent;a.immediateRender=Tn(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[s-1]}return new Ut(t[0],a,t[s+1])},es=function(e,t){return e||e===0?t(e):t},gl=function(e,t,i){return i<e?e:i>t?t:i},an=function(e,t){return!Yt(e)||!(t=XR.exec(e))?"":t[1]},ib=function(e,t,i){return es(i,function(r){return gl(e,t,r)})},zh=[].slice,oS=function(e,t){return e&&ki(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&ki(e[0]))&&!e.nodeType&&e!==Ti},rb=function(e,t,i){return i===void 0&&(i=[]),e.forEach(function(r){var s;return Yt(r)&&!t||oS(r,1)?(s=i).push.apply(s,ei(r)):i.push(r)})||i},ei=function(e,t,i){return vt&&!t&&vt.selector?vt.selector(e):Yt(e)&&!i&&(Fh||!Ha())?zh.call((t||rm).querySelectorAll(e),0):ln(e)?rb(e,i):oS(e)?zh.call(e,0):e?[e]:[]},Vh=function(e){return e=ei(e)[0]||tl("Invalid scope")||{},function(t){var i=e.current||e.nativeElement||e;return ei(t,i.querySelectorAll?i:i===e?tl("Invalid scope")||rm.createElement("div"):e)}},lS=function(e){return e.sort(function(){return .5-Math.random()})},uS=function(e){if(Rt(e))return e;var t=ki(e)?e:{each:e},i=Cs(t.ease),r=t.from||0,s=parseFloat(t.base)||0,a={},o=r>0&&r<1,l=isNaN(r)||o,u=t.axis,c=r,h=r;return Yt(r)?c=h={center:.5,edges:.5,end:1}[r]||0:!o&&l&&(c=r[0],h=r[1]),function(f,p,g){var v=(g||t).length,m=a[v],d,_,x,y,E,C,w,S,T;if(!m){if(T=t.grid==="auto"?0:(t.grid||[1,Jn])[1],!T){for(w=-Jn;w<(w=g[T++].getBoundingClientRect().left)&&T<v;);T<v&&T--}for(m=a[v]=[],d=l?Math.min(T,v)*c-.5:r%T,_=T===Jn?0:l?v*h/T-.5:r/T|0,w=0,S=Jn,C=0;C<v;C++)x=C%T-d,y=_-(C/T|0),m[C]=E=u?Math.abs(u==="y"?y:x):Xx(x*x+y*y),E>w&&(w=E),E<S&&(S=E);r==="random"&&lS(m),m.max=w-S,m.min=S,m.v=v=(parseFloat(t.amount)||parseFloat(t.each)*(T>v?v-1:u?u==="y"?v/T:T:Math.max(T,v/T))||0)*(r==="edges"?-1:1),m.b=v<0?s-v:s,m.u=an(t.amount||t.each)||0,i=i&&v<0?gb(i):i}return v=(m[f]-m.min)/m.max||0,St(m.b+(i?i(v):v)*m.v)+m.u}},Gh=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(i){var r=St(Math.round(parseFloat(i)/e)*e*t);return(r-r%1)/t+(fr(i)?0:an(i))}},cS=function(e,t){var i=ln(e),r,s;return!i&&ki(e)&&(r=i=e.radius||Jn,e.values?(e=ei(e.values),(s=!fr(e[0]))&&(r*=r)):e=Gh(e.increment)),es(t,i?Rt(e)?function(a){return s=e(a),Math.abs(s-a)<=r?s:a}:function(a){for(var o=parseFloat(s?a.x:a),l=parseFloat(s?a.y:0),u=Jn,c=0,h=e.length,f,p;h--;)s?(f=e[h].x-o,p=e[h].y-l,f=f*f+p*p):f=Math.abs(e[h]-o),f<u&&(u=f,c=h);return c=!r||u<=r?e[c]:a,s||c===a||fr(a)?c:c+an(a)}:Gh(e))},fS=function(e,t,i,r){return es(ln(e)?!t:i===!0?!!(i=0):!r,function(){return ln(e)?e[~~(Math.random()*e.length)]:(i=i||1e-5)&&(r=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((e-i/2+Math.random()*(t-e+i*.99))/i)*i*r)/r})},sb=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(r){return t.reduce(function(s,a){return a(s)},r)}},ab=function(e,t){return function(i){return e(parseFloat(i))+(t||an(i))}},ob=function(e,t,i){return hS(e,t,0,1,i)},dS=function(e,t,i){return es(i,function(r){return e[~~t(r)]})},lb=function n(e,t,i){var r=t-e;return ln(e)?dS(e,n(0,e.length),t):es(i,function(s){return(r+(s-e)%r)%r+e})},ub=function n(e,t,i){var r=t-e,s=r*2;return ln(e)?dS(e,n(0,e.length-1),t):es(i,function(a){return a=(s+(a-e)%s)%s||0,e+(a>r?s-a:a)})},il=function(e){return e.replace(GR,function(t){var i=t.indexOf("[")+1,r=t.substring(i||7,i?t.indexOf("]"):t.length-1).split(HR);return fS(i?r:+r[0],i?0:+r[1],+r[2]||1e-5)})},hS=function(e,t,i,r,s){var a=t-e,o=r-i;return es(s,function(l){return i+((l-e)/a*o||0)})},cb=function n(e,t,i,r){var s=isNaN(e+t)?0:function(p){return(1-p)*e+p*t};if(!s){var a=Yt(e),o={},l,u,c,h,f;if(i===!0&&(r=1)&&(i=null),a)e={p:e},t={p:t};else if(ln(e)&&!ln(t)){for(c=[],h=e.length,f=h-2,u=1;u<h;u++)c.push(n(e[u-1],e[u]));h--,s=function(g){g*=h;var v=Math.min(f,~~g);return c[v](g-v)},i=t}else r||(e=za(ln(e)?[]:{},e));if(!c){for(l in t)cm.call(o,e,l,"get",t[l]);s=function(g){return pm(g,o)||(a?e.p:e)}}}return es(i,s)},kg=function(e,t,i){var r=e.labels,s=Jn,a,o,l;for(a in r)o=r[a]-t,o<0==!!i&&o&&s>(o=Math.abs(o))&&(l=a,s=o);return l},Fn=function(e,t,i){var r=e.vars,s=r[t],a=vt,o=e._ctx,l,u,c;if(s)return l=r[t+"Params"],u=r.callbackScope||e,i&&Hr.length&&rc(),o&&(vt=o),c=l?s.apply(u,l):s.call(u),vt=a,c},So=function(e){return qr(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Zt),e.progress()<1&&Fn(e,"onInterrupt"),e},_a,pS=[],mS=function(e){if(e)if(e=!e.name&&e.default||e,im()||e.headless){var t=e.name,i=Rt(e),r=t&&!i&&e.init?function(){this._props=[]}:e,s={init:nl,render:pm,add:cm,kill:Cb,modifier:Ab,rawVars:0},a={targetTest:0,get:0,getSetter:hm,aliases:{},register:0};if(Ha(),e!==r){if(Nn[t])return;Hn(r,Hn(sc(e,s),a)),za(r.prototype,za(s,sc(e,a))),Nn[r.prop=t]=r,e.targetTest&&(Cu.push(r),am[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Zx(t,r),e.register&&e.register(Rn,r,An)}else pS.push(e)},ut=255,yo={aqua:[0,ut,ut],lime:[0,ut,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,ut],navy:[0,0,128],white:[ut,ut,ut],olive:[128,128,0],yellow:[ut,ut,0],orange:[ut,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[ut,0,0],pink:[ut,192,203],cyan:[0,ut,ut],transparent:[ut,ut,ut,0]},Hf=function(e,t,i){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(i-t)*e*6:e<.5?i:e*3<2?t+(i-t)*(2/3-e)*6:t)*ut+.5|0},_S=function(e,t,i){var r=e?fr(e)?[e>>16,e>>8&ut,e&ut]:0:yo.black,s,a,o,l,u,c,h,f,p,g;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),yo[e])r=yo[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e="#"+s+s+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&ut,r&ut,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&ut,e&ut]}else if(e.substr(0,3)==="hsl"){if(r=g=e.match(Ng),!t)l=+r[0]%360/360,u=+r[1]/100,c=+r[2]/100,a=c<=.5?c*(u+1):c+u-c*u,s=c*2-a,r.length>3&&(r[3]*=1),r[0]=Hf(l+1/3,s,a),r[1]=Hf(l,s,a),r[2]=Hf(l-1/3,s,a);else if(~e.indexOf("="))return r=e.match(jx),i&&r.length<4&&(r[3]=1),r}else r=e.match(Ng)||yo.transparent;r=r.map(Number)}return t&&!g&&(s=r[0]/ut,a=r[1]/ut,o=r[2]/ut,h=Math.max(s,a,o),f=Math.min(s,a,o),c=(h+f)/2,h===f?l=u=0:(p=h-f,u=c>.5?p/(2-h-f):p/(h+f),l=h===s?(a-o)/p+(a<o?6:0):h===a?(o-s)/p+2:(s-a)/p+4,l*=60),r[0]=~~(l+.5),r[1]=~~(u*100+.5),r[2]=~~(c*100+.5)),i&&r.length<4&&(r[3]=1),r},gS=function(e){var t=[],i=[],r=-1;return e.split(Wr).forEach(function(s){var a=s.match(ma)||[];t.push.apply(t,a),i.push(r+=a.length+1)}),t.c=i,t},Bg=function(e,t,i){var r="",s=(e+r).match(Wr),a=t?"hsla(":"rgba(",o=0,l,u,c,h;if(!s)return e;if(s=s.map(function(f){return(f=_S(f,t,1))&&a+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),i&&(c=gS(e),l=i.c,l.join(r)!==c.c.join(r)))for(u=e.replace(Wr,"1").split(ma),h=u.length-1;o<h;o++)r+=u[o]+(~l.indexOf(o)?s.shift()||a+"0,0,0,0)":(c.length?c:s.length?s:i).shift());if(!u)for(u=e.split(Wr),h=u.length-1;o<h;o++)r+=u[o]+s[o];return r+u[h]},Wr=function(){var n="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in yo)n+="|"+e+"\\b";return new RegExp(n+")","gi")}(),fb=/hsl[a]?\(/,vS=function(e){var t=e.join(" "),i;if(Wr.lastIndex=0,Wr.test(t))return i=fb.test(t),e[1]=Bg(e[1],i),e[0]=Bg(e[0],i,gS(e[1])),!0},rl,In=function(){var n=Date.now,e=500,t=33,i=n(),r=i,s=1e3/240,a=s,o=[],l,u,c,h,f,p,g=function v(m){var d=n()-r,_=m===!0,x,y,E,C;if((d>e||d<0)&&(i+=d-t),r+=d,E=r-i,x=E-a,(x>0||_)&&(C=++h.frame,f=E-h.time*1e3,h.time=E=E/1e3,a+=x+(x>=s?4:s-x),y=1),_||(l=u(v)),y)for(p=0;p<o.length;p++)o[p](E,f,C,m)};return h={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(m){return f/(1e3/(m||60))},wake:function(){$x&&(!Fh&&im()&&(Ti=Fh=window,rm=Ti.document||{},Gn.gsap=Rn,(Ti.gsapVersions||(Ti.gsapVersions=[])).push(Rn.version),Kx(ic||Ti.GreenSockGlobals||!Ti.gsap&&Ti||{}),pS.forEach(mS)),c=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&h.sleep(),u=c||function(m){return setTimeout(m,a-h.time*1e3+1|0)},rl=1,g(2))},sleep:function(){(c?cancelAnimationFrame:clearTimeout)(l),rl=0,u=nl},lagSmoothing:function(m,d){e=m||1/0,t=Math.min(d||33,e)},fps:function(m){s=1e3/(m||240),a=h.time*1e3+s},add:function(m,d,_){var x=d?function(y,E,C,w){m(y,E,C,w),h.remove(x)}:m;return h.remove(m),o[_?"unshift":"push"](x),Ha(),x},remove:function(m,d){~(d=o.indexOf(m))&&o.splice(d,1)&&p>=d&&p--},_listeners:o},h}(),Ha=function(){return!rl&&In.wake()},Ye={},db=/^[\d.\-M][\d.\-,\s]/,hb=/["']/g,pb=function(e){for(var t={},i=e.substr(1,e.length-3).split(":"),r=i[0],s=1,a=i.length,o,l,u;s<a;s++)l=i[s],o=s!==a-1?l.lastIndexOf(","):l.length,u=l.substr(0,o),t[r]=isNaN(u)?u.replace(hb,"").trim():+u,r=l.substr(o+1).trim();return t},mb=function(e){var t=e.indexOf("(")+1,i=e.indexOf(")"),r=e.indexOf("(",t);return e.substring(t,~r&&r<i?e.indexOf(")",i+1):i)},_b=function(e){var t=(e+"").split("("),i=Ye[t[0]];return i&&t.length>1&&i.config?i.config.apply(null,~e.indexOf("{")?[pb(t[1])]:mb(e).split(",").map(tS)):Ye._CE&&db.test(e)?Ye._CE("",e):i},gb=function(e){return function(t){return 1-e(1-t)}},Cs=function(e,t){return e&&(Rt(e)?e:Ye[e]||_b(e))||t},Os=function(e,t,i,r){i===void 0&&(i=function(l){return 1-t(1-l)}),r===void 0&&(r=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:i,easeInOut:r},a;return wn(e,function(o){Ye[o]=Gn[o]=s,Ye[a=o.toLowerCase()]=i;for(var l in s)Ye[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Ye[o+"."+l]=s[l]}),s},xS=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Wf=function n(e,t,i){var r=t>=1?t:1,s=(i||(e?.3:.45))/(t<1?t:1),a=s/Uh*(Math.asin(1/r)||0),o=function(c){return c===1?1:r*Math.pow(2,-10*c)*VR((c-a)*s)+1},l=e==="out"?o:e==="in"?function(u){return 1-o(1-u)}:xS(o);return s=Uh/s,l.config=function(u,c){return n(e,u,c)},l},Xf=function n(e,t){t===void 0&&(t=1.70158);var i=function(a){return a?--a*a*((t+1)*a+t)+1:0},r=e==="out"?i:e==="in"?function(s){return 1-i(1-s)}:xS(i);return r.config=function(s){return n(e,s)},r};wn("Linear,Quad,Cubic,Quart,Quint,Strong",function(n,e){var t=e<5?e+1:e;Os(n+",Power"+(t-1),e?function(i){return Math.pow(i,t)}:function(i){return i},function(i){return 1-Math.pow(1-i,t)},function(i){return i<.5?Math.pow(i*2,t)/2:1-Math.pow((1-i)*2,t)/2})});Ye.Linear.easeNone=Ye.none=Ye.Linear.easeIn;Os("Elastic",Wf("in"),Wf("out"),Wf());(function(n,e){var t=1/e,i=2*t,r=2.5*t,s=function(o){return o<t?n*o*o:o<i?n*Math.pow(o-1.5/e,2)+.75:o<r?n*(o-=2.25/e)*o+.9375:n*Math.pow(o-2.625/e,2)+.984375};Os("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);Os("Expo",function(n){return Math.pow(2,10*(n-1))*n+n*n*n*n*n*n*(1-n)});Os("Circ",function(n){return-(Xx(1-n*n)-1)});Os("Sine",function(n){return n===1?1:-zR(n*kR)+1});Os("Back",Xf("in"),Xf("out"),Xf());Ye.SteppedEase=Ye.steps=Gn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var i=1/e,r=e+(t?0:1),s=t?1:0,a=1-ct;return function(o){return((r*gl(0,a,o)|0)+s)*i}}};el.ease=Ye["quad.out"];wn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(n){return om+=n+","+n+"Params,"});var SS=function(e,t){this.id=BR++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Jx,this.set=t?t.getSetter:hm},sl=function(){function n(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Ga(this,+t.duration,1,1),this.data=t.data,vt&&(this._ctx=vt,vt.data.push(this)),rl||In.wake()}var e=n.prototype;return e.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},e.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},e.totalDuration=function(i){return arguments.length?(this._dirty=0,Ga(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(i,r){if(Ha(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Lc(this,i),!s._dp||s.parent||rS(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&Ci(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===ct||!this._initted&&this._dur&&i||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),eS(this,i,r)),this},e.time=function(i,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+Fg(this))%(this._dur+this._rDelay)||(i?this._dur:0),r):this._time},e.totalProgress=function(i,r){return arguments.length?this.totalTime(this.totalDuration()*i,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(i,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+Fg(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(i,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*s,r):this._repeat?Va(this._tTime,s)+1:1},e.timeScale=function(i,r){if(!arguments.length)return this._rts===-ct?0:this._rts;if(this._rts===i)return this;var s=this.parent&&this._ts?ac(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-ct?0:this._rts,this.totalTime(gl(-Math.abs(this._delay),this.totalDuration(),s),r!==!1),Dc(this),ZR(this)},e.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Ha(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==ct&&(this._tTime-=ct)))),this):this._ps},e.startTime=function(i){if(arguments.length){this._start=St(i);var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&Ci(r,this,this._start-this._delay),this}return this._start},e.endTime=function(i){return this._start+(Tn(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(i){var r=this.parent||this._dp;return r?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?ac(r.rawTime(i),this):this._tTime:this._tTime},e.revert=function(i){i===void 0&&(i=jR);var r=Zt;return Zt=i,um(this)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),Zt=r,this},e.globalTime=function(i){for(var r=this,s=arguments.length?i:r.rawTime();r;)s=r._start+s/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(i):s},e.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,Og(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(i){if(arguments.length){var r=this._time;return this._rDelay=i,Og(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},e.seek=function(i,r){return this.totalTime(jn(this,i),Tn(r))},e.restart=function(i,r){return this.play().totalTime(i?-this._delay:0,Tn(r)),this._dur||(this._zTime=-ct),this},e.play=function(i,r){return i!=null&&this.seek(i,r),this.reversed(!1).paused(!1)},e.reverse=function(i,r){return i!=null&&this.seek(i||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(i,r){return i!=null&&this.seek(i,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-ct:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-ct,this},e.isActive=function(){var i=this.parent||this._dp,r=this._start,s;return!!(!i||this._ts&&this._initted&&i.isActive()&&(s=i.rawTime(!0))>=r&&s<this.endTime(!0)-ct)},e.eventCallback=function(i,r,s){var a=this.vars;return arguments.length>1?(r?(a[i]=r,s&&(a[i+"Params"]=s),i==="onUpdate"&&(this._onUpdate=r)):delete a[i],this):a[i]},e.then=function(i){var r=this,s=r._prom;return new Promise(function(a){var o=Rt(i)?i:nS,l=function(){var c=r.then;r.then=null,s&&s(),Rt(o)&&(o=o(r))&&(o.then||o===r)&&(r.then=c),a(o),r.then=c};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?l():r._prom=l})},e.kill=function(){So(this)},n}();Hn(sl.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-ct,_prom:0,_ps:!1,_rts:1});var vn=function(n){Wx(e,n);function e(i,r){var s;return i===void 0&&(i={}),s=n.call(this,i)||this,s.labels={},s.smoothChildTiming=!!i.smoothChildTiming,s.autoRemoveChildren=!!i.autoRemoveChildren,s._sort=Tn(i.sortChildren),Mt&&Ci(i.parent||Mt,ji(s),r),i.reversed&&s.reverse(),i.paused&&s.paused(!0),i.scrollTrigger&&sS(ji(s),i.scrollTrigger),s}var t=e.prototype;return t.to=function(r,s,a){return Lo(0,arguments,this),this},t.from=function(r,s,a){return Lo(1,arguments,this),this},t.fromTo=function(r,s,a,o){return Lo(2,arguments,this),this},t.set=function(r,s,a){return s.duration=0,s.parent=this,Do(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Ut(r,s,jn(this,a),1),this},t.call=function(r,s,a){return Ci(this,Ut.delayedCall(0,r,s),a)},t.staggerTo=function(r,s,a,o,l,u,c){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=u,a.onCompleteParams=c,a.parent=this,new Ut(r,a,jn(this,l)),this},t.staggerFrom=function(r,s,a,o,l,u,c){return a.runBackwards=1,Do(a).immediateRender=Tn(a.immediateRender),this.staggerTo(r,s,a,o,l,u,c)},t.staggerFromTo=function(r,s,a,o,l,u,c,h){return o.startAt=a,Do(o).immediateRender=Tn(o.immediateRender),this.staggerTo(r,s,o,l,u,c,h)},t.render=function(r,s,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,u=this._dur,c=r<=0?0:St(r),h=this._zTime<0!=r<0&&(this._initted||!u),f,p,g,v,m,d,_,x,y,E,C,w;if(this!==Mt&&c>l&&r>=0&&(c=l),c!==this._tTime||a||h){if(o!==this._time&&u&&(c+=this._time-o,r+=this._time-o),f=c,y=this._start,x=this._ts,d=!x,h&&(u||(o=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(C=this._yoyo,m=u+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(m*100+r,s,a);if(f=St(c%m),c===l?(v=this._repeat,f=u):(E=St(c/m),v=~~E,v&&v===E&&(f=u,v--),f>u&&(f=u)),E=Va(this._tTime,m),!o&&this._tTime&&E!==v&&this._tTime-E*m-this._dur<=0&&(E=v),C&&v&1&&(f=u-f,w=1),v!==E&&!this._lock){var S=C&&E&1,T=S===(C&&v&1);if(v<E&&(S=!S),o=S?0:c%u?u:c,this._lock=1,this.render(o||(w?0:St(v*m)),s,!u)._lock=0,this._tTime=c,!s&&this.parent&&Fn(this,"onRepeat"),this.vars.repeatRefresh&&!w&&(this.invalidate()._lock=1,E=v),o&&o!==this._time||d!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(u=this._dur,l=this._tDur,T&&(this._lock=2,o=S?u:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!w&&this.invalidate()),this._lock=0,!this._ts&&!d)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(_=tb(this,St(o),St(f)),_&&(c-=f-(f=_._start))),this._tTime=c,this._time=f,this._act=!!x,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,o=0),!o&&c&&u&&!s&&!E&&(Fn(this,"onStart"),this._tTime!==c))return this;if(f>=o&&r>=0)for(p=this._first;p;){if(g=p._next,(p._act||f>=p._start)&&p._ts&&_!==p){if(p.parent!==this)return this.render(r,s,a);if(p.render(p._ts>0?(f-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(f-p._start)*p._ts,s,a),f!==this._time||!this._ts&&!d){_=0,g&&(c+=this._zTime=-ct);break}}p=g}else{p=this._last;for(var D=r<0?r:f;p;){if(g=p._prev,(p._act||D<=p._end)&&p._ts&&_!==p){if(p.parent!==this)return this.render(r,s,a);if(p.render(p._ts>0?(D-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(D-p._start)*p._ts,s,a||Zt&&um(p)),f!==this._time||!this._ts&&!d){_=0,g&&(c+=this._zTime=D?-ct:ct);break}}p=g}}if(_&&!s&&(this.pause(),_.render(f>=o?0:-ct)._zTime=f>=o?1:-1,this._ts))return this._start=y,Dc(this),this.render(r,s,a);this._onUpdate&&!s&&Fn(this,"onUpdate",!0),(c===l&&this._tTime>=this.totalDuration()||!c&&o)&&(y===this._start||Math.abs(x)!==Math.abs(this._ts))&&(this._lock||((r||!u)&&(c===l&&this._ts>0||!c&&this._ts<0)&&qr(this,1),!s&&!(r<0&&!o)&&(c||o||!l)&&(Fn(this,c===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(c<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(r,s){var a=this;if(fr(s)||(s=jn(this,s,r)),!(r instanceof sl)){if(ln(r))return r.forEach(function(o){return a.add(o,s)}),this;if(Yt(r))return this.addLabel(r,s);if(Rt(r))r=Ut.delayedCall(0,r);else return this}return this!==r?Ci(this,r,s):this},t.getChildren=function(r,s,a,o){r===void 0&&(r=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-Jn);for(var l=[],u=this._first;u;)u._start>=o&&(u instanceof Ut?s&&l.push(u):(a&&l.push(u),r&&l.push.apply(l,u.getChildren(!0,s,a)))),u=u._next;return l},t.getById=function(r){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===r)return s[a]},t.remove=function(r){return Yt(r)?this.removeLabel(r):Rt(r)?this.killTweensOf(r):(r.parent===this&&Pc(this,r),r===this._recent&&(this._recent=this._last),As(this))},t.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=St(In.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),n.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},t.addLabel=function(r,s){return this.labels[r]=jn(this,s),this},t.removeLabel=function(r){return delete this.labels[r],this},t.addPause=function(r,s,a){var o=Ut.delayedCall(0,s||nl,a);return o.data="isPause",this._hasPause=1,Ci(this,o,jn(this,r))},t.removePause=function(r){var s=this._first;for(r=jn(this,r);s;)s._start===r&&s.data==="isPause"&&qr(s),s=s._next},t.killTweensOf=function(r,s,a){for(var o=this.getTweensOf(r,a),l=o.length;l--;)Lr!==o[l]&&o[l].kill(r,s);return this},t.getTweensOf=function(r,s){for(var a=[],o=ei(r),l=this._first,u=fr(s),c;l;)l instanceof Ut?qR(l._targets,o)&&(u?(!Lr||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&a.push(l):(c=l.getTweensOf(o,s)).length&&a.push.apply(a,c),l=l._next;return a},t.tweenTo=function(r,s){s=s||{};var a=this,o=jn(a,r),l=s,u=l.startAt,c=l.onStart,h=l.onStartParams,f=l.immediateRender,p,g=Ut.to(a,Hn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(u&&"time"in u?u.time:a._time))/a.timeScale())||ct,onStart:function(){if(a.pause(),!p){var m=s.duration||Math.abs((o-(u&&"time"in u?u.time:a._time))/a.timeScale());g._dur!==m&&Ga(g,m,0,1).render(g._time,!0,!0),p=1}c&&c.apply(g,h||[])}},s));return f?g.render(0):g},t.tweenFromTo=function(r,s,a){return this.tweenTo(s,Hn({startAt:{time:jn(this,r)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(r){return r===void 0&&(r=this._time),kg(this,jn(this,r))},t.previousLabel=function(r){return r===void 0&&(r=this._time),kg(this,jn(this,r),1)},t.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+ct)},t.shiftChildren=function(r,s,a){a===void 0&&(a=0);var o=this._first,l=this.labels,u;for(r=St(r);o;)o._start>=a&&(o._start+=r,o._end+=r),o=o._next;if(s)for(u in l)l[u]>=a&&(l[u]+=r);return As(this)},t.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return n.prototype.invalidate.call(this,r)},t.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),As(this)},t.totalDuration=function(r){var s=0,a=this,o=a._last,l=Jn,u,c,h;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-r:r));if(a._dirty){for(h=a.parent;o;)u=o._prev,o._dirty&&o.totalDuration(),c=o._start,c>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,Ci(a,o,c-o._delay,1)._lock=0):l=c,c<0&&o._ts&&(s-=c,(!h&&!a._dp||h&&h.smoothChildTiming)&&(a._start+=St(c/a._ts),a._time-=c,a._tTime-=c),a.shiftChildren(-c,!1,-1/0),l=0),o._end>s&&o._ts&&(s=o._end),o=u;Ga(a,a===Mt&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(r){if(Mt._ts&&(eS(Mt,ac(r,Mt)),Qx=In.frame),In.frame>=Ig){Ig+=zn.autoSleep||120;var s=Mt._first;if((!s||!s._ts)&&zn.autoSleep&&In._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||In.sleep()}}},e}(sl);Hn(vn.prototype,{_lock:0,_hasPause:0,_forcing:0});var vb=function(e,t,i,r,s,a,o){var l=new An(this._pt,e,t,0,1,AS,null,s),u=0,c=0,h,f,p,g,v,m,d,_;for(l.b=i,l.e=r,i+="",r+="",(d=~r.indexOf("random("))&&(r=il(r)),a&&(_=[i,r],a(_,e,t),i=_[0],r=_[1]),f=i.match(Vf)||[];h=Vf.exec(r);)g=h[0],v=r.substring(u,h.index),p?p=(p+1)%5:v.substr(-5)==="rgba("&&(p=1),g!==f[c++]&&(m=parseFloat(f[c-1])||0,l._pt={_next:l._pt,p:v||c===1?v:",",s:m,c:g.charAt(1)==="="?wa(m,g)-m:parseFloat(g)-m,m:p&&p<4?Math.round:0},u=Vf.lastIndex);return l.c=u<r.length?r.substring(u,r.length):"",l.fp=o,(qx.test(r)||d)&&(l.e=0),this._pt=l,l},cm=function(e,t,i,r,s,a,o,l,u,c){Rt(r)&&(r=r(s||0,e,a));var h=e[t],f=i!=="get"?i:Rt(h)?u?e[t.indexOf("set")||!Rt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](u):e[t]():h,p=Rt(h)?u?Eb:TS:dm,g;if(Yt(r)&&(~r.indexOf("random(")&&(r=il(r)),r.charAt(1)==="="&&(g=wa(f,r)+(an(f)||0),(g||g===0)&&(r=g))),!c||f!==r||Hh)return!isNaN(f*r)&&r!==""?(g=new An(this._pt,e,t,+f||0,r-(f||0),typeof h=="boolean"?wb:wS,0,p),u&&(g.fp=u),o&&g.modifier(o,this,e),this._pt=g):(!h&&!(t in e)&&sm(t,r),vb.call(this,e,t,f,r,p,l||zn.stringFilter,u))},xb=function(e,t,i,r,s){if(Rt(e)&&(e=No(e,s,t,i,r)),!ki(e)||e.style&&e.nodeType||ln(e)||Yx(e))return Yt(e)?No(e,s,t,i,r):e;var a={},o;for(o in e)a[o]=No(e[o],s,t,i,r);return a},yS=function(e,t,i,r,s,a){var o,l,u,c;if(Nn[e]&&(o=new Nn[e]).init(s,o.rawVars?t[e]:xb(t[e],r,s,a,i),i,r,a)!==!1&&(i._pt=l=new An(i._pt,s,e,0,1,o.render,o,0,o.priority),i!==_a))for(u=i._ptLookup[i._targets.indexOf(s)],c=o._props.length;c--;)u[o._props[c]]=l;return o},Lr,Hh,fm=function n(e,t,i){var r=e.vars,s=r.ease,a=r.startAt,o=r.immediateRender,l=r.lazy,u=r.onUpdate,c=r.runBackwards,h=r.yoyoEase,f=r.keyframes,p=r.autoRevert,g=e._dur,v=e._startAt,m=e._targets,d=e.parent,_=d&&d.data==="nested"?d.vars.targets:m,x=e._overwrite==="auto"&&!tm,y=e.timeline,E=r.easeReverse||h,C,w,S,T,D,b,V,B,O,L,z,N,U;if(y&&(!f||!s)&&(s="none"),e._ease=Cs(s,el.ease),e._rEase=E&&(Cs(E)||e._ease),e._from=!y&&!!r.runBackwards,e._from&&(e.ratio=1),!y||f&&!r.stagger){if(B=m[0]?ws(m[0]).harness:0,N=B&&r[B.prop],C=sc(r,am),v&&(v._zTime<0&&v.progress(1),t<0&&c&&o&&!p?v.render(-1,!0):v.revert(c&&g?Au:YR),v._lazy=0),a){if(qr(e._startAt=Ut.set(m,Hn({data:"isStart",overwrite:!1,parent:d,immediateRender:!0,lazy:!v&&Tn(l),startAt:null,delay:0,onUpdate:u&&function(){return Fn(e,"onUpdate")},stagger:0},a))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Zt||!o&&!p)&&e._startAt.revert(Au),o&&g&&t<=0&&i<=0){t&&(e._zTime=t);return}}else if(c&&g&&!v){if(t&&(o=!1),S=Hn({overwrite:!1,data:"isFromStart",lazy:o&&!v&&Tn(l),immediateRender:o,stagger:0,parent:d},C),N&&(S[B.prop]=N),qr(e._startAt=Ut.set(m,S)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Zt?e._startAt.revert(Au):e._startAt.render(-1,!0)),e._zTime=t,!o)n(e._startAt,ct,ct);else if(!t)return}for(e._pt=e._ptCache=0,l=g&&Tn(l)||l&&!g,w=0;w<m.length;w++){if(D=m[w],V=D._gsap||lm(m)[w]._gsap,e._ptLookup[w]=L={},Oh[V.id]&&Hr.length&&rc(),z=_===m?w:_.indexOf(D),B&&(O=new B).init(D,N||C,e,z,_)!==!1&&(e._pt=T=new An(e._pt,D,O.name,0,1,O.render,O,0,O.priority),O._props.forEach(function(H){L[H]=T}),O.priority&&(b=1)),!B||N)for(S in C)Nn[S]&&(O=yS(S,C,e,z,D,_))?O.priority&&(b=1):L[S]=T=cm.call(e,D,S,"get",C[S],z,_,0,r.stringFilter);e._op&&e._op[w]&&e.kill(D,e._op[w]),x&&e._pt&&(Lr=e,Mt.killTweensOf(D,L,e.globalTime(t)),U=!e.parent,Lr=0),e._pt&&l&&(Oh[V.id]=1)}b&&CS(e),e._onInit&&e._onInit(e)}e._onUpdate=u,e._initted=(!e._op||e._pt)&&!U,f&&t<=0&&y.render(Jn,!0,!0)},Sb=function(e,t,i,r,s,a,o,l){var u=(e._pt&&e._ptCache||(e._ptCache={}))[t],c,h,f,p;if(!u)for(u=e._ptCache[t]=[],f=e._ptLookup,p=e._targets.length;p--;){if(c=f[p][t],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==t&&c.fp!==t;)c=c._next;if(!c)return Hh=1,e.vars[t]="+=0",fm(e,o),Hh=0,l?tl(t+" not eligible for reset. Try splitting into individual properties"):1;u.push(c)}for(p=u.length;p--;)h=u[p],c=h._pt||h,c.s=(r||r===0)&&!s?r:c.s+(r||0)+a*c.c,c.c=i-c.s,h.e&&(h.e=Pt(i)+an(h.e)),h.b&&(h.b=c.s+an(h.b))},yb=function(e,t){var i=e[0]?ws(e[0]).harness:0,r=i&&i.aliases,s,a,o,l;if(!r)return t;s=za({},t);for(a in r)if(a in s)for(l=r[a].split(","),o=l.length;o--;)s[l[o]]=s[a];return s},Mb=function(e,t,i,r){var s=t.ease||r||"power1.inOut",a,o;if(ln(t))o=i[e]||(i[e]=[]),t.forEach(function(l,u){return o.push({t:u/(t.length-1)*100,v:l,e:s})});else for(a in t)o=i[a]||(i[a]=[]),a==="ease"||o.push({t:parseFloat(e),v:t[a],e:s})},No=function(e,t,i,r,s){return Rt(e)?e.call(t,i,r,s):Yt(e)&&~e.indexOf("random(")?il(e):e},MS=om+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",ES={};wn(MS+",id,stagger,delay,duration,paused,scrollTrigger",function(n){return ES[n]=1});var Ut=function(n){Wx(e,n);function e(i,r,s,a){var o;typeof r=="number"&&(s.duration=r,r=s,s=null),o=n.call(this,a?r:Do(r))||this;var l=o.vars,u=l.duration,c=l.delay,h=l.immediateRender,f=l.stagger,p=l.overwrite,g=l.keyframes,v=l.defaults,m=l.scrollTrigger,d=r.parent||Mt,_=(ln(i)||Yx(i)?fr(i[0]):"length"in r)?[i]:ei(i),x,y,E,C,w,S,T,D;if(o._targets=_.length?lm(_):tl("GSAP target "+i+" not found. https://gsap.com",!zn.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=p,g||f||au(u)||au(c)){r=o.vars;var b=r.easeReverse||r.yoyoEase;if(x=o.timeline=new vn({data:"nested",defaults:v||{},targets:d&&d.data==="nested"?d.vars.targets:_}),x.kill(),x.parent=x._dp=ji(o),x._start=0,f||au(u)||au(c)){if(C=_.length,T=f&&uS(f),ki(f))for(w in f)~MS.indexOf(w)&&(D||(D={}),D[w]=f[w]);for(y=0;y<C;y++)E=sc(r,ES),E.stagger=0,b&&(E.easeReverse=b),D&&za(E,D),S=_[y],E.duration=+No(u,ji(o),y,S,_),E.delay=(+No(c,ji(o),y,S,_)||0)-o._delay,!f&&C===1&&E.delay&&(o._delay=c=E.delay,o._start+=c,E.delay=0),x.to(S,E,T?T(y,S,_):0),x._ease=Ye.none;x.duration()?u=c=0:o.timeline=0}else if(g){Do(Hn(x.vars.defaults,{ease:"none"})),x._ease=Cs(g.ease||r.ease||"none");var V=0,B,O,L;if(ln(g))g.forEach(function(z){return x.to(_,z,">")}),x.duration();else{E={};for(w in g)w==="ease"||w==="easeEach"||Mb(w,g[w],E,g.easeEach);for(w in E)for(B=E[w].sort(function(z,N){return z.t-N.t}),V=0,y=0;y<B.length;y++)O=B[y],L={ease:O.e,duration:(O.t-(y?B[y-1].t:0))/100*u},L[w]=O.v,x.to(_,L,V),V+=L.duration;x.duration()<u&&x.to({},{duration:u-x.duration()})}}u||o.duration(u=x.duration())}else o.timeline=0;return p===!0&&!tm&&(Lr=ji(o),Mt.killTweensOf(_),Lr=0),Ci(d,ji(o),s),r.reversed&&o.reverse(),r.paused&&o.paused(!0),(h||!u&&!g&&o._start===St(d._time)&&Tn(h)&&QR(ji(o))&&d.data!=="nested")&&(o._tTime=-ct,o.render(Math.max(0,-c)||0)),m&&sS(ji(o),m),o}var t=e.prototype;return t.render=function(r,s,a){var o=this._time,l=this._tDur,u=this._dur,c=r<0,h=r>l-ct&&!c?l:r<ct?0:r,f,p,g,v,m,d,_,x;if(!u)eb(this,r,s,a);else if(h!==this._tTime||!r||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==c||this._lazy){if(f=h,x=this.timeline,this._repeat){if(v=u+this._rDelay,this._repeat<-1&&c)return this.totalTime(v*100+r,s,a);if(f=St(h%v),h===l?(g=this._repeat,f=u):(m=St(h/v),g=~~m,g&&g===m?(f=u,g--):f>u&&(f=u)),d=this._yoyo&&g&1,d&&(f=u-f),m=Va(this._tTime,v),f===o&&!a&&this._initted&&g===m)return this._tTime=h,this;g!==m&&this.vars.repeatRefresh&&!d&&!this._lock&&f!==v&&this._initted&&(this._lock=a=1,this.render(St(v*g),!0).invalidate()._lock=0)}if(!this._initted){if(aS(this,c?r:f,a,s,h))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&g!==m))return this;if(u!==this._dur)return this.render(r,s,a)}if(this._rEase){var y=f<o;if(y!==this._inv){var E=y?o:u-o;this._inv=y,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=o,this._invRecip=E?(y?-1:1)/E:0,this._invScale=y?-this.ratio:1-this.ratio,this._invEase=y?this._rEase:this._ease}this.ratio=_=this._invRatio+this._invScale*this._invEase((f-this._invTime)*this._invRecip)}else this.ratio=_=this._ease(f/u);if(this._from&&(this.ratio=_=1-_),this._tTime=h,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),!o&&h&&!s&&!m&&(Fn(this,"onStart"),this._tTime!==h))return this;for(p=this._pt;p;)p.r(_,p.d),p=p._next;x&&x.render(r<0?r:x._dur*x._ease(f/this._dur),s,a)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(c&&kh(this,r,s,a),Fn(this,"onUpdate")),this._repeat&&g!==m&&this.vars.onRepeat&&!s&&this.parent&&Fn(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(c&&!this._onUpdate&&kh(this,r,!0,!0),(r||!u)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&qr(this,1),!s&&!(c&&!o)&&(h||o||d)&&(Fn(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),n.prototype.invalidate.call(this,r)},t.resetTo=function(r,s,a,o,l){rl||In.wake(),this._ts||this.play();var u=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||fm(this,u),c=this._ease(u/this._dur),Sb(this,r,s,a,o,c,u,l)?this.resetTo(r,s,a,o,1):(Lc(this,0),this.parent||iS(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?So(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Zt),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,Lr&&Lr.vars.overwrite!==!0)._first||So(this),this.parent&&a!==this.timeline.totalDuration()&&Ga(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=r?ei(r):o,u=this._ptLookup,c=this._pt,h,f,p,g,v,m,d;if((!s||s==="all")&&KR(o,l))return s==="all"&&(this._pt=0),So(this);for(h=this._op=this._op||[],s!=="all"&&(Yt(s)&&(v={},wn(s,function(_){return v[_]=1}),s=v),s=yb(o,s)),d=o.length;d--;)if(~l.indexOf(o[d])){f=u[d],s==="all"?(h[d]=s,g=f,p={}):(p=h[d]=h[d]||{},g=s);for(v in g)m=f&&f[v],m&&((!("kill"in m.d)||m.d.kill(v)===!0)&&Pc(this,m,"_pt"),delete f[v]),p!=="all"&&(p[v]=1)}return this._initted&&!this._pt&&c&&So(this),this},e.to=function(r,s){return new e(r,s,arguments[2])},e.from=function(r,s){return Lo(1,arguments)},e.delayedCall=function(r,s,a,o){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},e.fromTo=function(r,s,a){return Lo(2,arguments)},e.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(r,s)},e.killTweensOf=function(r,s,a){return Mt.killTweensOf(r,s,a)},e}(sl);Hn(Ut.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});wn("staggerTo,staggerFrom,staggerFromTo",function(n){Ut[n]=function(){var e=new vn,t=zh.call(arguments,0);return t.splice(n==="staggerFromTo"?5:4,0,0),e[n].apply(e,t)}});var dm=function(e,t,i){return e[t]=i},TS=function(e,t,i){return e[t](i)},Eb=function(e,t,i,r){return e[t](r.fp,i)},Tb=function(e,t,i){return e.setAttribute(t,i)},hm=function(e,t){return Rt(e[t])?TS:nm(e[t])&&e.setAttribute?Tb:dm},wS=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},wb=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},AS=function(e,t){var i=t._pt,r="";if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;i;)r=i.p+(i.m?i.m(i.s+i.c*e):Math.round((i.s+i.c*e)*1e4)/1e4)+r,i=i._next;r+=t.c}t.set(t.t,t.p,r,t)},pm=function(e,t){for(var i=t._pt;i;)i.r(e,i.d),i=i._next},Ab=function(e,t,i,r){for(var s=this._pt,a;s;)a=s._next,s.p===r&&s.modifier(e,t,i),s=a},Cb=function(e){for(var t=this._pt,i,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?Pc(this,t,"_pt"):t.dep||(i=1),t=r;return!i},Rb=function(e,t,i,r){r.mSet(e,t,r.m.call(r.tween,i,r.mt),r)},CS=function(e){for(var t=e._pt,i,r,s,a;t;){for(i=t._next,r=s;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:a)?t._prev._next=t:s=t,(t._next=r)?r._prev=t:a=t,t=i}e._pt=s},An=function(){function n(t,i,r,s,a,o,l,u,c){this.t=i,this.s=s,this.c=a,this.p=r,this.r=o||wS,this.d=l||this,this.set=u||dm,this.pr=c||0,this._next=t,t&&(t._prev=this)}var e=n.prototype;return e.modifier=function(i,r,s){this.mSet=this.mSet||this.set,this.set=Rb,this.m=i,this.mt=s,this.tween=r},n}();wn(om+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(n){return am[n]=1});Gn.TweenMax=Gn.TweenLite=Ut;Gn.TimelineLite=Gn.TimelineMax=vn;Mt=new vn({sortChildren:!1,defaults:el,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});zn.stringFilter=vS;var Rs=[],Ru={},bb=[],zg=0,Pb=0,Yf=function(e){return(Ru[e]||bb).map(function(t){return t()})},Wh=function(){var e=Date.now(),t=[];e-zg>2&&(Yf("matchMediaInit"),Rs.forEach(function(i){var r=i.queries,s=i.conditions,a,o,l,u;for(o in r)a=Ti.matchMedia(r[o]).matches,a&&(l=1),a!==s[o]&&(s[o]=a,u=1);u&&(i.revert(),l&&t.push(i))}),Yf("matchMediaRevert"),t.forEach(function(i){return i.onMatch(i,function(r){return i.add(null,r)})}),zg=e,Yf("matchMedia"))},RS=function(){function n(t,i){this.selector=i&&Vh(i),this.data=[],this._r=[],this.isReverted=!1,this.id=Pb++,t&&this.add(t)}var e=n.prototype;return e.add=function(i,r,s){Rt(i)&&(s=r,r=i,i=Rt);var a=this,o=function(){var u=vt,c=a.selector,h;return u&&u!==a&&u.data.push(a),s&&(a.selector=Vh(s)),vt=a,h=r.apply(a,arguments),Rt(h)&&a._r.push(h),vt=u,a.selector=c,a.isReverted=!1,h};return a.last=o,i===Rt?o(a,function(l){return a.add(null,l)}):i?a[i]=o:o},e.ignore=function(i){var r=vt;vt=null,i(this),vt=r},e.getTweens=function(){var i=[];return this.data.forEach(function(r){return r instanceof n?i.push.apply(i,r.getTweens()):r instanceof Ut&&!(r.parent&&r.parent.data==="nested")&&i.push(r)}),i},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(i,r){var s=this;if(i?function(){for(var o=s.getTweens(),l=s.data.length,u;l--;)u=s.data[l],u.data==="isFlip"&&(u.revert(),u.getChildren(!0,!0,!1).forEach(function(c){return o.splice(o.indexOf(c),1)}));for(o.map(function(c){return{g:c._dur||c._delay||c._sat&&!c._sat.vars.immediateRender?c.globalTime(0):-1/0,t:c}}).sort(function(c,h){return h.g-c.g||-1/0}).forEach(function(c){return c.t.revert(i)}),l=s.data.length;l--;)u=s.data[l],u instanceof vn?u.data!=="nested"&&(u.scrollTrigger&&u.scrollTrigger.revert(),u.kill()):!(u instanceof Ut)&&u.revert&&u.revert(i);s._r.forEach(function(c){return c(i,s)}),s.isReverted=!0}():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),r)for(var a=Rs.length;a--;)Rs[a].id===this.id&&Rs.splice(a,1)},e.revert=function(i){this.kill(i||{})},n}(),Db=function(){function n(t){this.contexts=[],this.scope=t,vt&&vt.data.push(this)}var e=n.prototype;return e.add=function(i,r,s){ki(i)||(i={matches:i});var a=new RS(0,s||this.scope),o=a.conditions={},l,u,c;vt&&!a.selector&&(a.selector=vt.selector),this.contexts.push(a),r=a.add("onMatch",r),a.queries=i;for(u in i)u==="all"?c=1:(l=Ti.matchMedia(i[u]),l&&(Rs.indexOf(a)<0&&Rs.push(a),(o[u]=l.matches)&&(c=1),l.addListener?l.addListener(Wh):l.addEventListener("change",Wh)));return c&&r(a,function(h){return a.add(null,h)}),this},e.revert=function(i){this.kill(i||{})},e.kill=function(i){this.contexts.forEach(function(r){return r.kill(i,!0)})},n}(),oc={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];t.forEach(function(r){return mS(r)})},timeline:function(e){return new vn(e)},getTweensOf:function(e,t){return Mt.getTweensOf(e,t)},getProperty:function(e,t,i,r){Yt(e)&&(e=ei(e)[0]);var s=ws(e||{}).get,a=i?nS:tS;return i==="native"&&(i=""),e&&(t?a((Nn[t]&&Nn[t].get||s)(e,t,i,r)):function(o,l,u){return a((Nn[o]&&Nn[o].get||s)(e,o,l,u))})},quickSetter:function(e,t,i){if(e=ei(e),e.length>1){var r=e.map(function(c){return Rn.quickSetter(c,t,i)}),s=r.length;return function(c){for(var h=s;h--;)r[h](c)}}e=e[0]||{};var a=Nn[t],o=ws(e),l=o.harness&&(o.harness.aliases||{})[t]||t,u=a?function(c){var h=new a;_a._pt=0,h.init(e,i?c+i:c,_a,0,[e]),h.render(1,h),_a._pt&&pm(1,_a)}:o.set(e,l);return a?u:function(c){return u(e,l,i?c+i:c,o,1)}},quickTo:function(e,t,i){var r,s=Rn.to(e,Hn((r={},r[t]="+=0.1",r.paused=!0,r.stagger=0,r),i||{})),a=function(l,u,c){return s.resetTo(t,l,u,c)};return a.tween=s,a},isTweening:function(e){return Mt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Cs(e.ease,el.ease)),Ug(el,e||{})},config:function(e){return Ug(zn,e||{})},registerEffect:function(e){var t=e.name,i=e.effect,r=e.plugins,s=e.defaults,a=e.extendTimeline;(r||"").split(",").forEach(function(o){return o&&!Nn[o]&&!Gn[o]&&tl(t+" effect requires "+o+" plugin.")}),Gf[t]=function(o,l,u){return i(ei(o),Hn(l||{},s),u)},a&&(vn.prototype[t]=function(o,l,u){return this.add(Gf[t](o,ki(l)?l:(u=l)&&{},this),u)})},registerEase:function(e,t){Ye[e]=Cs(t)},parseEase:function(e,t){return arguments.length?Cs(e,t):Ye},getById:function(e){return Mt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var i=new vn(e),r,s;for(i.smoothChildTiming=Tn(e.smoothChildTiming),Mt.remove(i),i._dp=0,i._time=i._tTime=Mt._time,r=Mt._first;r;)s=r._next,(t||!(!r._dur&&r instanceof Ut&&r.vars.onComplete===r._targets[0]))&&Ci(i,r,r._start-r._delay),r=s;return Ci(Mt,i,0),i},context:function(e,t){return e?new RS(e,t):vt},matchMedia:function(e){return new Db(e)},matchMediaRefresh:function(){return Rs.forEach(function(e){var t=e.conditions,i,r;for(r in t)t[r]&&(t[r]=!1,i=1);i&&e.revert()})||Wh()},addEventListener:function(e,t){var i=Ru[e]||(Ru[e]=[]);~i.indexOf(t)||i.push(t)},removeEventListener:function(e,t){var i=Ru[e],r=i&&i.indexOf(t);r>=0&&i.splice(r,1)},utils:{wrap:lb,wrapYoyo:ub,distribute:uS,random:fS,snap:cS,normalize:ob,getUnit:an,clamp:ib,splitColor:_S,toArray:ei,selector:Vh,mapRange:hS,pipe:sb,unitize:ab,interpolate:cb,shuffle:lS},install:Kx,effects:Gf,ticker:In,updateRoot:vn.updateRoot,plugins:Nn,globalTimeline:Mt,core:{PropTween:An,globals:Zx,Tween:Ut,Timeline:vn,Animation:sl,getCache:ws,_removeLinkedListItem:Pc,reverting:function(){return Zt},context:function(e){return e&&vt&&(vt.data.push(e),e._ctx=vt),vt},suppressOverwrites:function(e){return tm=e}}};wn("to,from,fromTo,delayedCall,set,killTweensOf",function(n){return oc[n]=Ut[n]});In.add(vn.updateRoot);_a=oc.to({},{duration:0});var Lb=function(e,t){for(var i=e._pt;i&&i.p!==t&&i.op!==t&&i.fp!==t;)i=i._next;return i},Nb=function(e,t){var i=e._targets,r,s,a;for(r in t)for(s=i.length;s--;)a=e._ptLookup[s][r],a&&(a=a.d)&&(a._pt&&(a=Lb(a,r)),a&&a.modifier&&a.modifier(t[r],e,i[s],r))},jf=function(e,t){return{name:e,headless:1,rawVars:1,init:function(r,s,a){a._onInit=function(o){var l,u;if(Yt(s)&&(l={},wn(s,function(c){return l[c]=1}),s=l),t){l={};for(u in s)l[u]=t(s[u]);s=l}Nb(o,s)}}}},Rn=oc.registerPlugin({name:"attr",init:function(e,t,i,r,s){var a,o,l;this.tween=i;for(a in t)l=e.getAttribute(a)||"",o=this.add(e,"setAttribute",(l||0)+"",t[a],r,s,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(e,t){for(var i=t._pt;i;)Zt?i.set(i.t,i.p,i.b,i):i.r(e,i.d),i=i._next}},{name:"endArray",headless:1,init:function(e,t){for(var i=t.length;i--;)this.add(e,i,e[i]||0,t[i],0,0,0,0,0,1)}},jf("roundProps",Gh),jf("modifiers"),jf("snap",cS))||oc;Ut.version=vn.version=Rn.version="3.15.0";$x=1;im()&&Ha();Ye.Power0;Ye.Power1;Ye.Power2;Ye.Power3;Ye.Power4;Ye.Linear;Ye.Quad;Ye.Cubic;Ye.Quart;Ye.Quint;Ye.Strong;Ye.Elastic;Ye.Back;Ye.SteppedEase;Ye.Bounce;Ye.Sine;Ye.Expo;Ye.Circ;/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Vg,Nr,Aa,mm,Ms,Gg,_m,Ib=function(){return typeof window<"u"},dr={},ps=180/Math.PI,Ca=Math.PI/180,ta=Math.atan2,Hg=1e8,gm=/([A-Z])/g,Ub=/(left|right|width|margin|padding|x)/i,Fb=/[\s,\(]\S/,Pi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Xh=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Ob=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},kb=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Bb=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},zb=function(e,t){var i=t.s+t.c*e;t.set(t.t,t.p,~~(i+(i<0?-.5:.5))+t.u,t)},bS=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},PS=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},Vb=function(e,t,i){return e.style[t]=i},Gb=function(e,t,i){return e.style.setProperty(t,i)},Hb=function(e,t,i){return e._gsap[t]=i},Wb=function(e,t,i){return e._gsap.scaleX=e._gsap.scaleY=i},Xb=function(e,t,i,r,s){var a=e._gsap;a.scaleX=a.scaleY=i,a.renderTransform(s,a)},Yb=function(e,t,i,r,s){var a=e._gsap;a[t]=i,a.renderTransform(s,a)},Et="transform",Cn=Et+"Origin",jb=function n(e,t){var i=this,r=this.target,s=r.style,a=r._gsap;if(e in dr&&s){if(this.tfm=this.tfm||{},e!=="transform")e=Pi[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return i.tfm[o]=$i(r,o)}):this.tfm[e]=a.x?a[e]:$i(r,e),e===Cn&&(this.tfm.zOrigin=a.zOrigin);else return Pi.transform.split(",").forEach(function(o){return n.call(i,o,t)});if(this.props.indexOf(Et)>=0)return;a.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(Cn,t,"")),e=Et}(s||t)&&this.props.push(e,t,s[e])},DS=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},qb=function(){var e=this.props,t=this.target,i=t.style,r=t._gsap,s,a;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?i[e[s]]=e[s+2]:i.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(gm,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)r[a]=this.tfm[a];r.svg&&(r.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=_m(),(!s||!s.isStart)&&!i[Et]&&(DS(i),r.zOrigin&&i[Cn]&&(i[Cn]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},LS=function(e,t){var i={target:e,props:[],revert:qb,save:jb};return e._gsap||Rn.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(r){return i.save(r)}),i},NS,Yh=function(e,t){var i=Nr.createElementNS?Nr.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Nr.createElement(e);return i&&i.style?i:Nr.createElement(e)},On=function n(e,t,i){var r=getComputedStyle(e);return r[t]||r.getPropertyValue(t.replace(gm,"-$1").toLowerCase())||r.getPropertyValue(t)||!i&&n(e,Wa(t)||t,1)||""},Wg="O,Moz,ms,Ms,Webkit".split(","),Wa=function(e,t,i){var r=t||Ms,s=r.style,a=5;if(e in s&&!i)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!(Wg[a]+e in s););return a<0?null:(a===3?"ms":a>=0?Wg[a]:"")+e},jh=function(){Ib()&&window.document&&(Vg=window,Nr=Vg.document,Aa=Nr.documentElement,Ms=Yh("div")||{style:{}},Yh("div"),Et=Wa(Et),Cn=Et+"Origin",Ms.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",NS=!!Wa("perspective"),_m=Rn.core.reverting,mm=1)},Xg=function(e){var t=e.ownerSVGElement,i=Yh("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=e.cloneNode(!0),s;r.style.display="block",i.appendChild(r),Aa.appendChild(i);try{s=r.getBBox()}catch{}return i.removeChild(r),Aa.removeChild(i),s},Yg=function(e,t){for(var i=t.length;i--;)if(e.hasAttribute(t[i]))return e.getAttribute(t[i])},IS=function(e){var t,i;try{t=e.getBBox()}catch{t=Xg(e),i=1}return t&&(t.width||t.height)||i||(t=Xg(e)),t&&!t.width&&!t.x&&!t.y?{x:+Yg(e,["x","cx","x1"])||0,y:+Yg(e,["y","cy","y1"])||0,width:0,height:0}:t},US=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&IS(e))},$r=function(e,t){if(t){var i=e.style,r;t in dr&&t!==Cn&&(t=Et),i.removeProperty?(r=t.substr(0,2),(r==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),i.removeProperty(r==="--"?t:t.replace(gm,"-$1").toLowerCase())):i.removeAttribute(t)}},Ir=function(e,t,i,r,s,a){var o=new An(e._pt,t,i,0,1,a?PS:bS);return e._pt=o,o.b=r,o.e=s,e._props.push(i),o},jg={deg:1,rad:1,turn:1},$b={grid:1,flex:1},Kr=function n(e,t,i,r){var s=parseFloat(i)||0,a=(i+"").trim().substr((s+"").length)||"px",o=Ms.style,l=Ub.test(t),u=e.tagName.toLowerCase()==="svg",c=(u?"client":"offset")+(l?"Width":"Height"),h=100,f=r==="px",p=r==="%",g,v,m,d;if(r===a||!s||jg[r]||jg[a])return s;if(a!=="px"&&!f&&(s=n(e,t,i,"px")),d=e.getCTM&&US(e),(p||a==="%")&&(dr[t]||~t.indexOf("adius")))return g=d?e.getBBox()[l?"width":"height"]:e[c],Pt(p?s/g*h:s/100*g);if(o[l?"width":"height"]=h+(f?a:r),v=r!=="rem"&&~t.indexOf("adius")||r==="em"&&e.appendChild&&!u?e:e.parentNode,d&&(v=(e.ownerSVGElement||{}).parentNode),(!v||v===Nr||!v.appendChild)&&(v=Nr.body),m=v._gsap,m&&p&&m.width&&l&&m.time===In.time&&!m.uncache)return Pt(s/m.width*h);if(p&&(t==="height"||t==="width")){var _=e.style[t];e.style[t]=h+r,g=e[c],_?e.style[t]=_:$r(e,t)}else(p||a==="%")&&!$b[On(v,"display")]&&(o.position=On(e,"position")),v===e&&(o.position="static"),v.appendChild(Ms),g=Ms[c],v.removeChild(Ms),o.position="absolute";return l&&p&&(m=ws(v),m.time=In.time,m.width=v[c]),Pt(f?g*s/h:g&&s?h/g*s:0)},$i=function(e,t,i,r){var s;return mm||jh(),t in Pi&&t!=="transform"&&(t=Pi[t],~t.indexOf(",")&&(t=t.split(",")[0])),dr[t]&&t!=="transform"?(s=ol(e,r),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:uc(On(e,Cn))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=lc[t]&&lc[t](e,t,i)||On(e,t)||Jx(e,t)||(t==="opacity"?1:0))),i&&!~(s+"").trim().indexOf(" ")?Kr(e,t,s,i)+i:s},Kb=function(e,t,i,r){if(!i||i==="none"){var s=Wa(t,e,1),a=s&&On(e,s,1);a&&a!==i?(t=s,i=a):t==="borderColor"&&(i=On(e,"borderTopColor"))}var o=new An(this._pt,e.style,t,0,1,AS),l=0,u=0,c,h,f,p,g,v,m,d,_,x,y,E;if(o.b=i,o.e=r,i+="",r+="",r.substring(0,6)==="var(--"&&(r=On(e,r.substring(4,r.indexOf(")")))),r==="auto"&&(v=e.style[t],e.style[t]=r,r=On(e,t)||r,v?e.style[t]=v:$r(e,t)),c=[i,r],vS(c),i=c[0],r=c[1],f=i.match(ma)||[],E=r.match(ma)||[],E.length){for(;h=ma.exec(r);)m=h[0],_=r.substring(l,h.index),g?g=(g+1)%5:(_.substr(-5)==="rgba("||_.substr(-5)==="hsla(")&&(g=1),m!==(v=f[u++]||"")&&(p=parseFloat(v)||0,y=v.substr((p+"").length),m.charAt(1)==="="&&(m=wa(p,m)+y),d=parseFloat(m),x=m.substr((d+"").length),l=ma.lastIndex-x.length,x||(x=x||zn.units[t]||y,l===r.length&&(r+=x,o.e+=x)),y!==x&&(p=Kr(e,t,v,x)||0),o._pt={_next:o._pt,p:_||u===1?_:",",s:p,c:d-p,m:g&&g<4||t==="zIndex"?Math.round:0});o.c=l<r.length?r.substring(l,r.length):""}else o.r=t==="display"&&r==="none"?PS:bS;return qx.test(r)&&(o.e=0),this._pt=o,o},qg={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Zb=function(e){var t=e.split(" "),i=t[0],r=t[1]||"50%";return(i==="top"||i==="bottom"||r==="left"||r==="right")&&(e=i,i=r,r=e),t[0]=qg[i]||i,t[1]=qg[r]||r,t.join(" ")},Qb=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var i=t.t,r=i.style,s=t.u,a=i._gsap,o,l,u;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),u=s.length;--u>-1;)o=s[u],dr[o]&&(l=1,o=o==="transformOrigin"?Cn:Et),$r(i,o);l&&($r(i,Et),a&&(a.svg&&i.removeAttribute("transform"),r.scale=r.rotate=r.translate="none",ol(i,1),a.uncache=1,DS(r)))}},lc={clearProps:function(e,t,i,r,s){if(s.data!=="isFromStart"){var a=e._pt=new An(e._pt,t,i,0,0,Qb);return a.u=r,a.pr=-10,a.tween=s,e._props.push(i),1}}},al=[1,0,0,1,0,0],FS={},OS=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},$g=function(e){var t=On(e,Et);return OS(t)?al:t.substr(7).match(jx).map(Pt)},vm=function(e,t){var i=e._gsap||ws(e),r=e.style,s=$g(e),a,o,l,u;return i.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?al:s):(s===al&&!e.offsetParent&&e!==Aa&&!i.svg&&(l=r.display,r.display="block",a=e.parentNode,(!a||!e.offsetParent&&!e.getBoundingClientRect().width)&&(u=1,o=e.nextElementSibling,Aa.appendChild(e)),s=$g(e),l?r.display=l:$r(e,"display"),u&&(o?a.insertBefore(e,o):a?a.appendChild(e):Aa.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},qh=function(e,t,i,r,s,a){var o=e._gsap,l=s||vm(e,!0),u=o.xOrigin||0,c=o.yOrigin||0,h=o.xOffset||0,f=o.yOffset||0,p=l[0],g=l[1],v=l[2],m=l[3],d=l[4],_=l[5],x=t.split(" "),y=parseFloat(x[0])||0,E=parseFloat(x[1])||0,C,w,S,T;i?l!==al&&(w=p*m-g*v)&&(S=y*(m/w)+E*(-v/w)+(v*_-m*d)/w,T=y*(-g/w)+E*(p/w)-(p*_-g*d)/w,y=S,E=T):(C=IS(e),y=C.x+(~x[0].indexOf("%")?y/100*C.width:y),E=C.y+(~(x[1]||x[0]).indexOf("%")?E/100*C.height:E)),r||r!==!1&&o.smooth?(d=y-u,_=E-c,o.xOffset=h+(d*p+_*v)-d,o.yOffset=f+(d*g+_*m)-_):o.xOffset=o.yOffset=0,o.xOrigin=y,o.yOrigin=E,o.smooth=!!r,o.origin=t,o.originIsAbsolute=!!i,e.style[Cn]="0px 0px",a&&(Ir(a,o,"xOrigin",u,y),Ir(a,o,"yOrigin",c,E),Ir(a,o,"xOffset",h,o.xOffset),Ir(a,o,"yOffset",f,o.yOffset)),e.setAttribute("data-svg-origin",y+" "+E)},ol=function(e,t){var i=e._gsap||new SS(e);if("x"in i&&!t&&!i.uncache)return i;var r=e.style,s=i.scaleX<0,a="px",o="deg",l=getComputedStyle(e),u=On(e,Cn)||"0",c,h,f,p,g,v,m,d,_,x,y,E,C,w,S,T,D,b,V,B,O,L,z,N,U,H,Z,ee,J,Pe,Le,Fe;return c=h=f=v=m=d=_=x=y=0,p=g=1,i.svg=!!(e.getCTM&&US(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[Et]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Et]!=="none"?l[Et]:"")),r.scale=r.rotate=r.translate="none"),w=vm(e,i.svg),i.svg&&(i.uncache?(U=e.getBBox(),u=i.xOrigin-U.x+"px "+(i.yOrigin-U.y)+"px",N=""):N=!t&&e.getAttribute("data-svg-origin"),qh(e,N||u,!!N||i.originIsAbsolute,i.smooth!==!1,w)),E=i.xOrigin||0,C=i.yOrigin||0,w!==al&&(b=w[0],V=w[1],B=w[2],O=w[3],c=L=w[4],h=z=w[5],w.length===6?(p=Math.sqrt(b*b+V*V),g=Math.sqrt(O*O+B*B),v=b||V?ta(V,b)*ps:0,_=B||O?ta(B,O)*ps+v:0,_&&(g*=Math.abs(Math.cos(_*Ca))),i.svg&&(c-=E-(E*b+C*B),h-=C-(E*V+C*O))):(Fe=w[6],Pe=w[7],Z=w[8],ee=w[9],J=w[10],Le=w[11],c=w[12],h=w[13],f=w[14],S=ta(Fe,J),m=S*ps,S&&(T=Math.cos(-S),D=Math.sin(-S),N=L*T+Z*D,U=z*T+ee*D,H=Fe*T+J*D,Z=L*-D+Z*T,ee=z*-D+ee*T,J=Fe*-D+J*T,Le=Pe*-D+Le*T,L=N,z=U,Fe=H),S=ta(-B,J),d=S*ps,S&&(T=Math.cos(-S),D=Math.sin(-S),N=b*T-Z*D,U=V*T-ee*D,H=B*T-J*D,Le=O*D+Le*T,b=N,V=U,B=H),S=ta(V,b),v=S*ps,S&&(T=Math.cos(S),D=Math.sin(S),N=b*T+V*D,U=L*T+z*D,V=V*T-b*D,z=z*T-L*D,b=N,L=U),m&&Math.abs(m)+Math.abs(v)>359.9&&(m=v=0,d=180-d),p=Pt(Math.sqrt(b*b+V*V+B*B)),g=Pt(Math.sqrt(z*z+Fe*Fe)),S=ta(L,z),_=Math.abs(S)>2e-4?S*ps:0,y=Le?1/(Le<0?-Le:Le):0),i.svg&&(N=e.getAttribute("transform"),i.forceCSS=e.setAttribute("transform","")||!OS(On(e,Et)),N&&e.setAttribute("transform",N))),Math.abs(_)>90&&Math.abs(_)<270&&(s?(p*=-1,_+=v<=0?180:-180,v+=v<=0?180:-180):(g*=-1,_+=_<=0?180:-180)),t=t||i.uncache,i.x=c-((i.xPercent=c&&(!t&&i.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-c)?-50:0)))?e.offsetWidth*i.xPercent/100:0)+a,i.y=h-((i.yPercent=h&&(!t&&i.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*i.yPercent/100:0)+a,i.z=f+a,i.scaleX=Pt(p),i.scaleY=Pt(g),i.rotation=Pt(v)+o,i.rotationX=Pt(m)+o,i.rotationY=Pt(d)+o,i.skewX=_+o,i.skewY=x+o,i.transformPerspective=y+a,(i.zOrigin=parseFloat(u.split(" ")[2])||!t&&i.zOrigin||0)&&(r[Cn]=uc(u)),i.xOffset=i.yOffset=0,i.force3D=zn.force3D,i.renderTransform=i.svg?eP:NS?kS:Jb,i.uncache=0,i},uc=function(e){return(e=e.split(" "))[0]+" "+e[1]},qf=function(e,t,i){var r=an(t);return Pt(parseFloat(t)+parseFloat(Kr(e,"x",i+"px",r)))+r},Jb=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,kS(e,t)},us="0deg",ho="0px",cs=") ",kS=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,a=i.x,o=i.y,l=i.z,u=i.rotation,c=i.rotationY,h=i.rotationX,f=i.skewX,p=i.skewY,g=i.scaleX,v=i.scaleY,m=i.transformPerspective,d=i.force3D,_=i.target,x=i.zOrigin,y="",E=d==="auto"&&e&&e!==1||d===!0;if(x&&(h!==us||c!==us)){var C=parseFloat(c)*Ca,w=Math.sin(C),S=Math.cos(C),T;C=parseFloat(h)*Ca,T=Math.cos(C),a=qf(_,a,w*T*-x),o=qf(_,o,-Math.sin(C)*-x),l=qf(_,l,S*T*-x+x)}m!==ho&&(y+="perspective("+m+cs),(r||s)&&(y+="translate("+r+"%, "+s+"%) "),(E||a!==ho||o!==ho||l!==ho)&&(y+=l!==ho||E?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+cs),u!==us&&(y+="rotate("+u+cs),c!==us&&(y+="rotateY("+c+cs),h!==us&&(y+="rotateX("+h+cs),(f!==us||p!==us)&&(y+="skew("+f+", "+p+cs),(g!==1||v!==1)&&(y+="scale("+g+", "+v+cs),_.style[Et]=y||"translate(0, 0)"},eP=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,a=i.x,o=i.y,l=i.rotation,u=i.skewX,c=i.skewY,h=i.scaleX,f=i.scaleY,p=i.target,g=i.xOrigin,v=i.yOrigin,m=i.xOffset,d=i.yOffset,_=i.forceCSS,x=parseFloat(a),y=parseFloat(o),E,C,w,S,T;l=parseFloat(l),u=parseFloat(u),c=parseFloat(c),c&&(c=parseFloat(c),u+=c,l+=c),l||u?(l*=Ca,u*=Ca,E=Math.cos(l)*h,C=Math.sin(l)*h,w=Math.sin(l-u)*-f,S=Math.cos(l-u)*f,u&&(c*=Ca,T=Math.tan(u-c),T=Math.sqrt(1+T*T),w*=T,S*=T,c&&(T=Math.tan(c),T=Math.sqrt(1+T*T),E*=T,C*=T)),E=Pt(E),C=Pt(C),w=Pt(w),S=Pt(S)):(E=h,S=f,C=w=0),(x&&!~(a+"").indexOf("px")||y&&!~(o+"").indexOf("px"))&&(x=Kr(p,"x",a,"px"),y=Kr(p,"y",o,"px")),(g||v||m||d)&&(x=Pt(x+g-(g*E+v*w)+m),y=Pt(y+v-(g*C+v*S)+d)),(r||s)&&(T=p.getBBox(),x=Pt(x+r/100*T.width),y=Pt(y+s/100*T.height)),T="matrix("+E+","+C+","+w+","+S+","+x+","+y+")",p.setAttribute("transform",T),_&&(p.style[Et]=T)},tP=function(e,t,i,r,s){var a=360,o=Yt(s),l=parseFloat(s)*(o&&~s.indexOf("rad")?ps:1),u=l-r,c=r+u+"deg",h,f;return o&&(h=s.split("_")[1],h==="short"&&(u%=a,u!==u%(a/2)&&(u+=u<0?a:-a)),h==="cw"&&u<0?u=(u+a*Hg)%a-~~(u/a)*a:h==="ccw"&&u>0&&(u=(u-a*Hg)%a-~~(u/a)*a)),e._pt=f=new An(e._pt,t,i,r,u,Ob),f.e=c,f.u="deg",e._props.push(i),f},Kg=function(e,t){for(var i in t)e[i]=t[i];return e},nP=function(e,t,i){var r=Kg({},i._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=i.style,o,l,u,c,h,f,p,g;r.svg?(u=i.getAttribute("transform"),i.setAttribute("transform",""),a[Et]=t,o=ol(i,1),$r(i,Et),i.setAttribute("transform",u)):(u=getComputedStyle(i)[Et],a[Et]=t,o=ol(i,1),a[Et]=u);for(l in dr)u=r[l],c=o[l],u!==c&&s.indexOf(l)<0&&(p=an(u),g=an(c),h=p!==g?Kr(i,l,u,g):parseFloat(u),f=parseFloat(c),e._pt=new An(e._pt,o,l,h,f-h,Xh),e._pt.u=g||0,e._props.push(l));Kg(o,r)};wn("padding,margin,Width,Radius",function(n,e){var t="Top",i="Right",r="Bottom",s="Left",a=(e<3?[t,i,r,s]:[t+s,t+i,r+i,r+s]).map(function(o){return e<2?n+o:"border"+o+n});lc[e>1?"border"+n:n]=function(o,l,u,c,h){var f,p;if(arguments.length<4)return f=a.map(function(g){return $i(o,g,u)}),p=f.join(" "),p.split(f[0]).length===5?f[0]:p;f=(c+"").split(" "),p={},a.forEach(function(g,v){return p[g]=f[v]=f[v]||f[(v-1)/2|0]}),o.init(l,p,h)}});var BS={name:"css",register:jh,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,i,r,s){var a=this._props,o=e.style,l=i.vars.startAt,u,c,h,f,p,g,v,m,d,_,x,y,E,C,w,S,T;mm||jh(),this.styles=this.styles||LS(e),S=this.styles.props,this.tween=i;for(v in t)if(v!=="autoRound"&&(c=t[v],!(Nn[v]&&yS(v,t,i,r,e,s)))){if(p=typeof c,g=lc[v],p==="function"&&(c=c.call(i,r,e,s),p=typeof c),p==="string"&&~c.indexOf("random(")&&(c=il(c)),g)g(this,e,v,c,i)&&(w=1);else if(v.substr(0,2)==="--")u=(getComputedStyle(e).getPropertyValue(v)+"").trim(),c+="",Wr.lastIndex=0,Wr.test(u)||(m=an(u),d=an(c),d?m!==d&&(u=Kr(e,v,u,d)+d):m&&(c+=m)),this.add(o,"setProperty",u,c,r,s,0,0,v),a.push(v),S.push(v,0,o[v]);else if(p!=="undefined"){if(l&&v in l?(u=typeof l[v]=="function"?l[v].call(i,r,e,s):l[v],Yt(u)&&~u.indexOf("random(")&&(u=il(u)),an(u+"")||u==="auto"||(u+=zn.units[v]||an($i(e,v))||""),(u+"").charAt(1)==="="&&(u=$i(e,v))):u=$i(e,v),f=parseFloat(u),_=p==="string"&&c.charAt(1)==="="&&c.substr(0,2),_&&(c=c.substr(2)),h=parseFloat(c),v in Pi&&(v==="autoAlpha"&&(f===1&&$i(e,"visibility")==="hidden"&&h&&(f=0),S.push("visibility",0,o.visibility),Ir(this,o,"visibility",f?"inherit":"hidden",h?"inherit":"hidden",!h)),v!=="scale"&&v!=="transform"&&(v=Pi[v],~v.indexOf(",")&&(v=v.split(",")[0]))),x=v in dr,x){if(this.styles.save(v),T=c,p==="string"&&c.substring(0,6)==="var(--"){if(c=On(e,c.substring(4,c.indexOf(")"))),c.substring(0,5)==="calc("){var D=e.style.perspective;e.style.perspective=c,c=On(e,"perspective"),D?e.style.perspective=D:$r(e,"perspective")}h=parseFloat(c)}if(y||(E=e._gsap,E.renderTransform&&!t.parseTransform||ol(e,t.parseTransform),C=t.smoothOrigin!==!1&&E.smooth,y=this._pt=new An(this._pt,o,Et,0,1,E.renderTransform,E,0,-1),y.dep=1),v==="scale")this._pt=new An(this._pt,E,"scaleY",E.scaleY,(_?wa(E.scaleY,_+h):h)-E.scaleY||0,Xh),this._pt.u=0,a.push("scaleY",v),v+="X";else if(v==="transformOrigin"){S.push(Cn,0,o[Cn]),c=Zb(c),E.svg?qh(e,c,0,C,0,this):(d=parseFloat(c.split(" ")[2])||0,d!==E.zOrigin&&Ir(this,E,"zOrigin",E.zOrigin,d),Ir(this,o,v,uc(u),uc(c)));continue}else if(v==="svgOrigin"){qh(e,c,1,C,0,this);continue}else if(v in FS){tP(this,E,v,f,_?wa(f,_+c):c);continue}else if(v==="smoothOrigin"){Ir(this,E,"smooth",E.smooth,c);continue}else if(v==="force3D"){E[v]=c;continue}else if(v==="transform"){nP(this,c,e);continue}}else v in o||(v=Wa(v)||v);if(x||(h||h===0)&&(f||f===0)&&!Fb.test(c)&&v in o)m=(u+"").substr((f+"").length),h||(h=0),d=an(c)||(v in zn.units?zn.units[v]:m),m!==d&&(f=Kr(e,v,u,d)),this._pt=new An(this._pt,x?E:o,v,f,(_?wa(f,_+h):h)-f,!x&&(d==="px"||v==="zIndex")&&t.autoRound!==!1?zb:Xh),this._pt.u=d||0,x&&T!==c?(this._pt.b=u,this._pt.e=T,this._pt.r=Bb):m!==d&&d!=="%"&&(this._pt.b=u,this._pt.r=kb);else if(v in o)Kb.call(this,e,v,u,_?_+c:c);else if(v in e)this.add(e,v,u||e[v],_?_+c:c,r,s);else if(v!=="parseTransform"){sm(v,c);continue}x||(v in o?S.push(v,0,o[v]):typeof e[v]=="function"?S.push(v,2,e[v]()):S.push(v,1,u||e[v])),a.push(v)}}w&&CS(this)},render:function(e,t){if(t.tween._time||!_m())for(var i=t._pt;i;)i.r(e,i.d),i=i._next;else t.styles.revert()},get:$i,aliases:Pi,getSetter:function(e,t,i){var r=Pi[t];return r&&r.indexOf(",")<0&&(t=r),t in dr&&t!==Cn&&(e._gsap.x||$i(e,"x"))?i&&Gg===i?t==="scale"?Wb:Hb:(Gg=i||{})&&(t==="scale"?Xb:Yb):e.style&&!nm(e.style[t])?Vb:~t.indexOf("-")?Gb:hm(e,t)},core:{_removeProperty:$r,_getMatrix:vm}};Rn.utils.checkPrefix=Wa;Rn.core.getStyleSaver=LS;(function(n,e,t,i){var r=wn(n+","+e+","+t,function(s){dr[s]=1});wn(e,function(s){zn.units[s]="deg",FS[s]=1}),Pi[r[13]]=n+","+e,wn(i,function(s){var a=s.split(":");Pi[a[1]]=r[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");wn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(n){zn.units[n]="px"});Rn.registerPlugin(BS);var na=Rn.registerPlugin(BS)||Rn;na.core.Tween;const iP=({items:n,className:e="",radius:t=300,columns:i=3,rows:r=2,damping:s=.45,fadeOut:a=.6,ease:o="power3.out"})=>{const l=Je.useRef(null),u=Je.useRef(null),c=Je.useRef(null),h=Je.useRef(null),f=Je.useRef({x:0,y:0}),p=[{image:"https://i.pravatar.cc/300?img=8",title:"Alex Rivera",subtitle:"Full Stack Developer",handle:"@alexrivera",borderColor:"#4F46E5",gradient:"linear-gradient(145deg, #4F46E5, #000)",url:"https://github.com/"},{image:"https://i.pravatar.cc/300?img=11",title:"Jordan Chen",subtitle:"DevOps Engineer",handle:"@jordanchen",borderColor:"#10B981",gradient:"linear-gradient(210deg, #10B981, #000)",url:"https://linkedin.com/in/"},{image:"https://i.pravatar.cc/300?img=3",title:"Morgan Blake",subtitle:"UI/UX Designer",handle:"@morganblake",borderColor:"#F59E0B",gradient:"linear-gradient(165deg, #F59E0B, #000)",url:"https://dribbble.com/"},{image:"https://i.pravatar.cc/300?img=16",title:"Casey Park",subtitle:"Data Scientist",handle:"@caseypark",borderColor:"#EF4444",gradient:"linear-gradient(195deg, #EF4444, #000)",url:"https://kaggle.com/"},{image:"https://i.pravatar.cc/300?img=25",title:"Sam Kim",subtitle:"Mobile Developer",handle:"@thesamkim",borderColor:"#8B5CF6",gradient:"linear-gradient(225deg, #8B5CF6, #000)",url:"https://github.com/"},{image:"https://i.pravatar.cc/300?img=60",title:"Tyler Rodriguez",subtitle:"Cloud Architect",handle:"@tylerrod",borderColor:"#06B6D4",gradient:"linear-gradient(135deg, #06B6D4, #000)",url:"https://aws.amazon.com/"}],g=n!=null&&n.length?n:p;Je.useEffect(()=>{const y=l.current;if(!y)return;c.current=na.quickSetter(y,"--x","px"),h.current=na.quickSetter(y,"--y","px");const{width:E,height:C}=y.getBoundingClientRect();f.current={x:E/2,y:C/2},c.current(f.current.x),h.current(f.current.y)},[]);const v=(y,E)=>{na.to(f.current,{x:y,y:E,duration:s,ease:o,onUpdate:()=>{var C,w;(C=c.current)==null||C.call(c,f.current.x),(w=h.current)==null||w.call(h,f.current.y)},overwrite:!0})},m=y=>{const E=l.current.getBoundingClientRect();v(y.clientX-E.left,y.clientY-E.top),na.to(u.current,{opacity:0,duration:.25,overwrite:!0})},d=()=>{na.to(u.current,{opacity:1,duration:a,overwrite:!0})},_=y=>{y&&window.open(y,"_blank","noopener,noreferrer")},x=y=>{const E=y.currentTarget,C=E.getBoundingClientRect(),w=y.clientX-C.left,S=y.clientY-C.top;E.style.setProperty("--mouse-x",`${w}px`),E.style.setProperty("--mouse-y",`${S}px`)};return he.jsxs("div",{ref:l,className:`chroma-grid ${e}`,style:{"--r":`${t}px`,"--cols":i,"--rows":r},onPointerMove:m,onPointerLeave:d,children:[g.map((y,E)=>he.jsxs("article",{className:"chroma-card",onMouseMove:x,onClick:()=>_(y.url),style:{"--card-border":y.borderColor||"transparent","--card-gradient":y.gradient,cursor:y.url?"pointer":"default"},children:[he.jsx("div",{className:"chroma-img-wrapper",children:he.jsx("img",{src:y.image,alt:y.title,loading:"lazy"})}),he.jsxs("footer",{className:"chroma-info",children:[he.jsx("h3",{className:"name",children:y.title}),y.handle&&he.jsx("span",{className:"handle",children:y.handle}),he.jsx("p",{className:"role",children:y.subtitle}),y.location&&he.jsx("span",{className:"location",children:y.location})]})]},E)),he.jsx("div",{className:"chroma-overlay"}),he.jsx("div",{ref:u,className:"chroma-fade"})]})},$f=({as:n="button",className:e="",color:t="white",speed:i="6s",thickness:r=1,children:s,...a})=>he.jsxs(n,{className:`star-border-container ${e}`,style:{padding:`${r}px 0`,...a.style},...a,children:[he.jsx("div",{className:"border-gradient-bottom",style:{background:`radial-gradient(circle, ${t}, transparent 10%)`,animationDuration:i}}),he.jsx("div",{className:"border-gradient-top",style:{background:`radial-gradient(circle, ${t}, transparent 10%)`,animationDuration:i}}),he.jsx("div",{className:"inner-content",children:s})]}),Zg="http://127.0.0.1:8000",ou=(n,e,t,i)=>{const r=`
    <svg xmlns="http://www.w3.org/2000/svg" width="320" height="420" viewBox="0 0 320 420">
      <defs>
        <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="${e}" />
          <stop offset="100%" stop-color="${t}" />
        </linearGradient>
        <radialGradient id="r" cx="50%" cy="35%" r="75%">
          <stop offset="0%" stop-color="rgba(255,255,255,0.18)" />
          <stop offset="100%" stop-color="rgba(255,255,255,0)" />
        </radialGradient>
      </defs>
      <rect width="320" height="420" rx="24" fill="url(#g)" />
      <rect width="320" height="420" rx="24" fill="url(#r)" />
      <circle cx="86" cy="82" r="44" fill="rgba(255,255,255,0.12)" />
      <circle cx="250" cy="118" r="62" fill="rgba(0,0,0,0.15)" />
      <path d="M36 304 C88 252, 140 368, 198 300 S286 250, 300 286" fill="none" stroke="rgba(255,255,255,0.26)" stroke-width="6" stroke-linecap="round" />
      <text x="28" y="320" fill="#fff" font-family="Arial, sans-serif" font-size="32" font-weight="700">${n}</text>
      <text x="28" y="352" fill="rgba(255,255,255,0.84)" font-family="Arial, sans-serif" font-size="16">${i}</text>
    </svg>
  `;return`data:image/svg+xml;base64,${btoa(r)}`};function rP(){const[n,e]=Je.useState("encode"),[t,i]=Je.useState(null),[r,s]=Je.useState(""),[a,o]=Je.useState(""),[l,u]=Je.useState(null),[c,h]=Je.useState(""),[f,p]=Je.useState(""),[g,v]=Je.useState(""),[m,d]=Je.useState(""),[_,x]=Je.useState(""),[y,E]=Je.useState({type:"",text:""}),[C,w]=Je.useState(!1),S=Je.useMemo(()=>[{image:ou("Encode","#e945f5","#6f6f6f","Hide a secret message"),title:"Encode",subtitle:"OTP + binary LSB embed",handle:"@hide-data",borderColor:"#e945f5",gradient:"linear-gradient(145deg, rgba(233, 69, 245, 0.62), rgba(111, 111, 111, 0.88))"},{image:ou("Key","#6f6f6f","#6a6a6a","Generate secure OTP"),title:"OTP Key",subtitle:"Secure random byte stream",handle:"@one-time-pad",borderColor:"#6a6a6a",gradient:"linear-gradient(180deg, rgba(111, 111, 111, 0.84), rgba(106, 106, 106, 0.9))"},{image:ou("LSB","#e945f5","#6a6a6a","Least significant bit"),title:"LSB",subtitle:"Minimal image distortion",handle:"@pixel-layer",borderColor:"#e945f5",gradient:"linear-gradient(165deg, rgba(233, 69, 245, 0.72), rgba(106, 106, 106, 0.9))"},{image:ou("Decode","#6a6a6a","#e945f5","Recover the message"),title:"Decode",subtitle:"Extract and decrypt safely",handle:"@recover-text",borderColor:"#6f6f6f",gradient:"linear-gradient(195deg, rgba(106, 106, 106, 0.88), rgba(233, 69, 245, 0.7))"}],[]),T=Je.useMemo(()=>a.length,[a]),D=(O,L)=>{if(!O)return;const z=URL.createObjectURL(O);L==="encode"?(i(O),s(z),d(""),v("")):(u(O),h(z),x("")),E({type:"",text:""})},b=async O=>{if(O)try{await navigator.clipboard.writeText(O),E({type:"success",text:"Copied to clipboard."})}catch{E({type:"error",text:"Clipboard copy failed."})}},V=async O=>{if(O.preventDefault(),!t){E({type:"error",text:"Please upload an image to encode."});return}if(!a.trim()){E({type:"error",text:"Please enter a secret message."});return}w(!0),E({type:"",text:""});try{const L=new FormData;L.append("image",t),L.append("message",a);const z=await fetch(`${Zg}/encode`,{method:"POST",body:L});if(!z.ok){const Z=await z.json().catch(()=>({detail:"Encoding failed"}));throw new Error(Z.detail||"Encoding failed")}const N=z.headers.get("X-OTP-Key")||"",U=await z.blob(),H=URL.createObjectURL(U);v(N),d(H),E({type:"success",text:"Message encrypted and hidden in image successfully."})}catch(L){E({type:"error",text:L.message||"Encoding failed."})}finally{w(!1)}},B=async O=>{if(O.preventDefault(),!l){E({type:"error",text:"Please upload an encoded image."});return}if(!f.trim()){E({type:"error",text:"Please enter the OTP key."});return}w(!0),E({type:"",text:""});try{const L=new FormData;L.append("image",l),L.append("otp_key",f.trim());const z=await fetch(`${Zg}/decode`,{method:"POST",body:L});if(!z.ok){const U=await z.json().catch(()=>({detail:"Decoding failed"}));throw new Error(U.detail||"Decoding failed")}const N=await z.json();x(N.message||""),E({type:"success",text:"Message decoded successfully."})}catch(L){E({type:"error",text:L.message||"Decoding failed."})}finally{w(!1)}};return he.jsxs("div",{className:"relative min-h-screen overflow-hidden bg-gradient-to-br from-accent/18 via-bg to-accentEnd/45 text-slate-100",children:[he.jsx("div",{className:"pointer-events-none absolute inset-0 opacity-75",children:he.jsx(OR,{enabledWaves:["top","middle","bottom"],lineCount:[10,14,18],lineDistance:[8,6,4],linesGradient:["#e945f5","#6f6f6f","#6a6a6a"],bendRadius:5,bendStrength:-.5,interactive:!0,parallax:!0,parallaxStrength:.16,mixBlendMode:"screen"})}),he.jsxs("div",{className:"relative z-10 mx-auto w-full max-w-5xl px-4 py-10 sm:px-6 lg:px-8",children:[he.jsxs("header",{className:"animate-floatIn rounded-2xl border border-accent/35 bg-panel/90 p-6 shadow-glow backdrop-blur",children:[he.jsx("p",{className:"text-xs uppercase tracking-[0.3em] text-fuchsia-200/85",children:"Secure Visual Crypto"}),he.jsx("h1",{className:"mt-2 text-2xl font-semibold sm:text-3xl",children:"Image Steganography with OTP Encryption"}),he.jsx("p",{className:"mt-3 max-w-3xl text-sm text-slate-300",children:"Encrypt a message using a one-time pad, then hide the encrypted binary data inside image pixels using LSB. Decode later with the correct OTP key."})]}),he.jsxs("section",{className:"mt-6 rounded-2xl border border-accentMid/45 bg-panel/80 p-4 shadow-glow backdrop-blur",children:[he.jsxs("div",{className:"mb-4 flex flex-wrap items-end justify-between gap-3",children:[he.jsxs("div",{children:[he.jsx("p",{className:"text-xs uppercase tracking-[0.3em] text-slate-400",children:"Visual Overview"}),he.jsx("h2",{className:"mt-1 text-lg font-semibold text-white",children:"How the secure image flow feels"})]}),he.jsx("p",{className:"max-w-xl text-sm text-slate-300",children:"ChromaGrid is used here as a stylized showcase for the encryption flow, key generation, pixel hiding, and decode steps."})]}),he.jsx("div",{className:"h-[560px] w-full overflow-hidden rounded-2xl border border-slate-800/70 bg-black/20",children:he.jsx(iP,{items:S,radius:280,columns:2,rows:2,damping:.45,fadeOut:.6,ease:"power3.out",className:"max-w-none"})})]}),he.jsxs("div",{className:"mt-8 flex gap-2 rounded-xl border border-accent/20 bg-panelSoft/85 p-1",children:[he.jsx("button",{className:`tab-btn ${n==="encode"?"tab-btn-active":""}`,onClick:()=>{e("encode"),E({type:"",text:""})},type:"button",children:"Encode"}),he.jsx("button",{className:`tab-btn ${n==="decode"?"tab-btn-active":""}`,onClick:()=>{e("decode"),E({type:"",text:""})},type:"button",children:"Decode"})]}),y.text?he.jsx("div",{className:`mt-6 rounded-xl border p-3 text-sm ${y.type==="error"?"border-red-500/40 bg-red-500/10 text-red-200":"border-accent/45 bg-accent/12 text-fuchsia-100"}`,children:y.text}):null,he.jsx("main",{className:"mt-6 animate-floatIn rounded-2xl border border-accentMid/45 bg-panel p-5 shadow-glow sm:p-6",children:n==="encode"?he.jsxs("form",{onSubmit:V,className:"space-y-5",children:[he.jsxs("label",{className:"block",children:[he.jsx("span",{className:"form-label",children:"Upload Image (PNG/JPG)"}),he.jsx("input",{type:"file",accept:"image/png,image/jpeg",className:"file-input",onChange:O=>{var L;return D((L=O.target.files)==null?void 0:L[0],"encode")}})]}),r?he.jsx("img",{src:r,alt:"Encode preview",className:"preview-img"}):null,he.jsxs("label",{className:"block",children:[he.jsx("span",{className:"form-label",children:"Secret Message"}),he.jsx("textarea",{className:"text-input min-h-28",value:a,onChange:O=>o(O.target.value),placeholder:"Type the message you want to hide"}),he.jsxs("span",{className:"mt-1 block text-xs text-slate-400",children:["Characters: ",T]})]}),he.jsx($f,{as:"button",type:"submit",disabled:C,className:"w-full",color:"#e945f5",speed:"5s",thickness:1.4,children:C?"Encoding...":"Encode and Hide Message"}),g?he.jsxs("section",{className:"rounded-xl border border-accent/40 bg-accent/14 p-4",children:[he.jsx("p",{className:"text-sm font-semibold text-fuchsia-100",children:"Generated OTP Key"}),he.jsx("p",{className:"mt-2 break-all rounded-md bg-black/30 p-3 text-xs text-fuchsia-50",children:g}),he.jsx("button",{className:"secondary-btn mt-3",type:"button",onClick:()=>b(g),children:"Copy OTP Key"})]}):null,m?he.jsxs("section",{className:"space-y-3 rounded-xl border border-accentMid/55 bg-accentMid/20 p-4",children:[he.jsx("img",{src:m,alt:"Encoded preview",className:"preview-img"}),he.jsx($f,{as:"a",href:m,download:"encoded_image.png",className:"w-full",color:"#6f6f6f",speed:"6s",thickness:1.4,children:"Download Encoded Image"})]}):null]}):he.jsxs("form",{onSubmit:B,className:"space-y-5",children:[he.jsxs("label",{className:"block",children:[he.jsx("span",{className:"form-label",children:"Upload Encoded Image"}),he.jsx("input",{type:"file",accept:"image/png,image/jpeg",className:"file-input",onChange:O=>{var L;return D((L=O.target.files)==null?void 0:L[0],"decode")}})]}),c?he.jsx("img",{src:c,alt:"Decode preview",className:"preview-img"}):null,he.jsxs("label",{className:"block",children:[he.jsx("span",{className:"form-label",children:"OTP Key"}),he.jsx("textarea",{className:"text-input min-h-24",value:f,onChange:O=>p(O.target.value),placeholder:"Paste the OTP key from encoding"})]}),he.jsx($f,{as:"button",type:"submit",disabled:C,className:"w-full",color:"#e945f5",speed:"5s",thickness:1.4,children:C?"Decoding...":"Decode Message"}),_?he.jsxs("section",{className:"rounded-xl border border-accentEnd/55 bg-accentEnd/25 p-4",children:[he.jsx("p",{className:"text-sm font-semibold text-slate-100",children:"Decoded Message"}),he.jsx("p",{className:"mt-2 whitespace-pre-wrap rounded-md bg-black/30 p-3 text-sm text-slate-100",children:_}),he.jsx("button",{className:"secondary-btn mt-3",type:"button",onClick:()=>b(_),children:"Copy Message"})]}):null]})})]}),C?he.jsx("div",{className:"pointer-events-none fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm",children:he.jsx("div",{className:"spinner"})}):null]})}Kf.createRoot(document.getElementById("root")).render(he.jsx(uy.StrictMode,{children:he.jsx(rP,{})}));
