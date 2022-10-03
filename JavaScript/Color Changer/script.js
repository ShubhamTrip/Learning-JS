var textar = document.getElementById('textArea');
var wordcount = document.getElementById('wordsp');
var charcount = document.getElementById('charsp');

textar.addEventListener('input',calculations);

function calculations(){

  var text = textar.value;
  let char = text.length;

  charcount.innerHTML=char;

  text = text.trim();    // trims all spaces before and after string //  Not nessarcary to use here..

  let words = text.split(" ");  // splits when get space and stores as array of words in words..


  let cleanList = words.filter(function(elm){    //  filters and stores
     return elm !="";
  });

  wordcount.innerHTML=cleanList.length;

}
function btnClick(color){
   // var obj = document.getElementById('bdy');
   // obj.style.backgroundColor = color;
   document.body.style.backgroundColor = color;
}
