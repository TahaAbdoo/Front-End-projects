let stars =document.getElementById('stars');
let moon =document.getElementById('moon');
let mountains3 =document.getElementById('mountains3');
let mountains4 =document.getElementById('mountains4');
let river5 =document.getElementById('river5');
let boat6 =document.getElementById('boat6');
let Hello =document.querySelector('.Hello');

window.onscroll=function(){
        let value=scrollY;
        stars.style.left=value +"px";
        moon.style.top=value *4 +"px";
        mountains3.style.top=value *1.5 +"px";
        mountains4.style.top=value *1.2 +"px";
        river5.style.top=value +"px";
        boat6.style.top=value +"px";
        boat6.style.left=value*3 +"px";
        Hello.style.fontSize=value +"px";

        if(scrollY>=67){
           Hello.style.fontSize='67px'
           Hello.style.position='fixed';
           if(scrollY>=409.0909118652344){
            Hello.style.display='none';
           } 
           else{
            Hello.style.display='block';

           }
           
        }
        if(scrollY>=82.7272720336914){
            document.querySelector('.main').style.background='linear-gradient(#376281,#10001f)';
           }
        else{
            document.querySelector('.main').style.background='linear-gradient(#3d015d,#180320)';

           }
};