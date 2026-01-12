let amount = 0
function submit(){
    let list = document.getElementById("list").value
    let num = document.getElementById("num").value
    let selectt = document.getElementById("selectt").value
    let date = document.getElementById("date").value

    let row = document.createElement("tr") //สร้าง low

    let divlist  = document.createElement("td")
    let divselectt1 = document.createElement("td")
    let divselectt2 = document.createElement("td")
    let divdate  = document.createElement("td")

    let tbody = document.querySelector("tbody")
    
    divdate.textContent = date
    divlist.textContent = list
    if(selectt == "1"){
        divselectt1.textContent = num
        divselectt2.textContent = "0"
        amount += parseInt(num);
    }else{
        divselectt2.textContent = num
        divselectt1.textContent = "0"
        amount -= parseInt(num);
    }

    row.appendChild(divdate)
    row.appendChild(divlist)
    row.appendChild(divselectt1)
    row.appendChild(divselectt2)

    tbody.appendChild(row)


   document.getElementById("amount").textContent = parseInt(amount)
}