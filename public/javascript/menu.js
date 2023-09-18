const menu = document.querySelector(".menu");
var clickCount = 0;

menu.onclick = function() {
    const navBarItems = document.querySelectorAll("nav ul li:not(:first-child)");
    const socialNavList = document.querySelectorAll(".social-nav-list");
    const nav = document.querySelector("nav");
    if (clickCount % 2 == 0) {
        navBarItems.forEach(function(item) {
            item.style.display = "block";
          });
          socialNavList.forEach(function(item) {
            item.style.display = "inline";
        });
        nav.style.height = "100%";
        nav.style.backgroundColor="var(--sec-bg-color)";
        clickCount = 1;
    } else {
        navBarItems.forEach(function(item) {
            item.style.display = "none";
          });
        nav.style.height = "8rem";
        nav.style.backgroundColor="transparent";
        clickCount = 0;
    }
}

