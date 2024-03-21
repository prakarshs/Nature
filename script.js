function smoothScroll(){

    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
      el: document.querySelector(".main"),
      smooth: true
    });
    locoScroll.on("scroll", ScrollTrigger.update);
    
    ScrollTrigger.scrollerProxy(".main", {
      scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
      }, 
      getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
      },
      pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
    });
    
    
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    
    ScrollTrigger.refresh();
    
}

smoothScroll();

var tl = gsap.timeline({scrollTrigger : {
    trigger : ".home h1",
    scroller : ".main",
    markers : true,
    start : "top 25%",
    end : "top 0",
    scrub : 3
}})

tl.to(".home h1", {
    x: -100,
},"anim")

tl.to(".home h2", {
    x: 100,
},"anim")


