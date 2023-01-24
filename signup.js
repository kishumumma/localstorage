function test(){
    var username =document.getElementById("name").value ;
    var Eid =document.getElementById("email").value;
    var password =document.getElementById("password").value;


// storing data

var user = localStorage.setItem("username" ,username);
var emalid =localStorage.setItem("Emailadd" , Eid);
var pass = localStorage.setItem("password" , password);

// retreiving storage data and using 

var user = localStorage.getItem("username" , username);
var pass = localStorage.getItem("password" ,password);
var emailid = localStorage.getItem("Emailadd" ,Eid);

var a , b, c ;
a="sonika";
b="sonika541@gmail.com";
c=123456;

if(a== username && b== Eid && c== password){
    alert("login successful");
}else{
    alert("Invalid details");
}
}
