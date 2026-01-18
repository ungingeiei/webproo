function main(){
    const data = Object.keys(localStorage).map(key => ({ 
    key,
    value: localStorage.getItem(key)
    }));
    console.log(data)
    let new_movie = document.querySelector(".new_movie")
    if (!data.length){
        let div_eiei = document.createElement("div")
        div_eiei.textContent = "ยังไม่มีรายการโปรด"
        new_movie.appendChild(div_eiei)
        div_eiei.classList.add("div_eiei")
    }else{
        data.forEach(element => {
        let div_add = document.createElement("div")
        let name = document.createElement("p")
        let bt = document.createElement("button")


        name.textContent = element.value
        bt.textContent = "ลบ"
        div_add.appendChild(name)
        div_add.appendChild(bt)
        new_movie.appendChild(div_add)
        console.log(new_movie)

        div_add.classList.add("div_add")
        bt.addEventListener("click", ()=>removelocal(element.key)) //ทำให้ปุ่มกดได้แล้วเรียกfn
    });
    }
}
function addlocal(){
    let randomInt = Math.floor(Math.random() * 999); 
    let inp = document.getElementById("inp").value
    localStorage.setItem(randomInt, inp);
    window.location.reload() //ทำให้รีเฟลช
}
function removelocal(inp){
    localStorage.removeItem(inp);
    window.location.reload()
}
function removealllocal(){
    localStorage.clear();
    window.location.reload()
}
main()