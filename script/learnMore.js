let url = "../../script/object.json"
let qoutes = document.getElementById("qoutes")

async function loadUsers() {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);

    qoutes.innerHTML = `<div>
        <p>${data[3].quotes}</p>
    </div>`
}
loadUsers();