const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const password = document.getElementById("password");
const cpassword = document.getElementById("cpassword");


//ADD EVENT

form.addEventListener("submit", function(event) {
   event.preventDefault();
   validate();
});

function sendData(sRate,count) 
{
   if(sRate === count)
   {
      //alert("Registration Successful");
      swal("Welcome!", "Registration successful", "success");
   } 
}

//for submission
function successMsg() 
{
   let formCon = document.getElementsByClassName("form-control");
   var count = formCon.length - 1;
   for(var i=0; i < formCon.length; i++)
   {
      if(formCon[i].className === "form-control success")
      {
         var sRate = 0 + i; 
         console.log(sRate);
          sendData(sRate,count);
      } else {
          return false;
      }
   }
}

//define validate func
   function validate() {
   const usernameVal = username.value.trim();
   const emailVal = email.value.trim();
   const phoneVal = phone.value.trim();
   const passwordVal = password.value.trim();
   const cpasswordVal = cpassword.value.trim();

   //validate username

   if (usernameVal === "") {
      setErrorMsg(username, "Username cannot be blank");
   }
   else if (usernameVal.length <= 2) {
      setErrorMsg(username, "Username min 3 character")
   }
   else {
      setSuccessMsg(username);
   }

   //validate email
   if (emailVal === "") {
      setErrorMsg(email, "Email cannot be blank")
   }

   else {
      setSuccessMsg(email);
   }

   //validate mobile no

   if (phoneVal === "") 
   {
      setErrorMsg(phone,"Mobile no cannot be blank")
   }

   else if (phoneVal.length != 10) {
      setErrorMsg(phone, "Mobile no must be 10 digit")
   }

   else {
      setSuccessMsg(phone);
   }

   //validate password

   if (passwordVal === "") {
      setErrorMsg(password,"Password cannot be blank")
   }

   else if (passwordVal.length <= 5) {
      setErrorMsg(password, "Minimum 6 character")
   }

   else {
      setSuccessMsg(password);
   }

   //validate confirm password
   if (cpasswordVal === "") {
      setErrorMsg(cpassword,"Password cannot be blank")
   }

   else if (passwordVal !=cpasswordVal) {
      setErrorMsg(cpassword, "Password doesn't match")
   }

   else
   {
      setSuccessMsg(cpassword);
   }
      
    successMsg();
}

function setErrorMsg(input, errormsgs) 
{
   const formControl = input.parentElement;
   const small = formControl.querySelector("small");
   formControl.className = "form-control error";
   small.innerText = errormsgs;
}

function setSuccessMsg(input)
{
   const formControl = input.parentElement;
   formControl.className = "form-control success";
}





