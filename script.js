function gsapAnimation(){
  gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,

  // for tablet smooth
  tablet: { smooth: true },

  // for mobile
  smartphone: { smooth: true }
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight
    };
  }

  // follwoing line is not required to work pinning on touch screen

  /* pinType: document.querySelector("#main").style.transform
    ? "transform"
    : "fixed"*/
});


ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();
}
gsapAnimation()


// document.querySelectorAll(".card").forEach((card)=>{
//     card.addEventListener("mouseenter", ()=>{
//        document.querySelectorAll(".card p").forEach((p, key)=>{
//         p.style.display = "block";
//        })
//     })
// })
// document.querySelectorAll(".card").forEach((card)=>{
//     card.addEventListener("mouseleave", ()=>{
//        document.querySelectorAll(".card p").forEach((p, key)=>{
//         p.style.display = "none";
//        })
//     })
// })

document.querySelectorAll(".card").forEach((card) => {
  card.addEventListener("mouseenter", () => {
      card.querySelectorAll("p").forEach((p) => {
          p.style.display = "block";
          gsap.to("p", {
            bottom: 0,
            transition: "ease .2s"
          })
      });
  });

  card.addEventListener("mouseleave", () => {
      card.querySelectorAll("p").forEach((p) => {
          p.style.display = "none";
          gsap.to("p", {
            bottom: "-100px",
            transition: "ease .2s"
          })
      });
  });
});

gsap.to("#page3", {
  scrollTrigger: {
    trigger: "#left-pg3",
    scroller: "#main",
    start: "top 30%",
    end: "top -60%",
    pin: true,
    // markers: true
  }
})

gsap.to("#page3 #right-pg3 h1", {
  color: '#fff',
  scrollTrigger: {
    trigger: '#page3',
    scroller: "#main",
    start: "top 50%",
    end: 'top 20%',
    scrub:2,
    // markers: true
  }
})

var mousefollower= document.querySelector("#mouseselector")

document.querySelectorAll(".top-cont .card").forEach((card)=>{

})

function reAD(){
  document.addEventListener("mousemove",function(dets){
    gsap.to("#mousefollower",{
        left:dets.x,
        top:dets.y
  
    })
  
  })
  
  
  document.querySelectorAll(".card").forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        gsap.to("#mousefollower",{
  
            transform:'translate(-50%,-50%)scale(1)'
        })
    })
  
  })
  
  
  document.querySelector(".card").forEach(function(elem){
    elem.addEventListener("mouseleave",function(){
        gsap.to("#mousefollower",{
            transform:'translate(-50%,-50%)scale(0)'
            
        })
    })
  
  })
}
reAD()




var words = ['powerful', 'sensible', 'important', 'Move you', 'Move me', 'valuable','that matters','that change things','creative'];
  
  // Function to change word
//   function changeWord() {
//     changingWord.style.opacity = '0'; // Fade out
//     setTimeout(function() {
//       var randomIndex = Math.floor(Math.random() * words.length);
//       changingWord.textContent = words[randomIndex];
//       changingWord.style.opacity = '1'; // Fade in
//     }, 500); // Delay to allow fade out before changing content
//   }
  
//   setInterval(changeWord, 2000);
//   changeWord();

var changingWord = document.getElementById('changingWord');
var currentIndex = 0; 
  
  function changeWord() {
    changingWord.style.opacity = '0';
    setTimeout(function() {
      var word = words[currentIndex]; 
      var currentCharIndex = 0; 
      
      var intervalId = setInterval(function() {
        changingWord.textContent = word.slice(0, currentCharIndex + 1); 
        currentCharIndex++; 
        
        if (currentCharIndex >= word.length) {
          clearInterval(intervalId);
          setTimeout(function() {
            changingWord.style.opacity = '1'; 
          }, 200);
        }
      }, 100);
      currentIndex = (currentIndex + 1) % words.length;
    }, 500); 
  }
  
  setInterval(changeWord, 2000);
 changeWord(); 