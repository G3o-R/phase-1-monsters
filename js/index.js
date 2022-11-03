//When the page loads, show the first 50 monsters. Each monster's name, age, and description should be shown.
//as soon as DOM loads
//fetch the monsters
//use callBack that renders data for each monster

function fetchMonsters(){
    fetch(`http://localhost:3000/monsters/?_limit=50`)
    .then((res)=> res.json())
    .then((data)=> data.forEach((monster) => {
        renderMonsters(monster)}))
}
//renders individual monster
function renderMonsters(monsterData){
    let monsterContainer = document.querySelector("#monster-container")
    let divCard = document.createElement('div')
    let h2 = document.createElement('h2')
    let h4 = document.createElement('h4')
    let p = document.createElement('p')

    h2.innerText = monsterData.name
    h4.innerText = monsterData.age
    p.innerText = `Bio: ${monsterData.description}`

    divCard.append(h2,h4,p)
    //console.log(divCard)
    monsterContainer.append(divCard)
}
document.addEventListener("DOMContentLoaded",fetchMonsters())
