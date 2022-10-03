var img1 ="img/wall1.jpg";
var img2 ="img/wall2.jpg";
var img3 ="img/wall3.jpg";
var img4 ="img/wall4.jpg";
var imgarr=[img1,img2,img3,img4];

var desc =['Beautiful Vallies','Beautiful Lakes','Train on Hills','Lakes between Mountains'];
var i=2;
var descipt= document.getElementById('Info');
var image=document.getElementById('image');
console.log(image.src);
descipt.innerHTML=desc[i];
image.src=imgarr[i];
function leftFunc(){
    if(i>0){
    i--;
   }
   descipt.innerHTML=desc[i];
   image.src=imgarr[i];
}

function rgtFunc(){
    if(i<imgarr.length-1){
        i++;
    }
    descipt.innerHTML=desc[i];
    image.src=imgarr[i];
}