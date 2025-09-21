let sturate=document.getElementById('sturate');
let contrast=document.getElementById('contrast');
let Brightness=document.getElementById('Brightness');
let sepia=document.getElementById('sepia');
let greyscale=document.getElementById('greyscale');
let blur=document.getElementById('blur');
let huerotate=document.getElementById('huerotate');
let dowenload=document.getElementById('dowenload');
let img=document.getElementById('img');
let upload=document.getElementById('upload');
let reset=document.querySelector('span');
let imgbox=document.querySelector('.imgbox');
const canvas = document.getElementById('canvas');
const ctx=canvas.getContext('2d');//   اطار من كانفاس   هذا الي بنرسمو بيه 


function resetValue(){
    img.style.filter='none';
    sturate.value='100';
    contrast.value='100';
    Brightness.value='100';
    sepia.value='0';
    blur.value='0';
    greyscale.value='0'
    huerotate.value='0';
}

reset.onclick=resetValue;


window.onload=function(){
    dowenload.style.display='none';
    reset.style.display='none';
    imgbox.style.display='none';
}
upload.onchange=function(){
    resetValue()
    dowenload.style.display='block';
    reset.style.display='block';
    imgbox.style.display='block';
    //read the image
    let file = new FileReader();
    file.readAsDataURL(upload.files[0]);//convert to base64
    //DataURLاقرأ الملف من  خلال
    //uploadتقرأ الملفات الي تجيك من  
    file.onload=function(){//when file is loaded
        img.src=file.result;//set image source
        //DOWENLOAD THE IMAGE WITH FILTER

}
    
        // نسخة من الصورة 
        img.onload=function(){//when image is loaded because img.src=file.result
        canvas.width=img.width;
        canvas.height=img.height;
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);// في محيط  canvas
        img.style.display='none';
}
//filter
//two ways to set filter

let filters=document.querySelectorAll('ul li input');
filters.forEach(filter => {
    filter.addEventListener('input',function(){
        ctx.filter=`saturate(${sturate.value}%)
         contrast(${contrast.value}%)
         brightness(${Brightness.value}%) 
         sepia(${sepia.value}%) 
         grayscale(${greyscale.value})
         blur(${blur.value}px) 
         hue-rotate(${huerotate.value}deg)`;
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

    })
    
});

dowenload.onclick=function(){
    dowenload.href=canvas.toDataURL(); 
}
}