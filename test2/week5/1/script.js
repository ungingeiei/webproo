function submit(){
    let tbody = document.querySelector("tbody")
    let inp_num = document.getElementById("inp_num").value
    tbody.textContent = ""
    for(let i=1 ; i <=7 ; i++){
        let row = document.createElement("tr")
        let cel1 = document.createElement("td")
        let cel2 = document.createElement("td")


        cel1.textContent = `${inp_num} x ${i}`
        cel2.textContent = parseInt(inp_num)*i
        console.log(inp_num)
        row.appendChild(cel1)
        row.appendChild(cel2)
        tbody.appendChild(row)
    }
}