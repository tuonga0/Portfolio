/* ═══════════════════════════════════════════════════════════════════════
   GAME DATA
   video.type: "short" | "youtube" | "local" | "dual-short"
   ═══════════════════════════════════════════════════════════════════════ */
var games = [
  /* 0 */ {
    title: "Merged Diamond",
    theme: "casual",
    genres: ["Merge Puzzle", "Physics Puzzle", "Casual Strategy"],
    desc: "Designed, coded, and shipped solo. A physics-based merge puzzle where silver, gold, and diamond blocks fall onto the board. Players destroy blocks to score and position falling pieces to form larger rectangles that auto-merge into higher-value formations. Game design, programming, art direction, and UI built end-to-end by one person.",
    video: { type: "dual-short", ids: ["E1VbVanAXpo", "t0oodF6Itas"], labels: ["Gameplay", "Trailer"] }
  },
  /* 1 */ {
    title: "Cluedoku",
    theme: "detective",
    genres: ["Logic Puzzle", "Sudoku-Inspired", "Detective"],
    desc: "A detective-inspired logic puzzle merging Sudoku mechanics with mystery solving. Players analyze clues to determine the correct position of every character, ensuring each row and column contains only one unique character.",
    video: { type: "short", id: "qFZuIl-Z6Sc" }
  },
  /* 2 */ {
    title: "Scene Match",
    theme: "puzzle",
    genres: ["Logic Puzzle", "Deduction"],
    desc: "A clue-based deduction puzzle where players place characters into predefined locations within a scene. By interpreting hints and contextual clues, players gradually uncover where everyone belongs.",
    video: { type: "short", id: "deBMqJm8cjw" }
  },
  /* 3 */ {
    title: "Rush Tank",
    theme: "action",
    genres: ["Action", "Shooter", "Upgrade Runner"],
    desc: "An action-packed tank combat game where players collect upgrade crates during battle to enhance weapons and firepower. Strategic upgrade choices allow players to build increasingly destructive tanks capable of overwhelming enemy forces.",
    video: { type: "short", id: "YdzmXmCox1Y" }
  },
  /* 4 */ {
    title: "Apocalypse Drifter",
    theme: "strategy",
    genres: ["Backpack Battler", "Auto-Battle", "Roguelite"],
    desc: "A post-apocalyptic backpack battler where players strategically organize, merge, and upgrade items inside their inventory to build powerful combat synergies. Every placement decision matters as players optimize their loadout to survive increasingly dangerous enemies.",
    video: { type: "short", id: "ZDZJFItD8kM" }
  },
  /* 5 */ {
    title: "Character Sort",
    theme: "casual",
    genres: ["Casual Puzzle", "Sorting Puzzle"],
    desc: "A relaxing sorting puzzle where players group characters based on shared visual traits and categories. From animals and hairstyles to clothing colors, players must identify patterns and organize avatars into matching rows.",
    video: { type: "short", id: "wEwscfsFBj8" }
  },
  /* 6 */ {
    title: "Clue Domino",
    theme: "puzzle",
    genres: ["Logic Puzzle", "Tile Placement"],
    desc: "A hybrid puzzle combining logical deduction with domino placement. Players use category-based clues to group matching characters while fitting domino-shaped pieces into the board, creating a unique blend of reasoning and spatial problem-solving.",
    video: { type: "short", id: "weWZ-GwEbIE" }
  },
  /* 7 */ {
    title: "Flower Chain",
    theme: "casual",
    genres: ["Casual Puzzle", "Color Matching"],
    desc: "A colorful puzzle where players drag and connect chains of flowers to their corresponding colored slots. The challenge comes from managing chain lengths, movement paths, and increasingly complex board layouts.",
    video: { type: "short", id: "JJ5R6zJ-xzE" }
  },
  /* 8 */ {
    title: "Match Line",
    theme: "puzzle",
    genres: ["Time Management", "Sorting Puzzle"],
    desc: "A fast-paced sorting challenge featuring a constantly moving conveyor belt of characters. Players must quickly identify shared categories and sort matching avatars into the correct containers before time runs out.",
    video: { type: "short", id: "nwwM5KCMNhk" }
  },
  /* 9 */ {
    title: "Solitaire Sort",
    theme: "strategy",
    genres: ["Solitaire", "Card Puzzle", "Sorting"],
    desc: "A fresh twist on classic Solitaire that replaces traditional card suits with character categories. Players reorganize and group matching avatars while maintaining the familiar strategic decision-making of Solitaire gameplay.",
    video: { type: "short", id: "eA6R9uSOKCY" }
  },
  /* 10 */ {
    title: "Star Detective",
    theme: "detective",
    genres: ["Detective Puzzle", "Social Deduction", "Logic Puzzle"],
    desc: "A social deduction puzzle where every character provides clues about others. Some clues reveal allies and suspects, while others are misleading. Players must carefully analyze all information to identify every hidden villain.",
    video: { type: "short", id: "UuTYV3zf-kg" }
  },
  /* 11 */ {
    title: "Tile Jam",
    theme: "puzzle",
    genres: ["Sliding Puzzle", "Logic Puzzle", "Match Puzzle"],
    desc: "A puzzle combining sliding mechanics with category matching. Players identify related characters, then strategically slide tiles across the board to align matching groups and complete each level.",
    video: { type: "short", id: "_0IszTkUhKU" }
  },
  /* 12 */ {
    title: "Infinity Space Shooter",
    theme: "action",
    genres: ["Arcade Shooter", "Space Shooter", "Action"],
    desc: "An endless space shooter focused on deep weapon customization. Players can freely invest in and upgrade nearly every weapon attribute, creating unique builds while battling waves of enemies across an infinite battlefield.",
    video: { type: "youtube", id: "M3MP9JeQCCI" }
  }
];

