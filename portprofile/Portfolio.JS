document.addEventListener('DOMContentLoaded',()=>{


let menuIcon = document.querySelector('.header i');

let navbar = document.querySelector('.navbar');
menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};







let section = document.querySelectorAll('section');
let navLink = document.querySelectorAll('header navbar a');

window.onscroll = () => {
  sections.forEach(sec => {
     let top = window.scrollY;
     let offset= sec.offsetTop - 150;
     let height = sec.offsetHeight;
     let id = sec.getAttribute('id');

     if(top >= offset && top < offset + height) {
      navLink.foreach(links =>{
        links.classList.remove('active');
         document.querySelector('header nav a[herf* =' + id + ']').classList.add('active');
        
      })
     }
  });
  let header = document.querySelector('header');

  header.classList.toggle('sticky', window.scrollY > 100);

};


menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');
});

const typed = new Typed('.multitext', {
 strings: ['Web Developer', 'Frontend Developer', 'Backend Developer'],
 typespeed: 100,
typespeed: 100,
typespeed: 100,
loop:true
}
)