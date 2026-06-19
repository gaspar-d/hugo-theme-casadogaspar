/* ─── Dark mode toggle ─────────────────────────────────────── */
(function () {
  var btn = document.getElementById('theme-toggle');
  if (!btn) return;

  btn.addEventListener('click', function () {
    var current = document.documentElement.getAttribute('data-theme');
    var next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
  });
})();

/* ─── ToC scroll highlight ─────────────────────────────────── */
(function () {
  const toc = document.querySelector('.toc');
  if (!toc) return;

  const headings = document.querySelectorAll('.prose h2, .prose h3');
  const links = toc.querySelectorAll('a');
  if (!headings.length || !links.length) return;

  const linkMap = {};
  links.forEach(function (a) {
    const id = decodeURIComponent(a.getAttribute('href').replace('#', ''));
    linkMap[id] = a;
  });

  function setActive(id) {
    links.forEach(function (a) { a.classList.remove('active'); });
    if (linkMap[id]) linkMap[id].classList.add('active');
  }

  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) setActive(entry.target.id);
      });
    },
    { rootMargin: '0px 0px -70% 0px', threshold: 0 }
  );

  headings.forEach(function (h) { observer.observe(h); });
})();

/* ─── Image lightbox ───────────────────────────────────────── */
(function () {
  var lightbox = document.getElementById('lightbox');
  var lightboxImg = document.getElementById('lightbox-img');
  if (!lightbox) return;

  document.querySelectorAll('.prose img').forEach(function (img) {
    img.addEventListener('click', function () {
      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt;
      lightbox.classList.add('open');
    });
  });

  function close() { lightbox.classList.remove('open'); }

  lightbox.addEventListener('click', close);
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') close();
  });
})();

/* ─── Code copy button ─────────────────────────────────────── */
(function () {
  document.querySelectorAll('.prose pre').forEach(function (pre) {
    const btn = document.createElement('button');
    btn.className = 'copy-btn';
    btn.textContent = 'Copy';
    pre.appendChild(btn);

    btn.addEventListener('click', function () {
      const code = pre.querySelector('code');
      const text = code ? code.innerText : pre.innerText;
      navigator.clipboard.writeText(text).then(function () {
        btn.textContent = 'Copied';
        btn.classList.add('copied');
        setTimeout(function () {
          btn.textContent = 'Copy';
          btn.classList.remove('copied');
        }, 1800);
      });
    });
  });
})();
