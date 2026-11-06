(() => {
 const allowedDownloads=new Set(["https://apk-6038.arsaas-manage.workers.dev?domain=hc7v623n.com","https://apk-6037.arsaas-manage.workers.dev?domain=yyfzfnud.com","https://apk-6036.arsaas-manage.workers.dev?domain=dn3yn7v7.com","https://apk-6029.arsaas-manage.workers.dev/?domain=jmz4mxtn.com","https://t.me/+eiMNeAG0Z942NWQ1","https://whatsapp.com/channel/0029Vb96XEZ1XquVoVQuGo2O","https://apk-6028.arsaas-manage.workers.dev?domain=j8jnnb67.com", "https://cocosapk.araplitaha6.com/apk/DNjfxApS/2201/8HI_2201_2224.apk", "https://cocosapk.araplitaha6.com/apk/psGmQhrj/2202/8IN_2202_2225.apk", "https://cocosapk.araplitaha6.com/apk/Uv5CJmjT/2204/G8G_2204_2227.apk"]);
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
