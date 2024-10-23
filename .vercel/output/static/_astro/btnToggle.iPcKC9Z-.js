import{r as s}from"./index.DhYZZe0J.js";import{s as u}from"./about.3b8cdbf7.DR4xpkrY.js";var c={exports:{}},m={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _=s,f=Symbol.for("react.element"),p=Symbol.for("react.fragment"),h=Object.prototype.hasOwnProperty,g=_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,x={key:!0,ref:!0,__self:!0,__source:!0};function d(r,e,o){var t,n={},l=null,a=null;o!==void 0&&(l=""+o),e.key!==void 0&&(l=""+e.key),e.ref!==void 0&&(a=e.ref);for(t in e)h.call(e,t)&&!x.hasOwnProperty(t)&&(n[t]=e[t]);if(r&&r.defaultProps)for(t in e=r.defaultProps,e)n[t]===void 0&&(n[t]=e[t]);return{$$typeof:f,type:r,key:l,ref:a,props:n,_owner:g.current}}m.Fragment=p;m.jsx=d;m.jsxs=d;c.exports=m;var i=c.exports;function k(){const[r,e]=s.useState("light_mode"),o=()=>{e(r==="light_mode"?"dark_mode":"light_mode")};return s.useEffect(()=>{const t=localStorage.getItem("theme");t&&e(t)},[]),s.useEffect(()=>{document.documentElement.setAttribute("data-theme",r),localStorage.setItem("theme",r)},[r]),i.jsx("button",{className:`${u["btn-toggle"]} ${r}`,onClick:o,"aria-label":`Ativar o modo ${r=="light_mode"?"escuro":"claro"}`,children:i.jsx("span",{className:"icon",children:r=="dark_mode"?"light_mode":"dark_mode"})})}export{k as default};
