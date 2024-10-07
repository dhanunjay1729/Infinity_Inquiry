document.getElementById("dropdownlist").onchange = function() {
    var url = this.value;
    if (url) {
        window.location.href = url;
    }
};
document.addEventListener("DOMContentLoaded", function() {
    const newsLink = document.querySelector('a[href="#news"]');

    newsLink.addEventListener("click", function(event) {
        event.preventDefault();
        const newsSection = document.querySelector(".news-heading");
        newsSection.scrollIntoView({ behavior: "smooth" });
    });
});