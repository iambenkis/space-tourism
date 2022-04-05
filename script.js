let menu  = document.getElementsByClassName('fa-bars');
let time  = document.getElementsByClassName('fa-xmark');
let navbar = document.getElementsByClassName('navbar'); 

let thins = document.querySelectorAll('.fa-circle');
let engs = document.querySelectorAll('.engineer') 
let mains = document.querySelectorAll('.display')
let navs = document.querySelectorAll('.nav-fa')

let dests = document.querySelectorAll('.des-nav')
let dest_cont = document.querySelectorAll('.dest')
let descs = document.querySelectorAll('.dest-desc')
let details = document.querySelectorAll('.details')

let nbrs = document.querySelectorAll('.nbr')
let imgs = document.querySelectorAll('.tech-img')
let techs = document.querySelectorAll('.tech-desc')

 
menu[0].addEventListener('click',()=>{
    time[0].classList.add('active1');
    navbar[0].classList.add('active');
    menu[0].classList.remove('active1');
});

time[0].addEventListener('click',()=>{
    time[0].classList.remove('active1');
    navbar[0].classList.remove('active');
    menu[0].classList.add('active1');
});


thins.forEach((thin, index) => {
        thin.addEventListener('click', () => {
            engs.forEach((eng) => {
                eng.classList.remove('active-crew');
            });

            thins.forEach((tab) => {
                tab.classList.remove('active-crew');
            });

            engs[index].classList.add('active-crew'); 
        });
    })

navs.forEach((nav, index) => {
      nav.addEventListener('click',() =>{
          mains.forEach((main) => {
            main.classList.remove('main-active')
          })
    
          mains[index].classList.add('main-active')
          console.log(index)

      })
    })

dests.forEach((dest,index) => {
    dest.addEventListener('click', () => {
      dest_cont.forEach((des) => {
        des.classList.remove('display-dest')
      })
      descs.forEach((desc) => {
        desc.classList.remove('display-dest')
      })

      details.forEach((detail) => {
        detail.classList.remove('show-detail')
      })
      dest_cont[index].classList.add('display-dest')
      descs[index].classList.add('display-dest')
      details[index].classList.add('show-detail')
    })
})

nbrs.forEach((nbr,index) => {
    nbr.addEventListener('click', () => {
      imgs.forEach((img) =>{
        img.classList.remove('tech')
      })

      techs.forEach((tech) => {
        tech.classList.remove('display-tech')
      })
      techs[index].classList.add('display-tech')
      imgs[index].classList.add('tech')
    })
})

 

      
 
     



 