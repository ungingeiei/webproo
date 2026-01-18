function submit(){
    let tbody = document.querySelector("tbody")
    let listt = document.getElementById("list").value
    let num = document.getElementById("num").value
    let select = document.getElementById("select").value
    let datee = document.getElementById("date").value
    let amount = document.getElementById("amount")
    let money = 0;

    let date = document.createElement("td")
    let list = document.createElement("td")
    let div_1 = document.createElement("td") //รายรับ
    let div_2 = document.createElement("td") //รายจ่าย
    let row = document.createElement("tr")
    date.textContent = datee
    list.textContent = listt
    if(select == "1"){
        div_1.textContent = "0"
        div_2.textContent = num
        money = parseInt(amount.textContent) - parseInt(num)
    }else{
        div_1.textContent = num
        div_2.textContent = "0"
        money =  parseInt(amount.textContent) + parseInt(num)
    }
    amount.textContent = money
    row.appendChild(date)
    row.appendChild(list)
    row.appendChild(div_1)
    row.appendChild(div_2)
    tbody.appendChild(row)







}