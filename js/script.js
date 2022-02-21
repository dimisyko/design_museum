(function () {
    function animGsap() {
        tlInter()
        let animHome = gsap.timeline({
            scrollTrigger: {
                trigger: '.home',
                start: 'top top',
                pin: true,
                scrub: true
            }
        })
        animHome.to('.imgClip', {
            clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)"
        })
        animHome.from('h1, .scroll-down', {
            opacity: 1,
        }, "0.2")
        let scaleImg = gsap.timeline({
            scrollTrigger: {
                trigger: '.img-scale',
                start: 'top top',
                pin: true,
                scrub: true
            }
        })
        scaleImg.to('.image-scale', {
            width: '100vw',
            height: '100vh',
        })
        let bgTransi = gsap.timeline({
            scrollTrigger: {
                trigger: '.bg-fixed',
                start: 'top top',
                pin: true,
                scrub: true
            }
        })
        bgTransi.to('.bg-transi', {
            height: '100%',
        })
        let sect = gsap.utils.toArray('.container-expo')
        var expo = document.querySelector('.actuelle-exposition')
        if (expo) {
            gsap.to(expo, {
                xPercent: -100 * (sect.length - 1),
                scrollTrigger: {
                    trigger: '.actuelle-exposition',
                    start: 'center center',
                    pin: true,
                    scrub: 0.8,
                    end: () => "+=" + expo.offsetWidth
                }
            })
        }
        let imgExpo = document.querySelectorAll('.Txt_img img')
        imgExpo.forEach(function (imgsExpo) {
            gsap.from(imgsExpo, {
                clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
                duration: 1,
                scrollTrigger: {
                    trigger: imgsExpo,
                    start: 'top center',
                }
            })
        })
    }

    function cursor(e) {
        var curseur = document.querySelector('.cursor')
        var posCursor = {
            x: e.pageX - 10,
            y: (e.pageY - window.pageYOffset) - 10
        }
        setTimeout(function () {
            curseur.style.transform = 'translate3d(' + posCursor.x + 'px, ' + posCursor.y + 'px, 0px)'
        }, 80);
    }
    document.addEventListener('mousemove', cursor)

    function animImg() {
        var listImg = document.querySelector('.list-img-anim')
        if (listImg) {
            var PosBounding = listImg.getBoundingClientRect().top - window.innerHeight / 3.5
            var stopAnim = false
            if (PosBounding > window.innerHeight || -PosBounding > window.innerHeight) {
                listImg.style.transform = 'translate3d(' + stopAnim + 'px, 0px, 0px)'
            } else {
                listImg.style.transform = 'translate3d(' + PosBounding * 0.5 + 'px, 0px, 0px)'
            }
        }
    }
    window.addEventListener('scroll', animImg)
    var img = document.querySelectorAll('.container-expo .image')
    img.forEach(function (imgs) {
        imgs.addEventListener('mousemove', function () {
            document.querySelector('.bg-gray').style.backgroundColor = imgs.getAttribute('data-bg')
        })
        imgs.addEventListener('mouseleave', function () {
            document.querySelector('.bg-gray').style.backgroundColor = '#525252'
        })
    })

    function AfterColorExpo() {
        var afterExpo = document.querySelector('.intro')
        if (afterExpo) {
            var data = afterExpo.getAttribute('data-color')
            afterExpo.style.setProperty('--color', data)
        }
    }
    AfterColorExpo()

    function tlLeave() {
        return gsap.to('.transi-img', {
                duration: 1,
                clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)",
                ease: Expo.easeInOut
            }),
            gsap.to('.stagger', {
                duration: 0.5,
                stagger: 0.15,
                y: "-60%",
                opacity: 0
            }),
            gsap.to('.intro, .contact', {
                duration: 0.6,
                clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)",
                delay: 0.8
            }),
            gsap.to('.stagger-expo', {
                duration: 0.5,
                stagger: 0.12,
                y: "-100%",
                opacity: 0
            }),
            gsap.to('.bg-title, .right p, .date, .mail, .home, .img-scale, .info-museum, .list-img, .section-exposition, .ticket, footer, .main-expo, .arrowExpo img', {
                duration: 1,
                opacity: 0
            }),
            gsap.to('.animPara', {
                duration: 0.5,
                opacity: 0,
                stagger: 0.1
            })
    }

    function tlInter() {
        return gsap.to('.intro, .contact', {
                duration: 2,
                clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
            }),
            gsap.to('.left .image img', {
                duration: 1,
                clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                ease: Expo.easeInOut,
                delay: 0.5
            }),
            gsap.from('.stagger', {
                duration: 0.5,
                stagger: 0.15,
                y: "60%",
                opacity: 0,
                delay: 1.5
            }),
            gsap.to('.imgClip', {
                duration: 1.6,
                opacity: 1,
                ease: Expo.easeInOut
            }),
            gsap.to('.title', {
                duration: 1,
                y: "0%",
                opacity: 1,
                delay: 0.8,
                stagger: 0.4
            }),
            gsap.to('.animPara', {
                duration: 0.7,
                clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                stagger: 0.4,
                delay: 0.4
            })
    }
    var link = document.querySelectorAll('.link')
    link.forEach(function (liens) {
        liens.addEventListener('click', function (e) {
            e.preventDefault()
            var lien = liens.getAttribute('href')
            tlLeave()
            setTimeout(function () {
                window.location.href = lien
            }, 1400);
        })
    })
    const imgPara = document.querySelectorAll('.image-txt')
    imgPara.forEach(function (el) {
        el.addEventListener('mousemove', function (e) {
            var posCursor = {
                x: e.offsetX - 90,
                y: e.offsetY - 80
            }
            el.style.transform = 'translate3d(' + posCursor.x + 'px, ' + posCursor.y + 'px, 0px)'
        })
        el.addEventListener('mouseleave', function () {
            el.style.transform = ''
        })
    })

    function cookieSite() {
        document.cookie = "cookie=valider;path=/;max-age=50000000"
        document.getElementById('cookies').style.display = 'none'
    }

    var getCookie = document.cookie
    var cookie = getCookie.substring(getCookie.indexOf('v'), getCookie.length)

    if (cookie != 'valider') {
        document.getElementById('cookies').style.display = 'block'
    }

    document.querySelector('.txt-cookies a').addEventListener('click', cookieSite)
    animGsap()
})()
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