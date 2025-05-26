var accordionHeader = document.querySelectorAll("section");
var para = document.querySelectorAll("section p");
accordionHeader.forEach(function (header) {
    header.addEventListener("click", function () {
        var section = header;
        section.children[1].classList.toggle('hidden');
    });
});
window.addEventListener("DOMContentLoaded", function () {
    para.forEach(function (paragraph) {
        var p = paragraph;
        p.classList.add("hidden");
    });
});
