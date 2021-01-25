window.addEventListener('load', () => {
    // Var : touches et zone de texte
    const letter = document.querySelectorAll('.letter');
    let textArea = document.querySelector('.zoneText');

    // Var : Maj & state
    const capslock = document.getElementById('LED');
    const shift = document.getElementById('shift');
    let isCaps = false;
    let isShift = false;

    // Var : Touche nightmode & espace, avec state
    const nightMode = document.getElementById('nightshift');
    const space = document.querySelector('.space-symbol');
    let isNight = false;

    // Var : Touche supprimer
    const suppr = document.getElementById('supprimer');

    // Radio button pour le switch azerty / qwerty
    const lang = document.querySelectorAll(".lang");

    // Faire écrire le clavier ( Lettres / chiffres / espace / carac spé, tout ce qui écrit)
    letter.forEach((value) => {
        value.addEventListener('click', (e) => {
            textArea.innerHTML += e.target.value;

            if(isShift === true) {
                capslock.classList.remove('focused');
                letter.forEach((key) => {
                    key.value = key.value.toLowerCase();
                }); 
                isCaps = false;
                isShift = false;
            }
        })
    })

    // Supprimer un caractère
    suppr.addEventListener('click', () => {
        textArea.innerHTML = textArea.innerHTML.slice(0, -1);
    })

    // Majuscule function
    capslock.addEventListener('click', () => {
        if (isCaps === false) {
            capslock.classList.add('focused');
            letter.forEach((key) => {
                key.value = key.value.toUpperCase();
            });
            isCaps = true;
        } else {
            capslock.classList.remove('focused');
            letter.forEach((key) => {
                key.value = key.value.toLowerCase();
            });
            isCaps = false;
        }
    })

    // shift function
    shift.addEventListener('click', () => {
        if (isCaps === false) {
            capslock.classList.add('focused');
            letter.forEach((key) => {
                key.value = key.value.toUpperCase();
            });
            isCaps = true;
            isShift = true;
        }
    })

    // NightMode function 
    nightMode.addEventListener('click', () => {
        if (isNight === false) {
            var link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = '../css/style-night.css';
            document.getElementsByTagName('HEAD')[0].appendChild(link);
            space.classList.add('focused');
            isNight = true;
        } else {
            document.getElementsByTagName('link')[5].remove();
            space.classList.remove('focused');
            isNight = false;
        }
    })


    // récupération de toutes les touches individuellements pour pouvoir faire des changements précis de clavier
    
    const aKey = document.querySelector('.aKey');
    const zKey = document.querySelector('.zKey');
    const eKey = document.querySelector('.eKey');
    const rKey = document.querySelector('.rKey');
    const tKey = document.querySelector('.tKey');
    const yKey = document.querySelector('.yKey');
    const uKey = document.querySelector('.uKey');
    const iKey = document.querySelector('.iKey');
    const oKey = document.querySelector('.oKey');
    const pKey = document.querySelector('.pKey');

    const qKey = document.querySelector('.qKey');
    const sKey = document.querySelector('.sKey');
    const dKey = document.querySelector('.dKey');
    const fKey = document.querySelector('.fKey');
    const gKey = document.querySelector('.gKey');
    const hKey = document.querySelector('.hKey');
    const jKey = document.querySelector('.jKey');
    const kKey = document.querySelector('.kKey');
    const lKey = document.querySelector('.lKey');
    const mKey = document.querySelector('.mKey');

    const wKey = document.querySelector('.wKey');
    const xKey = document.querySelector('.xKey');
    const cKey = document.querySelector('.cKey');
    const vKey = document.querySelector('.vKey');
    const bKey = document.querySelector('.bKey');
    const nKey = document.querySelector('.nKey');

    // let caracSpeciaux = ['+','*','/','=','&','_','€','£','¥','$','@','#','(',')','-','\'','"','~','<','>',];
    const caracSpe = document.getElementById('caracspe');
    let isCaracSpe = false;

    caracSpe.addEventListener('click', () => {
        if (isCaracSpe === false ) {
            //Changement de clavier pour les carac spéciaux

            aKey.setAttribute('value', '+');
            zKey.setAttribute('value', '*');
            eKey.setAttribute('value', '/');
            rKey.setAttribute('value', '=');
            tKey.setAttribute('value', '&');
            yKey.setAttribute('value', '_');
            uKey.setAttribute('value', '€');
            iKey.setAttribute('value', '£');
            oKey.setAttribute('value', '¥');
            pKey.setAttribute('value', '$');

            qKey.setAttribute('value', '@');
            sKey.setAttribute('value', '#');
            dKey.setAttribute('value', '(');
            fKey.setAttribute('value', ')');
            gKey.setAttribute('value', '-');
            hKey.setAttribute('value', '\'');
            jKey.setAttribute('value', '"');
            kKey.setAttribute('value', '~');
            lKey.setAttribute('value', '`');
            mKey.setAttribute('value', '^');

            wKey.setAttribute('value', '{');
            xKey.setAttribute('value', '}');
            cKey.setAttribute('value', '[');
            vKey.setAttribute('value', ']');
            bKey.setAttribute('value', '<');
            nKey.setAttribute('value', '>');

            caracSpe.setAttribute('value', '2/2');
            isCaracSpe = true;
        } else {
            // Clavier normal
            aKey.setAttribute('value', 'a');
            zKey.setAttribute('value', 'z');
            eKey.setAttribute('value', 'e');
            rKey.setAttribute('value', 'r');
            tKey.setAttribute('value', 't');
            yKey.setAttribute('value', 'y');
            uKey.setAttribute('value', 'u');
            iKey.setAttribute('value', 'i');
            oKey.setAttribute('value', 'o');
            pKey.setAttribute('value', 'p');

            qKey.setAttribute('value', 'q');
            sKey.setAttribute('value', 's');
            dKey.setAttribute('value', 'd');
            fKey.setAttribute('value', 'f');
            gKey.setAttribute('value', 'g');
            hKey.setAttribute('value', 'h');
            jKey.setAttribute('value', 'j');
            kKey.setAttribute('value', 'k');
            lKey.setAttribute('value', 'l');
            mKey.setAttribute('value', 'm');

            wKey.setAttribute('value', '{w');
            xKey.setAttribute('value', 'x');
            cKey.setAttribute('value', 'c');
            vKey.setAttribute('value', 'v');
            bKey.setAttribute('value', 'b');
            nKey.setAttribute('value', 'n');

            caracSpe.setAttribute('value', '1/2');
            isCaracSpe = false;
        }
    })


    // Mode QWERTY / AZERTY ( Prise en compte du changement de langue alors que la majuscule est activé)
    lang.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            if(e.target.id === "qwerty") {
                if(isCaps === false) {
                    aKey.setAttribute('value', 'q');
                    zKey.setAttribute('value', 'w');
                    qKey.setAttribute('value', 'a');
                    wKey.setAttribute('value', 'z');
                } else {
                    aKey.setAttribute('value', 'Q');
                    zKey.setAttribute('value', 'W');
                    qKey.setAttribute('value', 'A');
                    wKey.setAttribute('value', 'Z');
                }
                
            } else {
                if(isCaps === false) {
                    aKey.setAttribute('value', 'a');
                    zKey.setAttribute('value', 'z');
                    qKey.setAttribute('value', 'q');
                    wKey.setAttribute('value', 'w');
                } else {
                    aKey.setAttribute('value', 'A');
                    zKey.setAttribute('value', 'Z');
                    qKey.setAttribute('value', 'Q');
                    wKey.setAttribute('value', 'W');
                }   
            }
        })
    })
})