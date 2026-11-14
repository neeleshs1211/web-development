
const menuToggle = document.getElementById("menuToggle");
const mobileDrawer = document.getElementById("mobileDrawer");
const closeDrawer = document.getElementById("closeDrawer");
const drawerOverlay = document.getElementById("drawerOverlay");

function openMenu() {
    mobileDrawer.classList.add("active");
    drawerOverlay.classList.add("active");
    menuToggle.setAttribute("aria-expanded", "true");
}

function closeMenu() {
    mobileDrawer.classList.remove("active");
    drawerOverlay.classList.remove("active");
    menuToggle.setAttribute("aria-expanded", "false");
}

menuToggle.addEventListener("click", openMenu);
closeDrawer.addEventListener("click", closeMenu);
drawerOverlay.addEventListener("click", closeMenu);

// Close menu after clicking a link
mobileDrawer.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", closeMenu);
});
