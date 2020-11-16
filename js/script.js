LEDcounter = 0;

$('#LED').on('click', function() {

    LEDcounter++;

    $('#LED').addClass('focused')
    $('.letter').val(function () {
        return this.value.toUpperCase();
    })

    if(LEDcounter === 2) {
        $('#LED').removeClass('focused')
        $('.letter').val(function () {
            return this.value.toLowerCase();
        })
        LEDcounter = 0;
    }


    

})

nightCounter = 0;

$('#nightshift').on('click', function() {

    // console.log(nightCounter)

    nightCounter++;

    //NUIT
    // Changement couleur
    $('#clavier input,#clavier button').css({
        'backgroundColor':'#1e232b',
        'color': '#eddbb7',
    })
    $('body, div.container').css({
        'backgroundColor':'#b7cced'
    })

     // Couleur des icones
    $('section .space-symbol').addClass('focused')
    $('section #nightshift').css({
        'backgroundImage':'url(../img/moon-beige.svg'
    })
    $('section #shift').css({
        'backgroundImage':'url(../img/shift-beige.svg'
    })
    $('section #github').css({
        'backgroundImage':'url(../img/github-beige.svg'
    })
    $('section #portfolio').css({
        'backgroundImage':'url(../img/world-wide-web-beige.svg'
    })
    $('section #supprimer').css({
        'backgroundImage':'url(../img/left-back-straight-arrow-beige.svg'
    })
    $('section #entree').css({
        'backgroundImage':'url(../img/enter-arrow-beige.svg'
    })


    //JOUR
    if(nightCounter === 2) {
        // Changement couleur
        $('body, div.container').css({
            'backgroundColor':'#1e232b'
        });
        $('#clavier input,#clavier button').css({
            'backgroundColor':'#eddbb7',
            'color': '#000',
        });

        // Couleur des icones
        $('section #nightshift').css({
            'backgroundImage':'url(../img/moon.svg'
        })
        $('section #shift').css({
            'backgroundImage':'url(../img/shift.svg'
        })
        $('section #github').css({
            'backgroundImage':'url(../img/github.svg'
        })
        $('section #portfolio').css({
            'backgroundImage':'url(../img/world-wide-web.svg'
        })
        $('section #supprimer').css({
            'backgroundImage':'url(../img/left-back-straight-arrow.svg'
        })
        $('section #entree').css({
            'backgroundImage':'url(../img/enter-arrow.svg'
        })
        $('section .space-symbol').removeClass('focused')
        nightCounter = 0;
    }


    

})
