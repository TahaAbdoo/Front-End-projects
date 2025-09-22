let btn=document.querySelector('#btn');
let inp=document.querySelector('#inp');
let boxs=document.querySelectorAll('.box');
let drag=null;

btn.onclick=function(){
    if(inp.value!=''){
        boxs[0].innerHTML+=`
        <p class='item'draggable='true'>${inp.value}</p>
        
        `
        inp.value='';
    }
    dragitem()
}
function dragitem(){
    let items=document.querySelectorAll('.item');
    items.forEach(item=>{
        item.addEventListener('dragstart',function(){
            item.style.opacity='0.5';
            drag=item;
        });
        item.addEventListener('dragend',function(){
           drag=null
           item.style.opacity='1';
        });
        
        boxs.forEach(box=>{
            box.addEventListener('dragover',function(e){
                e.preventDefault()
                this.style.background='green';
                this.style.color='#fff';
            });

                box.addEventListener('dragleave',function(){
                this.style.background='#fff';
                this.style.color='#000';
            });


            box.addEventListener('drop',function(){
                this.append(drag);
                this.style.background='#fff';
                this.style.color='#000';
            })

        })
    })
}