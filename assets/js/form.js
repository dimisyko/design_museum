export default function form() {
    $(document).ready(function () {
        $('.flecheUp i').click(function () {
            $("html, body").animate({
                scrollTop: 0
            }, 80);
        })
        $('.cta').click(function () {
            $(this).fadeOut();
            $('form').fadeIn();
        })
        var nom = $('#nom')
        var prenom = $('#prenom')
        var email = $('#email')
        var confirMail = $('#emailconfirm')
        var symbole = /^(([^<>()[\]\\.,;:#\s@"]+(\.[^<>()[\]\\.,;:#\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

        $('form').submit(function (e) {
            e.preventDefault()

            if (nom.val() == '' || prenom.val() == '' || email.val() == '' || confirMail.val() == '') {
                $('.erreur').text('Les champs sont vides')

            } else if (email.val() != confirMail.val()) {
                $('.erreur').text('Les emails ne sont pas identiques')

            } else if (!email.val().match(symbole)) {
                $('.erreur').text("La syntaxe de l'email n'est pas correct")
            } else {
                $.ajax({
                    url: 'message_ajax.php',
                    type: 'POST',
                    dataType: 'html',
                    success: function (message) {
                        $('.erreur').html(message)
                        gsap.to('fieldset>div,form p', {
                            duration: 0.8,
                            stagger: 0.2,
                            y: '-100%',
                            opacity: 0,
                            delay: 0.5
                        })
                        setTimeout(function () {
                            $('form').fadeOut()
                        }, 2000);
                    }
                })
            }
        })
    })
}