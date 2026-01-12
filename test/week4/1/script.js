function submit(){
    let num = document.getElementById("num").value
    let divnum = document.querySelector(".numm")
    divnum.textContent = ""
    // ลบอันเก่า
    for(let i=1 ; i <= 7 ;i++){
        let ug = document.createElement("h1")
        let pooh = document.createElement("h1")


        ug.textContent = `${num} x ${i}`
        pooh.textContent = num*i

        ug.classList.add("number")
        pooh.classList.add("op")

        divnum.appendChild(ug);
        divnum.appendChild(pooh);
    }

}