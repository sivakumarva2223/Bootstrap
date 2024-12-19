   var sidecart=document.querySelector(".cart")
//  var show=document.getElementById("crt")

function showcart(){
  sidecart.style.right="0"
}

 function closecart(){
  sidecart.style.right="-60%"
 }



 var enterText=""
 var productcontainer=document.getElementById("products")
 var icecream=productcontainer.querySelectorAll('h5')

 function check(){
  enterText = event.target.value.toUpperCase()

  // for(i=0;i<icecream.length;i++)
  // {
     if(icecream[i].textContent.toUpperCase().indexOf(enterText)<0){
    icecream[i].style.display="none"
  }
 }
//  }

// .addEventListener('dbclick',
//   function check(){
//   alert("hey hoiii")
// };