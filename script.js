// Navbar toggle
const toggleMenu = document.getElementById("toggle-menu");
const navLinks = document.getElementById("nav-links");

toggleMenu.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Scroll to contact (example interaction)
function scrollToContact() {
  alert("Contact section coming soon!");
}

//dark mode toggle 
const themeBtn = 
document.getElementById("toggle-theme");

themeBtn.addEventListener("click", () =>
{
    document.body.classList.toggle("dark");

    //toggle emoji icon
    themeBtn.textContent =
    
document.body.classList.contains("dark")
? "🌝" : "🌚";
}
);