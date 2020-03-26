
// slide show
new WOW().init();
const slide = document.getElementById("slide");
const btnLeft = document.getElementById("btn-left");
const btnRight = document.getElementById("btn-right");

const album = 3;

let index = 0;
let dots = document.getElementsByClassName("dots")[0];
autoSlideShow();
function autoSlideShow(){
    slideShow(index);
    setTimeout(autoSlideShow, 10000); // 10s / slide
}
function slideShow(pos){
    if(pos === album) pos=0;
    const photo = slide.children[0];
    for(let i = 0; i<album; ++i){
        photo.children[i].style.display = 'none';
        dots.children[i].className = dots.children[i].className.replace('active', '');
        //dots.children[i].style.border = '2px solid white';
    }
    photo.children[pos].style.display = 'block';
    dots.children[pos].classList.add('active');    
    //dots.children[pos].style.border = '2px solid #d65106';
}
btnLeft.addEventListener('click', () => {
    if(index === 0) index = album-1;
    else index -= 1;
    slideShow(index);
});
btnRight.addEventListener('click', () => {
    if(index === album-1) index = 0;
    else index += 1;
    slideShow(index);
});
