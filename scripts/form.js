const dropdowns = document.querySelectorAll('.dropdown');
const roleText = document.querySelector('.role-text');
const errorText = document.getElementById('error-text');
var changedSelection = false;

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
            changedSelection = true;
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
    } else if (option.innerText == "Developer") {
        roleText.innerText = "Als Developer wirst du ein wichtiger Teil unseres Teams. ..."
    }

}

document.getElementById('form').addEventListener('submit', function (event) {
    event.preventDefault();

    if (this.checkValidity()) {
        if (changedSelection) {
            console.log("Erfolgreich")
            errorText.innerText = ""
        } else {
            errorText.innerText = "Du musst vorher eine Stelle auswählen!"
        }
    } else {
        console.log("Fehler")
    }
})