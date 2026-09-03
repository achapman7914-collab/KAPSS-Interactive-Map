(()=>{
  const css=`
  .jpf-home-fade.hero:before{left:28%!important;background-position:62% center!important}
  .jpf-home-fade.hero:after{background:linear-gradient(90deg,#031222 0%,#031222 28%,rgba(3,18,34,.995) 36%,rgba(3,18,34,.97) 44%,rgba(3,18,34,.86) 52%,rgba(3,18,34,.68) 60%,rgba(3,18,34,.47) 68%,rgba(3,18,34,.27) 76%,rgba(3,18,34,.12) 84%,rgba(3,18,34,.04) 91%,rgba(3,18,34,0) 100%)!important}
  .jpf-home-clean-cta .donate-contact{display:none!important}
  .jpf-home-clean-cta.donate{padding-top:50px!important;padding-bottom:50px!important}
  .jpf-site-footer{background:#fff;color:#06182d;padding:24px 0 18px;font-family:Inter,Arial,sans-serif;border-top:4px solid #1686c7}
  .jpf-site-footer *{box-sizing:border-box}
  .jpf-footer-wrap{width:min(1120px,calc(100% - 48px));margin:auto}
  .jpf-footer-brand{display:flex;justify-content:center;align-items:center;padding:0 0 12px}
  .jpf-footer-official-logo{display:block;width:min(540px,72vw);height:auto;object-fit:contain;image-rendering:auto}
  .jpf-footer-nav{display:flex;justify-content:center;align-items:center;flex-wrap:wrap;padding:7px 0 15px;border-bottom:1px solid #d8a33a}
  .jpf-footer-nav a{color:#06182d!important;text-decoration:none!important;text-transform:uppercase;font-size:11px;font-weight:800;letter-spacing:.04em;padding:3px 23px;border-right:1px solid #d8a33a}
  .jpf-footer-nav a:last-child{border-right:0;background:#06182d;color:#fff!important;padding:10px 22px;margin-left:22px;border-radius:2px}
  .jpf-footer-support:after{content:' ▾';color:#d8a33a;font-size:9px;margin-left:3px}
  .jpf-footer-bottom{display:grid;grid-template-columns:1fr auto;gap:30px;align-items:center;padding-top:13px;font-size:12px;line-height:1.45;color:#23384c}
  .jpf-footer-contact{display:grid;grid-template-columns:18px 1fr;column-gap:9px;row-gap:5px}
  .jpf-footer-icon{color:#d8a33a;font-size:14px;line-height:1}
  .jpf-footer-copy{text-align:right;color:#23384c}
  .jpf-footer-tax strong{color:#06182d;text-decoration:underline;text-underline-offset:2px}
  .jpf-footer-address strong{color:#06182d}
  .jpf-footer-taxid{font-weight:400;color:#23384c}
  .jpf-wellness-benefits{gap:0!important;border-top:1px solid rgba(239,182,58,.45)!important;border-bottom:1px solid rgba(239,182,58,.45)!important}
  .jpf-wellness-benefits .support-icon{min-height:126px!important;padding:18px 14px 16px!important;display:flex!important;flex-direction:column!important;align-items:center!important;justify-content:center!important}
  .jpf-wellness-benefits .support-icon strong{font-size:18px!important;line-height:1.12!important;font-family:'Roboto Slab',Georgia,serif!important;margin-top:7px!important;color:#fff!important;text-transform:none!important}
  .jpf-wellness-benefits .support-icon span{font-size:13px!important;line-height:1.35!important;margin-top:6px!important;color:#eef4f7!important;max-width:145px!important}
  .jpf-benefit-svg{width:34px;height:34px;color:#efb63a;display:block;flex:0 0 auto}
  .jpf-benefit-svg *{vector-effect:non-scaling-stroke}
  @media(max-width:760px){
    .jpf-footer-wrap{width:calc(100% - 34px)}
    .jpf-site-footer{padding:20px 0 18px}
    .jpf-footer-official-logo{width:min(500px,90vw)}
    .jpf-footer-nav a{padding:5px 10px;border-right:0}
    .jpf-footer-nav a:last-child{margin-left:8px;padding:8px 14px}
    .jpf-footer-bottom{grid-template-columns:1fr;gap:12px}
    .jpf-footer-copy{text-align:left}
    .jpf-footer-contact{grid-template-columns:18px 1fr}
    .jpf-home-fade.hero:before{left:10%!important}
    .jpf-home-fade.hero:after{background:linear-gradient(90deg,rgba(3,18,34,.98) 0%,rgba(3,18,34,.9) 45%,rgba(3,18,34,.45) 72%,rgba(3,18,34,.08) 100%)!important}
    .jpf-wellness-benefits .support-icon{min-height:118px!important}
    .jpf-wellness-benefits .support-icon strong{font-size:16px!important}
    .jpf-wellness-benefits .support-icon span{font-size:12px!important}
  }`;
  const s=document.createElement('style');
  s.textContent=css;
  document.head.appendChild(s);

  const p=location.pathname.toLowerCase();
  if(p.endsWith('/index.html')||p.endsWith('/foundation-preview/')||p.endsWith('/foundation-preview')){
    const h=document.querySelector('.hero');
    if(h)h.classList.add('jpf-home-fade');
    const d=document.querySelector('.donate');
    if(d)d.classList.add('jpf-home-clean-cta');
  }

  if(p.endsWith('/wellness.html')){
    const benefits=document.querySelector('.support-icons');
    if(benefits){
      benefits.classList.add('jpf-wellness-benefits');
      const icons=[
        '<svg class="jpf-benefit-svg" viewBox="0 0 48 48" fill="none" aria-hidden="true"><path d="M24 41S8 31.5 8 18.5C8 11.8 16.2 8.1 24 15c7.8-6.9 16-3.2 16 3.5C40 31.5 24 41 24 41Z" stroke="currentColor" stroke-width="2.7"/><path d="M14 24h7l3-7 4 14 3-7h5" stroke="currentColor" stroke-width="2.7" stroke-linecap="round" stroke-linejoin="round"/></svg>',
        '<svg class="jpf-benefit-svg" viewBox="0 0 48 48" fill="none" aria-hidden="true"><circle cx="18" cy="17" r="6" stroke="currentColor" stroke-width="2.7"/><circle cx="31" cy="18" r="5" stroke="currentColor" stroke-width="2.7"/><path d="M7 38c1-8 5-12 11-12s10 4 11 12M26 29c2-3 5-4 8-3 4 1 6 5 7 11" stroke="currentColor" stroke-width="2.7" stroke-linecap="round"/></svg>',
        '<svg class="jpf-benefit-svg" viewBox="0 0 48 48" fill="none" aria-hidden="true"><path d="M24 5 39 11v11c0 10-6.5 17-15 21-8.5-4-15-11-15-21V11L24 5Z" stroke="currentColor" stroke-width="2.7"/><path d="M18 25l4 4 8-10" stroke="currentColor" stroke-width="2.7" stroke-linecap="round" stroke-linejoin="round"/></svg>',
        '<svg class="jpf-benefit-svg" viewBox="0 0 48 48" fill="none" aria-hidden="true"><path d="m8 21 8-7 7 5-5 5 7 7c2 2 5 2 7 0l8-8M15 34l-6-6 7-7M33 15l6 6" stroke="currentColor" stroke-width="2.7" stroke-linecap="round" stroke-linejoin="round"/><path d="m20 18 4-4c2-2 5-2 7 0l4 4" stroke="currentColor" stroke-width="2.7" stroke-linecap="round"/></svg>'
      ];
      benefits.querySelectorAll('.support-icon').forEach((el,i)=>{if(!el.querySelector('svg')&&icons[i])el.insertAdjacentHTML('afterbegin',icons[i]);});
    }
  }

  const f=document.querySelector('footer');
  if(!f)return;
  f.className='jpf-site-footer';
  f.innerHTML=`<div class="jpf-footer-wrap">
    <div class="jpf-footer-brand">
      <img class="jpf-footer-official-logo" src="assets/foundation-footer-logo.png?v=20260903-whitecompact" alt="Jeffersontown Police Foundation, Inc.">
    </div>
    <nav class="jpf-footer-nav" aria-label="Footer navigation">
      <a href="index.html">Home</a><a class="jpf-footer-support" href="index.html#support">What We Support</a><a href="index.html#events">Upcoming Events</a><a href="leadership.html">Leadership</a><a href="donate.html">Donate</a>
    </nav>
    <div class="jpf-footer-bottom">
      <div class="jpf-footer-contact">
        <div class="jpf-footer-icon">●</div><div class="jpf-footer-address"><strong>Jeffersontown Police Foundation, Inc.</strong><br>10513 Watterson Trail, Louisville, KY 40299</div>
        <div class="jpf-footer-icon">▣</div><div class="jpf-footer-tax"><strong>Federal Tax ID:</strong>&nbsp; <span class="jpf-footer-taxid">41-2319597</span></div>
      </div>
      <div class="jpf-footer-copy">© 2026 Jeffersontown Police Foundation, Inc.<br>All Rights Reserved.</div>
    </div>
  </div>`;
})();