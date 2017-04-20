(() => {
    function showTab(event) {
        // Declare all variables
        let tabContents, tabLinks;

        // Get all elements with class="tabcontent" and hide them
        tabContents = document.querySelectorAll(".tab-content");
        tabContents.forEach(tabContent => {
            tabContent.classList.remove('tab-active');
        });

        // Get all elements with class="tablinks" and remove the class "active"
        tabLinks = document.querySelectorAll(".tab-link");
        tabLinks.forEach(tabLink => {
            tabLink.classList.remove('tab-link--active');
        });

        // Show the current tab, and add an "active" class to the button that opened the tab

        /*
        let tabContent = document.querySelector('tabId');
        tabContent.classList.add('tab-active');
        this.classList.add('tab-link--active');
        */

        let tabContentSections = document.querySelectorAll('.tab-content-section');
        let tabContent = tabContentSections.querySelector('.tab-content');
        this.classList.add('tab-active');
    }
    document.addEventListener('DOMContentLoaded',() => {
        document.querySelectorAll('.tab-link').forEach(tabLink => {
            tabLink.addEventListener('click', showTab)
        });
    });
})();

