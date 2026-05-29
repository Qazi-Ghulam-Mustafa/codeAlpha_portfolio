var menuButton = document.getElementById('menu-button');
var navlinks = document.getElementById('nav-links');

menuButton.addEventListener('click', () => {
    navlinks.classList.toggle('active')
});


var tabLinks = document.getElementsByClassName('tab-links');
var tabContents = document.getElementsByClassName('tab-contents');
function openTab(tabName, event) {
    //Remove active class from all tab buttons
    for (var tabLink of tabLinks) {
        tabLink.classList.remove('active-links')
    }
    //remove active class from all tab contents
    for (var tabContent of tabContents) {
        tabContent.classList.remove('active-tab')
    }
    // all active class to clicked tab button
    event.currentTarget.classList.add("active-links")
    // Show selected tab content
    document.getElementById(tabName).classList.add("active-tab")
}

