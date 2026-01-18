async function getData(){
    const data = await fetch("data.json")
    return data.json();
}
async function main() {
    let data = await getData()
    let box = document.querySelector(".box")
    data.forEach((element, index) => {
        let div_container = document.createElement("div")
        let pic = document.createElement("img")
        let name = document.createElement("h1")
        let physics = document.createElement("h1")
        let maths = document.createElement("h1")
        let english = document.createElement("h1")

        //ตั้งค่า
        name.textContent = `${index+1}. ${element.name}`

        if(element.gender == "Male"){
            pic.src = "img_male.png"
        }else{
            pic.src = "img_female.png"
        }

        physics.textContent = `Physics : ${element.physics}`
        maths.textContent = `Mathmatics : ${element.maths}`
        english.textContent = `English : ${element.english}`

        name.style.fontSize = "20px"
        div_container.classList.add("card") //เพิ่ม class เพื่อไปตกแต่งใน css

        
        div_container.appendChild(pic)
        div_container.appendChild(name)
        div_container.appendChild(physics)
        div_container.appendChild(maths)
        div_container.appendChild(english)

        box.appendChild(div_container)
    });
}
main()