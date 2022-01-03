/*Animation scroll Accueil*/
let animHome = gsap.timeline({
    scrollTrigger :{
        trigger : '.home',
        start : 'top top',
        pin : true,
        scrub : true
    }
})
animHome.to('.imgClip', {
    clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)"
}, "a")
animHome.from('h1', {
    opacity : 1
}, "a")

/*Agrandissement image*/
let scaleImg = gsap.timeline({
    scrollTrigger :{
        trigger : '.img-scale',
        start : 'top top',
        pin : true,
        scrub : true
    }
})
scaleImg.to('.image-scale', {
    width : '100vw',
    height : '100vh',
})

/*Curseur*/
function cursor(e){

    var cursor = document.querySelector('.cursor')
    var x = e.pageX - 15
    var y = e.pageY - window.pageYOffset - 15

    setTimeout(function() {
    cursor.style.transform = 'translate3d('+x+'px, '+y+'px, 0px)'
}, 80);
}
document.addEventListener('mousemove', cursor)

/*defilement Axe X image*/
function animImg(){
    var listImg = document.querySelector('.list-img-anim')
    if(listImg){
    var PosBounding = listImg.getBoundingClientRect().top - window.innerHeight / 3.5
    var stopAnim = false
    
    if(PosBounding > window.innerHeight || -PosBounding > window.innerHeight){
listImg.style.transform = 'translate3d('+stopAnim+'px, 0px, 0px)'
    }else{
        listImg.style.transform = 'translate3d('+PosBounding * 0.5+'px, 0px, 0px)'
    }
}
}
window.addEventListener('scroll', animImg)

/*Change couleur background au survol des expo*/
var img = document.querySelectorAll('.container-expo .image')
img.forEach(function(imgs){
    imgs.addEventListener('mousemove', function(){
        document.body.style.backgroundColor = imgs.getAttribute('data-bg')
    })
    imgs.addEventListener('mouseleave', function(){
        document.body.style.backgroundColor = 'white'
    })
})

/*Scroll horizontale*/
let sect = gsap.utils.toArray('.container-expo')
var expo = document.querySelector('.current-exposition')
if(expo){
gsap.to(expo,{

xPercent : -100 * (sect.length - 1),
    scrollTrigger :{
        trigger : '.current-exposition',
        start : 'center center',
        pin : true,
        scrub : 0.8,
        end : () => "+=" +expo.offsetWidth
    }
})
}
let imgExpo = document.querySelectorAll('.Txt_img img')
imgExpo.forEach(function(imgsExpo){
gsap.from(imgsExpo,{
    clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",duration : 1,
    scrollTrigger :{
        trigger : imgsExpo,
        start : 'top center',
    }
})
})
function MenuActive(){
    var lienMenu = document.querySelectorAll('.menu a')
    lienMenu.forEach(function(liensMenu){
        if(liensMenu.href == window.location.href){
            liensMenu.classList.add('active')
        }
    })
}
MenuActive()
/* recuperer la couleur de la data pour l'appliquer sur le ::after et le titre de la page detail*/
function AfterColorExpo(){
    var afterExpo = document.querySelector('.intro')
    var titreExpo = document.querySelector('.right h1')
    if(afterExpo && titreExpo){
    var data = afterExpo.getAttribute('data-color')
    afterExpo.style.setProperty('--color', data)
    titreExpo.style.setProperty('--color', data)
}
}
AfterColorExpo()
 /*transition page*/
function tlLeave(){
    return   gsap.to('.transi-img',{duration : 1, clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)", ease:Expo.easeInOut}),
    gsap.to('.stagger',{duration: 0.5, stagger : 0.15, y: "-60%", opacity : 0}),
    gsap.to('.intro, .contact',{duration : 0.6, clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)", delay : 0.8}),
    gsap.to('.stagger-expo',{duration: 0.5, stagger : 0.12, y: "-100%", opacity : 0}),
    gsap.to('.bg-title, .right p, .date, .mail, .home, .img-scale, .info-museum, .list-img, .section-exposition, .ticket, footer, .main-expo',{duration : 1, opacity : 0})
}
function tlInter(){
   return gsap.to('.intro, .contact',{duration : 2, clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"}),
    gsap.to('.left .image img',{duration : 1, clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", ease:Expo.easeInOut, delay : 0.5}),
    gsap.from('.stagger',{duration: 0.5, stagger : 0.15, y: "60%", opacity : 0,delay : 1.5}),
    gsap.to('.imgClip',{duration: 1.6, opacity:1 ,ease:Expo.easeInOut}),
    gsap.to('.home h1',{duration: 1,  y:"0%", opacity:1, delay : 0.8})
}
 tlInter()

 /*transition page*/
var link = document.querySelectorAll('.link')
link.forEach(function(liens){
    liens.addEventListener('click', function(e){
        e.preventDefault()
        var lien = liens.getAttribute('href')
        tlLeave()
    setTimeout(function() {
        window.location.href = lien
    }, 1400);
})
})

/*cookies*/
var valeurcookie = Cookies.get('moncookie');
if (valeurcookie != "accepte") {
    document.getElementById('cookies').style.display = 'block'
}

document.getElementById('btn').addEventListener('click', function(e){
    e.preventDefault()
    Cookies.set('moncookie', 'accepte', { expires: 365 });
document.getElementById('cookies').style.display = 'none'
})

$(document).ready(function() {

    /* btnTop */
    $('.flecheUp').click(function(){
        $("html, body").animate({scrollTop: 0}, 80);
    })
    
        /* Formulaire */
    var nom = $('#nom')
    var prenom = $('#prenom')
    var email = $('#email')
    var confirMail = $('#emailconfirm')
    var symbole = /^(("[\w-+\s]+")|([\w-+]+(?:\.[\w-+]+)*)|("[\w-+\s]+")([\w-+]+(?:\.[\w-+]+)*))(@((?:[\w-+]+\.)*\w[\w-+]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][\d]\.|1[\d]{2}\.|[\d]{1,2}\.))((25[0-5]|2[0-4][\d]|1[\d]{2}|[\d]{1,2})\.){2}(25[0-5]|2[0-4][\d]|1[\d]{2}|[\d]{1,2})\]?$)/i

    $('form').submit(function(e){
        e.preventDefault()

        if(nom.val() == '' || prenom.val() == '' || email.val() == '' || confirMail.val() == ''){
            $('.erreur').text('Les champs sont vides')

        }else if(email.val() != confirMail.val()){
            $('.erreur').text('Les emails ne sont pas identiques')

         } else if(!email.val().match(symbole)){
            $('.erreur').text("La syntaxe de l'email n'est pas correct")
            }else{   
        $.ajax({
        //1 definir le fichier à appeler
        url : '#',
        //2 methode utilisée pour envoyer les variables
        type : 'POST',
        success : function(){
            $('.erreur').text('Merci pour la participation')

          gsap.to('form>div,form p',{duration: 0.8, stagger: 0.2, y : '-100%', opacity:0, delay:0.5})
 
          setTimeout(function() {
              $('form').fadeOut()
          }, 2000);
        }
     })
    }
    })
});