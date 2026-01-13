async function getData(){
    const data = await fetch("data.json")
    return data.json();
}

async function main(){
    const data = await getData();
    const container = document.getElementById("tbody")
    console.log(container)
    data.forEach(item=>{
        const row = document.createElement("tr")
        const tdName = document.createElement("td")

        const tdPercent = document.createElement("td") // 100% space
        const divPercent = document.createElement("div") // data%


        tdName.textContent = item.name

        tdPercent.style.width = "100px"
        tdPercent.style.backgroundColor = "black"

        divPercent.textContent = item.completePercent
        divPercent.style.width = `${item.completePercent}px`
        divPercent.style.backgroundColor = "pink"

        tdPercent.appendChild(divPercent);
        row.appendChild(tdName)
        row.appendChild(tdPercent)

        container.appendChild(row)
    })

}
main()