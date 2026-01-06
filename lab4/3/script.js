
function submit(){
    let list = document.getElementById("list").value
    let num = document.getElementById("num").value
    let p = document.getElementById("p").value
    let date = document.getElementById("date").value
    let amount = document.getElementById("amount")
    let amountt = parseInt(amount.textContent)
    num = parseInt(num)

    let tb = document.getElementById("tb")
    let tr = document.createElement("tr")
    let cell0 = document.createElement("td")
    let cell1 =  document.createElement("td")
    let cell2 = document.createElement("td")
    let cell3 = document.createElement("td")

    tb.appendChild(tr)
    tr.appendChild(cell0)
    tr.appendChild(cell1)
    tr.appendChild(cell2)
    tr.appendChild(cell3)

    cell0.textContent = date
    cell1.textContent = list
    if(p == "+1"){
        cell2.textContent = num
        cell3.textContent = 0
        amountt += num
    }else{
        cell2.textContent = 0
        cell3.textContent = num
        amountt -= num
    }
    console.log(amountt)
    amount.textContent = amountt
}