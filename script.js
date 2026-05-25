var menuButton = document.getElementById('menu-button');
var navlinks = document.getElementById('nav-links');
menuButton.addEventListener('click', () => {
    navlinks.classList.toggle('active')
});


var tabLinks = document.getElementsByClassName('tab-links');
var tabContents = document.getElementsByClassName('tab-contents');
function openTab(tabName) {
    for (tabLink of tabLinks) {
        tabLinks.classList.remove('active-links')
    }
    for (tabContent of tabContents) {
        tabContent.classList.remove('active-tab')
    }
    event.currentTarget.classList.add("active-links")
}