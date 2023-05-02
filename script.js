const toggleBtn = document.querySelector('.toggle_btn')
const toggleBtnIcon = document.querySelector('.toggle_btn i')
const dropDownMenu = document.querySelector('.dropdown_menu')
// const heroSection = document.getElementById('hero_section')

toggleBtn.onclick = function () {
    dropDownMenu.classList.toggle('open')
    // heroSection.classList.toggle('menu-open')
    const isOpen = dropDownMenu.classList.contains('open')

    toggleBtnIcon.classList = isOpen
        ? 'fa-solid fa-xmark'
        : 'fa-solid fa-bars'
}