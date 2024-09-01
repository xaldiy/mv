function toggleDescription(pageId) {
    var descriptionSection = document.getElementById(pageId).querySelector('.description');
    var showButton = document.getElementById(pageId).querySelector('.show-button');
    var hideButton = document.getElementById(pageId).querySelector('.hide-button');

    descriptionSection.classList.toggle('show');
    showButton.style.display = descriptionSection.classList.contains('show') ? 'none' : 'block';
    hideButton.style.display = descriptionSection.classList.contains('show') ? 'block' : 'none';
}

    function openNav() {
        document.getElementById("mySidenav").style.width = "250px";
    }

    function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
    }

    function showPage(pageId) {
        var pages = document.querySelectorAll('.page');
        for (var i = 0; i < pages.length; i++) {
            pages[i].style.display = 'none';
        }
        document.getElementById(pageId).style.display = 'block';
        closeNav();
    }

    function toggleDropdown(submenuId) {
        var dropdownContainer = document.getElementById(submenuId);
        dropdownContainer.style.display = dropdownContainer.style.display === "block" ? "none" : "block";
    }