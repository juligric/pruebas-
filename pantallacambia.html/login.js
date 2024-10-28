let username = document.getElementById("username")
let password = document.getElementById("password")
let button = document.getElementById("button")
  
button.addEventListener("click",async()=>{
   await postData("login",({username: username.value,password:password.value}),(data)=>{
    if (data === true) {
            
    }
})
})