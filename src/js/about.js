import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

export function about() {
    const aniK = gsap.timeline()
    aniK.to('#AboutK h4', { scale: 0})
        .from('#AboutK .pr3', { x: innerWidth * 1.2 })
        .from('#AboutK .pr6', { x: innerWidth * 1.2 })
        .from('#AboutK .pr9', { x: innerWidth * 1.2 })
        .from('#AboutK .pr12', { x: innerWidth *1.2 })
        
    ScrollTrigger.create({
        animation: aniK,
        trigger: '#AboutK',
        start: 'top top',
        end: '+=5500',
        scrub: true,
        pin: true,
        anticipatePin: 1,
    })


}
