// let keyboardCharCodes =
// [113, 119, 101, 114, 116, 121, 117, 105, 111, 112, 91, 93,
// 97, 115, 100, 102, 103, 104, 106, 107, 108, 59, 39,
// 122, 120, 99, 118, 98, 110, 109, 44, 46, 47];
// document.onkeypress = function (event) {
//     keyboardCharCodes.push(event.charCode)
//     console.log(keyboardCharCodes);
//
// }
//
// const showKeyboard = (keyboardCharCodes) => {
//     let out = '';
//     for (let i = 0; i < keyboardCharCodes.length; i++) {
//         // if (i===12) out+=`<br>`
//         out += `<div class="keyboard__keys_key key" data="${keyboardCharCodes[i]}">${String.fromCharCode(keyboardCharCodes[i])}</div>`
//     }
//     document.querySelector('.keyboard__keys').innerHTML = out;
// }
//
// showKeyboard(keyboardCharCodes);
//
// const keyLayout = [
//     "`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace",
//     "q", "w", "e", "r", "t", "y", "u", "i", "o", "p",
//     "caps", "a", "s", "d", "f", "g", "h", "j", "k", "l", "enter",
//     "done", "z", "x", "c", "v", "b", "n", "m", ",", ".", "?",
//     "space"
// ];
//event.key

// const keysLayout = [
//     {
//         code: 'KeyA',
//         eng: 'a',
//         rus: 'ф'
//     },
//     {
//         code: 'KeyS',
//         eng: 's',
//         rus: 'ы'
//     }
// ];
const keysLayout = [
    {code: 'Backquote', eng: '`', rus: 'ё', newRow: true},
    {code: 'Digit1', eng: '1'},
    {code: 'Digit2', eng: '2'},
    {code: 'Digit3', eng: '3'},
    {code: 'Digit4', eng: '4'},
    {code: 'Digit5', eng: '5'},
    {code: 'Digit6', eng: '6'},
    {code: 'Digit7', eng: '7'},
    {code: 'Digit8', eng: '8'},
    {code: 'Digit9', eng: '9'},
    {code: 'Digit0', eng: '0'},
    {code: 'Minus', eng: '-'},
    {code: 'Equal', eng: '='},
    {code: 'Backspace', eng: 'backspace', spec: true, wide: true},
    {code: 'Tab', eng: 'tab', spec: true, newRow: true},
    {code: 'KeyQ', eng: 'q', rus: 'й'},
    {code: 'KeyW', eng: 'w', rus: 'ц'},
    {code: 'KeyE', eng: 'e', rus: 'у'},
    {code: 'KeyR', eng: 'r', rus: 'к'},
    {code: 'KeyT', eng: 't', rus: 'е'},
    {code: 'KeyY', eng: 'y', rus: 'н'},
    {code: 'KeyU', eng: 'u', rus: 'г'},
    {code: 'KeyI', eng: 'i', rus: 'ш'},
    {code: 'KeyO', eng: 'o', rus: 'щ'},
    {code: 'KeyP', eng: 'p', rus: 'з'},
    {code: 'BracketLeft', eng: '[', rus: 'х'},
    {code: 'BracketRight', eng: ']', rus: 'ъ'},
    {code: 'Backslash', eng: '\\'},
    {code: 'Delete', eng: 'del', spec: true},
    {code: 'CapsLock', eng: 'caps lock', spec: true, wide: true, newRow: true},
    {code: 'KeyA', eng: 'a', rus: 'ф'},
    {code: 'KeyS', eng: 's', rus: 'ы'},
    {code: 'KeyD', eng: 'd', rus: 'в'},
    {code: 'KeyF', eng: 'f', rus: 'а'},
    {code: 'KeyG', eng: 'g', rus: 'п'},
    {code: 'KeyH', eng: 'h', rus: 'р'},
    {code: 'KeyJ', eng: 'j', rus: 'о'},
    {code: 'KeyK', eng: 'k', rus: 'л'},
    {code: 'KeyL', eng: 'l', rus: 'д'},
    {code: 'Semicolon', eng: ';', rus: 'ж'},
    {code: 'Quote', eng: "'", rus: 'э'},
    {code: 'Enter', eng: 'enter', spec: true, wide: true},
    {code: 'ShiftLeft', eng: 'shift', spec: true, wide: true, newRow: true},
    {code: 'KeyZ', eng: 'z', rus: 'я'},
    {code: 'KeyX', eng: 'x', rus: 'ч'},
    {code: 'KeyC', eng: 'c', rus: 'с'},
    {code: 'KeyV', eng: 'v', rus: 'м'},
    {code: 'KeyB', eng: 'b', rus: 'и'},
    {code: 'KeyN', eng: 'n', rus: 'т'},
    {code: 'KeyM', eng: 'm', rus: 'ь'},
    {code: 'Comma', eng: ',', rus: 'б'},
    {code: 'Period', eng: '.', rus: 'ю'},
    {code: 'Slash', eng: '/', rus: '.'},
    {code: 'ArrowUp', eng: '▲'},
    {code: 'ShiftRight', eng: 'shift', spec: true, wide: true},
    {code: 'ControlLeft', eng: 'ctrl', spec: true, newRow: true},
    {code: 'MetaLeft', eng: 'win', spec: true},
    {code: 'AltLeft', eng: 'alt', spec: true},
    {code: 'Space', eng: ' ', extra_wide: true},
    {code: 'AltRight', eng: 'alt'},
    {code: 'ArrowLeft', eng: '◄'},
    {code: 'ArrowDown', eng: '▼'},
    {code: 'ArrowRight', eng: '►'},
    {code: 'ControlRight', eng: 'ctrl', spec: true}
];

