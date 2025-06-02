var accordionHeader = document.querySelectorAll("section");
var para = document.querySelectorAll("section p");
accordionHeader.forEach(function (header) {
    header.addEventListener("click", function () {
        var section = header;
        var title = section.children;
        var toggleIcon = title[0].children[1];
        if (toggleIcon.classList.contains("icon-plus")) {
            toggleIcon.classList.replace("icon-plus", "icon-minus");
            section.children[1].classList.replace("active", "non-active");
        }
        else {
            toggleIcon.classList.replace("icon-minus", "icon-plus");
            section.children[1].classList.replace("non-active", "active");
        }
    });
});
window.addEventListener("DOMContentLoaded", function () {
    para.forEach(function (paragraph) {
        var p = paragraph;
        p.classList.add("active");
    });
});
