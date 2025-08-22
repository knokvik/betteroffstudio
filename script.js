gsap.registerPlugin(ScrollTrigger);
const tl = gsap.timeline();

const links = document.querySelectorAll('.links a');

links[0].classList.add('active');

links.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    links.forEach(l => l.classList.remove('active'));
    link.classList.add('active');
  });
});

tl.from('.marque', {
  y : 350,
  duration : 0.7,
  delay:0.2,
  onComplete : () => {
    gsap.to('.marque',{
        transform : 'translateX(-200%)',
        duration: 150,
        delay: 0.05,
        repeat : -1,
        ease : "none"
    })
  }
})

gsap.to('.page2', {
  scale: 1.5,
  scrollTrigger: {
    trigger: '.marque',
    scroller: 'body',
    scrub: true,
    start: "-=700",
    end: "top -100%"
  }
});


tl.from('header', {
  y : 30,
  opacity: 0,
  duration: 0.4,
  stagger : 0.2,
})

tl.from('.p1', {
  y : 40,
  opacity : 0,  
  duration: 0.4,
  stagger: 0.2,
})

gsap.from('.p3-h', {
  y: 60,
  duration: 0.8,
  stagger: 0.2,
  ease: "power2.out",
  scrollTrigger : {
    trigger : '.p3-h',
    scroller : 'body',
    start : '-=750',
  }
});

gsap.from('.p1-h', {
  y: 60,
  duration: 0.8,
  stagger: 0.2,
  delay: 0.5,
  ease: "power2.out"
});
