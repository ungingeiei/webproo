async function getData(){
    const data = await fetch("data.json")
    return data.json();
}

async function main() {
    const data = await getData() 
    console.log(data)
    const container = document.querySelector("tbody") //พท.สำหรับdivใหญ่
    data.forEach(element => {
        console.log(element)


        //สร้างพท.สำหรับเรียงข้อมูล
        let row = document.createElement("tr")
        let td_Name = document.createElement("td")
        let td_StartDate = document.createElement("td")
        let td_End_Date = document.createElement("td")
        let td_Days = document.createElement("td")
        let td_CompletePercent = document.createElement("td")
        let div_percent = document.createElement("td")
        //ตั้งค่า
        div_percent.style.backgroundColor = "#5097b9"
        div_percent.style.height = "16px"
        div_percent.style.width = `${element.completePercent}px`
        td_CompletePercent.style.width = "130px"
        // td_CompletePercent.style.backgroundColor = "black"

        td_Name.textContent = element.name
        td_StartDate.textContent = element.startDate
        td_End_Date.textContent = element.endDate
        td_Days.textContent = element.Days
        div_percent.textContent = element.completePercent //10% 20%
        div_percent.classList.add("percent") //ตั้งชื่ิclass

        //ใส่
        row.appendChild(td_Name)
        row.appendChild(td_StartDate)
        row.appendChild(td_End_Date)
        row.appendChild(td_Days)
        row.appendChild(td_CompletePercent)
        td_CompletePercent.appendChild(div_percent)
        container.appendChild(row)
    });
    


}
main()