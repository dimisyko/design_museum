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
})
animHome.from('h1, .scroll-down', {
    opacity : 1,
}, "0.2")
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
/*Transition fond noir*/
let bgTransi = gsap.timeline({
    scrollTrigger :{
        trigger : '.bg-fixed',
        start : 'top top',
        pin : true,
        scrub : true
    }
})
bgTransi.to('.bg-transi', {
    height : '100%',
})
/*Curseur*/
function cursor(e){
    var curseur = document.querySelector('.cursor')
    var x = e.pageX - 10
    var y = (e.pageY - window.pageYOffset) - 10
    setTimeout(function() {
    curseur.style.transform = 'translate3d('+x+'px, '+y+'px, 0px)'
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
        document.querySelector('.bg-gray').style.backgroundColor = imgs.getAttribute('data-bg')
    })
    imgs.addEventListener('mouseleave', function(){
        document.querySelector('.bg-gray').style.backgroundColor = '#525252'
    })
})
/*Scroll horizontale*/
let sect = gsap.utils.toArray('.container-expo')
var expo = document.querySelector('.actuelle-exposition')
if(expo){
gsap.to(expo,{
xPercent : -100 * (sect.length - 1),
    scrollTrigger :{
        trigger : '.actuelle-exposition',
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
/* recuperer la couleur de la data pour l'appliquer sur le ::after*/
function AfterColorExpo(){
    var afterExpo = document.querySelector('.intro')
    if(afterExpo){
    var data = afterExpo.getAttribute('data-color')
    afterExpo.style.setProperty('--color', data)
}
}
AfterColorExpo()
 /*transition page*/
function tlLeave(){
    return gsap.to('.transi-img',{duration : 1, clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)", ease:Expo.easeInOut}),
    gsap.to('.stagger',{duration: 0.5, stagger : 0.15, y: "-60%", opacity : 0}),
    gsap.to('.intro, .contact',{duration : 0.6, clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)", delay : 0.8}),
    gsap.to('.stagger-expo',{duration: 0.5, stagger : 0.12, y: "-100%", opacity : 0}),
    gsap.to('.bg-title, .right p, .date, .mail, .home, .img-scale, .info-museum, .list-img, .section-exposition, .ticket, footer, .main-expo, .arrowExpo img',{duration : 1, opacity : 0}),
    gsap.to('.parallax .image-txt',{duration: 0.5,  opacity: 0, stagger: 0.14})
}
function tlInter(){
   return gsap.to('.intro, .contact',{duration : 2, clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"}),
    gsap.to('.left .image img',{duration : 1, clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", ease:Expo.easeInOut, delay : 0.5}),
    gsap.from('.stagger',{duration: 0.5, stagger : 0.15, y: "60%", opacity : 0,delay : 1.5}),
    gsap.to('.imgClip',{duration: 1.6, opacity:1 ,ease:Expo.easeInOut}),
    gsap.to('.title',{duration: 1,  y:"0%", opacity:1, delay : 0.8, stagger: 0.4}),
    gsap.to('.image-txt',{duration: 0.7,  clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", stagger: 0.4, delay: 0.4})
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
document.querySelector('.txt-cookies a').addEventListener('click', function(e){
    e.preventDefault()
    Cookies.set('moncookie', 'accepte', { expires: 365 });
document.getElementById('cookies').style.display = 'none'
})
 
$(document).ready(function() {
    /* btnTop */
    $('.flecheUp i').click(function(){
        $("html, body").animate({scrollTop: 0}, 80);
    })
       /* btnCallToAction */
    $('.cta').click(function(){
        $(this).fadeOut();
        $('form').fadeIn();
    })
  /*form*/
        $('form').validetta({
                onValid : function(e){
                    e.preventDefault();
                    $.ajax({
                        url: 'message_ajax.html',
                        type : 'POST',
                        data: $(this.form).serialize(),

                        success: function(message){
                            $(".erreur").html(message);
                            gsap.to('fieldset>div,form p',{duration: 0.8, stagger: 0.2, y : '-100%', opacity:0, delay:0.5})
                            setTimeout(function() {
                            $('form').fadeOut()
                            }, 2000);
                        },
                    });
                }
            });
})