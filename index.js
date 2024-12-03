import{i as f,S as m}from"./assets/vendor-5ObWk2rO.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();function h(o){const s="47411566-1fe68ca00fdccc973e940a4de",i=new URLSearchParams({key:s,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`https://pixabay.com/api/?${i}`).then(r=>{if(!r.ok)throw new Error(r.statusText);return r.json()})}function p(o){return o.map(({webformatURL:s,largeImageURL:i,tags:r,likes:e,views:t,comments:n,downloads:u})=>`
      <a href="${i}" class="list-item">
      <div class="thumb"><img src="${s}" alt="${r}" class="list-img"></div>
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
      <p class="info-amount">${u}</p>
      </li>
      </ul>
      </a>
        `).join("")}const d=document.querySelector(".form"),l=document.querySelector(".list"),a=document.querySelector(".loader");d.addEventListener("submit",y);function y(o){if(o.preventDefault(),a.style.display="inline-block",l.innerHTML="",o.currentTarget.elements.search.value.trim()===""){a.style.display="none",c();return}const s=o.currentTarget.elements.search.value.trim();h(s).then(i=>{i.total===0&&(a.style.display="none",c()),a.style.display="none",l.insertAdjacentHTML("afterbegin",p(i.hits)),g()}).catch(i=>console.log(i.statusText))}function c(){f.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!",maxWidth:432}),l.innerHTML=""}function g(){new m(".list-item",{captions:!0,captionsData:"alt",captionDelay:150}).refresh()}
//# sourceMappingURL=index.js.map
