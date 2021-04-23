function validateName(){
    var a= document.getElementById('name').value;
    if(a=="" || a==" "){
        document.getElementById('nout').innerText="Please enter your name"
    }
    else
    {
        document.getElementById('nout').innerText=""
    }
}

const validateEmail=()=>{
    var a= document.getElementById("email").value;
    if(a=="" || a.length==0){
         document.getElementById("eout").innerText="Please Enter the email"
     }
     else{
             if(a.match("^([a-zA-z0-9]+)@([a-zA_Z0-9]+)\.([a-zA-Z]{2,5})$")===null)
             {
                 document.getElementById("eout").innerText="Please Enter Valid email"
             }
             else{
                 document.getElementById("eout").innerText=""
             }
     }
}
const confirmEmail=()=>{
     var email= document.getElementById("email").value;
     var cemail= document.getElementById("cemail").value;
     if(email!==cemail)
     {
        document.getElementById('ceout').innerText="Email does not match"
     }else
     document.getElementById('ceout').innerText=""
}

const validatePassword=()=>{
    var a= document.getElementById("password").value;
    if(a.length<15){
        if(a.length<8){
         document.getElementById("pout").innerText="Min. length is 8"
         }
         else if(a.length<10){
             document.getElementById("pout").innerText=""
         }
     }
}
const confirmPassword=()=>{
     var password= document.getElementById("password").value;
     var cpassword= document.getElementById("cpassword").value;
     if(password!==cpassword)
     {
        document.getElementById('cpout').innerText="Email does not match"
     }else
     document.getElementById('cpout').innerText=""
}
const countSeats =()=>{
    var seats =document.getElementById("seat").value;
    document.getElementById("sout").innerText=`Number of Seats Selected is ${seats}`    
    }
