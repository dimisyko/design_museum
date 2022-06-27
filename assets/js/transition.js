export default function transition() {
    let fast = 0,
        slow = 0,
        stop = null,
        run = null
    const svg = document.querySelector('.bg')
    const path = svg.querySelector('path')
    function ease(start, end, duration){
        return start + (end - start) / duration
    }

    tlInter()
    function tlLeave() {
        fast= ease(fast, 0, 7)
        slow= ease(slow, 0, 14)
        path.setAttribute('d', `M 0 100 L 0 100 L 100 100 L 100 ${slow.toFixed(2)} C 50 ${fast.toFixed(2)} 50 ${fast.toFixed(2)} 0 ${slow.toFixed(2)}`)
        svg.style.zIndex = 999
     run = requestAnimationFrame(tlLeave)
     cancelAnimationFrame(stop)
    }
 
    function tlInter() {
        const tl = gsap.timeline()
        tl.to('.opacity', {
            opacity : 1,
            duration : 1.2,
            delay : 0.7
        })
        fast= ease(fast, 100, 7)
        slow= ease(slow, 100, 14)
        path.setAttribute('d', ` M 0 100 L 0 100 L 100 100 L 100 ${slow.toFixed(2)} C 50 ${fast.toFixed(2)} 50 ${fast.toFixed(2)} 0 ${slow.toFixed(2)}`)
       stop = requestAnimationFrame(tlInter)
        cancelAnimationFrame(run)
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