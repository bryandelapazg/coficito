"use strict";
(() => {
  const stage = document.querySelector('.coficito-cinematic');
  if (!stage) return;
  const videos = [...stage.querySelectorAll('.coficito-scene')];
  const dots = [...stage.querySelectorAll('.coficito-scene-dot')];
  const toggle = stage.querySelector('.coficito-video-pause');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const saveData = navigator.connection?.saveData === true;
  let active = 0;
  let paused = reducedMotion.matches || saveData;
  let transitionTimer = null;

  function updateControls() {
    dots.forEach((dot, index) => dot.setAttribute('aria-pressed', String(index === active)));
    toggle.textContent = paused ? '▶' : 'Ⅱ';
    toggle.setAttribute('aria-label', paused ? 'Play videos' : 'Pause videos');
  }

  function stopOthers(index) {
    videos.forEach((video, i) => {
      if (i !== index) {
        video.pause();
        video.classList.remove('is-active');
      }
    });
  }

  function playScene(index) {
    if (reducedMotion.matches || !videos[index]) return;
    clearTimeout(transitionTimer);
    active = index;
    const video = videos[index];
    // Keep the previous scene visible until the new video can render.
    video.currentTime = 0;
    video.classList.add('is-active');
    updateControls();
    if (paused || document.hidden) return;
    const attempt = video.play();
    if (attempt?.catch) attempt.catch(() => { paused = true; updateControls(); });
    transitionTimer = setTimeout(() => stopOthers(index), 1050);
  }

  videos.forEach((video, index) => {
    video.addEventListener('ended', () => {
      if (!paused && active === index) playScene((index + 1) % videos.length);
    });
  });

  dots.forEach((dot, index) => dot.addEventListener('click', () => {
    if (reducedMotion.matches) return;
    paused = false;
    playScene(index);
  }));

  toggle.addEventListener('click', () => {
    if (reducedMotion.matches) return;
    paused = !paused;
    if (paused) videos[active].pause();
    else {
      const result = videos[active].play();
      result?.catch?.(() => { paused = true; updateControls(); });
    }
    updateControls();
  });

  document.addEventListener('visibilitychange', () => {
    if (document.hidden) videos[active].pause();
    else if (!paused && !reducedMotion.matches) videos[active].play().catch(() => {});
  });

  reducedMotion.addEventListener?.('change', (event) => {
    if (event.matches) { paused = true; videos.forEach(video => video.pause()); }
    updateControls();
  });

  if (reducedMotion.matches) {
    dots.forEach(dot => { dot.disabled = true; });
    toggle.disabled = true;
  } else if (!paused) playScene(0);
  updateControls();
})();