/* ═══════════════════════════════════════════════════════════════════════
   NAV SCROLL
   ═══════════════════════════════════════════════════════════════════════ */
var nav = document.getElementById("site-nav");

function syncNav() {
  nav.classList.toggle("scrolled", window.scrollY > 20);
}

window.addEventListener("scroll", syncNav, { passive: true });
syncNav();

/* ═══════════════════════════════════════════════════════════════════════
   SCROLL REVEAL
   ═══════════════════════════════════════════════════════════════════════ */
var revealObserver = new IntersectionObserver(function(entries) {
  entries.forEach(function(entry) {
    if (!entry.isIntersecting) return;
    var el = entry.target;
    setTimeout(function() { el.classList.add("is-visible"); }, el.dataset.delay || 0);
    revealObserver.unobserve(el);
  });
}, { threshold: 0.1, rootMargin: "0px 0px -40px 0px" });

document.querySelectorAll(".reveal").forEach(function(el, i) {
  el.dataset.delay = (i % 4) * 70;
  revealObserver.observe(el);
});

/* ═══════════════════════════════════════════════════════════════════════
   POPUP DOM REFERENCES
   ═══════════════════════════════════════════════════════════════════════ */
var popup       = document.getElementById("game-popup");
var popupPanel  = popup.querySelector(".gpopup-panel");
var popupTitle  = document.getElementById("gpopup-title");
var popupGenres = document.getElementById("gpopup-genres");
var popupVideo  = document.getElementById("gpopup-video-area");
var popupDesc   = document.getElementById("gpopup-desc");
var popupClose  = document.getElementById("gpopup-close");
var popupCurrent= document.getElementById("gpopup-current");
var backdrop    = popup.querySelector(".gpopup-backdrop");

/* Footer nav cards */
var btnPrev      = document.getElementById("gpopup-prev");
var btnNext      = document.getElementById("gpopup-next");
var prevThumb    = document.getElementById("gpopup-prev-thumb");
var nextThumb    = document.getElementById("gpopup-next-thumb");
var prevName     = document.getElementById("gpopup-prev-name");
var nextName     = document.getElementById("gpopup-next-name");

/* Side peek cards */
var peekPrev     = document.getElementById("gpopup-peek-prev");
var peekNext     = document.getElementById("gpopup-peek-next");
var peekPrevImg  = document.getElementById("gpopup-peek-prev-img");
var peekNextImg  = document.getElementById("gpopup-peek-next-img");
var peekPrevName = document.getElementById("gpopup-peek-prev-name");
var peekNextName = document.getElementById("gpopup-peek-next-name");

