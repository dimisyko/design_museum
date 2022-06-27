export default function transition() {
    tlInter()
    function tlLeave() {
        return gsap.to('.bg-transition', {
            duration : 1.2,
            ease : Power4.easeInOut,
            transformOrigin : "bottom",
            scaleY : 1
        })
    }

    function tlInter() {
        return gsap.to('.bg-transition', {
            duration : 1.2,
            ease : Power4.easeInOut,
            transformOrigin : "top",
            scaleY : 0
        })
    }
    const links = document.querySelectorAll('.link')
    links.forEach(function (link) {
        link.addEventListener('click', function (e) {
            e.preventDefault()
            var data = link.getAttribute('href')
            tlLeave()
            setTimeout(function () {
                window.location.href = data
            }, 1400);
        })
    })
}