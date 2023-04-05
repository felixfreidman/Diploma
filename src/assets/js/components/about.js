if (document.querySelector('.about-container--contacts')) {
    const contactsSection = document.querySelector('.about-container--contacts');
    const librarySection = document.querySelector('.about-container--library');
    const resourcesSection = document.querySelector('.about-container--resources');
    const controlsLink = document.querySelectorAll('.about-controls__link');
    const controlsLinkBase = document.querySelector('.about-controls__link--base');
    const controlsLinkLibrary = document.querySelector('.about-controls__link--library');
    const controlsLinkResources = document.querySelector('.about-controls__link--resources');

    const address = window.location.href;
    if (address.includes('#library')) {

        closeSection();
        librarySection.classList.remove('js-hide-opacicity');
        controlsLink.forEach(control => {
            control.classList.remove('about-controls__link--active');
        });
        controlsLinkLibrary.classList.add('about-controls__link--active');
    } else if (address.includes('#resorces')) {
        closeSection();
        resourcesSection.classList.remove('js-hide-opacicity');
        controlsLink.forEach(control => {
            control.classList.remove('about-controls__link--active');
        });
        controlsLinkResources.classList.add('about-controls__link--active');
    } else {
        closeSection();
        contactsSection.classList.remove('js-hide-opacicity');
        controlsLink.forEach(control => {
            control.classList.remove('about-controls__link--active');
        });
        controlsLinkBase.classList.add('about-controls__link--active');
    }
    controlsLink.forEach(control => {
        control.addEventListener('click', () => {
            openSection(control);
            shutControls(control);
            control.classList.add('about-controls__link--active');
        });
    })

    function openSection(node) {
        const textValue = node.textContent;
        switch (textValue) {
            case 'Контакты':
                closeSection();
                contactsSection.classList.remove('js-hide-opacicity');
                break;
            case 'О библиотеке':
                closeSection();
                librarySection.classList.remove('js-hide-opacicity');
                break;
            case 'Наши ресурсы':
                closeSection();
                resourcesSection.classList.remove('js-hide-opacicity');
                break;
        }
    }

    function closeSection() {
        contactsSection.classList.add('js-hide-opacicity');
        librarySection.classList.add('js-hide-opacicity');
        resourcesSection.classList.add('js-hide-opacicity');
    }

    function shutControls(node) {
        controlsLink.forEach(control => {
            control.classList.remove('about-controls__link--active');
        });
    }
}