/* ═══════════════════════════════════════════════════════════════════════
   HELPERS
   ═══════════════════════════════════════════════════════════════════════ */

/** Return a YouTube thumbnail URL, or null for local videos. */
function getThumbUrl(game) {
  var v = game.video;
  if (v.type === "short" || v.type === "youtube") {
    return "https://img.youtube.com/vi/" + v.id + "/hqdefault.jpg";
  }
  if (v.type === "dual-short") {
    return "https://img.youtube.com/vi/" + v.ids[0] + "/hqdefault.jpg";
  }
  return null; // local video — no thumbnail URL
}

/** Apply thumbnail to a thumb div element. */
function setThumb(el, game) {
  var url = getThumbUrl(game);
  if (url) {
    el.style.backgroundImage = "url(" + url + ")";
    el.textContent = "";
  } else {
    el.style.backgroundImage = "none";
    el.textContent = game.title[0];
  }
}

function escapeHtml(str) {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function clearVideo() {
  popupVideo.querySelectorAll("video").forEach(function(v) { v.pause(); });
  popupVideo.querySelectorAll("iframe").forEach(function(f) { f.src = ""; });
  popupVideo.innerHTML = "";
}

/* ═══════════════════════════════════════════════════════════════════════
   POPUP LIFECYCLE
   ═══════════════════════════════════════════════════════════════════════ */
var currentIndex = 0;
var lastFocused  = null;

function openPopup(index) {
  lastFocused  = document.activeElement;
  currentIndex = index;
  populatePopup(games[index]);
  popup.removeAttribute("hidden");
  requestAnimationFrame(function() {
    requestAnimationFrame(function() {
      popup.classList.add("is-open");
      document.body.style.overflow = "hidden";
      popupClose.focus();
    });
  });
}

function closePopup() {
  popup.classList.remove("is-open");
  document.body.style.overflow = "";
  setTimeout(function() {
    popup.setAttribute("hidden", "");
    clearVideo();
  }, 300);
  if (lastFocused) lastFocused.focus();
}

function navigate(direction) {
  currentIndex = (currentIndex + direction + games.length) % games.length;
  clearVideo();
  populatePopup(games[currentIndex]);
}

function populatePopup(game) {
  /* Theme */
  popupPanel.setAttribute("data-theme", game.theme);

  /* Title */
  popupTitle.textContent = game.title;

  /* Genres */
  popupGenres.innerHTML = game.genres.map(function(g) {
    return '<span class="genre-tag">' + escapeHtml(g) + "</span>";
  }).join("");

  /* Description */
  popupDesc.textContent = game.desc;

  /* Counter */
  popupCurrent.textContent = currentIndex + 1;

  /* Video */
  buildVideo(game.video, game.title);

  /* ── Adjacent game info ── */
  var prevIdx = (currentIndex - 1 + games.length) % games.length;
  var nextIdx = (currentIndex + 1) % games.length;

  /* Footer nav cards */
  prevName.textContent = games[prevIdx].title;
  nextName.textContent = games[nextIdx].title;
  setThumb(prevThumb, games[prevIdx]);
  setThumb(nextThumb, games[nextIdx]);

  /* Side peeks */
  peekPrevName.textContent = games[prevIdx].title;
  peekNextName.textContent = games[nextIdx].title;
  setThumb(peekPrevImg, games[prevIdx]);
  setThumb(peekNextImg, games[nextIdx]);

  /* Reset scroll */
  popupPanel.scrollTop = 0;
}

/* ═══════════════════════════════════════════════════════════════════════
   VIDEO BUILDER
   Uses youtube-nocookie.com embed domain to reduce cookie-consent
   embedding blocks. If Error 153 still appears for a specific video,
   go to YouTube Studio > the video > More Options > Distribution
   and ensure "Allow embedding" is checked.
   ═══════════════════════════════════════════════════════════════════════ */
function buildVideo(video, title) {
  popupVideo.innerHTML = "";

  if (video.type === "placeholder") {
    var ph = document.createElement("div");
    ph.className = "popup-placeholder";
    ph.setAttribute("aria-label", "Video coming soon");
    var lbl = document.createElement("span");
    lbl.className   = "popup-placeholder-badge";
    lbl.textContent = "Video coming soon";
    ph.appendChild(lbl);
    popupVideo.appendChild(ph);

  } else if (video.type === "short") {
    popupVideo.appendChild(makePortraitWrap(video.id, title, true));

  } else if (video.type === "youtube") {
    popupVideo.appendChild(makeLandscapeWrap(video.id, title));

  } else if (video.type === "dual-short") {
    var dual = document.createElement("div");
    dual.className = "popup-video-dual";
    video.ids.forEach(function(id, i) {
      var col  = document.createElement("div");
      col.className = "popup-video-col";
      var lbl  = document.createElement("p");
      lbl.className   = "popup-video-label";
      lbl.textContent = video.labels[i];
      var wrap = makePortraitWrap(id, title + " " + video.labels[i], i === 0);
      col.appendChild(lbl);
      col.appendChild(wrap);
      dual.appendChild(col);
    });
    popupVideo.appendChild(dual);
  }
}

function makePortraitWrap(id, title, autoplay) {
  var wrap = document.createElement("div");
  wrap.className = "popup-video-wrap portrait";
  wrap.appendChild(makeIframe(id, title, autoplay ? 1 : 0));
  return wrap;
}

function makeLandscapeWrap(id, title) {
  var wrap = document.createElement("div");
  wrap.className = "popup-video-wrap landscape";
  wrap.appendChild(makeIframe(id, title, 1));
  return wrap;
}

function makeIframe(id, title, autoplay) {
  var iframe = document.createElement("iframe");
  /* youtube-nocookie.com is Google's privacy-enhanced embed domain and
     can bypass some cookie-consent embedding blocks. */
  iframe.src = "https://www.youtube-nocookie.com/embed/" + id
    + "?autoplay=" + autoplay
    + "&rel=0";
  iframe.title = title;
  iframe.setAttribute("frameborder", "0");
  iframe.setAttribute(
    "allow",
    "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  );
  iframe.setAttribute("referrerpolicy", "strict-origin-when-cross-origin");
  iframe.allowFullscreen = true;
  iframe.setAttribute("allowfullscreen", "");
  return iframe;
}

/* ═══════════════════════════════════════════════════════════════════════
   CARD CLICK HANDLERS
   ═══════════════════════════════════════════════════════════════════════ */
document.querySelectorAll(".game-card").forEach(function(card) {
  var index = parseInt(card.dataset.game, 10);
  card.addEventListener("click", function() { openPopup(index); });
  card.addEventListener("keydown", function(e) {
    if (e.key === "Enter" || e.key === " ") { e.preventDefault(); openPopup(index); }
  });
});

/* ═══════════════════════════════════════════════════════════════════════
   POPUP EVENT LISTENERS
   ═══════════════════════════════════════════════════════════════════════ */
popupClose.addEventListener("click", closePopup);
backdrop.addEventListener("click", closePopup);
btnPrev.addEventListener("click", function() { navigate(-1); });
btnNext.addEventListener("click", function() { navigate(1); });
peekPrev.addEventListener("click", function() { navigate(-1); });
peekNext.addEventListener("click", function() { navigate(1); });

/* Keyboard */
document.addEventListener("keydown", function(e) {
  if (popup.hasAttribute("hidden")) return;
  if (e.key === "Escape")      closePopup();
  if (e.key === "ArrowLeft")  { e.preventDefault(); navigate(-1); }
  if (e.key === "ArrowRight") { e.preventDefault(); navigate(1); }
});

/* Swipe on mobile */
(function() {
  var sx = 0, sy = 0;
  popupPanel.addEventListener("touchstart", function(e) {
    sx = e.touches[0].clientX;
    sy = e.touches[0].clientY;
  }, { passive: true });
  popupPanel.addEventListener("touchend", function(e) {
    var dx = e.changedTouches[0].clientX - sx;
    var dy = e.changedTouches[0].clientY - sy;
    if (Math.abs(dx) > 60 && Math.abs(dx) > Math.abs(dy) * 1.5) {
      navigate(dx < 0 ? 1 : -1);
    }
  }, { passive: true });
})();
