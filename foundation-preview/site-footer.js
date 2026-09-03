(()=>{
  const css=`
  .jpf-home-fade.hero:before{left:28%!important;background-position:62% center!important}
  .jpf-home-fade.hero:after{background:linear-gradient(90deg,#031222 0%,#031222 28%,rgba(3,18,34,.995) 36%,rgba(3,18,34,.97) 44%,rgba(3,18,34,.86) 52%,rgba(3,18,34,.68) 60%,rgba(3,18,34,.47) 68%,rgba(3,18,34,.27) 76%,rgba(3,18,34,.12) 84%,rgba(3,18,34,.04) 91%,rgba(3,18,34,0) 100%)!important}
  .jpf-site-footer{background:#061a2f;color:#fff;padding:34px 0 24px;font-family:Inter,Arial,sans-serif}
  .jpf-site-footer *{box-sizing:border-box}
  .jpf-footer-wrap{width:min(1120px,calc(100% - 48px));margin:auto}
  .jpf-footer-brand{display:flex;justify-content:center;align-items:center;padding:0 0 18px}
  .jpf-footer-official-logo{display:block;width:min(820px,82vw);height:auto;object-fit:contain;image-rendering:auto}
  .jpf-footer-nav{display:flex;justify-content:center;align-items:center;flex-wrap:wrap;padding:10px 0 22px;border-bottom:1px solid #d8a33a}
  .jpf-footer-nav a{color:#fff!important;text-decoration:none!important;text-transform:uppercase;font-size:12px;font-weight:800;letter-spacing:.04em;padding:4px 27px;border-right:1px solid #d8a33a}
  .jpf-footer-nav a:last-child{border-right:0;color:#efba53!important}
  .jpf-footer-bottom{display:grid;grid-template-columns:1fr auto;gap:34px;align-items:center;padding-top:20px;font-size:13px;line-height:1.55;color:#eef3f7}
  .jpf-footer-contact{display:grid;grid-template-columns:24px 1fr;column-gap:10px;row-gap:8px}
  .jpf-footer-icon{color:#efba53;font-size:19px;line-height:1}
  .jpf-footer-copy{text-align:right;color:#eef3f7}
  .jpf-footer-tax strong{color:#fff;text-decoration:underline;text-underline-offset:2px}
  .jpf-footer-address strong{color:#fff}
  .jpf-footer-taxid{font-weight:400;color:#eef3f7}
  @media(max-width:760px){
    .jpf-footer-wrap{width:calc(100% - 34px)}
    .jpf-site-footer{padding:28px 0 22px}
    .jpf-footer-official-logo{width:min(760px,94vw)}
    .jpf-footer-nav a{padding:6px 11px;border-right:0}
    .jpf-footer-bottom{grid-template-columns:1fr;gap:18px}
    .jpf-footer-copy{text-align:left}
    .jpf-footer-contact{grid-template-columns:20px 1fr}
    .jpf-home-fade.hero:before{left:10%!important}
    .jpf-home-fade.hero:after{background:linear-gradient(90deg,rgba(3,18,34,.98) 0%,rgba(3,18,34,.9) 45%,rgba(3,18,34,.45) 72%,rgba(3,18,34,.08) 100%)!important}
  }`;
  const s=document.createElement('style');
  s.textContent=css;
  document.head.appendChild(s);

  const p=location.pathname.toLowerCase();
  if(p.endsWith('/index.html')||p.endsWith('/foundation-preview/')||p.endsWith('/foundation-preview')){
    const h=document.querySelector('.hero');
    if(h)h.classList.add('jpf-home-fade');
  }

  const f=document.querySelector('footer');
  if(!f)return;
  f.className='jpf-site-footer';
  f.innerHTML=`<div class="jpf-footer-wrap">
    <div class="jpf-footer-brand">
      <img class="jpf-footer-official-logo" src="assets/foundation-footer-logo.png?v=20260903-official" alt="Jeffersontown Police Foundation, Inc.">
    </div>
    <nav class="jpf-footer-nav" aria-label="Footer navigation">
      <a href="index.html">About</a><a href="programs.html">Programs</a><a href="initiatives.html">Initiatives</a><a href="leadership.html">Leadership</a><a href="donate.html">Donate</a>
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