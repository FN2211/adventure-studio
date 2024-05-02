const form = document.querySelector("form")

form.addEventListener("submit", (e)=>{
    e.preventDefault()

    const Email = document.getElementById("email").value
    const password = document.getElementById("password").value

    if(auth(Email, password)){
        alert("correct")
        Email.value = ""
        password.value = ""
    }else {
        alert("wrong")
    }
})


function auth(email,password){
    if(email === "admin@adventurestudio.com" && password === "admin"){
        return true
    } else {
        return false
    }
}