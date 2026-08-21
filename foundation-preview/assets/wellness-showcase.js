(function(){
  const section=document.querySelector('.wellness');
  if(!section)return;
  section.classList.add('wellness-showcase');
  section.innerHTML=`<div class="wrap wellness-showcase-inner">
    <div class="wellness-copy">
      <div class="wellness-kicker">Officer Wellness</div>
      <h2 class="section-title">Supporting the People Behind the Badge.</h2>
      <p class="wellness-statement">The <strong>Jeffersontown Police Foundation seeks to support the wellness program at the Jeffersontown Police Department</strong> by helping provide resources and opportunities that promote the mental, emotional, and physical well-being of the men and women who serve our community.</p>
      <div class="wellness-rule"></div>
    </div>
    <div class="wellness-feature-grid">
      <article><span>01</span><h3>Mental Health &amp; Therapy</h3><p>Private, supportive spaces that encourage confidential care, connection and resilience.</p></article>
      <article><span>02</span><h3>Relaxation &amp; Recovery</h3><p>Dedicated spaces and resources that give officers room to decompress and reset.</p></article>
      <article><span>03</span><h3>Physical Fitness</h3><p>Fitness resources that support strength, readiness and long-term physical health.</p></article>
      <article><span>04</span><h3>Restoration</h3><p>Recovery-focused resources including sauna and cold-plunge options.</p></article>
      <article><span>05</span><h3>Wellness Library</h3><p>Practical books and materials focused on resilience, peer support, mindfulness, family life and personal well-being.</p></article>
    </div>
    <div class="wellness-photo-wall" aria-label="Jeffersontown Police Department wellness spaces">
      <figure class="wellness-photo large"><img src="assets/PXL_20260819_173132822.MP.jpg?v=20260821-wellness" alt="Jeffersontown Police Department wellness space"></figure>
      <figure class="wellness-photo"><img src="assets/PXL_20260819_172718227.jpg?v=20260821-wellness" alt="Jeffersontown Police Department wellness space"></figure>
      <figure class="wellness-photo"><img src="assets/PXL_20260819_172724267.jpg?v=20260821-wellness" alt="Jeffersontown Police Department wellness space"></figure>
      <figure class="wellness-photo tall"><img src="assets/PXL_20260819_173154518.jpg?v=20260821-wellness" alt="Jeffersontown Police Department wellness space"></figure>
      <figure class="wellness-photo"><img src="assets/PXL_20260819_173215067.jpg?v=20260821-wellness" alt="Jeffersontown Police Department wellness space"></figure>
      <figure class="wellness-photo"><img src="assets/PXL_20260819_173309052.jpg?v=20260821-wellness" alt="Jeffersontown Police Department wellness space"></figure>
    </div>
    <div class="wellness-bottom"><div><div class="wellness-kicker">Investing in Officer Wellness</div><h3>Healthy officers. Stronger families. Safer communities.</h3><p>Supporting officer wellness is an investment that reaches beyond the walls of the police department. Foundation support can help expand the resources and opportunities that strengthen the physical and emotional well-being of those who serve Jeffersontown.</p></div><a class="btn" href="#donate">Support Officer Wellness</a></div>
  </div>`;
  const style=document.createElement('style');
  style.textContent=`
    .wellness-showcase{padding:110px 0;background:linear-gradient(135deg,#f6f3ec 0%,#fff 55%,#edf4f8 100%);position:relative;overflow:hidden}
    .wellness-showcase:after{content:"";position:absolute;right:-170px;top:-170px;width:520px;height:520px;border:1px solid rgba(25,116,173,.12);border-radius:50%;pointer-events:none}
    .wellness-showcase-inner{position:relative;z-index:1}
    .wellness-copy{max-width:960px;margin-bottom:54px}
    .wellness-showcase .section-title{margin:0 0 28px;max-width:900px}
    .wellness-showcase .wellness-statement{max-width:900px}
    .wellness-feature-grid{display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:14px;margin:0 0 28px}
    .wellness-feature-grid article{background:#071a30;color:#fff;padding:24px 20px;min-height:210px;border-top:4px solid #c8a45a;box-shadow:0 14px 30px rgba(7,26,48,.10)}
    .wellness-feature-grid article span{display:block;color:#69b9e6;font-size:11px;font-weight:900;letter-spacing:.18em;margin-bottom:14px}
    .wellness-feature-grid h3{margin:0 0 10px;font:800 20px/1.12 'Roboto Slab',Georgia,serif;color:#fff}
    .wellness-feature-grid p{margin:0;color:#dbe7ef;font-size:13px;line-height:1.6}
    .wellness-photo-wall{display:grid;grid-template-columns:1.3fr 1fr 1fr;grid-auto-rows:260px;gap:14px;background:#071a30;padding:14px;box-shadow:0 24px 70px rgba(7,26,48,.18)}
    .wellness-photo{margin:0;overflow:hidden;background:#0b2948;position:relative}
    .wellness-photo.large{grid-row:span 2}
    .wellness-photo.tall{grid-row:span 2}
    .wellness-photo img{width:100%;height:100%;object-fit:cover;display:block;transition:transform .35s ease}
    .wellness-photo:hover img{transform:scale(1.025)}
    .wellness-bottom{margin-top:28px;background:#06182e;color:#fff;padding:38px 42px;display:flex;align-items:end;justify-content:space-between;gap:30px;border-left:5px solid #c8a45a}
    .wellness-bottom>div{max-width:820px}
    .wellness-bottom h3{margin:4px 0 12px;font:800 clamp(28px,3.2vw,42px)/1.05 'Roboto Slab',Georgia,serif}
    .wellness-bottom p{margin:0;color:#dbe7ef;line-height:1.7}
    .wellness-bottom .btn{flex:0 0 auto;margin:0;background:#1974ad}
    @media(max-width:1050px){.wellness-feature-grid{grid-template-columns:repeat(2,1fr)}.wellness-feature-grid article:last-child{grid-column:1/-1}.wellness-photo-wall{grid-template-columns:1fr 1fr}.wellness-photo.large,.wellness-photo.tall{grid-row:span 1}.wellness-bottom{align-items:flex-start;flex-direction:column}}
    @media(max-width:650px){.wellness-showcase{padding:76px 0}.wellness-feature-grid{grid-template-columns:1fr}.wellness-feature-grid article:last-child{grid-column:auto}.wellness-photo-wall{grid-template-columns:1fr;grid-auto-rows:300px}.wellness-bottom{padding:30px 24px}.wellness-bottom .btn{width:100%;justify-content:center}}
  `;
  document.head.appendChild(style);
})();