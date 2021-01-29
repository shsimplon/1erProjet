const list = document.querySelectorAll('nav > ul > li > a');
const hrefLocation = window.location.href;

list.forEach(element => {
    let href = element.firstChild.data;

    if (hrefLocation.includes(href)) {
        element.classList.add("active")
    } else {
        element.classList.remove("active")
    }

})