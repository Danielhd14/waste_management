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

form[0].addEventListener('submit', fun)
function fun(e){
    e.preventDefault()
}

//Validation
function validateForm(){
    let Uregex = /^[A-Za-z]+$/
    let Eregex = /^([a-z0-9!#$%&'*+\-/=?^_`{|}~]+(?:\.[a-zA-Z0-9!#$%&'*+\-/=?^_`{|}~]+)*)@((?:[a-z0-9]+(?:[a-z-0-9-]*)\.)+[a-z]{2,})$/gi;
    let Pregex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/

// First name error message
    if(fname.value == ''){
    fname.style.border = 'red' + ' ' + '1px' + ' ' + 'solid'
    let span = document.createElement('span')
    span.classList.add("cSpan")
    span.innerHTML = 'First name field is empty'
    fname.parentElement.append(span)
}else if(Uregex.test(fname.value) == false){
    fname.style.border = 'red' + ' ' + '1px' + ' ' + 'solid'
    let span = document.createElement('span')
    span.classList.add("cSpan")
    span.innerHTML = '5-15 characters ; no numbers'
    fname.parentElement.append(span)
}

// Last name error message
if(lname.value == ''){
    lname.style.border = 'red' + ' ' + '1px' + ' ' + 'solid'
    let span = document.createElement('span')
    span.classList.add("cSpan")
    span.innerHTML = 'Last name field is empty'
    lname.parentElement.append(span)
}else if(Uregex.test(lname.value) == false){
    lname.style.border = 'red' + ' ' + '1px' + ' ' + 'solid'
    let span = document.createElement('span')
    span.classList.add("cSpan")
    span.innerHTML = '5-15 characters no numbers'
    lname.parentElement.append(span)
}

// Email error message
if(email.value == ''){
    email.style.border = 'red' + ' ' + '1px' + ' ' + 'solid'
    let span = document.createElement('span')
    span.classList.add("cSpan")
    span.innerHTML = 'Email field is empty'
    email.parentElement.append(span)
}else if(Eregex.test(email.value) == false){
    email.style.border = 'red' + ' ' + '1px' + ' ' + 'solid'
    let span = document.createElement('span')
    span.classList.add("cSpan")
    span.innerHTML = 'Make sure you have the following characters "@"'
    email.parentElement.append(span)
}

// LGA error message
if(lGA.value == '...'){
    lGA.style.border = 'red' + ' ' + '1px' + ' ' + 'solid'
    let span = document.createElement('span')
    span.classList.add("cSpan")
    span.innerHTML = 'Please selct your LGA in rivers state'
    lGA.parentElement.append(span)
}
// Password error message
if(password.value == ''){
    password.style.border = 'red' + ' ' + '1px' + ' ' + 'solid'
    let span = document.createElement('span')
    span.classList.add("cSpan")
    span.innerHTML = 'Password field is empty'
    password.parentElement.append(span)
}else if(Pregex.test(password.value) == false){
    password.style.border = 'red' + ' ' + '1px' + ' ' + 'solid'
    let span = document.createElement('span')
    span.classList.add("cSpan")
    span.innerHTML = "Password must have at least one Uppercase, lowercase, digit, special characters & 8 characters"
    password.parentElement.append(span)
}

// Confirm Password error message
if(confirmPassword.value == ''){
    confirmPassword.style.border = 'red' + ' ' + '1px' + ' ' + 'solid'
    let span = document.createElement('span')
    span.classList.add("cSpan")
    span.innerHTML = 'Confirm Password field is empty'
    confirmPassword.parentElement.append(span)
}else if(confirmPassword.value != password.value){
    confirmPassword.style.border = 'red' + ' ' + '1px' + ' ' + 'solid'
    let span = document.createElement('span')
    span.classList.add("cSpan")
    span.innerHTML = "Confirm password must be the same as password"
    confirmPassword.parentElement.append(span)
}

// Return false
if(fname.value == '' || Uregex.test(fname.value) == false){
    return false
}
if(lname.value == '' || Uregex.test(lname.value) == false){
    return false
}
if(email.value == '' || Eregex.test(email.value) == false){
    return false
}
if(lGA.value == '...'){
    return false
}
if(password.value == '' || Pregex.test(password.value) == false){
    return false
}
if(confirmPassword.value != password.value || confirmPassword.value != password.value){
    return false
}
// return true
    return true
}

form[0].addEventListener('click',()=>{
    let cSpan = document.getElementsByClassName('cSpan')
    for(let i = cSpan.length - 1;i >= 0;i--){
        cSpan[i].remove()
    }
    fname.style.border = '#ced4da' + ' ' + '1px' + ' ' + 'solid'
    lname.style.border = '#ced4da' + ' ' + '1px' + ' ' + 'solid'
    email.style.border = '#ced4da' + ' ' + '1px' + ' ' + 'solid'
    lGA.style.border = '#ced4da' + ' ' + '1px' + ' ' + 'solid'
    password.style.border = '#ced4da' + ' ' + '1px' + ' ' + 'solid'
    confirmPassword.style.border = '#ced4da' + ' ' + '1px' + ' ' + 'solid'

})