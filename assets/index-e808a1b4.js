(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();document.addEventListener("DOMContentLoaded",function(){["data-mobile-menu","data-order","data-thank-you"].forEach(o=>{const s=o+"-open",r=o+"-close",e=document.querySelectorAll(`[${s}]`),t=document.querySelectorAll(`[${r}]`),n=document.querySelector(`[${o}]`);if(n||i("Can`t find Modal with attribute "+n),e.length===0&&i("Can`t find Open modal button with attribute "+s),t.length===0&&i("Can`t find Close modal button with attribute "+r),!n||e.length===0||t.length===0)return;e.forEach(c=>c.addEventListener("click",a)),t.forEach(c=>c.addEventListener("click",a));function a(c){c.preventDefault(),document.body.classList.toggle("modal-open"),n.classList.toggle("is-hidden")}})},!1);function i(l){const o="color: #bada55";console.log("%c"+l,o)}document.querySelector("#submitButton");const d=document.querySelector(".go-top");window.addEventListener("scroll",f);d.addEventListener("click",u);function f(){const l=window.pageYOffset,o=document.documentElement.clientHeight;l>o?d.classList.add("go-top--show"):d.classList.remove("go-top--show")}function u(){window.pageYOffset>0&&(window.scrollBy(0,-25),setTimeout(u,0))}
