(() => {
 const originalOpen=window.open.bind(window);
 function unavailable(){window.alert('AW9: official platform and download links are not available yet.');}
 window.open=function(url,...args){if(!url||/^(?:https?:)?\/\//i.test(String(url))){unavailable();return null}return originalOpen(url,...args)};
 document.addEventListener('click',e=>{const a=e.target.closest('a[href]');if(a&&/^(?:https?:)?\/\//i.test(a.getAttribute('href'))){e.preventDefault();e.stopImmediatePropagation();unavailable()}},true);
 document.addEventListener('DOMContentLoaded',()=>{
  let queued=false;
  function labels(){queued=false;document.querySelectorAll('img[src*="aw9-app-icon"]').forEach(img=>{if(!img.alt||!img.alt.startsWith('AW9'))return;const parent=img.parentElement;if(parent.querySelector('.aw9-platform-label'))return;const label=document.createElement('span');label.className='aw9-platform-label';label.textContent=img.alt;parent.appendChild(label)});}
  new MutationObserver(()=>{if(!queued){queued=true;requestAnimationFrame(labels)}}).observe(document.body,{childList:true,subtree:true});labels();
 });
})();
