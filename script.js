const menuItems = document.querySelectorAll(".menu-item");
const sections = document.querySelectorAll(".menu-section");

menuItems.forEach(item => {

    item.addEventListener("click", () => {

        menuItems.forEach(btn => {
            btn.classList.remove("active");
        });

        sections.forEach(section => {
            section.classList.remove("active-section");
        });

        item.classList.add("active");

        const target = item.getAttribute("data-target");

        document.getElementById(target).classList.add("active-section");

    });

});