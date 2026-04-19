function showPage(id) {
  document.querySelectorAll(".yt-thumb").forEach(function(thumb) {
    resetYT(thumb);
  });
  document.querySelectorAll(".page").forEach(function(p) {
    p.classList.remove("active");
  });
  document.getElementById(id).classList.add("active");
  window.scrollTo({ top: 0, behavior: "smooth" });
  closeMobileNav();
}

function closeMobileNav() {
  var nav = document.getElementById("mobileNav");
  var btn = document.querySelector(".nav-hamburger");
  nav.classList.remove("open");
  btn.classList.remove("open");
  btn.setAttribute("aria-expanded", "false");
  nav.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

function toggleMobileNav() {
  var nav = document.getElementById("mobileNav");
  if (nav.classList.contains("open")) {
    closeMobileNav();
  } else {
    var btn = document.querySelector(".nav-hamburger");
    nav.classList.add("open");
    btn.classList.add("open");
    btn.setAttribute("aria-expanded", "true");
    nav.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }
}

function loadYT(el) {
  // Stop any currently playing video first
  document.querySelectorAll(".yt-thumb").forEach(function(thumb) {
    if (thumb !== el) resetYT(thumb);
  });
  var vid = el.dataset.vid;
  var iframe = document.createElement("iframe");
  iframe.src = "https://www.youtube.com/embed/" + vid + "?autoplay=1&rel=0&playsinline=1";
  iframe.allow = "autoplay; encrypted-media; fullscreen; picture-in-picture";
  iframe.allowFullscreen = true;
  el.innerHTML = "";
  el.appendChild(iframe);
  el.onclick = null;
}

function resetYT(thumb) {
  if (thumb && thumb.querySelector("iframe")) {
    var vid = thumb.dataset.vid;
    thumb.innerHTML = '<img src="https://img.youtube.com/vi/' + vid + '/maxresdefault.jpg" loading="lazy"><div class="yt-play"><svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg></div>';
    thumb.onclick = function() { loadYT(this); };
  }
}

function filterPort(type, btn) {
  document.querySelectorAll(".filter-btn").forEach(function(b) {
    b.classList.remove("active");
  });
  btn.classList.add("active");
  document.querySelectorAll(".port-entry").forEach(function(entry) {
    var isVisible = (type === "all" || entry.dataset.type === type);
    if (!isVisible) {
      resetYT(entry.querySelector(".yt-thumb"));
      entry.style.display = "none";
    } else {
      entry.style.display = "";
    }
  });
}

function openVideo(url, title) {
  if (url && url !== "https://vimeo.com/") {
    window.open(url, "_blank");
  } else {
    alert("Add your Vimeo/YouTube link for: " + title);
  }
}

function handleApply(e) {
  e.preventDefault();
  var btn = e.target.querySelector(".form-submit");
  btn.textContent = "Application Submitted";
  btn.style.background = "#2a4a2a";
  btn.style.color = "#7fc47f";
  btn.disabled = true;
  setTimeout(function() {
    window.open("https://calendly.com/kingdomlensproductions/30min", "_blank");
  }, 1500);
}

document.addEventListener("keydown", function(e) {
  if (e.key === "Escape") {
    var nav = document.getElementById("mobileNav");
    if (nav && nav.classList.contains("open")) {
      closeMobileNav();
    }
  }
});