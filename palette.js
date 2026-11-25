// Seletor de cores do site: um botão pequeno no canto que abre um painel de paletas.
// A escolha fica salva só no navegador de quem visita (localStorage "palette").
// As cores de cada paleta ficam no bloco "Paletas" do styles.css.
(function () {
  "use strict";

  var DEFAULT = "roxo";
  var root = document.documentElement;
  var palettes = [
    { id: "floresta", group: "greens", pt: "Floresta", en: "Forest", a: "#1b4332", b: "#40916c" },
    { id: "verde", group: "greens", pt: "Esmeralda", en: "Emerald", a: "#064e3b", b: "#059669" },
    { id: "verde-classico", group: "greens", pt: "Verde", en: "Green", a: "#14532d", b: "#16a34a" },
    { id: "oliva", group: "greens", pt: "Oliva", en: "Olive", a: "#3a4a1f", b: "#6b8e23" },
    { id: "lima", group: "greens", pt: "Lima", en: "Lime", a: "#365314", b: "#65a30d" },
    { id: "teal", group: "greens", pt: "Verde-azulado", en: "Teal", a: "#134e4a", b: "#0d9488" },
    { id: "marinho", group: "blues", pt: "Marinho", en: "Navy", a: "#0b1f44", b: "#2b4f94" },
    { id: "azul", group: "blues", pt: "Azul", en: "Blue", a: "#1e3a8a", b: "#2563eb" },
    { id: "indigo", group: "blues", pt: "Índigo", en: "Indigo", a: "#312e81", b: "#4f46e5" },
    { id: "ceu", group: "blues", pt: "Céu", en: "Sky", a: "#0c4a6e", b: "#0284c7" },
    { id: "ciano", group: "blues", pt: "Ciano", en: "Cyan", a: "#164e63", b: "#0891b2" },
    { id: "petroleo", group: "blues", pt: "Petróleo", en: "Petrol", a: "#073b44", b: "#0e7c8c" },
    { id: "roxo", group: "purples", pt: "Roxo (padrão)", en: "Purple (default)", a: "#371e77", b: "#6a3fd6" },
    { id: "violeta", group: "purples", pt: "Violeta", en: "Violet", a: "#4c1d95", b: "#7c3aed" },
    { id: "magenta", group: "purples", pt: "Magenta", en: "Magenta", a: "#701a75", b: "#c026d3" },
    { id: "rosa", group: "purples", pt: "Rosa", en: "Pink", a: "#831843", b: "#db2777" },
    { id: "framboesa", group: "purples", pt: "Framboesa", en: "Raspberry", a: "#881337", b: "#e11d48" },
    { id: "vinho", group: "purples", pt: "Vinho", en: "Wine", a: "#4c0f22", b: "#9b2c4c" },
    { id: "vermelho", group: "warm", pt: "Vermelho", en: "Red", a: "#7f1d1d", b: "#dc2626" },
    { id: "terracota", group: "warm", pt: "Terracota", en: "Terracotta", a: "#7a3417", b: "#c8683b" },
    { id: "laranja", group: "warm", pt: "Laranja", en: "Orange", a: "#7c2d12", b: "#ea580c" },
    { id: "ambar", group: "warm", pt: "Âmbar", en: "Amber", a: "#78350f", b: "#d97706" },
    { id: "cafe", group: "warm", pt: "Café", en: "Coffee", a: "#3e2a1d", b: "#8b6447" },
    { id: "grafite", group: "neutrals", pt: "Grafite", en: "Graphite", a: "#0f172a", b: "#475569" },
    { id: "pedra", group: "neutrals", pt: "Pedra", en: "Stone", a: "#1c1917", b: "#57534e" },
  ];
  var groups = {
    greens: { pt: "Verdes", en: "Greens" },
    blues: { pt: "Azuis", en: "Blues" },
    purples: { pt: "Roxos e rosas", en: "Purples & pinks" },
    warm: { pt: "Quentes", en: "Warm" },
    neutrals: { pt: "Neutros", en: "Neutrals" },
  };
  var text = {
    pt: { open: "Trocar a cor do site", title: "Cor do site", hint: "Escolha à vontade: fica salva só no seu navegador.", reset: "Restaurar padrão", prev: "Cor anterior", next: "Próxima cor", close: "Fechar" },
    en: { open: "Change the site color", title: "Site color", hint: "Play around: your choice is saved only in your browser.", reset: "Reset to default", prev: "Previous color", next: "Next color", close: "Close" },
  };

  function lang() { return root.dataset.lang === "en" ? "en" : "pt"; }
  function find(id) { return palettes.find(function (p) { return p.id === id; }); }

  // Migra a chave usada durante o desenvolvimento
  if (!localStorage.getItem("palette") && localStorage.getItem("dev-palette")) {
    localStorage.setItem("palette", localStorage.getItem("dev-palette"));
  }
  localStorage.removeItem("dev-palette");

  var css = document.createElement("style");
  css.textContent = [
    ".pal{position:fixed;right:16px;bottom:16px;z-index:60;font:500 13px/1.3 var(--font);color:var(--text)}",
    ".pal__fab{position:relative;width:44px;height:44px;border-radius:999px;display:grid;place-items:center;cursor:pointer;",
    "color:var(--text);background:var(--surface);border:1px solid var(--line);box-shadow:var(--shadow);transition:transform .15s,border-color .15s}",
    ".pal__fab:hover{transform:translateY(-2px);border-color:var(--accent)}",
    ".pal__fab svg{width:20px;height:20px}",
    ".pal__dot{position:absolute;right:6px;bottom:6px;width:12px;height:12px;border-radius:50%;border:2px solid var(--surface)}",
    ".pal__panel{position:absolute;right:0;bottom:56px;width:264px;padding:14px;border-radius:16px;background:var(--surface);",
    "border:1px solid var(--line);box-shadow:0 18px 48px rgba(0,0,0,.18);transform-origin:bottom right;",
    "opacity:0;transform:translateY(6px) scale(.97);pointer-events:none;transition:opacity .16s,transform .16s}",
    ".pal[data-open] .pal__panel{opacity:1;transform:none;pointer-events:auto}",
    ".pal__head{display:flex;align-items:baseline;justify-content:space-between;gap:8px}",
    ".pal__title{font-weight:700;font-size:14px}",
    ".pal__name{color:var(--accent);font-weight:600}",
    ".pal__close{margin-left:auto;width:24px;height:24px;border:0;border-radius:8px;background:transparent;color:var(--muted);cursor:pointer;font-size:18px;line-height:1}",
    ".pal__close:hover{background:var(--surface-2);color:var(--text)}",
    ".pal__hint{margin-top:4px;font-size:12px;color:var(--muted)}",
    ".pal__body{margin-top:6px;max-height:min(52vh,380px);overflow:auto;padding-right:2px}",
    ".pal__group{font:600 10px/1 var(--mono);letter-spacing:.06em;text-transform:uppercase;color:var(--muted);margin:12px 0 7px}",
    ".pal__grid{display:grid;grid-template-columns:repeat(6,1fr);gap:8px}",
    ".pal__sw{aspect-ratio:1;width:100%;border-radius:50%;border:2px solid var(--surface);cursor:pointer;padding:0;outline:1px solid var(--line);transition:transform .12s}",
    ".pal__sw:hover{transform:scale(1.1)}",
    ".pal__sw[aria-pressed=true]{outline:2px solid var(--text);outline-offset:1px}",
    ".pal__foot{display:flex;align-items:center;gap:6px;margin-top:12px;padding-top:12px;border-top:1px solid var(--line)}",
    ".pal__nav{width:30px;height:30px;border-radius:9px;border:1px solid var(--line);background:var(--surface-2);color:inherit;cursor:pointer;font:600 15px/1 var(--font)}",
    ".pal__nav:hover,.pal__reset:hover{border-color:var(--accent);color:var(--accent)}",
    ".pal__reset{margin-left:auto;height:30px;padding:0 12px;border-radius:9px;border:1px solid var(--line);background:transparent;color:var(--muted);cursor:pointer;font:600 12px/1 var(--font)}",
    "@media (prefers-reduced-motion:reduce){.pal__panel,.pal__fab,.pal__sw{transition:none}}",
    "@media print{.pal{display:none}}",
  ].join("");
  document.head.appendChild(css);

  var box = document.createElement("div");
  box.className = "pal";
  box.innerHTML =
    '<div class="pal__panel" id="pal-panel" role="dialog">' +
      '<div class="pal__head"><span class="pal__title"></span><span class="pal__name"></span>' +
      '<button type="button" class="pal__close">×</button></div>' +
      '<p class="pal__hint"></p>' +
      '<div class="pal__body"></div>' +
      '<div class="pal__foot">' +
        '<button type="button" class="pal__nav" data-step="-1">‹</button>' +
        '<button type="button" class="pal__nav" data-step="1">›</button>' +
        '<button type="button" class="pal__reset"></button>' +
      '</div>' +
    '</div>' +
    '<button type="button" class="pal__fab" aria-expanded="false" aria-controls="pal-panel">' +
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3a9 9 0 0 0 0 18c1.1 0 1.8-.8 1.8-1.7 0-.5-.2-.9-.5-1.2-.3-.3-.5-.7-.5-1.2 0-.9.8-1.7 1.7-1.7h2A4.5 4.5 0 0 0 21 10.7C21 6.4 17 3 12 3z"/><circle cx="7.5" cy="11" r="1.2"/><circle cx="10.5" cy="7.5" r="1.2"/><circle cx="15" cy="7.5" r="1.2"/></svg>' +
      '<span class="pal__dot"></span>' +
    '</button>';

  var fab = box.querySelector(".pal__fab");
  var dot = box.querySelector(".pal__dot");
  var body = box.querySelector(".pal__body");
  var current = DEFAULT;

  function build() {
    var l = lang(), t = text[l];
    body.replaceChildren();
    Object.keys(groups).forEach(function (g) {
      var title = document.createElement("p");
      title.className = "pal__group";
      title.textContent = groups[g][l];
      var grid = document.createElement("div");
      grid.className = "pal__grid";
      palettes.filter(function (p) { return p.group === g; }).forEach(function (p) {
        var b = document.createElement("button");
        b.type = "button";
        b.className = "pal__sw";
        b.dataset.p = p.id;
        b.title = p[l];
        b.setAttribute("aria-label", p[l]);
        b.style.background = "linear-gradient(135deg," + p.a + "," + p.b + ")";
        b.addEventListener("click", function () { apply(p.id); });
        grid.appendChild(b);
      });
      body.appendChild(title);
      body.appendChild(grid);
    });
    box.querySelector(".pal__title").textContent = t.title;
    box.querySelector(".pal__hint").textContent = t.hint;
    box.querySelector(".pal__reset").textContent = t.reset;
    box.querySelector(".pal__close").setAttribute("aria-label", t.close);
    box.querySelector('[data-step="-1"]').setAttribute("aria-label", t.prev);
    box.querySelector('[data-step="1"]').setAttribute("aria-label", t.next);
    box.querySelector(".pal__panel").setAttribute("aria-label", t.title);
    fab.setAttribute("aria-label", t.open);
    fab.title = t.open;
    apply(current, true);
  }

  function apply(id, silent) {
    var p = find(id) || find(DEFAULT);
    current = p.id;
    if (p.id === DEFAULT) { delete root.dataset.palette; localStorage.removeItem("palette"); }
    else { root.dataset.palette = p.id; if (!silent) localStorage.setItem("palette", p.id); }
    box.querySelectorAll(".pal__sw").forEach(function (b) {
      b.setAttribute("aria-pressed", String(b.dataset.p === p.id));
    });
    box.querySelector(".pal__name").textContent = p[lang()];
    dot.style.background = "linear-gradient(135deg," + p.a + "," + p.b + ")";
  }

  function step(dir) {
    var i = palettes.findIndex(function (p) { return p.id === current; });
    apply(palettes[(i + dir + palettes.length) % palettes.length].id);
  }

  function setOpen(open) {
    if (open) box.setAttribute("data-open", "");
    else box.removeAttribute("data-open");
    fab.setAttribute("aria-expanded", String(open));
  }

  fab.addEventListener("click", function () { setOpen(!box.hasAttribute("data-open")); });
  box.querySelector(".pal__close").addEventListener("click", function () { setOpen(false); fab.focus(); });
  box.querySelector(".pal__reset").addEventListener("click", function () { apply(DEFAULT); });
  box.querySelectorAll("[data-step]").forEach(function (b) {
    b.addEventListener("click", function () { step(Number(b.dataset.step)); });
  });
  document.addEventListener("click", function (e) {
    if (box.hasAttribute("data-open") && !box.contains(e.target)) setOpen(false);
  });
  document.addEventListener("keydown", function (e) {
    if (!box.hasAttribute("data-open")) return;
    if (e.key === "Escape") { setOpen(false); fab.focus(); }
    if (e.key === "ArrowRight") step(1);
    if (e.key === "ArrowLeft") step(-1);
  });

  // Reconstrói os rótulos quando o idioma do site muda
  new MutationObserver(build).observe(root, { attributes: true, attributeFilter: ["data-lang"] });

  document.body.appendChild(box);
  current = localStorage.getItem("palette") || DEFAULT;
  build();
})();
