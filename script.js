function validation(){
    
    var fname=document.getElementsByClassName("first-name");
    var password=document.getElementsByClassName("password");
    if(fname.length<4){
        alert("please enter valid name");
        return false;
    }
      return false
    if(password.length<5){
        alert("password is too short");
        return false;
    }
}

