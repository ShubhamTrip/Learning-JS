
function validate(){
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    var flag=1;
    if(username.length <=3){
        document.getElementById('errorUser').innerHTML="Username smaller than 3 char";
        flag=0;
    }
    else{
        document.getElementById('errorUser').innerHTML="";
        
    }
    if(password.length <=3){
        document.getElementById('errorPass').innerHTML="Password smaller than 3 char";
        flag=0;
    }
    else{
        document.getElementById('errorPass').innerHTML="";
        
    }


    if(flag==0){
        return false;
    }

}