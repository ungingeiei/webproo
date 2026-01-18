async function getData(){
    const data = await fetch("employees.json")
    return data.json();
}

async function main() {
    let data = await getData()
    let divtbody = document.querySelector("tbody")
    data.forEach(element => {
        console.log(element)
        let row = document.createElement("tr")
        let div_id = document.createElement("td")
        let div_Gender = document.createElement("td")
        let div_Name  = document.createElement("td")
        let div_Position = document.createElement("td")
        let div_Address = document.createElement("td")

        div_id.textContent = element.id
        //div_Gender.textContent = element.Gender
        div_Name.textContent = element.FirstName +" " +element.LastName
        if(element.Gender == "Female"){
            div_Gender.textContent = "F"
        }else{
            div_Gender.textContent = "M"
        }
        div_Position.textContent = element.Position
        div_Address.textContent = element.Address

        row.appendChild(div_id)
        row.appendChild(div_Name)
        row.appendChild(div_Gender)
        row.appendChild(div_Position)
        row.appendChild(div_Address)
        divtbody.appendChild(row)
    });
    
}

main()