(function () {
  "use strict";

  var C = window.CONTENT;
  var L = window.LINKS;
  var root = document.documentElement;

  function el(tag, attrs, children) {
    var node = document.createElement(tag);
    if (attrs) {
      Object.keys(attrs).forEach(function (k) {
        if (k === "text") node.textContent = attrs[k];
        else node.setAttribute(k, attrs[k]);
      });
    }
    (children || []).forEach(function (c) { if (c) node.appendChild(c); });
    return node;
  }

  function fill(id, nodes) {
    var target = document.getElementById(id);
    target.replaceChildren.apply(target, nodes);
  }

  function tagList(items) {
    return items.map(function (t) { return el("li", { text: t }); });
  }

  function render(lang) {
    var d = C[lang];
    var ui = d.ui;

    root.dataset.lang = lang;
    root.lang = lang === "pt" ? "pt-BR" : "en";
    document.title = d.meta.title;
    document.querySelector('meta[name="description"]').setAttribute("content", d.meta.description);

    document.querySelectorAll("[data-i18n]").forEach(function (n) {
      n.textContent = ui[n.dataset.i18n];
    });
    document.querySelectorAll("[data-i18n-alt]").forEach(function (n) {
      n.setAttribute("alt", ui[n.dataset.i18nAlt]);
    });
    document.querySelectorAll("[data-i18n-aria]").forEach(function (n) {
      n.setAttribute("aria-label", ui[n.dataset.i18nAria]);
    });
    document.querySelectorAll("[data-set-lang]").forEach(function (b) {
      b.setAttribute("aria-pressed", String(b.dataset.setLang === lang));
    });
    document.querySelectorAll("[data-cv]").forEach(function (a) {
      a.href = L.cv[lang];
    });

    // Sobre
    fill("about-text", d.about.map(function (p) { return el("p", { text: p }); }));
    fill("stats", d.stats.map(function (s) {
      return el("div", { class: "stat" }, [
        el("dt", { text: s.value }),
        el("dd", { text: s.label }),
      ]);
    }));

    // Projeto
    var p = d.project;
    document.getElementById("project-name").textContent = p.name;
    document.getElementById("project-tagline").textContent = p.tagline;
    document.getElementById("project-desc").textContent = p.description;
    document.getElementById("project-role").textContent = p.myRole;
    document.getElementById("project-link").href = p.url;
    document.getElementById("project-shot-link").href = p.url;
    document.getElementById("project-url").textContent = p.urlLabel;
    fill("project-tags", tagList(p.tags));
    fill("project-highlights", p.highlights.map(function (h) { return el("li", { text: h }); }));

    // Outros projetos
    fill("projects", d.projects.map(function (pr) {
      var img = el("img", { src: pr.image, width: pr.width, height: pr.height, alt: pr.alt, loading: "lazy", decoding: "async" });
      var hasNote = pr.links.some(function (l) { return l.note; });
      return el("article", { class: "proj" }, [
        el("a", { class: "proj__shot", href: pr.links[0].url, target: "_blank", rel: "noopener", "aria-label": pr.name }, [
          el("div", { class: "proj__window" }, [
            el("div", { class: "proj__bar", "aria-hidden": "true" }, [el("span"), el("span"), el("span")]),
            img,
          ]),
        ]),
        el("div", { class: "proj__body" }, [
          el("p", { class: "proj__kind", text: pr.kind }),
          el("h4", { class: "proj__name", text: pr.name }),
          el("p", { class: "proj__desc", text: pr.description }),
          el("ul", { class: "tags" }, tagList(pr.tags)),
          el("div", { class: "proj__links" }, pr.links.map(function (l) {
            return el("a", { class: "btn btn--ghost btn--sm", href: l.url, target: "_blank", rel: "noopener", text: l.label + (l.note ? " *" : "") + " ↗" });
          })),
          hasNote ? el("p", { class: "proj__note", text: "* " + ui.videoNote }) : null,
        ]),
      ]);
    }));

    // Experiência
    fill("timeline", d.experience.map(function (job) {
      var current = !job.end;
      return el("li", { class: "job" + (current ? " job--current" : "") }, [
        el("div", { class: "job__when" }, [
          el("span", { text: job.start + " — " + (job.end || ui.present) }),
        ]),
        el("div", { class: "job__card" }, [
          el("div", { class: "job__head" }, [
            el("h3", { class: "job__role", text: job.role }),
            el("p", { class: "job__company" }, [
              el("strong", { text: job.company }),
              el("span", { text: " · " + job.location }),
            ]),
          ]),
          el("p", { class: "job__summary", text: job.summary }),
          el("ul", { class: "job__list" }, job.highlights.map(function (h) {
            return el("li", { text: h });
          })),
          el("ul", { class: "tags" }, tagList(job.tags)),
        ]),
      ]);
    }));

    // Habilidades
    fill("skills", d.skills.map(function (g) {
      return el("div", { class: "skill-group" }, [
        el("h3", { class: "skill-group__name", text: g.group }),
        el("ul", { class: "tags" }, tagList(g.items)),
      ]);
    }));
    fill("education", d.education.map(function (e) {
      return el("li", {}, [
        el("p", { class: "edu__course", text: e.course }),
        el("p", { class: "edu__school", text: e.school }),
        el("p", { class: "edu__meta", text: e.period + " · " + e.place }),
      ]);
    }));
    fill("languages", d.languages.map(function (l) {
      return el("li", {}, [
        el("span", { class: "langs__name", text: l.name }),
        el("span", { class: "langs__level", text: l.level }),
      ]);
    }));

    updateThemeLabel();
  }

  // Links fixos
  document.querySelectorAll("[data-link]").forEach(function (a) {
    var key = a.dataset.link;
    a.href = key === "email" ? "mailto:" + L.email : L[key];
    if (a.hasAttribute("data-show-email")) a.textContent = L.email;
  });

  // Idioma
  document.querySelectorAll("[data-set-lang]").forEach(function (b) {
    b.addEventListener("click", function () {
      localStorage.setItem("lang", b.dataset.setLang);
      render(b.dataset.setLang);
    });
  });

  // Tema
  var themeBtn = document.getElementById("theme-toggle");
  function updateThemeLabel() {
    var ui = C[root.dataset.lang].ui;
    var dark = root.dataset.theme === "dark";
    themeBtn.setAttribute("aria-label", dark ? ui.themeToLight : ui.themeToDark);
    themeBtn.title = themeBtn.getAttribute("aria-label");
  }
  themeBtn.addEventListener("click", function () {
    var next = root.dataset.theme === "dark" ? "light" : "dark";
    root.dataset.theme = next;
    localStorage.setItem("theme", next);
    updateThemeLabel();
  });

  document.getElementById("year").textContent = new Date().getFullYear();

  render(C[root.dataset.lang] ? root.dataset.lang : "pt");
})();
