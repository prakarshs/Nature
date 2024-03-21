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

var tl = gsap.timeline({
    scrollTrigger : {
    trigger : ".home h1",
    scroller : ".main",
    start : "top 25%",
    end : "top 0",
    scrub : 2.5
}})

var tl2 = gsap.timeline({
    scrollTrigger : {
    trigger : ".home h1",
    scroller : ".main",
    start : "top -85%",
    end : "top -120%",
    scrub : 3
}})

var tl3 = gsap.timeline({
    scrollTrigger : {
    trigger : ".home h1",
    scroller : ".main",
    start : "top -155%",
    end : "top -200%",
    scrub : 3
}})

tl.to(".home h1", {
    x: -100,
},"anim")

tl.to(".home h2", {
    x: 100,
},"anim")

tl.to(".home video",{
    width:"90%"
},"anim")

tl2.to(".main",{
    backgroundColor :"#b3b3b3"
})

tl3.to(".main",{
    backgroundColor : "#121212"
})

var crsr = document.querySelector("#cursor");
var main = document.querySelector(".main");
main.addEventListener("mousemove", function(dets){
    crsr.style.left = dets.x + 5+ "px";
    crsr.style.top = dets.y +5+ "px";
})



