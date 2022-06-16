// LGA select tag start
let lGA = document.getElementById('LGA')
let url = "../script/api.json"
let form = document.getElementsByTagName('form')
let fname = document.getElementById("fname")
let lname = document.getElementById("lname")
let email = document.getElementById("email")
let password = document.getElementById("password")
let confirmPassword = document.getElementById("confirmPassword")
async function LocalGovernment(){
    const response = await fetch(url)
    const data = await response.json()
    for(let i = 0; i < data[0].Rivers.length;i++){
        lGA.innerHTML +=`
        <option>${data[0].Rivers[i]}</option>    
        `
    }
}
LocalGovernment()
// LGA select tag end

//Validation
function validateForm(){
if(fname.value == ''){
    fname.style.border = 'red' + ' ' + '1px' + ' ' + 'solid'
}
if(lname.value == ''){
    lname.style.border = 'red' + ' ' + '1px' + ' ' + 'solid'
}
if(email.value == ''){
    email.style.border = 'red' + ' ' + '1px' + ' ' + 'solid'
}
if(lGA.value == '...'){
    lGA.style.border = 'red' + ' ' + '1px' + ' ' + 'solid'
}
if(password.value == ''){
    password.style.border = 'red' + ' ' + '1px' + ' ' + 'solid'
}
if(confirmPassword.value != password.value || confirmPassword.value == ''){
    confirmPassword.style.border = 'red' + ' ' + '1px' + ' ' + 'solid'
}
if(fname.value == ''){
    fname.focus()
  return false
}
if(lname.value == ''){
    lname.focus()
    return false
}
if(email.value == ''){
    email.focus()
    return false
}
if(lGA.value == '...'){
    lGA.focus()
    return false
}
if(password.value == ''){
    password.focus()
    return false
}
if(confirmPassword.value != password.value){
    return false
}

    return true
}

form[0].addEventListener('click',()=>{
    fname.style.border = '#ced4da' + ' ' + '1px' + ' ' + 'solid'
    lname.style.border = '#ced4da' + ' ' + '1px' + ' ' + 'solid'
    email.style.border = '#ced4da' + ' ' + '1px' + ' ' + 'solid'
    lGA.style.border = '#ced4da' + ' ' + '1px' + ' ' + 'solid'
    password.style.border = '#ced4da' + ' ' + '1px' + ' ' + 'solid'
    confirmPassword.style.border = '#ced4da' + ' ' + '1px' + ' ' + 'solid'

})