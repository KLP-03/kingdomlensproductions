function showPage(id){
  document.querySelectorAll(".page").forEach(p=>p.classList.remove("active"));
  document.getElementById(id).classList.add("active");
  window.scrollTo({top:0,behavior:"smooth"});
  // Close mobile nav if open
  const mobileNav = document.getElementById("mobileNav");
  if(mobileNav.classList.contains("open")) toggleMobileNav();
}

function toggleMobileNav(){
  const nav = document.getElementById("mobileNav");
  const btn = document.querySelector(".nav-hamburger");
  const isOpen = nav.classList.toggle("open");
  btn.classList.toggle("open", isOpen);
  btn.setAttribute("aria-expanded", isOpen);
  nav.setAttribute("aria-hidden", !isOpen);
  // Prevent body scroll while nav is open
  document.body.style.overflow = isOpen ? "hidden" : "";
}

function filterPort(type, btn){
  document.querySelectorAll(".filter-btn").forEach(b=>b.classList.remove("active"));
  btn.classList.add("active");
  document.querySelectorAll(".port-item").forEach(item=>{
    item.style.display = (type==="all" || item.dataset.type===type) ? "block" : "none";
  });
}

function openVideo(url, title, type, client){
  if(url && url !== "https://vimeo.com/"){
    window.open(url, "_blank");
  } else {
    alert("Add your Vimeo/YouTube link for: " + title);
  }
}

function handleApply(e){
  e.preventDefault();
  const btn = e.target.querySelector(".form-submit");
  btn.textContent = "Application Submitted ✓";
  btn.style.background = "#2a4a2a";
  btn.style.color = "#7fc47f";
  btn.disabled = true;
  setTimeout(()=>{
    window.open("https://calendly.com/kingdomlensproductions/30min", "_blank");
  }, 1500);
}

// Close mobile nav on Escape key
document.addEventListener("keydown", function(e){
  if(e.key === "Escape"){
    const nav = document.getElementById("mobileNav");
    if(nav && nav.classList.contains("open")) toggleMobileNav();
  }
});