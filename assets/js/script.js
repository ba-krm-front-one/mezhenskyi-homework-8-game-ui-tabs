(() => {
    function showTab(event) {
        // Declare all variables
        let tabs, tabLinks;

        // Get all elements with class="tabcontent" and hide them
        tabs = document.querySelectorAll(".tab-content");
        tabs.forEach(tab => {
            tab.classList.remove('tab-active');
        });

        // Get all elements with class="tablinks" and remove the class "active"
        tabLinks = document.querySelectorAll(".tab-link");
        tabLinks.forEach(tabLink => {
            tabLink.classList.remove('tab-link--active');
        });

        // Show the current tab, and add an "active" class to the button that opened the tab

        let tabContent = this.parentNode.querySelector('.tab-content');
        tabContent.classList.add('tab-active');
        this.classList.add('tab-link--active');
    }
    document.addEventListener('DOMContentLoaded',() => {
        document.querySelectorAll('.tab-link').forEach(tabLink => {
            tabLink.addEventListener('click', showTab)
        });
    });
})();