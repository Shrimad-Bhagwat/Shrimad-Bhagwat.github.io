burger=document.querySelector('.burger')
navbar=document.querySelector('.navbar')
navList=document.querySelector('.nav-list')
rightNav=document.querySelector('.rightNav')

burger.addEventListener('click', ()=>{
    navbar.classList.toggle('h-nav')
    rightNav.classList.toggle('v-class')
    navList.classList.toggle('v-class')
    

})