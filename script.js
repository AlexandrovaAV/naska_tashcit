let burgerElement = document.getElementById('burger');
let burgerBackgroundElement = document.querySelector('.burger-background');
let menuElement = document.getElementById('menu');
let closeElement = document.getElementById('close');
let menuItemElement = document.querySelectorAll('.menu__item a');
let isActiveBurger;

burgerElement.addEventListener('click', function (e) {
    isActiveBurger = menuElement.classList.toggle('menu__active');

    if (isActiveBurger) {
        burgerBackgroundElement.style.display = 'flex';
        closeElement.onclick = () => {
            closeBurger();
        }
    }
});

burgerBackgroundElement.addEventListener('click', function () {
    closeBurger();
});

for (let i = 0; i < 3; i++) {
    menuItemElement[i].addEventListener('click', () => {
        if (isActiveBurger) {
            closeBurger();
        }
    });
}

function closeBurger() {
    menuElement.classList.toggle('menu__active');
    isActiveBurger = false;
    burgerBackgroundElement.style.display = 'none';
}

let copyTimeout = undefined;

function copyCommand(command) {
    success.style.transform = 'scale(0)';
    setTimeout(function () {
        clearTimeout(copyTimeout);
        showCopyCommand(command);
    }, 30)
}

function showCopyCommand(command) {
    success.style.transform = 'scale(1)';
    copyTimeout = setTimeout(function () {
        success.style.transform = 'scale(0)';
    }, 1300);

    navigator.clipboard.writeText(command.innerText).then(function () {
        successText.innerText = 'Скопировано!';
    }, function () {
        successText.innerText = 'Не удалось скопировать!';
    });
}

let success = document.getElementById('success');
let successText = document.querySelector('.success__text');
let commandsElement = document.querySelectorAll('.commands__text-title');

for (let i = 0; i < commandsElement.length; i++) {
    commandsElement[i].addEventListener('click', function () {
        copyCommand(commandsElement[i]);
    });
}

