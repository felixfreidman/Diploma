const contactsSection = document.querySelector('.about-container--contacts');
const librarySection = document.querySelector('.about-container--library');
const resourcesSection = document.querySelector('.about-container--resources');
const controlsLink = document.querySelectorAll('.about-controls__link');

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