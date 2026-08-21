(function(){
  const section=document.querySelector('.wellness');
  if(!section)return;

  const photos=[
    'PXL_20260819_172253412.jpg',
    'PXL_20260819_172302364.jpg',
    'PXL_20260819_172304580.jpg',
    'PXL_20260819_172718227.jpg',
    'PXL_20260819_172724267.jpg',
    'PXL_20260819_172731250.jpg',
    'PXL_20260819_172733389.jpg',
    'PXL_20260819_173132822.MP.jpg',
    'PXL_20260819_173135203.jpg',
    'PXL_20260819_173139754.jpg',
    'PXL_20260819_173141781.jpg',
    'PXL_20260819_173149515.jpg',
    'PXL_20260819_173154518.jpg',
    'PXL_20260819_173156781.jpg',
    'PXL_20260819_173215067.jpg',
    'PXL_20260819_173218911.jpg',
    'PXL_20260819_173221840.jpg',
    'PXL_20260819_173226045.MP.jpg',
    'PXL_20260819_173309052.jpg'
  ];

  const photoMarkup=photos.map((file,i)=>`<figure class="wellness-slide"><img src="assets/${file}?v=20260821-marquee" alt="Jeffersontown Police Department wellness space ${i+1}" loading="lazy"></figure>`).join('');

  section.classList.add('wellness-showcase');
  section.innerHTML=`<div class="wrap wellness-showcase-inner">
    <div class="wellness-copy">
      <div class="wellness-kicker">Officer Wellness</div>
      <h2 class="section-title">Supporting the People Behind the Badge.</h2>
      <p class="wellness-statement">The <strong>Jeffersontown Police Foundation seeks to support the wellness program at the Jeffersontown Police Department</strong> by helping provide resources and opportunities that promote the mental, emotional, and physical well-being of the men and women who serve our community.</p>
      <div class="wellness-rule"></div>
    </div>
  </div>
  <div class="wellness-marquee" aria-label="Jeffersontown Police Department wellness spaces">
    <div class="wellness-track">
      <div class="wellness-group">${photoMarkup}</div>
      <div class="wellness-group" aria-hidden="true">${photoMarkup}</div>
    </div>
  </div>
  <div class="wrap wellness-showcase-inner">
    <div class="wellness-bottom">
      <div>
        <div class="wellness-kicker">Investing in Officer Wellness</div>
        <h3>Healthy officers. Stronger families. Safer communities.</h3>
        <p>Wellness support can help expand access to spaces and resources for physical fitness, recovery, relaxation, mental-health care and personal resilience.</p>
      </div>
      <a class="btn" href="#donate">Support Officer Wellness</a>
    </div>
  </div>`;

  const style=document.createElement('style');
  style.textContent=`
    .wellness-showcase{padding:110px 0;background:linear-gradient(135deg,#f6f3ec 0%,#fff 55%,#edf4f8 100%);position:relative;overflow:hidden}
    .wellness-showcase:after{content:"";position:absolute;right:-170px;top:-170px;width:520px;height:520px;border:1px solid rgba(25,116,173,.12);border-radius:50%;pointer-events:none}
    .wellness-showcase-inner{position:relative;z-index:1}
    .wellness-copy{max-width:960px;margin-bottom:46px}
    .wellness-showcase .section-title{margin:0 0 28px;max-width:900px}
    .wellness-showcase .wellness-statement{max-width:900px}
    .wellness-marquee{width:100%;overflow:hidden;padding:16px 0 18px;background:#071a30;position:relative;z-index:2}
    .wellness-marquee:before,.wellness-marquee:after{content:"";position:absolute;top:0;bottom:0;width:70px;z-index:3;pointer-events:none}
    .wellness-marquee:before{left:0;background:linear-gradient(90deg,#071a30,transparent)}
    .wellness-marquee:after{right:0;background:linear-gradient(270deg,#071a30,transparent)}
    .wellness-track{display:flex;width:max-content;animation:wellnessScroll 72s linear infinite;will-change:transform}
    .wellness-marquee:hover .wellness-track{animation-play-state:paused}
    .wellness-group{display:flex;gap:14px;padding-right:14px;flex-shrink:0}
    .wellness-slide{margin:0;height:250px;min-width:320px;max-width:420px;background:#0b2948;border:1px solid rgba(255,255,255,.14);display:flex;align-items:center;justify-content:center;overflow:hidden;box-shadow:0 10px 24px rgba(0,0,0,.22)}
    .wellness-slide img{width:100%;height:100%;object-fit:contain;display:block;background:#0b2948}
    @keyframes wellnessScroll{from{transform:translateX(0)}to{transform:translateX(-50%)}}
    .wellness-bottom{margin-top:42px;background:#06182e;color:#fff;padding:38px 42px;display:flex;align-items:end;justify-content:space-between;gap:30px;border-left:5px solid #c8a45a}
    .wellness-bottom>div{max-width:820px}
    .wellness-bottom h3{margin:4px 0 12px;font:800 clamp(28px,3.2vw,42px)/1.05 'Roboto Slab',Georgia,serif}
    .wellness-bottom p{margin:0;color:#dbe7ef;line-height:1.7}
    .wellness-bottom .btn{flex:0 0 auto;margin:0;background:#1974ad}
    @media(max-width:900px){.wellness-slide{height:220px;min-width:280px}.wellness-bottom{align-items:flex-start;flex-direction:column}}
    @media(max-width:650px){.wellness-showcase{padding:76px 0}.wellness-copy{margin-bottom:34px}.wellness-slide{height:190px;min-width:245px}.wellness-marquee:before,.wellness-marquee:after{width:30px}.wellness-bottom{padding:30px 24px;margin-top:32px}.wellness-bottom .btn{width:100%;justify-content:center}}
    @media(prefers-reduced-motion:reduce){.wellness-track{animation:none}.wellness-marquee{overflow-x:auto}.wellness-group[aria-hidden="true"]{display:none}}
  `;
  document.head.appendChild(style);
})();