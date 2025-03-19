const dropdowns = document.querySelectorAll('.dropdown');
const roleText = document.querySelector('.role-text');
const rolerequired = document.getElementById("role-required")

dropdowns.forEach(dropdown => {
    const select = dropdown.querySelector('.select');
    const caret = dropdown.querySelector('.caret');
    const menu = dropdown.querySelector('.menu');
    const options = dropdown.querySelectorAll('.menu li');
    const selected = dropdown.querySelector('.selected');



    select.addEventListener('click', () => {

        select.classList.toggle('select-clicked');
        caret.classList.toggle('caret-rotate');
        menu.classList.toggle('menu-open');
    });

    options.forEach(option => {
        option.addEventListener('click', () => {
            selected.innerText = option.innerText;
            select.classList.remove('select-clicked');
            caret.classList.remove('caret-rotate');
            menu.classList.remove('menu-open');

            options.forEach(option => {
                option.classList.remove('active');
            });
            setRoleDesc(option)
            option.classList.add('active');
        });
    });
});

function setRoleDesc(option) {
    if (option.innerText == "Artist") {
        roleText.innerText = "Als Artist wirst du ein wichtiger Teil unseres Teams. ..."
        rolerequired.value = "Artist"
    } else if (option.innerText == "Developer") {
        roleText.innerText = "Als Developer wirst du ein wichtiger Teil unseres Teams. ..."
        rolerequired.value = "Developer"
    }

}

document.getElementById('form').addEventListener('submit', function (event) {
    event.preventDefault();

    if (this.checkValidity()) {
        console.log("Erfolgreich")
    } else {
        console.log("Fehler")
    }
})