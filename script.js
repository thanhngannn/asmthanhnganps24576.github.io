
/*Hàm Mở Form*/
function moForm() {
    document.getElementById("myForm").style.display = "block";
  }
  /*Hàm Đóng Form*/
  function dongForm() {
    document.getElementById("myForm").style.display = "none";
  }
const adressbtn = document.querySelector('#adress-form')
//console.log (adressbtn)
adressbtn.addEventListener("click", function(){
  document.querySelector('#form-content').style.display = "flex"
})
const closecontent = document.querySelector('#close-content')
closecontent.addEventListener("click", function(){
  document.querySelector('#form-content').style.display = "none"
})   

