import{i as u}from"./assets/vendor-I1I71QQ2.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();function f(o){const r="47411566-1fe68ca00fdccc973e940a4de",i=new URLSearchParams({key:r,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`https://pixabay.com/api/?${i}`).then(s=>{if(!s.ok)throw new Error(s.statusText);return s.json()})}function m(o){return o.map(({webformatURL:r,largeImageURL:i,tags:s,likes:e,views:t,comments:n,downloads:l})=>`
      <li class="list-item">
      <div class="thumb"><img src="${r}" alt="${s}" class="list-img"></div>
      <ul class="info-box">
      <li class="info-item">
      <h2 class="info-text">Likes</h2>
      <p class="info-amount">${e}</p>
      </li>
      <li class="info-item">
      <h2 class="info-text">Views</h2>
      <p class="info-amount">${t}</p>
      </li>
      <li class="info-item">
      <h2 class="info-text">Comments</h2>
      <p class="info-amount">${n}</p>
      </li>
      <li class="info-item">
      <h2 class="info-text">Downloads</h2>
      <p class="info-amount">${l}</p>
      </li>
      </ul>
      </li>
        `).join("")}const h=document.querySelector(".form");document.querySelector(".input");const a=document.querySelector(".list");h.addEventListener("submit",d);function d(o){if(o.preventDefault(),o.currentTarget.elements.search.value.trim()===""){c();return}const r=o.currentTarget.elements.search.value.trim();f(r).then(i=>{i.total===0&&c(),a.innerHTML="",a.insertAdjacentHTML("afterbegin",m(i.hits))}).catch(i=>console.log(i.statusText))}function c(){u.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!",maxWidth:432}),a.innerHTML=""}
//# sourceMappingURL=index.js.map
