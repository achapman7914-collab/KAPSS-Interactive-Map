(()=>{
const p=location.pathname.toLowerCase();
if(p.endsWith('/training-equipment.html')){
 const s=document.createElement('style');
 s.textContent=".partner-photo{background-image:url('assets/police-car-blue-lights.png?v=20260903-1625')!important;background-color:#000!important;background-position:center center!important;background-size:cover!important;background-repeat:no-repeat!important}";
 document.head.appendChild(s);
 const pills=document.querySelector('.partner-pills');
 if(pills){pills.style.display='flex';pills.style.flexDirection='column';pills.style.gap='14px';pills.innerHTML='<span>Stronger Officers</span><span>Safer Community</span><span>Brighter Future</span>';}
}
const f=document.querySelector('footer');
if(f){f.className='jpf-site-footer';}
})();