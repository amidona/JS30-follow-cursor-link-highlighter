const triggers = document.querySelectorAll ('a');
const highlight = document.createElement('span');
highlight.classList.add('highlight');
document.body.append(highlight);

//function to create a highlight over our links that follows the users mouse around the page
function highlightLink() {
    const linkCoords = this.getBoundingClientRect(); //gives your the coordinates (height, width, etc.)
    //console.log(linkCords);
    const coords = {
        width: linkCoords.width,
        height: linkCoords.height,
        top: linkCoords.top + window.scrollY, 
        left: linkCoords.left + window.scrollX,
        //top and left one are needed otherwise when the user scrolls, the highlight become offset by the distance they've scrolled
    }

    highlight.style.width = `${coords.width}px`;
    highlight.style.height = `${coords.height}px`;
    highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`;
};

triggers.forEach(a => a.addEventListener("mouseenter", highlightLink));