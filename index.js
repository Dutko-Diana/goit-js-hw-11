import{i as s}from"./assets/vendor-I1I71QQ2.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const a="47411566-1fe68ca00fdccc973e940a4de";document.querySelector(".list");function u(c){const o=new URLSearchParams({key:a,q:c,image_type:"photo",orientation:"horizontal",safesearch:!0});fetch(`https://pixabay.com/api/?${o}`).then(r=>{if(!r.ok)throw new Error(r.statusText);return console.log(r),r.json()}).catch(r=>console.log(r.message))}const l=document.querySelector(".form");document.querySelector(".input");document.querySelector(".btn");l.addEventListener("submit",f);function f(c){if(c.preventDefault(),c.currentTarget.elements.search.value.trim()===""){s.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"});return}const o=c.currentTarget.elements.search.value.trim();u(o).then(r=>console.log(r))}
//# sourceMappingURL=index.js.map