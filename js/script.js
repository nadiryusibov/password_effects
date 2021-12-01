// show and hide password with javascript
var state=false;
function toggle(){
  if (state){
    document.getElementById("password").setAttribute("type","password");
    state=false;
    document.getElementById("eye").style.color="red"
  }else{
    document.getElementById("password").setAttribute("type","text");
    state=true;
    document.getElementById("eye").style.color="blue"
  }
}