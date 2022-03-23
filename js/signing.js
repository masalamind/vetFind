

$("#signUpBtn").click(function(e){
  e.preventDefault();
  validateFormData();

});

$(".signUp").click(function(){

  $(".sign-up").toggle();
  $(".sign-in").toggle();

});

$("#signInBtn2").click(function(){
  $(".sign-up").toggle();
  $(".sign-in").toggle();

});

$("#signInBtn").click(function(e){
  e.preventDefault();

  loginValidation();

})
























const validateFormData = ()=>{
  let addedName = $("#nameUp").val();
  let addedPhone = $("#numberUp").val();
  let addedMail = $("#mailUp").val();
  let addedPassword = $("#passwordUp").val();
  let addedPassword2 = $("#passwordUp2").val();
 
  let phoneMatch = "^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$"
  // let passWordCriteria = bb;

  if(addedName == "" || addedName.length < 6){
    $("#nameUp").css("outline","3px solid red");
    $("#errName").removeClass("d-none");

  }
  else if(addedPhone == ""||addedPhone.length<10 ||addedPhone.match(phoneMatch)){
    $("#numberUp").css("border","3px solid red");
    $("#errNumber").removeClass("d-none");

  }
  else if(addedMail == ""){
    $("#mailUp").css("border","3px solid red");
    $("#errMail").removeClass("d-none");

  }
  else if(addedPassword == "" || addedPassword.length < 8){
    $("#passwordUp").css("outline","3px solid red");
    $("#errPass1").removeClass("d-none");
    

  }
  else if(addedPassword !== addedPassword2){
    $("#passwordUp2").css("outline","3px solid red");
    $("#errPass2").removeClass("d-none");

  }
  else{
   
    $("#theName").text(addedName);
    $("#theName").text("this");
    
    let check = document.getElementById("iamAVet")
    if(check.checked == true){

      window.location.href = "../homevet.html";
      

    }
    else{
      window.location.href = "../userHome.html";

    }
  }
}
const loginValidation = ()=>{
  let loginMail = $("#mail").val();
  let loginPass = $("#password").val();

  if(loginMail == "" || loginPass == ""){
    $("#loginerr").removeClass("d-none");

  }


}
const setNameOnProfile = ()=>{
  let addedName = $("#nameUp").val();
  $("#theName").text(addedName);

}

let pass1 = document.getElementById("password");
let pass2 = document.getElementById("passwordUp");
let pass3 = document.getElementById("passwordUp2");

let eye1 = document.getElementById("togglePassword0");
let eye2 = document.getElementById("togglePassword1");
let eye3 = document.getElementById("togglePassword2");


function checkPassword(b,a){
  if(b.type == "text"){
    b.type = "password";
    a.classList.toggle("bi-eye");
  }
  else{
    b.type = "text"; 
    a.classList.toggle("bi-eye");
  }

  
}
eye1.addEventListener("click",()=>{
 checkPassword(pass1,eye1);
});
eye3.addEventListener("click", function(){
  checkPassword(pass3,eye3);
});
eye2.addEventListener("click",function(){
  checkPassword(pass2,eye2);
});

