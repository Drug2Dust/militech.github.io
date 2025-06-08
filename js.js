document.addEventListener("DOMContentLoaded", () => 
{
    const sections = document.querySelectorAll("section");
        sections.forEach(section => {
            section.classList.add("visible");

        });

    window.addEventListener("scroll", revealSections);
    revealSections();
});


function toggleDetails(id) 
{
    const details = document.getElementById(id);
    if (details.style.display === "none" || details.style.display === "") {
        details.style.display = "block";
    } else {
        details.style.display = "none";
    }
}


