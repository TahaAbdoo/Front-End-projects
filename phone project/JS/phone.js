let center=document.getElementById('center_img');
let container=document.querySelector('.container')
console.log(center);
let images=document.getElementsByClassName('small_image');
function change(phone){

    center.src=phone

};
function bg(color){
    container.style.background=color;
};