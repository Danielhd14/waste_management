let url = "../../script/object.json"
let qoutes = document.getElementById("qoutes")

async function loadUsers() {
    const response = await fetch(url);
    const data = await response.json();

    let random = Math.floor(Math.random() * data.length)
    qoutes.innerHTML = `<div>
        <p>${data[random].quotes}</p>
    </div>`

    let Quoting = setInterval(()=>{
        let random = Math.floor(Math.random() * data.length)
        qoutes.innerHTML = `<div>
            <p>${data[random].quotes}</p>
        </div>`
    },5000)

}
loadUsers();