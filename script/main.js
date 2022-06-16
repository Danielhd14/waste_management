// LGA select tag start
let lGA = document.getElementById('LGA')
let url = "../script/api.json"
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