// let capsLock = false;
let langEng = true;

const renderKeyboard = () => {
    const keyboardKeys = document.querySelector('.keyboard__keys');

    let keyboardRow = document.createElement('div');
    keysLayout.forEach(key => {
        if (key.newRow) {
            keyboardRow = document.createElement('div');
            keyboardRow.className = 'keyboard__row';
            keyboardKeys.append(keyboardRow);
        }

        const keyElement = document.createElement('div');

        keyElement.className = 'keyboard__keys_key key';
        // для клавиш подлиннее
        if (key.wide) keyElement.classList.add('key_wide');
        if (key.extra_wide) keyElement.classList.add('key_extra-wide');
        // добавляем класс key-abc, если это буква
        if (key.code.indexOf('Key') !== -1) keyElement.classList.add('key-abc');
        //
        if (key.spec) keyElement.classList.add('key_spec');
        keyElement.setAttribute('id', key.code);
        keyElement.innerHTML = key.eng;
        keyboardRow.append(keyElement);

        // switch (key) {
        //     case "backspace":
    })
};

const changeCapsLock = (capsLock = false) => {
    // const keysABC = document.querySelectorAll('.key-abc');
    const keysABC = document.querySelectorAll('.key');
    keysABC.forEach(elem => {
        capsLock ? elem.innerHTML = elem.innerHTML.toUpperCase() : elem.innerHTML = elem.innerHTML.toLowerCase()
    })
};

const changeLang = (en = true) => {
    let ruKey;
    const keys = document.querySelectorAll('.key');
    keys.forEach(elem => {
        ruKey = keysLayout.find(item => item.code === elem.id);
        if (ruKey.rus) {
            en ? elem.innerHTML = ruKey.eng : elem.innerHTML = ruKey.rus;
        }
    })
};

const renderPage = () => {
    document.body.innerHTML = `
    <div class="wrapper">
        <div class="keyboard keyboard__container">
            <h1 class="keyboard__name">Virtual Keyboard</h1>
            <textarea name="" id="" class="keyboard__text" autofocus></textarea>
            <div class="keyboard__keys">
            </div>
            <div class="keyboard__note">
                <p>Клавиатура создана в операционной системе Windows</p>
                <p>Для переключения языка комбинация: Ctrl + Shift</p>
            </div>
        </div>
    </div>`;
    //-----------------------------------------------------------
    renderKeyboard();
};
//==============================================================================================================
// window.addEventListener("DOMContentLoaded", renderPage());

renderPage();

if (localStorage.getItem('lang') === 'ru') {
    langEng = false;
    changeLang(langEng);
}

const keyboardText = document.querySelector('.keyboard__text');

const keyActiveAdd = (key) => {
    if (key.id === 'CapsLock') {
        key.classList.toggle('active');
        changeCapsLock(key.classList.contains('active'));
    } else key.classList.add('active');
}

const keyActiveRem = (key) => {
    if (key && key.id !== 'CapsLock') key.classList.remove('active');
}

document.addEventListener('keydown', (event) => {
    const key = document.querySelector(`#${event.code}`);
    if (!key) return;

    keyboardText.focus();
    keyActiveAdd(key);

    if (key.id === 'Tab') event.preventDefault();

    // if (key.id == 'MetaLeft') key.classList.remove('active');

//    смена языка
    if (((event.code === 'ShiftLeft' || event.code === 'ShiftRight') && event.ctrlKey) || ((event.code === 'ControlLeft' || event.code === 'ControlRight') && event.shiftKey)) {
        langEng = !langEng;
        langEng ? localStorage.setItem('lang', 'en') : localStorage.setItem('lang', 'ru');
        changeLang(langEng);
    }
});

document.addEventListener('keyup', (event) => {
    const key = document.querySelector(`#${event.code}`);
    keyActiveRem(key);
    // if (key && key.id !== 'CapsLock') key.classList.remove('active');
});

document.querySelector('.keyboard__keys').addEventListener('mousedown', (event) => {
    const key = event.target;
    if (key.closest('.key')) {
        keyActiveAdd(key);
        if (!key.classList.contains('key_spec')) keyboardText.value += key.innerHTML;
        else {
            // console.log(key.id)
            // let str = keyboardText.value;
            switch (key.id) {
                case 'Enter':
                    keyboardText.value += `\n`;
                    break;
                case 'Backspace':
                    keyboardText.value = keyboardText.value.slice(0, keyboardText.value.length - 1);
                    break;
                case 'Delete':
                    if (keyboardText.value.length > keyboardText.selectionStart) {
                        // console.log(keyboardText.selectionStart)
                        keyboardText.value = keyboardText.value.slice(0, keyboardText.selectionStart - 1) + keyboardText.value.slice(keyboardText.selectionStart, keyboardText.length)
                    }
                    keyboardText.focus();
                    break;
            }
        }

    }
})

document.querySelector('.keyboard__keys').addEventListener('mouseup', (event) => {
    document.querySelectorAll('.key').forEach((key) => {
        keyActiveRem(key);
    })
});