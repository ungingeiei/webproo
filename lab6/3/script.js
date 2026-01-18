async function getData(){
    const data = await fetch("data.json")
    return data.json();
}

async function main() {
    let div_contain = document.querySelector(".contain")
    let data = await getData()
    data.forEach((element,index) => {
        let question = document.createElement("p")
        let a = document.createElement("p")
        let b = document.createElement("p")
        let c = document.createElement("p")
        let div_a = document.createElement("div")
        let div_b = document.createElement("div")
        let div_c = document.createElement("div")
        let bt = document.createElement("button")
        question.textContent = `${index+1}. ${element.question}`

        let in_a = document.createElement("input")
        in_a.type = "radio"
        in_a.name = index //ตั้งกรุ๊ป ให้เลือกแค่คำตอบเดียว  ใช้ตัวแปรต้องแวลู่เหมือนกัน
        in_a.value = "a"
        
        a.textContent = element.answers.a

        let in_b = document.createElement("input")
        in_b.type = "radio"
        in_b.name = index
        in_b.value = "b"
        b.textContent = element.answers.b

        let in_c = document.createElement("input")
        in_c.type = "radio"
        in_c.name = index
        in_c.value = "c"
        c.textContent = element.answers.c

        bt.textContent = "submit"
        
        div_a.style.display = "flex"
        div_b.style.display = "flex"
        div_c.style.display = "flex"
        bt.addEventListener("click", ()=>{submit(index,element.answers.correct)})
        div_a.appendChild(in_a)
        div_a.appendChild(a)
        div_b.appendChild(in_b)
        div_b.appendChild(b)
        div_c.appendChild(in_c)
        div_c.appendChild(c)
        div_contain.appendChild(question)
        div_contain.appendChild(div_a)
        div_contain.appendChild(div_b)
        div_contain.appendChild(div_c)
        div_contain.appendChild(bt)

  
    });
}
main()

function submit(index,correct){
    let select = document.querySelector(`input[name="${index}"]:checked`)

    if (select.value === correct){
        alert("correct")
        
    }else{
        alert(`ผิดจ้าาาา ต้องตอบบ ${correct}`)
        return null
    }

}