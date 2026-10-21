(() => {
 const allowedDownloads=new Set(["https://cocosapk.kunulu27ark.com/apk/3E9zVVLDs/2386/ET7_2386_2408.apk", "https://cocosapk.araplitaha6.com/apk/DNjfxApS/2201/8HI_2201_2224.apk", "https://cocosapk.araplitaha6.com/apk/psGmQhrj/2202/8IN_2202_2225.apk", "https://cocosapk.araplitaha6.com/apk/Uv5CJmjT/2204/G8G_2204_2227.apk"]);
 const originalOpen=window.open.bind(window);
 function unavailable(){window.alert('AW9: official platform and download links are not available yet.');}
 window.open=function(url,...args){if(!url||(/^(?:https?:)?\/\//i.test(String(url))&&!allowedDownloads.has(String(url)))){unavailable();return null}return originalOpen(url,...args)};
 document.addEventListener('click',e=>{const a=e.target.closest('a[href]');if(a&&/^(?:https?:)?\/\//i.test(a.getAttribute('href'))&&!allowedDownloads.has(a.href)){e.preventDefault();e.stopImmediatePropagation();unavailable()}},true);
 document.addEventListener('DOMContentLoaded',()=>{
  let queued=false;
  function labels(){queued=false;document.querySelectorAll('img[src*="aw9-app-icon"]').forEach(img=>{if(!img.alt||!img.alt.startsWith('AW9'))return;const parent=img.parentElement;if(parent.querySelector('.aw9-platform-label'))return;const label=document.createElement('span');label.className='aw9-platform-label';label.textContent=img.alt;parent.appendChild(label)});}
  new MutationObserver(()=>{if(!queued){queued=true;requestAnimationFrame(labels)}}).observe(document.body,{childList:true,subtree:true});labels();
 });
})();
