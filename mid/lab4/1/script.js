function submit(){
    let inp = document.getElementById("inp").value
    let tbody = document.querySelector("tbody")
    tbody.textContent = ""
    for(let i =1 ; i<=7 ; i++){
        let row = document.createElement("tr")
        let cel1 = document.createElement("td")
        let cel2 = document.createElement("td")

        cel1.textContent = `${inp} x ${i}`
        let eiei = inp*i
        cel2.textContent = eiei

        row.appendChild(cel1)
        row.appendChild(cel2)
        tbody.appendChild(row)
    }
}