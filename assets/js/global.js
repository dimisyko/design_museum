export default function global() {

    function cursor(e) {
        const curseur = document.querySelector('.cursor')
        const posCursor = {
            x: e.pageX - 10,
            y: (e.pageY - window.pageYOffset) - 10
        }
        setTimeout(function () {
            curseur.style.transform = 'translate3d(' + posCursor.x + 'px, ' + posCursor.y + 'px, 0px)'
        }, 80);
    }
    document.addEventListener('mousemove', cursor)

    function getOffset(el){
       const offsetEl = el.getBoundingClientRect()
        return{
            top : offsetEl.top
        }
    }

    function animImg() {
        const listImg = document.querySelector('.list-img-anim')
        if (listImg) {
            const offset = getOffset(listImg)
            const PosBounding = offset.top - window.innerHeight / 3.5
            if (PosBounding > window.innerHeight || -PosBounding > window.innerHeight) return
                listImg.style.transform = 'translate3d(' + PosBounding * 0.5 + 'px, 0px, 0px)'
        }
    }

    window.addEventListener('scroll', animImg)
    const img = document.querySelectorAll('.container-expo .image')
    img.forEach(function (imgs) {
        imgs.addEventListener('mousemove', function () {
            document.querySelector('.bg-gray').style.backgroundColor = imgs.getAttribute('data-bg')
        })
        imgs.addEventListener('mouseleave', function () {
            document.querySelector('.bg-gray').style.backgroundColor = '#525252'
        })
    })

    function AfterColorExpo() {
        const afterExpo = document.querySelector('.intro')
        if (afterExpo) {
            const data = afterExpo.getAttribute('data-color')
            afterExpo.style.setProperty('--color', data)
        }
    }
    AfterColorExpo()

    const imgPara = document.querySelectorAll('.image-txt')
    imgPara.forEach(function (el) {
        el.addEventListener('mousemove', function (e) {
            const posCursor = {
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

    const getCookie = document.cookie
    const cookie = getCookie.substring(getCookie.indexOf('v'), getCookie.length)

    if (cookie != 'valider') {
        document.getElementById('cookies').style.display = 'block'
    }

    document.querySelector('.txt-cookies a').addEventListener('click', cookieSite)

}