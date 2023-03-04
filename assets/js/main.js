
var navBtn = document.getElementById("nav-btn");
var sideMenu = document.getElementById("side-menu");
let SEARCH=document.getElementById('search');
let overLay=document.getElementById('over-lay');
let close=document.getElementById('close');
console.log(close);

navBtn.addEventListener('click',function(){
    navBtn.style.boxShadow = "unset";
    if(sideMenu.classList.contains("active")){
        hideSide();
    }
    else{
        showSide();
    }
});

function showSide(){
    document.body.style.paddingLeft = "300px";
    sideMenu.classList.add("active");
}
function hideSide(){
    document.body.style.paddingLeft = "0";
    sideMenu.classList.remove("active");
}
//////////////////

 let navbar=document.getElementById('navbar');

window.addEventListener('scroll',()=>{
    if(scrollY>100){
   
      navbar.classList.add('new-nav') ;

    }
    else{
        navbar.classList.remove('new-nav') ;

    }
})
////////////////////////////////////////////////////

overLay.style.zIndex='-1';
SEARCH.addEventListener('click', ()=>{
  overLay.style.opacity='1';
  overLay.style.transition='1s';
  overLay.style.zIndex='99999999';
  document.querySelector('.over-lay input').style.animation='input-animation' ;
  document.querySelector('.over-lay input').style. animation_duration ='1s' ;

})
close.addEventListener('click',()=>{
    overLay.style.opacity='0';
  overLay.style.transition='1s';
  overLay.style.zIndex='-1';
})

let search_btn =document.querySelector('.over-lay button');
console.log(search_btn);
search_btn.addEventListener('click',(e)=>{
    e.preventDefault();
    window.location.assign = 'shop.html';
})