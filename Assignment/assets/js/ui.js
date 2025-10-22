// assets/js/ui.js
document.addEventListener('DOMContentLoaded', () => {
  // nav toggle
  const toggle = document.querySelector('.nav-toggle');
  if (toggle) {
    toggle.addEventListener('click', () => {
      document.body.classList.toggle('nav-open');
    });
  }

  // lightbox: support images from .gallery-grid and images inside .img-figure
  function escapeHtml(str) {
    return String(str).replace(/[&<>"']/g, (s) => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[s]));
  }

  function openLightbox(imgEl) {
    const src = imgEl.dataset.large || imgEl.src;
    const alt = imgEl.alt || '';
    const fig = imgEl.closest('figure');
    const caption = fig && fig.querySelector('figcaption') ? fig.querySelector('figcaption').textContent.trim() : '';

    const overlay = document.createElement('div');
    overlay.className = 'lb-overlay';

    const inner = document.createElement('div');
    inner.className = 'lb-inner';

    const closeBtn = document.createElement('button');
    closeBtn.className = 'lb-close';
    closeBtn.setAttribute('aria-label', 'Close');
    closeBtn.innerHTML = '\u00d7';

    const img = document.createElement('img');
    img.src = src;
    img.alt = alt;

    inner.appendChild(img);
    if (caption) {
      const cap = document.createElement('div');
      cap.className = 'lb-caption';
      cap.textContent = caption;
      inner.appendChild(cap);
    }

    overlay.appendChild(closeBtn);
    overlay.appendChild(inner);

    function removeOverlay() {
      document.removeEventListener('keydown', onKey);
      overlay.remove();
    }

    function onKey(e) {
      if (e.key === 'Escape') removeOverlay();
    }

    overlay.addEventListener('click', (ev) => {
      if (ev.target === overlay || ev.target === closeBtn) removeOverlay();
    });

    document.addEventListener('keydown', onKey);
    document.body.appendChild(overlay);
  }

  document.addEventListener('click', (e) => {
    const img = e.target.closest('img');
    if (!img) return;
    // only open for images inside the gallery grid or our destination/figure blocks
    if (img.closest('.gallery-grid') || img.closest('.img-figure')) {
      openLightbox(img);
    }
  });
});
