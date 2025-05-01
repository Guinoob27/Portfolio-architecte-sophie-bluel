const loginApi = "http://localhost:5678/api/users/login";
 
document.getElementById("loginform").addEventListener("submit", handleSubmit);
 
async function handleSubmit(event) {
  event.preventDefault();

   let user = {
    email: document.getElementById("email").value,
    password: document.getElementById("password").value,
   };
 
   let response = await fetch(loginApi, {
     method: "POST",
     headers: {
       "Content-Type": "application/json",
     },
     body: JSON.stringify(user),
     
   });
 
   let result = await response.json();
   console.log(result);
   
 }
 
 