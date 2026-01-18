
async function getData(){
    const data = await fetch("data.json")
    return data.json();
}

async function main() {
    const data = await getData()
    let divtbody = document.querySelector("tbody")
    data.forEach(element => {
        //1สร้าง
        let row = document.createElement("tr")
        let td_name = document.createElement("td")
        let td_startDate = document.createElement("td")
        let td_endDate = document.createElement("td")
        let td_Days = document.createElement("td")
        let td_completePercent = document.createElement("td")
        let div_percent = document.createElement("div")

        //2ตั้งค่า ทุกอย่าง สี ข้อมูล
        td_name.textContent = element.name
        td_startDate.textContent = element.startDate
        td_endDate.textContent = element.endDate
        td_Days.textContent = element.Days

        div_percent.style.background = "#848bda"
        div_percent.style.height = "17px"
         

        // div_percent.textContent = element.completePercent
        div_percent.style.width = `${element.completePercent}%`
        td_completePercent.appendChild(div_percent)
        row.appendChild(td_name)
        row.appendChild(td_startDate)
        row.appendChild(td_endDate)
        row.appendChild(td_Days)
        row.appendChild(td_completePercent)
        

        divtbody.appendChild(row)

    });
    
}
main()