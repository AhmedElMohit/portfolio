//changing background color on a fixed navbar

const navBar= document.querySelector('nav')
const menu = document.getElementById('nav')
const collapseSection= document.querySelector('.collapse')

document.addEventListener('scroll',()=>{  
    if(collapseSection.classList.contains("show")){
      collapseSection.classList.remove('show')
    }
    const pagePosition= window.scrollY;
    const hasClass= navBar.classList.contains('fixedHeader')
    if(pagePosition < 181 ){
      if(!hasClass)return
      navBar.classList.remove("fixedHeader")
      menu.classList.remove('show')
    }else{
      navBar.classList.add('fixedHeader')
    }

})
