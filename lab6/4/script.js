function main(){
    let container = document.querySelector(".content")

    const data = Object.keys(localStorage).map(key => ({
    key,
    value: localStorage.getItem(key)
    }));


    data.forEach(item=>{

        let div_contain = document.createElement("div")
        let name = document.createElement("p")
        let bt = document.createElement("button")

        name.textContent = item.value
        bt.textContent = "ลบ"

        div_contain.style.display = "flex"
        div_contain.style.alignItems = "center"
        div_contain.style.width = "100%"
        div_contain.style.border = "1px solid black"
        div_contain.appendChild(name)
        div_contain.appendChild(bt)
        container.appendChild(div_contain)


        bt.addEventListener("click", ()=>deleteLocal(item.key))
    })

}

function addLocal(){
    const name = document.getElementById("MovieName").value
    localStorage.setItem(name, name)
    window.location.reload()
}

function deleteLocal(key){
    localStorage.removeItem(key)
    window.location.reload()
}
function clearAll(){
    localStorage.clear()
    window.location.reload()
}
main()