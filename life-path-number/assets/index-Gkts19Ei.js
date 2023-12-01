(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function s(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(t){if(t.ep)return;t.ep=!0;const o=s(t);fetch(t.href,o)}})();/**
 * @license
 * Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
 * https://creativecommons.org/licenses/by-nc-nd/4.0/
 * Made by Adam Burucs in 2023.
 *
 * Please see LICENSE file in the repo root folder.
 */function i(e){return e<10?e:i(f(e))}function f(e){let r=0;return e.toString().split("").forEach(n=>{r+=parseInt(n)}),r}/**
 * @license
 * Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
 * https://creativecommons.org/licenses/by-nc-nd/4.0/
 * Made by Adam Burucs in 2023.
 *
 * Please see LICENSE file in the repo root folder.
 */function m(e){if(e&&e.length===10){const s=e.split("").filter(t=>t!=="-"),n=parseInt(s.join(""));return i(n)}else console.error("Wrong birthTime ",e)}const u=document.querySelector(".result"),d=document.querySelector(".result-number"),c=document.querySelectorAll("details");function a(){c.forEach(e=>{e.open=!1,e.className=""})}document.querySelector("form").addEventListener("submit",e=>{e.preventDefault()});document.querySelector("#reset").addEventListener("click",()=>{a(),u.style.display="none",d.textContent=""});document.querySelector("#submit").addEventListener("click",()=>{a(),c.forEach(r=>r.open=!1);const e=document.querySelector("#date").value;if(e&&e.length===10){const r=m(e);r>0&&r<10&&(u.style.display="block",d.textContent=r,c[r-1].classList.toggle("selected-mission-details"),c[r-1].open=!0)}else console.log("Wrong date ",e)});
