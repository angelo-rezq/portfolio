(() => {
  fetch('/project-covers.json').then(r=>r.json()).then(covers=>{
    function apply(){
      document.querySelectorAll('.proj,.pj-list a').forEach(a=>{
        const id=new URL(a.href).searchParams.get('id'),img=a.querySelector('img');
        if(img&&covers[id]){img.src=covers[id];img.loading='eager';}
      });
      const id=new URLSearchParams(location.search).get('id');
      const hero=document.querySelector('.pj-hero-img');if(hero&&covers[id])hero.src=covers[id];
    }
    const observer=new MutationObserver(apply);observer.observe(document.body,{childList:true,subtree:true});apply();
  });
  const strip=document.querySelector('#projGrid');if(!strip)return;
  const row=document.createElement('div');row.className='projects-motion';
  const toggle=document.createElement('button');toggle.type='button';toggle.className='motion-toggle';toggle.dataset.noTranslate='';row.appendChild(toggle);strip.after(row);
  const reduced=matchMedia('(prefers-reduced-motion: reduce)');let paused=reduced.matches,hover=false,focused=false,pointer=false,direction=1,last=0,lastInput=0;
  function label(){const ar=document.documentElement.lang==='ar';toggle.textContent=paused?(ar?'تشغيل الحركة':'Resume motion'):(ar?'إيقاف الحركة':'Pause motion');toggle.setAttribute('aria-pressed',String(paused));}
  toggle.onclick=()=>{paused=!paused;label()};
  new MutationObserver(label).observe(document.documentElement,{attributes:true,attributeFilter:['lang']});
  strip.addEventListener('mouseenter',()=>hover=true);strip.addEventListener('mouseleave',()=>hover=false);
  strip.addEventListener('focusin',()=>focused=true);strip.addEventListener('focusout',()=>focused=false);
  strip.addEventListener('pointerdown',()=>{pointer=true;lastInput=performance.now()});addEventListener('pointerup',()=>{pointer=false;lastInput=performance.now()});
  strip.addEventListener('wheel',()=>lastInput=performance.now(),{passive:true});
  const visible=new IntersectionObserver(es=>{strip.dataset.inView=es[0].isIntersecting?'yes':'no'},{threshold:.1});visible.observe(strip);
  function frame(now){
    const delta=last?Math.min(now-last,40):0;last=now;
    if(!paused&&!hover&&!focused&&!pointer&&now-lastInput>3500&&strip.dataset.inView==='yes'&&!document.hidden){
      const max=strip.scrollWidth-strip.clientWidth,rtl=getComputedStyle(strip).direction==='rtl',current=Math.abs(strip.scrollLeft);
      if(current>=max-1)direction=-1;else if(current<=1)direction=1;
      strip.scrollLeft+=(rtl?-1:1)*direction*delta*.04;
    }
    requestAnimationFrame(frame);
  }
  label();requestAnimationFrame(frame);
})();
