window.addEventListener('load', () => {
    /* Ali Asian - https://www.youtube.com/watch?v=KIE3th7lWxI */
    const blurDivs = document.querySelectorAll(".blur-load");

    blurDivs.forEach(div => {
        const img = div.querySelector("img");
        const loaded = () => div.classList.add("loaded");
    
        if (img.complete) loaded();
        else img.addEventListener("load", loaded);
    });
});
