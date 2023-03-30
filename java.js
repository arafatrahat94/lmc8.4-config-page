// its for the navigation open and close section
var hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", function(){
  document.querySelector("body").classList.toggle("active");
})
// for link password
function validatePass(){
    if(document.getElementById('password').value == 'sadesss'){
        return true;
    }else{
        alert('wrong password!!');
        return false;
    }
}
