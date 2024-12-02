import{i as l}from"./assets/vendor-I1I71QQ2.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();function n(r){return console.log(r),r.map(({webformatURL:o,largeImageURL:s,tags:c,likes:e,views:t,comments:i,downloads:a})=>`
      <li class="list-item">
      <div class="thumb"><img src="${o}" alt="${c} class="list-img"></div>
      <ul class="info-box">
      <li class="likes">
      <h2 class="likes-text">Likes</h2>
      <p class="likes-amount">${e}</p>
      </li>
      <li class="views">
      <h2 class="views-text">Views</h2>
      <p class="views-amount">${t}</p>
      </li>
      <li class="comments">
      <h2 class="comments-text">Comments</h2>
      <p class="comments-amount">${i}</p>
      </li>
      <li class="downloads">
      <h2 class="downloads-text">Downloads</h2>
      <p class="downloads-amount">${a}</p>
      </li>
      </ul>
      </li>
        `).join("")}const u="47411566-1fe68ca00fdccc973e940a4de",m=document.querySelector(".list");function d(r){const o=new URLSearchParams({key:u,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0});fetch(`https://pixabay.com/api/?${o}`).then(s=>{if(!s.ok)throw new Error(s.statusText);return s.json()}).then(s=>m.insertAdjacentHTML("beforeend",n(s.hits))).catch(s=>console.log(s.message))}const f=document.querySelector(".form");document.querySelector(".input");document.querySelector(".btn");f.addEventListener("submit",h);function h(r){if(r.preventDefault(),r.currentTarget.elements.search.value.trim()===""){l.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"});return}const o=r.currentTarget.elements.search.value.trim();d(o),n()}
//# sourceMappingURL=index.js.map
