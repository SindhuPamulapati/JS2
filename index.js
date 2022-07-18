let id = (id) => document.getElementById(id);

let classes = (classes) => document.getElementsByClassName(classes);

let username = id("name"),
  email = id("email"),
  mobile = id("mobile"),
  form = id("form-submit"),
  errorMsg = classes("error");
  

  function validateform(){  
    var name=document.myForm.name.value;  
    
    if (name==null || name==""){  
      alert("Name can't be blank");  
      return false;  
    }else if(name.length<5){  
      alert("name must be at least 5 characters long.");  
      return false;  
      }  
    }  

form.addEventListener("submit", (e) => {
  e.preventDefault();

  engine(username, 0, "Username cannot be blank");
  engine(email, 1, "Email cannot be blank");
  engine(mobile, 2, "Mobile No: cannot be blank");
});


let engine = (id, serial, message) => {
  if (id.value.trim() === "") {
    errorMsg[serial].innerHTML = message;
    id.style.border = "2px solid red";

    // icons
    failureIcon[serial].style.opacity = "1";
    successIcon[serial].style.opacity = "0";
  } else {
    errorMsg[serial].innerHTML = "";
    id.style.border = "2px solid green";

    // icons
    failureIcon[serial].style.opacity = "0";
    successIcon[serial].style.opacity = "1";
  }
};
