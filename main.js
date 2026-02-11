(function(){
  const slider = document.querySelector('[data-slider]');
  if(!slider) return;

  const slidesEl = slider.querySelector('[data-slides]');
  const slides = Array.from(slidesEl.querySelectorAll('.slide'));
  const prevBtn = slider.querySelector('[data-prev]');
  const nextBtn = slider.querySelector('[data-next]');
  const dotsEl = slider.querySelector('[data-dots]');

  let idx = slides.findIndex(s => s.classList.contains('is-active'));
  if(idx < 0) idx = 0;

  slides.forEach((_, i) => {
    const b = document.createElement('button');
    b.className = 'dot' + (i === idx ? ' is-active' : '');
    b.setAttribute('aria-label', `배너 ${i+1}`);
    b.addEventListener('click', () => go(i));
    dotsEl.appendChild(b);
  });

  function setActive(i){
    slides.forEach((s, k) => s.classList.toggle('is-active', k === i));
    Array.from(dotsEl.querySelectorAll('.dot')).forEach((d, k) => d.classList.toggle('is-active', k === i));
  }

  function go(i){
    idx = (i + slides.length) % slides.length;
    setActive(idx);
    restart();
  }

  prevBtn?.addEventListener('click', () => go(idx - 1));
  nextBtn?.addEventListener('click', () => go(idx + 1));

  let timer = null;
  function restart(){
    if(timer) clearInterval(timer);
    timer = setInterval(() => go(idx + 1), 6000);
  }
  restart();

  slider.addEventListener('mouseenter', () => timer && clearInterval(timer));
  slider.addEventListener('mouseleave', restart);
})();