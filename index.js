import{a as y,S as h,i as o}from"./assets/vendor-ChKhXQjG.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const L="https://pixabay.com/api/",b="23963114-6d0d5d874ae460d9125bacd21";function v(n){const r={key:b,q:n,image_type:"photo",orientation:"horizontal",safesearch:!0};return y.get(L,{params:r}).then(function(s){return s.data})}const u=document.querySelector(".loader-wrapper");function p(){u.classList.remove("is-hidden")}function c(){u.classList.add("is-hidden")}let w=new h(".gallery a",{captionsData:"alt",captionDelay:250});function S(n,r){p();const s=n.map(({webformatURL:a,largeImageURL:e,tags:t,likes:i,views:f,comments:m,downloads:g})=>`
        <li class="gallery-item">
          <a href="${e}" class="gallery-link">
            <img src="${a}" alt="${t}" class="gallery-image" />
          </a>
          <div class="image-info">
            <div class="image-info-item"><span><b>Likes</b></span><span>${i}</span></div>
            <div class="image-info-item"><span><b>Views</b></span><span>${f}</span></div>
            <div class="image-info-item"><span><b>Comments</b></span><span>${m}</span></div>
            <div class="image-info-item"><span><b>Downloads</b></span><span>${g}</span></div>
          </div>
        </li>
      `).join("");r.insertAdjacentHTML("beforeend",s),c(),w.refresh()}function q(n){n.innerHTML=""}const l=document.querySelector(".form"),d=document.querySelector(".gallery");l.addEventListener("submit",function(n){n.preventDefault();const r=l.elements["search-text"].value.trim();if(!r){o.error({message:"Please enter a search query!",position:"topLeft"});return}q(d),p(),v(r).then(function(s){if(c(),s.hits.length===0){o.warning({message:"Sorry, there are no images matching your search query. Please try again!",position:"topLeft"});return}S(s.hits,d)}).catch(function(){c(),o.error({message:"Something went wrong. Please try again later!",position:"topLeft"})})});
//# sourceMappingURL=index.js.map
